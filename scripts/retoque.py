#!/usr/bin/env python3
"""
Retoque leve de pele: tira espinha e mancha pontual, sem mudar o rosto.

Por que existe: o Vitor pediu para tirar espinhas das fotos (28/10/2026), e uma
edição por IA anterior tinha mudado o rosto dele. Aqui não há IA generativa:
1. acha manchas pequenas mais vermelhas e mais escuras que a pele em volta,
   só dentro do rosto e só em área de pele;
2. preenche cada mancha com a pele vizinha (cv2.inpaint);
3. suaviza de leve a pele (bilateral a 35%), preservando contorno, olhos,
   óculos e barba.

Uso como módulo: retocar(pil) -> pil. Uso direto, para conferir:
  python3 scripts/retoque.py entrada.jpg saida.jpg
"""
import sys

import cv2
import numpy as np
from PIL import Image

_casc = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")


def _rosto(bgr):
    h, w = bgr.shape[:2]
    esc = 900 / max(h, w)
    peq = cv2.resize(bgr, (int(w * esc), int(h * esc)))
    g = cv2.cvtColor(peq, cv2.COLOR_BGR2GRAY)
    faces = _casc.detectMultiScale(g, 1.08, 6, minSize=(40, 40))
    if not len(faces):
        return None
    x, y, fw, fh = max(faces, key=lambda r: r[2] * r[3])
    x, y, fw, fh = [int(v / esc) for v in (x, y, fw, fh)]
    # margem para pegar testa e queixo
    mx, my = int(fw * 0.25), int(fh * 0.35)
    return max(0, x - mx), max(0, y - my), min(w, x + fw + mx), min(h, y + fh + int(fh * 0.25))


def retocar(pil, forca_suave=0.35, lim_a=3.5, lim_l=2.0):
    rgb = np.array(pil.convert("RGB"))
    bgr = cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)
    caixa = _rosto(bgr)
    if caixa is None:
        return pil
    x0, y0, x1, y1 = caixa
    roi = bgr[y0:y1, x0:x1].copy()
    fh = y1 - y0

    # máscara de pele (YCrCb), sem barba escura, olhos e armação
    ycc = cv2.cvtColor(roi, cv2.COLOR_BGR2YCrCb)
    pele = cv2.inRange(ycc, (60, 135, 85), (255, 180, 135))
    pele = cv2.morphologyEx(pele, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    # fora a armação dos óculos (tartaruga): cor muito saturada, com folga
    hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)
    armacao = cv2.inRange(hsv, (0, 115, 40), (40, 255, 255))
    armacao = cv2.morphologyEx(armacao, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
    armacao = cv2.dilate(armacao, np.ones((max(9, fh // 60),) * 2, np.uint8))
    pele = cv2.bitwise_and(pele, cv2.bitwise_not(armacao))

    # manchas: mais vermelhas e mais escuras que a vizinhança
    lab = cv2.cvtColor(roi, cv2.COLOR_BGR2LAB).astype(np.float32)
    L, A = lab[..., 0], lab[..., 1]
    k = max(15, (fh // 18) | 1)
    dA = A - cv2.GaussianBlur(A, (k, k), 0)
    dL = cv2.GaussianBlur(L, (k, k), 0) - L
    cand = ((dA > lim_a) & (dL > lim_l)).astype(np.uint8) * 255
    cand = cv2.bitwise_and(cand, pele)
    n, rot, stats, _ = cv2.connectedComponentsWithStats(cand)
    area_max = (fh * 0.035) ** 2
    manchas = np.zeros_like(cand)
    for i in range(1, n):
        if 6 <= stats[i, cv2.CC_STAT_AREA] <= area_max:
            manchas[rot == i] = 255
    manchas = cv2.dilate(manchas, np.ones((7, 7), np.uint8))
    if manchas.any():
        roi = cv2.inpaint(roi, manchas, max(3, fh // 120), cv2.INPAINT_TELEA)

    # suavização leve só na pele, com borda esfumada
    liso = cv2.bilateralFilter(roi, 9, 40, 9)
    m = cv2.GaussianBlur(pele, (31, 31), 0).astype(np.float32)[..., None] / 255 * forca_suave
    roi = (roi * (1 - m) + liso * m).astype(np.uint8)

    bgr[y0:y1, x0:x1] = roi
    return Image.fromarray(cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB))


if __name__ == "__main__":
    retocar(Image.open(sys.argv[1])).save(sys.argv[2], quality=92)
