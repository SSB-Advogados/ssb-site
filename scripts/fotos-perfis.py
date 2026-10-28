#!/usr/bin/env python3
"""
Gera as fotos das páginas de perfil dos sócios (/sobre/<slug>).

Quatro fotos por sócio, todas sérias, no padrão de retrato de advogado:
  topo      retrato grande do topo escuro, 4:5
  ambiente  corpo inteiro no ambiente do escritório, 2:3 sem recorte
  retrato   sentado, 2:3 sem recorte, no bloco "quem conduz"
  detalhe   foto pequena sobreposta ao retrato, 4:5

Regra de espelhamento: igual à dos retratos, espelhada como o escritório
aprovou, EXCETO foto com logotipo aparecendo (o painel do SSB ao fundo).

Escolhas do Vitor em 28/10/2026: topo 3836 (olhando para o lado com a logo
ao fundo) e sentado 3214. A Thayane segue o mesmo critério.

Uso: python3 scripts/fotos-perfis.py
"""
import os

from PIL import Image, ImageOps

ORIGEM = "/Users/vitorsilvino/Desktop/CONTEUDO SSB ADVOGADOS/Fotos - Ensaio - Julho26"
DESTINO = "public/fotos"

# (arquivo, slug, uso, tamanho, espelhar)
FOTOS = [
    ("DSC_38362.jpg", "vitor-silvino", "topo", (1500, 1875), False),  # logo SSB
    ("DSC_27893.jpg", "vitor-silvino", "ambiente", (1000, 1500), True),
    ("DSC_3214.jpg", "vitor-silvino", "retrato", (1000, 1500), True),
    ("DSC_3839.jpg", "vitor-silvino", "detalhe", (600, 750), False),  # logo SSB
    ("DSC_4158.jpg", "thayane-barbosa", "topo", (1500, 1875), False),  # logo SSB
    ("DSC_1717.jpg", "thayane-barbosa", "ambiente", (1000, 1500), True),
    ("DSC_1785.jpg", "thayane-barbosa", "retrato", (1000, 1500), True),
    ("DSC_33153.jpg", "thayane-barbosa", "detalhe", (600, 750), True),
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
    nome = f"{slug}-{uso}-{arquivo[4:8]}"
    recortar(pil, size).save(f"{DESTINO}/{nome}.webp", "WEBP", quality=86, method=6)
    print(nome, "espelhada" if espelhar else "sem espelhar (logo)")
