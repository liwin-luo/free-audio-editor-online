import type { Catalog } from './types';

export const pt: Catalog = {
  ui: {
    skip: 'Pular para o conteúdo',
    logoHome: 'Free Audio Editor — início',
    tools: 'Ferramentas',
    language: 'Idioma',
    theme: 'Alternar modo escuro',
    navMain: 'Principal',
    navAbout: 'Sobre',
    footerBlurb:
      'Ferramentas de áudio online e grátis que rodam inteiramente no seu navegador. Seus arquivos nunca são enviados — edição de áudio feita para respeitar sua privacidade.',
    share: 'Compartilhar',
    fullscreen: 'Tela cheia',
    shareOn: 'Compartilhar no {name}',
    copyLink: 'Copiar link',
    copied: 'Copiado',
    about: 'Sobre',
    privacy: 'Privacidade',
    status: 'Status',
    guides: 'Guias',
    rights: 'Nenhum arquivo sai do seu aparelho.',
    clientSide: 'Processamento 100% no navegador',
    contact: 'Contato',
    contactBody: 'Dúvidas sobre uma ferramenta, uma correção ou um pedido de privacidade? Escreva para {email}. Lemos todas as mensagens.',
    contactPrivacy: 'Para saber como arquivos e comentários são tratados, consulte a {privacy}.',
    privacyPolicyLabel: 'política de privacidade',
    cookieBody:
      'Cookies opcionais são usados pelo widget de comentários e pelo Microsoft Clarity, que registra como você usa a página. As estatísticas agregadas não usam cookies. Este site não mostra anúncios.',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar opcionais',
    cookiePolicy: 'Política de privacidade',
    trustMethod: 'Como testamos',
    trustFree: 'Grátis, sem cadastro',
    trustClean: 'Sem marca d\'água',
    trustOffline: 'Offline depois de abrir',
    faqHeading: 'Perguntas frequentes',
    toolFaq: 'Perguntas sobre {name}',
    related: 'Ferramentas relacionadas',
    openTool: 'Abrir {name}',
    allTools: 'Todas as ferramentas de áudio',
    browseToolkit: 'Ver todas as ferramentas',
    home: 'Início',
    howTo: 'Como usar: {name}',
    whyUs: 'Por que usar {name}',
    whyPrivacy: 'Privado por padrão: seu áudio nunca sai desta aba. Sem upload, sem conta e sem marca de água.',
    whyPrecision: 'Preciso a 0,01 s: ajuste os limites, siga a régua e ouça exatamente o trecho que salvar.',
    whyMobile: 'Feito para o celular: apare onde estiver; nada para instalar.',
    ogAlt: 'Free Audio Editor — edite áudio online, nada é enviado',
    schemaOs: 'Qualquer (no navegador)',
    schemaBrowser: 'Precisa de um navegador moderno com suporte a Web Audio',
    features: [
      'Cortar, recortar e juntar áudio',
      'Volume, normalizar, velocidade e reverb',
      'Reproduzir ao contrário e gravar voz',
      'Converter trilhas de vídeo para MP3 ou WAV',
      'Exportar MP3, WAV e toque M4R para iPhone',
    ],
    formats: {
      'mp3-320': 'MP3 · 320 kbps',
      'mp3-192': 'MP3 · 192 kbps',
      'mp3-128': 'MP3 · 128 kbps',
    'mp3-96': 'MP3 · 96 kbps',
    'mp3-64': 'MP3 · 64 kbps',
      wav: 'WAV · sem perdas',
      m4r: 'M4R · toque de iPhone',
      m4a: 'M4A · AAC',
    },
    categories: {
      cut: 'Cortar e recortar',
      convert: 'Converter e comprimir',
      join: 'Juntar e mixar',
      edit: 'Editar e reparar',
      effects: 'Efeitos criativos',
      record: 'Gravar e analisar',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — até cerca de uma hora',
    dropLocal: 'Processado no aparelho — seu arquivo não sai desta aba',
    formatsMore: ' e mais',
    etaModel: 'na primeira vez o modelo é baixado; depois, cerca do tempo do áudio',
    limitTenMin: 'até 10 minutos',
    limitThreeMin: 'até 3 minutos',
    limitRingtone: 'até 40 segundos',
    chipText: 'Texto',
    zoomOut: 'Diminuir zoom',
    zoomIn: 'Aumentar zoom',
    loadDifferent: 'Carregar outro arquivo',
    startOver: 'Começar de novo',
    waveform: 'Forma de onda. Arraste para selecionar um trecho.',
    play: 'Reproduzir seleção',
    pause: 'Pausar',
    hintSelect: 'Arraste na forma de onda para selecionar · Espaço para reproduzir',
    hintTrim: 'Arraste as pontas para mudar o trecho. Reproduzir ouve só esse trecho.',
    changeFile: 'Trocar arquivo',
    selectAll: 'Selecionar tudo',
    playBtn: 'Reproduzir',
    chMono: 'Mono',
    chStereo: 'Estéreo',
    chMany: '{n} canais',
    hintConvert: 'Espaço para reproduzir · nada é enviado',
    hintSilence: 'As pausas mais longas que o mínimo saem na exportação. Respirações curtas ficam.',
    reverse: 'Reverter reprodução',
    normalize: 'Normalizar pico',
    speed: 'Velocidade',
    speedPitch: 'O tom acompanha a velocidade.',
    tempoPitch: 'O tom fica no lugar.',
    pitch: 'Tom',
    pitchLength: 'A duração fica igual.',
    bass: 'Graves',
    treble: 'Agudos',
    mid: 'Médios',
    eqPresetFlat: 'Plano',
    eqPresetRock: 'Rock',
    eqPresetPop: 'Pop',
    eqPresetHiphop: 'Hip-hop',
    eqPresetClassical: 'Clássica',
    eqPresetVocal: 'Vocal',
    cutoff: 'Corte',
    volume: 'Volume',
    gainOriginal: '100% é o volume original.',
    reverb: 'Reverb',
    compress: 'Comprimir',
    echoDelay: 'Atraso',
    echoFeedback: 'Repetições',
    distort: 'Intensidade',
    panDepth: 'Profundidade',
    panRate: 'Taxa',
    circle: 'Círculo',
    metroBpm: 'BPM',
    metroMeter: 'Compasso',
    metroBars: 'Compassos',
    metroPlay: 'Tocar',
    metroStop: 'Parar',
    keyTonic: 'Tom',
    keyMajor: 'maior',
    keyMinor: 'menor',
    keyUnread: 'Não dá para ler',
    keyCaveat: 'Ritmo livre, fala, ruído da sala e um relativo maior ou menor podem trocar.',
    silenceThreshold: 'Limiar',
    silenceGap: 'Pausa mínima',
    silenceRemove: 'Vai remover cerca de {time} de silêncio',
    silenceKeepFile: 'Nada passa do limiar, então a exportação mantém o arquivo inteiro',
    voiceHigh: 'Agudo',
    voiceDeep: 'Grave',
    voiceRobot: 'Robô',
    voiceRadio: 'Rádio',
    voiceGhost: 'Fantasma',
    hintVoice: 'Toque em um preset para ouvir e depois exporte. Os presets se substituem, não se somam.',
    tapTempoTap: 'Bater no ritmo',
    tapTempoReset: 'Zerar',
    tapTempoHint: 'Acompanhe a música batendo. O número se firma após umas quatro batidas; 2,5 s sem bater recomeça a contagem.',
    tapTempoBeats: '{n} batidas',
    noiseStrength: 'Intensidade',
    noiseExport: 'A redução acontece na exportação. O modelo de 150 KB é carregado uma vez.',
    denoiseProgress: 'Removendo o ruído… {p} %',
    hintNoise: 'A intensidade vale na exportação. Um modelo de 150 KB é carregado na primeira vez.',
    loopTimes: 'Repetições',
    loopCrossfade: 'Emenda',
    loopExport: 'A exportação fica com cerca de {time}',
    loopTooLong: 'Esse loop passa de 10 minutos. Diminua as repetições ou encurte a seleção.',
    splitParts: 'Partes',
    splitExport: '{n} arquivos, cerca de {time} cada',
    splitTooShort: 'Este arquivo é mais curto que o número de partes.',
    crushBits: 'Bits',
    crushHold: 'Segurar',
    crushExport: '{bits} bits, segura a cada {hold} amostras',
    monoExport: 'A exportação escreve um canal: a média dos canais do arquivo.',
    hz432Export: 'A exportação baixa o tom em 0.32 semitons. A duração fica igual.',
    lufsIntegrated: 'Integrada',
    lufsPeak: 'Pico de amostra',
    lufsPodcast: 'Podcast',
    lufsStreaming: 'Streaming',
    lufsBroadcast: 'Broadcast',
    lufsLimited: 'O pico fica em −1 dBFS. O resultado é {lufs} LUFS.',
    lufsWill: 'A exportação fica em {lufs} LUFS.',
    lufsSilent: 'Este arquivo está em silêncio, não há loudness para igualar.',
    adjust: 'Ajustar — fade, volume, velocidade, reverso',
    fadeIn: 'Fade de entrada',
    fadeOut: 'Fade de saída',
    normalizeOverrides: 'Normalizar pico (substitui o volume)',
    undo: 'Desfazer a última alteração',
    cutMode: 'Modo de corte',
    keep: 'Manter seleção',
    deleteSel: 'Apagar seleção',
    saveSelected: 'Salvar o trecho selecionado · {time}',
    saveWithoutSelection: 'Salvar sem a seleção · {time}',
    fineTune: 'Ajuste fino',
    boundaryStart: 'Início',
    boundaryEnd: 'Fim',
    loop: 'Repetir',
    outputLine: 'Saída {time} · ≈{size}',
    errorDecodeTitle: 'Não foi possível decodificar este arquivo',
    errorDecodeHow: 'Tente um arquivo MP3, WAV ou M4A, ou converta antes, e solte aqui de novo.',
    precise: 'Tempos exatos',
    startSec: 'Início (s)',
    endSec: 'Fim (s)',
    format: 'Formato',
    export: 'Exportar',
    joinerMixed: 'MP3, WAV, M4A, OGG, FLAC — formatos mistos funcionam',
    joinerLocal: 'Processado no aparelho — seus arquivos não saem desta aba',
    trackSummary: '{n} faixas · {time}',
    crossfade: 'Crossfade',
    fadeInFirst: 'Fade de entrada (primeira faixa)',
    fadeOutLast: 'Fade de saída (última faixa)',
    mergeExport: 'Juntar e exportar',
    record: 'Gravar',
    recordHint: 'Grave pelo microfone',
    tooBig: 'Esse arquivo passa de 300 MB — tente um mais curto ou já compactado.',
    decoding: 'Decodificando o arquivo…',
    ready: 'Pronto. Arraste na forma de onda para selecionar um trecho.',
    hourWarning: 'Arquivos com mais de uma hora podem estourar a memória do navegador em alguns aparelhos.',
    decodeFail:
      'Não foi possível decodificar este arquivo — ele pode estar corrompido, ou o codec não é suportado pelo seu navegador.',
    ringtoneCap: 'Seleção limitada a 40 segundos — a duração clássica de um toque.',
    kept: 'Seleção mantida: {range}',
    markedDelete: 'Seleção marcada para apagar: {range}',
    endTime: 'O fim precisa ser pelo menos 0,05 s depois do início.',
    nothingUndo: 'Não há mais nada para desfazer.',
    reverted: 'A última alteração foi desfeita.',
    normalizeOn: 'Normalizar ligado — o pico sobe cerca de {db} dB (limitado a +12 dB).',
    rendering: 'Renderizando…',
    renderingStatus: 'Renderizando sua edição no aparelho…',
    encoding: 'Codificando {ext}…',
    exported: 'Exportado {file}.',
    saved: 'Salvo como {file} — nada foi enviado.',
    exportFail: 'A exportação falhou — o codificador não carregou (você está offline?). Tente o formato WAV.',
    merging: 'Juntando…',
    mergingStatus: 'Juntando as faixas no aparelho…',
    moveUp: 'Mover para cima',
    moveDown: 'Mover para baixo',
    remove: 'Remover',
    recUnavailable: 'A gravação não está disponível neste navegador. Tente Chrome, Edge, Firefox ou Safari.',
    micBlocked: 'O acesso ao microfone foi bloqueado. Permita nas configurações do navegador e tente de novo.',
    recording: 'Gravando… clique em Parar quando terminar.',
    stop: 'Parar',
    recordAgain: 'Gravar de novo',
    recordingLoaded: 'Gravação carregada no editor abaixo.',
    vizStyle: 'Estilo',
    vizStyleBars: 'Barras',
    vizStyleFilled: 'Preenchido',
    vizStyleOutline: 'Contorno',
    vizStyleDots: 'Pontos',
    vizStyleBottom: 'Barras embaixo',
    vizStyleBlocks: 'Barras largas',
    vizTemplate: 'Modelo',
    vizTemplateNone: 'Manual',
    vizTplSoundcloud: 'SoundCloud',
    vizTplPodcast: 'Podcast',
    vizTplPoster: 'Pôster',
    vizTplSticker: 'Adesivo',
    vizTplPrint: 'Impressão',
    vizTplNeon: 'Neon',
    vizTplBlocks: 'Blocos',
    vizWaveColor: 'Cor da onda',
    vizBgColor: 'Fundo',
    vizTransparent: 'Fundo transparente',
    vizSize: 'Tamanho',
    vizSizeVideo: 'Capa de vídeo',
    vizSizeSquare: 'Quadrado',
    vizSizeOg: 'Imagem social',
    vizSizeBanner: 'Banner',
    vizSizeCustom: 'Personalizado',
    vizWidth: 'Largura',
    vizHeight: 'Altura',
    vizRange: 'Intervalo',
    vizRangeStart: 'Início (s)',
    vizRangeEnd: 'Fim (s)',
    vizPreview: 'Prévia da forma de onda',
    vizReady: 'Pronto. Ajuste o visual e baixe o PNG.',
    vizRendering: 'Renderizando…',
    vizExportFail: 'Não foi possível criar o PNG. Tente um tamanho menor.',
    specFft: 'Tamanho da FFT',
    specAxis: 'Eixo de frequência',
    specAxisLog: 'Logarítmico',
    specAxisLinear: 'Linear',
    specMaxHz: 'Frequência alta (Hz)',
    specDbFloor: 'Silêncio (dB)',
    specDbCeil: 'Alto (dB)',
    specColors: 'Cores',
    specViridis: 'Viridis',
    specInferno: 'Inferno',
    specGray: 'Escala de cinza',
    specPreview: 'Prévia do espectrograma',
    specProgress: 'Desenhando o espectrograma… {pct}%',
    paintText: 'Texto',
    paintPlaceholder: 'Uma linha curta, como um nome',
    paintImage: 'PNG, JPG ou WebP. A imagem é reduzida para caber no espectro.',
    paintPreview: 'Imagem que será gravada no áudio',
    paintReady: 'Pronto. Baixe o WAV e abra no gerador de espectrograma.',
    paintWorking: 'Gravando o áudio…',
    paintFail: 'Não foi possível ler essa imagem. Tente um PNG ou JPG.',
    batchProgress: '{current} de {total}',
    batchSkipped: '{n} ignorados',
    tgShared: 'Artista, álbum, ano, gênero e capa valem para cada arquivo. Título e número da faixa ficam em cada linha.',
    tgAlbum: 'Álbum',
    tgAlbumArtist: 'Artista do álbum',
    tgArtist: 'Artista',
    tgComment: 'Comentário',
    tgComposer: 'Compositor',
    tgCover: 'Capa',
    tgCoverFail: 'A capa precisa ser uma imagem JPG ou PNG.',
    tgCoverHint: 'Um JPG ou PNG quadrado entre 500 e 1400 px fica melhor na maioria dos players.',
    tgDisc: 'Disco',
    tgGenre: 'Gênero',
    tgNoTags: 'Esse arquivo ainda não tem tags — preencha o que você souber.',
    tgReadFail: 'Não foi possível ler esse arquivo — use um MP3.',
    tgRemoveAll: 'Remover todos os metadados (salvar um arquivo limpo)',
    tgRemoveCover: 'Remover capa',
    tgReplaceCover: 'Substituir capa',
    tgReset: 'Redefinir',
    tgSaved: 'Salvo — confira seus downloads.',
    tgSaving: 'Gravando as tags…',
    tgSaveCover: 'Salvar capa',
    tgTitle: 'Título',
    tgTrack: 'Faixa',
    tgWriteFail: 'Algo deu errado ao salvar. Tente de novo ou use outro arquivo MP3.',
    tgYear: 'Ano',
    trLang: 'Idioma',
    trLangAuto: 'Detecção automática',
    trModel: 'Modelo',
    trModelBase: 'Base — mais preciso',
    trModelTiny: 'Tiny — download mais rápido',
    trPreparing: 'Preparando o modelo…',
    trDownloading: 'Baixando o modelo… {percent}%',
    trWorking: 'Transcrevendo… {percent}%',
    trDone: 'Transcrição concluída — {count} caracteres',
    trFirstRun:
      'A primeira execução baixa o modelo uma vez (Tiny ≈ 40 MB, Base ≈ 80 MB) e o seu navegador guarda em cache — as vezes seguintes funcionam offline.',
    trResultPlaceholder: 'A transcrição aparece aqui — edite antes de baixar, se quiser.',
    trCopy: 'Copiar',
    trCopied: 'Copiado para a área de transferência',
    trTxt: 'Baixar TXT',
    trSrt: 'Baixar SRT',
    trTooLong:
      'Esse arquivo passa de 10 minutos. Corte antes — o cortador de áudio tem a mesma privacidade — e depois volte para transcrever.',
    trFail: 'A transcrição falhou. Tente o modelo Tiny, um arquivo mais limpo ou um navegador recente.',
    midiCaveat: 'Um instrumento segura melhor. Uma mix completa, bateria ou acordes densos saem errados.',
    midiNotes: 'Notas: {count}',
    midiNone: 'Nenhuma nota. Bateria, ruído ou uma mix completa costumam sair vazios.',
    midiTooLong: 'Este arquivo passa de 3 minutos. Corte no cortador de áudio e volte.',
    midiWorking: 'Lendo notas… {percent}%',
    midiFirstRun: 'O modelo de notas baixa uma vez deste site, menos de 1 MB, e o navegador guarda.',
    midiFail: 'Não deu para ler as notas. Tente um arquivo mais curto, um instrumento ou um navegador atual.',
    midiMore: 'As primeiras {shown} de {count}.',
    midiDownload: 'Baixar MIDI',
    mixMute: 'Silenciar',
    mixSolo: 'Solo',
    mixPan: 'Pan',
    mixOffset: 'Entrada',
    mixTrimIn: 'Corte inicial',
    mixTrimOut: 'Corte final',
    mixGain: 'Nível',
    mixMaster: 'Master',
    mixPlay: 'Tocar a mix',
    mixStop: 'Parar',
    mixAdd: 'Adicionar faixas',
    mixLimit: 'Esta página aceita 8 faixas. Exporte esta mix ou use um editor de desktop para uma sessão maior.',
    mixPulled: 'A mix baixou {db} dB para o pico não clipar.',
    mixExport: 'Exportar mix',
    mixDecode: 'Não foi possível decodificar {name}.',
    sbUpload: "Enviar áudio",
    sbStopAll: "Parar tudo",
    sbExportBoard: "Exportar painel",
    sbImportBoard: "Importar painel",
    sbFullscreen: "Tela cheia",
    sbExitFs: "Sair da tela cheia",
    sbTemplates: "Predefinições",
    tplGeneral: "Geral",
    tplStream: "Streaming · Games",
    tplPodcast: "Podcast",
    tplClass: "Sala de aula",
    tplBlank: "Vazio",
    tplConfirm: "Trocar o painel?",
    sbName: "Nome",
    sbColor: "Cor",
    sbPreview: "Tocar seleção em loop",
    sbStopPreview: "Parar prévia",
    sbUseAll: "Usar o clipe inteiro",
    sbApplyTrim: "Aplicar corte",
    sbTrimmed: "Cortado para {sec}s.",
    sbExportWav: "Exportar WAV",
    sbReplace: "Trocar áudio",
    sbReplaced: "Áudio de “{name}” trocado.",
    sbDelete: "Excluir",
    sbConfirmDelete: "Excluir este som?",
    sbAddSound: "Adicionar som",
    sbEmpty: "O painel está vazio — envie um áudio ou grave um clipe, ou comece por uma predefinição acima.",
    sbKeyHint: "Os atalhos seguem a ordem do painel: 1–9, 0, depois Q W E R T Y U I O P · Esc para tudo · o lápis edita um som",
    sbRecAdded: "Gravação adicionada ao painel.",
    sbImported: "{n} sons importados.",
    sbImportNone: "Não há áudio reproduzível nesse arquivo.",
    sbImportBad: "Esse não é um arquivo JSON de soundboard.",
    sbExported: "Painel exportado — {n} sons.",
    sbPlayAria: "Tocar {name}",
    sbEditAria: "Editar {name}",
    sbTooLong: "Clipes acima de 60 segundos não entram no painel — corte o arquivo antes.",
    mvPlay: "Tocar",
    mvPause: "Pausar",
    mvStyle: "Estilo",
    mvStyleBars: "Barras de espectro",
    mvStyleMirrored: "Barras espelhadas",
    mvStyleRing: "Anel",
    mvStyleScope: "Osciloscópio",
    mvTheme: "Tema",
    mvThemeNeon: "Neon",
    mvThemeSynthwave: "Synthwave",
    mvThemeFire: "Fogo",
    mvThemeOcean: "Oceano",
    mvThemeMatrix: "Matrix",
    mvThemeMidnight: "Meia-noite",
    mvThemePaper: "Papel",
    mvPrimary: "Cor das barras",
    mvSizeLandscape: "Horizontal 16:9",
    mvSizePortrait: "Vertical 9:16",
    mvRecording: "Gravando {t} / {total} — deixe esta aba na frente",
    mvCancel: "Cancelar gravação",
    mvCancelled: "Gravação descartada.",
    mvSaved: "Vídeo salvo — confira seus downloads.",
    mvFail: "A gravação falhou. Tente um tamanho menor.",
    mvNoRecord: "Este navegador não consegue gravar a tela como vídeo; a reprodução continua funcionando. Para guardar a animação aqui, use uma gravação de tela.",
    mvRealtime: "Grava em tempo real: uma música de 3 minutos leva 3 minutos.",
  },
  home: {
    title: 'Ferramentas de áudio online grátis — Corte, junte, converta',
    description:
      'Ferramentas de áudio online e grátis: corte, recorte, junte, reverta e converta no navegador. Sem cadastro, sem envio — seus arquivos não saem do aparelho.',
    appBlurb: 'Ferramentas de áudio online e grátis — corte, recorte, junte e edite áudio no navegador.',
    badge: '100% no aparelho · nada é enviado',
    h1: 'Ferramentas de áudio online e grátis',
    lede: 'Corte, recorte, junte e edite áudio direto no navegador. Sem cadastro, sem marca d\'água, sem envio — seus arquivos não saem do aparelho.',
    ctaTrim: 'Cortar um arquivo de áudio',
    ctaMerge: 'Juntar músicas',
    highlightsLabel: 'Por que funciona assim',
    priceSymbol: '$',
    priceAmount: '0',
    priceWord: 'Grátis',
    highlights: [
      {
        title: 'Nada é enviado',
        body: 'O arquivo é decodificado nesta aba do navegador. Feche-a e o áudio some — nenhum servidor chega a recebê-lo.',
      },
      {
        title: 'Grátis, porque o seu aparelho faz o trabalho',
        body: 'Não há um parque de servidores para pagar, então não há marca d\'água, nem cadastro, nem limite de exportação.',
      },
      {
        title: 'Solte o arquivo e comece',
        body: 'Sem instalação e sem fila. Uma faixa longa nunca sai do aparelho, então a edição começa na hora.',
      },
      {
        title: 'Offline depois de abrir',
        body: 'A página precisa abrir uma vez. Depois disso, cortar e exportar continuam se a conexão cair.',
      },
    ],
    toolsHeading: 'Ferramentas de áudio populares',
    allToolsCta: 'Ver todas as {count} ferramentas',
    toolsCount: '{count} ferramentas',
    mostUsed: 'Mais usadas',
    comingTitle: 'Em breve',
    comingBody: 'Mixer com crossfade, removedor de silêncio e mais — a mesma lógica de privacidade em primeiro lugar.',
    useCasesHeading: 'O que você vai editar hoje?',
    useCases: [
      { title: 'Podcast', body: 'Grave episódios, corte as falhas, junte segmentos e saia com a transcrição para as notas do programa.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: 'Música', body: 'Desacelere riffs para aprender, mude o tom nos covers e dê peso ou brilho às suas demos.', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: 'Locução', body: 'Entregue takes limpos: remova o ruflo, iguale os níveis e eleve gravações baixas sem distorcer.', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
      { title: 'Estudo e trabalho', body: 'Ouça aulas aceleradas, transforme gravações em texto e suavize as emendas entre clipes.', tools: ['audio-to-text', 'fade-audio', 'audio-joiner'] },
    ],
    whyHeading: 'Por que editar áudio no seu aparelho',
    why: [
      {
        title: 'Privado por padrão',
        body: 'Recados de voz, entrevistas, faixas ainda não lançadas — áudio é pessoal. Aqui ele é decodificado e editado na memória do seu próprio navegador. Não existe um servidor que possa ver, guardar ou vazar o arquivo.',
      },
      {
        title: 'Sem fila e sem espera',
        body: 'Enviar uma faixa de 50 MB, esperar um servidor e baixar de volta fica de fora. A edição começa no instante em que você solta o arquivo.',
      },
      {
        title: 'Grátis de verdade',
        body: 'Processar no aparelho custa quase nada para manter no ar, então as ferramentas são grátis: sem marca d\'água, sem cadastro obrigatório e sem limite de exportação.',
      },
    ],
    faqs: [
      {
        q: 'O Free Audio Editor é mesmo grátis?',
        a: 'Sim — todas as ferramentas deste site são grátis, sem cadastro, sem marca d\'água e sem limite diário de exportação. Como todo o processamento acontece no seu próprio navegador, não há conta de servidor para repassar.',
      },
      {
        q: 'Como meu áudio fica privado?',
        a: 'Seus arquivos nunca são enviados. Decodificar, editar e exportar roda no aparelho, com a Web Audio API, dentro da aba do navegador. Você pode desconectar da internet depois que a página carregar, e todas as ferramentas continuam funcionando.',
      },
      {
        q: 'Preciso instalar alguma coisa?',
        a: 'Não. As ferramentas são web apps que rodam em qualquer navegador moderno — Chrome, Edge, Firefox ou Safari, no computador e no celular.',
      },
      {
        q: 'Quais formatos de áudio são aceitos?',
        a: 'Você pode abrir MP3, WAV, M4A/AAC, OGG, FLAC e áudio em WebM, e salvar o resultado como MP3 (128–320 kbps) ou WAV sem perdas. A ferramenta de toque também exporta M4R no Chrome, Edge e Safari.',
      },
    ],
  },
  hub: {
    categoryIntro: {
      cut: 'Encurte uma música, guarde a melhor parte ou crie um toque: selecione o trecho na onda e salve.',
      convert: 'Converta entre MP3, WAV, M4A, OGG e Opus, extraia o áudio de um vídeo ou reduza o bitrate de um arquivo — tudo no seu aparelho.',
      join: 'Ordene faixas, aplique crossfade, repita um trecho ou empilhe até oito arquivos numa linha do tempo. Nada é enviado.',
      edit: 'Aumente ou nivele o volume, normalize picos, remova silêncios, edite tags e modele o timbre com EQ, filtros e fades.',
      effects: 'Inverta, acelere, desacelere, mude o tom, adicione reverb, eco, distorção ou pan 8D, e transforme o som em imagem.',
      record: 'Grave pelo microfone, transcreva áudio, marque o tempo com um metrônomo ou leia a tonalidade e o BPM de uma faixa.',
    },
    tasksTitle: 'O que você quer fazer?',
    tasks: [
    { task: 'Criar um toque para meu celular', tool: 'ringtone-maker' },
    { task: 'Extrair o áudio de um vídeo', tool: 'extract-audio' },
    { task: 'Deixar uma gravação baixa mais alta', tool: 'increase-volume' },
    { task: 'Juntar duas músicas em um arquivo', tool: 'audio-joiner' },
    { task: 'Converter WAV para MP3', tool: 'wav-to-mp3' },
    { task: 'Desacelerar uma música e adicionar reverb', tool: 'slowed-reverb' },
    { task: 'Mudar o tom mantendo a velocidade', tool: 'pitch-changer' },
    ],
    title: 'Ferramentas de áudio grátis — Cortar, juntar e converter',
    description:
      'Corte, junte, converta, grave e melhore áudio com todas as ferramentas em um só lugar. Tudo no navegador: sem enviar arquivos e sem cadastro.',
    h1: 'Todas as ferramentas de áudio',
    intro:
      'Todas as ferramentas do site, agrupadas por tarefa. Escolha uma e comece: tudo roda no seu navegador, sem cadastro e sem enviar arquivos.',
  },
  about: {
    title: 'Sobre o Free Audio Editor — ferramentas de áudio online',
    description:
      'Ferramentas de áudio que priorizam a privacidade e rodam inteiramente no navegador — sem envio, sem cadastro, sem marca d\'água.',
    h1: 'Sobre',
    p1: 'O Free Audio Editor existe porque editar um recado de voz não deveria significar enviar o arquivo para o servidor de outra pessoa. Cada ferramenta daqui — o {trimmer}, o {cutter}, o {joiner} e as demais — funciona do mesmo jeito: o navegador lê o arquivo, edita na memória e grava o resultado direto no seu disco.',
    linkTrimmer: 'cortador de áudio',
    linkCutter: 'cortador de MP3',
    linkJoiner: 'juntador de áudios',
    p2: 'Essa arquitetura também explica por que as ferramentas são rápidas e grátis. Não há fila de envio, nem parque de servidores, nem conta de armazenamento — só o seu aparelho fazendo o trabalho em que ele já é bom.',
    p3: 'O site é um web app estático, com a Web Audio API. Continua em desenvolvimento, com conversores, gravador de voz e mais ferramentas de edição a caminho.',
  },
  privacy: {
    title: 'Política de privacidade — Free Audio Editor',
    description:
      'Política de privacidade do freeaudioeditor.online: os arquivos de áudio são processados no navegador e nunca enviados. Sem contas, sem rastrear seu áudio.',
    h1: 'Política de privacidade',
    updated: 'Última atualização: 21 de outubro de 2026',
    sections: [
      {
        h: 'Seus arquivos de áudio',
        body: 'Cada ferramenta deste site processa o áudio inteiramente dentro do navegador, com a Web Audio API. Seus arquivos {em} — não existe endpoint de envio. Quando você fecha a aba, o áudio decodificado some da memória.',
        em: 'nunca são enviados aos nossos servidores',
      },
      {
        h: 'O que guardamos',
        body: 'Não criamos uma conta nem um perfil para você. O site não tem contas e não pede e-mail. Sua preferência de tema (claro ou escuro) e sua escolha de cookies ficam no localStorage do navegador e nunca saem do aparelho.',
      },
      {
        h: 'Terceiros',
        body: 'O codificador de MP3 (lamejs) vem com este site e só é carregado quando você exporta um MP3. Ele não é baixado de uma rede de terceiros e não recebe seu áudio. As fontes são servidas pelo próprio domínio deste site.',
      },
      {
        h: 'Análises e publicidade',
        body: 'Medimos o tráfego geral com o Vercel Web Analytics, que não usa cookies e registra apenas visualizações agregadas de página — nunca sua identidade e nunca seu áudio. Se você aceitar os cookies opcionais, o site também carrega o Microsoft Clarity. O Clarity registra cliques, rolagem e uma reprodução da sessão, para vermos onde uma ferramenta é difícil de usar. Se você recusar, o Clarity não é carregado. Seu áudio não é enviado ao Clarity. Não veiculamos publicidade.',
      },
      {
        h: 'Widget de comentários',
        body: 'Se você aceitar os cookies opcionais, o site carrega o Userback, um serviço de comentários de terceiros, só depois da sua primeira interação ou após oito segundos. Se você recusar, o Userback não é carregado. Nada é enviado até você escrever e enviar uma mensagem. O que você escreve, junto com informações básicas da página e do navegador, é processado pelo Userback em nosso nome para que possamos ler e responder. Arquivos de áudio nunca são envolvidos. Consulte a política de privacidade do Userback para saber como esses dados são tratados.',
      },
    ],
    contactHeading: 'Contato',
    contactBefore: 'Dúvidas sobre esta política? Escreva para {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transcreva entrevistas e áudios de voz em texto ou legendas SRT, no seu aparelho.',
      name: 'Transcrever áudio em texto',
      shortName: 'Transcrever áudio em texto',
      title: 'Transcrever áudio em texto online grátis — TXT e SRT',
      description:
        'Transcreva áudio para texto no navegador — MP3, WAV, M4A e vídeo, mais de 90 idiomas com detecção automática, exporte TXT ou SRT. Grátis, sem cadastro.',
      h1: 'Transcrever áudio em texto — Transcrever uma gravação',
      heroAlt: 'Transformar um recado de voz ou uma entrevista em texto',
      subtitle: 'Transforme gravações em texto em mais de 90 idiomas, com marcas de tempo — direto no seu navegador.',
      intro:
        'Solte uma gravação e tire as palavras dela: áudios de voz, entrevistas, aulas, podcasts — em cerca de 90 idiomas, detectados automaticamente quando você não sabe qual é. Um modelo de IA Whisper roda dentro do seu navegador, no seu próprio aparelho, então o áudio nunca é enviado, e a transcrição sai como texto editável ou como arquivo SRT com marcas de tempo.',
      usesHeading: 'Usos comuns de áudio para texto',
      uses: [
        'Notas de aula: a aula vira texto que você pode buscar e citar.',
        'Atas de reunião: um clique transforma a gravação em palavras; você molda os pontos.',
        'Legendas de vídeo: exporte um SRT com marcas de tempo e use direto como legenda.',
        'Redigir entrevistas: transforme a conversa em transcrição antes de escrever a matéria.',
        'Mostrar notas do podcast: transcreva o episódio inteiro e levante as melhores falas.',
        'Versões de texto acessíveis: dê ao áudio um gêmeo de texto que alcança mais leitores.',
      ],
      why: [
        {
          icon: 'voice',
          title: 'Whisper roda localmente',
          text: 'O modelo Whisper roda no seu navegador: o áudio nunca é enviado, com trinta idiomas para escolher.',
        },
        {
          icon: 'file',
          title: 'TXT e SRT, duas saídas',
          text: 'TXT puro para notas; o SRT com marcas de tempo entra direto como legenda.',
        },
      ],
      howTo: [
        {
          name: 'Solte o arquivo',
          text: 'Adicione um MP3, WAV, M4A, um vídeo ou outra gravação. A decodificação acontece no seu aparelho e nada é enviado. Várias gravações compartilham o idioma e o modelo que você escolhe em seguida. Cada uma continua em cerca de 10 minutos. Uma transcrição fica na caixa. Duas ou mais voltam num ZIP de TXT e SRT.',
        },
        {
          name: 'Escolha idioma e modelo',
          text: 'A detecção automática resolve quase tudo. Escolha Tiny para mais velocidade em gravações longas ou aparelhos modestos, Base para a melhor precisão.',
        },
        {
          name: 'Transcreva e baixe',
          text: 'A primeira execução baixa o modelo uma vez e guarda em cache. Edite a transcrição se quiser e salve como TXT ou SRT.',
        },
      ],
      faqs: [
        { q: 'Posso transcrever mais de uma gravação?', a: 'Sim. Várias gravações compartilham o idioma e o modelo. Correm uma depois da outra neste aparelho, e cada uma continua em cerca de 10 minutos. Uma transcrição fica na caixa para você editar. Duas ou mais baixam num ZIP de TXT e SRT. Um celular fica sem tempo e memória antes.' },
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. O arquivo é decodificado no seu navegador e transcrito por um modelo Whisper que roda localmente via WebAssembly ou WebGPU. A única requisição de rede é o download único do modelo de uma CDN pública — depois disso, a transcrição funciona offline. Nada do seu áudio chega a um servidor.',
        },
        {
          q: 'Qual é a precisão da transcrição?',
          a: 'Usa os modelos Whisper da OpenAI, que chegam perto do nível humano em fala clara. Ruído de fundo alto, acentos fortes, várias pessoas falando junto ou música alta derrubam a precisão. Em áudio difícil, Base é bem melhor que Tiny — e de todo jeito o resultado cai em uma caixa editável, então você corrige nomes e pontuação antes de baixar.',
        },
        {
          q: 'Quais são os limites?',
          a: 'Vários arquivos, um depois do outro, cada um até 10 minutos — corte antes uma gravação mais longa (o cortador de áudio tem a mesma privacidade). Ele não identifica falantes: um diálogo sai como um texto único, sem nomes. E esta página trabalha com arquivos, não com o microfone ao vivo.',
        },
        {
          q: 'Qual a diferença para o gravador de voz?',
          a: 'O gravador captura seu microfone e cria um arquivo de áudio; esta página lê um arquivo existente e escreve as palavras. Eles combinam: grave lá, transcreva aqui. Tudo roda no seu navegador.',
        },
        {
          q: 'Quais idiomas são suportados?',
          a: 'O Whisper foi treinado com cerca de 90 idiomas, do inglês, chinês, espanhol e árabe ao vietnamita, ucraniano e suaíli. Deixe em Detecção automática e o modelo descobre pelo áudio, ou fixe um idioma para ganhar um pouco de precisão.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim — Chrome, Edge, Firefox e Safari recentes, no desktop e no celular. Navegadores com WebGPU (Chrome, Edge) transcrevem muito mais rápido; nos outros roda na CPU, então escolha Tiny para arquivos longos e espere alguns minutos para dez minutos de áudio. O download único do modelo também é menor no Tiny.',
        },
      ],
      sections: [
        {
          heading: 'Uma transcrição local, não legenda ao vivo',
          paragraphs: [
            'Áudio para texto roda um modelo Whisper no navegador. O modelo baixa uma vez de um CDN, depois o arquivo é transcrito no aparelho. O áudio não é enviado para a transcrição.',
            'O limite é de cerca de 10 minutos. Não há rótulos de quem fala. Ele não escuta o microfone ao vivo. Grave primeiro no gravador de voz, exporte, e solte o arquivo aqui.',
          ],
        },
        {
          heading: 'Modelo e idioma',
          paragraphs: [
            'A página lista trinta códigos de idioma. Escolha um, ou deixe a detecção ligada:',
          ],
          bullets: [
            'Os modelos são onnx-community/whisper-tiny e onnx-community/whisper-base.',
            'Sem WebGPU, a página começa no Tiny.',
            'Os tamanhos na tela não foram medidos para esta página.',
          ],
        },
        {
          heading: 'O que o texto vai errar',
          paragraphs: [
            'Nomes, falas sobrepostas e música sob uma voz saem confusos. Ele não marca quem falou. Limpe o arquivo primeiro se as pontas são silêncio longo: corte, ou passe o removedor de silêncio, e transcreva o arquivo mais curto.',
            'Você pode editar as palavras antes de baixar, como texto simples ou como SRT com marcações de tempo. Ele não traduz para outro idioma.',
          ],
        },
      ],
      dropHint: 'Solte arquivos de áudio ou vídeo, ou clique para procurar',
      exportLabel: 'Transcrever',
    },
    'bass-booster': {
      cardLine: 'Adicione peso e impacto com até +15 dB de graves abaixo de 150 Hz.',
      name: 'Realce de graves',
      shortName: 'Graves',
      title: 'Realce de graves — Mais peso no áudio online grátis',
      description:
        'Adicione até +15 dB de graves com um shelf real abaixo de 150 Hz, no navegador e sem truques de volume. Exporte em MP3 ou WAV. Grátis, sem enviar arquivos.',
      h1: 'Realce de graves online grátis — Reforçar os graves de uma música',
      heroAlt: 'Acrescentar graves a um MP3',
      subtitle: 'Um shelf de verdade: até +15 dB abaixo de 150 Hz, ouça e exporte. Nada sai do seu aparelho.',
      intro:
        'Grave fraco é o motivo mais comum de uma gravação soar pequena. O realce de graves aplica um shelf autêntico — até +15 dB abaixo de 150 Hz, o mesmo movimento de um engenheiro de masterização — não um truque que sobra tudo. Carregue um arquivo, suba o controle até o grave assentar e exporte. Tudo roda no seu navegador: o arquivo nunca é enviado.',
      usesHeading: 'Usos comuns de reforçar graves',
      uses: [
        'Voz fina: memos e entrevistas de celular com cara de papelão, um pouco de corpo.',
        'Fone curto: se o subgrave não chega, empurre primeiro o grave da música.',
        'Música de vídeo: a cama com o grave fraco, engrossada antes de entrar na edição.',
        'Aquecer a pista: o kick da eletrônica com mais impacto.',
        'Restaurar gravações antigas: o grave que cresceu magro com o tempo, recuperado em parte.',
        'Igualar em lote: vários arquivos com o mesmo realce, exportados juntos.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'De 0 a +15 dB à vontade',
          text: 'O controle de grave corre inteiro: perto de 8 dB o corpo aparece; passou, embarra — o ouvido manda.',
        },
        {
          icon: 'layers',
          title: 'Mesmo lote, mesma curva',
          text: 'Os arquivos compartilham o realce, processam em ordem e vão num ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Carregue o áudio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. O processamento acontece no seu aparelho.',
        },
        {
          name: 'Suba o controle de graves',
          text: 'Até +15 dB abaixo de 150 Hz. +3–6 dB resolve o som fino; acima disso, é efeito proposital.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Ouça em volume normal — grave demais esconde vozes. Exporte em MP3 ou WAV sem perda.',
        },
      ],
      faqs: [
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. O realce é um filtro shelf da Web Audio API na sua aba — não existe etapa de envio. Depois que a página carrega, você pode ficar offline e a ferramenta continua funcionando.',
        },
        {
          q: 'Realçar os graves reduz a qualidade?',
          a: 'Não há reamostragem nem mudança de tom. Se o realce empurra os graves além do máximo, um limitador controla os picos para a exportação nunca distorcer de forma agressiva; ajustes muito altos podem suavizar esses picos.',
        },
        {
          q: 'Adiciona subgraves que não existem?',
          a: 'Não — o shelf só amplifica as frequências baixas que o arquivo já tem. Caixas de celular não reproduzem subgraves; para julgar o resultado, use fones ou caixas de verdade.',
        },
        {
          q: 'Qual a diferença para o volume booster?',
          a: 'O booster sobe tudo por igual; o realce de graves levanta só o grave abaixo de 150 Hz. Arquivo inteiro baixo demais? Booster. Soa fino? Graves aqui.',
        },
        {
          q: 'Quanto de grave devo adicionar?',
          a: '+3–6 dB resolve gravações finas. Acima de +9 dB vira efeito estilístico: confira se as vozes continuam inteligíveis antes de exportar.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O editor é feito para toque — arraste, mexa no controle e exporte. Funciona no Chrome, Edge, Firefox e Safari atuais, no computador e no celular.',
        },
      ],
      screenshotsAlt: [
        'Realce de graves: área de soltar, nada é enviado a um servidor',
        'Realce de graves: área de trabalho com o arquivo carregado',
        'Realce de graves: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O que o controle de graves realmente levanta',
          paragraphs: [
            'É um filtro low-shelf. Ele sobe as frequências abaixo de 150 Hz na quantidade que você definir, até +15 dB. Médios e agudos ficam onde estavam. Não é um controle de volume.',
            'Um shelf só amplifica graves que o arquivo já tem. Uma gravação de voz de celular tem muito pouca energia abaixo de 80 Hz, então um realce grande não produz um subgrave. Julgue o resultado em fones ou caixas de som de verdade. A caixa de som de um celular não reproduz essa faixa, então um realce pesado pode soar como nada, ou como lama.',
          ],
        },
        {
          heading: 'Quanto grave adicionar',
          paragraphs: [
            'A faixa útil é pequena. Passar dela já é fazer um efeito.',
          ],
          bullets: [
            '+3 a +6 dB: recados de voz finos, entrevistas e faixas só de médios.',
            '+6 a +9 dB: bateria e baixo que precisam ficar à frente. Confira se as vozes ainda atravessam.',
            '+9 a +15 dB: um efeito de graves deliberado. A fala costuma ficar difícil de acompanhar aqui.',
            'Se o grave estala, o shelf ficou sem margem. Recue o controle.',
          ],
        },
        {
          heading: 'Realce de graves, amplificador de volume e o equalizador',
          paragraphs: [
            'Escolha a página que corresponde ao problema.',
          ],
          bullets: [
            'Realce de graves, esta página: só o grave abaixo de 150 Hz. O arquivo soa fino, não baixo.',
            'Amplificador de volume: o arquivo inteiro, até 4×, com um limitador. O arquivo é baixo em todas as frequências.',
            'Equalizador: graves, médios e agudos como shelves separados. Use quando 150 Hz é o corte errado.',
          ],
        },
        {
          heading: 'Onde um realce de graves erra',
          paragraphs: [
            'Grave pesado esconde fala. Ouça em um volume normal, não com as caixas já abaixadas, ou você salva algo que retumba no carro e enterra a voz.',
            'Exporte WAV se você vai continuar editando. MP3 a 320 kbps é a escolha certa quando o arquivo está pronto. O filtro não reamostra nem muda o tom. Se o realce empurrar picos acima da escala cheia, um limitador suaviza esses picos para a exportação não distorcer forte.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Reforçar os graves',
    },
    'treble-booster': {
      cardLine: 'Adicione brilho e clareza subindo os agudos até +15 dB acima de 3 kHz.',
      name: 'Realce de agudos',
      shortName: 'Agudos',
      title: 'Realce de agudos — Mais agudos no áudio online grátis',
      description:
        'Adicione até +15 dB de agudos acima de 3 kHz com um shelf real, no navegador e sem truques de volume. Exporte em MP3 ou WAV. Grátis, sem enviar arquivos.',
      h1: 'Realce de agudos online grátis — Subir os agudos de uma música',
      heroAlt: 'Deixar um áudio abafado mais claro',
      subtitle: 'Um shelf de agudos de verdade: até +15 dB acima de 3 kHz, ouça e exporte. Nada sai do seu aparelho.',
      intro:
        'Áudio abafado e sem vida quase sempre está sem uma coisa: energia acima de 3 kHz. O realce de agudos aplica um shelf de agudos autêntico — até +15 dB acima de 3 kHz, o mesmo movimento de um engenheiro de masterização para abrir uma faixa — não um truque que sobe tudo. Carregue um arquivo, suba o controle até o detalhe voltar e exporte. Tudo roda no seu navegador: o arquivo nunca é enviado.',
      usesHeading: 'Usos comuns de realçar agudos',
      uses: [
        'Resgatar o abafado: um vídeo que soa debaixo de manta, com as altas abertas.',
        'Clarear músicas antigas: gravações de anos com agudo caído, ar de volta.',
        'Voz nítida: gravações de chamada sem agudo, com as palavras mais claras.',
        'A outra metade do fone: depois de engrossar o grave, simetrizar com brilho.',
        'Escuta de detalhe: para ouvir pratos e respirações, empurre um pouco o agudo.',
        'Brilho em lote: vários arquivos com o mesmo empurrão, exportados juntos.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'De 0 a +15 dB à vontade',
          text: 'O controle de agudo corre inteiro: passou do ponto, os ses ficam ásperos — suba em passinhos, de ouvido.',
        },
        {
          icon: 'layers',
          title: 'Mesmo lote, mesma curva',
          text: 'Os arquivos compartilham o empurrão, processam em ordem e vão num ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Carregue o áudio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. O processamento acontece no seu aparelho.',
        },
        {
          name: 'Suba o controle de agudos',
          text: 'Até +15 dB acima de 3 kHz. +3–6 dB tira o som abafado da maioria das gravações; acima disso, para um brilho agressivo.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Fique de olho na aspereza nas sibilantes (sons s, t) — exporte em MP3 ou WAV sem perda.',
        },
      ],
      faqs: [
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. O realce é um filtro shelf de agudos da Web Audio API na sua aba — não existe etapa de envio. Depois que a página carrega, você pode ficar offline e a ferramenta continua funcionando.',
        },
        {
          q: 'Realçar os agudos reduz a qualidade?',
          a: 'Não há reamostragem nem mudança de tom. Um realce grande também levanta o chiado e a sibilância que já estavam no arquivo — se ficar áspero, baixe o controle. Um limitador controla os picos para a exportação nunca distorcer de forma agressiva.',
        },
        {
          q: 'Recupera detalhe que nunca foi gravado?',
          a: 'Não — o shelf só amplifica as frequências altas que o arquivo já tem. Áudio comprimido em bitrate baixo perde agudos para sempre; nenhum equalizador traz de volta.',
        },
        {
          q: 'Qual a diferença para o realce de graves?',
          a: 'São opostos no espectro: o realce de graves levanta o grave abaixo de 150 Hz, o realce de agudos levanta os agudos acima de 3 kHz. Som abafado? Agudos. Som fino e pequeno? Graves.',
        },
        {
          q: 'Quanto de agudo devo adicionar?',
          a: '+3–6 dB abrem a maioria das gravações sem vida. Acima de +9 dB, as sibilantes (s, sh, t) podem ficar perfurantes — ouça uma vez de fone antes de exportar.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O editor é feito para toque — arraste, mexa no controle e exporte. Funciona no Chrome, Edge, Firefox e Safari atuais, no computador e no celular.',
        },
      ],
      screenshotsAlt: [
        'Realce de agudos: área de soltar, nada é enviado a um servidor',
        'Realce de agudos: área de trabalho com o arquivo carregado',
        'Realce de agudos: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Um shelf de agudos acima de 3 kHz',
          paragraphs: [
            'O realce de agudos é um filtro high-shelf, até +15 dB acima de 3 kHz. Ele amplifica agudos que o arquivo já tem. Não inventa detalhe que uma codificação de bitrate baixo descartou.',
            'Um limitador segura os picos para um realce grande não distorcer forte. O realce também levanta chiado e sibilância que já estavam no arquivo.',
          ],
        },
        {
          heading: 'Até onde forçar',
          paragraphs: [
            'Ouça uma vez de fone antes de exportar:',
          ],
          bullets: [
            '+3 a +6 dB abre a maioria das gravações opacas.',
            'Acima de +9 dB, sons de s, ch e t podem ficar estridentes.',
            'Se o arquivo foi codificado em bitrate baixo, nenhum shelf traz os agudos que faltam de volta.',
          ],
        },
        {
          heading: 'Agudos, graves e o equalizador',
          paragraphs: [
            'O realce de graves levanta abaixo de 150 Hz. Esta página levanta acima de 3 kHz. Opaco e abafado aponta para cá. Fino e pequeno aponta para os graves.',
            'O equalizador é as mesmas três regiões com corte além de realce: low shelf em 150 Hz, um pico em 1 kHz, e este high shelf em 3 kHz. Use o realce quando você já sabe que só quer mais agudos.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Reforçar os agudos',
    },
    'equalizer': {
      cardLine: 'Modele graves, médios e agudos com um EQ direto de três botões ±15 dB.',
      name: 'Equalizador de áudio',
      shortName: 'Equalizador',
      title: 'Equalizador de áudio — EQ de 10 bandas online grátis',
      description:
      'Dez faixas de EQ de 31 Hz a 16 kHz, ±15 dB cada, com presets de gênero. No navegador, exporte em MP3 ou WAV. Grátis, sem envio.',
      h1: 'Equalizador de áudio online grátis — Ajustar graves, médios e agudos',
      heroAlt: 'Moldar o tom de uma música ou de uma gravação de voz',
      subtitle: 'Dez faixas com ±15 dB, presets a um clique — ainda um EQ honesto.',
      intro:
        'Três controles cobrem quase tudo que um EQ serve para fazer: graves abaixo de 150 Hz, médios em torno de 1 kHz onde as vozes vivem, e agudos acima de 3 kHz. Este equalizador usa bandas de filtro reais — low shelf, pico, high shelf — com ±15 dB cada, para afinar o retumbo, derrubar a lama ou dar ar. Carregue um arquivo, molde o som e exporte. Tudo roda no seu navegador: o arquivo nunca é enviado.',
      usesHeading: 'Usos comuns do equalizador',
      uses: [
        'Tirar a lama: desça os médios −3 a −6 dB e a voz amontoada respira na hora.',
        'Tirar o abafado: empurre a faixa de 8k-16k e a gravação engessada volta a brilhar.',
        'Tirar o soco: recolha um pouco os 60-125 Hz e a mixagem que bombardea fica limpa.',
        'Clarear a voz: um empurrão leve em 2k-4k e cada palavra se entende melhor.',
        'Presets de estilo: rock/pop/hip-hop/clássica/voz para começar num clique.',
        'Equilibrar canais: um ajuste por lado e exporte cada um separado.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Dez faixas, cada uma com seu terreno',
          text: 'Dez bandas peaking — 31, 62, 125, 250, 500, 1k, 2k, 4k, 8k, 16k — com ±15 dB cada: correção por faixa, não um «grave e agudo» genérico.',
        },
        {
          icon: 'check',
          title: 'Presets para começar',
          text: 'Seis presets — plano, rock, pop, hip-hop, clássica, voz — para se aproximar e depois afinar.',
        },
      ],
      howTo: [
        {
          name: 'Carregue o áudio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. O processamento acontece no seu aparelho.',
        },
        {
          name: 'Molde as três bandas',
          text: 'Graves abaixo de 150 Hz, médios em torno de 1 kHz, agudos acima de 3 kHz — ±15 dB cada. Corte pequeno vence boost grande.',
        },
        {
          name: 'Compare e exporte',
          text: 'Volte uma banda a 0 dB para comparar com o original e exporte em MP3 ou WAV sem perda.',
        },
      ],
      faqs: [
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. As bandas são filtros da Web Audio API (low shelf, pico, high shelf) na sua aba — não existe etapa de envio. Depois que a página carrega, você pode ficar offline e a ferramenta continua funcionando.',
        },
        {
          q: 'Melhor subir ou cortar?',
          a: 'Cortar. Boosts grandes empurram o sinal na direção do limitador e podem amolecer picos; um corte de −4 dB na banda com lama muitas vezes rende mais que um boost de +6 dB em qualquer lugar.',
        },
        {
          q: 'Qual a diferença para o realce de graves e de agudos?',
          a: 'Os realces são shelves de propósito único, só para subir. O equalizador entrega as três bandas com corte e boost num lugar só — use os realces quando você sabe exatamente qual ponta precisa.',
        },
        {
          q: 'Quais são as frequências exatas das bandas?',
          a: 'Low shelf em 150 Hz, pico em 1 kHz (largura unitária), high shelf em 3 kHz — o layout clássico de três bandas. Bandas em 0 dB ficam em bypass: uma banda intocada nunca colore o som.',
        },
        {
          q: 'Por que as vozes ficam estranhas quando corto os médios?',
          a: 'A inteligibilidade da fala mora perto de 1 kHz. Corte a banda de médios com leveza (−3 a −6 dB) e ouça uma frase que você conhece bem — cortes profundos deixam as vozes distantes ou ocas.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O editor é feito para toque — arraste, mexa nos controles e exporte. Funciona no Chrome, Edge, Firefox e Safari atuais, no computador e no celular.',
        },
      ],
      screenshotsAlt: [
        'Equalizador de áudio: área de soltar, nada é enviado a um servidor',
        'Equalizador de áudio: área de trabalho com o arquivo carregado',
        'Equalizador de áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Dez bandas, corte ou realce',
          paragraphs: [
            'As bandas são filtros de pico separados por uma oitava, de 31 Hz a 16 kHz. Cada uma vai cerca de ±15 dB. Uma banda deixada em 0 dB fica em bypass, então não colore o som.',
            'Cortar é a jogada mais segura. Um corte de −4 dB em uma banda lamacenta costuma fazer mais que um realce de +6 dB em outro lugar. Realces grandes empurram o sinal para o limitador e podem suavizar picos.',
          ],
        },
        {
          heading: 'Para que servem as faixas',
          paragraphs: [
            'As bandas de oitava se agrupam nas três regiões usuais, não em um EQ cirúrgico:',
          ],
          bullets: [
            '31–250 Hz: peso e lama. Corte se o arquivo está com excesso de graves. O realce de graves só levanta esta região, até +15 dB, e não corta.',
            '500 Hz–2 kHz: presença. Cortar aqui deixa as vozes distantes.',
            '4–16 kHz: ar e brilho. O realce de agudos só levanta acima de 3 kHz.',
          ],
        },
        {
          heading: 'Quando um único realce basta',
          paragraphs: [
            'Se você já sabe que só quer mais graves ou mais agudos, o realce de graves e o realce de agudos são as páginas mais curtas. Eles não cortam.',
            'Um filtro passa-baixa ou passa-alta é uma varredura de corte, não estes shelves. Use um filtro quando você quer tudo acima ou abaixo de uma frequência fora, não alguns decibéis movidos.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Aplicar o equalizador',
    },
    'low-pass-filter': {
      cardLine: 'Guarde só o calor abaixo do corte — ótimo para texturas lo-fi e mutes.',
      name: 'Filtro passa-baixa',
      shortName: 'Passa-baixa',
      title: 'Filtro passa-baixa — Remover ruído de agudos online',
      description:
        'Corte chiado e ruído de agudos com um filtro passa-baixa real, corte de 300 Hz a 20 kHz, no navegador. Exporte em MP3 ou WAV. Grátis, sem envio.',
      h1: 'Filtro passa-baixa online grátis — Cortar as frequências altas do áudio',
      heroAlt: 'Suavizar os agudos ásperos de uma gravação',
      subtitle: 'Varra o corte de 20 kHz até 300 Hz e guarde só as frequências que interessam.',
      intro:
        'Um filtro passa-baixa mantém o grave e derruba tudo acima do corte — a forma honesta de remover chiado, sibilância afiada, guinchos e a borda dura do digital. Diferente de um removedor de ruído, ele nunca adivinha o que é ruído: tudo acima do seu corte simplesmente vai embora. Carregue um arquivo, varra o corte para baixo até o incômodo sumir e exporte. Tudo roda no seu navegador: o arquivo nunca é enviado.',
      usesHeading: 'Usos comuns do passa-baixo',
      uses: [
        'Tirar o sibilo: o sibilo constante e o zumbido do ar saem num só corte.',
        'Digitalizar fitas: o chiado agudo da fita velha, empurrado para baixo.',
        'Amaciar a cama: música de fundo brilhante demais que pisa na voz, com as altas cortadas.',
        'Som de telefone: a estreiteza do interfone antigo, fechando o agudo.',
        'Preparar a limpeza: ruído agudo tonal se recolhe primeiro com um passa-baixo.',
        'Amaciar em lote: vários arquivos com o mesmo corte, exportados juntos.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Corte sob medida',
          text: 'De 300 Hz a 20 kHz livre: o sibilo mora nas faixas altas; corte até os ses escurecerem e pare aí.',
        },
        {
          icon: 'layers',
          title: 'Mesmo corte em lote',
          text: 'Os arquivos compartilham o corte, processam em ordem e vão num ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Carregue o áudio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. O processamento acontece no seu aparelho.',
        },
        {
          name: 'Abaixe o corte',
          text: 'Varra de 20 kHz para baixo até o ruído sumir — 8–12 kHz é um ponto de parada comum para voz.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Confira se as vozes seguem naturais e exporte em MP3 ou WAV sem perda.',
        },
      ],
      faqs: [
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. O filtro é um biquad passa-baixa da Web Audio API na sua aba — não existe etapa de envio. Depois que a página carrega, você pode ficar offline e a ferramenta continua funcionando.',
        },
        {
          q: 'Filtro passa-baixa é a mesma coisa que remoção de ruído?',
          a: 'Não — e essa é a força dele. Um removedor de ruído separa ruído de sinal com inteligência; o passa-baixa corta às cegas tudo acima do corte. Para chiado constante e de banda larga, é mais confiável que qualquer algoritmo.',
        },
        {
          q: 'Por que as vozes ficam abafadas com cortes baixos?',
          a: 'A clareza das consoantes vive entre 3 e 8 kHz. Abaixo de uns 5 kHz a fala começa a soar abafada; abaixo de 2 kHz, parece telefone. Para voz, comece com 8–12 kHz.',
        },
        {
          q: 'Qual a diferença para o filtro passa-alta?',
          a: 'Direções opostas: o passa-alta remove rumble, zumbido e grave boomy abaixo do corte; o passa-baixa remove chiado e aspereza acima dele. Usando os dois, sobra só a banda escolhida.',
        },
        {
          q: 'Que corte usar para música?',
          a: 'Para um efeito lo-fi leve, teste 4–8 kHz. Para limpar pratos cortantes, 12–16 kHz costuma bastar. Abaixo de 3 kHz a música soa claramente abafada — confie nos ouvidos, não nos números.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O editor é feito para toque — arraste, varra o corte e exporte. Funciona no Chrome, Edge, Firefox e Safari atuais, no computador e no celular.',
        },
      ],
      screenshotsAlt: [
        'Filtro passa-baixa: área de soltar, nada é enviado a um servidor',
        'Filtro passa-baixa: área de trabalho com o arquivo carregado',
        'Filtro passa-baixa: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Tudo acima do corte vai embora',
          paragraphs: [
            'Um filtro passa-baixa atenua o que está acima do corte. Não é um removedor de ruído. Ele não separa chiado do sinal. Ele abaixa cada frequência além do ponto que você define, incluindo consoantes e pratos se você definir baixo demais.',
            'Não há reamostragem nem mudança de tom. A exportação ainda codifica uma vez: MP3, ou WAV se você quer o áudio filtrado sem outra geração com perdas.',
          ],
        },
        {
          heading: 'Cortes que combinam com o trabalho',
          paragraphs: [
            'O número é um ponto de partida. Ouça, porque o mesmo corte abafa um arquivo e só suaviza outro:',
          ],
          bullets: [
            'Voz: tente 8–12 kHz primeiro. Abaixo de cerca de 5 kHz a fala soa abafada. Abaixo de 2 kHz soa como telefone.',
            'Um efeito lo-fi suave para música: 4–8 kHz.',
            'Pratos agudos que você só quer domar: 12–16 kHz. Abaixo de 3 kHz a música soa claramente opaca.',
          ],
        },
        {
          heading: 'O passa-alta é o outro sentido',
          paragraphs: [
            'O filtro passa-alta remove ronco e reforço de graves abaixo do corte. Esta página remove chiado e aspereza acima do corte. Usar os dois deixa uma banda no meio.',
            'Alguns decibéis de agudos, em vez de remover o topo de vez, são o realce de agudos ou o equalizador. Esses shelves não fazem uma varredura de corte rígida.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Aplicar passa-baixa',
    },
    'high-pass-filter': {
      cardLine: 'Remova ruflos e zumbidos abaixo do corte para gravações de voz mais limpas.',
      name: 'Filtro passa-alta',
      shortName: 'Passa-alta',
      title: 'Filtro passa-alta — Remover rumble e zumbido online',
      description:
        'Corte rumble, zumbido e grave boomy com um filtro passa-alta real, corte de 20 Hz a 5 kHz, no navegador. Exporte em MP3 ou WAV. Grátis, sem envio.',
      h1: 'Filtro passa-alta online grátis — Tirar o ruído grave de uma gravação',
      heroAlt: 'Cortar o vento e o zumbido baixo de uma voz',
      subtitle: 'Varra o corte de 20 Hz até 5 kHz e elimine tudo que está abaixo dele.',
      intro:
        'Rumble, trânsito, ruído de manuseio, batidas na mesa — o grave indesejado vem de fábrica na maioria das gravações reais. Um filtro passa-alta mantém tudo acima do seu corte e derruba tudo abaixo: o conserto honesto que nunca adivinha. Carregue um arquivo, varra o corte para cima até o rumble sumir e a voz continuar cheia, e exporte. Tudo roda no seu navegador: o arquivo nunca é enviado.',
      usesHeading: 'Usos comuns do passa-alta',
      uses: [
        'Limpar a voz: tira o retumbar da rua e as batidas na mesa de podcasts e locuções.',
        'Vídeos do celular: o tremor grave da mão, cortado num golpe.',
        'Preparar a compressão: com o grave limpo, o compressor para de disparar no retumbo.',
        'Gravações de palestra: o zumbido do ar e da plateia, pressionado.',
        'Desentaruchar mixagens: os ultragraves inúteis fora quando a mixagem entarra.',
        'Limpeza em lote: vários arquivos com o mesmo corte, exportados juntos.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Corte sob medida',
          text: 'De 20 Hz a 5 kHz livre: a voz normalmente basta a partir de 80-120 Hz; cortar mais alto tira o peito da voz.',
        },
        {
          icon: 'layers',
          title: 'Mesmo corte em lote',
          text: 'Os arquivos compartilham o corte, processam em ordem e vão num ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Carregue o áudio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. O processamento acontece no seu aparelho.',
        },
        {
          name: 'Suba o corte',
          text: 'Varra de 20 Hz para cima até o rumble sumir — 80–120 Hz cai bem na maioria das vozes.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Confira se a voz não ficou fina e exporte em MP3 ou WAV sem perda.',
        },
      ],
      faqs: [
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. O filtro é um biquad passa-alta da Web Audio API na sua aba — não existe etapa de envio. Depois que a página carrega, você pode ficar offline e a ferramenta continua funcionando.',
        },
        {
          q: 'Remove o zumbido de um cabo ruim?',
          a: 'O zumbido da rede elétrica fica em 50 ou 60 Hz, com harmônicos acima. Um passa-alta em 80–120 Hz remove a fundamental e boa parte do zumbido — para harmônicos teimosos, junte o filtro passa-baixa para estreitar a banda.',
        },
        {
          q: 'Até onde o corte pode subir antes de a voz ficar fina?',
          a: 'Vozes masculinas seguram o corpo até uns 100 Hz, femininas até uns 150–200 Hz. Passando de 300 Hz, a fala começa a soar como telefone — pode ser um estilo, mas ouça antes.',
        },
        {
          q: 'Qual a diferença para o filtro passa-baixa?',
          a: 'Direções opostas: o passa-alta remove o rumble de baixa frequência abaixo do corte; o passa-baixa remove chiado e aspereza acima dele. Somados, só a banda escolhida sobrevive.',
        },
        {
          q: 'Filtrar reduz a qualidade do arquivo?',
          a: 'Não há reamostragem nem mudança de tom — o corte só decide quais frequências sobrevivem. A exportação reencoda uma vez, como sempre: MP3 a 128–320 kbps ou WAV bit a bit idêntico.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O editor é feito para toque — arraste, varra o corte e exporte. Funciona no Chrome, Edge, Firefox e Safari atuais, no computador e no celular.',
        },
      ],
      screenshotsAlt: [
        'Filtro passa-alta: área de soltar, nada é enviado a um servidor',
        'Filtro passa-alta: área de trabalho com o arquivo carregado',
        'Filtro passa-alta: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Tudo abaixo do corte vai embora',
          paragraphs: [
            'Um filtro passa-alta atenua o que está abaixo do corte: ronco, vento, batidas de manuseio e o grave de um ambiente com excesso. Ele não muda o tom e não reamostra.',
            'O zumbido da rede fica em 50 ou 60 Hz, com harmônicos acima. Um passa-alta em torno de 80–120 Hz remove a fundamental e boa parte do zumbido. Harmônicos teimosos ainda ficam. Combine com o filtro passa-baixa se precisar estreitar mais a banda.',
          ],
        },
        {
          heading: 'Até onde subir antes da voz ficar fina',
          paragraphs: [
            'A fala tem corpo nos médios-graves. Empurre o corte longe demais e a voz fica fina:',
          ],
          bullets: [
            'Vozes masculinas mantêm o corpo até cerca de 100 Hz.',
            'Vozes femininas até cerca de 150–200 Hz.',
            'Passando de 300 Hz, a fala começa a soar como telefone. Isso pode ser um estilo, então ouça antes de exportar.',
          ],
        },
        {
          heading: 'Não é o realce de graves nem um shelf de corte',
          paragraphs: [
            'O realce de graves adiciona nível abaixo de 150 Hz. Esta página remove nível abaixo de um corte que você varre. Eles resolvem problemas opostos.',
            'O equalizador pode cortar alguns decibéis em 150 Hz e deixar o resto do grave. Use ele quando o arquivo está um pouco lamacento e você ainda quer o peso. Use esta página quando o ronco deve sumir.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Aplicar passa-alta',
    },
    'fade-audio': {
      cardLine: 'Suavize finais de músicas e introduções de podcast com fades exatos.',
      name: 'Fade de entrada e saída',
      shortName: 'Fade',
      title: 'Fade de entrada e saída — Adicionar fade online grátis',
      description:
        'Adicione fade de entrada e de saída a músicas ou gravações no navegador. Duração em décimos de segundo, exporte em MP3 ou WAV. Grátis, sem enviar arquivos.',
      h1: 'Fade de entrada e saída — Fazer a música desaparecer aos poucos',
      heroAlt: 'Fazer um fade de entrada e um fade de saída numa faixa',
      subtitle: 'Bordas suaves em segundos: ajuste os dois fades em décimos de segundo, ouça e exporte. Nada sai do seu aparelho.',
      intro:
        'O fade de entrada faz a música nascer do silêncio; o de saída a encerra com suavidade — é a diferença entre um corte seco e um final redondo. Carregue um arquivo, ajuste cada duração em décimos de segundo e ouça antes de exportar. Tudo roda no seu navegador: o arquivo nunca é enviado.',
      usesHeading: 'Usos comuns de fade de áudio',
      uses: [
        'Fecho de coletânea: o fim de um medley ou coletânea desvanece limpo.',
        'Entrada de podcast: fade-in para a primeira frase não assustar o ouvinte.',
        'Música de vídeo: a trilha desvanece junto com a imagem, sem roubar a cena.',
        'As duas pontas do toque: um fade curto em cada lado, e o loop fica natural.',
        'Gravações ao vivo: o burburinho de abertura e fechamento passa por fade.',
        'Áudio de palestras: tosse e barulho das pontas, cobertos com fade.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Cada ponta separada',
          text: 'Fades de entrada e saída de 0 a 5 segundos, em passos de 0,1 — só quer saída? Só mexe na saída.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'O fade termina no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        {
          name: 'Carregue o áudio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. O processamento acontece no seu aparelho.',
        },
        {
          name: 'Ajuste as durações',
          text: 'Defina o fade de entrada e o de saída na página: 1–3 segundos soam naturais em músicas, 0,2–0,5 em loops.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Toque o começo e o fim para ouvir os fades e exporte em MP3 ou WAV sem perda.',
        },
      ],
      faqs: [
        {
          q: 'Meu áudio é enviado?',
          a: 'Não. Os fades são renderizados com a Web Audio API na sua aba — não existe etapa de envio. Depois que a página carrega, você pode ficar offline e a ferramenta continua funcionando.',
        },
        {
          q: 'O fade muda a qualidade do áudio?',
          a: 'Não. O fade só modela o volume ao longo do tempo: sem reverb, sem mudança de tom. A exportação recodifica uma vez: MP3 a 128–320 kbps (320 por padrão) ou WAV bit a bit idêntico. Seu arquivo original não é alterado.',
        },
        {
          q: 'Dá para fazer crossfade entre duas músicas?',
          a: 'Aqui não — esta página aplica fade de entrada e saída em um arquivo só. Misturar o fim de uma faixa com o começo de outra é crossfade, e o criador de junções faz isso. Repetir um mesmo clipe com um crossfade curto em cada emenda é o repetidor de áudio.',
        },
        {
          q: 'Qual a diferença para o volume booster?',
          a: 'O booster levanta o arquivo inteiro por um fator fixo; o fade modela o volume no tempo — suave nas bordas, intacto no meio. Para finais, fade; para volume geral, booster.',
        },
        {
          q: 'Quanto deve durar o fade de saída?',
          a: 'Em músicas, 1–3 segundos costumam soar naturais; gravações ao vivo aguentam 4–5. Em loops e toques, 0,2–0,5 segundos para manter o ataque. Não existe resposta única: ouça e confie nos seus ouvidos.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O editor é feito para toque — arraste para selecionar, mexa nos controles e exporte. Funciona no Chrome, Edge, Firefox e Safari atuais, no computador e no celular.',
        },
      {
        q: 'Posso aplicar fade num arquivo local pelo Claude ou pelo Cursor?',
        a: 'Esta página faz fade de um arquivo no navegador, de 0 a 5 segundos, em passos de 0.1. /mcp aplica o afade do ffmpeg de 0 a 30 segundos em cada ponta. O MP3 é codificado uma vez. O app de chat ainda vê o caminho.',
      }],
      screenshotsAlt: [
        'Fade de entrada e saída: área de soltar, nada é enviado a um servidor',
        'Fade de entrada e saída: área de trabalho com o arquivo carregado',
        'Fade de entrada e saída: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'As bordas ficam baixas, o meio fica',
          paragraphs: [
            'O fade de áudio molda o volume ao longo do tempo em um arquivo: um fade de entrada no começo, um fade de saída no fim, ou os dois. O meio fica intacto. Não há reverb nem mudança de tom.',
            'Para músicas, 1–3 segundos costuma soar natural. Gravações ao vivo podem aceitar 4–5 segundos. Loops e toques querem 0,2–0,5 segundos para o ataque ficar. Ouça o começo e o fim antes de exportar.',
          ],
        },
        {
          heading: 'Para que serve um fade',
          paragraphs: [
            'Use quando o corte já está feito e a borda estala ou para de repente:',
          ],
          bullets: [
            'Um toque ou um loop que não deve estalar quando repete.',
            'O fim de uma música ou recado de voz que para duro demais.',
            'O começo de uma gravação que entra em volume cheio.',
          ],
        },
        {
          heading: 'Não é um crossfade nem um amplificador de volume',
          paragraphs: [
            'Misturar o fim de uma faixa no começo de outra é o [juntador de áudio](/audio-joiner). Esta página faz fade em um único arquivo.',
            'O [amplificador de volume](/volume-booster) levanta o arquivo inteiro em uma quantidade constante, de 10% a 400%. Um fade é baixo nas bordas e cheio no meio. A exportação é MP3, começando em 320 kbps, ou WAV de 16 bits. O arquivo que você soltou não é modificado.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Aplicar fade e baixar',
    },
    'audio-trimmer': {
      cardLine: 'Arraste as alças para guardar exatamente o trecho que precisa — podcasts, áudios de voz, qualquer faixa.',
      name: 'Cortar áudio',
      shortName: 'Cortar áudio',
      title: 'Editor de áudio — apare MP3 online com precisão de 0,01 s',
      description:
        'Apare MP3s, podcasts ou memos de voz: seleção na onda, ajustes de 0,01 s, audição em loop e salve em MP3 ou WAV sem perdas. Tudo local, nada enviado.',
      h1: 'Cortar áudio — Cortar arquivos de áudio',
      heroAlt: 'Cortar um MP3 ou podcast até ficar só o trecho que você precisa',
      subtitle: 'Recorte áudio online — grátis, direto no navegador. Nada é enviado.',
      intro:
        'Corte exatamente o trecho que você precisa de qualquer música, recado de voz, podcast ou gravação. Arraste na forma de onda para selecionar, ouça de volta e salve — o recorte inteiro acontece no seu aparelho, então até gravações longas ficam privadas e começam na hora.',
      usesHeading: 'Casos comuns de aparo de áudio',
      uses: [
        'Clipes de podcast: corte a melhor resposta e deixe os êns fora.',
        'Aparar MP3: tire um refrão ou loop de uma música inteira, sem editor de desktop.',
        'Memos de voz: encurte antes de enviar, o arquivo fica só com a mensagem.',
        'Atas de reunião: corte o papo furado, mantenha as decisões.',
        'Preparar toque: apare um trecho e finalize no [criador de toque](/ringtone-maker).',
        'Samples e loops: apare candidatos e fique com a melhor passada.',
      ],
      why: [
        {
          icon: 'zoom-in',
          title: 'O corte cai no 0,01 s',
          text: 'A régua de tempo muda de escala no zoom, as duas bordas ajustam em passos de 0,01/0,1/1 s e a seleção toca em loop enquanto ajusta — ouça o corte antes de confirmar.',
        },
        {
          icon: 'scissors',
          title: 'Duas saídas, sem trocar de modo',
          text: '“Salvar seleção” mantém e “Salvar sem seleção” remove — cada botão mostra a duração ao vivo e baixa em um clique.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Arraste um arquivo até o quadro tracejado ou clique para procurar. MP3, WAV, M4A, OGG, FLAC e vídeo decodificam no seu dispositivo.' },
        { name: 'Marque o que manter', text: 'Desenhe a seleção na onda e ajuste as duas bordas em passos de 0,01/0,1/1 s, ou digite início e fim exatos.' },
        { name: 'Ouça em loop', text: 'Ative o loop para ouvir só a seleção; mudar uma borda reinicia do topo para ajustar de ouvido. Depois mantenha ou remova a seleção.' },
        { name: 'Leve o arquivo', text: '“Aparar e baixar” para MP3 (128–320 kbps) ou WAV sem perdas; o nome leva -edited.' },
      ],
      faqs: [
        {
          q: 'Esse cortador de áudio é realmente grátis?',
          a: 'Sim. Não há conta, e a exportação não tem marca d’água. O arquivo é decodificado neste navegador.',
        },
        {
          q: 'Meu áudio é enviado para um servidor?',
          a: 'Não. O arquivo é decodificado nesta aba com a Web Audio API. Depois que os scripts da página carregam, decodificar e exportar WAV não precisam de rede. Exportar MP3 exige que o codificador MP3 tenha carregado uma vez.',
        },
        {
          q: 'Quais formatos posso recortar?',
          a: 'Os que este navegador já consegue decodificar. O menu de salvar oferece MP3 a 64, 96, 128, 192 ou 320 kbps, M4A (AAC) quando o navegador suporta, ou WAV de 16 bits. O MP3 codifica só os dois primeiros canais.',
        },
        {
          q: 'Recortar reduz a qualidade do áudio?',
          a: 'WAV é PCM de 16 bits das amostras que você mantém. O MP3 codifica esse trecho uma vez, no bitrate escolhido. Título, artista e capa não são copiados.',
        },
        {
          q: 'Dá para recortar áudio no celular?',
          a: 'A forma de onda aceita arrasto por toque. Um arquivo com mais de 300 MB é rejeitado. Um arquivo com mais de uma hora abre mesmo assim, e a página avisa que a aba pode ficar sem memória.',
        },
        {
          q: 'Qual o tamanho máximo do arquivo?',
          a: 'Mais de 300 MB é rejeitado. Mais de uma hora abre mesmo assim, com aviso de memória. Repetir o trecho mantido de 2 a 16 vezes, até 10 minutos, é o [loop de áudio](/audio-looper).',
        },
        {
          q: 'Posso cortar um arquivo local pelo Claude ou Cursor?',
          a: 'Esta página corta no navegador com a Web Audio API. Nada é instalado. O /mcp roda no seu computador e chama o ffmpeg. Passe um início e um fim em segundos. WAV são as amostras decodificadas. MP3 é codificado uma vez. O app de chat ainda vê o caminho e os argumentos.',
        },
        {
          q: 'Qual a precisão do corte?',
          a: 'As setas movem cada borda em passos de 0,01 s, 0,1 s e 1 s, e os dois tempos podem ser digitados à mão. A régua sob a onda acompanha o zoom, então o corte cai onde você quer.',
        },
        {
          q: 'Dá para recortar em tela cheia no celular?',
          a: 'Dá. O ícone de expandir na barra abre o editor na tela toda, e a onda ocupa o display inteiro. Toque de novo ou aperte Escape para voltar.',
        },
        {
          q: 'Qual formato salvar para WhatsApp ou e-mail?',
          a: 'MP3 a 128 ou 192 kbps fica pequeno e toca em qualquer lugar. O WhatsApp aceita documentos de até 2 GB, e o Gmail limita mensagens a 25 MB — um corte cabe com folga.',
        },
        {
          q: 'Por que o arquivo exportado tem um sufixo?',
          a: 'Cada exportação adiciona uma tag curta como -edited para distinguir versões. Renomeie o arquivo depois de baixar; o áudio não muda.',
        },
      ],
      screenshotsAlt: [
        'Cortar áudio: área de soltar, nada é enviado a um servidor',
        'Cortar áudio: área de trabalho com o arquivo carregado',
        'Cortar áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Marque a parte que você quer manter',
          paragraphs: [
            'Arraste sobre a onda para marcar o trecho. A régua sob a faixa mostra a escala, e uma etiqueta em cada borda mostra o tempo exato. Aperte reproduzir para ouvir só esse trecho antes de salvar.',
            'Exporte WAV se for recortar de novo ou continuar editando. Exporte MP3 quando o clip estiver pronto. Um corte para WAV mantém as amostras escolhidas. Um corte para MP3 codifica uma vez, no bitrate escolhido.',
          ],
        },
        {
          heading: 'Ajuste o corte ao centésimo de segundo',
          paragraphs: [
            'Os grupos de setas ao lado de cada campo de tempo movem uma borda em 0,1 s, 0,01 s ou 1 s por clique. Os dois tempos também podem ser digitados à mão.',
            'A reprodução em loop repete o trecho sem parar. Cada ajuste reinicia o trecho do começo, então a mudança é ouvida na hora.',
          ],
        },
        {
          heading: 'Corte uma gravação ou uma música',
          paragraphs: [
            'Esta página é para uma gravação que precisa ser encurtada: uma resposta de podcast, um memo de voz, uma aula, o meio de um arquivo longo.',
          ],
          bullets: [
            'Esta página e o [cortador de MP3](/mp3-cutter) são o mesmo editor. Ambos podem manter a seleção ou apagá-la. A página do cortador é a escrita para um refrão ou uma intro.',
            'Um toque, limitado a 40 segundos, com M4R só quando este navegador consegue codificar AAC, é o [criador de toques](/ringtone-maker). Esta página não instala no celular.',
            'Um fade de 0 a 5 segundos em um arquivo é o [fade de áudio](/fade-audio). Esta página não faz fade.',
          ],
        },
        {
          heading: 'O que o corte faz com o som',
          paragraphs: [
            'O arquivo é decodificado, o trecho é retirado e a exportação é reescrita. WAV é PCM de 16 bits desse trecho. MP3 o codifica uma vez, no bitrate escolhido. M4A salva uma cópia AAC para apps da Apple quando este navegador consegue codificar AAC.',
            'Esta página não muda o volume. Um arquivo baixo, de 10% a 400%, é o [aumentar volume](/increase-volume).',
          ],
        },
        {
          heading: 'Qual o tamanho máximo de arquivo',
          paragraphs: [
            'Um arquivo com mais de 300 MB é rejeitado. Um com mais de uma hora abre mesmo assim, e a página avisa que a aba pode ficar sem memória. Esse aviso não é um limite de duração.',
          ],
          bullets: [
            'Um memo de voz ou uma resposta de podcast: recorte aqui, no celular se quiser.',
            'Um episódio inteiro: o computador é o lugar mais estável para pré-visualizar e exportar.',
            'Um vídeo: o que é cortado é a trilha de som. A imagem não é salva.',
          ],
        },
        {
          heading: 'Escolha a saída conforme o destino do clip',
          paragraphs: [
            'Cada destino se importa com coisas diferentes: um app de chat quer arquivo pequeno, um e-mail tem limite de tamanho, e outra edição não quer perda extra.',
          ],
          table: {
            headers: ['Destino', 'Escolha', 'Por que encaixa'],
            rows: [
              ['Um app de chat como WhatsApp', 'MP3 a 128 ou 192 kbps', 'Arquivo pequeno, toca em todo lugar. Documentos de até 2 GB são aceitos, então um corte cabe com folga.'],
              ['Um e-mail', 'MP3 a 128 kbps', 'Um corte de 12 minutos fica perto de 12 MB, abaixo do limite de 25 MB do Gmail.'],
              ['Apps da Apple (GarageBand, iMovie)', 'M4A com AAC', 'Entra nos apps da Apple sem outra conversão.'],
              ['Outra edição neste site', 'WAV, sem perdas', 'Sem uma segunda etapa com perda. Fades e volume se somam sem artefatos de MP3.'],
              ['Vídeo social (TikTok, Reels)', 'WAV, sem perdas', 'A plataforma recodifica de qualquer jeito: entregue o arquivo mais limpo.'],
            ],
          },
          outro: [
            'Os limites mudam conforme os apps atualizam. Conferido nas páginas de ajuda de cada app em novembro de 2026.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Recortar e baixar',
    },
    'mp3-cutter': {
      cardLine: 'Corte uma música até o refrão, o drop ou qualquer trecho sem recodificar.',
      name: 'Cortar MP3',
      shortName: 'Cortar MP3',
      title: 'Cortar MP3 — cortar música MP3 online, manter ou excluir',
      description:
        'Corte música MP3 online: mantenha o refrão ou exclua a introdução. WAV sem perdas extras, MP3 até 320 kbps. Acima de 300 MB é rejeitado.',
      h1: 'Cortar MP3 — corte um MP3 online, grátis',
      heroAlt: 'Cortar MP3 online grátis',
      subtitle: 'Corte músicas e arquivos MP3 online — fique com o trecho que você quer e apague o resto.',
      intro:
        'Encurte uma música até o refrão, tire uma intro longa ou separe um destaque — direto no navegador. Escolha manter o trecho selecionado ou apagá-lo, ouça o resultado e salve um MP3 novo em segundos.',
      usesHeading: 'Casos comuns de corte de MP3',
      uses: [
        'Cortar refrões: tire o hook da música e salve como arquivo próprio.',
        'Remover intros: corte introduções longas e vinhetas de anúncio do começo.',
        'Preparar toque: corte o trecho e vire um M4R de 40 segundos no [criador de toque](/ringtone-maker).',
        'Editar música: recorte trechos de treino ou remova uma passagem indesejada.',
        'Limpar programas: remova a leitura de anúncio do começo e mantenha o episódio.',
        'Fazer samples: corte um pequeno WAV de um MP3 longo.',
      ],
      why: [
        {
          icon: 'scissors',
          title: 'Duas saídas, sem modo',
          text: 'Depois de marcar o trecho, dois botões ficam lado a lado: “{keep}” mantém e “{delete}” remove — cada botão mostra a duração do export ao vivo.',
        },
        {
          icon: 'lock-simple',
          title: 'Seu original fica intacto',
          text: 'O corte acontece na memória e nada é enviado. O WAV é idêntico bit a bit e o MP3 codifica uma vez, até 320 kbps.',
        },
      ],
      howTo: [
        { name: 'Adicione seu MP3', text: 'Arraste um MP3 até o quadro tracejado ou clique para procurar. A maioria dos outros formatos de áudio e vídeo também decodifica, no seu dispositivo.' },
        { name: 'Marque o trecho', text: 'Desenhe uma seleção na forma de onda ou digite os tempos exatos. “Manter seleção” mantém o trecho e “Apagar seleção” o remove — troque quando quiser.' },
        { name: 'Clique “{export}”', text: 'O botão principal da barra de exportação. O WAV é idêntico bit a bit e o MP3 codifica uma vez até 320 kbps. Aperte “Reproduzir” para ouvir antes.' },
        { name: 'Leve o arquivo', text: 'O download começa sozinho e o nome leva o sufixo -edited. Arquivos acima de 300 MB são rejeitados.' },
      ],
      faqs: [
        {
          q: 'Como corto só o refrão de uma música?',
          a: 'Selecione o refrão na forma de onda, confira se o modo está em Manter seleção, ouça a prévia e exporte. Você recebe um arquivo de áudio novo só com aquele trecho.',
        },
        {
          q: 'Como tiro os primeiros 30 segundos de uma faixa?',
          a: 'Selecione os primeiros 30 segundos (os tempos exatos de início e fim aparecem enquanto você arrasta, e dá para digitá-los com precisão), coloque o modo em Apagar seleção e exporte.',
        },
        {
          q: 'A qualidade do MP3 se mantém?',
          a: 'Cortar para WAV mantém o áudio bit a bit. Exportar para MP3 recodifica uma vez no bitrate que você escolher — 320 kbps é imperceptível para praticamente todo mundo.',
        },
        {
          q: 'Preciso instalar alguma coisa?',
          a: 'Não. Este cortador de MP3 é um web app que roda dentro da aba do navegador. Não há nada para instalar e nenhuma conta para criar.',
        },
        {
          q: 'Para onde vão meus arquivos?',
          a: 'Para lugar nenhum. O navegador lê o arquivo do seu disco e corta na memória. Sem envio, sem cópia na nuvem, sem ficar armazenado.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você arrasta a forma de onda com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
        {
        q: 'Dá para cortar uma música do YouTube?',
        a: 'Não. Esta página trabalha com um arquivo deste aparelho e não aceita link. Cortar o áudio de uma plataforma de streaming geralmente quebra os termos de uso: use só músicas que você possui ou para as quais tem permissão.',
        },
      ],
      screenshotsAlt: [
        'Cortar MP3: área de soltar, nada é enviado a um servidor',
        'Cortar MP3: área de trabalho com o arquivo carregado',
        'Cortar MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Mantenha a parte marcada ou apague',
          paragraphs: [
            'Arraste sobre a forma de onda para marcar um trecho. Os tempos mudam enquanto você arrasta, e dá para digitar início e fim quando o ponteiro não é preciso.',
            'Os dois modos fazem trabalhos opostos.',
          ],
          bullets: [
            'Manter seleção: o arquivo salvo é só o trecho marcado. É o refrão, a batida ou a única resposta que você quer de uma gravação longa.',
            'Apagar seleção: o arquivo salvo é tudo menos esse trecho. É assim que você tira os primeiros 30 segundos, uma introdução ou um anúncio lido.',
          ],
        },
        {
          heading: 'Corte um MP3 ou encurte uma gravação',
          paragraphs: [
            'Esta página corta um trecho de uma música. O seletor também aceita vídeos MP4, WebM e MOV: o que é cortado é a trilha sonora. O resultado é um novo MP3 ou um WAV de 16 bits.',
            'O [cortador de áudio](/audio-trimmer) é o mesmo editor, escrito para um podcast ou um recado de voz. Use esta página para cortar um MP3. Use o cortador quando o arquivo não é uma música.',
          ],
        },
        {
          heading: 'O que o corte faz com o som',
          paragraphs: [
            'WAV é PCM de 16 bits das amostras que você manteve. MP3 codifica esse trecho uma vez. O bitrate padrão desta página é 192 kbps.',
            'O arquivo é decodificado, o trecho é retirado e a exportação é escrita de novo. Se você vai editar o arquivo outra vez, exporte WAV. Os dois controles de fade suavizam as bordas do corte quando o clipe precisa de um começo ou um fim mais suave.',
          ],
        },
        {
          heading: 'O que este cortador não faz',
          paragraphs: [
            'Ele corta um arquivo. Não faz crossfade de uma playlist nem empilha várias faixas uma sobre a outra.',
          ],
          bullets: [
            'Juntar várias músicas em um arquivo é o [juntador de áudio](/audio-joiner).',
            'Um clipe limitado a 40 segundos, baixado como toque, é o [criador de toque](/ringtone-maker). Esta página não instala o toque no celular.',
            'Título, artista e capa são o [editor de tags MP3](/mp3-tag-editor), depois que o corte estiver pronto.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo MP3 ou vídeo, ou clique para procurar',
      exportLabel: 'Cortar e baixar',
    },
    'mp3-editor': {
      cardLine: 'Edições rápidas numa aba: cortar, fade, reverter, acelerar e normalizar.',
      name: 'Editor de MP3',
      shortName: 'Editor de MP3',
      title: 'Editor de MP3 — cortar, fade e mudar a velocidade',
      description:
        'Corte, aplique fade e mude a velocidade numa aba. O arquivo original fica intacto, e a velocidade leva o tom junto.',
      h1: 'Editor de MP3 — cortar, fade e mudar a velocidade',
      heroAlt: 'Cortar, aplicar fade, inverter e mudar a velocidade de um MP3',
      subtitle: 'Corte, fade, reverta e acelere o áudio — tudo numa aba do navegador.',
      intro:
        'Um editor de áudio compacto para trabalhos rápidos: recorte trechos, aplique fade de entrada e de saída, aumente ou baixe o volume, acelere ou desacelere faixas e reproduza ao contrário. Cada edição é aplicada no seu aparelho na hora de exportar — o arquivo original permanece intacto no disco.',
      usesHeading: 'Usos comuns do editor de MP3',
      uses: [
        'Cortar e fade: corte um trecho e faça fade nas bordas novas para o corte não estalar.',
        'Velocidade por trecho: acelere ou inverta uma parte sem exportar entre ferramentas.',
        'Nivelar o volume: traga de volta a um nível uma gravação que oscila entre alto e baixo.',
        'Efeitos reversos: toque um trecho ao contrário como surpresa escondida.',
        'Várias edições de uma vez: corte, fade, velocidade e volume numa aba.',
        'Ajustes rápidos: mudanças pequenas que não valem uma sessão de DAW.',
      ],
      why: [
        {
          icon: 'file',
          title: 'Várias edições, uma aba',
          text: 'Corte, fade, velocidade, reverso e volume acontecem na mesma página, sem exportar entre ferramentas.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado no aparelho',
          text: 'Todas as edições rodam no seu navegador. Nada é enviado.',
        },
      ],
      howTo: [
        {
          name: 'Abra o arquivo',
          text: 'Solte um arquivo ou clique para procurar. Ele só abre se este navegador conseguir decodificar. A decodificação acontece nesta aba.',
        },
        {
          name: 'Edite',
          text: 'Selecione um trecho para manter ou apagar e abra Ajustar. Faça fade de 0 a 5 segundos em cada ponta, ponha o volume de 10% a 200%, a velocidade de 0,50× a 2,00×, ou inverta. O tom acompanha a velocidade.',
        },
        {
          name: 'Exporte o resultado',
          text: 'Salve como MP3 em 64, 96, 128, 192 ou 320 kbps, ou como WAV de 16 bits. Esta página começa em 320 kbps. O MP3 codifica os dois primeiros canais.',
        },
      ],
      faqs: [
        {
          q: 'O que este editor de MP3 faz?',
          a: 'Manter ou apagar uma seleção. Fade de 0 a 5 segundos em cada ponta. O volume vai de 10% a 200%. A velocidade vai de 0,50× a 2,00×, e o tom acompanha. A reverberação vai de 0% a 100%. Reverter é um interruptor. A normalização de pico aplica um ganho até 0,98, limitado a 4×, e prevalece sobre o controle de volume. Um arquivo com mais de 300 MB é rejeitado. Vários arquivos de uma vez, até 8, é o [editor multipista](/multi-track-audio-editor).',
        },
        {
          q: 'Minhas edições destroem o original?',
          a: 'Não. O arquivo original continua exatamente como está no disco. Todas as edições ficam como ajustes no editor e só são renderizadas num arquivo novo quando você exporta.',
        },
        {
          q: 'Como a mudança de velocidade afeta o tom?',
          a: 'Nesta página, 2× soa cerca de uma oitava acima e 0,5× cerca de uma oitava abaixo. O [alterador de tempo](/tempo-changer) mantém o tom, de 0,75× a 1,25×. O [alterador de tom](/pitch-changer) muda o tom e mantém a duração.',
        },
        {
          q: 'Dá para desfazer uma alteração?',
          a: 'Sim. Aperte Ctrl+Z (Cmd+Z no Mac) para voltar pelas edições recentes, ou clique em Trocar arquivo para recarregar o estado original do arquivo.',
        },
        {
          q: 'É seguro para gravações confidenciais?',
          a: 'O arquivo é decodificado nesta aba. Depois que os scripts da página carregam, decodificar e exportar WAV não precisa de rede. Exportar MP3 precisa que o codificador tenha carregado uma vez. Fechar a aba descarta esta edição.',
        },
        {
          q: 'Funciona no celular?',
          a: 'A forma de onda aceita arrastar com o dedo. Um arquivo com mais de 300 MB é rejeitado. Um arquivo com mais de uma hora abre mesmo assim, com um aviso de memória.',
        },
      ],
      screenshotsAlt: [
        'Editor de MP3: área de soltar, nada é enviado a um servidor',
        'Editor de MP3: área de trabalho com o arquivo carregado',
        'Editor de MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O que este editor realmente muda',
          paragraphs: [
            'Esta página é o editor de MP3 geral: corte um trecho, faça fade nas pontas, mude o volume ou a velocidade, ou inverta o arquivo, e exporte um novo MP3. O arquivo que você soltou nunca é sobrescrito.',
            'A velocidade aqui leva o tom junto com o tempo. Uma voz mais aguda ou mais grave com a mesma duração é o [alterador de tom](/pitch-changer). Um arquivo menor, sem esta edição, é [comprimir áudio](/compress-audio).',
          ],
        },
        {
          heading: 'Quando abrir uma página específica',
          paragraphs: [
            'O editor é o começo certo quando o trabalho mistura cortes pequenos e mudanças de nível. Trabalhos únicos têm um caminho mais curto:',
          ],
          bullets: [
            'Uma música, manter um refrão: o [cortador de MP3](/mp3-cutter) é o mesmo editor de manter ou apagar.',
            'Um podcast ou recado de voz: o [cortador de áudio](/audio-trimmer) é esse mesmo editor.',
            'Só título, artista ou capa: o [editor de tags MP3](/mp3-tag-editor) copia os bytes do áudio e muda apenas as tags.',
          ],
        },
        {
          heading: 'Exportar e desfazer',
          paragraphs: [
            'Exportar grava um novo MP3. O WAV do menu é PCM de 16 bits das amostras editadas.',
            'Ctrl+Z (Cmd+Z no Mac) volta pelas edições recentes. Trocar arquivo recarrega o arquivo que você soltou. Fechar a aba descarta a sessão, porque nada é armazenado em um servidor.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'ringtone-maker': {
      cardLine: 'Os 30 segundos mais marcantes de uma música, virando toque para iPhone ou Android.',
      name: 'Criar toque',
      shortName: 'Toque',
      title: 'Criador de toque — corta um toque para iPhone de uma música',
      description:
        'Corta um toque de qualquer música: seleção limitada a 40 s, fades opcionais. M4R para iPhone (precisa de AAC) ou MP3. Grátis, sem upload.',
      h1: 'Criador de toque — transforma qualquer música em toque de iPhone',
      heroAlt: 'Corta até 40 segundos e salve como M4R ou MP3',
      howToIntro: 'Entra uma música, sai um toque',
      subtitle: 'Escolhe o melhor momento de qualquer música e salve como toque em menos de um minuto.',
      intro:
        'Escolhe o hook, o refrão ou a intro de uma música que você gosta e transforma no seu toque. O criador mantém a seleção dentro dos 40 segundos clássicos de um toque, adiciona um fade se você quiser e exporta para o celular: M4R para iPhone, MP3 para todo o resto.',
      usesHeading: 'Usos comuns do criador de toque',
      uses: [
        'Toque de iPhone: corta o hook, exporta em M4R, sincroniza no Finder e pronto.',
        'Toque de Android: corta um trecho, exporta em MP3 e escolhe direto nos ajustes.',
        'Toque do refrão: os segundos mais marcantes do refrão viram a abertura.',
        'Toque da intro: ouve uma melodia que você ama antes de atender.',
        'Fecho com fade: o loop fica suave e nunca corta no meio da nota.',
        'Curto e nítido: fique abaixo de 20 segundos; o limite de 40 se aplica sozinho.',
      ],
      why: [
        {
          icon: 'bell',
          title: 'Limitado a 40 segundos automaticamente',
          text: 'Arrasta além de 40 segundos e a seleção volta com um aviso — o comprimento clássico de um toque, para nunca ter que adivinhar o que o celular aceita.',
        },
        {
          icon: 'convert',
          title: 'Duas saídas: M4R e MP3',
          text: 'M4R para iPhone (aparece só quando este navegador codifica AAC, escondido caso contrário) ou MP3 a 192 kbps para Android e qualquer outro celular — pronto para usar direto na exportação.',
        },
      ],
      howTo: [
        {
          name: 'Adicione uma música',
          text: 'Arrasta um arquivo MP3, M4A, WAV ou outro áudio para o quadro pontilhado, ou clica para procurar. Ele nunca sai do seu dispositivo.',
        },
        {
          name: 'Corte o trecho',
          text: 'Arrasta a seleção na forma de onda, até 40 segundos — se passar, o limite se aplica sozinho com um aviso. É o comprimento clássico de um toque.',
        },
        {
          name: 'Adicione um fade, toque em «Fazer toque»',
          text: 'Fade nas duas pontas de 0 a 5 segundos. Escolha M4R para iPhone ou MP3 a 192 kbps para Android e outros celulares.',
        },
        {
          name: 'Leve para o celular',
          text: 'iPhone: sincronize pelo Finder (iTunes no Windows). Android: escolha o MP3 em Ajustes > Som > Toque do telefone.',
        },
      ],
      faqs: [
        {
          q: 'Qual deve ser a duração de um toque?',
          a: 'A maioria dos celulares toca de 20 a 40 segundos antes da caixa postal, e toques curtos soam mais nítidos. O criador limita a seleção a 40 segundos, o comprimento clássico de um toque.',
        },
        {
          q: 'Como usar o toque no iPhone?',
          a: 'Escolha M4R no menu de formato antes de exportar. Chrome, Edge e Safari 17 ou mais recente codificam no próprio dispositivo; sincronize o arquivo para o iPhone pelo Finder (iTunes no Windows). Navegadores sem codificação AAC, como o Firefox, exportam MP3 — converta no GarageBand: importe o arquivo e compartilhe como toque.',
        },
        {
          q: 'Como definir no Android?',
          a: 'Copie o MP3 exportado para o celular, abra Ajustes > Som > Toque do telefone e escolha o arquivo, ou defina direto num app de arquivos. Não precisa converter.',
        },
        {
          q: 'O loop vai soar mal?',
          a: 'Defina um fade de saída curto na página. A volta ao começo fica natural em vez de cortar no meio da nota. Para repetir o trecho de 2 a 16 vezes num arquivo maior, use o [loop de áudio](/audio-looper). Esta página fica nos 40 segundos.',
        },
        {
          q: 'Tem marca d’água ou limite?',
          a: 'Sem marca d’água, sem cadastro, sem limite diário. O toque é renderizado no seu próprio dispositivo e baixado direto do navegador.',
        },
      ],
      dropHint: 'Arrasta uma música ou clica para procurar',
      exportLabel: 'Fazer toque',
      screenshotsAlt: [
        'Zona de arrastar do criador de toque: solte um arquivo ou procure, nada é enviado',
        'Área de trabalho do criador de toque com o arquivo carregado',
        'Criador de toque após exportar: a barra de estado nomeia o arquivo baixado',
      ],
      sections: [
        {
          heading: 'Como uma música vira toque',
          paragraphs: [
            'Arrasta além de 40 segundos e a seleção volta a 40. A página avisa depois: Seleção limitada a 40 segundos — o comprimento clássico de um toque.',
            'Cada ponta aceita um fade de 0 a 5 segundos, em passos de 0,1. Em 0, aquela ponta fica igual.',
          ],
        },
        {
          heading: 'Que arquivo o celular aceita',
          paragraphs: [
            'O menu começa em MP3 a 192 kbps.',
          ],
          bullets: [
            'M4R é AAC-LC, no máximo dois canais, a 192 kbps. Aparece só quando este navegador codifica AAC.',
            'Caso contrário o menu é MP3 a 320, 192 ou 128 kbps, ou WAV de 16 bits.',
            'Sem 64 ou 96 kbps no menu. Esta página termina no download do arquivo.',
          ],
          table: {
            headers: ['Tipo de toque','Duração adequada','Por quê'],
            rows: [
              ['Toque','40 segundos ou menos','Esta página limita o arrasto a 40 s — o comprimento clássico'],
              ['Sons de mensagem e alerta','Alguns segundos','Um alerta deve se identificar, não tocar a música'],
              ['Alarme','Quanto quiser','Exporta MP3 ou WAV de 16 bits; esta página não põe limite'],
              ['Toque de Android','Curto, para o loop ficar limpo','O MP3 desta página funciona; o celular repete desde o início'],
            ],
          },
        },
        {
          heading: 'O que esta página não faz',
          paragraphs: [
            'Não envia a música nem instala o toque no celular. Você recebe um arquivo.',
            'Para uma música inteira sem o limite de 40 segundos, use o [cortador de MP3](/mp3-cutter).',
          ],
        },
      ],
    },
    'audio-joiner': {
      cardLine: 'Emenda memos de voz, músicas ou episódios de podcast num único arquivo contínuo.',
      name: 'Juntar áudio',
      shortName: 'Juntar áudio',
      title: 'Juntar áudio — emenda arquivos MP3 online, com crossfade',
      description:
        'Emenda músicas, capítulos ou memos de voz num só arquivo, com crossfade de 0-5 s. WAV sem perdas, MP3 até 320 kbps. Tudo local, nada enviado.',
      h1: 'Juntar áudio — reúne vários arquivos de áudio em um',
      heroAlt: 'Põe músicas e memos de voz um após o outro',
      subtitle: 'Reúne músicas e arquivos de áudio numa só faixa, na ordem que quiser, em segundos.',
      intro:
        'Reúne várias músicas, episódios de podcast ou gravações em um único arquivo. Adiciona quantas faixas quiser, reordena e, se quiser, põe fades no começo e no fim. A junção acontece no seu dispositivo: mesmo uma lista longa se emenda na hora e continua privada.',
      usesHeading: 'Usos comuns do juntar áudio',
      uses: [
        'Coletânea de podcast: emenda as gravações dos episódios em ordem num arquivo; publicar fica mais fácil.',
        'Medley: cola músicas uma atrás da outra, com crossfade nas emendas para nada estalar.',
        'Unir audiolivro: reúne arquivos por capítulos num só, para tocadores sem listas.',
        'Emendar entrevistas: reúne as tomadas num arquivo para transcrever e organizar.',
        'Memos de voz: emenda memos espalhados com um trecho de música, na ordem que escolher.',
        'Áudio de demonstração: emenda vários avisos num arquivo e importa no dispositivo de uma vez.',
      ],
      why: [
        {
          icon: 'layers',
          title: 'Formatos mistos se emendam bem',
          text: 'MP3, WAV e M4A podem convivem na lista: os arquivos são decodificados e ajustados a uma mesma taxa antes da emenda. Dezenas de faixas funcionam — o teto é a memória do seu dispositivo.',
        },
        {
          icon: 'waveform',
          title: 'Emendas sem estalo',
          text: 'Um crossfade de 0-5 segundos sobrepõe o fim de uma faixa ao começo da seguinte; no zero fica uma emenda firme, sem vão.',
        },
      ],
      howTo: [
        {
          name: 'Adicione as faixas',
          text: 'Arrasta dois ou mais arquivos de áudio para o quadro pontilhado, ou clica para escolher vários de uma vez. Misturar MP3, WAV e M4A não importa — as taxas são ajustadas automaticamente.',
        },
        {
          name: 'Defina a ordem',
          text: 'Coloca cada faixa com as setas para cima/baixo; a duração da prévia se atualiza em tempo real. Remove a faixa se mudar de ideia.',
        },
        {
          name: 'Ajuste o crossfade',
          text: 'O controle vai de 0 a 5 segundos: valores maiores sobrepõem as faixas vizinhas suavemente, zero é uma emenda firme sem vão. Também dá para fazer fade no começo e no fim.',
        },
        {
          name: 'Emende e leve o arquivo',
          text: 'Clica em exportar e baixa em MP3 (até 320 kbps) ou WAV sem perdas. Não há limite fixo de faixas — o teto é a memória do seu dispositivo.',
        },
      ],
      faqs: [
        {
          q: 'Posso emendar formatos de áudio diferentes?',
          a: 'Sim. Os arquivos são decodificados primeiro e ajustados a uma mesma taxa, então dá para emendar MP3, WAV e M4A numa passada. O formato de saída é sua escolha.',
        },
        {
          q: 'Quantos arquivos posso emendar?',
          a: 'Não há limite fixo — dezenas de faixas funcionam bem. O teto prático é a memória do seu dispositivo, porque tudo é processado localmente.',
        },
        {
          q: 'Posso mudar a ordem das músicas?',
          a: 'Sim. Cada faixa tem setas para cima e para baixo para definir a ordem antes de emendar. A duração da prévia atualiza na hora.',
        },
        {
          q: 'As faixas fazem crossfade entre si?',
          a: 'Sim. Aumente o crossfade para o fim de cada faixa se sobrepor ao começo da seguinte — a emenda aplica um fade suave entre vizinhas. No zero fica um corte firme: as duas partes se juntam sem vão.',
        },
        {
          q: 'A qualidade do arquivo emendado é boa?',
          a: 'O WAV emendado é sem perdas — o áudio não é comprimido de novo. O MP3 é recodificado uma vez, a até 320 kbps, diferença que quase ninguém percebe.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Adicione os arquivos e reordene com os botões subir/descer; os dois funcionam com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam formatos comuns no iPhone e no Android igualmente. Vários arquivos longos pedem mais memória; para pilhas muito longas, o computador é mais estável.',
        },
        {
          q: 'Posso emendar arquivos locais do Claude ou Cursor?',
          a: 'Esta página emenda no navegador. O controle de crossfade vai de 0 a 5 segundos, em passos de 0,5. /mcp emenda de 2 a 20 arquivos locais com ffmpeg, com crossfade de 0 a 5 segundos, e escreve estéreo 44100 Hz. Não mostra forma de onda. O app de chat continua vendo os caminhos.',
        },
      ],
      dropHint: 'Arrasta dois ou mais arquivos de áudio ou clica para procurar',
      screenshotsAlt: [
        'Zona de arrastar do juntar áudio: solte um arquivo ou procure, nada é enviado',
        'Área de trabalho do juntar áudio com o arquivo carregado',
        'Juntar áudio após exportar: a barra de estado nomeia o arquivo baixado',
      ],
      sections: [
        {
          heading: 'Emendar é pôr um arquivo atrás do outro',
          paragraphs: [
            'A página de emenda alinha arquivos inteiros numa fila: uma música, depois um memo de voz, depois o próximo capítulo. A lista pode ser reordenada, e um crossfade sobrepõe o fim de um ao começo do seguinte.',
            'Com o crossfade no zero fica um corte firme, sem vão. Formatos mistos são decodificados primeiro e escritos numa só exportação. Não é uma mesa de mistura: várias faixas nunca tocam ao mesmo tempo.',
          ],
        },
        {
          heading: 'Trabalhos que cabem nesta página',
          paragraphs: [
            'Use-a quando o resultado deve ser um único arquivo que um tocador abre direto:',
          ],
          bullets: [
            'Um memo de voz antes de uma música, na ordem que escolher.',
            'Gravações por capítulos emendadas para um tocador sem listas.',
            'Alguns clipes seguidos com um crossfade curto, para as emendas não estalarem.',
          ],
        },
        {
          heading: 'Quando precisa de camadas',
          paragraphs: [
            'Vozes sobre música, nível e pan por clipe, mudo e solo: isso é o editor multipista, até oito faixas. A emenda não consegue abaixar a música sob a voz.',
            'Não há limite fixo de arquivos. O teto é a memória do dispositivo, porque a emenda termina no navegador. Nada é enviado.',
          ],
        },
      ],
    },
    'wav-to-mp3': {
      cardLine: 'Reduza gravações WAV pesadas em MP3s fáceis de compartilhar, no bitrate que escolher.',
      name: 'Converter WAV para MP3',
      shortName: 'WAV para MP3',
      title: 'Converter WAV para MP3 — Online e grátis',
      description:
        'Converta WAV para MP3 no navegador — 128, 192 ou 320 kbps. Grátis, sem cadastro: o áudio é convertido no aparelho e nunca enviado a um servidor.',
      h1: 'Converter WAV para MP3 — Converter WAV em MP3',
      heroAlt: 'Converter um arquivo WAV em MP3 de 320 kbps',
      subtitle: 'Converta arquivos WAV para MP3 em segundos — direto no navegador, nada enviado.',
      intro:
        'Transforme gravações WAV pesadas em MP3 compactos sem instalar nada e sem mandar o áudio para um servidor. Solte o arquivo, escolha o bitrate — 320 kbps para música, 128 kbps para voz — e a conversão acontece no seu aparelho, em geral em alguns segundos.',
      usesHeading: 'Usos comuns de WAV para MP3',
      uses: [
        'Afinar gravações: reduz um arquivo de estúdio ou gravador até dar para enviar.',
        'Escuta do dia a dia: converte uma exportação sem perdas para 192 ou 320 kbps, de sobra na estrada.',
        'Anexos de e-mail: 128 kbps cabe uma aula dentro do limite de 25 MB.',
        'Arquivo em lote: converte uma pasta inteira de WAVs de uma vez, empacotada em ZIP.',
        'Converta e corte: gere o MP3 primeiro e corte o trecho no cortador de áudio.',
        'Memos de voz: voz precisa de pouco bitrate; o arquivo fica pequeno o bastante para enviar.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'O bitrate manda no tamanho',
          text: 'Um MP3 pesa cerca de um décimo do WAV: 50 MB viram 4-5 MB a 192 kbps. Seis passos de 64 a 320 kbps, cada um com estimativa de tamanho ao vivo na barra de exportação.',
        },
        {
          icon: 'layers',
          title: 'Conversão em lote de uma vez',
          text: 'Solte vários WAVs juntos; eles compartilham os mesmos ajustes e convertem um após o outro. Um arquivo sozinho baixa direto; dois ou mais voltam num ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Solte o WAV',
          text: 'Arraste um arquivo .wav para a página ou clique para procurar. Outros formatos de áudio (M4A, FLAC, OGG) convertem do mesmo jeito. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.',
        },
        {
          name: 'Escolha o bitrate',
          text: '320 kbps é indistinguível do original para quase todo mundo; 192 kbps é um bom equilíbrio; 128 kbps deixa gravações de voz pequenas.',
        },
        {
          name: 'Converta e baixe',
          text: 'Clique em Converter para MP3. O codificador roda no navegador e o MP3 baixa direto no aparelho.',
        },
      ],
      faqs: [
        { q: 'Posso converter mais de um WAV?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'Converter WAV para MP3 perde qualidade?',
          a: 'MP3 tem perdas, então alguma informação é descartada — mas em 320 kbps praticamente ninguém nota a diferença em relação ao WAV num teste cego. Se você precisa de perda zero, mantenha o WAV; este conversor existe para economizar espaço e tocar em qualquer lugar.',
        },
        {
          q: 'Qual bitrate eu devo escolher?',
          a: 'Use 320 kbps para músicas que você guarda, 192 kbps para ouvir e compartilhar no dia a dia, e 128 kbps para recados de voz, podcasts e gravações de aula — fala precisa de bem menos que música.',
        },
        {
          q: 'Quanto menor fica o MP3?',
          a: 'Cerca de um décimo do tamanho: um WAV de 50 MB vira uns 4–5 MB em 192 kbps, e cerca de 11 MB em 320 kbps. Os números exatos dependem da duração e da taxa de amostragem.',
        },
        {
          q: 'As tags e a capa do WAV são mantidas?',
          a: 'Por enquanto, não — o MP3 é gravado sem metadados, então título, artista e capa não passam. Você pode recolocar as tags depois em qualquer editor de tags.',
        },
        {
          q: 'O arquivo WAV é enviado para algum lugar?',
          a: 'Não. O arquivo é decodificado no navegador, codificado para MP3 por uma biblioteca que vem com este site e salvo de volta no disco. O áudio em si nunca sai do aparelho.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você escolhe o arquivo e a conversão fica nesta aba. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      {
        q: 'Posso converter um WAV local pelo Claude ou pelo Cursor?',
        a: 'Esta página converte no navegador a 128-320 kbps. /mcp chama o ffmpeg num arquivo que já está no seu computador. MP3, M4A e OGG podem ser 64, 96, 128, 192, 256 ou 320 kbps, e o padrão é 192. WAV é PCM de 16 bits. FLAC não tem perda. O app de chat ainda vê o caminho.',
      }],
      screenshotsAlt: [
        'Converter WAV para MP3: área de soltar, nada é enviado a um servidor',
        'Converter WAV para MP3: área de trabalho com o arquivo carregado',
        'Converter WAV para MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Qual bitrate escolher',
          paragraphs: [
            'O MP3 descarta parte do WAV. O bitrate é quanto ele mantém.',
          ],
          bullets: [
            'O menu é 64, 96, 128, 192 e 320 kbps.',
            'Esta página começa em 320.',
            'O MP3 codifica as amostras decodificadas uma vez. As tags não são copiadas.',
          ],
        },
        {
          heading: 'Quanto menor fica o MP3',
          paragraphs: [
            'Um WAV guarda cada amostra. Um MP3 guarda uma versão comprimida do que você consegue ouvir. Um WAV de 50 MB fica em torno de 4–5 MB a 192 kbps, e cerca de 11 MB a 320 kbps. O tamanho exato segue a duração e a taxa de amostragem.',
            'Se você ainda precisa do original, guarde o WAV. Esta página existe para a cópia que você compartilha tocar no celular, no carro e em uma caixa de som antiga, e para o arquivo ficar pequeno o bastante para enviar.',
          ],
        },
        {
          heading: 'Título, artista e capa não são copiados',
          paragraphs: [
            'O MP3 é escrito sem os metadados do WAV. Título da música, artista e capa não passam. Adicione depois no editor de tags MP3 se o player mostraria um nome vazio.',
            'Arquivos M4A, FLAC e OGG soltos aqui convertem do mesmo jeito. O FLAC tem página própria se esse é o formato de origem. Esta página é a do WAV.',
          ],
        },
        {
          heading: 'Converta primeiro, corte depois',
          paragraphs: [
            'Esta página converte o arquivo inteiro. Ela não recorta um trecho do WAV.',
          ],
          bullets: [
            'Precisa só de um minuto de uma gravação longa: converta, depois abra o cortador de áudio.',
            'O arquivo já é um MP3 e você só precisa dele menor: use comprimir áudio, não esta página.',
            'Você vai editar de novo depois da conversão: 320 kbps, ou mantenha o WAV e edite ele.',
          ],
        },
      ],
      dropHint: 'Solte arquivos WAV ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'flac-to-mp3': {
      cardLine: 'Converta arquivos FLAC sem perda em MP3 para players e apps que não aceitam FLAC.',
      name: 'Converter FLAC em MP3',
      shortName: 'FLAC para MP3',
      title: 'Converter FLAC em MP3 online grátis — 320 kbps',
      description:
        'Converta FLAC em MP3 no navegador: 128, 192 ou 320 kbps. Grátis, sem cadastro: sua música é convertida no aparelho e nunca enviada.',
      h1: 'Converter FLAC em MP3',
      heroAlt: 'Converter um arquivo FLAC em MP3 de 320 kbps',
      subtitle: 'Converta arquivos FLAC em MP3 em segundos — direto no navegador, sem enviar nada.',
      intro:
        'O FLAC soa perfeito e gasta meio disco duro para provar isso. Transforme sua biblioteca sem perdas em MP3s compactos que tocam no som do carro, caixas Bluetooth e aparelhos mais antigos — solte os arquivos, escolha o bitrate e a conversão acontece no seu próprio aparelho. Uma faixa FLAC de 25 MB vira um MP3 de 12 MB a 320 kbps em poucos segundos.',
      usesHeading: 'Usos comuns de FLAC para MP3',
      uses: [
        'Tocar no carro: faça a biblioteca sem perdas funcionar no som do carro e em aparelhos antigos.',
        'Afinar antes de viajar: reduza o álbum no celular antes de um trajeto longo sem Wi-Fi.',
        'Pastas compartilhadas: converta o álbum para uma cópia menor antes de compartilhar a pasta.',
        'Arquivo em duas cópias: o FLAC fica de arquivo, o MP3 para ouvir no dia a dia.',
        'Compatibilidade de downloads: transforme álbuns sem perdas comprados em MP3 que tocam em qualquer lugar.',
        'Organizar em lote: solte um álbum inteiro de uma vez; cada faixa converte e vai para o ZIP.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Transcodificado da fonte sem perdas',
          text: 'O FLAC é decodificado de volta às amostras originais e o MP3 é codificado uma vez, no bitrate escolhido — comprimido exatamente uma vez.',
        },
        {
          icon: 'layers',
          title: 'Álbuns inteiros em lote',
          text: 'Solte um álbum inteiro de uma vez; as faixas convertem em ordem e vão para um ZIP, mantendo a sequência.',
        },
      ],
      howTo: [
        {
          name: 'Solte o FLAC',
          text: 'Arraste um arquivo .flac até a página ou clique para procurar. Outros formatos sem perdas são convertidos do mesmo jeito. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.',
        },
        {
          name: 'Escolha o bitrate',
          text: '320 kbps é transparente para quase todo mundo; 192 kbps é o equilíbrio do dia a dia; 128 kbps deixa audiolivros e podcasts pequenos.',
        },
        {
          name: 'Converta e baixe',
          text: 'Clique em Converter para MP3. O codificador roda no seu navegador e o MP3 baixa direto no aparelho.',
        },
      ],
      faqs: [
        { q: 'Posso converter mais de um FLAC?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'Converter FLAC para MP3 perde qualidade?',
          a: 'O MP3 é com perdas, então alguma informação é descartada — mas a 320 kbps praticamente ninguém distingue o MP3 do FLAC num teste cego. Guarde o FLAC como cópia de arquivo e trate o MP3 como a cópia portátil.',
        },
        {
          q: 'Qual bitrate escolher?',
          a: '320 kbps para a música que você guarda, 192 kbps para o dia a dia e compartilhar, 128 kbps para audiolivros, podcasts e aulas — a voz precisa de muito menos que a música.',
        },
        {
          q: 'Quanto menor fica o MP3?',
          a: 'Uma música típica de cinco minutos cai de uns 25 MB em FLAC para cerca de 12 MB a 320 kbps, 7 MB a 192 e 5 MB a 128. Os números exatos dependem da duração e da taxa de amostragem.',
        },
        {
          q: 'As tags e capas do FLAC são mantidas?',
          a: 'Por enquanto não — o MP3 é escrito sem metadados, então título, artista e capa não vêm junto. Você pode readicionar depois com qualquer editor de tags.',
        },
        {
          q: 'Meu FLAC é enviado para algum lugar?',
          a: 'Não. O arquivo é decodificado no seu navegador e codificado em MP3 por uma biblioteca que vem com este site. O áudio nunca sai do seu aparelho.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você escolhe o arquivo e a conversão fica nesta aba. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Converter FLAC em MP3: área de soltar, nada é enviado a um servidor',
        'Converter FLAC em MP3: área de trabalho com o arquivo carregado',
        'Converter FLAC em MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Por que converter FLAC em MP3',
          paragraphs: [
            'FLAC é sem perdas e grande. MP3 é o que a maioria dos celulares, carros e players antigos realmente abre. Um FLAC de 25 MB costuma ficar perto de 12 MB a 320 kbps, e menor a 192 ou 128.',
            'A conversão decodifica o FLAC e codifica um novo MP3. Guarde o FLAC se você ainda precisa dele.',
          ],
        },
        {
          heading: 'Bitrate e o que fica de fora',
          paragraphs: [
            'O menu de formato é só MP3, em três bitrates:',
          ],
          bullets: [
            '320 kbps quando o arquivo deve ficar perto do FLAC para ouvir.',
            '192 kbps para fala ou uma cópia menor para reproduzir em streaming.',
            '128 kbps quando o tamanho importa mais que a oitava aguda.',
          ],
        },
        {
          heading: 'Tags, capa e a próxima edição',
          paragraphs: [
            'Título, artista e capa não são copiados. O MP3 é escrito sem metadados. Recoloque com o editor de tags MP3 depois de exportar.',
            'Corte ou recorte depois da conversão, não antes, se você quer a edição no arquivo menor. WAV para MP3 é a página irmã quando a origem é WAV, não FLAC.',
          ],
        },
      ],
      dropHint: 'Solte arquivos FLAC ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'mp3-to-wav': {
      cardLine: 'Descompacte MP3 para WAV para editar, transcrever ou ouvir em detalhe.',
      name: 'Converter MP3 em WAV',
      shortName: 'MP3 para WAV',
      title: 'Converter MP3 em WAV online grátis',
      description:
        'Converta MP3 em WAV sem perdas no navegador, para editar, arquivar e apps que pedem PCM. Grátis, sem cadastro, sem envio.',
      h1: 'Converter MP3 em WAV — Transformar um MP3 em um arquivo WAV',
      heroAlt: 'Decodificar um MP3 em um WAV sem compressão',
      subtitle: 'Decodifique MP3 em áudio PCM limpo em segundos — direto no navegador, sem enviar nada.',
      intro:
        'Converter MP3 para WAV não devolve o que a compressão removeu — nenhum app faz isso. O que ele entrega é o áudio decodificado como PCM limpio de 16 bits, sem novas perdas: a entrada certa para editores de áudio, samplers e qualquer coisa que peça WAV, e o ponto de partida mais seguro se o arquivo ainda vai ser editado. A decodificação acontece no seu aparelho, normalmente num segundo.',
      usesHeading: 'Usos comuns de MP3 para WAV',
      uses: [
        'Encaixe de software: entregue o MP3 a um editor, DAW ou plataforma que só aceita WAV.',
        'Evite perda de geração: edite no WAV e comprima de volta para MP3 uma vez, no fim.',
        'Reparo de áudio: decodifique para uma base sem perdas antes de [remover ruído](/noise-remover) ou [equalizar](/equalizer) — uma camada a menos de perda.',
        'Preparar a transcrição: alguns transcritores preferem WAV; decodifique primeiro e entregue.',
        'Material para samplers: passe um MP3 para WAV num sampler ou caixa de ritmos.',
        'Cópia de arquivo: guarde uma versão sem compressão para a masterização e revisão de qualidade.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Decodificado, não recomprimido',
          text: 'O WAV guarda todas as amostras decodificadas; esta etapa não perde nada, então editar e reparar acontece sobre uma base sem perdas.',
        },
        {
          icon: 'layers',
          title: 'Lotes empacotados',
          text: 'Solte vários MP3 de uma vez; cada um decodifica em ordem e vai para um único ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Solte o MP3',
          text: 'Arraste um arquivo .mp3 até a página ou clique para procurar. Outros formatos comprimidos são decodificados do mesmo jeito. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.',
        },
        {
          name: 'Deixe WAV selecionado',
          text: 'O formato de saída fica fixado em WAV sem perdas — PCM de 16 bits na taxa de amostragem original do arquivo.',
        },
        {
          name: 'Converta e baixe',
          text: 'Clique em Converter para WAV. O áudio decodificado é gravado localmente e o download começa na hora.',
        },
      ],
      faqs: [
        { q: 'Posso converter mais de um MP3 para WAV?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'Converter MP3 para WAV melhora a qualidade?',
          a: 'Não — e desconfie de qualquer conversor que prometa isso. Os dados que o codificador descartou já se foram. O WAV contém exatamente o que o MP3 decodifica, e é justamente por isso que ele é o formato certo para seguir editando: não adiciona outra geração com perdas.',
        },
        {
          q: 'Então por que converter para WAV?',
          a: 'Para editar e arquivar. WAV é o formato que editores de áudio, samplers e ferramentas de gravação de CD esperam, e um master sem perdas evita acumular artefatos a cada processamento. O fluxo honesto: converta para WAV, edite e exporte para MP3 uma única vez no final.',
        },
        {
          q: 'Qualquer bitrate de MP3 funciona?',
          a: 'Todos — a decodificação é exata para qualquer MP3 válido, de 64 a 320 kbps. O WAV simplesmente vai conter o que o MP3 tem, na taxa de amostragem original.',
        },
        {
          q: 'Quanto fica o tamanho do WAV?',
          a: 'Cerca de dez vezes o MP3. Uma música de três minutos a 44,1 kHz estéreo vira uns 30 MB em PCM de 16 bits — esse é o tamanho real do áudio não comprimido, não uma ineficiência do conversor.',
        },
        {
          q: 'Meu MP3 é enviado para algum lugar?',
          a: 'Não. O arquivo é decodificado no seu navegador e gravado como WAV localmente. Nada sai do seu aparelho.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você escolhe o arquivo e a conversão fica nesta aba. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Converter MP3 em WAV: área de soltar, nada é enviado a um servidor',
        'Converter MP3 em WAV: área de trabalho com o arquivo carregado',
        'Converter MP3 em WAV: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'MP3 para WAV não recupera o que o MP3 descartou',
          paragraphs: [
            'A página decodifica o MP3 em WAV PCM de 16 bits. Editores e DAWs que recusam MP3 abrem esse WAV. Os agudos que faltam da codificação original não voltam.',
            'Use quando o próximo passo não pode somar outra geração de MP3: corte, faça fade ou mixe o WAV, e codifique uma vez no final.',
          ],
        },
        {
          heading: 'Quando a conversão vale a pena',
          paragraphs: [
            'O menu de formato exporta só WAV. É a escolha certa em alguns casos concretos:',
          ],
          bullets: [
            'Um programa ou gravador de hardware que só aceita WAV.',
            'Uma edição que você vai codificar uma vez depois, para não empilhar MP3 sobre MP3.',
            'Uma entrega para alguém que pediu PCM, não um MP3 menor.',
          ],
        },
        {
          heading: 'Tamanho e o outro sentido',
          paragraphs: [
            'O WAV é muito maior que o MP3. Esse tamanho é o PCM sem compressão, não detalhe novo.',
            'Ir no outro sentido, WAV para MP3, é outra página, e ela escolhe um bitrate. Deixar um MP3 menor sem mudar para WAV é o compressor de áudio.',
          ],
        },
      ],
      dropHint: 'Solte arquivos MP3 ou clique para procurar',
      exportLabel: 'Converter para WAV',
    },
    'compress-audio': {
      cardLine: 'Reduza arquivos de áudio grandes para o tamanho ou bitrate desejado sem perder a clareza.',
      name: 'Comprimir áudio',
      shortName: 'Compressor',
      title: 'Comprimir áudio online grátis — reduza o tamanho',
      description:
        'Encolha arquivos MP3, WAV e outros áudios no navegador — escolha um bitrate menor, ouça e baixe. Grátis, sem envio.',
      h1: 'Comprimir áudio — Reduzir o tamanho de um MP3',
      heroAlt: 'Recodificar um WAV ou MP3 grande em um bitrate mais baixo',
      howToIntro: 'O compressor num arquivo real',
      subtitle: 'Abaixe o bitrate e o arquivo continua tocando — reduza o áudio em até 90% no navegador.',
      intro:
        'Arquivos de áudio pesam por causa do bitrate, e o jeito honesto de encolher um deles é recodificá-lo num bitrate menor: um MP3 de 320 kbps vira 128 kbps com cerca de 40% do tamanho, e um WAV pesado vira MP3 num décimo do tamanho. Escolha o alvo, ouça a prévia e exporte — a codificação acontece no seu aparelho, então até gravações longas terminam em segundos.',
      usesHeading: 'Usos comuns de comprimir áudio',
      uses: [
        'WeChat/QQ: o arquivo passou do limite e não envia; comprima até o teto e ele vai.',
        'Anexos de e-mail: esprema uma gravação de aula dentro do limite de 25 MB.',
        'Formulários de upload: formulários de inscrição ou envio têm limite de tamanho; comprima até passar.',
        'Afinar gravações de voz: comprima uma reunião longa num arquivo pequeno para guardar.',
        'Espaço do aparelho: o celular está cheio; reduza o áudio grande antes de guardar.',
        'Compatibilidade com aparelhos antigos: tocadores velhos engasgam com arquivos grandes; comprimidos, tocam lisos.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Deduz o bitrate a partir de um tamanho-alvo',
          text: 'Defina um tamanho-alvo, digamos 10 MB; o compressor calcula o bitrate pela duração e chega lá de uma vez.',
        },
        {
          icon: 'layers',
          title: 'Compressão em lote',
          text: 'Os arquivos compartilham um mesmo tamanho-alvo, comprimem um após o outro e vão para um ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Solte o arquivo',
          text: 'Adicione um MP3, WAV, M4A ou outro áudio. Ele é decodificado no seu aparelho e nunca enviado. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.',
        },
        {
          name: 'Escolha o tamanho-alvo',
          text: 'Menos bitrate, menos peso: 192 kbps para música do dia a dia, 128 kbps ainda soa bem para a maioria, 64–96 kbps é ideal para a voz.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Ouça a prévia comprimida e salve. Confira se as vozes e os pratos continuam limpos no bitrate escolhido.',
        },
      ],
      faqs: [
        { q: 'Posso diminuir mais de um arquivo?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'Como funciona a compressão de áudio aqui?',
          a: 'O arquivo é decodificado e recodificado como MP3 no bitrate que você escolher. O tamanho cresce na proporção do bitrate: um minuto de estéreo fica em torno de 2,4 MB a 320 kbps, 1 MB a 128 e 0,5 MB a 64.',
        },
        {
          q: 'Qual bitrate mantém a boa qualidade?',
          a: '192 ou 320 kbps para a música que você liga; 128 kbps para ouvir sem frescura — a maioria não distingue de 320 num teste cego. Voz e podcast seguem claros até 64–96 kbps.',
        },
        {
          q: 'Comprimir pode piorar a qualidade?',
          a: 'Sim, num caso específico: recodificar um MP3 já comprimido num bitrate bem menor empilha uma segunda geração com perdas sobre a primeira. Comprimir a partir de WAV ou FLAC é mais limpo — guardando o original, você pode tentar outro bitrate quando quiser.',
        },
        {
          q: 'Quão pequeno dá para ir?',
          a: '64 kbps é o piso prático: uns 0,5 MB por minuto. A voz continua perfeitamente clara; a música começa a soar abafada e com chiado. Abaixo disso, codecs dedicados como o Opus se saem melhor que o MP3.',
        },
        {
          q: 'Meu arquivo é enviado para algum lugar?',
          a: 'Não. Decodificação e codificação acontecem dentro da aba do navegador — você pode desconectar a internet depois que a página carregar e a compressão continua funcionando.',
        },
        {
          q: 'Isso iguala as partes altas e baixas?',
          a: 'Não. Esta página só recodifica num bitrate menor para o arquivo ocupar menos espaço. Para baixar os picos e subir as palavras baixas, use o compressor de nível. O bitrate da exportação continua sendo o que você escolher.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você escolhe o arquivo e a conversão fica nesta aba. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Comprimir áudio: área de soltar, nada é enviado a um servidor',
        'Comprimir áudio: área de trabalho com o arquivo carregado',
        'Comprimir áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Este compressor encolhe o arquivo, não a dinâmica',
          paragraphs: [
            'Comprimir áudio recodifica em um bitrate MP3 menor. Um arquivo de 320 kbps a 128 kbps fica com cerca de 40 por cento do tamanho. As partes baixas e altas continuam na mesma relação.',
            'Igualar uma voz alta e uma baixa é o compressor de nível, outra página. Ele não deixa o arquivo menor.',
          ],
        },
        {
          heading: 'Qual bitrate escolher',
          paragraphs: [
            'O menu vai de 320 até 64 kbps. Escolha pelo que o arquivo é:',
          ],
          bullets: [
            '192 ou 320 kbps para música que você ainda vai ouvir com atenção.',
            '128 kbps para fala, um recado de voz ou uma cópia que precisa enviar.',
            '64 ou 96 kbps só quando o destino é minúsculo e a fala basta.',
          ],
          table: {
            headers: [
              'Para onde o arquivo vai',
              'Limite',
              'Ajuste sugerido',
            ],
            rows: [
              [
                'Anexo do Gmail',
                '25 MB (contas pessoais)',
                '128 kbps: um recado de 10 minutos fica perto de 10 MB',
              ],
              [
                'Telegram',
                '2 GB, ou 4 GB com Premium',
                'Qualquer bitrate cabe; escolha 128 kbps para economizar dados móveis',
              ],
              [
                'Seu próprio alvo',
                'Você decide',
                'Um minuto tem cerca de 1 MB a 128 kbps, e cerca de 0,5 a 64',
              ],
            ],
          },
          outro: [
            'Os limites mudam: estes dois foram verificados em outubro de 2026. Aplicativos de conversa mantêm mídia de áudio sob limites mais apertados que documentos, e os limites mudam sem aviso. A conta por minuto acima continua valendo dos dois jeitos.',
          ],
        },
        {
          heading: 'O que uma segunda codificação custa',
          paragraphs: [
            'Cada passagem descarta um pouco mais. Se o arquivo já está em 128 kbps, codificar de novo em 128 não ajuda, e codificar mais baixo deixa o som mais opaco.',
            'Tags e capa não fazem parte deste encolhimento. Se o MP3 já é pequeno e você só precisa de um novo título ou capa, use o editor de tags MP3, que copia os bytes do áudio sem mudança.',
          ],
        },
      ],
      dropHint: 'Solte arquivos de áudio ou clique para procurar',
      exportLabel: 'Comprimir',
    },
    'bitrate-converter': {
      cardLine: 'Recodifique qualquer áudio como MP3 a 64, 96, 128, 192 ou 320 kbps.',
      name: 'Conversor de bitrate',
      shortName: 'Bitrate',
      title: 'Conversor de bitrate — MP3 de 64 a 320 kbps',
      description:
        'Mude um áudio para MP3 de 64, 96, 128, 192 ou 320 kbps no navegador. Aumentar o número não devolve o detalhe. Nada é enviado.',
      h1: 'Conversor de bitrate: ponha um MP3 em 64–320 kbps',
      heroAlt: 'Cinco barras de bitrate, a do meio marcada em 192 kbps',
      subtitle: 'Ponha um MP3 em 64, 96, 128, 192 ou 320 kbps. Um número maior não devolve o detalhe.',
      intro:
        'Escolha o bitrate do MP3 e recodifique o arquivo nesta aba. O menu abre em 192 kbps. Um minuto de estéreo pesa cerca de 2,4 MB a 320 kbps, 1,4 MB a 192, 1 MB a 128, 0,7 MB a 96 e 0,5 MB a 64. Aumentar o número num arquivo que já tem perda não devolve o detalhe que falta. A decodificação e a codificação ficam no navegador.',
      usesHeading: 'Usos comuns da conversão de bitrate de MP3',
      uses: [
        'Especificações de entrega: a plataforma pede 192 ou 128 kbps; entregue conforme o pedido.',
        'Normalização em lote: uma pilha de MP3s com bitrates misturados, unificada num só ajuste.',
        'Afinar a voz: a voz desce para 96 ou 64 kbps, cortando o tamanho pela metade de novo.',
        'Correção de compatibilidade: alguns aparelhos só aceitam 128 kbps — converta uma cópia para eles.',
        'Subir com cuidado: subir um bitrate baixo não vai soar melhor; suba só por compatibilidade.',
        'Escuta de rascunho: gere primeiro um rascunho a 96 kbps, confirme, depois exporte em bitrate alto.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Uma recodificação, só essa',
          text: 'De MP3 para MP3 ainda decodifica e recodifica — esta página comprime exatamente uma vez, sem transcodificações repetidas depois.',
        },
        {
          icon: 'layers',
          title: 'Lote num só bitrate',
          text: 'O lote inteiro compartilha um ajuste, convertendo em ordem e empacotando num ZIP.',
        },
      ],
      howTo: [
        { name: 'Adicione o arquivo', text: 'Solte qualquer áudio que este navegador consiga decodificar. A conversão fica na aba. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.' },
        { name: 'Escolha o bitrate', text: 'Abra o menu de formato. Ele começa em 192 kbps. As outras taxas são 320, 128, 96 e 64.' },
        { name: 'Exporte o MP3', text: 'O arquivo é codificado na taxa que você escolheu. Tags e capa não são copiados.' },
      ],
      faqs: [
        { q: 'Posso mudar o bitrate de mais de um arquivo?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: '320 kbps deixa um MP3 de 128 kbps melhor?',
          a: 'Não. O codificador só guarda o que a fonte ainda tem. Um MP3 de 128 kbps salvo de novo a 320 kbps é um arquivo maior da mesma gravação. Comece pelo WAV ou pela gravação original se você precisa do detalhe.',
        },
        {
          q: 'Qual bitrate eu escolho?',
          a: '320 kbps para música que você ainda vai ouvir com atenção, 192 como a taxa em que o menu abre, 128 para voz ou um arquivo que você precisa enviar, e 96 ou 64 só quando o destino é pequeno e a voz basta. Um minuto de estéreo pesa cerca de 2,4 MB, 1,4 MB, 1 MB, 0,7 MB e 0,5 MB nessas cinco taxas.',
        },
        {
          q: 'Qual a diferença para comprimir áudio?',
          a: 'O mesmo codificador, outro trabalho. Esta página serve para definir um bitrate e abre em 192 kbps. Comprimir áudio serve para deixar o arquivo menor e abre em 128 kbps. WAV para MP3 só aceita WAV e abre em 320 kbps.',
        },
        {
          q: 'Dá para converter para WAV ou Opus aqui?',
          a: 'Não. Esta página grava MP3 a 320, 192, 128, 96 ou 64 kbps. WAV não é um bitrate. Para uma cópia WAV, use MP3 para WAV. Opus e AAC não estão no menu.',
        },
        {
          q: 'Meu arquivo é enviado?',
          a: 'Não. O navegador decodifica o arquivo e codifica o MP3 nesta aba, com o mesmo codificador local que comprimir áudio usa. Depois que a página carregou, a conversão continua sem rede.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Escolha o arquivo e a conversão fica nesta aba. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo muito longo usa mais memória, então um computador fica mais estável depois de cerca de uma hora.',
        },
      ],
      screenshotsAlt: [
        'Conversor de bitrate: área de soltar, nada é enviado a um servidor',
        'Conversor de bitrate: área de trabalho com o arquivo carregado',
        'Conversor de bitrate: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O que as cinco taxas pesam',
          paragraphs: [
            'O menu é 320, 192, 128, 96 e 64 kbps, taxa constante. Um minuto de estéreo tem cerca de 2,4 MB, 1,4 MB, 1 MB, 0,7 MB e 0,5 MB nessa ordem. A página abre em 192 kbps.',
            'Um WAV não tem bitrate próprio, então o número que você escolhe é a primeira passagem com perdas. Um arquivo MP3, M4A, OGG ou Opus já perdeu algo, e esta passagem perde um pouco mais.',
          ],
        },
        {
          heading: 'Qual taxa serve ao trabalho',
          paragraphs: [
            'Escolha pelo que acontece com o arquivo depois, não pelo maior número do menu.',
          ],
          bullets: [
            '320 kbps quando a origem é um WAV e você ainda quer perto do original.',
            '192 kbps como a taxa comum para música, que é onde o menu começa.',
            '128, 96 ou 64 kbps para fala, um recado ou uma cópia que precisa ser pequena.',
          ],
        },
        {
          heading: 'Um número maior não é uma restauração',
          paragraphs: [
            'Codificar um MP3 de 128 kbps em 320 kbps guarda as mesmas lacunas em um arquivo maior. A única forma de recuperar os agudos que faltam é uma fonte que ainda os tenha.',
            'É o mesmo codificador de comprimir áudio. Use aquela página quando o objetivo é um arquivo menor e não importa em qual das cinco taxas ele começa. Use WAV para MP3 quando a origem é WAV e você quer 320 kbps sem escolher.',
          ],
        },
      ],
      dropHint: 'Solte arquivos de áudio ou clique para escolher',
      exportLabel: 'Converter',
    },
    'reverse-audio': {
      cardLine: 'Toque uma faixa ao contrário para criar efeitos, conferir a mixagem ou se divertir.',
      name: 'Reverter áudio',
      shortName: 'Reverter áudio',
      title: 'Reverter áudio — Toque músicas de trás para frente',
      description:
        'Toque qualquer música ou gravação de trás para frente no navegador. Um clique para reverter, ouça na hora e salve em MP3 ou WAV — grátis, e nada é enviado.',
      h1: 'Reverter áudio — Tocar uma música de trás para frente',
      heroAlt: 'Virar um recado de voz para tocar do fim',
      subtitle: 'Toque qualquer música ou gravação de trás para frente — um clique, direto no navegador.',
      intro:
        'Vire qualquer faixa para tocar do fim ao começo: procure mensagens escondidas em músicas, monte efeitos de prato ao contrário para um mix, ou só ouça como sua voz fica invertida. O arquivo inteiro é revertido no aparelho e só é gravado quando você exporta.',
      usesHeading: 'Usos comuns de inverter áudio',
      uses: [
        'Crescente reverso: crie uma transição de sucção com um prato ou um ataque vocal.',
        'Mensagens escondidas: meta uma frase gravada ao contrário, ouvida como easter egg.',
        'Autochecagem da mixagem: ouça ao contrário; os problemas aparecem bem mais.',
        'Material para samples: bateria e voz invertidas são clássicos da música eletrônica.',
        'Trilha para vídeo: reproduza a cena ao contrário e case com o som invertido.',
        'Exercícios de estudo: treine frases de idioma ou instrumento em sentido inverso.',
      ],
      why: [
        {
          icon: 'reverse',
          title: 'Inversão de um clique',
          text: 'Inverta o arquivo inteiro ou uma seleção num clique: a ordem das amostras vira por completo e a duração fica igual.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'A inversão termina no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        {
          name: 'Adicione o áudio',
          text: 'Solte um MP3, WAV, M4A ou outro arquivo na página — ele não sai do aparelho.',
        },
        {
          name: 'Reverta',
          text: 'Clique em Reverter reprodução e aperte play para ouvir a faixa de trás para frente. Clique de novo para voltar ao normal.',
        },
        {
          name: 'Salve o resultado',
          text: 'Exporte o áudio revertido como MP3 ou WAV sem perdas. O download começa sozinho.',
        },
      ],
      faqs: [
        {
          q: 'Por que eu tocaria uma música de trás para frente?',
          a: 'Músicos usam áudio revertido para efeitos criativos — crescendos de prato invertidos, solos de guitarra ao contrário, texturas ambiente. Também é o jeito clássico de procurar mensagens gravadas ao contrário na faixa e, sinceramente, ouvir a própria voz de trás para frente é só divertido.',
        },
        {
          q: 'Reverter muda a qualidade?',
          a: 'Não. Exportar para WAV só reordena as amostras — o áudio fica idêntico bit a bit ao original, só que de trás para frente. A exportação em MP3 recodifica uma vez no bitrate que você escolher.',
        },
        {
          q: 'Dá para reverter só uma parte da música?',
          a: 'Sim. Selecione o trecho na forma de onda, coloque o modo em Manter seleção e clique em Reverter — só essa parte é exportada, de trás para frente.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. O botão de reverter e a forma de onda aceitam toque, e a exportação baixa direto no iOS e no Android.',
        },
        {
          q: 'Reverter é mesmo grátis e privado?',
          a: 'Sim — sem cadastro, sem marca d\'água, sem limites. A reversão acontece no navegador com a Web Audio API, então o arquivo nunca é enviado para lugar nenhum.',
        },
      ],
      screenshotsAlt: [
        'Reverter áudio: área de soltar, nada é enviado a um servidor',
        'Reverter áudio: área de trabalho com o arquivo carregado',
        'Reverter áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Reverter toca as amostras de trás para frente',
          paragraphs: [
            'A página inverte o áudio selecionado para o fim tocar primeiro. Você pode reverter o arquivo inteiro ou só a seleção. Reverter não muda volume nem tom.',
            'A exportação ainda é uma codificação. WAV mantém o PCM revertido sem geração de MP3. MP3 grava um novo arquivo do áudio revertido.',
          ],
        },
        {
          heading: 'Para que as pessoas usam',
          paragraphs: [
            'É uma reversão direta, não um decodificador de mensagem escondida nem um separador de faixas:',
          ],
          bullets: [
            'Um prato ou impacto revertido como entrada.',
            'Conferir uma frase de ouvido, só a seleção, e depois desfazer.',
            'Um arquivo inteiro virado para uma passagem de design de som.',
          ],
        },
        {
          heading: 'O que continua igual',
          paragraphs: [
            'Desfazer volta atrás. Redefinir recarrega o arquivo que você soltou. O arquivo original no disco não é sobrescrito.',
            'Se o objetivo é uma música mais lenta ou uma voz mais grave, reverter é o controle errado. A velocidade muda o tom com o tempo. O alterador de tom mantém a duração.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Inverter e baixar',
    },
    'change-audio-speed': {
      cardLine: 'Acelere aulas a 2× ou desacelere riffs para aprender — o tom permanece.',
      name: 'Acelerar áudio',
      shortName: 'Velocidade',
      title: 'Acelerar áudio online — ou desacelerar',
      description:
        'Acelere ou desacelere qualquer áudio de 0,5× a 2× no navegador. Ouça na hora e exporte MP3 ou WAV — grátis, privado, nada enviado.',
      h1: 'Acelerar áudio — Acelerar ou desacelerar o áudio',
      heroAlt: 'Deixar uma música mais lenta para praticar, ou acelerar uma aula',
      subtitle: 'Acelere ou desacelere qualquer áudio de 0,5× a 2× — direto no navegador.',
      intro:
        'Transforme uma aula de 40 minutos em 20 minutos rápidos, desacelere um solo de guitarra até a metade para praticar, ou encaixe uma faixa num vídeo mais curto. Arraste o controle de velocidade, ouça a mudança na hora e exporte — o áudio é reamostrado no aparelho e nunca enviado.',
      usesHeading: 'Usos comuns de mudar a velocidade do áudio',
      uses: [
        'Consumir conteúdo longo: podcasts e aulas a 1,25x-1,5x economizam metade do tempo.',
        'Devagar para o detalhe: voz ou solo a meia velocidade, nota por nota.',
        'Provar o encaixe: adianta rápido para confirmar o conteúdo, depois fixa a velocidade para ouvir com calma.',
        'Moldar samples: toque um sample mais rápido ou mais devagar até achar o feel.',
        'Aprendizado de idiomas: desacelere a faixa e acompanhe a leitura.',
        'Vozes de personagem: acelerada soa cartunesca, lenta soa grave.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Contínuo de 0,5x a 2x',
          text: 'O controle varre a velocidade sem degraus, e o tom se move junto — para manter a afinação, use o [mudador de tempo](/tempo-changer).',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'A mudança de velocidade termina no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        {
          name: 'Solte o arquivo',
          text: 'Adicione um MP3, WAV, M4A ou outro arquivo de áudio — ele fica no aparelho o tempo todo.',
        },
        {
          name: 'Defina a velocidade',
          text: 'Arraste o controle de velocidade entre 0,5× e 2×. Use a forma de onda para selecionar só um trecho se quiser mudar apenas parte do arquivo.',
        },
        {
          name: 'Ouça e exporte',
          text: 'Reproduza o resultado para conferir o ritmo e salve em MP3 ou WAV. Um arquivo de 10 minutos em 2× exporta em cerca de um segundo.',
        },
      ],
      faqs: [
        {
          q: 'Mudar a velocidade muda o tom?',
          a: 'Nesta página, velocidade e tom andam juntos: 2× fica cerca de uma oitava acima, 0,5× cerca de uma oitava abaixo. O alterador de tempo mantém o tom e muda a duração, de 0,75× a 1,25× em passos de 0,01. Para mudar o tom e manter a duração, use o alterador de tom.',
        },
        {
          q: 'Quais velocidades posso escolher?',
          a: 'Qualquer valor de 0,5× a 2×, em passos de 0,05. Metade da velocidade é o ponto certo para transcrever fala rápida ou aprender solos; 1,25–1,5× é confortável para ouvir aulas e podcasts mais rápido.',
        },
        {
          q: 'A exportação é rápida?',
          a: 'A mudança de velocidade é renderizada offline pelo navegador, na velocidade real de processamento — uma faixa de 10 minutos leva um ou dois segundos, seja qual for o fator que você escolher.',
        },
        {
          q: 'Dá para acelerar só uma parte da faixa?',
          a: 'Sim. Selecione o trecho na forma de onda, coloque o modo em Manter seleção e escolha a velocidade — a exportação contém só aquela parte, mais rápida ou mais lenta.',
        },
        {
          q: 'Existe limite de duração do arquivo?',
          a: 'Não há um limite artificial. O teto prático é a memória do aparelho — cerca de uma hora de áudio num computador comum.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você arrasta a forma de onda com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Acelerar áudio: área de soltar, nada é enviado a um servidor',
        'Acelerar áudio: área de trabalho com o arquivo carregado',
        'Acelerar áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Velocidade e tom andam juntos',
          paragraphs: [
            'Este controle toca o arquivo mais rápido ou mais lento como uma fita, de 0,5× a 2×. Mais rápido significa arquivo mais curto e tom mais alto. Mais lento significa arquivo mais longo e tom mais baixo. 2× fica cerca de uma oitava acima, 0,5× cerca de uma oitava abaixo.',
            'Manter o tom enquanto a duração muda é o [mudar tempo](/tempo-changer), de 0,75× a 1,25×. Esta página ainda move o tom com a velocidade. Uma voz mais aguda ou mais grave com a mesma duração é o [alterador de tom](/pitch-changer), até 12 semitons.',
          ],
        },
        {
          heading: 'Onde o controle é útil',
          paragraphs: [
            'Use quando a mudança de tom é aceitável ou até o ponto:',
          ],
          bullets: [
            'Uma aula ou recado de voz que você quer passar mais rápido, com o tom de esquilo incluso.',
            'Uma passagem mais lenta para transcrever, com a voz descendo.',
            'Uma prévia rápida de um clipe em outro tempo antes de exportar.',
          ],
        },
        {
          heading: 'Músicas slowed são a outra página',
          paragraphs: [
            'A página [slowed + reverb](/slowed-reverb) é este mesmo controle de velocidade mais uma reverb de 2,2 segundos. O tom ainda segue a velocidade. Esta página é só o controle de velocidade.',
            'Acima de 100 por cento na página slowed é a direção nightcore. Faça isso lá se você também quer o controle de reverb. Exporte aqui se só quer a nova duração.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Mudar a velocidade e baixar',
    },
    'increase-volume': {
      cardLine: 'Eleve áudios de voz baixos até 4× com limitador, sem distorcer nada.',
      name: 'Aumentar volume do MP3',
      shortName: 'Aumentar volume',
      title: 'Aumentar volume do MP3 — Deixe o áudio mais alto grátis',
      description:
        'Deixe áudios baixos mais altos — aumente MP3 e outros arquivos em até 4× no navegador. Um limitador mantém o som limpo. Grátis, e nada é enviado.',
      h1: 'Aumentar volume do MP3 online grátis — Deixar um MP3 mais alto',
      heroAlt: 'Aumentar o volume de um MP3 sem distorcer',
      subtitle: 'Aumente gravações baixas em até 4× — com limiter, para nada clipar.',
      intro:
        'Corrija gravações baixas demais: recados de voz do celular, aulas gravadas do fundo da sala, trilhas de vídeo extraídas em volume baixo. Suba o volume até 4× (+12 dB) e um limiter embutido segura os picos, então o resultado fica mais alto sem virar distorção.',
      usesHeading: 'Usos comuns de aumentar o volume',
      uses: [
        'Memos de voz do celular: voz gravada longe demais do microfone, erguida até ficar clara — o [guia do memo de voz baixo](/guides/why-is-my-voice-memo-so-quiet) mostra os passos no iPhone.',
        'Aulas da última fila: gravadas do fundo da sala, com o limitador segurando os picos na subida.',
        'Cama para vídeo: um MP3 quieto alto o bastante para ficar sob o vídeo, sem clipping.',
        'Resgate de entrevistas: uma faixa gravada baixa demais, erguida até cada palavra ficar clara.',
        'Backups de reunião: uma gravação reserva com volume alto é melhor que nada.',
        'Fones com teto baixo: em aparelhos de volume máximo baixo, erga o arquivo de origem.',
      ],
      why: [
        {
          icon: 'volume',
          title: 'O limitador segura os picos',
          text: 'O controle vai até 400% (cerca de +12 dB). Um aumento moderado de 150-250% costuma ficar limpo; acima de 300% os picos começam a bombear — julgue de ouvido.',
        },
        {
          icon: 'scissors',
          title: 'Alto, mas limpo',
          text: 'Se começar a soar apertado, volte 10-20% — alto e limpo ganha de alto no máximo.',
        },
      ],
      howTo: [
        {
          name: 'Adicione o áudio',
          text: 'Solte um MP3, WAV, M4A ou outro arquivo baixo na página — ele é processado só no seu aparelho.',
        },
        {
          name: 'Aumente o volume',
          text: 'Arraste o controle de volume até 400%. Ouça enquanto ajusta; o limiter segura automaticamente os picos mais altos.',
        },
        {
          name: 'Exporte o arquivo mais alto',
          text: 'Salve em MP3 ou WAV. Se ainda soar forçado, volte 10–20% — alto e limpo vale mais do que o máximo possível.',
        },
      ],
      faqs: [
        {
          q: 'Aumentar o volume causa distorção?',
          a: 'Um pouco, se você forçar demais — isso é física, não o programa. O limiter embutido segura picos acima do limite, então aumentos moderados (150–250%) em geral soam limpos. Acima de 300% as partes baixas ficam altas, mas os picos entram em pumping; use o ouvido.',
        },
        {
          q: 'Até onde dá para aumentar?',
          a: 'Até 400% do original, cerca de +12 dB. Isso cobre a maioria das gravações baixas; um arquivo de 3 minutos exporta em um ou dois segundos de qualquer forma.',
        },
        {
          q: 'Isso é a mesma coisa que normalizar?',
          a: 'Não. Normalizar sobe o arquivo inteiro até o pico mais alto atingir um nível alvo. Aqui o aumento multiplica o nível que você escolhe, o que é mais previsível quando você sabe que a gravação está baixa por igual.',
        },
        {
          q: 'Dá para aumentar só uma parte do arquivo?',
          a: 'Sim. Selecione o trecho baixo na forma de onda, coloque o modo em Manter seleção e exporte — você recebe só aquela parte no volume novo.',
        },
        {
          q: 'Funciona com arquivos de vídeo?',
          a: 'Muitas vezes, sim — o navegador em geral decodifica a trilha de áudio de arquivos MP4 soltos na página. Se o navegador recusar o arquivo, extraia o áudio primeiro e tente de novo.',
        },
        { q: "Qual a diferença para o medidor de loudness?", a: "Esta página multiplica o arquivo inteiro pela quantidade que você escolhe. O medidor de loudness lê LUFS integrado — o quão alto o arquivo está, não a sala — e pode igualar −16, −14 ou −23 sem deixar o pico de amostra passar de −1 dBFS. Nenhuma das duas iguala o alto e o baixo." },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você arrasta a forma de onda com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Aumentar volume do MP3: área de soltar, nada é enviado a um servidor',
        'Aumentar volume do MP3: área de trabalho com o arquivo carregado',
        'Aumentar volume do MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Um MP3 baixo demais',
          paragraphs: [
            'Aumentar volume do MP3 multiplica o arquivo, até 400 por cento, cerca de +12 dB. Acima de 100 por cento um limitador impede que os picos distorçam forte.',
            'O mesmo tipo de ganho para a trilha de um vídeo ou qualquer outro formato é o amplificador de volume. Esta página é a do MP3. Arquivos de vídeo muitas vezes ainda decodificam aqui.',
          ],
        },
        {
          heading: 'O que o multiplicador não faz',
          paragraphs: [
            'É um ganho para o arquivo inteiro. Não é um padrão de loudness e não iguala a dinâmica:',
          ],
          bullets: [
            'Um alvo de podcast de −16 LUFS: meça no [medidor de loudness](/loudness-meter). Se o pico da amostra passar de −1 dBFS, aquela página barra o ganho.',
            'Um pico já perto da escala cheia e o resto baixo demais: [normalizar áudio](/normalize-audio) põe esse pico em 0,98, limitado a 4×. Ele não levanta mais as partes baixas.',
            'Passagens altas e baixas que devem se aproximar: o [compressor de nível](/compressor), não este controle.',
          ],
        },
        {
          heading: 'Exportação',
          paragraphs: [
            'Você recebe um novo arquivo. O MP3 que você soltou fica onde estava. Empurrar um arquivo que já é alto bate quase todo no limitador e pode soar chapado.',
            'Se o MP3 está baixo porque é um silêncio longo com uma frase curta, corte primeiro, depois aumente o que sobrou.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Aumentar e baixar',
    },
    'mp4-to-mp3': {
      cardLine: 'Salve a trilha de um vídeo, gravação de tela ou arquivo de câmera como MP3.',
      name: 'Converter vídeo em MP3',
      shortName: 'MP4 para MP3',
      title: 'MP4 para MP3 — converter MP4, MOV e WebM em MP3 online',
      description:
        'Extraia a faixa de áudio de MP4, MOV ou WebM como MP3, no navegador. 64–320 kbps, lote em um ZIP. AC3/DTS não pode ser decodificado.',
      h1: 'Converter vídeo em MP3 — Converter um vídeo em MP3',
      heroAlt: 'Converter a faixa de um MP4, MOV ou WebM em MP3',
      subtitle: 'Tire a trilha sonora de qualquer vídeo — direto no navegador, nada enviado.',
      intro:
        'Transforme vídeos MP4 em áudio MP3 sem instalar nada e sem enviar gigabytes para um servidor. O navegador lê o arquivo do disco, decodifica a trilha no aparelho e salva como MP3 — um vídeo de 500 MB converte em segundos porque só a faixa de áudio é processada.',
      usesHeading: 'Casos comuns de conversão de MP4 para MP3',
      uses: [
        'Salvar aulas: transforme vídeos de aulas ou shows em áudio para ouvir sem a tela.',
        'Fonte de entrevistas: extraia a faixa dos arquivos de câmera para transcrição ou edição.',
        'Extrair música: converta gravações de shows em MP3 para o carro.',
        'Gravações de tela: mantenha só a narração de uma aula gravada — um décimo do tamanho.',
        'Arquivo: converta clipes antigos de câmera em MP3 em lote.',
        'Fonte de podcast: converta a faixa completa e corte trechos no [editor de áudio](/audio-trimmer).',
      ],
      why: [
        {
          icon: 'film',
          title: 'Só a faixa, nunca a imagem',
          text: 'O navegador decodifica o áudio e escreve o MP3 diretamente — a faixa de vídeo é ignorada: 4K e 240p convertem na mesma velocidade.',
        },
        {
          icon: 'warning-triangle',
          title: 'Limites declarados',
          text: 'MP4 com áudio AAC, Opus em WebM e a maioria dos MOV convertem. Faixas AC3/DTS não podem ser decodificadas e são rejeitadas com mensagem clara.',
        },
      ],
      howTo: [
        { name: 'Solte o vídeo', text: 'Arraste um MP4 até o quadro tracejado ou clique para procurar. WebM com Opus e a maioria dos MOV funcionam igual. Vários arquivos compartilham os ajustes seguintes.' },
        { name: 'Escolha a taxa', text: '64–320 kbps: 320 para clipes musicais, 192 para o dia a dia, 128 para entrevistas e aulas.' },
        { name: 'Clique “{export}”', text: 'O botão principal da barra de exportação. A faixa de áudio decodifica localmente — a imagem não é tocada: 4K e 240p convertem na mesma velocidade.' },
        { name: 'Leve os arquivos', text: 'Um arquivo baixa sozinho; dois ou mais voltam como um ZIP com nomes -converted.' },
      ],
      faqs: [
        { q: 'Posso converter mais de um vídeo?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'O vídeo é enviado para algum lugar?',
          a: 'Não — e vale repetir no caso de vídeo, porque os arquivos são grandes. O navegador lê o arquivo do disco, decodifica só a trilha de áudio e grava o MP3 no aparelho. Os quadros de vídeo nunca são processados nem transmitidos.',
        },
        {
          q: 'Quais formatos de vídeo são aceitos?',
          a: 'Arquivos MP4 com áudio AAC (a grande maioria, inclusive gravações de celular e downloads comuns), além de WebM com Opus e a maioria dos arquivos MOV. Codecs exóticos, como trilhas AC3 ou DTS, não são decodificados pelo navegador e são recusados com uma mensagem clara.',
        },
        {
          q: 'É mais rápido que conversores online?',
          a: 'Em geral, sim. Conversores que dependem de envio precisam mandar o vídeo inteiro para um servidor primeiro — um arquivo de 500 MB pode levar muitos minutos. Aqui só o áudio é decodificado no aparelho, então até vídeos longos convertem em segundos num computador normal.',
        },
        {
          q: 'Dá para converter só uma parte do vídeo?',
          a: 'Esta página é um conversor direto — ela converte a trilha inteira. Se você quer um trecho, converta o áudio completo primeiro e depois recorte com o cortador de áudio.',
        },
        {
          q: 'Vídeo 4K ou 8K deixa mais lento?',
          a: 'Não. A resolução do vídeo não importa — a faixa de vídeo é ignorada por completo. Um arquivo 4K e um 240p com a mesma trilha sonora convertem igual.',
        },
        {
          q: 'Dá para converter um vídeo do YouTube ou de outra plataforma?',
          a: 'Não. Esta página lê um arquivo escolhido neste aparelho e não aceita link. Baixar áudio de plataforma de streaming geralmente quebra os termos de uso: converta só vídeos que você gravou ou para os quais tem permissão.',
        },
        {
          q: 'Preciso instalar um aplicativo?',
          a: 'Não. O conversor funciona nesta aba do navegador, no computador e no celular. Nada para instalar e nenhuma conta para criar.',
        },
      ],
      screenshotsAlt: [
        'Converter vídeo em MP3: área de soltar, nada é enviado a um servidor',
        'Converter vídeo em MP3: área de trabalho com o arquivo carregado',
        'Converter vídeo em MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Só a trilha sonora é convertida',
          paragraphs: [
            'Um MP4 é um contêiner. A imagem e o som são faixas separadas. Esta página decodifica o som e grava um MP3. A imagem nunca é codificada, enviada ou salva.',
            'A imagem não é decodificada, então a resolução não faz parte da conversão. O arquivo fica neste aparelho. Um arquivo acima de 300 MB é recusado.',
          ],
        },
        {
          heading: 'Qual bitrate MP3 usar',
          paragraphs: [
            'A trilha sonora é codificada uma vez, na taxa que você escolher.',
          ],
          bullets: [
            'O menu é 64, 96, 128, 192 e 320 kbps. Esta página começa em 320.',
            'WAV é PCM de 16 bits das amostras decodificadas. MP3 codifica essas amostras uma vez.',
            'Título, artista e capa não são copiados.',
          ],
        },
        {
          heading: 'MP4 para MP3, ou extrair o áudio',
          paragraphs: [
            'A exportação começa em MP3 a 320 kbps. WebM e MOV só abrem se este navegador consegue decodificar a trilha sonora. Troque o formato para WAV para uma cópia de 16 bits. A página feita para WAV como escolha padrão é [extrair áudio](/extract-audio).',
            'Se você só precisa de um minuto, converta a trilha inteira aqui e depois use o [cortador de áudio](/audio-trimmer). Esta página não recorta um trecho do vídeo.',
          ],
        },
        {
          heading: 'Arquivos que o navegador não consegue ler',
          paragraphs: [
            'Se este navegador não consegue decodificar a trilha sonora, a mensagem é: não foi possível decodificar este arquivo, ele pode estar corrompido, ou o codec não é compatível com seu navegador. A mensagem não diz qual é o codec.',
            'O MP3 não guarda título nem miniatura do vídeo. Defina o nome da faixa depois no [editor de tags MP3](/mp3-tag-editor) se precisar que ele apareça em um player.',
          ],
        },
        {
          heading: 'Esta página, o VLC ou um site de envio',
          paragraphs: [
            'Três caminhos transformam um vídeo em MP3. Escolha pelo tamanho do arquivo e pela frequência com que você converte. Detalhes conferidos nos serviços ao vivo em 2026-10-28.',
          ],
          table: {
            headers: [
              '',
              'Esta página',
              'VLC no computador',
              'Sites de envio',
            ],
            rows: [
              [
                'Instalação',
                'Nada',
                'Sim',
                'Não',
              ],
              [
                'Arquivo sai do aparelho',
                'Não',
                'Não',
                'Sim',
              ],
              [
                'Limite de tamanho',
                '300 MB por arquivo',
                'Espaço livre em disco',
                'Varia por serviço',
              ],
              [
                'Vários arquivos',
                'Sim, um ZIP',
                'Um de cada vez',
                'Varia por serviço',
              ],
              [
                'Custo',
                'Grátis',
                'Grátis',
                'Limites do plano grátis',
              ],
            ],
          },
          outro: [
            'A produção noturna de gravações de uma hora cabe melhor em um programa de computador.',
            'Uma trilha sonora avulsa cabe nesta página: nada para instalar, e o vídeo nunca sai do aparelho.',
          ],
        },
      ],
      dropHint: 'Solte MP4 ou arquivos de vídeo, ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'extract-audio': {
      cardLine: 'Extraia áudio limpo de qualquer vídeo para editar, transcrever ou amostrar.',
      name: 'Extrair áudio',
      shortName: 'Extrair áudio',
      title: 'Extrair áudio de vídeo — Salve o som em MP3 ou WAV',
      description:
        'Extraia o áudio de qualquer vídeo no navegador e salve em MP3 ou WAV sem perdas. Grátis, privado, sem envio — mesmo em arquivos grandes.',
      h1: 'Extrair áudio de vídeo — Extrair MP3 de um vídeo',
      heroAlt: 'Salvar a trilha de um vídeo como MP3 ou WAV',
      subtitle: 'Salve a trilha sonora de qualquer vídeo em MP3 ou WAV — no aparelho, em segundos.',
      intro:
        'Separe o som da imagem: tire entrevistas de videochamadas, salve um filme de show como álbum ou reaproveite uma trilha na sua própria edição. A faixa de áudio é decodificada no aparelho e pode ser salva sem perdas em WAV ou de forma compacta em MP3.',
      usesHeading: 'Usos comuns de extrair áudio de vídeo',
      uses: [
        'Gravações de tela: deixe só a voz da aula numa captura de tela, e o arquivo emagrece dez vezes.',
        'Vídeos do celular: tire o som ambiente capturado com a cena como material.',
        'Backup de entrevistas: extraia entrevistas em vídeo para áudio e mande para a [transcrição](/audio-to-text).',
        'Música ao vivo: levante o áudio ao vivo de um show gravado para a coleção.',
        'Base sem perdas: guarde WAV para editar e comprima o resultado final em MP3.',
        'Material de podcast: duas câmeras gravaram vídeo — extraia a trilha para o fluxo de edição.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Duas saídas: MP3 e WAV',
          text: 'Escolha MP3 para enviar; escolha WAV para manter todas as amostras quando o próximo passo é editar ou tirar ruído.',
        },
        {
          icon: 'film',
          title: 'Só a trilha de áudio é decodificada',
          text: 'A imagem do vídeo é ignorada por completo e só a trilha de áudio decodifica, então até arquivos grandes vão rápido.',
        },
      ],
      howTo: [
        {
          name: 'Solte o vídeo',
          text: 'Qualquer MP4, WebM ou MOV com trilha sonora padrão funciona. O arquivo não sai do aparelho. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.',
        },
        {
          name: 'Escolha o formato',
          text: 'MP3 192 kbps para ouvir e compartilhar; WAV para uma cópia sem perdas que você pode editar ou arquivar.',
        },
        {
          name: 'Extraia e salve',
          text: 'Clique em Extrair áudio. A trilha é decodificada no aparelho e o download começa na hora.',
        },
      ],
      faqs: [
        { q: 'Posso tirar o áudio de mais de um vídeo?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'Qual a diferença entre isso e um conversor de MP4 para MP3?',
          a: 'Por baixo dos panos, é o mesmo motor de extração local — esta página serve para tirar o áudio de um vídeo no formato que você precisar, inclusive WAV sem perdas, enquanto a página do conversor é ajustada para saída em MP3.',
        },
        {
          q: 'Dá para manter a qualidade original?',
          a: 'Escolha WAV: a trilha decodificada é gravada sem perdas, então o áudio corresponde ao que o vídeo contém. O MP3 recodifica uma vez; em 320 kbps a diferença é inaudível na prática.',
        },
        {
          q: 'Quais formatos de vídeo funcionam?',
          a: 'MP4 com áudio AAC, WebM com Opus e a maioria dos arquivos MOV — os codecs que o navegador decodifica nativamente. Trilhas em AC3, DTS ou outros codecs exóticos não podem ser decodificadas localmente e são recusadas de forma clara.',
        },
        {
          q: 'Existe limite de tamanho de arquivo?',
          a: 'Não há um limite artificial. Só a trilha de áudio é processada, então até vídeos muito grandes convertem rápido — o limite é a memória do aparelho, não o tamanho do arquivo no disco.',
        },
        {
          q: 'Dá para remover o áudio de um vídeo?',
          a: 'Essa é a operação oposta — silenciar um vídeo mantém a imagem e descarta o som. Esta ferramenta mantém o som e descarta a imagem.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você escolhe o arquivo e a conversão fica nesta aba. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      {
        q: 'Posso extrair uma trilha local pelo Claude ou pelo Cursor?',
        a: 'Esta página extrai uma trilha que o navegador consegue decodificar. AC3 e DTS são recusados aqui. /mcp usa ffmpeg, então um formato abre só quando a sua build do ffmpeg inclui esse decodificador. Não busca um vídeo por um link. O app de chat ainda vê o caminho.',
      },
        {
          q: 'Dá para extrair o áudio de um vídeo do YouTube?',
          a: 'Não. Esta página lê um arquivo escolhido neste aparelho e não aceita link. Salvar o áudio de uma plataforma de streaming geralmente quebra os termos de uso: trabalhe só com vídeos que você gravou ou para os quais tem permissão.',
        },
      ],
      screenshotsAlt: [
        'Extrair áudio: área de soltar, nada é enviado a um servidor',
        'Extrair áudio: área de trabalho com o arquivo carregado',
        'Extrair áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Tire a trilha sonora de um vídeo',
          paragraphs: [
            'Extrair áudio decodifica a trilha sonora e descarta a imagem. A exportação começa em MP3 a 192 kbps. O menu também inclui WAV.',
            '[MP4 para MP3](/mp4-to-mp3) é o mesmo caminho de decodificação, começando em 320 kbps.',
          ],
        },
        {
          heading: 'O que sai e o que não sai',
          paragraphs: [
            'Só a faixa de áudio é decodificada. Os quadros do vídeo são descartados:',
          ],
          bullets: [
            'Um vídeo de celular ou uma gravação de tela vira um arquivo que você pode cortar, juntar ou marcar.',
            'WAV é PCM de 16 bits das amostras decodificadas. MP3 codifica essas amostras uma vez.',
            'Se este navegador não consegue decodificar a trilha, a mensagem não diz qual é o codec.',
          ],
        },
        {
          heading: 'Ele não silencia o vídeo',
          paragraphs: [
            'Esta página mantém o som e descarta as imagens. Ela não devolve um vídeo.',
            'Um arquivo acima de 300 MB é recusado. A imagem não é decodificada, então a resolução não faz parte da conversão. Nada é enviado.',
          ],
        },
      ],
      dropHint: 'Solte arquivos de vídeo ou clique para procurar',
      exportLabel: 'Extrair áudio',
    },
    'voice-recorder': {
      cardLine: 'Grave reuniões, aulas e ideias direto no navegador — sem instalar app.',
      name: 'Gravador de voz',
      shortName: 'Gravador de voz',
      title: 'Gravador de voz online — Grave, recorte e salve grátis',
      description:
        'Grave o microfone no navegador, recorte a gravação e salve em MP3 ou WAV. Grátis e privado — as gravações nunca são enviadas.',
      h1: 'Gravador de voz online grátis — Gravar o microfone em MP3',
      heroAlt: 'Salvar um recado de voz como MP3 ou WAV',
      subtitle: 'Grave o microfone, recorte a gravação e salve em MP3 — nada sai do aparelho.',
      intro:
        'Um gravador com estúdio de recorte junto: capture recados de voz, entrevistas, ensaios ou notas de reunião, corte o silêncio e exporte um arquivo limpo. Gravar e editar acontecem no navegador — o áudio nunca é enviado para lugar nenhum, o que deixa confortável até para conversas confidenciais.',
      usesHeading: 'Usos comuns do gravador de voz',
      uses: [
        'Memos de voz: fale enquanto está fresco e corte as pontas antes de salvar.',
        'Exercícios de idioma: grave sua pronúncia e compare com o original.',
        'Rascunhos de entrevista: grave a entrevista cara a cara e transcreva com calma depois.',
        'Notas de reunião: capture as conclusões rápido e complete os detalhes por escrito.',
        'Ensaio de narração: grave o rascunho de uma demo ou aula e ouça até encaixar.',
        'Ideias musicais: tararele a melodia antes que ela escape.',
      ],
      why: [
        {
          icon: 'mic',
          title: 'Cortar assim que grava',
          text: 'A gravação carrega direto no editor abaixo: corte as pontas, marque uma seleção, exporte MP3 ou WAV — sem abrir outra ferramenta.',
        },
        {
          icon: 'lock-simple',
          title: 'A gravação não sai da aba',
          text: 'Os dados do microfone ficam na memória da aba e nada é transmitido. Feche sem exportar e a gravação some — conversas confidenciais incluídas.',
        },
      ],
      howTo: [
        {
          name: 'Permita o microfone',
          text: 'Clique em Gravar e aceite o pedido de permissão do navegador. A gravação começa na hora; o cronômetro mostra a duração.',
        },
        {
          name: 'Pare e revise',
          text: 'Clique em Parar quando terminar. A gravação carrega no editor abaixo, onde você pode ouvir e recortar as pontas.',
        },
        {
          name: 'Exporte a gravação',
          text: 'Salve em MP3 ou WAV. As gravações existem só nesta aba até você exportar — fechar sem exportar descarta tudo.',
        },
      ],
      faqs: [
        {
          q: 'Para onde vão minhas gravações?',
          a: 'Para lugar nenhum. O fluxo do microfone é capturado pelo navegador e fica na memória desta aba. Nada é transmitido, e a gravação some quando você fecha a aba, a menos que exporte antes.',
        },
        {
          q: 'Qual é o formato da gravação?',
          a: 'O navegador decide o formato da captura — Chrome e Firefox gravam WebM/Opus, o Safari grava MP4/AAC. Não importa: as exportações são convertidas para MP3 ou WAV no aparelho de qualquer forma.',
        },
        {
          q: 'Dá para cortar o silêncio do começo e do fim?',
          a: 'Sim, é para isso que o editor fica abaixo do gravador. Arraste pelo trecho que você quer manter, coloque o modo em Manter seleção e exporte — o silêncio some.',
        },
        {
          q: 'Quais navegadores aceitam gravação?',
          a: 'Chrome, Edge, Firefox e Safari no computador, além do Chrome no Android e do Safari no iOS. Se o botão Gravar avisar que a gravação não está disponível, o navegador não tem a API MediaRecorder.',
        },
        {
          q: 'Por quanto tempo posso gravar?',
          a: 'Pelo tempo que a memória do aparelho permitir — minutos de fala ocupam muito pouco espaço (a compressão Opus é eficiente). Para gravações de várias horas, exporte em partes.',
        },
      ],
      screenshotsAlt: [
        'Gravador de voz: área de soltar, nada é enviado a um servidor',
        'Gravador de voz: área de trabalho com o arquivo carregado',
        'Gravador de voz: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O microfone fica no navegador',
          paragraphs: [
            'O gravador de voz usa o MediaRecorder nesta aba. A tomada não é enviada. Se você fechar a aba antes de exportar, a gravação se perde.',
            'O formato de captura depende do navegador. A exportação escolhe MP3 ou WAV, então o arquivo que você guarda é o que você escolheu, não o que o navegador gravou internamente.',
          ],
        },
        {
          heading: 'Depois da tomada',
          paragraphs: [
            'Você pode cortar mantendo uma seleção e exportar esse trecho:',
          ],
          bullets: [
            'Corte a respiração antes da primeira palavra e o silêncio depois da última.',
            'Exporte WAV se você vai editar a tomada de novo e quer codificar uma vez.',
            'Exporte MP3 se o recado só precisa ser enviado ou guardado pequeno.',
          ],
        },
        {
          heading: 'O que ela não faz',
          paragraphs: [
            'Precisa de um navegador que implemente o MediaRecorder e de permissão para usar o microfone. Ela não transcreve. Fala para texto é a página de áudio para texto, e ela recebe um arquivo, não um microfone ao vivo.',
            'Uma gravação baixa demais continua baixa depois da exportação. Aumente com o amplificador de volume, ou confira o nível no medidor de loudness se o destino é um alvo de podcast.',
          ],
        },
      ],
      dropHint: 'Ou solte uma gravação existente para editar',
    },
    'volume-booster': {
      cardLine: 'Deixe músicas e trilhas de vídeo baixas altas e limpas, até 4×.',
      name: 'Aumentar volume',
      shortName: 'Aumentar volume',
      title: 'Aumentar volume do áudio online grátis — até 4×',
      description:
        'Aumente o volume de músicas baixas e trilhas de vídeo em até 4× no navegador. Um limitador mantém o som limpo — grátis, privado, nada enviado.',
      h1: 'Aumentar volume do áudio — Deixar áudio e vídeo mais altos',
      heroAlt: 'Aumentar a trilha baixa de um vídeo',
      subtitle: 'Aumente faixas baixas e trilhas de vídeo em até 4× — limpo, sem clipar.',
      intro:
        'Para tudo que toca baixo demais: vídeos de celular baixos, gravações acústicas suaves, podcasts masterizados no volume de um sussurro. Carregue um arquivo, suba o volume até 4× e deixe o limiter embutido segurar os picos para as partes altas continuarem limpas. Funciona com arquivos de áudio e de vídeo — só a trilha sonora é processada.',
      usesHeading: 'Usos comuns de reforçar arquivos baixos',
      uses: [
        'Trilhas de vídeo: gravações que soam mais baixas que a imagem, erguidas para acompanhar.',
        'Música baixa: rippagens ou downloads com nível baixo, trazidas a uma sonoridade normal.',
        'Vídeos do celular: tomadas externas onde o vento cobre a voz, com a voz erguida.',
        'Repetições de reunião: gravações de reuniões online que saíram fracas, erguidas até ficarem claras.',
        'Narrações de demo: a voz de uma gravação de tela de treinamento, erguida em vez de regravada.',
        'Prévias do rascunho: o áudio de um rascunho de vídeo no talo, para conferir o conteúdo antes.',
      ],
      why: [
        {
          icon: 'film',
          title: 'O vídeo passa direto',
          text: 'Arquivos de vídeo com imagem também ganham volume: só a trilha de áudio é processada, a imagem fica intacta e a exportação segue no mesmo contêiner.',
        },
        {
          icon: 'volume',
          title: 'O reforço é você que define',
          text: 'O controle anda livre enquanto você escuta; fixe a medida de ouvido em vez de adivinhar uma porcentagem.',
        },
      ],
      howTo: [
        {
          name: 'Solte o arquivo',
          text: 'Música, um recado de voz ou um vídeo baixo (MP4, WebM, MOV) — a trilha é extraída no aparelho se for vídeo.',
        },
        {
          name: 'Escolha o aumento',
          text: 'Arraste o controle de volume para 150–250% na maioria das gravações. Ouça enquanto ajusta; o limiter entra automaticamente acima de 100%.',
        },
        {
          name: 'Exporte o arquivo mais alto',
          text: 'Salve em MP3 ou WAV. Se os picos soarem achatados, volte o aumento em 10–20% e exporte de novo.',
        },
      ],
      faqs: [
        {
          q: 'Quanto mais alto pode ficar?',
          a: 'Até 400% do original (+12 dB). Aumentar o volume não cria energia que nunca foi gravada, então fontes extremamente baixas também podem ganhar se você exportar em WAV e normalizar num editor dedicado — mas, para a maioria dos arquivos baixos, 2–3× já basta.',
        },
        {
          q: 'O que o limiter faz de fato?',
          a: 'Acima de 100% de volume, um compressor de dinâmica observa a saída e segura os picos momentâneos antes que eles clipem. O resultado fica mais alto no geral, sem o estalo do clipping digital seco. Um estágio de soft-clip pega o que ainda escapar.',
        },
        {
          q: 'Dá para aumentar o som de um vídeo?',
          a: 'Sim. Solte um MP4 ou WebM e a trilha é decodificada no aparelho, aumentada e exportada como MP3 ou WAV. A faixa de vídeo é ignorada — use o extrator de áudio se você quer só o som.',
        },
        {
          q: 'Aumentar no celular funciona?',
          a: 'Sim. O aumento roda no Safari e no Chrome do celular; uma música de 3 minutos exporta em um ou dois segundos num celular atual.',
        },
        {
          q: 'Por que não é só aumentar o volume da caixa?',
          a: 'O volume da caixa só ajuda no seu aparelho. Um arquivo aumentado toca mais alto em qualquer lugar — no celular de outras pessoas, em fones baratos, nas caixinhas minúsculas de um notebook.',
        },
        {
          q: 'Qual a diferença para o compressor de nível?',
          a: 'Esta página multiplica o arquivo inteiro, então o alto e o baixo continuam à mesma distância. O compressor de nível encurta essa distância e depois devolve o pico. Use esta quando tudo está baixo demais. Use o compressor quando um trecho grita e outro some.',
        },
        { q: "Qual a diferença para o medidor de loudness?", a: "Arrastar este controle multiplica cada amostra. O medidor de loudness mede LUFS integrado e oferece podcast −16, streaming −14 e broadcast −23. Se o pico de amostra passasse de −1 dBFS, o ganho para. Não é um medidor de sala." },
      ],
      screenshotsAlt: [
        'Aumentar volume: área de soltar, nada é enviado a um servidor',
        'Aumentar volume: área de trabalho com o arquivo carregado',
        'Aumentar volume: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Deixe o áudio mais alto sem o estalo',
          paragraphs: [
            'Um arquivo distorce quando uma amostra tenta passar do teto digital, 0 dBFS. Amplificar multiplica cada amostra. Se o momento mais alto já estava perto desse teto, uma amplificação grande corta o topo e você ouve estalo.',
            'Acima de 100% esta página aplica um limitador: limiar −2 dB, knee 3, razão 20, ataque 0,002 segundos, liberação 0,15 segundos. O controle vai de 10% a 400%.',
          ],
          bullets: [
            'O controle vai de 10% a 400%, em passos de 5.',
            'Acima de 100%, o limitador do parágrafo acima é aplicado. Em 100% ou menos, não.',
            'Um pico medido, limitado a 4×, é [normalizar áudio](/normalize-audio).',
            'Esta página grava um arquivo mais alto. Ela não muda o volume da caixa de som do computador.',
          ],
        },
        {
          heading: 'Um pico mais alto não é um arquivo mais alto',
          paragraphs: [
            'O nível de pico é a amostra mais alta. Uma entrevista sussurrada com uma tosse pode chegar perto da escala cheia e ainda soar baixa, porque o resto do arquivo é baixo. Multiplicar o arquivo levanta o sussurro e a tosse juntos.',
            'Quão alto um arquivo parece ao longo da duração é o que o LUFS mede. Esta página não mira um número de LUFS. O medidor de loudness mira: ele lê LUFS integrado e pode pôr um arquivo perto de −16 para podcasts, −14 para streaming ou −23 para transmissão, e para se o pico da amostra passar de −1 dBFS.',
          ],
        },
        {
          heading: 'Amplificar, normalizar ou comprimir',
          paragraphs: [
            'Três páginas deste site mudam o nível, e elas não se substituem.',
          ],
          bullets: [
            'Amplificador de volume, esta página: você escolhe o multiplicador, de 10% a 400%, e acima de 100% o limitador da seção anterior segura os picos. Arquivos de vídeo são aceitos aqui. A imagem não é salva.',
            '[Normalizar áudio](/normalize-audio): um ganho medido para o pico mais alto chegar a 0,98, limitado a 4×.',
            '[Compressor de nível](/compressor): puxa os momentos altos para baixo e as palavras baixas para cima, depois recoloca o pico, limitado a 0,98. Uma amplificação não faz isso.',
          ],
        },
        {
          heading: 'Trilhas de vídeo e gravações de celular',
          paragraphs: [
            'Solte um MP4, WebM ou MOV e só a trilha sonora é decodificada, amplificada e salva como MP3 ou WAV. A imagem é ignorada. Se o navegador não consegue ler o codec de áudio, extraia o áudio primeiro.',
            'Um arquivo amplificado fica mais alto em todo aparelho que o reproduz. O volume da caixa de som só ajuda o aparelho na sua frente. Exporte WAV se você vai editar de novo. MP3 codifica uma vez. A amplificação não inventa detalhe que um microfone de celular baixo nunca capturou, e também levanta o chiado que já estava lá.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou vídeo, ou clique para procurar',
      exportLabel: 'Aumentar e baixar',
    },
    'normalize-audio': {
      cardLine: 'Traga um lote inteiro de gravações para um nível uniforme e saudável.',
      name: 'Normalizar áudio',
      shortName: 'Normalizar',
      title: 'Normalizar áudio — Nivele o volume online grátis',
      description:
        'Normalize o áudio para um pico consistente no navegador — MP3, WAV, M4A e mais. Um clique, grátis, e nada é enviado.',
      h1: 'Normalizar áudio — Normalizar o volume de um MP3',
      heroAlt: 'Trazer os arquivos baixos para um mesmo nível',
      subtitle: 'Um clique para levar arquivos baixos a um nível consistente e saudável — analisado no seu aparelho.',
      intro:
        'Normalizar varre o arquivo para achar o pico mais alto e sobe o arquivo inteiro exatamente o quanto falta para esse pico ficar logo abaixo do clipping. O resultado: um arquivo que usa toda a faixa de volume que recebeu, sem chute manual. É o ajuste certo quando a gravação está baixa o tempo todo — recados de voz, gravações de campo, exportações de outros apps que saíram em −18 dB.',
      usesHeading: 'Usos comuns de normalizar áudio',
      uses: [
        'Alinhamento em lote: erga uma pilha inteira de gravações a um nível único, saudável e uniforme.',
        'Igualar antes de emendar: normalize os clipes que vão se juntar, para que nenhum capítulo soe com metade da sonoridade do vizinho.',
        'Resgatar gravações baixas: memos de voz ou gravações de campo que saíram pequenas, erguidas num clique.',
        'Em vez de adivinhar o ganho: quando não se sabe até onde empurrar o controle, use o ganho calculado.',
        'Correção após exportar: traga de volta ao normal um arquivo que outro app exportou a uns -18 dB.',
        'Checkup antes de publicar: o pico enche a escala e a dinâmica fica intacta; comprimir mais é trabalho do [compressor](/compressor).',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Um ganho calculado',
          text: 'A normalização varre o pico mais alto e ergue o arquivo inteiro até que ele se assente logo abaixo da escala cheia (cerca de -0,2 dB). Partes baixas e altas se movem juntas: a dinâmica mantém a forma.',
        },
        {
          icon: 'layers',
          title: 'Medidos um a um no lote',
          text: 'Vários arquivos compartilham o botão de normalizar; cada um sobe pelo próprio pico. Um arquivo baixa sozinho, dois ou mais vão num ZIP.',
        },
      ],
      howTo: [
        {
          name: 'Solte o áudio',
          text: 'Qualquer MP3, WAV, M4A ou outro arquivo de áudio. Ele é decodificado e analisado no seu aparelho — nada é enviado. Vários arquivos compartilham o botão Normalizar. Cada um sobe até o próprio pico. Um baixa sozinho. Dois ou mais voltam num ZIP.',
        },
        {
          name: 'Clique em Normalizar',
          text: 'O arquivo é varrido em busca do pico e elevado para esse pico ficar logo abaixo da escala cheia. Ouça a prévia para sentir a diferença.',
        },
        {
          name: 'Exporte',
          text: 'Salve em MP3 ou WAV. O WAV evita uma passagem extra de codificação com perdas se você pretende continuar editando o arquivo.',
        },
      ],
      faqs: [
        { q: 'Posso normalizar mais de um arquivo?', a: 'Sim. Com Normalizar ligado, cada arquivo da fila usa isso. Cada um é medido por si e sobe até o próprio pico, um depois do outro neste aparelho. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        {
          q: 'O que normalizar faz de fato?',
          a: 'Aplica um único ganho fixo ao arquivo inteiro para que a amostra mais alta fique logo abaixo do teto digital (cerca de −0,2 dB aqui). Se o pico de um arquivo está em 50% do volume, normalizar praticamente dobra cada amostra — as partes baixas e as altas, do mesmo jeito.',
        },
        {
          q: 'Normalizar é a mesma coisa que aumentar o volume?',
          a: 'Eles se cruzam, mas normalizar é medido, não chutado. O aumento de volume aplica o multiplicador que você arrasta no controle; normalizar encontra sozinho o maior multiplicador seguro. Se você sabe que o arquivo está baixo por igual, aumentar serve. Se você só quer o mais alto que ele pode ficar com limpeza, normalize.',
        },
        {
          q: 'Isso deixa partes baixas e altas igualmente altas?',
          a: 'Não — e desconfie de qualquer ferramenta que prometa isso num clique. Subir trechos baixos de forma independente é compressão de dinâmica, um processo diferente e mais destrutivo. Normalizar desloca a gravação inteira para cima na mesma quantidade e deixa a dinâmica intacta.',
        },
        {
          q: 'Usa metas de loudness em LUFS, como as plataformas de streaming?',
          a: 'Não. Esta página mexe no pico, não na loudness integrada. O medidor de loudness mede LUFS com ponderação K e pode deixar um arquivo em −16, −14 ou −23. São metas comuns de entrega, não um limite legal nem uma leitura da sala.',
        },
        {
          q: 'Normalizar reduz a qualidade?',
          a: 'A mudança de nível em si é matematicamente limpa e inaudível. A única questão de qualidade é o formato de exportação: WAV é bit a bit para a mudança de ganho, enquanto o MP3 recodifica uma vez. Exporte WAV se o arquivo for editado de novo.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você arrasta a forma de onda com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      {
        q: 'Posso normalizar um arquivo local pelo Claude ou pelo Cursor?',
        a: 'Esta página eleva o pico no navegador, para cerca de -0.2 dB. /mcp roda o loudnorm do ffmpeg uma vez, em -16 LUFS, -1.5 dBTP e LRA 11. É uma passagem, não uma segunda passagem medida. O app de chat ainda vê o caminho.',
      }],
      screenshotsAlt: [
        'Normalizar áudio: área de soltar, nada é enviado a um servidor',
        'Normalizar áudio: área de trabalho com o arquivo carregado',
        'Normalizar áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Um ganho, mirando no pico',
          paragraphs: [
            'Normalizar encontra a amostra mais alta e aplica um ganho para esse pico chegar perto de −0,2 dB. Todas as outras amostras se movem na mesma quantidade. As partes baixas não recebem um aumento separado.',
            'Não é LUFS. Um alvo de podcast de −16 LUFS, um stream perto de −14 ou transmissão perto de −23 é o medidor de loudness. Ele também barra o ganho sugerido se o pico da amostra passar de −1 dBFS.',
          ],
        },
        {
          heading: 'Quando normalizar é a escolha certa',
          paragraphs: [
            'Use quando o arquivo inteiro está simplesmente baixo demais e nada já está no pico:',
          ],
          bullets: [
            'Um recado de voz gravado longe do microfone, com margem sobrando.',
            'Uma faixa que deve ficar perto da escala cheia antes de você enviar.',
            'Um arquivo que você vai comprimir ou amplificar depois, para o pico ser um teto conhecido.',
          ],
        },
        {
          heading: 'Quando vai decepcionar',
          paragraphs: [
            'Se um clique ou uma respiração já está perto da escala cheia, normalizar quase não faz nada, porque esse pico define o ganho. O compressor de nível é o que aproxima altos e baixos e depois iguala o pico.',
            'Deixar um arquivo mais alto por um fator que você escolhe, inclusive acima de 100 por cento com limitador, é o amplificador de volume. Normalizar não oferece esse multiplicador.',
          ],
        },
      ],
      dropHint: 'Solte arquivos de áudio ou clique para procurar',
      exportLabel: 'Normalizar e baixar',
    },
    'slowed-reverb': {
      cardLine: 'Dê a qualquer música o som noturno de slowed + reverb num clique.',
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb online grátis — Crie a sua versão',
      description:
        'Transforme qualquer música em slowed + reverb no navegador: desacelere, coloque reverb e exporte MP3. Grátis, e nada é enviado.',
      h1: 'Slowed + Reverb — Deixar uma música lenta e adicionar reverb',
      heroAlt: 'Baixar uma faixa para cerca de 85% e adicionar uma cauda de eco suave',
      howToIntro: 'Mais lento, e dentro de uma sala',
      subtitle: 'O som da madrugada: desacelere a faixa para ~85%, dê espaço e exporte — sem app, sem envio.',
      intro:
        'O slowed + reverb é aquele som de madrugada, lento e com eco: a faixa cai para cerca de 80–90% da velocidade, o tom desce junto, e uma cauda suave faz tudo soar como se tocasse dois cômodos mais longe. Carregue a música, arraste a velocidade para uns 85%, suba o reverb até ficar no ponto e exporte — a edição inteira acontece no seu aparelho, então até faixas completas ficam prontas em segundos. Suba a velocidade acima de 100% e o resultado é nightcore.',
      usesHeading: 'Cenários típicos do slowed + reverb',
      uses: [
        'Versões noturnas: leve a música a uns 85% e acrescente espaço — o clima vira na hora.',
        'Reescuta lenta: faça um corte lento de uma música que ama, outro jeito de ouvi-la.',
        'Música de vídeos curtos: slowed + reverb é a atmosfera clássica do vídeo curto.',
        'Experimentos vocais: desacelere uma voz com reverb para material de textura.',
        'Dois botões separados: primeiro o quanto desacelera, depois o quanto de sala.',
        'Receita de um toque: os padrões são a combinação clássica do slowed + reverb.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Velocidade e wet, separados',
          text: 'Desacelere primeiro à velocidade que quiser, depois acrescente o espaço; os dois botões moram separados para o ajuste fino não brigar consigo.',
        },
        {
          icon: 'note',
          title: 'A receita clássica de fábrica',
          text: 'Os padrões são slowed + reverb como o gênero espera: desaceleração mais espaço, pronto na exportação.',
        },
      ],
      howTo: [
        {
          name: 'Solte a música',
          text: 'Qualquer MP3, WAV, M4A ou outro arquivo de áudio — uma faixa inteira de álbum funciona bem, e o processamento continua no aparelho.',
        },
        {
          name: 'Desacelere e dê espaço',
          text: 'Arraste a velocidade para cerca de 85% (o ponto clássico) e suba o reverb para 20–30%. Ouça a prévia e confie no ouvido.',
        },
        {
          name: 'Exporte a edição',
          text: 'Salve em MP3 320 kbps para postar, ou em WAV se for editar depois em outro app.',
        },
      ],
      faqs: [
        {
          q: 'Qual velocidade usar no slowed + reverb?',
          a: 'A maioria das edições fica entre 80% e 90%, com 85% no ponto certo — lento o bastante para o tom descer de forma clara, sem desmontar o ritmo. Músicas com chimbal movimentado aguentam melhor a desaceleração do que faixas densas e rápidas.',
        },
        {
          q: 'Como faço uma versão nightcore?',
          a: 'Empurre o controle de velocidade acima de 100% — em geral 120–130%. Subir a velocidade sobe o tom junto, e é exatamente o som nightcore. Deixe o reverb perto de zero para um nightcore clássico.',
        },
        {
          q: 'Desacelerar muda o tom?',
          a: 'Sim, de propósito — como um disco de vinil na velocidade errada. A voz fica mais grave e a tonalidade desce na mesma proporção. Essa queda de tom é a marca do estilo; slowed sem mudar o tom precisa de um editor de time-stretch, que é uma ferramenta diferente (e mais pesada). Um círculo lento que mantém a velocidade e o tom é a página de áudio 3D.',
        },
        {
          q: 'Quanto reverb eu devo colocar?',
          a: 'Comece em torno de 20–30% e ouça. O reverb é uma cauda de eco sintetizada — passado cerca de 50%, a faixa começa a soar como uma catedral e a voz perde as palavras.',
        },
        {
          q: 'Posso usar músicas slowed nos meus vídeos?',
          a: 'Deixar a música lenta não muda o direito autoral. Para publicar no YouTube ou no TikTok você ainda precisa dos direitos da música original — muita gente usa a biblioteca licenciada da plataforma e reserva as edições slowed para as próprias gravações.',
        },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você arrasta a forma de onda com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Slowed + Reverb: área de soltar, nada é enviado a um servidor',
        'Slowed + Reverb: área de trabalho com o arquivo carregado',
        'Slowed + Reverb: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O tom afunda porque a velocidade afunda',
          paragraphs: [
            'A velocidade vai de 0,50 a 2,00 em passos de 0,05, e o tom segue. Manter o tom é o mudar tempo, e aquela página para em 0,75 e 1,25.',
            'O ambiente é uma resposta de impulso de 2,2 segundos. Wet em 0 não adiciona ambiente.',
          ],
          table: {
            headers: [
              'Velocidade',
              'Como soa',
              'Uso comum',
            ],
            rows: [
              [
                '0,95',
                'Quase nada mais lento; o tom cai um pouco',
                'Edições que não devem se anunciar',
              ],
              [
                '0,90',
                'O som slowed clássico: relaxado, mais escuro',
                'O som da tendência slowed e reverb',
              ],
              [
                '0,85',
                'Pesado e sonhador, claramente mais grave',
                'Edições de clima e loops',
              ],
              [
                'Acima de 1,00',
                'Mais rápido e mais brilhante: território nightcore',
                'A mesma página, no outro sentido',
              ],
            ],
          },
        },
        {
          heading: 'Nightcore é a mesma página, no outro sentido',
          paragraphs: [
            'Empurre a velocidade acima de 100 por cento e o tom sobe junto:',
          ],
          bullets: [
            'Acima de 1,00 o arquivo fica mais rápido, e o tom sobe junto.',
            'Reverb em 0 não adiciona ambiente.',
            'A faixa para em 0,50 e em 2,00.',
          ],
        },
        {
          heading: 'Direito autoral e as ferramentas vizinhas',
          paragraphs: [
            'Esta página muda a velocidade e adiciona um ambiente de 2,2 segundos. Ela não verifica se você pode publicar o arquivo.',
            'Só a velocidade, de 0,5× a 2× e sem o controle de reverb, é o controle de velocidade. Um tom mais alto ou mais baixo com a mesma duração é o alterador de tom. Um eco contado que não muda a velocidade é a página de eco.',
          ],
        },
      ],
      dropHint: 'Solte uma música ou clique para procurar',
      exportLabel: 'Deixar lento e baixar',
    },
    'tempo-changer': {
      cardLine: 'Muda a duração de 0,75× a 1,25×. O tom fica.',
      name: 'Mudar tempo',
      shortName: 'Tempo',
      title: 'Mudar tempo — manter o tom, online grátis',
      description: 'Muda a duração de 0,75× a 1,25× em passos de 0,01. O tom fica. 1× não estica. Harmonia densa pode soar fina. Nada é enviado.',
      h1: 'Mudar tempo — Alterador de tempo, a duração anda e o tom fica',
      heroAlt: 'Mudar quanto um arquivo dura enquanto o tom fica',
      subtitle: 'De 0,75× a 1,25×, em passos de 0,01. O tom fica no lugar.',
      intro: 'Solte um arquivo e arraste a velocidade. O arquivo fica mais curto ou mais longo, e o tom volta para onde estava. O controle para em 0,75× e em 1,25×. 1× deixa as amostras quietas e não estica. Harmonia densa pode soar fina. Esse é o limite deste deslocamento. Nada é enviado.',
      usesHeading: 'Usos comuns de mudar o tempo',
      uses: [
        'Encaixar na imagem: a música dura mais ou menos que o plano; mude a duração sem tocar o tom.',
        'Bater o mashup: duas músicas em tempos diferentes, primeiro iguale e depois misture.',
        'Praticar devagar: uma música rápida em velocidade menor para tocar junto, sem a afinação subir ou descer.',
        'Ajuste fino da voz: estire um memo um pouquinho e a voz continua a mesma voz.',
        'Adaptar ao set: leve uma música nova ao mesmo BPM do seu set.',
        'Adaptar o sample: mude a duração do sample para os beats que o projeto pede.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Duração sem tom novo',
          text: 'O algoritmo de tempo preserva a tonalidade: mais rápido não fica agudo, mais lento não afunda — entre 0,75× e 1,25× é onde soa mais natural.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'A mudança de tempo é calculada no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        { name: 'Solte o arquivo', text: 'Adicione um MP3, WAV, M4A ou outro áudio. Ele fica no seu aparelho.' },
        { name: 'Defina o tempo', text: 'Arraste de 0,75× a 1,25×. Cada passo é 0,01. 1,00× é o arquivo que você soltou.' },
        { name: 'Ouça e exporte', text: 'Reproduza para ouvir a nova duração no tom original e salve em MP3 ou WAV.' },
      ],
      faqs: [
        { q: 'O arquivo é enviado?', a: 'Não. O navegador estica o arquivo na memória. Depois que a página carrega, você pode ficar offline e ainda exportar um arquivo que soltar.' },
        { q: 'Soa igual, só mais longo ou mais curto?', a: 'Uma nota sozinha fica perto. Harmonia densa pode soar fina. O mesmo deslocamento, passado uns 7 semitons, fica metálico, e este controle fica dentro de uns 5.' },
        { q: 'Dá para ir mais devagar que 0,75× ou mais rápido que 1,25×?', a: 'Não. O controle para aí. 0,5× e 2× são a página de velocidade, e nela o tom anda junto. 1× nesta página não estica.' },
        { q: 'Qual a diferença para a velocidade e o alterador de tom?', a: 'A página de velocidade muda a duração e o tom anda junto, de 0,5× a 2×. O alterador de tom move o tom e mantém a duração. Esta página muda a duração e o tom fica.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle de velocidade e o botão de exportar aceitam um toque no Chrome, Edge, Firefox e Safari atuais.' },
      {
        q: 'Posso mudar o tempo de um arquivo local pelo Claude ou pelo Cursor?',
        a: 'Esta página estica de 0.75× a 1.25× e mantém o tom. /mcp usa o atempo do ffmpeg de 0.5× a 2× e também mantém o tom. O MP3 é codificado uma vez. O app de chat ainda vê o caminho.',
      }],
      screenshotsAlt: [
        'Mudar tempo: área de soltar, nada é enviado a um servidor',
        'Mudar tempo: área de trabalho com o arquivo carregado',
        'Mudar tempo: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'A duração muda, o tom fica',
          paragraphs: [
            'A página primeiro reamostra o arquivo, então a duração e o tom andam juntos. Depois desloca o tom de volta na mesma proporção. 0,8× fica 1,25 vezes mais longo, e o tom volta para onde começou.',
            'O controle vai de 0,75× a 1,25× em passos de 0,01. Não há controle fora dessa faixa. Em 1× a esticada não roda, e a exportação fica com as amostras que você soltou.',
          ],
        },
        {
          heading: 'Onde o limite aparece',
          paragraphs: [
            'Harmonia densa pode soar fina. Uma voz sozinha ou uma nota única ficam mais perto.',
          ],
          bullets: [
            'O passo maior deste controle é cerca de 5 semitons. Passando de cerca de 7, este deslocador fica metálico.',
            'Um empilhamento de acordes é onde o som fino aparece primeiro.',
            '1× é o arquivo que você soltou. A esticada é pulada.',
          ],
        },
        {
          heading: 'A página de velocidade e o alterador de tom',
          paragraphs: [
            'A página de velocidade vai de 0,5× a 2× e o tom se move com o tempo. Use quando essa mudança de tom é o ponto.',
            'O alterador de tom move o tom e mantém a duração, até 12 semitons. Esta página faz o contrário: a duração se move, e o tom fica.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Mudar o tempo',
    },
    'pitch-changer': {
      cardLine: 'Mude o tom em semitons para covers e mashups — com o mesmo comprimento.',
      name: 'Alterador de tom',
      shortName: 'Tom',
      title: 'Alterador de tom — Mude o tom sem mudar a duração',
      description: 'Suba ou desça o tom de uma música ou voz em até 12 semitons, sem mudar a duração. Grátis, no navegador, sem enviar nada.',
      h1: 'Alterador de tom online grátis — Mudar o tom de uma música',
      heroAlt: 'Mover o tom de um MP3 enquanto a velocidade fica igual',
      subtitle: 'Suba ou desça o tom em semitons. A duração do arquivo continua a mesma.',
      intro: 'Solte uma música ou uma gravação e arraste o controle de tom. O tom muda e o tempo fica no lugar. Não é o alterador de velocidade: aqui o arquivo não encolhe nem estica. A mudança roda no seu aparelho.',
      usesHeading: 'Usos comuns de mudar o tom',
      uses: [
        'Mudar para um tom cantável: leve a música para o tom que combina com você, sem mudar a duração.',
        'Vozes de personagem: mova a voz alguns semitons para dar caráter, no mesmo ritmo.',
        'Encaixar o sample: leve o sample ao tom do projeto.',
        'Camadas de coro: a mesma frase em semitons diferentes, empilhando harmonias.',
        'Adaptar instrumentos: transponha para instrumentos sem alavanca de tom.',
        'Comparar ao vivo: suba e desça por semitons até achar o tom que cai melhor.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'De −12 a +12 semitons',
          text: 'Em passos de 1 semitom: a duração não se mexe um fio, só o tom. Quanto mais desloca, mais o acabamento aparece — mudanças pequenas soam mais naturais.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'A mudança de tom tem prévia no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        { name: 'Solte o arquivo', text: 'Adicione um MP3, WAV, M4A ou outro áudio. Ele fica no seu aparelho.' },
        { name: 'Defina o tom', text: 'Arraste de −12 a +12 semitons. +12 é uma oitava acima, −12 uma oitava abaixo. 0 deixa o arquivo como está.' },
        { name: 'Ouça e exporte', text: 'Reproduza para ouvir o novo tom na duração original e salve em MP3 ou WAV.' },
      ],
      faqs: [
        { q: 'A duração do arquivo muda?', a: 'Não. O controle de tom muda a tonalidade e deixa a duração quieta. Para deixar o arquivo mais rápido ou mais lento — o que também muda o tom — use o alterador de velocidade.' },
        { q: 'Até onde dá para mudar o tom?', a: 'De −12 a +12 semitons, de um em um. É uma oitava para cada lado. Voz e um instrumento solo aguentam melhor um deslocamento grande do que uma mix densa.' },
        { q: 'Um deslocamento grande soa natural?', a: 'Alguns semitons ficam perto do original. Passando de uns 7 semitons o som fica mais fino e metálico. É o limite deste alterador, não uma opção que dá para desligar.' },
        { q: 'É a mesma coisa que mudar a velocidade?', a: 'Não. O alterador de velocidade toca o arquivo mais rápido ou mais devagar, então o tom vai junto e a duração muda. Esta página só mexe no tom. O alterador de tempo muda a duração e o tom fica, de 0,75× a 1,25×.' },
        { q: 'O arquivo é enviado?', a: 'Não. A mudança é calculada no navegador e a exportação é salva no seu aparelho.' },
        { q: 'Posso mudar o tom de uma música para evitar copyright?', a: 'Não — mudar o tom não remove os direitos de uma gravação. Um upload com o tom alterado ainda pode ser reclamado e derrubado. Mude o tom para cantar ou para karaokê, e use música com os direitos certos ao publicar.' },
        {
          q: 'Funciona no celular?',
          a: 'Sim. Você arrasta a forma de onda com o dedo. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns no iPhone e no Android. Um arquivo longo usa mais memória, então a partir de cerca de uma hora o computador fica mais estável.',
        },
      ],
      screenshotsAlt: [
        'Alterador de tom: área de soltar, nada é enviado a um servidor',
        'Alterador de tom: área de trabalho com o arquivo carregado',
        'Alterador de tom: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O tom muda, a duração fica',
          paragraphs: [
            'O alterador de tom muda o tom de −12 a +12 semitons, um passo por vez. Isso é uma oitava para cada lado. O arquivo fica com a mesma duração.',
            'Fala e um instrumento único continuam usáveis por mais tempo que uma mixagem densa. Um deslocamento grande soa artificial. Não é uma burla de direito autoral: a gravação continua sendo a mesma gravação.',
          ],
        },
        {
          heading: 'Quando usar o controle',
          paragraphs: [
            'Manter a duração no lugar é o ponto:',
          ],
          bullets: [
            'Uma faixa de karaokê movida para um tom que você consegue cantar.',
            'Uma voz ajustada um ou dois semitons para encaixar com outra tomada.',
            'Um deslocamento de design de som em que o tempo do clipe não pode mudar.',
          ],
        },
        {
          heading: 'A velocidade é o outro controle',
          paragraphs: [
            'O controle de velocidade vai de 0,5× a 2× e move o tom com o tempo, como um disco. 2× fica cerca de uma oitava acima e metade da duração. Esta página não faz isso.',
            'Slowed + reverb também afunda o tom ao desacelerar o arquivo, e adiciona uma cauda. Se você quer o som nightcore ou slowed, é aquela página. Se quer a mesma duração e um novo tom, fique aqui.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Mudar o tom e baixar',
    },
    'm4a-to-mp3': {
      cardLine: 'Converta áudios de voz do iPhone e arquivos AAC em MP3 que tocam em qualquer lugar.',
      name: 'M4A para MP3',
      shortName: 'M4A para MP3',
      title: 'M4A para MP3 — Converta M4A e AAC online grátis',
      description: 'Converta áudio M4A e AAC para MP3 no navegador. Grátis, sem cadastro e sem enviar nada. Escolha 128, 192 ou 320 kbps.',
      h1: 'M4A para MP3 — Converter M4A em MP3',
      heroAlt: 'Converter um recado de voz do iPhone ou um arquivo AAC em MP3',
      subtitle: 'Transforme arquivos M4A e AAC em MP3, no navegador, sem enviar nada.',
      intro: 'Recados de voz e gravações AAC costumam ser M4A. Solte o arquivo, escolha um bitrate e o navegador decodifica e salva um MP3. O áudio não vai para um servidor.',
      usesHeading: 'Usos comuns de M4A para MP3',
      uses: [
        'Memos do iPhone: transforme os M4A de Memos de Voz em MP3 que tocam em qualquer lugar.',
        'Downloads AAC: converta o áudio AAC no MP3 que aparelhos antigos aceitam.',
        'Biblioteca única: converta faixas do iTunes para MP3 e o carro e tocadores velhos aceitam todos.',
        'Transcrição de voz: 128 kbps para voz e mande para a [transcrição](/audio-to-text).',
        'Anexos de e-mail: esprema dentro do teto de 25 MB.',
        'Preparação de toque: converta para MP3 e corte os 40 segundos no [criador de toque](/ringtone-maker).',
      ],
      why: [
        {
          icon: 'convert',
          title: 'AAC decodificado nativamente',
          text: 'O navegador decodifica a trilha AAC nativamente, sem formato intermediário, e escreve exatamente o degrau de MP3 que você pediu.',
        },
        {
          icon: 'layers',
          title: 'ZIP em lote',
          text: 'Vários M4A convertem numa passada e vão para um ZIP quando terminam.',
        },
      ],
      howTo: [
        { name: 'Solte o M4A', text: 'Arraste um .m4a ou .aac para a página, ou clique para procurar. Um MP4 de vídeo fica na página de MP4 para MP3. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.' },
        { name: 'Escolha o bitrate', text: '320 kbps para música, 192 kbps para o dia a dia, 128 kbps para recados de voz.' },
        { name: 'Converta e baixe', text: 'Clique em Converter para MP3. A decodificação e a codificação acontecem no seu aparelho, e o arquivo baixa em seguida.' },
      ],
      faqs: [
        { q: 'Posso converter mais de um M4A?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        { q: 'Posso converter M4A para MP3 no iPhone, Android ou Mac?', a: 'Sim: o conversor roda em qualquer navegador, então o aparelho não importa. Áudio AAC dentro de um M4A, que é o formato dos recados de voz e da maioria dos downloads AAC. Apple Lossless (ALAC) dentro de um M4A muitas vezes não decodifica no navegador. Converta antes para AAC ou WAV e traga o arquivo para cá.' },
        { q: 'E um vídeo MP4?', a: 'Use o conversor de MP4 para MP3 para vídeos. Esta página é de áudio: M4A e AAC.' },
        { q: 'Converter para MP3 perde qualidade?', a: 'MP3 tem perda. A 320 kbps a diferença para o AAC original é pequena para quase todo mundo. Fique com o M4A se precisar do arquivo original intacto.' },
        { q: 'As tags e a capa são mantidas?', a: 'Não. O MP3 sai sem metadados, como no conversor de WAV. Título, artista e capa não são copiados.' },
        { q: 'O arquivo é enviado?', a: 'Não. O navegador decodifica o M4A e codifica o MP3 localmente. O áudio fica no seu aparelho.' },
      ],
      screenshotsAlt: [
        'M4A para MP3: área de soltar, nada é enviado a um servidor',
        'M4A para MP3: área de trabalho com o arquivo carregado',
        'M4A para MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Recados de voz e AAC, não um vídeo',
          paragraphs: [
            'Esta página decodifica um arquivo M4A ou AAC e codifica MP3. O seletor também aceita MP4. Se esta aba não consegue decodificar o arquivo, a mensagem não diz qual é o codec. Um arquivo de vídeo vai para [MP4 para MP3](/mp4-to-mp3).',
            'Um vídeo MP4 pertence ao MP4 para MP3. Aquela página tira a trilha sonora da imagem. Esta página é só áudio.',
          ],
        },
        {
          heading: 'O que o MP3 mantém',
          paragraphs: [
            'MP3 tem perdas. O menu é a escolha usual de bitrate:',
          ],
          bullets: [
            '320 kbps quando o recado ou a música devem ficar perto do AAC.',
            '192 kbps para fala que você ainda vai ouvir.',
            '128 kbps quando o arquivo principalmente precisa ser pequeno o bastante para enviar.',
          ],
        },
        {
          heading: 'As tags não são copiadas',
          paragraphs: [
            'Título, artista e capa não passam. O MP3 é escrito sem metadados. Recoloque com o editor de tags MP3 se o player precisa de um nome.',
            'Guarde o M4A se você ainda precisa do original. A conversão não envia o arquivo. Corte ou recorte depois de ter o MP3, no cortador de áudio ou no cortador de MP3, se o recado tem silêncio nas pontas.',
          ],
        },
      ],
      dropHint: 'Solte arquivos M4A ou AAC, ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'ogg-to-mp3': {
      cardLine: 'Faça arquivos OGG de clipes de jogo ou gravações do Linux tocarem em qualquer app.',
      name: 'Converter OGG para MP3',
      shortName: 'OGG para MP3',
      title: 'Converter OGG para MP3 — online e grátis',
      description: 'Converta OGG para MP3 no navegador, sem limite de tamanho. Grátis, sem cadastro e sem enviar nada. Vorbis ou Opus dentro do OGG, em 128, 192 ou 320 kbps.',
      h1: 'Converter OGG para MP3 — Converter OGG em MP3',
      heroAlt: 'Converter o Vorbis ou o Opus de um OGG em MP3',
      subtitle: 'Transforme áudio OGG em MP3, no navegador, sem enviar nada.',
      intro: 'OGG é um contêiner: em geral Vorbis, às vezes Opus. Solte o arquivo, escolha um bitrate e o navegador decodifica e salva um MP3. O áudio não vai para um servidor.',
      usesHeading: 'Usos comuns de OGG para MP3',
      uses: [
        'Material de jogo: transforme o OGG tirado de um jogo em MP3 que o editor aceite.',
        'Gravações do navegador: converta o OGG que um gravador web entrega num formato universal.',
        'Gravações no Linux: os gravadores do sistema saem em OGG; converta para MP3 e compartilhe.',
        'Compatibilidade no carro: o som velho recusa OGG; converta para MP3 e dê play.',
        'Mensagens de voz: alguns apps gravam OGG/Opus — converta para MP3 e arquive.',
        'Organizar em lote: converta vários OGGs de uma vez, empacotados num ZIP.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Vorbis e Opus decodificam',
          text: 'Os dois codecs internos do OGG decodificam aqui; .opus pelado como o do WhatsApp tem uma [página própria](/opus-to-mp3).',
        },
        {
          icon: 'layers',
          title: 'ZIP em lote',
          text: 'Os OGGs compartilham um conjunto de ajustes, convertem em ordem e vão para um ZIP.',
        },
      ],
      howTo: [
        { name: 'Solte o OGG', text: 'Arraste um .ogg ou .oga para a página, ou clique para procurar. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.' },
        { name: 'Escolha o bitrate', text: '320 kbps para música, 192 kbps para o dia a dia, 128 kbps para voz.' },
        { name: 'Converta e baixe', text: 'Clique em Converter para MP3. A decodificação e a codificação acontecem no seu aparelho, e o arquivo baixa em seguida.' },
      ],
      faqs: [
        { q: 'Posso converter mais de um OGG?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        { q: 'O que é um arquivo OGG?', a: 'OGG é um contêiner. A música dentro dele costuma ser Vorbis. Alguns áudios de voz usam Opus. Se o navegador decodifica, esta página converte para MP3.' },
        { q: 'Quais navegadores convertem OGG?', a: 'Chrome e Firefox decodificam Vorbis e Opus dentro de OGG. O Safari decodifica Opus e muitas vezes recusa Vorbis. Se o arquivo não toca numa aba comum, esta página também não converte.' },
        { q: 'Converter OGG para MP3 perde qualidade?', a: 'MP3 tem perda. Em 320 kbps a diferença é pequena para quase todo mundo. Fique com o OGG se precisar do arquivo original.' },
        { q: 'As tags e a capa são mantidas?', a: 'Não. O MP3 sai sem metadados. Título, artista e capa não são copiados.' },
        { q: 'O arquivo é enviado?', a: 'Não. O navegador decodifica o OGG e codifica o MP3 localmente. O áudio fica no seu aparelho.' },
      ],
      screenshotsAlt: [
        'Converter OGG para MP3: área de soltar, nada é enviado a um servidor',
        'Converter OGG para MP3: área de trabalho com o arquivo carregado',
        'Converter OGG para MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Vorbis ou Opus dentro de um OGG',
          paragraphs: [
            'OGG é um contêiner. Arquivos de música nele costumam usar Vorbis. Alguns arquivos de voz usam Opus. Esta página converte qualquer um dos dois quando o navegador consegue decodificar.',
            'Se esta aba não consegue tocar o arquivo, esta página não consegue decodificar. O menu começa em 320 kbps. As tags não são copiadas.',
          ],
        },
        {
          heading: 'Bitrate e o que você abre mão',
          paragraphs: [
            'MP3 tem perdas. A 320 kbps a diferença é pequena para a maioria das audições. Guarde o OGG se você precisa do original:',
          ],
          bullets: [
            '320 kbps para música que você vai manter.',
            '192 kbps para um arquivo de voz ou uma cópia menor.',
            '128 kbps quando o destino só precisa de inteligibilidade da fala.',
          ],
        },
        {
          heading: 'Um arquivo .opus é a outra página',
          paragraphs: [
            'Recados de voz do WhatsApp e do Telegram costumam ser um arquivo .opus, ou Opus dentro de WebM. Esses pertencem ao Opus para MP3. Esta página é o contêiner OGG.',
            'Título, artista e capa não são copiados. O MP3 é escrito sem metadados. Nada é enviado.',
          ],
        },
      ],
      dropHint: 'Solte arquivos OGG ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'opus-to-mp3': {
      cardLine: 'Converta chamadas e downloads Opus em MP3 que qualquer player aceita.',
      name: 'Converter Opus para MP3',
      shortName: 'Opus para MP3',
      title: 'Converter Opus para MP3 — áudios do WhatsApp',
      description: 'Converta áudio Opus para MP3 no navegador. Grátis, sem cadastro e sem enviar nada. Serve para .opus e para Opus dentro de OGG ou WebM.',
      h1: 'Converter Opus para MP3 — Converter Opus em MP3',
      heroAlt: 'Converter um recado de voz do WhatsApp ou do Telegram em MP3',
      subtitle: 'Transforme áudio Opus em MP3, no navegador, sem enviar nada.',
      intro: 'Recados de voz e alguns downloads são Opus: um arquivo .opus, ou Opus dentro de OGG ou WebM. Solte o arquivo, escolha um bitrate e o navegador decodifica e salva um MP3. O áudio não vai para um servidor.',
      usesHeading: 'Opus que as pessoas convertem',
      uses: [
        'Passe uma mensagem de voz ou uma exportação Opus para MP3, num player que não abre Opus.',
        'Fala fica bem em 128 kbps. Você muda o formato que as pessoas conseguem tocar, não a duração.',
        'Converta aqui e corte se a mensagem tiver um silêncio longo numa das pontas.',
      ],
      howTo: [
        { name: 'Solte o Opus', text: 'Arraste um .opus para a página, ou clique para procurar. OGG e WebM com Opus funcionam do mesmo jeito. Dá para soltar vários arquivos. Eles usam o ajuste que você escolhe em seguida. Um baixa sozinho. Dois ou mais voltam num ZIP.' },
        { name: 'Escolha o bitrate', text: '128 kbps basta para um recado de voz. Se o Opus for música, use 192 ou 320 kbps.' },
        { name: 'Converta e baixe', text: 'Clique em Converter para MP3. A decodificação e a codificação acontecem no seu aparelho, e o arquivo baixa em seguida.' },
      ],
      faqs: [
        { q: 'Posso converter mais de um arquivo Opus?', a: 'Sim. Vários arquivos usam o ajuste desta página. Convertem um depois do outro neste aparelho, e cada arquivo é liberado antes do próximo começar. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        { q: 'O que é o formato Opus?', a: 'Opus é um codec de áudio. Recados de voz do WhatsApp e do Telegram costumam ser .opus. Ele também fica dentro de OGG e WebM. Esta página transforma isso num MP3 que toca em qualquer lugar.' },
        { q: 'Quais arquivos Opus funcionam?', a: 'Os que o navegador já consegue tocar: .opus, OGG com Opus e WebM com Opus, no Chrome, no Firefox e no Safari atual. Se uma aba comum fica em silêncio, esta página também não decodifica esse arquivo.' },
        { q: 'Converter Opus para MP3 perde qualidade?', a: 'MP3 tem perda, e Opus também. Em 320 kbps o MP3 está no limite do formato. Um recado de voz fica bem em 128 kbps. Guarde o Opus se precisar do original.' },
        { q: 'As tags são mantidas?', a: 'Não. O MP3 sai sem metadados. Título e artista não são copiados.' },
        { q: 'O arquivo é enviado?', a: 'Não. O navegador decodifica o Opus e codifica o MP3 localmente. O áudio fica no seu aparelho.' },
      ],
      screenshotsAlt: [
        'Converter Opus para MP3: área de soltar, nada é enviado a um servidor',
        'Converter Opus para MP3: área de trabalho com o arquivo carregado',
        'Converter Opus para MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Recados de voz que só alguns players abrem',
          paragraphs: [
            'Opus é o codec dentro de muitos recados de voz do WhatsApp e do Telegram, salvos como .opus. Ele também fica dentro de OGG e WebM. Esta página transforma esse áudio em um MP3 que um carro, um celular ou um player antigo abre.',
            'O seletor aceita .opus, Opus em OGG e Opus em WebM. Se esta aba não consegue tocar o arquivo, esta página não consegue decodificar. O menu começa em 192 kbps.',
          ],
        },
        {
          heading: 'Fala não precisa de 320',
          paragraphs: [
            'Um recado de voz é fala. Escolha o bitrate para isso:',
          ],
          bullets: [
            '128 kbps basta para um recado de voz que você vai enviar ou guardar.',
            '192 kbps se o recado tem música sob a voz e isso importa.',
            '320 kbps só quando o arquivo Opus é música e você quer o MP3 perto dele.',
          ],
        },
        {
          heading: 'Tags e a página de OGG',
          paragraphs: [
            'Título e artista não são copiados. O MP3 é escrito sem metadados. Um OGG que na verdade é música Vorbis pertence ao OGG para MP3, que é a página com o nome desse contêiner.',
            'Nada é enviado. Se o recado tem silêncio longo nas pontas, converta primeiro, depois corte. O removedor de silêncio é a ferramenta errada em uma base musical baixa, mas cai bem em um recado de voz com pausas longas.',
          ],
        },
      ],
      dropHint: 'Solte arquivos Opus ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'waveform-generator': {
      cardLine: 'Transforme qualquer faixa numa imagem de onda compartilhável com suas cores.',
      name: 'Gerador de forma de onda',
      shortName: 'Forma de onda',
      title: 'Gerador de forma de onda — imagem de áudio em PNG grátis',
      description: 'Transforme uma música ou gravação numa imagem de forma de onda. Escolha cores, estilo e tamanho e baixe um PNG nítido. Grátis no navegador, sem envio.',
      h1: 'Gerador de forma de onda de áudio online grátis — Fazer uma imagem da forma de onda',
      heroAlt: 'Salvar a forma de onda de uma música como PNG',
      subtitle: 'Uma imagem da forma de onda — cores, tamanho e PNG transparente, desenhados no seu aparelho.',
      intro: 'Solte uma música, um recado de voz ou um podcast e receba uma imagem de forma de onda para capa, fundo de vídeo ou post. Barras ou preenchimento, cores, e um PNG em tamanho de vídeo, quadrado ou banner. O navegador desenha a imagem a partir do arquivo aberto — nada é enviado.',
      usesHeading: 'Para que serve a imagem',
      uses: [
        'Uma capa de podcast ou de música com forma de onda, em vez de um quadrado vazio.',
        'Um PNG transparente para colocar sobre um vídeo ou uma miniatura.',
        'Um banner largo para o topo de um site ou o cartão final de um vídeo.',
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'MP3, WAV, M4A, OGG ou FLAC. A decodificação fica no seu aparelho.' },
        { name: 'Ajuste o visual', text: 'Escolha um modelo, ou defina o estilo e as cores. Marque início e fim se quiser só um trecho. Há presets de 1920×1080, quadrado, imagem social e banner.' },
        { name: 'Baixe o PNG', text: 'A prévia é a exportação. Os tamanhos prontos saem no dobro da resolução para continuar nítidos.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O navegador decodifica o arquivo e desenha a imagem num canvas. Não há envio. Depois que a página carrega, funciona também offline.' },
        { q: 'O PNG fica nítido?', a: 'Os tamanhos prontos exportam com o dobro dos pixels — uma capa de 1920×1080 baixa como 3840×2160. PNG não tem perda. Acima de cerca de dois milhões de pixels, um tamanho personalizado exporta em 1× para não estourar a memória.' },
        { q: 'Dá para editar o áudio aqui?', a: 'Não. Esta página só desenha. Para cortar ou aparar, use o aparador de áudio e volte se ainda quiser a imagem.' },
        { q: 'É a mesma coisa que um espectrograma?', a: 'Não. Uma forma de onda mostra o volume no tempo — o contorno do player. Um espectrograma mostra quais frequências existem. Para vê-las, use o gerador de espectrograma.' },
        { q: 'Dá para ter fundo transparente?', a: 'Sim. Deixe «Fundo transparente» ligado e o PNG não tem fundo, então cabe sobre um vídeo ou outra imagem. Desligue para pintar uma cor sólida.' },
        { q: 'Funciona no celular?', a: 'Sim. Numa tela estreita os controles empilham e o botão de download fica ao alcance. Chrome, Edge, Firefox e Safari atuais, no computador e no celular.' },
      ],
      screenshotsAlt: [
        'Gerador de forma de onda: a página antes de qualquer arquivo ou entrada',
        'Gerador de forma de onda: depois de ler o arquivo ou os toques',
        'Gerador de forma de onda: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Uma imagem do volume, não uma edição',
          paragraphs: [
            'O gerador de forma de onda desenha o volume ao longo do tempo: barras espelhadas ou uma forma preenchida, nas cores que você escolher. O download é um PNG. Tamanhos predefinidos exportam no dobro dos pixels listados, então uma capa de 1920×1080 sai como 3840×2160.',
            'Tamanhos personalizados acima de cerca de dois milhões de pixels exportam em 1× para a aba não ficar sem memória. PNG é sem perdas. Esta página não corta, não aplica fade nem amplifica o áudio.',
          ],
        },
        {
          heading: 'Formatos que as pessoas baixam',
          paragraphs: [
            'Escolha o quadro para onde a imagem vai ficar:',
          ],
          bullets: [
            'Tamanho de vídeo para um fundo ou um cartão final.',
            'Quadrado para capa de podcast ou de música.',
            'Um banner largo para cabeçalho. Deixe o fundo transparente se você vai sobrepor o PNG a um vídeo ou outra imagem.',
          ],
        },
        {
          heading: 'Não é um espectrograma',
          paragraphs: [
            'Uma forma de onda é o desenho que um player de música mostra. Um espectrograma mostra quais frequências estão presentes. Para essa imagem, use o gerador de espectrograma.',
            'Para cortar o arquivo primeiro, use o cortador de áudio, e volte para a imagem. Você não consegue tocar o PNG de volta dentro da música. Colocar uma imagem em um WAV é imagem para áudio, o outro sentido.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Baixar PNG',
    },
    'spectrogram-generator': {
      cardLine: 'Veja as frequências dentro de uma música, gravação ou canto de pássaro.',
      name: 'Espectrograma online',
      shortName: 'Espectrograma',
      title: 'Espectrograma online — áudio em imagem, grátis',
      description: 'Gere um espectrograma de qualquer áudio e baixe o PNG. Eixo log ou linear, cores, faixa em dB. Grátis no navegador, nada é enviado.',
      h1: 'Espectrograma de áudio online grátis — Ver as frequências de uma gravação',
      heroAlt: 'Baixar em PNG a imagem das frequências de uma música',
      subtitle: 'Veja quais frequências há numa música ou gravação e baixe a imagem. O cálculo fica no seu aparelho.',
      intro: 'Um espectrograma mostra quais frequências existem ao longo do tempo: voz, graves e qualquer desenho posto no som. Solte um arquivo, escolha eixo log ou linear e baixe o PNG. A FFT roda no navegador — nada é enviado.',
      usesHeading: 'O que as pessoas procuram',
      uses: [
        'Ver onde estão os graves, a voz e o chiado antes de equalizar.',
        'Achar uma imagem ou uma palavra escondida nas frequências.',
        'Exportar um still de uma música para um post, uma aula ou uma nota.',
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'MP3, WAV, M4A, OGG ou FLAC. A decodificação fica no seu aparelho.' },
        { name: 'Ajuste a vista', text: 'O eixo log é a vista usual de música. Aperte a frequência de cima. Se uma imagem escondida estiver escura ou clara demais, mexa no piso e no teto em dB. Se quiser só um trecho, encurte o intervalo.' },
        { name: 'Baixe o PNG', text: 'Os tamanhos prontos saem em resolução dobrada. A imagem não é áudio — o PNG não volta a ser a música.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O navegador decodifica o arquivo e calcula a FFT nesta aba. Não há envio. Depois que a página carrega, funciona offline.' },
        { q: 'O que as cores significam?', a: 'Cada coluna é um instante. A altura é a frequência, agudos em cima. Mais claro significa mais energia. Viridis, inferno e cinza são os mesmos dados com outra escala. O piso e o teto em dB decidem o que é silêncio e o que é alto.' },
        { q: 'Dá para transformar a imagem de volta em áudio?', a: 'Não. O PNG é um desenho de níveis, não a forma de onda. Para ouvir, fique com o original. Para colocar uma imagem no áudio, use Imagem para áudio e abra esse WAV aqui.' },
        { q: 'Qual a diferença para o gerador de forma de onda?', a: 'Uma forma de onda é o volume no tempo — o contorno do player. Um espectrograma mostra quais frequências existem. Capa: forma de onda. Inspecionar ou revelar frequências: esta página.' },
        { q: 'Funciona no celular?', a: 'Sim. Numa tela estreita os controles empilham e o download fica ao alcance. Chrome, Edge, Firefox e Safari atuais, no computador e no celular. Um arquivo longo demora um pouco porque cada coluna é uma FFT.' },
        { q: 'Por que algumas músicas escondem uma imagem?', a: 'Algumas faixas, o caso famoso é Aphex Twin, desenham uma imagem pondo energia em frequências escolhidas. Suba o teto em dB se a imagem estiver pálida e mantenha o eixo log. Esta página só mostra. Criar é Imagem para áudio.' },
      ],
      screenshotsAlt: [
        'Espectrograma online: a página antes de qualquer arquivo ou entrada',
        'Espectrograma online: depois de ler o arquivo ou os toques',
        'Espectrograma online: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Frequência ao longo do tempo, em PNG',
          paragraphs: [
            'Cada coluna é um momento. A altura é a frequência, notas agudas no topo. Cor mais brilhante significa mais energia. Viridis, inferno e cinza são os mesmos dados com uma escala diferente. O piso e o teto em dB definem o que conta como baixo e alto.',
            'A imagem é uma FFT do arquivo, desenhada nesta aba. Não é áudio. Você não consegue tocar o PNG de volta dentro da música.',
          ],
        },
        {
          heading: 'Como ler uma imagem escondida',
          paragraphs: [
            'Algumas faixas desenham uma imagem colocando energia em frequências escolhidas. Esta página consegue mostrar isso. Ela não cria:',
          ],
          bullets: [
            'Mantenha o eixo log para a visão usual de música. Ele estica o grave.',
            'Suba o teto em dB se uma imagem escondida está fraca.',
            'Encurte o intervalo de tempo se você só quer um trecho do arquivo.',
          ],
        },
        {
          heading: 'Forma de onda e o truque reverso',
          paragraphs: [
            'O gerador de forma de onda é o volume ao longo do tempo, o desenho para uma capa. Esta página é quais frequências estão lá.',
            'Para montar um WAV que mostre sua imagem ou uma linha curta de texto em um espectrograma, use imagem para áudio, depois abra esse WAV aqui. Frequência log, teto em torno de −20 dB. A forma fica entre cerca de 400 Hz e 12 kHz. Esta página só exibe.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Baixar PNG',
    },
    'image-to-audio': {
      cardLine: 'Esconda uma imagem ou uma linha de texto no espectrograma de um WAV.',
      name: 'Imagem para áudio',
      shortName: 'Imagem para áudio',
      title: 'Imagem para áudio — faça um espectrograma da imagem',
      description: 'Transforme uma imagem ou uma linha curta num WAV que um espectrograma mostra. Grátis no navegador, nada é enviado.',
      h1: 'Imagem para áudio online grátis — Transformar uma imagem em som',
      heroAlt: 'Transformar uma imagem de espectrograma de volta em um WAV',
      subtitle: 'Pinte uma imagem ou uma linha de texto num WAV. O espectrograma mostra de volta.',
      intro: 'Digite uma linha curta ou solte uma imagem. Esta página escreve essa forma nas frequências de um WAV, o mesmo truque de uma imagem escondida numa música. Não é uma música nem é fala. Abra o WAV no gerador de espectrograma. Nada é enviado.',
      usesHeading: 'Usos comuns de imagem para áudio',
      uses: [
        'Mensagens no espectro: esconda um nome ou uma frase que só o [gerador de espectrograma](/spectrogram-generator) revela.',
        'Rabiscos em som: transforme um logo ou desenho simples num pequeno quadro de tons.',
        'Demonstrações em aula: mostre ao pessoal que a imagem é o som.',
        'Peças de arte: leve uma obra visual ao seu panorama sonoro correspondente.',
        'Ovos de páscoa: construa um trocadilho audível e visível para um vídeo ou música.',
        'Alfabetização do ouvido: treine o ouvido para distinguir como cada forma muda o timbre.',
      ],
      why: [
        {
          icon: 'image',
          title: 'A imagem é o espectro',
          text: 'Abra o áudio gerado no [gerador de espectrograma](/spectrogram-generator) e verá exatamente o que desenhou ou digitou.',
        },
        {
          icon: 'download-simple',
          title: 'WAV baixa direto',
          text: 'O que você recebe é um WAV padrão que qualquer tocador toca.',
        },
      ],
      howTo: [
        { name: 'Digite ou solte', text: 'Até 32 caracteres, ou PNG, JPG, WebP. A prévia é a imagem que será gravada. Pixels claros são frequências mais altas.' },
        { name: 'Baixe o WAV', text: 'Você recebe um WAV de 44,1 kHz, 16 bits. Soa como chirps e ruído, não como a imagem lida em voz alta.' },
        { name: 'Olhe o espectro', text: 'Abra o WAV no gerador de espectrograma. Eixo log, teto por volta de −20 dB. A forma fica entre cerca de 400 Hz e 12 kHz.' },
      ],
      faqs: [
        { q: 'Minha imagem é enviada?', a: 'Não. O navegador desenha o texto ou a imagem e monta o WAV nesta aba. Não há envio. Depois que a página carrega, funciona offline.' },
        { q: 'Que arquivo eu recebo?', a: 'Um WAV mono, 44,1 kHz, PCM de 16 bits, alguns segundos. Não é MP3. A imagem vive nas frequências: um MP3 de baixo bitrate pode borrar a forma.' },
        { q: 'Soa como a imagem ou as palavras?', a: 'Não. Não há síntese de fala nem gerador de música. Você ouve tons onde os pixels são claros. Para ler, abra um espectrograma.' },
        { q: 'Qual a diferença para o gerador de espectrograma?', a: 'O gerador de espectrograma desenha um áudio que você já tem. Esta página faz o inverso: constrói áudio para um espectrograma mostrar sua imagem ou sua linha. O gerador de forma de onda só mostra o volume, então a forma escondida mal aparece lá.' },
        { q: 'Funciona no celular?', a: 'Sim. Digite, escolha uma foto, baixe. Chrome, Edge, Firefox e Safari atuais, no computador e no celular. Uma foto muito detalhada é reduzida para o arquivo continuar curto.' },
        { q: 'Isso é um código secreto?', a: 'Não. Quem abrir um espectrograma do WAV vê a imagem. É um desenho visível no som, não criptografia.' },
      ],
      screenshotsAlt: [
        'Imagem para áudio: a página antes de qualquer arquivo ou entrada',
        'Imagem para áudio: depois de ler o arquivo ou os toques',
        'Imagem para áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Uma imagem escrita em frequências',
          paragraphs: [
            'Digite até 32 caracteres, ou solte um PNG, JPG ou WebP. A página escreve essa forma nas frequências de um WAV mono a 44,1 kHz, 16 bits, com alguns segundos. Pixels brilhantes viram frequências mais altas.',
            'Não é uma música nem fala. Você ouve chirps e ruído, não as palavras faladas em voz alta. Uma foto muito detalhada é reduzida para o arquivo ficar curto.',
          ],
        },
        {
          heading: 'Como ver o que você escreveu',
          paragraphs: [
            'A forma é invisível em uma forma de onda normal. Abra o WAV no gerador de espectrograma:',
          ],
          bullets: [
            'Frequência log, teto em torno de −20 dB.',
            'O desenho fica entre cerca de 400 Hz e 12 kHz.',
            'Guarde o WAV. Um MP3 de bitrate baixo pode borrar a forma.',
          ],
        },
        {
          heading: 'Não é um código nem a página de espectrograma',
          paragraphs: [
            'Quem abrir um espectrograma do WAV consegue ver a imagem. É um desenho no som, não criptografia.',
            'O gerador de espectrograma desenha uma imagem de um áudio que você já tem. Esta página constrói áudio para essa imagem mostrar sua figura ou sua linha. O gerador de forma de onda só mostra volume, então a forma escondida não fica óbvia lá.',
          ],
        },
      ],
      dropHint: 'Ou solte uma imagem',
      exportLabel: 'Baixar WAV',
    },
    'mp3-tag-editor': {
      name: 'Editor de tags MP3',
      shortName: 'Editor de tags',
      title: 'Editor de tags MP3 online — editar tags e capa grátis',
      description:
        'Edite as tags do seu MP3 online: título, artista, álbum, ano, faixa e capa. Tudo no navegador, sem enviar arquivos. Grátis e sem cadastro.',
      h1: 'Editor de tags MP3 online grátis — Editar tags ID3',
      heroAlt: 'Mudar o título, o artista e a capa de um MP3',
      subtitle: 'Corrija o título, o artista, o álbum e a capa de um MP3 em menos de um minuto — no navegador, sem enviar nada.',
      intro:
        'Um MP3 carrega duas coisas: a música e a ficha de informações que os players mostram ao lado — título, artista, álbum, ano e capa. Quando essa ficha está errada ou falta, tudo, do celular ao som do carro, cai em Artista desconhecido ou Track 01. Solte um arquivo aqui, corrija os campos e salve: o áudio é copiado byte a byte, intacto, e nunca sai do seu aparelho.',
      usesHeading: 'Usos comuns do editor de tags MP3',
      uses: [
        'Consertar tags: resolve o «Artista desconhecido» e a capa sumida para o tocador mostrar certo.',
        'Publicação em forma: dê título, capa e créditos certos a um episódio ou demo.',
        'Limpeza de privacidade: apague restos de dados de aparelho e local antes de compartilhar.',
        'Álbum uniforme: mude em bloco a capa e o gênero de um álbum inteiro.',
        'Numerar o podcast: título do episódio com número e nome do programa, e o app ordena certo.',
        'Sem perdas: só os bytes de tag mudam; o áudio é copiado byte a byte intacto.',
      ],
      why: [
        {
          icon: 'tags',
          title: 'Lê e escreve no próprio aparelho',
          text: 'As tags e a capa atuais são lidas no seu dispositivo e o arquivo reescrito é salvo do navegador; não existe passo de envio em lugar nenhum.',
        },
        {
          icon: 'layers',
          title: 'Um álbum inteiro em lote',
          text: 'Vários MP3s compartilham artista, álbum, ano, gênero e capa; título e número ficam em cada faixa. Dois ou mais voltam num ZIP.',
        },
      ],
      howTo: [
        { name: 'Solte seu MP3', text: 'Arraste o arquivo ou clique para escolher. As tags e a capa atuais são lidas no seu aparelho e aparecem no formulário. Vários MP3 podem compartilhar artista, álbum, ano, gênero e capa. Título e número da faixa ficam em cada arquivo. Dois ou mais baixam num ZIP.' },
        { name: 'Edite os campos', text: 'Digite o título, o artista, o álbum, o ano e o número da faixa certos, e adicione ou troque a capa com um JPG ou PNG.' },
        { name: 'Salve o MP3', text: 'Clique em "Salvar MP3" para baixar o arquivo com tags. O áudio é copiado sem mudanças — só a ficha de informações em volta é reescrita.' },
      ],
      faqs: [
        { q: 'Posso etiquetar um álbum inteiro?', a: 'Sim. Solte vários MP3. Artista, álbum, ano, gênero e capa valem para cada arquivo. Título e número da faixa ficam em cada linha. Números de faixa vazios começam em 1. Um baixa sozinho. Dois ou mais voltam num ZIP. O áudio continua copiado byte a byte.' },
        { q: 'Meu MP3 é enviado para um servidor?', a: 'Não. O arquivo é aberto com a API FileReader do navegador e reescrito na sua própria aba. Você pode carregar a página, desligar o Wi-Fi, e o editor continua funcionando. Não existe nenhuma etapa de envio.' },
        { q: 'Editar as tags muda a qualidade do áudio?', a: 'Não. Os dados das tags ficam num bloco separado no começo do arquivo, e os frames de áudio MPEG são copiados byte a byte, então o som é idêntico bit a bit. O arquivo salvo pode até ficar um pouco menor, porque o bloco de tags antigo e o padding dele não são levados.' },
        { q: 'Qual a diferença para o editor de MP3?', a: 'O editor de MP3 corta, apara e junta o áudio em si, o que exige decodificar e recodificar o som. Esta página nunca toca no som — ela reescreve a ficha de informações em volta. Use aquele para editar a música e este para etiquetar.' },
        { q: 'O que ele não faz?', a: 'Ele edita só arquivos MP3 — FLAC, M4A e WAV usam formatos de tags diferentes que esta página ainda não escreve. Vários MP3 podem compartilhar artista, álbum, ano, gênero e capa, e cada arquivo guarda o próprio título e número da faixa. E salvar reescreve o bloco de tags inteiro, então capítulos de podcast ou campos personalizados incomuns do tag original não são levados — os campos comuns são.' },
        { q: 'Por que o som do carro ainda mostra "Track 01"?', a: 'Muitos aparelhos de som automotivo ignoram as tags e recorrem ao nome do arquivo, e a maioria mantém em cache a informação antiga até você reconectar o pendrive ou reescanear. Salve aqui (o arquivo é gravado como ID3v2.3, a versão que os aparelhos de som leem com mais confiabilidade), renomeie para algo como "01 - Nome da Música.mp3" e reescanee.' },
        { q: 'Minhas tags em chinês, japonês, coreano ou árabe aparecem bagunçadas. Dá para consertar?', a: 'Dá — normalmente isso significa que a tag antiga foi salva numa codificação de um byte em vez de Unicode. Digite o texto certo de novo aqui e salve: o arquivo é reescrito como ID3v2.3 com texto UTF-16, que players modernos exibem corretamente, incluindo títulos em chinês, japonês, coreano, árabe, cirílico e hindi.' },
        { q: 'Funciona no celular?', a: 'Sim — Chrome, Safari, Firefox e Edge recentes, no computador ou no celular. Ao salvar, o arquivo vai para o navegador como qualquer download; no iPhone, o Safari salva no app Arquivos. Tudo roda localmente, então funciona até com conexão lenta depois que a página abre.' },
      {
        q: 'Posso editar tags de MP3 locais pelo Claude ou pelo Cursor?',
        a: 'Esta página edita ID3 no navegador, inclusive a capa, e não recodifica. /mcp grava title, artist, album, date, genre, track e comment com ffmpeg, copia o áudio sem mudança e grava ID3v2.3. Não edita a capa. O app de chat ainda vê o caminho.',
      }],
      screenshotsAlt: [
        'Editor de tags MP3: a página antes de qualquer arquivo ou entrada',
        'Editor de tags MP3: depois de ler o arquivo ou os toques',
      ],
      sections: [
        {
          heading: 'O rótulo muda, o áudio não',
          paragraphs: [
            'O editor de tags grava ID3v2.3 e copia os quadros de áudio. Ele não os decodifica.',
            'Os campos são título, artista, álbum, artista do álbum, ano, gênero, número da faixa, número do disco, compositor, comentário, e uma capa JPG ou PNG.',
          ],
        },
        {
          heading: 'O que você pode definir e o que não',
          paragraphs: [
            'Vários MP3, ou um. Só campos comuns. Artista, álbum, ano, gênero e capa valem para todos os arquivos. Título e número da faixa ficam em cada arquivo:',
          ],
          bullets: [
            'Título, artista, álbum e os outros campos do dia a dia, mais a capa.',
            'Não FLAC, M4A ou WAV. Esses formatos de tag não são gravados aqui.',
            'Não capítulos de podcast nem quadros personalizados incomuns. Salvar reescreve o bloco de tags, e esses quadros não passam.',
          ],
        },
        {
          heading: 'Por que o carro ainda mostra Faixa 01',
          paragraphs: [
            'Muitos aparelhos ignoram as tags e voltam para o nome do arquivo, e a maioria guarda a informação antiga em cache até você reimportar o pendrive ou reescanear. Renomeie o arquivo para algo como 01 - Nome da Música.mp3, e reescaneie.',
            'Cortar, fazer fade ou mudar a velocidade é o editor de MP3, que decodifica e recodifica. Esta página nunca toca o som. Use aquele para editar a música. Use esta para rotulá-la.',
          ],
        },
      ],
      dropHint: 'Solte arquivos MP3 aqui ou clique para escolher',
      exportLabel: 'Salvar MP3',
    },
    compressor: {
      cardLine: 'Abaixa os picos altos e levanta as palavras baixas, sem deixar o arquivo inteiro mais alto.',
      name: 'Compressor de nível',
      shortName: 'Compressor',
      title: 'Compressor de nível — Iguale o volume online',
      description:
        'Iguala as partes altas e baixas de uma gravação no navegador. O pico fica. Não encolhe o arquivo. Grátis, sem envio.',
      h1: 'Compressor de nível — Igualar o que está alto e o que está baixo',
      heroAlt: 'Segurar os picos de uma voz para as palavras baixas aparecerem',
      subtitle: 'Um compressor de banda larga que segura os saltos de nível. O pico do arquivo continua onde estava.',
      intro:
        'Um recado de voz que grita uma frase e sussurra a seguinte precisa de compressão, não de um botão de volume. Esta página aplica um compressor de banda larga: o que está alto desce, o que está baixo sobe, e a exportação é escalada para o pico bater com o do arquivo original. Tudo acontece no navegador. O arquivo não é enviado.',
      usesHeading: 'Usos comuns da compressão de nível',
      uses: [
        'Memos de voz: emparelhe alguém que se aproxima e se afasta do celular ao falar.',
        'Equilíbrio de entrevistas: um convidado muito mais alto que o anfitrião — esmague os picos.',
        'Voz na frente: quando o refrão salta fora da estrofe, o vocal segue sentado estável na frente.',
        'Gravações de reunião: achate uma gravação em que a fala oscila entre fraca e forte.',
        'Gravações de aula: o palestrante passeia e o nível anda; comprima até assentar.',
        'Domar a dinâmica antes de publicar: estreite a faixa antes de alinhar sonoridade e o pouso fica mais firme.',
      ],
      why: [
        {
          icon: 'volume',
          title: 'Cuida da dinâmica, não do tamanho',
          text: 'Compressão de banda larga: limiar de -18 a -36 dB, razões até 8:1. Partes altas descem e as baixas sobem em relação; na exportação o pico volta ao pico da origem.',
        },
        {
          icon: 'file',
          title: 'Não é compressão de arquivo',
          text: 'Esta página muda os vaivéns do volume, não o peso do arquivo. Para um MP3 menor, [comprimir áudio](/compress-audio); para alinhar LUFS, o [medidor de sonoridade](/loudness-meter).',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação fica no seu aparelho.' },
        { name: 'Ajuste a quantidade', text: 'Arraste Comprimir. 30–50% basta para a maioria das falas. 100% esmaga: limiar −36 dB, razão 8:1.' },
        { name: 'Ouça e exporte', text: 'Reproduza o resultado e exporte MP3 ou WAV. O pico volta ao original, logo abaixo da escala cheia.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O compressor é um processador de dinâmica da Web Audio dentro da aba. Depois que a página carrega, você pode ficar offline e ainda exportar.' },
        { q: 'O que acontece com o áudio?', a: 'Um compressor de banda larga (limiar de −18 dB a −36 dB, razão de pouco mais de 1:1 até 8:1). O compressor não tem ganho de compensação, então a página escala a exportação até o pico de origem, ou cerca de −0.2 dBFS se a origem já estava mais quente. WAV guarda essa mudança de nível. O MP3 é recodificado uma vez.' },
        { q: 'Isso encolhe o arquivo?', a: 'Não. Encolher o arquivo é recodificar num bitrate menor: essa é a página de compressor de áudio. Esta página muda a dinâmica e deixa o bitrate para o formato de exportação.' },
        { q: 'Qual a diferença para aumentar o volume e normalizar?', a: 'Aumentar o volume multiplica o arquivo inteiro. Normalizar sobe tudo até a amostra mais alta chegar a um alvo. As duas deixam igual a distância entre alto e baixo. Esta página encurta essa distância. É uma banda só, não uma cadeia multibanda, e não tira o ruído.' },
        { q: 'Dá para sumir com o ruído da sala?', a: 'Não. Subir as partes baixas também sobe o chiado e o ruído da sala. Se o problema é o ruído, a compressão deixa ele mais óbvio. Corte o silêncio ou grave de novo.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle e a exportação funcionam no toque no Chrome, Edge, Firefox e Safari atuais. Alguns minutos de fala exportam em um ou dois segundos num celular recente.' },
      ],
      screenshotsAlt: [
        'Compressor de nível: área de soltar, nada é enviado a um servidor',
        'Compressor de nível: área de trabalho com o arquivo carregado',
        'Compressor de nível: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Dinâmica, não tamanho de arquivo',
          paragraphs: [
            'O compressor de nível é um compressor de banda larga. O limiar vai de −18 dB até −36 dB, e a razão de pouco acima de 1:1 até 8:1. Momentos altos descem, momentos baixos sobem em relação a eles.',
            'Não há ganho de compensação dentro do compressor. Depois, a exportação é escalada para o pico bater com o pico da fonte, ou −0,2 dBFS se a fonte já era mais quente que isso. Ele não encolhe o arquivo. Um MP3 menor é a página de comprimir áudio.',
          ],
        },
        {
          heading: 'O que ele corrige e o que não',
          paragraphs: [
            'Ele estreita a distância entre alto e baixo. É uma banda, não uma cadeia vocal:',
          ],
          bullets: [
            'Um recado de voz que grita uma frase e sussurra a seguinte.',
            'Uma mixagem em que os impactos altos enterram as frases baixas, e você quer aproximá-las.',
            'Não remove ruído. Levantar as partes baixas também levanta chiado e ambiente.',
          ],
        },
        {
          heading: 'Como ele difere de um controle de volume',
          paragraphs: [
            'O amplificador de volume multiplica o arquivo inteiro. Normalizar sobe tudo até a amostra mais alta atingir um pico. Os dois deixam a distância entre alto e baixo igual. Esta página estreita essa distância.',
            'WAV mantém a mudança de nível sem outra geração com perdas. MP3 recodifica uma vez. Se o problema é só o arquivo baixo e a dinâmica está boa, use o amplificador de volume.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Comprimir e baixar',
    },
    echo: {
      cardLine: 'Adiciona repetições que dá para contar: um tapa curto, não um banho de reverb.',
      name: 'Adicionar eco ao áudio',
      shortName: 'Adicionar eco ao áudio',
      title: 'Adicionar eco ao áudio — efeito de eco online',
      description: 'Adiciona um eco medido a qualquer áudio no navegador. Você define o atraso e as repetições. Grátis, sem envio.',
      h1: 'Adicionar eco ao áudio',
      heroAlt: 'Adicionar um atraso e repetições a uma gravação',
      subtitle: 'Repetições separadas, no atraso que você escolher: de um tapa curto a 0,8 s.',
      intro: 'Eco é uma cópia que volta depois de um intervalo que dá para contar. O atraso vai de alguns centésimos até 0,8 segundos, e as repetições decidem quanto de cada cópia volta a entrar. A mistura molhada fica em 45%. Com atraso zero o arquivo não muda. O processo fica no navegador.',
      usesHeading: 'Usos comuns do eco de áudio',
      uses: [
        'Pontuação de podcast: um slap curto para sublinhar uma frase — daqueles que dão para contar.',
        'Material de jogo: dê a um bipe de interface um atraso espacial, com algumas repetições morrendo.',
        'Enfeite vocal: algumas repetições desvanecendo no final de uma voz.',
        'Terror ao longe: um eco muito espaçado, e o clima vira na hora.',
        'Enfeites de instrumento: eco num único golpe de violão ou bateria, abrindo o espaço.',
        'Design de transição: um eco distante entre duas seções para levar o corte.',
      ],
      why: [
        {
          icon: 'repeat',
          title: 'Um atraso que dá para contar',
          text: 'Ajuste livre de 0,01 a 0,8 segundos: curto soa a slap, longo a um grito numa sala vazia. O nível de repetição decide quanto de cada cópia sobrevive.',
        },
        {
          icon: 'sliders',
          title: 'Wet fixado em 45%',
          text: 'O sinal seco fica intacto e o eco entra a 45% — nada no original se move, só a cópia que volta.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação fica no seu aparelho.' },
        { name: 'Ajuste atraso e repetições', text: 'O atraso é o intervalo antes da primeira cópia, até 0,8 s. As repetições são o retorno, com teto de 55% para não disparar.' },
        { name: 'Ouça e exporte', text: 'Reproduza e exporte MP3 ou WAV. O arquivo cresce com a cauda das repetições, até 4 segundos.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O eco é um atraso da Web Audio dentro da aba. Depois que a página carrega, você pode ficar offline e ainda exportar.' },
        { q: 'O que o efeito faz?', a: 'Uma cópia é atrasada pelo tempo que você marca e misturada a 45%. Cada cópia volta ao atraso no nível de repetição, até 0,55, então vai ficando mais baixa em vez de uivar. WAV guarda essa mistura. O MP3 é recodificado uma vez.' },
        { q: 'Qual a diferença para slowed + reverb?', a: 'Slowed + reverb é um banho: o tom cai com a velocidade e a cauda é um borrão de reflexões. Esta página mantém o tempo original e acrescenta cópias separadas. Não muda velocidade nem tom.' },
        { q: 'Por que as repetições não ficam mais altas?', a: 'O retorno tem teto de 55% e a cauda renderizada, de 4 segundos. Dá para ouvir várias cópias. Não vira um ruído que se alimenta sozinho.' },
        { q: 'Dá para ecoar só um pedaço?', a: 'Sim. Selecione o trecho na forma de onda e mantenha essa seleção. As repetições entram no que você exporta, não no resto do arquivo.' },
        { q: 'Funciona no celular?', a: 'Sim. Os dois controles e o botão de exportar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Adicionar eco ao áudio: área de soltar, nada é enviado a um servidor',
        'Adicionar eco ao áudio: área de trabalho com o arquivo carregado',
        'Adicionar eco ao áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Cópias separadas, não uma lavagem',
          paragraphs: [
            'O eco atrasa uma cópia do sinal pelo tempo que você define, de alguns centésimos de segundo até 0,8 segundos, e mistura essa cópia de volta a 45 por cento. Cada cópia volta ao atraso na intensidade de repetição que você define.',
            'O feedback é limitado a 0,55 e a cauda renderizada a 4 segundos, para as repetições ficarem mais baixas em vez de uivar. Atraso em zero deixa o arquivo intacto. Velocidade e tom ficam como estavam.',
          ],
        },
        {
          heading: 'Como usar os dois controles',
          paragraphs: [
            'Atraso é o intervalo antes da primeira cópia. Repetições é quanto de cada cópia volta:',
          ],
          bullets: [
            'Um atraso curto para um slap que você ainda ouve como um segundo golpe.',
            'Um atraso maior, ainda abaixo de 0,8 segundos, quando você quer contar as cópias uma a uma.',
            'Só uma seleção, se o eco deve ficar em uma frase e não no resto do arquivo.',
          ],
        },
        {
          heading: 'Eco não é slowed + reverb',
          paragraphs: [
            'Slowed + reverb desce o tom com a velocidade e espalha a cauda em um ambiente. Esta página mantém o tempo original e adiciona cópias que você ouve separadas.',
            'Fazer fade no começo ou no fim de um arquivo é a página de fade. Sobrepor duas músicas é o juntador de áudio. Nenhum dos dois é eco.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Adicionar eco',
    },
    'add-reverb': {
      cardLine: 'Dê a uma gravação seca o som de uma sala, de um toque a um banho.',
      name: 'Adicionar reverb',
      shortName: 'Reverb',
      title: 'Adicionar reverb ao áudio — som de sala online, grátis',
      description: 'Adicione reverb de sala a uma voz ou a um instrumento no navegador. Um controle de wet, prévia antes de exportar. Grátis, sem envio, MP3 ou WAV.',
      h1: 'Adicionar reverb ao áudio — dê som de sala a uma gravação',
      heroAlt: 'Uma gravação seca ganhando as reflexões de uma sala',
      howToIntro: 'O controle de intensidade num arquivo real',
      subtitle: 'Um controle de wet, do totalmente seco a uma pequena sala. Você ouve o resultado antes de exportar.',
      intro: 'Reverb é o som que a sala deixa depois que a fonte para: reflexões que se acumulam e decaem. Esta página roda uma sala sintetizada sobre o arquivo que você solta, com um controle de wet do seco ao encharcado. Você ouve o reverb na forma de onda antes de exportar, e o processamento fica no seu navegador.',
      usesHeading: 'Usos comuns de adicionar reverb',
      uses: [
        'Voz no lugar dela: um memo de voz ou uma dublagem fica dentro de um espaço, sem soar colado.',
        'Sons de jogo: dê profundidade a um bipe antes de entrar na edição.',
        'Voz seca numa sala: uma voz seca ou a capella ganha a sensação de ter sido gravada numa sala.',
        'Transições de podcast: uma frase com reverb marca a quebra de seção.',
        'Atmosfera de instrumento: um violão seco ganha um toque de sala e para de soar oco.',
        'Manto de ambiente: muito wet e sala longa fazem um espaço vazio ou inquietante.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Um só controle de wet',
          text: '0-100% decide quanto de sala: pouco wet é um quarto, muito é um auditório. Ouça antes de exportar.',
        },
        {
          icon: 'lock-simple',
          title: 'Renderizado localmente',
          text: 'O reverb é calculado no seu navegador e o áudio nunca é enviado; exporte MP3 ou WAV.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação é no seu aparelho. O controle de wet começa em zero, que é o arquivo seco.' },
        { name: 'Ajuste o wet', text: 'O controle mistura a sala no sinal seco, de 0 a 100%. Por volta de 25% a voz para de parecer colada no microfone. O botão de reprodução toca o resultado misturado.' },
        { name: 'Exportar', text: 'A exportação acrescenta o decaimento depois da última amostra, cerca de 2,2 segundos de cauda. O MP3 sai no bitrate que você escolher, e o WAV mantém as amostras processadas exatamente.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O arquivo é decodificado e o reverb é renderizado no seu navegador com a Web Audio API. Depois que a página carrega, decodificar e exportar WAV não precisam de rede.' },
        { q: 'O que acontece com o arquivo?', a: 'O controle de wet faz um crossfade do seu arquivo seco para uma sala sintetizada: cerca de 2,2 segundos de reflexões estéreo com decaimento exponencial. A exportação recodifica o MP3 uma vez no bitrate escolhido, ou escreve o WAV sem perdas a partir das amostras processadas. A cauda de reverb alonga o arquivo: a 100% de wet ele fica cerca de 2,2 segundos mais longo que a fonte.' },
        { q: 'Isto é um salão ou uma catedral de verdade?', a: 'Não, e dizer isso é a parte honesta. É uma sala sintetizada com decaimento de 2,2 segundos, não uma convolução com um espaço medido. Para espaços com nome e respostas ao impulso varridas, você quer um DAW de desktop ou um plugin de convolução. O que esta página faz, ela faz em um ou dois segundos, no seu navegador.' },
        { q: 'Qual a diferença para a página de eco?', a: 'O [eco](/echo) repete o sinal em cópias separadas no tempo, que você ouve uma a uma. O reverb é uma multidão densa de reflexões que se derrete num decaimento. Os dois acrescentam espaço; o [slowed + reverb](/slowed-reverb) é a terceira parada quando você quer a desaceleração junto.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle, o botão de reprodução e a exportação têm tamanho de toque, e a prévia aparece antes de você se comprometer com uma exportação.' },
        { q: 'Quanto de wet para uma voz?', a: 'Comece entre 20% e 30%. Seco o bastante para cada palavra ficar clara, molhado o bastante para a borda de microfone muito próximo amolecer. Pads musicais e efeitos aguentam 40% a 60% antes de ficarem distantes.' },
        { q: 'Dá para remover o reverb em vez de adicionar?', a: 'Nesta página não, e no navegador ninguém faz isso com honestidade. Uma vez que as reflexões estão gravadas no arquivo, separá-las da fonte é pesquisa de dereverberação, não um controle andado para trás. Previna na hora de gravar: um quarto forrado de cobertor, um armário, o microfone perto da boca.' },
      ],
      screenshotsAlt: [
        'Adicionar reverb: área de soltar, nada é enviado a um servidor',
        'Adicionar reverb: área de trabalho com o arquivo carregado',
        'Adicionar reverb: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Reverb de sala, não um salão amostrado',
          paragraphs: [
            'A resposta de impulso atrás desta página é sintetizada: ruído estéreo em decaimento com cauda de 2,2 segundos, a mesma forma que uma sala pequena marca em um som. É por isso que a página é instantânea e funciona offline. Também é por isso que a sala não tem nome; não há uma Abadia de Westminster dentro deste arquivo.',
            'O controle wet é um crossfade simples entre o seu arquivo seco e essa sala. Em 0 por cento a exportação é o arquivo original, amostra por amostra. O decaimento depois da sua última amostra continua soando depois do fim do áudio, e é por isso que a exportação fica cerca de 2,2 segundos mais longa que a fonte.',
          ],
          table: {
            headers: [
              'Wet',
              'O que você ouve',
              'Bom para',
            ],
            rows: [
              [
                '10 %',
                'Uma sala apertada, quase invisível.',
                'Voz de podcast gravada perto demais do microfone.',
              ],
              [
                '25 %',
                'A voz fica em uma sala pequena e para de soar colada.',
                'Vozes, recados de voz, foley.',
              ],
              [
                '60 %',
                'Lavado e distante; a fonte recua atrás do espaço.',
                'Pads, fantasmas, transições.',
              ],
              [
                '100 %',
                'Só sala, sem fonte. Uma lavagem com a melodia dentro.',
                'Design de som, camadas de textura.',
              ],
            ],
          },
        },
        {
          heading: 'Reverb ou eco',
          paragraphs: [
            'Os dois efeitos adicionam espaço, e falham de jeitos diferentes. O eco dá repetições distintas em um atraso que você escolhe; ele soa como um efeito em cima do som. A reverb dá milhares de reflexões tão juntas que soam como a sala em que o som aconteceu.',
            'Se você consegue contar as repetições, você quer a [página de eco](/echo). Se você quer que o ouvinte pare de notar que a gravação era seca, você quer esta página. E quando o trabalho é um som slowed do TikTok com espaço atrás, a página [slowed + reverb](/slowed-reverb) faz as duas coisas de uma vez.',
          ],
        },
        {
          heading: 'Reverb primeiro, loudness por último',
          paragraphs: [
            'A reverb muda o nível médio de um arquivo, então defina antes de qualquer trabalho de loudness. Adicione a sala aqui, depois confira o resultado contra um alvo com o [medidor de loudness](/loudness-meter), e só então publique.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Adicionar reverb',
    },
    'audio-distorter': {
      cardLine: 'Empurre um take limpo até um clipping quente ou um clipping duro.',
      name: 'Distorcer áudio',
      shortName: 'Distorção',
      title: 'Distorcer áudio — do clipping suave ao clipping duro',
      description: 'Adicione overdrive a qualquer áudio no navegador. Um controle, do clipping quente ao duro. Nada é enviado.',
      h1: 'Distorcer áudio — overdrive num take limpo',
      heroAlt: 'Achatar os picos de uma gravação limpa',
      subtitle: 'Um controle. O valor inicial é 40%. Em 0% o arquivo fica como você soltou.',
      intro: 'Esta página passa cada amostra por uma curva tanh. No início, 40%, uma amostra de 0,25 vira cerca de 0,69. Em 100% a mesma amostra vai para cerca de 1. Intensidade 0 pula a curva, então o arquivo fica como foi decodificado. O processamento fica no navegador.',
      usesHeading: 'Usos comuns da distorção de áudio',
      uses: [
        'Overdrive de violão: um pouco de gritos numa guitarra limpa para ela se adiantar.',
        'Voz áspera: uma linha para trailer, golpe de jogo ou abertura de podcast.',
        'Remodelar bateria: recorte um loop de bateria até bater mais forte e pesado.',
        'Texturas de terror: intensidade extrema torcendo uma voz ou um leito ambiente.',
        'Aspereza no synth: dê mais aspereza a uma linha de sintetizador limpa demais.',
        'Telefone retrô: empare com um passa-alta para som de telefone velho ou interfone.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Um controle de leve a pesado',
          text: 'A intensidade corre contínua do clipping suave ao clipping duro — cada ponto no meio é um timbre novo.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'A distorção é calculada no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação é no seu aparelho.' },
        { name: 'Ajuste a intensidade', text: '0% é limpo. 40% é o início. 100% é o clipping mais duro que esta página faz.' },
        { name: 'Ouça e exporte', text: 'Reproduza e exporte MP3 ou WAV. A duração não muda.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O clipping é um waveshaper da Web Audio dentro da aba. Depois que a página carrega, você pode ficar offline e ainda exportar. WAV sai na hora. MP3 sai depois que o encoder carregou uma vez.' },
        { q: 'O que o controle faz?', a: 'Intensidade 0 não insere o waveshaper, então as amostras ficam como foram decodificadas. Acima de 0, cada amostra x vira tanh(k·x) / tanh(k), com k = 10^(intensidade × 1,6) − 1. No início de 40%, k é cerca de 3,4 e uma amostra de 0,25 vira cerca de 0,69. Em 100%, k é cerca de 39 e essa amostra vai para cerca de 1. Uma amostra em escala cheia continua em escala cheia. O nó faz oversample de 2×. WAV guarda essa curva. O MP3 é recodificado uma vez, no bitrate que você escolhe. A duração não muda.' },
        { q: 'O que isto não faz?', a: 'Não é um bitcrusher e não acrescenta wow, flutter nem o limite de banda de um rádio. Um lo-fi abafado é esta página e depois o filtro passa-baixa. Um amp com gabinete é trabalho de DAW.' },
        { q: 'Qual a diferença para o aumento de volume?', a: 'O aumento de volume multiplica o arquivo inteiro e um limitador segura os picos para eles não virarem onda quadrada. Esta página achata os picos de propósito. O eco acrescenta uma cópia depois de um atraso. Nenhum dos dois achata a forma de onda.' },
        { q: 'Dá para distorcer só um pedaço?', a: 'Sim. Selecione o trecho na forma de onda e mantenha essa seleção. A curva entra no que você exporta, não no resto do arquivo.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle e o botão de exportar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Distorcer áudio: área de soltar, nada é enviado a um servidor',
        'Distorcer áudio: área de trabalho com o arquivo carregado',
        'Distorcer áudio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Uma curva, não um controle de volume',
          paragraphs: [
            'O drive vai de 0% a 100%. O valor inicial é 40%. Em 0% o waveshaper não entra no grafo, então a exportação é igual ao arquivo decodificado.',
            'Acima de 0, cada amostra x vira tanh(k·x) / tanh(k). k é 10^(drive × 1,6) − 1. Em 40%, k é cerca de 3,4 e uma amostra de 0,25 vira cerca de 0,69. Em 100%, k é cerca de 39 e essa amostra vai para cerca de 1. Uma amostra na escala cheia continua na escala cheia. Velocidade, tom e duração ficam como estavam.',
          ],
        },
        {
          heading: 'Quanto forçar',
          paragraphs: [
            'A faixa útil é pequena. Passar dela já é fazer um efeito:',
          ],
          bullets: [
            '10–30%: um clip quente em uma voz ou guitarra limpa.',
            '40–70%: a aspereza fica evidente. Picos achatam e notas baixas sobem.',
            '80–100%: perto de uma onda quadrada. A fala fica difícil de acompanhar.',
          ],
        },
        {
          heading: 'Não é um reforço de volume nem um bitcrusher',
          paragraphs: [
            'O amplificador de volume deixa um arquivo baixo mais alto e usa um limitador para os picos não quadrarem. Esta página os quadra de propósito. O eco adiciona uma cópia depois de um atraso que você define. É outra página.',
            'Esta curva não reduz a profundidade de bits nem corta os agudos. O nó faz oversampling de 2×, o que só reduz o aliasing dos novos harmônicos. Um tom lo-fi opaco é esta página, depois o filtro passa-baixa.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Distorcer e baixar',
    },
    'voice-changer': {
      cardLine: 'Troque a voz de uma gravação com cinco presets: agudo, grave, robô, rádio, fantasma.',
      name: 'Mudar a voz',
      shortName: 'Mudar a voz',
      title: 'Mudar a voz online — grave, agudo, robô e rádio',
      description: 'Mude uma gravação com cinco presets de voz: agudo, grave, robô, rádio, fantasma. Tom, filtros e crush rodam no navegador. Grátis, MP3 ou WAV.',
      h1: 'Mudar a voz — cinco presets para qualquer gravação',
      heroAlt: 'Uma gravação passando por cinco presets de voz',
      howToIntro: 'As cinco predefinições numa gravação real',
      subtitle: 'Toque em Agudo, Grave, Robô, Rádio ou Fantasma e ouça antes de exportar.',
      intro: 'Esta página aplica cinco presets fixos de voz a uma gravação. Agudo sobe o tom quatro semitons, Grave abaixa quatro, Robô achata com um bitcrusher, Rádio aperta o som por um passa-banda como um intercomunicador, e Fantasma espalha com reverb. Toque em um preset e a prévia toca o seu arquivo por ele. Tudo roda no navegador, então a gravação nunca sai do seu aparelho.',
      usesHeading: 'O que as pessoas fazem com ele',
      uses: ['Dê a um personagem outra voz em um trecho de audiolivro ou em um mod de jogo.', 'Disfarce a voz de origem em uma demo ou gravação de tela antes de compartilhar.', 'Ouça uma leitura mais grave ou mais brilhante de uma abertura de podcast sem regravar.'],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC com voz nele. A decodificação é no seu aparelho. Nenhum preset fica ativo até você tocar em um.' },
        { name: 'Toque em um preset', text: 'Agudo, Grave, Robô, Rádio ou Fantasma. A prévia toca pelo preset na hora, e tocar em outro substitui em vez de empilhar. Toque de novo no ativo para voltar ao som seco.' },
        { name: 'Exportar', text: 'A exportação grava o preset no arquivo. O MP3 sai no bitrate que você escolher, e o WAV mantém as amostras processadas exatamente. A duração nunca muda.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. Decodificação, mudança de tom, filtros e o bitcrusher rodam no seu navegador com a Web Audio API. Depois que a página carrega, a prévia e a exportação em WAV funcionam sem rede.' },
        { q: 'O que cada preset realmente faz?', a: 'Agudo sobe o tom quatro semitons. Grave abaixa quatro. Robô quantiza em passos de 5 bits dentro de uma faixa de 150 Hz a 4 kHz. Rádio é um passa-banda de 500 Hz a 3 kHz com um drive leve, como soa um alto-falante pequeno. Fantasma desce o tom dois semitons e acrescenta 55% de reverb de sala. Nenhum muda a duração do arquivo.' },
        { q: 'Isto é um clone de voz com IA?', a: 'Não. Estes presets remodelam a voz que você gravou; eles não geram a voz de outra pessoa. Um clone precisa de um modelo treinado e, normalmente, de uma autorização que você não tem. O que esta página faz é instantâneo, offline, e mantém a voz original reconhecível por baixo.' },
        { q: 'Qual a diferença para o alterador de tom?', a: 'O [alterador de tom](/pitch-changer) dá um controle livre de −12 a +12 semitons para trabalho musical. Esta página junta tom com filtros, drive e crush em cinco ajustes de um toque, para voz. Os presets se substituem em vez de empilhar; para controle total, use o [alterador de tom](/pitch-changer) e o [distorcedor](/audio-distorter) à mão.' },
        { q: 'Funciona no celular?', a: 'Sim. Os botões de preset e a exportação têm tamanho de toque, e a prévia toca antes de você exportar, então você nunca paga por um preset que não ouviu.' },
        { q: 'Funciona com música?', a: 'Processa, mas os presets são afinados para voz. Agudo e Grave agem como qualquer alterador de tom numa música, Robô come o detalhe, e Rádio deixa tudo como uma transmissão dos anos 1940 — o que às vezes é exatamente a ideia.' },
        { q: 'Dá para ajustar um preset com precisão?', a: 'Aqui não. Um toque, um ajuste, sem controles, de propósito. Quando um preset chega perto mas não é isso, vá pelo caminho manual: o [alterador de tom](/pitch-changer) para o tom, o [distorcedor](/audio-distorter) para a textura, os filtros [passa-alta](/high-pass-filter) e [passa-baixa](/low-pass-filter) para a faixa.' },
      ],
      screenshotsAlt: [
        'Mudar a voz: área de soltar, nada é enviado a um servidor',
        'Mudar a voz: área de trabalho com o arquivo carregado',
        'Mudar a voz: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O que cada predefinição faz',
          paragraphs: [
            'Cada predefinição é uma pilha pequena das mesmas peças que este site usa em todo lugar: um deslocador de tom por vocoder de fase que mantém a duração, filtros biquad, um drive tanh, um bitcrusher, e a mesma sala sintetizada que a página de reverb usa. A tabela é a receita inteira; não há mais nada na caixa.',
          ],
          table: {
            headers: [
              'Predefinição',
              'O que muda',
              'O ajuste',
            ],
            rows: [
              [
                'Aguda',
                'Tom mais alto, duração inalterada.',
                '+4 semitons',
              ],
              [
                'Grave',
                'Tom mais baixo, duração inalterada.',
                '−4 semitons',
              ],
              [
                'Robô',
                'Passos quantizados dentro de uma banda estreita.',
                'Crush de 5 bits, 150 Hz–4 kHz, drive leve',
              ],
              [
                'Rádio',
                'Passa-banda fino com a borda empurrada.',
                '500 Hz–3 kHz, 35% de drive',
              ],
              [
                'Fantasma',
                'Tom mais escuro com a sala atrás.',
                '−2 semitons, 55% de reverb',
              ],
            ],
          },
        },
        {
          heading: 'Uma predefinição, não um clone',
          paragraphs: [
            'Mudar a voz tem dois significados muito diferentes em 2026. Um é remodelar uma gravação, que é o que esta página faz em um segundo, offline, de graça. O outro é gerar a voz de uma pessoa conhecida, que é um modelo, uma questão de licença e, feito a alguém sem consentimento, abuso.',
            'Estas predefinições mantêm o falante original reconhecível por baixo. Isso é um limite e uma propriedade de segurança ao mesmo tempo: ninguém é imitado por um controle de tom.',
          ],
        },
        {
          heading: 'Grave primeiro, mude depois',
          paragraphs: [
            'As predefinições amplificam o que a gravação já é. Uma gravação limpa e próxima muda de forma limpa; uma sala barulhenta sai barulhenta em uma forma nova. Grave no [gravador de voz](/voice-recorder), limpe o chiado com o [removedor de ruído](/noise-remover), depois mude a voz aqui.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Mudar a voz',
    },
    'silence-remover': {
      cardLine: "Corta os silêncios longos e deixa as respirações curtas onde estão.",
      name: "Remover silêncio",
      shortName: "Silêncio",
      title: "Remover silêncio do áudio — Cortar pausas online grátis",
      description: "Remove silêncios longos de qualquer áudio no navegador. Você define o quanto baixo e o quanto longo. Grátis, sem envio.",
      h1: 'Remover silêncio online grátis — Tirar o silêncio do áudio',
      heroAlt: 'Cortar as pausas longas de uma gravação de voz',
      subtitle: "Tira o ar morto. Pausas mais curtas que o intervalo que você marca ficam.",
      intro: "Ele acha trechos mais baixos que o limiar e mais longos que a pausa mínima, e corta. O limiar padrão é −40 dBFS, adequado para fala e recados de voz. Cada corte deixa 0,08 segundo nas duas pontas para não comer o começo ou o fim de uma palavra. Uma pausa mais curta que o intervalo fica. Música baixa e caudas que somem também ficam abaixo de −40 dBFS e são cortadas. Para escolher à mão, use o aparador de áudio. Se o arquivo inteiro está abaixo do limiar, a exportação é o arquivo original. O processo fica no seu navegador.",
      usesHeading: 'Onde o ar morto realmente está',
      uses: [
        'Podcast: aperte as pausas longas entre frases e exporte uma versão que não precisa de tesoura manual.',
        'Memos de voz: corte a demora antes de falar, e o memo fica só com o que foi dito.',
        'Gravações de aula: tire todos os silêncios longos de uma vez por nível, sem marcar a onda à mão.',
        'Organizar entrevistas: apague o branco entre pergunta e resposta e escreva sobre áudio limpo.',
        'Narração de vídeo: quando a pausa não casa com a imagem, junte o branco antes de acertar a linha do tempo.',
        'Limpeza antes de publicar: esmague o ar morto do fim e deixe as respirações onde estão.',
      ],
      why: [
        {
          icon: 'waveform',
          title: 'Corta por nível, não toca nas respirações',
          text: 'Só corta o mais silencioso que o limiar e mais longo que a pausa mínima. Padrão −40 dBFS e 0,35 segundo: vai embora o ar morto arrastado; cada corte guarda 0,08 segundo de proteção nas duas bordas, numa emenda que não se ouve.',
        },
        {
          icon: 'layers',
          title: 'Um lote inteiro de uma vez',
          text: 'Arraste a leva inteira de gravações; elas compartilham limiar e pausa, medindo e cortando uma a uma. Um arquivo baixa sozinho; dois ou mais voltam num ZIP.',
        },
      ],
      howTo: [
        { name: "Solte o áudio", text: "Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação acontece no seu aparelho. Vários arquivos compartilham o limiar e o intervalo que você escolhe em seguida. Cada um é cortado por si. Um baixa sozinho. Dois ou mais voltam num ZIP." },
        { name: "Marque o limiar e o intervalo", text: "O limiar é o quanto baixo precisa estar, de −60 a −20 dBFS. A pausa mínima é quanto tempo precisa durar para sair, de 0,1 a 2 segundos. A linha de estado mostra cerca de quantos segundos vão embora." },
        { name: "Exporte", text: "Você pode ouvir o original e depois exportar MP3 ou WAV. O arquivo junta as partes com som e deixa 0,08 segundo em cada corte." },
      ],
      faqs: [
        { q: 'Posso tirar o silêncio de mais de um arquivo?', a: 'Sim. Vários arquivos compartilham o limiar e o intervalo mínimo desta página. Cada um é medido e cortado por si, um depois do outro neste aparelho. Um baixa sozinho. Dois ou mais voltam num ZIP. Um celular fica sem memória antes, então um arquivo muito longo vai um de cada vez nele.' },
        { q: "Meu áudio é enviado?", a: "Não. O nível é medido no navegador e os trechos baixos são cortados na memória. Depois que a página carrega, você pode ficar offline e a exportação continua funcionando." },
        { q: "O que ele remove de fato?", a: "Um trecho sai só quando está abaixo do limiar e dura mais que a pausa mínima. O padrão é −40 dBFS e 0,35 segundo. Cada trecho deixa 0,08 segundo nas duas pontas. Intervalos mais curtos, inclusive a maioria das respirações, ficam." },
        { q: "Ele corta música baixa?", a: "Sim, se ela ficar abaixo do limiar por mais tempo que o intervalo. −40 dBFS é para fala. Uma base baixa, um fade ou o ruído de sala de um mix entram como silêncio. Suba o limiar em direção a −20 se você só quer os zeros quase digitais, ou use o aparador e selecione à mão." },
        { q: "E se o arquivo inteiro estiver baixo?", a: "Nada é cortado. A linha de estado avisa, e a exportação é o arquivo original." },
        { q: "Qual a diferença para o aparador?", a: "O aparador de áudio e o cortador de MP3 guardam a região que você desenha na forma de onda. Esta página acha os silêncios longos pelo nível e remove todos numa exportação. Não muda a velocidade, o tom nem o volume do que resta." },
        { q: "Funciona no celular?", a: "Sim. Os dois controles e o botão de exportar respondem ao toque no Chrome, Edge, Firefox e Safari atuais." },
      ],
      screenshotsAlt: [
        'Remover silêncio: área de soltar, nada é enviado a um servidor',
        'Remover silêncio: área de trabalho com o arquivo carregado',
        'Remover silêncio: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Ela corta trechos longos de silêncio, não respirações',
          paragraphs: [
            'Um trecho só é removido quando é mais baixo que o limiar e mais longo que o intervalo mínimo. O padrão é −40 dBFS e 0,35 segundos. Cada corte mantém 0,08 segundos nas duas pontas para a emenda não estalar.',
            'Intervalos mais curtos, incluindo a maioria das respirações, ficam. O que resta não fica mais alto, mais lento ou mais agudo. Se o arquivo inteiro está abaixo do limiar, nada é cortado e a exportação é o arquivo original.',
          ],
        },
        {
          heading: 'Fala, não uma música baixa',
          paragraphs: [
            '−40 dBFS mira a fala. Música vai perder as partes que você queria manter se elas ficarem tão baixas:',
          ],
          bullets: [
            'Um recado de voz ou entrevista com pausas longas entre respostas.',
            'Suba o limiar para perto de −20 dBFS se você só quer tirar o silêncio quase digital.',
            'Um fade, uma base baixa ou o ambiente de uma mixagem: saia desta página e corte à mão.',
          ],
        },
        {
          heading: 'Cortador versus esta página',
          paragraphs: [
            'O cortador de áudio e o cortador de MP3 mantêm uma região que você desenha. Esta página encontra cada trecho longo de silêncio pelo nível e os remove em uma exportação.',
            'Use o cortador quando a parte baixa é algo que você ainda quer, ou quando precisa manter um trecho e descartar o resto de ouvido. Use esta página quando as pausas são o problema e são longas o bastante para medir.',
          ],
        },
      ],
      dropHint: 'Solte arquivos de áudio ou clique para procurar',
      exportLabel: 'Remover silêncio',
    },
    'noise-remover': {
      cardLine: 'Abaixe o ruído de fundo constante de uma gravação de voz, no navegador.',
      name: 'Remover ruído de fundo',
      shortName: 'Tirar ruído',
      title: 'Remover ruído de fundo — RNNoise local, grátis',
      description: 'RNNoise tira chiado, zumbido e ventilador das gravações: cerca de 20 dB a menos, no navegador. Acima de 300 MB é rejeitado. Exporte MP3 ou WAV grátis.',
      h1: 'Remover ruído de fundo — editor de áudio online grátis',
      heroAlt: 'O ruído de fundo constante sob uma gravação de voz diminui',
      howToIntro: 'Um arquivo com ruído, um controle de intensidade',
      subtitle: 'Chiado, zumbido e ruído de ventilador constantes caem 20 dB ou mais ao redor da voz. A linha do tempo não se move.',
      intro: 'Esta página passa o RNNoise pela gravação que você soltar, um gate de ruído treinado com voz. Ruído constante como chiado, zumbido ou ventilador cai 20 dB ou mais ao redor da voz, e as palavras mantêm o nível. O gate é um modelo de 150 KB que roda no seu navegador, então o áudio nunca sai do seu dispositivo.',
      usesHeading: 'Casos comuns de remoção de ruído de fundo',
      uses: [
        'Memos de voz: abaixa o zumbido de ventilador e ar-condicionado e deixa a voz limpa.',
        'Podcasts: limpa o ruído de fundo antes de publicar, sem editor de desktop.',
        'Aulas: reduz o chiado constante da sala e ajusta a sonoridade depois.',
        'Entrevistas: limpa a voz — tira o zumbido constante da rua e do ambiente.',
        'Voz off: se a locução pegou ar-condicionado, remove o ruído antes de sincronizar.',
        'Reuniões: abaixa o zumbido elétrico e do ventilador para a reprodução ficar menos agressiva.',
      ],
      why: [
        {
          icon: 'audio-waveform',
          title: 'O RNNoise roda local',
          text: 'Um modelo de 150 KB executa no navegador: o ruído constante cai cerca de 20 dB e a voz se move menos de 1 dB. O áudio não sai do dispositivo.',
        },
        {
          icon: 'warning-triangle',
          title: 'Limites honestos',
          text: 'Funciona em ruído constante — chiado, zumbido, ventilador. Vozes ao fundo e música não saem; a página não finge o contrário.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Arraste um MP3, WAV, M4A, OGG ou FLAC até o quadro tracejado, ou clique para procurar. O arquivo decodifica no seu dispositivo, sem upload. O “Intensidade” começa em 75 %.' },
        { name: 'Ajuste o “{strength}”', text: '100 % é a supressão máxima, cerca de 30 dB. Se o resultado soar abafado e você quiser um pouco da sala, vá para 50 % (cerca de 6 dB). O modelo RNNoise de 150 KB carrega no primeiro export.' },
        { name: 'Clique em “{export}”', text: 'O botão principal da barra de exportação. O arquivo inteiro passa pela porta em quadros de 10 milissegundos; a linha de status mostra o progresso. Dúvida? “Reproduzir” no original antes.' },
        { name: 'Leve o arquivo', text: 'O MP3 exporta na taxa escolhida, o WAV mantém as amostras processadas; o nome leva o sufixo -edited.' },
      ],
      faqs: [
        { q: 'O meu áudio é enviado para algum servidor?', a: 'Não. A decodificação e o gate acontecem no seu navegador. Na primeira exportação o modelo RNNoise, um arquivo WebAssembly de 150 KB, é buscado deste site. Depois ele fica em cache e a página funciona offline. Arquivos acima de 300 MB são rejeitados.' },
        { q: 'O que acontece com o arquivo?', a: 'O áudio passa pelo gate a 48 kHz em quadros de 10 milissegundos. Um arquivo de 44,1 kHz é reamostrado na entrada e na saída. No nosso mix de teste, um piso de ruído a −31 dBFS saiu a −61 dBFS e a voz se moveu menos de 1 dB. A exportação em MP3 recodifica uma vez na taxa escolhida.' },
        { q: 'O que ele não remove?', a: 'Ruído que parece voz. Outra pessoa falando, uma TV ao fundo ou uma multidão ficam, porque ocupam as mesmas bandas de frequência que o locutor. Para isso é preciso reparo espectral num DAW de desktop. Ruído constante como chiado, zumbido e ventiladores é o que esta página trata.' },
        { q: 'Qual a diferença para o removedor de silêncio?', a: 'O [removedor de silêncio](/silence-remover) corta os trechos silenciosos da linha do tempo. Esta página não move nenhuma amostra e abaixa o ruído constante sob a voz. Use os dois nessa ordem: primeiro o ruído, depois o silêncio.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle e o botão de exportar têm tamanho de toque, e a linha de status mostra o progresso em arquivos longos. O tempo de processamento cresce com a duração; meia hora de gravação demora um pouco num celular intermediário.' },
        { q: 'Limpa música?', a: 'Não, e esse é um limite honesto, não um ajuste que falta. O RNNoise é treinado com voz, então na música toma instrumentos por voz e abafa o detalhe. Para música, use um [filtro passa-alta](/high-pass-filter) contra o retumbo ou o [equalizador](/equalizer) para um corte pontual.' },
        { q: 'Posso manter um pouco do som da sala?', a: 'Pode. Baixe o controle rumo a 50 por cento para misturar o original de volta. No nosso mix de teste, 100 por cento abaixou o piso de ruído 30 dB e 50 por cento o abaixou 6 dB. A 0 por cento a exportação é o arquivo original.' },
      ],
      screenshotsAlt: [
        'Remover ruído de fundo: área de soltar, nada é enviado a um servidor',
        'Remover ruído de fundo: área de trabalho com o arquivo carregado',
        'Remover ruído de fundo: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Como o RNNoise remove o ruído de fundo',
          paragraphs: [
            'O RNNoise acompanha o piso de ruído da gravação e calcula um ganho para cada banda de frequência cerca de cem vezes por segundo. As bandas que carregam voz ficam abertas. As bandas que carregam ruído constante fecham.',
            'Os números desta página vêm de uma medição repetível, não de uma promessa de marketing. Nossa mixagem de teste junta um tom parecido com voz e ruído branco a −31 dBFS. Depois do gate a 100 por cento de força, o piso fica em −61 dBFS, a banda da voz se moveu menos de 1 dB, e um clique na escala cheia chegou na amostra exata em que começou.',
          ],
          table: {
            headers: [
              'Força',
              'O que você obtém',
              'Piso de ruído na nossa mixagem de teste',
            ],
            rows: [
              [
                '100 %',
                'Supressão máxima. O resultado mais limpo; gravações brilhantes podem soar fechadas.',
                '−30 dB',
              ],
              [
                '50 %',
                'Mistura pela metade. Mantém um pouco do ambiente sob a voz.',
                '−6 dB',
              ],
              [
                '0 %',
                'Bypass. A exportação é o arquivo original.',
                'sem mudança',
              ],
            ],
          },
        },
        {
          heading: 'Limpeza de voz, não redução de música',
          paragraphs: [
            'O gate é treinado em fala, então trata tudo com forma de fala como o que deve manter. Isso é uma vantagem em gravações faladas e um limite em todo o resto:',
          ],
          bullets: [
            'Vai embora: chiado, zumbido, ruído de ventilador e ar-condicionado, ruído de pré-amplificador de microfone barato.',
            'Fica: uma segunda voz, uma TV ao fundo, uma multidão. Essas coisas parecem o falante.',
            'Para música, em vez disso: um [filtro passa-alta](/high-pass-filter) para ronco, ou o [equalizador](/equalizer) para um corte direcionado.',
          ],
        },
        {
          heading: 'Reduza o ruído primeiro, corte depois',
          paragraphs: [
            'A remoção de ruído muda o que uma medição de silêncio vê, então a ordem importa. Rode esta página primeiro. Quando o piso fica 40 dB abaixo da voz, o [removedor de silêncio](/silence-remover) distingue silêncio morto de uma palavra baixa com muito mais confiança.',
            'Depois dos dois, iguale o loudness do seu episódio com o [medidor de loudness](/loudness-meter) antes de publicar.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para escolher',
      exportLabel: 'Remover ruído',
    },
    'audio-looper': {
      cardLine: 'Repete um clipe até 16 vezes e cruza cada emenda.',
      name: 'Audio looper',
      shortName: 'Loop',
      title: 'Audio looper — repetir um clipe online grátis',
      description: 'Repete uma seleção ou o arquivo inteiro de 2 a 16 vezes, com crossfade de 0,01 s em cada emenda. Grátis no navegador. Nada é enviado.',
      h1: 'Audio looper — Repita um clipe de 2 a 16 vezes, online e grátis',
      heroAlt: 'Repetir um clipe e cruzar cada emenda',
      subtitle: 'Faça um loop da seleção ou do arquivo inteiro e baixe um arquivo mais longo.',
      intro: 'As repetições vão de 2 a 16. O padrão é 4. Cada emenda é um crossfade linear, 0,01 segundo até você mover, no máximo 0,1 segundo. Arraste uma seleção para repetir só essa parte. Sem seleção, o arquivo inteiro se repete. A exportação para aos 10 minutos. Tom e velocidade ficam iguais. O processo fica no navegador.',
      usesHeading: 'Usos comuns do loop de áudio',
      uses: [
        'Loops de prática: um compasso repetido 2-16 vezes, exportado como material de estudo.',
        'Camas vocais: estique uma linha de voz curta por uma cena mais longa.',
        'Extensão de ambiente: repita o som ambiente até a duração que precisar.',
        'Camadas rítmicas: empilhe um loop de bateria numa seção de groove mais longa.',
        'Material de meditação: repita um sino ou ambiente numa sessão completa.',
        'Backup ao vivo: construa um material longo de um loop curto e toque no palco.',
      ],
      why: [
        {
          icon: 'repeat',
          title: 'Uma emenda que nunca estala',
          text: 'Um crossfade de 0,01 segundo na emenda: a volta ao início nunca estala nem estoura.',
        },
        {
          icon: 'sliders',
          title: 'Repetições e seleção livres',
          text: 'Escolha qualquer número de 2 a 16 repetições; repita a seleção se houver uma marcada, ou o arquivo inteiro se não.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação é no seu aparelho.' },
        { name: 'Ajuste repetições e emenda', text: 'As repetições vão de 2 a 16. A emenda é o crossfade de cada junção, de 0 a 0,1 segundo. Arraste a forma de onda se só uma parte deve repetir. A linha de status mostra a duração.' },
        { name: 'Exporte', text: 'Ouça o original para conferir a seleção e exporte MP3 ou WAV. O download é o clipe escrito um após o outro.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. As repetições são copiadas no seu navegador. Depois que a página carrega, a exportação funciona offline.' },
        { q: 'O que acontece em cada emenda?', a: 'O fim de uma passagem e o começo da próxima se sobrepõem pelo tamanho da emenda. O padrão é 0,01 segundo. A sobreposição é um crossfade linear, então um tom estável não salta. O WAV são essas amostras. O MP3 codifica o loop uma vez, no bitrate que você escolher. Tom e velocidade não mudam.' },
        { q: 'O que ele recusa?', a: 'As repetições só vão de 2 a 16. Se o resultado passasse de 10 minutos, a exportação para e a linha de status avisa. Esta página não grava por cima de si mesma e não coloca dois arquivos diferentes um após o outro.' },
        { q: 'Qual a diferença para cortar, juntar e fade?', a: 'O corte guarda um trecho uma vez. A junção coloca arquivos diferentes em fila. O fade abaixa o começo ou o fim de um arquivo. Esta página escreve o mesmo clipe de novo, e o crossfade só fica entre as cópias.' },
        { q: 'Funciona no celular?', a: 'Sim. Os dois controles, a forma de onda e o botão de exportar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Audio looper: área de soltar, nada é enviado a um servidor',
        'Audio looper: área de trabalho com o arquivo carregado',
        'Audio looper: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'As cópias se sobrepõem na emenda',
          paragraphs: [
            'As repetições vão de 2 a 16. O padrão é 4. Cada emenda se sobrepõe pelo controle de junção: 0,01 segundos a menos que você mexa, e nunca mais de 0,1 segundos.',
            'A sobreposição é um crossfade linear, então um tom contínuo não salta. A duração exportada é uma passagem vezes o número de repetições, menos a sobreposição vezes um a menos que a contagem. Tom e velocidade ficam como estavam. WAV são essas amostras. MP3 codifica o loop uma vez.',
          ],
        },
        {
          heading: 'Um clipe, escrito de novo',
          paragraphs: [
            'Um extensor de MP3 grava um clipe de novo para o arquivo durar mais. Use quando a próxima cópia deve ser o mesmo áudio:',
          ],
          bullets: [
            'Um riff de um compasso que você quer como arquivo de estudo.',
            'Um aviso de voz curto que precisa durar por uma cena mais longa.',
            'Uma amostra cuja emenda estala se as cópias se encontram sem sobreposição.',
          ],
        },
        {
          heading: 'Não é um corte nem uma junção',
          paragraphs: [
            'O cortador de áudio mantém um trecho uma vez. O juntador de áudio coloca arquivos diferentes em fila. O fade de áudio abaixa o começo ou o fim de um arquivo. O crossfade desta página fica só entre cópias do mesmo clipe.',
            'Esta página não grava em cima de si mesma. Se o resultado passar de 10 minutos, a exportação para. Encurte a seleção ou diminua as repetições.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Repetir e baixar',
    },
    'auto-panner': {
      cardLine: 'Varre um arquivo da esquerda para a direita no ritmo que você define. Não segue a batida.',
      name: 'Auto panner',
      shortName: 'Pan',
      title: 'Auto panner — varrer o áudio para a esquerda e a direita',
      description: 'Varre mono ou estéreo da esquerda para a direita de 0,05 a 2 Hz. A profundidade vai de 0 a 100%, e começa em 70%. Grátis no navegador. Nada é enviado.',
      h1: 'Auto panner, varra um arquivo da esquerda para a direita',
      heroAlt: 'Varrer uma gravação da esquerda para a direita',
      subtitle: 'Você define a profundidade e a taxa. A varredura não segue a batida.',
      intro: 'A profundidade vai de 0 a 100%. O valor inicial é 70%. A taxa vai de 0,05 Hz a 2 Hz. O valor inicial é 0,2 Hz. A posição é a profundidade vezes um seno dessa taxa, então 0,2 Hz leva 5 segundos para ir e voltar. Não segue a bateria. Com profundidade 0 o arquivo fica como está. O processo fica no navegador.',
      usesHeading: 'Usos comuns do pan automático',
      uses: [
        'Pads que vagam: um pad deriva devagar de um lado ao outro.',
        'Vozes mais largas: uma voz mono ganha um movimento estável esquerda-direita.',
        'Movimento no synth: dê a uma linha estática sensação de groove.',
        'Efeitos de ambiente: o som ambiente varre devagar sem chamar atenção.',
        'Padrões de bateria: chimbal ou percussão se espalham esquerda-direita sozinhos.',
        'Áudio de jogo: o movimento esquerda-direita de um objeto passando.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Velocidade e profundidade separadas',
          text: 'A velocidade (0,05-2 Hz) decide o quão rápido; a profundidade (0-100%), o quão largo — lento e profundo soa a ambiente, rápido e raso a groove.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'O pan é calculado no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação é no seu aparelho.' },
        { name: 'Ajuste profundidade e taxa', text: 'A profundidade é o quanto o som viaja, de 0 a 100%. A taxa é quantas varreduras por segundo, de 0,05 a 2. Arraste a onda se só uma parte deve se mover.' },
        { name: 'Exporte', text: 'Ouça para conferir a seleção e exporte MP3 ou WAV. O WAV são essas amostras. O MP3 codifica a varredura uma vez.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. A varredura é um panner estéreo no seu navegador. Depois que a página carrega, você pode ficar offline e a exportação continua.' },
        { q: 'O que acontece com o som?', a: 'A posição é a profundidade vezes um seno da taxa. O tom e a velocidade de reprodução ficam. Um estéreo se move como uma imagem só. Os dois canais não seguem caminhos diferentes. O WAV são essas amostras. O MP3 codifica uma vez, no bitrate que você escolhe.' },
        { q: 'O que ele não faz?', a: 'A varredura não trava numa batida e não separa meio e lado. Com profundidade 0 o panner não entra, então a exportação corresponde ao arquivo que você soltou. Não é uma transferência relativa à cabeça que aponta o som para um ângulo.' },
        { q: 'Qual a diferença para eco, slowed reverb e equalizador?', a: 'O eco acrescenta uma cópia depois de um atraso. Slowed + Reverb muda a velocidade e o tom, e depois acrescenta uma sala. O equalizador de áudio muda faixas de frequência. Esta página só move o mesmo áudio para a esquerda e a direita. Um círculo fixo de uns 10 segundos, com uma cauda curta de reverb, é a página de áudio 3D.' },
        { q: 'Funciona no celular?', a: 'Sim. Os dois controles, a onda e o botão de exportar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Auto panner: área de soltar, nada é enviado a um servidor',
        'Auto panner: área de trabalho com o arquivo carregado',
        'Auto panner: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Onde o som fica',
          paragraphs: [
            'A profundidade vai de 0 a 100%. O valor inicial é 70%. A taxa vai de 0,05 Hz a 2 Hz. O valor inicial é 0,2 Hz.',
            'A posição é a profundidade vezes um seno dessa taxa. Em 0,2 Hz um ciclo completo da esquerda para a direita leva 5 segundos. Profundidade em 0 deixa o arquivo como está. Tom e velocidade de reprodução ficam como estavam.',
          ],
        },
        {
          heading: 'Uma varredura constante',
          paragraphs: [
            'Use quando o movimento deve ser uniforme:',
          ],
          bullets: [
            'Um pad ou uma voz que deve atravessar as caixas devagar.',
            'Uma tomada mono que deve se mover, sem virar duas faixas diferentes.',
            'Uma taxa que você define em hertz, não uma varredura que tenta seguir a bateria.',
          ],
        },
        {
          heading: 'Não é um eco nem uma mudança de tempo',
          paragraphs: [
            'O eco adiciona uma cópia depois de um atraso que você define. Slowed + reverb muda a velocidade e o tom, depois adiciona um ambiente. O equalizador muda bandas de frequência. Nenhum deles move a imagem em um relógio.',
            'Esta página não segue uma batida. Um arquivo estéreo continua uma imagem. Os canais esquerdo e direito não são enviados em caminhos separados.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Aplicar pan e baixar',
    },
    '3d-audio': {
      cardLine: 'Um interruptor coloca o arquivo num círculo lento e acrescenta uma cauda curta de reverb.',
      name: 'Áudio 3D',
      shortName: '3D',
      title: 'Áudio 3D — círculo lento e reverb online grátis',
      description: 'Um círculo a cada cerca de 10 segundos e uma cauda curta de reverb. Um interruptor. A velocidade e o tom ficam. Grátis no navegador. Nada é enviado.',
      h1: 'Áudio 3D, um círculo lento com uma cauda curta de reverb',
      heroAlt: 'Um círculo lento entre os alto-falantes, mais uma sala curta',
      subtitle: 'A profundidade, a taxa e a sala já estão definidas. Você só muda o interruptor.',
      intro: 'O círculo é fixo. A profundidade é 100%. A taxa é 0,1 Hz, então uma volta leva cerca de 10 segundos. Quem se move é o som direto. Um envio de reverb a 25% usa a mesma sala curta do Slowed + Reverb. A velocidade e o tom ficam. Com o interruptor desligado, a exportação é o arquivo que você soltou. O processo fica no navegador.',
      usesHeading: 'Usos comuns do áudio 3D',
      uses: [
        'Vozes atmosféricas: uma voz circula em torno da cabeça — material para meditar e relaxar.',
        'Camas em movimento: um pad estático ganha uma órbita e na hora tem espaço.',
        'Ambientes de jogo: o som ambiente circula devagar, e o fone traz presença.',
        'Ganchos de vídeo curto: uma frase dá a volta completa como gancho de atenção.',
        'Ruído branco sob medida: ruído branco em órbita como material para dormir.',
        'Intros de podcast: a frase de abertura orbita e dá ao programa seu selo sonoro.',
      ],
      why: [
        {
          icon: 'repeat',
          title: 'Um interruptor faz tudo',
          text: 'A órbita roda a uma taxa fixa de cerca de 10 segundos por volta, com um reverb curto atrás — sem pilha de parâmetros para ajustar.',
        },
        {
          icon: 'lock-simple',
          title: 'Velocidade e tom ficam',
          text: 'Só a posição se move: velocidade e tom intactos, então falas e ritmo continuam caindo exato.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação é no seu aparelho.' },
        { name: 'Deixe o círculo ligado', text: 'O interruptor começa ligado. Desligue e a exportação corresponde ao arquivo que você soltou. Não há um segundo controle para profundidade, taxa ou sala.' },
        { name: 'Exporte', text: 'Ouça e exporte MP3 ou WAV. O WAV são as amostras do círculo mais a cauda. O MP3 codifica isso uma vez.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O círculo e a sala são renderizados no seu navegador. Depois que a página carrega, você pode ficar offline e a exportação continua.' },
        { q: 'O que acontece com o som?', a: 'A profundidade fica em 100%. A taxa fica em 0,1 Hz, cerca de 10 segundos por volta. Quem se move é o som direto. O reverb é um envio de 25%, a mesma sala curta do Slowed + Reverb, então o arquivo ganha uma cauda. A velocidade e o tom ficam. O WAV são essas amostras. O MP3 codifica uma vez, no bitrate que você escolhe.' },
        { q: 'O que ele não faz?', a: 'Nesta página você não define outra taxa, outra profundidade nem outra sala. Não segue uma batida. Não aponta o som para um ângulo ao redor da sua cabeça. Com o interruptor desligado não há círculo nem cauda.' },
        { q: 'Qual a diferença para o auto panner e o slowed reverb?', a: 'Para definir você a taxa e a profundidade, use o auto panner. Esta página é o círculo pronto, cerca de 10 segundos, com o reverb já ligado. Slowed + Reverb muda a velocidade e o tom. Esta página não.' },
        { q: 'Funciona no celular?', a: 'Sim. O interruptor, a onda e o botão de exportar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Áudio 3D: área de soltar, nada é enviado a um servidor',
        'Áudio 3D: área de trabalho com o arquivo carregado',
        'Áudio 3D: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Um círculo com os números já escolhidos',
          paragraphs: [
            'A profundidade é 100%. A taxa é 0,1 Hz. Uma viagem do meio, para um lado, e de volta pelo outro lado leva cerca de 10 segundos.',
            'O som direto é o que se move. A reverb é um envio a 25%, o mesmo ambiente curto da página slowed + reverb. A cauda é o motivo da exportação passar do fim do arquivo que você soltou.',
          ],
        },
        {
          heading: 'Quando a predefinição é o trabalho',
          paragraphs: [
            'Use esta página quando você quer o movimento pronto:',
          ],
          bullets: [
            'Uma voz ou um pad que deve vagar sem um controle de taxa.',
            'Um ambiente curto atrás desse movimento, não uma lavagem que você mixa.',
            'A velocidade original e o tom original, deixados onde estavam.',
          ],
        },
        {
          heading: 'Não é um panner que você ajusta nem uma desaceleração',
          paragraphs: [
            'O auto panner é onde você define profundidade de 0 a 100% e taxa de 0,05 Hz a 2 Hz, sem reverb. Esta página trava os dois números e adiciona o ambiente.',
            'Slowed + reverb muda a velocidade, e o tom se move com ela. Esta página não. Desligar a chave deixa o arquivo como você soltou.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
      exportLabel: 'Aplicar 3D',
    },
    metronome: {
      cardLine: 'Um clique de 40 a 240 BPM. O primeiro tempo de cada compasso é mais forte.',
      name: 'Metrônomo',
      shortName: 'Metrônomo',
      title: 'Metrônomo — Clique de 40 a 240 BPM grátis',
      description: 'Clique de 40 a 240 BPM em 2/4, 3/4, 4/4 ou 6/8. O primeiro tempo é mais forte. Exporte 4, 8 ou 16 compassos em WAV ou MP3. Nada é enviado.',
      h1: 'Metrônomo, um clique de 40 a 240 BPM',
      heroAlt: 'Um clique de metrônomo de 40 a 240 BPM',
      subtitle: 'Ouça o clique, ou salve 4, 8 ou 16 compassos. Ele não entra numa música.',
      intro: 'O tempo vai de 40 a 240 BPM. Escolha 2/4, 3/4, 4/4 ou 6/8. O primeiro tempo de cada compasso é mais forte. Toque e o clique segue até você parar. A exportação grava 4, 8 ou 16 compassos em WAV ou MP3. 6/8 são seis cliques no compasso, nesse BPM, não dois. Esta página não recebe arquivo e não coloca o clique debaixo de uma música. Essa mistura é o editor multitrilha. Nada é enviado.',
      usesHeading: 'Usos comuns do metrônomo',
      uses: [
        'Antes de gravar: pratique no BPM alvo até firmar, depois grave.',
        'Exportar guia: exporte o clique de 4, 8 ou 16 compassos e ponha sob o projeto do DAW.',
        'Praticar instrumento: toque no pulso, do lento ao rápido.',
        'Treinar ritmo: troque o compasso e pratique padrões diferentes.',
        'Ensaio de dança: marque o compasso no BPM da música e ensaie os passos.',
        'Ritmo de corrida: ajuste o BPM da passada e ritme a corrida.',
      ],
      why: [
        {
          icon: 'sliders',
          title: '40-240 BPM com compasso',
          text: 'Tempo e compasso ajustáveis: da velocidade de estudo até a de palco, sem parar.',
        },
        {
          icon: 'volume',
          title: 'Guia exportável',
          text: 'Exporte o clique como áudio de 4, 8 ou 16 compassos, de referência sob o projeto.',
        },
      ],
      howTo: [
        { name: 'Defina BPM e compasso', text: 'O BPM vai de 40 a 240. Escolha 2/4, 3/4, 4/4 ou 6/8. A página começa em 100 BPM e 4/4.' },
        { name: 'Toque', text: 'O clique segue até você parar. O primeiro tempo de cada compasso é mais forte. Cada clique é o mesmo tom curto.' },
        { name: 'Exporte se quiser um arquivo', text: 'Escolha 4, 8 ou 16 compassos, depois WAV ou MP3. O arquivo é só o clique. WAV guarda essas amostras. MP3 codifica uma vez.' },
      ],
      faqs: [
        { q: 'Algo é enviado?', a: 'Não. A página não lê um arquivo e não abre o microfone. A reprodução e a exportação ficam no navegador. Depois que a página carrega, você pode ficar offline e o clique continua.' },
        { q: 'Como é o clique?', a: 'A 100 BPM os cliques ficam a 0,60 segundo um do outro. O primeiro tempo do compasso é mais forte. Os outros são o mesmo tom, mais baixo. WAV são essas amostras. MP3 codifica uma vez, no bitrate que você escolhe.' },
        { q: 'O que ele não faz?', a: 'Ele não alinha o clique a uma música. Não há onde soltar um arquivo. 6/8 continua com seis cliques no compasso, no BPM do controle. Não passa a ser dois cliques de semínima pontuada.' },
        { q: 'Qual a diferença para a multitrilha e para a velocidade?', a: 'Esta página é só o clique. Colocar o clique debaixo de uma música é o editor multitrilha. Mudar a duração de uma gravação é a página de velocidade, e o tom anda junto. O microfone é o gravador de voz.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle de BPM, o compasso, tocar e exportar funcionam no toque no Chrome, Edge, Firefox e Safari atuais. O clique usa um oscilador Web Audio. O arquivo exportado usa o mesmo intervalo.' },
      ],
      screenshotsAlt: [
        'Metrônomo: a página antes de qualquer arquivo ou entrada',
        'Metrônomo: depois de ler o arquivo ou os toques',
        'Metrônomo: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'O clique',
          paragraphs: [
            'A 100 BPM os cliques ficam a 0,60 segundos de distância. O primeiro tempo do compasso é mais alto. Cada clique é o mesmo tom curto.',
            '2/4 clica duas vezes por compasso, 3/4 três vezes, 4/4 quatro vezes, e 6/8 seis vezes. O BPM é a taxa de cliques em cada um desses compassos.',
          ],
        },
        {
          heading: 'Um arquivo dos mesmos cliques',
          paragraphs: [
            'A exportação grava 4, 8 ou 16 compassos. WAV mantém os cliques como estão. MP3 codifica esse resultado uma vez.',
          ],
          bullets: [
            'Quatro compassos de 4/4 a 100 BPM são 16 cliques.',
            'Solte esse WAV no editor multipista se você quer ele sob uma música.',
            'Fique no play se você só precisava ouvir o tempo.',
          ],
        },
        {
          heading: 'O que ele não faz',
          paragraphs: [
            'Ele não alinha os cliques a uma música. Não há arquivo para soltar nem forma de onda para cortar.',
            'Ele não muda a duração de uma gravação. A página acelerar áudio faz isso, e o tom se move com a velocidade.',
          ],
        },
      ],
      dropHint: 'Sem arquivo. Toque em tocar.',
    },
    'tap-tempo': {
      cardLine: 'Bata no ritmo e leia o BPM de qualquer coisa, sem arquivo.',
      name: 'Tap tempo',
      shortName: 'Tap tempo',
      title: 'Tap tempo — descubra o BPM de uma música batendo',
      description: 'Bata junto com a música e leia o BPM. Uma batida fora de lugar não mexe no número, e ele se firma após umas quatro batidas. Grátis, nada é enviado.',
      h1: 'Tap tempo — descubra o BPM de uma música batendo no ritmo',
      heroAlt: 'Um ritmo batido como ondas ao redor de um ponto',
      howToIntro: 'Toque, e a leitura se estabiliza',
      subtitle: 'Bata em qualquer tecla ou botão no ritmo. O número se firma em umas quatro batidas.',
      intro: 'Toque a música em qualquer lugar, bata nesta página a cada batida e leia o tempo em BPM. O número usa uma média aparada dos seus intervalos, então uma batida adiantada ou perdida não o arrasta; 2,5 segundos sem bater começam uma contagem nova. Não há arquivo para abrir e nada é enviado; as batidas nunca saem desta página.',
      usesHeading: 'Usos comuns de marcar o BPM',
      uses: [
        'Ritmo de estudo: ponha o [metrônomo](/metronome) na velocidade da música que está aprendendo.',
        'Pré-checagem do mashup: veja se os BPMs de duas faixas se encaixam.',
        'Medir ao vivo: o tempo do arranjo atual no ensaio da banda.',
        'Música de corrida: meça sua passada e escolha músicas com o BPM que casa.',
        'Ensinar dança: bata os pontos de ritmo da coreografia para o grupo.',
        'Música de vídeo: meça quantos BPM o ritmo da edição pede.',
      ],
      why: [
        {
          icon: 'clock-counter-clockwise',
          title: 'Firma em quatro batidas',
          text: 'Por volta de quatro batidas a leitura assenta: toma a média aparada dos intervalos, e uma batida errada não a arrasta.',
        },
        {
          icon: 'check',
          title: 'Sem arquivos',
          text: 'Só contam os milissegundos entre toques — sem arquivos, sem envio; mede até por caixa de som ao vivo.',
        },
      ],
      howTo: [
        { name: 'Toque a música', text: 'De onde você quiser. A página não precisa do arquivo de áudio, então o alto-falante do celular do lado do computador funciona bem.' },
        { name: 'Bata no ritmo', text: 'Bata no botão, ou mantenha o foco na página e aperte a barra de espaço a cada batida. O número se firma após umas quatro batidas e vai afinando enquanto você continua.' },
        { name: 'Leia e zere', text: 'O número é batidas por minuto, com uma casa decimal. Pare de bater por 2,5 segundos e a próxima batida começa uma contagem nova, ou clique em Zerar para limpar na hora.' },
      ],
      faqs: [
        { q: 'Minha música é enviada?', a: 'Não, e não há arquivo nenhum. A página conta os milissegundos entre as suas batidas. Nada da música, das batidas ou de qualquer outra coisa sai desta página.' },
        { q: 'Qual a precisão?', a: 'Tão precisa quanto a sua batida, dentro de limites que não importam para música. Em um teste medido, uma oscilação de batida de mais ou menos 20 milissegundos manteve a leitura a cerca de 2 BPM do tempo real. A leitura usa uma média aparada dos seus intervalos, então uma batida fora de lugar não a move.' },
        { q: 'Qual a diferença para o detector de BPM?', a: 'O [Tom e BPM](/key-bpm-finder) analisa um arquivo de áudio e lê o tempo e o tom na forma de onda, o que é exato para música produzida. Esta página lê o que você bater, então funciona com uma banda ao vivo, uma melodia na sua cabeça ou uma música que você não pode enviar ou não tem em arquivo.' },
        { q: 'Bati uma batida que não existe. E agora?', a: 'Nada quebrou. A batida fora de lugar cai na pilha de descarte da média aparada, e 2,5 segundos sem bater limpam a contagem de qualquer forma. Para recomeçar na hora, clique em Zerar.' },
        { q: 'Funciona no celular?', a: 'Sim. O botão de bater é do tamanho de um polegar e a página pesa quase nada. Bater no mesmo aparelho que toca a música funciona bem; a página não escuta o áudio.' },
        { q: 'Quais tempos ele lê?', a: 'Qualquer coisa com batidas de 2,5 segundos de distância para cá, o que dá cerca de 24 a 999 BPM. A música vive entre 40 e 240, onde a leitura é mais estável. Para peças muito lentas, bata as subdivisões e divida o número por dois.' },
        { q: 'Ele deixa a música mais lenta para bater com o BPM?', a: 'Aqui não; esta página só lê. Leve o número ao [metrônomo](/metronome) para treinar com ele, ou à página de [velocidade](/change-audio-speed) para levar um arquivo a um tempo alvo.' },
      ],
      screenshotsAlt: [
        'Tap tempo: o mostrador em um traço antes do primeiro toque',
        'Tap tempo depois de sete toques: o mostrador parou em 120,2 BPM',
      ],
      sections: [
        {
          heading: 'Como o número é calculado',
          paragraphs: [
            'Cada toque guarda um carimbo de tempo. Os intervalos entre seus toques recentes são ordenados, o quarto mais rápido e o mais lento saem, e a média dos intervalos restantes é calculada. Sessenta mil dividido por essa média é o BPM, mostrado com uma casa decimal.',
            'O corte é todo o truque. O toque humano tem outliers: um toque um fio adiantado, um tempo em que você ouviu em vez de contar. Uma média simples deixa qualquer um dos dois puxar o número; a média com corte trata as duas pontas como ruído e lê o tempo que você realmente manteve.',
          ],
        },
        {
          heading: 'Tap tempo ou o analisador de arquivo',
          paragraphs: [
            'Use esta página quando o tempo mora nos seus ouvidos: uma banda ao vivo, uma melodia acústica, uma faixa que você não consegue alimentar em uma ferramenta. Use o [tom e BPM](/key-bpm-finder) quando você tem o arquivo e quer o tempo produzido, exato, mais o tom. Quando os dois discordam, confie no arquivo.',
          ],
        },
      ],
      dropHint: 'Sem arquivo. Bata no ritmo.',
      exportLabel: 'Tap tempo',
    },
    'key-bpm-finder': {
      cardLine: 'Leia BPM de 60 a 180 e um tom maior ou menor. O silêncio fica sem leitura.',
      name: 'Tom e BPM',
      shortName: 'Tom e BPM',
      title: 'Tom e BPM — Ler um arquivo online grátis',
      description: 'Leia BPM de 60 a 180 e um tom maior ou menor. O silêncio fica sem leitura. A página lê os primeiros 60 segundos. Nada é enviado.',
      h1: 'Tom e BPM, lidos do arquivo que você solta',
      heroAlt: 'Ler o BPM e o tom de um arquivo de áudio',
      subtitle: 'Dois números. Nenhum botão que mova o tom.',
      intro: 'Solte um arquivo. A página lê BPM de 60 a 180, e um tom: uma nota mais maior ou menor. O BPM é o vão mais forte entre os ataques. Um vão fora dessa faixa é dividido ou dobrado até cair dentro. O tom é o perfil maior ou menor fixo que melhor combina com as classes de altura. O silêncio mostra «Não dá para ler», não 0 BPM e não C maior. Só os primeiros 60 segundos entram. Um arquivo com menos de 2 segundos não tem BPM. Esta página não muda o arquivo. Mover o tom é o alterador de tom. Nada é enviado.',
      usesHeading: 'Usos comuns de detectar tom e BPM',
      uses: [
        'Bater o mashup: leia primeiro o BPM e decida se muda o tempo.',
        'Referência para transportar: leia o tom e leve ao alvo no [mudador de tom](/pitch-changer).',
        'Prática acompanhada: escala no tom lido, metrônomo no BPM lido.',
        'Organizar samples: etiquete sua biblioteca de samples com tom e velocidade.',
        'Preparar o cover: confirme o tom original e decida quantos semitons subir.',
        'Planejar o remix: antes de remixar, saiba o tempo e o tom do material.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'A leitura já dá a conclusão',
          text: 'BPM e tom numa única passada: mudar tempo, transportar ou pôr o metrônomo têm base, sem chute.',
        },
        {
          icon: 'check',
          title: 'O arquivo fica como está',
          text: 'Só lê, não toca no áudio: no fim da detecção nenhuma amostra se moveu, e não precisa exportar.',
        },
      ],
      howTo: [
        { name: 'Solte um arquivo', text: 'Áudio, ou um vídeo com trilha. O navegador decodifica. Nada é enviado.' },
        { name: 'Leia BPM e tom', text: 'O BPM é um inteiro de 60 a 180. O tom é uma nota mais maior ou menor. A frase sob os números nomeia os casos que trocam.' },
        { name: 'Deixe o arquivo como está', text: 'Esta página não exporta um arquivo alterado. O alterador de tom é onde o tom se move, e a duração fica.' },
      ],
      faqs: [
        { q: 'O arquivo é enviado?', a: 'Não. O navegador decodifica e lê as amostras na memória. Depois que a página carrega, você pode ficar offline e ainda ler um arquivo que soltar.' },
        { q: 'Quão exata é a leitura?', a: 'O BPM é o vão de ataque mais forte entre 60 e 180, em inteiro. O tom é o melhor encaixe num perfil maior fixo e num perfil menor fixo, 12 pesos cada. Não é uma transcrição de acordes.' },
        { q: 'O que ele não faz?', a: 'Não muda o tom nem a velocidade. Não há botão para um tom novo. Um arquivo com menos de 2 segundos não tem BPM. O silêncio mostra que não dá para ler, não 0 e não C maior. Só os primeiros 60 segundos entram.' },
        { q: 'Qual a diferença para o alterador de tom e a página de velocidade?', a: 'Esta página só lê. O alterador de tom move o tom e mantém a duração. A página de velocidade muda a duração, e o tom anda junto. O alterador de tempo muda a duração e o tom fica, de 0,75× a 1,25×.' },
        { q: 'Funciona no celular?', a: 'Sim. Solte o arquivo e leia os dois números. A área de soltar e o botão de recomeçar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Tom e BPM: a página antes de qualquer arquivo ou entrada',
        'Tom e BPM: depois de ler o arquivo ou os toques',
      ],
      sections: [
        {
          heading: 'O que os dois números são',
          paragraphs: [
            'BPM é o intervalo mais forte entre ataques, de 60 a 180. Um intervalo fora dessa faixa é dividido ou dobrado até cair dentro.',
            'O tom é o perfil maior ou menor que melhor combina com a energia das classes de nota. Cada perfil é um conjunto fixo de 12 pesos.',
          ],
        },
        {
          heading: 'Quando a leitura é fraca',
          paragraphs: [
            'Ritmo livre, fala e ruído de ambiente não têm intervalo constante, então o BPM pode ficar no múltiplo errado. Um maior relativo e um menor compartilham muitas notas, então os dois podem trocar.',
          ],
          bullets: [
            'Um arquivo silencioso mostra Não consigo ler nos dois números.',
            'Um arquivo com menos de 2 segundos ainda pode mostrar um tom, e não mostra BPM.',
            'Só os primeiros 60 segundos são lidos.',
          ],
        },
        {
          heading: 'O que ele não faz',
          paragraphs: [
            'Ele não move o tom. Não há botão para um novo tom. Isso é o alterador de tom, e a duração fica igual.',
            'Ele não muda a velocidade. A página de velocidade faz isso, e o tom se move com a velocidade.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'loudness-meter': {
      cardLine: "Lê o quão alto um arquivo está em LUFS e depois iguala uma meta de podcast, streaming ou broadcast.",
      name: "Medidor de loudness",
      shortName: "Loudness",
      title: "Medidor de loudness — Ver LUFS de um áudio online grátis",
      description: "Mede o LUFS integrado de um áudio no navegador e depois iguala −16, −14 ou −23. O pico de amostra não passa de −1 dBFS. Grátis, sem envio.",
      h1: 'Medidor LUFS online grátis — Conferir os LUFS de uma música',
      heroAlt: 'Ver se um arquivo bate com a meta de loudness de um podcast ou de um streaming',
      subtitle: "O LUFS integrado do arquivo que você solta, não o volume da sala.",
      intro: "Solte um arquivo e leia a loudness integrada em LUFS, mais o pico de amostra. Depois iguale uma meta de entrega: podcast −16, streaming −14 ou broadcast −23. O ganho é um só número para o arquivo inteiro. Se esse ganho empurrasse a amostra mais alta além de −1 dBFS, ele para ali e a página diz o LUFS que você de fato alcança. Não é um medidor de sala, nem normalização de pico. −16, −14 e −23 são metas comuns de entrega, não um limite legal. O processo fica no seu navegador.",
      usesHeading: 'Usos comuns do medidor de sonoridade LUFS',
      uses: [
        'Alinhar o podcast: quanto falta do memo de voz ou da mixagem para a meta de −16 do podcast.',
        'Alinhar o streaming: levar a música a −14 LUFS antes de publicar, sem deixar o pico passar de −1 dBFS.',
        'Entrega para rádio: programas de rádio se alinham a −23 LUFS.',
        'Conferir o pico: se a maior amostra cruza −1 dBFS, vê-se num relance.',
        'Checkup da mixagem: se o alto e o baixo ficam longe demais, primeiro leia o LUFS e decida se comprime.',
        'Comparar plataformas: meça o mesmo arquivo uma vez por plataforma antes de alinhar todas.',
      ],
      why: [
        {
          icon: 'waveform',
          title: 'Sonoridade integrada com peso K',
          text: 'Mede o LUFS integrado segundo ITU-R BS.1770 — quão alto o trecho inteiro soa é uma propriedade do arquivo; não é decibelímetro de sala nem normalização de picos.',
        },
        {
          icon: 'lock-simple',
          title: 'O ganho para no pico',
          text: 'Se ao mirar o objetivo a maior amostra cruzaria −1 dBFS, o ganho freia e reporta com honestidade o LUFS alcançado, sem forçar o número.',
        },
      ],
      howTo: [
        { name: "Solte o áudio", text: "Qualquer MP3, WAV, M4A, OGG ou FLAC. A decodificação e a medida acontecem no seu aparelho." },
        { name: "Leia o medidor", text: "Integrada é a loudness do arquivo com ponderação K, em LUFS. O pico de amostra é a maior amostra, em dBFS. Um arquivo em silêncio não tem loudness para igualar." },
        { name: "Escolha uma meta e exporte", text: "Podcast é −16, streaming é −14, broadcast é −23. Exporte MP3 ou WAV. Se o pico passasse de −1 dBFS, o ganho para e a nota mostra o LUFS que você obtém." },
      ],
      faqs: [
        { q: "Meu áudio é enviado?", a: "Não. O arquivo é decodificado e medido no navegador. Depois que a página carrega, você pode ficar offline e a exportação continua funcionando." },
        { q: "O que o número significa?", a: "LUFS integrado é o quão alto o arquivo está ao longo da duração, com a ponderação K da ITU-R BS.1770. É uma propriedade do arquivo. Não é uma leitura da sala nem um nível de pressão sonora com ponderação A." },
        { q: "Qual a diferença para normalizar?", a: "Normalizar sobe o arquivo até a amostra mais alta tocar um pico. Esta página iguala a loudness integrada. Um arquivo pode estar normalizado por pico e ainda longe de −16 LUFS. O alto e o baixo continuam à mesma distância. O compressor de nível é a página que fecha essa distância." },
        { q: "−16, −14 e −23 são limites legais?", a: "Não. São metas comuns de entrega: podcasts costumam pedir cerca de −16 LUFS, streaming de música cerca de −14 e broadcast cerca de −23. A página não promete que seu arquivo passe numa plataforma ou numa emissora." },
        { q: "O pico é um pico verdadeiro?", a: "Não. Pico de amostra é a maior amostra do arquivo. Um pico verdadeiro precisa de sobreamostragem e pode ficar um pouco mais alto entre as amostras. Esta página segura o pico de amostra em −1 dBFS e não informa dBTP." },
        { q: "Funciona no celular?", a: "Sim. As três metas e o botão de exportar respondem ao toque no Chrome, Edge, Firefox e Safari atuais." },
      ],
      screenshotsAlt: [
        'Medidor de loudness: a página antes de qualquer arquivo ou entrada',
        'Medidor de loudness: depois de ler o arquivo ou os toques',
      ],
      sections: [
        {
          heading: 'Uma leitura do arquivo, não um medidor de sala',
          paragraphs: [
            'O número é LUFS integrado: quão alto o arquivo é ao longo da duração, depois da ponderação K do ITU-R BS.1770. É uma propriedade do arquivo. Não é uma leitura da sala, e não é um nível de pressão sonora com ponderação A.',
            'A página também mostra o pico de amostra. Esse pico não é o pico verdadeiro. Picos entre amostras ainda podem passar do teto em alguns caminhos de reprodução.',
          ],
        },
        {
          heading: 'Alvos que as pessoas realmente usam',
          paragraphs: [
            'Os pontos de referência usuais são convenções, não limites legais:',
          ],
          bullets: [
            'Cerca de −16 LUFS para um podcast falado.',
            'Cerca de −14 LUFS para boa parte do streaming de música.',
            'Cerca de −23 LUFS para loudness de programa no estilo transmissão.',
          ],
        },
        {
          heading: 'O ganho para no pico',
          paragraphs: [
            'Se você aplica o ganho sugerido, ele para quando o pico da amostra passaria de −1 dBFS. Um arquivo pode já estar normalizado no pico e ainda ficar longe de −16 LUFS, porque uma tosse define o pico enquanto o resto fica baixo.',
            'Normalizar só persegue esse pico, até cerca de −0,2 dB. O compressor de nível é o que estreita a distância entre alto e baixo. Esta página mede. Ela não finge que um único número faz um master.',
          ],
        },
      ],
      dropHint: "Solte um arquivo de áudio ou clique para procurar",
    },
    'multi-track-audio-editor': {
      cardLine: 'Empilhe voz, narração e música numa linha do tempo e exporte uma mix.',
      name: 'Editor multipista',
      shortName: 'Multipista',
      title: 'Editor multipista online grátis — Misture faixas',
      description: 'Empilhe arquivos numa linha do tempo, ajuste nível e pan por faixa e exporte uma mix. Grátis, no navegador, sem enviar nada.',
      h1: 'Editor multipista — Sobrepor faixas num mix',
      heroAlt: 'Ajustar o nível e o pan de um vocal sobre um beat',
      subtitle: 'Empilhe até 8 arquivos, equilibre cada um e exporte uma única mix.',
      intro: 'Coloque um vocal sobre um beat, ou uma narração sobre música, e ouça os dois juntos. Cada arquivo é uma faixa: nível, pan, mudo, solo e o instante em que entra. A soma acontece no navegador. Nada é enviado. Fechar a aba encerra a sessão.',
      usesHeading: 'Usos comuns da mixagem multipista',
      uses: [
        'Voz sobre música: deslize um recado de voz sob uma música de fundo para começar depois da intro.',
        'Mixagem demo: junte voz, bateria e violão em um arquivo.',
        'Podcast a duas vozes: grave em faixas separadas, equilibre cada uma e junte.',
        'Camadas de efeitos: coloque vários efeitos em pontos diferentes da linha do tempo.',
        'Deslocar áudio: arraste uma faixa para mudar quando ela entra, alinhada à imagem.',
        'Pista de acompanhamento: adicione um acompanhamento à sua própria performance.',
      ],
      why: [
        {
          icon: 'layers',
          title: 'Linha do tempo de 8 faixas',
          text: 'Até 8 faixas, cada uma posicionada livremente arrastando e com o próprio balanço — ouça todas as camadas da mixagem em um arquivo.',
        },
        {
          icon: 'volume',
          title: 'Uma única exportação mixada',
          text: 'Todas as faixas são mixadas em uma única exportação: MP3 ou WAV.',
        },
      ],
      howTo: [
        { name: 'Adicione os arquivos', text: 'Solte dois ou mais áudios, ou clique para escolher. Cada arquivo vira uma faixa. Esta página para em 8.' },
        { name: 'Posicione e equilibre', text: 'Arraste um clipe para definir quando entra. Arraste as bordas para cortar. Ajuste nível e pan na linha, ou digite os tempos. Mudo e Solo ficam na mesma linha.' },
        { name: 'Ouça e exporte', text: 'Toque a mix. Exporte MP3 ou WAV. Se a soma cliparia, a mix inteira desce o mesmo fator e a página diz quantos dB.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O navegador decodifica cada arquivo com decodeAudioData e soma as amostras na memória. Depois que a página carregou, a exportação não precisa de servidor. Fechar a aba descarta a sessão: não há conta nem projeto salvo.' },
        { q: 'O que acontece com o som?', a: 'As faixas são reamostradas para a maior taxa entre elas, no mínimo 44,1 kHz, com interpolação linear. O WAV é o PCM de 16 bits dessa mix estéreo. O MP3 é codificado uma vez, no bitrate que você escolher, até 320 kbps. Se o pico da soma passar de 0,98, a mix inteira é escalada para o pico cair em 0,98. É uma mudança de ganho, não um compressor, e não cria uma segunda codificação.' },
        { q: 'O que isto não faz?', a: 'Não grava MIDI, não carrega instrumentos nem samples, não desenha curva de volume e não abaixa a música sob a voz sozinho. Um clipe por faixa, oito faixas, sem arquivo de projeto. Plugins, automação e uma sessão que você reabre amanhã ficam no Audacity ou num DAW de navegador como o BandLab.' },
        { q: 'Qual a diferença para juntar áudio?', a: 'Juntar músicas coloca os arquivos um depois do outro: um acaba e o próximo começa, com crossfade opcional. Esta página toca os dois ao mesmo tempo. Uma playlist num arquivo só é o juntador. Um vocal sobre um beat é esta página.' },
        { q: 'Funciona no celular?', a: 'Sim. A linha do tempo rola para o lado. Nível, pan, entrada e corte são controles e números, sem um arraste preciso. Chrome, Edge, Firefox e Safari atuais decodificam os formatos comuns. Se um arquivo não decodificar, ele é pulado e os outros ficam.' },
        { q: 'Por que só 8 faixas?', a: 'Cada faixa é decodificada na memória antes de tocar. Oito arquivos estéreo já são muito para uma aba no celular. Uma produção de 16 faixas com plugins é outra ferramenta.' },
      ],
      screenshotsAlt: [
        'Editor multipista: área de soltar, nada é enviado a um servidor',
        'Editor multipista: área de trabalho com o arquivo carregado',
        'Editor multipista: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Uma mixer pequena, não uma DAW',
          paragraphs: [
            'Cada arquivo é um clipe na própria faixa. Você define volume, pan, mudo, solo e onde o clipe começa. Até oito faixas tocam juntas e são exportadas como um arquivo.',
            'Esta página não carrega plugins e não salva um projeto que você possa reabrir. Até 8 faixas.',
          ],
        },
        {
          heading: 'Para que usar',
          paragraphs: [
            'Serve para pilhas curtas que você faria em um programa maior:',
          ],
          bullets: [
            'Uma faixa de voz sobre uma base musical, com a voz mais alta.',
            'Duas tomadas alinhadas pelo tempo de início, uma em solo enquanto você compara.',
            'Uma imagem estéreo ajustada com pan, e uma exportação única.',
          ],
        },
        {
          heading: 'A sessão termina com a aba',
          paragraphs: [
            'Nada é enviado e não existe arquivo de projeto. Se você fechar a aba antes de exportar, a mixagem se perde.',
            'Arquivos que devem tocar em sequência, não em cima um do outro, ficam no [juntador de áudio](/audio-joiner). Lá o crossfade vai de 0 a 5 segundos, em passos de 0,5. Esta página empilha faixas.',
          ],
        },
      ],
      dropHint: 'Solte dois ou mais áudios para empilhar',
    },
    'split-mp3': {
      cardLine: 'Corte um arquivo em 2 a 16 partes iguais e baixe tudo junto.',
      name: 'Dividir MP3',
      shortName: 'Divisor',
      title: 'Dividir MP3 — de 2 a 16 arquivos iguais',
      description: 'Corte uma gravação em 2 a 16 arquivos iguais e baixe um zip. O WAV guarda as amostras do corte. Cada MP3 é codificado uma vez, até 320 kbps.',
      h1: 'Dividir MP3 em vários arquivos',
      heroAlt: 'Cortar uma gravação em arquivos iguais',
      subtitle: 'Partes iguais, de 2 a 16, juntas num zip.',
      intro: 'Este divisor de áudio corta um arquivo em partes iguais. A conta vai de 2 a 16 e começa em 2, ou seja, em duas partes. Cada parte tem o mesmo tamanho, com no máximo uma amostra de diferença. Arraste uma seleção para dividir só esse trecho. Sem seleção, o arquivo inteiro é dividido. As partes baixam num zip. A decodificação e os cortes ficam no seu navegador.',
      usesHeading: 'Usos comuns de dividir MP3',
      uses: [
        'Dividir o grandalhão: um MP3 grande demais para enviar, cortado em pedaços que passam.',
        'Memos em doses: divida um memo longo em partes iguais e digira uma a uma.',
        'Adaptar ao app: se o aplicativo recusa arquivo grande, corte na metade e ele vai.',
        'Prática em trechos: divida a aula de idioma ou o treino em partes iguais e pratique uma a uma.',
        'Arquivo em fatias: corte gravações longas em fatias fixas para achar depois.',
        'Material candidato: reparta em vários candidatos, escolha o melhor e corte fino no cortador.',
      ],
      why: [
        {
          icon: 'scissors',
          title: 'Corta na amostra, igual até o fio',
          text: 'Os pedaços saem iguais, com no máximo uma amostra de diferença; sem sobreposição nem vão. Com seleção, corta só o trecho; sem, o arquivo inteiro.',
        },
        {
          icon: 'layers',
          title: 'Uma exportação, empacotada em ZIP',
          text: 'De 2 a 16 partes à escolha, numeradas em ordem e embrulhadas num ZIP. MP3 até 320 kbps, WAV guarda as amostras originais.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. Ele é decodificado no seu aparelho.' },
        { name: 'Defina o número', text: 'As partes vão de 2 a 16. A linha de status diz quantos arquivos saem e quanto dura cada um, mais ou menos. Arraste a forma de onda se só um trecho deve ser dividido.' },
        { name: 'Baixe o zip', text: 'Exporte MP3 ou WAV. O download é um zip com o nome do arquivo, e dentro ficam a parte 1, a parte 2 e o resto.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O arquivo é decodificado no seu navegador, cortado lá e empacotado num zip lá. Depois que a página carregou, você pode ficar offline e a exportação continua. WAV não pede outro download. O MP3 codifica offline depois que o codificador carregou uma vez.' },
        { q: 'Onde caem os cortes?', a: 'Nas bordas de amostra. As partes têm o mesmo tamanho, e quando a conta de amostras não divide certo as primeiras ficam uma amostra mais longas. Nada se sobrepõe e nada se perde. O WAV são essas amostras. Cada MP3 é codificado uma vez, no bitrate que você escolhe, até 320 kbps. Se você tocar esses MP3 em sequência, a emenda pode mostrar alguns milissegundos de enchimento do codec.' },
        { q: 'Corta no silêncio ou em capítulos?', a: 'Não. Os cortes são de tempo igual, não uma busca por pausas, marcas de capítulo ou uma música nova. Um compasso quieto é cortado onde o relógio diz. As partes só vão de 2 a 16. Um arquivo com menos amostras do que partes é recusado.' },
        { q: 'Qual a diferença para cortar?', a: 'Cortar áudio e Cortar MP3 guardam um trecho, ou apagam um trecho, e salvam um arquivo. Esta página escreve vários arquivos do mesmo tamanho. Juntar músicas faz o contrário: coloca arquivos diferentes em fila. Remover silêncio é a página que segue as pausas.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle de partes, a forma de onda e o download funcionam no toque no Chrome, Edge, Firefox e Safari atuais. No iPhone, o Safari guarda o zip no app Arquivos.' },
      ],
      screenshotsAlt: [
        'Dividir MP3: área de soltar, nada é enviado a um servidor',
        'Dividir MP3: área de trabalho com o arquivo carregado',
        'Dividir MP3: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Cortes iguais, nas amostras',
          paragraphs: [
            'As partes vão de 2 a 16. Começa em 2. Cada parte tem a mesma duração, exceto que as primeiras partes podem ter uma amostra a mais quando a duração não divide por igual. A próxima parte começa na amostra seguinte ao fim da anterior. Não há sobreposição nem intervalo.',
            'Arraste uma seleção para dividir só aquele trecho. Sem seleção, o arquivo inteiro é dividido. WAV são essas amostras. Uma exportação MP3 codifica cada parte uma vez, no bitrate que você escolher, até 320 kbps. Tocar os MP3 em sequência pode mostrar alguns milissegundos de preenchimento do codec na emenda. As amostras em si não foram sobrepostas.',
          ],
        },
        {
          heading: 'Um arquivo, vários downloads',
          paragraphs: [
            'O zip é como as partes saem do navegador:',
          ],
          bullets: [
            'Um recado de voz longo cortado em pedaços iguais que você pode enviar um por vez.',
            'Uma música dividida em duas partes quando um app de mensagem recusa o arquivo inteiro.',
            'Uma tomada que você quer como arquivos separados, não um clipe cortado.',
          ],
        },
        {
          heading: 'Não é o cortador nem uma varredura de silêncio',
          paragraphs: [
            'O cortador de áudio e o cortador de MP3 mantêm um trecho, ou apagam um trecho, e salvam um arquivo. Esta página grava vários arquivos de duração igual. O juntador de áudio faz o inverso: coloca arquivos diferentes em fila.',
            'Ele não procura silêncio, marcas de capítulo nem uma nova música. Um compasso baixo é cortado onde o relógio disser. Se você precisa que os cortes sigam as pausas, use o removedor de silêncio, depois corte o que sobrar.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio, ou clique para escolher',
      exportLabel: 'Baixar partes',
    },
    'stereo-to-mono': {
      cardLine: 'Tire a média de cada canal em um e baixe esse arquivo.',
      name: 'Estéreo para mono',
      shortName: 'Para mono',
      title: 'Estéreo para mono — um canal na média',
      description: 'Tire a média dos canais em um e baixe. O WAV guarda essas amostras. Um MP3 codifica esse mono uma vez, até 320 kbps.',
      h1: 'Estéreo para mono',
      heroAlt: 'Tirar a média de um estéreo em um canal',
      subtitle: 'Um canal: a média de cada canal do arquivo.',
      intro: 'Esta página escreve um canal. Cada amostra é a média dos canais do arquivo, então esquerda e direita se encontram no centro. Um arquivo que já é um canal é copiado. A decodificação e a média ficam no seu navegador.',
      usesHeading: 'Usos comuns de estéreo para mono',
      uses: [
        'Ajuste a um alto-falante: quando aparelhos de um alto-falante tocam os lados de forma desigual, dobre para mono.',
        'Envios recusados: um tocador ou formulário que só aceita mono — converta uma cópia para ele.',
        'Alinhar a voz: fala em dois canais cujos lados não coincidem, média em um só.',
        'Preparar a transcrição: transcritores ficam mais estáveis em mono.',
        'Trilhas de vídeo: padronize o áudio de um projeto de vídeo em mono.',
        'Dobra em lote: transforme uma pilha inteira de estéreo em mono de uma vez.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Média amostra por amostra',
          text: 'Esquerda e direita são somadas na média uma amostra por vez — nada se perde de nenhum dos lados; os dois ficam no arquivo.',
        },
        {
          icon: 'layers',
          title: 'Conversão em lote',
          text: 'Os arquivos compartilham ajustes, convertem em ordem e vão para um ZIP.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. É decodificado no seu dispositivo.' },
        { name: 'Exporte a média', text: 'Não há controle de largura. A exportação escreve um canal. Toque antes se quiser ouvir a média.' },
        { name: 'Abra o arquivo', text: 'Um player que mostra o número de canais deve dizer um. O WAV são essas amostras na média. O MP3 as codifica uma vez, até 320 kbps.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O arquivo é decodificado no seu navegador e a média é feita lá. Depois que a página carregou, você pode ficar offline e a exportação continua. WAV não pede outro download. O MP3 codifica offline depois que o codificador carregou uma vez.' },
        { q: 'Como o mono é feito?', a: 'Cada amostra é a soma dos canais naquele instante, dividida pelo número de canais. Dois canais são (esquerda + direita) / 2. Um arquivo que já é um canal é copiado. O WAV guarda essas amostras. Um MP3 codifica esse canal uma vez, no bitrate que você escolhe, até 320 kbps.' },
        { q: 'Dá para transformar mono em estéreo?', a: 'Não. Esta página não inventa um segundo canal. Copiar um canal para a esquerda e a direita ainda é um sinal, e é outro trabalho. O arquivo que você baixa aqui tem um canal.' },
        { q: 'Qual a diferença para cortar?', a: 'Cortar áudio guarda um trecho de tempo e deixa o número de canais. Converter MP3 para WAV muda o recipiente e também deixa os canais. Esta página muda o número de canais e mantém a duração.' },
        { q: 'Funciona no celular?', a: 'Sim. Soltar, tocar e baixar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Estéreo para mono: área de soltar, nada é enviado a um servidor',
        'Estéreo para mono: área de trabalho com o arquivo carregado',
        'Estéreo para mono: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'A média, amostra por amostra',
          paragraphs: [
            'Cada amostra de saída é a soma dos canais naquele momento, dividida por quantos canais o arquivo tem. Dois canais significa (esquerdo + direito) / 2. Um canal é copiado para um novo buffer. A duração não muda.',
            'A página não constrói uma imagem estéreo, um controle de largura nem um segundo arquivo. A exportação é um canal. WAV são essas amostras. Um MP3 codifica esse arquivo mono uma vez, no bitrate que você escolher, até 320 kbps.',
          ],
        },
        {
          heading: 'Para que serve o canal único',
          paragraphs: [
            'A média é todo o trabalho:',
          ],
          bullets: [
            'Um recado de voz que deve tocar igual em uma caixa só.',
            'Um arquivo que um app só mono recusou porque ainda tinha dois canais.',
            'Uma mixagem que você quer no meio, não espalhada entre esquerda e direita.',
          ],
        },
        {
          heading: 'Não é um corte nem um estéreo falso',
          paragraphs: [
            'O cortador de áudio mantém um trecho e deixa os canais como estavam. MP3 para WAV muda o formato e também deixa os canais. Esta página mantém a duração e grava um canal.',
            'Ela não transforma um canal em dois. Duplicar um canal para um player mostrar estéreo ainda carrega um sinal. Não é isso que esta exportação faz.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio, ou clique para escolher',
      exportLabel: 'Baixar mono',
    },
    bitcrusher: {
      cardLine: 'Quantize para 1–16 bits e segure cada degrau por até 32 amostras.',
      name: 'Bitcrusher',
      shortName: 'Crush',
      title: 'Bitcrusher online — de 1 a 16 bits',
      description: 'Quantize de 16 bits até 1, e segure cada degrau por até 32 amostras. O WAV guarda as amostras esmagadas. O MP3 as codifica uma vez, até 320 kbps.',
      h1: 'Bitcrusher online',
      heroAlt: 'Transformar uma onda lisa em degraus',
      subtitle: 'Bits de 1 a 16, e uma espera de 1 a 32 amostras.',
      intro: 'Este bitcrusher online reduz quantos níveis cada amostra pode tomar e depois segura esse nível por algumas amostras. O estéreo continua estéreo: cada canal é esmagado sozinho. Arraste uma seleção para esmagar só esse trecho. A decodificação e o esmagamento ficam no seu navegador.',
      usesHeading: 'Usos comuns do bitcrusher',
      uses: [
        'Vozes de console antigo: derrube uma voz em bits até soar como uma máquina de 8 bits.',
        'Grão em loops de bateria: um loop onde os degraus continuam audíveis no groove.',
        'Eletrônica retrô: quantize uma linha de synth com esse sabor vintage.',
        'Design sonoro de jogos: baixa precisão para bipes de interface.',
        'Textura de ficção científica: profundidade extrema deixa voz ou ambiente mecânicos.',
        'Camada lo-fi: quantização leve acrescenta grão à faixa inteira.',
      ],
      why: [
        {
          icon: 'sliders',
          title: 'Dois botões definem o timbre',
          text: 'A profundidade de bits (1-16) define o tamanho dos degraus; o hold (até 32 amostras), a densidade do grão — é daí que nasce o som de console antigo.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'A quantização termina no seu navegador e o WAV guarda as amostras esmagadas.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. É decodificado no seu dispositivo.' },
        { name: 'Ajuste bits e espera', text: 'Os bits vão de 1 a 16 e começam em 8. A espera vai de 1 a 32 e começa em 2. Toque para ouvir. Arraste a forma de onda se só um trecho deve ser esmagado.' },
        { name: 'Exporte', text: 'O WAV guarda as amostras em degrau. O MP3 as codifica uma vez, até 320 kbps, e pode suavizar os degraus.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O arquivo é decodificado no seu navegador e esmagado lá. Depois que a página carregou, você pode ficar offline e a exportação continua. WAV não pede outro download. O MP3 codifica offline depois que o codificador carregou uma vez.' },
        { q: 'O que bits e espera fazem?', a: 'Os bits definem o número de níveis. Em 16 bits, uma amostra em escala cheia fica no lugar se a espera é 1. Em 1 bit, uma amostra vira cima, baixo ou silêncio. A espera repete o nível atual por tantas amostras: espera 4 mantém um valor por quatro amostras e depois pega o próximo degrau. Cada canal é esmagado sozinho, então um estéreo continua estéreo.' },
        { q: 'O MP3 guarda os degraus?', a: 'O WAV são as amostras esmagadas. Um MP3 as codifica uma vez, no bitrate que você escolhe, até 320 kbps. O codificador pode arredondar os degraus agudos. Se os degraus têm de ficar, exporte WAV.' },
        { q: 'Qual a diferença para distorcer?', a: 'Distorcer áudio dobra a onda por uma curva suave. Esta página troca as amostras por uma lista curta de níveis e depois os segura. Eco acrescenta cópias mais tarde. O filtro passa-baixa abaixa os agudos. Nenhum desses é um controle de profundidade de bits.' },
        { q: 'Funciona no celular?', a: 'Sim. O controle de bits, o de espera, a forma de onda e o download funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Bitcrusher: área de soltar, nada é enviado a um servidor',
        'Bitcrusher: área de trabalho com o arquivo carregado',
        'Bitcrusher: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Níveis, depois uma retenção',
          paragraphs: [
            'Os bits vão de 1 a 16. Começa em 8. Uma amostra é arredondada para o nível mais próximo nessa faixa. Em 1 bit o nível é só cima, baixo ou silêncio. Em 16 bits uma amostra na escala cheia continua na escala cheia quando a retenção é 1.',
            'A retenção vai de 1 a 32 e começa em 2. O nível atual é repetido por essa quantidade de amostras, então a próxima amostra define um novo nível. Esquerdo e direito são esmagados separadamente. A duração não muda.',
          ],
        },
        {
          heading: 'O que ouvir',
          paragraphs: [
            'Os dois números fazem trabalhos diferentes:',
          ],
          bullets: [
            'Os bits vão de 1 a 16 e começam em 8.',
            'A retenção vai de 1 a 32 amostras e começa em 2. Retenção 1 mantém cada amostra.',
            'Arraste uma seleção quando só uma frase deve ser esmagada. Sem seleção, o arquivo inteiro é esmagado.',
          ],
        },
        {
          heading: 'Não é o distorcedor',
          paragraphs: [
            'O distorcedor de áudio é uma curva suave, de clip leve a clip duro. Esta página é degraus e uma retenção. O eco adiciona cópias posteriores. O filtro passa-baixa só abaixa os agudos.',
            'WAV mantém as amostras esmagadas. Um MP3 as codifica uma vez, até 320 kbps, e pode suavizar os cantos. Se os degraus precisam sobreviver, use WAV.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio, ou clique para escolher',
      exportLabel: 'Exportar esmagado',
    },
    '432-hz-converter': {
      cardLine: 'Baixe o tom em cerca de 0.32 semitons e mantenha a duração.',
      name: 'Conversor 432 Hz',
      shortName: '432 Hz',
      title: 'Conversor 432 Hz — mesma duração, 0.32 abaixo',
      description: 'Baixe o tom em 12*log2(432/440), cerca de 0.32 semitons, e mantenha a duração. O WAV é esse deslocamento. O MP3 o codifica uma vez, até 320 kbps.',
      h1: 'Conversor 432 Hz — Conversor para 432 Hz',
      heroAlt: 'Baixar um arquivo em cerca de 0.32 semitons',
      subtitle: 'O arquivo inteiro desce cerca de 0.32 semitons. A duração fica.',
      intro: 'Este conversor desloca o arquivo inteiro em 12 vezes o log2 de 432 sobre 440, cerca de 0.32 semitons para baixo. Um tom de 440 Hz se aproxima de 432 Hz. A duração não muda, e as notas não são afinadas uma a uma. A decodificação e o deslocamento ficam no seu navegador.',
      usesHeading: 'Usos comuns do conversor para 432 Hz',
      uses: [
        'Preferência de afinação: mova uma faixa afinada em 440 Hz para o 432 Hz que você prefere.',
        'Loops que precisam continuar encaixando: só o tom desloca e a duração fica, então o loop segue alinhado.',
        'Álbuns inteiros: mova várias faixas para 432 Hz de uma vez.',
        'Escuta A/B: guarde uma cópia em 440 e outra em 432 e compare você mesmo.',
        'Áudio de meditação: unifique material de meditação ou relaxamento em 432 Hz.',
        'Backups de instrumento: guarde o original e exporte a versão 432 separada.',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Só o tom, a duração intacta',
          text: 'Deslocado com precisão por 12·log₂(432/440) — cerca de 0,32 semitons: duração, velocidade e ritmo não mudam nada.',
        },
        {
          icon: 'lock-simple',
          title: 'Processado localmente',
          text: 'O deslocamento termina no seu navegador; o áudio nunca é enviado.',
        },
      ],
      howTo: [
        { name: 'Solte o áudio', text: 'Qualquer MP3, WAV, M4A, OGG ou FLAC. É decodificado no seu dispositivo.' },
        { name: 'Ouça o deslocamento', text: 'A prévia é o arquivo deslocado. Nesta página não há controle de semitom, porque um semitom arredondado seria zero e o arquivo não se moveria.' },
        { name: 'Exporte', text: 'A duração coincide com o arquivo que você soltou. O WAV são as amostras deslocadas. O MP3 as codifica uma vez, até 320 kbps.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O arquivo é decodificado no seu navegador e deslocado lá. Depois que a página carregou, você pode ficar offline e a exportação continua. WAV não pede outro download. O MP3 codifica offline depois que o codificador carregou uma vez.' },
        { q: 'Quanto ele se move?', a: 'O deslocamento é 12 vezes o log2 de 432 sobre 440, cerca de 0.3177 semitons para baixo, e a página usa essa fração. Ela não arredonda para o semitom inteiro mais próximo, que seria zero e deixaria o arquivo igual. Um tom de 440 Hz se aproxima de 432 Hz. O resto do arquivo se move o mesmo tanto. O WAV são as amostras deslocadas. Um MP3 as codifica uma vez, no bitrate que você escolhe, até 320 kbps.' },
        { q: 'A duração muda?', a: 'Não. Isto é mudança de tom, não de velocidade. O alterador de tempo muda a duração. Alterar velocidade do áudio também muda a duração, a menos que você mantenha o tom. Aqui a duração fica e o tom desce.' },
        { q: 'Dá para reafinar uma nota?', a: 'Não. O arquivo inteiro se move junto. Um acorde não tem as notas puxadas para 432 Hz uma a uma. Um arquivo com menos de 32 amostras volta igual, porque o deslocamento precisa desse áudio. Esta página não diz que o resultado é mais saudável, mais calmo ou melhor.' },
        { q: 'Funciona no celular?', a: 'Sim. Soltar, tocar e baixar funcionam no toque no Chrome, Edge, Firefox e Safari atuais.' },
      ],
      screenshotsAlt: [
        'Conversor 432 Hz: área de soltar, nada é enviado a um servidor',
        'Conversor 432 Hz: área de trabalho com o arquivo carregado',
        'Conversor 432 Hz: depois de exportar, a linha de status mostra o nome do arquivo baixado',
      ],
      sections: [
        {
          heading: 'Um deslocamento para o arquivo inteiro',
          paragraphs: [
            'A quantidade é 12 vezes log2 de 432 sobre 440, cerca de 0,32 semitons para baixo. A página passa essa fração adiante. Arredondar para um semitom inteiro faria zero, e o arquivo não se moveria.',
            'Um tom de 440 Hz se move para perto de 432 Hz. Todo outro tom se move na mesma fração. A duração fica igual. WAV são as amostras deslocadas. Um MP3 as codifica uma vez, no bitrate que você escolher, até 320 kbps.',
          ],
        },
        {
          heading: 'O que fica no lugar',
          paragraphs: [
            'O deslocamento é todo o trabalho:',
          ],
          bullets: [
            'A duração bate com o arquivo que você soltou.',
            'Um acorde se move junto. As notas não são puxadas para 432 Hz uma a uma.',
            'Um arquivo com menos de 32 amostras é devolvido sem mudança.',
          ],
        },
        {
          heading: 'Não é uma mudança de tempo',
          paragraphs: [
            'O alterador de tom deste site move em semitons inteiros. Esta página usa a fração, cerca de 0,32 para baixo, então o resultado não é o mesmo que deixar aquele controle em zero.',
            'O mudar tempo e o acelerar áudio mudam a duração. Esta página não. Ela também não diz que o resultado é mais saudável ou melhor. Ela só move o tom.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio, ou clique para escolher',
      exportLabel: 'Baixar 432 Hz',
    },
    'audio-to-midi': {
      cardLine: 'Transforme uma melodia, uma voz ou um piano solo em MIDI. Uma mix completa sai errada.',
      name: 'Áudio para MIDI',
      shortName: 'Áudio para MIDI',
      title: 'Áudio para MIDI — um instrumento, 3 minutos',
      description: 'Transforme uma melodia, uma voz ou um piano solo em MIDI. Uma mix completa, bateria ou acordes densos saem errados. Até 3 minutos. Nada é enviado.',
      h1: 'Áudio para MIDI — notas de um instrumento',
      heroAlt: 'Transformar uma melodia ou um piano solo em notas MIDI',
      subtitle: 'Um arquivo .mid no navegador. Até 3 minutos de um instrumento.',
      intro: 'Solte uma melodia, uma voz cantada ou um piano solo. Esta página escreve um MIDI que abre no GarageBand, no Ableton ou no Logic: altura, início, duração e velocity de cada nota. O Basic Pitch da Spotify roda nesta aba. O áudio não é enviado. O modelo tem menos de 1 MB e baixa uma vez deste site. Uma mix completa, bateria ou acordes densos saem errados. Acima de 3 minutos, corte antes.',
      usesHeading: 'Usos comuns de áudio para MIDI',
      uses: [
        'Tararear para partitura: transforme a melodia tarareada em MIDI e mova as notas no DAW sem regravar.',
        'Notação de piano: uma toma de piano solo vira notas sem digitar a partitura à mão.',
        'Trocar o som: o MIDI toca em qualquer instrumento — do piano para as cordas.',
        'Conferir o exercício: converta a própria execução em notas e compare com a partitura.',
        'Começo de arranjo: um demo de uma faixa vira MIDI e o arranjo cresce daí.',
        'Arquivo de melodias: guarde a melodia da inspiração em MIDI na sua biblioteca.',
      ],
      why: [
        {
          icon: 'note',
          title: 'Notas que você pode editar',
          text: 'O que sai são notas MIDI, não áudio: tom e duração chegam ao DAW prontos para mudar.',
        },
        {
          icon: 'file',
          title: 'Um instrumento funciona melhor',
          text: 'Uma melodia única ou um instrumento único dá o resultado mais limpo; uma mixagem inteira não é o prato dele — a página diz isso com honestidade.',
        },
      ],
      howTo: [
        { name: 'Solte um instrumento', text: 'Adicione MP3, WAV, M4A ou um vídeo com trilha. O navegador decodifica. Nada é enviado. Acima de 3 minutos fica bloqueado até você cortar.' },
        { name: 'Converter em notas', text: 'A primeira vez baixa o modelo, menos de 1 MB, deste site. A página então lista as notas e a contagem.' },
        { name: 'Baixar o MIDI', text: 'Salve o .mid. É uma faixa de note-on e note-off. Esta página não tem prévia em áudio.' },
      ],
      faqs: [
        { q: 'Meu áudio é enviado?', a: 'Não. O navegador decodifica o arquivo e roda o Basic Pitch na aba. O único pedido de rede é o modelo, menos de 1 MB, deste site, na primeira vez. Depois o navegador pode reusar a cópia. O áudio em si não vai a lugar nenhum.' },
        { q: 'O que tem no arquivo MIDI?', a: 'Uma faixa, MIDI tipo 0. Cada nota tem altura de 21 a 108, início, duração e velocity. A marca de tempo é 120 para os instantes coincidirem com os segundos da gravação. Esse 120 não é o BPM da música. A faixa começa no piano General MIDI para o DAW ter um som. Não é uma gravação do instrumento original. WAV e MP3 não saem daqui.' },
        { q: 'O que vai sair errado?', a: 'Uma mix completa, bateria e acordes densos. O Basic Pitch foi feito para um instrumento de cada vez, e uma gravação cheia vira notas a mais ou nenhuma. O arquivo não tem curva de pitch bend, então um glissando vira uma nota firme. Não há reprodução, partitura nem separação de stems. Acima de 3 minutos é recusado. Corte no cortador de áudio e volte.' },
        { q: 'Qual a diferença para o tom e o BPM?', a: 'O tom e o BPM leem dois números e não escrevem arquivo. Esta página escreve notas. Ela não diz o tom nem o BPM. Leia isso no tom e BPM. Mover o tom do áudio original, sem fazer notas, é o alterador de tom.' },
        { q: 'Funciona no celular?', a: 'Sim, no Chrome, Edge, Firefox e Safari atuais. O limite é 3 minutos porque o modelo segura as notas na memória. Um celular com pouca memória pode falhar a conversão. O arquivo não muda, e você pode tentar um trecho mais curto. O download é um .mid.' },
        { q: 'Pesquisei isso no Logic Pro. É a mesma coisa?', a: 'Não. O Logic tem o próprio comando de áudio para MIDI na faixa. Esta página é para o navegador, quando o Logic não está aberto. O .mid pode ser arrastado para o Logic depois. Ela não remove um dispositivo MIDI no macOS e não edita um projeto do Logic.' },
      ],
      sections: [
        {
          heading: 'Um instrumento, na aba',
          paragraphs: [
            'O Basic Pitch escuta um canal a 22050 Hz. O estéreo é mixado para mono antes do modelo rodar. Os pesos têm menos de 1 MB e vêm deste site uma vez.',
            'Ele é feito para uma melodia, uma voz ou um piano solo. Uma mixagem completa, bateria ou um empilhamento grosso de acordes está fora do que este modelo segura.',
          ],
        },
        {
          heading: 'O que o arquivo realmente contém',
          paragraphs: [
            'O download é um arquivo MIDI padrão, não áudio:',
          ],
          bullets: [
            'Tom, início, duração e velocidade. Nenhuma curva de pitch bend.',
            'Marca de tempo 120, então os tempos batem com a gravação em segundos. Esse não é o BPM da música.',
            'Uma faixa, começando no piano General MIDI, para uma DAW ter um som para tocar.',
          ],
        },
        {
          heading: 'O que esta página não faz',
          paragraphs: [
            'Ela não toca o MIDI de volta, não imprime partitura e não divide uma música em stems. Não nomeia acordes.',
            'Mais de 3 minutos é recusado. Corte primeiro. O conversor do próprio Logic fica no Logic. Esta página não abre um projeto do Logic.',
          ],
        },
      ],
      dropHint: 'Solte um arquivo de áudio, ou clique para escolher',
      exportLabel: 'Converter para MIDI',
    },
    soundboard: {
      cardLine: "Um painel com os seus sons: grave ou envie clipes e dispare ao vivo.",
      name: "Soundboard",
      shortName: "Soundboard",
      title: "Soundboard — onze sons, depois os seus",
      description: "Toque ou pressione uma tecla e vários clipes tocam ao mesmo tempo. Onze sons já estão sintetizados na página; corte os seus e guarde o painel num JSON.",
      h1: "Soundboard, com onze sons já no painel",
      subtitle: "Toque num quadrado ou pressione a tecla dele. Vários sons tocam juntos. De meio segundo a cinco segundos é a duração útil.",
      intro: "Grave um clipe no microfone ou envie um arquivo de áudio, corte a parte que importa e ela vira um botão do painel. Toque nos botões ou pressione as teclas de número e letras para disparar sons ao vivo — vários ao mesmo tempo, que é exatamente a graça de um soundboard. Onze sons embutidos, sintetizados na página, deixam o painel funcionando antes de você adicionar qualquer coisa. Predefinições carregam um set inicial para streaming, podcast ou sala de aula. Nada é enviado: decodificação, corte e reprodução acontecem nesta aba, e o painel viaja num arquivo JSON que você mesmo exporta e importa.",
      usesHeading: "O que você pode fazer",
      uses: [
        "Disparar sons de meme, stingers e aplausos ao vivo na stream, vários de uma vez.",
        "Guardar buzzers de quiz e sons de acerto para a sala de aula — quadrados grandes, fáceis de tocar na tela.",
        "Cortar um arquivo longo nos cinco botões que você realmente usa, cada um com seu atalho.",
      ],
      howTo: [
        { name: "Comece por uma predefinição ou um som", text: "O painel abre com onze sons sintetizados. Uma predefinição acima da grade troca o painel por um set inicial de streaming, podcast ou sala de aula. Enviar áudio e Gravar adicionam os seus." },
        { name: "Corte cada clipe", text: "O lápis no quadrado abre o editor: arraste as duas alças para manter a parte que quer, ouça em loop para conferir e aplique o corte. Aproveite para renomear e escolher a cor." },
        { name: "Toque e salve o painel", text: "Toque nos quadrados ou pressione as teclas indicadas — 1 a 0, depois Q W E R T Y U I O P. Esc para tudo. Exportar painel grava todos os sons num arquivo JSON; Importar painel lê de volta, e também lê painéis do soundtools.io." },
      ],
      faqs: [
        { q: "Algo é enviado?", a: "Não. Os arquivos são decodificados com a Web Audio API nesta aba, a gravação fica no seu aparelho e a reprodução é local. Exportar painel escreve o JSON direto no seu disco. Depois que a página carrega, tudo continua funcionando offline." },
        { q: "Qual é a qualidade dos sons?", a: "Os clipes mantêm a taxa de amostragem da decodificação. Exportar WAV de um som grava PCM de 16 bits nessa taxa. O arquivo do painel guarda cada som como texto WAV dentro do JSON, então nada é codificado duas vezes." },
        { q: "Isso entra no Discord ou numa chamada de jogo?", a: "Não. Discord, Zoom e jogos ouvem o seu microfone, não esta página. Apps como Voicemod e Resanance instalam um microfone virtual no Windows para as outras pessoas ouvirem o painel. Esta página não faz isso. Os sons saem pelas caixas ou pelo áudio do desktop, e o OBS grava isso. No celular, o painel toca no aparelho." },
        { q: "Qual a diferença do gravador de voz?", a: "O gravador de voz pega um clipe e entrega a um editor para cortar e exportar. Esta página guarda vários clipes e toca ao vivo pelas teclas. Serve para disparar, não para editar um arquivo." },
        { q: "Funciona no celular?", a: "Sim. Tocar nos quadrados, gravar e o corte funcionam no Chrome, Edge, Firefox e Safari atuais, inclusive iPhone e Android. Atalhos pedem teclado, então são no computador. No iPhone, a reprodução segue o botão de silencioso." },
        { q: "Como eu salvo o painel?", a: "Nada fica guardado no navegador. Exporte o painel antes de fechar a aba, senão ele some. Importar painel traz o JSON de volta neste aparelho ou noutro. O mesmo botão lê um painel do soundtools.io: cada botão com áudio passa, e uma cor em degradê vira a cor mais próxima deste painel." },
        { q: "Quais arquivos, e de que duração?", a: "Enviar aceita MP3, WAV, M4A, OGG, FLAC e AAC, o que o navegador conseguir decodificar. Um arquivo com mais de 60 segundos é ignorado: corte antes no cortador de áudio. A duração útil no painel vai de meio segundo a cinco segundos. Não há um número fixo de quadrados. O teto é a memória da aba." },
        { q: "Posso mudar o tom ou colocar eco?", a: "Não nesta página. Exporte o WAV do quadrado e abra esse arquivo no alterador de tom (o tom muda, a duração fica) ou na página de slowed e reverb. Traga o resultado de volta com Enviar áudio ou Substituir áudio." },
      ],
      sections: [
        {
          heading: 'Como o painel funciona',
          paragraphs: [
            'Um soundboard é um trabalho só: o som curto certo, agora, sem procurar em uma pasta. Cada quadrado é um clipe. Toque nele e ele toca na hora. Toque em outro enquanto ele ainda toca e os dois tocam. Essa sobreposição é o ponto.',
            'As teclas seguem a ordem do painel: 1 a 9, depois 0, depois a fileira de letras de cima. Esc para tudo. Uma predefinição acima da grade substitui o conjunto inteiro por um inicial para streaming, podcast, sala de aula ou um painel vazio.',
          ],
        },
        {
          heading: 'Faça seus próprios clipes',
          paragraphs: [
            'O envio aceita MP3, WAV, M4A, OGG, FLAC ou AAC e decodifica no navegador. O gravar usa o microfone. O lápis então abre o editor de corte: arraste as duas alças, reproduza a seleção em loop e aplique.',
            'Curto é o ponto. Meio segundo a cinco segundos cobre uma piada, uma buzina ou um boom. Substituir áudio troca o som sob um quadrado e mantém o nome, a cor e a tecla. Um arquivo com mais de 60 segundos é pulado no envio.',
          ],
          bullets: [
            'Exportar WAV em um som grava PCM de 16 bits na taxa de amostragem daquele clipe.',
            'A cor em um quadrado está lá para você achar a tecla durante uma transmissão.',
            'Os onze sons embutidos são sintetizados na página. Sem download, sem biblioteca, sem gravação de outra pessoa.',
          ],
        },
        {
          heading: 'O que ele não faz',
          paragraphs: [
            'Ele não coloca sons em uma chamada. Discord, jogos e chat de voz ouvem o microfone. Colocar o painel nesse caminho exige um app de desktop com um dispositivo de áudio virtual, como Voicemod ou Resanance no Windows. Para uma transmissão, o caminho honesto é o áudio do desktop: os sons saem da máquina, e o OBS captura isso.',
            'Ele não lembra o painel entre visitas. Exporte o painel antes de fechar a aba, depois importe na próxima vez, incluindo um arquivo de painel do soundtools.io. Ele não pesquisa uma biblioteca de memes. Os sons embutidos são efeitos genéricos sintetizados aqui. Todo o resto é um arquivo que você traz.',
          ],
        },
      ],
      dropHint: "Sem arquivo — toque num quadrado ou adicione o seu",
    },
    "music-visualizer": {
      cardLine: "Transforme uma música em um vídeo de espectro animado, sem enviar nada.",
      name: "Visualizador de música",
      shortName: "Visualizador",
      title: "Visualizador de música — sua música como vídeo de espectro",
      description: "Transforme uma música em um vídeo de espectro animado: barras, anel ou osciloscópio em até 1080p, gravado ao vivo no navegador. Nada é enviado.",
      h1: "Visualizador de música — transforme uma música em vídeo de espectro",
      subtitle: "Toque uma música, veja o espectro se mexer e grave como vídeo — desenhado e capturado no seu dispositivo.",
      intro: "Esta página transforma uma música naquele tipo de vídeo de fundo que o YouTube, Shorts e Reels usam: o espectro da música, animado em tempo real e gravado direto da tela. Solte um arquivo de áudio, escolha o visual e o tamanho, aperte gravar, e quando a música termina o vídeo cai nos seus downloads. Tudo roda no navegador — o áudio é decodificado localmente e nunca enviado.",
      usesHeading: "O que a gente faz com ele",
      uses: [
        "Dar a uma faixa um vídeo para YouTube, Shorts ou TikTok sem abrir um editor.",
        "Postar uma música com um espectro em movimento, em vez de só uma capa parada.",
        "Gravar um fundo para um corte de podcast, uma demo ou a tela de espera de uma live.",
      ],
      howTo: [
        { name: "Solte uma música", text: "Solte um arquivo de áudio no quadro ou clique para procurar. MP3, WAV, M4A, OGG, FLAC — tudo que o navegador souber decodificar." },
        { name: "Escolha o visual", text: "Escolha um estilo — barras de espectro, barras espelhadas, anel ou osciloscópio — e um tema. As duas cores continuam editáveis depois de aplicar um tema." },
        { name: "Escolha o quadro", text: "Escolha o tamanho do vídeo: 16:9 para YouTube, 9:16 vertical para Shorts e TikTok, quadrado para o feed ou um tamanho personalizado." },
        { name: "Grave o vídeo", text: "Aperte Gravar vídeo. A música toca uma vez enquanto o navegador captura a tela, e o arquivo baixa quando ela acaba." },
      ],
      faqs: [
        { q: "Minha música é enviada?", a: "Não. O arquivo é decodificado com a Web Audio API nesta aba, a animação é desenhada numa tela desta aba, e o gravador do próprio navegador captura essa tela com o áudio. O vídeo pronto é escrito direto no seu disco." },
        { q: "Que formato e qualidade tem o vídeo?", a: "Chrome, Edge e Firefox gravam WebM: vídeo VP9 ou VP8 com áudio Opus a 192 kbps, no tamanho escolhido até 1080p, 30 fps, cerca de 8 Mbps de vídeo. Algumas versões do Chrome oferecem MP4 — o navegador pega o primeiro contêiner que consegue gravar, e a extensão do arquivo segue." },
        { q: "Uma música de 3 minutos leva mesmo 3 minutos?", a: "Leva. O vídeo é capturado enquanto a música toca uma vez, em tempo real. É a troca honesta de gravar no seu dispositivo sem servidor: sem espera de envio, sem fila, sem limite de duração além do arquivo. Deixe a aba na frente enquanto grava — navegadores reduzem o desenho em abas de segundo plano, e a imagem congelaria enquanto o áudio continua." },
        { q: "Qual a diferença para o gerador de forma de onda?", a: "O gerador de forma de onda desenha um PNG parado do volume ao longo do tempo — uma imagem para capa ou post. Esta página anima o espectro de frequências enquanto a música toca e grava um vídeo. O mesmo arquivo entra e saem resultados opostos: imagem parada contra imagem em movimento." },
        { q: "Funciona no celular ou no iPhone?", a: "Chrome no Android toca e grava. Chrome, Edge e Firefox no computador gravam todos. O Safari no iPhone e iPad sabe tocar e mostrar a animação, mas não consegue gravar a tela, então o botão de gravar sai de lá — o caminho honesto é uma gravação de tela ou o computador." },
        { q: "Posso usar o vídeo comercialmente?", a: "O vídeo não tem marca d'água nem licença nossa: é seu arquivo. A música dentro dele é responsabilidade sua. Visualizadores feitos com suas próprias faixas, música licenciada ou áudio livre de royalties são seus para publicar." },
      ],
      sections: [
        {
          heading: 'O que a página realmente grava',
          paragraphs: [
            'A animação é desenhada em um canvas no tamanho que você escolheu, e o próprio gravador do navegador captura esse canvas mais o áudio que toca nele. Não há render em servidor nem marca d\'água: o arquivo é escrito pela aba, no momento em que a música termina.',
            'A gravação dura o mesmo que a música. Não há marca d\'água.',
          ],
        },
        {
          heading: 'Os quatro estilos',
          paragraphs: [
            'A imagem usa 64 bandas. Os temas definem as cores. O lado vai de 200 a 2160.',
          ],
          bullets: [
            'Barras de espectro sobem da borda inferior com um degradê para os picos.',
            'Barras espelhadas dobram as mesmas barras em torno do meio: o visual clássico de player.',
            'Anel organiza as bandas em um círculo.',
            'Osciloscópio desenha a própria forma de onda, uma linha que respira com a faixa.',
          ],
        },
        {
          heading: 'Onde os vídeos servem',
          paragraphs: [
            'As predefinições incluem 16:9 e 9:16. Um lado personalizado vai de 200 a 2160.',
            'O vídeo é sempre tão longo quanto o áudio, então corte a música primeiro se você só quer uma seção. Para uma imagem parada de uma faixa em vez de um vídeo, o gerador de forma de onda desenha uma a partir do mesmo arquivo.',
          ],
        },
      ],
      dropHint: "Solte um arquivo de áudio ou clique para procurar",
      exportLabel: "Gravar vídeo",
    },
  },
};
