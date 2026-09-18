#!/usr/bin/env python3
"""
Recorta os retratos dos sócios alinhando pela linha dos olhos.

Por que existe: recorte feito no olho gera desalinhamento que ninguém
consegue nomear, só sente. Foi o que aconteceu antes, com um dos retratos
20 pontos percentuais mais baixo que os outros dois e o peito cortado.

Como funciona: detecta o rosto em cada original, calcula o recorte que põe
a linha dos olhos e o tamanho do rosto nos mesmos valores para os três, e
confere o resultado ao final.

Requer: pip3 install "opencv-python-headless<5" Pillow
Uso: python3 scripts/recortar-retratos.py
"""
import glob
import json
import os

import cv2
import numpy as np
from PIL import Image, ImageOps

FOTOS = "/Users/vitorsilvino/Desktop/CONTEUDO SSB ADVOGADOS/Fotos - Ensaio - Julho26"
MAPA = "/private/tmp/claude-501/-Users-vitorsilvino/557175b1-c0c5-4dde-bc6d-c7ced9c891c2/scratchpad/folhas/mapa.json"
DESTINO = "public/fotos"

# Alvos comuns aos três. Rosto menor e olhos mais altos deixam mais corpo
# no quadro, que é o que faz as mãos aparecerem.
ALVO_ROSTO = 0.205
ALVO_OLHOS = 0.325

# Espelhadas, como o escritório aprovou. A regra não vale para foto com
# logotipo aparecendo: espelhada, a marca fica ilegível.
ESPELHAR = True

RETRATOS = [(60, "vitor-silvino"), (15, "thayane-barbosa"), (118, "andreza-santos")]

casc = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")


def medir(pil):
    s = pil.copy()
    s.thumbnail((900, 900))
    sw, sh = s.size
    g = cv2.cvtColor(np.array(s), cv2.COLOR_RGB2GRAY)
    faces = casc.detectMultiScale(g, 1.08, 7, minSize=(int(sw * 0.06), int(sw * 0.06)))
    if not len(faces):
        return None
    x, y, fw, fh = max(faces, key=lambda r: r[2] * r[3])
    return (x + fw / 2) / sw, (y + fh * 0.40) / sh, fh / sh


def gerar(pil, nome, size):
    W, H = pil.size
    medida = medir(pil)
    if medida is None:
        raise SystemExit(f"{nome}: rosto nao detectado, nao da para alinhar")
    cx, olhos, rosto = medida

    ch = (rosto * H) / ALVO_ROSTO
    cw = ch * (size[0] / size[1])
    if cw > W:
        cw, ch = W, W * (size[1] / size[0])
    if ch > H:
        ch, cw = H, H * (size[0] / size[1])

    top = max(0, min(H - ch, olhos * H - ALVO_OLHOS * ch))
    left = max(0, min(W - cw, cx * W - cw / 2))

    pil.crop((int(left), int(top), int(left + cw), int(top + ch))).resize(
        size, Image.LANCZOS
    ).save(f"{DESTINO}/{nome}.webp", "WEBP", quality=88, method=6)


def main():
    mapa = json.load(open(MAPA))
    for slug in [s for _, s in RETRATOS]:
        for antigo in glob.glob(f"{DESTINO}/{slug}-*.webp"):
            os.remove(antigo)

    for idx, slug in RETRATOS:
        arquivo = mapa[str(idx)]
        pil = ImageOps.exif_transpose(
            Image.open(os.path.join(FOTOS, arquivo))
        ).convert("RGB")
        if ESPELHAR:
            pil = ImageOps.mirror(pil)
        sufixo = arquivo.split(".")[0].replace("DSC_", "")
        gerar(pil, f"{slug}-{sufixo}b", (1000, 1250))
        gerar(pil, f"{slug}-{sufixo}b-q", (640, 640))
        print(f"{slug}-{sufixo}b  ({arquivo})")

    print("\nVerificacao do que foi gravado:")
    for arq in sorted(f for f in os.listdir(DESTINO) if f.endswith("b.webp")):
        pil = Image.open(os.path.join(DESTINO, arq)).convert("RGB")
        w, h = pil.size
        g = cv2.cvtColor(np.array(pil), cv2.COLOR_RGB2GRAY)
        faces = casc.detectMultiScale(g, 1.08, 7, minSize=(int(w * 0.06), int(w * 0.06)))
        x, y, fw, fh = max(faces, key=lambda r: r[2] * r[3])
        print(
            f"  {arq:30} olhos {(y + fh * 0.40) / h * 100:5.1f}%"
            f"  rosto {fh / h * 100:5.1f}%"
            f"   (alvo {ALVO_OLHOS * 100:.1f}% e {ALVO_ROSTO * 100:.1f}%)"
        )


if __name__ == "__main__":
    main()
