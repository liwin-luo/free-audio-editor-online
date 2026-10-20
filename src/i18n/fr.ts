import type { Catalog } from './types';

export const fr: Catalog = {
  ui: {
    skip: 'Aller au contenu',
    logoHome: 'Free Audio Editor — accueil',
    tools: 'Outils',
    language: 'Langue',
    theme: 'Basculer le mode sombre',
    navMain: 'Principal',
    navAbout: 'À propos',
    footerBlurb:
      'Des outils audio gratuits qui fonctionnent entièrement dans votre navigateur. Vos fichiers ne sont jamais téléversés : un montage audio qui respecte votre vie privée dès la conception.',
    share: 'Partager',
    shareOn: 'Partager sur {name}',
    copyLink: 'Copier le lien',
    copied: 'Copié',
    about: 'À propos',
    privacy: 'Confidentialité',
    status: 'État',
    guides: 'Guides',
    rights: 'Aucun fichier ne quitte votre appareil.',
    clientSide: 'Traitement 100 % dans le navigateur',
    trustFree: 'Gratuit, sans inscription',
    trustClean: 'Sans filigrane',
    faqHeading: 'Questions fréquentes',
    toolFaq: 'Questions sur {name}',
    related: 'Outils associés',
    openTool: 'Ouvrir {name}',
    allTools: 'Tous les outils audio',
    browseToolkit: 'Parcourir tous les outils',
    home: 'Accueil',
    howTo: 'Comment utiliser {name}',
    ogAlt: 'Free Audio Editor — montage audio en ligne, rien n’est jamais téléversé',
    schemaOs: 'N’importe lequel (dans le navigateur)',
    schemaBrowser: 'Nécessite un navigateur moderne prenant en charge Web Audio',
    features: [
      'Rognez, coupez et fusionnez vos fichiers audio',
      'Volume, normalisation, vitesse et réverbe',
      'Lecture à l’envers et enregistrement vocal',
      'Convertissez la bande-son des vidéos en MP3 ou WAV',
      'Exportez en MP3, WAV et M4R pour iPhone',
    ],
    formats: {
      'mp3-320': 'MP3 · 320 kbps',
      'mp3-192': 'MP3 · 192 kbps',
      'mp3-128': 'MP3 · 128 kbps',
    'mp3-96': 'MP3 · 96 kbps',
    'mp3-64': 'MP3 · 64 kbps',
      wav: 'WAV · sans perte',
      m4r: 'M4R · sonnerie iPhone',
    },
    categories: {
      cut: 'Couper et rogner',
      merge: 'Fusionner et convertir',
      record: 'Enregistrer',
      effects: 'Effets et studio',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — jusqu’à environ une heure',
    dropLocal: 'Traitement en local — votre fichier ne quitte jamais cet onglet',
    formatsMore: ' et plus',
    etaModel: 'le premier passage télécharge le modèle, ensuite à peu près la durée de l’audio',
    limitTenMin: '10 minutes maximum',
    limitRingtone: '40 secondes maximum',
    chipText: 'Texte',
    zoomOut: 'Zoom arrière',
    zoomIn: 'Zoom avant',
    loadDifferent: 'Charger un autre fichier',
    startOver: 'Recommencer',
    waveform: 'Forme d’onde. Faites glisser pour sélectionner une plage.',
    play: 'Lire la sélection',
    pause: 'Pause',
    hintSelect: 'Glissez sur la forme d’onde pour sélectionner · Espace pour lire',
    hintConvert: 'Espace pour lire · rien n’est téléversé',
    hintSilence: 'Les trous plus longs que le minimum sont coupés à l’export. Les respirations courtes restent.',
    reverse: 'Lecture à l’envers',
    normalize: 'Normaliser les crêtes',
    speed: 'Vitesse',
    pitch: 'Hauteur tonale',
    bass: 'Basses',
    treble: 'Aigus',
    mid: 'Médiums',
    cutoff: 'Coupure',
    volume: 'Volume',
    reverb: 'Réverbe',
    compress: 'Compresseur',
    echoDelay: 'Délai',
    echoFeedback: 'Répétitions',
    panDepth: 'Profondeur',
    panRate: 'Fréquence',
    circle: 'Cercle',
    metroBpm: 'BPM',
    metroMeter: 'Chiffrage',
    metroBars: 'Mesures',
    metroPlay: 'Lecture',
    metroStop: 'Stop',
    keyTonic: 'Tonalité',
    keyMajor: 'majeur',
    keyMinor: 'mineur',
    keyUnread: 'Illisible',
    keyCaveat: 'Un rythme libre, la parole, le bruit de salle et un relatif majeur ou mineur peuvent s’échanger.',
    silenceThreshold: 'Seuil',
    silenceGap: 'Trou minimum',
    silenceRemove: 'Environ {time} de silence seront retirés',
    silenceKeepFile: 'Rien ne dépasse le seuil, l’export garde le fichier entier',
    loopTimes: 'Répétitions',
    loopCrossfade: 'Jointure',
    loopExport: 'L’export dure environ {time}',
    loopTooLong: 'Cette boucle dépasse 10 minutes. Baissez les répétitions ou raccourcissez la sélection.',
    lufsIntegrated: 'Intégrée',
    lufsPeak: 'Crête d’échantillon',
    lufsPodcast: 'Podcast',
    lufsStreaming: 'Streaming',
    lufsBroadcast: 'Diffusion',
    lufsLimited: 'La crête reste à −1 dBFS. Le résultat est {lufs} LUFS.',
    lufsWill: 'L’export arrivera à {lufs} LUFS.',
    lufsSilent: 'Ce fichier est silencieux, il n’y a pas de loudness à aligner.',
    adjust: 'Ajuster — fondus, volume, vitesse, inversion',
    fadeIn: 'Fondu d’entrée',
    fadeOut: 'Fondu de sortie',
    normalizeOverrides: 'Normaliser les crêtes (remplace le volume)',
    undo: 'Annuler le dernier changement',
    cutMode: 'Mode de coupe',
    keep: 'Garder la sélection',
    deleteSel: 'Supprimer la sélection',
    precise: 'Temps précis',
    startSec: 'Début (s)',
    endSec: 'Fin (s)',
    format: 'Format',
    export: 'Exporter',
    joinerMixed: 'MP3, WAV, M4A, OGG, FLAC — formats mélangés acceptés',
    joinerLocal: 'Traitement en local — vos fichiers ne quittent jamais cet onglet',
    trackSummary: '{n} pistes · {time}',
    crossfade: 'Fondu enchaîné',
    fadeInFirst: 'Fondu d’entrée (première piste)',
    fadeOutLast: 'Fondu de sortie (dernière piste)',
    mergeExport: 'Fusionner et exporter',
    record: 'Enregistrer',
    recordHint: 'Enregistrez via votre microphone',
    tooBig: 'Ce fichier dépasse 300 MB — essayez un fichier plus court ou compressé.',
    decoding: 'Décodage du fichier…',
    ready: 'Prêt. Glissez sur la forme d’onde pour sélectionner une plage.',
    hourWarning: 'Les fichiers de plus d’une heure peuvent épuiser la mémoire du navigateur sur certains appareils.',
    decodeFail:
      'Impossible de décoder ce fichier — il est peut-être corrompu, ou son codec n’est pas pris en charge par votre navigateur.',
    ringtoneCap: 'Sélection plafonnée à 40 secondes — la durée classique d’une sonnerie.',
    kept: 'Sélection conservée : {range}',
    markedDelete: 'Sélection marquée pour suppression : {range}',
    endTime: 'L’heure de fin doit venir au moins 0,05 s après l’heure de début.',
    nothingUndo: 'Plus rien à annuler.',
    reverted: 'Dernier changement annulé.',
    normalizeOn: 'Normalisation activée — la crête montera d’environ {db} dB (plafonnée à +12 dB).',
    rendering: 'Rendu…',
    renderingStatus: 'Rendu de votre montage en local…',
    encoding: 'Encodage {ext}…',
    exported: 'Fichier exporté : {file}.',
    saved: 'Enregistré sous {file} — rien n’a été téléversé.',
    exportFail:
      'Échec de l’export — l’encodeur n’a pas pu se charger (êtes-vous hors ligne ?). Essayez plutôt le format WAV.',
    merging: 'Fusion en cours…',
    mergingStatus: 'Fusion des pistes en local…',
    moveUp: 'Monter',
    moveDown: 'Descendre',
    remove: 'Retirer',
    recUnavailable: 'L’enregistrement n’est pas disponible dans ce navigateur. Essayez Chrome, Edge, Firefox ou Safari.',
    micBlocked: 'L’accès au microphone a été refusé. Autorisez-le dans les paramètres de votre navigateur, puis réessayez.',
    recording: 'Enregistrement… cliquez sur Arrêter quand vous avez terminé.',
    stop: 'Arrêter',
    recordAgain: 'Enregistrer à nouveau',
    recordingLoaded: 'L’enregistrement est chargé dans l’éditeur ci-dessous.',
    vizStyle: 'Style',
    vizStyleBars: 'Barres',
    vizStyleFilled: 'Rempli',
    vizStyleOutline: 'Contour',
    vizStyleDots: 'Points',
    vizStyleBottom: 'Barres basses',
    vizStyleBlocks: 'Barres larges',
    vizTemplate: 'Modèle',
    vizTemplateNone: 'Manuel',
    vizTplSoundcloud: 'SoundCloud',
    vizTplPodcast: 'Podcast',
    vizTplPoster: 'Affiche',
    vizTplSticker: 'Sticker',
    vizTplPrint: 'Impression',
    vizTplNeon: 'Néon',
    vizTplBlocks: 'Blocs',
    vizWaveColor: 'Couleur de l’onde',
    vizBgColor: 'Arrière-plan',
    vizTransparent: 'Fond transparent',
    vizSize: 'Taille',
    vizSizeVideo: 'Couverture vidéo',
    vizSizeSquare: 'Carré',
    vizSizeOg: 'Image sociale',
    vizSizeBanner: 'Bannière',
    vizSizeCustom: 'Personnalisé',
    vizWidth: 'Largeur',
    vizHeight: 'Hauteur',
    vizRange: 'Plage de temps',
    vizRangeStart: 'Début (s)',
    vizRangeEnd: 'Fin (s)',
    vizPreview: 'Aperçu de la forme d’onde',
    vizReady: 'Prêt. Réglez l’apparence, puis téléchargez le PNG.',
    vizRendering: 'Rendu…',
    vizExportFail: 'Impossible de créer le PNG. Essayez une taille plus petite.',
    specFft: 'Taille de FFT',
    specAxis: 'Axe des fréquences',
    specAxisLog: 'Logarithmique',
    specAxisLinear: 'Linéaire',
    specMaxHz: 'Fréquence haute (Hz)',
    specDbFloor: 'Silence (dB)',
    specDbCeil: 'Fort (dB)',
    specColors: 'Couleurs',
    specViridis: 'Viridis',
    specInferno: 'Inferno',
    specGray: 'Niveaux de gris',
    specPreview: 'Aperçu du spectrogramme',
    specProgress: 'Tracé du spectrogramme… {pct} %',
    paintText: 'Texte',
    paintPlaceholder: 'Une courte ligne, un nom par exemple',
    paintImage: 'PNG, JPG ou WebP. L’image est réduite pour tenir dans le spectre.',
    paintPreview: 'Image qui sera écrite dans l’audio',
    paintReady: 'Prêt. Téléchargez le WAV, puis ouvrez-le dans le générateur de spectrogramme.',
    paintWorking: 'Écriture de l’audio…',
    paintFail: 'Impossible de lire cette image. Essayez un PNG ou un JPG.',
    tgAlbum: 'Album',
    tgAlbumArtist: 'Artiste de l’album',
    tgArtist: 'Artiste',
    tgComment: 'Commentaire',
    tgComposer: 'Compositeur',
    tgCover: 'Pochette',
    tgCoverFail: 'La pochette doit être une image JPG ou PNG.',
    tgCoverHint: 'Un JPG ou PNG carré de 500 à 1400 px s’affiche le mieux dans la plupart des lecteurs.',
    tgDisc: 'Disque',
    tgGenre: 'Genre',
    tgNoTags: 'Ce fichier n’a pas encore de tags — remplissez ce que vous savez.',
    tgReadFail: 'Impossible de lire ce fichier — utilisez un MP3.',
    tgRemoveAll: 'Supprimer toutes les métadonnées (enregistrer un fichier propre)',
    tgRemoveCover: 'Supprimer la pochette',
    tgReplaceCover: 'Remplacer la pochette',
    tgReset: 'Réinitialiser',
    tgSaved: 'Enregistré — vérifiez vos téléchargements.',
    tgSaving: 'Écriture des tags…',
    tgSaveCover: 'Enregistrer la pochette',
    tgTitle: 'Titre',
    tgTrack: 'Piste',
    tgWriteFail: 'Un problème est survenu pendant l’enregistrement. Réessayez, ou utilisez un autre fichier MP3.',
    tgYear: 'Année',
    trLang: 'Langue',
    trLangAuto: 'Détection automatique',
    trModel: 'Modèle',
    trModelBase: 'Base — plus précis',
    trModelTiny: 'Tiny — téléchargement plus rapide',
    trPreparing: 'Préparation du modèle…',
    trDownloading: 'Téléchargement du modèle… {percent}%',
    trWorking: 'Transcription… {percent}%',
    trDone: 'Transcription terminée — {count} caractères',
    trFirstRun:
      'Le premier lancement télécharge le modèle une fois (Tiny ≈ 40 Mo, Base ≈ 80 Mo) et votre navigateur le met en cache — les fois suivantes fonctionnent hors ligne.',
    trResultPlaceholder: 'La transcription apparaît ici — modifiez-la avant de télécharger si vous voulez.',
    trCopy: 'Copier',
    trCopied: 'Copié dans le presse-papiers',
    trTxt: 'Télécharger TXT',
    trSrt: 'Télécharger SRT',
    trTooLong:
      'Ce fichier dépasse 10 minutes. Coupez-le d’abord — le découpeur audio est tout aussi privé — puis revenez transcrire ici.',
    trFail: 'La transcription a échoué. Essayez le modèle Tiny, un fichier plus net ou un navigateur récent.',
    mixMute: 'Muet',
    mixSolo: 'Solo',
    mixPan: 'Pan',
    mixOffset: 'Départ',
    mixTrimIn: 'Couper le début',
    mixTrimOut: 'Couper la fin',
    mixGain: 'Niveau',
    mixMaster: 'Master',
    mixPlay: 'Lire le mix',
    mixStop: 'Stop',
    mixAdd: 'Ajouter des pistes',
    mixLimit: 'Cette page prend 8 pistes. Exportez ce mix, ou ouvrez un éditeur de bureau pour une session plus grande.',
    mixPulled: 'Mix baissé de {db} dB pour que le pic ne sature pas.',
    mixExport: 'Exporter le mix',
    mixDecode: 'Impossible de décoder {name}.',
  },
  home: {
    title: 'Éditeur audio en ligne — montage audio gratuit sans upload',
    description:
      'Éditeur audio en ligne gratuit : coupez, fusionnez, inversez et convertissez dans votre navigateur. Sans inscription, sans téléversement.',
    appBlurb: 'Éditeur audio en ligne gratuit — coupez, rognez, fusionnez et montez l’audio dans votre navigateur.',
    badge: 'Traitement 100 % local · aucun téléversement',
    h1: 'Éditeur audio en ligne gratuit',
    lede: 'Rognez, coupez, fusionnez et montez l’audio directement dans votre navigateur. Sans inscription, sans filigrane, sans téléversement — vos fichiers ne quittent jamais votre appareil.',
    ctaTrim: 'Rogner un fichier audio',
    ctaMerge: 'Fusionner des chansons',
    highlightsLabel: 'Pourquoi ça fonctionne ainsi',
    priceSymbol: '$',
    priceAmount: '0',
    priceWord: 'Gratuit',
    highlights: [
      {
        title: 'Rien n’est téléversé',
        body: 'Le fichier est décodé dans cet onglet. Fermez-le et l’audio disparaît — aucun serveur ne le reçoit.',
      },
      {
        title: 'Gratuit, parce que votre appareil fait le travail',
        body: 'Il n’y a pas de ferme de serveurs à payer, donc pas de filigrane, pas d’inscription et pas de limite d’export.',
      },
      {
        title: 'Déposez un fichier et commencez',
        body: 'Pas d’installation, pas de file d’attente. Un long morceau ne quitte jamais la machine : le montage commence tout de suite.',
      },
    ],
    toolsHeading: 'Outils audio populaires',
    allToolsCta: 'Voir les {count} outils',
    toolsCount: '{count} outils',
    mostUsed: 'Les plus utilisés',
    comingTitle: 'Bientôt disponible',
    comingBody: 'Mixeur à fondu enchaîné, suppression des silences et plus encore — même approche axée sur la vie privée.',
    useCasesHeading: 'Que allez-vous monter aujourd’hui ?',
    useCases: [
      { title: 'Podcast', body: 'Enregistrez des épisodes, coupez les scories, assemblez les segments et repartez avec la transcription de vos notes d’émission.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: 'Musique', body: 'Ralentissez les riffs pour les apprendre, transposez vos covers, ajoutez du poids ou de l’éclat à vos maquettes.', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: 'Voix off', body: 'Livrez des prises propres : supprimez le rumble, égalisez les niveaux et relevez les prises faibles sans saturation.', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
      { title: 'Étude et travail', body: 'Écoutez les cours en accéléré, transformez les enregistrements en texte et lissez les jointures entre clips.', tools: ['audio-to-text', 'fade-audio', 'audio-joiner'] },
    ],
    whyHeading: 'Pourquoi le montage audio a sa place sur votre appareil',
    why: [
      {
        title: 'Privé dès la conception',
        body: 'Mémos vocaux, interviews, morceaux inédits — l’audio, c’est personnel. Ici, il est décodé et monté dans la mémoire de votre propre navigateur. Il n’existe aucun serveur qui puisse le voir, le stocker ou le fuiter.',
      },
      {
        title: 'Ni file d’attente, ni attente',
        body: 'Téléverser un morceau de 50 MB, attendre un serveur, puis le retélécharger — autant sauter l’étape. Le montage commence dès que vous déposez un fichier.',
      },
      {
        title: 'Gratuit, vraiment',
        body: 'Le traitement local coûte presque rien à faire tourner, alors les outils sont gratuits — sans filigrane, sans mur d’inscription, sans limite d’export.',
      },
    ],
    faqs: [
      {
        q: 'Free Audio Editor est-il vraiment gratuit ?',
        a: 'Oui — tous les outils du site sont gratuits, sans inscription, sans filigrane et sans plafond quotidien d’export. Comme tout le traitement se déroule dans votre propre navigateur, il n’y a aucune facture de serveur à couvrir.',
      },
      {
        q: 'Comment mon audio reste-t-il privé ?',
        a: 'Vos fichiers ne sont jamais téléversés. Décodage, montage et export s’exécutent en local avec la Web Audio API, dans l’onglet de votre navigateur. Vous pouvez vous déconnecter d’internet après le chargement de la page : chaque outil continue de fonctionner.',
      },
      {
        q: 'Faut-il installer quelque chose ?',
        a: 'Non. Les outils sont des applications web qui tournent dans n’importe quel navigateur moderne — Chrome, Edge, Firefox ou Safari — sur ordinateur comme sur mobile.',
      },
      {
        q: 'Quels formats audio sont pris en charge ?',
        a: 'Vous pouvez ouvrir de l’audio MP3, WAV, M4A/AAC, OGG, FLAC et WebM, puis enregistrer le résultat en MP3 (128–320 kbps) ou en WAV sans perte. Le créateur de sonneries exporte aussi du M4R dans Chrome, Edge et Safari.',
      },
    ],
  },
  hub: {
    categoryIntro: {
      cut: 'Raccourcissez une chanson, gardez le meilleur passage ou créez une sonnerie : sélectionnez la plage sur la forme d’onde et enregistrez.',
      merge: 'Assemblez des pistes en un seul fichier, extrayez le son de n’importe quelle vidéo et passez du MP3 au WAV, M4A, OGG et plus.',
      record: 'Enregistrez votre micro directement dans le navigateur : rognez la prise et sauvegardez en MP3, rien ne quitte votre appareil.',
      effects: 'Augmentez le volume, changez la vitesse ou la tonalité, ajoutez réverbe et fondus, égalisez graves et aigus, et visualisez le son en onde ou spectrogramme.',
    },
    tasksTitle: 'Que voulez-vous faire ?',
    tasks: [
    { task: 'Créer une sonnerie pour mon téléphone', tool: 'ringtone-maker' },
    { task: 'Extraire l’audio d’une vidéo', tool: 'extract-audio' },
    { task: 'Augmenter le volume d’un enregistrement trop faible', tool: 'increase-volume' },
    { task: 'Fusionner deux chansons en un fichier', tool: 'audio-joiner' },
    { task: 'Convertir un fichier WAV en MP3', tool: 'wav-to-mp3' },
    { task: 'Ralentir une chanson et ajouter de la réverbe', tool: 'slowed-reverb' },
    { task: 'Changer la tonalité sans changer la vitesse', tool: 'pitch-changer' },
    ],
    title: 'Outils audio gratuits — Couper, fusionner, convertir',
    description:
      'Coupez, fusionnez, convertissez ou enregistrez l’audio dans votre navigateur : tous les outils au même endroit. Sans téléversement, sans inscription — gratuit.',
    h1: 'Tous les outils audio',
    intro:
      'Tous les outils du site, regroupés par tâche. Choisissez le vôtre et lancez-vous — tout fonctionne en local dans votre navigateur. Sans inscription, aucun téléversement.',
  },
  about: {
    title: 'À propos de Free Audio Editor — Outils audio 100 % locaux',
    description:
      'Free Audio Editor : des outils audio respectueux de la vie privée, entièrement dans votre navigateur — aucun téléversement, ni inscription, ni filigrane.',
    h1: 'À propos',
    p1: 'Free Audio Editor existe parce que monter un mémo vocal ne devrait pas signifier le téléverser sur le serveur de quelqu’un d’autre. Chaque outil du site — {trimmer}, {cutter}, {joiner} et les autres — fonctionne de la même manière : votre navigateur lit le fichier, le modifie en mémoire et écrit le résultat directement sur votre disque.',
    linkTrimmer: 'le rogneur',
    linkCutter: 'le coupeur',
    linkJoiner: 'l’outil de fusion',
    p2: 'Cette architecture explique aussi la vitesse et la gratuité des outils. Pas de file de téléversement, pas de ferme de traitement, pas de facture de stockage — juste votre appareil, qui fait ce qu’il sait déjà très bien faire.',
    p3: 'Le site est une application web statique construite avec la Web Audio API. Son développement est actif : convertisseurs, enregistreur vocal et autres outils de montage sont en route.',
  },
  privacy: {
    title: 'Politique de confidentialité — Free Audio Editor',
    description:
      'Confidentialité sur freeaudioeditor.online : l’audio est traité localement dans votre navigateur, jamais téléversé. Aucun compte, aucun suivi.',
    h1: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 16 octobre 2026',
    sections: [
      {
        h: 'Vos fichiers audio',
        body: 'Chaque outil du site traite l’audio entièrement dans votre navigateur grâce à la Web Audio API. Vos fichiers {em} — il n’existe aucun point de téléversement. Quand vous fermez l’onglet, l’audio décodé disparaît de la mémoire.',
        em: 'ne sont jamais téléversés sur nos serveurs',
      },
      {
        h: 'Ce que nous conservons',
        body: 'Rien à votre sujet. Le site n’a ni comptes, ni adresse e-mail à fournir. Votre préférence de thème (clair ou sombre) est enregistrée dans le localStorage de votre navigateur et ne quitte jamais votre appareil.',
      },
      {
        h: 'Les tiers',
        body: 'L’encodeur MP3 (lamejs) est livré avec ce site et ne se charge que lorsque vous exportez un MP3. Il n’est pas téléchargé depuis un réseau tiers et ne reçoit pas votre audio. Les polices sont servies depuis le propre domaine de ce site.',
      },
      {
        h: 'Statistiques et publicité',
        body: 'Nous mesurons le trafic global avec Vercel Web Analytics, qui n’utilise pas de cookies et n’enregistre que des vues de pages agrégées — jamais votre identité, jamais votre audio. Nous n’affichons aucune publicité. Si l’un de ces points évolue, cette politique sera mise à jour en premier.',
      },
    ],
    contactHeading: 'Contact',
    contactBefore: 'Des questions sur cette politique ? Écrivez à {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transcrivez interviews et mémos vocaux en texte ou sous-titres SRT, sur votre appareil.',
      name: 'Audio en texte',
      shortName: 'Audio en texte',
      title: 'Transcrire un audio en texte — gratuit, en ligne',
      description:
        'Transcrivez l’audio en texte dans votre navigateur — MP3, WAV, M4A et vidéo, 90+ langues, export TXT ou SRT. Gratuit, sans inscription.',
      h1: 'Audio en texte en ligne gratuit — Transcrire un enregistrement',
      heroAlt: 'Obtenir le texte d’un mémo vocal ou d’un entretien',
      subtitle: 'Transformez un enregistrement en texte dans plus de 90 langues, avec horodatage — directement dans votre navigateur.',
      intro:
        'Déposez un enregistrement et récupérez les mots : mémos vocaux, interviews, cours, podcasts — dans une quatre-vingt-dixaine de langues, détectées automatiquement quand vous ne savez pas laquelle c’est. Un modèle d’IA Whisper tourne dans votre onglet, sur votre propre appareil : l’audio n’est jamais envoyé, et la transcription sort en texte modifiable ou en fichier SRT avec horodatage.',
      usesHeading: 'Les transcriptions dont on a vraiment besoin',
      uses: [
        'Transformer un cours, une réunion ou une interview en notes cherchables et citables.',
        'Sous-titrer une vidéo ou un épisode de podcast en exportant un SRT horodaté.',
        'Sortir les mots d’un mémo vocal sans envoyer l’enregistrement nulle part.',
      ],
      howTo: [
        {
          name: 'Déposez le fichier',
          text: 'Ajoutez un MP3, WAV, M4A, une vidéo ou un autre enregistrement. Le décodage se fait sur votre appareil, rien n’est envoyé.',
        },
        {
          name: 'Choisissez langue et modèle',
          text: 'La détection automatique suffit pour la plupart des fichiers. Tiny va plus vite sur les longs enregistrements ou les machines modestes ; Base offre la meilleure précision.',
        },
        {
          name: 'Transcrivez et téléchargez',
          text: 'Le premier lancement télécharge le modèle une fois et le met en cache. Modifiez la transcription si besoin, puis enregistrez en TXT ou SRT.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il envoyé ?',
          a: 'Non. Le fichier est décodé dans votre navigateur et transcrit par un modèle Whisper qui tourne localement via WebAssembly ou WebGPU. La seule requête réseau est le téléchargement unique du modèle depuis un CDN public — ensuite, la transcription fonctionne hors ligne. Votre audio ne parvient jamais à un serveur.',
        },
        {
          q: 'Quelle est la précision de la transcription ?',
          a: 'Elle repose sur les modèles Whisper d’OpenAI, qui approchent le niveau humain sur une parole claire. Le bruit de fond, les accents marqués, les voix qui se chevauchent ou la musique forte la font baisser. Sur un audio difficile, Base est nettement meilleure que Tiny — et dans tous les cas le résultat arrive dans une zone modifiable : vous pouvez corriger noms et ponctuation avant de télécharger.',
        },
        {
          q: 'Quelles sont les limites ?',
          a: 'Un fichier à la fois, 10 minutes maximum par passage — coupez d’abord les enregistrements longs (le découpeur audio est tout aussi privé). Les locuteurs ne sont pas identifiés : un dialogue sort en un seul texte sans noms. Et cette page traite des fichiers, pas le micro en direct.',
        },
        {
          q: 'Quelle différence avec l’enregistreur vocal ?',
          a: 'L’enregistreur capte votre micro pour en faire un fichier audio ; cette page lit un fichier existant et en écrit les mots. Ils vont bien ensemble : on enregistre là-bas, on transcrit ici. Tout tourne dans votre navigateur.',
        },
        {
          q: 'Quelles langues sont prises en charge ?',
          a: 'Whisper a été entraîné sur une quatre-vingt-dixaine de langues, de l’anglais, du chinois, de l’espagnol et de l’arabe au vietnamien, à l’ukrainien et au swahili. Laissez la langue sur Détection automatique et le modèle la devine dans l’audio, ou fixez une langue pour gagner un peu de précision.',
        },
        {
          q: 'Ça marche sur téléphone ?',
          a: 'Oui — Chrome, Edge, Firefox et Safari récents, sur ordinateur comme sur mobile. Les navigateurs avec WebGPU (Chrome, Edge) transcrivent bien plus vite ; ailleurs, cela tourne sur le CPU : choisissez Tiny pour les fichiers longs et comptez quelques minutes pour dix minutes d’audio. Le téléchargement unique du modèle est aussi plus léger avec Tiny.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou vidéo, ou cliquez pour parcourir',
      exportLabel: 'Transcrire',
    },
    'bass-booster': {
      cardLine: 'Ajoutez du poids et du punch avec jusqu’à +15 dB de graves sous 150 Hz.',
      name: 'Boost des basses',
      shortName: 'Basses',
      title: 'Augmenter les basses — boost de basses en ligne',
      description:
        'Jusqu’à +15 dB de basses avec un vrai shelf sous 150 Hz, dans votre navigateur. Export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Boost des basses en ligne gratuit — Renforcer les basses d’une chanson',
      heroAlt: 'Ajouter du grave à un MP3',
      subtitle: 'Un vrai shelf : jusqu’à +15 dB sous 150 Hz, écoutez puis exportez. Rien ne quitte votre appareil.',
      intro:
        'Des basses faibles, c’est la raison la plus courante pour laquelle un enregistrement sonne petit. Le boost des basses applique un vrai shelf — jusqu’à +15 dB sous 150 Hz, le geste du mastering — pas un artifice qui monte tout. Chargez un fichier, montez le curseur jusqu’à ce que les basses s’asseyent, exportez. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
      usesHeading: 'Quand booster les basses',
      uses: [
        'Donner du corps à des mémos vocaux et interviews filmés au téléphone qui sonnent fins.',
        'Faire ressortir batterie et basse d’un morceau tout en médiums.',
        'Ajouter du poids à un jingle de podcast sans toucher aux voix.',
      ],
      howTo: [
        {
          name: 'Chargez votre audio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. Le traitement reste sur votre appareil.',
        },
        {
          name: 'Montez le curseur des basses',
          text: 'Jusqu’à +15 dB sous 150 Hz. +3–6 dB répare un son fin ; au-delà, c’est un effet recherché.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Écoutez à volume normal — trop de basses masquent les voix. Exportez en MP3 ou WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Le boost est un filtre shelf Web Audio dans votre onglet — aucune étape de téléversement. Après le chargement de la page, vous pouvez passer hors ligne : l’outil continue de fonctionner.',
        },
        {
          q: 'Booster les basses dégrade-t-il la qualité ?',
          a: 'Aucun rééchantillonnage, aucun changement de tonalité. Si le boost pousse les basses au-delà du maximum, un limiteur contient les crêtes : l’export ne sature jamais brutalement — un réglage très chaud peut adoucir ces crêtes.',
        },
        {
          q: 'Peut-il créer du sub-bass absent ?',
          a: 'Non — un shelf amplifie seulement les basses fréquences que le fichier contient déjà. Les haut-parleurs de téléphone ne reproduisent pas le sub ; jugez le résultat au casque ou sur de vraies enceintes.',
        },
        {
          q: 'Différence avec le volume booster ?',
          a: 'Le volume booster monte tout uniformément ; le boost des basses ne soulève que le grave sous 150 Hz. Fichier entier trop faible ? Le booster. Son fin ? Les basses, ici.',
        },
        {
          q: 'Combien de basses ajouter ?',
          a: '+3–6 dB réparent un enregistrement fin. Au-delà de +9 dB, vous faites un effet stylistique — vérifiez que les voix restent intelligibles avant d’exporter.',
        },
        {
          q: 'Cela fonctionne-t-il sur mobile ?',
          a: 'Oui. L’éditeur est pensé pour le tactile — glissez, réglez, exportez. Fonctionne sur Chrome, Edge, Firefox et Safari à jour, ordinateur et mobile.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
    },
    'treble-booster': {
      cardLine: 'Ajoutez éclat et clarté en relevant les aigus jusqu’à +15 dB au-dessus de 3 kHz.',
      name: 'Boost des aigus',
      shortName: 'Aigus',
      title: 'Boost des aigus — Renforcer les aigus en ligne',
      description:
        'Jusqu’à +15 dB d’aigus au-dessus de 3 kHz, dans votre navigateur — pas un artifice de loudness. Export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Boost des aigus en ligne gratuit — Relever les aigus d’une chanson',
      heroAlt: 'Rendre un audio terne plus clair',
      subtitle: 'Un vrai shelf d’aigus : jusqu’à +15 dB au-dessus de 3 kHz, écoutez puis exportez. Rien ne quitte votre appareil.',
      intro:
        'Un enregistrement sourd et terne manque presque toujours d’une seule chose : de l’énergie au-dessus de 3 kHz. Le boost des aigus applique un vrai shelf d’aigus — jusqu’à +15 dB au-dessus de 3 kHz, le geste du mastering pour ouvrir un morceau — pas un artifice qui monte tout. Chargez un fichier, montez le curseur jusqu’à ce que le détail revienne, exportez. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
      usesHeading: 'Quand booster les aigus',
      uses: [
        'Ouvrir un enregistrement terne qui sonne comme enregistré sous une couverture.',
        'Rendre aux voix consonnes et souffle pour que la parole reste intelligible.',
        'Ajouter de l’éclat aux cymbales et aux instruments acoustiques d’un mix qui sonne plat.',
      ],
      howTo: [
        {
          name: 'Chargez votre audio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. Le traitement reste sur votre appareil.',
        },
        {
          name: 'Montez le curseur des aigus',
          text: 'Jusqu’à +15 dB au-dessus de 3 kHz. +3–6 dB débroussaillent la plupart des enregistrements ternes ; au-delà, pour une brillance assumée.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Surveillez la dureté des sifflantes (s, t) — exportez en MP3 ou WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Le boost est un filtre shelf d’aigus Web Audio dans votre onglet — aucune étape de téléversement. Après le chargement de la page, vous pouvez passer hors ligne{NB}: l’outil continue de fonctionner.',
        },
        {
          q: 'Booster les aigus dégrade-t-il la qualité ?',
          a: 'Aucun rééchantillonnage, aucun changement de tonalité. Un gros boost remonte aussi le souffle et les sifflantes déjà présents dans le fichier — si ça devient dur, redescendez le curseur. Un limiteur contient les crêtes{NB}: l’export ne sature jamais brutalement.',
        },
        {
          q: 'Peut-il restaurer un détail jamais enregistré ?',
          a: 'Non — un shelf amplifie seulement les hautes fréquences que le fichier contient déjà. L’audio compressé à bas débit perd ses aigus définitivement{NB}; aucun EQ ne les ramène.',
        },
        {
          q: 'Différence avec le boost des basses ?',
          a: 'Ce sont les deux bouts du spectre{NB}: le boost des basses soulève le grave sous 150 Hz, le boost des aigus soulève les aigus au-dessus de 3 kHz. Sourd et terne{NB}? Les aigus. Fin et petit{NB}? Les basses.',
        },
        {
          q: 'Combien d’aigus ajouter ?',
          a: '+3–6 dB ouvrent la plupart des enregistrements ternes. Au-delà de +9 dB, les sifflantes (s, ch, t) peuvent devenir perçantes — écoutez une fois au casque avant d’exporter.',
        },
        {
          q: 'Cela fonctionne-t-il sur mobile ?',
          a: 'Oui. L’éditeur est pensé pour le tactile — glissez, réglez, exportez. Fonctionne sur Chrome, Edge, Firefox et Safari à jour, ordinateur et mobile.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
    },
    'equalizer': {
      cardLine: 'Sculptez graves, médiums et aigus avec un EQ simple à trois boutons ±15 dB.',
      name: 'Égaliseur audio',
      shortName: 'Égaliseur',
      title: 'Égaliseur audio — Égaliseur 3 bandes en ligne',
      description:
        'Façonnez graves, médiums et aigus avec un vrai EQ 3 bandes (shelf–pic–shelf). ±15 dB par bande, export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Égaliseur audio en ligne gratuit — Régler les basses, les médiums et les aigus',
      heroAlt: 'Façonner le timbre d’une chanson ou d’une voix',
      subtitle: 'Shelves bas, médium et aigu avec ±15 dB par bande — l’égaliseur trois boutons honnête.',
      intro:
        'Trois boutons couvrent l’essentiel du travail d’un EQ : les graves sous 150 Hz, les médiums autour de 1 kHz où vivent les voix, et les aigus au-dessus de 3 kHz. Cet égaliseur utilise de vraies bandes de filtre — shelf grave, pic, shelf d’aigus — à ±15 dB chacune, pour apprivoiser le ronron, faire redescendre la boue ou ajouter de l’air. Chargez un fichier, façonnez le son, exportez. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
      usesHeading: 'Ce que font les trois bandes',
      uses: [
        'Couper la boue : −3 à −6 dB dans les médiums assainit les voix enregistrées en foule.',
        'Apprivoiser le ronron : descendez la bande basse sur un enregistrement fait près d’un mur.',
        'Ajouter de la présence : montez les aigus pour l’air, les graves pour le poids — les deux si le mix le demande.',
      ],
      howTo: [
        {
          name: 'Chargez votre audio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. Le traitement reste sur votre appareil.',
        },
        {
          name: 'Façonnez les trois bandes',
          text: 'Graves sous 150 Hz, médiums autour de 1 kHz, aigus au-dessus de 3 kHz — ±15 dB chacun. Une petite coupe vaut mieux qu’un gros boost.',
        },
        {
          name: 'Comparez et exportez',
          text: 'Remettez une bande à 0 dB pour comparer avec l’original, puis exportez en MP3 ou WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Les bandes sont des filtres Web Audio (shelf grave, pic, shelf d’aigus) dans votre onglet — aucune étape de téléversement. Après le chargement de la page, vous pouvez passer hors ligne : l’outil continue de fonctionner.',
        },
        {
          q: 'Mieux vaut booster ou couper ?',
          a: 'Couper. Les gros boosts poussent le signal vers le limiteur et peuvent adoucir les crêtes{NB}; une coupe de −4 dB dans la bande boueuse fait souvent plus qu’un boost de +6 dB n’importe où.',
        },
        {
          q: 'Différence avec les boosts de basses et d’aigus ?',
          a: 'Les boosts sont des shelves à usage unique, montée seule. L’égaliseur réunit les trois bandes, coupe et boost, au même endroit — prenez les boosts quand vous savez exactement quel bout il vous faut.',
        },
        {
          q: 'Quelles fréquences exactes pour les bandes ?',
          a: 'Shelf grave à 150 Hz, pic à 1 kHz (largeur unitaire), shelf d’aigus à 3 kHz — l’agencement classique à trois bandes. Les bandes à 0 dB sont contournées : une bande intacte ne colore jamais le son.',
        },
        {
          q: 'Pourquoi les voix deviennent étranges quand je coupe les médiums ?',
          a: 'L’intelligibilité de la parole vit autour de 1 kHz. Coupez la bande médium avec douceur (−3 à −6 dB) et écoutez une phrase que vous connaissez bien — des coupes profondes rendent les voix lointaines ou creuses.',
        },
        {
          q: 'Cela fonctionne-t-il sur mobile ?',
          a: 'Oui. L’éditeur est pensé pour le tactile — glissez, réglez, exportez. Fonctionne sur Chrome, Edge, Firefox et Safari à jour, ordinateur et mobile.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
    },
    'low-pass-filter': {
      cardLine: 'Gardez seulement la chaleur sous la coupure — parfait pour les textures lo-fi.',
      name: 'Filtre passe-bas',
      shortName: 'Passe-bas',
      title: 'Filtre passe-bas — Supprimer les bruits aigus en ligne',
      description:
        'Coupez souffle et bruits aigus avec un vrai passe-bas, coupure de 300 Hz à 20 kHz, dans votre navigateur. Export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Filtre passe-bas en ligne gratuit — Couper les hautes fréquences d’un audio',
      heroAlt: 'Adoucir les aigus agressifs d’un enregistrement',
      subtitle: 'Balayez la coupure de 20 kHz jusqu’à 300 Hz et ne gardez que les fréquences voulues.',
      intro:
        'Un filtre passe-bas garde le grave et atténue tout ce qui dépasse la coupure — la façon honnête de supprimer souffle, sifflantes aiguës, crissements et tranchant numérique. Contrairement à un réducteur de bruit, il ne devine jamais ce qui est du bruit : tout ce qui est au-dessus de votre coupure s’en va, tout simplement. Chargez un fichier, descendez la coupure jusqu’à ce que la gêne disparaisse, exportez. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
      usesHeading: 'Quand passer en passe-bas',
      uses: [
        'Retirer le souffle constant et le sifflement de climatisation d’une prise de voix.',
        'Adoucir des cymbales dures ou des sifflantes dans un mix brut.',
        'Reculer un sample derrière un autre en éteignant son haut du spectre.',
      ],
      howTo: [
        {
          name: 'Chargez votre audio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. Le traitement reste sur votre appareil.',
        },
        {
          name: 'Descendez la coupure',
          text: 'Balayez depuis 20 kHz jusqu’à ce que le bruit disparaisse — 8–12 kHz est un point de repos courant pour la voix.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Vérifiez que les voix restent naturelles, puis exportez en MP3 ou WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Le filtre est un biquad passe-bas Web Audio dans votre onglet — aucune étape de téléversement. Après le chargement de la page, vous pouvez passer hors ligne : l’outil continue de fonctionner.',
        },
        {
          q: 'Un filtre passe-bas, est-ce de la réduction de bruit ?',
          a: 'Non — et c’est sa force. Un réducteur de bruit sépare bruit et signal intelligemment{NB}; le passe-bas coupe aveuglément tout ce qui dépasse la coupure. Sur un souffle constant et large bande, il est plus fiable que n’importe quel algorithme.',
        },
        {
          q: 'Pourquoi les voix sonnent étouffées à basse coupure ?',
          a: 'La clarté des consonnes vit entre 3 et 8 kHz. Sous 5 kHz environ, la parole commence à sonner étouffée{NB}; sous 2 kHz, comme au téléphone. Pour la voix, essayez d’abord 8–12 kHz.',
        },
        {
          q: 'Différence avec le filtre passe-haut ?',
          a: 'Directions opposées{NB}: le passe-haut retire rumble, ronflette et boom sous votre coupure{NB}; le passe-bas retire souffle et dureté au-dessus. Combinés, ils ne laissent que la bande choisie.',
        },
        {
          q: 'Quelle coupure pour la musique ?',
          a: 'Pour un léger effet lo-fi, essayez 4–8 kHz. Pour nettoyer des cymbales tranchantes, 12–16 kHz suffisent souvent. Sous 3 kHz, la musique sonne nettement étouffée — fiez-vous à vos oreilles plus qu’aux chiffres.',
        },
        {
          q: 'Cela fonctionne-t-il sur mobile ?',
          a: 'Oui. L’éditeur est pensé pour le tactile — glissez, balayez la coupure, exportez. Fonctionne sur Chrome, Edge, Firefox et Safari à jour, ordinateur et mobile.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
    },
    'high-pass-filter': {
      cardLine: 'Supprimez rumble et ronflette sous la coupure pour des voix plus propres.',
      name: 'Filtre passe-haut',
      shortName: 'Passe-haut',
      title: 'Filtre passe-haut — Supprimer les ronflements',
      description:
        'Coupez rumble et ronflette avec un vrai filtre passe-haut, coupure de 20 Hz à 5 kHz, dans votre navigateur. Export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Filtre passe-haut en ligne gratuit — Retirer le grondement d’un enregistrement',
      heroAlt: 'Enlever le vent et le bourdonnement grave d’une voix',
      subtitle: 'Balayez la coupure de 20 Hz jusqu’à 5 kHz et retirez tout ce qui est en dessous.',
      intro:
        'Rumble, trafic, bruits de manipulation, coups sur le bureau — le grave indésirable est cuit dans la plupart des enregistrements réels. Un filtre passe-haut garde tout ce qui est au-dessus de votre coupure et atténue tout ce qui est en dessous : la réparation honnête qui ne devine jamais. Chargez un fichier, montez la coupure jusqu’à ce que le rumble disparaisse et que la voix reste pleine, exportez. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
      usesHeading: 'Quand passer en passe-haut',
      uses: [
        'Nettoyer rumble de rue et coups de bureau des prises podcast et voix.',
        'Retirer le vent et les bruits de manipulation qui ont survécu à une prise dehors.',
        'Resserrer un mix en débarrassant la boue de sub de chaque piste non basse.',
      ],
      howTo: [
        {
          name: 'Chargez votre audio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. Le traitement reste sur votre appareil.',
        },
        {
          name: 'Montez la coupure',
          text: 'Balayez depuis 20 Hz jusqu’à ce que le rumble disparaisse — 80–120 Hz convient à la plupart des voix.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Vérifiez que la voix ne sonne pas fine, puis exportez en MP3 ou WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Le filtre est un biquad passe-haut Web Audio dans votre onglet — aucune étape de téléversement. Après le chargement de la page, vous pouvez passer hors ligne : l’outil continue de fonctionner.',
        },
        {
          q: 'Retire-t-il la ronflette d’un câble défectueux ?',
          a: 'La ronflette secteur se situe à 50 ou 60 Hz, avec des harmoniques au-dessus. Un passe-haut à 80–120 Hz retire le fondamental et l’essentiel du bourdonnement — pour des harmoniques têtues, associez le filtre passe-bas pour resserrer la bande.',
        },
        {
          q: 'Jusqu’où monter la coupure avant que les voix s’amincissent ?',
          a: 'Les voix masculines gardent leur corps jusqu’à 100 Hz environ, les voix féminines jusqu’à 150–200 Hz. Au-delà de 300 Hz, la parole sonne comme au téléphone — ça peut être un style, mais écoutez d’abord.',
        },
        {
          q: 'Différence avec le filtre passe-bas ?',
          a: 'Directions opposées : le passe-haut retire le rumble grave sous votre coupure ; le passe-bas retire souffle et dureté au-dessus. Enchaînés, seule la bande choisie survit.',
        },
        {
          q: 'Le filtrage réduit-il la qualité du fichier ?',
          a: 'Aucun rééchantillonnage, aucun changement de tonalité — la coupure ne fait que décider quelles fréquences survivent. L’export réencode une fois, comme toujours{NB}: MP3 à 128–320 kbps ou WAV identique au bit près.',
        },
        {
          q: 'Cela fonctionne-t-il sur mobile ?',
          a: 'Oui. L’éditeur est pensé pour le tactile — glissez, balayez la coupure, exportez. Fonctionne sur Chrome, Edge, Firefox et Safari à jour, ordinateur et mobile.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
    },
    'audio-trimmer': {
      cardLine: 'Déplacez les poignées pour garder exactement le passage voulu — podcasts, mémos vocaux, toute piste.',
      name: 'Coupeur audio',
      shortName: 'Rogneur',
      title: 'Couper une musique en ligne — coupeur audio gratuit',
      description:
        'Rognez musiques, mémos vocaux et podcasts dans votre navigateur. Sélectionnez, écoutez, enregistrez en quelques secondes — gratuit, sans inscription.',
      h1: 'Couper l’audio — un podcast ou un mémo vocal',
      heroAlt: 'Couper un MP3 ou un podcast pour n’en garder que le passage voulu',
      subtitle: 'Rognez l’audio en ligne, gratuitement, dans votre navigateur. Rien n’est téléversé.',
      intro:
        'Coupez le passage exact dont vous avez besoin dans n’importe quelle chanson, mémo vocal, podcast ou enregistrement. Glissez sur la forme d’onde pour sélectionner, écoutez, enregistrez : le rognage se déroule entièrement sur votre appareil, si bien que même les longs enregistrements restent privés et démarrent instantanément.',
      usesHeading: 'Des coupes qui terminent le montage',
      uses: [
        'Extrayez la réponse d’un podcast en laissant les « euh » de chaque côté.',
        'Prélevez un refrain ou une boucle d’une chanson complète, sans éditeur de bureau.',
        'Raccourcissez un mémo vocal avant de l’envoyer, pour que le fichier n’ait que l’essentiel.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier',
          text: 'Glissez un fichier audio ou vidéo sur la zone de forme d’onde, ou cliquez pour parcourir. MP3, WAV, M4A, OGG, FLAC et bien plus sont pris en charge.',
        },
        {
          name: 'Sélectionnez ce que vous gardez',
          text: 'Glissez sur la forme d’onde pour surligner la section souhaitée. Ajustez les poignées pour affiner, ou saisissez des temps de début et de fin exacts.',
        },
        {
          name: 'Écoutez et enregistrez',
          text: 'Lancez la lecture pour n’entendre que votre sélection, puis cliquez sur Exporter pour télécharger le fichier rogné en MP3 ou WAV.',
        },
      ],
      faqs: [
        {
          q: 'Ce rogneur audio est-il vraiment gratuit ?',
          a: 'Oui. Chaque rognage et chaque export sont gratuits, sans inscription et sans filigrane. L’outil fonctionne entièrement dans votre navigateur : il n’y a donc aucun coût de serveur à vous refacturer.',
        },
        {
          q: 'Mon audio est-il envoyé sur un serveur ?',
          a: 'Non. Votre fichier est décodé et traité par votre propre navigateur avec la Web Audio API. Vous pouvez passer hors ligne après le chargement de la page, le rogneur continue de fonctionner : rien n’est jamais envoyé nulle part.',
        },
        {
          q: 'Quels formats puis-je rogner ?',
          a: 'Votre navigateur décode l’audio MP3, WAV, M4A/AAC, OGG, FLAC et WebM. Vous pouvez enregistrer le résultat en MP3 (128–320 kbps) ou en WAV sans perte.',
        },
        {
          q: 'Le rognage réduit-il la qualité de l’audio ?',
          a: 'Un enregistrement en WAV reste identique au bit près pour la partie conservée — aucune recompression. Un enregistrement en MP3 réencode une seule fois ; à 192 kbps ou plus, la différence est pratiquement inaudible pour la plupart des auditeurs.',
        },
        {
          q: 'Puis-je rogner de l’audio sur mon téléphone ?',
          a: 'Oui. La forme d’onde répond au tactile et le bouton d’export reste accessible en bas de l’écran. Ça marche dans Safari sur iPhone et dans Chrome ou Firefox sur Android.',
        },
        {
          q: 'Quelle longueur peut avoir mon fichier ?',
          a: 'Les enregistrements d’environ une heure passent sans problème sur un ordinateur moderne. La vraie limite est la mémoire de votre appareil, pas un plafond artificiel. Répéter la partie gardée, de 2 à 16 fois, c’est la boucle audio.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'mp3-cutter': {
      cardLine: 'Coupez un morceau sur le refrain, le drop ou n’importe quel extrait, sans réencodage.',
      name: 'Coupeur MP3',
      shortName: 'Coupeur MP3',
      title: 'Couper MP3 — couper une chanson en ligne gratuitement',
      description:
        'Coupez vos MP3 en ligne en quelques clics : gardez le meilleur passage ou supprimez une intro. Gratuit, sans inscription, sans téléversement.',
      h1: 'Couper un MP3 en ligne gratuitement',
      heroAlt: 'Couper un MP3 en ligne gratuitement',
      subtitle: 'Coupez chansons et fichiers MP3 en ligne : gardez le passage voulu, supprimez le reste.',
      intro:
        'Réduisez une chanson à son refrain, supprimez une longue intro ou isolez un moment fort — directement dans votre navigateur. Choisissez de garder la partie sélectionnée ou de la supprimer, écoutez le résultat et enregistrez un nouveau MP3 en quelques secondes.',
      usesHeading: 'Les coupes qu’on fait dans un MP3',
      uses: [
        'Retirez une intro, une publicité ou un long silence d’une chanson ou d’un épisode.',
        'Gardez un passage et écartez le reste, au lieu de le masquer par un fondu.',
        'Coupez d’abord le clip si l’étape suivante est une sonnerie.',
      ],
      howTo: [
        {
          name: 'Ajoutez votre MP3',
          text: 'Déposez votre MP3 sur la page ou cliquez pour choisir un fichier. La plupart des autres formats audio et vidéo fonctionnent aussi.',
        },
        {
          name: 'Marquez le passage à couper',
          text: 'Glissez sur la forme d’onde pour marquer une section. Basculez entre Garder la sélection et Supprimer la sélection selon la partie voulue.',
        },
        {
          name: 'Coupez et téléchargez',
          text: 'Écoutez l’aperçu, puis exportez la coupe en MP3 ou en WAV sans perte. Le téléchargement démarre automatiquement.',
        },
      ],
      faqs: [
        {
          q: 'Comment couper seulement le refrain d’une chanson ?',
          a: 'Sélectionnez le refrain sur la forme d’onde, vérifiez que le mode est réglé sur Garder la sélection, écoutez, puis exportez. Vous obtenez un nouveau fichier audio qui ne contient que ce passage.',
        },
        {
          q: 'Comment supprimer les 30 premières secondes d’un morceau ?',
          a: 'Sélectionnez les 30 premières secondes (les temps exacts de début et de fin s’affichent pendant que vous glissez, et vous pouvez les saisir précisément), réglez le mode sur Supprimer la sélection, puis exportez.',
        },
        {
          q: 'La qualité du MP3 est-elle conservée ?',
          a: 'Une coupe exportée en WAV reste identique au bit près. L’export en MP3 réencode une seule fois au débit choisi — à 320 kbps, la différence est imperceptible pour quasiment tout le monde.',
        },
        {
          q: 'Faut-il installer quelque chose ?',
          a: 'Non. Ce coupeur MP3 est une application web qui tourne dans l’onglet de votre navigateur. Rien à installer, aucun compte à créer.',
        },
        {
          q: 'Où vont mes fichiers ?',
          a: 'Nulle part. Le fichier est lu depuis votre disque par votre navigateur et coupé en mémoire. Aucun téléversement, aucune copie dans le cloud, aucune conservation.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier MP3 ou cliquez pour le parcourir',
    },
    'mp3-editor': {
      cardLine: 'Des retouches rapides en un seul onglet : couper, fondre, inverser, accélérer, normaliser.',
      name: 'Éditeur MP3',
      shortName: 'Éditeur MP3',
      title: 'Éditeur MP3 — couper, fondus, inverser et accélérer en ligne',
      description:
        'Modifiez l’audio en ligne : couper, rogner, fondus, volume, vitesse, lecture à l’envers. Gratuit et privé — tout se passe dans votre navigateur.',
      h1: 'Éditeur MP3 en ligne gratuit — Modifier la durée d’un MP3',
      heroAlt: 'Couper, fondre, inverser et changer la vitesse d’un MP3',
      subtitle: 'Coupez, appliquez des fondus, inversez et accélérez l’audio — tout dans un seul onglet.',
      intro:
        'Un éditeur audio compact pour les travaux rapides : coupez des passages, appliquez fondu d’entrée et fondu de sortie, montez ou baissez le volume, accélérez ou ralentissez les morceaux, lisez à l’envers. Chaque modification est appliquée sur votre appareil à l’export — le fichier d’origine reste intact sur votre disque.',
      usesHeading: 'Des retouches qui tiennent dans un onglet',
      uses: [
        'Rognez un fichier puis adoucissez les nouvelles extrémités au fondu, pour que la coupe ne fasse pas de clic.',
        'Accélérez ou inversez un passage sans exporter entre deux outils.',
        'Redressez un MP3 trop faible dans la même passe, avec le volume ou la normalisation.',
      ],
      howTo: [
        {
          name: 'Ouvrez votre fichier',
          text: 'Déposez un MP3, WAV, M4A ou autre fichier audio dans l’éditeur. Il est décodé instantanément sur votre appareil.',
        },
        {
          name: 'Modifiez',
          text: 'Sélectionnez une plage à garder ou supprimer, puis ouvrez Ajuster pour ajouter des fondus, changer le volume, faire varier la vitesse de 0,5× à 2× ou inverser le morceau.',
        },
        {
          name: 'Exportez le résultat',
          text: 'Enregistrez votre montage en MP3 jusqu’à 320 kbps, ou en WAV sans perte. Les modifications sont rendues hors ligne dans votre navigateur avant le téléchargement.',
        },
      ],
      faqs: [
        {
          q: 'Que sait faire cet éditeur MP3 ?',
          a: 'Il couvre les retouches rapides les plus courantes : rognage et coupe, fondu d’entrée et de sortie, réglage du volume, changement de vitesse de 0,5× à 2× et lecture à l’envers. Pour du multipiste ou de la grosse production, un DAW comme Audacity reste l’outil adapté — celui-ci vise les retouches rapides, privées et dans le navigateur.',
        },
        {
          q: 'Mes modifications détruisent-elles l’original ?',
          a: 'Non. Votre fichier d’origine reste exactement tel quel sur le disque. Toutes les modifications sont conservées comme réglages dans l’éditeur et ne sont rendues dans un nouveau fichier qu’au moment de l’export.',
        },
        {
          q: 'Quel effet la vitesse a-t-elle sur la hauteur tonale ?',
          a: 'La vitesse et la hauteur tonale avancent ensemble, comme un disque lu plus vite ou plus lentement : à 2× l’audio joue environ une octave plus haut, à 0,5× environ une octave plus bas. Procédez par petits paliers pour des changements subtils. Si vous devez changer le tempo en conservant la hauteur d’origine, exportez d’abord puis passez le fichier dans un outil de time-stretch dédié.',
        },
        {
          q: 'Puis-je annuler une modification ?',
          a: 'Oui. Appuyez sur Ctrl+Z (Cmd+Z sur Mac) pour revenir en arrière dans vos dernières modifications, ou cliquez sur Recommencer pour recharger l’état d’origine du fichier.',
        },
        {
          q: 'Est-ce sûr pour des enregistrements confidentiels ?',
          a: 'Oui. L’audio est décodé et rendu en local avec la Web Audio API — il n’est jamais transmis sur le réseau, ce qui convient aux interviews et à tout autre matériel confidentiel.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'ringtone-maker': {
      cardLine: 'Transformez les 30 secondes les plus accrocheuses d’une chanson en sonnerie iPhone ou Android.',
      name: 'Créateur de sonneries',
      shortName: 'Sonneries',
      title: 'Créer une sonnerie iPhone en ligne — M4R gratuit',
      description:
        'Transformez une chanson en sonnerie : les 40 meilleures secondes, un fondu, export M4R ou MP3. Gratuit, sans inscription, rien n’est téléversé.',
      h1: 'Créateur de sonneries en ligne gratuit — Faire une sonnerie iPhone à partir d’une chanson',
      heroAlt: 'Garder jusqu’à 40 secondes d’une chanson en M4R ou en MP3',
      subtitle: 'Choisissez le meilleur passage de n’importe quelle chanson et enregistrez-le comme sonnerie — en moins d’une minute.',
      intro:
        'Choisissez le riff, le drop ou l’intro de votre morceau préféré et transformez-le en sonnerie. L’outil maintient votre sélection dans la durée classique de 40 secondes, ajoute un fondu si vous le voulez et exporte directement vers votre téléphone : M4R pour iPhone, MP3 pour tout le reste.',
      usesHeading: 'Des sonneries que vous mettrez vraiment',
      uses: [
        'Prenez le riff d’une chanson et restez dans la limite des 40 secondes du téléphone.',
        'Appliquez un fondu à la fin pour que la sonnerie ne s’arrête pas en pleine phrase.',
        'Exportez en M4R pour iPhone, ou en MP3 si vous n’avez besoin que du clip.',
      ],
      howTo: [
        {
          name: 'Ajoutez une chanson',
          text: 'Déposez un MP3, M4A, WAV ou autre fichier audio sur la page. Il ne quitte jamais votre appareil.',
        },
        {
          name: 'Choisissez votre moment',
          text: 'Glissez sur la forme d’onde pour sélectionner jusqu’à 40 secondes — la durée idéale d’une sonnerie. La sélection est plafonnée automatiquement : rien à calculer.',
        },
        {
          name: 'Exportez et transférez',
          text: 'Ajoutez un fondu facultatif, puis exportez. Choisissez M4R pour iPhone (Chrome, Edge ou Safari) ou MP3 pour Android et tout autre téléphone.',
        },
      ],
      faqs: [
        {
          q: 'Quelle durée pour une sonnerie ?',
          a: 'La plupart des téléphones sonnent 20 à 40 secondes avant que la messagerie ne prenne le relais, et une sonnerie courte va droit au but. L’outil plafonne votre sélection à 40 secondes, la durée classique d’une sonnerie.',
        },
        {
          q: 'Comment l’installer sur iPhone ?',
          a: 'Choisissez M4R dans le menu de format avant d’exporter — Chrome, Edge et Safari 17+ l’encodent directement sur votre appareil, et le fichier téléchargé se synchronise avec votre iPhone via Finder (ou iTunes sur Windows). Sur les navigateurs sans encodage AAC, comme Firefox, exportez en MP3 puis convertissez avec GarageBand : importez le fichier, puis partagez-le comme sonnerie.',
        },
        {
          q: 'Comment la régler sur Android ?',
          a: 'Copiez le MP3 exporté sur votre téléphone, puis ouvrez Paramètres → Son → Sonnerie du téléphone et choisissez le fichier, ou utilisez l’application Fichiers pour la définir directement. Aucune conversion nécessaire.',
        },
        {
          q: 'La sonnerie va-t-elle mal boucler ?',
          a: 'Ajoutez un court fondu de sortie dans le panneau Ajuster : le retour au début sonne naturel au lieu de se couper en pleine note. Écrire ce clip 2 à 16 fois dans un fichier plus long, c’est la boucle audio. Cette page reste dans les 40 secondes.',
        },
        {
          q: 'Y a-t-il un filigrane ou une limite ?',
          a: 'Ni filigrane, ni inscription, ni plafond quotidien. La sonnerie est rendue sur votre propre appareil et téléchargée directement depuis le navigateur.',
        },
      ],
      dropHint: 'Déposez une chanson ou cliquez pour la parcourir',
    },
    'audio-joiner': {
      cardLine: 'Assemblez mémos vocaux, chansons ou épisodes de podcast en un seul fichier continu.',
      name: 'Fusion audio',
      shortName: 'Fusion audio',
      title: 'Fusion audio — fusionner des MP3 en ligne gratuitement',
      description:
        'Fusionnez chansons et fichiers audio en une piste, dans l’ordre voulu, dans votre navigateur. Fondus facultatifs : gratuit, sans téléversement.',
      h1: 'Fusion audio en ligne gratuite — Joindre plusieurs MP3 en un seul',
      heroAlt: 'Enchaîner des chansons et des mémos vocaux',
      subtitle: 'Fusionnez chansons et fichiers audio en une seule piste — dans l’ordre voulu, en quelques secondes.',
      intro:
        'Regroupez plusieurs chansons, épisodes de podcast ou enregistrements vocaux en un seul fichier. Ajoutez autant de pistes que vous voulez, réordonnez-les et, si vous le souhaitez, appliquez un fondu au début et à la fin. La fusion se déroule sur votre appareil : même les grandes bibliothèques s’assemblent instantanément et restent privées.',
      usesHeading: 'Des pistes qui méritent d’être fusionnées',
      uses: [
        'Placez un mémo vocal devant une chanson, dans l’ordre de votre choix.',
        'Regroupez des enregistrements par chapitres en un fichier, pour un lecteur sans playlists.',
        'Adoucissez les jonctions en fondu enchaîné pour que les clips qui se suivent ne claquent pas.',
      ],
      howTo: [
        {
          name: 'Ajoutez vos pistes',
          text: 'Déposez au moins deux fichiers audio sur la page, ou cliquez pour en sélectionner plusieurs d’un coup. Formats mélangés acceptés : ils sont harmonisés automatiquement.',
        },
        {
          name: 'Définissez l’ordre',
          text: 'Réordonnez les pistes avec les boutons fléchés, ou retirez celles dont vous ne voulez plus. La durée totale se met à jour au fil de l’eau.',
        },
        {
          name: 'Fusionnez et enregistrez',
          text: 'Ajoutez des fondus si vous voulez, cliquez sur Exporter et téléchargez le fichier fusionné en MP3 ou WAV.',
        },
      ],
      faqs: [
        {
          q: 'Peut-on fusionner des formats audio différents ?',
          a: 'Oui. Les fichiers sont d’abord décodés et alignés sur une même fréquence d’échantillonnage : vous pouvez fusionner un MP3, un WAV et un M4A en une seule passe. Le format de sortie vous appartient.',
        },
        {
          q: 'Combien de fichiers puis-je fusionner ?',
          a: 'Aucune limite fixe — des dizaines de pistes passent très bien. Le vrai plafond est la mémoire de votre appareil, puisque tout est traité en local.',
        },
        {
          q: 'Puis-je changer l’ordre des chansons ?',
          a: 'Oui. Utilisez les flèches haut et bas à côté de chaque piste pour réordonner la séquence avant la fusion. La durée d’aperçu se met à jour instantanément.',
        },
        {
          q: 'Les pistes s’enchaînent-elles en fondu enchaîné ?',
          a: 'Oui. Réglez le curseur de fondu enchaîné pour faire se chevaucher la fin de chaque piste avec le début de la suivante — la fusion applique un fondu doux entre pistes voisines. Laissez-le à zéro pour une coupe nette, sans blanc, entre les pistes.',
        },
        {
          q: 'La qualité du fichier fusionné est-elle bonne ?',
          a: 'La fusion en WAV est sans perte : l’audio n’est pas recomprimé. L’export MP3 réencode une seule fois, jusqu’à 320 kbps — un niveau transparent pour presque tous les auditeurs.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous ajoutez les fichiers, puis vous les montez ou les descendez avec les boutons. On les appuie au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Plusieurs fichiers longs prennent plus de mémoire, donc une longue pile est plus stable sur un ordinateur.',
        },
      ],
      dropHint: 'Déposez au moins deux fichiers audio, ou cliquez pour les parcourir',
    },
    'wav-to-mp3': {
      cardLine: 'Réduisez des enregistrements WAV lourds en MP3 partageables, au débit de votre choix.',
      name: 'Convertisseur WAV vers MP3',
      shortName: 'WAV vers MP3',
      title: 'Convertir WAV en MP3 — dans votre navigateur, gratuitement',
      description:
        'Convertissez WAV en MP3 dans votre navigateur : 128, 192 ou 320 kbps. Gratuit, sans inscription — conversion locale, jamais téléversée.',
      h1: 'Convertisseur WAV vers MP3 en ligne gratuit — Convertir un WAV en MP3',
      heroAlt: 'Convertir un fichier WAV en MP3 à 320 kbps',
      subtitle: 'Convertissez vos fichiers WAV en MP3 en quelques secondes — dans votre navigateur, sans téléversement.',
      intro:
        'Passez de lourds enregistrements WAV à des MP3 compacts sans rien installer ni envoyer votre audio à un serveur. Déposez le fichier, choisissez un débit — 320 kbps pour la musique, 128 kbps pour la voix — et la conversion se déroule sur votre propre appareil, en général en quelques secondes.',
      usesHeading: 'Des fichiers WAV qui méritent la conversion',
      uses: [
        'Réduisez une prise de studio ou de terrain jusqu’à ce qu’elle soit envoyable.',
        'Transformez un export sans perte en MP3 192 ou 320 kbps pour l’écoute de tous les jours.',
        'Convertissez d’abord, rognez ensuite. Un WAV est trop lourd pour être trimballé deux fois.',
      ],
      howTo: [
        {
          name: 'Déposez votre WAV',
          text: 'Glissez un fichier .wav sur la page ou cliquez pour parcourir. Les autres formats audio (M4A, FLAC, OGG) se convertissent de la même façon.',
        },
        {
          name: 'Choisissez un débit',
          text: '320 kbps est indiscernable de l’original pour presque tout le monde ; 192 kbps est un bon compromis ; 128 kbps garde les enregistrements de voix légers.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. L’encodeur tourne dans votre navigateur et le MP3 se télécharge directement sur votre appareil.',
        },
      ],
      faqs: [
        {
          q: 'La conversion WAV vers MP3 perd-elle de la qualité ?',
          a: 'Le MP3 est un format avec perte : une partie de l’information est abandonnée. Mais à 320 kbps, en test à l’aveugle, quasiment personne ne distingue le MP3 du WAV. Si vous voulez zéro perte, gardez le WAV ; ce convertisseur existe pour gagner de la place et se lire partout.',
        },
        {
          q: 'Quel débit choisir ?',
          a: '320 kbps pour la musique que vous conservez, 192 kbps pour l’écoute et le partage quotidiens, 128 kbps pour mémos vocaux, podcasts et enregistrements de cours — la parole demande bien moins que la musique.',
        },
        {
          q: 'De combien le MP3 est-il plus petit ?',
          a: 'Environ un dixième de la taille : un WAV de 50 MB devient environ 4–5 MB à 192 kbps et à peu près 11 MB à 320 kbps. Les chiffres exacts dépendent de la durée et de la fréquence d’échantillonnage.',
        },
        {
          q: 'Les tags et la pochette du WAV sont-ils conservés ?',
          a: 'Pas pour l’instant — le MP3 est écrit sans métadonnées, donc titre, artiste et pochette ne sont pas repris. Vous pouvez rajouter les tags ensuite avec n’importe quel éditeur de tags.',
        },
        {
          q: 'Le fichier WAV est-il téléversé quelque part ?',
          a: 'Non. Le fichier est décodé dans votre navigateur, encodé en MP3 par une bibliothèque livrée avec ce site, puis sauvegardé sur votre disque. L’audio lui-même ne quitte jamais votre appareil.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier WAV ou cliquez pour le parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'flac-to-mp3': {
      cardLine: 'Convertissez vos FLAC sans perte en MP3 pour les lecteurs et applis qui ignorent le FLAC.',
      name: 'Convertisseur FLAC vers MP3',
      shortName: 'FLAC vers MP3',
      title: 'Convertir FLAC en MP3 — en ligne et gratuitement',
      description:
        'Convertissez FLAC en MP3 dans votre navigateur : 128, 192 ou 320 kbps. Gratuit, sans inscription — conversion locale, jamais téléversée.',
      h1: 'Convertisseur FLAC vers MP3 en ligne gratuit — Convertir un FLAC en MP3',
      heroAlt: 'Convertir un fichier FLAC en MP3 à 320 kbps',
      subtitle: 'Convertissez vos fichiers FLAC en MP3 en quelques secondes — dans votre navigateur, sans téléversement.',
      intro:
        'Le FLAC sonne parfaitement et il occupe la moitié d’un disque dur pour le prouver. Transformez votre bibliothèque sans perte en MP3 compacts qui passent sur l’autoradio, les enceintes Bluetooth et le matériel plus ancien — déposez les fichiers, choisissez le débit, et la conversion tourne sur votre propre appareil. Un morceau FLAC de 25 Mo devient un MP3 de 12 Mo à 320 kbps en quelques secondes.',
      usesHeading: 'Des FLAC qui méritent la conversion',
      uses: [
        'Faire passer une bibliothèque sans perte sur l’autoradio et le vieux matériel.',
        'Alléger un album avant un long trajet sans Wi-Fi ou un dossier partagé.',
        'Convertir d’abord, puis couper les morceaux que vous réécoutez vraiment.',
      ],
      howTo: [
        {
          name: 'Déposez votre FLAC',
          text: 'Glissez un fichier .flac sur la page ou cliquez pour le parcourir. Les autres formats sans perte se convertissent de la même façon.',
        },
        {
          name: 'Choisissez le débit',
          text: '320 kbps reste transparent pour presque tout le monde ; 192 kbps est le bon équilibre du quotidien ; 128 kbps garde les livres audio et podcasts légers.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. L’encodeur tourne dans votre navigateur et le MP3 se télécharge directement sur votre appareil.',
        },
      ],
      faqs: [
        {
          q: 'Convertir du FLAC en MP3 fait-il perdre de la qualité ?',
          a: 'Le MP3 est destructif, une partie de l’information est abandonnée — mais à 320 kbps, pratiquement personne ne distingue le MP3 du FLAC à l’aveugle. Gardez le FLAC comme copie d’archive et traitez le MP3 comme la version de poche.',
        },
        {
          q: 'Quel débit choisir ?',
          a: '320 kbps pour la musique que vous gardez, 192 kbps pour l’écoute quotidienne et le partage, 128 kbps pour les livres audio, podcasts et enregistrements de cours — la parole a besoin de bien moins que la musique.',
        },
        {
          q: 'De combien le MP3 est-il plus léger ?',
          a: 'Un morceau typique de cinq minutes passe d’environ 25 Mo en FLAC à 12 Mo environ à 320 kbps, 7 Mo à 192 et 5 Mo à 128. Les chiffres exacts dépendent de la durée et de la fréquence d’échantillonnage.',
        },
        {
          q: 'Les tags et pochettes du FLAC sont-ils conservés ?',
          a: 'Pas pour l’instant — le MP3 est écrit sans métadonnées : titre, artiste et pochette ne voyagent pas avec le fichier. Vous pouvez les rajouter ensuite avec n’importe quel éditeur de tags.',
        },
        {
          q: 'Mon FLAC est-il téléversé quelque part ?',
          a: 'Non. Le fichier est décodé dans votre navigateur et encodé en MP3 par une bibliothèque livrée avec ce site. L’audio ne quitte jamais votre appareil.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier FLAC ou cliquez pour le parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'mp3-to-wav': {
      cardLine: 'Décompressez un MP3 en WAV pour monter, transcrire ou écouter finement.',
      name: 'Convertisseur MP3 vers WAV',
      shortName: 'MP3 vers WAV',
      title: 'Convertir MP3 en WAV — en ligne et gratuitement',
      description:
        'Convertissez MP3 en WAV sans perte dans votre navigateur — pour éditer, archiver et les applis qui exigent du PCM. Gratuit, sans inscription.',
      h1: 'Convertisseur MP3 vers WAV en ligne gratuit — Transformer un MP3 en fichier WAV',
      heroAlt: 'Décoder un MP3 en WAV non compressé',
      subtitle: 'Décodez le MP3 en audio PCM propre en quelques secondes — dans votre navigateur, sans téléversement.',
      intro:
        'Convertir du MP3 en WAV ne rend pas ce que la compression a enlevé — aucun outil ne le peut. Vous obtenez l’audio décodé en PCM 16 bits propre, sans nouvelle perte : la bonne entrée pour les éditeurs audio, les samplers et tout ce qui exige du WAV, et le point de départ le plus sûr si le fichier doit être retravaillé. Le décodage se fait sur votre appareil, en une seconde en général.',
      usesHeading: 'Les raisons de passer au WAV',
      uses: [
        'Donner un MP3 à un éditeur, une DAW ou une appli qui n’accepte que le WAV.',
        'Arrêter la perte de génération : montez en WAV et ne recompressez en MP3 qu’à la toute fin.',
        'Archiver une copie décodée à côté de l’original avant de nouvelles retouches.',
      ],
      howTo: [
        {
          name: 'Déposez votre MP3',
          text: 'Glissez un fichier .mp3 sur la page ou cliquez pour le parcourir. Les autres formats compressés se décodent de la même façon.',
        },
        {
          name: 'Laissez WAV sélectionné',
          text: 'Le format d’export est fixé sur WAV sans perte — PCM 16 bits à la fréquence d’échantillonnage d’origine du fichier.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en WAV. L’audio décodé est écrit localement et le téléchargement démarre aussitôt.',
        },
      ],
      faqs: [
        {
          q: 'Convertir du MP3 en WAV améliore-t-il la qualité ?',
          a: 'Non — et méfiez-vous de tout convertisseur qui le promet. Ce que l’encodeur a jeté n’existe plus. Le WAV contient exactement ce que le MP3 décode, et c’est justement pourquoi c’est le bon format pour retravailler : il n’ajoute pas une nouvelle génération destructive.',
        },
        {
          q: 'Alors pourquoi convertir en WAV ?',
          a: 'Pour éditer et archiver. Le WAV est le format qu’attendent les éditeurs audio, les samplers et les outils de gravure, et un master sans perte évite d’empiler les artefacts à chaque traitement. La méthode honnête : décoder en WAV, monter, exporter en MP3 une seule fois à la fin.',
        },
        {
          q: 'Tous les débits MP3 fonctionnent-ils ?',
          a: 'Tous — le décodage est exact pour n’importe quel MP3 valide, de 64 à 320 kbps. Le WAV contiendra simplement ce que le MP3 a, à sa fréquence d’échantillonnage d’origine.',
        },
        {
          q: 'Quelle sera la taille du WAV ?',
          a: 'Environ dix fois celle du MP3. Une chanson de trois minutes en 44,1 kHz stéréo fait dans les 30 Mo en PCM 16 bits — c’est la taille réelle de l’audio non compressé, pas une inefficacité du convertisseur.',
        },
        {
          q: 'Mon MP3 est-il téléversé quelque part ?',
          a: 'Non. Le fichier est décodé dans votre navigateur et écrit en WAV localement. Rien ne quitte votre appareil.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier MP3 ou cliquez pour le parcourir',
      exportLabel: 'Convertir en WAV',
    },
    'compress-audio': {
      cardLine: 'Réduisez vos gros fichiers audio à la taille ou au débit visé, sans nuire à l’écoute.',
      name: 'Compresseur audio',
      shortName: 'Compresseur',
      title: 'Compresser l’audio — réduire la taille MP3/WAV en ligne',
      description:
        'Allégez vos fichiers MP3, WAV et autres audios dans votre navigateur — choisissez un débit plus bas, écoutez, téléchargez. Gratuit, sans téléversement.',
      h1: 'Compresseur MP3 en ligne gratuit — Réduire la taille d’un MP3',
      heroAlt: 'Réencoder un gros WAV ou MP3 à un débit plus bas',
      subtitle: 'Baissez le débit, le fichier reste lisible — allégez l’audio jusqu’à 90 % dans votre navigateur.',
      intro:
        'Un fichier audio pèse par son débit, et la façon honnête de l’alléger est de le réencoder à un débit plus bas : un MP3 à 320 kbps passe à 128 kbps pour environ 40 % de sa taille, et un gros WAV devient un MP3 dix fois plus léger. Choisissez la cible, écoutez l’aperçu, exportez — l’encodage tourne sur votre appareil, même les longs enregistrements se terminent en quelques secondes.',
      usesHeading: 'Des fichiers à alléger',
      uses: [
        'Faire tenir un cours ou un mémo vocal sous la limite de taille d’un mail ou d’une messagerie.',
        'Transformer un export WAV en petits MP3 pour un lien de relecture rapide.',
        'Faire passer une bibliothèque 320 kbps à 128 kbps pour un téléphone en données mobiles.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier',
          text: 'Ajoutez un MP3, WAV, M4A ou autre fichier audio. Il est décodé sur votre appareil et jamais téléversé.',
        },
        {
          name: 'Choisissez la taille cible',
          text: 'Débit plus bas, fichier plus léger : 192 kbps pour la musique du quotidien, 128 kbps reste propre pour la plupart des oreilles, 64–96 kbps est idéal pour la parole.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Écoutez l’aperçu compressé puis enregistrez. Vérifiez que les voix et les cymbales restent propres au débit choisi.',
        },
      ],
      faqs: [
        {
          q: 'Comment fonctionne la compression audio ici ?',
          a: 'Le fichier est décodé puis réencodé en MP3 au débit choisi. La taille suit le débit : une minute de stéréo pèse environ 2,4 Mo à 320 kbps, 1 Mo à 128 et 0,5 Mo à 64.',
        },
        {
          q: 'Quel débit garde une bonne qualité ?',
          a: '192 ou 320 kbps pour la musique qui compte ; 128 kbps pour l’écoute décontractée — la plupart des gens ne distinguent pas le 320 à l’aveugle. La voix et les podcasts restent clairs jusqu’à 64–96 kbps.',
        },
        {
          q: 'La compression peut-elle dégrader la qualité ?',
          a: 'Oui, dans un cas précis : réencoder un MP3 déjà compressé à un débit bien plus bas empile une seconde génération destructive sur la première. Compresser depuis du WAV ou du FLAC est plus propre — l’original conservé, vous pouvez toujours réessayer un autre débit.',
        },
        {
          q: 'Jusqu’où peut-on compresser ?',
          a: '64 kbps est le plancher pratique : environ 0,5 Mo par minute. La parole reste parfaitement claire ; la musique commence à sonner mate et sifflante. En dessous, des codecs dédiés comme Opus font mieux que le MP3.',
        },
        {
          q: 'Mon fichier est-il téléversé quelque part ?',
          a: 'Non. Le décodage et l’encodage se déroulent dans l’onglet de votre navigateur — vous pouvez couper internet après le chargement de la page, la compression continue de fonctionner.',
        },
        {
          q: 'Cela égalise-t-il les passages forts et faibles ?',
          a: 'Non. Cette page ne fait que réencoder à un débit plus bas pour que le fichier prenne moins de place. Pour baisser les crêtes et relever les mots faibles, utilisez le compresseur de niveau. Le débit de cet export reste celui que vous choisissez.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Compresser',
    },
    'reverse-audio': {
      cardLine: 'Lisez une piste à l’envers pour créer des effets, vérifier un mix ou simplement jouer.',
      name: 'Inverser l’audio',
      shortName: 'Inverser l’audio',
      title: 'Audio à l’envers — écouter une chanson à l’envers, gratuit',
      description:
        'Écoutez une chanson à l’envers dans votre navigateur : un clic pour inverser, aperçu immédiat, export MP3 ou WAV — gratuit, rien n’est téléversé.',
      h1: 'Lecture à l’envers en ligne gratuite — Jouer une chanson à l’envers',
      heroAlt: 'Retourner un mémo vocal pour le lire depuis la fin',
      subtitle: 'Écoutez n’importe quelle chanson ou enregistrement à l’envers — un clic, dans votre navigateur.',
      intro:
        'Retournez n’importe quelle piste pour qu’elle se joue de la fin vers le début : traquez les messages cachés dans les chansons, construisez des cymbales inversées pour un mix, ou écoutez simplement votre voix à l’envers. Le fichier entier est inversé sur votre appareil et n’est écrit qu’au moment de l’export.',
      usesHeading: 'Pourquoi retourner un fichier',
      uses: [
        'Découvrez un mix ou une phrase cachée en l’écoutant à l’envers.',
        'Construisez un swell inversé à partir d’un coup de cymbale ou d’une voix.',
        'Inversez seulement la sélection et laissez le reste du fichier intact.',
      ],
      howTo: [
        {
          name: 'Ajoutez votre audio',
          text: 'Déposez un MP3, WAV, M4A ou autre fichier sur la page — il ne quitte jamais votre appareil.',
        },
        {
          name: 'Inversez-le',
          text: 'Cliquez sur Lecture à l’envers et lancez la lecture pour entendre le morceau de la fin vers le début. Cliquez à nouveau pour le remettre à l’endroit.',
        },
        {
          name: 'Enregistrez le résultat',
          text: 'Exportez l’audio inversé en MP3 ou en WAV sans perte. Le téléchargement démarre automatiquement.',
        },
      ],
      faqs: [
        {
          q: 'Pourquoi écouter une chanson à l’envers ?',
          a: 'Les musiciens utilisent l’audio inversé pour des effets : montées de cymbales inversées, solos de guitare à rebours, textures d’ambiance. C’est aussi la méthode classique pour vérifier qu’un morceau ne cache pas de messages inversés (backmasking) — et puis, avouons-le, entendre sa propre voix à l’envers, c’est amusant.',
        },
        {
          q: 'L’inversion change-t-elle la qualité ?',
          a: 'Non. L’export en WAV se contente de réordonner les échantillons : l’audio est identique au bit près à l’original, simplement à l’envers. L’export MP3 réencode une seule fois au débit choisi.',
        },
        {
          q: 'Puis-je inverser seulement une partie d’une chanson ?',
          a: 'Oui. Sélectionnez le passage voulu sur la forme d’onde, réglez le mode sur Garder la sélection, puis cliquez sur Lecture à l’envers — seul ce segment est exporté, à l’envers.',
        },
        {
          q: 'Ça marche sur mon téléphone ?',
          a: 'Oui. Le bouton d’inversion et la forme d’onde répondent au tactile, et l’export se télécharge directement sur iOS comme Android.',
        },
        {
          q: 'L’inversion est-elle vraiment gratuite et privée ?',
          a: 'Oui — sans inscription, sans filigrane, sans limite. L’inversion se produit dans votre navigateur avec la Web Audio API : le fichier n’est jamais téléversé nulle part.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'change-audio-speed': {
      cardLine: 'Accélérez un cours à 2× ou ralentissez un riff pour l’apprendre — la tonalité reste juste.',
      name: 'Changer la vitesse audio',
      shortName: 'Vitesse audio',
      title: 'Ralentir une chanson — accélérer ou ralentir un audio',
      description:
        'Accélérez un cours ou ralentissez une chanson pour la travailler, de 0,5× à 2×. Aperçu dans votre navigateur, export MP3 ou WAV. La hauteur tonale suit le tempo.',
      h1: 'Changer la vitesse audio en ligne gratuit — Accélérer ou ralentir l’audio',
      heroAlt: 'Ralentir une chanson pour s’exercer, ou accélérer un cours',
      subtitle: 'Accélérez ou ralentissez n’importe quel audio de 0,5× à 2× — dans votre navigateur.',
      intro:
        'Transformez un cours de 40 minutes en 20 minutes express, ralentissez un solo de guitare à mi-vitesse pour le travailler, ou faites tenir un morceau dans un espace vidéo plus court. Glissez le curseur de vitesse, entendez le changement aussitôt, exportez — l’audio est rééchantillonné sur votre appareil et jamais téléversé.',
      usesHeading: 'Des vitesses qui collent au travail',
      uses: [
        'Ralentissez une voix ou un solo à mi-vitesse quand chaque syllabe ou chaque note compte.',
        'Parcourez un podcast ou un cours à 1,25×–1,5× quand 1× est trop lent pour finir.',
        'La hauteur tonale monte et descend avec le tempo. Pour déplacer la hauteur en gardant la durée, utilisez le changeur de hauteur tonale.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier',
          text: 'Ajoutez un MP3, WAV, M4A ou autre fichier audio — il reste sur votre appareil du début à la fin.',
        },
        {
          name: 'Réglez la vitesse',
          text: 'Glissez le curseur de vitesse entre 0,5× et 2×. Servez-vous de la forme d’onde pour ne sélectionner qu’un passage si vous ne voulez modifier qu’une partie du fichier.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Lisez le résultat pour vérifier le rythme, puis enregistrez en MP3 ou WAV. Un fichier de 10 minutes à 2× s’exporte en environ une seconde.',
        },
      ],
      faqs: [
        {
          q: 'Changer la vitesse change-t-il la hauteur tonale ?',
          a: 'Oui — vitesse et hauteur tonale avancent ensemble, comme un disque lu plus vite ou plus lentement : 2× sonne environ une octave plus haut, 0,5× environ une octave plus bas. C’est l’effet classique ; conserver la hauteur tout en changeant le tempo demanderait un algorithme de time-stretch, que nous pourrions ajouter plus tard. Pour changer la hauteur sans changer la durée, utilisez le changeur de hauteur tonale.',
        },
        {
          q: 'Quelles vitesses puis-je choisir ?',
          a: 'Toutes celles entre 0,5× et 2×, par pas de 0,05. La mi-vitesse est idéale pour transcrire une parole rapide ou apprendre des solos ; 1,25×–1,5× est confortable pour parcourir cours et podcasts.',
        },
        {
          q: 'L’export est-il rapide ?',
          a: 'Votre navigateur rend le changement d’un seul bloc, hors lecture en temps réel : un morceau de 10 minutes prend une à deux secondes, quel que soit le facteur choisi.',
        },
        {
          q: 'Puis-je accélérer seulement une partie d’un morceau ?',
          a: 'Oui. Sélectionnez la section sur la forme d’onde, réglez le mode sur Garder la sélection, puis choisissez la vitesse — l’export ne contient que ce passage, plus rapide ou plus lent.',
        },
        {
          q: 'Y a-t-il une limite de durée ?',
          a: 'Aucune limite artificielle. Le plafond réel est la mémoire de votre appareil — environ une heure d’audio sur un ordinateur ordinaire.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'increase-volume': {
      cardLine: 'Relevez des mémos vocaux trop faibles jusqu’à 4×, avec limiteur anti-saturation.',
      name: 'Augmenter le volume MP3',
      shortName: 'Volume MP3',
      title: 'Augmenter le volume MP3 — audio plus fort, gratuitement',
      description:
        'Audio trop faible ? Montez jusqu’à 4× dans votre navigateur. Un limiteur intégré garde un son propre — gratuit, rien n’est téléversé.',
      h1: 'Augmenter le volume MP3 en ligne gratuit — Rendre un MP3 plus fort',
      heroAlt: 'Monter le volume d’un MP3 sans saturation',
      subtitle: 'Amplifiez les enregistrements trop faibles jusqu’à 4× — avec un limiteur, pour éviter toute saturation.',
      intro:
        'Réparez les enregistrements restés trop faibles : mémos vocaux du téléphone, cours enregistrés depuis le dernier rang, bandes-son de vidéos extraites à bas niveau. Poussez le volume jusqu’à 4× (12 dB) et un limiteur intégré retient les crêtes : le résultat gagne en puissance sans virer à la distorsion.',
      usesHeading: 'Des enregistrements qui ont besoin d’un coup de pouce',
      uses: [
        'Relevez un mémo vocal enregistré trop loin du micro.',
        'Renforcez un cours capté depuis le fond de la salle et laissez le limiteur retenir les crêtes.',
        'Rendez un MP3 faible assez puissant pour passer sous une vidéo, sans saturer tout le fichier.',
      ],
      howTo: [
        {
          name: 'Ajoutez votre audio',
          text: 'Déposez un MP3, WAV, M4A ou autre fichier trop faible sur la page — il n’est traité que sur votre appareil.',
        },
        {
          name: 'Augmentez le volume',
          text: 'Glissez le curseur de volume jusqu’à 400 %. Écoutez pendant que vous réglez ; le limiteur retient automatiquement les crêtes les plus fortes.',
        },
        {
          name: 'Exportez le fichier plus fort',
          text: 'Enregistrez en MP3 ou WAV. Si le résultat sonne encore forcé, redescendez de 10 à 20 % : un volume propre vaut mieux que le volume maximal.',
        },
      ],
      faqs: [
        {
          q: 'Augmenter le volume provoque-t-il de la distorsion ?',
          a: 'Un peu, si vous poussez trop loin — c’est la physique, pas le logiciel. Le limiteur intégré retient les crêtes qui dépassent le seuil, donc des augmentations modérées (150 à 250 %) sonnent généralement propres. Au-delà de 300 %, les passages faibles deviennent forts mais les crêtes se mettent à pomper. Fiez-vous à vos oreilles.',
        },
        {
          q: 'Jusqu’où puis-je monter ?',
          a: 'Jusqu’à 400 % de l’original, soit environ +12 dB. Cela couvre la plupart des enregistrements faibles ; un fichier de 3 minutes s’exporte en une à deux secondes, que vous montiez beaucoup ou peu.',
        },
        {
          q: 'Est-ce la même chose que normaliser ?',
          a: 'Non. Normaliser élève tout le fichier pour que sa crête la plus forte atteigne un niveau cible. Ici, augmenter le volume multiplie le niveau que vous choisissez — plus prévisible quand vous savez qu’un enregistrement est uniformément trop faible.',
        },
        {
          q: 'Puis-je amplifier seulement une partie d’un fichier ?',
          a: 'Oui. Sélectionnez la section faible sur la forme d’onde, réglez le mode sur Garder la sélection, puis exportez — vous n’obtenez que ce passage, au nouveau volume.',
        },
        {
          q: 'Ça marche avec des fichiers vidéo ?',
          a: 'Souvent, oui — les navigateurs savent généralement décoder la piste audio des MP4 déposés sur la page. Si votre navigateur refuse le fichier, extrayez d’abord l’audio et réessayez.',
        },
        { q: "En quoi est-ce différent du mesureur de loudness ?", a: "Cette page multiplie tout le fichier par la quantité que vous choisissez. Le mesureur de loudness lit les LUFS intégrés — le niveau du fichier, pas celui de la pièce — et peut aligner −16, −14 ou −23 sans pousser la crête d’échantillon au-delà de −1 dBFS. Aucune des deux pages n’égalise le fort et le faible." },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'mp4-to-mp3': {
      cardLine: 'Enregistrez la bande-son d’un clip, d’une capture d’écran ou d’une vidéo caméra en MP3.',
      name: 'Convertisseur MP4 vers MP3',
      shortName: 'MP4 vers MP3',
      title: 'Convertir MP4 en MP3 — extraire l’audio d’une vidéo',
      description:
        'Convertissez MP4 en MP3 dans votre navigateur. La bande-son est extraite en local, jamais téléversée. Gratuit, rapide, sans inscription.',
      h1: 'Convertisseur MP4 vers MP3 en ligne gratuit — Convertir une vidéo en MP3',
      heroAlt: 'Convertir la piste d’un MP4, d’un MOV ou d’un WebM en MP3',
      subtitle: 'Sortez la bande-son de n’importe quelle vidéo — dans votre navigateur, sans téléversement.',
      intro:
        'Transformez des vidéos MP4 en audio MP3 sans rien installer ni téléverser des gigaoctets vers un serveur. Votre navigateur lit le fichier depuis votre disque, décode la bande-son en local et l’enregistre en MP3 — une vidéo de 500 MB se convertit en quelques secondes puisque seule la piste audio est traitée.',
      usesHeading: 'Des vidéos qu’on convertit pour le son',
      uses: [
        'Gardez un cours, un concert ou une interview en audio, à écouter écran éteint.',
        'Évitez de téléverser une vidéo énorme. La bande-son est décodée sur cet appareil.',
        'Convertissez la piste entière, puis rognez-la si un seul passage vous intéresse.',
      ],
      howTo: [
        {
          name: 'Déposez votre vidéo',
          text: 'Glissez un MP4 sur la page ou cliquez pour parcourir. Les fichiers WebM et MOV avec pistes audio standards fonctionnent de la même façon.',
        },
        {
          name: 'Choisissez un débit',
          text: '320 kbps pour les clips musicaux, 192 kbps pour l’écoute quotidienne, 128 kbps pour interviews et cours.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. La piste audio est décodée dans votre navigateur et le MP3 se télécharge aussitôt.',
        },
      ],
      faqs: [
        {
          q: 'La vidéo est-elle téléversée quelque part ?',
          a: 'Non — et avec la vidéo, ça mérite d’être répété, parce que les fichiers sont lourds. Le navigateur lit le fichier depuis votre disque, ne décode que sa piste audio et écrit le MP3 en local. Les images de la vidéo ne sont jamais traitées ni transmises.',
        },
        {
          q: 'Quels formats vidéo sont pris en charge ?',
          a: 'Les fichiers MP4 avec audio AAC (l’écrasante majorité, y compris les enregistrements de téléphone et les téléchargements standards), plus le WebM avec Opus et la plupart des MOV. Les codecs exotiques comme AC3 ou DTS ne sont pas décodables par les navigateurs et seront refusés avec un message clair.',
        },
        {
          q: 'Quelle vitesse par rapport aux convertisseurs en ligne ?',
          a: 'Généralement plus rapide. Les convertisseurs qui téléversent le fichier doivent d’abord envoyer toute la vidéo à un serveur — un fichier de 500 MB peut prendre de longues minutes. Ici, seul l’audio est décodé en local : même les longues vidéos se convertissent en quelques secondes sur un ordinateur normal.',
        },
        {
          q: 'Puis-je convertir seulement une partie de la vidéo ?',
          a: 'Cette page est un convertisseur direct : elle traite toute la bande-son. Pour un extrait, convertissez d’abord l’audio complet, puis rognez-le avec le rogneur audio.',
        },
        {
          q: 'Une vidéo 4K ou 8K le ralentit-elle ?',
          a: 'Non. La résolution vidéo n’a aucune importance — la piste vidéo est entièrement ignorée. Un fichier 4K et un fichier 240p avec la même bande-son se convertissent à l’identique.',
        },
      ],
      dropHint: 'Déposez un MP4 ou un fichier vidéo, ou cliquez pour le parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'extract-audio': {
      cardLine: 'Extrayez un audio propre de n’importe quelle vidéo pour monter, transcrire ou sampler.',
      name: 'Extracteur audio',
      shortName: 'Extracteur audio',
      title: 'Extraire l’audio d’une vidéo — l’enregistrer en MP3 ou WAV',
      description:
        'Extrayez la piste audio d’une vidéo dans votre navigateur, en MP3 ou WAV sans perte. Gratuit, sans téléversement, même pour les gros fichiers.',
      h1: 'Extracteur audio en ligne gratuit — Extraire un MP3 d’une vidéo',
      heroAlt: 'Enregistrer la bande-son d’une vidéo en MP3 ou en WAV',
      subtitle: 'Enregistrez la bande-son de n’importe quelle vidéo en MP3 ou WAV — en local, en quelques secondes.',
      intro:
        'Séparez le son de l’image : sortez les interviews des visioconférences, gardez un concert filmé comme un album, ou réutilisez une bande-son dans votre propre montage. La piste audio est décodée sur votre appareil ; vous pouvez la conserver sans perte en WAV ou de façon compacte en MP3.',
      usesHeading: 'Des bandes-son qui méritent d’être extraites',
      uses: [
        'Récupérez l’audio d’une capture d’écran ou d’une vidéo de téléphone.',
        'Gardez le WAV si vous comptez remonter le son, le MP3 si vous avez terminé.',
        'Confiez un long fichier au rogneur quand une seule minute compte.',
      ],
      howTo: [
        {
          name: 'Déposez la vidéo',
          text: 'N’importe quel MP4, WebM ou MOV avec une bande-son standard fonctionne. Le fichier ne quitte jamais votre appareil.',
        },
        {
          name: 'Choisissez le format',
          text: 'MP3 à 192 kbps pour écouter et partager ; WAV pour une copie sans perte à éditer ou archiver.',
        },
        {
          name: 'Extrayez et enregistrez',
          text: 'Cliquez sur Extraire l’audio. La bande-son est décodée en local et se télécharge immédiatement.',
        },
      ],
      faqs: [
        {
          q: 'Quelle différence avec un convertisseur MP4 vers MP3 ?',
          a: 'Sous le capot, le même moteur d’extraction local. Cette page est pensée pour sortir l’audio d’une vidéo dans le format qu’il vous faut, y compris le WAV sans perte, tandis que la page du convertisseur est optimisée pour une sortie MP3.',
        },
        {
          q: 'Puis-je obtenir la qualité d’origine ?',
          a: 'Choisissez WAV : la bande-son décodée est écrite sans perte, donc l’audio correspond à ce que contient la vidéo. Le MP3 réencode une seule fois ; à 320 kbps, la différence est inaudible en pratique.',
        },
        {
          q: 'Quels formats vidéo fonctionnent ?',
          a: 'MP4 avec audio AAC, WebM avec Opus et la plupart des MOV — les codecs que les navigateurs décodent nativement. Les bandes-son en AC3, DTS ou autres codecs exotiques ne peuvent pas être décodées en local et sont refusées proprement.',
        },
        {
          q: 'Y a-t-il une limite de taille ?',
          a: 'Aucune limite artificielle. Seule la piste audio est traitée : même les très grandes vidéos se convertissent vite. La limite est la mémoire de votre appareil, pas la taille du fichier sur le disque.',
        },
        {
          q: 'Puis-je faire l’inverse et retirer le son d’une vidéo ?',
          a: 'C’est l’opération contraire — couper le son d’une vidéo garde l’image et supprime le son. Cet outil garde le son et supprime l’image.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier vidéo ou cliquez pour le parcourir',
      exportLabel: 'Extraire l’audio',
    },
    'voice-recorder': {
      cardLine: 'Enregistrez réunions, cours et idées directement dans le navigateur, sans installer d’appli.',
      name: 'Enregistreur vocal',
      shortName: 'Enregistreur vocal',
      title: 'Dictaphone en ligne — enregistrer sa voix en MP3',
      description:
        'Enregistrez votre micro dans le navigateur, rognez et sauvegardez en MP3 ou WAV. Gratuit, privé — rien n’est téléversé.',
      h1: 'Enregistreur vocal en ligne gratuit — Enregistrer le micro en MP3',
      heroAlt: 'Garder un mémo vocal en MP3 ou en WAV',
      subtitle: 'Enregistrez votre micro, rognez la prise, sauvegardez en MP3 — rien ne quitte votre appareil.',
      intro:
        'Un enregistreur avec un studio de rognage intégré : capturez mémos vocaux, interviews, prises de travail ou notes de réunion, puis coupez les blancs et exportez un fichier propre. L’enregistrement comme le montage se déroulent dans votre navigateur — l’audio n’est jamais envoyé nulle part, de quoi travailler sereinement même sur des conversations confidentielles.',
      usesHeading: 'Des prises qu’on a intérêt à enregistrer ici',
      uses: [
        'Enregistrez un mémo vocal, un exercice de langue ou une narration brute, sans installer d’application.',
        'Rognez le début et la fin avant l’export, pour que la prise ne contienne que les mots.',
        'Sauvegardez en MP3 pour l’envoyer, ou en WAV si vous comptez retravailler la prise.',
      ],
      howTo: [
        {
          name: 'Autorisez le micro',
          text: 'Cliquez sur Enregistrer et acceptez la demande d’autorisation du navigateur. L’enregistrement démarre aussitôt ; le chronomètre affiche la durée de la prise.',
        },
        {
          name: 'Arrêtez et écoutez',
          text: 'Cliquez sur Arrêter quand vous avez fini. L’enregistrement se charge dans l’éditeur ci-dessous, où vous pouvez le réécouter et rogner les extrémités.',
        },
        {
          name: 'Exportez la prise',
          text: 'Sauvegardez en MP3 ou WAV. Les enregistrements n’existent que dans cet onglet jusqu’à l’export : si vous fermez sans exporter, ils sont perdus.',
        },
      ],
      faqs: [
        {
          q: 'Où vont mes enregistrements ?',
          a: 'Nulle part. Le flux du micro est capturé par votre navigateur et conservé dans la mémoire de cet onglet. Rien n’est transmis, et l’enregistrement disparaît à la fermeture de l’onglet si vous ne l’avez pas exporté avant.',
        },
        {
          q: 'Sous quel format l’enregistrement est-il capturé ?',
          a: 'C’est le navigateur qui décide : Chrome et Firefox enregistrent en WebM/Opus, Safari en MP4/AAC. Peu importe : à l’export, tout est converti en MP3 ou WAV sur votre appareil.',
        },
        {
          q: 'Puis-je couper le silence du début et de la fin ?',
          a: 'Oui, c’est exactement le rôle de l’éditeur sous l’enregistreur. Glissez sur la partie à conserver, réglez le mode sur Garder la sélection et exportez — les blancs disparaissent.',
        },
        {
          q: 'Quels navigateurs savent enregistrer ?',
          a: 'Chrome, Edge, Firefox et Safari sur ordinateur, plus Chrome sur Android et Safari sur iOS. Si le bouton Enregistrer signale que l’enregistrement est indisponible, il manque l’API MediaRecorder au navigateur.',
        },
        {
          q: 'Combien de temps puis-je enregistrer ?',
          a: 'Tout ce que la mémoire de votre appareil permet — quelques minutes de parole occupent très peu de place, la compression Opus est efficace. Pour des enregistrements de plusieurs heures, exportez par sections.',
        },
      ],
      dropHint: 'Ou déposez un enregistrement existant pour le monter',
    },
    'volume-booster': {
      cardLine: 'Rendez forts et propres musique et bandes-son trop faibles, jusqu’à 4×.',
      name: 'Amplificateur de volume',
      shortName: 'Amplifier le volume',
      title: 'Amplifier le volume — vidéos et musique plus fortes, gratuit',
      description:
        'Musiques trop faibles et bandes-son jusqu’à 4× plus puissantes, dans votre navigateur. Un limiteur garde le son propre — gratuit, sans téléversement.',
      h1: 'Amplificateur de volume en ligne gratuit — Rendre un audio ou une vidéo plus forts',
      heroAlt: 'Relever la bande-son trop faible d’une vidéo',
      subtitle: 'Amplifiez morceaux faibles et bandes-son vidéo jusqu’à 4× — puissant, sans saturation.',
      intro:
        'Pour tout ce qui se joue trop bas : vidéos de téléphone discrètes, prises acoustiques douces, podcasts masterisés à voix de murmure. Chargez un fichier, poussez le volume jusqu’à 4× et laissez le limiteur intégré retenir les crêtes pour que les passages forts restent propres. Ça marche aussi bien sur l’audio que sur la vidéo — seule la bande-son est traitée.',
      usesHeading: 'Des fichiers faibles pour lesquels cette page existe',
      uses: [
        'Relevez une bande-son vidéo sortie plus faible que l’image.',
        'Amplifiez une musique exportée ou rippée à un niveau trop bas.',
        'Restez entre 150 % et 250 % pour gagner en puissance sans que le limiteur ne pompe.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier',
          text: 'Musique, mémo vocal ou vidéo trop faible (MP4, WebM, MOV) — s’il s’agit d’une vidéo, la bande-son est extraite en local.',
        },
        {
          name: 'Choisissez l’amplification',
          text: 'Glissez le curseur de volume entre 150 % et 250 % pour la plupart des enregistrements. Écoutez pendant le réglage ; le limiteur s’active automatiquement au-delà de 100 %.',
        },
        {
          name: 'Exportez le fichier plus fort',
          text: 'Enregistrez en MP3 ou WAV. Si les crêtes sonnent écrasées, revenez de 10 à 20 % en arrière et réexportez.',
        },
      ],
      faqs: [
        {
          q: 'Jusqu’à quel point ça peut devenir plus fort ?',
          a: 'Jusqu’à 400 % de l’original (+12 dB). Amplifier ne peut pas créer d’énergie qui n’a jamais été enregistrée : les sources très faibles peuvent aussi gagner à être exportées en WAV puis normalisées dans un éditeur dédié — mais pour la plupart des fichiers faibles, une amplification de 2 à 3× suffit.',
        },
        {
          q: 'Que fait exactement le limiteur ?',
          a: 'Au-delà de 100 % de volume, un compresseur de dynamique surveille la sortie et retient les crêtes momentanées avant qu’elles ne saturent. Le résultat est plus fort dans l’ensemble, sans le crissement d’un clipping numérique dur. Un étage de soft-clip attrape ce qui passerait encore.',
        },
        {
          q: 'Puis-je amplifier le son d’une vidéo ?',
          a: 'Oui. Déposez un MP4 ou un WebM : la bande-son est décodée en local, amplifiée, puis exportée en MP3 ou WAV. La piste vidéo est ignorée — utilisez l’extracteur audio si vous ne voulez que le son.',
        },
        {
          q: 'Amplifier sur mon téléphone, ça marche ?',
          a: 'Oui. L’amplificateur tourne dans Safari et Chrome mobiles ; une chanson de 3 minutes s’exporte en une à deux secondes sur un téléphone récent.',
        },
        {
          q: 'Pourquoi ne pas simplement monter le son des enceintes ?',
          a: 'Le volume des enceintes ne vous aide que sur votre appareil. Un fichier déjà amplifié sonne plus fort partout — sur le téléphone des autres, dans des écouteurs bon marché, sur les petites enceintes d’un ordinateur portable.',
        },
        {
          q: 'En quoi est-ce différent du compresseur de niveau ?',
          a: 'Cette page multiplie tout le fichier : l’écart entre fort et faible reste le même. Le compresseur de niveau réduit cet écart, puis remet la crête en place. Utilisez cette page quand tout est trop faible. Utilisez le compresseur quand certains passages crient et d’autres disparaissent.',
        },
        { q: "En quoi est-ce différent du mesureur de loudness ?", a: "Tirer ce curseur multiplie chaque échantillon. Le mesureur de loudness mesure les LUFS intégrés et propose podcast −16, streaming −14 et diffusion −23. Si la crête d’échantillon dépassait −1 dBFS, le gain s’arrête. Ce n’est pas un sonomètre de pièce." },
      ],
      dropHint: 'Déposez un fichier audio ou vidéo, ou cliquez pour le parcourir',
    },
    'normalize-audio': {
      cardLine: 'Ramenez tout un lot d’enregistrements à un niveau constant et sain.',
      name: 'Normaliser l’audio',
      shortName: 'Normaliser',
      title: 'Normaliser l’audio — égaliser le niveau, gratuitement',
      description:
        'Normalisez l’audio à un niveau crête homogène dans votre navigateur : MP3, WAV, M4A et plus. Un clic, gratuit, rien n’est téléversé.',
      h1: 'Normaliseur audio en ligne gratuit — Normaliser le volume d’un MP3',
      heroAlt: 'Remonter les fichiers faibles au même niveau',
      subtitle: 'Un clic pour ramener les fichiers faibles à un niveau homogène et sain — analyse sur votre appareil.',
      intro:
        'Normaliser analyse votre fichier pour trouver sa crête la plus forte, puis élève tout le fichier exactement de ce qu’il faut pour amener cette crête juste sous la saturation. Résultat : un fichier qui exploite toute la plage de volume dont il dispose, sans calcul à l’œil. C’est la bonne réparation quand un enregistrement est uniformément trop faible — mémos vocaux, prises de terrain, exports d’autres applications sortis à −18 dB.',
      usesHeading: 'Quand un seul niveau doit convenir',
      uses: [
        'Ramenez un fichier faible à niveau pour que sa crête la plus forte atteigne un niveau normal.',
        'Homogénéisez des clips destinés à être fusionnés, pour qu’un chapitre ne sonne pas deux fois moins fort que le suivant.',
        'Préférez ceci à une amplification à l’aveugle quand vous ne savez pas jusqu’où pousser.',
      ],
      howTo: [
        {
          name: 'Déposez votre audio',
          text: 'N’importe quel MP3, WAV, M4A ou autre fichier audio. Il est décodé et analysé en local — rien ne quitte votre appareil.',
        },
        {
          name: 'Cliquez sur Normaliser',
          text: 'Le fichier est analysé pour trouver sa crête, puis élevé pour que cette crête se place juste sous le maximum. Lancez la lecture pour entendre la différence.',
        },
        {
          name: 'Exportez',
          text: 'Enregistrez en MP3 ou WAV. Le WAV évite une passe de compression avec perte supplémentaire si vous comptez continuer à monter le fichier.',
        },
      ],
      faqs: [
        {
          q: 'Que fait exactement la normalisation ?',
          a: 'Elle applique un gain fixe unique à tout le fichier pour que l’échantillon le plus fort se retrouve juste sous le plafond numérique (environ −0,2 dB ici). Si la crête d’un fichier est à 50 % du volume, normaliser double à peu près chaque échantillon — parties faibles et parties fortes pareil.',
        },
        {
          q: 'Normaliser, est-ce la même chose qu’augmenter le volume ?',
          a: 'Les deux se recoupent, mais normaliser se calcule au lieu de se deviner. L’amplification applique le multiplicateur que vous placez sur le curseur ; la normalisation trouve automatiquement le plus grand multiplicateur sûr. Si vous savez qu’un fichier est uniformément faible, l’amplification convient. Si vous voulez juste qu’il sonne aussi fort que proprement possible, normalisez.',
        },
        {
          q: 'Ça rend les passages faibles et forts aussi forts l’un que l’autre ?',
          a: 'Non — et méfiez-vous de tout outil qui promet ça en un clic. Élever séparément les passages faibles, c’est de la compression de plage dynamique, un procédé différent et plus destructeur. Normaliser décale tout l’enregistrement de la même quantité et laisse la dynamique intacte.',
        },
        {
          q: 'Utilise-t-il des cibles de loudness LUFS comme les plateformes de streaming ?',
          a: 'Non. Cette page déplace la crête, pas la loudness intégrée. Le mesureur de loudness mesure des LUFS pondérés K et peut poser un fichier sur −16, −14 ou −23. Ce sont des cibles de livraison courantes, pas une limite légale, ni une mesure de la pièce.',
        },
        {
          q: 'La normalisation réduit-elle la qualité ?',
          a: 'Le changement de niveau en lui-même est mathématiquement propre et inaudible. La seule vraie question qualité concerne le format d’export : le WAV conserve le changement de gain au bit près, le MP3 réencode une seule fois. Exportez en WAV si le fichier doit être remonté ensuite.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'slowed-reverb': {
      cardLine: 'Offrez à n’importe quel morceau le son nocturne ralenti + réverbe, en un clic.',
      name: 'Slowed + reverb',
      shortName: 'Slowed + reverb',
      title: 'Slowed + reverb — créez un slowed reverb en ligne, gratuit',
      description:
        'Créez une édition slowed + reverb dans votre navigateur : ralentissez, ajoutez de la réverbe, exportez en MP3. Gratuit, rien n’est téléversé.',
      h1: 'Créateur slowed reverb en ligne gratuit — Ralentir une chanson et ajouter de la réverbe',
      heroAlt: 'Descendre un morceau vers 85 % et ajouter une queue d’écho douce',
      subtitle: 'Le son de fin de nuit : ralentissez un morceau à ~85 %, ajoutez de l’espace, exportez — sans application, sans téléversement.',
      intro:
        'Le traitement slowed + reverb ramène une piste à environ 80–90 % de sa vitesse, si bien que la hauteur tonale s’enfonce avec elle, puis ajoute une traîne d’écho douce qui donne l’impression que tout joue deux pièces plus loin. Chargez une chanson, placez la vitesse vers 85 %, montez la réverbe jusqu’à ce que ça sonne juste, exportez — tout le montage se déroule sur votre appareil, donc même des morceaux complets passent en quelques secondes. Poussez plutôt la vitesse au-delà de 100 % et vous obtenez du nightcore.',
      usesHeading: 'Le son slowed et reverb',
      uses: [
        'Ramenez une piste à environ 85 % et ajoutez de l’espace. C’est le mix nocturne habituel.',
        'Partez d’une chanson sèche. L’effet, c’est le ralentissement et la réverbe ensemble.',
        'Rognez le passage voulu avant l’export, pour que la nappe ne devienne pas l’album entier.',
      ],
      howTo: [
        {
          name: 'Déposez votre chanson',
          text: 'N’importe quel MP3, WAV, M4A ou autre fichier audio — une piste d’album complète passe très bien, le traitement reste local.',
        },
        {
          name: 'Ralentissez et ajoutez de l’espace',
          text: 'Placez la vitesse vers 85 % (le point classique) et montez la réverbe à 20–30 %. Écoutez et faites confiance à vos oreilles.',
        },
        {
          name: 'Exportez le montage',
          text: 'Enregistrez en MP3 320 kbps pour publier, ou en WAV si vous comptez retravailler le morceau dans une autre application.',
        },
      ],
      faqs: [
        {
          q: 'Quelle vitesse pour un slowed + reverb ?',
          a: 'La plupart des montages se situent entre 80 % et 90 %, avec 85 % comme point de repère habituel — assez lent pour que la hauteur tonale s’enfonce nettement, pas assez pour que le rythme se défasse. Les chansons aux hi-hats très actifs supportent mieux le ralentissement que les morceaux denses et rapides.',
        },
        {
          q: 'Comment faire une version nightcore ?',
          a: 'Poussez le curseur de vitesse au-delà de 100 % — en général 120 à 130 %. Monter la vitesse monte la hauteur tonale avec, et c’est exactement le son nightcore. Laissez la réverbe proche de zéro pour un nightcore classique.',
        },
        {
          q: 'Ralentir change-t-il la hauteur tonale ?',
          a: 'Oui, volontairement — comme un vinyle lu à la mauvaise vitesse. Les voix s’assombrissent et la tonalité descend dans la même proportion. Cette chute de hauteur est la signature du style ; un slowed sans changement de hauteur exigerait un éditeur de time-stretch, un outil différent et plus lourd. Un cercle lent qui garde la vitesse et la hauteur est la page audio 3D.',
        },
        {
          q: 'Quelle quantité de réverbe ajouter ?',
          a: 'Commencez vers 20–30 % et écoutez. La réverbe est une traîne de décroissance synthétisée — passé environ 50 %, le morceau se met à sonner comme une cathédrale et les voix perdent leurs mots.',
        },
        {
          q: 'Puis-je utiliser des chansons slowed dans mes vidéos ?',
          a: 'Ralentir un morceau ne change pas son copyright. Pour publier sur YouTube ou TikTok, il vous faut toujours les droits sur la chanson d’origine — beaucoup de créateurs utilisent la bibliothèque musicale sous licence de la plateforme et réservent les montages slowed à leurs propres enregistrements.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez une chanson ou cliquez pour la parcourir',
    },
    'fade-audio': {
      cardLine: 'Lissez fins de chansons et intros de podcast avec des fondus précis.',
      name: 'Fondu audio',
      shortName: 'Fondu',
      title: 'Fondu audio — ajouter un fondu d’entrée et de sortie en ligne',
      description:
        'Ajoutez fondu d’entrée et de sortie à vos chansons dans votre navigateur. Durée au dixième de seconde, export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Fondu audio en ligne gratuit — Faire un fondu de sortie sur une musique',
      heroAlt: 'Faire entrer un morceau en fondu, puis le faire sortir',
      subtitle: 'Des bords doux en quelques secondes : réglez les deux fondus au dixième de seconde, écoutez et exportez. Rien ne quitte votre appareil.',
      intro:
        'Un fondu d’entrée fait démarrer une piste depuis le silence ; un fondu de sortie la referme en douceur. C’est toute la différence entre une coupure brutale et une fin aboutie. Chargez un fichier, réglez chaque durée au dixième de seconde et écoutez avant d’exporter. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
      usesHeading: 'Quand un fondu est la bonne solution',
      uses: [
        'Terminez proprement un mixtape, un set de DJ ou une compilation au lieu de la couper en pleine note.',
        'Adoucissez l’entrée d’un podcast ou d’un mémo vocal pour que le premier mot ne surprenne pas l’auditeur.',
        'Supprimez le clic de la couture d’une boucle ou d’un sample pour qu’il se répète sans grésiller.',
      ],
      howTo: [
        {
          name: 'Chargez votre audio',
          text: 'MP3, WAV, M4A, OGG ou FLAC. Le traitement reste sur votre appareil.',
        },
        {
          name: 'Réglez les durées',
          text: 'Ouvrez « Ajuster » et définissez fondu d’entrée et fondu de sortie : 1 à 3 s sonne naturel sur une chanson, 0,2 à 0,5 s sur une boucle.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Lisez le début et la fin pour entendre les fondus, puis exportez en MP3 ou en WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Les fondus sont rendus avec la Web Audio API dans votre onglet : il n’y a aucune étape de téléversement. Après le chargement de la page, vous pouvez vous déconnecter, l’outil continue de fonctionner.',
        },
        {
          q: 'Le fondu altère-t-il la qualité de l’audio ?',
          a: 'Non. Un fondu ne fait que modeler le volume dans le temps — ni réverbe, ni changement de hauteur tonale. L’export réencode une seule fois : MP3 à 128–320 kbps (320 par défaut) ou WAV identique au bit près. Votre fichier source n’est jamais modifié.',
        },
        {
          q: 'Peut-on faire un fondu enchaîné entre deux chansons ?',
          a: 'Pas ici — cette page applique un fondu d’entrée et de sortie à un seul fichier. Enchaîner la fin d’une piste sur le début d’une autre est un fondu enchaîné, et c’est le travail de l’outil de fusion audio. Répéter le même clip avec un court fondu à chaque jointure, c’est la boucle audio.',
        },
        {
          q: 'Quelle différence avec l’augmentation du volume ?',
          a: 'L’amplificateur de volume élève tout le fichier d’une quantité fixe ; le fondu modèle le volume dans le temps — doux sur les bords, intact au centre. Pour une fin, le fondu ; pour le volume général, l’amplification.',
        },
        {
          q: 'Quelle durée pour un fondu de sortie ?',
          a: 'Sur une chanson, 1 à 3 secondes sonne généralement naturel ; un enregistrement live supporte 4 à 5. Sur une boucle ou une sonnerie, restez entre 0,2 et 0,5 s pour préserver l’attaque. Il n’y a pas de réponse unique — écoutez et fiez-vous à vos oreilles.',
        },
        {
          q: 'Ça marche sur mobile ?',
          a: 'Oui. L’éditeur est conçu pour le tactile : glissez pour sélectionner, réglez les curseurs et exportez. Fonctionne avec les versions actuelles de Chrome, Edge, Firefox et Safari, sur ordinateur et mobile.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'pitch-changer': {
      cardLine: 'Décalez la tonalité en demi-tons pour covers et mashups — à longueur inchangée.',
      name: 'Changeur de hauteur tonale',
      shortName: 'Hauteur tonale',
      title: 'Changeur de hauteur tonale — sans changer la vitesse',
      description:
        'Montez ou descendez la hauteur tonale d’une chanson ou d’une voix jusqu’à 12 demi-tons, sans changer sa durée. Gratuit, dans votre navigateur, sans téléversement.',
      h1: 'Changeur de hauteur tonale en ligne gratuit — Changer la hauteur d’une chanson',
      heroAlt: 'Déplacer la hauteur d’un MP3 sans changer sa vitesse',
      subtitle: 'Montez ou descendez la hauteur tonale par demi-tons — la durée du fichier ne change pas.',
      intro:
        'Déposez une chanson ou un enregistrement vocal et glissez le curseur de hauteur tonale. La tonalité change et le tempo reste en place. Ce n’est pas le changeur de vitesse : ici le fichier ne se raccourcit ni ne s’allonge. Le décalage se calcule sur votre appareil.',
      usesHeading: 'La hauteur bouge, la ligne de temps non',
      uses: [
        'Transposez une chanson vers une tonalité plus confortable pour chanter. Le fichier garde la même durée.',
        'Décalez une voix de quelques demi-tons pour un personnage, sans accélérer la phrase.',
        'L’effet « plus rapide et plus aigu » revient au changeur de vitesse. Cette page ne raccourcit pas l’audio.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier',
          text: 'Ajoutez un MP3, WAV, M4A ou autre fichier audio. Il reste sur votre appareil.',
        },
        {
          name: 'Réglez la hauteur tonale',
          text: 'Glissez de −12 à +12 demi-tons. +12 équivaut à une octave au-dessus, −12 à une octave en dessous. 0 laisse le fichier inchangé.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Lancez la lecture pour entendre la nouvelle tonalité à durée d’origine, puis enregistrez en MP3 ou WAV.',
        },
      ],
      faqs: [
        {
          q: 'Ça change la durée du fichier ?',
          a: 'Non. Le curseur de hauteur tonale déplace la tonalité et laisse la durée intacte. Pour accélérer ou ralentir un fichier — ce qui déplace aussi la hauteur —, utilisez le changeur de vitesse.',
        },
        {
          q: 'Jusqu’où puis-je décaler la hauteur tonale ?',
          a: 'De −12 à +12 demi-tons, par pas de 1. Soit une octave dans chaque sens. La parole et un instrument seul restent utilisables plus loin qu’un mix dense.',
        },
        {
          q: 'Un décalage important sonne-t-il naturel ?',
          a: 'Quelques demi-tons restent proches de l’original. Au-delà d’environ 7 demi-tons, le son s’amincit et devient métallique. C’est la limite de ce changeur, pas un réglage désactivable.',
        },
        {
          q: 'Est-ce la même chose que changer la vitesse ?',
          a: 'Non. Le changeur de vitesse lit le fichier plus vite ou plus lentement, donc la hauteur suit et la durée change. Cette page ne déplace que la hauteur tonale.',
        },
        {
          q: 'Le fichier est-il téléversé ?',
          a: 'Non. Le décalage est calculé dans votre navigateur et l’export est enregistré sur votre appareil.',
        },
        {
          q: 'Puis-je changer la tonalité d’une chanson pour éviter le copyright ?',
          a: 'Non — changer la tonalité ne supprime pas les droits liés à un enregistrement. Un téléversement transposé peut toujours être revendiqué et retiré. Changez la tonalité pour chanter ou pour le karaoké, et publiez de la musique dont vous détenez les droits.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'm4a-to-mp3': {
      cardLine: 'Convertissez mémos vocaux iPhone et fichiers AAC en MP3 lisibles partout.',
      name: 'Convertisseur M4A vers MP3',
      shortName: 'M4A vers MP3',
      title: 'M4A vers MP3 — convertir M4A et AAC en ligne gratuitement',
      description:
        'Convertissez l’audio M4A et AAC en MP3 dans votre navigateur. Gratuit, sans compte, sans téléversement. Choisissez 128, 192 ou 320 kbps.',
      h1: 'Convertisseur M4A vers MP3 en ligne gratuit — Convertir un M4A en MP3',
      heroAlt: 'Convertir un mémo vocal iPhone ou un fichier AAC en MP3',
      subtitle: 'Passez vos fichiers M4A et AAC en MP3 — dans votre navigateur, sans téléversement.',
      intro:
        'Les mémos vocaux et les enregistrements AAC sont souvent en M4A. Déposez le fichier, choisissez un débit, et votre navigateur le décode puis enregistre un MP3. L’audio ne va vers aucun serveur.',
      usesHeading: 'Les fichiers M4A qu’on convertit',
      uses: [
        'Passez un mémo vocal d’iPhone ou un téléchargement AAC en MP3, accepté par davantage de lecteurs.',
        '128 kbps pour la voix, 320 kbps pour la musique.',
        'Le M4A reste sur cet appareil. Rien n’est téléversé pour terminer la conversion.',
      ],
      howTo: [
        {
          name: 'Déposez votre M4A',
          text: 'Glissez un .m4a ou .aac sur la page, ou cliquez pour parcourir. Un MP4 vidéo, lui, va sur la page MP4 vers MP3.',
        },
        {
          name: 'Choisissez le débit',
          text: '320 kbps pour la musique, 192 kbps pour tous les jours, 128 kbps pour les mémos vocaux.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. Le fichier est décodé et encodé sur votre appareil, puis téléchargé.',
        },
      ],
      faqs: [
        {
          q: 'Peut-on convertir M4A en MP3 sur iPhone, Android ou Mac ?',
          a: 'Oui — le convertisseur tourne dans n’importe quel navigateur, l’appareil n’a pas d’importance. De l’audio AAC dans un conteneur M4A — ce qu’utilisent les mémos vocaux et la plupart des téléchargements AAC. L’Apple Lossless (ALAC) stocké en M4A ne se décode souvent pas dans le navigateur. Convertissez d’abord ce fichier en AAC ou WAV, puis revenez ici.',
        },
        {
          q: 'Et une vidéo MP4 ?',
          a: 'Utilisez le convertisseur MP4 vers MP3 pour les vidéos. Cette page est réservée à l’audio : M4A et AAC.',
        },
        {
          q: 'La conversion en MP3 perd-elle de la qualité ?',
          a: 'Le MP3 est avec perte. À 320 kbps, la différence avec l’AAC d’origine est faible pour presque tout le monde. Gardez le M4A si vous avez besoin du fichier d’origine intact.',
        },
        {
          q: 'Les tags et la pochette sont-ils conservés ?',
          a: 'Non. Le MP3 est écrit sans métadonnées, comme pour le convertisseur WAV. Titre, artiste et pochette ne sont pas copiés.',
        },
        {
          q: 'Le fichier est-il téléversé ?',
          a: 'Non. Votre navigateur décode le M4A et encode le MP3 en local. L’audio reste sur votre appareil.',
        },
      ],
      dropHint: 'Déposez un fichier M4A ou AAC, ou cliquez pour le parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'ogg-to-mp3': {
      cardLine: 'Rendez lisibles dans toutes les applis les OGG de clips de jeu ou d’enregistrements Linux.',
      name: 'Convertisseur OGG vers MP3',
      shortName: 'OGG vers MP3',
      title: 'Convertir OGG en MP3 — convertisseur gratuit en ligne',
      description:
        'Convertissez vos fichiers OGG en MP3 dans votre navigateur. Gratuit, sans compte, sans téléversement. Vorbis ou Opus dans l’OGG, à 128, 192 ou 320 kbps.',
      h1: 'Convertisseur OGG vers MP3 en ligne gratuit — Convertir un OGG en MP3',
      heroAlt: 'Convertir un OGG Vorbis ou Opus en MP3',
      subtitle: 'Passez l’audio OGG en MP3 — dans votre navigateur, sans téléversement.',
      intro:
        'OGG est un conteneur : le plus souvent Vorbis, parfois Opus. Déposez le fichier, choisissez un débit, et votre navigateur le décode puis enregistre un MP3. L’audio ne va vers aucun serveur.',
      usesHeading: 'Les fichiers OGG qu’on convertit',
      uses: [
        'Ouvrez un rip de jeu, un téléchargement ou un enregistrement de navigateur arrivé en OGG.',
        'Enregistrez un MP3 pour le téléphone, la voiture ou un éditeur qui refuse l’OGG.',
        'Laissez la voix à 128 kbps et la musique plus haut. Réessayer est local et gratuit.',
      ],
      howTo: [
        {
          name: 'Déposez votre OGG',
          text: 'Glissez un .ogg ou .oga sur la page, ou cliquez pour parcourir.',
        },
        {
          name: 'Choisissez le débit',
          text: '320 kbps pour la musique, 192 kbps pour tous les jours, 128 kbps pour la voix.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. Décodage et encodage se font sur votre appareil, puis le MP3 se télécharge.',
        },
      ],
      faqs: [
        {
          q: 'Qu’est-ce qu’un fichier OGG ?',
          a: 'OGG est un conteneur. La musique qu’il contient utilise généralement Vorbis ; certains fichiers de voix utilisent Opus. Si votre navigateur sait le décoder, cette page le convertit en MP3.',
        },
        {
          q: 'Quels navigateurs convertissent l’OGG ?',
          a: 'Chrome et Firefox décodent Vorbis et Opus dans l’OGG. Safari décode Opus et refuse souvent Vorbis. Si le fichier ne se lit pas dans un simple onglet du navigateur, cette page ne peut pas le convertir non plus.',
        },
        {
          q: 'La conversion OGG vers MP3 perd-elle de la qualité ?',
          a: 'Le MP3 est avec perte. À 320 kbps, la différence est faible pour presque tout le monde. Gardez l’OGG si vous avez besoin du fichier d’origine.',
        },
        {
          q: 'Les tags et la pochette sont-ils conservés ?',
          a: 'Non. Le MP3 est écrit sans métadonnées. Titre, artiste et pochette ne sont pas copiés.',
        },
        {
          q: 'Le fichier est-il téléversé ?',
          a: 'Non. Votre navigateur décode l’OGG et encode le MP3 en local. L’audio reste sur votre appareil.',
        },
      ],
      dropHint: 'Déposez un fichier OGG ou cliquez pour le parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'opus-to-mp3': {
      cardLine: 'Convertissez appels et téléchargements Opus en MP3 acceptés par tous les lecteurs.',
      name: 'Convertisseur Opus vers MP3',
      shortName: 'Opus vers MP3',
      title: 'Opus en MP3 — convertir les notes vocales WhatsApp',
      description:
        'Convertissez l’audio Opus en MP3 dans votre navigateur. Fichiers .opus et Opus dans OGG ou WebM. Gratuit, sans inscription ni téléversement.',
      h1: 'Convertisseur Opus vers MP3 en ligne gratuit — Convertir un Opus en MP3',
      heroAlt: 'Convertir une note vocale WhatsApp ou Telegram en MP3',
      subtitle: 'Passez l’audio Opus en MP3 — dans votre navigateur, sans téléversement.',
      intro:
        'Les messages vocaux et certains téléchargements sont en Opus : un fichier .opus, ou de l’Opus dans un OGG ou un WebM. Déposez le fichier, choisissez un débit, et votre navigateur le décode puis enregistre un MP3. L’audio ne va vers aucun serveur.',
      usesHeading: 'Les fichiers Opus qu’on convertit',
      uses: [
        'Passez un message vocal ou un export Opus en MP3, pour un lecteur qui n’ouvre pas l’Opus.',
        'La parole passe très bien à 128 kbps. Vous changez le format que tout le monde peut lire, pas la durée.',
        'Convertissez ici, puis rogez si le message commence ou finit par un long silence.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier Opus',
          text: 'Glissez un .opus sur la page, ou cliquez pour parcourir. Les fichiers OGG et WebM contenant de l’Opus fonctionnent de la même façon.',
        },
        {
          name: 'Choisissez le débit',
          text: '128 kbps suffisent pour des messages vocaux. Comptez 192 ou 320 kbps si le fichier Opus contient de la musique.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. Décodage et encodage se font sur votre appareil, puis le MP3 se télécharge.',
        },
      ],
      faqs: [
        {
          q: 'Qu’est-ce que le format Opus ?',
          a: 'Opus est un codec audio. Les messages vocaux de WhatsApp et Telegram sont souvent en .opus. Il se trouve aussi dans l’OGG et le WebM. Cette page transforme cet audio en un MP3 lisible partout.',
        },
        {
          q: 'Quels fichiers Opus fonctionnent ?',
          a: 'Ceux que votre navigateur sait déjà lire : .opus, OGG avec Opus et WebM avec Opus, dans Chrome, Firefox et Safari actuel. Si un simple onglet reste silencieux, cette page ne peut pas décoder ce fichier non plus.',
        },
        {
          q: 'La conversion Opus vers MP3 perd-elle de la qualité ?',
          a: 'Le MP3 est avec perte, et l’Opus aussi. À 320 kbps, le MP3 atteint son plafond de clarté. Les messages vocaux passent très bien à 128 kbps. Gardez le fichier Opus si vous avez besoin de l’original.',
        },
        {
          q: 'Les tags sont-ils conservés ?',
          a: 'Non. Le MP3 est écrit sans métadonnées. Titre et artiste ne sont pas copiés.',
        },
        {
          q: 'Le fichier est-il téléversé ?',
          a: 'Non. Votre navigateur décode l’audio Opus et encode le MP3 en local. L’audio reste sur votre appareil.',
        },
      ],
      dropHint: 'Déposez un fichier Opus ou cliquez pour le parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'waveform-generator': {
      cardLine: 'Transformez n’importe quelle piste en image d’onde partageable à vos couleurs.',
      name: 'Générateur de forme d’onde',
      shortName: 'Forme d’onde',
      title: 'Générateur de forme d’onde — image audio en PNG, gratuit',
      description: 'Transformez un morceau ou un enregistrement en image de forme d’onde. Couleurs, style et taille, puis un PNG net. Gratuit dans le navigateur, aucun envoi.',
      h1: 'Générateur de forme d’onde audio en ligne gratuit — Faire une image de forme d’onde',
      heroAlt: 'Enregistrer la forme d’onde d’une chanson en PNG',
      subtitle: 'Une image de la forme d’onde — couleurs, taille et PNG transparent, dessinés sur votre appareil.',
      intro: 'Déposez un morceau, une note vocale ou un podcast et obtenez une image de forme d’onde pour une couverture, un fond de vidéo ou un post. Barres ou forme pleine, couleurs, puis un PNG au format vidéo, carré ou bannière. Le navigateur dessine l’image à partir du fichier ouvert — rien n’est envoyé.',
      usesHeading: 'À quoi sert l’image',
      uses: [
        'Une couverture de podcast ou de morceau avec une forme d’onde, pas un carré vide.',
        'Un PNG transparent à poser sur une vidéo ou une miniature.',
        'Une bannière large pour un en-tête de site ou un carton de fin.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Réglez l’aspect', text: 'Choisissez un modèle, ou réglez le style et les couleurs. Indiquez le début et la fin si vous ne voulez qu’un passage. Préréglages : 1920×1080, carré, image sociale et bannière.' },
        { name: 'Téléchargez le PNG', text: 'L’aperçu est l’export. Les tailles préréglées sortent en double résolution pour rester nettes.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le navigateur décode le fichier et dessine l’image sur un canvas. Il n’y a pas d’envoi. Une fois la page chargée, ça marche aussi hors ligne.' },
        { q: 'Le PNG sera-t-il net ?', a: 'Les tailles préréglées exportent au double des pixels indiqués — une couverture 1920×1080 sort en 3840×2160. Le PNG est sans perte. Au-delà d’environ deux millions de pixels, une taille perso exporte en 1× pour ne pas saturer la mémoire.' },
        { q: 'Puis-je couper l’audio ici ?', a: 'Non. Cette page ne fait que dessiner. Pour couper ou rogner, utilisez le découpeur audio, puis revenez si vous voulez encore l’image.' },
        { q: 'Est-ce la même chose qu’un spectrogramme ?', a: 'Non. Une forme d’onde montre le volume dans le temps — la silhouette du lecteur. Un spectrogramme montre quelles fréquences sont présentes. Pour les voir, ouvrez le générateur de spectrogramme.' },
        { q: 'Puis-je avoir un fond transparent ?', a: 'Oui. Laissez « Fond transparent » activé : le PNG n’a pas de fond et se pose sur une vidéo ou une autre image. Désactivez-le pour peindre une couleur unie.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Sur un écran étroit les réglages s’empilent et le bouton de téléchargement reste à portée. Chrome, Edge, Firefox et Safari actuels, sur ordinateur et mobile.' },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Télécharger le PNG',
    },
    'spectrogram-generator': {
      cardLine: 'Voyez les fréquences d’une chanson, d’un enregistrement ou d’un chant d’oiseau.',
      name: 'Spectrogramme en ligne',
      shortName: 'Spectrogramme',
      title: 'Spectrogramme en ligne — audio en image, gratuit',
      description: 'Générez un spectrogramme depuis un audio et téléchargez le PNG. Axe log ou linéaire, couleurs, plage en dB. Gratuit dans le navigateur, rien n’est envoyé.',
      h1: 'Spectrogramme audio en ligne gratuit — Voir les fréquences d’un enregistrement',
      heroAlt: 'Télécharger en PNG l’image des fréquences d’une chanson',
      subtitle: 'Voyez les fréquences d’un morceau ou d’un enregistrement, puis téléchargez l’image. Le calcul reste sur votre appareil.',
      intro: 'Un spectrogramme montre quelles fréquences sont là au fil du temps : voix, graves, et tout ce qui a été dessiné dans le son. Déposez un fichier, choisissez un axe log ou linéaire, téléchargez le PNG. La FFT tourne dans le navigateur — rien n’est envoyé.',
      usesHeading: 'Ce que les gens y cherchent',
      uses: [
        'Voir où sont les graves, la voix et le souffle avant d’égaliser.',
        'Retrouver une image ou un mot caché dans les fréquences.',
        'Exporter une image fixe d’un morceau pour un post, un cours ou une note.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Réglez la vue', text: 'L’axe log est la vue musicale habituelle. Resserrez la fréquence haute. Si une image cachée est trop sombre ou trop claire, bougez le plancher et le plafond en dB. Pour un passage seulement, réduisez la plage de temps.' },
        { name: 'Téléchargez le PNG', text: 'Les tailles préréglées sortent en double résolution. L’image n’est pas de l’audio : on ne peut pas rejouer le PNG en morceau.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le navigateur décode le fichier et calcule la FFT dans cet onglet. Pas d’envoi. Une fois la page chargée, ça marche aussi hors ligne.' },
        { q: 'Que veulent dire les couleurs ?', a: 'Chaque colonne est un instant. La hauteur est la fréquence, les aigus en haut. Plus c’est clair, plus il y a d’énergie. Viridis, inferno et gris sont les mêmes données avec une autre échelle. Le plancher et le plafond en dB décident de ce qui est silencieux ou fort.' },
        { q: 'Puis-je retransformer l’image en audio ?', a: 'Non. Le PNG est un dessin des niveaux, pas la forme d’onde. Pour écouter, gardez l’original. Pour mettre une image dans l’audio, utilisez Image vers audio, puis ouvrez ce WAV ici.' },
        { q: 'En quoi est-ce différent du générateur de forme d’onde ?', a: 'Une forme d’onde, c’est le volume dans le temps — la silhouette du lecteur. Un spectrogramme, ce sont les fréquences présentes. Pour une couverture, la forme d’onde. Pour inspecter ou révéler des fréquences, cette page.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Sur un écran étroit les réglages s’empilent et le téléchargement reste à portée. Chrome, Edge, Firefox et Safari actuels, ordinateur et mobile. Un long fichier prend un moment : chaque colonne est une FFT.' },
        { q: 'Pourquoi certains morceaux cachent une image ?', a: 'Quelques titres, Aphex Twin en tête, dessinent une image en plaçant de l’énergie sur des fréquences choisies. Montez le plafond en dB si l’image est pâle, et gardez l’axe log. Cette page ne fait que l’afficher. La créer, c’est Image vers audio.' },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Télécharger le PNG',
    },
    'image-to-audio': {
      cardLine: 'Cachez une image ou une ligne de texte dans le spectrogramme d’un WAV.',
      name: 'Image vers audio',
      shortName: 'Image vers audio',
      title: 'Image vers audio — créer un spectrogramme d’une image',
      description: 'Transformez une image ou une courte ligne en WAV qu’un spectrogramme peut montrer. Gratuit dans le navigateur, rien n’est envoyé.',
      h1: 'Image vers audio en ligne gratuite — Transformer une image en son',
      heroAlt: 'Retransformer une image de spectrogramme en WAV',
      subtitle: 'Peignez une image ou une ligne de texte dans un WAV. Le spectrogramme la montre.',
      intro: 'Tapez une courte ligne ou déposez une image. Cette page écrit cette forme dans les fréquences d’un WAV, le même tour qu’une image cachée dans un morceau. Ce n’est ni une chanson ni de la parole. Ouvrez le WAV dans le générateur de spectrogramme. Rien n’est envoyé.',
      usesHeading: 'Ce que les gens en font',
      uses: [
        'Cacher un nom ou une ligne là où un spectrogramme peut la lire.',
        'Transformer un logo simple ou un dessin en une courte peinture sonore.',
        'Fabriquer un fichier à ouvrir directement dans le générateur de spectrogramme.',
      ],
      howTo: [
        { name: 'Texte ou image', text: 'Jusqu’à 32 caractères, ou un PNG, JPG, WebP. L’aperçu est l’image qui sera écrite. Les pixels clairs sont des fréquences plus fortes.' },
        { name: 'Téléchargez le WAV', text: 'Vous obtenez un WAV 44,1 kHz, 16 bits. Ça sonne comme des chirps et du bruit, pas comme l’image lue à voix haute.' },
        { name: 'Regardez le spectre', text: 'Ouvrez le WAV dans le générateur de spectrogramme. Axe log, plafond vers −20 dB. La forme se place entre environ 400 Hz et 12 kHz.' },
      ],
      faqs: [
        { q: 'Mon image est-elle envoyée ?', a: 'Non. Le navigateur dessine le texte ou l’image et construit le WAV dans cet onglet. Pas d’envoi. Une fois la page chargée, ça marche aussi hors ligne.' },
        { q: 'Quel fichier j’obtiens ?', a: 'Un WAV mono, 44,1 kHz, PCM 16 bits, quelques secondes. Pas un MP3. L’image vit dans les fréquences : un MP3 à bas débit peut la flouter.' },
        { q: 'Est-ce que ça sonne comme l’image ou les mots ?', a: 'Non. Pas de synthèse vocale, pas de générateur de musique. Vous entendez des tons là où les pixels sont clairs. Pour lire, ouvrez un spectrogramme.' },
        { q: 'En quoi est-ce différent du générateur de spectrogramme ?', a: 'Le générateur de spectrogramme dessine un audio que vous avez déjà. Cette page fait l’inverse : elle construit un audio pour qu’un spectrogramme montre votre image ou votre ligne. Le générateur de forme d’onde ne montre que le volume, la forme cachée y est peu visible.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Tapez, choisissez une photo, téléchargez. Chrome, Edge, Firefox et Safari actuels, ordinateur et mobile. Une photo très détaillée est réduite pour que le fichier reste court.' },
        { q: 'Est-ce un code secret ?', a: 'Non. Quiconque ouvre un spectrogramme du WAV voit l’image. C’est un dessin visible dans le son, pas un chiffrement.' },
      ],
      dropHint: 'Ou déposez une image',
      exportLabel: 'Télécharger le WAV',
    },
    'mp3-tag-editor': {
      name: 'Éditeur de tags MP3',
      shortName: 'Éditeur de tags',
      title: 'Éditeur de tags MP3 en ligne — tags et pochette, gratuit',
      description:
        'Éditez vos tags MP3 en ligne : titre, artiste, album, année, piste et pochette. Dans votre navigateur, sans téléversement. Gratuit, sans inscription.',
      h1: 'Éditeur de tags MP3 en ligne gratuit — Modifier les tags ID3',
      heroAlt: 'Changer le titre, l’artiste et la pochette d’un MP3',
      subtitle: 'Corrigez le titre, l’artiste, l’album et la pochette d’un MP3 en moins d’une minute — dans votre navigateur, sans aucun téléversement.',
      intro:
        'Un MP3 contient deux choses : la musique, et la fiche d’informations que les lecteurs affichent à côté — titre, artiste, album, année, pochette. Quand cette fiche est fausse ou absente, tout, du téléphone à l’autoradio, retombe sur « Artiste inconnu » ou Track 01. Déposez un fichier ici, corrigez les champs et enregistrez : l’audio est copié octet par octet, intact, et ne quitte jamais votre appareil.',
      usesHeading: 'Les tags qu’on doit vraiment réparer',
      uses: [
        'Nettoyer les téléchargements qui affichent « Artiste inconnu » ou sans pochette dans votre lecteur de musique.',
        'Donner à un épisode de podcast ou à une maquette un vrai titre, une pochette et des crédits avant publication.',
        'Supprimer les métadonnées d’appareil et de localisation restées dans un enregistrement avant de le partager.',
      ],
      howTo: [
        { name: 'Déposez votre MP3', text: 'Déposez le fichier ou cliquez pour parcourir. Les tags et la pochette actuels sont lus sur votre appareil et affichés dans le formulaire.' },
        { name: 'Modifiez les champs', text: 'Saisissez le bon titre, l’artiste, l’album, l’année et le numéro de piste, puis ajoutez ou remplacez la pochette par un JPG ou un PNG.' },
        { name: 'Enregistrez le MP3', text: 'Cliquez sur « Enregistrer le MP3 » pour télécharger le fichier avec ses tags. L’audio est copié à l’identique — seule la fiche d’informations autour est réécrite.' },
      ],
      faqs: [
        { q: 'Mon MP3 est-il téléversé vers un serveur ?', a: 'Non. Le fichier est ouvert avec l’API FileReader du navigateur et réécrit directement dans votre onglet. Vous pouvez charger cette page, couper le Wi-Fi, et l’éditeur fonctionne toujours. Il n’y a aucune étape de téléversement.' },
        { q: 'Modifier les tags change-t-il la qualité audio ?', a: 'Non. Les tags vivent dans un bloc séparé au début du fichier, et les trames audio MPEG sont copiées octet par octet : le son est bit-identique. Le fichier enregistré peut même être légèrement plus petit, car l’ancien bloc de tags et son remplissage ne sont pas repris.' },
        { q: 'Quelle différence avec l’éditeur MP3 ?', a: 'L’éditeur MP3 coupe, rogne et assemble l’audio lui-même, ce qui suppose de décoder puis de réencoder le son. Cette page ne touche jamais au son — elle réécrit la fiche d’informations autour. Utilisez celui-là pour éditer la musique, celui-ci pour l’étiqueter.' },
        { q: 'Que ne sait-il pas faire ?', a: 'Il n’édite que des fichiers MP3 — FLAC, M4A et WAV utilisent d’autres formats de tags que cette page n’écrit pas encore. Il traite un fichier à la fois, pas tout un album en lot. Et l’enregistrement réécrit tout le bloc de tags : les chapitres de podcast ou les champs personnalisés inhabituels du tag d’origine ne sont pas conservés — les champs courants, oui.' },
        { q: 'Pourquoi mon autoradio affiche-t-il encore « Track 01 » ?', a: 'Beaucoup d’autoradios ignorent les tags et se rabattent sur le nom du fichier, et la plupart gardent en cache les anciennes informations jusqu’à ce que vous rebranchiez la clé USB ou relanciez un scan. Enregistrez ici (le fichier est écrit en ID3v2.3, la version que les autoradios lisent le plus sûrement), renommez-le par exemple « 01 - Titre.mp3 », puis relancez le scan.' },
        { q: 'Mes tags chinois, japonais, coréens ou arabes s’affichent en charabia. Est-ce réparable ?', a: 'Oui — cela signifie en général que l’ancien tag était enregistré dans un encodage sur un octet au lieu d’Unicode. Retapez ici le bon texte et enregistrez : le fichier est réécrit en ID3v2.3 avec du texte UTF-16, que les lecteurs modernes affichent correctement, y compris pour les titres en chinois, japonais, coréen, arabe, cyrillique et hindi.' },
        { q: 'Ça marche sur mon téléphone ?', a: 'Oui — Chrome, Safari, Firefox et Edge récents, sur ordinateur comme sur mobile. L’enregistrement remet le fichier au navigateur comme n’importe quel téléchargement ; sur iPhone, Safari l’enregistre dans l’app Fichiers. Tout tourne en local, donc ça marche aussi sur une connexion lente une fois la page ouverte.' },
      ],
      dropHint: 'Déposez un fichier MP3 ici, ou cliquez pour parcourir',
      exportLabel: 'Enregistrer le MP3',
    },
    compressor: {
      cardLine: 'Baisse les crêtes fortes et relève les mots faibles, sans rendre tout le fichier plus fort.',
      name: 'Compresseur de niveau',
      shortName: 'Compresseur',
      title: 'Compresseur de niveau — Égaliser le volume en ligne',
      description:
        'Égalise les passages forts et faibles d’un enregistrement dans le navigateur. La crête reste. Ce n’est pas un fichier plus petit. Gratuit, sans envoi.',
      h1: 'Compresseur audio en ligne gratuit — Égaliser les passages forts et faibles',
      heroAlt: 'Retenir les pics d’une voix pour que les mots faibles ressortent',
      subtitle: 'Un compresseur large bande qui calme les sauts de niveau. La crête du fichier reste où elle était.',
      intro:
        'Une note vocale qui crie une phrase et chuchote la suivante a besoin d’une compression, pas d’un bouton de volume. Cette page applique un seul compresseur large bande : le fort descend, le faible monte, puis l’export est mis à l’échelle pour que la crête retrouve celle du fichier d’origine. Tout se passe dans le navigateur. Le fichier n’est pas envoyé.',
      usesHeading: 'Ce qu’un compresseur termine',
      uses: [
        'Égaliser une note vocale enregistrée tantôt près, tantôt loin du téléphone.',
        'Contenir un invité de podcast bien plus fort que la personne qui anime.',
        'Placer une voix devant quand le refrain saute au-dessus du couplet.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Réglez la quantité', text: 'Faites glisser Compresseur. 30–50 % suffisent pour la plupart des voix. 100 % écrase : seuil −36 dB, ratio 8:1.' },
        { name: 'Écoutez et exportez', text: 'Écoutez le résultat, puis exportez en MP3 ou WAV. La crête revient à la crête d’origine, juste sous le plein niveau.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le compresseur est un processeur de dynamique Web Audio dans l’onglet. Une fois la page chargée, vous pouvez couper le réseau et continuer d’exporter.' },
        { q: 'Que devient l’audio ?', a: 'Un compresseur large bande (seuil de −18 dB à −36 dB, ratio d’un peu plus de 1:1 jusqu’à 8:1). Il n’a pas de gain de compensation automatique, donc la page met l’export à l’échelle jusqu’à la crête source, ou environ −0,2 dBFS si la source était déjà plus chaude. Le WAV garde ce changement de niveau propre. Le MP3 est réencodé une fois.' },
        { q: 'Cela réduit-il le fichier ?', a: 'Non. Réduire un fichier, c’est réencoder à un débit plus bas : c’est la page compresseur audio. Cette page change la dynamique et laisse le débit au format d’export.' },
        { q: 'Quelle différence avec le booster et la normalisation ?', a: 'Le booster multiplie tout le fichier. La normalisation monte tout jusqu’à ce que l’échantillon le plus fort atteigne une cible. Les deux laissent l’écart entre fort et faible inchangé. Cette page le réduit. Une seule bande, pas une chaîne multibande, et elle n’enlève pas le bruit.' },
        { q: 'Le bruit de pièce disparaît-il ?', a: 'Non. Relever les passages faibles relève aussi le souffle et le bruit de pièce. Si le problème est le bruit, la compression le rend plus visible. Coupez le silence, ou réenregistrez.' },
        { q: 'Cela marche-t-il sur un téléphone ?', a: 'Oui. Le curseur et l’export fonctionnent au doigt dans Chrome, Edge, Firefox et Safari actuels. Quelques minutes de parole s’exportent en une ou deux secondes sur un téléphone récent.' },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
    },
    echo: {
      cardLine: 'Des répétitions que l’on peut compter : une claque courte, pas un bain de réverbe.',
      name: 'Écho',
      shortName: 'Écho',
      title: 'Ajouter un écho — répétitions en ligne gratuit',
      description: 'Ajoutez un écho chronométré à n’importe quel audio dans le navigateur. Vous réglez le délai et les répétitions. Gratuit, sans envoi.',
      h1: 'Écho en ligne gratuit — Ajouter de l’écho à un audio',
      heroAlt: 'Ajouter un délai et des répétitions à un enregistrement',
      subtitle: 'Des copies séparées, au délai que vous choisissez — d’une claque courte à 0,8 s.',
      intro: 'Un écho est une copie qui revient après un trou que l’on peut compter. Le délai va de quelques centièmes de seconde à 0,8 seconde, et les répétitions décident de ce que chaque copie renvoie. Le mélange humide est fixé à 45 %. Délai à zéro : le fichier ne change pas. Le traitement reste dans le navigateur.',
      usesHeading: 'Les échos que l’on veut vraiment',
      uses: ['Poser une claque courte sur une voix pour qu’elle prenne place sans devenir de la bouillie.', 'Faire revenir un coup de guitare ou de batterie sur le temps.', 'Entendre une phrase revenir une fois, nettement, au lieu d’un nuage de réverbe.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Délai et répétitions', text: 'Le délai est le trou avant la première copie, jusqu’à 0,8 s. Les répétitions sont le retour, plafonné à 55 % pour que ça ne s’emballe pas.' },
        { name: 'Écoutez et exportez', text: 'Écoutez, puis exportez en MP3 ou WAV. Le fichier s’allonge de la queue des répétitions, jusqu’à 4 secondes.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. L’écho est un délai Web Audio dans l’onglet. Une fois la page chargée, vous pouvez couper le réseau et continuer d’exporter.' },
        { q: 'Que fait vraiment l’effet ?', a: 'Une copie est retardée du temps choisi et mélangée à 45 %. Chaque copie revient dans le délai au niveau de répétition, jusqu’à 0,55, donc elles faiblissent au lieu de hurler. Le WAV garde ce mélange. Le MP3 est réencodé une fois.' },
        { q: 'En quoi est-ce différent du slowed + reverb ?', a: 'Le slowed + reverb est un lavis : la hauteur baisse avec la vitesse et la queue est un flou de réflexions. Cette page garde le tempo d’origine et ajoute des copies séparées. Elle ne change ni la vitesse ni la hauteur.' },
        { q: 'Pourquoi les répétitions ne deviennent-elles pas plus fortes ?', a: 'Le retour est plafonné à 55 % et la queue rendue à 4 secondes. Cela suffit pour entendre plusieurs copies. Cela ne devient pas un bruit qui s’auto-excite.' },
        { q: 'Puis-je n’échoer qu’une partie ?', a: 'Oui. Sélectionnez le passage sur la forme d’onde et gardez cette sélection. Les répétitions s’ajoutent à ce que vous exportez, pas au reste du fichier.' },
        { q: 'Cela marche-t-il sur un téléphone ?', a: 'Oui. Les deux curseurs et l’export fonctionnent au doigt dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
    },
    'silence-remover': {
      cardLine: "Coupez les longs silences et laissez les respirations courtes à leur place.",
      name: "Retirer le silence",
      shortName: "Silence",
      title: "Retirer le silence d’un audio — Couper les blancs en ligne",
      description: "Retirez les longs silences de n’importe quel audio dans le navigateur. Vous réglez le niveau et la durée. Gratuit, rien n’est envoyé.",
      h1: 'Suppression du silence en ligne gratuite — Retirer le silence d’un audio',
      heroAlt: 'Couper les longues pauses d’un enregistrement vocal',
      subtitle: "Enlevez l’air mort. Les pauses plus courtes que l’écart que vous fixez restent.",
      intro: "L’outil trouve les passages plus bas que le seuil et plus longs que le trou minimum, puis les coupe. Le seuil de départ est −40 dBFS, adapté à la voix et aux mémos. Chaque coupe laisse 0,08 seconde aux deux bords pour ne pas manger le début ou la fin d’un mot. Une pause plus courte que l’écart reste. Une musique basse et une queue qui s’éteint sont aussi sous −40 dBFS et partent avec. Pour choisir à la main, utilisez le découpeur audio. Si tout le fichier est sous le seuil, l’export est le fichier d’origine. Le traitement reste dans votre navigateur.",
      usesHeading: "Là où l’air mort se trouve vraiment",
      uses: ["Resserrez un mémo vocal ou une prise de podcast dont les phrases sont séparées par de longues pauses.", "Enlevez le silence d’un cours sans découper chaque trou à la main.", "Nettoyez un enregistrement avant l’export et laissez les respirations courtes."],
      howTo: [
        { name: "Déposez l’audio", text: "N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé sur votre appareil." },
        { name: "Réglez le seuil et le trou", text: "Le seuil est le niveau en dessous duquel un passage compte, de −60 à −20 dBFS. Le trou minimum est la durée qu’il doit avoir pour partir, de 0,1 à 2 secondes. La ligne d’état indique à peu près combien de secondes partent." },
        { name: "Exportez", text: "Écoutez l’original, puis exportez en MP3 ou WAV. Le fichier recolle les parties sonores et garde 0,08 seconde de chaque côté d’une coupe." },
      ],
      faqs: [
        { q: "Mon audio est-il envoyé ?", a: "Non. Le niveau est mesuré dans votre navigateur et les passages bas sont coupés en mémoire. Une fois la page chargée, vous pouvez couper le réseau : l’export fonctionne encore." },
        { q: "Qu’est-ce qui est vraiment retiré ?", a: "Un passage part seulement s’il est sous le seuil et plus long que le trou minimum. Le départ est −40 dBFS et 0,35 seconde. Chaque passage garde 0,08 seconde aux deux bouts. Les trous plus courts, y compris la plupart des respirations, restent." },
        { q: "Est-ce que la musique basse est coupée ?", a: "Oui, si elle reste sous le seuil plus longtemps que le trou. −40 dBFS est fait pour la voix. Un tapis bas, un fondu ou le bruit de pièce d’un mix musical comptent comme du silence. Montez le seuil vers −20 si vous ne voulez que les zéros presque numériques, ou utilisez le découpeur et sélectionnez à la main." },
        { q: "Et si tout le fichier est bas ?", a: "Rien n’est coupé. La ligne d’état le dit, et l’export est le fichier d’origine." },
        { q: "En quoi est-ce différent du découpeur ?", a: "Le découpeur audio et le coupeur MP3 gardent la zone que vous tracez sur la forme d’onde. Cette page trouve les longs silences par le niveau et les retire tous en un export. Elle ne change ni la vitesse, ni la hauteur, ni le volume de ce qui reste." },
        { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui. Les deux curseurs et le bouton d’export répondent au toucher dans Chrome, Edge, Firefox et Safari actuels." },
      ],
      dropHint: "Déposez un fichier audio, ou cliquez pour parcourir",
    },
    'audio-looper': {
      cardLine: 'Répétez un clip jusqu’à 16 fois et fondez chaque jointure.',
      name: 'Boucle audio',
      shortName: 'Boucle',
      title: 'Boucle audio — répéter un clip en ligne gratuit',
      description: 'Répétez une sélection ou le fichier entier de 2 à 16 fois, avec un fondu de 0,01 s à chaque jointure. Gratuit dans le navigateur. Rien n’est envoyé.',
      h1: 'Répéter un clip de 2 à 16 fois, en ligne et gratuit',
      heroAlt: 'Répéter un clip et fondre chaque jointure',
      subtitle: 'Bouclez la sélection ou le fichier entier, puis téléchargez un fichier plus long.',
      intro: 'Le nombre va de 2 à 16. La valeur de départ est 4. Chaque jointure est un fondu linéaire, 0,01 seconde tant que vous ne le bougez pas, jusqu’à 0,1 seconde. Faites glisser une sélection pour ne répéter que cette partie. Sans sélection, le fichier entier se répète. L’export s’arrête à 10 minutes. La hauteur et la vitesse restent. Le traitement reste dans le navigateur.',
      usesHeading: 'À quoi servent les répétitions',
      uses: ['Faites d’une mesure une boucle d’exercice à exporter.', 'Allongez une phrase courte pour couvrir une scène plus longue.', 'Répétez un sample avec un fondu court pour que la jointure ne claque pas.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le fichier est décodé sur votre appareil.' },
        { name: 'Réglez le nombre et la jointure', text: 'Les répétitions vont de 2 à 16. La jointure est le fondu de chaque couture, de 0 à 0,1 seconde. Glissez sur la forme d’onde si seule une partie doit se répéter. La ligne d’état indique la durée.' },
        { name: 'Exportez', text: 'Écoutez l’original pour vérifier la sélection, puis exportez en MP3 ou WAV. Le fichier est le clip écrit à la suite.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Les répétitions sont copiées dans votre navigateur. Une fois la page chargée, l’export fonctionne hors ligne.' },
        { q: 'Que se passe-t-il à chaque jointure ?', a: 'La fin d’un passage et le début du suivant se chevauchent de la durée de la jointure. La valeur de départ est 0,01 seconde. Le chevauchement est un fondu linéaire, un son stable ne saute pas. Le WAV, ce sont ces échantillons. Le MP3 encode la boucle une fois, au débit que vous choisissez. La hauteur et la vitesse ne changent pas.' },
        { q: 'Que refuse la page ?', a: 'Les répétitions vont seulement de 2 à 16. Si le résultat dépasse 10 minutes, l’export s’arrête et la ligne d’état le dit. Cette page n’enregistre pas par-dessus elle-même et ne met pas deux fichiers différents bout à bout.' },
        { q: 'Quelle différence avec le découpage, la jonction et le fondu ?', a: 'Le découpage garde une plage une fois. La jonction aligne des fichiers différents. Le fondu baisse le début ou la fin d’un seul fichier. Cette page réécrit le même clip, et le fondu croisé n’est qu’entre les copies.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Les deux curseurs, la forme d’onde et le bouton d’export se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
    },
    'auto-panner': {
      cardLine: 'Balayez un fichier de gauche à droite au rythme que vous fixez. Cela ne suit pas le temps.',
      name: 'Auto pan',
      shortName: 'Pan',
      title: 'Auto pan — balayer l’audio de gauche à droite',
      description: 'Balayez mono ou stéréo de gauche à droite, de 0,05 à 2 Hz. Profondeur 0 à 100 %, départ 70 %. Gratuit dans le navigateur. Rien n’est envoyé.',
      h1: 'Auto pan, balayez un fichier de gauche à droite',
      heroAlt: 'Balayer un enregistrement de gauche à droite',
      subtitle: 'Vous fixez la profondeur et la fréquence. Le balayage ne suit pas le temps.',
      intro: 'La profondeur va de 0 à 100 %. La valeur de départ est 70 %. La fréquence va de 0,05 Hz à 2 Hz. La valeur de départ est 0,2 Hz. La position est la profondeur fois un sinus de cette fréquence, donc 0,2 Hz met 5 secondes pour l’aller-retour. Cela ne suit pas la batterie. À profondeur 0, le fichier reste tel quel. Le traitement reste dans le navigateur.',
      usesHeading: 'À quoi sert le balayage',
      uses: ['Déplacez un pad ou une voix lentement d’une enceinte à l’autre.', 'Donnez à une prise mono un mouvement régulier gauche-droite.', 'Choisissez la fréquence en hertz, au lieu de courir après la batterie.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le fichier est décodé sur votre appareil.' },
        { name: 'Réglez profondeur et fréquence', text: 'La profondeur est la distance parcourue, de 0 à 100 %. La fréquence est le nombre de balayages par seconde, de 0,05 à 2. Faites glisser l’onde si seule une partie doit bouger.' },
        { name: 'Exportez', text: 'Écoutez pour vérifier la sélection, puis exportez en MP3 ou WAV. Le WAV, ce sont ces échantillons. Le MP3 encode le balayage une fois.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le balayage est un panoramique stéréo dans votre navigateur. Une fois la page chargée, vous pouvez couper le réseau et l’export continue.' },
        { q: 'Qu’arrive-t-il au son ?', a: 'La position est la profondeur fois un sinus de la fréquence. La hauteur et la vitesse de lecture restent. Une stéréo bouge comme une seule image. Les deux canaux ne partent pas sur des trajets différents. Le WAV, ce sont ces échantillons. Le MP3 encode une fois, au débit que vous choisissez.' },
        { q: 'Que refuse la page ?', a: 'Le balayage ne se cale pas sur un temps, et il ne sépare pas le centre et les côtés. À profondeur 0, aucun panoramique n’est inséré, donc l’export correspond au fichier déposé. Ce n’est pas un transfert lié à la tête qui vise un angle.' },
        { q: 'Quelle différence avec l’écho, le slowed reverb et l’égaliseur ?', a: 'L’écho ajoute une copie après un délai. Slowed + reverb change la vitesse et la hauteur, puis ajoute une pièce. L’égaliseur audio change des bandes de fréquence. Cette page ne fait que déplacer le même audio de gauche à droite. Un cercle fixe d’environ 10 secondes, avec une courte queue de réverbe, est la page audio 3D.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Les deux curseurs, l’onde et le bouton d’export se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
    },
    '3d-audio': {
      cardLine: 'Un interrupteur met le fichier sur un cercle lent et ajoute une courte queue de réverbe.',
      name: 'Audio 3D',
      shortName: '3D',
      title: 'Audio 3D — cercle lent et réverbe en ligne',
      description: 'Un cercle toutes les 10 secondes, plus une courte réverbe. Un interrupteur. Vitesse et hauteur inchangées. Gratuit dans le navigateur. Rien n’est envoyé.',
      h1: 'Audio 3D, un cercle lent avec une courte queue de réverbe',
      heroAlt: 'Un cercle lent entre les enceintes, plus une pièce courte',
      subtitle: 'La profondeur, la fréquence et la pièce sont déjà fixées. Vous ne faites que basculer l’interrupteur.',
      intro: 'Le cercle est fixe. La profondeur est de 100 %. La fréquence est de 0,1 Hz, donc un tour prend environ 10 secondes. C’est le son direct qui bouge. Un envoi de réverbe à 25 % utilise la même pièce courte que Slowed + reverb. La vitesse et la hauteur restent. Interrupteur éteint, l’export est le fichier déposé. Le traitement reste dans le navigateur.',
      usesHeading: 'À quoi sert le cercle',
      uses: ['Mettez une voix ou un pad sur un cercle lent sans choisir la fréquence.', 'Ajoutez une pièce courte derrière ce mouvement.', 'Gardez la vitesse d’origine et la hauteur d’origine.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le fichier est décodé sur votre appareil.' },
        { name: 'Laissez le cercle allumé', text: 'L’interrupteur démarre allumé. Éteignez-le et l’export correspond au fichier déposé. Il n’y a pas de second curseur pour la profondeur, la fréquence ou la pièce.' },
        { name: 'Exportez', text: 'Écoutez, puis exportez en MP3 ou WAV. Le WAV, ce sont les échantillons du cercle plus la queue. Le MP3 encode cela une fois.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le cercle et la pièce sont rendus dans votre navigateur. Une fois la page chargée, vous pouvez couper le réseau et l’export continue.' },
        { q: 'Qu’arrive-t-il au son ?', a: 'La profondeur reste à 100 %. La fréquence reste à 0,1 Hz, environ 10 secondes pour un tour. C’est le son direct qui bouge. La réverbe est un envoi à 25 %, la même pièce courte que Slowed + reverb, donc le fichier gagne une queue. La vitesse et la hauteur restent. Le WAV, ce sont ces échantillons. Le MP3 encode une fois, au débit que vous choisissez.' },
        { q: 'Que refuse la page ?', a: 'Vous ne pouvez pas choisir une autre fréquence, une autre profondeur ou une autre pièce. Cela ne suit pas un temps. Cela ne vise pas un angle autour de votre tête. Interrupteur éteint, il n’y a ni cercle ni queue.' },
        { q: 'Quelle différence avec l’auto pan et le slowed reverb ?', a: 'Pour régler vous-même la fréquence et la profondeur, utilisez l’auto pan. Cette page est le cercle fini, environ 10 secondes, avec la réverbe déjà allumée. Slowed + reverb change la vitesse et la hauteur. Cette page non.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. L’interrupteur, l’onde et le bouton d’export se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
    },
    metronome: {
      cardLine: 'Un clic de 40 à 240 BPM. Le premier temps de chaque mesure est plus fort.',
      name: 'Métronome',
      shortName: 'Métronome',
      title: 'Métronome — Clic de 40 à 240 BPM gratuit',
      description: 'Un clic de 40 à 240 BPM en 2/4, 3/4, 4/4 ou 6/8. Le premier temps est plus fort. Exportez 4, 8 ou 16 mesures en WAV ou MP3. Rien n’est envoyé.',
      h1: 'Métronome, un clic de 40 à 240 BPM',
      heroAlt: 'Un clic de métronome de 40 à 240 BPM',
      subtitle: 'Écoutez le clic, ou enregistrez 4, 8 ou 16 mesures. Il ne se mélange pas à un morceau.',
      intro: 'Le tempo va de 40 à 240 BPM. Choisissez 2/4, 3/4, 4/4 ou 6/8. Le premier temps de chaque mesure est plus fort. Lancez la lecture, le clic continue jusqu’à l’arrêt. L’export écrit 4, 8 ou 16 mesures en WAV ou MP3. Le 6/8, c’est six clics dans la mesure, à ce BPM, pas deux. Cette page ne prend pas de fichier et ne place pas le clic sous un morceau. Ce mélange est l’éditeur multipiste. Rien n’est envoyé.',
      usesHeading: 'Ce que vous pouvez faire',
      uses: [
        'Répéter un tempo avant d’enregistrer avec l’enregistreur vocal.',
        'Exporter 4, 8 ou 16 mesures du même clic.',
        'Entendre le 6/8 comme six clics, le premier plus fort.',
      ],
      howTo: [
        { name: 'Réglez le BPM et la mesure', text: 'Le BPM va de 40 à 240. Choisissez 2/4, 3/4, 4/4 ou 6/8. La page commence à 100 BPM et 4/4.' },
        { name: 'Lancez la lecture', text: 'Le clic continue jusqu’à l’arrêt. Le premier temps de chaque mesure est plus fort. Chaque clic est le même son court.' },
        { name: 'Exportez si vous voulez un fichier', text: 'Choisissez 4, 8 ou 16 mesures, puis WAV ou MP3. Le fichier ne contient que le clic. Le WAV garde ces échantillons. Le MP3 les encode une fois.' },
      ],
      faqs: [
        { q: 'Est-ce qu’on envoie quelque chose ?', a: 'Non. La page ne lit pas de fichier et n’ouvre pas le micro. La lecture et l’export restent dans le navigateur. Une fois la page chargée, vous pouvez couper le réseau et le clic continue.' },
        { q: 'À quoi ressemble le clic ?', a: 'À 100 BPM, les clics sont espacés de 0,60 seconde. Le premier temps de la mesure est plus fort. Les autres sont le même son, plus bas. Le WAV, ce sont ces échantillons. Le MP3 les encode une fois, au débit que vous choisissez.' },
        { q: 'Que refuse la page ?', a: 'Elle n’aligne pas le clic sur un morceau. Il n’y a pas d’endroit pour déposer un fichier. Le 6/8 reste à six clics dans la mesure, au BPM du curseur. Elle ne passe pas à deux clics de noire pointée.' },
        { q: 'Quelle différence avec le multipiste et la vitesse ?', a: 'Cette page, c’est seulement le clic. Mettre ce clic sous un morceau, c’est l’éditeur multipiste. Changer la durée d’un enregistrement, c’est la page de vitesse, et la hauteur bouge avec. Le micro, c’est l’enregistreur vocal.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Le curseur de BPM, la mesure, la lecture et l’export se touchent dans Chrome, Edge, Firefox et Safari actuels. Le clic utilise un oscillateur Web Audio. Le fichier exporté utilise le même intervalle.' },
      ],
      dropHint: 'Pas de fichier. Lancez la lecture.',
    },
    'key-bpm-finder': {
      cardLine: 'Lisez un BPM de 60 à 180 et un mode majeur ou mineur. Le silence reste illisible.',
      name: 'Tonalité et BPM',
      shortName: 'Ton et BPM',
      title: 'Tonalité et BPM — Lire un fichier en ligne gratuit',
      description: 'Lisez un BPM de 60 à 180 et un mode majeur ou mineur. Le silence reste illisible. La page lit les 60 premières secondes. Rien n’est envoyé.',
      h1: 'Tonalité et BPM, lus dans le fichier que vous déposez',
      heroAlt: 'Lire le BPM et la tonalité d’un fichier audio',
      subtitle: 'Deux nombres. Aucun bouton qui déplace la hauteur.',
      intro: 'Déposez un fichier. La page lit un BPM de 60 à 180, et une tonalité : une note plus majeur ou mineur. Le BPM est l’écart le plus fort entre les attaques. Un écart hors de cette plage est divisé ou doublé jusqu’à tomber dedans. La tonalité est le profil majeur ou mineur fixe qui correspond le mieux aux classes de hauteur. Le silence affiche « Illisible », pas 0 BPM et pas do majeur. Seules les 60 premières secondes sont lues. Un fichier de moins de 2 secondes n’a pas de BPM. Cette page ne change pas le fichier. Déplacer la hauteur, c’est le changeur de hauteur. Rien n’est envoyé.',
      usesHeading: 'Ce que vous pouvez lire',
      uses: [
        'Le tempo d’une boucle avant d’en changer la vitesse.',
        'La tonalité d’une prise avant de la déplacer dans le changeur de hauteur.',
        'Un résultat illisible sur un fichier silencieux, au lieu de 0 BPM ou do majeur.',
      ],
      howTo: [
        { name: 'Déposez un fichier', text: 'De l’audio, ou une vidéo avec une piste son. Le navigateur décode. Rien n’est envoyé.' },
        { name: 'Lisez le BPM et la tonalité', text: 'Le BPM est un entier de 60 à 180. La tonalité est une note plus majeur ou mineur. La phrase sous les nombres nomme les cas qui s’échangent.' },
        { name: 'Laissez le fichier tel quel', text: 'Cette page n’exporte pas un fichier modifié. Le changeur de hauteur est l’endroit où la hauteur bouge, et la durée reste.' },
      ],
      faqs: [
        { q: 'Le fichier est-il envoyé ?', a: 'Non. Le navigateur le décode et lit les échantillons en mémoire. Une fois la page chargée, vous pouvez couper le réseau et lire quand même un fichier que vous déposez.' },
        { q: 'La lecture est-elle exacte ?', a: 'Le BPM est l’écart d’attaque le plus fort entre 60 et 180, en entier. La tonalité est le meilleur accord avec un profil majeur fixe et un profil mineur fixe, 12 poids chacun. Ce n’est pas une transcription d’accords.' },
        { q: 'Que refuse la page ?', a: 'Elle ne change ni la hauteur ni la vitesse. Il n’y a pas de bouton pour une nouvelle tonalité. Un fichier de moins de 2 secondes n’a pas de BPM. Le silence affiche illisible, pas 0 et pas do majeur. Seules les 60 premières secondes sont lues.' },
        { q: 'Quelle différence avec le changeur de hauteur et la page de vitesse ?', a: 'Cette page ne fait que lire. Le changeur de hauteur déplace la hauteur et garde la durée. La page de vitesse change la durée, et la hauteur bouge avec. Couper une région, c’est le coupeur audio.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Déposez le fichier et lisez les deux nombres. La zone de dépôt et le bouton de reprise se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
    },
    'loudness-meter': {
      cardLine: "Lisez le niveau d’un fichier en LUFS, puis alignez une cible podcast, streaming ou diffusion.",
      name: "Mesureur de loudness",
      shortName: "Loudness",
      title: "Mesureur de loudness — LUFS d’un audio en ligne gratuit",
      description: "Mesurez les LUFS d’un audio dans le navigateur, puis alignez −16, −14 ou −23. La crête reste à −1 dBFS. Gratuit, rien n’est envoyé.",
      h1: 'Mesureur LUFS en ligne gratuit — Vérifier les LUFS d’une chanson',
      heroAlt: 'Voir si un fichier correspond au niveau d’un podcast ou d’un flux',
      subtitle: "Les LUFS intégrés du fichier que vous déposez, pas le niveau de la pièce.",
      intro: "Déposez un fichier et lisez sa loudness intégrée en LUFS, plus la crête d’échantillon. Puis alignez une cible de livraison : podcast −16, streaming −14 ou diffusion −23. Le gain est un seul nombre pour tout le fichier. S’il poussait l’échantillon le plus fort au-delà de −1 dBFS, il s’arrête là et la page indique les LUFS réellement atteints. Ce n’est pas un sonomètre de pièce, ni une normalisation par crête. −16, −14 et −23 sont des cibles de livraison courantes, pas une limite légale. Le traitement reste dans votre navigateur.",
      usesHeading: "À quoi sert le chiffre",
      uses: ["Voir si un mémo vocal ou un mix est proche d’une cible podcast avant de l’envoyer.", "Remonter un fichier bas vers −16 ou −14 sans laisser la crête d’échantillon passer −1 dBFS.", "Lire une stéréo en stéréo. Les deux canaux ne sont pas mélangés avant la mesure."],
      howTo: [
        { name: "Déposez l’audio", text: "N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé et mesuré sur votre appareil." },
        { name: "Lisez la mesure", text: "Intégrée est la loudness du fichier après pondération K, en LUFS. La crête d’échantillon est le plus grand échantillon, en dBFS. Un fichier silencieux n’a pas de loudness à aligner." },
        { name: "Choisissez une cible et exportez", text: "Podcast −16, streaming −14, diffusion −23. Exportez en MP3 ou WAV. Si la crête dépassait −1 dBFS, le gain s’arrête et la note montre les LUFS obtenus." },
      ],
      faqs: [
        { q: "Mon audio est-il envoyé ?", a: "Non. Le fichier est décodé et mesuré dans votre navigateur. Une fois la page chargée, vous pouvez couper le réseau : l’export fonctionne encore." },
        { q: "Que signifie le chiffre ?", a: "Les LUFS intégrés disent à quel point le fichier est fort sur toute sa durée, après la pondération K de l’ITU-R BS.1770. C’est une propriété du fichier. Ce n’est pas une mesure de la pièce, ni un niveau de pression acoustique pondéré A." },
        { q: "En quoi est-ce différent de la normalisation ?", a: "La normalisation monte le fichier jusqu’à ce que l’échantillon le plus fort touche une crête. Cette page aligne la loudness intégrée. Un fichier peut être normalisé en crête et rester loin de −16 LUFS. Le fort et le faible gardent le même écart. Le compresseur de niveau est la page qui réduit cet écart." },
        { q: "−16, −14 et −23 sont-ils des limites légales ?", a: "Non. Ce sont des cibles de livraison courantes : les podcasts demandent souvent environ −16 LUFS, le streaming musical environ −14, la diffusion environ −23. La page ne promet pas que votre fichier passera une plateforme ou un diffuseur." },
        { q: "La crête est-elle une crête réelle ?", a: "Non. La crête d’échantillon est le plus grand échantillon du fichier. Une crête réelle demande un suréchantillonnage et peut être un peu plus haute entre les échantillons. Cette page tient la crête d’échantillon à −1 dBFS et ne donne pas de dBTP." },
        { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui. Les trois cibles et le bouton d’export répondent au toucher dans Chrome, Edge, Firefox et Safari actuels." },
      ],
      dropHint: "Déposez un fichier audio, ou cliquez pour parcourir",
    },
    'multi-track-audio-editor': {
      cardLine: 'Empilez voix, commentaire et musique sur une timeline, puis exportez un mix.',
      name: 'Éditeur audio multipiste',
      shortName: 'Multipiste',
      title: 'Éditeur audio multipiste — Mixer en ligne gratuit',
      description: 'Empilez des fichiers sur une timeline, réglez niveau et pan par piste, exportez un mix. Gratuit, dans le navigateur, rien n’est envoyé.',
      h1: 'Éditeur audio multipiste en ligne gratuit — Superposer des pistes',
      heroAlt: 'Régler le niveau et le panoramique d’une voix sur un beat',
      subtitle: 'Empilez jusqu’à 8 fichiers, équilibrez chacun, exportez un seul mix.',
      intro: 'Posez une voix sur un beat, ou un commentaire sur une musique, et écoutez-les ensemble. Chaque fichier est une piste : niveau, pan, muet, solo, et l’instant où elle entre. La somme se fait dans votre navigateur. Rien n’est envoyé. Fermer l’onglet termine la session.',
      usesHeading: 'Mix pour cette page',
      uses: [
        'Glissez une note vocale sous une musique pour que la voix commence après l’intro.',
        'Équilibrez des stems que vous avez déjà — voix, batterie, guitare — et exportez un fichier.',
        'Écoutez une piste en solo, puis ramenez les autres, sans installer un DAW.',
      ],
      howTo: [
        { name: 'Ajoutez les fichiers', text: 'Déposez deux fichiers audio ou plus, ou cliquez pour les choisir. Chaque fichier devient une piste. Cette page s’arrête à 8.' },
        { name: 'Placez et équilibrez', text: 'Faites glisser un clip pour choisir son entrée. Tirez les bords pour couper. Réglez niveau et pan sur la ligne, ou saisissez les temps. Muet et Solo sont sur la même ligne.' },
        { name: 'Écoutez, puis exportez', text: 'Lancez Lire le mix. Exportez en MP3 ou WAV. Si la somme saturerait, tout le mix baisse du même facteur et la page indique de combien de dB.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le navigateur décode chaque fichier avec decodeAudioData et additionne les échantillons en mémoire. Une fois la page chargée, l’export n’a pas besoin d’un serveur. Fermer l’onglet jette la session : pas de compte, pas de projet enregistré.' },
        { q: 'Qu’arrive-t-il au son ?', a: 'Les pistes sont rééchantillonnées au taux le plus élevé parmi elles, au minimum 44,1 kHz, par interpolation linéaire. Le WAV est le PCM 16 bits de ce mix stéréo. Le MP3 est encodé une fois, au débit que vous choisissez, jusqu’à 320 kbps. Si le pic de la somme dépasse 0,98, tout le mix est réduit pour que le pic tombe à 0,98. C’est un changement de gain, pas un compresseur, et pas un second encodage.' },
        { q: 'Que ne fait-il pas ?', a: 'Il n’enregistre pas de MIDI, ne charge pas d’instruments ni de samples, ne trace pas de courbe de volume et ne baisse pas la musique sous la voix tout seul. Un clip par piste, huit pistes, pas de fichier de projet. Plugins, automation et une session à rouvrir demain : Audacity, ou un DAW de navigateur comme BandLab.' },
        { q: 'En quoi est-ce différent de la fusion ?', a: 'La fusion place les fichiers bout à bout : l’un finit, le suivant commence, avec un fondu enchaîné possible. Cette page les joue en même temps. Une playlist dans un seul fichier, c’est la fusion. Une voix sur un beat, c’est cette page.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. La timeline défile sur le côté. Niveau, pan, début et coupe sont des curseurs et des nombres, sans un glisser précis. Chrome, Edge, Firefox et Safari actuels décodent les formats courants. Un fichier illisible est ignoré, les autres restent.' },
        { q: 'Pourquoi seulement 8 pistes ?', a: 'Chaque piste est décodée en mémoire avant la lecture. Huit fichiers stéréo, c’est déjà beaucoup pour un onglet de téléphone. Une production 16 pistes avec plugins est un autre outil.' },
      ],
      dropHint: 'Déposez deux fichiers audio ou plus pour les empiler',
    },
  },
};
