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
    about: 'Sobre',
    privacy: 'Privacidade',
    guides: 'Guias',
    rights: 'Nenhum arquivo sai do seu aparelho.',
    clientSide: 'Processamento 100% no navegador',
    trustLocal: 'Processado no aparelho — nada é enviado',
    trustFree: 'Grátis, sem cadastro',
    trustClean: 'Sem marca d\'água',
    faqHeading: 'Perguntas frequentes',
    related: 'Ferramentas relacionadas',
    openTool: 'Abrir {name}',
    allTools: 'Todas as ferramentas de áudio',
    browseToolkit: 'Ver todas as ferramentas',
    home: 'Início',
    howTo: 'Como usar: {name}',
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
      wav: 'WAV · sem perdas',
      m4r: 'M4R · toque de iPhone',
    },
    categories: {
      cut: 'Cortar e recortar',
      merge: 'Juntar e converter',
      record: 'Gravar',
      effects: 'Efeitos e estúdio',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — até cerca de uma hora',
    dropLocal: 'Processado no aparelho — seu arquivo não sai desta aba',
    zoomOut: 'Diminuir zoom',
    zoomIn: 'Aumentar zoom',
    loadDifferent: 'Carregar outro arquivo',
    startOver: 'Começar de novo',
    waveform: 'Forma de onda. Arraste para selecionar um trecho.',
    play: 'Reproduzir seleção',
    pause: 'Pausar',
    hintSelect: 'Arraste na forma de onda para selecionar · Espaço para reproduzir',
    hintConvert: 'Espaço para reproduzir · nada é enviado',
    reverse: 'Reverter reprodução',
    normalize: 'Normalizar pico',
    speed: 'Velocidade',
    volume: 'Volume',
    reverb: 'Reverb',
    adjust: 'Ajustar — fade, volume, velocidade, reverso',
    fadeIn: 'Fade de entrada',
    fadeOut: 'Fade de saída',
    normalizeOverrides: 'Normalizar pico (substitui o volume)',
    undo: 'Desfazer a última alteração',
    cutMode: 'Modo de corte',
    keep: 'Manter seleção',
    deleteSel: 'Apagar seleção',
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
  },
  home: {
    title: 'Free Audio Editor — Edite áudio online, nada é enviado',
    description:
      'Editor de áudio online e grátis: corte, recorte, junte, reverta e converta no navegador. Sem cadastro, sem envio — seus arquivos não saem do aparelho.',
    appBlurb: 'Editor de áudio online e grátis — corte, recorte, junte e edite áudio no navegador.',
    badge: '100% no aparelho · nada é enviado',
    h1: 'Editor de áudio online e grátis',
    lede: 'Corte, recorte, junte e edite áudio direto no navegador. Sem cadastro, sem marca d\'água, sem envio — seus arquivos não saem do aparelho.',
    ctaTrim: 'Cortar um arquivo de áudio',
    ctaMerge: 'Juntar músicas',
    toolsHeading: 'Todas as ferramentas de áudio',
    mostUsed: 'Mais usadas',
    comingTitle: 'Em breve',
    comingBody: 'Mixer com crossfade, removedor de silêncio e mais — a mesma lógica de privacidade em primeiro lugar.',
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
  about: {
    title: 'Sobre o Free Audio Editor — ferramentas de áudio online, no seu aparelho',
    description:
      'O Free Audio Editor é um conjunto de ferramentas de áudio que priorizam a privacidade e rodam inteiramente no navegador — sem envio, sem cadastro, sem marca d\'água.',
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
    updated: 'Última atualização: 14 de outubro de 2026',
    sections: [
      {
        h: 'Seus arquivos de áudio',
        body: 'Cada ferramenta deste site processa o áudio inteiramente dentro do navegador, com a Web Audio API. Seus arquivos {em} — não existe endpoint de envio. Quando você fecha a aba, o áudio decodificado some da memória.',
        em: 'nunca são enviados aos nossos servidores',
      },
      {
        h: 'O que guardamos',
        body: 'Nada sobre você. O site não tem contas e não pede e-mail. Sua preferência de tema (claro ou escuro) fica no localStorage do navegador e nunca sai do aparelho.',
      },
      {
        h: 'Terceiros',
        body: 'O codificador de MP3 (lamejs) é carregado sob demanda de uma rede pública de distribuição de conteúdo (jsdelivr) na primeira vez que você exporta um MP3. A CDN vê um pedido comum de biblioteca; ela não recebe seu áudio nem nenhuma informação sobre ele. As fontes são servidas pelo próprio domínio deste site.',
      },
      {
        h: 'Análises e publicidade',
        body: 'Medimos o tráfego geral com o Vercel Web Analytics, que não usa cookies e registra apenas visualizações agregadas de página — nunca sua identidade e nunca seu áudio. Não veiculamos publicidade. Se qualquer um desses dois pontos mudar, esta política será atualizada antes.',
      },
    ],
    contactHeading: 'Contato',
    contactBefore: 'Dúvidas sobre esta política? Escreva para {email}.',
  },
  tools: {
    'audio-trimmer': {
      name: 'Cortar áudio',
      shortName: 'Cortar áudio',
      title: 'Cortar áudio — Recorte música online grátis',
      description:
        'Recorte músicas, recados de voz e podcasts no navegador. Selecione, ouça e salve em segundos — grátis, sem cadastro, e o áudio não sai do aparelho.',
      h1: 'Cortar áudio',
      subtitle: 'Recorte áudio online — grátis, direto no navegador. Nada é enviado.',
      intro:
        'Corte exatamente o trecho que você precisa de qualquer música, recado de voz, podcast ou gravação. Arraste na forma de onda para selecionar, ouça de volta e salve — o recorte inteiro acontece no seu aparelho, então até gravações longas ficam privadas e começam na hora.',
      howTo: [
        {
          name: 'Solte o arquivo',
          text: 'Arraste um arquivo de áudio ou vídeo para a área da forma de onda, ou clique para procurar. MP3, WAV, M4A, OGG, FLAC e outros são aceitos.',
        },
        {
          name: 'Selecione o que manter',
          text: 'Arraste pela forma de onda para marcar o trecho que você quer. Arraste as alças para ajustar, ou digite os tempos exatos de início e fim.',
        },
        {
          name: 'Ouça e salve',
          text: 'Aperte play para ouvir só a seleção e clique em Exportar para baixar o arquivo recortado em MP3 ou WAV.',
        },
      ],
      faqs: [
        {
          q: 'Esse cortador de áudio é mesmo grátis?',
          a: 'Sim. Cada recorte e cada exportação são grátis, sem cadastro e sem marca d\'água. A ferramenta roda inteiramente no navegador, então não há custo de servidor para repassar a você.',
        },
        {
          q: 'Meu áudio é enviado para um servidor?',
          a: 'Não. O arquivo é decodificado e processado pelo seu próprio navegador, com a Web Audio API. Você pode ficar offline depois de carregar a página e o cortador continua funcionando — nada é enviado para lugar nenhum.',
        },
        {
          q: 'Quais formatos eu posso recortar?',
          a: 'O navegador decodifica MP3, WAV, M4A/AAC, OGG, FLAC e áudio em WebM. Você pode salvar o resultado como MP3 (128–320 kbps) ou WAV sem perdas.',
        },
        {
          q: 'Recortar reduz a qualidade do áudio?',
          a: 'Salvar em WAV é bit a bit no trecho que você mantém — sem recompactar. Salvar em MP3 recodifica uma vez; em 192 kbps ou acima, a diferença é praticamente inaudível para a maioria das pessoas.',
        },
        {
          q: 'Dá para recortar áudio no celular?',
          a: 'Sim. A forma de onda aceita toque, e o botão de exportar fica ao alcance na parte de baixo da tela. Funciona no Safari no iPhone e no Chrome ou Firefox no Android.',
        },
        {
          q: 'Qual o tamanho máximo do arquivo?',
          a: 'Gravações de até cerca de uma hora rodam bem num computador atual. O limite prático é a memória do aparelho, não um teto artificial.',
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'mp3-cutter': {
      name: 'Cortar MP3',
      shortName: 'Cortar MP3',
      title: 'Cortar MP3 — Corte músicas online grátis',
      description:
        'Corte arquivos MP3 online em poucos cliques. Fique com a melhor parte ou apague uma intro em segundos — grátis, sem cadastro, e o arquivo não sai do aparelho.',
      h1: 'Cortar MP3',
      subtitle: 'Corte músicas e arquivos MP3 online — fique com o trecho que você quer e apague o resto.',
      intro:
        'Encurte uma música até o refrão, tire uma intro longa ou separe um destaque — direto no navegador. Escolha manter o trecho selecionado ou apagá-lo, ouça o resultado e salve um MP3 novo em segundos.',
      howTo: [
        {
          name: 'Adicione o MP3',
          text: 'Solte o MP3 na página ou clique para escolher um arquivo. A maioria dos outros formatos de áudio e vídeo também funciona.',
        },
        {
          name: 'Marque o trecho a cortar',
          text: 'Arraste pela forma de onda para marcar uma parte. Alterne entre Manter seleção e Apagar seleção, conforme o que você quer.',
        },
        {
          name: 'Corte e baixe',
          text: 'Ouça a prévia e exporte o corte em MP3 ou WAV sem perdas. O download começa sozinho.',
        },
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
      ],
      dropHint: 'Solte um arquivo MP3 ou clique para procurar',
    },
    'mp3-editor': {
      name: 'Editor de MP3',
      shortName: 'Editor de MP3',
      title: 'Editor de MP3 — Corte, fade, reverta e acelere online',
      description:
        'Edite MP3 e outros áudios online: corte, recorte, fade de entrada e saída, volume, velocidade e reprodução ao contrário. Grátis e privado — tudo roda no navegador.',
      h1: 'Editor de MP3',
      subtitle: 'Corte, fade, reverta e acelere o áudio — tudo numa aba do navegador.',
      intro:
        'Um editor de áudio compacto para trabalhos rápidos: recorte trechos, aplique fade de entrada e de saída, aumente ou baixe o volume, acelere ou desacelere faixas e reproduza ao contrário. Cada edição é aplicada no seu aparelho na hora de exportar — o arquivo original permanece intacto no disco.',
      howTo: [
        {
          name: 'Abra o arquivo',
          text: 'Solte um MP3, WAV, M4A ou outro arquivo de áudio no editor. Ele decodifica na hora, no seu aparelho.',
        },
        {
          name: 'Edite',
          text: 'Selecione um trecho para manter ou apagar e abra Ajustar para adicionar fades, mudar o volume, alterar a velocidade de 0,5× a 2× ou reverter a faixa.',
        },
        {
          name: 'Exporte o resultado',
          text: 'Salve a edição como MP3 em até 320 kbps, ou como WAV sem perdas. As edições são renderizadas offline no navegador antes do download.',
        },
      ],
      faqs: [
        {
          q: 'O que este editor de MP3 faz?',
          a: 'Ele cobre as edições rápidas mais comuns: recortar e cortar, fade de entrada e de saída, ajuste de volume, mudança de velocidade de 0,5× a 2× e reversão. Para gravação multipista ou produção pesada, um DAW como o Audacity ainda é a melhor ferramenta — este aqui é para edições rápidas, privadas e no navegador.',
        },
        {
          q: 'Minhas edições destroem o original?',
          a: 'Não. O arquivo original continua exatamente como está no disco. Todas as edições ficam como ajustes no editor e só são renderizadas num arquivo novo quando você exporta.',
        },
        {
          q: 'Como a mudança de velocidade afeta o tom?',
          a: 'Velocidade e tom andam juntos, como um disco tocado mais rápido ou mais devagar: em 2× o áudio sobe cerca de uma oitava, em 0,5× desce cerca de uma oitava. Use passos pequenos para mudanças sutis. Se você precisa mudar o tempo e manter o tom original, exporte primeiro e passe o arquivo por uma ferramenta dedicada de time-stretch.',
        },
        {
          q: 'Dá para desfazer uma alteração?',
          a: 'Sim. Aperte Ctrl+Z (Cmd+Z no Mac) para voltar pelas edições recentes, ou clique em Começar de novo para recarregar o estado original do arquivo.',
        },
        {
          q: 'É seguro para gravações confidenciais?',
          a: 'Sim. O áudio é decodificado e renderizado no aparelho com a Web Audio API — nunca é transmitido pela rede, o que serve para entrevistas e outros materiais confidenciais.',
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'ringtone-maker': {
      name: 'Criar toque',
      shortName: 'Toque',
      title: 'Criar toque — Faça um toque de qualquer música online',
      description:
        'Transforme qualquer música em toque no navegador. Escolha os melhores 40 segundos, coloque um fade e exporte M4R ou MP3 — grátis, sem cadastro, nada enviado.',
      h1: 'Criar toque',
      subtitle: 'Escolha a melhor parte de qualquer música e salve como toque — em menos de um minuto.',
      intro:
        'Escolha o gancho, o drop ou a intro da sua faixa favorita e transforme em toque. A ferramenta mantém a seleção dentro dos 40 segundos clássicos de um toque, adiciona um fade se você quiser e exporta direto para o celular — M4R para iPhone, MP3 para o resto.',
      howTo: [
        {
          name: 'Adicione uma música',
          text: 'Solte um MP3, M4A, WAV ou outro arquivo de áudio na página. Ele não sai do aparelho.',
        },
        {
          name: 'Escolha o momento',
          text: 'Arraste pela forma de onda para escolher até 40 segundos — a duração certa para um toque. A seleção é limitada automaticamente, então você não precisa adivinhar.',
        },
        {
          name: 'Exporte e transfira',
          text: 'Adicione um fade opcional e exporte. Escolha M4R para iPhone (Chrome, Edge ou Safari) ou MP3 para Android e qualquer outro celular.',
        },
      ],
      faqs: [
        {
          q: 'Qual deve ser a duração de um toque?',
          a: 'A maioria dos celulares toca por 20–40 segundos antes de cair na caixa postal, e toques mais curtos vão direto ao ponto. A ferramenta limita a seleção a 40 segundos, a duração clássica de um toque.',
        },
        {
          q: 'Como uso o toque no iPhone?',
          a: 'Escolha M4R no menu de formato antes de exportar — Chrome, Edge e Safari 17+ codificam direto no seu aparelho, e o arquivo baixado sincroniza com o iPhone pelo Finder (ou pelo iTunes no Windows). Em navegadores sem codificação AAC, como o Firefox, exporte MP3 e converta no GarageBand: importe o arquivo e compartilhe como toque.',
        },
        {
          q: 'Como coloco no Android?',
          a: 'Passe o MP3 exportado para o celular, abra Configurações → Som → Toque do telefone e escolha o arquivo, ou use o app Arquivos para definir direto. Não precisa converter.',
        },
        {
          q: 'O toque vai repetir de um jeito ruim?',
          a: 'Adicione um fade de saída curto em Ajustar — a volta para o início soa natural, em vez de cortar no meio da nota.',
        },
        {
          q: 'Tem marca d\'água ou limite?',
          a: 'Sem marca d\'água, sem cadastro, sem limite diário. O toque é renderizado no seu próprio aparelho e baixado direto do navegador.',
        },
      ],
      dropHint: 'Solte uma música ou clique para procurar',
    },
    'audio-joiner': {
      name: 'Juntar áudios',
      shortName: 'Juntar áudios',
      title: 'Juntar áudios — Una músicas e arquivos online grátis',
      description:
        'Junte músicas e arquivos de áudio numa faixa só, na ordem que quiser, direto no navegador. Fades opcionais entre as faixas — grátis, privado, sem envio.',
      h1: 'Juntar áudios',
      subtitle: 'Una músicas e arquivos de áudio numa faixa só — em qualquer ordem, em segundos.',
      intro:
        'Combine várias músicas, episódios de podcast ou gravações de voz num único arquivo. Adicione quantas faixas quiser, reordene e, se quiser, aplique fade no começo e no fim. A junção acontece no seu aparelho — até bibliotecas grandes se unem na hora e continuam privadas.',
      howTo: [
        {
          name: 'Adicione as faixas',
          text: 'Solte dois ou mais arquivos de áudio na página, ou clique para selecionar vários de uma vez. Formatos mistos funcionam — eles são compatibilizados automaticamente.',
        },
        {
          name: 'Defina a ordem',
          text: 'Reordene as faixas com os botões de seta ou remova qualquer uma se mudar de ideia. A duração total atualiza conforme você mexe.',
        },
        {
          name: 'Una e salve',
          text: 'Adicione fades opcionais, clique em Exportar e baixe o arquivo unido em MP3 ou WAV.',
        },
      ],
      faqs: [
        {
          q: 'Dá para juntar formatos de áudio diferentes?',
          a: 'Sim. Os arquivos são decodificados e levados à mesma taxa de amostragem primeiro, então você pode juntar um MP3 com um WAV e um M4A de uma vez. O formato de saída é você quem escolhe.',
        },
        {
          q: 'Quantos arquivos posso juntar?',
          a: 'Não há limite fixo — dezenas de faixas funcionam bem. O teto prático é a memória do aparelho, já que tudo é processado localmente.',
        },
        {
          q: 'Dá para mudar a ordem das músicas?',
          a: 'Sim. Use as setas para cima e para baixo ao lado de cada faixa para reordenar a sequência antes de juntar. A duração da prévia atualiza na hora.',
        },
        {
          q: 'As faixas fazem crossfade uma na outra?',
          a: 'Sim. Ajuste o controle de crossfade para sobrepor o fim de cada faixa ao começo da próxima — a junção aplica um fade suave entre vizinhas. Deixe em zero para um corte seco, sem intervalo, entre as faixas.',
        },
        {
          q: 'A qualidade do arquivo unido é boa?',
          a: 'Juntar em WAV é sem perdas — o áudio não é recompactado. A exportação em MP3 recodifica uma vez em até 320 kbps, o que é imperceptível para quase todo mundo.',
        },
      ],
      dropHint: 'Solte dois ou mais arquivos de áudio, ou clique para procurar',
    },
    'wav-to-mp3': {
      name: 'Converter WAV para MP3',
      shortName: 'WAV para MP3',
      title: 'Converter WAV para MP3 — Online e grátis',
      description:
        'Converta WAV para MP3 no navegador — 128, 192 ou 320 kbps. Grátis, sem cadastro: o áudio é convertido no aparelho e nunca enviado a um servidor.',
      h1: 'Converter WAV para MP3',
      subtitle: 'Converta arquivos WAV para MP3 em segundos — direto no navegador, nada enviado.',
      intro:
        'Transforme gravações WAV pesadas em MP3 compactos sem instalar nada e sem mandar o áudio para um servidor. Solte o arquivo, escolha o bitrate — 320 kbps para música, 128 kbps para voz — e a conversão acontece no seu aparelho, em geral em alguns segundos.',
      howTo: [
        {
          name: 'Solte o WAV',
          text: 'Arraste um arquivo .wav para a página ou clique para procurar. Outros formatos de áudio (M4A, FLAC, OGG) convertem do mesmo jeito.',
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
          a: 'Não. O arquivo é decodificado no navegador, codificado para MP3 por uma biblioteca pequena carregada de uma CDN e salvo de volta no disco. O áudio em si nunca sai do aparelho.',
        },
      ],
      dropHint: 'Solte um arquivo WAV ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'reverse-audio': {
      name: 'Reverter áudio',
      shortName: 'Reverter áudio',
      title: 'Reverter áudio — Toque músicas de trás para frente',
      description:
        'Toque qualquer música ou gravação de trás para frente no navegador. Um clique para reverter, ouça na hora e salve em MP3 ou WAV — grátis, e nada é enviado.',
      h1: 'Reverter áudio',
      subtitle: 'Toque qualquer música ou gravação de trás para frente — um clique, direto no navegador.',
      intro:
        'Vire qualquer faixa para tocar do fim ao começo: procure mensagens escondidas em músicas, monte efeitos de prato ao contrário para um mix, ou só ouça como sua voz fica invertida. O arquivo inteiro é revertido no aparelho e só é gravado quando você exporta.',
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
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'change-audio-speed': {
      name: 'Alterar velocidade do áudio',
      shortName: 'Velocidade',
      title: 'Alterar velocidade do áudio — Acelere ou desacelere',
      description:
        'Acelere ou desacelere qualquer áudio de 0,5× a 2× no navegador. Ouça na hora e exporte MP3 ou WAV — grátis, privado, nada enviado.',
      h1: 'Alterar velocidade do áudio',
      subtitle: 'Acelere ou desacelere qualquer áudio de 0,5× a 2× — direto no navegador.',
      intro:
        'Transforme uma aula de 40 minutos em 20 minutos rápidos, desacelere um solo de guitarra até a metade para praticar, ou encaixe uma faixa num vídeo mais curto. Arraste o controle de velocidade, ouça a mudança na hora e exporte — o áudio é reamostrado no aparelho e nunca enviado.',
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
          a: 'Sim — velocidade e tom andam juntos, como um disco tocado mais rápido ou mais devagar: 2× soa cerca de uma oitava acima, 0,5× cerca de uma oitava abaixo. Esse é o efeito clássico; manter o tom e mudar o tempo exige um algoritmo dedicado de time-stretch, que podemos adicionar depois.',
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
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'increase-volume': {
      name: 'Aumentar volume do MP3',
      shortName: 'Aumentar volume',
      title: 'Aumentar volume do MP3 — Deixe o áudio mais alto grátis',
      description:
        'Deixe áudios baixos mais altos — aumente MP3 e outros arquivos em até 4× no navegador. Um limiter mantém o som limpo. Grátis, e nada é enviado.',
      h1: 'Aumentar volume do MP3',
      subtitle: 'Aumente gravações baixas em até 4× — com limiter, para nada clipar.',
      intro:
        'Corrija gravações baixas demais: recados de voz do celular, aulas gravadas do fundo da sala, trilhas de vídeo extraídas em volume baixo. Suba o volume até 4× (+12 dB) e um limiter embutido segura os picos, então o resultado fica mais alto sem virar distorção.',
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
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'mp4-to-mp3': {
      name: 'Converter MP4 para MP3',
      shortName: 'MP4 para MP3',
      title: 'Converter MP4 para MP3 — Vídeo para MP3 online grátis',
      description:
        'Converta vídeo MP4 para MP3 no navegador — a trilha é extraída no aparelho e nunca enviada. Grátis, rápido, sem cadastro, funciona no celular.',
      h1: 'Converter MP4 para MP3',
      subtitle: 'Tire a trilha sonora de qualquer vídeo — direto no navegador, nada enviado.',
      intro:
        'Transforme vídeos MP4 em áudio MP3 sem instalar nada e sem enviar gigabytes para um servidor. O navegador lê o arquivo do disco, decodifica a trilha no aparelho e salva como MP3 — um vídeo de 500 MB converte em segundos porque só a faixa de áudio é processada.',
      howTo: [
        {
          name: 'Solte o vídeo',
          text: 'Arraste um MP4 para a página ou clique para procurar. Arquivos WebM e MOV com trilhas de áudio padrão funcionam do mesmo jeito.',
        },
        {
          name: 'Escolha o bitrate',
          text: '320 kbps para clipes, 192 kbps para ouvir no dia a dia, 128 kbps para entrevistas e aulas.',
        },
        {
          name: 'Converta e baixe',
          text: 'Clique em Converter para MP3. A trilha de áudio é decodificada no navegador e o MP3 baixa na hora.',
        },
      ],
      faqs: [
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
      ],
      dropHint: 'Solte um MP4 ou arquivo de vídeo, ou clique para procurar',
      exportLabel: 'Converter para MP3',
    },
    'extract-audio': {
      name: 'Extrair áudio',
      shortName: 'Extrair áudio',
      title: 'Extrair áudio de vídeo — Salve o som em MP3 ou WAV',
      description:
        'Extraia o áudio de qualquer vídeo no navegador e salve em MP3 ou WAV sem perdas. Grátis, privado, sem envio — mesmo em arquivos grandes.',
      h1: 'Extrair áudio de vídeo',
      subtitle: 'Salve a trilha sonora de qualquer vídeo em MP3 ou WAV — no aparelho, em segundos.',
      intro:
        'Separe o som da imagem: tire entrevistas de videochamadas, salve um filme de show como álbum ou reaproveite uma trilha na sua própria edição. A faixa de áudio é decodificada no aparelho e pode ser salva sem perdas em WAV ou de forma compacta em MP3.',
      howTo: [
        {
          name: 'Solte o vídeo',
          text: 'Qualquer MP4, WebM ou MOV com trilha sonora padrão funciona. O arquivo não sai do aparelho.',
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
      ],
      dropHint: 'Solte um arquivo de vídeo ou clique para procurar',
      exportLabel: 'Extrair áudio',
    },
    'voice-recorder': {
      name: 'Gravador de voz',
      shortName: 'Gravador de voz',
      title: 'Gravador de voz online — Grave, recorte e salve grátis',
      description:
        'Grave o microfone no navegador, recorte a gravação e salve em MP3 ou WAV. Grátis e privado — as gravações nunca são enviadas.',
      h1: 'Gravador de voz',
      subtitle: 'Grave o microfone, recorte a gravação e salve em MP3 — nada sai do aparelho.',
      intro:
        'Um gravador com estúdio de recorte junto: capture recados de voz, entrevistas, ensaios ou notas de reunião, corte o silêncio e exporte um arquivo limpo. Gravar e editar acontecem no navegador — o áudio nunca é enviado para lugar nenhum, o que deixa confortável até para conversas confidenciais.',
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
      dropHint: 'Ou solte uma gravação existente para editar',
    },
    'volume-booster': {
      name: 'Aumentar volume',
      shortName: 'Aumentar volume',
      title: 'Aumentar volume — Deixe vídeos e músicas mais altos grátis',
      description:
        'Aumente o volume de músicas baixas e trilhas de vídeo em até 4× no navegador. Um limiter mantém o som limpo — grátis, privado, nada enviado.',
      h1: 'Aumentar volume',
      subtitle: 'Aumente faixas baixas e trilhas de vídeo em até 4× — limpo, sem clipar.',
      intro:
        'Para tudo que toca baixo demais: vídeos de celular baixos, gravações acústicas suaves, podcasts masterizados no volume de um sussurro. Carregue um arquivo, suba o volume até 4× e deixe o limiter embutido segurar os picos para as partes altas continuarem limpas. Funciona com arquivos de áudio e de vídeo — só a trilha sonora é processada.',
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
      ],
      dropHint: 'Solte um arquivo de áudio ou vídeo, ou clique para procurar',
    },
    'normalize-audio': {
      name: 'Normalizar áudio',
      shortName: 'Normalizar',
      title: 'Normalizar áudio — Nivele o volume online grátis',
      description:
        'Normalize o áudio para um pico consistente no navegador — MP3, WAV, M4A e mais. Um clique, grátis, e nada é enviado.',
      h1: 'Normalizar áudio',
      subtitle: 'Um clique para levar arquivos baixos a um nível consistente e saudável — analisado no seu aparelho.',
      intro:
        'Normalizar varre o arquivo para achar o pico mais alto e sobe o arquivo inteiro exatamente o quanto falta para esse pico ficar logo abaixo do clipping. O resultado: um arquivo que usa toda a faixa de volume que recebeu, sem chute manual. É o ajuste certo quando a gravação está baixa o tempo todo — recados de voz, gravações de campo, exportações de outros apps que saíram em −18 dB.',
      howTo: [
        {
          name: 'Solte o áudio',
          text: 'Qualquer MP3, WAV, M4A ou outro arquivo de áudio. Ele é decodificado e analisado no seu aparelho — nada é enviado.',
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
          a: 'Não. Isso é normalização de pico — imediata e previsível. Serviços de streaming igualam as faixas pela loudness integrada (LUFS), uma média mais longa que pertence à masterização. Normalizar o pico continua sendo o ajuste rápido certo para um nível de reprodução consistente.',
        },
        {
          q: 'Normalizar reduz a qualidade?',
          a: 'A mudança de nível em si é matematicamente limpa e inaudível. A única questão de qualidade é o formato de exportação: WAV é bit a bit para a mudança de ganho, enquanto o MP3 recodifica uma vez. Exporte WAV se o arquivo for editado de novo.',
        },
      ],
      dropHint: 'Solte um arquivo de áudio ou clique para procurar',
    },
    'slowed-reverb': {
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb — Crie versões slowed e reverb online grátis',
      description:
        'Transforme qualquer música em slowed + reverb no navegador: desacelere, coloque reverb e exporte MP3. Grátis, e nada é enviado.',
      h1: 'Slowed + Reverb',
      subtitle: 'O som da madrugada: desacelere a faixa para ~85%, dê espaço e exporte — sem app, sem envio.',
      intro:
        'O slowed + reverb é aquele som de madrugada, lento e com eco: a faixa cai para cerca de 80–90% da velocidade, o tom desce junto, e uma cauda suave faz tudo soar como se tocasse dois cômodos mais longe. Carregue a música, arraste a velocidade para uns 85%, suba o reverb até ficar no ponto e exporte — a edição inteira acontece no seu aparelho, então até faixas completas ficam prontas em segundos. Suba a velocidade acima de 100% e o resultado é nightcore.',
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
          a: 'Sim, de propósito — como um disco de vinil na velocidade errada. A voz fica mais grave e a tonalidade desce na mesma proporção. Essa queda de tom é a marca do estilo; slowed sem mudar o tom precisa de um editor de time-stretch, que é uma ferramenta diferente (e mais pesada).',
        },
        {
          q: 'Quanto reverb eu devo colocar?',
          a: 'Comece em torno de 20–30% e ouça. O reverb é uma cauda de eco sintetizada — passado cerca de 50%, a faixa começa a soar como uma catedral e a voz perde as palavras.',
        },
        {
          q: 'Posso usar músicas slowed nos meus vídeos?',
          a: 'Deixar a música lenta não muda o direito autoral. Para publicar no YouTube ou no TikTok você ainda precisa dos direitos da música original — muita gente usa a biblioteca licenciada da plataforma e reserva as edições slowed para as próprias gravações.',
        },
      ],
      dropHint: 'Solte uma música ou clique para procurar',
    },
  },
};
