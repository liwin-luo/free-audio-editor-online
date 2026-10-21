---
title: Converter áudio em MIDI online - um instrumento, 3 minutos
description: Transforme uma melodia cantarolada, uma voz ou um piano solo em arquivo MIDI no navegador. O que funciona, o que sai errado e o que há no .mid. Sem enviar nada.
tool: audio-to-midi
locale: pt
date: 2026-10-21
layout: ../../../layouts/Guide.astro
sources:
  - label: Basic Pitch — o conversor de áudio para MIDI de código aberto do Spotify
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

Converter áudio em MIDI é devolver uma gravação para notas: o tom de cada nota, quando começou, quanto durou e com que força foi tocada. Com essas notas no seu DAW, você corrige uma nota errada, troca o instrumento ou quantiza o tempo em vez de gravar de novo.

A página [Áudio para MIDI](/pt/audio-to-midi) faz isso no navegador. Ela roda o modelo Basic Pitch, do Spotify, no seu aparelho e escreve um arquivo .mid. O áudio nunca é enviado.

## O que converte bem e o que nunca vai

O Basic Pitch é feito para um instrumento por vez: uma melodia sozinha, uma voz, um piano solo. Com isso, as notas voltam parecidas com o que você tocou.

Uma mixagem completa é outro trabalho. O modelo ouve todos os instrumentos em um canal (o estéreo vira mono antes), então uma gravação densa vira notas demais ou de menos. A bateria não tem tom e normalmente não gera nada. Aqui não há separação de stems: entra um arquivo, sai uma trilha de notas.

Se você queria só o tom ou o BPM, não precisa de MIDI. O [Tom e BPM](/pt/key-bpm-finder) lê esses dois números sem escrever arquivo.

## Converta o arquivo

1. Abra o [Áudio para MIDI](/pt/audio-to-midi).
2. Solte um instrumento: um MP3, WAV, M4A ou um vídeo com a parte que quer. Acima de 3 minutos é recusado. Corte antes no [Cortar áudio](/pt/audio-trimmer) e volte.
3. A primeira conversão baixa o modelo deste site, menos de 1 MB. O navegador guarda a cópia, então a espera acontece uma vez só.
4. Veja o número de notas antes de baixar. Uma melodia cantarolada deve chegar perto das notas que você cantou. Centenas de notas numa melodia curta significam mais de um instrumento na gravação, e o arquivo sai uma bagunça.
5. Clique em baixar e o .mid é salvo no aparelho.

Não há prévia de áudio na página. As notas aparecem em texto; a primeira vez que você as ouve é no seu DAW. Funciona em Chrome, Edge, Firefox e Safari atuais; num celular com pouca memória a conversão pode falhar, e um clipe mais curto geralmente passa.

## O que tem dentro do .mid

Uma trilha, MIDI tipo 0. Cada nota traz um tom entre 21 e 108 (A0 a C8 de um piano), um início, uma duração e uma força. A marca de andamento é 120 BPM: faz os tempos das notas coincidirem com os segundos da gravação. Esse 120 não é o andamento da sua música.

A trilha começa com um piano General MIDI para o DAW ter um som ao importar. Não é uma gravação do seu instrumento original; troque o som depois que o arquivo chegar.

Duas coisas não vão dentro: pitch bends, então um glissando cantado chega como nota fixa no tom final; e partitura. Nada neste site produz partitura.

## Depois de baixar

Arraste o .mid para GarageBand, Logic, Ableton ou qualquer DAW que leia MIDI. Os passos de sempre: trocar o piano General MIDI por um som de verdade, corrigir a nota ou duas que o modelo ouviu errado e quantizar se o tempo fugir.

Se a gravação está boa e só o tom está errado, mudar o tom do áudio original, sem criar notas, é o [Alterador de tom](/pt/pitch-changer).

Se você usa Logic e procurava o comando de áudio para MIDI dele: esta página é a versão de navegador, para quando o Logic não está aberto. O arquivo gerado depois entra num projeto do Logic como qualquer região MIDI.

## Erros comuns

**Converter a música inteira e esperar trilhas separadas.** A saída é uma trilha de notas tocadas pela mixagem inteira. Stems são outra ferramenta.

**Julgar o resultado só de ouvido.** O número de notas na página é a checagem rápida de qualidade. Número absurdo, arquivo absurdo.

**Colocar uma regravação do alto-falante.** Gravar a música com o celular no ambiente soma o ambiente, e as duas fontes viram transcrição. Converta o arquivo de áudio, não uma regravação.

**Esperar o andamento da música no arquivo.** A marca de 120 BPM existe para os tempos das notas coincidirem com os segundos. O clique do seu DAW não segue a música; leia o andamento real antes no [Tom e BPM](/pt/key-bpm-finder).
