#!/usr/bin/env python3
"""
Gera as fotos das páginas de perfil dos sócios (/sobre/<slug>).

Por sócio:
  topo      retrato grande do topo escuro, 4:5
  retrato   (opcional) 2:3 sem recorte, na seção de trajetória

Regra de espelhamento: igual à dos retratos, espelhada como o escritório
aprovou, EXCETO foto com logotipo aparecendo (o painel do SSB ao fundo).

Escolhas do Vitor em 28/10/2026: topo dele 3836 (olhando para o lado com a
logo ao fundo); topo da Thayane 4136 (rindo, logo ao fundo). Ambiente,
sentado 3214 e detalhe foram recusados.

Uso: python3 scripts/fotos-perfis.py
"""
import os
import sys

from PIL import Image, ImageOps

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from retoque import retocar  # noqa: E402

ORIGEM = "/Users/vitorsilvino/Desktop/CONTEUDO SSB ADVOGADOS/Fotos - Ensaio - Julho26"
DESTINO = "public/fotos"

# (arquivo, slug, uso, tamanho, espelhar)
FOTOS = [
    ("DSC_38362.jpg", "vitor-silvino", "topo", (1500, 1875), False),  # logo SSB
    ("DSC_29193.jpg", "thayane-barbosa", "topo", (1500, 1875), True),  # escolhida em 30/10
    ("DSC_4439.jpg", "thayane-barbosa", "retrato", (1000, 1250), True),  # terraço, escolhida em 30/10
    ("DSC_4439.jpg", "thayane-barbosa", "topo", (1500, 1875), True),  # topo de Nova Lima (família)
    ("DSC_3839.jpg", "vitor-silvino", "topo", (1500, 1875), False),  # logo SSB; topo de Nova Lima
    ("DSC_2806.jpg", "vitor-silvino", "retrato", (1000, 1250), True),  # sério, escolhido em 28/10
]


def recortar(pil, size, topo=0.15):
    """Largura inteira e altura pela proporção pedida, para nada da foto
    (logo, pés, cabeça) ser cortado na lateral."""
    W, H = pil.size
    ch = min(H, W * size[1] / size[0])
    cw = ch * size[0] / size[1]
    left = (W - cw) / 2
    top = (H - ch) * topo
    return pil.crop((int(left), int(top), int(left + cw), int(top + ch))).resize(size, Image.LANCZOS)


for arquivo, slug, uso, size, espelhar in FOTOS:
    pil = ImageOps.exif_transpose(Image.open(os.path.join(ORIGEM, arquivo))).convert("RGB")
    if espelhar:
        pil = ImageOps.mirror(pil)
    # Retoque de pele (espinhas) nas fotos do Vitor, a pedido dele (28/10/2026)
    if slug == "vitor-silvino":
        pil = retocar(pil)
    nome = f"{slug}-{uso}-{arquivo[4:8]}"
    recortar(pil, size).save(f"{DESTINO}/{nome}.webp", "WEBP", quality=86, method=6)
    print(nome, "espelhada" if espelhar else "sem espelhar (logo)")
