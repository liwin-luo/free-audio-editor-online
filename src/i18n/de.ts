import type { Catalog } from './types';

export const de: Catalog = {
  ui: {
    skip: 'Zum Inhalt springen',
    logoHome: 'Free Audio Editor — Startseite',
    tools: 'Tools',
    language: 'Sprache',
    theme: 'Dunkelmodus umschalten',
    navMain: 'Hauptnavigation',
    navAbout: 'Über',
    footerBlurb:
      'Kostenlose Audio-Tools, die komplett in deinem Browser laufen. Deine Dateien werden nie hochgeladen — Audiobearbeitung, die Privatsphäre von Anfang an mitdenkt.',
    share: 'Teilen',
    shareOn: 'Auf {name} teilen',
    copyLink: 'Link kopieren',
    copied: 'Kopiert',
    about: 'Über uns',
    privacy: 'Datenschutz',
    status: 'Status',
    guides: 'Anleitungen',
    rights: 'Keine Datei verlässt dein Gerät.',
    clientSide: '100 % Verarbeitung im Browser',
    contact: 'Kontakt',
    contactBody: 'Fragen zu einem Tool, eine Korrektur oder ein Datenschutzanliegen? Schreib an {email}. Wir lesen jede Nachricht.',
    contactPrivacy: 'Wie Dateien und Feedback behandelt werden, steht in der {privacy}.',
    privacyPolicyLabel: 'Datenschutzerklärung',
    cookieBody:
      'Optionale Cookies nutzt nur das Feedback-Widget. Die Zugriffsstatistik kommt ohne Cookies aus. Wir schalten keine Werbung.',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Optionale ablehnen',
    cookiePolicy: 'Datenschutzerklärung',
    trustMethod: 'So testen wir',
    trustFree: 'Kostenlos, ohne Anmeldung',
    trustClean: 'Ohne Wasserzeichen',
    trustOffline: 'Nach dem Laden offline',
    faqHeading: 'Häufige Fragen',
    toolFaq: 'Fragen zu {name}',
    related: 'Ähnliche Tools',
    openTool: '{name} öffnen',
    allTools: 'Alle Audio-Tools',
    browseToolkit: 'Alle Tools ansehen',
    home: 'Startseite',
    howTo: 'So verwendest du {name}',
    ogAlt: 'Free Audio Editor — Audio online bearbeiten, nichts wird hochgeladen',
    schemaOs: 'Beliebig (im Browser)',
    schemaBrowser: 'Braucht einen modernen Browser mit Web Audio API',
    features: [
      'Audio schneiden, kürzen und zusammenfügen',
      'Lautstärke, Normalisieren, Geschwindigkeit und Hall',
      'Rückwärts abspielen und Sprache aufnehmen',
      'Tonspuren aus Videos als MP3 oder WAV speichern',
      'Als MP3, WAV und iPhone-M4R exportieren',
    ],
    formats: {
      'mp3-320': 'MP3 · 320 kbps',
      'mp3-192': 'MP3 · 192 kbps',
      'mp3-128': 'MP3 · 128 kbps',
    'mp3-96': 'MP3 · 96 kbps',
    'mp3-64': 'MP3 · 64 kbps',
      wav: 'WAV · verlustfrei',
      m4r: 'M4R · iPhone-Klingelton',
    },
    categories: {
      cut: 'Schneiden & Kürzen',
      convert: 'Umwandeln & Komprimieren',
      join: 'Zusammenfügen & Mischen',
      edit: 'Bearbeiten & Reparieren',
      effects: 'Kreative Effekte',
      record: 'Aufnehmen & Analysieren',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — bis etwa eine Stunde',
    dropLocal: 'Lokal verarbeitet — deine Datei verlässt diesen Tab nie',
    formatsMore: ' und mehr',
    etaModel: 'beim ersten Mal wird das Modell geladen, danach etwa so lange wie die Aufnahme',
    limitTenMin: 'höchstens 10 Minuten',
    limitThreeMin: 'höchstens 3 Minuten',
    limitRingtone: 'höchstens 40 Sekunden',
    chipText: 'Text',
    zoomOut: 'Verkleinern',
    zoomIn: 'Vergrößern',
    loadDifferent: 'Andere Datei laden',
    startOver: 'Von vorn',
    waveform: 'Wellenform. Ziehen, um einen Bereich auszuwählen.',
    play: 'Auswahl abspielen',
    pause: 'Pause',
    hintSelect: 'Auf der Wellenform ziehen, um auszuwählen · Leertaste zum Abspielen',
    hintTrim: 'Zieh an den Enden, um den Bereich zu ändern. Wiedergabe spielt nur den Bereich.',
    changeFile: 'Andere Datei',
    statStart: 'Start',
    statSpan: 'Dieser Teil',
    statEnd: 'Ende',
    selectAll: 'Alles auswählen',
    playBtn: 'Wiedergeben',
    chMono: 'Mono',
    chStereo: 'Stereo',
    chMany: '{n} Kanäle',
    hintConvert: 'Leertaste zum Abspielen · nichts wird hochgeladen',
    hintSilence: 'Pausen länger als das Minimum fallen beim Export weg. Kurzes Atemholen bleibt.',
    reverse: 'Rückwärts abspielen',
    normalize: 'Peak normalisieren',
    speed: 'Geschwindigkeit',
    speedPitch: 'Die Tonhöhe geht mit der Geschwindigkeit mit.',
    tempoPitch: 'Die Tonhöhe bleibt.',
    pitch: 'Tonhöhe',
    pitchLength: 'Die Länge bleibt gleich.',
    bass: 'Bass',
    treble: 'Höhen',
    mid: 'Mitten',
    cutoff: 'Grenzfrequenz',
    volume: 'Lautstärke',
    gainOriginal: '100 % ist die ursprüngliche Lautstärke.',
    reverb: 'Hall',
    compress: 'Kompressor',
    echoDelay: 'Delay',
    echoFeedback: 'Wiederholungen',
    distort: 'Stärke',
    panDepth: 'Tiefe',
    panRate: 'Frequenz',
    circle: 'Kreis',
    metroBpm: 'BPM',
    metroMeter: 'Taktart',
    metroBars: 'Takte',
    metroPlay: 'Start',
    metroStop: 'Stopp',
    keyTonic: 'Tonart',
    keyMajor: 'Dur',
    keyMinor: 'Moll',
    keyUnread: 'Nicht lesbar',
    keyCaveat: 'Freier Rhythmus, Sprache, Raumgeräusch und eine parallele Dur- oder Molltonart können tauschen.',
    silenceThreshold: 'Schwelle',
    silenceGap: 'Mindestpause',
    silenceRemove: 'Entfernt etwa {time} Stille',
    silenceKeepFile: 'Nichts liegt über der Schwelle, der Export behält die ganze Datei',
    loopTimes: 'Wiederholungen',
    loopCrossfade: 'Übergang',
    loopExport: 'Export dauert etwa {time}',
    loopTooLong: 'Diese Schleife ist länger als 10 Minuten. Nimm weniger Wiederholungen oder eine kürzere Auswahl.',
    splitParts: 'Teile',
    splitExport: '{n} Dateien, je etwa {time}',
    splitTooShort: 'Diese Datei ist kürzer als die Anzahl der Teile.',
    crushBits: 'Bits',
    crushHold: 'Halten',
    crushExport: '{bits} Bit, alle {hold} Samples gehalten',
    monoExport: 'Der Export schreibt einen Kanal: den Durchschnitt der Kanäle in der Datei.',
    hz432Export: 'Der Export senkt die Tonhöhe um 0,32 Halbtöne. Die Länge bleibt.',
    lufsIntegrated: 'Integriert',
    lufsPeak: 'Sample-Peak',
    lufsPodcast: 'Podcast',
    lufsStreaming: 'Streaming',
    lufsBroadcast: 'Broadcast',
    lufsLimited: 'Peak bleibt bei −1 dBFS. Ergebnis: {lufs} LUFS.',
    lufsWill: 'Der Export landet bei {lufs} LUFS.',
    lufsSilent: 'Diese Datei ist stumm, es gibt keine Lautheit zum Angleichen.',
    adjust: 'Anpassen — Ein- und Ausblenden, Lautstärke, Geschwindigkeit, Rückwärts',
    fadeIn: 'Einblenden',
    fadeOut: 'Ausblenden',
    normalizeOverrides: 'Peak normalisieren (überschreibt die Lautstärke)',
    undo: 'Letzte Änderung rückgängig',
    cutMode: 'Schnittmodus',
    keep: 'Auswahl behalten',
    deleteSel: 'Auswahl löschen',
    precise: 'Genaue Zeiten',
    startSec: 'Start (s)',
    endSec: 'Ende (s)',
    format: 'Format',
    export: 'Exportieren',
    joinerMixed: 'MP3, WAV, M4A, OGG, FLAC — gemischte Formate sind kein Problem',
    joinerLocal: 'Lokal verarbeitet — deine Dateien verlassen diesen Tab nie',
    trackSummary: '{n} Titel · {time}',
    crossfade: 'Überblendung',
    fadeInFirst: 'Einblenden (erster Titel)',
    fadeOutLast: 'Ausblenden (letzter Titel)',
    mergeExport: 'Zusammenfügen & exportieren',
    record: 'Aufnehmen',
    recordHint: 'Über das Mikrofon aufnehmen',
    tooBig: 'Die Datei ist über 300 MB — nimm eine kürzere oder komprimierte Datei.',
    decoding: 'Datei wird dekodiert…',
    ready: 'Bereit. Ziehe auf der Wellenform, um einen Bereich auszuwählen.',
    hourWarning: 'Dateien über einer Stunde können auf manchen Geräten den Browserspeicher auslasten.',
    decodeFail:
      'Diese Datei ließ sich nicht dekodieren — sie ist vielleicht beschädigt, oder dein Browser unterstützt den Codec nicht.',
    ringtoneCap: 'Auswahl auf 40 Sekunden begrenzt — die klassische Klingeltonlänge.',
    kept: 'Auswahl behalten: {range}',
    markedDelete: 'Auswahl zum Löschen markiert: {range}',
    endTime: 'Die Endzeit muss mindestens 0,05 s nach der Startzeit liegen.',
    nothingUndo: 'Nichts mehr zum Rückgängigmachen.',
    reverted: 'Letzte Änderung rückgängig gemacht.',
    normalizeOn: 'Normalisieren an — der Peak steigt um etwa {db} dB (begrenzt auf +12 dB).',
    rendering: 'Wird gerendert…',
    renderingStatus: 'Deine Bearbeitung wird lokal gerendert…',
    encoding: '{ext} wird kodiert…',
    exported: '{file} exportiert.',
    saved: 'Gespeichert als {file} — nichts wurde hochgeladen.',
    exportFail:
      'Export fehlgeschlagen — der Encoder konnte nicht geladen werden (bist du offline?). Versuche stattdessen WAV.',
    merging: 'Wird zusammengefügt…',
    mergingStatus: 'Titel werden lokal zusammengefügt…',
    moveUp: 'Nach oben',
    moveDown: 'Nach unten',
    remove: 'Entfernen',
    recUnavailable: 'Aufnehmen ist in diesem Browser nicht verfügbar. Versuche Chrome, Edge, Firefox oder Safari.',
    micBlocked:
      'Der Mikrofonzugriff wurde blockiert. Erlaube ihn in den Browsereinstellungen und versuche es erneut.',
    recording: 'Aufnahme läuft… klicke auf Stopp, wenn du fertig bist.',
    stop: 'Stopp',
    recordAgain: 'Erneut aufnehmen',
    recordingLoaded: 'Aufnahme wurde in den Editor darunter geladen.',
    vizStyle: 'Stil',
    vizStyleBars: 'Balken',
    vizStyleFilled: 'Fläche',
    vizStyleOutline: 'Kontur',
    vizStyleDots: 'Punkte',
    vizStyleBottom: 'Balken unten',
    vizStyleBlocks: 'Breite Balken',
    vizTemplate: 'Vorlage',
    vizTemplateNone: 'Manuell',
    vizTplSoundcloud: 'SoundCloud',
    vizTplPodcast: 'Podcast',
    vizTplPoster: 'Poster',
    vizTplSticker: 'Sticker',
    vizTplPrint: 'Druck',
    vizTplNeon: 'Neon',
    vizTplBlocks: 'Blöcke',
    vizWaveColor: 'Wellenfarbe',
    vizBgColor: 'Hintergrund',
    vizTransparent: 'Transparenter Hintergrund',
    vizSize: 'Größe',
    vizSizeVideo: 'Video-Cover',
    vizSizeSquare: 'Quadrat',
    vizSizeOg: 'Social-Bild',
    vizSizeBanner: 'Banner',
    vizSizeCustom: 'Eigene Größe',
    vizWidth: 'Breite',
    vizHeight: 'Höhe',
    vizRange: 'Zeitbereich',
    vizRangeStart: 'Start (Sek.)',
    vizRangeEnd: 'Ende (Sek.)',
    vizPreview: 'Wellenform-Vorschau',
    vizReady: 'Bereit. Darstellung wählen, dann PNG laden.',
    vizRendering: 'Wird gerendert…',
    vizExportFail: 'PNG konnte nicht erzeugt werden. Eine kleinere Größe versuchen.',
    specFft: 'FFT-Größe',
    specAxis: 'Frequenzachse',
    specAxisLog: 'Logarithmisch',
    specAxisLinear: 'Linear',
    specMaxHz: 'Oberste Frequenz (Hz)',
    specDbFloor: 'Leise (dB)',
    specDbCeil: 'Laut (dB)',
    specColors: 'Farben',
    specViridis: 'Viridis',
    specInferno: 'Inferno',
    specGray: 'Graustufen',
    specPreview: 'Spektrogramm-Vorschau',
    specProgress: 'Spektrogramm wird gezeichnet… {pct}%',
    paintText: 'Text',
    paintPlaceholder: 'Eine kurze Zeile, zum Beispiel ein Name',
    paintImage: 'PNG, JPG oder WebP. Das Bild wird auf das Spektrum verkleinert.',
    paintPreview: 'Bild, das in die Audiodatei geschrieben wird',
    paintReady: 'Bereit. WAV laden, dann im Spektrogramm-Generator öffnen.',
    paintWorking: 'Audio wird geschrieben…',
    paintFail: 'Dieses Bild ließ sich nicht lesen. PNG oder JPG versuchen.',
    batchProgress: '{current} von {total}',
    batchSkipped: '{n} übersprungen',
    tgShared: 'Künstler, Album, Jahr, Genre und Cover gelten für jede Datei. Titel und Tracknummer bleiben in der jeweiligen Zeile.',
    tgAlbum: 'Album',
    tgAlbumArtist: 'Album-Interpret',
    tgArtist: 'Künstler',
    tgComment: 'Kommentar',
    tgComposer: 'Komponist',
    tgCover: 'Cover',
    tgCoverFail: 'Das Cover muss ein JPG- oder PNG-Bild sein.',
    tgCoverHint: 'Ein quadratisches JPG oder PNG zwischen 500 und 1400 px wird in den meisten Playern am besten angezeigt.',
    tgDisc: 'Disc',
    tgGenre: 'Genre',
    tgNoTags: 'Diese Datei hat noch keine Tags — trag ein, was du weißt.',
    tgReadFail: 'Diese Datei ließ sich nicht lesen — bitte eine MP3 verwenden.',
    tgRemoveAll: 'Alle Metadaten entfernen (saubere Datei speichern)',
    tgRemoveCover: 'Cover entfernen',
    tgReplaceCover: 'Cover ersetzen',
    tgReset: 'Zurücksetzen',
    tgSaved: 'Gespeichert — wirf einen Blick in deine Downloads.',
    tgSaving: 'Tags werden geschrieben…',
    tgSaveCover: 'Cover speichern',
    tgTitle: 'Titel',
    tgTrack: 'Track',
    tgWriteFail: 'Beim Speichern ist etwas schiefgegangen. Versuch es erneut oder nimm eine andere MP3-Datei.',
    tgYear: 'Jahr',
    trLang: 'Sprache',
    trLangAuto: 'Automatisch erkennen',
    trModel: 'Modell',
    trModelBase: 'Base — genauer',
    trModelTiny: 'Tiny — schnellerer Download',
    trPreparing: 'Modell wird vorbereitet…',
    trDownloading: 'Modell wird geladen… {percent}%',
    trWorking: 'Wird transkribiert… {percent}%',
    trDone: 'Transkription abgeschlossen — {count} Zeichen',
    trFirstRun:
      'Beim ersten Lauf wird das Modell einmal heruntergeladen (Tiny ≈ 40 MB, Base ≈ 80 MB) und vom Browser gespeichert — weitere Läufe funktionieren offline.',
    trResultPlaceholder: 'Hier erscheint die Transkription — vor dem Download beliebig bearbeitbar.',
    trCopy: 'Kopieren',
    trCopied: 'In die Zwischenablage kopiert',
    trTxt: 'TXT herunterladen',
    trSrt: 'SRT herunterladen',
    trTooLong:
      'Diese Datei dauert über 10 Minuten. Schneide sie erst zurecht — der Audio-Trimmer arbeitet genauso privat — und transkribiere sie dann hier.',
    trFail: 'Transkription fehlgeschlagen. Versuche das Tiny-Modell, eine klarere Datei oder einen aktuellen Browser.',
    midiCaveat: 'Ein Instrument hält am besten. Ein voller Mix, Drums oder dichte Akkorde kommen falsch heraus.',
    midiNotes: 'Noten: {count}',
    midiNone: 'Keine Noten. Drums, Rauschen oder ein voller Mix bleiben oft leer.',
    midiTooLong: 'Diese Datei ist länger als 3 Minuten. Schneide sie im Audio-Trimmer, dann komm zurück.',
    midiWorking: 'Noten werden gelesen… {percent}%',
    midiFirstRun: 'Das Notenmodell kommt einmal von dieser Seite, unter 1 MB, und der Browser behält es.',
    midiFail: 'Noten ließen sich nicht lesen. Nimm eine kürzere Datei, ein Instrument oder einen aktuellen Browser.',
    midiMore: 'Die ersten {shown} von {count}.',
    midiDownload: 'MIDI herunterladen',
    mixMute: 'Stumm',
    mixSolo: 'Solo',
    mixPan: 'Pan',
    mixOffset: 'Start',
    mixTrimIn: 'Anfang kürzen',
    mixTrimOut: 'Ende kürzen',
    mixGain: 'Pegel',
    mixMaster: 'Master',
    mixPlay: 'Mix abspielen',
    mixStop: 'Stopp',
    mixAdd: 'Spuren hinzufügen',
    mixLimit: 'Diese Seite nimmt 8 Spuren. Exportiere diesen Mix, oder nimm einen Desktop-Editor für eine größere Session.',
    mixPulled: 'Mix um {db} dB abgesenkt, damit die Spitze nicht übersteuert.',
    mixExport: 'Mix exportieren',
    mixDecode: '{name} konnte nicht dekodiert werden.',
  },
  home: {
    title: 'Audio online bearbeiten — kostenloser Audio-Editor',
    description:
      'Kostenloser Online-Audio-Editor: kürzen, schneiden, zusammenfügen, umwandeln — direkt im Browser, ohne Anmeldung. Deine Dateien verlassen dein Gerät nie.',
    appBlurb: 'Kostenloser Audio-Editor online — Audio im Browser schneiden, kürzen, zusammenfügen und bearbeiten.',
    badge: '100 % lokal verarbeitet · nichts wird hochgeladen',
    h1: 'Kostenloser Audio-Editor online',
    lede: 'Kürze, schneide, füge zusammen und bearbeite Audio direkt im Browser. Ohne Anmeldung, ohne Wasserzeichen, ohne Upload — deine Dateien verlassen dein Gerät nie.',
    ctaTrim: 'Audiodatei kürzen',
    ctaMerge: 'Songs zusammenfügen',
    highlightsLabel: 'Warum es so funktioniert',
    priceSymbol: '$',
    priceAmount: '0',
    priceWord: 'Kostenlos',
    highlights: [
      {
        title: 'Nichts wird hochgeladen',
        body: 'Die Datei wird in diesem Browser-Tab dekodiert. Schließt du ihn, ist das Audio weg — kein Server hat es je erhalten.',
      },
      {
        title: 'Kostenlos, weil dein Gerät die Arbeit macht',
        body: 'Es gibt keine Serverfarm, die jemand bezahlen müsste — deshalb kein Wasserzeichen, keine Anmeldung und kein Exportlimit.',
      },
      {
        title: 'Datei ablegen und loslegen',
        body: 'Keine Installation und keine Warteschlange. Ein langer Titel verlässt das Gerät nie, die Bearbeitung beginnt sofort.',
      },
      {
        title: 'Nach dem Laden offline',
        body: 'Die Seite muss einmal laden. Danach gehen Schneiden und Export weiter, wenn die Verbindung weg ist.',
      },
    ],
    toolsHeading: 'Beliebte Audio-Tools',
    allToolsCta: 'Alle {count} Tools ansehen',
    toolsCount: '{count} Tools',
    mostUsed: 'Am häufigsten genutzt',
    comingTitle: 'Als Nächstes',
    comingBody: 'Überblendungs-Mixer, Stille entfernen und mehr — wieder mit Privatsphäre zuerst.',
    useCasesHeading: 'Was bearbeitest du heute?',
    useCases: [
      { title: 'Podcasting', body: 'Folgen aufnehmen, grobe Stellen herausschneiden, Segmente zusammenfügen — und das Transkript für die Shownotes gleich mitnehmen.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: 'Musik', body: 'Riffs zum Lernen verlangsamen, für Covers transponieren und Demos mehr Gewicht oder Glanz geben.', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: 'Voice-over', body: 'Liefere saubere Takes: Rumpeln entfernen, Pegel ausgleichen und leise Aufnahmen ohne Clipping anheben.', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
      { title: 'Lernen & Arbeit', body: 'Vorlesungen schneller durchhören, Aufnahmen in Text verwandeln und Übergänge zwischen Clips glätten.', tools: ['audio-to-text', 'fade-audio', 'audio-joiner'] },
    ],
    whyHeading: 'Warum Audiobearbeitung auf dein Gerät gehört',
    why: [
      {
        title: 'Von Haus aus privat',
        body: 'Sprachnotizen, Interviews, unveröffentlichte Tracks — Audio ist persönlich. Hier wird es im Speicher deines eigenen Browsers dekodiert und bearbeitet. Es gibt keinen Server, der es sehen, speichern oder weitergeben könnte.',
      },
      {
        title: 'Keine Warteschlange, kein Warten',
        body: 'Einen 50-MB-Titel hochladen, auf einen Server warten, ihn wieder herunterladen — das entfällt komplett. Die Bearbeitung beginnt in dem Moment, in dem du die Datei ablegst.',
      },
      {
        title: 'Wirklich kostenlos',
        body: 'Lokale Verarbeitung kostet im Betrieb fast nichts, deshalb sind die Tools kostenlos: ohne Wasserzeichen, ohne Anmeldezwang und ohne Exportlimit.',
      },
    ],
    faqs: [
      {
        q: 'Ist Free Audio Editor wirklich kostenlos?',
        a: 'Ja — jedes Tool auf dieser Seite ist kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne tägliches Exportlimit. Weil die gesamte Verarbeitung in deinem eigenen Browser läuft, gibt es keine Serverkosten, die jemand wieder hereinholen müsste.',
      },
      {
        q: 'Wie bleibt mein Audio privat?',
        a: 'Deine Dateien werden nie hochgeladen. Dekodieren, Bearbeiten und Exportieren laufen lokal mit der Web Audio API in deinem Browser-Tab. Sobald die Seite geladen ist, kannst du offline gehen, und jedes Tool funktioniert weiter.',
      },
      {
        q: 'Muss ich etwas installieren?',
        a: 'Nein. Die Tools sind Web-Apps und laufen in jedem modernen Browser — Chrome, Edge, Firefox oder Safari, auf dem Desktop und auf dem Handy.',
      },
      {
        q: 'Welche Audioformate werden unterstützt?',
        a: 'Du kannst MP3, WAV, M4A/AAC, OGG, FLAC und WebM-Audio öffnen und das Ergebnis als MP3 (128–320 kbps) oder verlustfreies WAV speichern. Der Klingelton erstellen exportiert außerdem M4R in Chrome, Edge und Safari.',
      },
    ],
  },
  hub: {
    categoryIntro: {
      cut: 'Einen Song kürzen, nur den besten Teil behalten oder einen Klingelton erstellen — Bereich in der Wellenform wählen und speichern.',
      convert: 'Wandle zwischen MP3, WAV, M4A, OGG und Opus um, extrahiere Ton aus Videos oder senke die Bitrate — alles auf deinem Gerät.',
      join: 'Ordne Tracks, setze Crossfades, wiederhole einen Abschnitt oder staple bis zu acht Dateien auf einer Timeline. Nichts wird hochgeladen.',
      edit: 'Erhöhe oder gleiche die Lautstärke an, normalisiere Peaks, entferne Stille, bearbeite Tags und forme den Klang mit EQ, Filtern und Fades.',
      effects: 'Umdrehen, beschleunigen, verlangsamen, Tonhöhe ändern, Reverb, Echo, Verzerrung oder 8D-Panning hinzufügen und Klang in ein Bild verwandeln.',
      record: 'Nimm mit dem Mikrofon auf, transkribiere Audio, halte den Takt mit einem Metronom oder lies Tonart und BPM eines Tracks.',
    },
    tasksTitle: 'Was möchtest du tun?',
    tasks: [
    { task: 'Einen Klingelton für mein Handy erstellen', tool: 'ringtone-maker' },
    { task: 'Die Tonspur aus einem Video holen', tool: 'extract-audio' },
    { task: 'Eine leise Aufnahme lauter machen', tool: 'increase-volume' },
    { task: 'Zwei Songs in einer Datei zusammenfügen', tool: 'audio-joiner' },
    { task: 'Eine WAV-Datei in MP3 umwandeln', tool: 'wav-to-mp3' },
    { task: 'Einen Song verlangsamen und Reverb hinzufügen', tool: 'slowed-reverb' },
    { task: 'Die Tonlage ändern, das Tempo behalten', tool: 'pitch-changer' },
    ],
    title: 'Kostenlose Online-Audio-Tools — Schneiden & Konvertieren',
    description:
      'Alle Tools im Überblick: Audio schneiden, zusammenfügen, konvertieren und aufnehmen — direkt in deinem Browser. Ohne Upload und ohne Anmeldung.',
    h1: 'Alle Audio-Tools',
    intro:
      'Alle Tools dieser Website, sortiert nach Aufgabe. Eines auswählen und loslegen — alles läuft lokal in deinem Browser, ohne Anmeldung und ohne Upload.',
  },
  about: {
    title: 'Über Free Audio Editor — lokale Online-Audio-Tools',
    description:
      'Free Audio Editor ist eine Sammlung datenschutzfreundlicher Audio-Tools, die komplett in deinem Browser laufen — ohne Upload, ohne Anmeldung, ohne Wasserzeichen.',
    h1: 'Über uns',
    p1: 'Free Audio Editor gibt es, weil eine Sprachnotiz zu bearbeiten nicht heißen sollte, sie auf einen fremden Server hochzuladen. Jedes Tool hier — der {trimmer}, der {cutter}, der {joiner} und der Rest — funktioniert gleich: dein Browser liest die Datei, bearbeitet sie im Speicher und schreibt das Ergebnis direkt zurück auf dein Gerät.',
    linkTrimmer: 'Audio-Trimmer',
    linkCutter: 'MP3-Cutter',
    linkJoiner: 'Audio-Joiner',
    p2: 'Genau deshalb sind die Tools schnell und kostenlos. Es gibt keine Upload-Warteschlange, keine Serverfarm und keine Speicherkosten — nur dein Gerät, das die Arbeit macht, die es ohnehin kann.',
    p3: 'Die Seite ist eine statische Web-App mit der Web Audio API. Sie wird aktiv weiterentwickelt; Konverter, ein Sprachrekorder und weitere Bearbeitungstools sind unterwegs.',
  },
  privacy: {
    title: 'Datenschutzerklärung — Free Audio Editor',
    description:
      'Datenschutzerklärung für freeaudioeditor.online: Audio wird lokal in deinem Browser verarbeitet und nie hochgeladen. Keine Konten, kein Audio-Tracking.',
    h1: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: 21. Oktober 2026',
    sections: [
      {
        h: 'Deine Audiodateien',
        body: 'Jedes Tool auf dieser Seite verarbeitet Audio vollständig in deinem Browser mit der Web Audio API. Deine Dateien werden {em} — es gibt keinen Upload-Endpunkt. Wenn du den Tab schließt, ist das dekodierte Audio aus dem Speicher verschwunden.',
        em: 'nie auf unsere Server hochgeladen',
      },
      {
        h: 'Was wir speichern',
        body: 'Wir legen weder ein Konto noch ein Profil für dich an. Die Seite hat keine Konten und verlangt keine E-Mail-Adresse. Deine Einstellung für hell oder dunkel und deine Cookie-Wahl liegen im localStorage deines Browsers und verlassen dein Gerät nie.',
      },
      {
        h: 'Drittanbieter',
        body: 'Der MP3-Encoder (lamejs) wird mit dieser Seite ausgeliefert und erst geladen, wenn du ein MP3 exportierst. Er kommt nicht von einem Fremdnetzwerk und bekommt dein Audio nicht. Schriften kommen von der eigenen Domain dieser Seite.',
      },
      {
        h: 'Analyse und Werbung',
        body: 'Den Gesamtverkehr messen wir mit Vercel Web Analytics, ohne Cookies und nur mit aggregierten Seitenaufrufen — nie deine Identität und nie dein Audio. Wir schalten keine Werbung. Ändert sich die Analyse oder die Werbung, wird diese Erklärung zuerst aktualisiert.',
      },
      {
        h: 'Feedback-Widget',
        body: 'Wenn du optionale Cookies akzeptierst, lädt die Seite Userback, einen Feedback-Dienst eines Drittanbieters, erst nach deiner ersten Interaktion oder nach acht Sekunden. Lehnst du sie ab, wird Userback nicht geladen. Es wird nichts gesendet, bevor du eine Nachricht schreibst und absendest. Was du schreibst, zusammen mit grundlegenden Seiten- und Browserinformationen, verarbeitet Userback in unserem Auftrag, damit wir es lesen und beantworten können. Audiodateien sind nie beteiligt. Wie Userback diese Daten behandelt, steht in der Datenschutzerklärung von Userback.',
      },
    ],
    contactHeading: 'Kontakt',
    contactBefore: 'Fragen zu dieser Erklärung? Schreib an {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transkribiere Interviews und Sprachmemos direkt auf dem Gerät zu Text oder SRT-Untertiteln.',
      name: 'Audio in Text',
      shortName: 'Audio in Text',
      title: 'Audio in Text umwandeln — transkribieren, kostenlos',
      description:
        'Audio im Browser in Text umwandeln: MP3, WAV, M4A und Video, über 90 Sprachen, TXT- oder SRT-Export. Kostenlos, ohne Anmeldung.',
      h1: 'Kostenloses Online-Audio-zu-Text — Eine Aufnahme transkribieren',
      heroAlt: 'Aus einer Sprachnotiz oder einem Interview einen Text machen',
      subtitle: 'Aufnahmen in über 90 Sprachen in Text umwandeln, mit Zeitstempeln — direkt im Browser.',
      intro:
        'Eine Aufnahme hier ablegen und die Wörter herausholen: Sprachmemos, Interviews, Vorlesungen, Podcasts — in rund 90 Sprachen, automatisch erkannt, wenn du nicht sicher bist, welche es ist. Ein Whisper-KI-Modell läuft in deinem Browser-Tab auf deinem eigenen Gerät, die Audiodatei wird nie hochgeladen, und die Transkription entsteht als bearbeitbarer Text oder als SRT-Datei mit Zeitstempeln.',
      usesHeading: 'Transkripte, die wirklich gebraucht werden',
      uses: [
        'Eine Vorlesung, ein Meeting oder ein Interview in durchsuchbare, zitierfähige Notizen verwandeln.',
        'Ein Video oder eine Podcast-Folge untertiteln, indem man ein SRT mit Zeitstempeln exportiert.',
        'Die Wörter aus einem Sprachmemo holen, ohne die Aufnahme irgendwohin zu schicken.',
      ],
      howTo: [
        {
          name: 'Datei ablegen',
          text: 'MP3, WAV, M4A, eine Videodatei oder eine andere Aufnahme hinzufügen. Das Dekodieren passiert auf deinem Gerät, nichts wird hochgeladen. Mehrere Aufnahmen teilen sich Sprache und Modell, die du als Nächstes wählst. Jede bleibt bei etwa 10 Minuten. Ein Transkript bleibt im Feld. Zwei oder mehr kommen als ZIP aus TXT und SRT.',
        },
        {
          name: 'Sprache und Modell wählen',
          text: 'Automatische Erkennung reicht für die meisten Dateien. Wähle Tiny für Tempo bei langen Aufnahmen oder schwächeren Geräten, Base für die beste Genauigkeit.',
        },
        {
          name: 'Transkribieren und speichern',
          text: 'Der erste Lauf lädt das Modell einmal herunter und speichert es. Transkription bei Bedarf bearbeiten, dann als TXT oder SRT sichern.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine Aufnahme transkribieren?', a: 'Ja. Mehrere Aufnahmen teilen sich Sprache und Modell. Sie laufen nacheinander auf diesem Gerät, und jede bleibt bei etwa 10 Minuten. Ein Transkript bleibt im Feld, damit du es ändern kannst. Zwei oder mehr kommen als ZIP aus TXT und SRT. Ein Handy ist früher ohne Zeit und Speicher.' },
        {
          q: 'Wird mein Audio hochgeladen?',
          a: 'Nein. Die Datei wird im Browser dekodiert und von einem Whisper-Modell transkribiert, das lokal über WebAssembly oder WebGPU läuft. Die einzige Netzwerkanfrage ist der einmalige Modell-Download von einem öffentlichen CDN — danach funktioniert die Transkription offline. Von deinem Audio erreicht niemals etwas einen Server.',
        },
        {
          q: 'Wie genau ist die Transkription?',
          a: 'Sie nutzt die Whisper-Modelle von OpenAI, die bei klarer Sprache nahe an menschlichem Niveau liegen. Lauter Hintergrundlärm, starke Akzente, sich überlappende Sprecher oder laute Musik senken die Genauigkeit. Bei schwierigem Audio ist Base deutlich besser als Tiny — und sowieso landet das Ergebnis in einem bearbeitbaren Feld, sodass du Namen und Zeichensetzung vor dem Download korrigieren kannst.',
        },
        {
          q: 'Welche Grenzen gibt es?',
          a: 'Mehrere Dateien nacheinander, jede bis zu 10 Minuten — längere Aufnahmen vorher zurechtschneiden (der Audio-Trimmer arbeitet genauso privat). Sprecher werden nicht benannt: Ein Dialog erscheint als ein Fließtext ohne Namen. Und diese Seite arbeitet mit Dateien, nicht mit dem Live-Mikrofon.',
        },
        {
          q: 'Was ist der Unterschied zum Sprachrekorder?',
          a: 'Der Sprachrekorder nimmt dein Mikrofon als Audiodatei auf; diese Seite liest eine vorhandene Datei und schreibt die Wörter auf. Sie passen gut zusammen: dort aufnehmen, hier transkribieren. Beides läuft in deinem Browser.',
        },
        {
          q: 'Welche Sprachen werden unterstützt?',
          a: 'Whisper wurde mit rund 90 Sprachen trainiert, von Englisch, Chinesisch, Spanisch und Arabisch bis Vietnamesisch, Ukrainisch und Swahili. Lass die Sprache auf Automatisch erkennen und das Modell findet sie aus dem Audio heraus — oder lege eine Sprache fest für etwas mehr Genauigkeit.',
        },
        {
          q: 'Funktioniert es auf dem Handy?',
          a: 'Ja — aktuelle Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten. Browser mit WebGPU (Chrome, Edge) transkribieren viel schneller; sonst läuft es auf der CPU — wähle also Tiny für lange Dateien und rechne mit einigen Minuten bei zehn Minuten Audio. Der einmalige Modell-Download fällt bei Tiny ebenfalls kleiner aus.',
        },
      ],
      sections: [
        {
          heading: 'Ein lokales Transkript, keine Live-Untertitel',
          paragraphs: [
            'Audio in Text lässt ein Whisper-Modell im Browser laufen. Das Modell lädt einmal von einem CDN, dann wird die Datei auf dem Gerät transkribiert. Das Audio wird für das Transkript nicht hochgeladen.',
            'Die Grenze liegt bei etwa 10 Minuten. Es gibt keine Sprecherkennzeichnungen. Es hört nicht live am Mikrofon. Nimm zuerst den Sprachrekorder auf, exportiere, und leg diese Datei hier ab.',
          ],
        },
        {
          heading: 'Modell und Sprache',
          paragraphs: [
            'Etwa 90 Sprachen. Wähle die, die du gesprochen hast, oder lass die Erkennung an, wenn du unsicher bist:',
          ],
          bullets: [
            'Tiny ist der kleinere Download und reicht bei klarer Sprache.',
            'Base ist langsamer und etwas genauer bei Rauschen oder Akzent.',
            'WebGPU ist schneller auf Geräten, die es haben. Sonst fällt es auf die CPU zurück.',
          ],
        },
        {
          heading: 'Wo der Text danebenliegt',
          paragraphs: [
            'Namen, gleichzeitiges Reden und Musik unter einer Stimme werden unsauber. Es markiert nicht, wer gesprochen hat. Kürze die Datei zuerst, wenn die Enden lange Stille sind: kürzen, oder Stille entfernen, dann die kürzere Datei transkribieren.',
            'Du kannst die Wörter vor dem Download korrigieren, als reinen Text oder als SRT mit Zeitstempeln. Es übersetzt sie nicht in eine andere Sprache.',
          ],
        },
      ],
      dropHint: 'Audio- oder Videodateien ablegen oder klicken zum Auswählen',
      exportLabel: 'Transkribieren',
    },
    'bass-booster': {
      cardLine: 'Mehr Gewicht und Punch durch bis zu +15 dB unter 150 Hz.',
      name: 'Bass-Booster',
      shortName: 'Bass',
      title: 'Bass verstärken – Bass-Booster online kostenlos',
      description:
        'Bis zu +15 dB tiefen Bass unter 150 Hz. Ein echter Low-Shelf, kein Trick, der alles lauter macht. Kostenlos im Browser, ohne Upload.',
      h1: 'Bass verstärken – kostenlos im Browser',
      heroAlt: 'Einer MP3 mehr Tiefbass geben',
      subtitle: 'Ein echter Low-Shelf: bis zu +15 dB unter 150 Hz, erst hören, dann exportieren — nichts verlässt dein Gerät.',
      intro:
        'Dünner Bass ist der häufigste Grund, warum eine Aufnahme klein klingt. Der Bass-Booster setzt einen echten Low-Shelf ein — bis zu +15 dB unter 150 Hz, derselbe Move wie beim Mastering — kein Trick, der einfach alles lauter macht. Datei laden, Regler aufziehen, bis der Bass sitzt, exportieren. Alles läuft in deinem Browser: Die Datei wird nie hochgeladen.',
      usesHeading: 'Wann Bass-Boost hilft',
      uses: [
        'Handy-aufgenommenen Sprachmemos und Interviews Körper geben, damit sie nicht mehr dünn klingen.',
        'Drums und Bässe in einem Track nach vorn holen, der nur aus Mitten besteht.',
        'Einem Podcast-Jingle Gewicht geben, ohne die Stimmen anzutasten.',
      ],
      howTo: [
        {
          name: 'Audio laden',
          text: 'MP3, WAV, M4A, OGG oder FLAC. Die Verarbeitung bleibt auf deinem Gerät.',
        },
        {
          name: 'Bass-Regler aufziehen',
          text: 'Bis zu +15 dB unter 150 Hz. +3–6 dB reparieren dünnes Audio; mehr ist ein bewusster Effekt.',
        },
        {
          name: 'Hören und exportieren',
          text: 'Bei normaler Lautstärke prüfen — zu viel Bass verdeckt Stimmen. Als MP3 oder verlustfreies WAV exportieren.',
        },
      ],
      faqs: [
        {
          q: 'Wird meine Audio hochgeladen?',
          a: 'Nein. Der Boost ist ein Web-Audio-Low-Shelf in deinem Browser-Tab — einen Upload-Schritt gibt es nicht. Nach dem Laden der Seite funktioniert das Tool auch offline.',
        },
        {
          q: 'Mindert der Bass-Boost die Qualität?',
          a: 'Es gibt kein Resampling und keine Tonhöhenänderung. Treibt der Boost den Bass über die Vollaussteuerung, fängt ein Limiter die Peaks, damit der Export nie hart clippt — sehr heiße Einstellungen können diese Peaks leicht weichzeichnen.',
        },
        {
          q: 'Kann er Sub-Bass hinzufügen, der fehlt?',
          a: 'Nein — ein Shelf verstärkt nur tiefe Frequenzen, die die Datei schon enthält. Handylautsprecher können tiefen Bass nicht wiedergeben; beurteile das Ergebnis mit Kopfhörern oder echten Boxen.',
        },
        {
          q: 'Unterschied zum Volume Booster?',
          a: 'Der Volume Booster hebt alles gleich an; der Bass-Booster lifft nur das Tiefe unter 150 Hz. Ist die ganze Datei zu leise, nimm den Booster; klingt sie dünn, hier Bass nachschieben.',
        },
        {
          q: 'Wie viel Bass ist richtig?',
          a: '+3–6 dB reparieren dünne Aufnahmen. Über +9 dB machst du einen Stileffekt — prüfe, ob Stimmen verständlich bleiben, bevor du exportierst.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Editor ist für Touch gebaut — ziehen, Regler setzen, exportieren. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten.',
        },
      ],
      sections: [
        {
          heading: 'Was der Bass-Regler wirklich anhebt',
          paragraphs: [
            'Das ist ein Low-Shelf-Filter. Er hebt Frequenzen unter 150 Hz um den Wert an, den du einstellst, bis zu +15 dB. Mitten und Höhen bleiben, wo sie sind. Es ist kein Lautstärkeregler.',
            'Ein Shelf kann nur Bass verstärken, den die Datei schon hat. Eine mit dem Handy aufgenommene Stimme hat sehr wenig Energie unter 80 Hz, also erzeugt ein starker Boost keinen Sub-Drop. Beurteile das Ergebnis mit Kopfhörern oder echten Boxen. Ein Handylautsprecher spielt diesen Bereich nicht, deshalb kann ein starker Boost nach nichts klingen, oder nach Matsch.',
          ],
        },
        {
          heading: 'Wie viel Bass du dazugeben solltest',
          paragraphs: [
            'Der nützliche Bereich ist klein. Darüber hinaus baust du einen Effekt.',
          ],
          bullets: [
            '+3 bis +6 dB: dünne Sprachnotizen, Interviews und Tracks, die nur aus Mitten bestehen.',
            '+6 bis +9 dB: Drums und Bass, die nach vorn sollen. Prüfe, ob die Stimmen noch durchkommen.',
            '+9 bis +15 dB: ein bewusster Tiefbass-Effekt. Sprache wird hier oft schwer verständlich.',
            'Wenn der Bass knistert, hat der Shelf keinen Headroom mehr. Nimm den Regler zurück.',
          ],
        },
        {
          heading: 'Bass, Lautstärke und der Equalizer',
          paragraphs: [
            'Nimm die Seite, die zum Problem passt.',
          ],
          bullets: [
            'Bass-Booster, diese Seite: nur das Tiefe unter 150 Hz. Die Datei klingt dünn, nicht leise.',
            'Lautstärke-Booster: die ganze Datei, bis zum 4-Fachen, mit Limiter. Die Datei ist auf allen Frequenzen zu leise.',
            'Equalizer: Tiefen, Mitten und Höhen als eigene Shelves. Nimm ihn, wenn 150 Hz die falsche Grenzfrequenz ist.',
          ],
        },
        {
          heading: 'Wo ein Bass-Boost schiefgeht',
          paragraphs: [
            'Viel Bass verdeckt Sprache. Hör bei normaler Lautstärke vor, nicht mit schon leise gedrehten Boxen, sonst speicherst du etwas, das im Auto dröhnt und die Stimme begräbt.',
            'Exportiere WAV, wenn du weiter bearbeitest. MP3 mit 320 kbps ist die richtige Wahl, wenn die Datei fertig ist. Der Filter resamplet nicht und ändert die Tonhöhe nicht. Würde der Boost Peaks über die Vollaussteuerung schieben, mildert ein Limiter diese Peaks, damit der Export nicht hart clippt.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken',
      exportLabel: 'Bass anheben',
    },
    'treble-booster': {
      cardLine: 'Mehr Glanz und Klarheit durch bis zu +15 dB über 3 kHz.',
      name: 'Höhen-Booster',
      shortName: 'Höhen',
      title: 'Höhen-Booster — Höhen online verstärken, kostenlos',
      description:
        'Bis zu +15 dB luftige Höhen über 3 kHz — ein echter High-Shelf im Browser, ohne Loudness-Trick. Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Kostenloser Online-Höhen-Booster — Die Höhen eines Songs anheben',
      heroAlt: 'Dumpfes Audio klarer machen',
      subtitle: 'Ein echter High-Shelf: bis zu +15 dB über 3 kHz, erst hören, dann exportieren — nichts verlässt dein Gerät.',
      intro:
        'Muffiges, mattes Audio fehlt meist eins: Energie über 3 kHz. Der Höhen-Booster setzt einen echten High-Shelf ein — bis zu +15 dB über 3 kHz, derselbe Move wie beim Mastering, um einen Track zu öffnen — kein Trick, der einfach alles anhebt. Datei laden, Regler aufziehen, bis das Detail zurück ist, exportieren. Alles läuft in deinem Browser: Die Datei wird nie hochgeladen.',
      usesHeading: 'Wann Höhen-Boost hilft',
      uses: [
        'Einer matt klingenden Aufnahme Luft verschaffen — als wäre sie unter einer Decke aufgenommen.',
        'Konsonanten und Atem in Stimmen zurückholen, damit Sprache verständlich bleibt.',
        'Becken und Akustikinstrumenten in einer flachen Mischung Glanz geben.',
      ],
      howTo: [
        {
          name: 'Audio laden',
          text: 'MP3, WAV, M4A, OGG oder FLAC. Die Verarbeitung bleibt auf deinem Gerät.',
        },
        {
          name: 'Höhen-Regler aufziehen',
          text: 'Bis zu +15 dB über 3 kHz. +3–6 dB entmisten die meisten Aufnahmen; mehr für eine helle, aggressive Kante.',
        },
        {
          name: 'Hören und exportieren',
          text: 'Auf Schärfe bei Zischlauten (s, t) achten — als MP3 oder verlustfreies WAV exportieren.',
        },
      ],
      faqs: [
        {
          q: 'Wird meine Audio hochgeladen?',
          a: 'Nein. Der Boost ist ein Web-Audio-High-Shelf in deinem Browser-Tab — einen Upload-Schritt gibt es nicht. Nach dem Laden der Seite funktioniert das Tool auch offline.',
        },
        {
          q: 'Mindert der Höhen-Boost die Qualität?',
          a: 'Es gibt kein Resampling und keine Tonhöhenänderung. Ein großer Boost hebt auch Zischen und Sibilanten an, die immer schon in der Datei waren — wird es scharf, dreh den Regler zurück. Ein Limiter fängt die Peaks, damit der Export nie hart clippt.',
        },
        {
          q: 'Kann er Detail zurückholen, das nie aufgenommen wurde?',
          a: 'Nein — ein Shelf verstärkt nur hohe Frequenzen, die die Datei schon enthält. Kompression mit niedriger Bitrate verliert Höhen für immer; kein EQ bringt sie zurück.',
        },
        {
          q: 'Unterschied zum Bass-Booster?',
          a: 'Beide liegen an gegenüberliegenden Enden des Spektrums: Der Bass-Booster hebt das Tiefe unter 150 Hz an, der Höhen-Booster die Höhen über 3 kHz. Matt und muffig? Höhen. Dünn und klein? Bass.',
        },
        {
          q: 'Wie viel Höhe ist richtig?',
          a: '+3–6 dB öffnen die meisten matten Aufnahmen. Über +9 dB können Zischlaute (s, sh, t) stechen — hör einmal mit Kopfhörern, bevor du exportierst.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Editor ist für Touch gebaut — ziehen, Regler setzen, exportieren. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten.',
        },
      ],
      sections: [
        {
          heading: 'Ein High-Shelf über 3 kHz',
          paragraphs: [
            'Der Höhen-Booster ist ein High-Shelf-Filter, bis +15 dB über 3 kHz. Er verstärkt Höhen, die die Datei schon hat. Er erfindet kein Detail, das eine Kodierung mit niedriger Bitrate weggeworfen hat.',
            'Ein Limiter fängt Spitzen, damit ein großer Boost nicht hart clippt. Der Boost hebt auch Rauschen und Zischlaute an, die schon in der Datei waren.',
          ],
        },
        {
          heading: 'Wie weit du ihn aufdrehst',
          paragraphs: [
            'Hör einmal mit Kopfhörern, bevor du exportierst:',
          ],
          bullets: [
            '+3 bis +6 dB öffnet die meisten dumpfen Aufnahmen.',
            'Über +9 dB können s-, sch- und t-Laute schneidend werden.',
            'Wurde die Datei mit niedriger Bitrate kodiert, holt kein Shelf die fehlenden Höhen zurück.',
          ],
        },
        {
          heading: 'Höhen, Bass und der Equalizer',
          paragraphs: [
            'Der Bass-Booster hebt unter 150 Hz an. Diese Seite hebt über 3 kHz an. Dumpf und belegt zeigt hierher. Dünn und klein zeigt zum Bass.',
            'Der Equalizer ist dieselben drei Bereiche, mit Absenkung und Anhebung: Low-Shelf bei 150 Hz, eine Glocke bei 1 kHz und dieses High-Shelf bei 3 kHz. Nimm den Booster, wenn du schon weißt, dass du nur mehr Höhen willst.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken',
      exportLabel: 'Höhen anheben',
    },
    'equalizer': {
      cardLine: 'Forme Bässe, Mitten und Höhen mit dem unkomplizierten 3-Knopf-±15-dB-EQ.',
      name: 'Audio-Equalizer',
      shortName: 'Equalizer',
      title: 'Audio-Equalizer — 3-Band-EQ online, kostenlos',
      description:
        'Forme Bässe, Mitten und Höhen mit einem echten 3-Band-EQ (Shelf–Peak–Shelf) im Browser. ±15 dB pro Band, Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Kostenloser Online-Audio-Equalizer — Bass, Mitten und Höhen einstellen',
      heroAlt: 'Den Klang eines Songs oder einer Sprachaufnahme formen',
      subtitle: 'Bass-, Mitten- und Höhen-Shelf mit ±15 dB pro Band — der ehrliche Drei-Knopf-EQ.',
      intro:
        'Drei Knöpfe decken das meiste ab, wofür es einen EQ gibt: Bässe unter 150 Hz, Mitten um 1 kHz, wo die Stimmen wohnen, und Höhen über 3 kHz. Dieser Equalizer nutzt echte Filterbänder — Low Shelf, Peaking, High Shelf — mit je ±15 dB, um Grollen zu entschärfen, Matsch herauszunehmen oder Luft zu geben. Datei laden, Klang formen, exportieren. Alles läuft in deinem Browser: Die Datei wird nie hochgeladen.',
      usesHeading: 'Was die drei Bänder tun',
      uses: [
        'Matsch schneiden: −3 bis −6 dB in den Mitten räumen überfüllte Sprachaufnahmen auf.',
        'Grollen zähmen: das untere Band herunterziehen bei Aufnahmen nah an einer Wand.',
        'Präsenz geben: Höhen für Luft, Bässe für Gewicht — beides zugleich, wenn der Mix es verlangt.',
      ],
      howTo: [
        {
          name: 'Audio laden',
          text: 'MP3, WAV, M4A, OGG oder FLAC. Die Verarbeitung bleibt auf deinem Gerät.',
        },
        {
          name: 'Drei Bänder formen',
          text: 'Bass unter 150 Hz, Mitten um 1 kHz, Höhen über 3 kHz — je ±15 dB. Kleine Schnitte schlagen große Boosts.',
        },
        {
          name: 'Vergleichen und exportieren',
          text: 'Ein Band auf 0 dB zurücksetzen, um es mit dem Original zu vergleichen, dann als MP3 oder verlustfreies WAV exportieren.',
        },
      ],
      faqs: [
        {
          q: 'Wird meine Audio hochgeladen?',
          a: 'Nein. Die Bänder sind Web-Audio-Filter (Low Shelf, Peaking, High Shelf) in deinem Browser-Tab — einen Upload-Schritt gibt es nicht. Nach dem Laden der Seite funktioniert das Tool auch offline.',
        },
        {
          q: 'Besser boosten oder schneiden?',
          a: 'Schneiden. Große Boosts drängen das Signal in den Limiter und können Peaks weichzeichnen; ein −4-dB-Schnitt im matschigen Band bringt oft mehr als ein +6-dB-Boost irgendwo.',
        },
        {
          q: 'Unterschied zum Bass- und Höhen-Booster?',
          a: 'Die Booster sind Einzweck-Shelves mit reinen Boost-Bereichen. Der Equalizer gibt dir alle drei Bänder mit Schnitt und Boost an einem Ort — nimm die Booster, wenn du genau weißt, welches Ende du brauchst.',
        },
        {
          q: 'Welche Bandfrequenzen genau?',
          a: 'Low Shelf bei 150 Hz, Peaking bei 1 kHz (Einheitsbreite), High Shelf bei 3 kHz — das klassische Drei-Band-Layout. Bänder auf 0 dB sind überbrückt: Ein unberührtes Band färbt den Klang nie.',
        },
        {
          q: 'Warum klingen Stimmen seltsam, wenn ich die Mitten senke?',
          a: 'Sprachverständlichkeit wohnt um 1 kHz. Senke das Mitten-Band sanft (−3 bis −6 dB) und höre einen Satz, den du gut kennst — tiefe Mittenschnitte machen Stimmen fern oder hohl.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Editor ist für Touch gebaut — ziehen, Regler setzen, exportieren. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten.',
        },
      ],
      sections: [
        {
          heading: 'Drei Bänder, absenken oder anheben',
          paragraphs: [
            'Der Equalizer ist ein Low-Shelf bei 150 Hz, eine Glocke bei 1 kHz und ein High-Shelf bei 3 kHz. Jedes Band läuft etwa ±15 dB. Ein Band auf 0 dB ist überbrückt und färbt den Klang nicht.',
            'Absenken ist der sicherere Schritt. Ein Schnitt von −4 dB in einem mulmigen Band bringt oft mehr als +6 dB irgendwo anders. Große Anhebungen schieben das Signal Richtung Limiter und können Spitzen weich machen.',
          ],
        },
        {
          heading: 'Wofür jedes Band da ist',
          paragraphs: [
            'Die drei Bänder sind die übliche Aufteilung, kein chirurgischer EQ:',
          ],
          bullets: [
            '150 Hz: Gewicht und Mulm. Senke ab, wenn die Datei dröhnt. Der Bass-Booster hebt nur diese Region an, bis +15 dB, und kann nicht absenken.',
            '1 kHz: Präsenz. Die Mitten abzusenken lässt Stimmen fern klingen.',
            '3 kHz: Luft und Kante. Der Höhen-Booster hebt nur über diesem Punkt an.',
          ],
        },
        {
          heading: 'Wann ein einzelner Booster reicht',
          paragraphs: [
            'Wenn du schon weißt, dass du nur mehr Bass oder mehr Höhen willst, sind Bass-Booster und Höhen-Booster die kürzeren Seiten. Sie senken nicht ab.',
            'Ein Tiefpass oder Hochpass ist ein Cutoff-Sweep, nicht diese Shelves. Nimm einen Filter, wenn alles über oder unter einer Frequenz weg soll, nicht ein paar Dezibel verschoben.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken',
      exportLabel: 'Equalizer anwenden',
    },
    'low-pass-filter': {
      cardLine: 'Behalte nur die Wärme unterhalb der Grenzfrequenz — ideal für Lo-fi-Texturen.',
      name: 'Tiefpassfilter',
      shortName: 'Tiefpass',
      title: 'Tiefpassfilter – Hohe Frequenzen abschneiden',
      description:
        'Alles über der Grenzfrequenz absenken, von 300 Hz bis 20 kHz, im Browser. Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Kostenloser Online-Tiefpassfilter — Hohe Frequenzen im Audio abschneiden',
      heroAlt: 'Harte Höhen in einer Aufnahme weicher machen',
      subtitle: 'Die Grenzfrequenz von 20 kHz bis 300 Hz durchziehen und nur die Frequenzen behalten, die du willst.',
      intro:
        'Ein Tiefpass behält das Tiefe und rollt alles über der Grenzfrequenz ab — der ehrliche Weg, Zischen, scharfe Sibilanten, Quietschen und die harte digitale Kante zu entfernen. Anders als ein Rauschentferner rät er nie, was Rauschen ist: Alles über deiner Grenzfrequenz geht einfach. Datei laden, die Grenzfrequenz nach unten ziehen, bis die Störung verschwindet, exportieren. Alles läuft in deinem Browser: Die Datei wird nie hochgeladen.',
      usesHeading: 'Wann Tiefpass hilft',
      uses: [
        'Konstantes Zischen und Klimaanlagen-Pfeifen aus Sprachaufnahmen entfernen.',
        'Scharfe, spritzige Becken oder Sibilanz in einem rohen Mix mildern.',
        'Ein Sample hinter ein anderes setzen, indem man sein oberes Ende abdunkelt.',
      ],
      howTo: [
        {
          name: 'Audio laden',
          text: 'MP3, WAV, M4A, OGG oder FLAC. Die Verarbeitung bleibt auf deinem Gerät.',
        },
        {
          name: 'Grenzfrequenz senken',
          text: 'Von 20 kHz nach unten ziehen, bis das Rauschen verschwindet — 8–12 kHz ist ein üblicher Ruhepunkt für Sprache.',
        },
        {
          name: 'Hören und exportieren',
          text: 'Prüfen, dass Stimmen natürlich klingen, dann als MP3 oder verlustfreies WAV exportieren.',
        },
      ],
      faqs: [
        {
          q: 'Wird meine Audio hochgeladen?',
          a: 'Nein. Der Filter ist ein Web-Audio-Tiefpass-Biquad in deinem Browser-Tab — einen Upload-Schritt gibt es nicht. Nach dem Laden der Seite funktioniert das Tool auch offline.',
        },
        {
          q: 'Ist ein Tiefpass dasselbe wie Rauschentfernung?',
          a: 'Nein — und das ist seine Stärke. Ein Rauschentferner trennt Rauschen und Signal intelligent; ein Tiefpass schneidet blind alles über der Grenzfrequenz ab. Bei konstantem, breitbandigem Zischen ist er zuverlässiger als jeder Algorithmus.',
        },
        {
          q: 'Warum klingen Stimmen bei niedriger Grenzfrequenz muffig?',
          a: 'Konsonanten-Klarheit wohnt zwischen 3 und 8 kHz. Unter etwa 5 kHz beginnt Sprache muffig zu klingen; unter 2 kHz wie ein Telefon. Für Sprache zuerst 8–12 kHz versuchen.',
        },
        {
          q: 'Unterschied zum Hochpassfilter?',
          a: 'Gegenläufige Richtungen: Der Hochpass entfernt Rumble, Brummen und tiefes Grollen unter deiner Grenzfrequenz; der Tiefpass entfernt Zischen und Schärfe darüber. Beide zusammen lassen nur das gewählte Band übrig.',
        },
        {
          q: 'Welche Grenzfrequenz für Musik?',
          a: 'Für einen sanften Lo-fi-Effekt 4–8 kHz versuchen. Zum Säubern scharfer Becken reicht meist 12–16 kHz. Unter 3 kHz klingt Musik deutlich muffig — den Ohren mehr vertrauen als den Zahlen.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Editor ist für Touch gebaut — ziehen, Grenzfrequenz ziehen, exportieren. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten.',
        },
      ],
      sections: [
        {
          heading: 'Alles über dem Cutoff fällt weg',
          paragraphs: [
            'Ein Tiefpassfilter rollt ab, was über dem Cutoff liegt. Er ist kein Entrauscher. Er trennt Rauschen nicht vom Signal. Er senkt jede Frequenz hinter dem Punkt, den du setzt, Konsonanten und Becken eingeschlossen, wenn du ihn zu tief setzt.',
            'Es gibt kein Resampling und keine Tonhöhenänderung. Der Export kodiert trotzdem einmal: MP3, oder WAV, wenn du das gefilterte Audio ohne eine weitere verlustbehaftete Generation willst.',
          ],
        },
        {
          heading: 'Cutoffs, die zum Auftrag passen',
          paragraphs: [
            'Die Zahl ist ein Startpunkt. Hör hin, weil derselbe Cutoff eine Datei zudeckt und eine andere nur weicher macht:',
          ],
          bullets: [
            'Stimme: probier zuerst 8–12 kHz. Unter etwa 5 kHz klingt Sprache belegt. Unter 2 kHz klingt sie wie ein Telefon.',
            'Ein weicher Lo-Fi-Effekt bei Musik: 4–8 kHz.',
            'Scharfe Becken, die du nur zähmen willst: 12–16 kHz. Unter 3 kHz klingt Musik deutlich dumpf.',
          ],
        },
        {
          heading: 'Der Hochpass ist die andere Richtung',
          paragraphs: [
            'Der Hochpassfilter nimmt Rumpeln und Tiefbass unter seinem Cutoff weg. Diese Seite nimmt Rauschen und Härte über ihrem Cutoff weg. Beide zusammen lassen ein Band in der Mitte.',
            'Ein paar Dezibel Höhen, statt das Obere ganz zu entfernen, sind der Höhen-Booster oder der Equalizer. Diese Shelves fegen keinen harten Cutoff.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken',
      exportLabel: 'Tiefpass anwenden',
    },
    'high-pass-filter': {
      cardLine: 'Entferne Rumpeln und Brummen unterhalb der Grenzfrequenz für sauberere Sprachaufnahmen.',
      name: 'Hochpassfilter',
      shortName: 'Hochpass',
      title: 'Hochpassfilter — Bassrumble online entfernen',
      description:
        'Rumble, Brummen und Grollen mit einem echten Hochpass kappen, Grenzfrequenz 20 Hz–5 kHz, im Browser. Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Kostenloser Online-Hochpassfilter — Rumpeln aus einer Aufnahme entfernen',
      heroAlt: 'Wind und tiefes Brummen aus einer Sprachaufnahme schneiden',
      subtitle: 'Die Grenzfrequenz von 20 Hz bis 5 kHz hochziehen und alles darunter entfernen.',
      intro:
        'Rumble, Verkehr, Handling-Geräusche, Schläge auf den Tisch — ungewolltes Tiefe steckt in den meisten echten Aufnahmen. Ein Hochpass behält alles über deiner Grenzfrequenz und rollt alles darunter ab: die ehrliche Reparatur, die nie rät. Datei laden, die Grenzfrequenz nach oben ziehen, bis das Rumble verschwunden ist und die Stimme voll bleibt, exportieren. Alles läuft in deinem Browser: Die Datei wird nie hochgeladen.',
      usesHeading: 'Wann Hochpass hilft',
      uses: [
        'Verkehrsrumble und Tischschläge aus Podcast- und Sprachaufnahmen entfernen.',
        'Wind und Handling-Geräusche loswerden, die eine windige Außenaufnahme überlebt haben.',
        'Einen Mix straffen, indem man den Sub-Bass-Matsch aus jedem Nicht-Bass-Track zieht.',
      ],
      howTo: [
        {
          name: 'Audio laden',
          text: 'MP3, WAV, M4A, OGG oder FLAC. Die Verarbeitung bleibt auf deinem Gerät.',
        },
        {
          name: 'Grenzfrequenz anheben',
          text: 'Von 20 Hz nach oben ziehen, bis das Rumble weg ist — 80–120 Hz passen zu den meisten Stimmen.',
        },
        {
          name: 'Hören und exportieren',
          text: 'Prüfen, dass die Stimme nicht dünn klingt, dann als MP3 oder verlustfreies WAV exportieren.',
        },
      ],
      faqs: [
        {
          q: 'Wird meine Audio hochgeladen?',
          a: 'Nein. Der Filter ist ein Web-Audio-Hochpass-Biquad in deinem Browser-Tab — einen Upload-Schritt gibt es nicht. Nach dem Laden der Seite funktioniert das Tool auch offline.',
        },
        {
          q: 'Entfernt er Brummen von einem schlechten Kabel?',
          a: 'Netzbrummen sitzt bei 50 oder 60 Hz, mit Obertönen darüber. Ein Hochpass bei 80–120 Hz entfernt den Grundton und viel vom Summen — bei hartnäckigen Obertönen mit dem Tiefpassfilter kombinieren, um das Band weiter zu verengen.',
        },
        {
          q: 'Wie hoch darf die Grenzfrequenz, bevor Stimmen dünn werden?',
          a: 'Männliche Stimmen behalten ihren Körper bis etwa 100 Hz, weibliche bis etwa 150–200 Hz. Über 300 Hz klingt Sprache telefonartig — kann ein Stil sein, aber erst hören.',
        },
        {
          q: 'Unterschied zum Tiefpassfilter?',
          a: 'Gegenläufige Richtungen: Der Hochpass entfernt tieffrequentes Rumble unter deiner Grenzfrequenz; der Tiefpass entfernt Zischen und Schärfe darüber. Aneinandergereiht überlebt nur dein gewähltes Band.',
        },
        {
          q: 'Mindert Filtern die Dateiqualität?',
          a: 'Es gibt kein Resampling und keine Tonhöhenänderung — die Grenzfrequenz entscheidet nur, welche Frequenzen überleben. Der Export rekodiert einmal, wie immer: MP3 mit 128–320 kbps oder bitidentisches WAV.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Editor ist für Touch gebaut — ziehen, Grenzfrequenz ziehen, exportieren. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten.',
        },
      ],
      sections: [
        {
          heading: 'Alles unter dem Cutoff fällt weg',
          paragraphs: [
            'Ein Hochpassfilter rollt ab, was unter dem Cutoff liegt: Rumpeln, Wind, Griffgeräusche und den Bass eines dröhnenden Raums. Er ändert die Tonhöhe nicht, und es gibt kein Resampling.',
            'Netzbrummen sitzt bei 50 oder 60 Hz, mit Obertönen darüber. Ein Hochpass um 80–120 Hz nimmt den Grundton und einen großen Teil des Nachklingens weg. Hartnäckige Obertöne bleiben. Kombiniere ihn mit dem Tiefpassfilter, wenn du das Band weiter einengen musst.',
          ],
        },
        {
          heading: 'Wie hoch, bevor eine Stimme dünn wird',
          paragraphs: [
            'Sprache hat Körper in den tiefen Mitten. Schiebst du den Cutoff zu weit, wird die Stimme dünn:',
          ],
          bullets: [
            'Tiefe Stimmen behalten ihren Körper bis etwa 100 Hz.',
            'Höhere Stimmen bis etwa 150–200 Hz.',
            'Über 300 Hz klingt Sprache zunehmend wie ein Telefon. Das kann ein Stil sein, also hör vor dem Export.',
          ],
        },
        {
          heading: 'Nicht der Bass-Booster, und kein Cut-Shelf',
          paragraphs: [
            'Der Bass-Booster legt Pegel unter 150 Hz dazu. Diese Seite nimmt Pegel unter einem Cutoff weg, den du schiebst. Sie lösen entgegengesetzte Probleme.',
            'Der Equalizer kann ein paar Dezibel bei 150 Hz absenken und den Rest des Tiefbasses lassen. Nimm ihn, wenn die Datei etwas mulmig ist und du das Gewicht noch willst. Nimm diese Seite, wenn das Rumpeln weg soll.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken',
      exportLabel: 'Hochpass anwenden',
    },
    'fade-audio': {
      cardLine: 'Songenden und Podcast-Intros mit exakten Fade-Zeiten glätten.',
      name: 'Audio ein-/ausblenden',
      shortName: 'Blenden',
      title: 'Audio ein- und ausblenden — Fade online kostenlos',
      description:
        'Sanftes Ein- und Ausblenden für Songs und Aufnahmen, direkt im Browser. Länge auf 0,1 s genau, Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Kostenloser Online-Audio-Fade — Musik ausblenden',
      heroAlt: 'Einen Track einblenden und wieder ausblenden',
      subtitle: 'In Sekunden saubere Kanten: beide Fade-Längen auf 0,1 s genau, erst hören, dann exportieren — nichts verlässt dein Gerät.',
      intro:
        'Ein Fade-in lässt einen Track aus der Stille beginnen, ein Fade-out beendet ihn mit Ausklang statt mit einem harten Schnitt. Datei hier laden, beide Längen auf ein Zehntel genau setzen, vor dem Export reinhören. Alles läuft in deinem Browser: Die Datei wird nie hochgeladen.',
      usesHeading: 'Wann ein Fade die Lösung ist',
      uses: [
        'Mixtape-, DJ-Set- oder Kompilations-Enden sauber ausklingen lassen statt mitten in der Note zu schneiden.',
        'Podcasts und Sprachmemos weich anfangen lassen, damit das erste Wort nicht erschreckt.',
        'Loops und Samples an den Nähten entschärfen, damit die Wiederholung ohne Klicken läuft.',
      ],
      howTo: [
        {
          name: 'Audio laden',
          text: 'MP3, WAV, M4A, OGG oder FLAC — alles möglich. Die Verarbeitung bleibt auf deinem Gerät.',
        },
        {
          name: 'Fade-Längen setzen',
          text: 'Stelle Fade-In und Fade-Out auf der Seite ein — bei Songs sind 1–3 Sekunden natürlich, bei Loops 0,2–0,5.',
        },
        {
          name: 'Hören und exportieren',
          text: 'Anfang und Ende anspielen, dann als MP3 oder verlustfreies WAV exportieren.',
        },
      ],
      faqs: [
        {
          q: 'Wird meine Audio hochgeladen?',
          a: 'Nein. Die Fades werden mit der Web Audio API in deinem Browser-Tab gerendert — einen Upload-Schritt gibt es nicht. Nach dem Laden der Seite funktioniert das Tool auch offline.',
        },
        {
          q: 'Beeinträchtigt der Fade die Qualität?',
          a: 'Nein. Ein Fade formt nur die Lautheit über die Zeit — kein Reverb, keine Tonhöhenänderung. Beim Export wird einmal neu kodiert: MP3 mit 128–320 kbps (Standard 320) oder bitgenaues WAV. Deine Datei selbst bleibt unverändert.',
        },
        {
          q: 'Kann ich zwei Songs überblenden?',
          a: 'Hier nicht — diese Seite blendet eine Datei ein und aus. Das weiche Überblenden vom Ende eines Tracks in den Anfang des nächsten ist ein Crossfade; das macht der Audio-Joiner. Denselben Clip mit einem kurzen Crossfade an jeder Naht zu wiederholen ist der Audio-Looper.',
        },
        {
          q: 'Was ist der Unterschied zum Volume Booster?',
          a: 'Der Volume Booster hebt die ganze Datei um einen festen Faktor an; ein Fade formt die Lautheit über die Zeit — leise an den Rändern, unberührt in der Mitte. Für Enden der Fade, für Gesamtlautheit der Booster.',
        },
        {
          q: 'Wie lang sollte ein Fade-out sein?',
          a: 'Bei Songs wirken 1–3 Sekunden meist natürlich, Live-Aufnahmen vertragen 4–5. Bei Loops und Klingeltönen 0,2–0,5 Sekunden, damit der Attack erhalten bleibt. Es gibt nicht die eine richtige Antwort — reinhören und den Ohren vertrauen.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Editor ist für Touch gebaut — ziehen, Regler setzen, exportieren. Läuft in aktuellen Chrome-, Edge-, Firefox- und Safari-Versionen, auf Desktop und Mobilgeräten.',
        },
      ],
      sections: [
        {
          heading: 'Die Kanten werden leise, die Mitte bleibt',
          paragraphs: [
            'Audio ein- und ausblenden formt die Lautstärke über die Zeit, an einer Datei: ein Fade-in am Anfang, ein Fade-out am Ende, oder beides. Die Mitte bleibt unangetastet. Es gibt keinen Hall und keine Tonhöhenänderung.',
            'Bei Songs klingen 1–3 Sekunden meist natürlich. Live-Aufnahmen können 4–5 Sekunden brauchen. Loops und Klingeltöne wollen 0,2–0,5 Sekunden, damit der Anschlag bleibt. Hör Anfang und Ende an, bevor du exportierst.',
          ],
        },
        {
          heading: 'Wofür ein Fade da ist',
          paragraphs: [
            'Nimm ihn, wenn der Schnitt schon steht und die Kante klickt oder hart abbricht:',
          ],
          bullets: [
            'Ein Klingelton oder ein Loop, der beim Wiederholen nicht knacken soll.',
            'Das Ende eines Songs oder einer Sprachnotiz, das zu hart stoppt.',
            'Der Anfang einer Aufnahme, die auf voller Lautstärke einsetzt.',
          ],
        },
        {
          heading: 'Kein Crossfade, und kein Lautstärke-Boost',
          paragraphs: [
            'Das Ende eines Tracks in den Anfang eines anderen zu blenden ist ein Crossfade, und das macht der Audio-Joiner. Diese Seite blendet eine einzelne Datei ein und aus.',
            'Audio lauter machen hebt die ganze Datei um einen festen Betrag an. Ein Fade ist an den Kanten leise und in der Mitte voll. Der Export ist MP3, standardmäßig 320 kbps, oder WAV. Die abgelegte Datei wird nicht verändert.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken',
      exportLabel: 'Ein- und ausblenden und laden',
    },
    'audio-trimmer': {
      cardLine: 'Ziehe die Griffe, um genau den Teil zu behalten, den du brauchst — Podcasts, Sprachmemos, jeder Track.',
      name: 'Audio-Trimmer',
      shortName: 'Audio-Trimmer',
      title: 'Audio schneiden – Podcast oder Sprachnotiz',
      description:
        'Eine Stelle aus Podcast, Sprachnotiz oder Aufnahme behalten und als MP3 oder WAV speichern. Der Schnitt läuft im Browser, nichts wird hochgeladen.',
      h1: 'Audio kürzen – kostenlos im Browser',
      heroAlt: 'Eine MP3 oder einen Podcast auf die passende Stelle schneiden',
      subtitle: 'Audio online kürzen — kostenlos, direkt im Browser. Nichts wird hochgeladen.',
      intro:
        'Schneide genau den Teil heraus, den du brauchst, aus jedem Song, jeder Sprachnotiz, jedem Podcast oder jeder Aufnahme. Ziehe auf der Wellenform, um auszuwählen, höre ihn an und speichere. Das Kürzen passiert komplett auf deinem Gerät, deshalb bleiben auch lange Aufnahmen privat und starten sofort.',
      usesHeading: 'Schnitte, die den Edit erledigen',
      uses: [
        'Schneide die Antwort aus einem Podcast und lass das Äh-Äh links und rechts weg.',
        'Hol einen Refrain oder einen Loop aus dem ganzen Song, ohne Desktop-Editor.',
        'Kürze eine Sprachnotiz vor dem Senden, damit die Datei nur den Punkt enthält.',
      ],
      howTo: [
        {
          name: 'Datei ablegen',
          text: 'Ziehe eine Audio- oder Videodatei auf die Wellenform oder klicke, um sie auszuwählen. MP3, WAV, M4A, OGG, FLAC und weitere Formate werden unterstützt.',
        },
        {
          name: 'Behalten, was du brauchst',
          text: 'Ziehe über die Wellenform, um den Abschnitt zu markieren. Ziehe die Anfasser zum Feinjustieren oder tippe genaue Start- und Endzeiten ein.',
        },
        {
          name: 'Anhören und speichern',
          text: 'Spiel die Auswahl ab, um nur diesen Teil zu hören, und klicke dann auf Exportieren. Die gekürzte Datei lädt als MP3 oder WAV herunter.',
        },
      ],
      faqs: [
        {
          q: 'Ist dieser Audio-Trimmer wirklich kostenlos?',
          a: 'Ja. Jedes Kürzen und jeder Export ist kostenlos, ohne Anmeldung und ohne Wasserzeichen. Das Tool läuft vollständig in deinem Browser, deshalb gibt es keine Serverkosten, die an dich weitergegeben werden.',
        },
        {
          q: 'Wird mein Audio auf einen Server hochgeladen?',
          a: 'Nein. Deine Datei wird von deinem eigenen Browser mit der Web Audio API dekodiert und verarbeitet. Du kannst offline gehen, nachdem die Seite geladen ist, und der Trimmer funktioniert weiter — es wird nie etwas irgendwohin geschickt.',
        },
        {
          q: 'Welche Formate kann ich kürzen?',
          a: 'Dein Browser kann MP3, WAV, M4A/AAC, OGG, FLAC und WebM-Audio dekodieren. Das Ergebnis speicherst du als MP3 (128–320 kbps) oder als verlustfreies WAV.',
        },
        {
          q: 'Wird die Audioqualität durch das Kürzen schlechter?',
          a: 'Als WAV gespeichert ist der behaltene Teil bitgenau — ohne erneute Kompression. Als MP3 wird einmal neu kodiert; ab 192 kbps ist der Unterschied für die meisten praktisch nicht hörbar.',
        },
        {
          q: 'Kann ich Audio auf dem Handy kürzen?',
          a: 'Ja. Die Wellenform unterstützt Touch, und der Export-Button bleibt unten auf dem Bildschirm erreichbar. Es funktioniert in Safari auf dem iPhone und in Chrome oder Firefox auf Android.',
        },
        {
          q: 'Wie lang darf meine Datei sein?',
          a: 'Aufnahmen bis etwa einer Stunde laufen auf einem modernen Computer problemlos. Die praktische Grenze ist der Speicher deines Geräts, kein künstliches Limit. Den behaltenen Teil 2- bis 16-mal zu wiederholen ist der Audio-Looper.',
        },
      ],
      sections: [
        {
          heading: 'Den Teil markieren, den du behalten willst',
          paragraphs: [
            'Ziehe über die Wellenform. Start und Ende aktualisieren sich beim Ziehen, und du kannst beide Zeiten eintippen, wenn Finger oder Maus nicht genau genug sind. Hör nur diesen Abschnitt an, bevor du speicherst.',
            'Exportiere WAV, wenn du noch einmal kürzen oder weiter bearbeiten willst. Exportiere MP3, wenn der Clip fertig ist. Ein Schnitt nach WAV behält die Samples, die du gewählt hast. Ein Schnitt nach MP3 kodiert einmal, mit der Bitrate, die du wählst.',
          ],
        },
        {
          heading: 'Eine Aufnahme kürzen oder einen Song schneiden',
          paragraphs: [
            'Diese Seite ist für eine Aufnahme, die kürzer werden soll: eine Podcast-Antwort, eine Sprachnotiz, eine Vorlesung, die Mitte einer langen Datei.',
          ],
          bullets: [
            'Audio kürzen, diese Seite: du behältst einen Abschnitt von beliebigem Audio oder einer Videotonspur und speicherst ihn als MP3 oder WAV.',
            'MP3-Cutter: dieselbe Art Auswahl, geschrieben für einen Song. Die Seite erklärt, wie du einen Refrain behältst oder ein Intro löschst.',
            'Stille entfernen: wirft lange Pausen von selbst raus. Nimm das, wenn das Problem tote Luft ist, nicht ein Abschnitt, den du von Hand markieren musst.',
          ],
        },
        {
          heading: 'Was das Kürzen mit dem Klang macht',
          paragraphs: [
            'Die Datei wird dekodiert, der Abschnitt genommen und der Export neu geschrieben. WAV ist die saubere Kopie dessen, was du behalten hast. MP3 ab 192 kbps reicht für Sprache, und 320 kbps ist die Einstellung, wenn die Quelle Musik ist.',
            'Kürzen macht eine leise Aufnahme nicht lauter. Heb sie mit dem Lautstärke-Booster an, wenn der Clip die richtige Länge hat.',
          ],
        },
        {
          heading: 'Wie lang eine Datei sein darf',
          paragraphs: [
            'Etwa eine Stunde ist auf einem aktuellen Computer angenehm. Die Grenze ist der Speicher im Tab, kein Limit, das wir setzen. Ein Handy schafft ein paar Minuten leicht und wird unruhiger, je länger die Datei ist.',
          ],
          bullets: [
            'Eine Sprachnotiz oder eine Podcast-Antwort: hier kürzen, auf dem Handy, wenn du willst.',
            'Eine ganze Folge: der Computer ist der ruhigere Ort zum Anhören und Exportieren.',
            'Ein Video: gekürzt wird die Tonspur. Das Bild wird nicht gespeichert.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Zuschneiden und laden',
    },
    'mp3-cutter': {
      cardLine: 'Schneide einen Song auf den Refrain, den Drop oder jeden Clip — ohne Re-Encoding.',
      name: 'MP3-Cutter',
      shortName: 'MP3-Cutter',
      title: 'MP3 schneiden – Abschnitt behalten oder löschen',
      description:
        'Den Refrain behalten oder das Intro löschen, dann speichern. WAV verliert nichts zusätzlich. MP3 wird einmal kodiert, bis 320 kbps.',
      h1: 'MP3 schneiden – kostenlos online',
      heroAlt: 'MP3 kostenlos online schneiden',
      subtitle: 'Songs und MP3-Dateien online schneiden — behalte den Teil, den du willst, und lösche den Rest.',
      intro:
        'Kürze einen Song auf den Refrain, entferne ein langes Intro oder schneide einen Höhepunkt heraus — direkt im Browser. Wähle, ob der markierte Teil bleiben oder gelöscht werden soll, höre das Ergebnis an und speichere in Sekunden eine frische MP3.',
      usesHeading: 'Schnitte, die Leute in einer MP3 machen',
      uses: [
        'Entferne Intro, Werbedurchsage oder eine lange Stille aus Song oder Folge.',
        'Behalte einen Abschnitt und wirf den Rest weg, statt ihn mit einem Fade zu überdecken.',
        'Schneide den Clip zuerst, wenn der nächste Schritt ein Klingelton ist.',
      ],
      howTo: [
        {
          name: 'MP3 hinzufügen',
          text: 'Ziehe deine MP3 hierher oder klicke, um eine Datei zu wählen. Die meisten anderen Audio- und Videoformate funktionieren ebenfalls.',
        },
        {
          name: 'Den Schnitt markieren',
          text: 'Ziehe über die Wellenform, um einen Abschnitt zu markieren. Wechsle zwischen „Auswahl behalten“ und „Auswahl löschen“, je nachdem, welchen Teil du willst.',
        },
        {
          name: 'Schneiden und herunterladen',
          text: 'Höre die Vorschau an und exportiere den Schnitt als MP3 oder verlustfreies WAV. Der Download startet automatisch.',
        },
      ],
      faqs: [
        {
          q: 'Wie schneide ich nur den Refrain aus einem Song?',
          a: 'Markiere den Refrain auf der Wellenform, stelle sicher, dass der Modus auf „Auswahl behalten“ steht, höre ihn an und exportiere. Du bekommst eine neue Audiodatei, die nur diesen Teil enthält.',
        },
        {
          q: 'Wie entferne ich die ersten 30 Sekunden eines Titels?',
          a: 'Markiere die ersten 30 Sekunden (die genauen Start- und Endzeiten siehst du beim Ziehen, und du kannst sie präzise eintippen), stelle den Modus auf „Auswahl löschen“ und exportiere.',
        },
        {
          q: 'Bleibt die MP3-Qualität erhalten?',
          a: 'Der Schnitt nach WAV bleibt bitgenau. Der Export als MP3 kodiert einmal neu mit der Bitrate, die du wählst — 320 kbps ist für praktisch alle transparent.',
        },
        {
          q: 'Muss ich etwas installieren?',
          a: 'Nein. Dieser MP3-Cutter ist eine Web-App, die in deinem Browser-Tab läuft. Es gibt nichts zu installieren und kein Konto anzulegen.',
        },
        {
          q: 'Wohin gehen meine Dateien?',
          a: 'Nirgendwohin. Die Datei wird von deinem Browser von der Festplatte gelesen und im Speicher geschnitten. Kein Upload, keine Cloud-Kopie, keine Aufbewahrung.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Den markierten Teil behalten oder löschen',
          paragraphs: [
            'Ziehe über die Wellenform, um einen Abschnitt zu markieren. Die Zeiten aktualisieren sich beim Ziehen, und du kannst Start und Ende eintippen, wenn der Zeiger nicht genau genug ist.',
            'Die beiden Modi machen das Gegenteil.',
          ],
          bullets: [
            'Auswahl behalten: die Datei, die du speicherst, ist nur der markierte Abschnitt. Der Refrain, der Drop oder die eine Antwort aus einer längeren Aufnahme.',
            'Auswahl löschen: die Datei, die du speicherst, ist alles außer diesem Abschnitt. So entfernst du die ersten 30 Sekunden, ein Intro oder einen Werbespot.',
          ],
        },
        {
          heading: 'Eine MP3 schneiden oder eine Aufnahme trimmen',
          paragraphs: [
            'Diese Seite ist dafür da, einen Song oder eine MP3 auf einen Abschnitt zu kürzen. Der Editor nimmt auch die meisten anderen Audio- und Videodateien, und das Ergebnis ist eine neue MP3 oder ein WAV.',
            'Der Audio-Trimmer macht denselben Schnitt, gedacht für Podcasts und Sprachnotizen, bei denen du einen mittleren Teil behältst. Nutze diese Seite, um eine MP3 zu schneiden. Nutze den Trimmer, wenn die Datei kein Song ist.',
          ],
        },
        {
          heading: 'Was der Schnitt mit dem Klang macht',
          paragraphs: [
            'Als WAV gespeichert bleiben die gewählten Samples, ohne einen extra verlustbehafteten Schritt. Als MP3 gespeichert wird einmal kodiert, mit der Bitrate, die du wählst. 320 kbps ist die Einstellung, wenn der Schnitt vom Original kaum zu unterscheiden sein soll. 192 kbps reichen für Sprache.',
            'Die Datei wird dekodiert, der Abschnitt genommen und der Export neu kodiert. Eine Kodierung mit hoher Bitrate ist der praktische saubere Schnitt für einen Song, den du anhören willst. Wenn du weiter bearbeitest, exportiere WAV.',
          ],
        },
        {
          heading: 'Was dieser Cutter nicht tut',
          paragraphs: [
            'Er schneidet eine Datei. Er legt keine Playlist mit Überblendung an und stapelt keine Spuren übereinander.',
          ],
          bullets: [
            'Mehrere Songs zu einer Datei verbinden ist der Audio-Joiner.',
            'Ein Clip unter 40 Sekunden, gespeichert als iPhone-Klingelton, ist der Klingelton-Ersteller.',
            'Titel, Künstler und Cover sind der MP3-Tag-Editor, nachdem du den Schnitt hast.',
          ],
        },
      ],
      dropHint: 'MP3-Datei ablegen oder klicken zum Auswählen',
      exportLabel: 'Schneiden und laden',
    },
    'mp3-editor': {
      cardLine: 'Schnelle Schnitte in einem Tab: schneiden, faden, rückwärts, Tempo und Normalisieren.',
      name: 'MP3-Editor',
      shortName: 'MP3-Editor',
      title: 'MP3-Editor – Schneiden, Blenden, Tempo',
      description:
        'In einem Tab schneiden, blenden und das Tempo ändern. Die Originaldatei bleibt. Das Tempo zieht die Tonhöhe mit.',
      h1: 'MP3-Editor – Schneiden, blenden und Tempo ändern',
      heroAlt: 'Eine MP3 schneiden, ein- und ausblenden, rückwärts abspielen und das Tempo ändern',
      subtitle: 'Schneiden, blenden, rückwärts abspielen und die Geschwindigkeit ändern — alles in einem Browser-Tab.',
      intro:
        'Ein kompakter Audio-Editor für kurze Bearbeitungen: Abschnitte herausschneiden, ein- und ausblenden, lauter oder leiser machen, die Geschwindigkeit hoch- oder runtersetzen und rückwärts abspielen. Jede Bearbeitung wird beim Export auf deinem Gerät angewendet — die Originaldatei auf der Festplatte bleibt unangetastet.',
      usesHeading: 'Edits, die in einem Tab bleiben',
      uses: [
        'Schneide die Datei und blende die neuen Kanten ein, damit der Schnitt nicht klickt.',
        'Beschleunige oder kehre einen Abschnitt um, ohne zwischen Tools zu exportieren.',
        'Heb eine leise MP3 im selben Durchgang an, mit Lautstärke oder Normalisieren.',
      ],
      howTo: [
        {
          name: 'Datei öffnen',
          text: 'Lege eine MP3, WAV, M4A oder eine andere Audiodatei auf den Editor. Sie wird sofort auf deinem Gerät dekodiert.',
        },
        {
          name: 'Bearbeiten',
          text: 'Wähle einen Bereich zum Behalten oder Löschen und öffne dann Anpassen, um Blenden hinzuzufügen, die Lautstärke zu ändern, die Geschwindigkeit von 0,5× bis 2× zu stellen oder den Titel rückwärts abzuspielen.',
        },
        {
          name: 'Ergebnis exportieren',
          text: 'Speichere deine Bearbeitung als MP3 mit bis zu 320 kbps oder als verlustfreies WAV. Die Bearbeitung wird offline in deinem Browser gerendert, bevor der Download startet.',
        },
      ],
      faqs: [
        {
          q: 'Was kann dieser MP3-Editor?',
          a: 'Er deckt die häufigsten schnellen Bearbeitungen ab: Kürzen und Schneiden, Ein- und Ausblenden, Lautstärke, Geschwindigkeit von 0,5× bis 2× und Rückwärts. Für Mehrspuraufnahmen oder aufwendige Produktion ist eine DAW wie Audacity immer noch das bessere Werkzeug — dieses hier ist für schnelle, private Bearbeitungen im Browser.',
        },
        {
          q: 'Sind meine Bearbeitungen destruktiv?',
          a: 'Nein. Deine Originaldatei bleibt auf der Festplatte genau so, wie sie ist. Alle Bearbeitungen liegen als Einstellungen im Editor und werden erst beim Export in eine neue Datei gerendert.',
        },
        {
          q: 'Wie wirkt sich die Geschwindigkeitsänderung auf die Tonhöhe aus?',
          a: 'Geschwindigkeit und Tonhöhe bewegen sich zusammen, wie eine Schallplatte, die schneller oder langsamer läuft: bei 2× spielt das Audio etwa eine Oktave höher, bei 0,5× etwa eine Oktave tiefer. Nimm kleine Schritte für feine Änderungen. Wenn du die Geschwindigkeit ändern und die ursprüngliche Tonhöhe behalten willst, exportiere zuerst und lass die Datei durch ein spezielles Time-Stretch-Tool laufen.',
        },
        {
          q: 'Kann ich eine Änderung rückgängig machen?',
          a: 'Ja. Drücke Ctrl+Z (Cmd+Z auf dem Mac), um durch deine letzten Bearbeitungen zurückzugehen, oder klicke auf Von vorn, um den ursprünglichen Dateizustand neu zu laden.',
        },
        {
          q: 'Ist es sicher für vertrauliche Aufnahmen?',
          a: 'Ja. Audio wird lokal mit der Web Audio API dekodiert und gerendert — es wird nie über das Netzwerk übertragen. Damit eignet es sich für Interviews und anderes vertrauliches Material.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Was dieser Editor wirklich ändert',
          paragraphs: [
            'Diese Seite ist der allgemeine MP3-Editor: einen Abschnitt schneiden, die Enden ein- und ausblenden, Lautstärke oder Tempo ändern oder die Datei umkehren, und dann eine neue MP3 exportieren. Die Datei, die du abgelegt hast, wird nicht überschrieben.',
            'Tempo verschiebt hier die Tonhöhe mit. Wenn du nur eine höhere oder tiefere Stimme bei gleicher Länge willst, nimm den Tonhöhen-Regler. Wenn die Datei nur kleiner werden soll, nimm den Audio-Kompressor.',
          ],
        },
        {
          heading: 'Wann eine speziellere Seite besser ist',
          paragraphs: [
            'Der Editor passt, wenn der Auftrag Schnitte und Pegeländerungen mischt. Für eine einzelne Aufgabe gibt es einen kürzeren Weg:',
          ],
          bullets: [
            'Ein Song, ein Refrain soll bleiben: MP3 schneiden ist dafür geschrieben.',
            'Podcast oder Sprachnotiz, die Enden kürzen: Audio kürzen.',
            'Nur Titel, Künstler oder Cover: der MP3-Tag-Editor kopiert die Audiodaten unverändert.',
          ],
        },
        {
          heading: 'Export und Rückgängig',
          paragraphs: [
            'Der Export schreibt eine neue MP3. WAV steht ebenfalls im Formatmenü, wenn du eine verlustfreie Kopie für ein anderes Programm brauchst.',
            'Strg+Z (Cmd+Z am Mac) geht die letzten Änderungen zurück. Zurücksetzen lädt die abgelegte Datei neu. Die Sitzung endet mit dem Tab, weil nichts auf einem Server liegt.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'ringtone-maker': {
      cardLine: 'Mach die eingängigsten 30 Sekunden eines Songs zum iPhone- oder Android-Klingelton.',
      name: 'Klingelton erstellen',
      shortName: 'Klingelton',
      title: 'Klingelton erstellen online — aus jedem Song, kostenlos',
      description:
        'Aus jedem Song ein Klingelton: die besten 40 Sekunden wählen, Blende dazu, als M4R oder MP3 exportieren — kostenlos, ohne Anmeldung.',
      h1: 'Kostenloser Online-Klingelton-Ersteller — Aus einem Song einen iPhone-Klingelton machen',
      heroAlt: 'Bis zu 40 Sekunden eines Songs als M4R oder MP3 speichern',
      subtitle: 'Nimm den besten Teil eines Songs und speichere ihn als Klingelton — in unter einer Minute.',
      intro:
        'Wähle den Hook, den Drop oder das Intro deines Lieblingstitels und mach daraus einen Klingelton. Deine Auswahl bleibt innerhalb der klassischen Klingeltonlänge von 40 Sekunden, auf Wunsch kommt eine Blende dazu, und der Export geht direkt aufs Handy — M4R fürs iPhone, MP3 für alles andere.',
      usesHeading: 'Klingeltöne, die man wirklich setzt',
      uses: [
        'Nimm den Hook eines Songs und bleib innerhalb der 40-Sekunden-Grenze.',
        'Blende das Ende aus, damit der Ton nicht mitten in der Phrase abbricht.',
        'Exportiere M4R fürs iPhone, oder MP3, wenn du nur den Clip brauchst.',
      ],
      howTo: [
        {
          name: 'Song hinzufügen',
          text: 'Ziehe eine MP3, M4A, WAV oder eine andere Audiodatei hierher. Sie verlässt dein Gerät nie.',
        },
        {
          name: 'Deinen Moment wählen',
          text: 'Ziehe über die Wellenform und wähle bis zu 40 Sekunden — die passende Länge für einen Klingelton. Die Auswahl wird automatisch begrenzt, du musst nicht schätzen.',
        },
        {
          name: 'Exportieren und übertragen',
          text: 'Füge optional eine Blende hinzu und exportiere. Wähle M4R fürs iPhone (Chrome, Edge oder Safari) oder MP3 für Android und jedes andere Handy.',
        },
      ],
      faqs: [
        {
          q: 'Wie lang sollte ein Klingelton sein?',
          a: 'Die meisten Handys klingeln 20–40 Sekunden, bevor die Mailbox rangeht, und kürzere Klingeltöne kommen schneller auf den Punkt. Die Auswahl wird auf 40 Sekunden begrenzt, die klassische Klingeltonlänge.',
        },
        {
          q: 'Wie verwende ich den Klingelton auf dem iPhone?',
          a: 'Wähle vor dem Export M4R im Formatmenü — Chrome, Edge und Safari 17+ kodieren ihn direkt auf deinem Gerät, und die heruntergeladene Datei synchronisierst du über Finder (oder iTunes unter Windows) auf dein iPhone. In Browsern ohne AAC-Kodierung, etwa Firefox, exportiere stattdessen MP3 und wandle sie mit GarageBand um: importiere die Datei und teile sie dann als Klingelton.',
        },
        {
          q: 'Wie stelle ich ihn auf Android ein?',
          a: 'Lege die exportierte MP3 auf dein Handy, öffne dann Einstellungen → Ton → Klingelton und wähle die Datei, oder setze sie direkt über die Dateien-App. Keine Umwandlung nötig.',
        },
        {
          q: 'Klingelt er in der Schleife unschön?',
          a: 'Füge auf der Seite eine kurze Ausblendung hinzu — dann klingt der Sprung zurück zum Anfang natürlich, statt mitten in der Note abzubrechen. Denselben Clip 2- bis 16-mal in eine längere Datei zu schreiben ist der Audio-Looper. Diese Seite bleibt bei 40 Sekunden.',
        },
        {
          q: 'Gibt es ein Wasserzeichen oder ein Limit?',
          a: 'Kein Wasserzeichen, keine Anmeldung, kein Tageslimit. Der Klingelton wird auf deinem eigenen Gerät gerendert und direkt aus dem Browser heruntergeladen.',
        },
      ],
      sections: [
        {
          heading: 'Wie aus einem Song ein Klingelton wird',
          paragraphs: [
            'Ein Klingelton ist ein kurzer Ausschnitt, nicht der ganze Song. Markiere den Teil, und der Export wird auf 40 Sekunden begrenzt, damit er in den Klingelton-Platz passt.',
            'Setze ein kurzes Ein- und Ausblenden, wenn der Schnitt sonst klickt. Der Fade formt nur diese Kanten. Er macht einen leisen Song nicht lauter.',
          ],
        },
        {
          heading: 'Welche Datei das Telefon annimmt',
          paragraphs: [
            'Wähle das Format vor dem Export. Das Menü folgt dem, was Telefone wirklich installieren:',
          ],
          bullets: [
            'M4R fürs iPhone. Chrome, Edge und Safari 17+ kodieren das auf dem Gerät. Die Datei synchronisierst du mit dem Finder, unter Windows mit iTunes.',
            'Firefox kodiert kein AAC. Exportiere dort MP3 und mach den Klingelton in GarageBand.',
            'MP3 mit 320, 192 oder 128 kbps, oder WAV, wenn das Telefon das statt M4R nimmt.',
          ],
        },
        {
          heading: 'Was diese Seite nicht tut',
          paragraphs: [
            'Sie lädt den Song nicht hoch und installiert den Ton nicht auf dem Telefon. Du lädst eine Datei herunter und überträgst sie so, wie das Telefon es schon erwartet.',
            'Einen langen Song zum Hören kürzen, nicht als Klingelton, gehört zu MP3 schneiden. Diese Seite ist nicht auf 40 Sekunden begrenzt.',
          ],
        },
      ],
      dropHint: 'Song ablegen oder klicken zum Auswählen',
      exportLabel: 'Klingelton erstellen',
    },
    'audio-joiner': {
      cardLine: 'Füge Sprachmemos, Songs oder Podcast-Folgen zu einer durchgehenden Datei zusammen.',
      name: 'Audio-Joiner',
      shortName: 'Audio-Joiner',
      title: 'MP3 zusammenfügen – der Reihe nach, mit Überblendung',
      description:
        'Songs, Kapitel oder Sprachnotizen der Reihe nach in eine Datei legen. Die Überblendung auf null ist ein harter Schnitt. Nichts wird hochgeladen.',
      h1: 'MP3 zusammenfügen – eine Datei nach der anderen',
      heroAlt: 'Songs und Sprachnotizen nacheinander aneinanderfügen',
      subtitle: 'Füge Songs und Audiodateien zu einem Titel zusammen — in beliebiger Reihenfolge, in Sekunden.',
      intro:
        'Kombiniere mehrere Songs, Podcast-Folgen oder Sprachaufnahmen zu einer einzigen Datei. Nimm so viele Titel, wie du willst, sortiere sie um und blende auf Wunsch Anfang und Ende. Das Zusammenfügen passiert auf deinem Gerät — auch große Sammlungen sind sofort fertig und bleiben privat.',
      usesHeading: 'Spuren, die sich zu verbinden lohnen',
      uses: [
        'Setze eine Sprachnotiz vor einen Song, in der Reihenfolge, die du willst.',
        'Füge Kapitelaufnahmen zu einer Datei, für einen Player ohne Playlists.',
        'Crossfade an den Stößen, damit aufeinanderfolgende Clips nicht knallen.',
      ],
      howTo: [
        {
          name: 'Titel hinzufügen',
          text: 'Ziehe zwei oder mehr Audiodateien hierher oder klicke, um mehrere auf einmal zu wählen. Gemischte Formate sind kein Problem — sie werden automatisch angeglichen.',
        },
        {
          name: 'Reihenfolge festlegen',
          text: 'Sortiere die Titel mit den Pfeilen um oder entferne einen, wenn du es dir anders überlegst. Die Gesamtdauer aktualisiert sich dabei.',
        },
        {
          name: 'Zusammenfügen und speichern',
          text: 'Füge optionale Blenden hinzu, klicke auf Zusammenfügen & exportieren und lade die Datei als MP3 oder WAV herunter.',
        },
      ],
      faqs: [
        {
          q: 'Kann ich verschiedene Audioformate zusammenfügen?',
          a: 'Ja. Die Dateien werden zuerst dekodiert und auf eine gemeinsame Abtastrate gebracht, deshalb kannst du eine MP3 mit einer WAV und einer M4A in einem Durchgang verbinden. Das Ausgabeformat wählst du selbst.',
        },
        {
          q: 'Wie viele Dateien kann ich verbinden?',
          a: 'Es gibt kein festes Limit — Dutzende Titel funktionieren problemlos. Die praktische Obergrenze ist der Speicher deines Geräts, weil alles lokal verarbeitet wird.',
        },
        {
          q: 'Kann ich die Reihenfolge der Songs ändern?',
          a: 'Ja. Nutze die Pfeile nach oben und unten neben jedem Titel, um die Reihenfolge vor dem Zusammenfügen zu ändern. Die Vorschaudauer aktualisiert sich sofort.',
        },
        {
          q: 'Überblenden die Titel ineinander?',
          a: 'Ja. Stelle den Überblendungsregler so ein, dass das Ende jedes Titels mit dem Anfang des nächsten überlappt — beim Zusammenfügen entsteht eine weiche Blende zwischen den Nachbarn. Stell ihn auf null für einen harten Schnitt ohne Lücke.',
        },
        {
          q: 'Ist die Qualität der zusammengefügten Datei gut?',
          a: 'Zusammenfügen nach WAV ist verlustfrei — das Audio wird nicht erneut komprimiert. Der MP3-Export kodiert einmal neu mit bis zu 320 kbps, was für fast alle Hörer transparent ist.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Dateien hinzufügen, dann mit Nach oben und Nach unten sortieren. Die Knöpfe gehen mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Mehrere lange Dateien brauchen mehr Speicher, deshalb ist der Rechner bei einem langen Stapel ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Zusammenfügen heißt Datei hinter Datei',
          paragraphs: [
            'Der Audio-Joiner legt ganze Dateien hintereinander: Song, dann Sprachnotiz, dann das nächste Kapitel. Du kannst die Liste umsortieren und einen Überblendung setzen, damit das Ende einer Datei den Anfang der nächsten überlappt.',
            'Stell die Überblendung auf null für einen harten Schnitt ohne Lücke. Gemischte Formate werden dekodiert und in einen Export geschrieben. Das ist kein Mixer: die Spuren spielen nicht gleichzeitig.',
          ],
        },
        {
          heading: 'Wofür diese Seite da ist',
          paragraphs: [
            'Nimm sie, wenn das Ergebnis eine einzelne Datei sein soll, die ein Player ohne Playlist öffnet:',
          ],
          bullets: [
            'Eine Sprachnotiz vor einem Song, in der Reihenfolge, die du willst.',
            'Kapitelaufnahmen zusammen, für einen Player ohne Playlists.',
            'Clips direkt nacheinander, mit kurzer Überblendung, damit die Übergänge nicht knacken.',
          ],
        },
        {
          heading: 'Wenn du Ebenen brauchst',
          paragraphs: [
            'Sprache über Musik, Pegel und Pan pro Clip, Stumm und Solo: das ist der Mehrspur-Audioeditor, bis zu acht Spuren. Der Joiner senkt die Musik nicht unter die Sprache.',
            'Es gibt keine feste Dateizahl. Die Grenze ist der Speicher des Geräts, weil der Merge im Browser bleibt. Nichts wird hochgeladen.',
          ],
        },
      ],
      dropHint: 'Zwei oder mehr Audiodateien ablegen oder klicken zum Auswählen',
    },
    'wav-to-mp3': {
      cardLine: 'Schwere WAV-Aufnahmen mit gewählter Bitrate zu teilbaren MP3s verkleinern.',
      name: 'WAV-zu-MP3-Konverter',
      shortName: 'WAV in MP3',
      title: 'WAV in MP3 umwandeln – online kostenlos, 320 kbps',
      description:
        'Wandle WAV im Browser in MP3 um — 128, 192 oder 320 kbps. Kostenlos, ohne Anmeldung; dein Audio wird lokal umgewandelt, nie hochgeladen.',
      h1: 'WAV in MP3 umwandeln – kostenlos online',
      heroAlt: 'Eine WAV-Datei in MP3 mit 320 kbps umwandeln',
      subtitle: 'Wandle WAV-Dateien in Sekunden in MP3 um — direkt im Browser, nichts wird hochgeladen.',
      intro:
        'Mach aus schweren WAV-Aufnahmen kompakte MP3s, ohne etwas zu installieren oder dein Audio an einen Server zu schicken. Lege die Datei ab, wähle eine Bitrate — 320 kbps für Musik, 128 kbps für Sprache — und die Umwandlung läuft auf deinem eigenen Gerät, meist in ein paar Sekunden.',
      usesHeading: 'WAV-Dateien, die sich zu konvertieren lohnen',
      uses: [
        'Schrumpf eine Studio- oder Field-Aufnahme, bis sie klein genug zum Senden ist.',
        'Mach aus einem verlustfreien Export eine 192- oder 320-kbps-MP3 fürs Alltagshören.',
        'Erst konvertieren, dann schneiden. Eine WAV ist zu groß, um sie zweimal herumzuschieben.',
      ],
      howTo: [
        {
          name: 'WAV ablegen',
          text: 'Ziehe eine .wav-Datei hierher oder klicke zum Auswählen. Andere Audioformate (M4A, FLAC, OGG) werden genauso umgewandelt. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'Bitrate wählen',
          text: '320 kbps ist für fast alle vom Original nicht zu unterscheiden; 192 kbps ist eine gute Balance; 128 kbps hält Sprachaufnahmen klein.',
        },
        {
          name: 'Umwandeln und herunterladen',
          text: 'Klicke auf In MP3 umwandeln. Der Encoder läuft in deinem Browser, und die MP3 landet direkt auf deinem Gerät.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine WAV umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Geht bei WAV in MP3 Qualität verloren?',
          a: 'MP3 ist verlustbehaftet, deshalb wird ein Teil der Information verworfen — bei 320 kbps kann in einem Blindtest aber praktisch niemand den Unterschied zur WAV hören. Wenn du gar keinen Verlust willst, behalte die WAV; dieser Konverter ist dafür da, Platz zu sparen und überall abspielbar zu sein.',
        },
        {
          q: 'Welche Bitrate soll ich wählen?',
          a: 'Nimm 320 kbps für Musik, die du behältst, 192 kbps für alltägliches Hören und Teilen, und 128 kbps für Sprachnotizen, Podcasts und Vorlesungsaufnahmen — Sprache braucht weit weniger als Musik.',
        },
        {
          q: 'Wie viel kleiner wird die MP3?',
          a: 'Ungefähr ein Zehntel: aus einer 50-MB-WAV werden bei 192 kbps etwa 4–5 MB, bei 320 kbps rund 11 MB. Die genauen Zahlen hängen von Länge und Abtastrate ab.',
        },
        {
          q: 'Bleiben WAV-Tags und Cover erhalten?',
          a: 'Derzeit nicht — die MP3 wird ohne Metadaten geschrieben, Songtitel, Interpret und Cover werden also nicht übernommen. Die Tags kannst du danach in jedem Tag-Editor wieder eintragen.',
        },
        {
          q: 'Wird die WAV-Datei irgendwo hochgeladen?',
          a: 'Nein. Die Datei wird in deinem Browser dekodiert, von einer Bibliothek, die mit dieser Seite ausgeliefert wird, nach MP3 kodiert und zurück auf deine Festplatte gespeichert. Das Audio selbst verlässt dein Gerät nie.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Datei wählen, die Umwandlung bleibt in diesem Tab. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Welche Bitrate du nehmen solltest',
          paragraphs: [
            'MP3 wirft einen Teil der WAV weg. Die Bitrate ist, wie viel übrig bleibt.',
          ],
          bullets: [
            '320 kbps: Musik, die du behalten willst. Bei dieser Rate können die meisten das MP3 nicht von der WAV unterscheiden.',
            '192 kbps: Alltagshören und Dateien, die du verschickst.',
            '128 kbps: Sprachnotizen, Podcasts und Vorlesungen. Sprache braucht weniger als Musik.',
          ],
        },
        {
          heading: 'Wie viel kleiner die MP3 wird',
          paragraphs: [
            'Eine WAV speichert jede Probe. Eine MP3 speichert eine komprimierte Fassung dessen, was du hören kannst. Aus einer 50-MB-WAV werden bei 192 kbps etwa 4–5 MB, bei 320 kbps rund 11 MB. Die genaue Größe folgt Länge und Abtastrate.',
            'Wenn du das Original noch brauchst, behalte die WAV. Diese Seite ist dafür da, dass die Kopie, die du teilst, auf Handy, im Auto und auf einem alten Lautsprecher läuft, und dass die Datei klein genug zum Senden ist.',
          ],
        },
        {
          heading: 'Titel, Interpret und Cover werden nicht kopiert',
          paragraphs: [
            'Die MP3 wird ohne die Metadaten der WAV geschrieben. Songtitel, Interpret und Cover kommen nicht mit. Trag sie danach im MP3-Tag-Editor ein, wenn der Player sonst einen leeren Namen zeigt.',
            'M4A-, FLAC- und OGG-Dateien, die du hier ablegst, werden genauso umgewandelt. FLAC hat eine eigene Seite, wenn das dein Ausgangsformat ist. Diese Seite ist die für WAV.',
          ],
        },
        {
          heading: 'Erst umwandeln, dann kürzen',
          paragraphs: [
            'Diese Seite wandelt die ganze Datei um. Sie schneidet keinen Abschnitt aus der WAV.',
          ],
          bullets: [
            'Du brauchst nur eine Minute einer langen Aufnahme: umwandeln, dann den Audio-Trimmer öffnen.',
            'Die Datei ist schon eine MP3 und soll nur kleiner werden: der Audio-Kompressor, nicht diese Seite.',
            'Du bearbeitest nach der Umwandlung weiter: 320 kbps, oder behalte die WAV und bearbeite die.',
          ],
        },
      ],
      dropHint: 'WAV-Dateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'flac-to-mp3': {
      cardLine: 'Wandle verlustfreie FLAC-Dateien in MP3 um — für Player und Apps ohne FLAC-Support.',
      name: 'FLAC-zu-MP3-Konverter',
      shortName: 'FLAC zu MP3',
      title: 'FLAC in MP3 umwandeln — online kostenlos, 320 kbps',
      description:
        'Wandle FLAC im Browser in MP3 um — 128, 192 oder 320 kbps. Kostenlos, ohne Anmeldung: deine Musik wird lokal umgewandelt und nie hochgeladen.',
      h1: 'Kostenloser Online-FLAC-zu-MP3-Konverter — FLAC in MP3 umwandeln',
      heroAlt: 'Eine FLAC-Datei in MP3 mit 320 kbps umwandeln',
      subtitle: 'FLAC-Dateien in Sekunden zu MP3 umwandeln — direkt im Browser, ohne Upload.',
      intro:
        'FLAC klingt perfekt und belegt halbe Festplatten als Beweis. Mach aus deiner verlustfreien Bibliothek kompakte MP3s, die im Autoradio, auf Bluetooth-Boxen und älteren Geräten laufen — Dateien ablegen, Bitrate wählen, und die Umwandlung läuft auf deinem eigenen Gerät. Ein 25-MB-FLAC-Track wird bei 320 kbps in ein paar Sekunden zum 12-MB-MP3.',
      usesHeading: 'FLAC-Dateien, die eine Umwandlung wert sind',
      uses: [
        'Damit die verlustfreie Bibliothek im Auto und auf alten Geräten läuft.',
        'Ein Album verkleinern, bevor es auf eine Reise ohne WLAN oder in einen geteilten Ordner geht.',
        'Erst umwandeln, dann die Songs kürzen, die du wirklich öfter hörst.',
      ],
      howTo: [
        {
          name: 'FLAC ablegen',
          text: 'Zieh eine .flac-Datei auf die Seite oder klicke zum Auswählen. Andere verlustfreie Formate werden genauso umgewandelt. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'Bitrate wählen',
          text: '320 kbps ist für fast jeden transparent; 192 kbps sind der Alltagskompromiss; 128 kbps hält Hörbücher und Podcasts klein.',
        },
        {
          name: 'Umwandeln und herunterladen',
          text: 'Klick auf In MP3 umwandeln. Der Encoder läuft in deinem Browser, und die MP3 landet direkt auf deinem Gerät.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine FLAC umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Verliert FLAC zu MP3 an Qualität?',
          a: 'MP3 ist verlustbehaftet, es werden also Informationen weggelassen — bei 320 kbps kann es aber praktisch niemand im Blindtest vom FLAC unterscheiden. Behalte das FLAC als Archiv und behandle das MP3 als die tragbare Kopie.',
        },
        {
          q: 'Welche Bitrate soll ich wählen?',
          a: '320 kbps für Musik, die du behältst, 192 kbps für den Alltag und zum Teilen, 128 kbps für Hörbücher, Podcasts und Vorlesungsaufnahmen — Sprache braucht viel weniger als Musik.',
        },
        {
          q: 'Wie viel kleiner wird die MP3?',
          a: 'Ein typischer Fünf-Minuten-Song fällt von rund 25 MB (FLAC) auf etwa 12 MB bei 320 kbps, 7 MB bei 192 und 5 MB bei 128. Die genauen Zahlen hängen von Länge und Samplerate ab.',
        },
        {
          q: 'Werden FLAC-Tags und Cover übernommen?',
          a: 'Derzeit nicht — die MP3 wird ohne Metadaten geschrieben, Titel, Interpret und Cover kommen nicht mit. Du kannst sie danach mit jedem Tag-Editor nachtragen.',
        },
        {
          q: 'Wird mein FLAC irgendwo hochgeladen?',
          a: 'Nein. Die Datei wird in deinem Browser dekodiert und von einer Bibliothek, die mit dieser Seite ausgeliefert wird, zu MP3 encodiert. Das Audio verlässt dein Gerät nie.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Datei wählen, die Umwandlung bleibt in diesem Tab. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Warum FLAC nach MP3',
          paragraphs: [
            'FLAC ist verlustfrei und groß. MP3 öffnen die meisten Telefone, Autos und älteren Player. Eine 25-MB-FLAC landet bei 320 kbps oft nahe 12 MB, bei 192 oder 128 noch kleiner.',
            'Die Umwandlung dekodiert die FLAC und kodiert eine neue MP3. Die bitgenaue Datei bleibt nicht erhalten. Wenn du das verlustfreie Master noch brauchst, behalte die FLAC.',
          ],
        },
        {
          heading: 'Bitrate und was wegfällt',
          paragraphs: [
            'Das Formatmenü ist nur MP3, mit drei Bitraten:',
          ],
          bullets: [
            '320 kbps, wenn die Datei beim Hören nah an der FLAC bleiben soll.',
            '192 kbps für Sprache oder eine kleinere Kopie zum Streamen.',
            '128 kbps, wenn die Größe mehr zählt als die obere Oktave.',
          ],
        },
        {
          heading: 'Tags, Cover und der nächste Schnitt',
          paragraphs: [
            'Titel, Künstler und Cover werden nicht kopiert. Die MP3 wird ohne Metadaten geschrieben. Setze sie danach mit dem MP3-Tag-Editor wieder.',
            'Kürze nach der Umwandlung, nicht davor, wenn der Schnitt in der kleineren Datei sitzen soll. WAV in MP3 ist die Nachbarseite, wenn die Quelle WAV ist, nicht FLAC.',
          ],
        },
      ],
      dropHint: 'FLAC-Dateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'mp3-to-wav': {
      cardLine: 'Wandle MP3 in WAV um — zum Bearbeiten, Transkribieren oder genauen Hinhören.',
      name: 'MP3-zu-WAV-Konverter',
      shortName: 'MP3 zu WAV',
      title: 'MP3 in WAV umwandeln — online kostenlos',
      description:
        'Wandle MP3 im Browser in verlustfreies WAV um — zum Bearbeiten, Archivieren und für Apps, die PCM wollen. Kostenlos, ohne Anmeldung.',
      h1: 'Kostenloser Online-MP3-zu-WAV-Konverter — Eine MP3 in eine WAV-Datei umwandeln',
      heroAlt: 'Eine MP3 in eine unkomprimierte WAV-Datei dekodieren',
      subtitle: 'MP3 in sauberes PCM-Audio dekodieren, in Sekunden — direkt im Browser, ohne Upload.',
      intro:
        'MP3 in WAV umzuwandeln holt nicht zurück, was die Kompression entfernt hat — das kann kein Werkzeug. Du bekommst das dekodierte Audio als sauberes 16-Bit-PCM ohne weitere Verluste: der richtige Input für Audio-Editoren, Sampler und alles, was WAV verlangt, und der sicherste Startpunkt, wenn die Datei noch bearbeitet wird. Das Dekodieren passiert auf deinem Gerät, meist in einer Sekunde.',
      usesHeading: 'Gründe für den Weg zu WAV',
      uses: [
        'Einer MP3 an einen Editor, eine DAW oder App übergeben, die nur WAV akzeptiert.',
        'Generationsverluste stoppen: in WAV bearbeiten und erst am Ende einmal zu MP3 komprimieren.',
        'Eine dekodierte Kopie neben dem Original archivieren, bevor es weiterbearbeitet wird.',
      ],
      howTo: [
        {
          name: 'MP3 ablegen',
          text: 'Zieh eine .mp3-Datei auf die Seite oder klicke zum Auswählen. Andere komprimierte Formate werden genauso dekodiert. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'WAV ausgewählt lassen',
          text: 'Das Exportformat ist auf verlustfreies WAV festgelegt — 16-Bit-PCM mit der ursprünglichen Samplerate der Datei.',
        },
        {
          name: 'Umwandeln und herunterladen',
          text: 'Klick auf In WAV umwandeln. Das dekodierte Audio wird lokal geschrieben und der Download startet sofort.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine MP3 nach WAV umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Wird MP3 zu WAV besser klingen?',
          a: 'Nein — und misstraue jedem Konverter, der das verspricht. Was der Encoder weggeworfen hat, ist weg. Das WAV enthält exakt das, was die MP3 dekodiert, und genau deshalb ist es das richtige Format zum Weiterbearbeiten: keine zusätzliche verlustbehaftete Generation.',
        },
        {
          q: 'Wozu dann überhaupt zu WAV?',
          a: 'Zum Bearbeiten und Archivieren. WAV ist das Format, das Audio-Editoren, Sampler und CD-Brennprogramme erwarten, und ein verlustfreier Master verhindert, dass sich Artefakte mit jeder Bearbeitung stapeln. Der ehrliche Workflow: zu WAV dekodieren, bearbeiten, ganz am Ende einmal zu MP3 exportieren.',
        },
        {
          q: 'Welche MP3-Bitrate passt?',
          a: 'Alle — das Dekodieren ist exakt für jede gültige MP3, von 64 bis 320 kbps. Das WAV enthält einfach, was in der MP3 steckt, mit ihrer ursprünglichen Samplerate.',
        },
        {
          q: 'Wie groß wird die WAV?',
          a: 'Etwa das Zehnfache der MP3. Ein dreiminütiger Song bei 44,1 kHz Stereo wird rund 30 MB als 16-Bit-PCM — das ist die echte Größe unkomprimierten Audios, keine Konverter-Schwäche.',
        },
        {
          q: 'Wird meine MP3 irgendwo hochgeladen?',
          a: 'Nein. Die Datei wird in deinem Browser dekodiert und lokal als WAV geschrieben. Nichts verlässt dein Gerät.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Datei wählen, die Umwandlung bleibt in diesem Tab. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'MP3 nach WAV holt nicht zurück, was MP3 weggeworfen hat',
          paragraphs: [
            'Die Seite dekodiert die MP3 in 16-Bit-PCM-WAV. Editoren und DAWs, die MP3 ablehnen, können diese WAV öffnen. Die Höhen, die bei der ersten Kodierung fehlten, kommen nicht zurück.',
            'Nimm sie, wenn der nächste Schritt keine weitere MP3-Generation dazulegen soll: schneide, blende oder mische die WAV, und kodiere einmal am Ende.',
          ],
        },
        {
          heading: 'Wann die Umwandlung sich lohnt',
          paragraphs: [
            'Das Formatmenü exportiert nur WAV. Es passt in ein paar klaren Fällen:',
          ],
          bullets: [
            'Ein Programm oder ein Recorder, der nur WAV annimmt.',
            'Ein Schnitt, den du später einmal kodierst, damit nicht MP3 auf MP3 stapelt.',
            'Eine Übergabe an jemanden, der PCM wollte, nicht eine kleinere MP3.',
          ],
        },
        {
          heading: 'Größe und die andere Richtung',
          paragraphs: [
            'Die WAV ist viel größer als die MP3. Diese Größe ist unkomprimiertes PCM, kein neues Detail.',
            'Der umgekehrte Weg, WAV in MP3, ist eine andere Seite, und dort wählst du die Bitrate. Eine MP3 kleiner machen, ohne sie in WAV zu wandeln, ist der Audio-Kompressor.',
          ],
        },
      ],
      dropHint: 'MP3-Dateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In WAV umwandeln',
    },
    'compress-audio': {
      cardLine: 'Verkleinere große Audiodateien auf Zielgröße oder Bitrate — ohne hörbare Einbußen.',
      name: 'Audio-Kompressor',
      shortName: 'Kompressor',
      title: 'Audio komprimieren — MP3 & WAV verkleinern, online',
      description:
        'Verkleinere MP3-, WAV- und andere Audiodateien im Browser — niedrigere Bitrate wählen, anhören, herunterladen. Kostenlos, ohne Upload.',
      h1: 'Kostenloser Online-MP3-Kompressor — Eine MP3-Datei kleiner machen',
      heroAlt: 'Eine große WAV- oder MP3-Datei mit niedrigerer Bitrate neu kodieren',
      subtitle: 'Bitrate senken, Datei bleibt abspielbar — Audio im Browser um bis zu 90% verkleinern.',
      intro:
        'Audiodateien sind wegen ihrer Bitrate groß, und der ehrliche Weg, sie kleiner zu machen, ist eine Neukodierung mit niedrigerer Bitrate: ein 320-kbps-MP3 wird bei 128 kbps auf rund 40 % der Größe geschrumpft, eine schwere WAV wird als MP3 zum Zehntel. Ziel wählen, Vorschau anhören, exportieren — die Kodierung läuft auf deinem Gerät, selbst lange Aufnahmen sind in Sekunden fertig.',
      usesHeading: 'Dateien, die kleiner dürfen',
      uses: [
        'Eine Vorlesung oder Sprachnotiz unter die Größenbeschränkung von Mail oder Chat-App drücken.',
        'Aus einem WAV-Export kleine MP3s für einen schnellen Review-Link machen.',
        'Eine 320-kbps-Bibliothek für ein Handy mit mobilen Daten auf 128 kbps bringen.',
      ],
      howTo: [
        {
          name: 'Datei ablegen',
          text: 'Füg eine MP3-, WAV-, M4A- oder andere Audiodatei hinzu. Sie wird auf deinem Gerät dekodiert und nie hochgeladen. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'Zielgröße wählen',
          text: 'Niedrigere Bitrate, kleinere Datei: 192 kbps für Alltagsmusik, 128 kbps klingt für die meisten noch sauber, 64–96 kbps sind ideal für Sprache.',
        },
        {
          name: 'Anhören und exportieren',
          text: 'Hör dir die Vorschau an und speichere. Prüfe, ob Stimmen und Becken bei der gewählten Bitrate noch sauber klingen.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine Datei verkleinern?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Wie funktioniert die Audiokomprimierung hier?',
          a: 'Die Datei wird dekodiert und mit der gewählten Bitrate als MP3 neu kodiert. Die Größe skaliert mit der Bitrate: eine Minute Stereo sind etwa 2,4 MB bei 320 kbps, 1 MB bei 128 und 0,5 MB bei 64.',
        },
        {
          q: 'Welche Bitrate hält die Qualität?',
          a: '192 oder 320 kbps für Musik, die dir wichtig ist; 128 kbps zum nebenbei Hören — die meisten können 320 im Blindtest nicht zuverlässig erkennen. Sprache und Podcasts bleiben bis 64–96 kbps klar.',
        },
        {
          q: 'Kann Komprimieren die Qualität verschlechtern?',
          a: 'Ja, in einem Fall: eine bereits komprimierte MP3 mit viel niedrigerer Bitrate neu zu kodieren, stapelt eine zweite verlustbehaftete Generation auf die erste. Von WAV oder FLAC aus komprimieren ist sauberer — mit dem Original kannst du jederzeit eine andere Bitrate ausprobieren.',
        },
        {
          q: 'Wie klein kann ich gehen?',
          a: '64 kbps sind die praktische Untergrenze: rund 0,5 MB pro Minute. Sprache bleibt völlig klar; Musik beginnt dumpf und zischig zu klingen. Darunter machen sich dedizierte Codecs wie Opus besser als MP3.',
        },
        {
          q: 'Wird meine Datei irgendwo hochgeladen?',
          a: 'Nein. Dekodierung und Kodierung laufen innerhalb deines Browser-Tabs — du kannst nach dem Laden der Seite offline gehen, und die Komprimierung funktioniert weiter.',
        },
        {
          q: 'Gleicht das laute und leise Stellen an?',
          a: 'Nein. Diese Seite kodiert nur mit einer niedrigeren Bitrate neu, damit die Datei kleiner wird. Laute Spitzen senken und leise Wörter anheben macht der Pegelkompressor. Die Bitrate wählst du dort beim Export.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Datei wählen, die Umwandlung bleibt in diesem Tab. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Dieser Kompressor verkleinert die Datei, nicht die Dynamik',
          paragraphs: [
            'Der Audio-Kompressor kodiert mit einer niedrigeren MP3-Bitrate neu. Eine 320-kbps-Datei bei 128 kbps hat etwa 40 Prozent der Größe. Leise und laute Stellen bleiben im gleichen Verhältnis.',
            'Eine laute und eine leise Stimme anzugleichen ist der Pegelkompressor, eine andere Seite. Der macht die Datei nicht kleiner.',
          ],
        },
        {
          heading: 'Welche Bitrate',
          paragraphs: [
            'Das Menü geht von 320 bis 64 kbps. Wähle nach der Datei:',
          ],
          bullets: [
            '192 oder 320 kbps für Musik, die du noch genau hörst.',
            '128 kbps für Sprache, eine Sprachnotiz oder eine Kopie zum Verschicken.',
            '64 oder 96 kbps nur, wenn das Ziel winzig ist und Sprache reicht.',
          ],
        },
        {
          heading: 'Was eine zweite Kodierung kostet',
          paragraphs: [
            'Jeder Durchgang wirft etwas mehr weg. Ist die Datei schon 128 kbps, bringt 128 noch einmal nichts, und niedriger macht sie dumpfer.',
            'Tags und Cover gehören nicht zu dieser Verkleinerung. Ist die MP3 schon klein und du brauchst nur einen neuen Titel oder ein Cover, nimm den MP3-Tag-Editor. Der kopiert die Audiodaten unverändert.',
          ],
        },
      ],
      dropHint: 'Audiodateien ablegen oder klicken zum Auswählen',
      exportLabel: 'Komprimieren',
    },
    'bitrate-converter': {
      cardLine: 'Kodiere Audio neu als MP3 mit 64, 96, 128, 192 oder 320 kbps.',
      name: 'Bitrate ändern',
      shortName: 'Bitrate',
      title: 'Bitrate ändern — MP3 auf 64 bis 320 kbps',
      description:
        'Setze eine Audiodatei im Browser auf 64, 96, 128, 192 oder 320 kbps MP3. Eine höhere Zahl stellt kein Detail wieder her. Nichts wird hochgeladen.',
      h1: 'Bitrate ändern: ein MP3 auf 64–320 kbps setzen',
      heroAlt: 'Fünf Bitraten-Balken, der mittlere auf 192 kbps markiert',
      subtitle: 'Setze ein MP3 auf 64, 96, 128, 192 oder 320 kbps. Eine höhere Zahl stellt kein Detail wieder her.',
      intro:
        'Wähle die MP3-Bitrate und kodiere die Datei in diesem Tab neu. Das Menü startet bei 192 kbps. Eine Minute Stereo wiegt etwa 2,4 MB bei 320 kbps, 1,4 MB bei 192, 1 MB bei 128, 0,7 MB bei 96 und 0,5 MB bei 64. Eine höhere Zahl auf einer Datei, die schon verlustbehaftet ist, holt das fehlende Detail nicht zurück. Dekodieren und Kodieren bleiben im Browser.',
      usesHeading: 'Wofür diese Seite da ist',
      uses: [
        'Erfülle einen Auftrag, der 192 oder 128 kbps verlangt, und exportiere diese Datei.',
        'Mach aus einer WAV ein MP3 mit 320 kbps, der höchsten Rate auf dieser Seite.',
        'Geh von 320 kbps auf 128 kbps, etwa 40 % der Größe.',
      ],
      howTo: [
        { name: 'Datei hinzufügen', text: 'Lege eine Audiodatei ab, die dieser Browser dekodieren kann. Die Umwandlung bleibt im Tab. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.' },
        { name: 'Bitrate wählen', text: 'Öffne das Formatmenü. Es startet bei 192 kbps. Die anderen Raten sind 320, 128, 96 und 64.' },
        { name: 'MP3 exportieren', text: 'Die Datei wird mit der Rate kodiert, die du gewählt hast. Tags und Cover werden nicht übernommen.' },
      ],
      faqs: [
        { q: 'Kann ich die Bitrate von mehr als einer Datei ändern?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Klingt ein 128-kbps-MP3 bei 320 kbps besser?',
          a: 'Nein. Der Encoder behält nur, was die Quelle noch hat. Ein 128-kbps-MP3, das du noch einmal mit 320 kbps speicherst, ist eine größere Datei derselben Aufnahme. Starte von der WAV oder der Originalaufnahme, wenn du das Detail brauchst.',
        },
        {
          q: 'Welche Bitrate soll ich nehmen?',
          a: '320 kbps für Musik, die du noch genau hören willst, 192 als Rate, mit der das Menü aufgeht, 128 für Sprache oder eine Datei, die du verschicken musst, und 96 oder 64 nur, wenn das Ziel klein ist und Sprache reicht. Eine Minute Stereo wiegt bei diesen fünf Raten etwa 2,4 MB, 1,4 MB, 1 MB, 0,7 MB und 0,5 MB.',
        },
        {
          q: 'Was ist der Unterschied zu Audio komprimieren?',
          a: 'Derselbe Encoder, andere Aufgabe. Diese Seite setzt eine Bitrate und startet bei 192 kbps. Audio komprimieren macht die Datei kleiner und startet bei 128 kbps. WAV zu MP3 nimmt nur WAV und startet bei 320 kbps.',
        },
        {
          q: 'Kann ich hier nach WAV oder Opus wandeln?',
          a: 'Nein. Diese Seite schreibt MP3 mit 320, 192, 128, 96 oder 64 kbps. WAV ist keine Bitrate. Für eine WAV-Kopie nimm MP3 zu WAV. Opus und AAC stehen nicht im Menü.',
        },
        {
          q: 'Wird meine Datei hochgeladen?',
          a: 'Nein. Der Browser dekodiert die Datei und kodiert das MP3 in diesem Tab, mit demselben lokalen Encoder wie Audio komprimieren. Wenn die Seite geladen ist, läuft die Umwandlung auch ohne Netz.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Wähle die Datei, die Umwandlung bleibt in diesem Tab. Aktuelles Chrome, Edge, Firefox und Safari dekodieren die üblichen Formate auf iPhone und Android. Eine sehr lange Datei braucht mehr Speicher, ein Computer ist ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Was die fünf Raten wiegen',
          paragraphs: [
            'Das Menü ist 320, 192, 128, 96 und 64 kbps, konstante Bitrate. Eine Minute in Stereo wiegt etwa 2,4 MB, 1,4 MB, 1 MB, 0,7 MB und 0,5 MB, in dieser Reihenfolge. Die Seite öffnet bei 192 kbps.',
            'Eine WAV hat keine eigene Bitrate, also ist die Zahl, die du wählst, der erste verlustbehaftete Durchgang. Eine MP3-, M4A-, OGG- oder Opus-Datei hat schon etwas verloren, und dieser Durchgang verliert noch etwas.',
          ],
        },
        {
          heading: 'Welche Rate passt',
          paragraphs: ['Wähle nach dem, was als Nächstes mit der Datei passiert, nicht nach der größten Zahl im Menü.'],
          bullets: [
            '320 kbps, wenn die Quelle eine WAV ist und du sie noch nah am Original willst.',
            '192 kbps als gewöhnliche Musikrate, dort startet das Menü.',
            '128, 96 oder 64 kbps für Sprache, eine Sprachnotiz oder eine Kopie, die klein sein muss.',
          ],
        },
        {
          heading: 'Eine höhere Zahl stellt nichts wieder her',
          paragraphs: [
            'Ein 128-kbps-MP3 mit 320 kbps zu kodieren speichert dieselben Lücken in einer größeren Datei. Die fehlenden Höhen kommen nur aus einer Quelle zurück, die sie noch hat.',
            'Das ist derselbe Encoder wie Audio komprimieren. Nimm Audio komprimieren, wenn du nur eine kleinere Datei willst und die Startrate egal ist. Nimm WAV zu MP3, wenn die Quelle eine WAV ist und du 320 kbps willst, ohne sie zu wählen.',
          ],
        },
      ],
      dropHint: 'Audiodateien hierher ziehen oder klicken zum Auswählen',
      exportLabel: 'Umwandeln',
    },
    'reverse-audio': {
      cardLine: 'Spiele einen Track rückwärts — für Effekte, Mix-Kontrollen oder einfach so.',
      name: 'Audio rückwärts',
      shortName: 'Rückwärts',
      title: 'Audio rückwärts — Songs rückwärts abspielen, kostenlos',
      description:
        'Jeden Song rückwärts im Browser abspielen: ein Klick, sofortige Vorschau, speichern als MP3 oder WAV — kostenlos, nichts wird hochgeladen.',
      h1: 'Kostenloses Online-Rückwärts-Audio — Einen Song rückwärts abspielen',
      heroAlt: 'Eine Sprachnotiz vom Ende her abspielen',
      subtitle: 'Spiele jeden Song oder jede Aufnahme rückwärts ab — ein Klick, direkt im Browser.',
      intro:
        'Dreh einen Titel um, sodass er vom Ende zum Anfang spielt: such nach versteckten Botschaften in Songs, bau rückwärts anschwellende Becken für einen Mix, oder hör einfach, wie deine Stimme rückwärts klingt. Die ganze Datei wird auf deinem Gerät umgekehrt und erst beim Export geschrieben.',
      usesHeading: 'Gründe, eine Datei umzudrehen',
      uses: [
        'Hör einen Mix oder einen vergrabenen Satz rückwärts.',
        'Bau ein Reverse-Swell aus einem Beckenanschlag oder einer Stimme.',
        'Kehr nur die Auswahl um und lass den Rest der Datei in Ruhe.',
      ],
      howTo: [
        {
          name: 'Audio hinzufügen',
          text: 'Ziehe eine MP3, WAV, M4A oder eine andere Datei hierher — sie verlässt dein Gerät nie.',
        },
        {
          name: 'Umdrehen',
          text: 'Klicke auf Rückwärts abspielen und spiel den Titel ab, um ihn rückwärts zu hören. Noch ein Klick, und er läuft wieder vorwärts.',
        },
        {
          name: 'Ergebnis speichern',
          text: 'Exportiere das umgedrehte Audio als MP3 oder verlustfreies WAV. Der Download startet automatisch.',
        },
      ],
      faqs: [
        {
          q: 'Warum sollte ich einen Song rückwärts abspielen?',
          a: 'Musiker nutzen umgedrehtes Audio für kreative Effekte — rückwärts anschwellende Becken, rückwärts laufende Gitarrensoli, Ambient-Texturen. Es ist auch der klassische Weg, einen Titel auf Backmasking zu prüfen, und ehrlich: die eigene Stimme rückwärts zu hören macht einfach Spaß.',
        },
        {
          q: 'Ändert das Umdrehen die Qualität?',
          a: 'Nein. Der Export als WAV sortiert nur die Samples neu — das Audio ist bitidentisch mit dem Original, nur rückwärts. Der MP3-Export kodiert einmal neu mit der gewählten Bitrate.',
        },
        {
          q: 'Kann ich nur einen Teil eines Songs umdrehen?',
          a: 'Ja. Markiere den gewünschten Teil auf der Wellenform, stelle den Modus auf „Auswahl behalten“ und klicke dann auf Rückwärts abspielen — nur dieser Abschnitt wird exportiert, und zwar rückwärts.',
        },
        {
          q: 'Funktioniert das auf dem Handy?',
          a: 'Ja. Der Rückwärts-Button und die Wellenform unterstützen Touch, und der Export lädt direkt auf iOS und Android herunter.',
        },
        {
          q: 'Ist das Umdrehen wirklich kostenlos und privat?',
          a: 'Ja — ohne Anmeldung, ohne Wasserzeichen, ohne Limits. Das Umdrehen passiert in deinem Browser mit der Web Audio API, die Datei wird also nie irgendwo hochgeladen.',
        },
      ],
      sections: [
        {
          heading: 'Rückwärts spielt die Samples von hinten',
          paragraphs: [
            'Die Seite dreht das markierte Audio um, sodass das Ende zuerst spielt. Du kannst die ganze Datei oder nur die Auswahl umkehren. Rückwärts ändert weder Lautstärke noch Tonhöhe.',
            'Der Export ist trotzdem eine Kodierung. WAV behält das umgedrehte PCM ohne eine MP3-Generation. MP3 schreibt eine neue Datei des umgedrehten Audios.',
          ],
        },
        {
          heading: 'Wofür es gedacht ist',
          paragraphs: [
            'Es ist ein gerades Umdrehen, kein Nachrichten-Decoder und kein Stem-Splitter:',
          ],
          bullets: [
            'Ein umgedrehtes Becken oder ein Hit als Einleitung.',
            'Eine Phrase nur in der Auswahl gegenhören, dann rückgängig.',
            'Eine ganze Datei umgedreht für Sounddesign.',
          ],
        },
        {
          heading: 'Was gleich bleibt',
          paragraphs: [
            'Rückgängig geht einen Schritt zurück. Zurücksetzen lädt die abgelegte Datei neu. Die Originaldatei auf der Platte wird nicht überschrieben.',
            'Wenn das Ziel ein langsamerer Song oder eine tiefere Stimme ist, ist Rückwärts der falsche Regler. Tempo verschiebt die Tonhöhe mit. Der Tonhöhen-Regler hält die Länge.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Umkehren und laden',
    },
    'change-audio-speed': {
      cardLine: 'Vorlesungen auf 2× beschleunigen oder Riffs zum Lernen verlangsamen — Tonlage bleibt.',
      name: 'Audio-Geschwindigkeit ändern',
      shortName: 'Geschwindigkeit',
      title: 'Audio schneller machen — online kostenlos',
      description:
        'Audio von 0,5× bis 2× schneller oder langsamer, direkt im Browser. Sofortige Vorschau, Export als MP3 oder WAV — kostenlos, nichts wird hochgeladen.',
      h1: 'Kostenloser Online-Tempo-Regler — Audio schneller oder langsamer abspielen',
      heroAlt: 'Einen Song zum Üben verlangsamen oder eine Vorlesung beschleunigen',
      subtitle: 'Mach jedes Audio von 0,5× bis 2× schneller oder langsamer — direkt im Browser.',
      intro:
        'Mach aus einer 40-Minuten-Vorlesung 20 schnelle Minuten, verlangsame ein Gitarrensolo auf halbe Geschwindigkeit zum Üben oder pass einen Titel in einen kürzeren Videoslot ein. Ziehe den Geschwindigkeitsregler, hör die Änderung sofort und exportiere — das Audio wird auf deinem Gerät neu berechnet und nie hochgeladen.',
      usesHeading: 'Geschwindigkeiten, die zur Aufgabe passen',
      uses: [
        'Verlangsame Sprache oder ein Solo auf halbe Geschwindigkeit, wenn du jede Silbe oder Note brauchst.',
        'Überfliege Podcast oder Vorlesung mit 1,25× bis 1,5×, wenn 1× zu langsam zum Durchhören ist.',
        'Die Tonhöhe geht mit dem Tempo. Tonhöhe ändern und die Länge behalten: dafür ist der Pitch-Wechsler.',
      ],
      howTo: [
        {
          name: 'Datei ablegen',
          text: 'Füge eine MP3, WAV, M4A oder eine andere Audiodatei hinzu — sie bleibt die ganze Zeit auf deinem Gerät.',
        },
        {
          name: 'Geschwindigkeit einstellen',
          text: 'Ziehe den Geschwindigkeitsregler zwischen 0,5× und 2×. Nutze die Wellenform, um nur einen Abschnitt zu wählen, wenn nur ein Teil der Datei geändert werden soll.',
        },
        {
          name: 'Anhören und exportieren',
          text: 'Spiel das Ergebnis ab, um die Geschwindigkeit zu prüfen, und speichere es als MP3 oder WAV. Eine 10-Minuten-Datei bei 2× ist in etwa einer Sekunde exportiert.',
        },
      ],
      faqs: [
        {
          q: 'Ändert die Geschwindigkeit auch die Tonhöhe?',
          a: 'Auf dieser Seite bewegen sich Geschwindigkeit und Tonhöhe zusammen: 2× liegt etwa eine Oktave höher, 0,5× etwa eine Oktave tiefer. Der Tempo-Wechsler hält die Tonhöhe und ändert die Länge, von 0,75× bis 1,25× in Schritten von 0,01. Um die Tonhöhe zu ändern und die Länge zu behalten, nimm den Tonhöhen-Regler.',
        },
        {
          q: 'Welche Geschwindigkeiten kann ich wählen?',
          a: 'Alles von 0,5× bis 2× in Schritten von 0,05. Halbe Geschwindigkeit sitzt am besten, wenn du schnelle Sprache mitschreiben oder Soli lernen willst; 1,25–1,5× ist angenehm, um Vorlesungen und Podcasts zu überfliegen.',
        },
        {
          q: 'Wie schnell ist der Export?',
          a: 'Die Geschwindigkeitsänderung rendert dein Browser offline in normaler Rechengeschwindigkeit — ein 10-Minuten-Titel dauert ein bis zwei Sekunden, egal welchen Faktor du wählst.',
        },
        {
          q: 'Kann ich nur einen Teil eines Titels beschleunigen?',
          a: 'Ja. Markiere den Abschnitt auf der Wellenform, stelle den Modus auf „Auswahl behalten“ und wähle dann deine Geschwindigkeit — der Export enthält nur diesen Teil, schneller oder langsamer.',
        },
        {
          q: 'Gibt es eine Längenbegrenzung?',
          a: 'Keine künstliche. Die praktische Obergrenze ist der Speicher deines Geräts — ungefähr eine Stunde Audio auf einem typischen Computer.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Tempo und Tonhöhe bewegen sich zusammen',
          paragraphs: [
            'Dieser Regler spielt die Datei schneller oder langsamer, wie ein Band, von 0,5× bis 2×. Bei 2× liegt die Tonhöhe etwa eine Oktave höher, bei 0,5× etwa eine Oktave tiefer. Schneller heißt eine kürzere Datei und eine höhere Tonhöhe. Langsamer heißt eine längere Datei und eine tiefere Tonhöhe.',
            'Die Tonhöhe zu halten, während sich die Länge ändert, ist der Tempo-Wechsler, von 0,75× bis 1,25×. Diese Seite bewegt die Tonhöhe weiter mit der Geschwindigkeit. Eine höhere oder tiefere Stimme bei gleicher Länge ist der Tonhöhen-Regler, bis zu 12 Halbtöne.',
          ],
        },
        {
          heading: 'Wo der Regler nützt',
          paragraphs: [
            'Nimm ihn, wenn die Tonhöhenänderung in Ordnung ist oder gerade das Ziel:',
          ],
          bullets: [
            'Eine Vorlesung oder Sprachnotiz, die du schneller durchwillst, inklusive Chipmunk-Ton.',
            'Ein langsamerer Durchgang zum Mitschreiben, die Stimme sinkt mit.',
            'Eine kurze Vorschau eines Clips in anderem Tempo vor dem Export.',
          ],
        },
        {
          heading: 'Slowed-Songs sind die andere Seite',
          paragraphs: [
            'Ein Slowed-and-Reverb senkt die Tonhöhe ebenfalls, weil es das Tempo senkt, und legt Hall darauf. Diese Seite startet um 85 Prozent. Hier ist nur der Temporegler.',
            'Über 100 Prozent auf der Slowed-Seite geht in Richtung Nightcore. Mach das dort, wenn du auch den Hall-Regler willst. Exportiere hier, wenn du nur die neue Länge willst.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Tempo ändern und laden',
    },
    'increase-volume': {
      cardLine: 'Hebe leise Sprachmemos mit Limiter bis zu 4× an, ohne dass etwas clippt.',
      name: 'MP3 lauter machen',
      shortName: 'MP3 lauter',
      title: 'MP3 lauter machen – online kostenlos',
      description:
        'Eine leise MP3 im Browser bis auf das 4-Fache anheben. Der Limiter hält die Spitzen sauber. Kostenlos, nichts wird hochgeladen.',
      h1: 'MP3 lauter machen – leise MP3 bis 4×',
      heroAlt: 'Die Lautstärke einer MP3 erhöhen, ohne dass sie übersteuert',
      subtitle: 'Verstärke leise Aufnahmen bis auf das 4-Fache — mit Limiter, damit nichts übersteuert.',
      intro:
        'Mach Aufnahmen lauter, die zu leise sind: Sprachnotizen vom Handy, Vorlesungen aus der letzten Reihe, Videotonspuren mit niedrigem Pegel. Schieb die Lautstärke bis auf das 4-Fache (+12 dB), und ein eingebauter Limiter fängt die Peaks ab, damit es lauter wird, ohne in Verzerrung zu kippen.',
      usesHeading: 'Aufnahmen, die einen Schub brauchen',
      uses: [
        'Heb eine Sprachnotiz an, die zu weit vom Mikrofon aufgenommen wurde.',
        'Verstärke eine Vorlesung aus der hinteren Reihe und lass den Limiter die Spitzen halten.',
        'Mach eine leise MP3 laut genug für unter einem Video, ohne die ganze Datei zu übersteuern.',
      ],
      howTo: [
        {
          name: 'Audio hinzufügen',
          text: 'Ziehe eine leise MP3, WAV, M4A oder eine andere Datei hierher — verarbeitet wird sie nur auf deinem Gerät.',
        },
        {
          name: 'Lautstärke anheben',
          text: 'Ziehe den Lautstärkeregler bis auf 400 %. Hör unterwegs die Vorschau; der Limiter hält die lautesten Peaks automatisch zurück.',
        },
        {
          name: 'Die lautere Datei exportieren',
          text: 'Speichere als MP3 oder WAV. Wenn es immer noch angestrengt klingt, geh 10–20 % zurück — saubere Lautheit schlägt maximale Lautheit.',
        },
      ],
      faqs: [
        {
          q: 'Verzerrt das Anheben der Lautstärke?',
          a: 'Etwas, wenn du zu weit gehst — das ist Physik, keine Software. Der eingebaute Limiter fängt Peaks über der Schwelle ab, deshalb klingen moderate Anhebungen (150–250 %) meist sauber. Über 300 % werden die leisen Stellen laut, aber die Peaks fangen an zu pumpen; vertrau deinen Ohren.',
        },
        {
          q: 'Wie laut kann ich es machen?',
          a: 'Bis auf 400 % des Originals, das sind etwa +12 dB. Das deckt die meisten leisen Aufnahmen ab; eine 3-Minuten-Datei ist so oder so in ein bis zwei Sekunden exportiert.',
        },
        {
          q: 'Ist das dasselbe wie Normalisieren?',
          a: 'Nein. Normalisieren hebt die ganze Datei an, sodass der lauteste Peak ein Zielniveau trifft. Hier multiplizierst du den Pegel, den du wählst — das ist berechenbarer, wenn du weißt, dass eine Aufnahme durchgehend leise ist.',
        },
        {
          q: 'Kann ich nur einen Teil einer Datei verstärken?',
          a: 'Ja. Markiere den leisen Abschnitt auf der Wellenform, stelle den Modus auf „Auswahl behalten“ und exportiere — du bekommst nur diesen Teil mit der neuen Lautstärke.',
        },
        {
          q: 'Funktioniert das mit Videodateien?',
          a: 'Oft ja — Browser können die Audiospur von MP4-Dateien, die du hierher ziehst, meist dekodieren. Wenn dein Browser die Datei ablehnt, extrahiere zuerst das Audio und versuche es erneut.',
        },
        { q: "Worin unterscheidet sich das vom Lautheitsmesser?", a: "Diese Seite multipliziert die ganze Datei mit dem Wert, den du wählst. Der Lautheitsmesser liest integrierte LUFS — wie laut die Datei ist, nicht der Raum — und kann −16, −14 oder −23 treffen, ohne den Sample-Peak über −1 dBFS zu schieben. Keine der beiden Seiten gleicht laut und leise an." },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Eine MP3, die zu leise ist',
          paragraphs: [
            'MP3 lauter machen multipliziert die Datei, bis 400 Prozent, etwa +12 dB. Über 100 Prozent hält ein Limiter die Spitzen vom harten Clipping ab.',
            'Dieselbe Art Gain für einen Videoton oder ein anderes Format ist Audio lauter machen. Diese Seite ist die für MP3. Videodateien lassen sich hier oft trotzdem dekodieren.',
          ],
        },
        {
          heading: 'Was der Multiplikator nicht tut',
          paragraphs: [
            'Es ist ein Gain für die ganze Datei. Es ist kein Lautheitsstandard und gleicht die Dynamik nicht an:',
          ],
          bullets: [
            'Ein Podcast, der nahe −16 LUFS liegen soll: miss ihn mit dem Lautheitsmesser und nimm nur den Gain, den dieses Meter zulässt.',
            'Ein Peak schon nahe Vollausschlag, der Rest zu leise: Normalisieren setzt diesen Peak nahe −0,2 dB. Die leisen Stellen hebt es nicht weiter an.',
            'Laute und leise Passagen, die näher zusammenrücken sollen: der Pegelkompressor, nicht dieser Regler.',
          ],
        },
        {
          heading: 'Export',
          paragraphs: [
            'Du bekommst eine neue Datei. Die abgelegte MP3 bleibt, wo sie war. Eine Datei, die schon laut ist, weiter aufzudrehen trifft vor allem den Limiter und kann flach klingen.',
            'Wenn die MP3 leise wirkt, weil sie lange Stille mit einem kurzen Satz ist, kürze zuerst und hebe dann an, was übrig ist.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Lauter machen und laden',
    },
    'mp4-to-mp3': {
      cardLine: 'Sichere die Tonspur von Videoclips, Bildschirmaufnahmen oder Kameradateien als MP3.',
      name: 'MP4-zu-MP3-Konverter',
      shortName: 'MP4 in MP3',
      title: 'MP4 in MP3 umwandeln – kostenlos, ohne Upload',
      description:
        'Wandle MP4 im Browser in MP3 um. Die Tonspur wird auf deinem Gerät extrahiert, das Video wird nie hochgeladen. Kostenlos, ohne Anmeldung.',
      h1: 'MP4 in MP3 umwandeln – kostenlos online',
      heroAlt: 'Eine MP4-, MOV- oder WebM-Tonspur in MP3 umwandeln',
      subtitle: 'Hol die Tonspur aus jedem Video — direkt im Browser, nichts wird hochgeladen.',
      intro:
        'Mach aus MP4-Videos MP3-Audio, ohne etwas zu installieren oder Gigabytes auf einen Server zu laden. Dein Browser liest die Datei von der Festplatte, dekodiert die Tonspur lokal und speichert sie als MP3 — ein 500-MB-Video ist in Sekunden umgewandelt, weil nur die Audiospur verarbeitet wird.',
      usesHeading: 'Videos, die man wegen des Tons konvertiert',
      uses: [
        'Speichere Vorlesung, Konzert oder Interview als Audio, das bei ausgeschaltetem Bildschirm läuft.',
        'Ein riesiges Video musst du nicht hochladen. Der Ton wird auf diesem Gerät dekodiert.',
        'Konvertiere die ganze Spur, und schneide danach, wenn du nur einen Abschnitt brauchst.',
      ],
      howTo: [
        {
          name: 'Video ablegen',
          text: 'Ziehe eine MP4 hierher oder klicke zum Auswählen. WebM- und MOV-Dateien mit üblichen Audiospuren funktionieren genauso. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'Bitrate wählen',
          text: '320 kbps für Musikvideos, 192 kbps für alltägliches Hören, 128 kbps für Interviews und Vorlesungen.',
        },
        {
          name: 'Umwandeln und herunterladen',
          text: 'Klicke auf In MP3 umwandeln. Die Audiospur wird in deinem Browser dekodiert, und die MP3 lädt sofort herunter.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als ein Video umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Wird das Video irgendwo hochgeladen?',
          a: 'Nein — und bei Video lohnt es sich, das extra zu sagen, weil die Dateien groß sind. Der Browser liest die Datei von deiner Festplatte, dekodiert nur die Audiospur und schreibt die MP3 lokal. Videobilder werden weder verarbeitet noch übertragen.',
        },
        {
          q: 'Welche Videoformate werden unterstützt?',
          a: 'MP4-Dateien mit AAC-Audio (die überwältigende Mehrheit, einschließlich Handyaufnahmen und üblicher Downloads), dazu WebM mit Opus und die meisten MOV-Dateien. Exotische Codecs wie AC3- oder DTS-Tonspuren können Browser nicht dekodieren; sie werden mit einer klaren Meldung abgelehnt.',
        },
        {
          q: 'Wie schnell ist das im Vergleich zu Online-Konvertern?',
          a: 'Typischerweise schneller. Konverter mit Upload müssen zuerst das ganze Video an einen Server schicken — eine 500-MB-Datei kann viele Minuten dauern. Hier wird nur das Audio lokal dekodiert, deshalb sind auch lange Videos auf einem normalen Computer in Sekunden fertig.',
        },
        {
          q: 'Kann ich nur einen Teil des Videos umwandeln?',
          a: 'Diese Seite ist ein reiner Konverter — sie wandelt die ganze Tonspur um. Wenn du einen Abschnitt willst, wandle zuerst das gesamte Audio um und kürze es dann mit dem Audio-Trimmer.',
        },
        {
          q: 'Verlangsamt 4K oder 8K das Ganze?',
          a: 'Nein. Die Videoauflösung spielt keine Rolle — die Videospur wird komplett ignoriert. Eine 4K-Datei und eine 240p-Datei mit derselben Tonspur werden identisch umgewandelt.',
        },
      ],
      sections: [
        {
          heading: 'Umwandelt wird nur die Tonspur',
          paragraphs: [
            'Eine MP4 ist ein Container. Bild und Ton sind getrennte Spuren. Diese Seite dekodiert den Ton und schreibt eine MP3. Das Bild wird nicht kodiert, nicht hochgeladen und nicht gespeichert.',
            'Deshalb kann ein 500-MB-Video in Sekunden fertig sein, und deshalb ist 4K nicht langsamer als 240p, wenn die Tonspur dieselbe ist. Konverter mit Upload warten auf die ganze Datei. Dieser schickt sie nicht weg.',
          ],
        },
        {
          heading: 'Welche MP3-Bitrate du nutzen solltest',
          paragraphs: [
            'Die Tonspur wird einmal kodiert, mit der Rate, die du wählst.',
          ],
          bullets: [
            '320 kbps: Musikvideos und Konzerte.',
            '192 kbps: Alltagshören.',
            '128 kbps: Interviews, Vorlesungen und Sprache.',
          ],
        },
        {
          heading: 'MP4 in MP3, oder Audio extrahieren',
          paragraphs: [
            'Der Export startet als MP3. WebM und MOV mit einer normalen Tonspur funktionieren genauso. Die übliche Handy-MP4 mit AAC-Audio ist die Datei, für die diese Seite gebaut ist.',
            'Stell das Format auf WAV, wenn du eine verlustfreie Kopie der Tonspur brauchst. Der Audio-Extraktor ist die Seite für diese Wahl und fürs Weiterbearbeiten. Wenn du nur eine Minute brauchst, wandle hier die ganze Tonspur um und kürze sie danach. Diese Seite schneidet keinen Abschnitt aus dem Video.',
          ],
        },
        {
          heading: 'Dateien, die der Browser nicht lesen kann',
          paragraphs: [
            'AC3- und DTS-Tonspuren dekodiert der Browser nicht. Diese Dateien stoppen mit einer klaren Fehlermeldung, nicht mit einer stillen MP3. Eine normale MP4 vom Handy, eine Bildschirmaufnahme oder ein üblicher Download ist AAC, und das funktioniert.',
            'Die MP3 behält keinen Videotitel und kein Vorschaubild. Trag den Titel danach im MP3-Tag-Editor ein, wenn er im Player erscheinen soll.',
          ],
        },
      ],
      dropHint: 'MP4- oder Videodateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'extract-audio': {
      cardLine: 'Ziehe sauberen Ton aus jedem Video zum Schneiden, Transkribieren oder Samplen.',
      name: 'Audio-Extraktor',
      shortName: 'Audio extrahieren',
      title: 'Audio aus Video — Tonspur als MP3 oder WAV speichern',
      description:
        'Extrahiere die Audiospur aus jedem Video im Browser und speichere sie als MP3 oder verlustfreies WAV. Kostenlos, privat, kein Upload — auch bei großen Dateien.',
      h1: 'Audio aus Video extrahieren – Tonspur als WAV oder MP3',
      heroAlt: 'Eine Videotonspur als MP3 oder WAV speichern',
      subtitle: 'Speichere die Tonspur jedes Videos als MP3 oder WAV — lokal, in Sekunden.',
      intro:
        'Trenn den Ton vom Bild: hol Interviews aus Videoanrufen, speichere einen Konzertfilm als Album oder nutze eine Tonspur in deinem eigenen Schnitt. Die Audiospur wird auf deinem Gerät dekodiert und lässt sich verlustfrei als WAV oder kompakt als MP3 speichern.',
      usesHeading: 'Tonspuren, die sich zu ziehen lohnen',
      uses: [
        'Hol den Ton aus einer Bildschirmaufnahme oder einem Handyvideo.',
        'Behalte WAV, wenn du weiter editierst, oder MP3, wenn du fertig bist.',
        'Gib eine lange Datei an den Trimmer, wenn nur eine Minute davon zählt.',
      ],
      howTo: [
        {
          name: 'Video ablegen',
          text: 'Jede MP4, jedes WebM und jede MOV mit einer üblichen Tonspur funktioniert. Die Datei verlässt dein Gerät nie. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'Format wählen',
          text: 'MP3 mit 192 kbps zum Hören und Teilen; WAV für eine verlustfreie Kopie, die du weiterbearbeiten oder archivieren kannst.',
        },
        {
          name: 'Extrahieren und speichern',
          text: 'Klicke auf Audio extrahieren. Die Tonspur wird lokal dekodiert und lädt sofort herunter.',
        },
      ],
      faqs: [
        { q: 'Kann ich den Ton aus mehr als einem Video holen?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Was ist der Unterschied zu einem MP4-zu-MP3-Konverter?',
          a: 'Unter der Haube dieselbe lokale Extraktion — diese Seite ist dafür da, Audio in dem Format aus einem Video zu holen, das du brauchst, einschließlich verlustfreiem WAV. Die Konverterseite ist auf MP3-Ausgabe ausgelegt.',
        },
        {
          q: 'Bekomme ich die Originalqualität?',
          a: 'Wähle WAV: die dekodierte Tonspur wird verlustfrei geschrieben, das Audio entspricht also dem, was im Video steckt. MP3 kodiert einmal neu; bei 320 kbps ist der Unterschied in der Praxis nicht hörbar.',
        },
        {
          q: 'Welche Videoformate funktionieren?',
          a: 'MP4 mit AAC-Audio, WebM mit Opus und die meisten MOV-Dateien — die Codecs, die Browser nativ dekodieren können. Tonspuren in AC3, DTS oder anderen exotischen Codecs lassen sich lokal nicht dekodieren und werden sauber abgelehnt.',
        },
        {
          q: 'Gibt es eine Dateigrößengrenze?',
          a: 'Keine künstliche. Verarbeitet wird nur die Audiospur, deshalb sind auch sehr große Videos schnell umgewandelt — die Grenze ist der Speicher deines Geräts, nicht die Dateigröße auf der Festplatte.',
        },
        {
          q: 'Kann ich stattdessen den Ton aus einem Video entfernen?',
          a: 'Das ist die umgekehrte Operation — ein Video stummschalten behält die Bilder und wirft den Ton weg. Dieses Tool behält den Ton und wirft die Bilder weg.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Datei wählen, die Umwandlung bleibt in diesem Tab. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Die Tonspur aus einem Video ziehen',
          paragraphs: [
            'Audio extrahieren dekodiert die Tonspur und wirft das Bild weg. Der Export startet als MP3, und das Formatmenü bietet auch WAV, wenn der nächste Schritt ein Schnitt oder eine verlustfreie Übergabe ist.',
            'MP4 in MP3 ist die Nachbarseite für genau diese Umwandlung. Öffne diese Seite, wenn die Quelle irgendein Video ist und du WAV brauchen kannst, nicht nur eine MP3 aus einer MP4.',
          ],
        },
        {
          heading: 'Was herauskommt und was nicht',
          paragraphs: [
            'Nur die Audiospur wird dekodiert. Die Videobilder fallen weg:',
          ],
          bullets: [
            'Ein Handyvideo oder eine Bildschirmaufnahme wird eine Datei, die du kürzen, zusammenfügen oder taggen kannst.',
            'Stell auf WAV, wenn du danach schneidest und am Ende einmal kodieren willst.',
            'AC3- und DTS-Tonspuren scheitern im Browser oft. Eine Stereo-AAC- oder PCM-Spur ist die, die dekodiert.',
          ],
        },
        {
          heading: 'Es macht das Video nicht stumm',
          paragraphs: [
            'Audio aus einem Video entfernen und das Bild behalten ist der umgekehrte Auftrag. Diese Seite behält den Ton und wirft die Bilder weg. Sie schreibt kein neues Video.',
            'Es gibt keine Größengrenze außer dem Speicher des Geräts. Ein 4K-Bild macht die Audio-Dekodierung nicht langsamer, weil die Bilder nicht verwendet werden. Nichts wird hochgeladen.',
          ],
        },
      ],
      dropHint: 'Videodateien ablegen oder klicken zum Auswählen',
      exportLabel: 'Audio extrahieren',
    },
    'voice-recorder': {
      cardLine: 'Nimm Meetings, Vorlesungen und Ideen direkt im Browser auf — ohne App-Installation.',
      name: 'Sprachrekorder',
      shortName: 'Sprachrekorder',
      title: 'Sprachrekorder online — Audio aufnehmen, MP3/WAV',
      description:
        'Nimm dein Mikrofon im Browser auf, kürze die Aufnahme und speichere sie als MP3 oder WAV. Kostenlos und privat — Aufnahmen werden nie hochgeladen.',
      h1: 'Kostenloser Online-Sprachrekorder — Das Mikrofon als MP3 aufnehmen',
      heroAlt: 'Eine Sprachnotiz als MP3 oder WAV speichern',
      subtitle: 'Nimm dein Mikrofon auf, kürze die Aufnahme und speichere sie als MP3 — nichts verlässt dein Gerät.',
      intro:
        'Ein Rekorder mit Schneideplatz: nimm Sprachnotizen, Interviews, Übungsaufnahmen oder Besprechungsnotizen auf, schneide die Stille weg und exportiere eine saubere Datei. Aufnahme und Bearbeitung passieren beide in deinem Browser — das Audio wird nie irgendwohin geschickt, deshalb ist das auch bei vertraulichen Gesprächen entspannt.',
      usesHeading: 'Takes, die sich hier aufzunehmen lohnen',
      uses: [
        'Nimm Sprachnotiz, Sprachübung oder eine grobe Erzählung auf, ohne eine App zu installieren.',
        'Schneide Anfang und Ende vor dem Export, damit der Take nur die Worte enthält.',
        'Speichere MP3 zum Senden, oder WAV, wenn du den Take noch editierst.',
      ],
      howTo: [
        {
          name: 'Mikrofon erlauben',
          text: 'Klicke auf Aufnehmen und bestätige die Berechtigungsabfrage des Browsers. Die Aufnahme startet sofort; der Timer zeigt die Länge.',
        },
        {
          name: 'Stoppen und anhören',
          text: 'Klicke auf Stopp, wenn du fertig bist. Die Aufnahme lädt in den Editor darunter, wo du sie abspielen und die Enden kürzen kannst.',
        },
        {
          name: 'Aufnahme exportieren',
          text: 'Speichere als MP3 oder WAV. Aufnahmen gibt es nur in diesem Tab, bis du sie exportierst — schließt du ohne Export, sind sie weg.',
        },
      ],
      faqs: [
        {
          q: 'Wohin gehen meine Aufnahmen?',
          a: 'Nirgendwohin. Der Mikrofonstrom wird von deinem Browser erfasst und im Speicher dieses Tabs gehalten. Nichts wird übertragen, und die Aufnahme verschwindet, wenn du den Tab schließt, sofern du sie nicht vorher exportierst.',
        },
        {
          q: 'In welchem Format wird aufgenommen?',
          a: 'Der Browser entscheidet das Aufnahmeformat — Chrome und Firefox nehmen WebM/Opus auf, Safari nimmt MP4/AAC auf. Das spielt keine Rolle: Exporte werden so oder so auf deinem Gerät in MP3 oder WAV umgewandelt.',
        },
        {
          q: 'Kann ich die Stille am Anfang und Ende wegschneiden?',
          a: 'Ja, genau dafür liegt der Editor unter dem Rekorder. Ziehe über den Teil, den du behalten willst, stelle den Modus auf „Auswahl behalten“ und exportiere — die unnötige Stille ist weg.',
        },
        {
          q: 'Welche Browser unterstützen die Aufnahme?',
          a: 'Chrome, Edge, Firefox und Safari auf dem Desktop, plus Chrome auf Android und Safari auf iOS. Wenn der Aufnahme-Button meldet, dass Aufnehmen nicht verfügbar ist, fehlt dem Browser die MediaRecorder API.',
        },
        {
          q: 'Wie lange kann ich aufnehmen?',
          a: 'So lange, wie der Speicher deines Geräts reicht — ein paar Minuten Sprache brauchen sehr wenig Platz, die Opus-Kompression ist effizient. Bei Aufnahmen über mehrere Stunden exportiere in Abschnitten.',
        },
      ],
      sections: [
        {
          heading: 'Das Mikrofon bleibt im Browser',
          paragraphs: [
            'Der Sprachrekorder nutzt den MediaRecorder in diesem Tab. Die Aufnahme wird nicht hochgeladen. Schließt du den Tab vor dem Export, ist die Aufnahme weg.',
            'Das Aufnahmeformat hängt vom Browser ab. Der Export wählt MP3 oder WAV, also ist die Datei, die du behältst, die gewählte, nicht das, was der Browser intern aufgenommen hat.',
          ],
        },
        {
          heading: 'Nach der Aufnahme',
          paragraphs: [
            'Du kannst kürzen, indem du eine Auswahl behältst, und diesen Abschnitt exportieren:',
          ],
          bullets: [
            'Schneide den Atem vor dem ersten Wort und die Stille nach dem letzten weg.',
            'Exportiere WAV, wenn du die Aufnahme noch einmal schneidest und einmal kodieren willst.',
            'Exportiere MP3, wenn die Notiz nur verschickt oder klein gespeichert werden soll.',
          ],
        },
        {
          heading: 'Was er nicht tut',
          paragraphs: [
            'Er braucht einen Browser mit MediaRecorder und die Erlaubnis fürs Mikrofon. Er transkribiert nicht. Sprache zu Text ist die Seite Audio in Text, und die nimmt eine Datei, kein Live-Mikrofon.',
            'Eine zu leise Aufnahme bleibt nach dem Export leise. Heb sie mit Audio lauter machen an, oder prüfe den Pegel am Lautheitsmesser, wenn das Ziel ein Podcast-Sollwert ist.',
          ],
        },
      ],
      dropHint: 'Oder eine vorhandene Aufnahme zum Bearbeiten ablegen',
    },
    'volume-booster': {
      cardLine: 'Mach leise Musik und Videosoundtracks bis zu 4× laut und sauber.',
      name: 'Lautstärke-Booster',
      shortName: 'Lauter machen',
      title: 'Audio lauter machen – Lautstärke online erhöhen',
      description:
        'Mach Audio lauter, bis zum 4-Fachen, für leise Musik und Videotonspuren. Ein Limiter hält die Peaks. Kostenlos, nichts wird hochgeladen.',
      h1: 'Audio lauter machen – kostenlos online',
      heroAlt: 'Die leise Tonspur eines Videos anheben',
      subtitle: 'Verstärke leise Titel und Videotonspuren bis auf das 4-Fache — sauber, ohne Übersteuern.',
      intro:
        'Für alles, was zu leise spielt: leise Handyvideos, zurückhaltende Akustikaufnahmen, Podcasts, die auf Flüsterlautstärke gemastert sind. Lade eine Datei, schieb die Lautstärke bis auf das 4-Fache und lass den eingebauten Limiter die Peaks zurückhalten, damit die lauten Stellen sauber bleiben. Das gilt für Audio- und Videodateien gleichermaßen — verarbeitet wird nur die Tonspur.',
      usesHeading: 'Leise Dateien, für die diese Seite da ist',
      uses: [
        'Heb eine Videotonspur an, die leiser herausgekommen ist als das Bild.',
        'Verstärke Musik, die beim Export oder Rippen zu leise war.',
        'Bleib bei etwa 150% bis 250%, wenn es lauter werden soll, ohne dass der Limiter pumpt.',
      ],
      howTo: [
        {
          name: 'Datei ablegen',
          text: 'Musik, eine Sprachnotiz oder ein leises Video (MP4, WebM, MOV) — bei einem Video wird die Tonspur lokal extrahiert.',
        },
        {
          name: 'Verstärkung wählen',
          text: 'Ziehe den Lautstärkeregler für die meisten Aufnahmen auf 150–250 %. Hör unterwegs die Vorschau; der Limiter greift automatisch über 100 %.',
        },
        {
          name: 'Die lautere Datei exportieren',
          text: 'Speichere als MP3 oder WAV. Wenn die Peaks gequetscht klingen, nimm 10–20 % Verstärkung zurück und exportiere erneut.',
        },
      ],
      faqs: [
        {
          q: 'Wie viel lauter kann es werden?',
          a: 'Bis auf 400 % des Originals (+12 dB). Verstärken kann keine Energie erzeugen, die nie aufgenommen wurde, deshalb hilft es bei extrem leisen Quellen zusätzlich, als WAV zu exportieren und in einem speziellen Editor zu normalisieren — für die meisten leisen Dateien reicht eine 2- bis 3-fache Verstärkung.',
        },
        {
          q: 'Was macht der Limiter eigentlich?',
          a: 'Über 100 % Lautstärke beobachtet ein Dynamikkompressor den Ausgang und hält kurze Peaks zurück, bevor sie clippen. Das Ergebnis ist insgesamt lauter, ohne das Knistern von hartem digitalem Clipping. Eine Soft-Clip-Stufe fängt ab, was trotzdem durchrutscht.',
        },
        {
          q: 'Kann ich den Ton eines Videos verstärken?',
          a: 'Ja. Lege eine MP4 oder WebM ab, die Tonspur wird lokal dekodiert, verstärkt und als MP3 oder WAV exportiert. Die Videospur wird ignoriert — nutze den Audio-Extraktor, wenn du nur den Ton willst.',
        },
        {
          q: 'Geht Verstärken auch auf dem Handy?',
          a: 'Ja. Der Booster läuft in Safari und Chrome auf dem Handy; ein 3-Minuten-Song ist auf einem modernen Telefon in ein bis zwei Sekunden exportiert.',
        },
        {
          q: 'Warum drehe ich nicht einfach die Lautsprecher lauter?',
          a: 'Die Lautsprecherlautstärke hilft nur auf deinem Gerät. Eine verstärkte Datei spielt überall lauter — auf den Handys anderer Leute, in billigen Ohrhörern, über die winzigen Laptop-Lautsprecher.',
        },
        {
          q: 'Was ist der Unterschied zum Pegelkompressor?',
          a: 'Diese Seite multipliziert die ganze Datei, der Abstand zwischen laut und leise bleibt. Der Pegelkompressor verkürzt diesen Abstand und setzt den Peak danach zurück. Nimm diese Seite, wenn alles zu leise ist. Nimm den Kompressor, wenn manche Stellen schreien und andere kaum zu hören sind.',
        },
        { q: "Worin unterscheidet sich das vom Lautheitsmesser?", a: "Diesen Regler zu ziehen multipliziert jede Probe. Der Lautheitsmesser misst integrierte LUFS und bietet Podcast −16, Streaming −14 und Broadcast −23. Würde der Sample-Peak −1 dBFS überschreiten, stoppt die Verstärkung. Das ist kein Raum-Messgerät." },
      ],
      sections: [
        {
          heading: 'Audio lauter machen, ohne Knistern',
          paragraphs: [
            'Eine Datei clippt, wenn eine Probe die digitale Decke überschreiten will, 0 dBFS. Verstärken multipliziert jede Probe. Lag der lauteste Moment schon nahe an dieser Decke, schneidet ein starker Boost die Spitze ab, und du hörst Knistern.',
            'Über 100 % läuft auf dieser Seite ein Limiter auf dem Ausgang, danach ein Soft-Clip für alles, was noch durchkommt. Fang bei 150 % an und hör die Vorschau. Die meisten leisen Sprachnotizen und zu leisen Exporte brauchen nur 150–250 %. 400 % sind etwa +12 dB, und das ist für sehr leise aufgenommene Dateien, nicht für Tracks, die schon heiß sind.',
          ],
          bullets: [
            '150–200 %: eine leise Notiz oder ein etwas zu leises Video. Meist sauber.',
            '250 %: eine Vorlesung aus der letzten Reihe. Hör die lauteste Sekunde, bevor du speicherst.',
            '300–400 %: nur wenn die ganze Datei viel zu leise ist. Wenn es pumpt oder knistert, geh zurück.',
            'Schon laut: lass den Regler auf 100 %, oder schick die Datei zum Normalizer.',
          ],
        },
        {
          heading: 'Ein höherer Peak ist keine lautere Datei',
          paragraphs: [
            'Der Peak ist die einzelne lauteste Probe. Ein geflüstertes Interview mit einem Huster kann fast Vollaussteuerung erreichen und trotzdem leise klingen, weil der Rest der Datei niedrig liegt. Die Datei zu multiplizieren hebt Flüstern und Huster zusammen an.',
            'Wie laut eine Datei über ihre ganze Länge wirkt, misst LUFS. Diese Seite zielt auf keine LUFS-Zahl. Der Lautheitsmesser schon: er liest integrierte LUFS und kann eine Datei nahe −16 für Podcasts, −14 für Streaming oder −23 für Broadcast legen, und er stoppt, wenn der Sample-Peak −1 dBFS überschreiten würde.',
          ],
        },
        {
          heading: 'Boosten, normalisieren oder komprimieren',
          paragraphs: [
            'Drei Seiten hier ändern den Pegel, und sie ersetzen einander nicht.',
          ],
          bullets: [
            'Lautstärke-Booster, diese Seite: du wählst den Faktor, bis zum 4-Fachen, und ein Limiter hält die Peaks. Nimm sie, wenn du schon weißt, dass die Datei zu leise ist, auch eine Videotonspur.',
            'Audio normalisieren: eine gemessene Verstärkung, damit der lauteste Peak knapp unter der Decke sitzt. Nimm sie, wenn du den Regler nicht schätzen willst.',
            'Pegelkompressor: zieht laute Momente runter und leise Wörter hoch, dann setzt er den Peak zurück. Nimm ihn, wenn manche Stellen schreien und andere verschwinden. Ein Boost tut das nicht.',
          ],
        },
        {
          heading: 'Videotonspuren und Handyaufnahmen',
          paragraphs: [
            'Leg eine MP4, WebM oder MOV ab, und nur die Tonspur wird dekodiert, verstärkt und als MP3 oder WAV gespeichert. Das Bild wird ignoriert. Kann der Browser den Audio-Codec nicht lesen, extrahiere zuerst das Audio.',
            'Eine verstärkte Datei ist auf jedem Gerät lauter, das sie abspielt. Die Lautsprecherlautstärke hilft nur dem Gerät vor dir. Exportiere WAV, wenn du weiter bearbeitest. MP3 kodiert einmal. Verstärken erfindet kein Detail, das ein leises Handymikrofon nie aufgenommen hat, und es hebt auch das Rauschen an, das schon da war.',
          ],
        },
      ],
      dropHint: 'Audio- oder Videodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Lauter machen und laden',
    },
    'normalize-audio': {
      cardLine: 'Bringe einen ganzen Stapel Aufnahmen auf ein einheitliches, gesundes Level.',
      name: 'Audio-Normalizer',
      shortName: 'Normalisieren',
      title: 'Audio normalisieren — Pegel online kostenlos angleichen',
      description:
        'Normalisiere Audio im Browser auf einen einheitlichen Peak-Pegel — MP3, WAV, M4A und mehr. Ein Klick, kostenlos, nichts wird hochgeladen.',
      h1: 'Kostenloser Online-Audio-Normalizer — Die Lautstärke einer MP3 normalisieren',
      heroAlt: 'Leise Dateien auf eine gemeinsame Lautstärke anheben',
      subtitle: 'Ein Klick, und leise Dateien liegen auf einem einheitlichen, gesunden Pegel — ausgewertet auf deinem Gerät.',
      intro:
        'Normalisieren sucht den lautesten Peak in deiner Datei und hebt dann die gesamte Datei um genau den Betrag an, der diesen Peak knapp unter die Übersteuerung bringt. Ergebnis: Die Datei nutzt den Lautstärkebereich, den sie hat, ohne dass du den Wert schätzen musst. Das ist die richtige Korrektur, wenn eine Aufnahme durchgehend zu leise ist — Sprachnotizen, Feldaufnahmen, Exporte aus anderen Apps, die bei −18 dB herausgekommen sind.',
      usesHeading: 'Wenn ein Pegel passen soll',
      uses: [
        'Heb eine leise Datei an, bis die lauteste Spitze ein normales Niveau trifft.',
        'Gleiche Clips an, die du verbinden willst, damit ein Kapitel nicht halb so laut ist wie das nächste.',
        'Nimm das statt eines blinden Boosts, wenn du nicht weißt, wie weit du schieben sollst.',
      ],
      howTo: [
        {
          name: 'Audio ablegen',
          text: 'Jede MP3, WAV, M4A oder eine andere Audiodatei. Sie wird lokal dekodiert und ausgewertet — nichts verlässt dein Gerät. Mehrere Dateien teilen sich den Normalisieren-Schalter. Jede Datei wird auf ihren eigenen Peak angehoben. Eine Datei kommt allein, zwei oder mehr als ein ZIP.',
        },
        {
          name: 'Auf Normalisieren klicken',
          text: 'Die Datei wird nach ihrem Peak durchsucht und so angehoben, dass dieser Peak knapp unter Vollaussteuerung liegt. Hör die Vorschau, um den Unterschied zu hören.',
        },
        {
          name: 'Exportieren',
          text: 'Speichere als MP3 oder WAV. WAV vermeidet einen zusätzlichen verlustbehafteten Kodierdurchgang, wenn du die Datei weiterbearbeiten willst.',
        },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine Datei normalisieren?', a: 'Ja. Wenn Normalisieren an ist, gilt es für jede Datei in der Reihe. Jede Datei wird für sich gemessen und auf ihren eigenen Peak angehoben, nacheinander auf diesem Gerät. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        {
          q: 'Was macht Normalisieren eigentlich?',
          a: 'Es wendet eine feste Verstärkung auf die ganze Datei an, sodass das lauteste einzelne Sample knapp unter der digitalen Obergrenze landet (hier etwa −0,2 dB). Liegt der Peak einer Datei bei 50 % Lautstärke, verdoppelt Normalisieren ungefähr jedes Sample — leise und laute Stellen gleichermaßen.',
        },
        {
          q: 'Ist Normalisieren dasselbe wie die Lautstärke anzuheben?',
          a: 'Die beiden überschneiden sich, aber Normalisieren ist gemessen statt geschätzt. Der Lautstärke-Booster nimmt den Faktor, auf den du den Regler ziehst; Normalisieren findet den größten sicheren Faktor automatisch. Wenn du weißt, dass eine Datei durchgehend leise ist, reicht Verstärken. Wenn du sie einfach so laut haben willst, wie sie sauber sein kann, normalisiere.',
        },
        {
          q: 'Macht es leise und laute Stellen gleich laut?',
          a: 'Nein — und sei skeptisch bei jedem Tool, das behauptet, ein Klick würde das schaffen. Leise Passagen unabhängig anzuheben ist Dynamikkompression, ein anderer und zerstörerischerer Vorgang. Normalisieren schiebt die ganze Aufnahme um denselben Betrag nach oben und lässt die Dynamik unangetastet.',
        },
        {
          q: 'Nutzt es LUFS-Lautheitsziele wie Streaming-Plattformen?',
          a: 'Nein. Diese Seite verschiebt den Peak, nicht die integrierte Lautheit. Der Lautheitsmesser misst K-bewertete LUFS und kann eine Datei auf −16, −14 oder −23 legen. Das sind übliche Lieferziele, keine gesetzliche Grenze und keine Raummessung.',
        },
        {
          q: 'Verringert Normalisieren die Qualität?',
          a: 'Die Pegeländerung selbst ist mathematisch sauber und unhörbar. Die einzige Qualitätsfrage ist das Exportformat: WAV ist für die Verstärkung bitgenau, während MP3 einmal neu kodiert. Exportiere WAV, wenn die Datei weiterbearbeitet wird.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Ein Gain, auf den Peak gezielt',
          paragraphs: [
            'Normalisieren sucht die lauteste Stelle und setzt einen Gain, sodass dieser Peak nahe −0,2 dB liegt. Jede andere Stelle rückt um denselben Betrag. Leise Stellen bekommen keinen eigenen Hub.',
            'Es ist nicht LUFS. Ein Podcast nahe −16 LUFS, ein Stream nahe −14 oder Broadcast nahe −23 ist der Lautheitsmesser. Dieses Meter stoppt den vorgeschlagenen Gain auch, wenn der Sample-Peak −1 dBFS überschreiten würde.',
          ],
        },
        {
          heading: 'Wann Normalisieren passt',
          paragraphs: [
            'Nimm es, wenn die ganze Datei einfach zu leise ist und nichts schon am Peak steht:',
          ],
          bullets: [
            'Eine Sprachnotiz weit weg vom Mikrofon, mit Reserven.',
            'Eine Spur, die vor dem Weitergeben nahe Vollausschlag sitzen soll.',
            'Eine Datei, die du danach komprimierst oder anhebst, mit bekanntem Peak als Decke.',
          ],
        },
        {
          heading: 'Wann es enttäuscht',
          paragraphs: [
            'Wenn ein Klick oder ein Atemzug schon nahe Vollausschlag ist, tut Normalisieren fast nichts, weil dieser Peak den Gain setzt. Der Pegelkompressor zieht laut und leise zusammen und gleicht dann den Peak an.',
            'Eine Datei lauter machen mit einem Faktor, den du wählst, auch über 100 Prozent mit Limiter, ist Audio lauter machen. Normalisieren bietet diesen Multiplikator nicht.',
          ],
        },
      ],
      dropHint: 'Audiodateien ablegen oder klicken zum Auswählen',
      exportLabel: 'Normalisieren und laden',
    },
    'slowed-reverb': {
      cardLine: 'Verleihe jedem Track mit einem Klick den verlangsamten Reverb-Sound für späte Nächte.',
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb — Songs online kostenlos verlangsamen',
      description:
        'Mach aus jedem Song im Browser ein Slowed + Reverb: verlangsamen, Hall darüberlegen, als MP3 exportieren. Kostenlos, nichts wird hochgeladen.',
      h1: 'Kostenloser Online-Slowed-Reverb-Maker — Einen Song verlangsamen und Hall hinzufügen',
      heroAlt: 'Einen Track auf etwa 85 % senken und einen weichen Echo-Ausklang hinzufügen',
      subtitle: 'Der Sound für nachts: Titel auf etwa 85 % verlangsamen, Raum dazugeben, exportieren — keine App, kein Upload.',
      intro:
        'Slowed + Reverb nimmt einen Titel auf etwa 80–90 % Geschwindigkeit herunter, die Tonhöhe sinkt mit, und ein weicher Hallschweif lässt alles klingen, als liefe es zwei Räume weiter. Lade einen Song, zieh die Geschwindigkeit auf etwa 85 %, dreh den Hall hoch, bis es sitzt, und exportiere — die ganze Bearbeitung passiert auf deinem Gerät, deshalb sind auch Songs in voller Länge in Sekunden fertig. Schiebst du die Geschwindigkeit stattdessen über 100 %, kommt nightcore dabei heraus.',
      usesHeading: 'Der Slowed-and-Reverb-Klang',
      uses: [
        'Senk einen Track auf etwa 85% und gib ihm Raum. Das ist der übliche späte Mix.',
        'Starte mit einem trockenen Song. Der Effekt ist Verlangsamung und Hall zusammen.',
        'Schneide vor dem Export auf den Abschnitt, damit der Hall nicht das ganze Album füllt.',
      ],
      howTo: [
        {
          name: 'Song ablegen',
          text: 'Jede MP3, WAV, M4A oder eine andere Audiodatei — ein ganzer Song vom Album ist kein Problem, die Verarbeitung bleibt lokal.',
        },
        {
          name: 'Verlangsamen und Raum geben',
          text: 'Zieh die Geschwindigkeit auf etwa 85 % (die klassische Stelle) und den Hall auf 20–30 %. Hör die Vorschau an und vertrau deinen Ohren.',
        },
        {
          name: 'Edit exportieren',
          text: 'Speichere als MP3 mit 320 kbps zum Posten oder als WAV, wenn du in einer anderen App weiterbearbeitest.',
        },
      ],
      faqs: [
        {
          q: 'Welche Geschwindigkeit nehme ich für Slowed + Reverb?',
          a: 'Die meisten Edits landen zwischen 80 % und 90 %, und 85 % ist die Stelle, die meistens sitzt — langsam genug, dass die Tonhöhe klar absinkt, nicht so langsam, dass der Rhythmus auseinanderfällt. Songs mit viel Hi-Hat überstehen das Verlangsamen besser als dichte, schnelle Tracks.',
        },
        {
          q: 'Wie mache ich stattdessen eine nightcore-Version?',
          a: 'Schieb den Geschwindigkeitsregler über 100 % — typischerweise auf 120–130 %. Höhere Geschwindigkeit hebt die Tonhöhe mit an, und genau das ist der nightcore-Sound. Lass den Hall nahe null, wenn du einen klassischen nightcore-Edit willst.',
        },
        {
          q: 'Ändert Verlangsamen die Tonhöhe?',
          a: 'Ja, absichtlich — wie eine Schallplatte mit der falschen Geschwindigkeit. Der Gesang wird tiefer, und die Tonart sinkt im selben Verhältnis. Dieser Tonhöhenabfall ist die Signatur des Stils; Slowed ohne Tonhöhenänderung braucht einen Time-Stretch-Editor, und das ist ein anderes, schwereres Werkzeug. Ein langsamer Kreis, der Tempo und Tonhöhe lässt, ist die 3D-Audio-Seite.',
        },
        {
          q: 'Wie viel Hall soll ich dazugeben?',
          a: 'Starte bei etwa 20–30 % und hör hin. Der Hall ist ein synthetischer Abklingschweif — ab etwa 50 % klingt der Titel wie eine Kathedrale, und der Gesang verliert die Worte.',
        },
        {
          q: 'Darf ich verlangsamte Songs in meinen Videos verwenden?',
          a: 'Einen Titel zu verlangsamen ändert nichts an seinem Urheberrecht. Für Uploads auf YouTube oder TikTok brauchst du weiterhin die Rechte am Originalsong — viele Creator nutzen stattdessen die lizenzierte Musikbibliothek der Plattform und heben Slowed-Edits für eigene Aufnahmen auf.',
        },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Die Tonhöhe sinkt, weil das Tempo sinkt',
          paragraphs: [
            'Slowed + Reverb senkt das Tempo, meist irgendwo zwischen 80 und 90 Prozent, mit 85 Prozent als üblichem Start. Die Tonhöhe sinkt im selben Verhältnis, wie eine Platte in der falschen Geschwindigkeit. Es gibt kein Time-Stretch, das die Tonart halten würde.',
            'Der Hall ist ein synthetisierter Abkling-Schweif. Starte um 20 bis 30 Prozent. Ab etwa 50 Prozent wird der Track zu einem Wasch und Wörter werden schwer verständlich.',
          ],
        },
        {
          heading: 'Nightcore ist dieselbe Seite, die andere Richtung',
          paragraphs: [
            'Schieb das Tempo über 100 Prozent, und die Tonhöhe steigt mit:',
          ],
          bullets: [
            '120 bis 130 Prozent ist der übliche Nightcore-Bereich.',
            'Lass den Hall nahe null für einen klassischen Nightcore-Schnitt.',
            'Dichte Hi-Hats überstehen das Verlangsamen besser als ein volles, schnelles Arrangement.',
          ],
        },
        {
          heading: 'Urheberrecht und die Nachbarwerkzeuge',
          paragraphs: [
            'Einen Track zu verlangsamen ändert nicht, wem er gehört. Ein Video-Upload braucht weiter die Rechte am Originalsong.',
            'Nur das Tempo, von 0,5× bis 2× und ohne Hall-Regler, ist Audio-Geschwindigkeit ändern. Eine höhere oder tiefere Tonart bei gleicher Länge ist der Tonhöhen-Regler. Ein zählbares Echo, das das Tempo nicht ändert, ist die Echo-Seite.',
          ],
        },
      ],
      dropHint: 'Song ablegen oder klicken zum Auswählen',
      exportLabel: 'Verlangsamen und laden',
    },
    'tempo-changer': {
      cardLine: 'Länge von 0,75× bis 1,25× ändern. Die Tonhöhe bleibt.',
      name: 'Tempo-Wechsler',
      shortName: 'Tempo',
      title: 'Tempo ändern — Tonhöhe bleibt online kostenlos',
      description: 'Länge von 0,75× bis 1,25× in Schritten von 0,01. Die Tonhöhe bleibt. 1× streckt nicht. Dichte Harmonien können dünn klingen. Nichts wird hochgeladen.',
      h1: 'Tempo ändern, die Länge zieht und die Tonhöhe bleibt',
      heroAlt: 'Die Länge einer Datei ändern, die Tonhöhe bleibt',
      subtitle: '0,75× bis 1,25×, in Schritten von 0,01. Die Tonart bleibt.',
      intro: 'Leg eine Datei ab und zieh die Geschwindigkeit. Die Datei wird kürzer oder länger, und die Tonhöhe geht zurück an ihren Platz. Der Regler stoppt bei 0,75× und 1,25×. 1× lässt die Samples in Ruhe und streckt nicht. Dichte Harmonien können dünn klingen. Das ist die Grenze dieses Shifters. Nichts wird hochgeladen.',
      usesHeading: 'Neue Länge, gleiche Tonart',
      uses: [
        'Einen Song in einen etwas kürzeren oder längeren Slot legen, ohne die Tonart zu verschieben.',
        'Eine Sprachnotiz etwas strecken. Die Stimme bleibt auf derselben Tonhöhe.',
        '1× exportiert die Datei ohne die Streckung.',
      ],
      howTo: [
        { name: 'Datei ablegen', text: 'MP3, WAV, M4A oder anderes Audio hinzufügen. Die Datei bleibt auf deinem Gerät.' },
        { name: 'Tempo setzen', text: 'Zieh von 0,75× bis 1,25×. Jeder Schritt ist 0,01. 1,00× ist die Datei, die du abgelegt hast.' },
        { name: 'Anhören und exportieren', text: 'Spiel ab, um die neue Länge in der ursprünglichen Tonhöhe zu hören, und speichere als MP3 oder WAV.' },
      ],
      faqs: [
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Der Browser streckt die Datei im Speicher. Nach dem Laden der Seite kannst du offline gehen und eine abgelegte Datei trotzdem exportieren.' },
        { q: 'Klingt es nur länger oder kürzer?', a: 'Ein einzelner Ton bleibt nah am Original. Dichte Harmonien können dünn klingen. Derselbe Shifter wird ab etwa 7 Halbtönen metallisch, und dieser Regler bleibt bei etwa 5.' },
        { q: 'Kann ich langsamer als 0,75× oder schneller als 1,25×?', a: 'Nein. Der Regler stoppt dort. 0,5× und 2× sind die Geschwindigkeitsseite, und dort geht die Tonhöhe mit. 1× auf dieser Seite streckt nicht.' },
        { q: 'Was ist der Unterschied zur Geschwindigkeit und zum Tonhöhen-Regler?', a: 'Die Geschwindigkeitsseite ändert die Länge, und die Tonhöhe geht mit, von 0,5× bis 2×. Der Tonhöhen-Regler verschiebt die Tonhöhe und behält die Länge. Diese Seite ändert die Länge, und die Tonhöhe bleibt.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Der Geschwindigkeitsregler und der Export nehmen einen Tipp in aktuellem Chrome, Edge, Firefox und Safari an.' },
      ],
      sections: [
        {
          heading: 'Die Länge ändert sich, die Tonhöhe bleibt',
          paragraphs: [
            'Die Seite resamplet die Datei zuerst, also ziehen Länge und Tonhöhe zusammen. Danach schiebt sie die Tonhöhe um dasselbe Verhältnis zurück. 0,8× wird 1,25-mal so lang, und die Tonart kehrt zurück.',
            'Der Regler läuft von 0,75× bis 1,25× in Schritten von 0,01. Außerhalb dieses Bereichs gibt es kein Bedienelement. Bei 1× läuft die Streckung nicht, und der Export bleibt bei den Samples, die du abgelegt hast.',
          ],
        },
        {
          heading: 'Wo die Grenze hörbar wird',
          paragraphs: ['Dichte Harmonien können dünn klingen. Eine einzelne Stimme oder ein einzelner Ton bleibt näher dran.'],
          bullets: [
            'Der größere Schritt auf diesem Regler liegt bei etwa 5 Halbtönen. Ab etwa 7 wird dieser Shifter metallisch.',
            'Ein Akkordstapel ist die Stelle, an der der dünne Klang zuerst auffällt.',
            '1× ist die Datei, die du abgelegt hast. Die Streckung wird übersprungen.',
          ],
        },
        {
          heading: 'Die Geschwindigkeitsseite und der Tonhöhen-Regler',
          paragraphs: [
            'Die Geschwindigkeitsseite läuft von 0,5× bis 2×, und die Tonhöhe geht mit dem Tempo. Nimm sie, wenn diese Tonhöhenänderung der Punkt ist.',
            'Der Tonhöhen-Regler verschiebt die Tonart und behält die Länge, bis zu 12 Halbtöne. Diese Seite macht das Gegenteil: die Länge zieht, und die Tonart bleibt.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Tempo ändern',
    },
    'pitch-changer': {
      cardLine: 'Verschiebe einen Song in Halbtönen für Covers und Mashups — gleiche Länge.',
      name: 'Tonhöhen-Regler',
      shortName: 'Tonhöhe',
      title: 'Tonhöhe ändern — Tonhöhe verschieben, Länge bleibt',
      description: 'Verschiebe die Tonhöhe eines Songs oder einer Stimme um bis zu 12 Halbtöne, ohne die Länge zu ändern. Kostenlos, im Browser, nichts wird hochgeladen.',
      h1: 'Kostenloser Online-Tonhöhen-Regler — Die Tonhöhe eines Songs ändern',
      heroAlt: 'Die Tonhöhe einer MP3 verschieben, während das Tempo gleich bleibt',
      subtitle: 'Tonhöhe in Halbtönen nach oben oder unten. Die Länge der Datei bleibt gleich.',
      intro: 'Leg einen Song oder eine Aufnahme ab und zieh den Tonhöhen-Regler. Die Tonart ändert sich, der Takt bleibt liegen. Das ist nicht der Geschwindigkeitsregler: die Datei wird hier weder kürzer noch länger. Die Verschiebung läuft auf deinem Gerät.',
      usesHeading: 'Die Tonhöhe bewegt sich, die Zeit nicht',
      uses: [
        'Schieb einen Song in eine bequemere Tonart zum Mitsingen. Die Datei bleibt gleich lang.',
        'Verschieb eine Stimme um ein paar Halbtöne für eine Figur, ohne die Zeile zu beschleunigen.',
        'Der schneller-und-höher-Effekt ist der Geschwindigkeitswechsler. Diese Seite kürzt das Audio nicht.',
      ],
      howTo: [
        { name: 'Datei ablegen', text: 'Füg eine MP3-, WAV-, M4A- oder andere Audiodatei hinzu. Sie bleibt auf deinem Gerät.' },
        { name: 'Tonhöhe einstellen', text: 'Zieh von −12 bis +12 Halbtöne. +12 ist eine Oktave höher, −12 eine Oktave tiefer. 0 lässt die Datei, wie sie ist.' },
        { name: 'Anhören und exportieren', text: 'Spiel ab, um die neue Tonart in der ursprünglichen Länge zu hören, und speichere als MP3 oder WAV.' },
      ],
      faqs: [
        { q: 'Ändert sich die Länge der Datei?', a: 'Nein. Der Tonhöhen-Regler verschiebt die Tonart und lässt die Dauer in Ruhe. Um eine Datei schneller oder langsamer zu machen — dabei wandert auch die Tonhöhe — nimm den Geschwindigkeitsregler.' },
        { q: 'Wie weit kann ich die Tonhöhe verschieben?', a: 'Von −12 bis +12 Halbtöne, in Einzelschritten. Das ist eine Oktave in jede Richtung. Sprache und ein einzelnes Instrument halten eine große Verschiebung besser aus als ein dichter Mix.' },
        { q: 'Klingt eine große Verschiebung natürlich?', a: 'Ein paar Halbtöne bleiben nah am Original. Ab etwa 7 Halbtönen wird der Klang dünner und metallischer. Das ist die Grenze dieses Reglers, keine Option, die du abschalten kannst.' },
        { q: 'Ist das dasselbe wie die Geschwindigkeit ändern?', a: 'Nein. Der Geschwindigkeitsregler spielt die Datei schneller oder langsamer, die Tonhöhe geht mit und die Länge ändert sich. Diese Seite verschiebt nur die Tonhöhe. Der Tempo-Wechsler ändert die Länge und die Tonhöhe bleibt, von 0,75× bis 1,25×.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Die Verschiebung wird in deinem Browser berechnet und der Export landet auf deinem Gerät.' },
        { q: 'Kann ich die Tonlage eines Songs ändern, um Copyright zu umgehen?', a: 'Nein — eine Tonlagenänderung entfernt keine Rechte an einer Aufnahme. Ein gepitchter Upload kann weiterhin gemeldet und gelöscht werden. Ändere die Tonlage zum Singen oder für Karaoke, und veröffentliche Musik, an der du die Rechte hast.' },
        {
          q: 'Geht das auf dem Handy?',
          a: 'Ja. Die Wellenform ziehst du mit dem Finger. Aktuelles Chrome, Edge, Firefox und Safari dekodieren auf iPhone und Android die üblichen Formate. Eine lange Datei braucht mehr Speicher, deshalb ist der Rechner ab etwa einer Stunde ruhiger.',
        },
      ],
      sections: [
        {
          heading: 'Die Tonart wandert, die Länge bleibt',
          paragraphs: [
            'Der Tonhöhen-Regler verschiebt die Tonart von −12 bis +12 Halbtöne, in Schritten von eins. Das ist eine Oktave in jede Richtung. Die Datei behält dieselbe Länge.',
            'Sprache und ein einzelnes Instrument bleiben weiter brauchbar als ein dichter Mix. Eine große Verschiebung klingt unnatürlich. Es ist kein Urheberrechts-Umweg: die Aufnahme bleibt dieselbe Aufnahme.',
          ],
        },
        {
          heading: 'Wann du den Regler nimmst',
          paragraphs: [
            'Dass die Dauer stehen bleibt, ist der ganze Punkt:',
          ],
          bullets: [
            'Eine Karaoke-Spur in eine Tonart geschoben, die du singen kannst.',
            'Eine Stimme um ein oder zwei Halbtöne gerückt, damit sie zu einem anderen Take passt.',
            'Eine Sounddesign-Verschiebung, bei der das Timing des Clips nicht wandern darf.',
          ],
        },
        {
          heading: 'Tempo ist der andere Regler',
          paragraphs: [
            'Audio-Geschwindigkeit ändern läuft von 0,5× bis 2× und verschiebt die Tonhöhe mit dem Tempo, wie eine Platte. 2× ist etwa eine Oktave höher und die halbe Länge. Diese Seite macht das nicht.',
            'Slowed + Reverb senkt die Tonhöhe ebenfalls, indem es die Datei verlangsamt, und legt einen Ausklang dazu. Wenn du den Nightcore- oder Slowed-Klang willst, ist das die Seite. Wenn du dieselbe Dauer und eine neue Tonart willst, bleib hier.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Tonhöhe ändern und laden',
    },
    'm4a-to-mp3': {
      cardLine: 'Wandle iPhone-Sprachmemos und AAC-Downloads in überall abspielbare MP3s um.',
      name: 'M4A in MP3',
      shortName: 'M4A in MP3',
      title: 'M4A in MP3 — M4A und AAC online kostenlos umwandeln',
      description: 'Wandle M4A- und AAC-Audio im Browser in MP3 um. Kostenlos, ohne Konto, nichts wird hochgeladen. Wähl 128, 192 oder 320 kbps.',
      h1: 'Kostenloser Online-M4A-zu-MP3-Konverter — M4A in MP3 umwandeln',
      heroAlt: 'Eine iPhone-Sprachnotiz oder eine AAC-Datei in MP3 umwandeln',
      subtitle: 'Mach aus M4A- und AAC-Dateien MP3 — im Browser, nichts wird hochgeladen.',
      intro: 'Sprachmemos und AAC-Aufnahmen sind oft M4A. Leg die Datei ab, wähl eine Bitrate, und dein Browser dekodiert sie und speichert ein MP3. Das Audio geht an keinen Server.',
      usesHeading: 'M4A-Dateien, die Leute konvertieren',
      uses: [
        'Mach aus einer iPhone-Sprachnotiz oder einem AAC-Download eine MP3, die mehr Player öffnen.',
        '128 kbps für Sprache, 320 kbps für Musik.',
        'Die M4A bleibt auf diesem Gerät. Für die Konvertierung wird nichts hochgeladen.',
      ],
      howTo: [
        { name: 'M4A ablegen', text: 'Zieh eine .m4a- oder .aac-Datei auf die Seite oder klick zum Auswählen. Ein Video-MP4 gehört auf die Seite MP4 in MP3. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.' },
        { name: 'Bitrate wählen', text: '320 kbps für Musik, 192 kbps fürs tägliche Hören, 128 kbps für Sprachmemos.' },
        { name: 'Umwandeln und laden', text: 'Klick auf In MP3 umwandeln. Dekodieren und Kodieren passiert auf deinem Gerät, danach startet der Download.' },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine M4A umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        { q: 'Kann ich M4A auf iPhone, Android oder Mac in MP3 umwandeln?', a: 'Ja — der Konverter läuft in jedem Browser, das Gerät ist egal. AAC-Audio in einer M4A, so wie Sprachmemos und die meisten AAC-Downloads. Apple Lossless (ALAC) in einer M4A dekodiert der Browser oft nicht. Wandle die Datei zuerst in AAC oder WAV um und bring sie dann hierher.' },
        { q: 'Was ist mit MP4-Video?', a: 'Für Videos nimm den MP4-in-MP3-Wandler. Diese Seite ist für Audio: M4A und AAC.' },
        { q: 'Verliert die Umwandlung in MP3 Qualität?', a: 'MP3 ist verlustbehaftet. Bei 320 kbps ist der Unterschied zum AAC-Original für fast alle klein. Behalt die M4A, wenn du die Originaldatei unangetastet brauchst.' },
        { q: 'Bleiben Tags und Cover erhalten?', a: 'Nein. Das MP3 wird ohne Metadaten geschrieben, wie beim WAV-Wandler. Titel, Interpret und Cover werden nicht übernommen.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Dein Browser dekodiert die M4A und kodiert das MP3 lokal. Das Audio bleibt auf deinem Gerät.' },
      ],
      sections: [
        {
          heading: 'Sprachnotizen und AAC, kein Video',
          paragraphs: [
            'Diese Seite wandelt M4A- und AAC-Audio in MP3. Sprachnotizen und die meisten AAC-Downloads sind AAC in der M4A, und das dekodiert der Browser. Apple Lossless (ALAC) in einer M4A dekodiert der Browser oft nicht. Wandle diese Datei zuerst nach AAC oder WAV, und bring sie dann hierher.',
            'Ein MP4-Video gehört zu MP4 in MP3. Dort kommt die Tonspur vom Bild. Hier ist nur Audio.',
          ],
        },
        {
          heading: 'Was die MP3 behält',
          paragraphs: [
            'MP3 ist verlustbehaftet. Das Menü ist die übliche Bitrate:',
          ],
          bullets: [
            '320 kbps, wenn die Notiz oder der Song nah am AAC bleiben soll.',
            '192 kbps für Sprache, die du weiter hörst.',
            '128 kbps, wenn die Datei vor allem klein genug zum Verschicken sein muss.',
          ],
        },
        {
          heading: 'Tags werden nicht kopiert',
          paragraphs: [
            'Titel, Künstler und Cover werden nicht übernommen. Die MP3 wird ohne Metadaten geschrieben. Setze sie mit dem MP3-Tag-Editor wieder, wenn der Player einen Namen braucht.',
            'Behalte die M4A, wenn du das Original noch brauchst. Die Umwandlung lädt die Datei nicht hoch. Kürze nach der MP3, unter Audio kürzen oder MP3 schneiden, wenn die Notiz an den Enden Stille hat.',
          ],
        },
      ],
      dropHint: 'M4A- oder AAC-Dateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'ogg-to-mp3': {
      cardLine: 'Mach OGG-Dateien aus Gameclips oder Linux-Aufnahmen in jeder App abspielbar.',
      name: 'OGG in MP3 umwandeln',
      shortName: 'OGG zu MP3',
      title: 'OGG in MP3 umwandeln — kostenlos im Browser',
      description: 'Wandle OGG-Dateien im Browser in MP3 um, ohne Größenlimit. Kostenlos, ohne Konto, nichts wird hochgeladen. Vorbis oder Opus in OGG, mit 128, 192 oder 320 kbps.',
      h1: 'Kostenloser Online-OGG-zu-MP3-Konverter — OGG in MP3 umwandeln',
      heroAlt: 'Vorbis oder Opus in einer OGG-Datei in MP3 umwandeln',
      subtitle: 'Mach aus OGG-Audio eine MP3 — im Browser, nichts wird hochgeladen.',
      intro: 'OGG ist ein Container, meist mit Vorbis, manchmal mit Opus. Leg die Datei ab, wähl eine Bitrate, und dein Browser dekodiert sie und speichert eine MP3. Die Audiodatei geht an keinen Server.',
      usesHeading: 'OGG-Dateien, die Leute konvertieren',
      uses: [
        'Öffne einen Game-Rip, einen Download oder eine Browseraufnahme, die als OGG kam.',
        'Speichere eine MP3 fürs Handy, ins Auto oder in einen Editor, der kein OGG nimmt.',
        'Sprache bei 128 kbps, Musik höher. Nochmal versuchen ist lokal und kostenlos.',
      ],
      howTo: [
        { name: 'OGG ablegen', text: 'Zieh eine .ogg- oder .oga-Datei auf die Seite oder klick zum Auswählen. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.' },
        { name: 'Bitrate wählen', text: '320 kbps für Musik, 192 kbps fürs tägliche Hören, 128 kbps für Sprache.' },
        { name: 'Umwandeln und laden', text: 'Klick auf In MP3 umwandeln. Dekodieren und Kodieren passieren auf deinem Gerät, dann lädt die MP3 herunter.' },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine OGG umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        { q: 'Was ist eine OGG-Datei?', a: 'OGG ist ein Container. Musik darin nutzt meist Vorbis. Manche Sprachdateien nutzen Opus. Wenn dein Browser die Datei dekodieren kann, macht diese Seite eine MP3 daraus.' },
        { q: 'Welche Browser wandeln OGG um?', a: 'Chrome und Firefox dekodieren Vorbis und Opus in OGG. Safari dekodiert Opus und lehnt Vorbis oft ab. Wenn die Datei in einem normalen Tab nicht abspielt, kann diese Seite sie auch nicht umwandeln.' },
        { q: 'Verliert OGG zu MP3 an Qualität?', a: 'MP3 ist verlustbehaftet. Bei 320 kbps ist der Unterschied für fast alle klein. Behalt die OGG, wenn du die Originaldatei brauchst.' },
        { q: 'Bleiben Tags und Cover erhalten?', a: 'Nein. Die MP3 wird ohne Metadaten geschrieben. Titel, Künstler und Cover werden nicht kopiert.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Dein Browser dekodiert die OGG und kodiert die MP3 lokal. Die Audiodatei bleibt auf deinem Gerät.' },
      ],
      sections: [
        {
          heading: 'Vorbis oder Opus in einem OGG',
          paragraphs: [
            'OGG ist ein Container. Musikdateien darin nutzen meist Vorbis. Manche Sprachdateien nutzen Opus. Diese Seite wandelt beides, wenn der Browser es dekodieren kann.',
            'Chrome und Firefox dekodieren Vorbis und Opus in OGG. Safari dekodiert Opus und lehnt Vorbis oft ab. Bleibt ein normaler Tab stumm, kann diese Seite diese Datei auch nicht wandeln.',
          ],
        },
        {
          heading: 'Bitrate, und was du aufgibst',
          paragraphs: [
            'MP3 ist verlustbehaftet. Bei 320 kbps ist der Unterschied für die meisten Hörsituationen klein. Behalte das OGG, wenn du das Original brauchst:',
          ],
          bullets: [
            '320 kbps für Musik, die du behältst.',
            '192 kbps für eine Sprachdatei oder eine kleinere Kopie.',
            '128 kbps, wenn das Ziel nur verständliche Sprache braucht.',
          ],
        },
        {
          heading: 'Eine .opus-Datei ist die andere Seite',
          paragraphs: [
            'WhatsApp- und Telegram-Sprachnotizen sind oft eine .opus-Datei, oder Opus in WebM. Die gehören zu Opus in MP3. Diese Seite ist der OGG-Container.',
            'Titel, Künstler und Cover werden nicht kopiert. Die MP3 wird ohne Metadaten geschrieben. Nichts wird hochgeladen.',
          ],
        },
      ],
      dropHint: 'OGG-Dateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'opus-to-mp3': {
      cardLine: 'Wandle Opus-Anrufe und Downloads in MP3 um, die jeder Player akzeptiert.',
      name: 'Opus in MP3 umwandeln',
      shortName: 'Opus zu MP3',
      title: 'Opus in MP3 umwandeln — WhatsApp-Sprachnachrichten',
      description: 'Wandle Opus-Audio im Browser in MP3 um. Kostenlos, ohne Konto, nichts wird hochgeladen. Für .opus und für Opus in OGG oder WebM.',
      h1: 'Kostenloser Online-Opus-zu-MP3-Konverter — Opus in MP3 umwandeln',
      heroAlt: 'Eine WhatsApp- oder Telegram-Sprachnachricht in MP3 umwandeln',
      subtitle: 'Mach aus Opus-Audio eine MP3 — im Browser, nichts wird hochgeladen.',
      intro: 'Sprachnachrichten und manche Downloads sind Opus: eine .opus-Datei, oder Opus in OGG oder WebM. Leg die Datei ab, wähl eine Bitrate, und dein Browser dekodiert sie und speichert eine MP3. Die Audiodatei geht an keinen Server.',
      usesHeading: 'Opus-Dateien, die Leute konvertieren',
      uses: [
        'Mach aus einer Sprachnachricht oder einem Opus-Export eine MP3 für einen Player, der Opus nicht öffnet.',
        'Sprache ist bei 128 kbps in Ordnung. Du wechselst das Format, das Leute abspielen können, nicht die Länge.',
        'Hier konvertieren, dann schneiden, wenn die Nachricht an einem Ende lange Stille hat.',
      ],
      howTo: [
        { name: 'Opus ablegen', text: 'Zieh eine .opus-Datei auf die Seite oder klick zum Auswählen. OGG und WebM mit Opus funktionieren genauso. Mehrere Dateien teilen sich die Einstellung, die du als Nächstes wählst. Eine Datei kommt allein, zwei oder mehr als ein ZIP.' },
        { name: 'Bitrate wählen', text: '128 kbps reichen für eine Sprachnachricht. Ist die Opus-Datei Musik, nimm 192 oder 320 kbps.' },
        { name: 'Umwandeln und laden', text: 'Klick auf In MP3 umwandeln. Dekodieren und Kodieren passieren auf deinem Gerät, dann lädt die MP3 herunter.' },
      ],
      faqs: [
        { q: 'Kann ich mehr als eine Opus-Datei umwandeln?', a: 'Ja. Mehrere Dateien teilen sich die Einstellung auf dieser Seite. Sie laufen nacheinander auf diesem Gerät, und jede Datei wird freigegeben, bevor die nächste beginnt. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        { q: 'Was ist das Opus-Format?', a: 'Opus ist ein Audio-Codec. WhatsApp- und Telegram-Sprachnachrichten sind oft .opus. Opus steckt auch in OGG und WebM. Diese Seite macht daraus eine MP3, die überall abspielt.' },
        { q: 'Welche Opus-Dateien funktionieren?', a: 'Dateien, die dein Browser schon abspielen kann: .opus, OGG mit Opus und WebM mit Opus, in Chrome, Firefox und aktuellem Safari. Bleibt ein normaler Tab stumm, kann diese Seite die Datei auch nicht dekodieren.' },
        { q: 'Verliert Opus zu MP3 an Qualität?', a: 'MP3 ist verlustbehaftet, Opus auch. Bei 320 kbps ist die MP3 so klar, wie MP3 wird. Sprachnachrichten sind bei 128 kbps in Ordnung. Behalt die Opus-Datei, wenn du das Original brauchst.' },
        { q: 'Bleiben Tags erhalten?', a: 'Nein. Die MP3 wird ohne Metadaten geschrieben. Titel und Künstler werden nicht kopiert.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Dein Browser dekodiert das Opus-Audio und kodiert die MP3 lokal. Die Audiodatei bleibt auf deinem Gerät.' },
      ],
      sections: [
        {
          heading: 'Sprachnotizen, die nur manche Player öffnen',
          paragraphs: [
            'Opus ist der Codec in vielen WhatsApp- und Telegram-Sprachnotizen, gespeichert als .opus. Er sitzt auch in OGG und WebM. Diese Seite macht daraus eine MP3, die ein Auto, ein Telefon oder ein älterer Player öffnet.',
            'Der Browser muss die Datei schon abspielen können. Chrome, Firefox und aktuelles Safari schaffen .opus, Opus in OGG und Opus in WebM. Bleibt ein normaler Tab stumm, kann diese Seite sie auch nicht dekodieren.',
          ],
        },
        {
          heading: 'Sprache braucht keine 320',
          paragraphs: [
            'Eine Sprachnotiz ist Sprache. Wähle die Bitrate danach:',
          ],
          bullets: [
            '128 kbps reicht für eine Notiz, die du verschickst oder behältst.',
            '192 kbps, wenn unter der Stimme Musik liegt und dir das wichtig ist.',
            '320 kbps nur, wenn die Opus-Datei Musik ist und die MP3 nah dran bleiben soll.',
          ],
        },
        {
          heading: 'Tags, und die OGG-Seite',
          paragraphs: [
            'Titel und Künstler werden nicht kopiert. Die MP3 wird ohne Metadaten geschrieben. Ein OGG, das eigentlich Vorbis-Musik ist, gehört zu OGG in MP3, der Seite mit dem Namen dieses Containers.',
            'Nichts wird hochgeladen. Hat die Notiz an den Enden lange Stille, wandle zuerst und kürze danach. Stille entfernen passt zu einer Sprachnotiz mit langen Pausen, nicht zu einem leisen Musikbett.',
          ],
        },
      ],
      dropHint: 'Opus-Dateien ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'waveform-generator': {
      cardLine: 'Verwandle jeden Track in ein teilbares Wellenform-Bild in deinen Farben.',
      name: 'Wellenform-Generator',
      shortName: 'Wellenform',
      title: 'Wellenform-Generator — Audio als Wellenbild, kostenlos',
      description: 'Mach aus einem Song oder einer Aufnahme ein Wellenbild. Farben, Stil und Größe wählen, PNG in hoher Auflösung laden. Kostenlos im Browser, kein Upload.',
      h1: 'Kostenloser Online-Audio-Wellenform-Generator — Ein Wellenform-Bild erzeugen',
      heroAlt: 'Die Wellenform eines Songs als PNG speichern',
      subtitle: 'Ein Wellenbild deiner Audiodatei — Farben, Größe und transparentes PNG, gezeichnet auf deinem Gerät.',
      intro: 'Leg einen Song, eine Sprachnotiz oder einen Podcast ab und hol dir ein Wellenbild für Cover, Videohintergrund oder Social Post. Balken oder Fläche, Farben, dann PNG in Video-, Quadrat- oder Bannergröße. Der Browser zeichnet das Bild aus der Datei, die du geöffnet hast — nichts wird hochgeladen.',
      usesHeading: 'Wofür das Bild taugt',
      uses: [
        'Ein Podcast- oder Songcover mit Wellenform statt einem leeren Quadrat.',
        'Ein transparentes PNG zum Legen über Video oder ein Vorschaubild.',
        'Ein breites Banner für den Seitenkopf oder eine Video-Endkarte.',
      ],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Das Dekodieren bleibt auf deinem Gerät.' },
        { name: 'Aussehen wählen', text: 'Wähle eine Vorlage, oder stell Stil und Farben selbst ein. Setze Start und Ende, wenn nur ein Abschnitt ins Bild soll. Vorgaben: 1920×1080, Quadrat, Social und Banner.' },
        { name: 'PNG laden', text: 'Die Vorschau ist das Exportbild. Vorgaben kommen in doppelter Auflösung, damit es scharf bleibt.' },
      ],
      faqs: [
        { q: 'Wird meine Audiodatei hochgeladen?', a: 'Nein. Der Browser dekodiert die Datei und zeichnet das Bild auf einem Canvas. Es gibt keinen Upload. Nach dem Laden der Seite geht es auch offline.' },
        { q: 'Bleibt das PNG scharf?', a: 'Vorgaben exportieren mit doppelt so vielen Pixeln — ein 1920×1080-Cover wird 3840×2160. PNG ist verlustfrei. Eigene Größen über etwa zwei Millionen Pixel exportieren mit 1×, damit der Tab nicht den Speicher auffrisst.' },
        { q: 'Kann ich die Audiodatei hier schneiden?', a: 'Nein. Diese Seite zeichnet nur ein Bild. Zum Schneiden oder Kürzen den Audio-Trimmer nutzen, und danach zurückkommen, wenn du das Bild noch willst.' },
        { q: 'Ist das dasselbe wie ein Spektrogramm?', a: 'Nein. Eine Wellenform zeigt die Lautstärke über die Zeit — die Form aus dem Player. Ein Spektrogramm zeigt, welche Frequenzen vorkommen. Dafür gibt es den Spektrogramm-Generator.' },
        { q: 'Geht ein transparenter Hintergrund?', a: 'Ja. „Transparenter Hintergrund“ an lassen, dann hat das PNG keine Fläche und liegt auf Video oder einem anderen Bild. Aus schaltet eine deckende Hintergrundfarbe ein.' },
        { q: 'Funktioniert das auf dem Handy?', a: 'Ja. Auf schmalen Bildschirmen stehen die Regler untereinander, der Download bleibt erreichbar. Aktuelles Chrome, Edge, Firefox und Safari, auf dem Desktop und mobil.' },
      ],
      sections: [
        {
          heading: 'Ein Bild der Lautstärke, kein Schnitt',
          paragraphs: [
            'Der Wellenform-Generator zeichnet Lautstärke über die Zeit: gespiegelte Balken oder eine gefüllte Form, in den Farben, die du wählst. Der Download ist ein PNG. Voreingestellte Größen exportieren mit der doppelten Pixelzahl, also kommt ein 1920×1080-Cover als 3840×2160 herunter.',
            'Eigene Größen über etwa zwei Millionen Pixel exportieren mit 1×, damit der Tab nicht den Speicher verliert. PNG ist verlustfrei. Diese Seite schneidet nicht, blendet nicht ein und hebt das Audio nicht an.',
          ],
        },
        {
          heading: 'Formen, die Leute herunterladen',
          paragraphs: [
            'Wähle den Rahmen danach, wo das Bild sitzen soll:',
          ],
          bullets: [
            'Videogröße für einen Hintergrund oder eine Endcard.',
            'Quadrat für ein Podcast- oder Song-Cover.',
            'Ein breites Banner für einen Header. Lass den Hintergrund transparent, wenn du das PNG über Video oder ein anderes Bild legst.',
          ],
        },
        {
          heading: 'Es ist kein Spektrogramm',
          paragraphs: [
            'Eine Wellenform ist die Form, die ein Player zeichnet. Ein Spektrogramm zeigt, welche Frequenzen da sind. Für dieses Bild nimm Spektrogramm erstellen.',
            'Um die Datei zuerst zu kürzen, nimm Audio kürzen und komm dann für das Bild zurück. Du kannst das PNG nicht zurück in den Song spielen. Ein Bild in eine WAV zu schreiben ist Bild zu Audio, die andere Richtung.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'PNG herunterladen',
    },
    'spectrogram-generator': {
      cardLine: 'Sieh die Frequenzen in einem Song, einer Aufnahme oder einem Vogelruf.',
      name: 'Spektrogramm erstellen',
      shortName: 'Spektrogramm',
      title: 'Spektrogramm online — Audio als Bild, kostenlos',
      description: 'Aus Audio ein Spektrogramm erzeugen und als PNG laden. Log- oder lineare Frequenz, Farben, dB-Bereich. Kostenlos im Browser, kein Upload.',
      h1: 'Kostenloses Online-Audio-Spektrogramm — Die Frequenzen einer Aufnahme sehen',
      heroAlt: 'Ein Frequenzbild eines Songs als PNG herunterladen',
      subtitle: 'Sieh, welche Frequenzen in einem Song oder einer Aufnahme stecken, und lade das Bild. Gerechnet wird auf deinem Gerät.',
      intro: 'Ein Spektrogramm zeigt, welche Frequenzen mit der Zeit da sind: Sprache, Bass und alles, was jemand in den Klang gezeichnet hat. Datei ablegen, log oder linear wählen, PNG laden. Die FFT läuft im Browser, nichts wird hochgeladen.',
      usesHeading: 'Wonach Leute hier schauen',
      uses: [
        'Vor dem EQ sehen, wo Bass, Stimme und Rauschen sitzen.',
        'Ein Bild oder ein Wort finden, das in den Frequenzen steckt.',
        'Ein Standbild eines Songs für einen Post, eine Stunde oder eine Notiz exportieren.',
      ],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Das Dekodieren bleibt auf deinem Gerät.' },
        { name: 'Ansicht setzen', text: 'Logarithmisch ist die übliche Musikansicht. Obere Frequenz enger ziehen. Ist ein verstecktes Bild zu dunkel oder zu hell, Boden und Decke in dB verschieben. Nur ein Abschnitt: Zeitbereich kürzen.' },
        { name: 'PNG laden', text: 'Vorgaben kommen in doppelter Auflösung. Das Bild ist kein Audio — das PNG lässt sich nicht zurück in den Song spielen.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Der Browser dekodiert die Datei und rechnet die FFT in diesem Tab. Kein Upload. Nach dem Laden geht es auch offline.' },
        { q: 'Was bedeuten die Farben?', a: 'Jede Spalte ist ein Moment. Die Höhe ist die Frequenz, hohe Töne oben. Heller heißt mehr Energie. Viridis, Inferno und Grau sind dieselben Daten mit anderer Skala. Boden und Decke in dB legen fest, was leise und laut ist.' },
        { q: 'Kann ich das Bild zurück in Audio wandeln?', a: 'Nein. Das PNG ist eine Zeichnung der Pegel, nicht die Wellenform. Zum Hören das Original behalten. Ein Bild in Audio setzen: Bild zu Audio, die WAV dann hier öffnen.' },
        { q: 'Was ist der Unterschied zum Wellenform-Generator?', a: 'Eine Wellenform ist Lautstärke über die Zeit — die Form im Player. Ein Spektrogramm zeigt, welche Frequenzen da sind. Coverbild: Wellenform. Frequenzen prüfen oder sichtbar machen: diese Seite.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Auf einem schmalen Schirm stehen die Regler untereinander, der Download bleibt erreichbar. Aktuelle Chrome, Edge, Firefox und Safari, Desktop und Mobil. Eine lange Datei braucht einen Moment, weil jede Spalte eine FFT ist.' },
        { q: 'Warum steckt in manchen Songs ein Bild?', a: 'Manche Stücke, bekannt Aphex Twin, zeichnen ein Bild, indem sie Energie auf gewählte Frequenzen legen. Decke in dB anheben, wenn das Bild blass ist, und die log-Achse lassen. Diese Seite zeigt es nur. Erzeugen tut das Bild zu Audio.' },
      ],
      sections: [
        {
          heading: 'Frequenz über die Zeit, als PNG',
          paragraphs: [
            'Jede Spalte ist ein Augenblick. Die Höhe ist die Frequenz, hohe Töne oben. Hellere Farbe heißt mehr Energie. Viridis, Inferno und Grau sind dieselben Daten mit einer anderen Skala. Boden und Decke in dB entscheiden, was als leise und laut zählt.',
            'Das Bild ist eine FFT der Datei, gezeichnet in diesem Tab. Es ist kein Audio. Du kannst das PNG nicht zurück in den Song spielen.',
          ],
        },
        {
          heading: 'Wie du ein verstecktes Bild liest',
          paragraphs: [
            'Einige Tracks zeichnen ein Bild, indem sie Energie auf gewählte Frequenzen legen. Diese Seite kann das zeigen. Sie erzeugt es nicht:',
          ],
          bullets: [
            'Lass die log-Achse für die übliche Musikansicht. Sie streckt das Tiefe.',
            'Heb die dB-Decke an, wenn ein verstecktes Bild blass ist.',
            'Kürze den Zeitbereich, wenn du nur einen Abschnitt der Datei willst.',
          ],
        },
        {
          heading: 'Wellenform, und der umgekehrte Trick',
          paragraphs: [
            'Der Wellenform-Generator ist Lautstärke über die Zeit, die Form für ein Cover. Diese Seite zeigt, welche Frequenzen da sind.',
            'Um eine WAV zu bauen, deren Spektrogramm dein Bild oder eine kurze Textzeile zeigt, nimm Bild zu Audio und öffne diese WAV hier. Log-Frequenz, Decke um −20 dB. Die Form sitzt zwischen etwa 400 Hz und 12 kHz. Diese Seite zeigt nur.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder zum Durchsuchen klicken',
      exportLabel: 'PNG herunterladen',
    },
    'image-to-audio': {
      cardLine: 'Verstecke ein Bild oder eine Textzeile im Spektrogramm einer WAV.',
      name: 'Bild zu Audio',
      shortName: 'Bild zu Audio',
      title: 'Bild zu Audio — Spektrogramm aus einem Bild erstellen',
      description: 'Ein Bild oder eine kurze Zeile wird zu einer WAV, die ein Spektrogramm zeigt. Kostenlos im Browser, nichts wird hochgeladen.',
      h1: 'Kostenloses Online-Bild-zu-Audio — Ein Bild in Klang verwandeln',
      heroAlt: 'Ein Spektrogramm-Bild wieder in eine WAV-Datei zurückverwandeln',
      subtitle: 'Ein Bild oder eine Zeile Text in die Frequenzen einer WAV malen. Das Spektrogramm zeigt sie wieder.',
      intro: 'Tippe eine kurze Zeile oder lege ein Bild ab. Diese Seite schreibt die Form in die Frequenzen einer WAV — derselbe Trick wie ein Bild in einem Song. Es ist kein Song und keine Sprache. Öffne die WAV im Spektrogramm-Generator. Nichts wird hochgeladen.',
      usesHeading: 'Was Leute damit machen',
      uses: [
        'Einen Namen oder eine Zeile dort verstecken, wo ein Spektrogramm sie liest.',
        'Ein einfaches Logo oder eine Zeichnung in ein kurzes Tonbild verwandeln.',
        'Eine Datei bauen, die direkt in den Spektrogramm-Generator wandert.',
      ],
      howTo: [
        { name: 'Tippen oder ablegen', text: 'Bis zu 32 Zeichen, oder PNG, JPG, WebP. Die Vorschau ist das Bild, das geschrieben wird. Helle Pixel sind lautere Frequenzen.' },
        { name: 'WAV laden', text: 'Du bekommst eine WAV mit 44,1 kHz, 16 Bit. Sie klingt nach Zwitschern und Rauschen, nicht nach dem Bild vorgelesen.' },
        { name: 'Spektrum ansehen', text: 'Öffne die WAV im Spektrogramm-Generator. Log-Achse, Decke um −20 dB. Die Form liegt ungefähr zwischen 400 Hz und 12 kHz.' },
      ],
      faqs: [
        { q: 'Wird mein Bild hochgeladen?', a: 'Nein. Der Browser zeichnet Text oder Bild und baut die WAV in diesem Tab. Kein Upload. Nach dem Laden geht es auch offline.' },
        { q: 'Welche Datei bekomme ich?', a: 'Eine Mono-WAV, 44,1 kHz, 16-Bit-PCM, ein paar Sekunden. Kein MP3. Das Bild steckt in den Frequenzen; ein MP3 mit niedriger Bitrate kann die Form verwischen.' },
        { q: 'Klingt es wie das Bild oder die Worte?', a: 'Nein. Keine Sprachsynthese und kein Musikgenerator. Du hörst Töne dort, wo die Pixel hell sind. Zum Lesen ein Spektrogramm öffnen.' },
        { q: 'Was ist der Unterschied zum Spektrogramm-Generator?', a: 'Der Spektrogramm-Generator zeichnet Audio, das du schon hast. Diese Seite macht das Umgekehrte: sie baut Audio, damit ein Spektrogramm dein Bild oder deine Zeile zeigt. Der Wellenform-Generator zeigt nur Lautstärke, die versteckte Form ist dort kaum zu sehen.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Tippen, Foto wählen, laden. Aktuelle Chrome, Edge, Firefox und Safari, Desktop und Mobil. Ein sehr detailliertes Foto wird verkleinert, damit die Datei kurz bleibt.' },
        { q: 'Ist das ein Geheimcode?', a: 'Nein. Wer ein Spektrogramm der WAV öffnet, sieht das Bild. Es ist eine sichtbare Zeichnung im Klang, keine Verschlüsselung.' },
      ],
      sections: [
        {
          heading: 'Ein Bild, in Frequenzen geschrieben',
          paragraphs: [
            'Tippe bis zu 32 Zeichen, oder leg ein PNG, JPG oder WebP ab. Die Seite schreibt diese Form in die Frequenzen einer Mono-WAV mit 44,1 kHz, 16 Bit, ein paar Sekunden lang. Helle Pixel werden lautere Frequenzen.',
            'Es ist kein Song und keine Sprache. Du hörst Zwitschern und Rauschen, nicht die Wörter laut gesprochen. Ein sehr detailliertes Foto wird verkleinert, damit die Datei kurz bleibt.',
          ],
        },
        {
          heading: 'Wie du siehst, was du geschrieben hast',
          paragraphs: [
            'Die Form ist auf einer normalen Wellenform unsichtbar. Öffne die WAV im Spektrogramm:',
          ],
          bullets: [
            'Log-Frequenz, Decke um −20 dB.',
            'Die Zeichnung sitzt zwischen etwa 400 Hz und 12 kHz.',
            'Behalte die WAV. Eine MP3 mit niedriger Bitrate kann die Form verwischen.',
          ],
        },
        {
          heading: 'Kein Code, und nicht die Spektrogramm-Seite',
          paragraphs: [
            'Wer ein Spektrogramm der WAV öffnet, sieht das Bild. Es ist eine Zeichnung im Klang, keine Verschlüsselung.',
            'Spektrogramm erstellen zeichnet ein Bild von Audio, das du schon hast. Diese Seite baut Audio, damit dieses Bild dein Motiv oder deine Zeile zeigt. Der Wellenform-Generator zeigt nur Lautstärke, die versteckte Form ist dort nicht offensichtlich.',
          ],
        },
      ],
      dropHint: 'Oder ein Bild ablegen',
      exportLabel: 'WAV herunterladen',
    },
    'mp3-tag-editor': {
      name: 'MP3-Tag-Editor',
      shortName: 'Tag-Editor',
      title: 'MP3-Tags online bearbeiten — ID3 & Cover ändern, kostenlos',
      description:
        'MP3-Tags direkt im Browser bearbeiten: Titel, Künstler, Album, Jahr, Track und Cover. Die Datei wird nie hochgeladen. Kostenlos, ohne Anmeldung.',
      h1: 'Kostenloser Online-MP3-Tag-Editor — ID3-Tags bearbeiten',
      heroAlt: 'Titel, Künstler und Cover einer MP3 ändern',
      subtitle: 'Titel, Künstler, Album und Cover einer MP3 in unter einer Minute richten — direkt im Browser, nichts wird hochgeladen.',
      intro:
        'Eine MP3 trägt zwei Dinge in sich: die Musik und die Info-Karte, die Player daneben anzeigen — Titel, Künstler, Album, Jahr, Cover. Stimmt diese Karte nicht oder fehlt sie, fällt alles vom Handy bis zum Autoradio auf „Unbekannter Künstler“ oder Track 01 zurück. Datei hier ablegen, Felder ausbessern, speichern: Die Audiodaten werden Byte für Byte unverändert kopiert und verlassen dein Gerät nie.',
      usesHeading: 'Tags, die wirklich mal repariert werden müssen',
      uses: [
        'Downloads aufräumen, die im Musik-Player als „Unbekannter Künstler“ oder ohne Cover auftauchen.',
        'Podcast-Folgen oder Demotracks vor dem Veröffentlichen mit richtigem Titel, Cover und Credits versehen.',
        'Vor dem Teilen einer Aufnahme die übrig gebliebenen Geräte- und Standort-Metadaten entfernen.',
      ],
      howTo: [
        { name: 'MP3 reinziehen', text: 'Datei hierher ziehen oder zum Durchsuchen klicken. Die aktuellen Tags und das Cover werden auf deinem Gerät gelesen und im Formular angezeigt. Mehrere MP3s können Künstler, Album, Jahr, Genre und Cover teilen. Titel und Tracknummer bleiben bei jeder Datei. Zwei oder mehr kommen als ZIP.' },
        { name: 'Felder ausfüllen', text: 'Richtigen Titel, Künstler, Album, Jahr und Tracknummer eintragen und das Cover mit einem JPG oder PNG ergänzen oder ersetzen.' },
        { name: 'MP3 speichern', text: 'Mit „MP3 speichern“ die Datei mit Tags herunterladen. Das Audio wird unverändert kopiert — neu geschrieben wird nur die Info-Karte drumherum.' },
      ],
      faqs: [
        { q: 'Kann ich ein ganzes Album taggen?', a: 'Ja. Lege mehrere MP3s ab. Künstler, Album, Jahr, Genre und Cover gelten für jede Datei. Titel und Tracknummer bleiben in der jeweiligen Zeile. Leere Tracknummern beginnen bei 1. Eine Datei kommt allein, zwei oder mehr als ZIP. Der Ton wird weiter Byte für Byte kopiert.' },
        { q: 'Wird meine MP3 auf einen Server hochgeladen?', a: 'Nein. Die Datei wird mit der FileReader-API des Browsers geöffnet und direkt in deinem Tab neu geschrieben. Du kannst die Seite laden, das WLAN ausmachen, und der Editor funktioniert trotzdem. Einen Upload-Schritt gibt es gar nicht.' },
        { q: 'Ändert das Bearbeiten der Tags die Audioqualität?', a: 'Nein. Tag-Daten liegen in einem eigenen Block am Anfang der Datei, und die MPEG-Audioframes werden Byte für Byte kopiert — der Klang ist bitidentisch. Die gespeicherte Datei kann sogar etwas kleiner werden, weil der alte Tag-Block samt Padding nicht übernommen wird.' },
        { q: 'Was ist der Unterschied zum MP3-Editor?', a: 'Der MP3-Editor schneidet, trimmt und fügt das Audio selbst, was Dekodieren und Neukodieren bedeutet. Diese Seite fasst den Klang nie an — sie schreibt nur die Info-Karte drumherum neu. Nimm jenen, um Musik zu bearbeiten, und diesen, um sie zu beschriften.' },
        { q: 'Was kann er nicht?', a: 'Er bearbeitet nur MP3-Dateien — FLAC, M4A und WAV nutzen andere Tag-Formate, die diese Seite noch nicht schreibt. Mehrere MP3s können Künstler, Album, Jahr, Genre und Cover teilen, und jede Datei behält Titel und Tracknummer. Und beim Speichern wird der ganze Tag-Block neu geschrieben, sodass Podcast-Kapitel oder ungewöhnliche eigene Felder aus dem Original-Tag nicht übernommen werden — die üblichen Felder schon.' },
        { q: 'Warum zeigt mein Autoradio weiter „Track 01“ an?', a: 'Viele Autoradios ignorieren Tags und greifen auf den Dateinamen zurück, und die meisten cachen die alten Informationen, bis du den USB-Stick neu einsteckst oder neu einlesen lässt. Hier speichern (die Datei wird als ID3v2.3 geschrieben, die Version, die Autoradios am zuverlässigsten lesen), die Datei etwa in „01 - Songtitel.mp3“ umbenennen, dann neu einlesen.' },
        { q: 'Meine chinesischen, japanischen, koreanischen oder arabischen Tags sehen wirr aus. Lässt sich das reparieren?', a: 'Ja — meistens heißt das, der alte Tag war in einer Ein-Byte-Kodierung statt in Unicode gespeichert. Tippe den richtigen Text hier neu ein und speichere: Die Datei wird als ID3v2.3 mit UTF-16-Text geschrieben, was moderne Player korrekt anzeigen — chinesische, japanische, koreanische, arabische, kyrillische und Titel in Hindi inklusive.' },
        { q: 'Funktioniert das auf dem Handy?', a: 'Ja — aktuelle Chrome-, Safari-, Firefox- und Edge-Versionen, am Desktop wie mobil. Beim Speichern übergibt die Seite die Datei wie jeden anderen Download; auf dem iPhone legt sie Safari in der Dateien-App ab. Alles läuft lokal, darum klappt es auch bei langsamer Verbindung, sobald die Seite offen ist.' },
      ],
      sections: [
        {
          heading: 'Das Etikett ändert sich, das Audio nicht',
          paragraphs: [
            'Der Tag-Editor schreibt den ID3-Block neu und kopiert die MPEG-Frames Byte für Byte. Der Klang ist bitidentisch. Die gespeicherte Datei kann sogar etwas kleiner sein, weil der alte Tag-Block und sein Padding nicht mitwandern.',
            'Er schreibt ID3v2.3 mit UTF-16-Text, die Version, die Autoradios am zuverlässigsten lesen, und die Titel repariert, die in einer Ein-Byte-Kodierung gespeichert waren und als Zeichensalat auftauchen.',
          ],
        },
        {
          heading: 'Was du setzen kannst und was nicht',
          paragraphs: [
            'Mehrere MP3s oder eine. Nur die üblichen Felder. Künstler, Album, Jahr, Genre und Cover gelten für jede Datei. Titel und Tracknummer bleiben bei jeder Datei:',
          ],
          bullets: [
            'Titel, Künstler, Album und die anderen Alltagsfelder, plus Cover.',
            'Nicht FLAC, M4A oder WAV. Diese Tag-Formate werden hier nicht geschrieben.',
            'Keine Podcast-Kapitel und keine ungewöhnlichen Frames. Speichern schreibt den Tag-Block neu, und diese Frames wandern nicht mit.',
          ],
        },
        {
          heading: 'Warum das Auto weiter Track 01 zeigt',
          paragraphs: [
            'Viele Headunits ignorieren Tags und fallen auf den Dateinamen zurück, und die meisten cachen die alte Information, bis du den USB-Stick neu einliest oder einen Rescan machst. Benenne die Datei um, etwa 01 - Song Title.mp3, und scanne neu.',
            'Schneiden, Einblenden oder das Tempo ändern ist der MP3-Editor, der dekodiert und neu kodiert. Diese Seite fasst den Klang nicht an. Nimm jene, um die Musik zu bearbeiten. Nimm diese, um sie zu beschriften.',
          ],
        },
      ],
      dropHint: 'MP3-Dateien hierher ziehen oder klicken zum Auswählen',
      exportLabel: 'MP3 speichern',
    },
    compressor: {
      cardLine: 'Laute Spitzen runter, leise Wörter rauf — die ganze Datei wird nicht lauter.',
      name: 'Pegelkompressor',
      shortName: 'Kompressor',
      title: 'Pegelkompressor — Lautstärke online angleichen',
      description:
        'Gleicht laute und leise Stellen einer Aufnahme im Browser an. Der Peak bleibt. Keine kleinere Datei. Kostenlos, kein Upload.',
      h1: 'Pegelkompressor – Laute und leise Stellen angleichen',
      heroAlt: 'Die Spitzen einer Sprachaufnahme zähmen, damit die leisen Wörter nach vorn kommen',
      subtitle: 'Ein Breitband-Kompressor, der Pegelsprünge bändigt. Der Peak der Datei bleibt, wo er war.',
      intro:
        'Eine Sprachnotiz, die einen Satz schreit und den nächsten flüstert, braucht Kompression, keinen Lautstärkeregler. Diese Seite fährt einen einzelnen Breitband-Kompressor: Lautes wird leiser, Leises kommt hoch, danach wird der Export so skaliert, dass der Peak zum Ausgangspeak passt. Alles im Browser. Die Datei wird nicht hochgeladen.',
      usesHeading: 'Was ein Kompressor erledigt',
      uses: [
        'Eine Sprachnotiz glätten, bei der jemand nah ans Handy geht und wieder weg.',
        'Einen Podcast-Gast dämpfen, der viel lauter ist als die Moderation.',
        'Eine Stimme vor die Spur setzen, wenn der Refrain aus der Strophe springt.',
      ],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Die Dekodierung bleibt auf deinem Gerät.' },
        { name: 'Stärke einstellen', text: 'Zieh Kompressor. 30–50 % reichen für die meisten Stimmen. 100 % ist stark: Schwelle −36 dB, Verhältnis 8:1.' },
        { name: 'Anhören und exportieren', text: 'Spiel das Ergebnis ab, dann exportiere MP3 oder WAV. Der Peak geht auf den ursprünglichen Peak zurück, knapp unter Vollausschlag.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Der Kompressor ist ein Web-Audio-Dynamikprozessor im Browser-Tab. Nach dem Laden kannst du offline gehen und trotzdem exportieren.' },
        { q: 'Was passiert mit dem Audio?', a: 'Ein Breitband-Kompressor (Schwelle von −18 dB bis −36 dB, Verhältnis von knapp über 1:1 bis 8:1). Der Kompressor hat kein automatisches Makeup, deshalb skaliert die Seite den Export auf den Quell-Peak, oder auf etwa −0.2 dBFS, wenn die Quelle heißer war. WAV behält diese Pegeländerung sauber. MP3 wird einmal neu kodiert.' },
        { q: 'Wird die Datei kleiner?', a: 'Nein. Kleiner wird eine Datei durch eine niedrigere Bitrate — das ist die Seite Audio komprimieren. Diese Seite ändert die Dynamik und überlässt die Bitrate dem Exportformat.' },
        { q: 'Was ist der Unterschied zu Lautstärke und Normalisieren?', a: 'Die Lautstärke-Seite multipliziert die ganze Datei. Normalisieren hebt alles an, bis die lauteste Sample ein Ziel trifft. Beides lässt den Abstand zwischen laut und leise gleich. Diese Seite verkürzt ihn. Eine Band, keine Multiband-Kette, und kein Rauschen entfernen.' },
        { q: 'Verschwindet damit das Raumrauschen?', a: 'Nein. Leise Stellen anzuheben hebt auch Rauschen und Raumton an. Wenn das Rauschen das Problem ist, macht Kompression es deutlicher. Schneide die Stille weg oder nimm neu auf.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Regler und Export funktionieren per Touch in aktuellem Chrome, Edge, Firefox und Safari. Ein paar Minuten Sprache sind auf einem neuen Handy in ein, zwei Sekunden exportiert.' },
      ],
      sections: [
        {
          heading: 'Dynamik, nicht Dateigröße',
          paragraphs: [
            'Der Pegelkompressor ist ein Breitband-Kompressor. Die Schwelle läuft von −18 dB bis −36 dB, das Verhältnis von knapp über 1:1 bis 8:1. Laute Stellen werden leiser, leise rücken relativ dazu nach oben.',
            'Im Kompressor gibt es kein Makeup-Gain. Danach wird der Export so skaliert, dass sein Peak zum Quell-Peak passt, oder auf −0,2 dBFS, wenn die Quelle schon heißer war. Er macht die Datei nicht kleiner. Eine kleinere MP3 ist die Seite Audio-Kompressor.',
          ],
        },
        {
          heading: 'Was er richtet und was nicht',
          paragraphs: [
            'Er verkürzt den Abstand zwischen laut und leise. Es ist ein Band, keine Sprachkette:',
          ],
          bullets: [
            'Eine Sprachnotiz, die einen Satz schreit und den nächsten flüstert.',
            'Ein Mix, in dem laute Hits die leisen Sätze zudecken und du sie näher willst.',
            'Kein Entrauscher. Leise Stellen anzuheben hebt auch Rauschen und Raumton an.',
          ],
        },
        {
          heading: 'Worin er sich von einem Lautstärkeregler unterscheidet',
          paragraphs: [
            'Audio lauter machen multipliziert die ganze Datei. Normalisieren hebt alles an, bis die lauteste Stelle einen Peak trifft. Beides lässt den Abstand zwischen laut und leise gleich. Diese Seite verkürzt ihn.',
            'WAV behält die Pegeländerung ohne eine weitere verlustbehaftete Generation. MP3 wird einmal neu kodiert. Wenn die Datei nur leise ist und die Dynamik stimmt, nimm Audio lauter machen.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken zum Auswählen',
      exportLabel: 'Komprimieren und laden',
    },
    echo: {
      cardLine: 'Wiederholungen, die du zählen kannst: ein kurzer Schlag, kein Hall-Nebel.',
      name: 'Echo',
      shortName: 'Echo',
      title: 'Echo hinzufügen — Wiederholungen online kostenlos',
      description: 'Setze ein zeitlich festes Echo auf beliebiges Audio im Browser. Delay und Wiederholungen stellst du ein. Kostenlos, kein Upload.',
      h1: 'Kostenloses Online-Echo — Echo zu Audio hinzufügen',
      heroAlt: 'Einer Aufnahme Delay und Wiederholungen hinzufügen',
      subtitle: 'Getrennte Wiederholungen in dem Abstand, den du einstellst — vom kurzen Schlag bis 0,8 s.',
      intro: 'Ein Echo ist eine Kopie, die nach einer Lücke zurückkommt, die du zählen kannst. Das Delay geht von wenigen Hundertstelsekunden bis 0,8 Sekunden, die Wiederholungen bestimmen, wie viel von jeder Kopie wieder hineingeht. Der nasse Anteil liegt fest bei 45 %. Delay null lässt die Datei unverändert. Die Verarbeitung bleibt im Browser.',
      usesHeading: 'Echos, die Leute wirklich wollen',
      uses: ['Einen kurzen Schlag auf eine Stimme legen, damit sie Raum hat, ohne zu zerfließen.', 'Einen Gitarren- oder Schlagzeugschlag im Takt zurückkommen lassen.', 'Einen Satz einmal klar zurückhören, statt einer Hallwolke.'],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Die Dekodierung bleibt auf deinem Gerät.' },
        { name: 'Delay und Wiederholungen', text: 'Delay ist die Lücke vor der ersten Kopie, bis 0,8 s. Wiederholungen sind die Rückkopplung, gedeckelt bei 55 %, damit nichts hochschaukelt.' },
        { name: 'Anhören und exportieren', text: 'Spiel es ab, dann exportiere MP3 oder WAV. Die Datei wächst um den Schweif der Wiederholungen, höchstens 4 Sekunden.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Das Echo ist ein Web-Audio-Delay im Browser-Tab. Nach dem Laden kannst du offline gehen und trotzdem exportieren.' },
        { q: 'Was macht der Effekt?', a: 'Eine Kopie wird um die eingestellte Zeit verzögert und mit 45 % zugemischt. Jede Kopie geht mit der Wiederholungsstärke wieder ins Delay, bis 0,55, also werden sie leiser statt zu pfeifen. WAV behält diese Mischung. MP3 wird einmal neu kodiert.' },
        { q: 'Was ist der Unterschied zu Slowed + Reverb?', a: 'Slowed + Reverb ist ein Schleier: die Tonhöhe sinkt mit dem Tempo, der Schweif ist ein Brei aus Reflexionen. Diese Seite behält das Timing und setzt getrennte Kopien dazu. Tempo und Tonhöhe bleiben.' },
        { q: 'Warum werden die Wiederholungen nicht lauter?', a: 'Die Rückkopplung ist bei 55 % gedeckelt, der gerenderte Schweif bei 4 Sekunden. Das reicht für mehrere Kopien. Es wird kein selbsterregtes Rauschen.' },
        { q: 'Kann ich nur einen Teil echoen?', a: 'Ja. Markiere den Abschnitt in der Wellenform und behalte die Auswahl. Die Wiederholungen kommen zu dem, was du exportierst, nicht zum Rest der Datei.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Beide Regler und der Export funktionieren per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Getrennte Kopien, kein Wasch',
          paragraphs: [
            'Echo verzögert eine Kopie des Signals um die Zeit, die du einstellst, von ein paar Hundertstelsekunden bis 0,8 Sekunden, und mischt diese Kopie mit 45 Prozent zurück. Jede Kopie geht mit der Wiederholungsstärke erneut in das Delay.',
            'Die Rückkopplung ist bei 0,55 gedeckelt und der gerenderte Ausklang bei 4 Sekunden, damit die Wiederholungen leiser werden statt zu heulen. Delay auf null lässt die Datei unangetastet. Tempo und Tonhöhe bleiben.',
          ],
        },
        {
          heading: 'Wie die zwei Regler wirken',
          paragraphs: [
            'Delay ist die Lücke vor der ersten Kopie. Wiederholungen ist, wie viel von jeder Kopie zurückgeht:',
          ],
          bullets: [
            'Ein kurzes Delay für einen Schlag, den du noch als zweiten Treffer hörst.',
            'Ein längeres Delay, weiter unter 0,8 Sekunden, wenn du die Kopien einzeln zählen willst.',
            'Nur eine Auswahl, wenn das Echo auf einer Phrase sitzen soll und nicht auf dem Rest der Datei.',
          ],
        },
        {
          heading: 'Echo ist nicht Slowed + Reverb',
          paragraphs: [
            'Slowed + Reverb senkt die Tonhöhe mit dem Tempo und verwischt den Ausklang zu einem Raum. Diese Seite hält das ursprüngliche Timing und legt Kopien dazu, die du getrennt hörst.',
            'Den Anfang oder das Ende einer Datei ein- und auszublenden ist die Fade-Seite. Zwei Songs zu überlappen ist der Audio-Joiner. Beides ist kein Echo.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken zum Auswählen',
      exportLabel: 'Echo hinzufügen',
    },
    'audio-distorter': {
      cardLine: 'Schieb eine saubere Aufnahme in einen warmen oder einen harten Clip.',
      name: 'Audio verzerren',
      shortName: 'Verzerrung',
      title: 'Audio verzerren — vom weichen Clip zum harten',
      description: 'Leg Overdrive auf beliebiges Audio im Browser. Ein Regler, vom warmen Clip zum harten. Nichts wird hochgeladen.',
      h1: 'Audio verzerren — Overdrive auf einer sauberen Aufnahme',
      heroAlt: 'Die Spitzen einer sauberen Aufnahme abflachen',
      subtitle: 'Ein Regler. Der Startwert ist 40 %. Bei 0 % bleibt die Datei, wie du sie abgelegt hast.',
      intro: 'Diese Seite schickt jedes Sample durch eine tanh-Kurve. Beim Start, 40 %, wird ein Sample von 0,25 zu etwa 0,69. Bei 100 % wird dasselbe Sample auf etwa 1 gedrückt. Stärke 0 überspringt die Kurve, die Datei bleibt wie dekodiert. Die Verarbeitung bleibt im Browser.',
      usesHeading: 'Wenn der Clip der Zweck ist',
      uses: ['Leg einen kurzen Overdrive auf eine saubere Gitarre oder einen Synth, damit sie nach vorn kommt.', 'Mach eine Gesangszeile rau für einen Trailer, einen Game-Hit oder einen Podcast-Sting.', 'Fang den Lo-Fi-Korn hier an und dämpfe die neuen Höhen im Tiefpass.'],
      howTo: [
        { name: 'Audio ablegen', text: 'Beliebiges MP3, WAV, M4A, OGG oder FLAC. Dekodiert wird auf deinem Gerät.' },
        { name: 'Stärke einstellen', text: '0 % ist sauber. 40 % ist der Start. 100 % ist der härteste Clip, den diese Seite macht.' },
        { name: 'Anhören und exportieren', text: 'Spiel es ab und exportiere MP3 oder WAV. Die Länge bleibt gleich.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Der Clip ist ein Web-Audio-Waveshaper in diesem Tab. Nach dem Laden der Seite kannst du offline gehen und trotzdem exportieren. WAV geht sofort. MP3 geht, nachdem der Encoder einmal geladen wurde.' },
        { q: 'Was macht der Regler wirklich?', a: 'Stärke 0 setzt keinen Waveshaper ein, die Samples bleiben wie dekodiert. Über 0 wird jedes Sample x zu tanh(k·x) / tanh(k), mit k = 10^(Stärke × 1,6) − 1. Beim Start von 40 % ist k etwa 3,4, und ein Sample von 0,25 wird etwa 0,69. Bei 100 % ist k etwa 39, und dieses Sample wird auf etwa 1 gedrückt. Ein Sample auf Vollausschlag bleibt auf Vollausschlag. Der Knoten überabtastet mit 2×. WAV behält diese Kurve. MP3 wird einmal neu kodiert, mit der Bitrate, die du wählst. Die Länge ändert sich nicht.' },
        { q: 'Was macht diese Seite nicht?', a: 'Sie ist kein Bitcrusher und fügt kein Wow, kein Flutter und keine Radiobandbreite hinzu. Ein dumpfer Lo-Fi-Ton ist diese Seite, danach der Tiefpass. Ein Amp mit Box ist eine DAW-Aufgabe.' },
        { q: 'Worin unterscheidet sich das vom Lautstärke-Booster?', a: 'Der Lautstärke-Booster multipliziert die ganze Datei, dann hält ein Limiter die Spitzen, damit sie nicht rechteckig werden. Diese Seite flacht sie absichtlich ab. Echo legt eine Kopie nach einer Verzögerung dazu. Beides flacht die Wellenform nicht ab.' },
        { q: 'Kann ich nur einen Teil verzerren?', a: 'Ja. Markiere den Abschnitt auf der Wellenform und behalte diese Auswahl. Die Kurve gilt für das, was du exportierst, nicht für den Rest der Datei.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Regler und Export funktionieren mit dem Finger in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Eine Kurve, kein Lautstärkeregler',
          paragraphs: [
            'Die Stärke läuft von 0 % bis 100 %. Der Startwert ist 40 %. Bei 0 % sitzt kein Waveshaper im Graphen, der Export entspricht der dekodierten Datei.',
            'Über 0 wird jedes Sample x zu tanh(k·x) / tanh(k). k ist 10^(Stärke × 1,6) − 1. Bei 40 % ist k etwa 3,4 und ein Sample von 0,25 wird etwa 0,69. Bei 100 % ist k etwa 39 und dieses Sample wird auf etwa 1 gedrückt. Ein Sample auf Vollausschlag bleibt auf Vollausschlag. Tempo, Tonhöhe und Länge bleiben, wie sie waren.',
          ],
        },
        {
          heading: 'Wie weit du schiebst',
          paragraphs: ['Der brauchbare Bereich ist klein. Dahinter baust du einen Effekt:'],
          bullets: [
            '10–30 %: ein warmer Clip auf Stimme oder sauberer Gitarre.',
            '40–70 %: das Korn ist deutlich. Spitzen werden flach, leisere Noten lauter.',
            '80–100 %: nah an einer Rechteckwelle. Sprache wird schwer verständlich.',
          ],
        },
        {
          heading: 'Kein Lautstärke-Boost und kein Bitcrusher',
          paragraphs: [
            'Der Lautstärke-Booster macht eine leise Datei lauter und nutzt einen Limiter, damit die Spitzen nicht rechteckig werden. Diese Seite macht sie absichtlich rechteckig. Echo legt eine Kopie nach einer Verzögerung dazu, die du einstellst. Das ist eine andere Seite.',
            'Diese Kurve senkt nicht die Bittiefe und schneidet die Höhen nicht ab. Der Knoten überabtastet mit 2×, das mindert nur das Aliasing der neuen Obertöne. Ein dumpfer Lo-Fi-Ton ist diese Seite, danach der Tiefpass.',
          ],
        },
      ],
      dropHint: 'Audiodatei hierher ziehen oder klicken zum Auswählen',
      exportLabel: 'Verzerren und laden',
    },
    'silence-remover': {
      cardLine: "Schneide lange stille Stellen weg und lass kurze Atemzüge stehen.",
      name: "Stille entfernen",
      shortName: "Stille",
      title: "Stille aus Audio entfernen — Pausen online kostenlos schneiden",
      description: "Entferne lange Stille aus jeder Audiodatei im Browser. Du bestimmst, wie leise und wie lang. Kostenlos, nichts wird hochgeladen.",
      h1: 'Kostenloser Online-Stille-Entferner — Stille aus Audio entfernen',
      heroAlt: 'Die langen Pausen aus einer Sprachaufnahme schneiden',
      subtitle: "Weg mit der toten Luft. Pausen, die kürzer sind als dein Abstand, bleiben.",
      intro: "Es findet Stellen, die leiser als die Schwelle und länger als die Mindestpause sind, und schneidet sie. Die Schwelle steht anfangs auf −40 dBFS, passend für Sprache und Sprachnachrichten. Jeder Schnitt lässt an beiden Enden 0,08 Sekunden stehen, damit ein Wort nicht abgeschnitten wird. Eine kürzere Pause bleibt. Leise Musik und ausklingende Enden liegen ebenfalls unter −40 dBFS und werden mitgeschnitten. Wenn du von Hand wählen willst, nimm den Audio-Trimmer. Liegt die ganze Datei unter der Schwelle, ist der Export die Originaldatei. Die Verarbeitung bleibt in deinem Browser.",
      usesHeading: "Wo die tote Luft wirklich sitzt",
      uses: ["Zieh eine Sprachnachricht oder eine Podcast-Aufnahme zusammen, in der zwischen den Sätzen lange Pausen sind.", "Nimm die Stille aus einem Vortrag, ohne jede Lücke von Hand zu schneiden.", "Räum eine Aufnahme vor dem Export auf und lass die kurzen Atemzüge stehen."],
      howTo: [
        { name: "Audio ablegen", text: "Beliebiges MP3, WAV, M4A, OGG oder FLAC. Es wird auf deinem Gerät dekodiert. Mehrere Dateien teilen sich Schwelle und Lücke, die du als Nächstes setzt. Jede Datei wird für sich geschnitten. Eine Datei kommt allein, zwei oder mehr als ein ZIP." },
        { name: "Schwelle und Pause setzen", text: "Die Schwelle ist, wie leise eine Stelle sein muss, von −60 bis −20 dBFS. Die Mindestpause ist, wie lange sie dauern muss, bevor sie weg ist, von 0,1 bis 2 Sekunden. Die Statuszeile sagt ungefähr, wie viele Sekunden wegfallen." },
        { name: "Exportieren", text: "Hör dir das Original an und exportiere dann MP3 oder WAV. Die Datei setzt die lauten Teile aneinander und lässt an jedem Schnitt 0,08 Sekunden stehen." },
      ],
      faqs: [
        { q: 'Kann ich die Stille aus mehr als einer Datei schneiden?', a: 'Ja. Mehrere Dateien teilen sich Schwelle und Mindestlücke auf dieser Seite. Jede Datei wird für sich gemessen und geschnitten, nacheinander auf diesem Gerät. Eine Datei kommt allein, zwei oder mehr als ein ZIP. Ein Handy hat früher keinen Speicher mehr, also eine sehr lange Datei dort einzeln lassen.' },
        { q: "Wird mein Audio hochgeladen?", a: "Nein. Der Pegel wird in deinem Browser gemessen und die leisen Stellen im Speicher geschnitten. Wenn die Seite geladen ist, kannst du offline gehen und der Export funktioniert weiter." },
        { q: "Was wird wirklich entfernt?", a: "Eine Stelle fällt nur weg, wenn sie leiser als die Schwelle und länger als die Mindestpause ist. Der Startwert ist −40 dBFS und 0,35 Sekunden. Jede Stelle lässt an beiden Enden 0,08 Sekunden stehen. Kürzere Lücken, auch die meisten Atemzüge, bleiben." },
        { q: "Schneidet das leise Musik?", a: "Ja, wenn sie länger als die Pause unter der Schwelle bleibt. −40 dBFS ist für Sprache. Ein leises Bett, ein Fade oder das Raumrauschen eines Musikmixes gelten als Stille. Schieb die Schwelle Richtung −20, wenn du nur die fast digitalen Nullen weg haben willst, oder nimm den Trimmer und wähl von Hand." },
        { q: "Was, wenn die ganze Datei leise ist?", a: "Es wird nichts geschnitten. Die Statuszeile sagt das, und der Export ist die Originaldatei." },
        { q: "Worin unterscheidet sich das vom Trimmer?", a: "Der Audio-Trimmer und der MP3-Cutter behalten den Bereich, den du auf der Wellenform zeichnest. Diese Seite findet lange stille Stellen nach Pegel und entfernt sie alle in einem Export. Tempo, Tonhöhe und Lautstärke des Rests bleiben gleich." },
        { q: "Geht das auf dem Handy?", a: "Ja. Beide Regler und der Export-Knopf reagieren auf Tippen in aktuellem Chrome, Edge, Firefox und Safari." },
      ],
      sections: [
        {
          heading: 'Es schneidet lange Stille, nicht die Atemzüge',
          paragraphs: [
            'Ein Abschnitt fällt nur weg, wenn er leiser als die Schwelle und länger als die Mindestlücke ist. Voreingestellt sind −40 dBFS und 0,35 Sekunden. Jeder Schnitt behält 0,08 Sekunden an beiden Enden, damit der Übergang nicht klickt.',
            'Kürzere Lücken, die meisten Atemzüge eingeschlossen, bleiben. Was übrig ist, wird nicht lauter, langsamer oder höher. Liegt die ganze Datei unter der Schwelle, wird nichts geschnitten und der Export ist die Originaldatei.',
          ],
        },
        {
          heading: 'Sprache, nicht ein leiser Song',
          paragraphs: [
            '−40 dBFS zielt auf Sprache. Musik verliert Stellen, die du behalten wolltest, wenn sie so leise sind:',
          ],
          bullets: [
            'Eine Sprachnotiz oder ein Interview mit langen Pausen zwischen den Antworten.',
            'Heb die Schwelle Richtung −20 dBFS, wenn nur fast digitale Stille weg soll.',
            'Ein Fade, ein leises Bett oder Raumton in einem Mix: lass diese Seite und kürze von Hand.',
          ],
        },
        {
          heading: 'Trimmen und diese Seite',
          paragraphs: [
            'Audio kürzen und MP3 schneiden behalten einen Bereich, den du zeichnest. Diese Seite findet jede lange stille Strecke am Pegel und entfernt sie in einem Export.',
            'Nimm das Kürzen, wenn die leise Stelle etwas ist, das du noch willst, oder wenn du einen Abschnitt behältst und den Rest nach Gehör wegwirfst. Nimm diese Seite, wenn die Pausen das Problem sind und lang genug zum Messen.',
          ],
        },
      ],
      dropHint: 'Audiodateien ablegen oder klicken zum Auswählen',
      exportLabel: 'Stille entfernen',
    },
    'audio-looper': {
      cardLine: 'Wiederhole einen Clip bis zu 16-mal und blende jede Naht über.',
      name: 'Audio-Looper',
      shortName: 'Loop',
      title: 'Audio Looper — Clip online kostenlos wiederholen',
      description: 'Wiederhole eine Auswahl oder die ganze Datei 2- bis 16-mal, mit 0,01 s Crossfade an jeder Naht. Kostenlos im Browser. Nichts wird hochgeladen.',
      h1: 'Einen Clip 2- bis 16-mal wiederholen, online kostenlos',
      heroAlt: 'Einen Clip wiederholen und jede Naht überblenden',
      subtitle: 'Loop die Auswahl oder die ganze Datei und lade eine längere Datei herunter.',
      intro: 'Die Zahl geht von 2 bis 16, Standard ist 4. Jede Naht ist ein linearer Crossfade, 0,01 Sekunden, bis du ihn auf höchstens 0,1 Sekunden ziehst. Zieh eine Auswahl, dann loopt nur der Teil. Ohne Auswahl wiederholt sich die ganze Datei. Der Export stoppt bei 10 Minuten. Tonhöhe und Tempo bleiben. Die Verarbeitung bleibt im Browser.',
      usesHeading: 'Wofür die Wiederholungen da sind',
      uses: ['Mach aus einem Takt einen Übungsloop zum Exportieren.', 'Zieh einen kurzen Sprachschnipsel auf die Länge einer Szene.', 'Wiederhole ein Sample mit kurzem Crossfade, damit die Naht nicht knackst.'],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Die Datei wird auf deinem Gerät dekodiert.' },
        { name: 'Zahl und Naht setzen', text: 'Wiederholungen gehen von 2 bis 16. Die Naht ist der Crossfade, von 0 bis 0,1 Sekunden. Zieh auf der Wellenform, wenn nur ein Teil wiederholt werden soll. Die Statuszeile zeigt die Exportlänge.' },
        { name: 'Exportieren', text: 'Hör die Auswahl an, dann exportiere MP3 oder WAV. Die Datei ist der Clip hintereinander.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Die Wiederholungen werden in deinem Browser kopiert. Nach dem Laden der Seite geht der Export auch offline.' },
        { q: 'Was passiert an der Naht?', a: 'Das Ende eines Durchgangs und der Anfang des nächsten überlappen um die Nahtlänge. Standard sind 0,01 Sekunden. Die Überlappung ist ein linearer Crossfade, ein gleichbleibender Ton springt nicht. WAV sind diese Samples. MP3 kodiert den Loop einmal, mit der Bitrate, die du wählst. Tonhöhe und Tempo bleiben.' },
        { q: 'Was lehnt die Seite ab?', a: 'Wiederholungen gibt es nur von 2 bis 16. Wird das Ergebnis länger als 10 Minuten, stoppt der Export und die Statuszeile sagt es. Die Seite nimmt keine Overdubs auf und setzt keine zwei verschiedenen Dateien hintereinander.' },
        { q: 'Was ist der Unterschied zu Schnitt, Join und Fade?', a: 'Der Trimmer behält eine Spanne einmal. Der Joiner reiht verschiedene Dateien aneinander. Fade macht Anfang oder Ende einer Datei leiser. Diese Seite schreibt denselben Clip erneut, der Crossfade sitzt nur zwischen den Kopien.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Beide Regler, die Wellenform und der Export funktionieren per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Die Kopien überlappen an der Naht',
          paragraphs: [
            'Wiederholungen gehen von 2 bis 16. Standard ist 4. Jede Naht überlappt um den Regler Übergang: 0,01 Sekunden, bis du ihn ziehst, und nie mehr als 0,1 Sekunden.',
            'Die Überlappung ist ein linearer Crossfade, ein gleichbleibender Ton springt nicht. Die Länge ist ein Durchgang mal die Anzahl, minus die Überlappung mal eins weniger als die Anzahl. Tonhöhe und Tempo bleiben. WAV sind diese Samples. MP3 kodiert den Loop einmal.',
          ],
        },
        {
          heading: 'Ein Clip, noch einmal geschrieben',
          paragraphs: ['Nimm die Seite, wenn die nächste Kopie dasselbe Audio sein soll:'],
          bullets: [
            'Ein Takt, den du als Übungsdatei willst.',
            'Ein kurzer Sprachschnipsel, der eine längere Szene füllen muss.',
            'Ein Sample, dessen Naht knackt, wenn die Kopien ohne Überlappung aufeinandertreffen.',
          ],
        },
        {
          heading: 'Kein Schnitt, und kein Join',
          paragraphs: [
            'Der Trimmer behält eine Spanne einmal. Der Joiner reiht verschiedene Dateien aneinander. Fade macht Anfang oder Ende einer Datei leiser. Der Crossfade auf dieser Seite sitzt nur zwischen Kopien desselben Clips.',
            'Die Seite nimmt keine Overdubs auf. Wird das Ergebnis länger als 10 Minuten, stoppt der Export. Kürze die Auswahl oder nimm weniger Wiederholungen.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder zum Durchsuchen klicken',
      exportLabel: 'Schleife und laden',
    },
    'auto-panner': {
      cardLine: 'Schwenke eine Datei links und rechts mit einem Tempo, das du setzt. Es folgt nicht dem Beat.',
      name: 'Auto-Panner',
      shortName: 'Panner',
      title: 'Auto-Panner — Audio links und rechts schwenken',
      description: 'Schwenke Mono oder Stereo links und rechts, 0,05 bis 2 Hz. Tiefe 0 bis 100 %, Start 70 %. Kostenlos im Browser. Nichts wird hochgeladen.',
      h1: 'Auto-Panner, eine Datei von links nach rechts schwenken',
      heroAlt: 'Eine Aufnahme von links nach rechts schwenken',
      subtitle: 'Setz Tiefe und Frequenz. Der Schwenk folgt nicht dem Beat.',
      intro: 'Die Tiefe geht von 0 bis 100 %, Start ist 70 %. Die Frequenz geht von 0,05 Hz bis 2 Hz, Start ist 0,2 Hz. Die Position ist die Tiefe mal ein Sinus dieser Frequenz. Bei 0,2 Hz dauert eine volle Links-rechts-Runde 5 Sekunden. Sie folgt nicht dem Schlagzeug. Tiefe 0 lässt die Datei, wie sie ist. Die Verarbeitung bleibt im Browser.',
      usesHeading: 'Wofür der Schwenk da ist',
      uses: ['Schieb ein Pad oder eine Stimme langsam von einem Lautsprecher zum anderen.', 'Gib einer Mono-Aufnahme eine gleichmäßige Links-rechts-Bewegung.', 'Wähl die Frequenz in Hertz, statt den Drums hinterherzulaufen.'],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Die Datei wird auf deinem Gerät dekodiert.' },
        { name: 'Tiefe und Frequenz setzen', text: 'Die Tiefe ist, wie weit der Ton wandert, von 0 bis 100 %. Die Frequenz ist die Zahl der Schwenks pro Sekunde, von 0,05 bis 2. Zieh auf der Wellenform, wenn nur ein Teil wandern soll.' },
        { name: 'Exportieren', text: 'Hör die Auswahl an, dann exportiere MP3 oder WAV. WAV sind die geschwenkten Samples. MP3 kodiert den Schwenk einmal.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Der Schwenk ist ein Stereo-Panner in deinem Browser. Nach dem Laden der Seite geht der Export auch offline.' },
        { q: 'Was passiert mit dem Ton?', a: 'Die Position ist die Tiefe mal ein Sinus der Frequenz. Tonhöhe und Abspieltempo bleiben. Eine Stereodatei bewegt sich als ein Bild. Die beiden Kanäle laufen nicht auf getrennten Bahnen. WAV sind diese Samples. MP3 kodiert einmal, mit der Bitrate, die du wählst.' },
        { q: 'Was lehnt die Seite ab?', a: 'Der Schwenk rastet nicht auf einen Beat ein und trennt nicht Mitte und Seite. Bei Tiefe 0 sitzt kein Panner im Graph, der Export entspricht der Datei, die du abgelegt hast. Das ist keine kopfbezogene Übertragung, die den Ton auf einen Winkel richtet.' },
        { q: 'Was ist der Unterschied zu Echo, Slowed + Reverb und Equalizer?', a: 'Echo setzt eine Kopie nach einer Delay-Zeit. Slowed + Reverb ändert Tempo und Tonhöhe und legt dann einen Raum darüber. Der Audio-Equalizer ändert Frequenzbänder. Diese Seite bewegt nur dasselbe Audio nach links und rechts. Ein fester Kreis von etwa 10 Sekunden mit kurzem Hall ist die 3D-Audio-Seite.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Beide Regler, die Wellenform und der Export funktionieren per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Wo der Ton sitzt',
          paragraphs: [
            'Die Tiefe geht von 0 bis 100 %. Der Startwert ist 70 %. Die Frequenz geht von 0,05 Hz bis 2 Hz. Der Startwert ist 0,2 Hz.',
            'Die Position ist die Tiefe mal ein Sinus dieser Frequenz. Bei 0,2 Hz dauert ein voller Links-rechts-Umlauf 5 Sekunden. Tiefe 0 lässt die Datei, wie sie ist. Tonhöhe und Abspieltempo bleiben.',
          ],
        },
        {
          heading: 'Ein gleichmäßiger Schwenk',
          paragraphs: ['Nimm die Seite, wenn die Bewegung gleichmäßig sein soll:'],
          bullets: [
            'Ein Pad oder eine Stimme, die langsam über die Lautsprecher wandern soll.',
            'Eine Mono-Aufnahme, die sich bewegen soll, ohne zwei verschiedene Spuren zu werden.',
            'Eine Frequenz in Hertz, nicht ein Schwenk, der dem Schlagzeug folgen will.',
          ],
        },
        {
          heading: 'Kein Echo, und keine Tempowechsel',
          paragraphs: [
            'Echo setzt eine Kopie nach einer Delay-Zeit. Slowed + Reverb ändert Tempo und Tonhöhe und legt dann einen Raum darüber. Der Equalizer ändert Frequenzbänder. Keines davon bewegt das Bild nach der Uhr.',
            'Diese Seite folgt keinem Beat. Eine Stereodatei bleibt ein Bild. Links und rechts laufen nicht auf getrennten Bahnen.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder zum Durchsuchen klicken',
      exportLabel: 'Schwenken und laden',
    },
    '3d-audio': {
      cardLine: 'Ein Schalter legt die Datei auf einen langsamen Kreis und gibt ihr einen kurzen Hall.',
      name: '3D-Audio',
      shortName: '3D',
      title: '3D-Audio — langsamer Kreis und Hall online kostenlos',
      description: 'Ein Kreis etwa alle 10 Sekunden, plus ein kurzer Hall. Ein Schalter. Tempo und Tonhöhe bleiben. Kostenlos im Browser. Nichts wird hochgeladen.',
      h1: '3D-Audio, ein langsamer Kreis mit kurzem Hall',
      heroAlt: 'Ein langsamer Kreis zwischen den Lautsprechern, plus ein kurzer Raum',
      subtitle: 'Tiefe, Frequenz und Raum sind schon gesetzt. Du legst nur den Schalter um.',
      intro: 'Der Kreis ist fest. Die Tiefe ist 100 %. Die Frequenz ist 0,1 Hz, eine Runde dauert etwa 10 Sekunden. Es bewegt sich der Direktschall. Ein Hall-Send von 25 % nutzt denselben kurzen Raum wie Slowed + Reverb. Tempo und Tonhöhe bleiben. Schalter aus lässt die Datei, wie du sie abgelegt hast. Die Verarbeitung bleibt im Browser.',
      usesHeading: 'Wofür der Kreis da ist',
      uses: ['Leg eine Stimme oder ein Pad auf einen langsamen Kreis, ohne eine Frequenz zu wählen.', 'Setz einen kurzen Raum hinter diese Bewegung.', 'Lass das originale Tempo und die originale Tonhöhe.'],
      howTo: [
        { name: 'Audio ablegen', text: 'MP3, WAV, M4A, OGG oder FLAC. Die Datei wird auf deinem Gerät dekodiert.' },
        { name: 'Kreis anlassen', text: 'Der Schalter startet an. Aus, und der Export entspricht der Datei, die du abgelegt hast. Es gibt keinen zweiten Regler für Tiefe, Frequenz oder Raum.' },
        { name: 'Exportieren', text: 'Hör es an, dann exportiere MP3 oder WAV. WAV sind die bewegten Samples plus der Schweif. MP3 kodiert das einmal.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Kreis und Raum rendert dein Browser. Nach dem Laden der Seite geht der Export auch offline.' },
        { q: 'Was passiert mit dem Ton?', a: 'Die Tiefe bleibt bei 100 %. Die Frequenz bleibt bei 0,1 Hz, etwa 10 Sekunden für eine Runde. Der Direktschall bewegt sich. Der Hall ist ein Send von 25 %, derselbe kurze Raum wie bei Slowed + Reverb, deshalb wächst am Ende ein Schweif. Tempo und Tonhöhe bleiben. WAV sind diese Samples. MP3 kodiert einmal, mit der Bitrate, die du wählst.' },
        { q: 'Was lehnt die Seite ab?', a: 'Du kannst hier keine andere Frequenz, keine andere Tiefe und keinen anderen Raum setzen. Der Kreis folgt keinem Beat. Er richtet den Ton nicht auf einen Winkel um deinen Kopf. Schalter aus setzt weder Kreis noch Schweif.' },
        { q: 'Was ist der Unterschied zu Auto-Panner und Slowed + Reverb?', a: 'Frequenz und Tiefe selbst setzen: das ist der Auto-Panner. Diese Seite ist der fertige Kreis, etwa 10 Sekunden, der Hall ist schon an. Slowed + Reverb ändert Tempo und Tonhöhe. Diese Seite nicht.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Schalter, Wellenform und Export funktionieren per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Ein Kreis mit festen Zahlen',
          paragraphs: [
            'Die Tiefe ist 100 %. Die Frequenz ist 0,1 Hz. Eine Runde von der Mitte nach einer Seite und durch die andere zurück dauert etwa 10 Sekunden.',
            'Es bewegt sich der Direktschall. Der Hall ist ein Send von 25 %, derselbe kurze Raum wie bei Slowed + Reverb. Der Schweif ist der Grund, warum der Export über das Ende deiner Datei hinausläuft.',
          ],
        },
        {
          heading: 'Wenn das Preset die Aufgabe ist',
          paragraphs: ['Nimm die Seite, wenn du die fertige Bewegung willst:'],
          bullets: [
            'Eine Stimme oder ein Pad, das wandern soll, ohne einen Frequenzregler.',
            'Ein kurzer Raum hinter der Bewegung, kein Hall, den du selbst mischst.',
            'Das originale Tempo und die originale Tonhöhe, so wie sie waren.',
          ],
        },
        {
          heading: 'Kein Panner zum Einstellen, und kein Slowdown',
          paragraphs: [
            'Der Auto-Panner ist die Seite, auf der du Tiefe von 0 bis 100 % und Frequenz von 0,05 Hz bis 2 Hz setzt, ohne Hall. Diese Seite sperrt beide Zahlen und legt den Raum dazu.',
            'Slowed + Reverb ändert das Tempo, und die Tonhöhe geht mit. Diese Seite nicht. Schalter aus lässt die Datei, wie du sie abgelegt hast.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder zum Durchsuchen klicken',
      exportLabel: '3D anwenden',
    },
    metronome: {
      cardLine: 'Ein Klick von 40 bis 240 BPM. Die erste Zählzeit jedes Taktes ist lauter.',
      name: 'Metronom',
      shortName: 'Metronom',
      title: 'Metronom — Klick von 40 bis 240 BPM gratis',
      description: 'Klick von 40 bis 240 BPM in 2/4, 3/4, 4/4 oder 6/8. Die erste Zählzeit ist lauter. Exportiere 4, 8 oder 16 Takte als WAV oder MP3. Nichts wird hochgeladen.',
      h1: 'Metronom, ein Klick von 40 bis 240 BPM',
      heroAlt: 'Ein Metronom-Klick von 40 bis 240 BPM',
      subtitle: 'Hör den Klick, oder speichere 4, 8 oder 16 Takte. Er mischt sich nicht in ein Lied.',
      intro: 'Das Tempo geht von 40 bis 240 BPM. Wähle 2/4, 3/4, 4/4 oder 6/8. Die erste Zählzeit jedes Taktes ist lauter. Drück Start, der Klick läuft, bis du stoppst. Der Export schreibt 4, 8 oder 16 Takte als WAV oder MP3. 6/8 sind sechs Klicks im Takt, bei diesem BPM, nicht zwei. Diese Seite nimmt keine Datei und legt den Klick nicht unter ein Lied. Diese Mischung ist der Mehrspur-Editor. Nichts wird hochgeladen.',
      usesHeading: 'Was du damit machen kannst',
      uses: [
        'Ein Tempo üben, bevor du im Sprachrekorder aufnimmst.',
        '4, 8 oder 16 Takte desselben Klicks exportieren.',
        '6/8 als sechs Klicks hören, der erste ist lauter.',
      ],
      howTo: [
        { name: 'BPM und Taktart setzen', text: 'BPM geht von 40 bis 240. Wähle 2/4, 3/4, 4/4 oder 6/8. Die Seite startet bei 100 BPM und 4/4.' },
        { name: 'Start drücken', text: 'Der Klick läuft, bis du stoppst. Die erste Zählzeit jedes Taktes ist lauter. Jeder Klick ist derselbe kurze Ton.' },
        { name: 'Takte exportieren, wenn du eine Datei willst', text: 'Wähle 4, 8 oder 16 Takte, dann WAV oder MP3. Die Datei ist nur der Klick. WAV behält diese Samples. MP3 kodiert sie einmal.' },
      ],
      faqs: [
        { q: 'Wird etwas hochgeladen?', a: 'Nein. Die Seite liest keine Datei und öffnet kein Mikrofon. Wiedergabe und Export bleiben im Browser. Nach dem Laden kannst du offline gehen, der Klick läuft weiter.' },
        { q: 'Wie klingt der Klick?', a: 'Bei 100 BPM liegen die Klicks 0,60 Sekunden auseinander. Die erste Zählzeit des Taktes ist lauter. Die anderen sind derselbe Ton, leiser. WAV sind diese Samples. MP3 kodiert sie einmal, mit der Bitrate, die du wählst.' },
        { q: 'Was macht er nicht?', a: 'Er richtet den Klick nicht an einem Lied aus. Es gibt keine Datei zum Ablegen. 6/8 bleibt sechs Klicks im Takt, beim BPM des Reglers. Er wechselt nicht auf zwei Klicks im punktierten Viertel.' },
        { q: 'Was ist der Unterschied zum Mehrspur-Editor und zur Tempo-Seite?', a: 'Diese Seite ist nur der Klick. Den Klick unter ein Lied zu legen ist der Mehrspur-Editor. Die Länge einer Aufnahme zu ändern ist die Tempo-Seite, und die Tonhöhe geht mit. Das Mikrofon ist der Sprachrekorder.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. BPM-Regler, Taktart, Start und Export tippst du in aktuellem Chrome, Edge, Firefox und Safari. Der Klick nutzt einen Web-Audio-Oszillator. Die exportierte Datei nutzt denselben Abstand.' },
      ],
      sections: [
        {
          heading: 'Der Klick',
          paragraphs: [
            'Bei 100 BPM liegen die Klicks 0,60 Sekunden auseinander. Die erste Zählzeit des Taktes ist lauter. Jeder Klick ist derselbe kurze Ton.',
            '2/4 klickt zweimal im Takt, 3/4 dreimal, 4/4 viermal und 6/8 sechsmal. Das BPM ist die Klickrate in jeder dieser Taktarten.',
          ],
        },
        {
          heading: 'Eine Datei mit denselben Klicks',
          paragraphs: [
            'Der Export schreibt 4, 8 oder 16 Takte. WAV lässt die Klicks, wie sie sind. MP3 kodiert dieses Ergebnis einmal.',
          ],
          bullets: [
            'Vier Takte 4/4 bei 100 BPM sind 16 Klicks.',
            'Leg diese WAV in den Mehrspur-Editor, wenn du sie unter einem Lied willst.',
            'Bleib bei Start, wenn du nur das Tempo hören wolltest.',
          ],
        },
        {
          heading: 'Was er nicht tut',
          paragraphs: [
            'Er richtet die Klicks nicht an einem Lied aus. Es gibt keine Datei zum Ablegen und keine Welle zum Schneiden.',
            'Er ändert nicht die Länge einer Aufnahme. Das macht die Tempo-Seite, und die Tonhöhe geht mit der Geschwindigkeit.',
          ],
        },
      ],
      dropHint: 'Keine Datei. Drück Start.',
    },
    'key-bpm-finder': {
      cardLine: 'Lies BPM von 60 bis 180 und Dur oder Moll. Stille bleibt unlesbar.',
      name: 'Tonart und BPM',
      shortName: 'Tonart BPM',
      title: 'Tonart und BPM — Datei online kostenlos lesen',
      description: 'Lies BPM von 60 bis 180 und Dur oder Moll. Stille bleibt unlesbar. Die Seite liest die ersten 60 Sekunden. Nichts wird hochgeladen.',
      h1: 'Tonart und BPM, gelesen aus der Datei, die du ablegst',
      heroAlt: 'BPM und Tonart einer Audiodatei lesen',
      subtitle: 'Zwei Zahlen. Kein Knopf, der die Tonhöhe verschiebt.',
      intro: 'Leg eine Datei ab. Die Seite liest BPM von 60 bis 180, und eine Tonart: ein Ton plus Dur oder Moll. BPM ist der stärkste Abstand zwischen Einsätzen. Ein Abstand außerhalb dieses Bereichs wird halbiert oder verdoppelt, bis er innen liegt. Die Tonart ist das feste Dur- oder Mollprofil, das am besten zu den Tonklassen passt. Stille zeigt «Nicht lesbar», nicht 0 BPM und nicht C-Dur. Nur die ersten 60 Sekunden werden gelesen. Eine Datei unter 2 Sekunden hat kein BPM. Diese Seite ändert die Datei nicht. Die Tonhöhe verschieben ist der Pitch-Changer. Nichts wird hochgeladen.',
      usesHeading: 'Was du lesen kannst',
      uses: [
        'Das Tempo einer Schleife, bevor du die Geschwindigkeit änderst.',
        'Die Tonart einer Aufnahme, bevor du sie im Pitch-Changer verschiebst.',
        'Ein unlesbares Ergebnis bei einer stillen Datei, statt 0 BPM oder C-Dur.',
      ],
      howTo: [
        { name: 'Datei ablegen', text: 'Audio, oder ein Video mit Tonspur. Der Browser dekodiert. Nichts wird hochgeladen.' },
        { name: 'BPM und Tonart lesen', text: 'BPM ist eine ganze Zahl von 60 bis 180. Die Tonart ist ein Ton plus Dur oder Moll. Der Satz unter den Zahlen nennt die Fälle, die tauschen.' },
        { name: 'Die Datei lassen, wie sie ist', text: 'Diese Seite exportiert keine geänderte Datei. Der Pitch-Changer ist der Ort, an dem sich die Tonhöhe bewegt, und die Länge bleibt.' },
      ],
      faqs: [
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Der Browser dekodiert sie und liest die Samples im Speicher. Nach dem Laden kannst du offline gehen und eine Datei, die du ablegst, trotzdem lesen.' },
        { q: 'Wie genau ist die Lesung?', a: 'BPM ist der stärkste Einsatzabstand zwischen 60 und 180, als ganze Zahl. Die Tonart ist die beste Übereinstimmung mit einem festen Durprofil und einem festen Mollprofil, je 12 Gewichte. Das ist keine Akkordtranskription.' },
        { q: 'Was macht er nicht?', a: 'Er ändert weder Tonhöhe noch Tempo. Es gibt keinen Knopf für eine neue Tonart. Eine Datei unter 2 Sekunden hat kein BPM. Stille zeigt nicht lesbar, nicht 0 und nicht C-Dur. Nur die ersten 60 Sekunden werden gelesen.' },
        { q: 'Was ist der Unterschied zum Pitch-Changer und zur Tempo-Seite?', a: 'Diese Seite liest nur. Der Pitch-Changer verschiebt die Tonhöhe und behält die Länge. Die Tempo-Seite ändert die Länge, und die Tonhöhe geht mit. Der Tempo-Wechsler ändert die Länge und die Tonhöhe bleibt, von 0,75× bis 1,25×.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Leg die Datei ab und lies die zwei Zahlen. Die Ablegefläche und der Zurücksetzen-Knopf lassen sich in aktuellem Chrome, Edge, Firefox und Safari antippen.' },
      ],
      sections: [
        {
          heading: 'Was die zwei Zahlen sind',
          paragraphs: [
            'BPM ist der stärkste Abstand zwischen Einsätzen, von 60 bis 180. Ein Abstand außerhalb dieses Bereichs wird halbiert oder verdoppelt, bis er innen liegt.',
            'Die Tonart ist das Dur- oder Mollprofil, das am besten zur Tonklassen-Energie passt. Jedes Profil ist ein fester Satz von 12 Gewichten.',
          ],
        },
        {
          heading: 'Wenn die Lesung schwach ist',
          paragraphs: [
            'Freier Rhythmus, Sprache und Raumgeräusch haben keinen festen Abstand, also kann das BPM auf dem falschen Vielfachen sitzen. Eine parallele Dur- und Molltonart teilen viele Töne, also können die beiden tauschen.',
          ],
          bullets: [
            'Eine stille Datei zeigt bei beiden Zahlen nicht lesbar.',
            'Eine Datei unter 2 Sekunden kann eine Tonart zeigen und kein BPM.',
            'Nur die ersten 60 Sekunden werden gelesen.',
          ],
        },
        {
          heading: 'Was er nicht tut',
          paragraphs: [
            'Er verschiebt die Tonhöhe nicht. Es gibt keinen Knopf für eine neue Tonart. Das ist der Pitch-Changer, und die Länge bleibt gleich.',
            'Er ändert das Tempo nicht. Das macht die Tempo-Seite, und die Tonhöhe geht mit der Geschwindigkeit.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen oder zum Durchsuchen klicken',
    },
    'loudness-meter': {
      cardLine: "Lies, wie laut eine Datei in LUFS ist, und gleiche dann ein Podcast-, Streaming- oder Broadcast-Ziel an.",
      name: "Lautheitsmesser",
      shortName: "Lautheit",
      title: "Lautheitsmesser — Audio-LUFS online kostenlos prüfen",
      description: "Miss die Lautheit einer Audiodatei im Browser und gleiche −16, −14 oder −23 an. Der Sample-Peak bleibt unter −1 dBFS. Kostenlos, nichts wird hochgeladen.",
      h1: 'Kostenloser Online-LUFS-Meter — Die LUFS eines Songs prüfen',
      heroAlt: 'Prüfen, ob eine Datei zum Lautheitsziel eines Podcasts oder eines Streams passt',
      subtitle: "Die integrierte Lautheit der Datei, die du ablegst — nicht die Lautheit des Raums.",
      intro: "Leg eine Datei ab und lies ihre integrierte Lautheit in LUFS, plus den Sample-Peak. Dann gleichst du ein Lieferziel an: Podcast −16, Streaming −14 oder Broadcast −23. Die Verstärkung ist eine Zahl für die ganze Datei. Würde sie die lauteste Probe über −1 dBFS schieben, bleibt sie davor stehen, und die Seite sagt dir die LUFS, die du wirklich erreichst. Das ist kein Raum-Schallpegelmesser und keine Peak-Normalisierung. −16, −14 und −23 sind übliche Lieferziele, keine gesetzliche Grenze. Die Verarbeitung bleibt in deinem Browser.",
      usesHeading: "Wofür die Zahl da ist",
      uses: ["Sieh vor dem Verschicken, ob eine Sprachnachricht oder ein Mix nah an einem Podcast-Ziel liegt.", "Heb eine leise Datei Richtung −16 oder −14, ohne den Sample-Peak über −1 dBFS zu lassen.", "Lies Stereo als Stereo. Die beiden Kanäle werden vor der Messung nicht zusammengemischt."],
      howTo: [
        { name: "Audio ablegen", text: "Beliebiges MP3, WAV, M4A, OGG oder FLAC. Es wird auf deinem Gerät dekodiert und gemessen." },
        { name: "Den Messer lesen", text: "Integriert ist die K-bewertete Lautheit der Datei, in LUFS. Sample-Peak ist die größte Probe, in dBFS. Eine stumme Datei hat keine Lautheit zum Angleichen." },
        { name: "Ziel wählen und exportieren", text: "Podcast ist −16, Streaming ist −14, Broadcast ist −23. Exportiere MP3 oder WAV. Würde der Peak −1 dBFS überschreiten, stoppt die Verstärkung, und die Zeile zeigt die LUFS, die du bekommst." },
      ],
      faqs: [
        { q: "Wird mein Audio hochgeladen?", a: "Nein. Die Datei wird in deinem Browser dekodiert und gemessen. Wenn die Seite geladen ist, kannst du offline gehen und der Export funktioniert weiter." },
        { q: "Was bedeutet die Zahl?", a: "Integrierte LUFS ist, wie laut die Datei über ihre Länge ist, nach der K-Bewertung aus ITU-R BS.1770. Das ist eine Eigenschaft der Datei. Keine Raummessung und kein A-bewerteter Schalldruckpegel." },
        { q: "Worin unterscheidet sich das vom Normalisieren?", a: "Normalisieren hebt die Datei, bis die lauteste Probe einen Peak trifft. Diese Seite gleicht die integrierte Lautheit an. Eine Datei kann peak-normalisiert sein und trotzdem weit von −16 LUFS entfernt liegen. Laut und leise bleiben gleich weit auseinander. Der Pegelkompressor ist die Seite, die diesen Abstand verengt." },
        { q: "Sind −16, −14 und −23 gesetzliche Grenzen?", a: "Nein. Es sind übliche Lieferziele: Podcasts verlangen oft etwa −16 LUFS, Musik-Streaming etwa −14, Broadcast etwa −23. Die Seite verspricht nicht, dass deine Datei eine Plattform oder einen Sender besteht." },
        { q: "Ist der Peak ein True Peak?", a: "Nein. Sample-Peak ist die größte Probe in der Datei. Ein True Peak braucht Überabtastung und kann zwischen den Proben etwas höher liegen. Diese Seite hält den Sample-Peak bei −1 dBFS und meldet kein dBTP." },
        { q: "Geht das auf dem Handy?", a: "Ja. Die drei Ziele und der Export-Knopf reagieren auf Tippen in aktuellem Chrome, Edge, Firefox und Safari." },
      ],
      sections: [
        {
          heading: 'Eine Datei-Messung, kein Raum-Meter',
          paragraphs: [
            'Die Zahl ist integrierte LUFS: wie laut die Datei über ihre Länge ist, nach der K-Bewertung aus ITU-R BS.1770. Das ist eine Eigenschaft der Datei. Es ist keine Messung des Raums und kein A-bewerteter Schalldruckpegel.',
            'Die Seite zeigt auch den Sample-Peak. Dieser Peak ist kein True Peak. Peaks zwischen den Samples können auf manchen Wiedergabewegen trotzdem über die Decke ragen.',
          ],
        },
        {
          heading: 'Zielwerte, die Leute wirklich nutzen',
          paragraphs: [
            'Die üblichen Bezugspunkte sind Konventionen, keine gesetzlichen Grenzen:',
          ],
          bullets: [
            'Etwa −16 LUFS für einen gesprochenen Podcast.',
            'Etwa −14 LUFS für viel Musik-Streaming.',
            'Etwa −23 LUFS für Programmlautheit im Broadcast-Stil.',
          ],
        },
        {
          heading: 'Der Gain stoppt am Peak',
          paragraphs: [
            'Wenn du den vorgeschlagenen Gain anwendest, stoppt er, sobald der Sample-Peak −1 dBFS überschreiten würde. Eine Datei kann schon peak-normalisiert sein und trotzdem weit von −16 LUFS entfernt liegen, weil ein Huster den Peak setzt und der Rest leise bleibt.',
            'Normalisieren jagt nur diesen Peak, bis etwa −0,2 dB. Der Pegelkompressor verkürzt den Abstand zwischen laut und leise. Diese Seite misst. Eine einzelne Zahl ist keine Mastering-Session.',
          ],
        },
      ],
      dropHint: "Audiodatei hier ablegen oder zum Auswählen klicken",
    },
    'multi-track-audio-editor': {
      cardLine: 'Lege Gesang, Sprache und Musik auf eine Zeitleiste und exportiere einen Mix.',
      name: 'Mehrspur-Audioeditor',
      shortName: 'Mehrspur',
      title: 'Mehrspur-Audioeditor — Dateien kostenlos mischen',
      description: 'Lege Audiodateien auf eine Zeitleiste, stelle Pegel und Pan pro Spur ein und exportiere einen Mix. Kostenlos, im Browser, nichts wird hochgeladen.',
      h1: 'Kostenloser Online-Mehrspur-Editor — Spuren zu einem Mix schichten',
      heroAlt: 'Pegel und Pan einer Stimme über einem Beat einstellen',
      subtitle: 'Bis zu 8 Dateien übereinander, jede einzeln ausbalancieren, einen Mix exportieren.',
      intro: 'Leg eine Stimme auf einen Beat oder einen Kommentar auf Musik und hör beides zusammen. Jede Datei ist eine Spur: Pegel, Pan, Stumm, Solo und der Einsatz. Die Summe entsteht in deinem Browser. Nichts wird hochgeladen. Schließt du den Tab, ist die Session weg.',
      usesHeading: 'Mixe für diese Seite',
      uses: [
        'Leg eine Sprachnotiz unter ein Musikbett und schieb sie so, dass die Stimme nach dem Intro kommt.',
        'Balanciere Stems, die du schon hast — Gesang, Drums, Gitarre — und exportiere eine Datei.',
        'Hör eine Spur solo und hol die anderen zurück, ohne eine DAW zu installieren.',
      ],
      howTo: [
        { name: 'Dateien hinzufügen', text: 'Leg zwei oder mehr Audiodateien ab, oder klick zum Auswählen. Jede Datei wird eine Spur. Diese Seite hört bei 8 auf.' },
        { name: 'Setzen und balancieren', text: 'Zieh einen Clip, um den Einsatz zu setzen. Zieh die Kanten zum Kürzen. Stell Pegel und Pan in der Zeile ein, oder tipp die Zeiten. Stumm und Solo sitzen in derselben Zeile.' },
        { name: 'Abspielen, dann exportieren', text: 'Drück Mix abspielen. Exportiere MP3 oder WAV. Würde die Summe übersteuern, wird der ganze Mix um denselben Faktor leiser, und die Seite sagt um wie viele dB.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Der Browser dekodiert jede Datei mit decodeAudioData und addiert die Samples im Speicher. Wenn die Seite geladen ist, braucht der Export keinen Server. Den Tab schließen verwirft die Session: kein Konto, kein gespeichertes Projekt.' },
        { q: 'Was passiert mit dem Ton?', a: 'Spuren werden auf die höchste Samplerate unter ihnen gebracht, mindestens 44,1 kHz, mit linearer Interpolation. WAV ist das 16-Bit-PCM dieses Stereo-Mix. MP3 wird einmal kodiert, mit der Bitrate, die du wählst, bis 320 kbps. Liegt der Peak der Summe über 0,98, wird der ganze Mix so skaliert, dass der Peak bei 0,98 landet. Das ist eine Pegeländerung, kein Kompressor, und keine zweite Kodierung.' },
        { q: 'Was kann das nicht?', a: 'Es nimmt kein MIDI auf, lädt keine Instrumente oder Samples, zeichnet keine Lautstärkekurve und duckt Musik nicht von allein unter Sprache. Ein Clip pro Spur, acht Spuren, keine Projektdatei. Plugins, Automation und eine Session, die du morgen wieder öffnest, gehören in Audacity oder eine Browser-DAW wie BandLab.' },
        { q: 'Worin unterscheidet sich das vom Zusammenfügen?', a: 'Der Audio Joiner legt Dateien hintereinander: eine endet, die nächste beginnt, mit optionalem Crossfade. Diese Seite spielt sie gleichzeitig. Eine Playlist in einer Datei ist der Joiner. Eine Stimme auf einem Beat ist diese Seite.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Die Zeitleiste scrollt seitwärts. Pegel, Pan, Start und Schnitt sind Regler und Zahlen, ohne einen pixelgenauen Zug. Aktuelles Chrome, Edge, Firefox und Safari dekodieren die üblichen Formate. Eine Datei, die der Browser nicht dekodieren kann, wird übersprungen, die anderen bleiben.' },
        { q: 'Warum nur 8 Spuren?', a: 'Jede Spur wird vor dem Abspielen in den Speicher dekodiert. Acht Stereodateien sind für einen Handy-Tab schon viel. Eine 16-Spur-Produktion mit Plugins ist ein anderes Werkzeug.' },
      ],
      sections: [
        {
          heading: 'Ein kleiner Mixer, kein DAW',
          paragraphs: [
            'Jede Datei ist ein Clip auf eigener Spur. Du stellst Pegel, Pan, Stumm, Solo und den Start dieses Clips ein. Bis zu acht Spuren spielen zusammen und werden als eine Datei exportiert.',
            'Ein Clip pro Spur. Kein MIDI, keine Instrumente, keine Lautstärkekurve und kein automatisches Absenken der Musik unter Sprache. Plugins und ein Projekt für morgen gehören in Audacity oder ein Browser-DAW.',
          ],
        },
        {
          heading: 'Wofür du ihn nimmst',
          paragraphs: [
            'Er passt für kurze Stapel, die du sonst in einem größeren Programm bouncen würdest:',
          ],
          bullets: [
            'Eine Sprachspur über einem Musikbett, die Stimme lauter.',
            'Zwei Takes am Start ausgerichtet, eine auf Solo, während du vergleichst.',
            'Ein Stereobild mit Pan verschoben, dann ein Export.',
          ],
        },
        {
          heading: 'Die Sitzung endet mit dem Tab',
          paragraphs: [
            'Nichts wird hochgeladen, und es gibt keine Projektdatei. Schließt du den Tab vor dem Export, ist der Mix weg.',
            'Dateien, die nacheinander laufen sollen und nicht übereinander, gehören in den Audio-Joiner. Diese Seite stapelt sie.',
          ],
        },
      ],
      dropHint: 'Zwei oder mehr Audiodateien ablegen, um sie zu stapeln',
    },
    'split-mp3': {
      cardLine: 'Schneide eine Datei in 2 bis 16 gleiche Teile und lade sie zusammen herunter.',
      name: 'MP3 teilen',
      shortName: 'Teiler',
      title: 'MP3 teilen – 2 bis 16 gleiche Dateien',
      description: 'Teile eine Aufnahme in 2 bis 16 gleiche Dateien und lade ein Zip. WAV behält die Samples am Schnitt. Jedes MP3 wird einmal kodiert, bis 320 kbps.',
      h1: 'MP3 in mehrere Dateien teilen',
      heroAlt: 'Eine Aufnahme in gleiche Dateien schneiden',
      subtitle: 'Gleiche Teile, von 2 bis 16, zusammen in einem Zip.',
      intro: 'Dieser Audio-Splitter schneidet eine Datei in gleiche Teile. Die Zahl läuft von 2 bis 16 und startet bei 2, also in zwei Teilen. Jedes Teil ist gleich lang, höchstens ein Sample Unterschied. Zieh eine Auswahl, um nur diesen Abschnitt zu teilen. Ohne Auswahl wird die ganze Datei geteilt. Die Teile kommen als ein Zip. Dekodierung und Schnitte bleiben in deinem Browser.',
      usesHeading: 'Wofür die Teile da sind',
      uses: ['Teile ein MP3 in mehrere Dateien, wenn eine Datei zu lang zum Senden ist.', 'Zerlege eine Sprachnotiz in gleiche Stücke, die du einzeln schicken kannst.', 'Teile eine Audiodatei in Teile, ohne nach Stille zu suchen.'],
      howTo: [
        { name: 'Audio ablegen', text: 'Jede MP3-, WAV-, M4A-, OGG- oder FLAC-Datei. Sie wird auf deinem Gerät dekodiert.' },
        { name: 'Zahl festlegen', text: 'Teile laufen von 2 bis 16. Die Statuszeile sagt, wie viele Dateien du bekommst und wie lang jede ungefähr ist. Zieh die Wellenform, wenn nur ein Abschnitt geteilt werden soll.' },
        { name: 'Zip laden', text: 'Exportiere MP3 oder WAV. Der Download ist ein Zip mit dem Namen der Datei, und darin liegen Teil 1, Teil 2 und der Rest.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Die Datei wird in deinem Browser dekodiert, dort zerschnitten und dort in ein Zip gepackt. Nach dem Laden der Seite kannst du offline gehen und sie exportiert weiter. WAV braucht keinen Extra-Download. MP3-Kodierung geht offline, nachdem der Encoder einmal geladen hat.' },
        { q: 'Wo landen die Schnitte?', a: 'Auf Sample-Grenzen. Die Teile sind gleich lang, und wenn die Sample-Zahl nicht aufgeht, sind die ersten Teile ein Sample länger. Nichts überlappt und nichts fällt weg. WAV sind diese Samples. Jedes MP3 wird einmal kodiert, mit der Bitrate, die du wählst, bis 320 kbps. Spielst du die MP3s hintereinander, kann an der Naht ein paar Millisekunden Codec-Füllung liegen.' },
        { q: 'Teilt es an Stille oder Kapiteln?', a: 'Nein. Die Schnitte sind gleiche Zeit, kein Suchlauf nach Pausen, Kapitelmarken oder einem neuen Song. Ein leiser Takt wird dort geschnitten, wo die Uhr es sagt. Teile gehen nur von 2 bis 16. Eine Datei mit weniger Samples als Teile wird abgelehnt.' },
        { q: 'Was ist der Unterschied zum Trimmer und zum Cutter?', a: 'Der Audio-Trimmer und der MP3-Cutter behalten einen Abschnitt oder löschen einen und speichern eine Datei. Diese Seite schreibt mehrere Dateien gleicher Länge. Der Audio-Joiner macht das Gegenteil: er setzt verschiedene Dateien hintereinander. Stille entfernen ist die Seite, die den Pausen folgt.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Der Teile-Regler, die Wellenform und der Download gehen per Touch in aktuellem Chrome, Edge, Firefox und Safari. Auf dem iPhone legt Safari das Zip in der Dateien-App ab.' },
      ],
      sections: [
        {
          heading: 'Gleiche Schnitte, auf den Samples',
          paragraphs: [
            'Die Teile laufen von 2 bis 16. Der Startwert ist 2. Jedes Teil ist gleich lang, außer die ersten Teile sind ein Sample länger, wenn die Länge nicht aufgeht. Das nächste Teil beginnt auf dem Sample nach dem Ende des vorigen. Kein Überlapp, keine Lücke.',
            'Zieh eine Auswahl, um nur diesen Abschnitt zu teilen. Ohne Auswahl wird die ganze Datei geteilt. Die WAV-Datei sind diese Samples. Ein MP3-Export kodiert jedes Teil einmal, mit der Bitrate, die du wählst, bis 320 kbps. Spielst du die MP3s hintereinander, kann an der Naht ein paar Millisekunden Codec-Füllung liegen. Die Samples selbst überlappten nicht.',
          ],
        },
        {
          heading: 'Eine Datei, mehrere Downloads',
          paragraphs: ['Das Zip ist der Weg, auf dem die Teile den Browser verlassen:'],
          bullets: [
            'Eine lange Sprachnotiz, in gleiche Stücke geschnitten, die du einzeln schicken kannst.',
            'Ein Song in zwei Teilen, wenn eine Nachrichten-App die ganze Datei ablehnt.',
            'Eine Aufnahme, die du als getrennte Dateien willst, nicht als einen Ausschnitt.',
          ],
        },
        {
          heading: 'Nicht der Cutter, und kein Stille-Scan',
          paragraphs: [
            'Der Audio-Trimmer und der MP3-Cutter behalten einen Abschnitt oder löschen einen und speichern eine Datei. Diese Seite schreibt mehrere Dateien gleicher Länge. Der Audio-Joiner macht das Gegenteil: er setzt verschiedene Dateien hintereinander.',
            'Die Seite sucht nicht nach Stille, Kapitelmarken oder einem neuen Song. Ein leiser Takt wird dort geschnitten, wo die Uhr es sagt. Wenn die Schnitte den Pausen folgen sollen, nimm Stille entfernen und schneide danach, was übrig bleibt.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen, oder klicken zum Auswählen',
      exportLabel: 'Teile laden',
    },
    'stereo-to-mono': {
      cardLine: 'Mittle jeden Kanal zu einem und lade diese Datei.',
      name: 'Stereo zu Mono',
      shortName: 'Zu Mono',
      title: 'Stereo zu Mono — ein gemittelter Kanal',
      description: 'Mittle die Kanäle zu einem und lade ihn. WAV behält diese Samples. Ein MP3 kodiert diese Mono-Datei einmal, bis 320 kbps.',
      h1: 'Stereo zu Mono',
      heroAlt: 'Eine Stereodatei zu einem Kanal mitteln',
      subtitle: 'Ein Kanal: der Durchschnitt jedes Kanals in der Datei.',
      intro: 'Diese Seite schreibt einen Kanal. Jedes Sample ist der Durchschnitt der Kanäle in der Datei, also treffen sich links und rechts in der Mitte. Eine Datei mit schon einem Kanal wird kopiert. Dekodierung und Mittelwert bleiben in deinem Browser.',
      usesHeading: 'Wenn du einen Kanal brauchst',
      uses: [
        'Eine Sprachnotiz, die aus einem Lautsprecher gleich klingen soll.',
        'Eine Datei, die ein Mono-Player oder eine App abgelehnt hat.',
        'Ein Mix, dessen links und rechts zusammenliegen sollen, nicht als breites Bild.',
      ],
      howTo: [
        { name: 'Audio ablegen', text: 'Jede MP3-, WAV-, M4A-, OGG- oder FLAC-Datei. Sie wird auf deinem Gerät dekodiert.' },
        { name: 'Mittelwert exportieren', text: 'Es gibt keinen Breitenregler. Der Export schreibt einen Kanal. Spiel ihn zuerst ab, wenn du den Mittelwert hören willst.' },
        { name: 'Datei öffnen', text: 'Ein Player, der die Kanalzahl zeigt, sollte eins sagen. WAV sind diese gemittelten Samples. MP3 kodiert sie einmal, bis 320 kbps.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Die Datei wird in deinem Browser dekodiert und dort gemittelt. Nach dem Laden der Seite kannst du offline gehen, und der Export läuft weiter. WAV braucht keinen weiteren Download. MP3 kodiert offline, nachdem der Encoder einmal geladen wurde.' },
        { q: 'Wie entsteht die Mono-Datei?', a: 'Jedes Sample ist die Summe der Kanäle in diesem Moment, geteilt durch die Kanalzahl. Zwei Kanäle heißen (links + rechts) / 2. Eine Datei mit schon einem Kanal wird kopiert. WAV behält diese Samples. Ein MP3 kodiert diesen einen Kanal einmal, mit der Bitrate, die du wählst, bis 320 kbps.' },
        { q: 'Kann es Mono zu Stereo machen?', a: 'Nein. Diese Seite erfindet keinen zweiten Kanal. Einen Kanal auf links und rechts zu kopieren ist immer noch ein Signal, und das ist eine andere Aufgabe. Die Datei, die du hier lädst, hat einen Kanal.' },
        { q: 'Was ist anders als der Trimmer?', a: 'Der Audio-Trimmer behält eine Zeitspanne und lässt die Kanalzahl in Ruhe. Der MP3-zu-WAV-Konverter wechselt den Behälter und lässt die Kanäle ebenfalls in Ruhe. Diese Seite ändert die Kanalzahl und behält die Länge.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Ablegen, Abspielen und Laden gehen per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Der Mittelwert, Sample für Sample',
          paragraphs: [
            'Jedes Ausgabesample ist die Summe der Kanäle in diesem Moment, geteilt durch die Kanalzahl der Datei. Zwei Kanäle heißen (links + rechts) / 2. Ein Kanal wird in einen neuen Puffer kopiert. Die Länge ändert sich nicht.',
            'Die Seite baut kein Stereobild, keinen Breitenregler und keine zweite Datei. Der Export ist ein Kanal. WAV sind diese Samples. Ein MP3 kodiert diese Mono-Datei einmal, mit der Bitrate, die du wählst, bis 320 kbps.',
          ],
        },
        {
          heading: 'Wofür der eine Kanal da ist',
          paragraphs: ['Der Mittelwert ist die ganze Arbeit:'],
          bullets: [
            'Eine Sprachnotiz, die aus einem Lautsprecher gleich klingen soll.',
            'Eine Datei, die eine Mono-App abgelehnt hat, weil sie noch zwei Kanäle hatte.',
            'Ein Mix, den du in der Mitte willst, nicht zwischen links und rechts aufgezogen.',
          ],
        },
        {
          heading: 'Kein Schnitt, und kein falsches Stereo',
          paragraphs: [
            'Der Audio-Trimmer behält eine Spanne und lässt die Kanäle, wie sie waren. MP3 zu WAV wechselt das Format und lässt die Kanäle ebenfalls. Diese Seite behält die Länge und schreibt einen Kanal.',
            'Sie macht aus einem Kanal keine zwei. Einen Kanal zu verdoppeln, damit ein Player Stereo zeigt, trägt immer noch ein Signal. Das tut dieser Export nicht.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen, oder klicken zum Auswählen',
      exportLabel: 'Mono laden',
    },
    bitcrusher: {
      cardLine: 'Quantisiere auf 1–16 Bit und halte jede Stufe bis zu 32 Samples.',
      name: 'Bitcrusher',
      shortName: 'Crush',
      title: 'Bitcrusher online — 1 bis 16 Bit',
      description: 'Quantisiere von 16 Bit auf 1, und halte jede Stufe bis zu 32 Samples. WAV behält die zerstuften Samples. MP3 kodiert sie einmal, bis 320 kbps.',
      h1: 'Bitcrusher online',
      heroAlt: 'Eine glatte Welle in Stufen verwandeln',
      subtitle: 'Bits von 1 bis 16, und ein Halten von 1 bis 32 Samples.',
      intro: 'Dieser Bitcrusher online verringert, wie viele Stufen jedes Sample annehmen kann, und hält diese Stufe dann über einige Samples. Stereo bleibt Stereo: jeder Kanal wird für sich zerstuft. Zieh eine Auswahl, um nur diese Spanne zu zerstufen. Dekodierung und die Stufen bleiben in deinem Browser.',
      usesHeading: 'Wofür die Stufen da sind',
      uses: [
        'Eine Stimme, die wie eine alte Konsole klingen soll.',
        'Ein Drum-Loop, bei dem die Stufen hörbar bleiben sollen.',
        'Ein Satz in der Datei, der Rest bleibt.',
      ],
      howTo: [
        { name: 'Audio ablegen', text: 'Jede MP3-, WAV-, M4A-, OGG- oder FLAC-Datei. Sie wird auf deinem Gerät dekodiert.' },
        { name: 'Bits und Halten setzen', text: 'Bits gehen von 1 bis 16 und starten bei 8. Halten geht von 1 bis 32 und startet bei 2. Spiel ab, um es zu hören. Zieh die Welle, wenn nur eine Spanne zerstuft werden soll.' },
        { name: 'Exportieren', text: 'WAV behält die gestuften Samples. MP3 kodiert sie einmal, bis 320 kbps, und kann die Stufen weichzeichnen.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Die Datei wird in deinem Browser dekodiert und dort zerstuft. Nach dem Laden der Seite kannst du offline gehen, und der Export läuft weiter. WAV braucht keinen weiteren Download. MP3 kodiert offline, nachdem der Encoder einmal geladen wurde.' },
        { q: 'Was machen Bits und Halten?', a: 'Bits setzt die Zahl der Stufen. Bei 16 Bit bleibt ein Sample auf Vollaussteuerung, wenn Halten 1 ist. Bei 1 Bit wird ein Sample zu oben, unten oder Stille. Halten wiederholt die aktuelle Stufe über so viele Samples: Halten 4 behält einen Wert über vier Samples und nimmt dann die nächste Stufe. Jeder Kanal wird für sich zerstuft, also bleibt eine Stereodatei Stereo.' },
        { q: 'Behält MP3 die Stufen?', a: 'WAV sind die zerstuften Samples. Ein MP3 kodiert sie einmal, mit der Bitrate, die du wählst, bis 320 kbps. Der Encoder kann die scharfen Stufen runden. Wenn die Stufen bleiben müssen, exportiere WAV.' },
        { q: 'Was ist anders als die Verzerrung?', a: 'Audio verzerren biegt die Welle durch eine glatte Kurve. Diese Seite ersetzt Samples durch eine kurze Liste von Stufen und hält sie dann. Echo fügt später Kopien hinzu. Der Tiefpassfilter senkt Höhen. Keines davon ist eine Bittiefen-Regelung.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Der Bits-Regler, der Halten-Regler, die Welle und der Download gehen per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Stufen, dann ein Halten',
          paragraphs: [
            'Bits gehen von 1 bis 16. Es startet bei 8. Ein Sample wird auf die nächste Stufe in diesem Bereich gerundet. Bei 1 Bit ist die Stufe nur oben, unten oder Stille. Bei 16 Bit bleibt ein Sample auf Vollaussteuerung, wenn Halten 1 ist.',
            'Halten geht von 1 bis 32 und startet bei 2. Die aktuelle Stufe wird über so viele Samples wiederholt, dann setzt das nächste Sample eine neue Stufe. Links und rechts werden getrennt zerstuft. Die Länge ändert sich nicht.',
          ],
        },
        {
          heading: 'Was du hörst',
          paragraphs: ['Die zwei Zahlen machen verschiedene Arbeit:'],
          bullets: [
            '8 Bit ist eine milde Stufe. 4 Bit ist deutlich. 1 Bit ist oben, unten oder Stille.',
            'Halten 1 bewegt jedes Sample. Halten 8 oder mehr friert jede Stufe ein, sodass die Treppe leicht zu hören ist.',
            'Zieh eine Auswahl, wenn nur ein Satz zerstuft werden soll. Ohne Auswahl wird die ganze Datei zerstuft.',
          ],
        },
        {
          heading: 'Nicht die Verzerrung',
          paragraphs: [
            'Audio verzerren ist eine glatte Kurve, von leichtem Clipping bis hartem Clipping. Diese Seite sind Stufen und ein Halten. Echo fügt spätere Kopien hinzu. Der Tiefpassfilter senkt nur Höhen.',
            'WAV behält die zerstuften Samples. Ein MP3 kodiert sie einmal, bis 320 kbps, und kann die Ecken weichzeichnen. Wenn die Stufen überleben müssen, nimm WAV.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen, oder klicken zum Auswählen',
      exportLabel: 'Stufen exportieren',
    },
    '432-hz-converter': {
      cardLine: 'Senke die Tonhöhe um etwa 0,32 Halbtöne und behalte die Länge.',
      name: '432-Hz-Konverter',
      shortName: '432 Hz',
      title: '432-Hz-Konverter — gleiche Länge, 0,32 tiefer',
      description: 'Senke die Tonhöhe um 12*log2(432/440), etwa 0,32 Halbtöne, und behalte die Länge. WAV ist diese Verschiebung. MP3 kodiert sie einmal, bis 320 kbps.',
      h1: '432-Hz-Konverter',
      heroAlt: 'Eine Datei um etwa 0,32 Halbtöne senken',
      subtitle: 'Die ganze Datei geht um etwa 0,32 Halbtöne runter. Die Länge bleibt.',
      intro: 'Dieser Konverter verschiebt die ganze Datei um das 12-fache von log2 aus 432 durch 440, etwa 0,32 Halbtöne nach unten. Ein 440-Hz-Ton rückt Richtung 432 Hz. Die Länge ändert sich nicht, und Noten werden nicht einzeln gestimmt. Dekodierung und die Verschiebung bleiben in deinem Browser.',
      usesHeading: 'Wenn die ganze Datei näher an 432 Hz soll',
      uses: [
        'Ein Track um 440 Hz, den du näher an 432 Hz willst.',
        'Eine Schleife, deren Länge gleich bleiben muss, damit sie noch passt.',
        'Eine Datei, die du neben andere Tracks legst, die schon Richtung 432 Hz verschoben sind.',
      ],
      howTo: [
        { name: 'Audio ablegen', text: 'Jede MP3-, WAV-, M4A-, OGG- oder FLAC-Datei. Sie wird auf deinem Gerät dekodiert.' },
        { name: 'Verschiebung hören', text: 'Die Vorschau ist die verschobene Datei. Auf dieser Seite gibt es keinen Halbtonregler, weil ein gerundeter Halbton null wäre und die Datei sich nicht bewegen würde.' },
        { name: 'Exportieren', text: 'Die Länge entspricht der Datei, die du abgelegt hast. WAV sind die verschobenen Samples. MP3 kodiert sie einmal, bis 320 kbps.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Die Datei wird in deinem Browser dekodiert und dort verschoben. Nach dem Laden der Seite kannst du offline gehen, und der Export läuft weiter. WAV braucht keinen weiteren Download. MP3 kodiert offline, nachdem der Encoder einmal geladen wurde.' },
        { q: 'Wie weit bewegt sie sich?', a: 'Die Verschiebung ist das 12-fache von log2 aus 432 durch 440, etwa 0,3177 Halbtöne nach unten, und die Seite benutzt diesen Bruch. Sie rundet nicht auf den nächsten ganzen Halbton, der null wäre und die Datei unverändert ließe. Ein 440-Hz-Ton rückt Richtung 432 Hz. Der Rest der Datei bewegt sich um denselben Betrag. WAV sind die verschobenen Samples. Ein MP3 kodiert sie einmal, mit der Bitrate, die du wählst, bis 320 kbps.' },
        { q: 'Ändert sich die Länge?', a: 'Nein. Das ist eine Tonhöhenverschiebung, keine Tempoänderung. Der Tempo-Wechsler ändert die Länge. Audio-Geschwindigkeit ändern ändert die Länge auch, außer du hältst die Tonhöhe. Hier bleibt die Länge, und die Tonhöhe geht runter.' },
        { q: 'Kann es eine Note nachstimmen?', a: 'Nein. Die ganze Datei bewegt sich zusammen. Ein Akkord bekommt seine Noten nicht einzeln auf 432 Hz gezogen. Eine Datei kürzer als 32 Samples kommt unverändert zurück, weil die Verschiebung so viel Audio braucht. Diese Seite behauptet nicht, das Ergebnis sei gesünder, ruhiger oder besser.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja. Ablegen, Abspielen und Laden gehen per Touch in aktuellem Chrome, Edge, Firefox und Safari.' },
      ],
      sections: [
        {
          heading: 'Eine Verschiebung für die ganze Datei',
          paragraphs: [
            'Der Betrag ist das 12-fache von log2 aus 432 durch 440, etwa 0,32 Halbtöne nach unten. Die Seite gibt diesen Bruch durch. Ihn auf einen ganzen Halbton zu runden würde ihn zu null machen, und die Datei würde sich nicht bewegen.',
            'Ein 440-Hz-Ton rückt Richtung 432 Hz. Jeder andere Ton bewegt sich um denselben Bruch. Die Länge bleibt gleich. WAV sind die verschobenen Samples. Ein MP3 kodiert sie einmal, mit der Bitrate, die du wählst, bis 320 kbps.',
          ],
        },
        {
          heading: 'Was gleich bleibt',
          paragraphs: ['Die Verschiebung ist die ganze Arbeit:'],
          bullets: [
            'Die Länge entspricht der Datei, die du abgelegt hast.',
            'Ein Akkord bewegt sich zusammen. Noten werden nicht einzeln auf 432 Hz gezogen.',
            'Eine Datei kürzer als 32 Samples kommt unverändert zurück.',
          ],
        },
        {
          heading: 'Keine Tempoänderung',
          paragraphs: [
            'Der Tonhöhen-Regler auf dieser Seite bewegt sich in ganzen Halbtönen. Diese Seite benutzt den Bruch, etwa 0,32 nach unten, also ist das Ergebnis nicht dasselbe wie der Regler auf null.',
            'Der Tempo-Wechsler und Audio-Geschwindigkeit ändern ändern die Länge. Diese Seite lässt die Länge gleich. Sie sagt auch nicht, das Ergebnis sei gesünder oder besser. Sie bewegt nur die Tonhöhe.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen, oder klicken zum Auswählen',
      exportLabel: '432 Hz laden',
    },
    'audio-to-midi': {
      cardLine: 'Mach aus einer Melodie, einer Stimme oder einem Solo-Klavier eine MIDI-Datei. Ein voller Mix kommt falsch heraus.',
      name: 'Audio zu MIDI',
      shortName: 'Audio zu MIDI',
      title: 'Audio zu MIDI — ein Instrument, 3 Minuten',
      description: 'Melodie, Stimme oder Solo-Klavier wird MIDI. Voller Mix, Drums und dichte Akkorde kommen falsch heraus. Höchstens 3 Minuten. Nichts wird hochgeladen.',
      h1: 'Audio zu MIDI — Noten von einem Instrument',
      heroAlt: 'Eine Melodie oder ein Solo-Klavier in MIDI-Noten verwandeln',
      subtitle: 'Eine .mid-Datei im Browser. Höchstens 3 Minuten von einem Instrument.',
      intro: 'Leg eine Melodie, eine gesungene Zeile oder ein Solo-Klavier ab. Diese Seite schreibt eine MIDI-Datei, die du in GarageBand, Ableton oder Logic öffnest: Tonhöhe, Start, Länge und Velocity jeder Note. Spotifys Basic Pitch läuft in diesem Tab. Die Audiodatei wird nicht hochgeladen. Das Modell ist unter 1 MB und kommt einmal von dieser Seite. Ein voller Mix, Drums oder dichte Akkorde kommen falsch heraus. Länger als 3 Minuten muss zuerst geschnitten werden.',
      usesHeading: 'Noten, die du danach ändern kannst',
      uses: [
        'Öffne eine gesummte Melodie in einer DAW und verschiebe die Noten, ohne neu aufzunehmen.',
        'Mach aus einem Solo-Klavier Noten. Sitzt die Tonart nicht, verschiebst du das Original im Tonhöhen-Wechsler.',
        'Lies die Notenzahl vor dem Download und lass die Datei liegen, wenn die Zahl Unsinn ist.',
      ],
      howTo: [
        { name: 'Ein Instrument ablegen', text: 'MP3, WAV, M4A oder ein Video mit Tonspur. Der Browser dekodiert. Nichts wird hochgeladen. Länger als 3 Minuten bleibt gesperrt, bis du schneidest.' },
        { name: 'In Noten umwandeln', text: 'Beim ersten Mal kommt das Modell, unter 1 MB, von dieser Seite. Danach stehen Noten und Anzahl da.' },
        { name: 'MIDI herunterladen', text: 'Speichere die .mid-Datei. Eine Spur aus Note-an und Note-aus. Diese Seite spielt nichts vor.' },
      ],
      faqs: [
        { q: 'Wird mein Audio hochgeladen?', a: 'Nein. Der Browser dekodiert die Datei und lässt Basic Pitch im Tab laufen. Die einzige Netzwerkanfrage ist das Modell, unter 1 MB, von dieser Seite, beim ersten Mal. Danach kann der Browser seine Kopie wiederverwenden. Das Audio selbst geht nirgendwohin.' },
        { q: 'Was steht in der MIDI-Datei?', a: 'Eine Spur, MIDI-Typ 0. Jede Note hat eine Tonhöhe von 21 bis 108, einen Start, eine Länge und eine Velocity. Die Tempobezeichnung ist 120, damit die Zeiten zu den Sekunden der Aufnahme passen. Diese 120 ist nicht das BPM des Stücks. Die Spur beginnt auf dem General-MIDI-Klavier, damit eine DAW einen Klang hat. Es ist keine Aufnahme des ursprünglichen Instruments. WAV und MP3 gibt es hier nicht.' },
        { q: 'Was kommt falsch heraus?', a: 'Ein voller Mix, Drums und dichte Akkorde. Basic Pitch ist für ein Instrument auf einmal gebaut, und eine volle Aufnahme wird zu Extra-Noten oder zu gar keinen. Die Datei hat keine Pitch-Bend-Kurve, also wird ein Glissando eine stehende Note. Keine Wiedergabe, keine Notenblätter, keine Stem-Trennung. Über 3 Minuten wird abgelehnt. Schneide im Audio-Trimmer und komm zurück.' },
        { q: 'Was ist der Unterschied zum Tonart- und BPM-Finder?', a: 'Der Tonart- und BPM-Finder liest zwei Zahlen und schreibt keine Datei. Diese Seite schreibt Noten. Sie nennt dir weder Tonart noch BPM. Die liest du beim Tonart- und BPM-Finder. Die Tonhöhe der Originaldatei zu verschieben, ohne Noten zu machen, ist der Tonhöhen-Wechsler.' },
        { q: 'Geht das auf dem Handy?', a: 'Ja, in aktuellem Chrome, Edge, Firefox und Safari. Die Grenze sind 3 Minuten, weil das Modell die Noten im Speicher hält. Ein Handy mit wenig Speicher kann die Umwandlung abbrechen. Die Datei bleibt unverändert, und du kannst einen kürzeren Clip versuchen. Der Download ist eine .mid-Datei.' },
        { q: 'Ich habe das in Logic Pro gesucht. Ist das dasselbe?', a: 'Nein. Logic hat auf der Spur einen eigenen Befehl von Audio zu MIDI. Diese Seite ist für den Browser, wenn Logic nicht offen ist. Die .mid-Datei kannst du danach in Logic ziehen. Sie entfernt kein MIDI-Gerät in macOS und bearbeitet kein Logic-Projekt.' },
      ],
      sections: [
        {
          heading: 'Ein Instrument, im Tab',
          paragraphs: [
            'Basic Pitch hört einen Kanal bei 22050 Hz. Stereo wird zu Mono gemischt, bevor das Modell läuft. Die Gewichte sind unter 1 MB und kommen einmal von dieser Seite.',
            'Gedacht ist es für eine Melodie, eine Stimme oder ein Solo-Klavier. Ein voller Mix, Drums oder ein dichter Akkordstapel liegt außerhalb dessen, was dieses Modell hält.',
          ],
        },
        {
          heading: 'Was die Datei wirklich enthält',
          paragraphs: ['Der Download ist eine normale MIDI-Datei, kein Audio:'],
          bullets: [
            'Tonhöhe, Start, Länge und Velocity. Keine Pitch-Bend-Kurve.',
            'Tempobezeichnung 120, damit die Zeiten zu den Sekunden der Aufnahme passen. Das ist nicht das BPM des Stücks.',
            'Eine Spur, die auf dem General-MIDI-Klavier beginnt, damit eine DAW einen Klang hat.',
          ],
        },
        {
          heading: 'Was diese Seite nicht tut',
          paragraphs: [
            'Sie spielt das MIDI nicht ab, druckt keine Notenblätter und trennt ein Stück nicht in Stems. Sie benennt keine Akkorde.',
            'Länger als 3 Minuten wird abgelehnt. Schneide zuerst. Logics eigene Umwandlung bleibt in Logic. Diese Seite öffnet kein Logic-Projekt.',
          ],
        },
      ],
      dropHint: 'Audiodatei ablegen, oder klicken zum Auswählen',
      exportLabel: 'In MIDI umwandeln',
    },
  },
};
