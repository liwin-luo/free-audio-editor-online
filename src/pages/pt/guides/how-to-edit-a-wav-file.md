---
title: Como editar um arquivo WAV no navegador
description: Recorte e edite um WAV antes de converter. Quando ficar em PCM de 16 bits, quando um MP3 de 320 kbps basta, e por que MP3 para WAV não devolve qualidade.
tool: mp3-editor
locale: pt
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Um arquivo WAV é o áudio com a compressão do MP3 ainda desligada. Dá para
recortar, aplicar fade e mudar o nível no navegador sem virar MP3 antes. Para
um corte, um fade ou uma mudança de nível, instalar um editor de WAV é mais
ferramenta do que o trabalho pede. Converta uma vez, no fim, se precisar de
um arquivo menor para mandar.

Abrir um WAV num conversor e editar o MP3 depois é o caminho longo. Cada
corte seguinte recodifica um arquivo que já perdeu o detalhe com que você
começou.

## Abra o WAV como ele é

Solte o `.wav` no [editor de MP3](/pt/mp3-editor) ou no
[cortador de áudio](/pt/audio-trimmer). Os dois decodificam na aba. Não há
passo de conversão antes da edição, e nada é enviado.

![voice-memo.wav aberto no editor. O menu de formato está em WAV · sem perdas, então a exportação continua PCM e não vira MP3.](/guides-media/how-to-edit-a-wav-file/pt-01-wav.webp)

Se a página recusar o arquivo, o navegador não conseguiu decodificar esse
WAV. PCM padrão abre. Uma codificação incomum que não toca numa aba comum
também não abre aqui. Esse limite é o decodificador, não um teto de tamanho.

As edições são as mesmas de um MP3:

- Arraste uma região. **Manter seleção** recorta até ela. **Apagar seleção**
  remove. O passo a passo para gravações é
  [como cortar áudio](/pt/guides/how-to-trim-audio).
- **Fade de entrada** e **Fade de saída** em **Ajustar** moldam o começo e o
  fim da exportação, até 5 segundos.
- **Volume** vai de 10% a 200%. Uma gravação de campo muito baixa, que
  precisa de mais, vai para [aumentar volume do MP3](/pt/increase-volume).
- **Velocidade** vai de 0,5× a 2×, e o tom se move com o tempo. Para mover o
  tom e manter a duração, use o [alterador de tom](/pt/pitch-changer).

Uma exportação é um arquivo. Aproxime com o botão **+** e coloque o corte
numa pausa, não no meio de uma palavra.

## Edite, e depois escolha o formato

**WAV** no menu de formato é PCM de 16 bits na taxa de amostragem do próprio
arquivo. Estéreo a 44,1 kHz dá cerca de 10 MB por minuto. Uma música de três
minutos dá cerca de 30 MB. Esse tamanho é áudio sem compressão, não uma
exportação inchada.

Use WAV quando:

- Você vai editar de novo. Ficar em PCM significa que o próximo corte não
  soma outra geração de MP3.
- Alguém pediu WAV: uma DAW, um sampler, um arquivo de imprensa.
- A fonte já era 16 bits e você quer a mesma resolução de volta.

Um WAV de 24 bits ou de 32 bits float sai gravado em 16 bits. A página não
escreve um arquivo de 24 bits. Se essa resolução extra é a razão de você ter
o WAV, faça o trabalho delicado num editor de desktop e fique com a
exportação dele.

**MP3** é o arquivo que você manda.

- **320 kbps** é o ponto em que quase ninguém ouve a diferença em relação ao
  WAV numa escuta casual. Use para a música que você guarda.
- **192 kbps** é o equilíbrio do dia a dia.
- **128 kbps** é para voz. Música aqui soa abafada.

Um WAV de 50 MB cai em torno de 4–5 MB a 192 kbps e em torno de 11 MB a 320
kbps. O número exato segue a duração e a taxa de amostragem. A conversão em
si é a página de [WAV para MP3](/pt/wav-to-mp3), e é o último passo certo
quando a edição já está pronta.

Tags e capa não são copiadas para esse MP3. Adicione depois com o
[editor de tags](/pt/mp3-tag-editor), que só reescreve a ficha e deixa os
bytes de áudio quietos.

## MP3 para WAV não volta o relógio

Decodificar um MP3 para WAV entrega exatamente o que o MP3 já contém, como
PCM de 16 bits, sem perda extra. Não devolve o que o codificador do MP3
jogou fora. Desconfie de qualquer conversor que prometa um upgrade de
qualidade.

A ordem honesta, quando você ainda tem o WAV, é: edite o WAV, exporte MP3
uma vez no fim. A ordem honesta, quando você só tem o MP3, é: decodifique
para WAV se uma ferramenta exigir, edite lá, e comprima uma vez. A página de
[MP3 para WAV](/pt/mp3-to-wav) é essa decodificação. Não é um remaster.

## O que fica no aparelho

O WAV original não é modificado. O download é um arquivo novo. Se você
recarregar a aba, a sessão some, e esse é o ponto de nunca enviar o arquivo.
Um notebook aguenta uma faixa de álbum ou um recado de voz longo. Um arquivo
de longa-metragem pode esgotar a memória da aba. Esse é o momento de levar o
mesmo WAV para um editor de desktop que leia do disco. Quando o arquivo que
você manda é um MP3, [como editar um arquivo MP3](/pt/guides/how-to-edit-an-mp3)
é o mapa de qual edição fica em qual página.
