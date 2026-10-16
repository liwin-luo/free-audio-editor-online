---
title: MP4 para MP3 — converta o vídeo no navegador
description: Passe um MP4, WebM ou MOV para MP3 sem enviar o vídeo. Qual bitrate escolher, e quando AC3 ou DTS não abrem.
tool: mp4-to-mp3
locale: pt
date: 2026-10-15
layout: ../../../layouts/Guide.astro
---

Um vídeo de aula ou de show gravado no celular fica pesado porque carrega
imagem junto com o som. Para ouvir no carro, ou com a tela apagada, a trilha
basta. Converter MP4 para MP3 é ficar com essa trilha e descartar a imagem.

O conversor comum manda o vídeo inteiro para o servidor de outra pessoa. Num
arquivo de centenas de megabytes isso demora, e o arquivo deixa de estar só no
seu aparelho. O navegador que você já tem lê o MP4 e grava o MP3 no mesmo
lugar.

## O que esta página faz

Abra o [conversor de MP4 para MP3](/pt/mp4-to-mp3). Ele converte a trilha
inteira. Não corta um pedaço do vídeo. Se você só quer um minuto, converta
primeiro e depois leve o MP3 ao [cortador de áudio](/pt/audio-trimmer).

A página também não busca vídeo no YouTube, no TikTok nem em outro site. O
arquivo precisa já estar no celular ou no computador.

O vídeo não é enviado. O codificador (lamejs) vem com este site e só é
carregado ao exportar um MP3. Seu arquivo não sai do aparelho.

## Os passos

1. Arraste o MP4 para a página, ou clique para procurar. WebM e MOV com uma
   trilha de áudio comum funcionam do mesmo jeito. Um M4A também entra: não há
   imagem para tirar.
2. Quando o arquivo abre, o menu de formato está em **MP3 · 320 kbps**. Mude se
   quiser outra taxa.
3. Clique em **Converter para MP3**. O download começa no seu aparelho.

![A página de MP4 para MP3 antes de abrir um arquivo. Só aparece a área para soltar o vídeo.](/guides-media/convert-video-to-mp3/pt/drop.webp)

![Com o vídeo aberto, o formato fica em MP3 · 320 kbps e o botão diz Converter para MP3.](/guides-media/convert-video-to-mp3/pt/ready.webp)

Embaixo da área de soltar o arquivo aparece “até cerca de uma hora” e uma lista
de formatos de áudio. Essa frase é a mesma nas outras ferramentas. Aqui, um
vídeo longo é limitado pela memória do aparelho, não por essa frase.

No mesmo menu está **WAV · sem perdas**. Escolha WAV se você ainda vai cortar
ou aumentar o volume e quer gravar o MP3 uma vez só, no fim. Codificar duas
vezes em MP3 é o que tira detalhe. [Extrair áudio](/pt/extract-audio) é o mesmo
motor, já com WAV selecionado.

A resolução não muda o tempo. Um 4K e um vídeo pequeno com a mesma trilha
levam o mesmo tempo, porque a imagem não é processada. O limite é a memória do
aparelho, não um teto de megabytes da página.

## Qual bitrate deixar

- **128 kbps** para voz: aula, reunião, recado filmado. Em música dá para
  ouvir, e soa um pouco opaca. Serve quando o arquivo precisa ficar pequeno.
- **192 kbps** para música que você vai escutar de verdade. Em fone comum,
  quase ninguém separa isso de uma taxa mais alta.
- **320 kbps** é o que a página marca ao abrir o arquivo, e é o teto do MP3.
  Deixe assim se a gravação está limpa, ou se alguém pediu o melhor MP3.
  Continua com perda. Um show filmado no microfone do celular não vira tomada
  de estúdio porque você escolheu 320.

## Quando o navegador não consegue

Funciona se o navegador já reproduz o áudio daquele arquivo. Na prática: AAC
dentro de MP4 e MOV, e Opus ou Vorbis dentro de WebM. Chrome, Firefox e Safari
leem esses.

Não funciona com trilhas que o navegador não traz:

- **AC3 (Dolby Digital)**, comum em DVD e em alguns MKV ou MP4 baixados.
- **DTS**, o outro codec de cinema nesses mesmos discos.
- Um vídeo que, aberto numa aba normal, mostra imagem e fica em silêncio.
  Essa trilha não dá para ler aqui.

Uma página que não envia o arquivo não pode prometer todos os formatos. Para
esses casos, o ffmpeg no seu próprio computador mantém o arquivo em casa e
acrescenta os decodificadores. Um site que aceite o envio também serve, se
você decidiu que esse vídeo pode sair do aparelho.

O resultado é um áudio normal. Toca no carro, num app de podcast ou numa caixa
que não abre vídeo. A imagem sai de propósito: esta ferramenta não coloca o
som de volta dentro de um MP4 novo.
