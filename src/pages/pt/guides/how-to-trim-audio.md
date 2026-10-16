---
title: Como cortar áudio online (grátis, sem enviar)
description: Corte um recado de voz, um podcast ou uma gravação no navegador. Fique com um trecho ou apague um silêncio, e exporte MP3 ou WAV. O arquivo não é enviado.
tool: audio-trimmer
locale: pt
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Cortar áudio é ficar com um trecho da gravação e descartar o resto: o
silêncio antes de um recado de voz, o ar morto depois de uma resposta de
podcast, a parte de uma reunião que você realmente precisa mandar. Recortar,
aqui, é a mesma operação. Você marca a região que fica.

Isso não é a mesma coisa que deixar uma música só no refrão. Os controles se
parecem. A decisão, não. Para uma música, a página é o
[cortador de MP3](/pt/mp3-cutter).

## O que você precisa

- O arquivo. MP3, WAV, M4A, FLAC e OGG abrem se o seu navegador já os
  reproduz.
- O [cortador de áudio](/pt/audio-trimmer). Ele roda na aba. Nada é enviado.
- Cerca de um minuto.

## Corte o arquivo

Solte o arquivo no cortador, ou clique para escolher. A forma de onda aparece
na hora. Não há barra de envio, porque o arquivo não sai do aparelho.

![O cortador de áudio antes de abrir um arquivo. Na tela só aparece a área para soltar o arquivo.](/guides-media/how-to-trim-audio/pt-01-drop.webp)

Arraste sobre a forma de onda para marcar um trecho. O tempo abaixo do botão
de reproduzir mostra a posição até o centésimo de segundo. Se o arrasto ficar
grosso demais, abra **Tempos exatos** e digite o início e o fim em segundos.

Aperte reproduzir. Toca a seleção, não o arquivo inteiro. Ajuste as pontas
até o início cair na primeira palavra e o fim depois da última, não no meio
de nenhuma das duas.

![Manter seleção está ativo. A região marcada é a que será exportada, e o formato é MP3 · 192 kbps.](/guides-media/how-to-trim-audio/pt-02-keep.webp)

## Ficar com o trecho, ou apagar um buraco

Dois modos, e cada um responde a uma frase diferente:

- **Manter seleção** — a exportação é só a parte marcada. Serve para reduzir
  um recado de voz ao que importa, ou para tirar uma resposta de uma gravação
  longa.
- **Apagar seleção** — a exportação é tudo menos a parte marcada. Serve para
  tirar o silêncio do começo, ou uma pausa no meio. Um corte no meio junta os
  dois lados com um corte seco.

![Apagar seleção está ativo, e o silêncio do começo é a região marcada. A exportação fica com tudo que está fora dessa marca.](/guides-media/how-to-trim-audio/pt-03-delete.webp)

Uma exportação é um arquivo. O cortador não divide uma gravação em vários
downloads de uma vez. Se você precisa de três clipes, selecione e exporte um
de cada vez.

Um fade em **Ajustar** suaviza o começo e o fim do que você exporta. Ele não
faz um crossfade no ponto em que os dois lados de um buraco apagado se
encontram. Essa junção é um corte seco. Se estalar, exporte as duas partes
separadas e una com um crossfade curto em [juntar músicas](/pt/audio-joiner).

Para um trecho só, um fade de 0,1–0,3 segundo basta para o clipe não começar
nem terminar num estalo. O final de uma música é outra decisão, e se faz no
[cortador de MP3](/pt/mp3-cutter).

## Exportar

O cortador começa em **MP3 192 kbps**. Mude no menu de formato antes de
clicar em **Exportar**:

- **MP3 128 kbps** basta para voz. Música aqui já soa abafada.
- **MP3 192 kbps** é o padrão certo para um arquivo misto que você vai mandar
  uma vez.
- **WAV** é PCM de 16 bits na taxa de amostragem do próprio arquivo. Use
  quando for editar de novo. Exportar MP3 a partir de um MP3 joga fora um
  pouco mais de detalhe a cada vez.

O download começa no navegador. O arquivo original no disco não muda.

## No celular

A mesma página funciona no Safari e no Chrome do celular. A forma de onda
aceita o toque, e a barra de exportar fica presa embaixo. Uma gravação longa
é limitada pela memória do celular, não por uma conta. Um notebook atual
aguenta cerca de uma hora. O celular, menos.

## O que cortar não resolve

Cortar tira tempo. Não tira ruído, não separa uma voz da música e não deixa
alto um take que está baixo do começo ao fim. O volume em **Ajustar** vai de
10% a 200%. Uma gravação baixa no arquivo inteiro pede
[aumentar volume do MP3](/pt/increase-volume), que chega a 400% com um
limitador, ou [normalizar áudio](/pt/normalize-audio), que sobe o arquivo até
o pico mais alto ficar logo abaixo do corte.

Se o próximo passo é uma música e não uma gravação, vá para o
[cortador de MP3](/pt/mp3-cutter). O mapa maior está em
[como editar um arquivo MP3](/pt/guides/how-to-edit-an-mp3).
