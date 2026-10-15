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
    trustLocal: 'Se procesa en tu dispositivo — nada se sube',
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
    zoomOut: 'Alejar',
    zoomIn: 'Acercar',
    loadDifferent: 'Cargar otro archivo',
    startOver: 'Empezar de nuevo',
    waveform: 'Forma de onda. Arrastra para seleccionar un tramo.',
    play: 'Reproducir la selección',
    pause: 'Pausa',
    hintSelect: 'Arrastra sobre la forma de onda para seleccionar · Espacio para reproducir',
    hintConvert: 'Espacio para reproducir · nada se sube',
    reverse: 'Reproducir al revés',
    normalize: 'Normalizar el pico',
    speed: 'Velocidad',
    pitch: 'Tono',
    volume: 'Volumen',
    reverb: 'Reverb',
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
  },
  home: {
    title: 'Free Audio Editor — Edita audio en línea, nada se sube',
    description:
      'Editor de audio en línea gratis: recorta, corta, une, invierte y convierte audio en tu navegador. Sin registro y sin subir archivos: nunca salen de tu dispositivo.',
    appBlurb: 'Editor de audio en línea gratis: corta, recorta, une y edita audio en tu navegador.',
    badge: 'Procesamiento 100% local · nada se sube',
    h1: 'Editor de audio en línea gratis',
    lede: 'Recorta, corta, une y edita audio en tu navegador. Sin registro, sin marcas de agua y sin subir archivos: nunca salen de tu dispositivo.',
    ctaTrim: 'Recortar un archivo de audio',
    ctaMerge: 'Unir canciones',
    toolsHeading: 'Todas las herramientas de audio',
    mostUsed: 'Las más usadas',
    comingTitle: 'Próximamente',
    comingBody: 'Mezclador con crossfade, quitar silencios y más — con la misma prioridad: tu privacidad.',
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
    title: 'Todas las herramientas — Editar audio online gratis',
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
    updated: 'Última actualización: 14 de octubre de 2026',
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
        body: 'El codificador de MP3 (lamejs) se carga bajo demanda desde una red pública de distribución de contenido (jsdelivr) la primera vez que exportas un MP3. Esa CDN ve una solicitud normal de una biblioteca; no recibe tu audio ni ningún dato sobre él. Las tipografías se sirven desde el propio dominio de este sitio.',
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
    'fade-audio': {
      name: 'Fundido de audio',
      shortName: 'Fundido',
      title: 'Fundido de entrada y salida — Añadir fade online gratis',
      description:
        'Añade un fundido de entrada y de salida a canciones o grabaciones en tu navegador. Duración al décimo, exporta en MP3 o WAV. Gratis y sin subidas.',
      h1: 'Fundido de entrada y salida de audio',
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
          a: 'Aquí no: esta página funde un solo archivo de entrada y de salida. Fundir el final de una pista con el inicio de otra es una unión con crossfade, y de eso se encarga el creador de uniones.',
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
      dropHint: 'Arrastra un archivo de audio o haz clic para elegirlo',
    },
    'audio-trimmer': {
      name: 'Recortador de audio',
      shortName: 'Recortador de audio',
      title: 'Recortador de audio — Recorta música en línea gratis',
      description:
        'Recorta música, notas de voz y podcasts en tu navegador. Selecciona, escucha y guarda en segundos: gratis, sin registro, y tu audio nunca sale de tu dispositivo.',
      h1: 'Recortador de audio',
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
          a: 'Las grabaciones de hasta cerca de una hora van bien en una computadora moderna. El límite real es la memoria de tu dispositivo, no un tope artificial.',
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'mp3-cutter': {
      name: 'Cortador de MP3',
      shortName: 'Cortador de MP3',
      title: 'Cortar MP3 online gratis',
      description:
        'Corta archivos MP3 online en un par de clics: quédate la mejor parte o quita la intro. Gratis, sin registro, el archivo nunca sale de tu equipo.',
      h1: 'Cortar MP3',
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
      ],
      dropHint: 'Suelta un archivo MP3 o haz clic para elegirlo',
    },
    'mp3-editor': {
      name: 'Editor de MP3',
      shortName: 'Editor de MP3',
      title: 'Editor de MP3 — Corta, funde, invierte y acelera en línea',
      description:
        'Edita MP3 online: cortar, recortar, fundidos, volumen, velocidad y reproducción inversa. Gratis y privado: todo ocurre en tu navegador.',
      h1: 'Editor de MP3',
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
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'ringtone-maker': {
      name: 'Creador de tonos de llamada',
      shortName: 'Tono de llamada',
      title: 'Tono de llamada — Haz un tono con cualquier canción',
      description:
        'Convierte una canción en tono de llamada: elige los mejores 40 segundos, añade un fundido y exporta M4R o MP3. Gratis, sin registro, nada se sube.',
      h1: 'Creador de tonos de llamada',
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
          a: 'Agrega un fundido de salida corto en Ajustar. Así el regreso al inicio suena natural, en lugar de cortarse a media nota.',
        },
        {
          q: '¿Hay marca de agua o algún límite?',
          a: 'No hay marca de agua, ni registro, ni tope diario. El tono se renderiza en tu propio dispositivo y se descarga directo desde el navegador.',
        },
      ],
      dropHint: 'Suelta una canción o haz clic para elegirla',
    },
    'audio-joiner': {
      name: 'Unir audio',
      shortName: 'Unir audio',
      title: 'Unir MP3 online gratis',
      description:
        'Une canciones y archivos de audio en una sola pista, en el orden que quieras, en tu navegador. Fundidos opcionales entre pistas: gratis, privado, sin subir archivos.',
      h1: 'Unir MP3',
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
      ],
      dropHint: 'Suelta dos o más archivos de audio, o haz clic para elegirlos',
    },
    'wav-to-mp3': {
      name: 'Convertidor de WAV a MP3',
      shortName: 'WAV a MP3',
      title: 'WAV a MP3 — Convierte archivos WAV en línea gratis',
      description:
        'Convierte WAV a MP3 en tu navegador: 128, 192 o 320 kbps. Gratis y sin registro. Tu audio se convierte en local y nunca se sube a un servidor.',
      h1: 'Convertidor de WAV a MP3',
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
          a: 'No. El archivo se decodifica en tu navegador, se codifica a MP3 con una biblioteca pequeña que se carga desde una CDN y se guarda de vuelta en tu disco. El audio en sí nunca sale de tu dispositivo.',
        },
      ],
      dropHint: 'Suelta un archivo WAV o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'reverse-audio': {
      name: 'Invertir audio',
      shortName: 'Invertir audio',
      title: 'Invertir audio — Reproduce canciones al revés, gratis',
      description:
        'Reproduce cualquier canción o grabación al revés en tu navegador. Un clic para invertir, escucha al instante y guarda como MP3 o WAV. Gratis, y nada se sube.',
      h1: 'Invertir audio',
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
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'change-audio-speed': {
      name: 'Cambiar velocidad del audio',
      shortName: 'Cambiar velocidad',
      title: 'Acelerar audio online — o ralentizarlo',
      description:
        'Acelera o ralentiza cualquier audio de 0.5× a 2× en tu navegador. Escucha al instante y exporta MP3 o WAV. Gratis, privado, y nada se sube.',
      h1: 'Acelerar audio',
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
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'increase-volume': {
      name: 'Subir volumen de MP3',
      shortName: 'Volumen de MP3',
      title: 'Subir volumen de MP3 — Haz el audio más fuerte, gratis',
      description:
        'Haz más fuerte el audio bajo: sube MP3 y otros archivos hasta 4× en tu navegador. Un limitador integrado mantiene el sonido limpio. Gratis, y nada se sube.',
      h1: 'Subir volumen de MP3',
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
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'mp4-to-mp3': {
      name: 'Convertidor de MP4 a MP3',
      shortName: 'MP4 a MP3',
      title: 'MP4 a MP3 — Convierte video a MP3 en línea gratis',
      description:
        'Convierte video MP4 a MP3 en tu navegador. La pista de audio se extrae en local y nunca se sube. Gratis, rápido, sin registro, y funciona en el celular.',
      h1: 'Convertidor de MP4 a MP3',
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
      dropHint: 'Suelta un MP4 o un archivo de video, o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'extract-audio': {
      name: 'Extraer audio',
      shortName: 'Extraer audio',
      title: 'Extraer audio de un video — Guárdalo como MP3 o WAV',
      description:
        'Extrae el audio de cualquier video en tu navegador y guárdalo en MP3 o WAV sin pérdida. Gratis, sin subir archivos, aunque el video sea grande.',
      h1: 'Extraer audio de un video',
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
      ],
      dropHint: 'Suelta un archivo de video o haz clic para elegirlo',
      exportLabel: 'Extraer audio',
    },
    'voice-recorder': {
      name: 'Grabadora de voz',
      shortName: 'Grabadora de voz',
      title: 'Grabadora de voz en línea — Graba, recorta y guarda gratis',
      description:
        'Graba el micrófono en el navegador, recorta la toma y guárdala como MP3 o WAV. Gratis y privado: las grabaciones nunca se suben.',
      h1: 'Grabadora de voz',
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
      dropHint: 'O suelta una grabación que ya tengas para editarla',
    },
    'volume-booster': {
      name: 'Subir el volumen',
      shortName: 'Subir volumen',
      title: 'Subir volumen — Haz videos y música más fuertes, gratis',
      description:
        'Sube el volumen de música baja y pistas de video hasta 4× en tu navegador. Un limitador lo mantiene limpio. Gratis, privado, y nada se sube.',
      h1: 'Subir el volumen',
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
      ],
      dropHint: 'Suelta un archivo de audio o de video, o haz clic para elegirlo',
    },
    'normalize-audio': {
      name: 'Normalizar audio',
      shortName: 'Normalizar',
      title: 'Normalizar audio — Iguala el nivel en línea, gratis',
      description:
        'Normaliza el audio a un nivel de pico parejo en tu navegador: MP3, WAV, M4A y más. Un clic, gratis, y nada se sube.',
      h1: 'Normalizar audio',
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
          a: 'No. Esto es normalización de pico: inmediata y predecible. Los servicios de streaming igualan los temas por sonoridad integrada (LUFS), un promedio largo que corresponde al mastering. Normalizar por pico sigue siendo el arreglo rápido correcto cuando quieres un nivel de reproducción parejo.',
        },
        {
          q: '¿Normalizar baja la calidad?',
          a: 'El cambio de nivel en sí es matemáticamente limpio y no se oye como un defecto. La única pregunta de calidad es el formato de exportación: el WAV conserva el cambio de ganancia bit a bit, y el MP3 recodifica una vez. Exporta WAV si vas a seguir editando el archivo.',
        },
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'slowed-reverb': {
      name: 'Slowed + reverb',
      shortName: 'Slowed + reverb',
      title: 'Slowed + reverb — Haz canciones slowed y reverb en línea',
      description:
        'Convierte cualquier canción en una edición slowed + reverb en tu navegador: bájala de velocidad, métele reverb y exporta a MP3. Gratis, y nada se sube.',
      h1: 'Creador de slowed + reverb',
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
          a: 'Sí, a propósito: como un disco de vinilo a la velocidad equivocada. Las voces se vuelven más graves y la tonalidad baja en la misma proporción. Esa caída de tono es lo que define el estilo. Un slowed sin cambio de tono necesita un editor de time-stretch, que es una herramienta distinta y más pesada.',
        },
        {
          q: '¿Cuánto reverb debo agregar?',
          a: 'Empieza cerca del 20–30% y escucha. El reverb es una cola de decaimiento sintetizada. Pasado cerca del 50%, el tema empieza a sonar como una catedral y las voces dejan de entenderse.',
        },
        {
          q: '¿Puedo usar canciones slowed en mis videos?',
          a: 'Bajar la velocidad de un tema no cambia su copyright. Para subir videos a YouTube o TikTok sigues necesitando derechos de la canción original. Muchos creadores usan la biblioteca de música con licencia de la plataforma y dejan las ediciones slowed para sus propias grabaciones.',
        },
      ],
      dropHint: 'Suelta una canción o haz clic para elegirla',
    },
    'pitch-changer': {
      name: 'Cambiador de tono',
      shortName: 'Tono',
      title: 'Cambiador de tono — Cambia el tono sin cambiar la duración',
      description: 'Sube o baja el tono de una canción o una voz hasta 12 semitonos, sin cambiar su duración. Gratis, en tu navegador, sin subir nada.',
      h1: 'Cambiador de tono',
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
      ],
      dropHint: 'Suelta un archivo de audio o haz clic para elegirlo',
    },
    'm4a-to-mp3': {
      name: 'Convertir M4A a MP3',
      shortName: 'M4A a MP3',
      title: 'M4A a MP3 — Convierte M4A y AAC en línea gratis',
      description: 'Convierte audio M4A y AAC a MP3 en tu navegador. Gratis, sin cuenta y sin subir nada. Elige 128, 192 o 320 kbps.',
      h1: 'Convertir M4A a MP3',
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
        { q: '¿Qué archivos M4A funcionan?', a: 'Audio AAC dentro de un M4A, que es lo que usan las notas de voz y la mayoría de las descargas AAC. Apple Lossless (ALAC) guardado en un M4A muchas veces no se decodifica en el navegador. Conviértelo primero a AAC o WAV y tráelo aquí.' },
        { q: '¿Y un video MP4?', a: 'Usa el convertidor de MP4 a MP3 para videos. Esta página es para audio: M4A y AAC.' },
        { q: '¿Convertir a MP3 pierde calidad?', a: 'El MP3 tiene pérdida. A 320 kbps casi nadie nota la diferencia con el AAC original. Quédate con el M4A si necesitas el archivo original intacto.' },
        { q: '¿Se conservan las etiquetas y la portada?', a: 'No. El MP3 se escribe sin metadatos, igual que el convertidor de WAV. El título, el artista y la portada no se copian.' },
        { q: '¿El archivo se sube?', a: 'No. Tu navegador decodifica el M4A y codifica el MP3 en local. El audio se queda en tu dispositivo.' },
      ],
      dropHint: 'Suelta un M4A o AAC, o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'ogg-to-mp3': {
      name: 'Convertir archivos OGG a MP3',
      shortName: 'OGG a MP3',
      title: 'Convertir archivos OGG a MP3 — gratis en el navegador',
      description:
        'Convierte archivos OGG a MP3 en tu navegador. Gratis, sin cuenta y sin subir nada. Vorbis u Opus dentro del OGG, a 128, 192 o 320 kbps.',
      h1: 'Convertir archivos OGG a MP3',
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
      dropHint: 'Suelta un archivo OGG o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
    'opus-to-mp3': {
      name: 'Convertidor de Opus a MP3',
      shortName: 'Opus a MP3',
      title: 'Convertidor de Opus a MP3 — conversor gratis',
      description:
        'Convierte el formato Opus a MP3 en tu navegador. Conversor gratis, sin cuenta y sin subir el archivo. Sirve para .opus, y para Opus dentro de OGG o WebM.',
      h1: 'Convertidor de Opus a MP3',
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
      dropHint: 'Suelta un archivo Opus o haz clic para elegirlo',
      exportLabel: 'Convertir a MP3',
    },
  },
};
