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
    trustLocal: 'Lokal verarbeitet — nichts wird hochgeladen',
    trustFree: 'Kostenlos, ohne Anmeldung',
    trustClean: 'Ohne Wasserzeichen',
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
      wav: 'WAV · verlustfrei',
      m4r: 'M4R · iPhone-Klingelton',
    },
    categories: {
      cut: 'Schneiden & Kürzen',
      merge: 'Zusammenfügen & Umwandeln',
      record: 'Aufnehmen',
      effects: 'Effekte & Studio',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — bis etwa eine Stunde',
    dropLocal: 'Lokal verarbeitet — deine Datei verlässt diesen Tab nie',
    zoomOut: 'Verkleinern',
    zoomIn: 'Vergrößern',
    loadDifferent: 'Andere Datei laden',
    startOver: 'Von vorn',
    waveform: 'Wellenform. Ziehen, um einen Bereich auszuwählen.',
    play: 'Auswahl abspielen',
    pause: 'Pause',
    hintSelect: 'Auf der Wellenform ziehen, um auszuwählen · Leertaste zum Abspielen',
    hintConvert: 'Leertaste zum Abspielen · nichts wird hochgeladen',
    reverse: 'Rückwärts abspielen',
    normalize: 'Peak normalisieren',
    speed: 'Geschwindigkeit',
    pitch: 'Tonhöhe',
    bass: 'Bass',
    volume: 'Lautstärke',
    reverb: 'Hall',
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
  },
  home: {
    title: 'Free Audio Editor — Audio online bearbeiten, ohne Upload',
    description:
      'Kostenloser Online-Audio-Editor: kürzen, schneiden, zusammenfügen, umwandeln — direkt im Browser, ohne Anmeldung. Deine Dateien verlassen dein Gerät nie.',
    appBlurb: 'Kostenloser Audio-Editor online — Audio im Browser schneiden, kürzen, zusammenfügen und bearbeiten.',
    badge: '100 % lokal verarbeitet · nichts wird hochgeladen',
    h1: 'Kostenloser Audio-Editor online',
    lede: 'Kürze, schneide, füge zusammen und bearbeite Audio direkt im Browser. Ohne Anmeldung, ohne Wasserzeichen, ohne Upload — deine Dateien verlassen dein Gerät nie.',
    ctaTrim: 'Audiodatei kürzen',
    ctaMerge: 'Songs zusammenfügen',
    toolsHeading: 'Alle Audio-Tools',
    mostUsed: 'Am häufigsten genutzt',
    comingTitle: 'Als Nächstes',
    comingBody: 'Überblendungs-Mixer, Stille entfernen und mehr — wieder mit Privatsphäre zuerst.',
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
        a: 'Du kannst MP3, WAV, M4A/AAC, OGG, FLAC und WebM-Audio öffnen und das Ergebnis als MP3 (128–320 kbps) oder verlustfreies WAV speichern. Der Klingelton-Maker exportiert außerdem M4R in Chrome, Edge und Safari.',
      },
    ],
  },
  hub: {
    title: 'Alle Audio-Tools — Kostenlos online schneiden & verbinden',
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
    updated: 'Zuletzt aktualisiert: 14. Oktober 2026',
    sections: [
      {
        h: 'Deine Audiodateien',
        body: 'Jedes Tool auf dieser Seite verarbeitet Audio vollständig in deinem Browser mit der Web Audio API. Deine Dateien werden {em} — es gibt keinen Upload-Endpunkt. Wenn du den Tab schließt, ist das dekodierte Audio aus dem Speicher verschwunden.',
        em: 'nie auf unsere Server hochgeladen',
      },
      {
        h: 'Was wir speichern',
        body: 'Nichts über dich. Die Seite hat keine Konten und verlangt keine E-Mail-Adresse. Deine Einstellung für hell oder dunkel liegt im localStorage deines Browsers und verlässt dein Gerät nie.',
      },
      {
        h: 'Drittanbieter',
        body: 'Der MP3-Encoder (lamejs) wird beim ersten MP3-Export bei Bedarf von einem öffentlichen Content Delivery Network (jsdelivr) geladen. Das CDN sieht eine gewöhnliche Bibliotheksanfrage; es bekommt weder dein Audio noch irgendeine Information darüber. Schriften kommen von der eigenen Domain dieser Seite.',
      },
      {
        h: 'Analyse und Werbung',
        body: 'Den Gesamtverkehr messen wir mit Vercel Web Analytics, ohne Cookies und nur mit aggregierten Seitenaufrufen — nie deine Identität und nie dein Audio. Wir schalten keine Werbung. Ändert sich die Analyse oder die Werbung, wird diese Erklärung zuerst aktualisiert.',
      },
    ],
    contactHeading: 'Kontakt',
    contactBefore: 'Fragen zu dieser Erklärung? Schreib an {email}.',
  },
  tools: {
    'bass-booster': {
      name: 'Bass-Booster',
      shortName: 'Bass',
      title: 'Bass-Booster — Bass online verstärken, kostenlos',
      description:
        'Bis zu +15 dB sauberen Bass nachschieben — ein echter Low-Shelf unter 150 Hz, im Browser, ohne Loudness-Trick. Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Bass-Booster',
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
      dropHint: 'Audiodatei hierher ziehen oder klicken',
    },
    'fade-audio': {
      name: 'Audio ein-/ausblenden',
      shortName: 'Blenden',
      title: 'Audio ein- und ausblenden — Fade online kostenlos',
      description:
        'Sanftes Ein- und Ausblenden für Songs und Aufnahmen, direkt im Browser. Länge auf 0,1 s genau, Export als MP3 oder WAV. Kostenlos, ohne Upload.',
      h1: 'Audio ein- und ausblenden',
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
          text: 'Öffne „Anpassen“ und stelle Fade-In und Fade-Out — bei Songs sind 1–3 Sekunden natürlich, bei Loops 0,2–0,5.',
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
          a: 'Hier nicht — diese Seite blendet eine Datei ein und aus. Das weiche Überblenden vom Ende eines Tracks in den Anfang des nächsten ist ein Crossfade; das macht der Audio-Joiner.',
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
      dropHint: 'Audiodatei hierher ziehen oder klicken',
    },
    'audio-trimmer': {
      name: 'Audio-Trimmer',
      shortName: 'Audio-Trimmer',
      title: 'Audio-Trimmer — Audio und Musik online kostenlos kürzen',
      description:
        'Kürze Musik, Sprachnotizen und Podcasts im Browser. Auswählen, anhören und in Sekunden speichern — kostenlos, ohne Anmeldung, und dein Audio verlässt dein Gerät nie.',
      h1: 'Audio-Trimmer',
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
          a: 'Aufnahmen bis etwa einer Stunde laufen auf einem modernen Computer problemlos. Die praktische Grenze ist der Speicher deines Geräts, kein künstliches Limit.',
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'mp3-cutter': {
      name: 'MP3-Cutter',
      shortName: 'MP3-Cutter',
      title: 'MP3 schneiden — online kostenlos',
      description:
        'MP3 online in wenigen Klicks schneiden: den besten Teil behalten oder das Intro löschen — kostenlos, ohne Anmeldung, ohne Upload.',
      h1: 'MP3 schneiden',
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
      ],
      dropHint: 'MP3-Datei ablegen oder klicken zum Auswählen',
    },
    'mp3-editor': {
      name: 'MP3-Editor',
      shortName: 'MP3-Editor',
      title: 'MP3-Editor — Schneiden, Blenden, Geschwindigkeit und Rückwärts',
      description:
        'MP3 online bearbeiten: schneiden, blenden, Lautstärke und Tempo ändern, rückwärts abspielen. Kostenlos und privat — alles läuft in deinem Browser.',
      h1: 'MP3-Editor',
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
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'ringtone-maker': {
      name: 'Klingelton-Maker',
      shortName: 'Klingelton',
      title: 'Klingelton-Maker — Klingelton aus jedem Song online',
      description:
        'Aus jedem Song ein Klingelton: die besten 40 Sekunden wählen, Blende dazu, als M4R oder MP3 exportieren — kostenlos, ohne Anmeldung.',
      h1: 'Klingelton-Maker',
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
          a: 'Füge unter Anpassen eine kurze Ausblendung hinzu — dann klingt der Sprung zurück zum Anfang natürlich, statt mitten in der Note abzubrechen.',
        },
        {
          q: 'Gibt es ein Wasserzeichen oder ein Limit?',
          a: 'Kein Wasserzeichen, keine Anmeldung, kein Tageslimit. Der Klingelton wird auf deinem eigenen Gerät gerendert und direkt aus dem Browser heruntergeladen.',
        },
      ],
      dropHint: 'Song ablegen oder klicken zum Auswählen',
    },
    'audio-joiner': {
      name: 'Audio-Joiner',
      shortName: 'Audio-Joiner',
      title: 'MP3 zusammenfügen — online kostenlos',
      description:
        'Songs und Audiodateien in beliebiger Reihenfolge zu einem Titel verbinden — direkt im Browser. Optionale Blenden, kostenlos, ohne Upload.',
      h1: 'MP3 zusammenfügen',
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
      ],
      dropHint: 'Zwei oder mehr Audiodateien ablegen oder klicken zum Auswählen',
    },
    'wav-to-mp3': {
      name: 'WAV-zu-MP3-Konverter',
      shortName: 'WAV in MP3',
      title: 'WAV in MP3 — WAV-Dateien online kostenlos umwandeln',
      description:
        'Wandle WAV im Browser in MP3 um — 128, 192 oder 320 kbps. Kostenlos, ohne Anmeldung: dein Audio wird lokal umgewandelt und nie auf einen Server hochgeladen.',
      h1: 'WAV-zu-MP3-Konverter',
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
          text: 'Ziehe eine .wav-Datei hierher oder klicke zum Auswählen. Andere Audioformate (M4A, FLAC, OGG) werden genauso umgewandelt.',
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
          a: 'Nein. Die Datei wird in deinem Browser dekodiert, von einer kleinen Bibliothek, die von einem CDN geladen wird, nach MP3 kodiert und zurück auf deine Festplatte gespeichert. Das Audio selbst verlässt dein Gerät nie.',
        },
      ],
      dropHint: 'WAV-Datei ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'reverse-audio': {
      name: 'Audio rückwärts',
      shortName: 'Rückwärts',
      title: 'Audio rückwärts — Songs rückwärts abspielen, kostenlos',
      description:
        'Jeden Song rückwärts im Browser abspielen: ein Klick, sofortige Vorschau, speichern als MP3 oder WAV — kostenlos, nichts wird hochgeladen.',
      h1: 'Audio rückwärts',
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
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'change-audio-speed': {
      name: 'Audio-Geschwindigkeit ändern',
      shortName: 'Geschwindigkeit',
      title: 'Audio schneller machen — online kostenlos',
      description:
        'Audio von 0,5× bis 2× schneller oder langsamer, direkt im Browser. Sofortige Vorschau, Export als MP3 oder WAV — kostenlos, nichts wird hochgeladen.',
      h1: 'Audio schneller machen',
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
          a: 'Ja — Geschwindigkeit und Tonhöhe bewegen sich zusammen, wie eine Schallplatte, die schneller oder langsamer läuft: 2× klingt etwa eine Oktave höher, 0,5× etwa eine Oktave tiefer. Das ist der klassische Effekt; die Tonhöhe zu halten und nur die Geschwindigkeit zu ändern braucht einen eigenen Time-Stretch-Algorithmus, den wir später ergänzen können. Um die Tonhöhe zu ändern, ohne die Länge zu ändern, nimm den Tonhöhen-Regler.',
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
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'increase-volume': {
      name: 'MP3 lauter machen',
      shortName: 'MP3 lauter',
      title: 'MP3 lauter machen — Lautstärke online kostenlos erhöhen',
      description:
        'Leises Audio bis auf das 4-Fache lauter machen, direkt im Browser. Der eingebaute Limiter hält den Klang sauber — kostenlos, nichts wird hochgeladen.',
      h1: 'MP3 lauter machen',
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
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'mp4-to-mp3': {
      name: 'MP4-zu-MP3-Konverter',
      shortName: 'MP4 in MP3',
      title: 'MP4 in MP3 — Video online kostenlos in MP3 umwandeln',
      description:
        'Wandle MP4-Video im Browser in MP3 um — die Tonspur wird lokal extrahiert und nie hochgeladen. Kostenlos, schnell, ohne Anmeldung, auch auf dem Handy.',
      h1: 'MP4 in MP3 umwandeln',
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
          text: 'Ziehe eine MP4 hierher oder klicke zum Auswählen. WebM- und MOV-Dateien mit üblichen Audiospuren funktionieren genauso.',
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
      dropHint: 'MP4 oder Videodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'extract-audio': {
      name: 'Audio-Extraktor',
      shortName: 'Audio extrahieren',
      title: 'Audio aus Video — Tonspur als MP3 oder WAV speichern',
      description:
        'Extrahiere die Audiospur aus jedem Video im Browser und speichere sie als MP3 oder verlustfreies WAV. Kostenlos, privat, kein Upload — auch bei großen Dateien.',
      h1: 'Audio aus Video',
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
          text: 'Jede MP4, jedes WebM und jede MOV mit einer üblichen Tonspur funktioniert. Die Datei verlässt dein Gerät nie.',
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
      ],
      dropHint: 'Videodatei ablegen oder klicken zum Auswählen',
      exportLabel: 'Audio extrahieren',
    },
    'voice-recorder': {
      name: 'Sprachrekorder',
      shortName: 'Sprachrekorder',
      title: 'Sprachrekorder online — aufnehmen, kürzen, kostenlos speichern',
      description:
        'Nimm dein Mikrofon im Browser auf, kürze die Aufnahme und speichere sie als MP3 oder WAV. Kostenlos und privat — Aufnahmen werden nie hochgeladen.',
      h1: 'Sprachrekorder',
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
      dropHint: 'Oder eine vorhandene Aufnahme zum Bearbeiten ablegen',
    },
    'volume-booster': {
      name: 'Lautstärke-Booster',
      shortName: 'Lauter machen',
      title: 'Lautstärke-Booster — Musik und Videos online lauter machen',
      description:
        'Heb die Lautstärke von leiser Musik und Videotonspuren bis auf das 4-Fache im Browser an. Ein Limiter hält es sauber — kostenlos, privat, nichts wird hochgeladen.',
      h1: 'Lautstärke-Booster',
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
      ],
      dropHint: 'Audio- oder Videodatei ablegen oder klicken zum Auswählen',
    },
    'normalize-audio': {
      name: 'Audio-Normalizer',
      shortName: 'Normalisieren',
      title: 'Audio normalisieren — Pegel online kostenlos angleichen',
      description:
        'Normalisiere Audio im Browser auf einen einheitlichen Peak-Pegel — MP3, WAV, M4A und mehr. Ein Klick, kostenlos, nichts wird hochgeladen.',
      h1: 'Audio normalisieren',
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
          text: 'Jede MP3, WAV, M4A oder eine andere Audiodatei. Sie wird lokal dekodiert und ausgewertet — nichts verlässt dein Gerät.',
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
          a: 'Nein. Das ist Peak-Normalisierung — sofort und berechenbar. Streaming-Dienste gleichen Titel über die integrierte Lautheit (LUFS) an, ein längerer Mittelwert, der ins Mastering gehört. Peak-Normalisierung bleibt trotzdem die richtige schnelle Korrektur für einen einheitlichen Wiedergabepegel.',
        },
        {
          q: 'Verringert Normalisieren die Qualität?',
          a: 'Die Pegeländerung selbst ist mathematisch sauber und unhörbar. Die einzige Qualitätsfrage ist das Exportformat: WAV ist für die Verstärkung bitgenau, während MP3 einmal neu kodiert. Exportiere WAV, wenn die Datei weiterbearbeitet wird.',
        },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'slowed-reverb': {
      name: 'Slowed + Reverb',
      shortName: 'Slowed + Reverb',
      title: 'Slowed + Reverb — Songs online kostenlos verlangsamen',
      description:
        'Mach aus jedem Song im Browser ein Slowed + Reverb: verlangsamen, Hall darüberlegen, als MP3 exportieren. Kostenlos, nichts wird hochgeladen.',
      h1: 'Slowed + Reverb',
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
          a: 'Ja, absichtlich — wie eine Schallplatte mit der falschen Geschwindigkeit. Der Gesang wird tiefer, und die Tonart sinkt im selben Verhältnis. Dieser Tonhöhenabfall ist die Signatur des Stils; Slowed ohne Tonhöhenänderung braucht einen Time-Stretch-Editor, und das ist ein anderes, schwereres Werkzeug.',
        },
        {
          q: 'Wie viel Hall soll ich dazugeben?',
          a: 'Starte bei etwa 20–30 % und hör hin. Der Hall ist ein synthetischer Abklingschweif — ab etwa 50 % klingt der Titel wie eine Kathedrale, und der Gesang verliert die Worte.',
        },
        {
          q: 'Darf ich verlangsamte Songs in meinen Videos verwenden?',
          a: 'Einen Titel zu verlangsamen ändert nichts an seinem Urheberrecht. Für Uploads auf YouTube oder TikTok brauchst du weiterhin die Rechte am Originalsong — viele Creator nutzen stattdessen die lizenzierte Musikbibliothek der Plattform und heben Slowed-Edits für eigene Aufnahmen auf.',
        },
      ],
      dropHint: 'Song ablegen oder klicken zum Auswählen',
    },
    'pitch-changer': {
      name: 'Tonhöhen-Regler',
      shortName: 'Tonhöhe',
      title: 'Tonhöhe ändern — Tonhöhe verschieben, Länge bleibt',
      description: 'Verschiebe die Tonhöhe eines Songs oder einer Stimme um bis zu 12 Halbtöne, ohne die Länge zu ändern. Kostenlos, im Browser, nichts wird hochgeladen.',
      h1: 'Tonhöhe ändern',
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
        { q: 'Ist das dasselbe wie die Geschwindigkeit ändern?', a: 'Nein. Der Geschwindigkeitsregler spielt die Datei schneller oder langsamer, die Tonhöhe geht mit und die Länge ändert sich. Diese Seite verschiebt nur die Tonhöhe.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Die Verschiebung wird in deinem Browser berechnet und der Export landet auf deinem Gerät.' },
      ],
      dropHint: 'Audiodatei ablegen oder klicken zum Auswählen',
    },
    'm4a-to-mp3': {
      name: 'M4A in MP3',
      shortName: 'M4A in MP3',
      title: 'M4A in MP3 — M4A und AAC online kostenlos umwandeln',
      description: 'Wandle M4A- und AAC-Audio im Browser in MP3 um. Kostenlos, ohne Konto, nichts wird hochgeladen. Wähl 128, 192 oder 320 kbps.',
      h1: 'M4A in MP3',
      subtitle: 'Mach aus M4A- und AAC-Dateien MP3 — im Browser, nichts wird hochgeladen.',
      intro: 'Sprachmemos und AAC-Aufnahmen sind oft M4A. Leg die Datei ab, wähl eine Bitrate, und dein Browser dekodiert sie und speichert ein MP3. Das Audio geht an keinen Server.',
      usesHeading: 'M4A-Dateien, die Leute konvertieren',
      uses: [
        'Mach aus einer iPhone-Sprachnotiz oder einem AAC-Download eine MP3, die mehr Player öffnen.',
        '128 kbps für Sprache, 320 kbps für Musik.',
        'Die M4A bleibt auf diesem Gerät. Für die Konvertierung wird nichts hochgeladen.',
      ],
      howTo: [
        { name: 'M4A ablegen', text: 'Zieh eine .m4a- oder .aac-Datei auf die Seite oder klick zum Auswählen. Ein Video-MP4 gehört auf die Seite MP4 in MP3.' },
        { name: 'Bitrate wählen', text: '320 kbps für Musik, 192 kbps fürs tägliche Hören, 128 kbps für Sprachmemos.' },
        { name: 'Umwandeln und laden', text: 'Klick auf In MP3 umwandeln. Dekodieren und Kodieren passiert auf deinem Gerät, danach startet der Download.' },
      ],
      faqs: [
        { q: 'Welche M4A-Dateien gehen?', a: 'AAC-Audio in einer M4A, so wie Sprachmemos und die meisten AAC-Downloads. Apple Lossless (ALAC) in einer M4A dekodiert der Browser oft nicht. Wandle die Datei zuerst in AAC oder WAV um und bring sie dann hierher.' },
        { q: 'Was ist mit MP4-Video?', a: 'Für Videos nimm den MP4-in-MP3-Wandler. Diese Seite ist für Audio: M4A und AAC.' },
        { q: 'Verliert die Umwandlung in MP3 Qualität?', a: 'MP3 ist verlustbehaftet. Bei 320 kbps ist der Unterschied zum AAC-Original für fast alle klein. Behalt die M4A, wenn du die Originaldatei unangetastet brauchst.' },
        { q: 'Bleiben Tags und Cover erhalten?', a: 'Nein. Das MP3 wird ohne Metadaten geschrieben, wie beim WAV-Wandler. Titel, Interpret und Cover werden nicht übernommen.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Dein Browser dekodiert die M4A und kodiert das MP3 lokal. Das Audio bleibt auf deinem Gerät.' },
      ],
      dropHint: 'M4A- oder AAC-Datei ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'ogg-to-mp3': {
      name: 'OGG in MP3 umwandeln',
      shortName: 'OGG zu MP3',
      title: 'OGG in MP3 umwandeln — kostenlos im Browser',
      description: 'Wandle OGG-Dateien im Browser in MP3 um. Kostenlos, ohne Konto, nichts wird hochgeladen. Vorbis oder Opus in OGG, mit 128, 192 oder 320 kbps.',
      h1: 'OGG in MP3 umwandeln',
      subtitle: 'Mach aus OGG-Audio eine MP3 — im Browser, nichts wird hochgeladen.',
      intro: 'OGG ist ein Container, meist mit Vorbis, manchmal mit Opus. Leg die Datei ab, wähl eine Bitrate, und dein Browser dekodiert sie und speichert eine MP3. Die Audiodatei geht an keinen Server.',
      usesHeading: 'OGG-Dateien, die Leute konvertieren',
      uses: [
        'Öffne einen Game-Rip, einen Download oder eine Browseraufnahme, die als OGG kam.',
        'Speichere eine MP3 fürs Handy, ins Auto oder in einen Editor, der kein OGG nimmt.',
        'Sprache bei 128 kbps, Musik höher. Nochmal versuchen ist lokal und kostenlos.',
      ],
      howTo: [
        { name: 'OGG ablegen', text: 'Zieh eine .ogg- oder .oga-Datei auf die Seite oder klick zum Auswählen.' },
        { name: 'Bitrate wählen', text: '320 kbps für Musik, 192 kbps fürs tägliche Hören, 128 kbps für Sprache.' },
        { name: 'Umwandeln und laden', text: 'Klick auf In MP3 umwandeln. Dekodieren und Kodieren passieren auf deinem Gerät, dann lädt die MP3 herunter.' },
      ],
      faqs: [
        { q: 'Was ist eine OGG-Datei?', a: 'OGG ist ein Container. Musik darin nutzt meist Vorbis. Manche Sprachdateien nutzen Opus. Wenn dein Browser die Datei dekodieren kann, macht diese Seite eine MP3 daraus.' },
        { q: 'Welche Browser wandeln OGG um?', a: 'Chrome und Firefox dekodieren Vorbis und Opus in OGG. Safari dekodiert Opus und lehnt Vorbis oft ab. Wenn die Datei in einem normalen Tab nicht abspielt, kann diese Seite sie auch nicht umwandeln.' },
        { q: 'Verliert OGG zu MP3 an Qualität?', a: 'MP3 ist verlustbehaftet. Bei 320 kbps ist der Unterschied für fast alle klein. Behalt die OGG, wenn du die Originaldatei brauchst.' },
        { q: 'Bleiben Tags und Cover erhalten?', a: 'Nein. Die MP3 wird ohne Metadaten geschrieben. Titel, Künstler und Cover werden nicht kopiert.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Dein Browser dekodiert die OGG und kodiert die MP3 lokal. Die Audiodatei bleibt auf deinem Gerät.' },
      ],
      dropHint: 'OGG-Datei ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
    'opus-to-mp3': {
      name: 'Opus in MP3 umwandeln',
      shortName: 'Opus zu MP3',
      title: 'Opus in MP3 umwandeln — kostenlos im Browser',
      description: 'Wandle Opus-Audio im Browser in MP3 um. Kostenlos, ohne Konto, nichts wird hochgeladen. Für .opus und für Opus in OGG oder WebM.',
      h1: 'Opus in MP3 umwandeln',
      subtitle: 'Mach aus Opus-Audio eine MP3 — im Browser, nichts wird hochgeladen.',
      intro: 'Sprachnachrichten und manche Downloads sind Opus: eine .opus-Datei, oder Opus in OGG oder WebM. Leg die Datei ab, wähl eine Bitrate, und dein Browser dekodiert sie und speichert eine MP3. Die Audiodatei geht an keinen Server.',
      usesHeading: 'Opus-Dateien, die Leute konvertieren',
      uses: [
        'Mach aus einer Sprachnachricht oder einem Opus-Export eine MP3 für einen Player, der Opus nicht öffnet.',
        'Sprache ist bei 128 kbps in Ordnung. Du wechselst das Format, das Leute abspielen können, nicht die Länge.',
        'Hier konvertieren, dann schneiden, wenn die Nachricht an einem Ende lange Stille hat.',
      ],
      howTo: [
        { name: 'Opus ablegen', text: 'Zieh eine .opus-Datei auf die Seite oder klick zum Auswählen. OGG und WebM mit Opus funktionieren genauso.' },
        { name: 'Bitrate wählen', text: '128 kbps reichen für eine Sprachnachricht. Ist die Opus-Datei Musik, nimm 192 oder 320 kbps.' },
        { name: 'Umwandeln und laden', text: 'Klick auf In MP3 umwandeln. Dekodieren und Kodieren passieren auf deinem Gerät, dann lädt die MP3 herunter.' },
      ],
      faqs: [
        { q: 'Was ist das Opus-Format?', a: 'Opus ist ein Audio-Codec. WhatsApp- und Telegram-Sprachnachrichten sind oft .opus. Opus steckt auch in OGG und WebM. Diese Seite macht daraus eine MP3, die überall abspielt.' },
        { q: 'Welche Opus-Dateien funktionieren?', a: 'Dateien, die dein Browser schon abspielen kann: .opus, OGG mit Opus und WebM mit Opus, in Chrome, Firefox und aktuellem Safari. Bleibt ein normaler Tab stumm, kann diese Seite die Datei auch nicht dekodieren.' },
        { q: 'Verliert Opus zu MP3 an Qualität?', a: 'MP3 ist verlustbehaftet, Opus auch. Bei 320 kbps ist die MP3 so klar, wie MP3 wird. Sprachnachrichten sind bei 128 kbps in Ordnung. Behalt die Opus-Datei, wenn du das Original brauchst.' },
        { q: 'Bleiben Tags erhalten?', a: 'Nein. Die MP3 wird ohne Metadaten geschrieben. Titel und Künstler werden nicht kopiert.' },
        { q: 'Wird die Datei hochgeladen?', a: 'Nein. Dein Browser dekodiert das Opus-Audio und kodiert die MP3 lokal. Die Audiodatei bleibt auf deinem Gerät.' },
      ],
      dropHint: 'Opus-Datei ablegen oder klicken zum Auswählen',
      exportLabel: 'In MP3 umwandeln',
    },
  },
};
