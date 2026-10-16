---
title: Como mudar o tom sem mudar a velocidade
description: Suba ou desça uma música ou uma voz em semitons e mantenha a mesma duração. Velocidade é outro controle — ela muda o tamanho, e o tom vai junto.
tool: pitch-changer
locale: pt
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Mudar o tom de uma música passa ela para outro tom. Mudar a velocidade deixa
o arquivo mais curto ou mais longo, e o tom vai junto, como um disco que gira
na velocidade errada. São dois controles. Esta página é o que deixa a duração
quieta.

## Qual controle você quer de fato

| Você quer | O que acontece | Use |
|---|---|---|
| A mesma música, num tom mais fácil, com a mesma duração | O tom se move, a duração fica | [Alterador de tom](/pt/pitch-changer) |
| Uma aula na metade do tempo, ou um riff na metade da velocidade | A duração muda, e o tom vai junto | [Alterar velocidade do áudio](/pt/change-audio-speed) |
| O som lento, grave e lavado | A velocidade cai e entra uma cauda de reverb | [Slowed + reverb](/pt/slowed-reverb) |

O alterador de velocidade não é time-stretch. Ele não toca o arquivo mais
rápido e segura o tom original. Em 2× o áudio fica cerca de uma oitava mais
agudo e dura a metade. Em 0,5× fica cerca de uma oitava mais grave e dura o
dobro. Se esse é o som que você queria, pare aqui e use aquela página. Se
você queria mudar o tom e manter o tempo, fique nesta.

## Mude o tom

Abra o [alterador de tom](/pt/pitch-changer) e solte um MP3, WAV, M4A ou
qualquer outro arquivo que o seu navegador já reproduza. O arquivo fica no
aparelho.

O controle **Tom** vai de **−12** a **+12** semitons, de um em um.

- **+12** é uma oitava acima. **−12** é uma oitava abaixo. **0** é o arquivo
  como está.
- Alguns semitons é a faixa útil para cantar em outro tom, ou para levar uma
  frase falada a outra voz sem acelerar as palavras.
- Passados uns 7 semitons o som fica mais fino e metálico. É o limite deste
  alterador, não uma opção que dá para desligar. Uma mix densa mostra isso
  antes de uma voz só ou de um instrumento só.

![song-demo.mp3 no alterador de tom. O controle Tom marca +3 st, três semitons acima, e a duração do arquivo não muda.](/guides-media/change-pitch-without-changing-speed/pt-01-pitch.webp)

Aperte reproduzir. O tom novo está na duração original. Depois exporte MP3 ou
WAV.

## Deixe Velocidade em 1.00×

A página de tom também tem um controle de **Velocidade** dentro de
**Ajustar**, de 0,5× a 2×. Deixe em **1.00×**.

![Ajustar está aberto na mesma página. Tom continua em +3 st e Velocidade em 1.00×. Volume em 100%, os dois fades em 0.0 s, e normalizar pico desligado.](/guides-media/change-pitch-without-changing-speed/pt-02-speed.webp)

Se você mexer, duas coisas acontecem ao mesmo tempo. O arquivo fica mais
curto ou mais longo, e o tom se move com essa mudança de velocidade. O
controle de semitons move o tom de novo por cima. Isso é outra edição, não a
desta página.

O controle de tom não entra dentro de uma mix. Ele desloca todo som do
arquivo na mesma quantidade. Não tira o vocal e deixa a banda onde estava.

## Exportar, e o que a mudança não faz

**WAV** guarda o áudio já alterado como PCM de 16 bits, e é o arquivo certo se
você vai editar de novo. **MP3 192** ou **320 kbps** é o arquivo para mandar.
Exportar MP3 a partir de um MP3 recodifica uma vez. Para ensaiar um cover,
tanto faz. Para um master, exporte WAV.

Mudar o tom não libera os direitos de uma gravação. Uma faixa subida alguns
semitons ainda pode ser reivindicada. Mude o tom para conseguir cantar.
Publique música sobre a qual você tem direitos.

O arquivo original no disco não é modificado. Se você recarregar a aba, a
sessão some, porque nada foi guardado. Se a mudança de tom é um passo de uma
edição maior, comece em
[como editar um arquivo MP3](/pt/guides/how-to-edit-an-mp3) e exporte uma vez.
