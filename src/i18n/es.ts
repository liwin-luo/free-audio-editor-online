import type { Catalog } from './types';

export const es: Catalog = {
  ui: {
    skip: 'Saltar al contenido',
    logoHome: 'Free Audio Editor — inicio',
    tools: 'Herramientas',
    language: 'Idioma',
    theme: 'Cambiar modo oscuro',
    navMain: 'Principal',
    navAbout: 'Acerca de',
    footerBlurb:
      'Herramientas de audio gratis que funcionan por completo en tu navegador. Tus archivos nunca se suben: edición de audio que respeta tu privacidad desde el diseño.',
    share: 'Compartir',
    shareOn: 'Compartir en {name}',
    copyLink: 'Copiar enlace',
    copied: 'Copiado',
    about: 'Acerca de',
    privacy: 'Privacidad',
    status: 'Estado',
    guides: 'Guías',
    rights: 'Ningún archivo sale de tu dispositivo.',
    clientSide: 'Procesamiento 100% en el navegador',
    trustFree: 'Gratis, sin registro',
    trustClean: 'Sin marcas de agua',
    faqHeading: 'Preguntas frecuentes',
    toolFaq: 'Preguntas sobre {name}',
    related: 'Herramientas relacionadas',
    openTool: 'Abrir {name}',
    allTools: 'Todas las herramientas de audio',
    browseToolkit: 'Ver todas las herramientas',
    home: 'Inicio',
    howTo: 'Cómo usar {name}',
    ogAlt: 'Free Audio Editor — edita audio en línea y nada se sube',
    schemaOs: 'Cualquiera (desde el navegador)',
    schemaBrowser: 'Necesitas un navegador moderno con soporte de Web Audio',
    features: [
      'Recorta, corta y une audio',
      'Volumen, normalizar, velocidad y reverb',
      'Reproducción al revés y grabación de voz',
      'Convierte el audio de videos a MP3 o WAV',
      'Exporta MP3, WAV y M4R para iPhone',
    ],
    formats: {
      'mp3-320': 'MP3 · 320 kbps',
      'mp3-192': 'MP3 · 192 kbps',
      'mp3-128': 'MP3 · 128 kbps',
    'mp3-96': 'MP3 · 96 kbps',
    'mp3-64': 'MP3 · 64 kbps',
      wav: 'WAV · sin pérdida',
      m4r: 'M4R · tono de llamada para iPhone',
    },
    categories: {
      cut: 'Cortar y recortar',
      merge: 'Unir y convertir',
      record: 'Grabar',
      effects: 'Efectos y estudio',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — hasta cerca de una hora',
    dropLocal: 'Se procesa en tu dispositivo — el archivo nunca sale de esta pestaña',
    formatsMore: ' y más',
    etaModel: 'la primera vez descarga el modelo; luego, aproximadamente lo que dura el audio',
    limitTenMin: 'hasta 10 minutos',
    limitRingtone: 'hasta 40 segundos',
    chipText: 'Texto',
    zoomOut: 'Alejar',
    zoomIn: 'Acercar',
    loadDifferent: 'Cargar otro archivo',
    startOver: 'Empezar de nuevo',
    waveform: 'Forma de onda. Arrastra para seleccionar un tramo.',
    play: 'Reproducir la selección',
    pause: 'Pausa',
    hintSelect: 'Arrastra sobre la forma de onda para seleccionar · Espacio para reproducir',
    hintConvert: 'Espacio para reproducir · nada se sube',
    hintSilence: 'Los huecos más largos que el mínimo se cortan al exportar. Las respiraciones cortas se quedan.',
    reverse: 'Reproducir al revés',
    normalize: 'Normalizar el pico',
    speed: 'Velocidad',
    pitch: 'Tono',
    bass: 'Graves',
    treble: 'Agudos',
    mid: 'Medios',
    cutoff: 'Corte',
    volume: 'Volumen',
    reverb: 'Reverb',
    compress: 'Comprimir',
    echoDelay: 'Retardo',
    echoFeedback: 'Repeticiones',
    panDepth: 'Profundidad',
    panRate: 'Frecuencia',
    circle: 'Círculo',
    metroBpm: 'BPM',
    metroMeter: 'Compás',
    metroBars: 'Compases',
    metroPlay: 'Reproducir',
    metroStop: 'Parar',
    silenceThreshold: 'Umbral',
    silenceGap: 'Pausa mínima',
    silenceRemove: 'Se quitarán unos {time} de silencio',
    silenceKeepFile: 'Nada supera el umbral, así que la exportación conserva el archivo entero',
    loopTimes: 'Repeticiones',
    loopCrossfade: 'Unión',
    loopExport: 'La exportación dura unos {time}',
    loopTooLong: 'Ese bucle pasa de 10 minutos. Baja las repeticiones o acorta la selección.',
    lufsIntegrated: 'Integrada',
    lufsPeak: 'Pico de muestra',
    lufsPodcast: 'Pódcast',
    lufsStreaming: 'Streaming',
    lufsBroadcast: 'Emisión',
    lufsLimited: 'El pico se queda en −1 dBFS. El resultado es {lufs} LUFS.',
    lufsWill: 'La exportación quedará en {lufs} LUFS.',
    lufsSilent: 'Este archivo está en silencio, no hay sonoridad que igualar.',
    adjust: 'Ajustar — fundidos, volumen, velocidad, invertir',
    fadeIn: 'Fundido de entrada',
    fadeOut: 'Fundido de salida',
    normalizeOverrides: 'Normalizar el pico (anula el volumen)',
    undo: 'Deshacer el último cambio',
    cutMode: 'Modo de corte',
    keep: 'Conservar selección',
    deleteSel: 'Eliminar selección',
    precise: 'Tiempos exactos',
    startSec: 'Inicio (s)',
    endSec: 'Fin (s)',
    format: 'Formato',
    export: 'Exportar',
    joinerMixed: 'MP3, WAV, M4A, OGG, FLAC — puedes mezclar formatos',
    joinerLocal: 'Se procesa en tu dispositivo — tus archivos nunca salen de esta pestaña',
    trackSummary: '{n} pistas · {time}',
    crossfade: 'Crossfade',
    fadeInFirst: 'Fundido de entrada (primera pista)',
    fadeOutLast: 'Fundido de salida (última pista)',
    mergeExport: 'Unir y exportar',
    record: 'Grabar',
    recordHint: 'Graba con tu micrófono',
    tooBig: 'Ese archivo pasa de 300 MB — prueba con uno más corto o comprimido.',
    decoding: 'Decodificando el archivo…',
    ready: 'Listo. Arrastra sobre la forma de onda para seleccionar un tramo.',
    hourWarning: 'Los archivos de más de una hora pueden agotar la memoria del navegador en algunos dispositivos.',
    decodeFail:
      'No se pudo decodificar este archivo: puede estar dañado, o su códec no es compatible con tu navegador.',
    ringtoneCap: 'La selección se limitó a 40 segundos — la duración clásica de un tono de llamada.',
    kept: 'Selección conservada: {range}',
    markedDelete: 'Selección marcada para eliminar: {range}',
    endTime: 'El tiempo de fin debe quedar al menos 0.05 s después del tiempo de inicio.',
    nothingUndo: 'No queda nada por deshacer.',
    reverted: 'Se deshizo el último cambio.',
    normalizeOn: 'Normalización activa — el pico subirá cerca de {db} dB (con tope de +12 dB).',
    rendering: 'Renderizando…',
    renderingStatus: 'Renderizando tu edición en este dispositivo…',
    encoding: 'Codificando {ext}…',
    exported: 'Se exportó {file}.',
    saved: 'Guardado como {file} — no se subió nada.',
    exportFail:
      'Falló la exportación — no se pudo cargar el codificador (¿estás sin conexión?). Prueba el formato WAV.',
    merging: 'Uniendo…',
    mergingStatus: 'Uniendo las pistas en este dispositivo…',
    moveUp: 'Mover arriba',
    moveDown: 'Mover abajo',
    remove: 'Quitar',
    recUnavailable: 'La grabación no está disponible en este navegador. Prueba Chrome, Edge, Firefox o Safari.',
    micBlocked: 'Se bloqueó el acceso al micrófono. Permítelo en la configuración del navegador e inténtalo de nuevo.',
    recording: 'Grabando… haz clic en Detener cuando termines.',
    stop: 'Detener',
    recordAgain: 'Grabar de nuevo',
    recordingLoaded: 'La grabación se cargó en el editor de abajo.',
    vizStyle: 'Estilo',
    vizStyleBars: 'Barras',
    vizStyleFilled: 'Relleno',
    vizStyleOutline: 'Contorno',
    vizStyleDots: 'Puntos',
    vizStyleBottom: 'Barras abajo',
    vizStyleBlocks: 'Barras anchas',
    vizTemplate: 'Plantilla',
    vizTemplateNone: 'Manual',
    vizTplSoundcloud: 'SoundCloud',
    vizTplPodcast: 'Pódcast',
    vizTplPoster: 'Póster',
    vizTplSticker: 'Pegatina',
    vizTplPrint: 'Impresión',
    vizTplNeon: 'Neón',
    vizTplBlocks: 'Bloques',
    vizWaveColor: 'Color de la onda',
    vizBgColor: 'Fondo',
    vizTransparent: 'Fondo transparente',
    vizSize: 'Tamaño',
    vizSizeVideo: 'Portada de video',
    vizSizeSquare: 'Cuadrado',
    vizSizeOg: 'Imagen social',
    vizSizeBanner: 'Banner',
    vizSizeCustom: 'Personalizado',
    vizWidth: 'Ancho',
    vizHeight: 'Alto',
    vizRange: 'Intervalo',
    vizRangeStart: 'Inicio (s)',
    vizRangeEnd: 'Fin (s)',
    vizPreview: 'Vista previa de la forma de onda',
    vizReady: 'Listo. Ajusta el aspecto y descarga el PNG.',
    vizRendering: 'Renderizando…',
    vizExportFail: 'No se pudo crear el PNG. Prueba un tamaño más pequeño.',
    specFft: 'Tamaño de FFT',
    specAxis: 'Eje de frecuencia',
    specAxisLog: 'Logarítmico',
    specAxisLinear: 'Lineal',
    specMaxHz: 'Frecuencia alta (Hz)',
    specDbFloor: 'Silencio (dB)',
    specDbCeil: 'Fuerte (dB)',
    specColors: 'Colores',
    specViridis: 'Viridis',
    specInferno: 'Inferno',
    specGray: 'Escala de grises',
    specPreview: 'Vista previa del espectrograma',
    specProgress: 'Dibujando el espectrograma… {pct}%',
    paintText: 'Texto',
    paintPlaceholder: 'Una línea corta, como un nombre',
    paintImage: 'PNG, JPG o WebP. Se reduce para caber en el espectro.',
    paintPreview: 'Imagen que se escribirá en el audio',
    paintReady: 'Listo. Descarga el WAV y ábrelo en el generador de espectrogramas.',
    paintWorking: 'Escribiendo el audio…',
    paintFail: 'No se pudo leer esa imagen. Prueba un PNG o un JPG.',
    tgAlbum: 'Álbum',
    tgAlbumArtist: 'Artista del álbum',
    tgArtist: 'Artista',
    tgComment: 'Comentario',
    tgComposer: 'Compositor',
    tgCover: 'Portada',
    tgCoverFail: 'La portada debe ser una imagen JPG o PNG.',
    tgCoverHint: 'Un JPG o PNG cuadrado de entre 500 y 1400 px se ve mejor en la mayoría de los reproductores.',
    tgDisc: 'Disco',
    tgGenre: 'Género',
    tgNoTags: 'Este archivo aún no tiene etiquetas: rellena lo que sepas.',
    tgReadFail: 'No se pudo leer ese archivo: usa un MP3.',
    tgRemoveAll: 'Eliminar todos los metadatos (guardar un archivo limpio)',
    tgRemoveCover: 'Quitar la portada',
    tgReplaceCover: 'Cambiar la portada',
    tgReset: 'Restablecer',
    tgSaved: 'Guardado: revisa tus descargas.',
    tgSaving: 'Escribiendo las etiquetas…',
    tgSaveCover: 'Guardar la portada',
    tgTitle: 'Título',
    tgTrack: 'Pista',
    tgWriteFail: 'Algo falló al guardar. Inténtalo de nuevo o usa otro archivo MP3.',
    tgYear: 'Año',
    trLang: 'Idioma',
    trLangAuto: 'Detección automática',
    trModel: 'Modelo',
    trModelBase: 'Base — más preciso',
    trModelTiny: 'Tiny — descarga más rápida',
    trPreparing: 'Preparando el modelo…',
    trDownloading: 'Descargando el modelo… {percent}%',
    trWorking: 'Transcribiendo… {percent}%',
    trDone: 'Transcripción terminada — {count} caracteres',
    trFirstRun:
      'La primera ejecución descarga el modelo una vez (Tiny ≈ 40 MB, Base ≈ 80 MB) y tu navegador lo guarda en caché: las siguientes funcionan sin conexión.',
    trResultPlaceholder: 'La transcripción aparece aquí — edítala antes de descargar si quieres.',
    trCopy: 'Copiar',
    trCopied: 'Copiado al portapapeles',
    trTxt: 'Descargar TXT',
    trSrt: 'Descargar SRT',
    trTooLong:
      'Este archivo pasa de 10 minutos. Recórtalo antes — el recortador de audio funciona igual de en privado — y vuelve a transcribir aquí.',
    trFail: 'La transcripción falló. Prueba el modelo Tiny, un archivo más claro o un navegador reciente.',
    mixMute: 'Silenciar',
    mixSolo: 'Solo',
    mixPan: 'Panorama',
    mixOffset: 'Entrada',
    mixTrimIn: 'Recorte inicial',
    mixTrimOut: 'Recorte final',
    mixGain: 'Nivel',
    mixMaster: 'Máster',
    mixPlay: 'Reproducir mezcla',
    mixStop: 'Detener',
    mixAdd: 'Añadir pistas',
    mixLimit: 'Esta página admite 8 pistas. Exporta esta mezcla o usa un editor de escritorio para una sesión más grande.',
    mixPulled: 'La mezcla bajó {db} dB para que el pico no sature.',
    mixExport: 'Exportar mezcla',
    mixDecode: 'No se pudo decodificar {name}.',
  },
  home: {
    title: 'Editor de audio online gratis — Corta, une y convierte',
    description:
      'Editor de audio online gratis: recorta, corta, une, invierte y convierte audio en tu navegador. Sin registro, sin subir archivos.',
    appBlurb: 'Editor de audio en línea gratis: corta, recorta, une y edita audio en tu navegador.',
    badge: 'Procesamiento 100% local · nada se sube',
    h1: 'Editor de audio en línea gratis',
    lede: 'Recorta, corta, une y edita audio en tu navegador. Sin registro, sin marcas de agua y sin subir archivos: nunca salen de tu dispositivo.',
    ctaTrim: 'Recortar un archivo de audio',
    ctaMerge: 'Unir canciones',
    highlightsLabel: 'Por qué funciona así',
    priceSymbol: '$',
    priceAmount: '0',
    priceWord: 'Gratis',
    highlights: [
      {
        title: 'No se sube nada',
        body: 'El archivo se decodifica en esta pestaña del navegador. Ciérrala y el audio desaparece: ningún servidor lo recibe.',
      },
      {
        title: 'Gratis, porque el trabajo lo hace tu dispositivo',
        body: 'No hay una granja de servidores que pagar, así que no hay marca de agua, ni registro, ni límite de exportación.',
      },
      {
        title: 'Suelta el archivo y empieza',
        body: 'Sin instalar nada y sin cola. Una pista larga nunca sale del equipo, así que la edición empieza al momento.',
      },
    ],
    toolsHeading: 'Herramientas de audio populares',
    allToolsCta: 'Ver las {count} herramientas',
    toolsCount: '{count} herramientas',
    mostUsed: 'Las más usadas',
    comingTitle: 'Próximamente',
    comingBody: 'Mezclador con crossfade, quitar silencios y más — con la misma prioridad: tu privacidad.',
    useCasesHeading: '¿Qué vas a editar hoy?',
    useCases: [
      { title: 'Pódcast', body: 'Graba episodios, corta las partes bruscas, une segmentos y llévate la transcripción para las notas del programa.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: 'Música', body: 'Ralentiza riffs para aprenderlos, cambia de tono para covers y da peso o brillo a tus maquetas.', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: 'Locución', body: 'Entrega tomas limpias: quita el retumbo, iguala niveles y sube grabaciones bajas sin saturar.', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
      { title: 'Estudio y trabajo', body: 'Escucha clases aceleradas, convierte grabaciones en texto y suaviza las uniones entre clips.', tools: ['audio-to-text', 'fade-audio', 'audio-joiner'] },
    ],
    whyHeading: 'Por qué editar audio en tu dispositivo',
    why: [
      {
        title: 'Privado desde el diseño',
        body: 'Notas de voz, entrevistas, temas inéditos: el audio es personal. Aquí se decodifica y se edita en la memoria de tu propio navegador. No hay un servidor que pueda verlo, guardarlo o dejarlo salir.',
      },
      {
        title: 'Sin cola y sin espera',
        body: 'Subir un tema de 50 MB, esperar a un servidor y bajarlo otra vez: eso no hace falta. La edición empieza en el momento en que sueltas el archivo.',
      },
      {
        title: 'Gratis de verdad',
        body: 'Procesar en local casi no cuesta, así que las herramientas son gratis: sin marcas de agua, sin obligarte a registrarte y sin límites de exportación.',
      },
    ],
    faqs: [
      {
        q: '¿Free Audio Editor es realmente gratis?',
        a: 'Sí. Todas las herramientas de este sitio son gratis, sin registro, sin marca de agua y sin límite diario de exportaciones. Como todo el procesamiento ocurre en tu propio navegador, no hay facturas de servidor que cubrir.',
      },
      {
        q: '¿Cómo se mantiene privado mi audio?',
        a: 'Tus archivos nunca se suben. La decodificación, la edición y la exportación se hacen en local con la Web Audio API, dentro de la pestaña de tu navegador. Puedes desconectarte de internet después de cargar la página y todas las herramientas siguen funcionando.',
      },
      {
        q: '¿Tengo que instalar algo?',
        a: 'No. Las herramientas son apps web que funcionan en cualquier navegador moderno: Chrome, Edge, Firefox o Safari, en la computadora y en el celular.',
      },
      {
        q: '¿Qué formatos de audio se admiten?',
        a: 'Puedes abrir MP3, WAV, M4A/AAC, OGG, FLAC y audio WebM, y guardar el resultado como MP3 (128–320 kbps) o WAV sin pérdida. El creador de tonos de llamada también exporta M4R en Chrome, Edge y Safari.',
      },
    ],
  },
  hub: {
    categoryIntro: {
      cut: 'Acorta una canción, quédate con la mejor parte o crea un tono: selecciona el rango en la onda y guárdalo.',
      merge: 'Une pistas en un solo archivo, extrae el audio de cualquier vídeo y cambia entre MP3, WAV, M4A, OGG y más.',
      record: 'Graba tu micrófono directamente en el navegador: recorta la toma y guárdala como MP3, nada sale de tu dispositivo.',
      effects: 'Sube el volumen, cambia velocidad o tono, añade reverb y fundidos, ecualiza graves y agudos, y visualiza el sonido como onda o espectrograma.',
    },
    tasksTitle: '¿Qué quieres hacer?',
    tasks: [
    { task: 'Crear un tono para mi móvil', tool: 'ringtone-maker' },
    { task: 'Extraer el audio de un vídeo', tool: 'extract-audio' },
    { task: 'Hacer más fuerte una grabación baja', tool: 'increase-volume' },
    { task: 'Unir dos canciones en un archivo', tool: 'audio-joiner' },
    { task: 'Convertir un WAV a MP3', tool: 'wav-to-mp3' },
    { task: 'Ralentizar una canción y añadir reverb', tool: 'slowed-reverb' },
    { task: 'Cambiar el tono sin alterar la velocidad', tool: 'pitch-changer' },
    ],
    title: 'Herramientas de audio gratis — Recortar, unir y convertir',
    description:
      'Corta, une, convierte, graba y mejora audio con todas las herramientas en un solo lugar. Todo en tu navegador: sin subir archivos y sin registro.',
    h1: 'Todas las herramientas de audio',
    intro:
      'Todas las herramientas del sitio, agrupadas por tarea. Elige una y empieza: todo funciona en tu navegador, sin registro y sin subir archivos.',
  },
  about: {
    title: 'Acerca de Free Audio Editor — audio online, sin subidas',
    description:
      'Free Audio Editor: herramientas de audio que respetan tu privacidad y funcionan en tu navegador. Sin subidas, sin registro, sin marcas de agua.',
    h1: 'Acerca de',
    p1: 'Free Audio Editor existe porque editar una nota de voz no debería obligarte a subirla al servidor de otra persona. Cada herramienta de aquí — el {trimmer}, el {cutter}, el {joiner} y las demás — funciona igual: tu navegador lee el archivo, lo edita en memoria y escribe el resultado directo en tu disco.',
    linkTrimmer: 'recortador',
    linkCutter: 'cortador',
    linkJoiner: 'unidor',
    p2: 'Esa misma forma de trabajar explica por qué las herramientas son rápidas y gratis. No hay cola de subida, ni servidores procesando por ti, ni una factura de almacenamiento: solo tu dispositivo haciendo el trabajo que ya sabe hacer.',
    p3: 'El sitio está hecho como una app web estática con la Web Audio API. Se sigue desarrollando, con convertidores, una grabadora de voz y más herramientas de edición en camino.',
  },
  privacy: {
    title: 'Política de privacidad — Free Audio Editor',
    description:
      'Política de privacidad de freeaudioeditor.online: los archivos de audio se procesan en tu navegador y nunca se suben. Sin cuentas y sin rastrear tu audio.',
    h1: 'Política de privacidad',
    updated: 'Última actualización: 16 de octubre de 2026',
    sections: [
      {
        h: 'Tus archivos de audio',
        body: 'Cada herramienta de este sitio procesa el audio por completo dentro de tu navegador con la Web Audio API. Tus archivos {em}: no hay una vía para subirlos. Cuando cierras la pestaña, el audio decodificado desaparece de la memoria.',
        em: 'nunca se suben a nuestros servidores',
      },
      {
        h: 'Qué guardamos',
        body: 'Nada sobre ti. El sitio no tiene cuentas y no pide un correo. Tu preferencia de tema (claro u oscuro) se guarda en el localStorage de tu navegador y nunca sale de tu dispositivo.',
      },
      {
        h: 'Terceros',
        body: 'El codificador de MP3 (lamejs) viene con este sitio y solo se carga cuando exportas un MP3. No se descarga de una red de terceros y no recibe tu audio. Las tipografías se sirven desde el propio dominio de este sitio.',
      },
      {
        h: 'Analítica y publicidad',
        body: 'Medimos el tráfico general con Vercel Web Analytics, que no usa cookies y registra solo vistas de página agregadas: nunca tu identidad y nunca tu audio. No mostramos publicidad. Si algo de esto cambia, esta política se actualiza primero.',
      },
    ],
    contactHeading: 'Contacto',
    contactBefore: '¿Preguntas sobre esta política? Escribe a {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transcribe entrevistas y notas de voz a texto o subtítulos SRT, en tu propio dispositivo.',
      name: 'Audio a texto',
      shortName: 'Audio a texto',
      title: 'Transcribir audio a texto online gratis — TXT y SRT',
      description:
        'Transcribe audio a texto en tu navegador: MP3, WAV, M4A y vídeo, más de 90 idiomas con detección automática, exporta TXT o SRT. Gratis, sin registro.',
      h1: 'Audio a texto gratuito en línea — Transcribir una grabación',
      heroAlt: 'Pasar una nota de voz o una entrevista a un texto que puedes copiar',
      subtitle: 'Convierte grabaciones en texto en más de 90 idiomas y con marcas de tiempo — todo en tu navegador.',
      intro:
        'Suelta una grabación y saca sus palabras: notas de voz, entrevistas, clases, pódcast — en unos 90 idiomas, detectados automáticamente cuando no sabes cuál es. Un modelo de IA Whisper se ejecuta dentro de tu navegador, en tu propio dispositivo, así que el audio nunca se sube, y la transcripción sale como texto editable o como un archivo SRT con marcas de tiempo.',
      usesHeading: 'Transcripciones que de verdad hacen falta',
      uses: [
        'Convertir una clase, una reunión o una entrevista en notas que puedes buscar y citar.',
        'Subtitular un vídeo o un episodio de pódcast exportando un SRT con marcas de tiempo.',
        'Sacar las palabras de una nota de voz sin enviar la grabación a ningún sitio.',
      ],
      howTo: [
        {
          name: 'Suelta tu archivo',
          text: 'Añade un MP3, WAV, M4A, un archivo de vídeo u otra grabación. Se descodifica en tu dispositivo y nunca se sube.',
        },
        {
          name: 'Elige idioma y modelo',
          text: 'La detección automática sirve para casi todo. Elige Tiny para ir más rápido en grabaciones largas o dispositivos modestos, Base para la mejor precisión.',
        },
        {
          name: 'Transcribe y descarga',
          text: 'La primera ejecución descarga el modelo una vez y lo guarda en caché. Edita la transcripción si quieres y guárdala como TXT o SRT.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. El archivo se descodifica en tu navegador y lo transcribe un modelo Whisper que se ejecuta localmente mediante WebAssembly o WebGPU. La única petición de red es la descarga única del modelo desde una CDN pública: después, la transcripción funciona sin conexión. Nada de tu audio llega nunca a un servidor.',
        },
        {
          q: '¿Cómo de precisa es la transcripción?',
          a: 'Usa los modelos Whisper de OpenAI, que rozan el nivel humano con voz clara. El ruido de fondo fuerte, los acentos marcados, varios hablantes a la vez o la música alta la empeoran. Con audio difícil, Base es bastante mejor que Tiny; y en cualquier caso el resultado cae en un cuadro editable, así que puedes corregir nombres y puntuación antes de descargar.',
        },
        {
          q: '¿Cuáles son los límites?',
          a: 'Un archivo cada vez y hasta 10 minutos por pasada: recorta antes las grabaciones largas (el recortador de audio funciona igual de en privado). No distingue hablantes: un diálogo sale como un texto único sin nombres. Y esta página trabaja con archivos, no con el micrófono en directo.',
        },
        {
          q: '¿En qué se diferencia de la grabadora de voz?',
          a: 'La grabadora capta tu micrófono y lo convierte en un archivo de audio; esta página lee un archivo ya existente y escribe sus palabras. Combinan bien: graba allí, transcribe aquí. Todo se ejecuta en tu navegador.',
        },
        {
          q: '¿Qué idiomas admite?',
          a: 'Whisper se entrenó con unos 90 idiomas, del inglés, chino, español y árabe al vietnamita, ucraniano y suajili. Deja el idioma en Detección automática y el modelo lo averigua a partir del audio, o fija un idioma para ganar algo de precisión.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí: Chrome, Edge, Firefox y Safari recientes, en escritorio y móvil. Los navegadores con WebGPU (Chrome, Edge) transcriben mucho más rápido; en los demás va por CPU, así que elige Tiny para archivos largos y espera unos minutos por cada diez minutos de audio. La descarga única del modelo también es más pequeña con Tiny.',
        },
      ],
      sections: [
        {
          heading: 'Una transcripción local, no un subtítulo en directo',
          paragraphs: [
            'Audio a texto ejecuta un modelo Whisper en el navegador. El modelo se descarga una vez desde una CDN y el archivo se transcribe en el dispositivo. El audio no se sube para la transcripción.',
            'El tope es de unos 10 minutos. No hay etiquetas de hablante. No escucha el micrófono en directo. Graba antes con la grabadora de voz, exporta y suelta ese archivo aquí.',
          ],
        },
        {
          heading: 'Modelo e idioma',
          paragraphs: [
            'Unos 90 idiomas. Elige el que hablaste, o deja la detección si no estás seguro:',
          ],
          bullets: [
            'Tiny es la descarga más pequeña y basta con una voz clara.',
            'Base es más lento y un poco más preciso con ruido o acento.',
            'WebGPU va más rápido en los equipos que lo tienen. Si no, pasa a la CPU.',
          ],
        },
        {
          heading: 'En qué se equivoca el texto',
          paragraphs: [
            'Los nombres, las voces que se pisan y la música bajo una voz salen mal. No marca quién habló. Limpia el archivo antes si los extremos son un silencio largo: recorta, o pasa el quitador de silencio, y transcribe el archivo más corto.',
            'Puedes corregir las palabras antes de descargarlas, como texto plano o como un SRT con tiempos. No las traduce a otro idioma.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o vídeo, o haz clic para buscar',
      exportLabel: 'Transcribir',
    },
    'bass-booster': {
      cardLine: 'Añade peso y pegada con hasta +15 dB de graves por debajo de 150 Hz.',
      name: 'Realce de graves',
      shortName: 'Graves',
      title: 'Aumentar graves de una canción online gratis',
      description:
        'Añade hasta +15 dB de graves por debajo de 150 Hz. Un shelf de verdad, no un truco que sube todo. Gratis en tu navegador, sin subir archivos.',
      h1: 'Aumentar los graves de una canción, gratis',
      heroAlt: 'Añadir graves a un MP3',
      subtitle: 'Un shelf de verdad: hasta +15 dB por debajo de 150 Hz, escucha y exporta. Nada sale de tu dispositivo.',
      intro:
        'Los graves débiles son la razón más común por la que una grabación suena pequeña. El realce de graves aplica un shelf auténtico — hasta +15 dB por debajo de 150 Hz, el mismo movimiento que haría un ingeniero de mastering — no un truco que sube todo. Carga un archivo, sube el control hasta que los graves asienten y exporta. Todo ocurre en tu navegador: el archivo nunca se sube.',
      usesHeading: 'Cuándo realzar los graves',
      uses: [
        'Dar cuerpo a notas de voz y entrevistas grabadas con el móvil para que dejen de sonar finas.',
        'Traer la batería y el bajo al frente en un tema que es todo medios.',
        'Dar peso a la sintonía de un podcast sin tocar las voces.',
      ],
      howTo: [
        {
          name: 'Carga tu audio',
          text: 'MP3, WAV, M4A, OGG o FLAC. El procesamiento ocurre en tu dispositivo.',
        },
        {
          name: 'Sube el control de graves',
          text: 'Hasta +15 dB por debajo de 150 Hz. +3–6 dB arregla lo fino; más alto, para un efecto deliberado.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Escucha a volumen normal — el exceso de graves tapa voces. Exporta en MP3 o WAV sin pérdida.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. El realce es un filtro shelf de la Web Audio API dentro de tu pestaña: no hay paso de subida. Tras cargar la página puedes desconectarte y la herramienta sigue funcionando.',
        },
        {
          q: '¿Realzar los graves reduce la calidad?',
          a: 'No hay remuestreo ni cambio de tono. Si el realce lleva los graves por encima del máximo, un limitador controla los picos para que la exportación nunca sature de forma agresiva; ajustes muy calientes pueden suavizar esos picos.',
        },
        {
          q: '¿Añade subgraves que no existen?',
          a: 'No: un shelf solo amplifica las frecuencias bajas que el archivo ya contiene. Los altavoces del móvil no reproducen subs; para juzgar el resultado usa auriculares o altavoces de verdad.',
        },
        {
          q: '¿En qué se diferencia del potenciador de volumen?',
          a: 'El potenciador sube todo por igual; el realce de graves levanta solo los graves por debajo de 150 Hz. Si el archivo entero suena bajo, potenciador; si suena fino, graves aquí.',
        },
        {
          q: '¿Cuántos graves debo añadir?',
          a: '+3–6 dB arregla grabaciones finas. Pasado +9 dB buscas un efecto estilístico: comprueba que las voces sigan inteligibles antes de exportar.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. El editor está pensado para táctil: arrastra, mueve el control y exporta. Funciona en Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.',
        },
      ],
      sections: [
        {
          heading: 'Qué sube de verdad el control de graves',
          paragraphs: [
            'Es un filtro de shelf grave. Sube las frecuencias por debajo de 150 Hz en la cantidad que marques, hasta +15 dB. Los medios y los agudos se quedan donde estaban. No es un control de volumen.',
            'Un shelf solo amplifica los graves que el archivo ya tiene. Una voz grabada con el teléfono tiene muy poca energía por debajo de 80 Hz, así que un realce grande no fabrica un subgrave. Juzga el resultado con auriculares o altavoces de verdad. El altavoz del teléfono no reproduce ese rango: un realce fuerte puede no notarse, o sonar a barro.',
          ],
        },
        {
          heading: 'Cuántos graves añadir',
          paragraphs: [
            'El rango útil es corto. Pasado ese punto, estás haciendo un efecto.',
          ],
          bullets: [
            '+3 a +6 dB: notas de voz finas, entrevistas y temas que son todo medios.',
            '+6 a +9 dB: batería y bajo que tienen que pasar adelante. Comprueba que las voces sigan cortando.',
            '+9 a +15 dB: un efecto de graves a propósito. La voz suele volverse difícil de seguir.',
            'Si los graves crujen, el shelf se quedó sin margen. Baja el control.',
          ],
        },
        {
          heading: 'Graves, volumen y ecualizador',
          paragraphs: [
            'Elige la página que corresponde al problema.',
          ],
          bullets: [
            'Realce de graves, esta página: solo lo que está por debajo de 150 Hz. El archivo suena fino, no bajo.',
            'Subir volumen: todo el archivo, hasta 4×, con un limitador. El archivo está bajo en todas las frecuencias.',
            'Ecualizador: graves, medios y agudos por separado. Úsalo cuando 150 Hz no es el corte correcto.',
          ],
        },
        {
          heading: 'Dónde se estropea un realce de graves',
          paragraphs: [
            'Demasiados graves tapan la voz. Escucha a un volumen normal, no con los altavoces ya bajados, o guardarás algo que retumba en el coche y entierra la voz.',
            'Exporta WAV si vas a seguir editando. MP3 a 320 kbps es la elección cuando el archivo ya está terminado. El filtro no remuestrea ni cambia el tono. Si el realce empujara los picos por encima del máximo, un limitador los suaviza para que la exportación no sature de golpe.',
          ],
        },
      ],
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'treble-booster': {
      cardLine: 'Añade brillo y claridad subiendo los agudos hasta +15 dB sobre 3 kHz.',
      name: 'Realce de agudos',
      shortName: 'Agudos',
      title: 'Realce de agudos — Más agudos en tu audio online',
      description:
        'Añade hasta +15 dB de agudos por encima de 3 kHz en tu navegador — un shelf real, no un truco de volumen. Exporta en MP3 o WAV. Gratis, sin subidas.',
      h1: 'Realce de agudos gratuito en línea — Subir los agudos de una canción',
      heroAlt: 'Hacer más claro un audio apagado',
      subtitle: 'Un shelf de agudos real: hasta +15 dB por encima de 3 kHz, escucha y exporta. Nada sale de tu dispositivo.',
      intro:
        'El audio apagado y sordo suele echar una cosa en falta: energía por encima de 3 kHz. El realce de agudos aplica un shelf de agudos auténtico — hasta +15 dB por encima de 3 kHz, el mismo movimiento que hace un ingeniero de mastering para abrir un tema — no un truco que sube todo. Carga un archivo, sube el control hasta que vuelva el detalle y exporta. Todo ocurre en tu navegador: el archivo nunca se sube.',
      usesHeading: 'Cuándo realzar los agudos',
      uses: [
        'Abrir una grabación apagada que suena como grabada debajo de una manta.',
        'Devolver consonantes y aire a las voces para que el habla siga siendo inteligible.',
        'Añadir brillo a platillos e instrumentos acústicos en una mezcla que suena plana.',
      ],
      howTo: [
        {
          name: 'Carga tu audio',
          text: 'MP3, WAV, M4A, OGG o FLAC. El procesamiento ocurre en tu dispositivo.',
        },
        {
          name: 'Sube el control de agudos',
          text: 'Hasta +15 dB por encima de 3 kHz. +3–6 dB aclara la mayoría de las grabaciones; más alto, para un borde brillante y agresivo.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Vigila la aspereza en las sibilantes (sonidos s, t) — exporta en MP3 o WAV sin pérdida.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. El realce es un filtro shelf de agudos de la Web Audio API dentro de tu pestaña: no hay paso de subida. Tras cargar la página puedes desconectarte y la herramienta sigue funcionando.',
        },
        {
          q: '¿Realzar los agudos reduce la calidad?',
          a: 'No hay remuestreo ni cambio de tono. Un realce grande también levanta el siseo y la sibilancia que ya estaban en el archivo: si suena áspero, baja el control. Un limitador controla los picos para que la exportación nunca sature de forma agresiva.',
        },
        {
          q: '¿Recupera detalle que nunca se grabó?',
          a: 'No: un shelf solo amplifica las frecuencias altas que el archivo ya contiene. El audio comprimido a un bitrate bajo pierde agudos para siempre; ningún EQ los devuelve.',
        },
        {
          q: '¿En qué se diferencia del realce de graves?',
          a: 'Son opuestos en el espectro: el realce de graves levanta los graves por debajo de 150 Hz, el realce de agudos levanta los agudos por encima de 3 kHz. ¿Suena apagado y sordo? Agudos. ¿Fino y pequeño? Graves.',
        },
        {
          q: '¿Cuántos agudos debo añadir?',
          a: '+3–6 dB abren la mayoría de las grabaciones apagadas. Pasado +9 dB, las sibilantes (s, sh, t) pueden volverse punzantes: escucha una vez con auriculares antes de exportar.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. El editor está pensado para táctil: arrastra, mueve el control y exporta. Funciona en Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.',
        },
      ],
      sections: [
        {
          heading: 'Un shelf alto por encima de 3 kHz',
          paragraphs: [
            'El realce de agudos es un filtro high-shelf, hasta +15 dB por encima de 3 kHz. Amplifica agudos que el archivo ya tiene. No inventa detalle que una codificación a bajo bitrate tiró.',
            'Un limitador frena los picos para que un realce grande no recorte de golpe. El realce también sube el soplido y la sibilancia que ya estaban en el archivo.',
          ],
        },
        {
          heading: 'Hasta dónde empujarlo',
          paragraphs: [
            'Escúchalo una vez con auriculares antes de exportar:',
          ],
          bullets: [
            'De +3 a +6 dB abre la mayoría de las grabaciones apagadas.',
            'Por encima de +9 dB, los sonidos s, sh y t pueden volverse hirientes.',
            'Si el archivo se codificó a un bitrate bajo, ningún shelf devuelve los agudos que faltan.',
          ],
        },
        {
          heading: 'Agudos, graves y el ecualizador',
          paragraphs: [
            'El aumento de graves sube por debajo de 150 Hz. Esta página sube por encima de 3 kHz. Apagado y velado apunta aquí. Fino y pequeño apunta a los graves.',
            'El ecualizador es las mismas tres zonas, con corte y con realce: shelf bajo a 150 Hz, un pico a 1 kHz y este shelf alto a 3 kHz. Usa el realce cuando ya sabes que solo quieres más agudos.',
          ],
        },
      ],
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'equalizer': {
      cardLine: 'Da forma a graves, medios y agudos con un EQ directo de tres mandos ±15 dB.',
      name: 'Ecualizador de audio',
      shortName: 'Ecualizador',
      title: 'Ecualizador de audio — EQ de 3 bandas online gratis',
      description:
        'Modela graves, medios y agudos con un EQ de 3 bandas real (shelf–pico–shelf). ±15 dB por banda, exporta en MP3 o WAV. Gratis, sin subidas.',
      h1: 'Ecualizador de audio gratuito en línea — Ajustar graves, medios y agudos',
      heroAlt: 'Dar forma al tono de una canción o de una voz',
      subtitle: 'Graves, medios y agudos con ±15 dB por banda — el EQ de tres controles honesto.',
      intro:
        'Tres controles cubren casi todo lo que un EQ debe hacer: graves por debajo de 150 Hz, medios en torno a 1 kHz donde viven las voces y agudos por encima de 3 kHz. Este ecualizador usa bandas de filtro reales — shelf de graves, pico y shelf de agudos — con ±15 dB cada una, para afinar retumbos, bajar el barro o añadir aire. Carga un archivo, moldea el sonido y exporta. Todo ocurre en tu navegador: el archivo nunca se sube.',
      usesHeading: 'Qué hace cada banda',
      uses: [
        'Cortar el barro: −3 a −6 dB en los medios limpia grabaciones de voz cargadas.',
        'Domar el retumbo: baja la banda de graves en grabaciones hechas junto a una pared.',
        'Añadir presencia: sube agudos para aire, graves para cuerpo — los dos a la vez si la mezcla lo pide.',
      ],
      howTo: [
        {
          name: 'Carga tu audio',
          text: 'MP3, WAV, M4A, OGG o FLAC. El procesamiento ocurre en tu dispositivo.',
        },
        {
          name: 'Moldea las tres bandas',
          text: 'Graves por debajo de 150 Hz, medios en torno a 1 kHz, agudos por encima de 3 kHz — ±15 dB cada una. Cortar poco gana a subir mucho.',
        },
        {
          name: 'Compara y exporta',
          text: 'Devuelve una banda a 0 dB para comparar con el original y exporta en MP3 o WAV sin pérdida.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. Las bandas son filtros de la Web Audio API (shelf de graves, pico, shelf de agudos) dentro de tu pestaña: no hay paso de subida. Tras cargar la página puedes desconectarte y la herramienta sigue funcionando.',
        },
        {
          q: '¿Mejor subir o cortar?',
          a: 'Cortar. Los realces grandes empujan la señal hacia el limitador y pueden suavizar picos; un corte de −4 dB en la banda con barro suele lograr más que un realce de +6 dB en cualquier sitio.',
        },
        {
          q: '¿En qué se diferencia del realce de graves y de agudos?',
          a: 'Los realces son shelves de un solo propósito, solo para subir. El ecualizador reúne las tres bandas con corte y realce en un mismo sitio — usa los realces cuando sabes exactamente qué extremo necesitas.',
        },
        {
          q: '¿Cuáles son las frecuencias exactas de cada banda?',
          a: 'Shelf de graves a 150 Hz, pico a 1 kHz (ancho unitario) y shelf de agudos a 3 kHz — la disposición clásica de tres bandas. Las bandas en 0 dB quedan desactivadas, así que una banda que no tocas nunca colorea el sonido.',
        },
        {
          q: '¿Por qué suenan raras las voces al cortar los medios?',
          a: 'La inteligibilidad del habla vive en torno a 1 kHz. Corta la banda de medios con suavidad (−3 a −6 dB) y escucha una frase que conozcas bien: los cortes profundos dejan las voces lejanas o huecas.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. El editor está pensado para táctil: arrastra, mueve los controles y exporta. Funciona en Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.',
        },
      ],
      sections: [
        {
          heading: 'Tres bandas, corte o realce',
          paragraphs: [
            'El ecualizador es un shelf bajo a 150 Hz, un pico a 1 kHz y un shelf alto a 3 kHz. Cada banda recorre unos ±15 dB. Una banda dejada en 0 dB queda en bypass y no colorea el sonido.',
            'Cortar es el movimiento más seguro. Un corte de −4 dB en una banda embarrada suele hacer más que un realce de +6 dB en otro sitio. Los realces grandes empujan la señal hacia el limitador y pueden ablandar los picos.',
          ],
        },
        {
          heading: 'Para qué sirve cada banda',
          paragraphs: [
            'Las tres bandas son el reparto habitual, no un EQ quirúrgico:',
          ],
          bullets: [
            '150 Hz: cuerpo y barro. Corta si el archivo retumba. El aumento de graves solo sube esta zona, hasta +15 dB, y no puede cortar.',
            '1 kHz: presencia. Cortar los medios hace que las voces suenen lejanas.',
            '3 kHz: aire y filo. El realce de agudos solo sube por encima de este punto.',
          ],
        },
        {
          heading: 'Cuándo basta un realce solo',
          paragraphs: [
            'Si ya sabes que solo quieres más graves o más agudos, el aumento de graves y el realce de agudos son las páginas más cortas. No cortan.',
            'Un filtro paso bajo o paso alto es un barrido de corte, no estos shelves. Usa un filtro cuando quieres que desaparezca todo lo que está por encima o por debajo de una frecuencia, no mover unos decibelios.',
          ],
        },
      ],
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'low-pass-filter': {
      cardLine: 'Conserva solo la calidez bajo el corte: ideal para texturas lo-fi y silencios.',
      name: 'Filtro paso bajo',
      shortName: 'Paso bajo',
      title: 'Filtro paso bajo — Cortar frecuencias altas online',
      description:
        'Atenúa lo que queda por encima del corte, de 300 Hz a 20 kHz, en el navegador. Exporta en MP3 o WAV. Gratis, sin subidas.',
      h1: 'Filtro paso bajo gratuito en línea — Cortar las frecuencias altas del audio',
      heroAlt: 'Suavizar los agudos duros de una grabación',
      subtitle: 'Baja el corte desde 20 kHz hasta 300 Hz y conserva solo las frecuencias que quieres.',
      intro:
        'Un filtro paso bajo conserva los graves y atenúa todo lo que queda por encima del corte — la forma honesta de quitar siseo, sibilancia afilada, chirridos y el borde duro de lo digital. A diferencia de un removedor de ruido, nunca adivina qué es ruido: todo lo que queda por encima de tu corte simplemente desaparece. Carga un archivo, baja el corte hasta que la molestia desaparezca y exporta. Todo ocurre en tu navegador: el archivo nunca se sube.',
      usesHeading: 'Cuándo usar un paso bajo',
      uses: [
        'Quitar el siseo constante y el zumbido del aire acondicionado de grabaciones de voz.',
        'Suavizar platillos ásperos o sibilancia en una mezcla sin pulir.',
        'Dejar un sample detrás de otro apagando su parte alta.',
      ],
      howTo: [
        {
          name: 'Carga tu audio',
          text: 'MP3, WAV, M4A, OGG o FLAC. El procesamiento ocurre en tu dispositivo.',
        },
        {
          name: 'Baja el corte',
          text: 'Baja desde 20 kHz hasta que el ruido desaparezca — 8–12 kHz es un punto de reposo habitual para voz.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Comprueba que las voces siguen sonando naturales y exporta en MP3 o WAV sin pérdida.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. El filtro es un biquad paso bajo de la Web Audio API dentro de tu pestaña: no hay paso de subida. Tras cargar la página puedes desconectarte y la herramienta sigue funcionando.',
        },
        {
          q: '¿Un filtro paso bajo es lo mismo que quitar ruido?',
          a: 'No — y ahí está su fortaleza. Un removedor de ruido separa ruido y señal con inteligencia; el paso bajo corta a ciegas todo lo que queda por encima del corte. Para un siseo constante y de banda ancha es más fiable que cualquier algoritmo.',
        },
        {
          q: '¿Por qué las voces suenan apagadas con cortes bajos?',
          a: 'La claridad de las consonantes vive entre 3 y 8 kHz. Por debajo de unos 5 kHz el habla empieza a sonar apagada; por debajo de 2 kHz suena a teléfono. Para voz, prueba primero 8–12 kHz.',
        },
        {
          q: '¿En qué se diferencia del filtro paso alto?',
          a: 'Direcciones opuestas: el paso alto quita rumble, zumbido y retumbo por debajo del corte; el paso bajo quita siseo y aspereza por encima. Usar ambos deja solo la banda elegida.',
        },
        {
          q: '¿Qué corte uso para música?',
          a: 'Para un efecto lo-fi suave prueba 4–8 kHz. Para limpiar platillos afilados, 12–16 kHz suele bastar. Por debajo de 3 kHz la música suena claramente apagada — confía en tus oídos más que en los números.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. El editor está pensado para táctil: arrastra, mueve el corte y exporta. Funciona en Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.',
        },
      ],
      sections: [
        {
          heading: 'Todo lo que está por encima del corte se va',
          paragraphs: [
            'Un filtro paso bajo atenúa lo que está por encima del corte. No es un quitador de ruido. No separa el soplido de la señal. Baja toda frecuencia pasada el punto que marques, incluidas consonantes y platillos si lo pones demasiado bajo.',
            'No hay remuestreo ni cambio de tono. La exportación sigue codificando una vez: MP3, o WAV si quieres el audio filtrado sin otra generación con pérdida.',
          ],
        },
        {
          heading: 'Cortes que encajan con el trabajo',
          paragraphs: [
            'El número es un punto de partida. Escucha, porque el mismo corte apaga un archivo y solo suaviza otro:',
          ],
          bullets: [
            'Voz: prueba primero 8–12 kHz. Por debajo de unos 5 kHz la voz suena velada. Por debajo de 2 kHz suena a teléfono.',
            'Un efecto lo-fi suave en música: 4–8 kHz.',
            'Platillos agudos que solo quieres domar: 12–16 kHz. Por debajo de 3 kHz la música suena claramente apagada.',
          ],
        },
        {
          heading: 'El paso alto es la otra dirección',
          paragraphs: [
            'El filtro paso alto quita retumbe y graves por debajo de su corte. Esta página quita soplido y aspereza por encima del suyo. Usar los dos deja una banda en el medio.',
            'Unos decibelios de agudos, en lugar de quitar la parte alta del todo, es el realce de agudos o el ecualizador. Esos shelves no barren un corte duro.',
          ],
        },
      ],
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'high-pass-filter': {
      cardLine: 'Elimina retumbes y zumbidos bajo el corte para grabaciones de voz más limpias.',
      name: 'Filtro paso alto',
      shortName: 'Paso alto',
      title: 'Filtro paso alto — Quitar rumble y zumbido online',
      description:
        'Corta rumble, zumbido y retumbo con un filtro paso alto real, corte de 20 Hz a 5 kHz, en tu navegador. Exporta en MP3 o WAV. Gratis, sin subidas.',
      h1: 'Filtro paso alto gratuito en línea — Quitar el rumor de una grabación',
      heroAlt: 'Cortar el viento y el zumbido grave de una voz',
      subtitle: 'Sube el corte desde 20 Hz hasta 5 kHz y elimina todo lo que queda por debajo.',
      intro:
        'Rumble, tráfico, ruido de manejo, golpes en la mesa — los graves no deseados vienen de serie en la mayoría de grabaciones reales. Un filtro paso alto conserva todo lo que queda por encima de tu corte y atenúa lo que hay debajo: el arreglo honesto que nunca adivina. Carga un archivo, sube el corte hasta que el rumble desaparezca y la voz siga con cuerpo, y exporta. Todo ocurre en tu navegador: el archivo nunca se sube.',
      usesHeading: 'Cuándo usar un paso alto',
      uses: [
        'Limpiar el rumble del tráfico y los golpes de mesa de podcasts y grabaciones de voz.',
        'Quitar el viento y el ruido de manejo que sobrevivieron a una toma al aire libre.',
        'Apretar una mezcla despejando el barro de subgraves de cada pista que no sea el bajo.',
      ],
      howTo: [
        {
          name: 'Carga tu audio',
          text: 'MP3, WAV, M4A, OGG o FLAC. El procesamiento ocurre en tu dispositivo.',
        },
        {
          name: 'Sube el corte',
          text: 'Sube desde 20 Hz hasta que el rumble desaparezca — 80–120 Hz sienta bien a la mayoría de voces.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Comprueba que la voz no suena fina y exporta en MP3 o WAV sin pérdida.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. El filtro es un biquad paso alto de la Web Audio API dentro de tu pestaña: no hay paso de subida. Tras cargar la página puedes desconectarte y la herramienta sigue funcionando.',
        },
        {
          q: '¿Quita el zumbido de un cable malo?',
          a: 'El zumbido de red se sitúa a 50 o 60 Hz, con armónicos por encima. Un paso alto a 80–120 Hz elimina el fundamental y buena parte del zumbido — para armónicos tercos, combínalo con el filtro paso bajo para estrechar más la banda.',
        },
        {
          q: '¿Hasta dónde puede subir el corte antes de que las voces se afinen?',
          a: 'Las voces masculinas conservan cuerpo hasta unos 100 Hz, las femeninas hasta unos 150–200 Hz. Pasado 300 Hz el habla empieza a sonar a teléfono — puede ser un estilo, pero escucha primero.',
        },
        {
          q: '¿En qué se diferencia del filtro paso bajo?',
          a: 'Direcciones opuestas: el paso alto quita el rumble de baja frecuencia por debajo del corte; el paso bajo quita siseo y aspereza por encima. Encadénalos y solo sobrevive la banda elegida.',
        },
        {
          q: '¿Filtrar reduce la calidad del archivo?',
          a: 'No hay remuestreo ni cambio de tono — el corte solo decide qué frecuencias sobreviven. La exportación recodifica una vez, como siempre: MP3 a 128–320 kbps o WAV bit a bit idéntico.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. El editor está pensado para táctil: arrastra, mueve el corte y exporta. Funciona en Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.',
        },
      ],
      sections: [
        {
          heading: 'Todo lo que está por debajo del corte se va',
          paragraphs: [
            'Un filtro paso alto atenúa lo que está por debajo del corte: retumbe, viento, golpes al manejar el micrófono y el grave de una sala que retumba. No cambia el tono y no remuestrea.',
            'El zumbido de red está en 50 o 60 Hz, con armónicos por encima. Un paso alto alrededor de 80–120 Hz quita el fundamental y buena parte del timbre. Los armónicos rebeldes siguen ahí. Combínalo con el filtro paso bajo si necesitas estrechar más la banda.',
          ],
        },
        {
          heading: 'Hasta dónde antes de que la voz se quede fina',
          paragraphs: [
            'La voz tiene cuerpo en los medios graves. Si empujas el corte demasiado, la voz se queda fina:',
          ],
          bullets: [
            'Las voces graves conservan el cuerpo hasta unos 100 Hz.',
            'Las voces agudas hasta unos 150–200 Hz.',
            'Pasados 300 Hz, la voz empieza a sonar a teléfono. Puede ser un estilo, así que escucha antes de exportar.',
          ],
        },
        {
          heading: 'No es el aumento de graves, ni un shelf de corte',
          paragraphs: [
            'El aumento de graves suma nivel por debajo de 150 Hz. Esta página quita nivel por debajo de un corte que barres. Resuelven problemas opuestos.',
            'El ecualizador puede cortar unos decibelios a 150 Hz y dejar el resto del grave. Úsalo cuando el archivo está un poco embarrado y aún quieres el cuerpo. Usa esta página cuando el retumbe debe desaparecer.',
          ],
        },
      ],
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'fade-audio': {
      cardLine: 'Suaviza finales de canciones e intros de pódcast con fundidos exactos.',
      name: 'Fundido de audio',
      shortName: 'Fundido',
      title: 'Fundido de entrada y salida — Añadir fade online gratis',
      description:
        'Añade un fundido de entrada y de salida a canciones o grabaciones en tu navegador. Duración al décimo, exporta en MP3 o WAV. Gratis y sin subidas.',
      h1: 'Fundido de audio gratuito en línea — Hacer un fundido de salida en la música',
      heroAlt: 'Hacer un fundido de entrada y otro de salida en una pista',
      subtitle: 'Bordes suaves en segundos: fija ambos fundidos al décimo, escucha y exporta. Nada sale de tu dispositivo.',
      intro:
        'Un fundido de entrada hace que una pista empiece desde el silencio; uno de salida la cierra con suavidad. Ahí está la diferencia entre un corte brusco y un final redondo. Carga un archivo, fija cada duración al décimo de segundo y escucha antes de exportar. Todo ocurre en tu navegador: el archivo nunca se sube.',
      usesHeading: 'Cuándo un fundido es la solución',
      uses: [
        'Cerrar con limpieza un mixtape, una sesión de DJ o una compilación en vez de cortarla a mitad de nota.',
        'Suavizar la entrada de un podcast o una nota de voz para que la primera palabra no sobresalte.',
        'Quitar el clic de la costura a un loop o sample para que se repita sin chirridos.',
      ],
      howTo: [
        {
          name: 'Carga tu audio',
          text: 'MP3, WAV, M4A, OGG o FLAC. El procesamiento ocurre en tu dispositivo.',
        },
        {
          name: 'Fija las duraciones',
          text: 'Abre "Ajustar" y define fundido de entrada y de salida: 1–3 segundos suena natural en canciones, 0,2–0,5 en loops.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Reproduce el inicio y el final para oír los fundidos y exporta en MP3 o WAV sin pérdida.',
        },
      ],
      faqs: [
        {
          q: '¿Se sube mi audio?',
          a: 'No. Los fundidos se renderizan con la Web Audio API dentro de tu pestaña: no hay paso de subida. Tras cargar la página puedes desconectarte y la herramienta sigue funcionando.',
        },
        {
          q: '¿El fundido afecta a la calidad?',
          a: 'No. Un fundido solo moldea el volumen en el tiempo: sin reverb ni cambio de tono. La exportación recodifica una vez: MP3 a 128–320 kbps (320 por defecto) o WAV bit a bit idéntico. Tu archivo original no se toca.',
        },
        {
          q: '¿Puedo hacer un crossfade entre dos canciones?',
          a: 'Aquí no: esta página funde un solo archivo de entrada y de salida. Fundir el final de una pista con el inicio de otra es una unión con crossfade, y de eso se encarga el creador de uniones. Repetir un mismo clip con un crossfade corto en cada unión es el repetidor de audio.',
        },
        {
          q: '¿En qué se diferencia del potenciador de volumen?',
          a: 'El potenciador sube el archivo entero una cantidad fija; el fundido moldea el volumen en el tiempo: suave en los bordes, intacto en el centro. Para finales, fundido; para volumen general, potenciador.',
        },
        {
          q: '¿Cuánto debe durar un fundido de salida?',
          a: 'En canciones, 1–3 segundos suele sonar natural; una grabación en directo aguanta 4–5. En loops y tonos, 0,2–0,5 segundos para conservar el ataque. No hay respuesta única: escucha y decide con tus oídos.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. El editor está pensado para táctil: arrastra para seleccionar, mueve los controles y exporta. Funciona en Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.',
        },
      ],
      sections: [
        {
          heading: 'Los extremos se quedan bajos, el centro no',
          paragraphs: [
            'El fundido da forma al volumen en el tiempo, en un solo archivo: una entrada al inicio, una salida al final, o las dos. El centro no se toca. No hay reverberación ni cambio de tono.',
            'En canciones, 1–3 segundos suele sonar natural. Las grabaciones en directo pueden pedir 4–5 segundos. Los bucles y los tonos quieren 0,2–0,5 segundos para no perder el ataque. Escucha el inicio y el final antes de exportar.',
          ],
        },
        {
          heading: 'Para qué sirve un fundido',
          paragraphs: [
            'Úsalo cuando el corte ya está hecho y el borde hace clic o se corta en seco:',
          ],
          bullets: [
            'Un tono o un bucle que no debe hacer un pop al repetirse.',
            'El final de una canción o de una nota de voz que se corta demasiado seco.',
            'El inicio de una grabación que arranca a todo volumen.',
          ],
        },
        {
          heading: 'No es un fundido cruzado, ni una subida de volumen',
          paragraphs: [
            'Mezclar el final de una pista con el inicio de otra es un fundido cruzado, y eso lo hace Unir canciones. Esta página funde un solo archivo al entrar y al salir.',
            'Subir el volumen levanta todo el archivo en una cantidad fija. Un fundido está bajo en los extremos y a nivel en el centro. La exportación es MP3, 320 kbps por defecto, o WAV. El archivo que soltaste no se modifica.',
          ],
        },
      ],
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'audio-trimmer': {
      cardLine: 'Arrastra los tiradores para conservar exactamente la parte que necesitas: pódcasts, notas de voz, cualquier pista.',
      name: 'Recortar audio',
      shortName: 'Recortar audio',
      title: 'Recortar audio online gratis',
      description:
        'Recorta audio online: notas de voz, podcasts y grabaciones. Elige el tramo, escúchalo y guarda. Gratis, sin subir nada.',
      h1: 'Recortar audio online, gratis',
      heroAlt: 'Recortar un MP3 o un pódcast y dejar solo la parte que necesitas',
      subtitle: 'Recorta audio en línea, gratis, en tu navegador. Nada se sube.',
      intro:
        'Corta el tramo exacto que necesitas de cualquier canción, nota de voz, podcast o grabación. Arrastra sobre la forma de onda, escucha la selección y guarda: todo el recorte ocurre en tu dispositivo, así que hasta las grabaciones largas se quedan privadas y empiezan al instante.',
      usesHeading: 'Cortes que terminan la edición',
      uses: [
        'Saca la respuesta de un pódcast y deja fuera los eh de los dos lados.',
        'Extrae un estribillo o un loop de la canción completa, sin un editor de escritorio.',
        'Acorta una nota de voz antes de enviarla, para que el archivo sea solo lo importante.',
      ],
      howTo: [
        {
          name: 'Suelta tu archivo',
          text: 'Arrastra un archivo de audio o video a la zona de la forma de onda, o haz clic para elegirlo. Se admiten MP3, WAV, M4A, OGG, FLAC y más.',
        },
        {
          name: 'Selecciona lo que quieres conservar',
          text: 'Arrastra sobre la forma de onda para marcar el tramo que quieres. Mueve los extremos para afinarlo, o escribe los tiempos exactos de inicio y fin.',
        },
        {
          name: 'Escucha y guarda',
          text: 'Pulsa reproducir para oír solo tu selección y luego haz clic en Exportar para descargar el archivo recortado como MP3 o WAV.',
        },
      ],
      faqs: [
        {
          q: '¿Este recortador de audio es realmente gratis?',
          a: 'Sí. Cada recorte y cada exportación son gratis, sin registro y sin marca de agua. La herramienta funciona por completo en tu navegador, así que no hay costos de servidor que pasarte.',
        },
        {
          q: '¿Mi audio se sube a un servidor?',
          a: 'No. Tu archivo lo decodifica y lo procesa tu propio navegador con la Web Audio API. Puedes quedarte sin conexión después de cargar la página y el recortador sigue funcionando: nunca se envía nada a ningún lado.',
        },
        {
          q: '¿Qué formatos puedo recortar?',
          a: 'Tu navegador puede decodificar MP3, WAV, M4A/AAC, OGG, FLAC y audio WebM. Puedes guardar el resultado como MP3 (128–320 kbps) o WAV sin pérdida.',
        },
        {
          q: '¿Recortar baja la calidad del audio?',
          a: 'Guardar como WAV deja el tramo que conservas idéntico bit a bit, sin volver a comprimir. Guardar como MP3 recodifica una vez; a 192 kbps o más, la diferencia es prácticamente inaudible para la mayoría.',
        },
        {
          q: '¿Puedo recortar audio en el celular?',
          a: 'Sí. La forma de onda responde al tacto, y el botón de exportar queda al alcance, en la parte de abajo de la pantalla. Funciona en Safari en iPhone y en Chrome o Firefox en Android.',
        },
        {
          q: '¿Qué duración puede tener mi archivo?',
          a: 'Las grabaciones de hasta cerca de una hora van bien en una computadora moderna. El límite real es la memoria de tu dispositivo, no un tope artificial. Repetir la parte que dejaste, de 2 a 16 veces, es el repetidor de audio.',
        },
      ],
      sections: [
        {
          heading: 'Marca el tramo que quieres conservar',
          paragraphs: [
            'Arrastra sobre la forma de onda. El inicio y el fin se actualizan mientras arrastras, y puedes escribir los dos tiempos si el dedo o el ratón no llegan al punto. Pulsa reproducir para oír solo ese tramo antes de guardar.',
            'Exporta WAV si vas a recortar otra vez o a seguir editando. Exporta MP3 cuando el clip ya está listo. Un recorte a WAV conserva las muestras que elegiste. Un recorte a MP3 codifica una vez, al bitrate que elijas.',
          ],
        },
        {
          heading: 'Recortar una grabación, o cortar una canción',
          paragraphs: [
            'Esta página es para una grabación que hay que acortar: la respuesta de un pódcast, una nota de voz, una clase, el medio de un archivo largo.',
          ],
          bullets: [
            'Recortar audio, esta página: te quedas con un tramo de cualquier audio o de la pista de un video, y lo guardas como MP3 o WAV.',
            'Cortador de MP3: el mismo tipo de selección, escrito para una canción. Esa página explica cómo quedarte con el coro o borrar una intro.',
            'Quitar silencio: elimina los huecos largos solo. Úsalo cuando el problema es el silencio, no un tramo que tienes que marcar a mano.',
          ],
        },
        {
          heading: 'Qué le hace el recorte al sonido',
          paragraphs: [
            'El archivo se decodifica, se toma el tramo y la exportación se vuelve a escribir. WAV es la copia limpia de lo que conservaste. MP3 a 192 kbps o más basta para voz, y 320 kbps es el ajuste cuando el original es música.',
            'Recortar no hace más fuerte una grabación baja. Súbela en la página de volumen cuando el clip ya tiene la duración correcta.',
          ],
        },
        {
          heading: 'Cuánto puede durar el archivo',
          paragraphs: [
            'Cerca de una hora va bien en un ordenador actual. El límite es la memoria de la pestaña, no un tope que pongamos nosotros. El teléfono aguanta unos minutos sin problema y se vuelve menos estable cuando el archivo es largo.',
          ],
          bullets: [
            'Una nota de voz o la respuesta de un pódcast: recórtala aquí, en el teléfono si quieres.',
            'Un episodio entero: el ordenador es el sitio más estable para escuchar y exportar.',
            'Un video: lo que se recorta es la pista de sonido. La imagen no se guarda.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'mp3-cutter': {
      cardLine: 'Corta una canción hasta el estribillo, el drop o cualquier fragmento sin recodificar.',
      name: 'Cortador de MP3',
      shortName: 'Cortador de MP3',
      title: 'Cortar MP3 online gratis, sin subir archivos',
      description:
        'Corta archivos MP3 online en un par de clics: quédate la mejor parte o quita la intro. Gratis, sin registro, el archivo nunca sale de tu equipo.',
      h1: 'Cortar MP3 online gratis',
      heroAlt: 'Cortar MP3 online gratis',
      subtitle: 'Corta canciones y archivos MP3 en línea: quédate con la parte que quieres y borra el resto.',
      intro:
        'Corta una canción hasta dejar el coro, quita una intro larga o separa un momento destacado, en tu navegador. Elige conservar el tramo seleccionado o eliminarlo, escucha el resultado y guarda un MP3 nuevo en segundos.',
      usesHeading: 'Cortes que la gente hace en un MP3',
      uses: [
        'Quita una intro, una cuña o un silencio largo de una canción o un episodio.',
        'Quédate con un tramo y descarta el resto, en lugar de taparlo con un fundido.',
        'Corta el clip primero si el siguiente paso es un tono de llamada.',
      ],
      howTo: [
        {
          name: 'Agrega tu MP3',
          text: 'Suelta tu MP3 en la página o haz clic para elegir un archivo. Casi todos los demás formatos de audio y video también funcionan.',
        },
        {
          name: 'Marca el tramo que vas a cortar',
          text: 'Arrastra sobre la forma de onda para marcar un tramo. Cambia entre Conservar selección y Eliminar selección según la parte que quieras.',
        },
        {
          name: 'Corta y descarga',
          text: 'Escucha la vista previa y luego exporta el corte como MP3 o WAV sin pérdida. La descarga empieza sola.',
        },
      ],
      faqs: [
        {
          q: '¿Cómo corto solo el coro de una canción?',
          a: 'Selecciona el coro en la forma de onda, confirma que el modo esté en Conservar selección, escúchalo y luego exporta. Obtienes un archivo de audio nuevo con solo esa parte.',
        },
        {
          q: '¿Cómo quito los primeros 30 segundos de un tema?',
          a: 'Selecciona los primeros 30 segundos (los tiempos exactos de inicio y fin se muestran mientras arrastras, y puedes escribirlos con precisión), pon el modo en Eliminar selección y exporta.',
        },
        {
          q: '¿Se conserva la calidad del MP3?',
          a: 'Cortar a WAV deja el audio idéntico bit a bit. Exportar a MP3 recodifica una vez al bitrate que elijas: a 320 kbps casi nadie nota la diferencia.',
        },
        {
          q: '¿Tengo que instalar algo?',
          a: 'No. Este cortador de MP3 es una app web que funciona dentro de la pestaña de tu navegador. No hay nada que instalar ni una cuenta que crear.',
        },
        {
          q: '¿A dónde van mis archivos?',
          a: 'A ningún lado. Tu navegador lee el archivo desde el disco y lo corta en la memoria. No hay subida, ni copia en la nube, ni se conserva nada.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Quédate con el tramo, o bórralo',
          paragraphs: [
            'Arrastra sobre la forma de onda para marcar un tramo. Los tiempos se actualizan mientras arrastras, y puedes escribir el inicio y el fin si el puntero no da la precisión.',
            'Los dos modos hacen lo contrario.',
          ],
          bullets: [
            'Conservar selección: el archivo que guardas es solo el tramo marcado. El coro, el drop o la respuesta que quieres de una grabación larga.',
            'Eliminar selección: el archivo que guardas es todo menos ese tramo. Así quitas los primeros 30 segundos, una intro o una cuña.',
          ],
        },
        {
          heading: 'Cortar un MP3, o recortar una grabación',
          paragraphs: [
            'Esta página es para cortar una canción o un MP3 a un solo tramo. El editor también acepta la mayoría de audios y videos, y el resultado es un MP3 nuevo o un WAV.',
            'El recortador de audio hace el mismo tipo de corte, pensado para podcasts y notas de voz, cuando te quedas con un trozo del medio. Usa esta página para cortar un MP3. Usa el recortador cuando el archivo no es una canción.',
          ],
        },
        {
          heading: 'Qué le pasa al sonido al cortar',
          paragraphs: [
            'Guardar en WAV conserva las muestras que seleccionaste, sin un paso con pérdida extra. Guardar en MP3 codifica una vez, al bitrate que elijas. 320 kbps es el ajuste cuando el corte tiene que sonar casi igual que el original. 192 kbps basta para voz.',
            'El archivo se decodifica, se toma el tramo y la exportación se vuelve a codificar. Una sola codificación a bitrate alto es el corte limpio práctico para una canción que vas a escuchar. Si vas a seguir editando, exporta WAV.',
          ],
        },
        {
          heading: 'Lo que este cortador no hace',
          paragraphs: [
            'Corta un archivo. No hace un fundido entre una lista ni apila varias pistas unas sobre otras.',
          ],
          bullets: [
            'Juntar varias canciones en un solo archivo es el unificador de audio.',
            'Un clip de menos de 40 segundos, guardado como tono de iPhone, es el creador de tonos.',
            'Título, artista y portada son el editor de etiquetas MP3, después de tener el corte.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo MP3 o haz clic para elegirlo',
    },
    'mp3-editor': {
      cardLine: 'Ediciones rápidas en una pestaña: cortar, fundir, invertir, acelerar y normalizar.',
      name: 'Editor de MP3',
      shortName: 'Editor de MP3',
      title: 'Editor de MP3 — Corta, funde, invierte y acelera en línea',
      description:
        'Edita MP3 online: cortar, recortar, fundidos, volumen, velocidad y reproducción inversa. Gratis y privado: todo ocurre en tu navegador.',
      h1: 'Editor de MP3 gratuito en línea — Editar la duración de un MP3',
      heroAlt: 'Cortar, fundir, invertir y cambiar la velocidad de un MP3',
      subtitle: 'Corta, funde, invierte y acelera audio, todo en una pestaña del navegador.',
      intro:
        'Un editor de audio compacto para trabajos rápidos: corta tramos, aplica fundido de entrada y de salida, sube o baja el volumen, acelera o ralentiza los temas y reproduce al revés. Cada edición se aplica en tu dispositivo al exportar. El archivo original se queda intacto en tu disco.',
      usesHeading: 'Ediciones que se quedan en una pestaña',
      uses: [
        'Recorta el archivo y funde los bordes nuevos para que el corte no haga clic.',
        'Acelera o invierte un tramo sin exportar entre herramientas.',
        'Sube un MP3 bajo en la misma pasada, con volumen o normalización.',
      ],
      howTo: [
        {
          name: 'Abre tu archivo',
          text: 'Suelta un MP3, WAV, M4A u otro archivo de audio en el editor. Se decodifica al instante en tu dispositivo.',
        },
        {
          name: 'Edita',
          text: 'Selecciona un tramo para conservarlo o eliminarlo y luego abre Ajustar para agregar fundidos, cambiar el volumen, mover la velocidad de 0.5× a 2× o invertir el tema.',
        },
        {
          name: 'Exporta el resultado',
          text: 'Guarda tu edición como MP3 de hasta 320 kbps, o como WAV sin pérdida. Las ediciones se renderizan en tu navegador, más rápido que en tiempo real, antes de la descarga.',
        },
      ],
      faqs: [
        {
          q: '¿Qué puede hacer este editor de MP3?',
          a: 'Cubre las ediciones rápidas más comunes: recortar y cortar, fundido de entrada y de salida, ajuste de volumen, cambio de velocidad de 0.5× a 2× e invertir. Para grabación multipista o una producción grande, un DAW como Audacity sigue siendo mejor herramienta. Esta es para ediciones rápidas, privadas y en el navegador.',
        },
        {
          q: '¿Mis ediciones destruyen el original?',
          a: 'No. Tu archivo original se queda exactamente como está en el disco. Todas las ediciones se guardan como ajustes en el editor y solo se renderizan en un archivo nuevo cuando exportas.',
        },
        {
          q: '¿El cambio de velocidad mueve el tono?',
          a: 'Sí. La velocidad y el tono se mueven juntos, como un disco que gira más rápido o más lento: a 2× el audio suena cerca de una octava más agudo; a 0.5×, cerca de una octava más grave. Usa pasos pequeños para cambios sutiles. Si necesitas cambiar el tempo y conservar el tono original, exporta primero y pasa el archivo por una herramienta de time-stretch.',
        },
        {
          q: '¿Puedo deshacer un cambio?',
          a: 'Sí. Pulsa Ctrl+Z (Cmd+Z en Mac) para retroceder por tus ediciones recientes, o haz clic en Empezar de nuevo para volver a cargar el estado original del archivo.',
        },
        {
          q: '¿Sirve para grabaciones confidenciales?',
          a: 'Sí. El audio se decodifica y se renderiza en local con la Web Audio API. Nunca se transmite por la red, así que sirve para entrevistas y otro material confidencial.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Qué cambia de verdad este editor',
          paragraphs: [
            'Esta página es el editor de MP3 general: recortas un tramo, fundes los extremos, cambias el volumen o la velocidad, o inviertes el archivo, y exportas un MP3 nuevo. El archivo que soltaste no se sobrescribe.',
            'Aquí la velocidad mueve el tono junto con el tempo. Si solo quieres una voz más aguda o más grave con la misma duración, usa el cambiador de tono. Si solo quieres un archivo más pequeño, usa el compresor de audio.',
          ],
        },
        {
          heading: 'Cuándo abrir una página más concreta',
          paragraphs: [
            'El editor conviene cuando el trabajo mezcla cortes y cambios de nivel. Un solo trabajo tiene un camino más corto:',
          ],
          bullets: [
            'Una canción y quieres quedarte con un estribillo: el cortador de MP3 está escrito para eso.',
            'Un podcast o una nota de voz, recortar los extremos: Recortar audio.',
            'Solo título, artista o carátula: el editor de etiquetas MP3 copia el audio byte a byte.',
          ],
        },
        {
          heading: 'Exportar y deshacer',
          paragraphs: [
            'Exportar escribe un MP3 nuevo. WAV también está en el menú de formato si quieres una copia sin pérdida para otro programa.',
            'Ctrl+Z (Cmd+Z en Mac) deshace los últimos cambios. Restablecer vuelve a cargar el archivo que soltaste. Cerrar la pestaña borra la sesión, porque nada se guarda en un servidor.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'ringtone-maker': {
      cardLine: 'Convierte los 30 segundos más pegadizos de una canción en un tono para iPhone o Android.',
      name: 'Creador de tonos de llamada',
      shortName: 'Tono de llamada',
      title: 'Crear tono de llamada online — Con cualquier canción',
      description:
        'Convierte una canción en tono de llamada: elige los mejores 40 segundos, añade un fundido y exporta M4R o MP3. Gratis, sin registro, nada se sube.',
      h1: 'Creador de tonos de llamada gratuito en línea — Hacer un tono de iPhone a partir de una canción',
      heroAlt: 'Guardar hasta 40 segundos de una canción como M4R o MP3',
      subtitle: 'Elige la mejor parte de cualquier canción y guárdala como tono de llamada, en menos de un minuto.',
      intro:
        'Elige el gancho, el drop o la intro de tu tema favorito y conviértelo en un tono de llamada. La herramienta mantiene tu selección dentro de los 40 segundos clásicos, agrega un fundido si lo quieres y exporta directo a tu teléfono: M4R para iPhone, MP3 para todo lo demás.',
      usesHeading: 'Tonos que sí vas a poner',
      uses: [
        'Toma el gancho de una canción y detente dentro del límite de 40 segundos.',
        'Funde el final para que el tono no se corte a media frase.',
        'Exporta M4R para iPhone, o MP3 si solo necesitas el clip.',
      ],
      howTo: [
        {
          name: 'Agrega una canción',
          text: 'Suelta un MP3, M4A, WAV u otro archivo de audio en la página. Nunca sale de tu dispositivo.',
        },
        {
          name: 'Elige el momento',
          text: 'Arrastra sobre la forma de onda para elegir hasta 40 segundos, la duración justa de un tono de llamada. La selección se limita sola, así que no tienes que calcularlo.',
        },
        {
          name: 'Exporta y pásalo al teléfono',
          text: 'Agrega un fundido si quieres y luego exporta. Elige M4R para iPhone (Chrome, Edge o Safari) o MP3 para Android y cualquier otro teléfono.',
        },
      ],
      faqs: [
        {
          q: '¿Cuánto debe durar un tono de llamada?',
          a: 'La mayoría de los teléfonos suenan entre 20 y 40 segundos antes de que entre el buzón de voz, y un tono más corto va al grano. La herramienta limita tu selección a 40 segundos, la duración clásica de un tono de llamada.',
        },
        {
          q: '¿Cómo lo uso en un iPhone?',
          a: 'Elige M4R en el menú de formato antes de exportar. Chrome, Edge y Safari 17+ lo codifican en tu propio dispositivo, y el archivo descargado se sincroniza con tu iPhone mediante Finder (o iTunes en Windows). En los navegadores sin codificación AAC, como Firefox, exporta MP3 y conviértelo con GarageBand: importa el archivo y luego compártelo como tono de llamada.',
        },
        {
          q: '¿Cómo lo pongo en Android?',
          a: 'Pasa el MP3 exportado a tu teléfono, luego abre Ajustes → Sonido → Tono de llamada y elige el archivo, o usa la app Archivos para ponerlo directo. No hace falta convertirlo.',
        },
        {
          q: '¿El tono se va a repetir mal?',
          a: 'Agrega un fundido de salida corto en Ajustar. Así el regreso al inicio suena natural, en lugar de cortarse a media nota. Escribir ese clip de 2 a 16 veces en un archivo más largo es el repetidor de audio. Esta página se queda dentro de 40 segundos.',
        },
        {
          q: '¿Hay marca de agua o algún límite?',
          a: 'No hay marca de agua, ni registro, ni tope diario. El tono se renderiza en tu propio dispositivo y se descarga directo desde el navegador.',
        },
      ],
      sections: [
        {
          heading: 'Cómo una canción se vuelve tono de llamada',
          paragraphs: [
            'Un tono es un fragmento corto, no la canción entera. Selecciona el tramo y la exportación se limita a 40 segundos para que quepa en el hueco del tono.',
            'Añade un fundido corto al inicio y al final si el corte haría un clic. El fundido solo suaviza esos bordes. No sube el volumen de una canción baja.',
          ],
        },
        {
          heading: 'Qué archivo acepta el teléfono',
          paragraphs: [
            'Elige el formato antes de exportar. El menú está pensado para lo que los teléfonos instalan de verdad:',
          ],
          bullets: [
            'M4R para iPhone. Chrome, Edge y Safari 17+ lo codifican en el dispositivo. Sincroniza el archivo con Finder, o con iTunes en Windows.',
            'Firefox no codifica AAC. Exporta MP3 y crea el tono en GarageBand.',
            'MP3 a 320, 192 o 128 kbps, o WAV, cuando el teléfono o la app aceptan eso en lugar de M4R.',
          ],
        },
        {
          heading: 'Qué no hace esta página',
          paragraphs: [
            'No sube la canción y no instala el tono en el teléfono. Descargas un archivo y lo pasas como ese teléfono ya espera.',
            'Acortar una canción larga para escucharla, y no para un tono, corresponde al cortador de MP3. Esa página no está limitada a 40 segundos.',
          ],
        },
      ],
      dropHint: 'Suelta una canción o haz clic para elegirla',
    },
    'audio-joiner': {
      cardLine: 'Une notas de voz, canciones o episodios de pódcast en un solo archivo continuo.',
      name: 'Unir canciones',
      shortName: 'Unir canciones',
      title: 'Unir canciones online gratis — Une MP3 y audio',
      description:
        'Une canciones y archivos de audio en una pista, en el orden que quieras. Fundidos opcionales entre pistas: gratis, privado, sin subir archivos.',
      h1: 'Unir canciones gratuito en línea — Juntar varios MP3 en uno',
      heroAlt: 'Encadenar canciones y notas de voz una tras otra',
      subtitle: 'Une canciones y archivos de audio en una sola pista, en el orden que quieras, en segundos.',
      intro:
        'Combina varias canciones, episodios de podcast o grabaciones de voz en un solo archivo. Agrega todas las pistas que quieras, cambia el orden y, si quieres, funde el inicio y el final. La unión ocurre en tu dispositivo: hasta las colecciones grandes se unen al instante y se quedan privadas.',
      usesHeading: 'Pistas que vale la pena unir',
      uses: [
        'Pon una nota de voz delante de una canción, en el orden que elijas.',
        'Junta grabaciones por capítulos en un archivo, para un reproductor sin listas.',
        'Haz un crossfade en las uniones para que los clips seguidos no den un golpe.',
      ],
      howTo: [
        {
          name: 'Agrega tus pistas',
          text: 'Suelta dos o más archivos de audio en la página, o haz clic para elegir varios a la vez. Da igual si los formatos están mezclados: se igualan solos.',
        },
        {
          name: 'Define el orden',
          text: 'Cambia el orden con los botones de flecha, o quita cualquier pista si cambias de idea. La duración total se actualiza sobre la marcha.',
        },
        {
          name: 'Une y guarda',
          text: 'Agrega fundidos si quieres, haz clic en Exportar y descarga el archivo unido como MP3 o WAV.',
        },
      ],
      faqs: [
        {
          q: '¿Puedo unir formatos de audio distintos?',
          a: 'Sí. Primero los archivos se decodifican y se igualan a una misma frecuencia de muestreo, así que puedes unir un MP3 con un WAV y un M4A de una sola vez. El formato de salida lo eliges tú.',
        },
        {
          q: '¿Cuántos archivos puedo unir?',
          a: 'No hay un límite fijo: decenas de pistas funcionan bien. El tope real es la memoria de tu dispositivo, porque todo se procesa en local.',
        },
        {
          q: '¿Puedo cambiar el orden de las canciones?',
          a: 'Sí. Usa las flechas de arriba y de abajo junto a cada pista para reordenar la secuencia antes de unir. La duración de la vista previa se actualiza al instante.',
        },
        {
          q: '¿Las pistas se cruzan con un crossfade?',
          a: 'Sí. Mueve el control de crossfade para solapar el final de cada pista con el inicio de la siguiente: al unir se aplica un fundido suave entre pistas vecinas. Déjalo en cero para un corte seco, sin pausa, entre pistas.',
        },
        {
          q: '¿La calidad del archivo unido es buena?',
          a: 'Unir a WAV no tiene pérdida: el audio no se vuelve a comprimir. La exportación a MP3 recodifica una vez, hasta 320 kbps, y a ese nivel casi nadie nota la diferencia.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Añades archivos y los subes o bajas con los botones. Se pulsan con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Varios archivos largos usan más memoria, así que con una pila larga el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Unir es un archivo detrás de otro',
          paragraphs: [
            'Unir canciones pone archivos enteros en fila: canción, nota de voz, siguiente capítulo. Puedes reordenar la lista y poner un fundido cruzado para que el final de uno se solape con el inicio del siguiente.',
            'Pon el fundido cruzado a cero para un corte seco, sin hueco. Los formatos mezclados se decodifican y salen en una sola exportación. No es una mesa de mezclas: las pistas no suenan a la vez.',
          ],
        },
        {
          heading: 'Para qué sirve esta página',
          paragraphs: [
            'Úsala cuando el resultado deba ser un solo archivo que un reproductor abre sin lista de reproducción:',
          ],
          bullets: [
            'Una nota de voz delante de una canción, en el orden que elijas.',
            'Grabaciones por capítulos, juntas, para un reproductor sin listas.',
            'Clips seguidos con un fundido cruzado corto para que los empalmes no hagan un clic.',
          ],
        },
        {
          heading: 'Cuando necesitas capas',
          paragraphs: [
            'Voz sobre música, nivel y panorama por clip, silencio y solo: eso es el editor multipista, hasta ocho pistas. Unir canciones no baja la música bajo la voz.',
            'No hay un número fijo de archivos. El límite es la memoria del dispositivo, porque la unión se queda en el navegador. No se sube nada.',
          ],
        },
      ],
      dropHint: 'Suelta dos o más archivos de audio, o haz clic para elegirlos',
    },
    'wav-to-mp3': {
      cardLine: 'Reduce grabaciones WAV pesadas a MP3 compartibles con el bitrate que elijas.',
      name: 'Convertidor de WAV a MP3',
      shortName: 'WAV a MP3',
      title: 'Convertir WAV a MP3 online gratis — 320 kbps',
      description:
        'Convierte WAV a MP3 en tu navegador: 128, 192 o 320 kbps. Gratis y sin registro. Tu audio se convierte en local y nunca se sube a un servidor.',
      h1: 'Convertidor de WAV a MP3 gratuito en línea — Convertir WAV a MP3',
      heroAlt: 'Convertir un archivo WAV a MP3 de 320 kbps',
      subtitle: 'Convierte archivos WAV a MP3 en segundos, en tu navegador. Nada se sube.',
      intro:
        'Pasa grabaciones WAV pesadas a MP3 compactos sin instalar nada ni enviar tu audio a un servidor. Suelta el archivo, elige un bitrate — 320 kbps para música, 128 kbps para voz — y la conversión ocurre en tu propio dispositivo, casi siempre en un par de segundos.',
      usesHeading: 'WAV que vale la pena convertir',
      uses: [
        'Reduce una grabación de estudio o de campo hasta que se pueda enviar.',
        'Pasa una exportación sin pérdida a un MP3 de 192 o 320 kbps para escuchar a diario.',
        'Convierte primero y recorta después. Un WAV es demasiado grande para arrastrarlo dos veces.',
      ],
      howTo: [
        {
          name: 'Suelta tu WAV',
          text: 'Arrastra un archivo .wav a la página o haz clic para elegirlo. Otros formatos de audio (M4A, FLAC, OGG) se convierten igual.',
        },
        {
          name: 'Elige un bitrate',
          text: '320 kbps no se distingue del original para casi todo el mundo; 192 kbps es un buen equilibrio; 128 kbps mantiene pequeñas las grabaciones de voz.',
        },
        {
          name: 'Convierte y descarga',
          text: 'Haz clic en Convertir a MP3. El codificador se ejecuta en tu navegador y el MP3 se descarga directo a tu dispositivo.',
        },
      ],
      faqs: [
        {
          q: '¿Convertir WAV a MP3 pierde calidad?',
          a: 'El MP3 tiene pérdida, así que se descarta parte de la información. A 320 kbps, en una prueba a ciegas, casi nadie distingue el MP3 del WAV. Si necesitas cero pérdida, conserva el WAV; este convertidor existe para ocupar menos espacio y reproducirse en todas partes.',
        },
        {
          q: '¿Qué bitrate debo elegir?',
          a: 'Usa 320 kbps para la música que vas a guardar, 192 kbps para escuchar y compartir todos los días, y 128 kbps para notas de voz, podcasts y grabaciones de clase. La voz necesita mucho menos que la música.',
        },
        {
          q: '¿Cuánto más pequeño queda el MP3?',
          a: 'Más o menos la décima parte: un WAV de 50 MB queda en unos 4–5 MB a 192 kbps, y cerca de 11 MB a 320 kbps. Los números exactos dependen de la duración y de la frecuencia de muestreo.',
        },
        {
          q: '¿Se conservan las etiquetas y la portada del WAV?',
          a: 'Por ahora no. El MP3 se escribe sin metadatos, así que el título, el artista y la portada no pasan. Puedes volver a agregar las etiquetas después con cualquier editor de metadatos.',
        },
        {
          q: '¿El archivo WAV se sube a algún lado?',
          a: 'No. El archivo se decodifica en tu navegador, se codifica a MP3 con una biblioteca que viene con este sitio y se guarda de vuelta en tu disco. El audio en sí nunca sale de tu dispositivo.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Eliges el archivo y la conversión se queda en esta pestaña. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Qué bitrate elegir',
          paragraphs: [
            'El MP3 descarta parte del WAV. El bitrate es cuánto conserva.',
          ],
          bullets: [
            '320 kbps: música que quieres guardar. A este ritmo la mayoría no distingue el MP3 del WAV.',
            '192 kbps: para escuchar todos los días y para archivos que vas a enviar.',
            '128 kbps: notas de voz, podcasts y clases. La voz necesita menos que la música.',
          ],
        },
        {
          heading: 'Cuánto más pequeño queda el MP3',
          paragraphs: [
            'Un WAV guarda cada muestra. Un MP3 guarda una versión comprimida de lo que se puede oír. Un WAV de 50 MB queda en unos 4–5 MB a 192 kbps, y cerca de 11 MB a 320 kbps. El tamaño exacto sigue la duración y la frecuencia de muestreo.',
            'Si todavía necesitas el original, conserva el WAV. Esta página existe para que la copia que compartes suene en un teléfono, en el coche y en un altavoz viejo, y para que el archivo quepa en un envío.',
          ],
        },
        {
          heading: 'El título, el artista y la portada no se copian',
          paragraphs: [
            'El MP3 se escribe sin los metadatos del WAV. El título, el artista y la portada no pasan. Añádelos después en el editor de etiquetas MP3 si el reproductor mostraría un nombre en blanco.',
            'Los M4A, FLAC y OGG que sueltes aquí se convierten igual. El FLAC tiene su propia página si ese es el formato de partida. Esta página es la del WAV.',
          ],
        },
        {
          heading: 'Primero convierte, después recorta',
          paragraphs: [
            'Esta página convierte el archivo entero. No saca un tramo del WAV.',
          ],
          bullets: [
            'Solo necesitas un minuto de una grabación larga: convierte y luego abre el recortador de audio.',
            'El archivo ya es un MP3 y solo lo quieres más pequeño: el compresor de audio, no esta página.',
            'Vas a seguir editando después de convertir: 320 kbps, o conserva el WAV y edita ese.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo WAV o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'flac-to-mp3': {
      cardLine: 'Convierte archivos FLAC sin pérdida a MP3 para reproductores y apps sin soporte FLAC.',
      name: 'Convertidor de FLAC a MP3',
      shortName: 'FLAC a MP3',
      title: 'Convertir FLAC a MP3 online gratis — 320 kbps',
      description:
        'Convierte FLAC a MP3 en tu navegador: 128, 192 o 320 kbps. Gratis, sin registro: tu música se convierte en local y nunca se sube.',
      h1: 'Convertidor de FLAC a MP3 gratuito en línea — Convertir FLAC a MP3',
      heroAlt: 'Convertir un archivo FLAC a MP3 de 320 kbps',
      subtitle: 'Convierte archivos FLAC a MP3 en segundos, en tu navegador y sin subir nada.',
      intro:
        'El FLAC suena perfecto y ocupa medio disco duro en demostrarlo. Pasa tu biblioteca sin pérdida a MP3 compactos que funcionan en el estéreo del coche, altavoces Bluetooth y equipos antiguos: suelta los archivos, elige un bitrate y la conversión ocurre en tu propio dispositivo. Una canción FLAC de 25 MB se convierte en un MP3 de 12 MB a 320 kbps en un par de segundos.',
      usesHeading: 'FLAC que merecen convertirse',
      uses: [
        'Hacer que tu biblioteca sin pérdida suene en el coche y en equipos viejos.',
        'Reducir un álbum antes de un viaje sin Wi-Fi o de compartir una carpeta.',
        'Convertir primero y recortar después las canciones que de verdad repites.',
      ],
      howTo: [
        {
          name: 'Suelta tu FLAC',
          text: 'Arrastra un archivo .flac a la página o haz clic para elegirlo. Otros formatos sin pérdida se convierten igual.',
        },
        {
          name: 'Elige un bitrate',
          text: '320 kbps resulta transparente para casi todo el mundo; 192 kbps es el equilibrio del día a día; 128 kbps mantiene pequeños los audiolibros y pódcast.',
        },
        {
          name: 'Convierte y descarga',
          text: 'Pulsa Convertir a MP3. El codificador funciona en tu navegador y el MP3 se descarga directamente a tu dispositivo.',
        },
      ],
      faqs: [
        {
          q: '¿Convertir FLAC a MP3 pierde calidad?',
          a: 'El MP3 es con pérdida, así que algo de información se descarta — pero a 320 kbps casi nadie distingue el MP3 del FLAC en una prueba a ciegas. Guarda el FLAC como copia de archivo y trata el MP3 como la copia portátil.',
        },
        {
          q: '¿Qué bitrate debería elegir?',
          a: '320 kbps para la música que conservas, 192 kbps para el día a día y para compartir, 128 kbps para audiolibros, pódcast y grabaciones de clase — la voz necesita mucho menos que la música.',
        },
        {
          q: '¿Cuánto pesa menos el MP3?',
          a: 'Una canción típica de cinco minutos baja de unos 25 MB en FLAC a unos 12 MB a 320 kbps, 7 MB a 192 y 5 MB a 128. Las cifras exactas dependen de la duración y la tasa de muestreo.',
        },
        {
          q: '¿Se conservan las etiquetas y las portadas del FLAC?',
          a: 'Por ahora no — el MP3 se escribe sin metadatos, así que título, artista y portada no viajan con el archivo. Puedes volver a añadirlos con cualquier editor de etiquetas.',
        },
        {
          q: '¿Mi FLAC se sube a algún sitio?',
          a: 'No. El archivo se decodifica en tu navegador y se codifica a MP3 con una biblioteca que viene con este sitio. El audio nunca sale de tu dispositivo.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Eliges el archivo y la conversión se queda en esta pestaña. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Por qué pasar de FLAC a MP3',
          paragraphs: [
            'FLAC no pierde calidad y pesa. MP3 es lo que abren la mayoría de teléfonos, coches y reproductores viejos. Un FLAC de 25 MB suele quedar cerca de 12 MB a 320 kbps, y menos a 192 o 128.',
            'La conversión decodifica el FLAC y codifica un MP3 nuevo. No conserva el archivo bit a bit. Si aún necesitas el máster sin pérdida, guarda el FLAC.',
          ],
        },
        {
          heading: 'Bitrate y lo que se pierde',
          paragraphs: [
            'El menú de formato es solo MP3, a tres bitrates:',
          ],
          bullets: [
            '320 kbps cuando el archivo debe quedarse cerca del FLAC para escuchar.',
            '192 kbps para voz o una copia más pequeña que vas a transmitir.',
            '128 kbps cuando el tamaño importa más que la octava alta.',
          ],
        },
        {
          heading: 'Etiquetas, carátula y el siguiente retoque',
          paragraphs: [
            'Título, artista y carátula no se copian. El MP3 se escribe sin metadatos. Vuelve a ponerlos con el editor de etiquetas MP3 después de exportar.',
            'Recorta después de convertir, no antes, si quieres el retoque en el archivo pequeño. WAV a MP3 es la página hermana cuando el origen es WAV, no FLAC.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo FLAC o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'mp3-to-wav': {
      cardLine: 'Pasa MP3 a WAV para editar, transcribir o escuchar con detalle.',
      name: 'Convertidor de MP3 a WAV',
      shortName: 'MP3 a WAV',
      title: 'Convertir MP3 a WAV online gratis',
      description:
        'Convierte MP3 a WAV sin pérdida en tu navegador, para editar, archivar y apps que piden PCM. Gratis, sin registro, sin subidas.',
      h1: 'Convertidor de MP3 a WAV gratuito en línea — Convertir un MP3 en un archivo WAV',
      heroAlt: 'Decodificar un MP3 a un WAV sin comprimir',
      subtitle: 'Decodifica MP3 a audio PCM limpio en segundos, en tu navegador y sin subir nada.',
      intro:
        'Convertir MP3 a WAV no recupera lo que la compresión eliminó — no hay herramienta que pueda. Lo que te da es el audio decodificado como PCM limpio de 16 bits, sin más pérdidas: la entrada correcta para editores de audio, samplers y todo lo que pide WAV, y el punto de partida más seguro si el archivo va a editarse. La decodificación ocurre en tu dispositivo, normalmente en un segundo.',
      usesHeading: 'Razones para pasar a WAV',
      uses: [
        'Darle a un MP3 a un editor, DAW o app que solo acepta WAV.',
        'Cortar la pérdida de generación: edita en WAV y vuelve a comprimir a MP3 solo al final.',
        'Guardar una copia decodificada junto al original antes de seguir editando.',
      ],
      howTo: [
        {
          name: 'Suelta tu MP3',
          text: 'Arrastra un archivo .mp3 a la página o haz clic para elegirlo. Otros formatos comprimidos se decodifican igual.',
        },
        {
          name: 'Deja marcado WAV',
          text: 'El formato de salida está fijado a WAV sin pérdida — PCM de 16 bits a la tasa de muestreo original del archivo.',
        },
        {
          name: 'Convierte y descarga',
          text: 'Pulsa Convertir a WAV. El audio decodificado se escribe en local y la descarga empieza al instante.',
        },
      ],
      faqs: [
        {
          q: '¿Convertir MP3 a WAV mejora la calidad?',
          a: 'No — y desconfía de cualquier convertidor que lo prometa. Los datos que el codificador descartó ya no están. El WAV contiene exactamente lo que el MP3 decodifica, y justo por eso es el formato adecuado para seguir editando: no añade otra generación con pérdida.',
        },
        {
          q: '¿Y para qué convertir a WAV entonces?',
          a: 'Para editar y archivar. El WAV es el formato que esperan los editores de audio, los samplers y las herramientas de grabación de CD, y un máster sin pérdida evita acumular artefactos cada vez que procesas el archivo. El flujo honesto: pasa a WAV, edita y exporta a MP3 una sola vez al final.',
        },
        {
          q: '¿Sirve cualquier bitrate de MP3?',
          a: 'Todos — la decodificación es exacta para cualquier MP3 válido, de 64 a 320 kbps. El WAV simplemente contendrá lo que el MP3 tenga, a su tasa de muestreo original.',
        },
        {
          q: '¿Cuánto pesará el WAV?',
          a: 'Unas diez veces el MP3. Una canción de tres minutos a 44,1 kHz estéreo ronda los 30 MB como PCM de 16 bits — ese es el tamaño real del audio sin comprimir, no una ineficiencia del conversor.',
        },
        {
          q: '¿Mi MP3 se sube a algún sitio?',
          a: 'No. El archivo se decodifica en tu navegador y se escribe como WAV en local. Nada sale de tu dispositivo.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Eliges el archivo y la conversión se queda en esta pestaña. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'De MP3 a WAV no devuelve lo que el MP3 tiró',
          paragraphs: [
            'La página decodifica el MP3 a WAV PCM de 16 bits. Editores y DAW que rechazan MP3 pueden abrir ese WAV. Los agudos que faltan de la codificación original no vuelven.',
            'Úsalo cuando el siguiente paso no deba añadir otra generación de MP3: corta, funde o mezcla el WAV, y codifica una sola vez al final.',
          ],
        },
        {
          heading: 'Cuándo merece la pena',
          paragraphs: [
            'El menú de formato exporta solo WAV. Conviene en unos casos concretos:',
          ],
          bullets: [
            'Un programa o una grabadora que solo acepta WAV.',
            'Un retoque que codificarás una vez después, para no apilar MP3 sobre MP3.',
            'Entregar a alguien que pidió PCM, no un MP3 más pequeño.',
          ],
        },
        {
          heading: 'Tamaño y la otra dirección',
          paragraphs: [
            'El WAV pesa mucho más que el MP3. Ese tamaño es el PCM sin comprimir, no detalle nuevo.',
            'El camino contrario, WAV a MP3, es otra página, y ahí eliges el bitrate. Hacer un MP3 más pequeño sin pasarlo a WAV es el compresor de audio.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo MP3 o haz clic para elegirlo',
      exportLabel: 'Convertir a WAV',
    },
    'compress-audio': {
      cardLine: 'Reduce archivos de audio grandes a un tamaño o bitrate objetivo sin que se note.',
      name: 'Compresor de audio',
      shortName: 'Compresor',
      title: 'Comprimir audio online gratis — reduce el tamaño',
      description:
        'Reduce el peso de archivos MP3, WAV y otros audios en tu navegador — elige un bitrate más bajo, escucha y descarga. Gratis, sin subidas.',
      h1: 'Compresor de MP3 gratuito en línea — Reducir el tamaño de un MP3',
      heroAlt: 'Volver a codificar un WAV o un MP3 grande a un bitrate más bajo',
      subtitle: 'Baja el bitrate y el archivo sigue sonando — reduce el audio hasta un 90% en tu navegador.',
      intro:
        'Los archivos de audio pesan por su bitrate, y la forma honesta de reducirlos es recodificarlos a un bitrate más bajo: un MP3 de 320 kbps pasa a 128 kbps con un 40% de su tamaño, y un WAV pesado se convierte en MP3 a la décima parte. Elige el tamaño objetivo, escucha la vista previa y exporta — la codificación ocurre en tu dispositivo, así que hasta las grabaciones largas terminan en segundos.',
      usesHeading: 'Archivos que merecen encoger',
      uses: [
        'Meter una clase o una nota de voz bajo el límite de tamaño de un correo o chat.',
        'Pasar una exportación en WAV a MP3 pequeños para un enlace de revisión rápida.',
        'Bajar una biblioteca de 320 kbps a 128 kbps para un móvil que escucha con datos.',
      ],
      howTo: [
        {
          name: 'Suelta tu archivo',
          text: 'Añade un MP3, WAV, M4A u otro audio. Se decodifica en tu dispositivo y nunca se sube.',
        },
        {
          name: 'Elige el tamaño objetivo',
          text: 'Menos bitrate, menos peso: 192 kbps para música del día a día, 128 kbps sigue sonando bien a la mayoría, 64–96 kbps es ideal para la voz.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Escucha la vista previa comprimida y guarda. Comprueba que las voces y los platillos siguen limpios al bitrate elegido.',
        },
      ],
      faqs: [
        {
          q: '¿Cómo funciona la compresión de audio aquí?',
          a: 'El archivo se decodifica y se recodifica como MP3 al bitrate que elijas. El peso escala con el bitrate: un minuto de estéreo ronda los 2,4 MB a 320 kbps, 1 MB a 128 y 0,5 MB a 64.',
        },
        {
          q: '¿Qué bitrate mantiene la buena calidad?',
          a: '192 o 320 kbps para la música que te importa; 128 kbps para escucha casual — la mayoría no distingue fiablemente un 320 en un test a ciegas. La voz y los pódcast siguen claros hasta 64–96 kbps.',
        },
        {
          q: '¿Comprimir puede empeorar la calidad?',
          a: 'Sí, en un caso concreto: recodificar un MP3 ya comprimido a un bitrate mucho más bajo apila una segunda generación con pérdida sobre la primera. Comprimir desde WAV o FLAC es más limpio — si conservas el original, siempre puedes probar otro bitrate.',
        },
        {
          q: '¿Hasta cuánto puedo reducir?',
          a: '64 kbps es el límite práctico: unos 0,5 MB por minuto. La voz queda perfectamente clara; la música empieza a sonar sorda y con siseo. Por debajo de eso, códecs dedicados como Opus rinden mejor que el MP3.',
        },
        {
          q: '¿Mi archivo se sube a algún sitio?',
          a: 'No. La decodificación y la codificación ocurren dentro de la pestaña de tu navegador — puedes desconectar internet tras cargar la página y la compresión seguirá funcionando.',
        },
        {
          q: '¿Esto iguala las partes fuertes y flojas?',
          a: 'No. Esta página solo vuelve a codificar a un bitrate más bajo para que el archivo ocupe menos. Para bajar los picos y subir las palabras flojas, usa el compresor de nivel. El bitrate de esa exportación lo eliges tú.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Eliges el archivo y la conversión se queda en esta pestaña. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Este compresor reduce el archivo, no la dinámica',
          paragraphs: [
            'El compresor de audio vuelve a codificar a un bitrate de MP3 más bajo. Un archivo de 320 kbps a 128 kbps queda cerca del 40 por ciento del tamaño. Las partes bajas y altas siguen en la misma relación.',
            'Igualar una voz alta y una baja es el compresor de nivel, otra página. Esa no hace el archivo más pequeño.',
          ],
        },
        {
          heading: 'Qué bitrate elegir',
          paragraphs: [
            'El menú va de 320 hasta 64 kbps. Elige según el archivo:',
          ],
          bullets: [
            '192 o 320 kbps para música que vas a escuchar con atención.',
            '128 kbps para voz, una nota de voz o una copia que tienes que enviar.',
            '64 o 96 kbps solo cuando el destino es muy pequeño y basta con la voz.',
          ],
        },
        {
          heading: 'Lo que cuesta una segunda codificación',
          paragraphs: [
            'Cada pasada tira un poco más. Si el archivo ya está a 128 kbps, volver a codificarlo a 128 no ayuda, y bajarlo lo deja más apagado.',
            'Etiquetas y carátula no entran en esta reducción. Si el MP3 ya es pequeño y solo necesitas un título o una portada nuevos, usa el editor de etiquetas MP3, que copia el audio byte a byte.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
      exportLabel: 'Comprimir',
    },
    'reverse-audio': {
      cardLine: 'Reproduce una pista al revés para crear efectos, revisar una mezcla o por diversión.',
      name: 'Invertir audio',
      shortName: 'Invertir audio',
      title: 'Invertir audio — Reproduce canciones al revés, gratis',
      description:
        'Reproduce cualquier canción o grabación al revés en tu navegador. Un clic para invertir, escucha al instante y guarda como MP3 o WAV. Gratis, y nada se sube.',
      h1: 'Audio al revés gratuito en línea — Reproducir una canción hacia atrás',
      heroAlt: 'Dar la vuelta a una nota de voz para oírla desde el final',
      subtitle: 'Reproduce cualquier canción o grabación al revés: un clic, en tu navegador.',
      intro:
        'Voltea cualquier tema para que suene del final al inicio: busca mensajes ocultos en canciones, arma efectos de platillo al revés para una mezcla, o simplemente escucha cómo suena tu voz invertida. El archivo completo se invierte en tu dispositivo y solo se escribe cuando exportas.',
      usesHeading: 'Razones para dar la vuelta a un archivo',
      uses: [
        'Escucha una mezcla o una frase escondida al revés.',
        'Arma un swell invertido a partir de un golpe de platillo o de una voz.',
        'Invierte solo la selección y deja el resto del archivo quieto.',
      ],
      howTo: [
        {
          name: 'Agrega tu audio',
          text: 'Suelta un MP3, WAV, M4A u otro archivo en la página. Nunca sale de tu dispositivo.',
        },
        {
          name: 'Inviértelo',
          text: 'Haz clic en Reproducir al revés y pulsa reproducir para oír el tema de atrás hacia adelante. Haz clic otra vez para regresarlo.',
        },
        {
          name: 'Guarda el resultado',
          text: 'Exporta el audio invertido como MP3 o WAV sin pérdida. La descarga empieza sola.',
        },
      ],
      faqs: [
        {
          q: '¿Para qué reproducir una canción al revés?',
          a: 'Los músicos usan el audio invertido para efectos: platillos que entran al revés, solos de guitarra hacia atrás, texturas ambientales. También es la forma clásica de revisar un tema por mensajes ocultos grabados al revés (backmasking) y, la verdad, escuchar tu propia voz al revés es divertido.',
        },
        {
          q: '¿Invertir cambia la calidad?',
          a: 'No. Exportar a WAV solo reordena las muestras: el audio queda idéntico bit a bit al original, solo que al revés. La exportación a MP3 recodifica una vez al bitrate que elijas.',
        },
        {
          q: '¿Puedo invertir solo una parte de una canción?',
          a: 'Sí. Selecciona la parte que quieres en la forma de onda, pon el modo en Conservar selección y luego pulsa Reproducir al revés. Solo se exporta ese tramo, al revés.',
        },
        {
          q: '¿Funciona en el celular?',
          a: 'Sí. El botón de invertir y la forma de onda responden al tacto, y la exportación se descarga directo en iOS y Android.',
        },
        {
          q: '¿Invertir es realmente gratis y privado?',
          a: 'Sí: sin registro, sin marca de agua y sin límites. La inversión ocurre en tu navegador con la Web Audio API, así que el archivo nunca se sube a ningún lado.',
        },
      ],
      sections: [
        {
          heading: 'Invertir reproduce las muestras al revés',
          paragraphs: [
            'La página da la vuelta al audio seleccionado para que el final suene primero. Puedes invertir el archivo entero o solo la selección. Invertir no cambia el volumen ni el tono.',
            'La exportación sigue siendo una codificación. WAV guarda el PCM invertido sin una generación de MP3. MP3 escribe un archivo nuevo del audio invertido.',
          ],
        },
        {
          heading: 'Para qué se usa',
          paragraphs: [
            'Es una inversión directa, no un descifrador de mensajes ni un separador de pistas:',
          ],
          bullets: [
            'Un platillo o un golpe invertido como entrada.',
            'Escuchar una frase al revés, solo la selección, y deshacer.',
            'Un archivo entero invertido para diseño de sonido.',
          ],
        },
        {
          heading: 'Qué se queda igual',
          paragraphs: [
            'Deshacer vuelve atrás. Restablecer carga de nuevo el archivo que soltaste. El archivo original en el disco no se sobrescribe.',
            'Si el objetivo es una canción más lenta o una voz más grave, invertir no es el control. La velocidad cambia el tono con el tempo. El cambiador de tono mantiene la duración.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'change-audio-speed': {
      cardLine: 'Acelera clases a 2× o ralentiza riffs para aprenderlos: el tono se mantiene.',
      name: 'Cambiar velocidad del audio',
      shortName: 'Cambiar velocidad',
      title: 'Acelerar audio online — o ralentizarlo',
      description:
        'Acelera o ralentiza cualquier audio de 0.5× a 2× en tu navegador. Escucha al instante y exporta MP3 o WAV. Gratis, privado, y nada se sube.',
      h1: 'Cambiador de velocidad gratuito en línea — Acelerar o ralentizar el audio',
      heroAlt: 'Bajar una canción para practicar, o acelerar una clase',
      subtitle: 'Acelera o ralentiza cualquier audio de 0.5× a 2×, en tu navegador.',
      intro:
        'Convierte una clase de 40 minutos en 20 minutos rápidos, baja un solo de guitarra a la mitad de velocidad para practicarlo, o mete un tema en un hueco de video más corto. Arrastra el control de velocidad, escucha el cambio al instante y exporta. El audio se remuestrea en tu dispositivo y nunca se sube.',
      usesHeading: 'Velocidades que encajan con el trabajo',
      uses: [
        'Baja una voz o un solo a la mitad cuando necesitas cada sílaba o cada nota.',
        'Pasa un pódcast o una clase a 1.25×–1.5× cuando 1× es demasiado lento para terminarlo.',
        'El tono sube y baja con el tempo. Para mover el tono y conservar la duración, usa el cambiador de tono.',
      ],
      howTo: [
        {
          name: 'Suelta tu archivo',
          text: 'Agrega un MP3, WAV, M4A u otro archivo de audio. Se queda en tu dispositivo todo el tiempo.',
        },
        {
          name: 'Elige la velocidad',
          text: 'Arrastra el control de velocidad entre 0.5× y 2×. Usa la forma de onda para seleccionar solo un tramo si quieres cambiar una parte del archivo.',
        },
        {
          name: 'Escucha y exporta',
          text: 'Reproduce el resultado para revisar el ritmo y luego guárdalo como MP3 o WAV. Un archivo de 10 minutos a 2× se exporta en cerca de un segundo.',
        },
      ],
      faqs: [
        {
          q: '¿Cambiar la velocidad cambia el tono?',
          a: 'Sí. La velocidad y el tono se mueven juntos, como un disco que gira más rápido o más lento: 2× suena cerca de una octava más agudo y 0.5× cerca de una octava más grave. Ese es el efecto clásico. Conservar el tono mientras cambias el tempo necesita un algoritmo de time-stretch, que podríamos agregar más adelante. Para cambiar el tono sin cambiar la duración, usa el cambiador de tono.',
        },
        {
          q: '¿Qué velocidades puedo elegir?',
          a: 'Cualquiera entre 0.5× y 2×, en pasos de 0.05. La mitad de velocidad es el punto justo para transcribir habla rápida o aprender solos; 1.25× a 1.5× resulta cómodo para adelantar clases y podcasts.',
        },
        {
          q: '¿Qué tan rápida es la exportación?',
          a: 'Tu navegador renderiza el cambio de una vez, no al ritmo de la reproducción: un tema de 10 minutos tarda uno o dos segundos, da igual el factor que elijas.',
        },
        {
          q: '¿Puedo acelerar solo una parte de un tema?',
          a: 'Sí. Selecciona el tramo en la forma de onda, pon el modo en Conservar selección y luego elige la velocidad. La exportación contiene solo esa parte, más rápida o más lenta.',
        },
        {
          q: '¿Hay un límite de duración?',
          a: 'No hay uno artificial. El tope real es la memoria de tu dispositivo: cerca de una hora de audio en una computadora normal.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Velocidad y tono se mueven juntos',
          paragraphs: [
            'Este control reproduce el archivo más rápido o más lento como una cinta, de 0,5× a 2×. A 2× el tono sube cerca de una octava, y a 0,5× baja cerca de una octava. Más rápido significa un archivo más corto y un tono más agudo. Más lento significa un archivo más largo y un tono más grave.',
            'No puede acelerar el audio y conservar el tono original. Eso exigiría time-stretch, y esta página no lo hace. Una voz más aguda o más grave con la misma duración es el cambiador de tono, hasta 12 semitonos.',
          ],
        },
        {
          heading: 'Dónde sirve el control',
          paragraphs: [
            'Úsalo cuando el cambio de tono se acepta o es justo lo que buscas:',
          ],
          bullets: [
            'Una clase o una nota de voz que quieres terminar antes, con el tono de ardilla incluido.',
            'Una pasada más lenta para transcribir, con la voz más grave.',
            'Una escucha rápida de un clip a otro tempo antes de exportar.',
          ],
        },
        {
          heading: 'Las canciones slowed son la otra página',
          paragraphs: [
            'Un slowed + reverb también baja el tono, porque baja la velocidad, y añade reverberación encima. Esa página empieza cerca del 85 por ciento. Esta página es solo el control de velocidad.',
            'Por encima del 100 por ciento en la página slowed va hacia nightcore. Hazlo allí si también quieres el mando de reverberación. Exporta aquí si solo quieres la nueva duración.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'increase-volume': {
      cardLine: 'Eleva notas de voz bajas hasta 4× con limitador, sin que nada sature.',
      name: 'Subir volumen de MP3',
      shortName: 'Volumen de MP3',
      title: 'Subir volumen de MP3 online gratis',
      description:
        'Sube un MP3 bajo hasta 4× en el navegador. El limitador evita que sature. Gratis, y nada se sube.',
      h1: 'Subir el volumen de un MP3 hasta 4×, gratis',
      heroAlt: 'Subir el volumen de un MP3 sin que distorsione',
      subtitle: 'Sube grabaciones bajas hasta 4×, con un limitador para que nada sature.',
      intro:
        'Arregla grabaciones que quedaron demasiado bajas: notas de voz del teléfono, clases grabadas desde la última fila, pistas de video extraídas a bajo volumen. Sube el volumen hasta 4× (12 dB) y un limitador integrado frena los picos, así el resultado suena más fuerte sin volverse distorsión.',
      usesHeading: 'Grabaciones que necesitan un empujón',
      uses: [
        'Sube una nota de voz grabada demasiado lejos del micrófono.',
        'Refuerza una clase grabada desde el fondo y deja que el limitador sujete los picos.',
        'Haz un MP3 bajo lo bastante fuerte para ir bajo un vídeo, sin recortar todo el archivo.',
      ],
      howTo: [
        {
          name: 'Agrega tu audio',
          text: 'Suelta un MP3, WAV, M4A u otro archivo bajo en la página. Se procesa solo en tu dispositivo.',
        },
        {
          name: 'Sube el volumen',
          text: 'Arrastra el control de volumen hasta 400%. Escucha mientras lo mueves; el limitador frena solo los picos más fuertes.',
        },
        {
          name: 'Exporta el archivo más fuerte',
          text: 'Guarda como MP3 o WAV. Si todavía suena forzado, bájalo un 10–20%: más vale un volumen limpio que el volumen al máximo.',
        },
      ],
      faqs: [
        {
          q: '¿Subir el volumen causa distorsión?',
          a: 'Algo, si lo llevas demasiado lejos: eso es física, no el programa. El limitador integrado frena los picos que pasan el umbral, así que subidas moderadas (150–250%) suelen sonar limpias. Por encima de 300% las partes bajas se vuelven fuertes, pero los picos empiezan a bombear. Guíate por el oído.',
        },
        {
          q: '¿Qué tan fuerte puedo dejarlo?',
          a: 'Hasta el 400% del original, cerca de +12 dB. Eso cubre la mayoría de las grabaciones bajas. Un archivo de 3 minutos se exporta en uno o dos segundos, subas mucho o poco.',
        },
        {
          q: '¿Esto es lo mismo que normalizar?',
          a: 'No. Normalizar sube todo el archivo para que su pico más fuerte llegue a un nivel objetivo. Aquí subir el volumen multiplica el nivel que tú eliges, y eso es más predecible cuando sabes que una grabación está baja de forma pareja.',
        },
        {
          q: '¿Puedo subir solo una parte de un archivo?',
          a: 'Sí. Selecciona el tramo bajo en la forma de onda, pon el modo en Conservar selección y exporta. Obtienes solo esa parte al nuevo volumen.',
        },
        {
          q: '¿Funciona con archivos de video?',
          a: 'Casi siempre sí: los navegadores suelen poder decodificar la pista de audio de los MP4 que sueltas en la página. Si tu navegador rechaza el archivo, extrae el audio primero e inténtalo de nuevo.',
        },
        { q: "¿En qué se diferencia del medidor de sonoridad?", a: "Esta página multiplica todo el archivo por la cantidad que tú eliges. El medidor de sonoridad lee LUFS integrados — lo fuerte que es el archivo, no la habitación — y puede igualar −16, −14 o −23 sin pasar el pico de muestra de −1 dBFS. Ninguna de las dos iguala lo fuerte y lo bajo." },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Un MP3 que se oye bajo',
          paragraphs: [
            'Subir el volumen de un MP3 multiplica el archivo, hasta el 400 por ciento, unos +12 dB. Por encima del 100 por ciento un limitador evita que los picos recorten de golpe.',
            'La misma ganancia para la pista de un vídeo o cualquier otro formato es Subir el volumen. Esta página es la pensada para MP3. Los vídeos a menudo también se decodifican aquí.',
          ],
        },
        {
          heading: 'Qué no hace el multiplicador',
          paragraphs: [
            'Es una sola ganancia para todo el archivo. No es una norma de sonoridad y no iguala la dinámica:',
          ],
          bullets: [
            'Un podcast que debería quedar cerca de −16 LUFS: mídelo en el medidor de sonoridad y aplica solo la ganancia que ese medidor permite.',
            'Un pico ya cerca del máximo y el resto bajo: normalizar deja ese pico cerca de −0,2 dB. No sube más las partes bajas.',
            'Pasajes altos y bajos que deberían acercarse: el compresor de nivel, no este control.',
          ],
        },
        {
          heading: 'Exportar',
          paragraphs: [
            'Obtienes un archivo nuevo. El MP3 que soltaste se queda donde estaba. Empujar un archivo que ya está alto choca sobre todo con el limitador y puede sonar plano.',
            'Si el MP3 se oye bajo porque es un silencio largo con una frase corta, recorta primero y sube lo que queda.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'mp4-to-mp3': {
      cardLine: 'Guarda la banda sonora de un vídeo, grabación de pantalla o archivo de cámara como MP3.',
      name: 'Convertidor de MP4 a MP3',
      shortName: 'MP4 a MP3',
      title: 'Convertir MP4 a MP3 online gratis, sin subir',
      description:
        'Convierte MP4 a MP3 en tu navegador. La pista se extrae en tu dispositivo y el video nunca se sube. Gratis, sin registro.',
      h1: 'Convertir MP4 a MP3 online, gratis',
      heroAlt: 'Convertir la pista de un MP4, MOV o WebM a MP3',
      subtitle: 'Saca la pista de audio de cualquier video, en tu navegador. Nada se sube.',
      intro:
        'Convierte videos MP4 en audio MP3 sin instalar nada ni subir gigabytes a un servidor. Tu navegador lee el archivo desde el disco, decodifica la pista de audio en local y la guarda como MP3. Un video de 500 MB se convierte en segundos porque solo se procesa la pista de audio.',
      usesHeading: 'Vídeos que se convierten por el sonido',
      uses: [
        'Guarda una clase, un concierto o una entrevista como audio que se oye con la pantalla apagada.',
        'No hace falta subir un vídeo enorme. La pista se decodifica en este dispositivo.',
        'Convierte la pista entera y recórtala después si solo necesitas un tramo.',
      ],
      howTo: [
        {
          name: 'Suelta tu video',
          text: 'Arrastra un MP4 a la página o haz clic para elegirlo. Los archivos WebM y MOV con pistas de audio estándar funcionan igual.',
        },
        {
          name: 'Elige un bitrate',
          text: '320 kbps para videos musicales, 192 kbps para escuchar todos los días, 128 kbps para entrevistas y clases.',
        },
        {
          name: 'Convierte y descarga',
          text: 'Haz clic en Convertir a MP3. La pista de audio se decodifica en tu navegador y el MP3 se descarga de inmediato.',
        },
      ],
      faqs: [
        {
          q: '¿El video se sube a algún lado?',
          a: 'No. Con el video conviene repetirlo, porque los archivos pesan. El navegador lee el archivo desde tu disco, decodifica solo su pista de audio y escribe el MP3 en local. Los fotogramas del video nunca se procesan ni se transmiten.',
        },
        {
          q: '¿Qué formatos de video se admiten?',
          a: 'Archivos MP4 con audio AAC (la gran mayoría, incluidas las grabaciones del teléfono y las descargas normales), además de WebM con Opus y la mayoría de los MOV. Las pistas con códecs poco comunes, como AC3 o DTS, no las puede decodificar el navegador y se rechazan con un mensaje claro.',
        },
        {
          q: '¿Qué tan rápido es frente a otros convertidores en línea?',
          a: 'Más rápido, por lo general. Los convertidores que suben el archivo tienen que enviar todo el video a un servidor primero: un archivo de 500 MB puede tardar muchos minutos. Aquí solo se decodifica el audio en local, así que hasta los videos largos se convierten en segundos en una computadora normal.',
        },
        {
          q: '¿Puedo convertir solo una parte del video?',
          a: 'Esta página convierte el audio completo. Si quieres un tramo, convierte primero toda la pista y luego recórtala con el recortador de audio.',
        },
        {
          q: '¿Un video 4K u 8K lo hace más lento?',
          a: 'No. La resolución del video no importa: la pista de video se ignora por completo. Un archivo 4K y uno de 240p con la misma pista de audio se convierten igual.',
        },
      ],
      sections: [
        {
          heading: 'Solo se convierte la pista de sonido',
          paragraphs: [
            'Un MP4 es un contenedor. La imagen y el sonido son pistas distintas. Esta página decodifica el sonido y escribe un MP3. La imagen no se codifica, no se sube y no se guarda.',
            'Por eso un video de 500 MB puede terminar en segundos, y por eso un 4K no es más lento que un 240p si la pista de sonido es la misma. Los convertidores que suben el archivo esperan al archivo entero. Este no lo envía.',
          ],
        },
        {
          heading: 'Qué bitrate de MP3 usar',
          paragraphs: [
            'La pista se codifica una vez, al ritmo que elijas.',
          ],
          bullets: [
            '320 kbps: videos musicales y conciertos.',
            '192 kbps: para escuchar todos los días.',
            '128 kbps: entrevistas, clases y voz.',
          ],
        },
        {
          heading: 'MP4 a MP3, o extraer el audio',
          paragraphs: [
            'La exportación empieza en MP3. Un WebM o un MOV con una pista normal funciona igual. El MP4 habitual del teléfono, con audio AAC, es el archivo para el que está hecha.',
            'Cambia el formato a WAV si necesitas una copia sin pérdida de la pista. El extractor de audio es la página pensada para eso, y para editar el sonido después. Si solo necesitas un minuto, convierte aquí la pista entera y luego recórtala. Esta página no corta un tramo del video.',
          ],
        },
        {
          heading: 'Archivos que el navegador no puede leer',
          paragraphs: [
            'Las pistas AC3 y DTS no las decodifica el navegador. Esos archivos se detienen con un error claro, no con un MP3 en silencio. Un MP4 normal de un teléfono, una grabación de pantalla o una descarga corriente es AAC, y ese sí funciona.',
            'El MP3 no se queda con el título del video ni con la miniatura. Pon el nombre de la pista después en el editor de etiquetas MP3 si necesitas que aparezca en un reproductor.',
          ],
        },
      ],
      dropHint: 'Suelta un MP4 o un archivo de video, o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'extract-audio': {
      cardLine: 'Extrae audio limpio de cualquier vídeo para editar, transcribir o samplear.',
      name: 'Extraer audio',
      shortName: 'Extraer audio',
      title: 'Extraer audio de un video — Guárdalo como MP3 o WAV',
      description:
        'Extrae el audio de cualquier video en tu navegador y guárdalo en MP3 o WAV sin pérdida. Gratis, sin subir archivos, aunque el video sea grande.',
      h1: 'Extraer audio de un video — la pista en WAV o MP3',
      heroAlt: 'Guardar la pista de un video como MP3 o WAV',
      subtitle: 'Guarda la pista de audio de cualquier video como MP3 o WAV, en local y en segundos.',
      intro:
        'Separa el sonido de la imagen: saca entrevistas de videollamadas, guarda un concierto filmado como un álbum, o reutiliza una pista en tu propia edición. La pista de audio se decodifica en tu dispositivo y puedes guardarla sin pérdida como WAV, o de forma compacta como MP3.',
      usesHeading: 'Pistas que vale la pena sacar',
      uses: [
        'Saca el audio de una grabación de pantalla o de un vídeo del teléfono.',
        'Quédate con WAV si vas a seguir editando, o con MP3 si ya terminaste.',
        'Pasa un archivo largo al recortador cuando solo importa un minuto.',
      ],
      howTo: [
        {
          name: 'Suelta el video',
          text: 'Cualquier MP4, WebM o MOV con una pista de audio estándar funciona. El archivo nunca sale de tu dispositivo.',
        },
        {
          name: 'Elige el formato',
          text: 'MP3 a 192 kbps para escuchar y compartir; WAV para una copia sin pérdida que puedas editar o archivar.',
        },
        {
          name: 'Extrae y guarda',
          text: 'Haz clic en Extraer audio. La pista se decodifica en local y se descarga de inmediato.',
        },
      ],
      faqs: [
        {
          q: '¿En qué se diferencia de un convertidor de MP4 a MP3?',
          a: 'Por dentro es el mismo motor de extracción local. Esta página está pensada para sacar el audio de un video en el formato que necesites, incluido WAV sin pérdida, y la página del convertidor está afinada para salir en MP3.',
        },
        {
          q: '¿Puedo obtener la calidad original?',
          a: 'Elige WAV: la pista decodificada se escribe sin pérdida, así que el audio coincide con lo que trae el video. El MP3 recodifica una vez; a 320 kbps la diferencia es inaudible en la práctica.',
        },
        {
          q: '¿Qué formatos de video funcionan?',
          a: 'MP4 con audio AAC, WebM con Opus y la mayoría de los MOV: los códecs que el navegador puede decodificar de forma nativa. Las pistas en AC3, DTS u otros códecs poco comunes no se pueden decodificar en local y se rechazan con un error claro.',
        },
        {
          q: '¿Hay un límite de tamaño?',
          a: 'No hay uno artificial. Solo se procesa la pista de audio, así que hasta los videos muy grandes se convierten rápido. El límite es la memoria de tu dispositivo, no el tamaño del archivo en el disco.',
        },
        {
          q: '¿Puedo quitarle el audio a un video?',
          a: 'Eso es la operación contraria. Silenciar un video conserva la imagen y quita el sonido. Esta herramienta conserva el sonido y quita la imagen.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Eliges el archivo y la conversión se queda en esta pestaña. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Sacar la pista de un vídeo',
          paragraphs: [
            'Extraer audio decodifica la banda sonora y tira la imagen. La exportación empieza en MP3, y el menú de formato también ofrece WAV cuando el siguiente paso es un retoque o una entrega sin pérdida.',
            'MP4 a MP3 es la página hermana escrita para esa conversión exacta. Abre esta cuando el origen es cualquier vídeo y puedes querer WAV, no solo un MP3 a partir de un MP4.',
          ],
        },
        {
          heading: 'Qué sale y qué no',
          paragraphs: [
            'Solo se decodifica la pista de audio. Los fotogramas se descartan:',
          ],
          bullets: [
            'Un vídeo del teléfono o una grabación de pantalla se vuelve un archivo que puedes recortar, unir o etiquetar.',
            'Pasa a WAV si vas a editar después y quieres codificar una sola vez al final.',
            'Las pistas AC3 y DTS suelen fallar en el navegador. Una pista estéreo AAC o PCM es la que se decodifica.',
          ],
        },
        {
          heading: 'No silencia el vídeo',
          paragraphs: [
            'Quitar el audio de un vídeo y quedarte con la imagen es el trabajo contrario. Esta página se queda con el sonido y tira las imágenes. No escribe un vídeo nuevo.',
            'No hay un tope de tamaño más allá de la memoria del dispositivo. Una imagen 4K no hace más lenta la decodificación del audio, porque los fotogramas no se usan. No se sube nada.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de video o haz clic para elegirlo',
      exportLabel: 'Extraer audio',
    },
    'voice-recorder': {
      cardLine: 'Graba reuniones, clases e ideas directamente en el navegador, sin instalar apps.',
      name: 'Grabadora de voz',
      shortName: 'Grabadora de voz',
      title: 'Grabadora de voz online gratis — Graba y recorta MP3',
      description:
        'Graba el micrófono en el navegador, recorta la toma y guárdala como MP3 o WAV. Gratis y privado: las grabaciones nunca se suben.',
      h1: 'Grabadora de voz gratuita en línea — Grabar el micrófono a MP3',
      heroAlt: 'Guardar una nota de voz como MP3 o WAV',
      subtitle: 'Graba el micrófono, recorta la toma y guárdala como MP3. Nada sale de tu dispositivo.',
      intro:
        'Una grabadora con el recorte incluido: captura notas de voz, entrevistas, tomas de práctica o apuntes de una reunión, luego corta los silencios y exporta un archivo limpio. Grabar y editar ocurren en tu navegador. El audio nunca se envía a ningún lado, así que sirve incluso para conversaciones confidenciales.',
      usesHeading: 'Tomas que vale la pena grabar aquí',
      uses: [
        'Graba una nota de voz, un ejercicio de idioma o una narración en bruto, sin instalar una app.',
        'Recorta el principio y el final antes de exportar, para que la toma sea solo las palabras.',
        'Guarda MP3 para enviarla, o WAV si vas a editar la toma otra vez.',
      ],
      howTo: [
        {
          name: 'Permite el micrófono',
          text: 'Haz clic en Grabar y acepta el permiso que pide el navegador. La grabación empieza de inmediato; el temporizador muestra cuánto dura la toma.',
        },
        {
          name: 'Detén y revisa',
          text: 'Haz clic en Detener cuando termines. La grabación se carga en el editor de abajo, donde puedes reproducirla y recortar los extremos.',
        },
        {
          name: 'Exporta la toma',
          text: 'Guarda como MP3 o WAV. Las grabaciones solo existen en esta pestaña hasta que las exportas: si cierras sin exportar, se pierden.',
        },
      ],
      faqs: [
        {
          q: '¿A dónde van mis grabaciones?',
          a: 'A ningún lado. El flujo del micrófono lo captura tu navegador y se queda en la memoria de esta pestaña. No se transmite nada, y la grabación desaparece cuando cierras la pestaña, salvo que la exportes antes.',
        },
        {
          q: '¿En qué formato queda la grabación?',
          a: 'Lo decide el navegador: Chrome y Firefox graban WebM/Opus, Safari graba MP4/AAC. No importa. Al exportar, se convierte a MP3 o WAV en tu dispositivo de cualquier modo.',
        },
        {
          q: '¿Puedo quitar el silencio del inicio y del final?',
          a: 'Sí, para eso está el editor debajo de la grabadora. Arrastra sobre la parte que quieres conservar, pon el modo en Conservar selección y exporta. El silencio de más desaparece.',
        },
        {
          q: '¿Qué navegadores pueden grabar?',
          a: 'Chrome, Edge, Firefox y Safari en la computadora, además de Chrome en Android y Safari en iOS. Si el botón Grabar avisa que la grabación no está disponible, al navegador le falta la API MediaRecorder.',
        },
        {
          q: '¿Cuánto tiempo puedo grabar?',
          a: 'Todo lo que permita la memoria de tu dispositivo. Minutos de habla ocupan muy poco, porque la compresión Opus es eficiente. Para grabaciones de varias horas, exporta por partes.',
        },
      ],
      sections: [
        {
          heading: 'El micrófono se queda en el navegador',
          paragraphs: [
            'La grabadora de voz usa el MediaRecorder de esta pestaña. La toma no se sube. Si cierras la pestaña antes de exportar, la grabación desaparece.',
            'El formato de captura depende del navegador. La exportación elige MP3 o WAV, así que el archivo que conservas es el que elegiste, no lo que el navegador grabó por dentro.',
          ],
        },
        {
          heading: 'Después de la toma',
          paragraphs: [
            'Puedes recortar quedándote con una selección y exportar ese tramo:',
          ],
          bullets: [
            'Corta el aire antes de la primera palabra y el silencio después de la última.',
            'Exporta WAV si vas a retocar la toma otra vez y quieres codificar una sola vez.',
            'Exporta MP3 si la nota solo hay que enviarla o guardarla pequeña.',
          ],
        },
        {
          heading: 'Qué no va a hacer',
          paragraphs: [
            'Necesita un navegador con MediaRecorder y permiso para el micrófono. No transcribe. Pasar la voz a texto es la página de audio a texto, y esa toma un archivo, no el micrófono en directo.',
            'Una grabación baja sigue baja después de exportar. Súbela con Subir el volumen, o mira el nivel en el medidor de sonoridad si el destino es un objetivo de podcast.',
          ],
        },
      ],
      dropHint: 'O suelta una grabación que ya tengas para editarla',
    },
    'volume-booster': {
      cardLine: 'Pon la música y las bandas sonoras bajas fuertes y limpias, hasta 4×.',
      name: 'Subir el volumen',
      shortName: 'Subir volumen',
      title: 'Aumentar volumen de audio online gratis',
      description:
        'Aumenta el volumen de música baja y pistas de video hasta 4× en tu navegador. Un limitador frena los picos. Gratis, privado, y nada se sube.',
      h1: 'Aumentar el volumen de un audio, gratis',
      heroAlt: 'Subir la pista baja de un video',
      subtitle: 'Sube temas bajos y pistas de video hasta 4×: más fuerte, sin saturar.',
      intro:
        'Para todo lo que suena demasiado bajo: videos del teléfono, grabaciones acústicas suaves, podcasts masterizados casi en un susurro. Carga un archivo, sube el volumen hasta 4× y deja que el limitador integrado frene los picos para que las partes fuertes sigan limpias. Funciona igual con audio y con video: solo se procesa la pista de sonido.',
      usesHeading: 'Archivos bajos para los que está esta página',
      uses: [
        'Sube una pista de vídeo que salió más baja que la imagen.',
        'Refuerza música exportada o ripeada a un nivel bajo.',
        'Quédate cerca del 150% al 250% si quieres más volumen sin que el limitador bombee.',
      ],
      howTo: [
        {
          name: 'Suelta tu archivo',
          text: 'Música, una nota de voz o un video bajo (MP4, WebM, MOV). Si es un video, la pista de audio se extrae en local.',
        },
        {
          name: 'Elige cuánto subir',
          text: 'Arrastra el control de volumen a 150–250% para la mayoría de las grabaciones. Escucha mientras lo mueves; el limitador entra solo por encima del 100%.',
        },
        {
          name: 'Exporta el archivo más fuerte',
          text: 'Guarda como MP3 o WAV. Si los picos suenan aplastados, baja la subida un 10–20% y vuelve a exportar.',
        },
      ],
      faqs: [
        {
          q: '¿Qué tanto más fuerte puede quedar?',
          a: 'Hasta el 400% del original (+12 dB). Subir el volumen no puede crear energía que nunca se grabó, así que las fuentes muy bajas también pueden ganar si exportas a WAV y normalizas en un editor dedicado. Para la mayoría de los archivos bajos, una subida de 2–3× basta.',
        },
        {
          q: '¿Qué hace en realidad el limitador?',
          a: 'Por encima del 100% de volumen, un compresor de dinámica vigila la salida y frena los picos momentáneos antes de que hagan clip. El resultado queda más fuerte en conjunto, sin el crujido de un clip digital duro. Una etapa de soft-clip atrapa lo que todavía se escape.',
        },
        {
          q: '¿Puedo subir el sonido de un video?',
          a: 'Sí. Suelta un MP4 o un WebM y la pista de audio se decodifica en local, se sube y se exporta como MP3 o WAV. La pista de video se ignora. Si solo quieres el sonido, usa la herramienta para extraer el audio.',
        },
        {
          q: '¿Funciona en el celular?',
          a: 'Sí. Funciona en Safari y en Chrome del celular. Una canción de 3 minutos se exporta en uno o dos segundos en un teléfono moderno.',
        },
        {
          q: '¿Por qué no basta con subir el volumen de las bocinas?',
          a: 'El volumen de las bocinas solo te ayuda en tu dispositivo. Un archivo con el volumen ya subido suena más fuerte en todas partes: en el teléfono de otra persona, en audífonos baratos y en las bocinas pequeñas de una laptop.',
        },
        {
          q: '¿En qué se diferencia del compresor de nivel?',
          a: 'Esta página multiplica todo el archivo, así que lo fuerte y lo flojo siguen a la misma distancia. El compresor de nivel acorta esa distancia y luego devuelve el pico. Úsala cuando todo está demasiado bajo. Usa el compresor cuando unas partes gritan y otras apenas se oyen.',
        },
        { q: "¿En qué se diferencia del medidor de sonoridad?", a: "Arrastrar este control multiplica cada muestra. El medidor de sonoridad mide LUFS integrados y ofrece pódcast −16, streaming −14 y emisión −23. Si el pico de muestra pasara de −1 dBFS, la ganancia se detiene. No es un sonómetro de la habitación." },
      ],
      sections: [
        {
          heading: 'Sube el volumen sin el crujido',
          paragraphs: [
            'Un archivo satura cuando una muestra intenta pasar el techo digital, 0 dBFS. Subir el volumen multiplica cada muestra. Si el momento más fuerte ya estaba cerca de ese techo, un aumento grande le corta la punta y se oye un crujido.',
            'Por encima del 100% esta página aplica un limitador a la salida, y un soft clip a lo que todavía se escape. Empieza en 150% y escucha. La mayoría de notas de voz bajas y exportaciones flojas solo necesitan 150–250%. 400% son unos +12 dB, y es para archivos grabados muy bajos, no para temas que ya están calientes.',
          ],
          bullets: [
            '150–200%: una nota baja o un video un poco flojo. Suele quedar limpio.',
            '250%: una clase grabada desde el fondo. Escucha el segundo más fuerte antes de guardar.',
            '300–400%: solo si todo el archivo está muy bajo. Si bombea o cruje, baja.',
            'Ya está fuerte: deja el control en 100%, o manda el archivo al normalizador.',
          ],
        },
        {
          heading: 'Un pico más alto no es un archivo más fuerte',
          paragraphs: [
            'El pico es la muestra más fuerte. Una entrevista susurrada con una tos puede rozar el máximo y seguir sonando baja, porque el resto del archivo está flojo. Multiplicar el archivo sube el susurro y la tos a la vez.',
            'Lo fuerte que se siente un archivo en toda su duración es lo que miden los LUFS. Esta página no apunta a un número LUFS. El medidor de sonoridad sí: lee LUFS integrados y puede dejar un archivo cerca de −16 para pódcast, −14 para streaming o −23 para emisión, y se detiene si el pico de muestra pasara de −1 dBFS.',
          ],
        },
        {
          heading: 'Subir, normalizar o comprimir',
          paragraphs: [
            'Tres páginas de este sitio cambian el nivel, y no se sustituyen.',
          ],
          bullets: [
            'Subir volumen, esta página: tú eliges el multiplicador, hasta 4×, y un limitador frena los picos. Úsala cuando ya sabes que el archivo está bajo, también la pista de un video.',
            'Normalizar audio: una ganancia medida para que el pico más fuerte quede justo bajo el techo. Úsala cuando no quieres adivinar el control.',
            'Compresor de nivel: baja los momentos fuertes y sube las palabras flojas, y luego devuelve el pico. Úsalo cuando unas partes gritan y otras desaparecen. Subir el volumen no hace eso.',
          ],
        },
        {
          heading: 'Pistas de video y grabaciones del teléfono',
          paragraphs: [
            'Suelta un MP4, WebM o MOV y solo se decodifica la pista de sonido, se sube y se guarda como MP3 o WAV. La imagen se ignora. Si el navegador no puede leer el códec de audio, extrae el audio primero.',
            'Un archivo con el volumen subido suena más fuerte en cualquier dispositivo que lo reproduzca. El volumen de los altavoces solo ayuda al aparato que tienes delante. Exporta WAV si vas a seguir editando. El MP3 codifica una vez. Subir el volumen no inventa detalle que un micrófono de teléfono nunca grabó, y también sube el soplido que ya estaba.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o de video, o haz clic para elegirlo',
    },
    'normalize-audio': {
      cardLine: 'Lleva un lote entero de grabaciones a un nivel constante y saludable.',
      name: 'Normalizar audio',
      shortName: 'Normalizar',
      title: 'Normalizar audio — Iguala el nivel en línea, gratis',
      description:
        'Normaliza el audio a un nivel de pico parejo en tu navegador: MP3, WAV, M4A y más. Un clic, gratis, y nada se sube.',
      h1: 'Normalizador de audio gratuito en línea — Normalizar el volumen de un MP3',
      heroAlt: 'Subir los archivos bajos hasta un mismo nivel',
      subtitle: 'Un clic para llevar los archivos bajos a un nivel parejo y sano. El análisis ocurre en tu dispositivo.',
      intro:
        'Normalizar revisa tu archivo, encuentra su pico más fuerte y sube todo el archivo justo lo necesario para llevar ese pico un poco por debajo de la saturación. El resultado es un archivo que usa todo el rango de volumen que tenía, sin calcularlo a ojo. Es el arreglo correcto cuando una grabación está baja de forma pareja: notas de voz, grabaciones de campo, exportaciones de otras apps que salieron a −18 dB.',
      usesHeading: 'Cuando un nivel tiene que encajar',
      uses: [
        'Sube un archivo bajo hasta que su pico más fuerte llegue a un nivel normal.',
        'Iguala clips que vas a unir, para que un capítulo no suene a la mitad del siguiente.',
        'Usa esto en lugar de un boost a ciegas cuando no sabes hasta dónde empujar.',
      ],
      howTo: [
        {
          name: 'Suelta tu audio',
          text: 'Cualquier MP3, WAV, M4A u otro archivo de audio. Se decodifica y se analiza en local. Nada sale de tu dispositivo.',
        },
        {
          name: 'Haz clic en Normalizar',
          text: 'Se busca el pico del archivo y se sube hasta que ese pico queda justo por debajo del máximo. Reprodúcelo para oír la diferencia.',
        },
        {
          name: 'Exporta',
          text: 'Guarda como MP3 o WAV. El WAV evita una pasada extra de compresión con pérdida si vas a seguir editando el archivo.',
        },
      ],
      faqs: [
        {
          q: '¿Qué hace en realidad normalizar?',
          a: 'Aplica una sola cantidad fija de ganancia a todo el archivo para que la muestra más fuerte quede justo por debajo del techo digital (cerca de −0.2 dB aquí). Si el pico de un archivo está al 50% del volumen, normalizar duplica más o menos cada muestra: las partes bajas y las fuertes por igual.',
        },
        {
          q: '¿Normalizar es lo mismo que subir el volumen?',
          a: 'Se parecen, pero normalizar se calcula y no se adivina. Subir el volumen aplica el multiplicador que tú arrastras en el control; normalizar encuentra solo el multiplicador más alto que todavía es seguro. Si sabes que un archivo está bajo parejo, subir el volumen está bien. Si solo quieres que quede tan fuerte como puede sonar limpio, normaliza.',
        },
        {
          q: '¿Deja igual de fuertes las partes bajas y las fuertes?',
          a: 'No. Desconfía de cualquier herramienta que prometa que un clic hace eso. Subir los pasajes bajos por separado es compresión del rango dinámico, un proceso distinto y más destructivo. Normalizar sube toda la grabación en la misma cantidad y deja la dinámica como estaba.',
        },
        {
          q: '¿Usa objetivos de sonoridad LUFS como las plataformas de streaming?',
          a: 'No. Esta página mueve el pico, no la sonoridad integrada. El medidor de sonoridad mide LUFS con ponderación K y puede dejar un archivo en −16, −14 o −23. Son objetivos habituales de entrega, no un límite legal ni una lectura de la habitación.',
        },
        {
          q: '¿Normalizar baja la calidad?',
          a: 'El cambio de nivel en sí es matemáticamente limpio y no se oye como un defecto. La única pregunta de calidad es el formato de exportación: el WAV conserva el cambio de ganancia bit a bit, y el MP3 recodifica una vez. Exporta WAV si vas a seguir editando el archivo.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'Una ganancia, apuntando al pico',
          paragraphs: [
            'Normalizar busca la muestra más alta y aplica una ganancia para que ese pico quede cerca de −0,2 dB. El resto de las muestras se mueve lo mismo. Las partes bajas no reciben una subida aparte.',
            'No es LUFS. Un podcast cerca de −16 LUFS, un streaming cerca de −14 o una emisión cerca de −23 es el medidor de sonoridad. Ese medidor también frena la ganancia sugerida si el pico de muestra pasaría de −1 dBFS.',
          ],
        },
        {
          heading: 'Cuándo normalizar es lo correcto',
          paragraphs: [
            'Úsalo cuando todo el archivo está simplemente bajo y nada está ya en el pico:',
          ],
          bullets: [
            'Una nota de voz grabada lejos del micrófono, con margen.',
            'Una pista que debe quedar cerca del máximo antes de enviarla.',
            'Un archivo que vas a comprimir o subir después, con un techo de pico conocido.',
          ],
        },
        {
          heading: 'Cuándo te va a decepcionar',
          paragraphs: [
            'Si un clic o una respiración ya está cerca del máximo, normalizar no hace casi nada, porque ese pico fija la ganancia. El compresor de nivel es lo que acerca lo alto y lo bajo, y luego iguala el pico.',
            'Hacer un archivo más alto con un factor que eliges, incluso por encima del 100 por ciento con limitador, es Subir el volumen. Normalizar no ofrece ese multiplicador.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'slowed-reverb': {
      cardLine: 'Dale a cualquier canción el sonido nocturno de ralentí + reverb en un clic.',
      name: 'Slowed + reverb',
      shortName: 'Slowed + reverb',
      title: 'Slowed + reverb online — Hazlo con cualquier canción',
      description:
        'Convierte cualquier canción en una edición slowed + reverb en tu navegador: bájala de velocidad, métele reverb y exporta a MP3. Gratis, y nada se sube.',
      h1: 'Creador de slowed reverb gratuito en línea — Ralentizar una canción y añadir reverb',
      heroAlt: 'Bajar una pista a cerca del 85 % y añadir una cola de eco suave',
      subtitle: 'El sonido de noche: baja un tema a ~85%, agrégale espacio y exporta. Sin app y sin subir nada.',
      intro:
        'El tratamiento slowed + reverb baja un tema a cerca del 80–90% de velocidad para que el tono baje con ella, y luego agrega una cola de eco suave que hace que todo suene como si estuviera dos habitaciones más allá. Carga una canción, arrastra la velocidad a cerca del 85%, sube el reverb hasta que se sienta bien y exporta. Toda la edición ocurre en tu dispositivo, así que hasta los temas completos se procesan en segundos. Si en cambio subes la velocidad por encima del 100%, obtienes nightcore.',
      usesHeading: 'El sonido de slowed y reverb',
      uses: [
        'Baja una pista a un 85% y añade espacio. Esa es la mezcla nocturna de siempre.',
        'Empieza con una canción seca. El efecto es la ralentización y la reverb juntas.',
        'Recorta el tramo que quieres antes de exportar, para que el wash no sea el disco entero.',
      ],
      howTo: [
        {
          name: 'Suelta tu canción',
          text: 'Cualquier MP3, WAV, M4A u otro archivo de audio. Un tema completo de álbum funciona bien, y el procesamiento se queda en local.',
        },
        {
          name: 'Bájala y agrégale espacio',
          text: 'Arrastra la velocidad a cerca del 85% (el punto clásico) y sube el reverb a 20–30%. Escucha y confía en el oído.',
        },
        {
          name: 'Exporta la edición',
          text: 'Guarda como MP3 a 320 kbps para publicar, o como WAV si la vas a seguir editando en otra app.',
        },
      ],
      faqs: [
        {
          q: '¿Qué velocidad uso para slowed + reverb?',
          a: 'La mayoría de las ediciones quedan entre 80% y 90%, con 85% como el punto habitual: lo bastante lento para que el tono baje con claridad, no tanto como para que el ritmo se desarme. Las canciones con hi-hats muy activos se dejan bajar mejor que los temas densos y rápidos.',
        },
        {
          q: '¿Cómo hago una versión nightcore?',
          a: 'Empuja el control de velocidad por encima del 100%, por lo general a 120–130%. Subir la velocidad sube el tono con ella, y eso es justo el sonido nightcore. Deja el reverb cerca de cero para una edición nightcore clásica.',
        },
        {
          q: '¿Bajar la velocidad cambia el tono?',
          a: 'Sí, a propósito: como un disco de vinilo a la velocidad equivocada. Las voces se vuelven más graves y la tonalidad baja en la misma proporción. Esa caída de tono es lo que define el estilo. Un slowed sin cambio de tono necesita un editor de time-stretch, que es una herramienta distinta y más pesada. Un círculo lento que deja la velocidad y el tono es la página de audio 3D.',
        },
        {
          q: '¿Cuánto reverb debo agregar?',
          a: 'Empieza cerca del 20–30% y escucha. El reverb es una cola de decaimiento sintetizada. Pasado cerca del 50%, el tema empieza a sonar como una catedral y las voces dejan de entenderse.',
        },
        {
          q: '¿Puedo usar canciones slowed en mis videos?',
          a: 'Bajar la velocidad de un tema no cambia su copyright. Para subir videos a YouTube o TikTok sigues necesitando derechos de la canción original. Muchos creadores usan la biblioteca de música con licencia de la plataforma y dejan las ediciones slowed para sus propias grabaciones.',
        },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'El tono baja porque baja la velocidad',
          paragraphs: [
            'Slowed + reverb baja la velocidad, normalmente a algún punto entre el 80 y el 90 por ciento, con el 85 por ciento como punto de partida habitual. El tono baja en la misma proporción, como un disco a la velocidad equivocada. No hay time-stretch que conserve la tonalidad.',
            'La reverberación es una cola de caída sintetizada. Empieza cerca del 20 al 30 por ciento. Pasado el 50 por ciento el tema se vuelve un baño y las palabras se oyen mal.',
          ],
        },
        {
          heading: 'Nightcore es la misma página, en la otra dirección',
          paragraphs: [
            'Sube la velocidad por encima del 100 por ciento y el tono sube con ella:',
          ],
          bullets: [
            'Del 120 al 130 por ciento es el rango habitual de nightcore.',
            'Deja la reverberación cerca de cero para un nightcore clásico.',
            'Los hi-hats ocupados aguantan mejor la bajada que un arreglo denso y rápido.',
          ],
        },
        {
          heading: 'Derechos y las herramientas de al lado',
          paragraphs: [
            'Bajar la velocidad de un tema no cambia de quién es. Subir un vídeo sigue exigiendo derechos de la canción original.',
            'Solo la velocidad, de 0,5× a 2× y sin el mando de reverberación, es cambiar la velocidad del audio. Una tonalidad más alta o más baja con la misma duración es el cambiador de tono. Un eco que se cuenta y no cambia la velocidad es la página de eco.',
          ],
        },
      ],
      dropHint: 'Suelta una canción o haz clic para elegirla',
    },
    'pitch-changer': {
      cardLine: 'Cambia el tono por semitonos para covers y mashups: la duración no cambia.',
      name: 'Cambiador de tono',
      shortName: 'Tono',
      title: 'Cambiador de tono — Cambia el tono sin cambiar la duración',
      description: 'Sube o baja el tono de una canción o una voz hasta 12 semitonos, sin cambiar su duración. Gratis, en tu navegador, sin subir nada.',
      h1: 'Cambiador de tono gratuito en línea — Cambiar el tono de una canción',
      heroAlt: 'Mover el tono de un MP3 mientras la velocidad sigue igual',
      subtitle: 'Sube o baja el tono por semitonos. La duración del archivo no cambia.',
      intro: 'Suelta una canción o una grabación y mueve el control de tono. Cambia la tonalidad y el tiempo se queda donde está. No es el cambiador de velocidad: aquí el archivo no se acorta ni se alarga. El cambio se hace en tu dispositivo.',
      usesHeading: 'El tono se mueve, el tiempo no',
      uses: [
        'Pasa una canción a una tonalidad más cómoda para cantar. El archivo dura lo mismo.',
        'Mueve una voz unos semitonos para un personaje, sin acelerar la frase.',
        'El efecto de más rápido y más agudo es el cambiador de velocidad. Esta página no acorta el audio.',
      ],
      howTo: [
        { name: 'Suelta tu archivo', text: 'Agrega un MP3, WAV, M4A u otro audio. Se queda en tu dispositivo.' },
        { name: 'Elige el tono', text: 'Arrastra de −12 a +12 semitonos. +12 es una octava arriba, −12 una octava abajo. 0 deja el archivo igual.' },
        { name: 'Escucha y exporta', text: 'Reproduce para oír la nueva tonalidad con la duración original y guárdalo como MP3 o WAV.' },
      ],
      faqs: [
        { q: '¿Cambia la duración del archivo?', a: 'No. El control de tono mueve la tonalidad y deja la duración quieta. Para hacer el archivo más rápido o más lento —eso también mueve el tono— usa el cambiador de velocidad.' },
        { q: '¿Cuánto puedo subir o bajar el tono?', a: 'De −12 a +12 semitonos, de uno en uno. Es una octava hacia cada lado. La voz y un instrumento solo aguantan mejor un cambio grande que una mezcla densa.' },
        { q: '¿Un cambio grande suena natural?', a: 'Unos pocos semitonos se quedan cerca del original. Pasados unos 7 semitonos el sonido se adelgaza y se pone metálico. Es el límite de este cambiador, no una opción que se pueda apagar.' },
        { q: '¿Es lo mismo que cambiar la velocidad?', a: 'No. El cambiador de velocidad reproduce el archivo más rápido o más lento, así que el tono se va con él y la duración cambia. Esta página solo mueve el tono.' },
        { q: '¿El archivo se sube a algún lado?', a: 'No. El cambio se calcula en tu navegador y la exportación se guarda en tu dispositivo.' },
        { q: '¿Puedo cambiar el tono de una canción para evitar el copyright?', a: 'No — cambiar el tono no elimina los derechos de una grabación. Una subida con el tono modificado sigue siendo reclamable y puede bajarse. Cambia la tonalidad para cantar o para karaoke, y usa música con los derechos adecuados cuando publiques.' },
        {
          q: '¿Funciona en el teléfono?',
          a: 'Sí. Arrastras la forma de onda con el dedo. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales en iPhone y Android. Un archivo largo usa más memoria, así que a partir de una hora el ordenador va más estable.',
        },
      ],
      sections: [
        {
          heading: 'La tonalidad se mueve, la duración se queda',
          paragraphs: [
            'El cambiador de tono desplaza la tonalidad de −12 a +12 semitonos, de uno en uno. Eso es una octava en cada sentido. El archivo conserva la misma duración.',
            'La voz y un instrumento solo siguen siendo útiles más lejos que una mezcla densa. Un desplazamiento grande suena poco natural. No es un atajo de derechos: la grabación sigue siendo la misma grabación.',
          ],
        },
        {
          heading: 'Cuándo usar el control',
          paragraphs: [
            'Que la duración no cambie es justo el punto:',
          ],
          bullets: [
            'Una pista de karaoke movida a una tonalidad que puedes cantar.',
            'Una voz corrida uno o dos semitonos para que encaje con otra toma.',
            'Un cambio de diseño de sonido en el que el tiempo del clip no debe moverse.',
          ],
        },
        {
          heading: 'La velocidad es el otro control',
          paragraphs: [
            'Cambiar la velocidad va de 0,5× a 2× y mueve el tono con el tempo, como un disco. 2× es cerca de una octava arriba y la mitad de duración. Esta página no hace eso.',
            'Slowed + reverb también baja el tono al bajar el archivo, y añade una cola. Si quieres el sonido nightcore o slowed, esa es la página. Si quieres la misma duración y otra tonalidad, quédate aquí.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'm4a-to-mp3': {
      cardLine: 'Convierte notas de voz de iPhone y archivos AAC en MP3 que suenan en todas partes.',
      name: 'Convertir M4A a MP3',
      shortName: 'M4A a MP3',
      title: 'M4A a MP3 — Convierte M4A y AAC en línea gratis',
      description: 'Convierte audio M4A y AAC a MP3 en tu navegador. Gratis, sin cuenta y sin subir nada. Elige 128, 192 o 320 kbps.',
      h1: 'Convertidor de M4A a MP3 gratuito en línea — Convertir M4A a MP3',
      heroAlt: 'Convertir una nota de voz de iPhone o un archivo AAC a MP3',
      subtitle: 'Pasa archivos M4A y AAC a MP3, en tu navegador y sin subir nada.',
      intro: 'Las notas de voz y las grabaciones AAC suelen ser M4A. Suelta el archivo, elige un bitrate y tu navegador lo decodifica y guarda un MP3. El audio no va a ningún servidor.',
      usesHeading: 'M4A que la gente convierte',
      uses: [
        'Pasa una nota de voz del iPhone o una descarga AAC a un MP3 que abren más reproductores.',
        '128 kbps para voz y 320 kbps para música.',
        'El M4A se queda en este dispositivo. No se sube nada para terminar la conversión.',
      ],
      howTo: [
        { name: 'Suelta tu M4A', text: 'Arrastra un .m4a o .aac a la página, o haz clic para elegirlo. Un MP4 de video va en la página de MP4 a MP3.' },
        { name: 'Elige el bitrate', text: '320 kbps para música, 192 kbps para el día a día, 128 kbps para notas de voz.' },
        { name: 'Convierte y descarga', text: 'Haz clic en Convertir a MP3. Se decodifica y se codifica en tu dispositivo, y luego se descarga.' },
      ],
      faqs: [
        { q: '¿Puedo convertir M4A a MP3 en iPhone, Android o Mac?', a: 'Sí: el conversor funciona en cualquier navegador, así que el dispositivo da igual. Audio AAC dentro de un M4A, que es lo que usan las notas de voz y la mayoría de las descargas AAC. Apple Lossless (ALAC) guardado en un M4A muchas veces no se decodifica en el navegador. Conviértelo primero a AAC o WAV y tráelo aquí.' },
        { q: '¿Y un video MP4?', a: 'Usa el convertidor de MP4 a MP3 para videos. Esta página es para audio: M4A y AAC.' },
        { q: '¿Convertir a MP3 pierde calidad?', a: 'El MP3 tiene pérdida. A 320 kbps casi nadie nota la diferencia con el AAC original. Quédate con el M4A si necesitas el archivo original intacto.' },
        { q: '¿Se conservan las etiquetas y la portada?', a: 'No. El MP3 se escribe sin metadatos, igual que el convertidor de WAV. El título, el artista y la portada no se copian.' },
        { q: '¿El archivo se sube?', a: 'No. Tu navegador decodifica el M4A y codifica el MP3 en local. El audio se queda en tu dispositivo.' },
      ],
      sections: [
        {
          heading: 'Notas de voz y AAC, no un vídeo',
          paragraphs: [
            'Esta página convierte audio M4A y AAC a MP3. Las notas de voz y la mayoría de las descargas AAC son AAC dentro del M4A, y eso se decodifica en el navegador. Apple Lossless (ALAC) guardado en un M4A a menudo no. Pasa ese archivo a AAC o WAV primero y tráelo aquí.',
            'Un vídeo MP4 va en MP4 a MP3. Esa página saca la banda sonora de la imagen. Esta página es solo audio.',
          ],
        },
        {
          heading: 'Qué conserva el MP3',
          paragraphs: [
            'MP3 tiene pérdida. El menú es la elección de bitrate de siempre:',
          ],
          bullets: [
            '320 kbps cuando la nota o la canción debe quedarse cerca del AAC.',
            '192 kbps para voz que vas a seguir escuchando.',
            '128 kbps cuando el archivo sobre todo tiene que ser lo bastante pequeño para enviarlo.',
          ],
        },
        {
          heading: 'Las etiquetas no se copian',
          paragraphs: [
            'Título, artista y carátula no se trasladan. El MP3 se escribe sin metadatos. Vuelve a ponerlos con el editor de etiquetas MP3 si el reproductor necesita un nombre.',
            'Guarda el M4A si aún necesitas el original. La conversión no sube el archivo. Recorta después de tener el MP3, en Recortar audio o en el cortador, si la nota tiene silencio en los extremos.',
          ],
        },
      ],
      dropHint: 'Suelta un M4A o AAC, o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'ogg-to-mp3': {
      cardLine: 'Haz que los OGG de clips de juego o grabaciones de Linux suenen en cualquier app.',
      name: 'Convertir archivos OGG a MP3',
      shortName: 'OGG a MP3',
      title: 'Convertir archivos OGG a MP3 — gratis en el navegador',
      description:
        'Convierte archivos OGG a MP3 en tu navegador, sin límite de tamaño. Gratis, sin cuenta y sin subir nada. Vorbis u Opus dentro del OGG, a 128, 192 o 320 kbps.',
      h1: 'Convertidor de OGG a MP3 gratuito en línea — Convertir OGG a MP3',
      heroAlt: 'Convertir el Vorbis o el Opus de un OGG a MP3',
      subtitle: 'Pasa audio OGG a MP3, en tu navegador y sin subir nada.',
      intro:
        'OGG es un contenedor: casi siempre Vorbis, a veces Opus. Suelta el archivo, elige un bitrate y tu navegador lo decodifica y guarda un MP3. El audio no va a ningún servidor.',
      usesHeading: 'OGG que la gente convierte',
      uses: [
        'Abre un rip de un juego, una descarga o una grabación del navegador que llegó en OGG.',
        'Guarda un MP3 para el teléfono, el coche o un editor que no acepta OGG.',
        'Deja la voz en 128 kbps y la música más alta. Reintentar es local y gratis.',
      ],
      howTo: [
        { name: 'Suelta tu OGG', text: 'Arrastra un .ogg o .oga a la página, o haz clic para elegirlo.' },
        { name: 'Elige el bitrate', text: '320 kbps para música, 192 kbps para el día a día, 128 kbps para voz.' },
        { name: 'Convierte y descarga', text: 'Haz clic en Convertir a MP3. Se decodifica y se codifica en tu dispositivo, y luego se descarga.' },
      ],
      faqs: [
        { q: '¿Qué es un archivo OGG?', a: 'OGG es un contenedor. La música que trae suele ser Vorbis. Algunas notas de voz usan Opus. Si tu navegador puede decodificarlo, esta página lo pasa a MP3.' },
        { q: '¿Qué navegadores convierten OGG?', a: 'Chrome y Firefox decodifican Vorbis y Opus dentro de OGG. Safari decodifica Opus y muchas veces rechaza Vorbis. Si el archivo no suena en una pestaña normal del navegador, esta página tampoco puede convertirlo.' },
        { q: '¿Convertir OGG a MP3 pierde calidad?', a: 'El MP3 tiene pérdida. A 320 kbps la diferencia es pequeña para casi todo el mundo. Quédate con el OGG si necesitas el archivo original.' },
        { q: '¿Se conservan las etiquetas y la portada?', a: 'No. El MP3 se escribe sin metadatos. El título, el artista y la portada no se copian.' },
        { q: '¿El archivo se sube?', a: 'No. Tu navegador decodifica el OGG y codifica el MP3 en local. El audio se queda en tu dispositivo.' },
      ],
      sections: [
        {
          heading: 'Vorbis u Opus dentro de un OGG',
          paragraphs: [
            'OGG es un contenedor. Los archivos de música que van dentro suelen usar Vorbis. Algunos archivos de voz usan Opus. Esta página convierte cualquiera de los dos cuando el navegador puede decodificarlo.',
            'Chrome y Firefox decodifican Vorbis y Opus en OGG. Safari decodifica Opus y a menudo rechaza Vorbis. Si una pestaña normal se queda en silencio, esta página tampoco puede convertir ese archivo.',
          ],
        },
        {
          heading: 'Bitrate, y lo que dejas',
          paragraphs: [
            'MP3 tiene pérdida. A 320 kbps la diferencia es pequeña para la mayoría de las escuchas. Guarda el OGG si necesitas el original:',
          ],
          bullets: [
            '320 kbps para música que vas a conservar.',
            '192 kbps para un archivo de voz o una copia más pequeña.',
            '128 kbps cuando el destino solo necesita que se entienda la voz.',
          ],
        },
        {
          heading: 'Un archivo .opus es la otra página',
          paragraphs: [
            'Las notas de voz de WhatsApp y Telegram suelen ser un archivo .opus, u Opus dentro de WebM. Esas van en Opus a MP3. Esta página es el contenedor OGG.',
            'Título, artista y carátula no se copian. El MP3 se escribe sin metadatos. No se sube nada.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo OGG o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'opus-to-mp3': {
      cardLine: 'Convierte llamadas y descargas Opus a MP3 que acepta cualquier reproductor.',
      name: 'Convertidor de Opus a MP3',
      shortName: 'Opus a MP3',
      title: 'Convertir Opus a MP3 — notas de voz de WhatsApp',
      description:
        'Convierte el formato Opus a MP3 en tu navegador. Conversor gratis, sin cuenta y sin subir el archivo. Sirve para .opus, y para Opus dentro de OGG o WebM.',
      h1: 'Convertidor de Opus a MP3 gratuito en línea — Convertir Opus a MP3',
      heroAlt: 'Convertir una nota de voz de WhatsApp o Telegram a MP3',
      subtitle: 'Pasa audio Opus a MP3, en tu navegador y sin subir nada.',
      intro:
        'Las notas de voz y algunas descargas son Opus: un archivo .opus, u Opus dentro de OGG o WebM. Suelta el archivo, elige un bitrate y tu navegador lo decodifica y guarda un MP3. El audio no va a ningún servidor.',
      usesHeading: 'Opus que la gente convierte',
      uses: [
        'Pasa un mensaje de voz o una exportación Opus a MP3 para un reproductor que no abre Opus.',
        'La voz va bien a 128 kbps. Cambias el formato que la gente puede reproducir, no la duración.',
        'Convierte aquí y recorta si el mensaje tiene un silencio largo en alguno de los extremos.',
      ],
      howTo: [
        { name: 'Suelta tu Opus', text: 'Arrastra un .opus a la página, o haz clic para elegirlo. Un OGG o un WebM que traiga Opus funciona igual.' },
        { name: 'Elige el bitrate', text: '128 kbps basta para una nota de voz. Si el Opus es música, usa 192 o 320 kbps.' },
        { name: 'Convierte y descarga', text: 'Haz clic en Convertir a MP3. Se decodifica y se codifica en tu dispositivo, y luego se descarga.' },
      ],
      faqs: [
        { q: '¿Qué es el formato Opus?', a: 'Opus es un códec de audio. Las notas de voz de WhatsApp y Telegram suelen ser .opus. También va dentro de OGG y WebM. Esta página lo deja en un MP3 que se reproduce en todas partes.' },
        { q: '¿Qué archivos Opus funcionan?', a: 'Los que tu navegador ya puede reproducir: .opus, OGG con Opus y WebM con Opus, en Chrome, Firefox y Safari actual. Si una pestaña normal se queda en silencio, esta página tampoco puede decodificar ese archivo.' },
        { q: '¿Convertir Opus a MP3 pierde calidad?', a: 'El MP3 tiene pérdida, y Opus también. A 320 kbps el MP3 está en su tope. Una nota de voz queda bien a 128 kbps. Conserva el Opus si necesitas el original.' },
        { q: '¿Se conservan las etiquetas?', a: 'No. El MP3 se escribe sin metadatos. El título y el artista no se copian.' },
        { q: '¿El archivo se sube?', a: 'No. Tu navegador decodifica el Opus y codifica el MP3 en local. El audio se queda en tu dispositivo.' },
      ],
      sections: [
        {
          heading: 'Notas de voz que solo abren algunos reproductores',
          paragraphs: [
            'Opus es el códec de muchas notas de voz de WhatsApp y Telegram, guardadas como .opus. También va dentro de OGG y WebM. Esta página convierte ese audio en un MP3 que abren un coche, un teléfono o un reproductor viejo.',
            'El navegador tiene que poder reproducir el archivo ya. Chrome, Firefox y Safari actual manejan .opus, Opus en OGG y Opus en WebM. Si una pestaña normal se queda en silencio, esta página tampoco puede decodificarlo.',
          ],
        },
        {
          heading: 'La voz no necesita 320',
          paragraphs: [
            'Una nota de voz es voz. Elige el bitrate para eso:',
          ],
          bullets: [
            '128 kbps basta para una nota que vas a enviar o guardar.',
            '192 kbps si la nota tiene música bajo la voz y te importa.',
            '320 kbps solo cuando el archivo Opus es música y quieres el MP3 cerca de él.',
          ],
        },
        {
          heading: 'Etiquetas, y la página de OGG',
          paragraphs: [
            'Título y artista no se copian. El MP3 se escribe sin metadatos. Un OGG que en realidad es música Vorbis va en OGG a MP3, la página con el nombre de ese contenedor.',
            'No se sube nada. Si la nota tiene un silencio largo en los extremos, convierte primero y luego recorta. Quitar silencio encaja con una nota de voz con pausas largas, no con una base musical baja.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo Opus o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'waveform-generator': {
      cardLine: 'Convierte cualquier pista en una imagen de onda compartible con tus colores.',
      name: 'Generador de forma de onda',
      shortName: 'Forma de onda',
      title: 'Generador de forma de onda — imagen de audio en PNG gratis',
      description: 'Convierte una canción o grabación en una imagen de forma de onda. Elige colores, estilo y tamaño y descarga un PNG. Gratis en el navegador, sin subir nada.',
      h1: 'Generador de forma de onda de audio gratuito en línea — Hacer una imagen de la forma de onda',
      heroAlt: 'Guardar la forma de onda de una canción como PNG',
      subtitle: 'Una imagen de la forma de onda: colores, tamaño y PNG transparente, dibujados en tu dispositivo.',
      intro: 'Suelta una canción, una nota de voz o un pódcast y obtén una imagen de forma de onda para una portada, un fondo de vídeo o una publicación. Barras o relleno, colores, y un PNG en tamaño de vídeo, cuadrado o banner. El navegador dibuja la imagen a partir del archivo que abriste: no se sube nada.',
      usesHeading: 'Para qué sirve la imagen',
      uses: [
        'Una portada de pódcast o de canción con forma de onda, en vez de un cuadrado vacío.',
        'Un PNG transparente para ponerlo sobre un vídeo o una miniatura.',
        'Un banner ancho para la cabecera de un sitio o el cierre de un vídeo.',
      ],
      howTo: [
        { name: 'Suelta el audio', text: 'MP3, WAV, M4A, OGG o FLAC. La decodificación se queda en tu dispositivo.' },
        { name: 'Ajusta el aspecto', text: 'Elige una plantilla, o define el estilo y los colores. Pon inicio y fin si solo quieres un tramo. Hay presets de 1920×1080, cuadrado, imagen social y banner.' },
        { name: 'Descarga el PNG', text: 'La vista previa es la exportación. Los tamaños predefinidos salen al doble de resolución para que se vean nítidos.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El navegador decodifica el archivo y dibuja la imagen en un canvas. No hay paso de subida. Cuando la página ya cargó, funciona también sin conexión.' },
        { q: '¿El PNG se verá nítido?', a: 'Los tamaños predefinidos se exportan al doble de píxeles: una portada de 1920×1080 se descarga como 3840×2160. El PNG no tiene pérdida. Por encima de unos dos millones de píxeles, un tamaño a medida se exporta a 1× para no agotar la memoria.' },
        { q: '¿Puedo editar el audio aquí?', a: 'No. Esta página solo dibuja una imagen. Para cortar o recortar, usa el recortador de audio y vuelve si todavía quieres la imagen.' },
        { q: '¿Es lo mismo que un espectrograma?', a: 'No. Una forma de onda muestra el volumen en el tiempo, la silueta del reproductor. Un espectrograma muestra qué frecuencias hay. Para verlas, usa el generador de espectrogramas.' },
        { q: '¿Puedo tener el fondo transparente?', a: 'Sí. Deja activado «Fondo transparente» y el PNG no tiene fondo, así que se coloca sobre un vídeo u otra imagen. Desactívalo para pintar un color sólido.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. En una pantalla estrecha los controles se apilan y el botón de descarga queda al alcance. Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil.' },
      ],
      sections: [
        {
          heading: 'Una imagen del volumen, no un retoque',
          paragraphs: [
            'El generador de forma de onda dibuja el volumen a lo largo del tiempo: barras en espejo o una forma rellena, con los colores que elijas. La descarga es un PNG. Los tamaños predefinidos se exportan al doble de píxeles, así que una portada de 1920×1080 baja como 3840×2160.',
            'Los tamaños a medida por encima de unos dos millones de píxeles se exportan a 1× para que la pestaña no se quede sin memoria. El PNG no tiene pérdida. Esta página no corta, no funde y no sube el audio.',
          ],
        },
        {
          heading: 'Formas que la gente descarga',
          paragraphs: [
            'Elige el marco según dónde va a vivir la imagen:',
          ],
          bullets: [
            'Tamaño de vídeo para un fondo o una tarjeta final.',
            'Cuadrado para la portada de un podcast o una canción.',
            'Un banner ancho para una cabecera. Deja el fondo transparente si vas a poner el PNG sobre un vídeo u otra imagen.',
          ],
        },
        {
          heading: 'No es un espectrograma',
          paragraphs: [
            'Una forma de onda es el dibujo que hace un reproductor. Un espectrograma muestra qué frecuencias hay. Para esa imagen, usa el espectrograma.',
            'Para cortar el archivo antes, usa Recortar audio y vuelve a por la imagen. No puedes reproducir el PNG de vuelta a la canción. Meter una imagen en un WAV es Imagen a audio, la dirección contraria.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
      exportLabel: 'Descargar PNG',
    },
    'spectrogram-generator': {
      cardLine: 'Ve las frecuencias dentro de una canción, una grabación o el canto de un pájaro.',
      name: 'Espectrograma online',
      shortName: 'Espectrograma',
      title: 'Espectrograma online — audio a imagen, gratis',
      description: 'Genera un espectrograma de cualquier audio y descarga el PNG. Eje log o lineal, colores, rango en dB. Gratis en el navegador, nada se sube.',
      h1: 'Espectrograma de audio gratuito en línea — Ver las frecuencias de una grabación',
      heroAlt: 'Descargar en PNG la imagen de frecuencias de una canción',
      subtitle: 'Mira qué frecuencias hay en una canción o una grabación y descarga la imagen. El cálculo queda en tu dispositivo.',
      intro: 'Un espectrograma muestra qué frecuencias hay a lo largo del tiempo: voz, graves y cualquier dibujo metido en el sonido. Suelta un archivo, elige eje log o lineal y descarga el PNG. La FFT corre en el navegador: nada se sube.',
      usesHeading: 'Qué busca la gente aquí',
      uses: [
        'Ver dónde están los graves, la voz y el hiss antes de ecualizar.',
        'Encontrar una imagen o una palabra escondida en las frecuencias.',
        'Exportar un fotograma de una canción para un post, una clase o una nota.',
      ],
      howTo: [
        { name: 'Suelta el audio', text: 'MP3, WAV, M4A, OGG o FLAC. La decodificación se queda en tu dispositivo.' },
        { name: 'Ajusta la vista', text: 'El eje log es la vista habitual en música. Estrecha la frecuencia alta. Si una imagen oculta está muy oscura o muy clara, mueve el suelo y el techo en dB. Si solo quieres un tramo, acorta el intervalo.' },
        { name: 'Descarga el PNG', text: 'Los tamaños predefinidos salen al doble de resolución. La imagen no es audio: no puedes reproducir el PNG como la canción.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El navegador decodifica el archivo y calcula la FFT en esta pestaña. No hay subida. Cuando la página ha cargado, funciona también sin conexión.' },
        { q: '¿Qué significan los colores?', a: 'Cada columna es un instante. La altura es la frecuencia, los agudos arriba. Más claro significa más energía. Viridis, inferno y gris son los mismos datos con otra escala. El suelo y el techo en dB deciden qué cuenta como silencio y como fuerte.' },
        { q: '¿Puedo volver a convertir la imagen en audio?', a: 'No. El PNG es un dibujo de niveles, no la forma de onda. Para oírlo, conserva el original. Para meter una imagen en el audio, usa Imagen a audio y abre ese WAV aquí.' },
        { q: '¿En qué se diferencia del generador de formas de onda?', a: 'Una forma de onda es el volumen en el tiempo, la silueta del reproductor. Un espectrograma muestra qué frecuencias hay. Para una portada, la forma de onda. Para mirar o revelar frecuencias, esta página.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. En una pantalla estrecha los controles se apilan y la descarga queda al alcance. Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil. Un archivo largo tarda un momento porque cada columna es una FFT.' },
        { q: '¿Por qué algunas canciones esconden una imagen?', a: 'Algunos temas, el caso famoso es Aphex Twin, dibujan una imagen poniendo energía en frecuencias elegidas. Sube el techo en dB si la imagen está pálida y deja el eje log. Esta página solo la muestra. Crearla es Imagen a audio.' },
      ],
      sections: [
        {
          heading: 'Frecuencia a lo largo del tiempo, en un PNG',
          paragraphs: [
            'Cada columna es un instante. La altura es la frecuencia, los agudos arriba. Un color más claro significa más energía. Viridis, inferno y gris son los mismos datos con otra escala. El suelo y el techo en dB deciden qué cuenta como silencio y como fuerte.',
            'La imagen es una FFT del archivo, dibujada en esta pestaña. No es audio. No puedes reproducir el PNG de vuelta a la canción.',
          ],
        },
        {
          heading: 'Cómo leer una imagen escondida',
          paragraphs: [
            'Algunos temas dibujan una imagen poniendo energía en frecuencias elegidas. Esta página puede mostrarla. No la crea:',
          ],
          bullets: [
            'Deja el eje log para la vista habitual en música. Estira el grave.',
            'Sube el techo en dB si una imagen escondida está pálida.',
            'Acorta el intervalo de tiempo si solo quieres un tramo del archivo.',
          ],
        },
        {
          heading: 'La forma de onda, y el truco al revés',
          paragraphs: [
            'El generador de forma de onda es el volumen a lo largo del tiempo, la forma para una portada. Esta página es qué frecuencias hay.',
            'Para construir un WAV de modo que un espectrograma muestre tu imagen o una línea corta de texto, usa Imagen a audio y abre ese WAV aquí. Eje log, techo cerca de −20 dB. La forma queda entre unos 400 Hz y 12 kHz. Esta página solo muestra.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para buscar',
      exportLabel: 'Descargar PNG',
    },
    'image-to-audio': {
      cardLine: 'Esconde una imagen o una línea de texto dentro del espectrograma de un WAV.',
      name: 'Imagen a audio',
      shortName: 'Imagen a audio',
      title: 'Imagen a audio — haz un espectrograma con tu imagen',
      description: 'Convierte una imagen o una línea corta en un WAV que un espectrograma puede mostrar. Gratis en el navegador, nada se sube.',
      h1: 'Imagen a audio gratuito en línea — Convertir una imagen en sonido',
      heroAlt: 'Volver a convertir una imagen de espectrograma en un WAV',
      subtitle: 'Pinta una imagen o una línea de texto en un WAV. El espectrograma la vuelve a mostrar.',
      intro: 'Escribe una línea corta o suelta una imagen. Esta página escribe esa forma en las frecuencias de un WAV, el mismo truco que una imagen escondida en una canción. No es una canción ni es voz. Abre el WAV en el generador de espectrogramas. Nada se sube.',
      usesHeading: 'Para qué lo usa la gente',
      uses: [
        'Esconder un nombre o una línea donde un espectrograma pueda leerla.',
        'Convertir un logo simple o un dibujo en una pintura de tonos corta.',
        'Hacer un archivo que se abre directo en el generador de espectrogramas.',
      ],
      howTo: [
        { name: 'Escribe o suelta', text: 'Hasta 32 caracteres, o un PNG, JPG o WebP. La vista previa es la imagen que se escribirá. Los píxeles claros son frecuencias más fuertes.' },
        { name: 'Descarga el WAV', text: 'Obtienes un WAV de 44,1 kHz y 16 bits. Suena a chirridos y ruido, no a la imagen leída en voz alta.' },
        { name: 'Mira el espectro', text: 'Abre el WAV en el generador de espectrogramas. Eje log, techo cerca de −20 dB. La forma queda entre unos 400 Hz y 12 kHz.' },
      ],
      faqs: [
        { q: '¿Se sube mi imagen?', a: 'No. El navegador dibuja el texto o la imagen y arma el WAV en esta pestaña. No hay subida. Cuando la página ha cargado, funciona también sin conexión.' },
        { q: '¿Qué archivo obtengo?', a: 'Un WAV mono a 44,1 kHz, PCM de 16 bits, de unos segundos. No es MP3. La imagen vive en las frecuencias: un MP3 de bajo bitrate puede emborronarla.' },
        { q: '¿Suena como la imagen o las palabras?', a: 'No. No hay síntesis de voz ni un generador de música. Oyes tonos donde los píxeles son claros. Para leerlo, mira un espectrograma.' },
        { q: '¿En qué se diferencia del generador de espectrogramas?', a: 'El generador de espectrogramas dibuja un audio que ya tienes. Esta página hace lo contrario: construye audio para que un espectrograma muestre tu imagen o tu línea. El generador de formas de onda solo muestra el volumen, así que la forma escondida apenas se ve allí.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. Escribe, elige una foto, descarga. Chrome, Edge, Firefox y Safari actuales, en escritorio y móvil. Una foto muy detallada se reduce para que el archivo siga siendo corto.' },
        { q: '¿Es un código secreto?', a: 'No. Quien abra un espectrograma del WAV ve la imagen. Es un dibujo visible en el sonido, no un cifrado.' },
      ],
      sections: [
        {
          heading: 'Una imagen escrita en las frecuencias',
          paragraphs: [
            'Escribe hasta 32 caracteres, o suelta un PNG, JPG o WebP. La página escribe esa forma en las frecuencias de un WAV mono a 44,1 kHz, 16 bits, de unos segundos. Los píxeles claros se vuelven frecuencias más fuertes.',
            'No es una canción y no es voz. Oyes chirridos y ruido, no las palabras dichas en alto. Una foto muy detallada se reduce para que el archivo siga siendo corto.',
          ],
        },
        {
          heading: 'Cómo ver lo que escribiste',
          paragraphs: [
            'La forma no se ve en una onda normal. Abre el WAV en el espectrograma:',
          ],
          bullets: [
            'Eje log, techo cerca de −20 dB.',
            'El dibujo queda entre unos 400 Hz y 12 kHz.',
            'Conserva el WAV. Un MP3 a bajo bitrate puede emborronar la forma.',
          ],
        },
        {
          heading: 'No es un código, ni la página del espectrograma',
          paragraphs: [
            'Cualquiera que abra un espectrograma del WAV puede ver la imagen. Es un dibujo dentro del sonido, no un cifrado.',
            'El espectrograma dibuja una imagen del audio que ya tienes. Esta página construye audio para que esa imagen muestre tu dibujo o tu línea. El generador de forma de onda solo muestra el volumen, así que la forma escondida no se ve clara allí.',
          ],
        },
      ],
      dropHint: 'O suelta una imagen',
      exportLabel: 'Descargar WAV',
    },
    'mp3-tag-editor': {
      name: 'Editor de etiquetas MP3',
      shortName: 'Editor de etiquetas',
      title: 'Editar etiquetas MP3 online gratis — título y portada',
      description:
        'Edita las etiquetas de tus MP3 online: título, artista, álbum, año, pista y portada. Todo en tu navegador, sin subir archivos. Gratis y sin registro.',
      h1: 'Editor de etiquetas MP3 gratuito en línea — Editar etiquetas ID3',
      heroAlt: 'Cambiar el título, el artista y la portada de un MP3',
      subtitle: 'Arregla el título, el artista, el álbum y la portada de un MP3 en menos de un minuto, en tu navegador y sin subir nada.',
      intro:
        'Un MP3 lleva dos cosas dentro: la música y la ficha de información que muestran los reproductores junto a ella: título, artista, álbum, año y portada. Cuando esa ficha está mal o falta, todo, desde el móvil hasta el autoestéreo, se queda en Artista desconocido o Track 01. Suelta aquí un archivo, corrige los campos y guarda: el audio se copia byte a byte, intacto, y nunca sale de tu dispositivo.',
      usesHeading: 'Las etiquetas que de verdad hay que arreglar',
      uses: [
        'Arreglar descargas que aparecen como "Artista desconocido" o sin portada en tu reproductor de música.',
        'Darle a un episodio de podcast o a una maqueta un título, una portada y unos créditos decentes antes de publicar.',
        'Eliminar los metadatos de dispositivo y ubicación que quedan en una grabación antes de compartirla.',
      ],
      howTo: [
        { name: 'Suelta tu MP3', text: 'Arrastra el archivo o haz clic para buscarlo. Las etiquetas y la portada actuales se leen en tu dispositivo y se muestran en el formulario.' },
        { name: 'Edita los campos', text: 'Escribe el título, el artista, el álbum, el año y el número de pista correctos, y añade o cambia la portada con un JPG o un PNG.' },
        { name: 'Guarda el MP3', text: 'Pulsa "Guardar MP3" para descargar el archivo con etiquetas. El audio se copia sin cambios: solo se reescribe la ficha de información que lo rodea.' },
      ],
      faqs: [
        { q: '¿Mi MP3 se sube a un servidor?', a: 'No. El archivo se abre con la API FileReader del navegador y se reescribe en tu propia pestaña. Puedes cargar esta página, apagar el Wi-Fi, y el editor sigue funcionando. No existe ningún paso de subida.' },
        { q: '¿Editar las etiquetas cambia la calidad del audio?', a: 'No. Los datos de las etiquetas viven en un bloque aparte al principio del archivo y los fotogramas de audio MPEG se copian byte a byte, así que el sonido es idéntico bit a bit. El archivo guardado puede incluso pesar algo menos, porque el bloque de etiquetas antiguo y su relleno no se conservan.' },
        { q: '¿En qué se diferencia del editor de MP3?', a: 'El editor de MP3 corta, recorta y une el audio en sí, lo que implica decodificar y volver a codificar el sonido. Esta página nunca toca el sonido: reescribe la ficha de información que lo rodea. Usa aquel para editar música y este para etiquetarla.' },
        { q: '¿Qué no puede hacer?', a: 'Solo edita archivos MP3: FLAC, M4A y WAV usan otros formatos de etiquetas que esta página aún no escribe. Funciona con un archivo cada vez, no con un álbum entero en lote. Y al guardar se reescribe todo el bloque de etiquetas, así que los capítulos de podcast o los campos personalizados poco comunes de la etiqueta original no se conservan; los campos habituales, sí.' },
        { q: '¿Por qué mi autoestéreo sigue mostrando "Track 01"?', a: 'Muchas radios de coche ignoran las etiquetas y recurren al nombre del archivo, y la mayoría guarda en caché la información antigua hasta que vuelves a conectar la memoria USB o vuelves a escanear. Guarda aquí (el archivo se escribe como ID3v2.3, la versión que los autoestéreos leen con más fiabilidad), renómbralo a algo como "01 - Título de la canción.mp3" y vuelve a escanear.' },
        { q: 'Mis etiquetas en chino, japonés, coreano o árabe salen con símbolos raros. ¿Tiene arreglo?', a: 'Sí: normalmente significa que la etiqueta antigua se guardó en una codificación de un byte en lugar de Unicode. Vuelve a escribir aquí el texto correcto y guarda: el archivo se reescribe como ID3v2.3 con texto UTF-16, que los reproductores modernos muestran bien, incluidos los títulos en chino, japonés, coreano, árabe, cirílico e hindi.' },
        { q: '¿Funciona en el móvil?', a: 'Sí: Chrome, Safari, Firefox y Edge recientes, en escritorio o móvil. Al guardar, el archivo se entrega al navegador como cualquier descarga; en iPhone, Safari lo guarda en la app Archivos. Todo funciona en local, así que también va con conexión lenta una vez abierta la página.' },
      ],
      sections: [
        {
          heading: 'Cambia la ficha, no el audio',
          paragraphs: [
            'El editor de etiquetas reescribe el bloque ID3 y copia los fotogramas MPEG byte a byte. El sonido es idéntico bit a bit. El archivo guardado puede incluso quedar un poco más pequeño, porque el bloque de etiquetas viejo y su relleno no se trasladan.',
            'Escribe ID3v2.3 con texto UTF-16, la versión que leen con más fiabilidad los equipos de coche, y que arregla títulos guardados en una codificación de un solo byte que se ven como basura.',
          ],
        },
        {
          heading: 'Qué puedes poner, y qué no',
          paragraphs: [
            'Un MP3 cada vez. Solo los campos habituales:',
          ],
          bullets: [
            'Título, artista, álbum y los demás campos de todos los días, más la carátula.',
            'No FLAC, M4A ni WAV. Esos formatos de etiqueta no se escriben aquí.',
            'No capítulos de podcast ni marcos raros. Guardar reescribe el bloque de etiquetas, y esos marcos no se trasladan.',
          ],
        },
        {
          heading: 'Por qué el coche sigue diciendo Track 01',
          paragraphs: [
            'Muchos equipos ignoran las etiquetas y caen al nombre del archivo, y la mayoría guarda en caché la información vieja hasta que vuelves a importar el USB o reescaneas. Renombra el archivo a algo como 01 - Song Title.mp3 y reescanea.',
            'Cortar, fundir o cambiar la velocidad es el editor de MP3, que decodifica y vuelve a codificar. Esta página no toca el sonido. Usa aquella para editar la música. Usa esta para etiquetarla.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo MP3 aquí o haz clic para buscarlo',
      exportLabel: 'Guardar MP3',
    },
    compressor: {
      cardLine: 'Baja los picos fuertes y sube las palabras flojas, sin hacer más alto todo el archivo.',
      name: 'Compresor de nivel',
      shortName: 'Compresor',
      title: 'Compresor de nivel — Iguala el volumen online',
      description:
        'Iguala las partes fuertes y flojas de una grabación en el navegador. El pico se queda. No reduce el archivo. Gratis, sin subida.',
      h1: 'Compresor de nivel — Igualar lo fuerte y lo bajo',
      heroAlt: 'Contener los picos de una voz para que las palabras bajas se oigan',
      subtitle: 'Un compresor de banda ancha que recorta los saltos de nivel. El pico del archivo se queda donde estaba.',
      intro:
        'Una nota de voz que grita una frase y susurra la siguiente necesita compresión, no una perilla de volumen. Esta página aplica un compresor de banda ancha: lo fuerte baja, lo flojo sube, y la exportación se escala para que el pico coincida con el del archivo original. Todo ocurre en el navegador. El archivo no se sube.',
      usesHeading: 'Trabajos que un compresor termina',
      uses: [
        'Igualar una nota de voz grabada cerca y lejos del teléfono.',
        'Bajar a un invitado de pódcast mucho más fuerte que quien conduce.',
        'Sentar una voz delante cuando el estribillo salta por encima del verso.',
      ],
      howTo: [
        { name: 'Suelta el audio', text: 'Cualquier MP3, WAV, M4A, OGG o FLAC. La decodificación se queda en tu dispositivo.' },
        { name: 'Ajusta la cantidad', text: 'Arrastra Comprimir. 30–50 % basta para la mayoría de las voces. 100 % aplasta: umbral −36 dB, relación 8:1.' },
        { name: 'Escucha y exporta', text: 'Reproduce el resultado y exporta MP3 o WAV. El pico vuelve al original, justo por debajo de la escala completa.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El compresor es un procesador de dinámica de Web Audio dentro de la pestaña. Después de cargar la página puedes quedar sin conexión y seguir exportando.' },
        { q: '¿Qué le pasa al audio?', a: 'Un compresor de banda ancha (umbral de −18 dB a −36 dB, relación de poco más de 1:1 hasta 8:1). El compresor no trae ganancia de compensación, así que la página escala la exportación hasta el pico de origen, o hasta unos −0.2 dBFS si el origen ya estaba más caliente. WAV conserva ese cambio de nivel. El MP3 se vuelve a codificar una vez.' },
        { q: '¿Esto reduce el archivo?', a: 'No. Reducir el archivo es volver a codificar a un bitrate más bajo: esa es la página de compresor de audio. Esta página cambia la dinámica y deja el bitrate al formato de exportación.' },
        { q: '¿En qué se diferencia del aumentador de volumen y de normalizar?', a: 'El aumentador multiplica todo el archivo. Normalizar sube todo hasta que la muestra más fuerte llega a un objetivo. Las dos dejan igual la distancia entre fuerte y flojo. Esta página acorta esa distancia. Es una sola banda, no una cadena multibanda, y no quita el ruido.' },
        { q: '¿Puede hacer desaparecer el ruido de la sala?', a: 'No. Al subir las partes flojas también sube el hiss y el ruido de la sala. Si el problema es el ruido, la compresión lo hace más evidente. Corta el silencio o graba de nuevo.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. El control y la exportación funcionan con el dedo en Chrome, Edge, Firefox y Safari actuales. Unos minutos de voz se exportan en un segundo o dos en un teléfono reciente.' },
      ],
      sections: [
        {
          heading: 'Dinámica, no tamaño de archivo',
          paragraphs: [
            'El compresor de nivel es un compresor de banda ancha. El umbral va de −18 dB hasta −36 dB, y la relación desde poco más de 1:1 hasta 8:1. Los momentos altos bajan y los bajos suben respecto a ellos.',
            'No hay ganancia de compensación dentro del compresor. Después la exportación se escala para que el pico coincida con el del origen, o −0,2 dBFS si el origen ya estaba más alto. No reduce el archivo. Un MP3 más pequeño es la página del compresor de audio.',
          ],
        },
        {
          heading: 'Qué arregla y qué no',
          paragraphs: [
            'Acerca lo alto y lo bajo. Es una sola banda, no una cadena de voz:',
          ],
          bullets: [
            'Una nota de voz que grita una frase y susurra la siguiente.',
            'Una mezcla en la que los golpes altos tapan las frases bajas, y quieres acercarlas.',
            'No quita el ruido. Subir las partes bajas también sube el soplido y el ambiente.',
          ],
        },
        {
          heading: 'En qué se aparta de un control de volumen',
          paragraphs: [
            'Subir el volumen multiplica todo el archivo. Normalizar sube todo hasta que la muestra más alta llega a un pico. Las dos dejan igual la distancia entre lo alto y lo bajo. Esta página acorta esa distancia.',
            'WAV conserva el cambio de nivel sin otra generación con pérdida. MP3 se vuelve a codificar una vez. Si el problema es solo que el archivo está bajo, y la dinámica está bien, usa Subir el volumen.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para buscarlo',
    },
    echo: {
      cardLine: 'Añade repeticiones que puedes contar: un golpe corto, no un baño de reverb.',
      name: 'Eco',
      shortName: 'Eco',
      title: 'Añadir eco al audio — efecto de eco online',
      description: 'Añade un eco medido a cualquier audio en el navegador. Tú pones el retardo y las repeticiones. Gratis, sin subida.',
      h1: 'Eco gratuito en línea — Añadir eco al audio',
      heroAlt: 'Añadir un retardo y repeticiones a una grabación',
      subtitle: 'Repeticiones separadas, con el retardo que elijas: de un golpe corto a 0,8 s.',
      intro: 'El eco es una copia que vuelve después de un hueco que puedes contar. El retardo va de unas centésimas hasta 0,8 segundos, y las repeticiones deciden cuánto de cada copia vuelve a entrar. La mezcla húmeda está fija en 45 %. Con retardo en cero el archivo no cambia. El proceso se queda en el navegador.',
      usesHeading: 'Ecos que la gente sí quiere',
      uses: ['Poner un golpe corto en una voz para que ocupe sitio sin volverse papilla.', 'Hacer que un golpe de guitarra o de batería vuelva a tiempo.', 'Oír una frase que regresa una vez, clara, en vez de una nube de reverb.'],
      howTo: [
        { name: 'Suelta el audio', text: 'Cualquier MP3, WAV, M4A, OGG o FLAC. Se decodifica en tu dispositivo.' },
        { name: 'Ajusta retardo y repeticiones', text: 'El retardo es el hueco antes de la primera copia, hasta 0,8 s. Las repeticiones son la realimentación, tope 55 % para que no se dispare.' },
        { name: 'Escucha y exporta', text: 'Reprodúcelo y exporta MP3 o WAV. El archivo crece con la cola de las repeticiones, hasta 4 segundos.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El eco es un retardo de Web Audio dentro de la pestaña. Después de cargar la página puedes quedar sin conexión y seguir exportando.' },
        { q: '¿Qué hace el efecto?', a: 'Una copia se retrasa el tiempo que marcas y se mezcla al 45 %. Cada copia vuelve a entrar en el retardo al nivel de repetición, hasta 0,55, así que se apagan en vez de aullar. WAV conserva esa mezcla. El MP3 se vuelve a codificar una vez.' },
        { q: '¿En qué se diferencia de slowed + reverb?', a: 'Slowed + reverb es un baño: el tono baja con la velocidad y la cola es un borrón de reflexiones. Esta página conserva el tiempo original y añade copias separadas. No cambia la velocidad ni el tono.' },
        { q: '¿Por qué las repeticiones no se vuelven más fuertes?', a: 'La realimentación tiene un tope del 55 % y la cola renderizada, de 4 segundos. Alcanza para oír varias copias. No se convierte en un ruido que se autoexcita.' },
        { q: '¿Puedo poner eco solo en una parte?', a: 'Sí. Selecciona el tramo en la forma de onda y conserva esa selección. Las repeticiones se suman a lo que exportas, no al resto del archivo.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. Los dos controles y el botón de exportar funcionan con el dedo en Chrome, Edge, Firefox y Safari actuales.' },
      ],
      sections: [
        {
          heading: 'Copias separadas, no un baño',
          paragraphs: [
            'El eco retrasa una copia de la señal el tiempo que marques, desde unas centésimas de segundo hasta 0,8 segundos, y la mezcla de vuelta al 45 por ciento. Cada copia vuelve a entrar en el retardo según el nivel de repetición.',
            'La realimentación tiene un tope de 0,55 y la cola renderizada de 4 segundos, así que las repeticiones se apagan en lugar de aullar. Con el retardo a cero el archivo no cambia. La velocidad y el tono se quedan como estaban.',
          ],
        },
        {
          heading: 'Cómo usar los dos controles',
          paragraphs: [
            'El retardo es el hueco antes de la primera copia. Las repeticiones son cuánto de cada copia vuelve a entrar:',
          ],
          bullets: [
            'Un retardo corto para un golpe que aún oyes como un segundo impacto.',
            'Un retardo más largo, por debajo de 0,8 segundos, cuando quieres contar las copias una a una.',
            'Solo una selección, si el eco debe caer en una frase y no en el resto del archivo.',
          ],
        },
        {
          heading: 'El eco no es slowed + reverb',
          paragraphs: [
            'Slowed + reverb baja el tono con la velocidad y emborrona la cola en una sala. Esta página mantiene el tiempo original y añade copias que se oyen por separado.',
            'Fundir el inicio o el final de un archivo es la página de fundido. Solapar dos canciones es Unir canciones. Ninguna de las dos es un eco.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para buscarlo',
    },
    'silence-remover': {
      cardLine: "Corta los silencios largos y deja las respiraciones cortas donde están.",
      name: "Quitar silencio",
      shortName: "Silencio",
      title: "Quitar silencio del audio — Cortar huecos en línea gratis",
      description: "Quita los silencios largos de cualquier audio en el navegador. Tú decides qué tan bajo y qué tan largo. Gratis, sin subir nada.",
      h1: 'Quitar silencio gratuito en línea — Quitar el silencio del audio',
      heroAlt: 'Cortar las pausas largas de una grabación de voz',
      subtitle: "Quita el aire muerto. Las pausas más cortas que el hueco que marcas se quedan.",
      intro: "Encuentra tramos más bajos que el umbral y más largos que la pausa mínima, y los corta. El umbral por defecto es −40 dBFS, útil para voz y notas de voz. Cada corte deja 0,08 segundos en los dos bordes para no comerse el principio o el final de una palabra. Una pausa más corta que el hueco se queda. La música baja y las colas que se apagan también están bajo −40 dBFS y se cortan. Si quieres elegir a mano, usa el recortador de audio. Si todo el archivo está bajo el umbral, la exportación es el archivo original. El proceso se queda en tu navegador.",
      usesHeading: "Dónde está de verdad el aire muerto",
      uses: ["Aprieta una nota de voz o una toma de pódcast con pausas largas entre frases.", "Quita el silencio de una clase sin recortar cada hueco a mano.", "Limpia una grabación antes de exportar y deja las respiraciones cortas."],
      howTo: [
        { name: "Suelta el audio", text: "Cualquier MP3, WAV, M4A, OGG o FLAC. Se decodifica en tu dispositivo." },
        { name: "Marca el umbral y el hueco", text: "El umbral es qué tan bajo debe estar, de −60 a −20 dBFS. La pausa mínima es cuánto debe durar para quitarse, de 0,1 a 2 segundos. La línea de estado dice cuántos segundos se irán, más o menos." },
        { name: "Exporta", text: "Puedes oír el original y luego exportar MP3 o WAV. El archivo junta las partes con sonido y deja 0,08 segundos en cada corte." },
      ],
      faqs: [
        { q: "¿Se sube mi audio?", a: "No. El nivel se mide en tu navegador y los tramos bajos se cortan en memoria. Cuando la página ha cargado puedes seguir sin conexión y la exportación funciona." },
        { q: "¿Qué quita de verdad?", a: "Un tramo se quita solo si está por debajo del umbral y dura más que la pausa mínima. El valor inicial es −40 dBFS y 0,35 segundos. Cada tramo deja 0,08 segundos en los dos extremos. Los huecos más cortos, incluidas la mayoría de las respiraciones, se quedan." },
        { q: "¿Corta la música baja?", a: "Sí, si se mantiene bajo el umbral más tiempo que el hueco. −40 dBFS es para voz. Una cama baja, un fundido o el ruido de sala de una mezcla se tratan como silencio. Sube el umbral hacia −20 si solo quieres los ceros casi digitales, o usa el recortador y selecciona a mano." },
        { q: "¿Y si todo el archivo está bajo?", a: "No se corta nada. La línea de estado lo dice, y la exportación es el archivo original." },
        { q: "¿En qué se diferencia del recortador?", a: "El recortador de audio y el cortador de MP3 guardan la zona que dibujas en la forma de onda. Esta página encuentra los silencios largos por nivel y los quita todos en una exportación. No cambia la velocidad, el tono ni el volumen de lo que queda." },
        { q: "¿Funciona en el teléfono?", a: "Sí. Los dos controles y el botón de exportar responden al tacto en Chrome, Edge, Firefox y Safari actuales." },
      ],
      sections: [
        {
          heading: 'Corta silencios largos, no las respiraciones',
          paragraphs: [
            'Un tramo se quita solo cuando está más bajo que el umbral y dura más que el hueco mínimo. El valor inicial es −40 dBFS y 0,35 segundos. Cada corte conserva 0,08 segundos en los dos extremos para que el empalme no haga clic.',
            'Los huecos más cortos, incluidas casi todas las respiraciones, se quedan. Lo que queda no se hace más alto, más lento ni más agudo. Si todo el archivo está bajo el umbral, no se corta nada y la exportación es el archivo original.',
          ],
        },
        {
          heading: 'Voz, no una canción baja',
          paragraphs: [
            '−40 dBFS está pensado para la voz. La música pierde lo que querías conservar si está tan bajo:',
          ],
          bullets: [
            'Una nota de voz o una entrevista con pausas largas entre respuestas.',
            'Sube el umbral hacia −20 dBFS si solo quieres quitar el silencio casi digital.',
            'Un fundido, una base baja o el ambiente de una mezcla: sal de esta página y recorta a mano.',
          ],
        },
        {
          heading: 'El recorte a mano y esta página',
          paragraphs: [
            'Recortar audio y el cortador de MP3 conservan una zona que dibujas. Esta página encuentra cada silencio largo por nivel y los quita en una exportación.',
            'Usa el recorte cuando la parte baja es algo que aún quieres, o cuando debes quedarte con un tramo y tirar el resto de oído. Usa esta página cuando las pausas son el problema y duran lo bastante para medirlas.',
          ],
        },
      ],
      dropHint: "Suelta un archivo de audio o haz clic para buscar",
    },
    'audio-looper': {
      cardLine: 'Repite un clip hasta 16 veces y cruza cada unión.',
      name: 'Repetidor de audio',
      shortName: 'Bucle',
      title: 'Audio looper — repetir un clip en línea gratis',
      description: 'Repite una selección o el archivo entero de 2 a 16 veces, con un crossfade de 0,01 s en cada unión. Gratis en el navegador. Nada se sube.',
      h1: 'Repite un clip de 2 a 16 veces, en línea y gratis',
      heroAlt: 'Repetir un clip y cruzar cada unión',
      subtitle: 'Haz un bucle de la selección o del archivo entero y descarga uno más largo.',
      intro: 'Las repeticiones van de 2 a 16. El valor inicial es 4. Cada unión es un crossfade lineal, 0,01 segundos salvo que lo muevas, hasta 0,1 segundos. Arrastra una selección para repetir solo eso. Sin selección, se repite el archivo entero. La exportación se detiene a los 10 minutos. El tono y la velocidad no cambian. El proceso se queda en el navegador.',
      usesHeading: 'Para qué sirven las repeticiones',
      uses: ['Convierte un compás en un loop de práctica y expórtalo.', 'Alarga una frase corta de voz para que cubra una escena.', 'Repite un sample con un crossfade corto para que la unión no haga clic.'],
      howTo: [
        { name: 'Suelta el audio', text: 'Cualquier MP3, WAV, M4A, OGG o FLAC. Se decodifica en tu dispositivo.' },
        { name: 'Ajusta repeticiones y unión', text: 'Las repeticiones van de 2 a 16. La unión es el crossfade de cada costura, de 0 a 0,1 segundos. Arrastra la onda si solo debe repetirse una parte. La línea de estado muestra la duración.' },
        { name: 'Exporta', text: 'Escucha el original para comprobar la selección y exporta MP3 o WAV. La descarga es el clip escrito uno detrás de otro.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. Las repeticiones se copian en tu navegador. Cuando la página ha cargado, puedes quedar sin red y la exportación sigue.' },
        { q: '¿Qué pasa en cada unión?', a: 'El final de una pasada y el inicio de la siguiente se solapan la duración de la unión. El valor inicial es 0,01 segundos. El solape es un crossfade lineal, así que un tono estable no salta. El WAV son esas muestras. El MP3 codifica el bucle una vez, al bitrate que elijas. El tono y la velocidad no cambian.' },
        { q: '¿Qué rechaza?', a: 'Las repeticiones solo van de 2 a 16. Si el resultado pasara de 10 minutos, la exportación se detiene y la línea de estado lo dice. Esta página no graba encima de sí misma ni pone dos archivos distintos uno detrás de otro.' },
        { q: '¿En qué se diferencia de recortar, unir y el fundido?', a: 'El recorte guarda un tramo una vez. La unión pone archivos distintos en fila. El fundido baja el inicio o el final de un archivo. Esta página vuelve a escribir el mismo clip, y el crossfade solo está entre copias.' },
        { q: '¿Funciona en el móvil?', a: 'Sí. Los dos deslizadores, la onda y el botón de exportar se usan con el dedo en Chrome, Edge, Firefox y Safari actuales.' },
      ],
      sections: [
        {
          heading: 'Las copias se solapan en la unión',
          paragraphs: [
            'Las repeticiones van de 2 a 16. El valor inicial es 4. Cada unión se solapa según el control Unión: 0,01 segundos salvo que lo muevas, y nunca más de 0,1 segundos.',
            'El solape es un crossfade lineal, así que un tono estable no salta. La duración es una pasada por el número de repeticiones, menos el solape por una vez menos que ese número. El tono y la velocidad no cambian. El WAV son esas muestras. El MP3 codifica el bucle una vez.',
          ],
        },
        {
          heading: 'Un clip, escrito otra vez',
          paragraphs: ['Úsalo cuando la siguiente copia deba ser el mismo audio:'],
          bullets: [
            'Un compás que quieres como archivo de práctica.',
            'Una frase corta de voz que tiene que cubrir una escena más larga.',
            'Un sample cuya costura hace clic si las copias se tocan sin solape.',
          ],
        },
        {
          heading: 'No es un recorte, ni una unión de archivos',
          paragraphs: [
            'El recorte guarda un tramo una vez. La unión pone archivos distintos en fila. El fundido baja el inicio o el final de un archivo. El crossfade de esta página solo está entre copias del mismo clip.',
            'Esta página no graba encima de sí misma. Si el resultado pasara de 10 minutos, la exportación se detiene. Acorta la selección o baja las repeticiones.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para buscar',
    },
    'auto-panner': {
      cardLine: 'Mueve un archivo a izquierda y derecha al ritmo que tú pongas. No sigue el pulso.',
      name: 'Auto panner',
      shortName: 'Paneo',
      title: 'Auto panner — mover el audio a izquierda y derecha',
      description: 'Mueve mono o estéreo de izquierda a derecha de 0,05 a 2 Hz. La profundidad va de 0 a 100 %, y empieza en 70 %. Gratis en el navegador. Nada se sube.',
      h1: 'Auto panner, mueve un archivo de izquierda a derecha',
      heroAlt: 'Mover una grabación de izquierda a derecha',
      subtitle: 'Tú pones la profundidad y la frecuencia. El barrido no sigue el pulso.',
      intro: 'La profundidad va de 0 a 100 %. El valor inicial es 70 %. La frecuencia va de 0,05 Hz a 2 Hz. El valor inicial es 0,2 Hz. La posición es la profundidad por un seno de esa frecuencia, así que 0,2 Hz tarda 5 segundos en ir y volver. No sigue la batería. Con profundidad 0 el archivo se queda como está. El proceso se queda en el navegador.',
      usesHeading: 'Para qué sirve el barrido',
      uses: ['Mueve un colchón o una voz despacio de un altavoz al otro.', 'Dale a una toma mono un movimiento constante de izquierda a derecha.', 'Elige la frecuencia en hercios, en vez de perseguir la batería.'],
      howTo: [
        { name: 'Suelta el audio', text: 'Cualquier MP3, WAV, M4A, OGG o FLAC. Se decodifica en tu dispositivo.' },
        { name: 'Ajusta profundidad y frecuencia', text: 'La profundidad es cuánto se desplaza el sonido, de 0 a 100 %. La frecuencia es cuántos barridos por segundo, de 0,05 a 2. Arrastra la onda si solo debe moverse una parte.' },
        { name: 'Exporta', text: 'Escucha para comprobar la selección y exporta MP3 o WAV. El WAV son esas muestras. El MP3 codifica el barrido una vez.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El barrido es un panoramizador estéreo en tu navegador. Cuando la página ha cargado, puedes quedar sin red y la exportación sigue.' },
        { q: '¿Qué le pasa al sonido?', a: 'La posición es la profundidad por un seno de la frecuencia. El tono y la velocidad de reproducción no cambian. Un estéreo se mueve como una sola imagen. Los dos canales no van por caminos distintos. El WAV son esas muestras. El MP3 codifica una vez, al bitrate que elijas.' },
        { q: '¿Qué no hace?', a: 'El barrido no se engancha a un pulso y no separa centro y lados. Con profundidad 0 no se inserta el panoramizador, así que la exportación coincide con el archivo que soltaste. No es una transferencia relativa a la cabeza que apunte el sonido a un ángulo.' },
        { q: '¿En qué se diferencia del eco, del slowed reverb y del ecualizador?', a: 'El eco añade una copia tras un retardo. Slowed + reverb cambia la velocidad y el tono, y luego añade una sala. El ecualizador de audio cambia bandas de frecuencia. Esta página solo mueve el mismo audio a izquierda y derecha. Un círculo fijo de unos 10 segundos, con una cola de reverb corta, es la página de audio 3D.' },
        { q: '¿Funciona en el móvil?', a: 'Sí. Los dos deslizadores, la onda y el botón de exportar se usan con el dedo en Chrome, Edge, Firefox y Safari actuales.' },
      ],
      sections: [
        {
          heading: 'Dónde se sienta el sonido',
          paragraphs: [
            'La profundidad va de 0 a 100 %. El valor inicial es 70 %. La frecuencia va de 0,05 Hz a 2 Hz. El valor inicial es 0,2 Hz.',
            'La posición es la profundidad por un seno de esa frecuencia. A 0,2 Hz un ciclo completo de izquierda a derecha tarda 5 segundos. Con profundidad 0 el archivo se queda como está. El tono y la velocidad de reproducción no cambian.',
          ],
        },
        {
          heading: 'Un barrido constante',
          paragraphs: ['Úsalo cuando el movimiento deba ser regular:'],
          bullets: [
            'Un colchón o una voz que deba cruzar los altavoces despacio.',
            'Una toma mono que deba moverse, sin convertirse en dos pistas distintas.',
            'Una frecuencia en hercios, no un barrido que intente seguir la batería.',
          ],
        },
        {
          heading: 'No es un eco, ni un cambio de tempo',
          paragraphs: [
            'El eco añade una copia tras un retardo. Slowed + reverb cambia la velocidad y el tono, y luego añade una sala. El ecualizador cambia bandas de frecuencia. Ninguno de esos mueve la imagen con el reloj.',
            'Esta página no sigue un pulso. Un estéreo sigue siendo una sola imagen. Izquierda y derecha no van por caminos separados.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para buscar',
    },
    '3d-audio': {
      cardLine: 'Un interruptor pone el archivo en un círculo lento y añade una cola de reverb corta.',
      name: 'Audio 3D',
      shortName: '3D',
      title: 'Audio 3D — círculo lento y reverb en línea gratis',
      description: 'Un círculo cada unos 10 segundos y una cola de reverb corta. Un interruptor. La velocidad y el tono se quedan. Gratis en el navegador. Nada se sube.',
      h1: 'Audio 3D, un círculo lento con una cola de reverb corta',
      heroAlt: 'Un círculo lento entre los altavoces, más una sala corta',
      subtitle: 'La profundidad, la frecuencia y la sala ya están puestas. Solo cambias el interruptor.',
      intro: 'El círculo es fijo. La profundidad es 100 %. La frecuencia es 0,1 Hz, así que una vuelta tarda unos 10 segundos. Se mueve el sonido directo. Un envío de reverb al 25 % usa la misma sala corta que Slowed + reverb. La velocidad y el tono no cambian. Con el interruptor apagado, la exportación es el archivo que soltaste. El proceso se queda en el navegador.',
      usesHeading: 'Para qué sirve el círculo',
      uses: ['Pon una voz o un colchón en un círculo lento sin elegir la frecuencia.', 'Añade una sala corta detrás de ese movimiento.', 'Deja la velocidad original y el tono original.'],
      howTo: [
        { name: 'Suelta el audio', text: 'Cualquier MP3, WAV, M4A, OGG o FLAC. Se decodifica en tu dispositivo.' },
        { name: 'Deja el círculo encendido', text: 'El interruptor empieza encendido. Apágalo y la exportación coincide con el archivo que soltaste. No hay un segundo deslizador para la profundidad, la frecuencia o la sala.' },
        { name: 'Exporta', text: 'Escucha y exporta MP3 o WAV. El WAV son las muestras del círculo más la cola. El MP3 codifica eso una vez.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El círculo y la sala se renderizan en tu navegador. Cuando la página ha cargado, puedes quedar sin red y la exportación sigue.' },
        { q: '¿Qué le pasa al sonido?', a: 'La profundidad se queda en 100 %. La frecuencia se queda en 0,1 Hz, unos 10 segundos por vuelta. Se mueve el sonido directo. La reverb es un envío al 25 %, la misma sala corta que Slowed + reverb, así que el archivo gana una cola. La velocidad y el tono no cambian. El WAV son esas muestras. El MP3 codifica una vez, al bitrate que elijas.' },
        { q: '¿Qué no hace?', a: 'En esta página no puedes poner otra frecuencia, otra profundidad ni otra sala. No sigue un pulso. No apunta el sonido a un ángulo alrededor de tu cabeza. Con el interruptor apagado no hay círculo ni cola.' },
        { q: '¿En qué se diferencia del auto panner y del slowed reverb?', a: 'Para fijar tú la frecuencia y la profundidad, usa el auto panner. Esta página es el círculo ya hecho, unos 10 segundos, con la reverb ya encendida. Slowed + reverb cambia la velocidad y el tono. Esta página no.' },
        { q: '¿Funciona en el móvil?', a: 'Sí. El interruptor, la onda y el botón de exportar se usan con el dedo en Chrome, Edge, Firefox y Safari actuales.' },
      ],
      sections: [
        {
          heading: 'Un círculo con los números ya elegidos',
          paragraphs: [
            'La profundidad es 100 %. La frecuencia es 0,1 Hz. Una vuelta desde el centro, hacia un lado y de regreso por el otro, tarda unos 10 segundos.',
            'Se mueve el sonido directo. La reverb es un envío al 25 %, la misma sala corta que en Slowed + reverb. La cola es la razón de que la exportación pase del final del archivo que soltaste.',
          ],
        },
        {
          heading: 'Cuando el preset es el trabajo',
          paragraphs: ['Usa esta página cuando quieras el movimiento ya hecho:'],
          bullets: [
            'Una voz o un colchón que deba vagar, sin un deslizador de frecuencia.',
            'Una sala corta detrás de ese movimiento, no una mezcla de reverb que hagas tú.',
            'La velocidad original y el tono original, donde estaban.',
          ],
        },
        {
          heading: 'No es un panorámico que ajustes, ni una ralentización',
          paragraphs: [
            'El auto panner es donde pones la profundidad de 0 a 100 % y la frecuencia de 0,05 Hz a 2 Hz, sin reverb. Esta página fija los dos números y añade la sala.',
            'Slowed + reverb cambia la velocidad, y el tono se mueve con ella. Esta página no. Con el interruptor apagado, el archivo se queda como lo soltaste.',
          ],
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para buscar',
    },
    metronome: {
      cardLine: 'Un clic de 40 a 240 BPM. El primer pulso de cada compás suena más fuerte.',
      name: 'Metrónomo',
      shortName: 'Metrónomo',
      title: 'Metrónomo — Clic de 40 a 240 BPM gratis',
      description: 'Un clic de 40 a 240 BPM en 2/4, 3/4, 4/4 o 6/8. El primer pulso es más fuerte. Exporta 4, 8 o 16 compases en WAV o MP3. No se sube nada.',
      h1: 'Metrónomo, un clic de 40 a 240 BPM',
      heroAlt: 'Un clic de metrónomo de 40 a 240 BPM',
      subtitle: 'Escucha el clic, o guarda 4, 8 o 16 compases. No se mezcla con una canción.',
      intro: 'El tempo va de 40 a 240 BPM. Elige 2/4, 3/4, 4/4 o 6/8. El primer pulso de cada compás es más fuerte. Pulsa reproducir y el clic sigue hasta que paras. La exportación escribe 4, 8 o 16 compases en WAV o MP3. 6/8 son seis clics en el compás, a ese BPM, no dos. Esta página no recibe un archivo y no pone el clic debajo de una canción. Esa mezcla es el editor multipista. No se sube nada.',
      usesHeading: 'Qué puedes hacer',
      uses: [
        'Ensayar un tempo antes de grabar en la grabadora de voz.',
        'Exportar 4, 8 o 16 compases del mismo clic.',
        'Oír el 6/8 como seis clics, con el primero más fuerte.',
      ],
      howTo: [
        { name: 'Pon BPM y compás', text: 'El BPM va de 40 a 240. Elige 2/4, 3/4, 4/4 o 6/8. La página empieza en 100 BPM y 4/4.' },
        { name: 'Pulsa reproducir', text: 'El clic sigue hasta que paras. El primer pulso de cada compás es más fuerte. Cada clic es el mismo tono corto.' },
        { name: 'Exporta si quieres un archivo', text: 'Elige 4, 8 o 16 compases, luego WAV o MP3. El archivo es solo el clic. WAV guarda esas muestras. MP3 las codifica una vez.' },
      ],
      faqs: [
        { q: '¿Se sube algo?', a: 'No. La página no lee un archivo y no abre el micrófono. La reproducción y la exportación se quedan en el navegador. Cuando la página ha cargado, puedes quedar sin red y el clic sigue.' },
        { q: '¿Cómo suena el clic?', a: 'A 100 BPM los clics van a 0,60 segundos. El primer pulso del compás es más fuerte. Los otros son el mismo tono, más bajo. WAV son esas muestras. MP3 las codifica una vez, al bitrate que eliges.' },
        { q: '¿Qué no hace?', a: 'No alinea el clic con una canción. No hay dónde soltar un archivo. El 6/8 sigue siendo seis clics en el compás, al BPM del control. No pasa a dos clics de negra con puntillo.' },
        { q: '¿En qué se diferencia del multipista y de la velocidad?', a: 'Esta página es solo el clic. Poner ese clic bajo una canción es el editor multipista. Cambiar lo que dura una grabación es la página de velocidad, y el tono se mueve con la velocidad. El micrófono es la grabadora de voz.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. El control de BPM, el compás, reproducir y exportar se tocan en Chrome, Edge, Firefox y Safari actuales. El clic usa un oscilador de Web Audio. El archivo exportado usa el mismo intervalo.' },
      ],
      sections: [
        {
          heading: 'El clic',
          paragraphs: [
            'A 100 BPM los clics van a 0,60 segundos. El primer pulso del compás es más fuerte. Cada clic es el mismo tono corto.',
            '2/4 suena dos veces en un compás, 3/4 tres, 4/4 cuatro y 6/8 seis. El BPM es el ritmo del clic en cada uno de esos compases.',
          ],
        },
        {
          heading: 'Un archivo con los mismos clics',
          paragraphs: [
            'La exportación escribe 4, 8 o 16 compases. WAV deja los clics como están. MP3 codifica ese resultado una vez.',
          ],
          bullets: [
            'Cuatro compases de 4/4 a 100 BPM son 16 clics.',
            'Suelta ese WAV en el editor multipista si lo quieres bajo una canción.',
            'Quédate en reproducir si solo necesitabas oír el tempo.',
          ],
        },
        {
          heading: 'Lo que no hará',
          paragraphs: [
            'No alineará los clics con una canción. No hay archivo que soltar ni onda que recortar.',
            'No cambiará la duración de una grabación. Eso lo hace la página de velocidad, y el tono se mueve con la velocidad.',
          ],
        },
      ],
      dropHint: 'Sin archivo. Pulsa reproducir.',
    },
    'loudness-meter': {
      cardLine: "Lee lo fuerte que es un archivo en LUFS y luego iguala un objetivo de pódcast, streaming o emisión.",
      name: "Medidor de sonoridad",
      shortName: "Sonoridad",
      title: "Medidor de sonoridad — LUFS de un audio en línea gratis",
      description: "Mide los LUFS integrados de un audio en el navegador y luego iguala −16, −14 o −23. El pico de muestra no pasa de −1 dBFS. Gratis, sin subir nada.",
      h1: 'Medidor LUFS gratuito en línea — Comprobar los LUFS de una canción',
      heroAlt: 'Ver si un archivo coincide con el nivel de un pódcast o de un streaming',
      subtitle: "Los LUFS integrados del archivo que sueltas, no lo fuerte que está la habitación.",
      intro: "Suelta un archivo y lee su sonoridad integrada en LUFS, más el pico de muestra. Luego iguala un objetivo de entrega: pódcast −16, streaming −14 o emisión −23. La ganancia es un solo número para todo el archivo. Si esa ganancia empujaría la muestra más fuerte por encima de −1 dBFS, se detiene ahí y la página te dice los LUFS que de verdad alcanzas. No es un sonómetro de la habitación, ni una normalización por pico. −16, −14 y −23 son objetivos habituales de entrega, no un límite legal. El proceso se queda en tu navegador.",
      usesHeading: "Para qué sirve el número",
      uses: ["Ver si una nota de voz o una mezcla está cerca de un objetivo de pódcast antes de enviarla.", "Subir un archivo bajo hacia −16 o −14 sin dejar que el pico de muestra pase de −1 dBFS.", "Leer un estéreo como estéreo. Los dos canales no se mezclan antes de la medida."],
      howTo: [
        { name: "Suelta el audio", text: "Cualquier MP3, WAV, M4A, OGG o FLAC. Se decodifica y se mide en tu dispositivo." },
        { name: "Lee el medidor", text: "Integrada es la sonoridad del archivo con ponderación K, en LUFS. El pico de muestra es la muestra más grande, en dBFS. Un archivo en silencio no tiene sonoridad que igualar." },
        { name: "Elige un objetivo y exporta", text: "Pódcast es −16, streaming es −14, emisión es −23. Exporta MP3 o WAV. Si el pico pasaría de −1 dBFS, la ganancia se detiene y la nota muestra los LUFS que obtienes." },
      ],
      faqs: [
        { q: "¿Se sube mi audio?", a: "No. El archivo se decodifica y se mide en tu navegador. Cuando la página ha cargado puedes seguir sin conexión y la exportación funciona." },
        { q: "¿Qué significa el número?", a: "Los LUFS integrados son lo fuerte que es el archivo a lo largo de su duración, con la ponderación K de ITU-R BS.1770. Es una propiedad del archivo. No es una lectura de la habitación ni un nivel de presión sonora con ponderación A." },
        { q: "¿En qué se diferencia de normalizar?", a: "Normalizar sube el archivo hasta que la muestra más fuerte toca un pico. Esta página iguala la sonoridad integrada. Un archivo puede estar normalizado por pico y seguir lejos de −16 LUFS. Lo fuerte y lo bajo siguen a la misma distancia. El compresor de nivel es la página que cierra esa distancia." },
        { q: "¿−16, −14 y −23 son límites legales?", a: "No. Son objetivos habituales de entrega: los pódcast suelen pedir unos −16 LUFS, el streaming de música unos −14 y la emisión unos −23. La página no promete que tu archivo pase un control de plataforma o de una emisora." },
        { q: "¿El pico es un pico real?", a: "No. El pico de muestra es la muestra más grande del archivo. Un pico real necesita sobremuestreo y puede quedar un poco más alto entre muestras. Esta página deja el pico de muestra en −1 dBFS y no informa dBTP." },
        { q: "¿Funciona en el teléfono?", a: "Sí. Los tres objetivos y el botón de exportar responden al tacto en Chrome, Edge, Firefox y Safari actuales." },
      ],
      sections: [
        {
          heading: 'Una lectura del archivo, no del cuarto',
          paragraphs: [
            'El número es LUFS integrado: lo alto que está el archivo a lo largo de su duración, con la ponderación K de ITU-R BS.1770. Es una propiedad del archivo. No es una lectura de la sala, ni un nivel de presión sonora ponderado A.',
            'La página también muestra el pico de muestra. Ese pico no es el pico real. Los picos entre muestras aún pueden pasar el techo en algunas reproducciones.',
          ],
        },
        {
          heading: 'Objetivos que la gente usa de verdad',
          paragraphs: [
            'Los puntos de referencia habituales son convenciones, no límites legales:',
          ],
          bullets: [
            'Cerca de −16 LUFS para un podcast hablado.',
            'Cerca de −14 LUFS para mucho streaming de música.',
            'Cerca de −23 LUFS para una sonoridad de programa al estilo de emisión.',
          ],
        },
        {
          heading: 'La ganancia se detiene en el pico',
          paragraphs: [
            'Si aplicas la ganancia sugerida, se detiene cuando el pico de muestra pasaría de −1 dBFS. Un archivo puede estar ya normalizado por pico y seguir lejos de −16 LUFS, porque una tos fija el pico y el resto se queda bajo.',
            'Normalizar solo persigue ese pico, hasta cerca de −0,2 dB. El compresor de nivel es lo que acorta la distancia entre lo alto y lo bajo. Esta página mide. Un solo número no es una masterización.',
          ],
        },
      ],
      dropHint: "Suelta un archivo de audio o haz clic para buscar",
    },
    'multi-track-audio-editor': {
      cardLine: 'Apila voz, locución y música en una línea de tiempo y exporta una mezcla.',
      name: 'Editor multipista',
      shortName: 'Multipista',
      title: 'Editor multipista online gratis — Mezcla archivos',
      description: 'Apila archivos en una línea de tiempo, ajusta nivel y panorama por pista y exporta una mezcla. Gratis, en el navegador, sin subir nada.',
      h1: 'Editor de audio multipista gratuito en línea — Superponer pistas en una mezcla',
      heroAlt: 'Ajustar el nivel y el panorama de una voz sobre un beat',
      subtitle: 'Apila hasta 8 archivos, equilibra cada uno y exporta una sola mezcla.',
      intro: 'Pon una voz sobre un beat, o una locución sobre música, y escúchalas juntas. Cada archivo es una pista: nivel, panorama, silencio, solo y el momento en que entra. La suma ocurre en tu navegador. Nada se sube. Al cerrar la pestaña, la sesión desaparece.',
      usesHeading: 'Mezclas para esta página',
      uses: [
        'Mete una nota de voz bajo una música y deslízala para que empiece después de la intro.',
        'Equilibra stems que ya tienes —voz, batería, guitarra— y exporta un archivo.',
        'Escucha una pista en solo y vuelve a sumar las demás, sin instalar un DAW.',
      ],
      howTo: [
        { name: 'Añade los archivos', text: 'Suelta dos o más audios, o haz clic para elegirlos. Cada archivo es una pista. Esta página se detiene en 8.' },
        { name: 'Coloca y equilibra', text: 'Arrastra un clip para decidir cuándo entra. Arrastra los bordes para recortar. Ajusta nivel y panorama en la fila, o escribe los tiempos. Silenciar y Solo están en la misma fila.' },
        { name: 'Reproduce y exporta', text: 'Pulsa Reproducir mezcla. Exporta MP3 o WAV. Si la suma saturaría, toda la mezcla baja el mismo factor y la página dice cuántos dB.' },
      ],
      faqs: [
        { q: '¿Se sube mi audio?', a: 'No. El navegador decodifica cada archivo con decodeAudioData y suma las muestras en memoria. Cuando la página ya cargó, la exportación no necesita un servidor. Cerrar la pestaña tira la sesión: no hay cuenta ni proyecto guardado.' },
        { q: '¿Qué le pasa al sonido?', a: 'Las pistas se remuestrean a la frecuencia más alta entre ellas, y como mínimo 44,1 kHz, con interpolación lineal. El WAV es el PCM de 16 bits de esa mezcla estéreo. El MP3 se codifica una vez, al bitrate que elijas, hasta 320 kbps. Si el pico de la suma pasa de 0,98, toda la mezcla se escala para que el pico quede en 0,98. Es un cambio de ganancia, no un compresor, y no añade otra codificación.' },
        { q: '¿Qué no puede hacer?', a: 'No graba MIDI, no carga instrumentos ni samples, no dibuja una curva de volumen y no baja la música bajo la voz por sí solo. Un clip por pista, ocho pistas, sin archivo de proyecto. Plugins, automatización y una sesión que reabres mañana van en Audacity o en un DAW de navegador como BandLab.' },
        { q: '¿En qué se diferencia de unir audio?', a: 'Unir canciones pone los archivos uno detrás de otro: uno termina y empieza el siguiente, con un crossfade opcional. Esta página los reproduce a la vez. Una lista en un solo archivo es el unidor. Una voz sobre un beat es esta página.' },
        { q: '¿Funciona en el teléfono?', a: 'Sí. La línea de tiempo se desplaza de lado. Nivel, panorama, entrada y recorte son controles y números, sin un arrastre preciso. Chrome, Edge, Firefox y Safari actuales decodifican los formatos habituales. Si un archivo no se puede decodificar, se salta y los demás se quedan.' },
        { q: '¿Por qué solo 8 pistas?', a: 'Cada pista se decodifica en memoria antes de reproducir. Ocho archivos estéreo ya son mucho para una pestaña del teléfono. Una producción de 16 pistas con plugins es otra herramienta.' },
      ],
      sections: [
        {
          heading: 'Una mesa pequeña, no un DAW',
          paragraphs: [
            'Cada archivo es un clip en su pista. Ajustas nivel, panorama, silencio, solo y dónde empieza ese clip. Hasta ocho pistas suenan juntas y se exportan como un archivo.',
            'Un clip por pista. Sin MIDI, sin instrumentos, sin curva de volumen y sin bajar la música bajo la voz de forma automática. Plugins y un proyecto que reabres mañana van en Audacity o en un DAW del navegador.',
          ],
        },
        {
          heading: 'Para qué usarlo',
          paragraphs: [
            'Sirve para pilas cortas que si no mezclarías en un programa más grande:',
          ],
          bullets: [
            'Una pista de voz sobre una base musical, con la voz más alta.',
            'Dos tomas alineadas por el inicio, una en solo mientras comparas.',
            'Una imagen estéreo movida con el panorama, y una sola exportación.',
          ],
        },
        {
          heading: 'La sesión acaba con la pestaña',
          paragraphs: [
            'No se sube nada y no hay archivo de proyecto. Si cierras la pestaña antes de exportar, la mezcla desaparece.',
            'Archivos que deben sonar uno tras otro, no uno encima de otro, van en Unir canciones. Esa página cruza los vecinos. Esta los apila.',
          ],
        },
      ],
      dropHint: 'Suelta dos o más archivos de audio para apilarlos',
    },
  },
};
