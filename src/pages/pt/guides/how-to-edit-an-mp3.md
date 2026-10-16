---
title: Como editar um arquivo MP3 no navegador
description: Corte, recorte, aplique fade ou aumente um MP3 sem instalar nada. Qual página faz cada trabalho, e quando exportar WAV para não recodificar duas vezes.
tool: mp3-editor
locale: pt
date: 2026-10-16
layout: ../../../layouts/Guide.astro
---

Editar um MP3 quase sempre é um trabalho de uma lista curta: cortar um
trecho, tirar um silêncio, fazer fade numa ponta, deixar mais alto, mudar a
velocidade, ou corrigir o título que o player mostra. Cada um desses já tem
página. Esta é o mapa, para o arquivo não ser decodificado e recodificado
três vezes no caminho.

O [editor de MP3](/pt/mp3-editor) é o caso geral. Solte o arquivo, faça a
edição e exporte uma vez. O original fica no disco. O arquivo novo é o
download.

## Escolha o trabalho

| Você quer… | Vá aqui |
|---|---|
| Recortar um recado de voz ou tirar um silêncio | [Cortar áudio](/pt/guides/how-to-trim-audio) |
| Ficar com um refrão, ou apagar um pedaço de uma música | [Cortar MP3](/pt/mp3-cutter) |
| Colocar vários arquivos um depois do outro | [Juntar músicas](/pt/audio-joiner) |
| Mover o tom e manter a duração | [Mudar o tom sem mudar a velocidade](/pt/guides/change-pitch-without-changing-speed) |
| Tocar mais rápido ou mais devagar, tom incluído | [Alterar velocidade do áudio](/pt/change-audio-speed) |
| Editar um WAV antes de converter | [Editar um arquivo WAV](/pt/guides/how-to-edit-a-wav-file) |
| Corrigir o título, o artista ou a capa | [Editor de tags MP3](/pt/mp3-tag-editor) |

Se o trabalho são duas ou três coisas pequenas — um corte, um fade, um pouco
de volume — faça no editor de MP3 e exporte uma vez. Abrir uma página nova
para cada controle significa um MP3 novo a cada vez.

## Edite de uma vez

Solte o MP3 no [editor](/pt/mp3-editor). A forma de onda é o arquivo,
decodificado na aba.

Arraste uma região. **Manter seleção** exporta só essa parte. **Apagar
seleção** exporta todo o resto. **Tempos exatos** recebe um início e um fim
em segundos quando o arrasto não é preciso o bastante.

![song-demo.mp3 no editor de MP3. Manter seleção está ativo, uma região do arquivo está marcada, e o formato é MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/pt-01-editor.webp)

Abra **Ajustar** para o resto:

- **Fade de entrada** e **Fade de saída**, até 5 segundos. Eles moldam o
  começo e o fim da exportação. Não fazem crossfade numa junção no meio do
  arquivo.
- **Volume**, de 10% a 200%. Um limitador segura os picos quando você passa
  de 100%, então uma subida modesta fica mais limpa do que um corte duro.
  Ainda vai soar forçado se o arquivo já estava alto.
- **Velocidade**, de 0,5× a 2×. O tom vai junto. Isso não segura o tom quando
  o tempo muda. Para mudar o tom e manter a duração, use o
  [alterador de tom](/pt/pitch-changer) em vez deste controle.
- **Normalizar pico** sobe o arquivo inteiro numa quantidade só, até a
  amostra mais alta ficar logo abaixo do corte. Ele substitui o controle de
  volume. Não faz as partes baixas soarem tão altas quanto as altas.
- **Reverter reprodução** vira a exportação do fim para o começo.

![Ajustar aberto: fade de entrada e de saída em 0.0 s, volume em 100%, velocidade em 1.00×, normalizar pico desmarcado, reverter reprodução desmarcado. O formato continua MP3 · 320 kbps.](/guides-media/how-to-edit-an-mp3/pt-02-adjust.webp)

Reproduza a seleção antes de exportar. Depois escolha o formato.

**MP3 320 kbps** é o padrão do editor, e a escolha certa quando esta
exportação é o arquivo que você vai guardar. **192 kbps** basta para mandar.
**128 kbps** é para voz. **WAV** é a escolha quando esta edição não é a
última.

## Volume, sem chute

Um arquivo que está baixo do começo ao fim tem dois consertos honestos, e
não são o mesmo controle.

[Normalizar áudio](/pt/normalize-audio) mede o pico e aplica o maior ganho
limpo que ainda evita o corte. Use quando você não sabe até onde empurrar.

[Aumentar volume do MP3](/pt/increase-volume) é um multiplicador que você
escolhe, até 400%, com um limitador nos picos. O volume do próprio editor
para em 200%. Use a página dedicada quando 200% não chega. Recue se as partes
altas começarem a bombear. Alto e limpo é melhor do que o máximo.

Nenhum dos dois é igualar o volume para plataformas de streaming. Isso é uma
média mais longa, medida em LUFS, e pertence a uma sessão de masterização.

## O som e a ficha são coisas separadas

Cortar, aplicar fade e aumentar decodificam o MP3 e gravam um novo. Título,
artista, álbum e capa não são o som. Eles vivem num bloco de tags, e o
[editor de tags](/pt/mp3-tag-editor) reescreve esse bloco sem tocar nos bytes
de áudio. Faça a edição do som primeiro. Etiquete o arquivo que você
realmente vai guardar. Etiquetar primeiro e depois exportar um MP3 novo
derruba as tags no caminho.

O editor de tags é só MP3. Ele não processa um álbum em lote, e não carrega
campos incomuns de capítulos de podcast.

## O que este editor não faz

Ele não empilha duas faixas para mixar. [Juntar músicas](/pt/audio-joiner)
coloca os arquivos um depois do outro e pode fazer crossfade na sobreposição.
Não dá dois faders ao mesmo tempo.

Não remove um vocal, não tira uma impressão de ruído e não separa uma música
em stems. Uma página de navegador que prometesse isso estaria descrevendo
outro produto. Para uma timeline, um reparo ou uma segunda faixa, um editor
de desktop continua sendo a ferramenta. Fique aqui quando o trabalho é um
arquivo e uma exportação.
