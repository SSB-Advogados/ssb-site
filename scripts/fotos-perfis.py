#!/usr/bin/env python3
"""
Gera as fotos das páginas de perfil dos sócios (/sobre/<slug>).

Reaproveita o alinhamento pelos olhos de recortar-retratos.py para o retrato
vertical, e faz um recorte horizontal centrado no rosto para a foto de trabalho.

Regra de espelhamento: igual à dos retratos, espelhada como o escritório
aprovou, EXCETO foto com logotipo aparecendo. As fotos de perfil têm o painel
do SSB ao fundo e a do Vitor no notebook mostra a maçã da Apple: nenhuma
dessas é espelhada.

A foto de perfil do Vitor (3836, olhando para o lado com a logo ao fundo) é a
que ele escolheu. A da Thayane (4136) é a equivalente dela no mesmo painel.

Uso: python3 scripts/fotos-perfis.py
"""
import importlib.util
import os

from PIL import Image, ImageOps

aqui = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("rr", os.path.join(aqui, "recortar-retratos.py"))
rr = importlib.util.module_from_spec(spec)
spec.loader.exec_module(rr)

# (arquivo, slug, sufixo, tamanho, espelhar)
FOTOS = [
    ("DSC_38362.jpg", "vitor-silvino", "perfil", (1000, 1250), False),  # logo SSB
    ("DSC_2028.jpg", "vitor-silvino", "trabalho", (1600, 1000), False),  # logotipo no notebook
    ("DSC_4136.jpg", "thayane-barbosa", "perfil", (1000, 1250), False),  # logo SSB
    ("DSC_1638.jpg", "thayane-barbosa", "trabalho", (1600, 1000), True),
]


def vertical_inteira(pil, destino, size):
    """Largura inteira, para a logo do painel não ser cortada."""
    W, H = pil.size
    ch = W * size[1] / size[0]
    top = max(0, (H - ch) * 0.15)
    pil.crop((0, int(top), W, int(top + ch))).resize(size, Image.LANCZOS).save(
        destino, "WEBP", quality=86, method=6
    )


def horizontal(pil, destino, size):
    W, H = pil.size
    cx, _, _ = rr.medir(pil)
    cw = W
    ch = cw * size[1] / size[0]
    if ch > H:
        ch, cw = H, H * size[0] / size[1]
    left = max(0, min(W - cw, cx * W - cw / 2))
    top = max(0, (H - ch) * 0.35)
    pil.crop((int(left), int(top), int(left + cw), int(top + ch))).resize(
        size, Image.LANCZOS
    ).save(destino, "WEBP", quality=86, method=6)


for arquivo, slug, sufixo, size, espelhar in FOTOS:
    pil = ImageOps.exif_transpose(Image.open(os.path.join(rr.FOTOS, arquivo))).convert("RGB")
    if espelhar:
        pil = ImageOps.mirror(pil)
    nome = f"{slug}-{sufixo}-{arquivo[4:8]}"
    if size[0] < size[1]:
        vertical_inteira(pil, f"{rr.DESTINO}/{nome}.webp", size)
    else:
        horizontal(pil, f"{rr.DESTINO}/{nome}.webp", size)
    print(nome, "espelhada" if espelhar else "sem espelhar")
