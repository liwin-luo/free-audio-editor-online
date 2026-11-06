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
    fullscreen: 'Plein écran',
    shareOn: 'Partager sur {name}',
    copyLink: 'Copier le lien',
    copied: 'Copié',
    about: 'À propos',
    privacy: 'Confidentialité',
    status: 'État',
    guides: 'Guides',
    rights: 'Aucun fichier ne quitte votre appareil.',
    clientSide: 'Traitement 100 % dans le navigateur',
    contact: 'Contact',
    contactBody: 'Une question sur un outil, une correction ou une demande liée à la confidentialité ? Écrivez à {email}. Nous lisons chaque message.',
    contactPrivacy: 'Pour savoir comment les fichiers et les retours sont traités, consultez la {privacy}.',
    privacyPolicyLabel: 'politique de confidentialité',
    cookieBody:
      'Les cookies facultatifs servent au module de retours et à Microsoft Clarity, qui enregistre comment vous utilisez la page. La mesure d’audience agrégée n’utilise pas de cookies. Ce site n’affiche pas de publicité.',
    cookieAccept: 'Accepter',
    cookieReject: 'Refuser les facultatifs',
    cookiePolicy: 'Politique de confidentialité',
    trustMethod: 'Comment nous testons',
    trustFree: 'Gratuit, sans inscription',
    trustClean: 'Sans filigrane',
    trustOffline: 'Hors ligne une fois ouvert',
    faqHeading: 'Questions fréquentes',
    toolFaq: 'Questions sur {name}',
    related: 'Outils associés',
    openTool: 'Ouvrir {name}',
    allTools: 'Tous les outils audio',
    browseToolkit: 'Parcourir tous les outils',
    home: 'Accueil',
    howTo: 'Comment utiliser {name}',
    whyUs: 'Pourquoi utiliser {name}',
    whyPrivacy: 'Privé dès la conception — votre audio ne quitte jamais cet onglet. Sans téléversement, sans compte, sans filigrane.',
    whyPrecision: 'Précis à 0,01 s — ajustez les limites, suivez la règle et écoutez exactement le passage conservé.',
    whyMobile: 'Pensé pour le téléphone — coupez où que vous soyez ; rien à installer.',
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
      m4a: 'M4A · AAC',
    },
    categories: {
      cut: 'Couper et rogner',
      convert: 'Convertir et compresser',
      join: 'Fusionner et mixer',
      edit: 'Éditer et réparer',
      effects: 'Effets créatifs',
      record: 'Enregistrer et analyser',
    },
  },
  editor: {
    dropHour: 'MP3, WAV, M4A, OGG, FLAC, AAC — jusqu’à environ une heure',
    dropLocal: 'Traitement en local — votre fichier ne quitte jamais cet onglet',
    formatsMore: ' et plus',
    etaModel: 'le premier passage télécharge le modèle, ensuite à peu près la durée de l’audio',
    limitTenMin: '10 minutes maximum',
    limitThreeMin: '3 minutes maximum',
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
    hintTrim: 'Faites glisser les extrémités pour changer la plage. Lecture n’écoute que cette plage.',
    changeFile: 'Changer de fichier',
    selectAll: 'Tout sélectionner',
    playBtn: 'Lecture',
    chMono: 'Mono',
    chStereo: 'Stéréo',
    chMany: '{n} canaux',
    hintConvert: 'Espace pour lire · rien n’est téléversé',
    hintSilence: 'Les trous plus longs que le minimum sont coupés à l’export. Les respirations courtes restent.',
    reverse: 'Lecture à l’envers',
    normalize: 'Normaliser les crêtes',
    speed: 'Vitesse',
    speedPitch: 'La hauteur suit la vitesse.',
    tempoPitch: 'La hauteur reste.',
    pitch: 'Hauteur tonale',
    pitchLength: 'La durée ne change pas.',
    bass: 'Basses',
    treble: 'Aigus',
    mid: 'Médiums',
    eqPresetFlat: 'Plat',
    eqPresetRock: 'Rock',
    eqPresetPop: 'Pop',
    eqPresetHiphop: 'Hip-hop',
    eqPresetClassical: 'Classique',
    eqPresetVocal: 'Voix',
    cutoff: 'Coupure',
    volume: 'Volume',
    gainOriginal: '100 % correspond au volume d’origine.',
    reverb: 'Réverbe',
    compress: 'Compresseur',
    echoDelay: 'Délai',
    echoFeedback: 'Répétitions',
    distort: 'Intensité',
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
    voiceHigh: 'Aigu',
    voiceDeep: 'Grave',
    voiceRobot: 'Robot',
    voiceRadio: 'Radio',
    voiceGhost: 'Fantôme',
    hintVoice: 'Touchez un préréglage pour l’écouter, puis exportez. Les préréglages se remplacent, ils ne s’empilent pas.',
    tapTempoTap: 'Tapez',
    tapTempoReset: 'Réinitialiser',
    tapTempoHint: 'Tapez en suivant la musique. L’affichage se stabilise après environ quatre tapes ; 2,5 s sans tape et on repart de zéro.',
    tapTempoBeats: '{n} tapes',
    noiseStrength: 'Intensité',
    noiseExport: 'La réduction s’applique à l’export. Le modèle de 150 Ko charge une seule fois.',
    denoiseProgress: 'Suppression du bruit… {p} %',
    hintNoise: 'L’intensité s’applique à l’export. Un modèle de 150 Ko charge au premier export.',
    loopTimes: 'Répétitions',
    loopCrossfade: 'Jointure',
    loopExport: 'L’export dure environ {time}',
    loopTooLong: 'Cette boucle dépasse 10 minutes. Baissez les répétitions ou raccourcissez la sélection.',
    splitParts: 'Morceaux',
    splitExport: '{n} fichiers, environ {time} chacun',
    splitTooShort: 'Ce fichier est plus court que le nombre de morceaux.',
    crushBits: 'Bits',
    crushHold: 'Tenue',
    crushExport: '{bits} bits, tenu tous les {hold} échantillons',
    monoExport: 'L’export écrit un canal : la moyenne des canaux du fichier.',
    hz432Export: 'L’export baisse la hauteur de 0.32 demi-ton. La durée ne change pas.',
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
    saveSelected: 'Enregistrer la sélection · {time}',
    saveWithoutSelection: 'Enregistrer sans la sélection · {time}',
    fineTune: 'Réglage fin',
    boundaryStart: 'Début',
    boundaryEnd: 'Fin',
    loop: 'Boucle',
    outputLine: 'Sortie {time} · ≈{size}',
    errorDecodeTitle: 'Impossible de décoder ce fichier',
    errorDecodeHow: 'Essayez un fichier MP3, WAV ou M4A, ou convertissez-le avant de le déposer ici.',
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
    batchProgress: '{current} sur {total}',
    batchSkipped: '{n} ignorés',
    tgShared: 'Artiste, album, année, genre et pochette s’appliquent à chaque fichier. Le titre et le numéro de piste restent sur chaque ligne.',
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
    midiCaveat: 'Un seul instrument tient le mieux. Un mix complet, la batterie ou des accords denses sortent faux.',
    midiNotes: 'Notes\u00a0: {count}',
    midiNone: 'Aucune note. La batterie, le bruit ou un mix complet sortent souvent vides.',
    midiTooLong: 'Ce fichier dépasse 3 minutes. Coupez-le dans le découpeur audio, puis revenez.',
    midiWorking: 'Lecture des notes… {percent}\u00a0%',
    midiFirstRun: 'Le modèle de notes se télécharge une fois depuis ce site, moins de 1 MB, et le navigateur le garde.',
    midiFail: 'Les notes n’ont pas pu être lues. Essayez un fichier plus court, un seul instrument ou un navigateur récent.',
    midiMore: 'Les {shown} premières sur {count}.',
    midiDownload: 'Télécharger le MIDI',
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
    sbUpload: "Ajouter un audio",
    sbStopAll: "Tout arrêter",
    sbExportBoard: "Exporter le plateau",
    sbImportBoard: "Importer un plateau",
    sbFullscreen: "Plein écran",
    sbExitFs: "Quitter le plein écran",
    sbTemplates: "Préréglages",
    tplGeneral: "Général",
    tplStream: "Streaming · Jeux",
    tplPodcast: "Podcast",
    tplClass: "Classe",
    tplBlank: "Vide",
    tplConfirm: "Remplacer le plateau ?",
    sbName: "Nom",
    sbColor: "Couleur",
    sbPreview: "Écouter la sélection en boucle",
    sbStopPreview: "Arrêter l’écoute",
    sbUseAll: "Utiliser tout le clip",
    sbApplyTrim: "Appliquer le recadrage",
    sbTrimmed: "Recadré à {sec}s.",
    sbExportWav: "Exporter en WAV",
    sbReplace: "Remplacer l’audio",
    sbReplaced: "Audio de « {name} » remplacé.",
    sbDelete: "Supprimer",
    sbConfirmDelete: "Supprimer ce son ?",
    sbAddSound: "Ajouter un son",
    sbEmpty: "Le plateau est vide — ajoutez un audio ou enregistrez un clip, ou partez d’un préréglage ci-dessus.",
    sbKeyHint: "Les raccourcis suivent l’ordre du plateau : 1–9, 0, puis Q W E R T Y U I O P · Échap tout arrête · le crayon modifie un son",
    sbRecAdded: "Enregistrement ajouté au plateau.",
    sbImported: "{n} sons importés.",
    sbImportNone: "Ce fichier ne contient pas d’audio lisible.",
    sbImportBad: "Ce n’est pas un fichier JSON de soundboard.",
    sbExported: "Plateau exporté — {n} sons.",
    sbPlayAria: "Lire {name}",
    sbEditAria: "Modifier {name}",
    sbTooLong: "Les clips de plus de 60 secondes ne rentrent pas sur le plateau — recadrez d’abord le fichier.",
    mvPlay: "Lire",
    mvPause: "Pause",
    mvStyle: "Style",
    mvStyleBars: "Barres de spectre",
    mvStyleMirrored: "Barres en miroir",
    mvStyleRing: "Anneau",
    mvStyleScope: "Oscilloscope",
    mvTheme: "Thème",
    mvThemeNeon: "Néon",
    mvThemeSynthwave: "Synthwave",
    mvThemeFire: "Feu",
    mvThemeOcean: "Océan",
    mvThemeMatrix: "Matrix",
    mvThemeMidnight: "Minuit",
    mvThemePaper: "Papier",
    mvPrimary: "Couleur des barres",
    mvSizeLandscape: "Paysage 16:9",
    mvSizePortrait: "Vertical 9:16",
    mvRecording: "Enregistrement {t} / {total} — gardez cet onglet au premier plan",
    mvCancel: "Annuler l’enregistrement",
    mvCancelled: "Enregistrement abandonné.",
    mvSaved: "Vidéo enregistrée : vérifiez vos téléchargements.",
    mvFail: "L’enregistrement a échoué. Essayez une taille plus petite.",
    mvNoRecord: "Ce navigateur ne peut pas enregistrer un canevas en vidéo ; la lecture continue de fonctionner. Pour garder l’animation ici, utilisez un enregistrement d’écran.",
    mvRealtime: "L’enregistrement se fait en temps réel : une chanson de 3 minutes prend 3 minutes.",
  },
  home: {
    title: 'Outils audio en ligne — montage audio gratuit sans upload',
    description:
      'Outils audio en ligne gratuits : coupez, fusionnez, inversez et convertissez dans votre navigateur. Sans inscription, sans téléversement.',
    appBlurb: 'Outils audio en ligne gratuits — coupez, rognez, fusionnez et montez l’audio dans votre navigateur.',
    badge: 'Traitement 100 % local · aucun téléversement',
    h1: 'Outils audio en ligne gratuits',
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
        body: 'Pas d’installation, pas de file d’attente. Un long morceau ne quitte jamais la machine : le montage commence tout de suite.',
      },
      {
        title: 'Hors ligne une fois ouvert',
        body: 'La page doit se charger une fois. Ensuite, couper et exporter continuent si la connexion tombe.',
      },
    ],
    toolsHeading: 'Outils audio populaires',
    allToolsCta: 'Voir les {count} outils',
    toolsCount: '{count} outils',
    mostUsed: 'Les plus utilisés',
    comingTitle: 'Bientôt disponible',
    comingBody: 'Mixeur à fondu enchaîné, suppression des silences et plus encore — même approche axée sur la vie privée.',
    useCasesHeading: 'Que allez-vous monter aujourd’hui ?',
    useCases: [
      { title: 'Podcast', body: 'Enregistrez des épisodes, coupez les scories, assemblez les segments et repartez avec la transcription de vos notes d’émission.', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: 'Musique', body: 'Ralentissez les riffs pour les apprendre, transposez vos covers, ajoutez du poids ou de l’éclat à vos maquettes.', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: 'Voix off', body: 'Livrez des prises propres : supprimez le rumble, égalisez les niveaux et relevez les prises faibles sans saturation.', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
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
      cut: 'Raccourcissez une chanson, gardez le meilleur passage ou créez une sonnerie : sélectionnez la plage sur la forme d’onde et enregistrez.',
      convert: 'Convertissez entre MP3, WAV, M4A, OGG et Opus, extrayez le son d’une vidéo ou réduisez le débit d’un fichier — sur votre appareil.',
      join: 'Ordonnez les pistes, ajoutez des fondus enchaînés, répétez un passage ou empilez jusqu’à huit fichiers sur une timeline. Rien n’est envoyé.',
      edit: 'Montez ou égalisez le volume, normalisez les crêtes, supprimez les silences, modifiez les tags et façonnez le timbre avec EQ, filtres et fondus.',
      effects: 'Inversez, accélérez, ralentissez, changez la tonalité, ajoutez réverbération, écho, distorsion ou panoramique 8D, et transformez le son en image.',
      record: 'Enregistrez au micro, transcrivez l’audio, gardez le tempo avec un métronome ou lisez la tonalité et le BPM d’une piste.',
    },
    tasksTitle: 'Que voulez-vous faire ?',
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
      'Coupez, fusionnez, convertissez ou enregistrez l’audio dans votre navigateur : tous les outils au même endroit. Sans téléversement ni inscription, gratuit.',
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
    updated: 'Dernière mise à jour : 21 octobre 2026',
    sections: [
      {
        h: 'Vos fichiers audio',
        body: 'Chaque outil du site traite l’audio entièrement dans votre navigateur grâce à la Web Audio API. Vos fichiers {em} — il n’existe aucun point de téléversement. Quand vous fermez l’onglet, l’audio décodé disparaît de la mémoire.',
        em: 'ne sont jamais téléversés sur nos serveurs',
      },
      {
        h: 'Ce que nous conservons',
        body: 'Nous ne créons ni compte ni profil pour vous. Le site n’a ni comptes, ni adresse e-mail à fournir. Votre préférence de thème (clair ou sombre) et votre choix de cookies sont enregistrés dans le localStorage de votre navigateur et ne quittent jamais votre appareil.',
      },
      {
        h: 'Les tiers',
        body: 'L’encodeur MP3 (lamejs) est livré avec ce site et ne se charge que lorsque vous exportez un MP3. Il n’est pas téléchargé depuis un réseau tiers et ne reçoit pas votre audio. Les polices sont servies depuis le propre domaine de ce site.',
      },
      {
        h: 'Statistiques et publicité',
        body: 'Nous mesurons le trafic global avec Vercel Web Analytics, qui n’utilise pas de cookies et n’enregistre que des vues de pages agrégées — jamais votre identité, jamais votre audio. Si vous acceptez les cookies facultatifs, le site charge aussi Microsoft Clarity. Clarity enregistre les clics, le défilement et une rediffusion de la session, pour voir où un outil est difficile à utiliser. Si vous les refusez, Clarity n’est pas chargé. Votre audio n’est pas envoyé à Clarity. Nous n’affichons aucune publicité.',
      },
      {
        h: 'Widget de retours',
        body: 'Si vous acceptez les cookies facultatifs, le site charge Userback, un service de retours tiers, seulement après votre première interaction ou au bout de huit secondes. Si vous les refusez, Userback n’est pas chargé. Rien n’est envoyé tant que vous n’avez pas écrit et envoyé un message. Ce que vous écrivez, ainsi que des informations de base sur la page et le navigateur, est traité par Userback pour notre compte afin que nous puissions le lire et vous répondre. Les fichiers audio ne sont jamais concernés. Consultez la politique de confidentialité de Userback pour savoir comment ces données sont traitées.',
      },
    ],
    contactHeading: 'Contact',
    contactBefore: 'Des questions sur cette politique ? Écrivez à {email}.',
  },
  tools: {
    'audio-to-text': {
      cardLine: 'Transcrivez interviews et mémos vocaux en texte ou sous-titres SRT, sur votre appareil.',
      name: 'Transcrire un audio en texte',
      shortName: 'Transcrire un audio en texte',
      title: 'Transcrire un audio en texte — gratuit, en ligne',
      description:
        'Transcrivez l’audio en texte dans votre navigateur — MP3, WAV, M4A et vidéo, 90+ langues, export TXT ou SRT. Gratuit, sans inscription.',
      h1: 'Transcrire un audio en texte — Transcrire un enregistrement',
      heroAlt: 'Obtenir le texte d’un mémo vocal ou d’un entretien',
      subtitle: 'Transformez un enregistrement en texte dans plus de 90 langues, avec horodatage — directement dans votre navigateur.',
      intro:
        'Déposez un enregistrement et récupérez les mots : mémos vocaux, interviews, cours, podcasts — dans une quatre-vingt-dixaine de langues, détectées automatiquement quand vous ne savez pas laquelle c’est. Un modèle d’IA Whisper tourne dans votre onglet, sur votre propre appareil : l’audio n’est jamais envoyé, et la transcription sort en texte modifiable ou en fichier SRT avec horodatage.',
      usesHeading: 'Les transcriptions dont on a vraiment besoin',
      uses: [
        'Transformer un cours, une réunion ou une interview en notes cherchables et citables.',
        'Sous-titrer une vidéo ou un épisode de podcast en exportant un SRT horodaté.',
        'Sortir les mots d’un mémo vocal sans envoyer l’enregistrement nulle part.',
      ],
      howTo: [
        {
          name: 'Déposez le fichier',
          text: 'Ajoutez un MP3, WAV, M4A, une vidéo ou un autre enregistrement. Le décodage se fait sur votre appareil, rien n’est envoyé. Plusieurs enregistrements partagent la langue et le modèle que vous choisissez ensuite. Chacun reste autour de 10 minutes. Une transcription reste dans le champ. Deux ou plus reviennent dans un ZIP de TXT et SRT.',
        },
        {
          name: 'Choisissez langue et modèle',
          text: 'La détection automatique suffit pour la plupart des fichiers. Tiny va plus vite sur les longs enregistrements ou les machines modestes ; Base offre la meilleure précision.',
        },
        {
          name: 'Transcrivez et téléchargez',
          text: 'Le premier lancement télécharge le modèle une fois et le met en cache. Modifiez la transcription si besoin, puis enregistrez en TXT ou SRT.',
        },
      ],
      faqs: [
        { q: 'Puis-je transcrire plus d’un enregistrement ?', a: 'Oui. Plusieurs enregistrements partagent la langue et le modèle. Ils passent l’un après l’autre sur cet appareil, et chacun reste autour de 10 minutes. Une transcription reste dans le champ pour que vous la corrigiez. Deux ou plus se téléchargent dans un ZIP de TXT et SRT. Un téléphone manque de temps et de mémoire plus tôt.' },
        {
          q: 'Mon audio est-il envoyé ?',
          a: 'Non. Le fichier est décodé dans votre navigateur et transcrit par un modèle Whisper qui tourne localement via WebAssembly ou WebGPU. La seule requête réseau est le téléchargement unique du modèle depuis un CDN public — ensuite, la transcription fonctionne hors ligne. Votre audio ne parvient jamais à un serveur.',
        },
        {
          q: 'Quelle est la précision de la transcription ?',
          a: 'Elle repose sur les modèles Whisper d’OpenAI, qui approchent le niveau humain sur une parole claire. Le bruit de fond, les accents marqués, les voix qui se chevauchent ou la musique forte la font baisser. Sur un audio difficile, Base est nettement meilleure que Tiny — et dans tous les cas le résultat arrive dans une zone modifiable : vous pouvez corriger noms et ponctuation avant de télécharger.',
        },
        {
          q: 'Quelles sont les limites ?',
          a: 'Plusieurs fichiers, l’un après l’autre, chacun 10 minutes maximum — coupez d’abord un enregistrement plus long (le découpeur audio est tout aussi privé). Les locuteurs ne sont pas identifiés : un dialogue sort en un seul texte sans noms. Et cette page traite des fichiers, pas le micro en direct.',
        },
        {
          q: 'Quelle différence avec l’enregistreur vocal ?',
          a: 'L’enregistreur capte votre micro pour en faire un fichier audio ; cette page lit un fichier existant et en écrit les mots. Ils vont bien ensemble : on enregistre là-bas, on transcrit ici. Tout tourne dans votre navigateur.',
        },
        {
          q: 'Quelles langues sont prises en charge ?',
          a: 'Whisper a été entraîné sur une quatre-vingt-dixaine de langues, de l’anglais, du chinois, de l’espagnol et de l’arabe au vietnamien, à l’ukrainien et au swahili. Laissez la langue sur Détection automatique et le modèle la devine dans l’audio, ou fixez une langue pour gagner un peu de précision.',
        },
        {
          q: 'Ça marche sur téléphone ?',
          a: 'Oui — Chrome, Edge, Firefox et Safari récents, sur ordinateur comme sur mobile. Les navigateurs avec WebGPU (Chrome, Edge) transcrivent bien plus vite ; ailleurs, cela tourne sur le CPU : choisissez Tiny pour les fichiers longs et comptez quelques minutes pour dix minutes d’audio. Le téléchargement unique du modèle est aussi plus léger avec Tiny.',
        },
      ],
      sections: [
        {
          heading: 'Une transcription locale, pas un sous-titre en direct',
          paragraphs: [
            'La transcription audio exécute un modèle Whisper dans le navigateur. Le modèle se télécharge une fois depuis un CDN, puis le fichier est transcrit sur l’appareil. L’audio n’est pas téléversé pour la transcription.',
            'La limite est d’environ 10 minutes. Il n’y a pas d’étiquettes de locuteur. La page n’écoute pas le micro en direct. Enregistrez d’abord avec le [dictaphone en ligne](/voice-recorder), exportez, puis déposez ce fichier ici.',
          ],
        },
        {
          heading: 'Modèle et langue',
          paragraphs: [
            'La page liste trente codes de langue. Choisissez-en un, ou laissez la détection active :',
          ],
          bullets: [
            'Les modèles sont onnx-community/whisper-tiny et onnx-community/whisper-base.',
            'Sans WebGPU, la page démarre sur Tiny.',
            'Les tailles affichées n’ont pas été mesurées pour cette page.',
          ],
        },
        {
          heading: 'Ce que le texte va rater',
          paragraphs: [
            'Les noms, les paroles qui se chevauchent et la musique sous une voix sortent en désordre. La page ne marque pas qui a parlé. Nettoyez d’abord le fichier si les extrémités sont de longs silences : rognez, ou lancez [retirer le silence](/silence-remover), puis transcrivez le fichier plus court.',
            'Vous pouvez modifier les mots avant le téléchargement, en texte brut ou en SRT avec des horodatages. La page ne les traduit pas dans une autre langue.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers audio ou vidéo, ou cliquez pour les parcourir',
      exportLabel: 'Transcrire',
    },
    'bass-booster': {
      cardLine: 'Ajoutez du poids et du punch avec jusqu’à +15 dB de graves sous 150 Hz.',
      name: 'Augmenter les basses',
      shortName: 'Basses',
      title: 'Augmenter les basses — boost de basses en ligne',
      description:
        'Jusqu’à +15 dB de basses avec un vrai shelf sous 150 Hz, dans votre navigateur. Export MP3 ou WAV. Gratuit, sans téléversement.',
      h1: 'Augmenter les basses — Renforcer les basses d’une chanson',
      heroAlt: 'Ajouter du grave à un MP3',
      subtitle: 'Un vrai shelf : jusqu’à +15 dB sous 150 Hz, écoutez puis exportez. Rien ne quitte votre appareil.',
      intro:
        'Des basses faibles, c’est la raison la plus courante pour laquelle un enregistrement sonne petit. Le boost des basses applique un vrai shelf — jusqu’à +15 dB sous 150 Hz, le geste du mastering — pas un artifice qui monte tout. Chargez un fichier, montez le curseur jusqu’à ce que les basses s’asseyent, exportez. Tout se passe dans votre navigateur : le fichier n’est jamais téléversé.',
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
          text: 'Jusqu’à +15 dB sous 150 Hz. +3–6 dB répare un son fin ; au-delà, c’est un effet recherché.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Écoutez à volume normal — trop de basses masquent les voix. Exportez en MP3 ou WAV sans perte.',
        },
      ],
      faqs: [
        {
          q: 'Mon audio est-il téléversé ?',
          a: 'Non. Le boost est un filtre shelf Web Audio dans votre onglet — aucune étape de téléversement. Après le chargement de la page, vous pouvez passer hors ligne : l’outil continue de fonctionner.',
        },
        {
          q: 'Booster les basses dégrade-t-il la qualité ?',
          a: 'Aucun rééchantillonnage, aucun changement de tonalité. Si le boost pousse les basses au-delà du maximum, un limiteur contient les crêtes : l’export ne sature jamais brutalement — un réglage très chaud peut adoucir ces crêtes.',
        },
        {
          q: 'Peut-il créer du sub-bass absent ?',
          a: 'Non — un shelf amplifie seulement les basses fréquences que le fichier contient déjà. Les haut-parleurs de téléphone ne reproduisent pas le sub ; jugez le résultat au casque ou sur de vraies enceintes.',
        },
        {
          q: 'Différence avec le volume booster ?',
          a: 'Le volume booster monte tout uniformément ; le boost des basses ne soulève que le grave sous 150 Hz. Fichier entier trop faible ? Le booster. Son fin ? Les basses, ici.',
        },
        {
          q: 'Combien de basses ajouter ?',
          a: '+3–6 dB réparent un enregistrement fin. Au-delà de +9 dB, vous faites un effet stylistique — vérifiez que les voix restent intelligibles avant d’exporter.',
        },
        {
          q: 'Cela fonctionne-t-il sur mobile ?',
          a: 'Oui. L’éditeur est pensé pour le tactile — glissez, réglez, exportez. Fonctionne sur Chrome, Edge, Firefox et Safari à jour, ordinateur et mobile.',
        },
      ],
      screenshotsAlt: [
        'Augmenter les basses : zone de dépôt, rien n’est envoyé sur un serveur',
        'Augmenter les basses : espace de travail avec le fichier chargé',
        'Augmenter les basses : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Ce que la commande de basses monte vraiment',
          paragraphs: [
            'C’est un filtre en étagère basse. Il monte les fréquences sous 150 Hz du montant que vous réglez, jusqu’à +15 dB. Les médiums et les aigus restent où ils étaient. Ce n’est pas un bouton de volume.',
            'Une étagère ne peut amplifier que les basses déjà présentes. Un enregistrement de voix au téléphone a très peu d’énergie sous 80 Hz, donc une forte amplification ne produira pas de sub. Jugez le résultat au casque ou sur de vraies enceintes. Un haut-parleur de téléphone ne peut pas jouer cette plage, donc une forte amplification peut ne rien donner, ou donner de la boue.',
          ],
        },
        {
          heading: 'Combien de basses ajouter',
          paragraphs: [
            'La plage utile est étroite. Au-delà, vous fabriquez un effet.',
          ],
          bullets: [
            '+3 à +6 dB : notes vocales minces, interviews et morceaux tout en médiums.',
            '+6 à +9 dB : batteries et basses qui doivent avancer. Vérifiez que les voix passent encore.',
            '+9 à +15 dB : un effet de bas du spectre assumé. La parole devient souvent difficile à suivre.',
            'Si le bas du spectre grésille, l’étagère n’a plus de marge. Baissez le curseur.',
          ],
        },
        {
          heading: 'Boost des basses, boost du volume et égaliseur',
          paragraphs: [
            'Choisissez la page qui correspond au problème.',
          ],
          bullets: [
            'Boost des basses, cette page : seulement le bas sous 150 Hz. Le fichier sonne mince, pas faible.',
            'Amplifier le volume : tout le fichier, jusqu’à 4×, avec un limiteur. Le fichier est faible à toutes les fréquences.',
            'Égaliseur audio : basses, médiums et aigus en étagères séparées. Utilisez-le quand 150 Hz est la mauvaise coupure.',
          ],
        },
        {
          heading: 'Où un boost de basses rate',
          paragraphs: [
            'Des basses fortes cachent la parole. Prévisualisez à un niveau d’écoute normal, pas avec les haut-parleurs déjà baissés, sinon vous sauverez un fichier qui résonne en voiture et enterre la voix.',
            'Exportez en WAV si vous comptez continuer à modifier. Le MP3 à 320 kbps est le bon choix quand le fichier est terminé. Le filtre ne rééchantillonne pas et ne change pas la hauteur. Si l’amplification pousse les crêtes au-dessus du maximum, un limiteur adoucit ces crêtes pour que l’export ne sature pas durement.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
      exportLabel: 'Renforcer les graves',
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
      screenshotsAlt: [
        'Boost des aigus : zone de dépôt, rien n’est envoyé sur un serveur',
        'Boost des aigus : espace de travail avec le fichier chargé',
        'Boost des aigus : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Une étagère haute au-dessus de 3 kHz',
          paragraphs: [
            'Le boost des aigus est un filtre en étagère haute, jusqu’à +15 dB au-dessus de 3 kHz. Il amplifie les aigus que le fichier possède déjà. Il n’invente pas le détail qu’un encodage à bas débit a jeté.',
            'Un limiteur rattrape les crêtes pour qu’une forte amplification ne sature pas durement. L’amplification monte aussi le souffle et les sifflantes déjà présents dans le fichier.',
          ],
        },
        {
          heading: 'Jusqu’où le pousser',
          paragraphs: [
            'Écoutez une fois au casque avant d’exporter :',
          ],
          bullets: [
            '+3 à +6 dB ouvrent la plupart des enregistrements ternes.',
            'Au-delà de +9 dB, les sons s, ch et t peuvent devenir perçants.',
            'Si le fichier a été encodé à bas débit, aucune étagère ne ramène les aigus manquants.',
          ],
        },
        {
          heading: 'Aigus, basses et égaliseur',
          paragraphs: [
            'Le boost des basses monte sous 150 Hz. Cette page monte au-dessus de 3 kHz. Un son terne et étouffé pointe ici. Un son mince et petit pointe vers les basses.',
            'L’égaliseur audio est fait des mêmes trois régions, avec coupe et amplification : étagère basse à 150 Hz, crête à 1 kHz et cette étagère haute à 3 kHz. Utilisez le booster quand vous savez déjà que vous voulez seulement plus d’aigus.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
      exportLabel: 'Renforcer les aigus',
    },
    'equalizer': {
      cardLine: 'Sculptez graves, médiums et aigus avec un EQ simple à trois boutons ±15 dB.',
      name: 'Égaliseur audio',
      shortName: 'Égaliseur',
      title: 'Égaliseur audio — Égaliseur 10 bandes en ligne',
      description:
      'Dix bandes EQ de 31 Hz à 16 kHz, ±15 dB chacune, avec des préréglages par genre. Dans votre navigateur, export MP3 ou WAV. Gratuit, sans envoi.',
      h1: 'Égaliseur audio en ligne gratuit — Régler les basses, les médiums et les aigus',
      heroAlt: 'Façonner le timbre d’une chanson ou d’une voix',
      subtitle: 'Dix bandes à ±15 dB, préréglages en un clic — toujours un égaliseur honnête.',
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
      screenshotsAlt: [
        'Égaliseur audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Égaliseur audio : espace de travail avec le fichier chargé',
        'Égaliseur audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Dix bandes, coupe ou amplification',
          paragraphs: [
            'Les bandes sont des filtres à crête espacés d’une octave, de 31 Hz à 16 kHz. Chacune va à environ ±15 dB. Une bande laissée à 0 dB est contournée, donc elle ne colore pas le son.',
            'Couper est le geste plus sûr. Une coupe de −4 dB dans une bande boueuse fait souvent plus qu’une amplification de +6 dB ailleurs. Les grosses amplifications poussent le signal vers le limiteur et peuvent adoucir les crêtes.',
          ],
        },
        {
          heading: 'À quoi servent les plages',
          paragraphs: [
            'Les bandes d’octave se regroupent dans les trois régions habituelles, ce n’est pas un égaliseur chirurgical :',
          ],
          bullets: [
            '31 à 250 Hz : du poids et de la boue. Coupez si le fichier est trop bas. Le boost des basses ne fait que monter cette région, jusqu’à +15 dB, et ne sait pas couper.',
            '500 Hz à 2 kHz : la présence. Couper ici rend les voix lointaines.',
            '4 à 16 kHz : l’air et le tranchant. Le boost des aigus ne monte qu’au-dessus de 3 kHz.',
          ],
        },
        {
          heading: 'Quand un seul booster suffit',
          paragraphs: [
            'Si vous savez déjà que vous voulez seulement plus de basses ou plus d’aigus, le boost des basses et le boost des aigus sont les pages plus courtes. Ils ne coupent pas.',
            'Un filtre passe-bas ou passe-haut est un balayage de coupure, pas ces étagères. Utilisez un filtre quand vous voulez tout supprimer au-dessus ou en dessous d’une fréquence, et non déplacer quelques décibels.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
      exportLabel: 'Appliquer l’égaliseur',
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
      screenshotsAlt: [
        'Filtre passe-bas : zone de dépôt, rien n’est envoyé sur un serveur',
        'Filtre passe-bas : espace de travail avec le fichier chargé',
        'Filtre passe-bas : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Tout ce qui est au-dessus de la coupure part',
          paragraphs: [
            'Un filtre passe-bas atténue ce qui est au-dessus de la coupure. Ce n’est pas un réducteur de bruit. Il ne sépare pas le souffle du signal. Il baisse chaque fréquence après le point que vous réglez, y compris les consonnes et les cymbales si vous le réglez trop bas.',
            'Il n’y a ni rééchantillonnage ni changement de hauteur. L’export encode quand même une fois : MP3, ou WAV si vous voulez l’audio filtré sans une nouvelle génération avec perte.',
          ],
        },
        {
          heading: 'Des coupures adaptées à la tâche',
          paragraphs: [
            'Le nombre est un point de départ. Écoutez, car la même coupure assourdit un fichier et adoucit seulement un autre :',
          ],
          bullets: [
            'Voix : essayez d’abord 8 à 12 kHz. Sous environ 5 kHz, la parole sonne étouffée. Sous 2 kHz, elle sonne comme au téléphone.',
            'Un effet lo-fi doux pour la musique : 4 à 8 kHz.',
            'Des cymbales dures que vous voulez seulement calmer : 12 à 16 kHz. Sous 3 kHz, la musique devient nettement terne.',
          ],
        },
        {
          heading: 'Le passe-haut est l’autre direction',
          paragraphs: [
            'Le filtre passe-haut retire le grondement et le boom du bas du spectre sous sa coupure. Cette page retire le souffle et l’agressivité au-dessus de sa coupure. Utiliser les deux laisse une bande au milieu.',
            'Quelques décibels d’aigus, plutôt que retirer le haut d’un coup, c’est le boost des aigus ou l’égaliseur audio. Ces étagères ne balaient pas une coupure nette.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
      exportLabel: 'Appliquer le passe-bas',
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
      screenshotsAlt: [
        'Filtre passe-haut : zone de dépôt, rien n’est envoyé sur un serveur',
        'Filtre passe-haut : espace de travail avec le fichier chargé',
        'Filtre passe-haut : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Tout ce qui est sous la coupure part',
          paragraphs: [
            'Un filtre passe-haut atténue ce qui est sous la coupure : grondement, vent, chocs de manipulation et bas du spectre d’une pièce résonnante. Il ne change pas la hauteur et ne rééchantillonne pas.',
            'Le ronflement du secteur se situe à 50 ou 60 Hz, avec des harmoniques au-dessus. Un passe-haut autour de 80 à 120 Hz retire la fondamentale et une bonne partie du bourdonnement. Les harmoniques tenaces restent. Associez-le au filtre passe-bas si vous devez resserrer la bande davantage.',
          ],
        },
        {
          heading: 'Jusqu’où monter avant que la voix s’amincisse',
          paragraphs: [
            'La parole a du corps dans les bas médiums. Poussez la coupure trop loin et la voix devient mince :',
          ],
          bullets: [
            'Les voix d’hommes gardent leur corps jusqu’à environ 100 Hz.',
            'Les voix de femmes jusqu’à environ 150 à 200 Hz.',
            'Au-delà de 300 Hz, la parole commence à sonner comme au téléphone. Cela peut être un style, alors écoutez avant d’exporter.',
          ],
        },
        {
          heading: 'Pas le boost des basses, et pas une étagère de coupe',
          paragraphs: [
            'Le boost des basses ajoute du niveau sous 150 Hz. Cette page retire du niveau sous une coupure que vous balayez. Elles résolvent des problèmes opposés.',
            'L’égaliseur peut couper quelques décibels à 150 Hz et laisser le reste du bas du spectre. Utilisez-le quand le fichier est un peu boueux et que vous voulez encore du poids. Utilisez cette page quand le grondement doit disparaître.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le choisir',
      exportLabel: 'Appliquer le passe-haut',
    },
    'audio-trimmer': {
      cardLine: 'Déplacez les poignées pour garder exactement le passage voulu — podcasts, mémos vocaux, toute piste.',
      name: 'Couper l’audio',
      shortName: 'Rogneur',
      title: 'Couper l’audio — podcast ou mémo vocal',
      description:
        'Gardez un passage de podcast, de mémo vocal ou d’enregistrement, en MP3 ou WAV. Le rognage se fait dans le navigateur, sans téléversement.',
      h1: 'Couper l’audio — Couper des fichiers audio',
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
      {
        q: 'Puis-je couper un fichier local depuis Claude ou Cursor ?',
        a: 'Cette page coupe dans le navigateur avec la Web Audio API. Vous n’installez rien. /mcp tourne sur votre ordinateur et appelle ffmpeg. Le début et la fin sont en secondes. Le WAV correspond aux échantillons décodés. Le MP3 est encodé une fois. L’application de chat voit quand même le chemin et les arguments.',
      }],
      screenshotsAlt: [
        'Couper l’audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Couper l’audio : espace de travail avec le fichier chargé',
        'Couper l’audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Marquez la partie à garder',
          paragraphs: [
            'Faites glisser sur la forme d’onde. Le début et la fin se mettent à jour pendant le glissement, et vous pouvez saisir les deux temps quand la souris ou le doigt n’est pas assez précis. Appuyez sur lecture pour n’entendre que ce passage avant d’enregistrer.',
            'Exportez en WAV si vous comptez rogner ou modifier encore. Exportez en MP3 quand le clip est terminé. Une découpe en WAV garde les échantillons sélectionnés. Une découpe en MP3 encode une fois, au débit que vous choisissez.',
          ],
        },
        {
          heading: 'Rogner un enregistrement ou couper une chanson',
          paragraphs: [
            'Cette page sert à raccourcir un enregistrement : une réponse de podcast, une note vocale, un cours, le milieu d’un fichier long.',
          ],
          bullets: [
            'Cette page et la page [couper un MP3](/mp3-cutter) sont le même éditeur. Les deux gardent ou suppriment la sélection. La page du coupeur est celle écrite pour un refrain ou une intro.',
            'Une sonnerie, limitée à 40 secondes, avec M4R seulement quand ce navigateur sait encoder l’AAC, c’est la page [créer une sonnerie iPhone](/ringtone-maker). Cette page ne l’installe pas sur un téléphone.',
            'Un fondu de 0 à 5 secondes sur un fichier, c’est [fondu audio](/fade-audio). Cette page ne fait pas de fondu.',
          ],
        },
        {
          heading: 'Ce que la découpe fait au son',
          paragraphs: [
            'Le fichier est décodé, le passage est extrait, et l’export est réécrit. Le WAV est du PCM 16 bits de ce passage. Le MP3 l’encode une fois. Le débit par défaut de cette page est 192 kbps.',
            'Cette page ne change pas la puissance sonore. Un fichier plus fort, de 10 % à 400 %, c’est [augmenter le volume](/increase-volume).',
          ],
        },
        {
          heading: 'Quelle durée un fichier peut avoir',
          paragraphs: [
            'Un fichier de plus de 300 Mo est refusé. Un fichier de plus d’une heure s’ouvre quand même, et la page prévient que l’onglet peut manquer de mémoire. Cet avertissement n’est pas une limite de durée.',
          ],
          bullets: [
            'Une note vocale ou une réponse de podcast : rognez-la ici, sur le téléphone si vous préférez.',
            'Un épisode complet : un ordinateur est l’endroit le plus stable pour prévisualiser et exporter.',
            'Une vidéo : c’est la bande sonore qui est rognée. L’image n’est pas enregistrée.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Rogner et télécharger',
    },
    'mp3-cutter': {
      cardLine: 'Coupez un morceau sur le refrain, le drop ou n’importe quel extrait, sans réencodage.',
      name: 'Couper un MP3',
      shortName: 'Couper un MP3',
      title: 'Couper MP3 — couper de la musique en ligne, garder ou supprimer',
      description:
        'Coupe la musique MP3 en ligne : garde le refrain ou supprime l’intro. L’export WAV est identique au bit près, le MP3 encode une seule fois jusqu’à 320 kbps. Les fichiers de plus de 300 Mo sont refusés.',
      h1: 'Couper un MP3 — couper un MP3 en ligne, gratuitement',
      heroAlt: 'Couper un MP3 en ligne gratuitement',
      subtitle: 'Coupez chansons et fichiers MP3 en ligne : gardez le passage voulu, supprimez le reste.',
      intro:
        'Réduisez une chanson à son refrain, supprimez une longue intro ou isolez un moment fort — directement dans votre navigateur. Choisissez de garder la partie sélectionnée ou de la supprimer, écoutez le résultat et enregistrez un nouveau MP3 en quelques secondes.',
      usesHeading: 'Cas courants de découpe MP3',
      uses: [
        'Couper les refrains : sortir le hook d’une chanson et l’enregistrer comme fichier à part.',
        'Retirer les intros : couper les intros longues et les mentions publicitaires du début.',
        'Préparer une sonnerie : couper le bon passage, puis en faire un M4R de 40 secondes dans le [créateur de sonneries](/ringtone-maker).',
        'Montage musical : recarder un extrait d’entraînement ou retirer un passage inutile.',
        'Nettoyer une émission : retirer la lecture pub du début et garder l’épisode.',
        'Faire des samples : découper un petit sample WAV depuis un long MP3.',
      ],
      why: [
        {
          icon: 'scissors',
          title: 'Deux sorties, pas de mode',
          text: 'Après avoir marqué le passage, deux boutons côte à côte : «{keep}» le garde, «{delete}» le retire — chaque bouton affiche la durée exportée en direct.',
        },
        {
          icon: 'lock-simple',
          title: 'Ton original ne bouge pas',
          text: 'La découpe se fait en mémoire, rien n’est envoyé. Le WAV est identique au bit près et le MP3 n’encode qu’une fois, jusqu’à 320 kbps.',
        },
      ],
      howTo: [
        { name: 'Ajoute ton MP3', text: 'Dépose un MP3 dans le cadre pointillé ou clique pour parcourir. La plupart des autres formats audio et vidéo se décodent aussi, sur ton appareil.' },
        { name: 'Marque le passage', text: 'Trace une sélection sur la forme d’onde ou tape les temps exacts. «Garder la sélection» garde le passage, «Supprimer la sélection» le retire — bascule quand tu veux.' },
        { name: 'Clique «{export}»', text: 'Le bouton principal de la barre d’export. Le WAV est identique au bit près et le MP3 encode une fois jusqu’à 320 kbps. «Lecture» pour écouter avant.' },
        { name: 'Récupère le fichier', text: 'Le téléchargement part tout seul et le nom porte le suffixe -edited. Les fichiers de plus de 300 Mo sont refusés.' },
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
        {
        q: 'Peut-on couper une chanson depuis YouTube ?',
        a: 'Non. Cette page traite un fichier de cet appareil et n’accepte pas de lien. Extraire l’audio d’une plateforme de streaming va généralement contre leurs conditions. Ne coupez que des chansons que vous possédez ou pour lesquelles vous avez l’autorisation.',
        },
      ],
      screenshotsAlt: [
        'Couper un MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Couper un MP3 : espace de travail avec le fichier chargé',
        'Couper un MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Gardez la partie marquée ou supprimez-la',
          paragraphs: [
            'Faites glisser sur la forme d’onde pour marquer un passage. Les temps se mettent à jour pendant le glissement, et vous pouvez saisir un début et une fin quand le pointeur n’est pas assez précis.',
            'Les deux modes font des choses opposées.',
          ],
          bullets: [
            'Garder la sélection : le fichier enregistré ne contient que le passage marqué. C’est le refrain, le drop ou la seule réponse que vous voulez d’un long enregistrement.',
            'Supprimer la sélection : le fichier enregistré contient tout sauf ce passage. C’est ainsi que vous retirez les 30 premières secondes, une intro ou une pub lue.',
          ],
        },
        {
          heading: 'Couper un MP3 ou rogner un enregistrement',
          paragraphs: [
            'Cette page coupe un passage dans une chanson. Le sélecteur accepte aussi les vidéos MP4, WebM et MOV : c’est la bande sonore qui est coupée. Le résultat est un nouveau MP3 ou un WAV 16 bits.',
            'La page [couper l’audio](/audio-trimmer) est le même éditeur, écrit pour un podcast ou une note vocale. Utilisez cette page pour couper un MP3. Utilisez le rogneur quand le fichier n’est pas une chanson.',
          ],
        },
        {
          heading: 'Ce que la coupe fait au son',
          paragraphs: [
            'Le WAV est du PCM 16 bits des échantillons gardés. Le MP3 encode ce passage une fois. Le débit par défaut de cette page est 192 kbps.',
            'Le fichier est décodé, le passage est extrait, et l’export est réécrit. Si vous modifiez encore le fichier, exportez en WAV. Les deux curseurs de fondu adoucissent les bords de coupe quand le clip a besoin d’un début ou d’une fin plus doux.',
          ],
        },
        {
          heading: 'Ce que ce coupeur ne fait pas',
          paragraphs: [
            'Il coupe un fichier. Il ne fait pas de fondu enchaîné sur une playlist et n’empile pas plusieurs pistes l’une sur l’autre.',
          ],
          bullets: [
            'Réunir plusieurs chansons dans un fichier, c’est [fusionner l’audio](/audio-joiner).',
            'Un clip limité à 40 secondes, téléchargé comme sonnerie, c’est la page [créer une sonnerie iPhone](/ringtone-maker). Cette page ne l’installe pas sur un téléphone.',
            'Le titre, l’artiste et la pochette, c’est l’[éditeur de tags MP3](/mp3-tag-editor), une fois la coupe faite.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier MP3 ou vidéo, ou cliquez pour le parcourir',
      exportLabel: 'Couper et télécharger',
    },
    'mp3-editor': {
      cardLine: 'Des retouches rapides en un seul onglet : couper, fondre, inverser, accélérer, normaliser.',
      name: 'Éditeur MP3',
      shortName: 'Éditeur MP3',
      title: 'Éditeur MP3 — couper, fondre et changer la vitesse',
      description:
        'Coupez, ajoutez un fondu et changez la vitesse dans un seul onglet. Le fichier d’origine reste intact, et la vitesse entraîne la hauteur.',
      h1: 'Éditeur MP3 — couper, fondre et changer la vitesse',
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Éditeur MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Éditeur MP3 : espace de travail avec le fichier chargé',
        'Éditeur MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Ce que cet éditeur change vraiment',
          paragraphs: [
            'Cette page est l’éditeur MP3 général : coupez un passage, ajoutez un fondu aux extrémités, changez le volume ou la vitesse, ou inversez le fichier, puis exportez un nouveau MP3. Le fichier déposé n’est jamais écrasé.',
            'Ici, la vitesse déplace la hauteur tonale avec le tempo. Une voix plus aiguë ou plus grave à la même durée, c’est le [changeur de hauteur tonale](/pitch-changer). Un fichier plus léger, sans cette modification, c’est [compresser l’audio](/compress-audio).',
          ],
        },
        {
          heading: 'Quand ouvrir plutôt une page spécialisée',
          paragraphs: [
            'L’éditeur est le bon point de départ quand le travail mêle plusieurs petites coupes et changements de niveau. Une tâche unique a un chemin plus court :',
          ],
          bullets: [
            'Une chanson, garder un refrain : la page [couper un MP3](/mp3-cutter) est le même éditeur garder-ou-supprimer.',
            'Un podcast ou une note vocale : la page [couper l’audio](/audio-trimmer) est ce même éditeur.',
            'Le titre, l’artiste ou la pochette seulement : l’[éditeur de tags MP3](/mp3-tag-editor) copie les octets audio et ne change que les tags.',
          ],
        },
        {
          heading: 'Exporter et annuler',
          paragraphs: [
            'L’export écrit un nouveau MP3. Le WAV du menu est du PCM 16 bits des échantillons modifiés.',
            'Ctrl+Z (Cmd+Z sur Mac) revient sur les dernières modifications. Réinitialiser recharge le fichier déposé. Fermer l’onglet abandonne la session, car rien n’est stocké sur un serveur.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
    },
    'ringtone-maker': {
      cardLine: 'Transformez les 30 secondes les plus accrocheuses d’une chanson en sonnerie iPhone ou Android.',
      name: 'Créer une sonnerie iPhone',
      shortName: 'Sonneries',
      title: 'Créer une sonnerie iPhone en ligne — M4R gratuit',
      description:
        'Transformez une chanson en sonnerie : les 40 meilleures secondes, un fondu, export M4R ou MP3. Gratuit, sans inscription, rien n’est téléversé.',
      h1: 'Créer une sonnerie iPhone — Faire une sonnerie iPhone à partir d’une chanson',
      heroAlt: 'Garder jusqu’à 40 secondes d’une chanson en M4R ou en MP3',
      howToIntro: 'Une chanson entre, une sonnerie sort',
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
          a: 'Ajoutez un court fondu de sortie sur la page : le retour au début sonne naturel au lieu de se couper en pleine note. Écrire ce clip 2 à 16 fois dans un fichier plus long, c’est la boucle audio. Cette page reste dans les 40 secondes.',
        },
        {
          q: 'Y a-t-il un filigrane ou une limite ?',
          a: 'Ni filigrane, ni inscription, ni plafond quotidien. La sonnerie est rendue sur votre propre appareil et téléchargée directement depuis le navigateur.',
        },
      ],
      screenshotsAlt: [
        'Créer une sonnerie iPhone : zone de dépôt, rien n’est envoyé sur un serveur',
        'Créer une sonnerie iPhone : espace de travail avec le fichier chargé',
        'Créer une sonnerie iPhone : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Comment une chanson devient une sonnerie',
          paragraphs: [
            'Un glissement de plus de 40 secondes est ramené à 40. La page indique alors : sélection limitée à 40 secondes, la longueur classique d’une sonnerie.',
            'Ajoutez un fondu à chaque extrémité, de 0 à 5 secondes, par pas de 0,1. À 0, l’extrémité reste inchangée.',
          ],
        },
        {
          heading: 'Quel fichier le téléphone accepte',
          paragraphs: [
            'Le menu commence à MP3 192 kbps.',
          ],
          bullets: [
            'Le M4R est de l’AAC-LC, deux canaux au maximum, à 192 kbps. Il n’apparaît que si ce navigateur sait encoder l’AAC.',
            'Sinon, le menu propose du MP3 à 320, 192 ou 128 kbps, ou du WAV 16 bits.',
            'Le menu ne contient ni 64 ni 96 kbps. Cette page ne fait que télécharger le fichier.',
          ],
          table: {
            headers: [
              'Type de tonalité',
              'Durée qui fonctionne',
              'Pourquoi',
            ],
            rows: [
              [
                'Sonnerie',
                '40 secondes ou moins',
                'Cette page limite le glissement à 40 s, la longueur classique d’une sonnerie',
              ],
              [
                'Tonalités de message et d’alerte',
                'Quelques secondes',
                'Une alerte doit s’identifier, pas jouer la chanson',
              ],
              [
                'Alarme',
                'Aussi longtemps que vous voulez',
                'Exportez en MP3 ou WAV 16 bits ; cette page ne fixe aucune limite',
              ],
              [
                'Sonnerie Android',
                'Courte, pour que la boucle reste propre',
                'Le MP3 de cette page fonctionne ; le téléphone boucle depuis le début',
              ],
            ],
          },
        },
        {
          heading: 'Ce que cette page ne fait pas',
          paragraphs: [
            'Elle ne téléverse pas la chanson et n’installe pas la tonalité sur le téléphone. Vous téléchargez un fichier.',
            'Une chanson complète, sans la limite de 40 secondes, c’est [couper un MP3](/mp3-cutter).',
          ],
        },
      ],
      dropHint: 'Déposez une chanson ou cliquez pour la parcourir',
      exportLabel: 'Faire une sonnerie',
    },
    'audio-joiner': {
      cardLine: 'Assemblez mémos vocaux, chansons ou épisodes de podcast en un seul fichier continu.',
      name: 'Fusionner l’audio',
      shortName: 'Fusionner l’audio',
      title: 'Fusionner l’audio — dans l’ordre, avec fondu',
      description:
        'Placez des chansons, des chapitres ou des mémos vocaux dans l’ordre et exportez un fichier. Un fondu à zéro fait une jointure nette. Aucun téléversement.',
      h1: 'Fusionner l’audio — un fichier après l’autre',
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous ajoutez les fichiers, puis vous les montez ou les descendez avec les boutons. On les appuie au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Plusieurs fichiers longs prennent plus de mémoire, donc une longue pile est plus stable sur un ordinateur.',
        },
      {
        q: 'Puis-je assembler des fichiers locaux depuis Claude ou Cursor ?',
        a: 'Cette page assemble dans le navigateur. Le curseur de crossfade va de 0 à 5 secondes, par pas de 0.5. /mcp assemble 2 à 20 fichiers locaux avec ffmpeg, crossfade de 0 à 5 secondes, et écrit du stéréo à 44100 Hz. Il n’affiche pas de forme d’onde. L’application de chat voit quand même les chemins.',
      }],
      screenshotsAlt: [
        'Fusionner l’audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Fusionner l’audio : espace de travail avec le fichier chargé',
        'Fusionner l’audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Réunir, c’est un fichier après l’autre',
          paragraphs: [
            'Le joigneur place des fichiers entiers à la suite : chanson, puis note vocale, puis le chapitre suivant. Vous pouvez réordonner la liste et régler un fondu enchaîné pour que la fin de l’un chevauche le début du suivant.',
            'Mettez le fondu enchaîné à zéro pour une coupe nette sans silence. Les formats mélangés sont décodés et écrits dans un seul export. Ce n’est pas une table de mixage : les pistes ne jouent pas en même temps.',
          ],
        },
        {
          heading: 'Les tâches adaptées à cette page',
          paragraphs: [
            'Utilisez-la quand le résultat doit être un seul fichier qu’un lecteur ouvre sans playlist :',
          ],
          bullets: [
            'Une note vocale devant une chanson, dans l’ordre que vous choisissez.',
            'Des chapitres enregistrés réunis pour un lecteur sans playlist.',
            'Des clips à la suite avec un court fondu enchaîné pour que les jointures ne claquent pas.',
          ],
        },
        {
          heading: 'Quand il vous faut plutôt des couches',
          paragraphs: [
            'Voix sur musique, un niveau et un panoramique par clip, mute et solo : c’est l’éditeur multipiste, jusqu’à huit pistes. Le joigneur ne sait pas baisser la musique sous la parole.',
            'Il n’y a pas de nombre fixe de fichiers. Le plafond est la mémoire de l’appareil, car la fusion reste dans le navigateur. Rien n’est téléversé.',
          ],
        },
      ],
      dropHint: 'Déposez au moins deux fichiers audio, ou cliquez pour les parcourir',
    },
    'wav-to-mp3': {
      cardLine: 'Réduisez des enregistrements WAV lourds en MP3 partageables, au débit de votre choix.',
      name: 'Convertir WAV en MP3',
      shortName: 'WAV vers MP3',
      title: 'Convertir WAV en MP3 — dans votre navigateur, gratuitement',
      description:
        'Convertissez WAV en MP3 dans votre navigateur : 128, 192 ou 320 kbps. Gratuit, sans inscription — conversion locale, jamais téléversée.',
      h1: 'Convertir WAV en MP3 — Convertir un WAV en MP3',
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
          text: 'Glissez un fichier .wav sur la page ou cliquez pour parcourir. Les autres formats audio (M4A, FLAC, OGG) se convertissent de la même façon. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je convertir plus d’un WAV ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      {
        q: 'Puis-je convertir un WAV local depuis Claude ou Cursor ?',
        a: 'Cette page convertit dans le navigateur à 128-320 kbps. /mcp appelle ffmpeg sur un fichier déjà présent sur votre ordinateur. MP3, M4A et OGG peuvent être à 64, 96, 128, 192, 256 ou 320 kbps, et la valeur par défaut est 192. Le WAV est du PCM 16 bits. Le FLAC est sans perte. L’application de chat voit quand même le chemin.',
      }],
      screenshotsAlt: [
        'Convertir WAV en MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertir WAV en MP3 : espace de travail avec le fichier chargé',
        'Convertir WAV en MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Quel débit choisir',
          paragraphs: [
            'Le MP3 jette une partie du WAV. Le débit indique combien il en garde.',
          ],
          bullets: [
            'Le menu propose 64, 96, 128, 192 et 320 kbps.',
            'Cette page démarre à 320.',
            'Le MP3 encode une fois les échantillons décodés. Les tags ne sont pas copiés.',
          ],
        },
        {
          heading: 'Combien le MP3 est plus petit',
          paragraphs: [
            'Un WAV stocke chaque échantillon. Un MP3 stocke une version compressée de ce que vous entendez. Un WAV de 50 Mo arrive autour de 4 à 5 Mo à 192 kbps, et autour de 11 Mo à 320 kbps. La taille exacte suit la durée et la fréquence d’échantillonnage.',
            'Si vous avez encore besoin de l’original, gardez le WAV. Cette page existe pour que la copie partagée joue sur un téléphone, une voiture et une vieille enceinte, et pour que le fichier soit assez petit pour être envoyé.',
          ],
        },
        {
          heading: 'Le titre, l’artiste et la pochette ne sont pas copiés',
          paragraphs: [
            'Le MP3 est écrit sans les métadonnées du WAV. Le titre, l’artiste et la pochette ne passent pas. Ajoutez-les ensuite dans l’éditeur de tags MP3 si le lecteur afficherait sinon un nom vide.',
            'Les fichiers M4A, FLAC et OGG déposés ici se convertissent de la même façon. Le FLAC a sa propre page si c’est le format de départ. Cette page est celle du WAV.',
          ],
        },
        {
          heading: 'Convertir d’abord, rogner ensuite',
          paragraphs: [
            'Cette page convertit le fichier entier. Elle ne découpe pas un passage dans le WAV.',
          ],
          bullets: [
            'Besoin d’une minute d’un long enregistrement : convertissez, puis ouvrez le rogneur audio.',
            'Le fichier est déjà un MP3 et vous le voulez seulement plus petit : utilisez compresser l’audio, pas cette page.',
            'Vous modifiez encore après la conversion : 320 kbps, ou gardez le WAV et modifiez-le.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers WAV ou cliquez pour les parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'flac-to-mp3': {
      cardLine: 'Convertissez vos FLAC sans perte en MP3 pour les lecteurs et applis qui ignorent le FLAC.',
      name: 'Convertir FLAC en MP3',
      shortName: 'FLAC vers MP3',
      title: 'Convertir FLAC en MP3 — en ligne et gratuitement',
      description:
        'Convertissez FLAC en MP3 dans votre navigateur : 128, 192 ou 320 kbps. Gratuit, sans inscription — conversion locale, jamais téléversée.',
      h1: 'Convertir FLAC en MP3 — Convertir un FLAC en MP3',
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
          text: 'Glissez un fichier .flac sur la page ou cliquez pour le parcourir. Les autres formats sans perte se convertissent de la même façon. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
        },
        {
          name: 'Choisissez le débit',
          text: '320 kbps reste transparent pour presque tout le monde ; 192 kbps est le bon équilibre du quotidien ; 128 kbps garde les livres audio et podcasts légers.',
        },
        {
          name: 'Convertissez et téléchargez',
          text: 'Cliquez sur Convertir en MP3. L’encodeur tourne dans votre navigateur et le MP3 se télécharge directement sur votre appareil.',
        },
      ],
      faqs: [
        { q: 'Puis-je convertir plus d’un FLAC ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
        {
          q: 'Convertir du FLAC en MP3 fait-il perdre de la qualité ?',
          a: 'Le MP3 est destructif, une partie de l’information est abandonnée — mais à 320 kbps, pratiquement personne ne distingue le MP3 du FLAC à l’aveugle. Gardez le FLAC comme copie d’archive et traitez le MP3 comme la version de poche.',
        },
        {
          q: 'Quel débit choisir ?',
          a: '320 kbps pour la musique que vous gardez, 192 kbps pour l’écoute quotidienne et le partage, 128 kbps pour les livres audio, podcasts et enregistrements de cours — la parole a besoin de bien moins que la musique.',
        },
        {
          q: 'De combien le MP3 est-il plus léger ?',
          a: 'Un morceau typique de cinq minutes passe d’environ 25 Mo en FLAC à 12 Mo environ à 320 kbps, 7 Mo à 192 et 5 Mo à 128. Les chiffres exacts dépendent de la durée et de la fréquence d’échantillonnage.',
        },
        {
          q: 'Les tags et pochettes du FLAC sont-ils conservés ?',
          a: 'Pas pour l’instant — le MP3 est écrit sans métadonnées : titre, artiste et pochette ne voyagent pas avec le fichier. Vous pouvez les rajouter ensuite avec n’importe quel éditeur de tags.',
        },
        {
          q: 'Mon FLAC est-il téléversé quelque part ?',
          a: 'Non. Le fichier est décodé dans votre navigateur et encodé en MP3 par une bibliothèque livrée avec ce site. L’audio ne quitte jamais votre appareil.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Convertir FLAC en MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertir FLAC en MP3 : espace de travail avec le fichier chargé',
        'Convertir FLAC en MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Pourquoi convertir du FLAC en MP3',
          paragraphs: [
            'Le FLAC est sans perte et volumineux. Le MP3 est ce que la plupart des téléphones, voitures et anciens lecteurs ouvrent vraiment. Un FLAC de 25 Mo arrive souvent près de 12 Mo à 320 kbps, et plus petit à 192 ou 128.',
            'La conversion décode le FLAC et encode un nouveau MP3. Gardez le FLAC si vous avez encore besoin de ce fichier.',
          ],
        },
        {
          heading: 'Le débit et ce qui est abandonné',
          paragraphs: [
            'Le menu de format est MP3 uniquement, à trois débits :',
          ],
          bullets: [
            '320 kbps quand le fichier doit rester proche du FLAC à l’écoute.',
            '192 kbps pour la parole ou une copie plus petite à diffuser en streaming.',
            '128 kbps quand la taille compte plus que l’octave supérieure.',
          ],
        },
        {
          heading: 'Tags, pochette et modification suivante',
          paragraphs: [
            'Le titre, l’artiste et la pochette ne sont pas copiés. Le MP3 est écrit sans métadonnées. Remettez-les avec l’éditeur de tags MP3 après l’export.',
            'Rognez ou coupez après la conversion, pas avant, si vous voulez la modification sur le fichier plus petit. WAV vers MP3 est la page voisine quand la source est un WAV, pas un FLAC.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers FLAC ou cliquez pour les parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'mp3-to-wav': {
      cardLine: 'Décompressez un MP3 en WAV pour monter, transcrire ou écouter finement.',
      name: 'Convertir MP3 en WAV',
      shortName: 'MP3 vers WAV',
      title: 'Convertir MP3 en WAV — en ligne et gratuitement',
      description:
        'Convertissez MP3 en WAV sans perte dans votre navigateur — pour éditer, archiver et les applis qui exigent du PCM. Gratuit, sans inscription.',
      h1: 'Convertir MP3 en WAV — Transformer un MP3 en fichier WAV',
      heroAlt: 'Décoder un MP3 en WAV non compressé',
      subtitle: 'Décodez le MP3 en audio PCM propre en quelques secondes — dans votre navigateur, sans téléversement.',
      intro:
        'Convertir du MP3 en WAV ne rend pas ce que la compression a enlevé — aucun outil ne le peut. Vous obtenez l’audio décodé en PCM 16 bits propre, sans nouvelle perte : la bonne entrée pour les éditeurs audio, les samplers et tout ce qui exige du WAV, et le point de départ le plus sûr si le fichier doit être retravaillé. Le décodage se fait sur votre appareil, en une seconde en général.',
      usesHeading: 'Les raisons de passer au WAV',
      uses: [
        'Donner un MP3 à un éditeur, une DAW ou une appli qui n’accepte que le WAV.',
        'Arrêter la perte de génération : montez en WAV et ne recompressez en MP3 qu’à la toute fin.',
        'Archiver une copie décodée à côté de l’original avant de nouvelles retouches.',
      ],
      howTo: [
        {
          name: 'Déposez votre MP3',
          text: 'Glissez un fichier .mp3 sur la page ou cliquez pour le parcourir. Les autres formats compressés se décodent de la même façon. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je convertir plus d’un MP3 en WAV ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
        {
          q: 'Convertir du MP3 en WAV améliore-t-il la qualité ?',
          a: 'Non — et méfiez-vous de tout convertisseur qui le promet. Ce que l’encodeur a jeté n’existe plus. Le WAV contient exactement ce que le MP3 décode, et c’est justement pourquoi c’est le bon format pour retravailler : il n’ajoute pas une nouvelle génération destructive.',
        },
        {
          q: 'Alors pourquoi convertir en WAV ?',
          a: 'Pour éditer et archiver. Le WAV est le format qu’attendent les éditeurs audio, les samplers et les outils de gravure, et un master sans perte évite d’empiler les artefacts à chaque traitement. La méthode honnête : décoder en WAV, monter, exporter en MP3 une seule fois à la fin.',
        },
        {
          q: 'Tous les débits MP3 fonctionnent-ils ?',
          a: 'Tous — le décodage est exact pour n’importe quel MP3 valide, de 64 à 320 kbps. Le WAV contiendra simplement ce que le MP3 a, à sa fréquence d’échantillonnage d’origine.',
        },
        {
          q: 'Quelle sera la taille du WAV ?',
          a: 'Environ dix fois celle du MP3. Une chanson de trois minutes en 44,1 kHz stéréo fait dans les 30 Mo en PCM 16 bits — c’est la taille réelle de l’audio non compressé, pas une inefficacité du convertisseur.',
        },
        {
          q: 'Mon MP3 est-il téléversé quelque part ?',
          a: 'Non. Le fichier est décodé dans votre navigateur et écrit en WAV localement. Rien ne quitte votre appareil.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Convertir MP3 en WAV : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertir MP3 en WAV : espace de travail avec le fichier chargé',
        'Convertir MP3 en WAV : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'MP3 vers WAV ne restaure pas ce que le MP3 a jeté',
          paragraphs: [
            'La page décode le MP3 en WAV PCM 16 bits. Les éditeurs et DAW qui refusent le MP3 peuvent ouvrir ce WAV. Les aigus manquants de l’encodage d’origine ne reviennent pas.',
            'Utilisez-la quand l’étape suivante ne doit pas ajouter une nouvelle génération MP3 : coupez, ajoutez un fondu ou mixez le WAV, puis encodez une fois à la fin.',
          ],
        },
        {
          heading: 'Quand la conversion vaut le coup',
          paragraphs: [
            'Le menu de format exporte uniquement du WAV. C’est le bon choix dans quelques cas concrets :',
          ],
          bullets: [
            'Un programme ou un enregistreur matériel qui n’accepte que le WAV.',
            'Une modification que vous encoderez une fois plus tard, pour ne pas empiler du MP3 sur du MP3.',
            'Un envoi à quelqu’un qui a demandé du PCM, pas un MP3 plus petit.',
          ],
        },
        {
          heading: 'La taille et le sens inverse',
          paragraphs: [
            'Le WAV est bien plus gros que le MP3. Cette taille est le PCM non compressé, pas un détail nouveau.',
            'Dans l’autre sens, WAV vers MP3, c’est une autre page, et elle choisit un débit. Réduire un MP3 sans le convertir en WAV, c’est le compresseur audio.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers MP3 ou cliquez pour les parcourir',
      exportLabel: 'Convertir en WAV',
    },
    'compress-audio': {
      cardLine: 'Réduisez vos gros fichiers audio à la taille ou au débit visé, sans nuire à l’écoute.',
      name: 'Compresser l’audio',
      shortName: 'Compresseur',
      title: 'Compresser l’audio — réduire la taille MP3/WAV en ligne',
      description:
        'Allégez vos fichiers MP3, WAV et autres audios dans votre navigateur — choisissez un débit plus bas, écoutez, téléchargez. Gratuit, sans téléversement.',
      h1: 'Compresser l’audio — Réduire la taille d’un MP3',
      heroAlt: 'Réencoder un gros WAV ou MP3 à un débit plus bas',
      howToIntro: 'Le compresseur sur un vrai fichier',
      subtitle: 'Baissez le débit, le fichier reste lisible — allégez l’audio jusqu’à 90 % dans votre navigateur.',
      intro:
        'Un fichier audio pèse par son débit, et la façon honnête de l’alléger est de le réencoder à un débit plus bas : un MP3 à 320 kbps passe à 128 kbps pour environ 40 % de sa taille, et un gros WAV devient un MP3 dix fois plus léger. Choisissez la cible, écoutez l’aperçu, exportez — l’encodage tourne sur votre appareil, même les longs enregistrements se terminent en quelques secondes.',
      usesHeading: 'Des fichiers à alléger',
      uses: [
        'Faire tenir un cours ou un mémo vocal sous la limite de taille d’un mail ou d’une messagerie.',
        'Transformer un export WAV en petits MP3 pour un lien de relecture rapide.',
        'Faire passer une bibliothèque 320 kbps à 128 kbps pour un téléphone en données mobiles.',
      ],
      howTo: [
        {
          name: 'Déposez votre fichier',
          text: 'Ajoutez un MP3, WAV, M4A ou autre fichier audio. Il est décodé sur votre appareil et jamais téléversé. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
        },
        {
          name: 'Choisissez la taille cible',
          text: 'Débit plus bas, fichier plus léger : 192 kbps pour la musique du quotidien, 128 kbps reste propre pour la plupart des oreilles, 64–96 kbps est idéal pour la parole.',
        },
        {
          name: 'Écoutez et exportez',
          text: 'Écoutez l’aperçu compressé puis enregistrez. Vérifiez que les voix et les cymbales restent propres au débit choisi.',
        },
      ],
      faqs: [
        { q: 'Puis-je réduire plus d’un fichier ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
        {
          q: 'Comment fonctionne la compression audio ici ?',
          a: 'Le fichier est décodé puis réencodé en MP3 au débit choisi. La taille suit le débit : une minute de stéréo pèse environ 2,4 Mo à 320 kbps, 1 Mo à 128 et 0,5 Mo à 64.',
        },
        {
          q: 'Quel débit garde une bonne qualité ?',
          a: '192 ou 320 kbps pour la musique qui compte ; 128 kbps pour l’écoute décontractée — la plupart des gens ne distinguent pas le 320 à l’aveugle. La voix et les podcasts restent clairs jusqu’à 64–96 kbps.',
        },
        {
          q: 'La compression peut-elle dégrader la qualité ?',
          a: 'Oui, dans un cas précis : réencoder un MP3 déjà compressé à un débit bien plus bas empile une seconde génération destructive sur la première. Compresser depuis du WAV ou du FLAC est plus propre — l’original conservé, vous pouvez toujours réessayer un autre débit.',
        },
        {
          q: 'Jusqu’où peut-on compresser ?',
          a: '64 kbps est le plancher pratique : environ 0,5 Mo par minute. La parole reste parfaitement claire ; la musique commence à sonner mate et sifflante. En dessous, des codecs dédiés comme Opus font mieux que le MP3.',
        },
        {
          q: 'Mon fichier est-il téléversé quelque part ?',
          a: 'Non. Le décodage et l’encodage se déroulent dans l’onglet de votre navigateur — vous pouvez couper internet après le chargement de la page, la compression continue de fonctionner.',
        },
        {
          q: 'Cela égalise-t-il les passages forts et faibles ?',
          a: 'Non. Cette page ne fait que réencoder à un débit plus bas pour que le fichier prenne moins de place. Pour baisser les crêtes et relever les mots faibles, utilisez le compresseur de niveau. Le débit de cet export reste celui que vous choisissez.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Compresser l’audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Compresser l’audio : espace de travail avec le fichier chargé',
        'Compresser l’audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Ce compresseur réduit le fichier, pas la dynamique',
          paragraphs: [
            'Compresser l’audio réencode à un débit MP3 plus bas. Un fichier de 320 kbps à 128 kbps fait environ 40 pour cent de la taille. Les passages calmes et forts gardent le même rapport.',
            'Égaliser une voix forte et une voix faible, c’est le compresseur de niveau, une autre page. Lui ne réduit pas le fichier.',
          ],
        },
        {
          heading: 'Quel débit choisir',
          paragraphs: [
            'Le menu va de 320 à 64 kbps. Choisissez selon ce qu’est le fichier :',
          ],
          bullets: [
            '192 ou 320 kbps pour de la musique que vous écouterez encore attentivement.',
            '128 kbps pour la parole, une note vocale ou une copie à envoyer.',
            '64 ou 96 kbps seulement quand la destination est minuscule et que la parole suffit.',
          ],
          table: {
            headers: [
              'Destination du fichier',
              'Plafond',
              'Réglage suggéré',
            ],
            rows: [
              [
                'Pièce jointe Gmail',
                '25 Mo (comptes personnels)',
                '128 kbps : une note de 10 minutes arrive près de 10 Mo',
              ],
              [
                'Telegram',
                '2 Go, ou 4 Go avec Premium',
                'Tous les débits passent ; choisissez 128 kbps pour économiser les données mobiles',
              ],
              [
                'Votre propre cible',
                'Vous décidez',
                'Une minute fait environ 1 Mo à 128 kbps, environ 0,5 à 64',
              ],
            ],
          },
          outro: [
            'Les plafonds bougent : ces deux-là ont été vérifiés en octobre 2026. Les applis de messagerie gardent les médias audio sous des plafonds plus stricts que les documents, et les plafonds changent sans préavis ; le calcul par minute ci-dessus tient dans les deux cas.',
          ],
        },
        {
          heading: 'Ce que coûte un second encodage',
          paragraphs: [
            'Chaque passage jette un peu plus. Si le fichier est déjà à 128 kbps, le réencoder à 128 n’aide pas, et l’encoder plus bas le rend plus terne.',
            'Les tags et la pochette ne font pas partie de cette réduction. Si le MP3 est déjà petit et que vous voulez seulement un nouveau titre ou une pochette, utilisez l’éditeur de tags MP3, qui copie les octets audio sans les changer.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers audio ou cliquez pour les parcourir',
      exportLabel: 'Compresser',
    },
    'bitrate-converter': {
      cardLine: 'Réencodez n’importe quel audio en MP3 à 64, 96, 128, 192 ou 320 kbps.',
      name: 'Convertisseur de débit',
      shortName: 'Débit',
      title: 'Convertisseur de débit — MP3 de 64 à 320 kbps',
      description:
        'Passez un audio en MP3 à 64, 96, 128, 192 ou 320 kbps dans le navigateur. Un chiffre plus haut ne restitue pas le détail. Rien n’est téléversé.',
      h1: 'Convertisseur de débit : réglez un MP3 de 64 à 320 kbps',
      heroAlt: 'Cinq barres de débit, celle du milieu marquée à 192 kbps',
      subtitle: 'Réglez un MP3 à 64, 96, 128, 192 ou 320 kbps. Un chiffre plus haut ne restitue pas le détail.',
      intro:
        'Choisissez le débit MP3 et réencodez le fichier dans cet onglet. Le menu s’ouvre à 192 kbps. Une minute de stéréo pèse environ 2,4 Mo à 320 kbps, 1,4 Mo à 192, 1 Mo à 128, 0,7 Mo à 96 et 0,5 Mo à 64. Monter le chiffre sur un fichier déjà avec perte ne restitue pas le détail manquant. Le décodage et l’encodage restent dans le navigateur.',
      usesHeading: 'À quoi sert cette page',
      uses: [
        'Répondez à une commande qui demande 192 ou 128 kbps, puis exportez ce fichier.',
        'Passez un WAV en MP3 à 320 kbps, le débit le plus proche sur cette page.',
        'Descendez de 320 kbps à 128 kbps, environ 40 % de la taille.',
      ],
      howTo: [
        { name: 'Ajoutez le fichier', text: 'Déposez un audio que ce navigateur sait décoder. La conversion reste dans l’onglet. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.' },
        { name: 'Choisissez le débit', text: 'Ouvrez le menu de format. Il commence à 192 kbps. Les autres débits sont 320, 128, 96 et 64.' },
        { name: 'Exportez le MP3', text: 'Le fichier est encodé au débit que vous avez choisi. Les tags et la pochette ne sont pas copiés.' },
      ],
      faqs: [
        { q: 'Puis-je changer le débit de plus d’un fichier ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
        {
          q: '320 kbps rend-il meilleur un MP3 à 128 kbps ?',
          a: 'Non. L’encodeur ne garde que ce que la source a encore. Un MP3 à 128 kbps enregistré de nouveau à 320 kbps est un fichier plus lourd de la même prise. Partez du WAV ou de l’enregistrement d’origine si vous voulez le détail.',
        },
        {
          q: 'Quel débit choisir ?',
          a: '320 kbps pour une musique que vous écouterez encore de près, 192 comme débit à l’ouverture du menu, 128 pour la voix ou un fichier à envoyer, et 96 ou 64 seulement quand la destination est petite et que la voix suffit. Une minute de stéréo pèse environ 2,4 Mo, 1,4 Mo, 1 Mo, 0,7 Mo et 0,5 Mo à ces cinq débits.',
        },
        {
          q: 'Quelle différence avec compresser l’audio ?',
          a: 'Le même encodeur, un autre travail. Cette page fixe un débit et s’ouvre à 192 kbps. Compresser l’audio sert à réduire le fichier et s’ouvre à 128 kbps. WAV vers MP3 n’accepte que le WAV et s’ouvre à 320 kbps.',
        },
        {
          q: 'Puis-je convertir en WAV ou en Opus ici ?',
          a: 'Non. Cette page écrit un MP3 à 320, 192, 128, 96 ou 64 kbps. Le WAV n’est pas un débit. Pour une copie WAV, utilisez MP3 vers WAV. Opus et AAC ne sont pas dans le menu.',
        },
        {
          q: 'Mon fichier est-il envoyé ?',
          a: 'Non. Le navigateur décode le fichier et encode le MP3 dans cet onglet, avec le même encodeur local que compresser l’audio. Une fois la page chargée, la conversion continue sans réseau.',
        },
        {
          q: 'Est-ce que ça marche sur un téléphone ?',
          a: 'Oui. Choisissez le fichier, la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier très long utilise plus de mémoire, un ordinateur tient mieux au-delà d’une heure environ.',
        },
      ],
      screenshotsAlt: [
        'Convertisseur de débit : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertisseur de débit : espace de travail avec le fichier chargé',
        'Convertisseur de débit : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Ce que pèsent les cinq débits',
          paragraphs: [
            'Le menu propose 320, 192, 128, 96 et 64 kbps, à débit constant. Une minute de stéréo fait environ 2,4 Mo, 1,4 Mo, 1 Mo, 0,7 Mo et 0,5 Mo dans cet ordre. La page s’ouvre à 192 kbps.',
            'Un WAV n’a pas de débit propre, donc le nombre choisi est le premier passage avec perte. Un fichier MP3, M4A, OGG ou Opus a déjà perdu quelque chose, et ce passage en perd un peu plus.',
          ],
        },
        {
          heading: 'Quel débit convient à la tâche',
          paragraphs: [
            'Choisissez selon ce qui arrive ensuite au fichier, pas selon le plus grand nombre du menu.',
          ],
          bullets: [
            '320 kbps quand la source est un WAV et que vous voulez rester proche.',
            '192 kbps comme débit musical ordinaire, celui sur lequel le menu s’ouvre.',
            '128, 96 ou 64 kbps pour la parole, une note ou une copie qui doit être petite.',
          ],
        },
        {
          heading: 'Un nombre plus haut n’est pas une restauration',
          paragraphs: [
            'Encoder un MP3 de 128 kbps à 320 kbps stocke les mêmes manques dans un fichier plus gros. Le seul moyen de retrouver les aigus manquants est une source qui les a encore.',
            'C’est le même encodeur que compresser l’audio. Utilisez cette page quand le but est un fichier plus petit et que le débit de départ importe peu. Utilisez WAV vers MP3 quand la source est un WAV et que vous voulez 320 kbps sans le choisir.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers audio, ou cliquez pour parcourir',
      exportLabel: 'Convertir',
    },
    'reverse-audio': {
      cardLine: 'Lisez une piste à l’envers pour créer des effets, vérifier un mix ou simplement jouer.',
      name: 'Audio à l’envers',
      shortName: 'Audio à l’envers',
      title: 'Audio à l’envers — écouter une chanson à l’envers, gratuit',
      description:
        'Écoutez une chanson à l’envers dans votre navigateur : un clic pour inverser, aperçu immédiat, export MP3 ou WAV — gratuit, rien n’est téléversé.',
      h1: 'Audio à l’envers — Jouer une chanson à l’envers',
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
      screenshotsAlt: [
        'Audio à l’envers : zone de dépôt, rien n’est envoyé sur un serveur',
        'Audio à l’envers : espace de travail avec le fichier chargé',
        'Audio à l’envers : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'L’inversion joue les échantillons à l’envers',
          paragraphs: [
            'La page retourne l’audio sélectionné pour que la fin joue en premier. Vous pouvez inverser tout le fichier ou seulement la sélection. L’inversion elle-même ne change ni la puissance sonore ni la hauteur tonale.',
            'L’export reste un encodage. Le WAV garde le PCM inversé sans génération MP3. Le MP3 écrit un nouveau fichier de l’audio inversé.',
          ],
        },
        {
          heading: 'À quoi cela sert',
          paragraphs: [
            'C’est une inversion simple, pas un décodeur de message caché ni un séparateur de pistes :',
          ],
          bullets: [
            'Une cymbale ou un coup inversé comme entrée.',
            'Vérifier une phrase à l’oreille, sélection seule, puis annuler.',
            'Un fichier entier retourné pour une passe de design sonore.',
          ],
        },
        {
          heading: 'Ce qui reste identique',
          paragraphs: [
            'Annuler revient en arrière. Réinitialiser recharge le fichier déposé. Le fichier d’origine sur le disque n’est pas écrasé.',
            'Si le but est une chanson plus lente ou une voix plus grave, l’inversion n’est pas le bon réglage. La vitesse change la hauteur tonale avec le tempo. Le changeur de hauteur garde la durée.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Inverser et télécharger',
    },
    'change-audio-speed': {
      cardLine: 'Accélérez un cours à 2× ou ralentissez un riff pour l’apprendre — la tonalité reste juste.',
      name: 'Ralentir une chanson',
      shortName: 'Vitesse audio',
      title: 'Ralentir une chanson — accélérer ou ralentir un audio',
      description:
        'Accélérez un cours ou ralentissez une chanson de 0,5× à 2×. Aperçu dans votre navigateur, export MP3 ou WAV. La hauteur tonale suit le tempo.',
      h1: 'Ralentir une chanson — Accélérer ou ralentir l’audio',
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
          a: 'Oui — vitesse et hauteur tonale avancent ensemble, comme un disque lu plus vite ou plus lentement : 2× sonne environ une octave plus haut, 0,5× environ une octave plus bas. Le changeur de tempo garde la hauteur et change la durée, de 0,75× à 1,25× par pas de 0,01. Pour changer la hauteur sans changer la durée, utilisez le changeur de hauteur.',
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Ralentir une chanson : zone de dépôt, rien n’est envoyé sur un serveur',
        'Ralentir une chanson : espace de travail avec le fichier chargé',
        'Ralentir une chanson : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La vitesse et la hauteur tonale bougent ensemble',
          paragraphs: [
            'Ce réglage joue le fichier plus vite ou plus lentement comme une bande, de 0,5× à 2×. Plus vite donne un fichier plus court et une hauteur plus aiguë. Plus lent donne un fichier plus long et une hauteur plus grave. 2× est environ une octave au-dessus, 0,5× environ une octave en dessous.',
            'Garder la hauteur tonale quand la durée change, c’est [changer le tempo](/tempo-changer), de 0,75× à 1,25×. Cette page déplace quand même la hauteur avec la vitesse. Une voix plus aiguë ou plus grave à la même durée, c’est le [changeur de hauteur tonale](/pitch-changer), jusqu’à 12 demi-tons.',
          ],
        },
        {
          heading: 'Où le réglage est utile',
          paragraphs: [
            'Utilisez-le quand le changement de hauteur est acceptable, ou même voulu :',
          ],
          bullets: [
            'Un cours ou une note vocale que vous voulez traverser plus vite, voix de dessin animé comprise.',
            'Une passe plus lente pour transcrire, avec la voix qui descend.',
            'Un aperçu rapide d’un clip à un autre tempo avant l’export.',
          ],
        },
        {
          heading: 'Les chansons ralenties sont l’autre page',
          paragraphs: [
            'La page [Slowed + reverb](/slowed-reverb) est ce même réglage de vitesse plus une réverbération de 2,2 secondes. La hauteur suit toujours la vitesse. Cette page ne fait que la vitesse.',
            'Au-delà de 100 pour cent sur la page ralentie, c’est la direction nightcore. Faites-le là-bas si vous voulez aussi le réglage de réverbe. Exportez ici si vous voulez seulement la nouvelle durée.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Changer la vitesse et télécharger',
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
        { q: "En quoi est-ce différent du mesureur de loudness ?", a: "Cette page multiplie tout le fichier par la quantité que vous choisissez. Le mesureur de loudness lit les LUFS intégrés — le niveau du fichier, pas celui de la pièce — et peut aligner −16, −14 ou −23 sans pousser la crête d’échantillon au-delà de −1 dBFS. Aucune des deux pages n’égalise le fort et le faible." },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Augmenter le volume MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Augmenter le volume MP3 : espace de travail avec le fichier chargé',
        'Augmenter le volume MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Un MP3 trop faible',
          paragraphs: [
            'Augmenter le volume MP3 multiplie le fichier, jusqu’à 400 pour cent, environ +12 dB. Au-delà de 100 pour cent, un limiteur empêche les crêtes de saturer durement.',
            'Le même type de gain pour une bande sonore vidéo ou tout autre format, c’est le booster de volume. Cette page est celle du MP3. Les fichiers vidéo se décodent souvent encore ici.',
          ],
        },
        {
          heading: 'Ce que le multiplicateur ne fait pas',
          paragraphs: [
            'C’est un gain unique pour tout le fichier. Ce n’est pas une norme de puissance sonore et cela n’égalise pas la dynamique :',
          ],
          bullets: [
            'Une cible podcast de −16 LUFS : mesurez-la sur le [mesureur de loudness](/loudness-meter). Si la crête d’échantillon dépasserait −1 dBFS, cette page arrête le gain.',
            'Une crête déjà près du maximum, et le reste trop faible : [normaliser l’audio](/normalize-audio) place cette crête à 0,98, plafonné à 4×. Elle ne relèvera pas davantage les passages faibles.',
            'Des passages forts et faibles qui doivent se rapprocher : le [compresseur de niveau](/compressor), pas ce curseur.',
          ],
        },
        {
          heading: 'Exporter',
          paragraphs: [
            'Vous obtenez un nouveau fichier. Le MP3 déposé reste où il était. Pousser un fichier déjà fort touche surtout le limiteur et peut sonner plat.',
            'Si le MP3 est faible parce que c’est un long silence avec une phrase courte, rognez ou coupez d’abord, puis montez ce qui reste.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Augmenter et télécharger',
    },
    'mp4-to-mp3': {
      cardLine: 'Enregistrez la bande-son d’un clip, d’une capture d’écran ou d’une vidéo caméra en MP3.',
      name: 'Convertir MP4 en MP3',
      shortName: 'MP4 vers MP3',
      title: 'Convertir MP4 en MP3 — extraire l’audio d’une vidéo',
      description:
        'Convertissez MP4 en MP3 dans votre navigateur. La bande-son est extraite en local, jamais téléversée. Gratuit, rapide, sans inscription.',
      h1: 'Convertir MP4 en MP3 — Convertir une vidéo en MP3',
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
          text: 'Glissez un MP4 sur la page ou cliquez pour parcourir. Les fichiers WebM et MOV avec pistes audio standards fonctionnent de la même façon. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je convertir plus d’une vidéo ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
        {
          q: 'Peut-on convertir une vidéo depuis YouTube ou une autre plateforme ?',
          a: 'Non. Cette page lit un fichier choisi sur cet appareil et n’accepte pas de lien. Télécharger l’audio d’une plateforme de streaming va généralement contre leurs conditions. Ne convertissez que des vidéos que vous avez tournées ou pour lesquelles vous avez l’autorisation.',
        },
        {
          q: 'Faut-il installer une application ?',
          a: 'Non. Le convertisseur fonctionne dans cet onglet du navigateur, sur ordinateur comme sur téléphone. Rien à installer, aucun compte à créer.',
        },
      ],
      screenshotsAlt: [
        'Convertir MP4 en MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertir MP4 en MP3 : espace de travail avec le fichier chargé',
        'Convertir MP4 en MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Seule la bande sonore est convertie',
          paragraphs: [
            'Un MP4 est un conteneur. L’image et le son sont des pistes séparées. Cette page décode le son et écrit un MP3. L’image n’est jamais encodée, téléversée ni enregistrée.',
            'L’image n’est pas décodée, donc la résolution ne fait pas partie de la conversion. Le fichier reste sur cet appareil. Un fichier de plus de 300 Mo est refusé.',
          ],
        },
        {
          heading: 'Quel débit MP3 utiliser',
          paragraphs: [
            'La bande sonore est encodée une fois, au débit que vous choisissez.',
          ],
          bullets: [
            'Le menu propose 64, 96, 128, 192 et 320 kbps. Cette page démarre à 320.',
            'Le WAV est du PCM 16 bits des échantillons décodés. Le MP3 encode ces échantillons une fois.',
            'Le titre, l’artiste et la pochette ne sont pas copiés.',
          ],
        },
        {
          heading: 'MP4 vers MP3, ou extraire l’audio',
          paragraphs: [
            'L’export démarre en MP3 à 320 kbps. Les fichiers WebM et MOV s’ouvrent seulement si ce navigateur sait décoder la bande sonore. Passez le format en WAV pour une copie 16 bits. La page écrite pour le WAV par défaut est [extraire l’audio d’une vidéo](/extract-audio).',
            'Si vous n’avez besoin que d’une minute, convertissez toute la bande sonore ici, puis utilisez [couper l’audio](/audio-trimmer). Cette page ne découpe pas un passage dans la vidéo.',
          ],
        },
        {
          heading: 'Les fichiers que le navigateur ne sait pas lire',
          paragraphs: [
            'Si ce navigateur ne peut pas décoder la bande sonore, le message est : ce fichier n’a pas pu être décodé, il est peut-être corrompu ou son codec n’est pas pris en charge par votre navigateur. Il ne nomme pas le codec.',
            'Le MP3 ne garde ni le titre ni la vignette de la vidéo. Définissez le nom de la piste ensuite dans l’[éditeur de tags MP3](/mp3-tag-editor) si vous voulez qu’il apparaisse dans un lecteur.',
          ],
        },
        {
          heading: 'Cette page, VLC ou un site de téléversement',
          paragraphs: [
            'Trois routes transforment une vidéo en MP3. Choisissez selon la taille du fichier et la fréquence de conversion. Détails vérifiés sur les services en ligne le 2026-10-28.',
          ],
          table: {
            headers: [
              '',
              'Cette page',
              'VLC sur ordinateur',
              'Sites de téléversement',
            ],
            rows: [
              [
                'Installation',
                'Rien',
                'Oui',
                'Non',
              ],
              [
                'Le fichier quitte l’appareil',
                'Non',
                'Non',
                'Oui',
              ],
              [
                'Limite de taille',
                '300 Mo par fichier',
                'Espace disque libre',
                'Variable selon le service',
              ],
              [
                'Plusieurs fichiers',
                'Oui, un ZIP',
                'Un à la fois',
                'Variable selon le service',
              ],
              [
                'Coût',
                'Gratuit',
                'Gratuit',
                'Limites de l’offre gratuite',
              ],
            ],
          },
          outro: [
            'Un lot nocturne d’enregistrements d’une heure convient mieux à un programme de bureau.',
            'Une bande sonore ponctuelle convient à cette page : rien à installer, et la vidéo ne quitte jamais l’appareil.',
          ],
        },
      ],
      dropHint: 'Déposez des MP4 ou des fichiers vidéo, ou cliquez pour les parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'extract-audio': {
      cardLine: 'Extrayez un audio propre de n’importe quelle vidéo pour monter, transcrire ou sampler.',
      name: 'Extraire l’audio d’une vidéo',
      shortName: 'Extraire l’audio d’une vidéo',
      title: 'Extraire l’audio d’une vidéo — l’enregistrer en MP3 ou WAV',
      description:
        'Extrayez la piste audio d’une vidéo dans votre navigateur, en MP3 ou WAV sans perte. Gratuit, sans téléversement, même pour les gros fichiers.',
      h1: 'Extraire l’audio d’une vidéo — Extraire un MP3 d’une vidéo',
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
          text: 'N’importe quel MP4, WebM ou MOV avec une bande-son standard fonctionne. Le fichier ne quitte jamais votre appareil. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je extraire l’audio de plus d’une vidéo ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous choisissez le fichier, et la conversion reste dans cet onglet. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      {
        q: 'Puis-je extraire une piste locale depuis Claude ou Cursor ?',
        a: 'Cette page extrait une piste que le navigateur sait décoder. AC3 et DTS sont refusés ici. /mcp utilise ffmpeg, donc un format s’ouvre seulement si votre build ffmpeg contient ce décodeur. Il ne récupère pas une vidéo depuis un lien. L’application de chat voit quand même le chemin.',
      },
        {
          q: 'Peut-on extraire l’audio d’une vidéo YouTube ?',
          a: 'Non. Cette page lit un fichier choisi sur cet appareil et n’accepte pas de lien. Enregistrer l’audio d’une plateforme de streaming va généralement contre leurs conditions. Ne traitez que des vidéos que vous avez tournées ou pour lesquelles vous avez l’autorisation.',
        },
      ],
      screenshotsAlt: [
        'Extraire l’audio d’une vidéo : zone de dépôt, rien n’est envoyé sur un serveur',
        'Extraire l’audio d’une vidéo : espace de travail avec le fichier chargé',
        'Extraire l’audio d’une vidéo : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Sortir la bande sonore d’une vidéo',
          paragraphs: [
            'Extraire l’audio décode la bande sonore et abandonne l’image. L’export démarre en MP3 à 192 kbps. Le menu contient aussi du WAV.',
            'La page [convertir MP4 en MP3](/mp4-to-mp3) suit le même chemin de décodage, en démarrant à 320 kbps.',
          ],
        },
        {
          heading: 'Ce qui sort, et ce qui ne sort pas',
          paragraphs: [
            'Seule la piste audio est décodée. Les images de la vidéo sont écartées :',
          ],
          bullets: [
            'Une vidéo de téléphone ou un enregistrement d’écran devient un fichier que vous pouvez rogner, réunir ou étiqueter.',
            'Le WAV est du PCM 16 bits des échantillons décodés. Le MP3 encode ces échantillons une fois.',
            'Si ce navigateur ne peut pas décoder la bande sonore, le message ne nomme pas le codec.',
          ],
        },
        {
          heading: 'Elle ne coupe pas le son de la vidéo',
          paragraphs: [
            'Cette page garde le son et abandonne les images. Elle ne rend pas une vidéo.',
            'Un fichier de plus de 300 Mo est refusé. L’image n’est pas décodée, donc la résolution ne fait pas partie de la conversion. Rien n’est téléversé.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers vidéo ou cliquez pour les parcourir',
      exportLabel: 'Extraire l’audio',
    },
    'voice-recorder': {
      cardLine: 'Enregistrez réunions, cours et idées directement dans le navigateur, sans installer d’appli.',
      name: 'Dictaphone en ligne',
      shortName: 'Dictaphone',
      title: 'Dictaphone en ligne — enregistrer sa voix en MP3',
      description:
        'Enregistrez votre micro dans le navigateur, rognez et sauvegardez en MP3 ou WAV. Gratuit, privé — rien n’est téléversé.',
      h1: 'Dictaphone en ligne — Enregistrer le micro en MP3',
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
      screenshotsAlt: [
        'Dictaphone en ligne : zone de dépôt, rien n’est envoyé sur un serveur',
        'Dictaphone en ligne : espace de travail avec le fichier chargé',
        'Dictaphone en ligne : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Le micro reste dans le navigateur',
          paragraphs: [
            'Le dictaphone utilise le MediaRecorder de cet onglet. La prise n’est pas téléversée. Si vous fermez l’onglet avant d’exporter, l’enregistrement disparaît.',
            'Le format de capture dépend du navigateur. L’export propose MP3 ou WAV, donc le fichier gardé est celui que vous avez choisi, pas ce que le navigateur a enregistré en interne.',
          ],
        },
        {
          heading: 'Après la prise',
          paragraphs: [
            'Vous pouvez rogner en gardant une sélection, puis exporter ce passage :',
          ],
          bullets: [
            'Coupez le souffle avant le premier mot et le silence après le dernier.',
            'Exportez en WAV si vous modifierez encore la prise et voulez encoder une seule fois.',
            'Exportez en MP3 si la note doit seulement être envoyée ou stockée en petit.',
          ],
        },
        {
          heading: 'Ce qu’il ne fait pas',
          paragraphs: [
            'Il lui faut un navigateur qui implémente MediaRecorder et l’autorisation d’utiliser le micro. Il ne transcrit pas. La parole vers texte, c’est la page [transcrire un audio en texte](/audio-to-text), et elle prend un fichier, pas un micro en direct.',
            'Un enregistrement trop faible reste faible après l’export. Montez-le avec [amplifier le volume](/volume-booster), ou vérifiez le niveau sur le [mesureur de loudness](/loudness-meter) si la destination est une cible podcast.',
          ],
        },
      ],
      dropHint: 'Ou déposez un enregistrement existant pour le monter',
    },
    'volume-booster': {
      cardLine: 'Rendez forts et propres musique et bandes-son trop faibles, jusqu’à 4×.',
      name: 'Amplifier le volume',
      shortName: 'Amplifier le volume',
      title: 'Amplifier le volume — vidéos et musique plus fortes, gratuit',
      description:
        'Musiques trop faibles et bandes-son jusqu’à 4× plus puissantes, dans votre navigateur. Un limiteur garde le son propre — gratuit, sans téléversement.',
      h1: 'Amplifier le volume — Rendre un audio ou une vidéo plus forts',
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
          q: 'En quoi est-ce différent du compresseur de niveau ?',
          a: 'Cette page multiplie tout le fichier : l’écart entre fort et faible reste le même. Le compresseur de niveau réduit cet écart, puis remet la crête en place. Utilisez cette page quand tout est trop faible. Utilisez le compresseur quand certains passages crient et d’autres disparaissent.',
        },
        { q: "En quoi est-ce différent du mesureur de loudness ?", a: "Tirer ce curseur multiplie chaque échantillon. Le mesureur de loudness mesure les LUFS intégrés et propose podcast −16, streaming −14 et diffusion −23. Si la crête d’échantillon dépassait −1 dBFS, le gain s’arrête. Ce n’est pas un sonomètre de pièce." },
      ],
      screenshotsAlt: [
        'Amplifier le volume : zone de dépôt, rien n’est envoyé sur un serveur',
        'Amplifier le volume : espace de travail avec le fichier chargé',
        'Amplifier le volume : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Rendre l’audio plus fort sans le grésillement',
          paragraphs: [
            'Un fichier sature quand un échantillon tente de dépasser le plafond numérique, 0 dBFS. L’amplification multiplie chaque échantillon. Si le moment le plus fort était déjà près de ce plafond, une forte amplification coupe le sommet et vous entendez un grésillement.',
            'Au-delà de 100 %, cette page applique un limiteur : seuil −2 dB, knee 3, ratio 20, attaque 0,002 seconde, relâchement 0,15 seconde. Le curseur va de 10 % à 400 %.',
          ],
          bullets: [
            'Le curseur va de 10 % à 400 %, par pas de 5.',
            'Au-delà de 100 %, le limiteur du paragraphe ci-dessus s’applique. À 100 % ou moins, il ne s’applique pas.',
            'Une crête mesurée, plafonnée à 4×, c’est [normaliser l’audio](/normalize-audio).',
            'Cette page écrit un fichier plus fort. Elle ne change pas le volume des haut-parleurs de l’ordinateur.',
          ],
        },
        {
          heading: 'Une crête plus haute n’est pas un fichier plus fort',
          paragraphs: [
            'Le niveau de crête est l’échantillon le plus fort. Une interview chuchotée avec une seule toux peut culminer près du maximum et rester faible à l’écoute, parce que le reste du fichier est bas. Multiplier le fichier monte le chuchotement et la toux ensemble.',
            'La force ressentie sur toute la durée, c’est ce que mesure le LUFS. Cette page ne vise pas un nombre LUFS. Le mesureur de loudness le fait : il lit le LUFS intégré et peut amener un fichier près de −16 pour un podcast, −14 pour le streaming ou −23 pour la diffusion, et il s’arrête si la crête d’échantillon dépasserait −1 dBFS.',
          ],
        },
        {
          heading: 'Amplifier, normaliser ou compresser',
          paragraphs: [
            'Trois pages de ce site changent le niveau, et elles ne se remplacent pas.',
          ],
          bullets: [
            'Amplifier le volume, cette page : vous choisissez le multiplicateur, de 10 % à 400 %, et au-delà de 100 % le limiteur de la section précédente tient les crêtes. Les fichiers vidéo sont acceptés ici. L’image n’est pas enregistrée.',
            '[Normaliser l’audio](/normalize-audio) : un gain mesuré pour que la crête la plus forte arrive à 0,98, plafonné à 4×.',
            '[Compresseur de niveau](/compressor) : baisse les moments forts et remonte les mots faibles, puis remet la crête, plafonnée à 0,98. Une amplification ne fait pas cela.',
          ],
        },
        {
          heading: 'Bandes sonores vidéo et enregistrements de téléphone',
          paragraphs: [
            'Déposez un MP4, WebM ou MOV : seule la bande sonore est décodée, amplifiée et enregistrée en MP3 ou WAV. L’image est ignorée. Si le navigateur ne sait pas lire le codec audio, extrayez d’abord l’audio.',
            'Un fichier amplifié est plus fort sur chaque appareil qui le joue. Le volume des haut-parleurs n’aide que l’appareil devant vous. Exportez en WAV si vous modifiez encore. Le MP3 encode une fois. L’amplification ne peut pas inventer un détail qu’un micro de téléphone faible n’a jamais capté, et elle monte aussi le souffle déjà présent.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou vidéo, ou cliquez pour le parcourir',
      exportLabel: 'Augmenter et télécharger',
    },
    'normalize-audio': {
      cardLine: 'Ramenez tout un lot d’enregistrements à un niveau constant et sain.',
      name: 'Normaliser l’audio',
      shortName: 'Normaliser',
      title: 'Normaliser l’audio — égaliser le niveau, gratuitement',
      description:
        'Normalisez l’audio à un niveau crête homogène dans votre navigateur : MP3, WAV, M4A et plus. Un clic, gratuit, rien n’est téléversé.',
      h1: 'Normaliser l’audio — Normaliser le volume d’un MP3',
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
          text: 'N’importe quel MP3, WAV, M4A ou autre fichier audio. Il est décodé et analysé en local — rien ne quitte votre appareil. Plusieurs fichiers partagent le bouton Normaliser. Chacun monte jusqu’à son propre pic. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je normaliser plus d’un fichier ?', a: 'Oui. Quand Normaliser est activé, chaque fichier de la file l’utilise. Chacun est mesuré pour lui-même et monte jusqu’à son propre pic, l’un après l’autre sur cet appareil. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      {
        q: 'Puis-je normaliser un fichier local depuis Claude ou Cursor ?',
        a: 'Cette page relève le pic dans le navigateur, vers -0.2 dB. /mcp lance loudnorm de ffmpeg une fois, à -16 LUFS, -1.5 dBTP et LRA 11. C’est une passe, pas une seconde passe mesurée. L’application de chat voit quand même le chemin.',
      }],
      screenshotsAlt: [
        'Normaliser l’audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Normaliser l’audio : espace de travail avec le fichier chargé',
        'Normaliser l’audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Un seul gain, visé sur la crête',
          paragraphs: [
            'La normalisation trouve l’échantillon le plus fort et applique un gain unique pour que cette crête arrive près de −0,2 dB. Tous les autres échantillons bougent du même montant. Les passages faibles ne reçoivent pas de hausse séparée.',
            'Ce n’est pas du LUFS. Une cible podcast de −16 LUFS, un flux près de −14 ou une diffusion près de −23, c’est le mesureur de loudness. Ce mesureur arrête aussi le gain suggéré si la crête d’échantillon dépasserait −1 dBFS.',
          ],
        },
        {
          heading: 'Quand normaliser est le bon choix',
          paragraphs: [
            'Utilisez-la quand tout le fichier est simplement trop faible et que rien ne culmine déjà :',
          ],
          bullets: [
            'Une note vocale enregistrée loin du micro, avec de la marge.',
            'Une piste qui doit approcher le maximum avant d’être envoyée.',
            'Un fichier que vous compresserez ou amplifierez ensuite, pour que la crête soit un plafond connu.',
          ],
        },
        {
          heading: 'Quand elle vous décevra',
          paragraphs: [
            'Si un clic ou une respiration est déjà près du maximum, la normalisation ne fait presque rien, car cette crête fixe le gain. Le compresseur de niveau rapproche le fort et le faible, puis aligne la crête.',
            'Rendre un fichier plus fort d’un facteur que vous choisissez, y compris au-delà de 100 % avec un limiteur, c’est amplifier le volume. La normalisation n’offre pas ce multiplicateur.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers audio ou cliquez pour les parcourir',
      exportLabel: 'Normaliser et télécharger',
    },
    'slowed-reverb': {
      cardLine: 'Offrez à n’importe quel morceau le son nocturne ralenti + réverbe, en un clic.',
      name: 'Slowed + reverb',
      shortName: 'Slowed + reverb',
      title: 'Slowed + reverb — créez un slowed reverb en ligne, gratuit',
      description:
        'Créez une édition slowed + reverb dans votre navigateur : ralentissez, ajoutez de la réverbe, exportez en MP3. Gratuit, rien n’est téléversé.',
      h1: 'Slowed + reverb — Ralentir une chanson et ajouter de la réverbe',
      heroAlt: 'Descendre un morceau vers 85 % et ajouter une queue d’écho douce',
      howToIntro: 'Plus lent, et dans une salle',
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
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Slowed + reverb : zone de dépôt, rien n’est envoyé sur un serveur',
        'Slowed + reverb : espace de travail avec le fichier chargé',
        'Slowed + reverb : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La hauteur descend parce que la vitesse descend',
          paragraphs: [
            'La vitesse va de 0,50 à 2,00 par pas de 0,05, et la hauteur suit. Garder la hauteur, c’est changer le tempo, et cette page s’arrête à 0,75 et 1,25.',
            'La pièce est une réponse impulsionnelle de 2,2 secondes. Un wet à 0 n’ajoute aucune pièce.',
          ],
          table: {
            headers: [
              'Vitesse',
              'Ce que cela donne',
              'Usage courant',
            ],
            rows: [
              [
                '0,95',
                'À peine plus lent ; la hauteur baisse un peu',
                'Les modifications qui ne doivent pas s’annoncer',
              ],
              [
                '0,90',
                'Le son ralenti classique : détendu, plus sombre',
                'Le son de la tendance slowed and reverb',
              ],
              [
                '0,85',
                'Lourd et rêveur, clairement baissé',
                'Les montages d’ambiance et les boucles',
              ],
              [
                'Au-dessus de 1,00',
                'Plus rapide et plus clair, territoire nightcore',
                'La même page, dans l’autre sens',
              ],
            ],
          },
        },
        {
          heading: 'Nightcore, c’est la même page dans l’autre sens',
          paragraphs: [
            'Poussez la vitesse au-delà de 100 pour cent et la hauteur monte avec elle :',
          ],
          bullets: [
            'Au-delà de 1,00, le fichier accélère et la hauteur monte avec lui.',
            'Une réverbe à 0 n’ajoute aucune pièce.',
            'La plage s’arrête à 0,50 et à 2,00.',
          ],
        },
        {
          heading: 'Le droit d’auteur et les outils voisins',
          paragraphs: [
            'Cette page change la vitesse et ajoute une pièce de 2,2 secondes. Elle ne vérifie pas si vous pouvez publier le fichier.',
            'La vitesse seule, de 0,5× à 2× et sans le réglage de réverbe, c’est la page [ralentir une chanson](/change-audio-speed). Une tonalité plus haute ou plus basse à la même durée, c’est le [changeur de hauteur tonale](/pitch-changer). Un écho comptable qui ne change pas la vitesse, c’est [ajouter un écho](/echo).',
          ],
        },
      ],
      dropHint: 'Déposez une chanson ou cliquez pour la parcourir',
      exportLabel: 'Ralentir et télécharger',
    },
    'fade-audio': {
      cardLine: 'Lissez fins de chansons et intros de podcast avec des fondus précis.',
      name: 'Fondu audio',
      shortName: 'Fondu',
      title: 'Fondu audio — fondu d’entrée et de sortie en ligne',
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
          text: 'Réglez le fondu d’entrée et le fondu de sortie sur la page : 1 à 3 s sonne naturel sur une chanson, 0,2 à 0,5 s sur une boucle.',
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
      {
        q: 'Puis-je appliquer un fondu à un fichier local depuis Claude ou Cursor ?',
        a: 'Cette page applique un fondu à un fichier dans le navigateur, de 0 à 5 secondes, par pas de 0.1. /mcp applique afade de ffmpeg de 0 à 30 secondes à chaque extrémité. Le MP3 est encodé une fois. L’application de chat voit quand même le chemin.',
      }],
      screenshotsAlt: [
        'Fondu audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Fondu audio : espace de travail avec le fichier chargé',
        'Fondu audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Les bords baissent, le milieu reste',
          paragraphs: [
            'Fondu audio dessine le volume dans le temps sur un fichier : un fondu d’entrée au début, un fondu de sortie à la fin, ou les deux. Le milieu n’est pas touché. Il n’y a ni réverbe ni changement de hauteur.',
            'Pour les chansons, 1 à 3 secondes sonnent souvent naturel. Les enregistrements live peuvent supporter 4 à 5 secondes. Les boucles et les sonneries veulent 0,2 à 0,5 seconde pour garder l’attaque. Prévisualisez le début et la fin avant d’exporter.',
          ],
        },
        {
          heading: 'À quoi sert un fondu',
          paragraphs: [
            'Utilisez-le quand la coupe est déjà faite et que le bord claque ou s’arrête net :',
          ],
          bullets: [
            'Une sonnerie ou une boucle qui ne doit pas claquer quand elle se répète.',
            'La fin d’une chanson ou d’une note vocale qui s’arrête trop durement.',
            'Le début d’un enregistrement qui commence à plein niveau.',
          ],
        },
        {
          heading: 'Pas un fondu enchaîné, pas un boost de volume',
          paragraphs: [
            'Mélanger la fin d’un morceau au début d’un autre, c’est [fusionner l’audio](/audio-joiner). Cette page fait entrer et sortir un seul fichier.',
            'La page [amplifier le volume](/volume-booster) monte tout le fichier d’un montant constant, de 10 % à 400 %. Un fondu est faible aux bords et plein au milieu. L’export est en MP3, à partir de 320 kbps, ou en WAV 16 bits. Le fichier déposé n’est pas modifié.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Appliquer le fondu et télécharger',
    },
    'tempo-changer': {
      cardLine: 'Changez la durée de 0,75× à 1,25×. La hauteur reste.',
      name: 'Changer le tempo',
      shortName: 'Tempo',
      title: 'Changer le tempo — garder la hauteur, gratuit',
      description: 'Changez la durée de 0,75× à 1,25× par pas de 0,01. La hauteur reste. 1× n’étire pas. Une harmonie dense peut sonner mince. Rien n’est envoyé.',
      h1: 'Changer le tempo — Changeur de tempo, la durée bouge et la hauteur reste',
      heroAlt: 'Changer la durée d’un fichier pendant que la hauteur reste',
      subtitle: 'De 0,75× à 1,25×, par pas de 0,01. La tonalité reste.',
      intro: 'Déposez un fichier et tirez la vitesse. Le fichier devient plus court ou plus long, et la hauteur revient à sa place. Le curseur s’arrête à 0,75× et à 1,25×. 1× laisse les échantillons et ne lance pas l’étirement. Une harmonie dense peut sonner mince. C’est la limite de ce décalage. Rien n’est envoyé.',
      usesHeading: 'Une durée nouvelle, la même tonalité',
      uses: [
        'Placez un morceau dans un créneau un peu plus court ou plus long sans déplacer la tonalité.',
        'Étirez un peu un mémo vocal. La voix reste à la même hauteur.',
        '1× exporte le fichier sans l’étirement.',
      ],
      howTo: [
        { name: 'Déposez le fichier', text: 'Ajoutez un MP3, un WAV, un M4A ou un autre audio. Il reste sur votre appareil.' },
        { name: 'Réglez le tempo', text: 'Tirez de 0,75× à 1,25×. Chaque pas vaut 0,01. 1,00× est le fichier déposé.' },
        { name: 'Écoutez et exportez', text: 'Lancez la lecture pour entendre la nouvelle durée à la hauteur d’origine, puis enregistrez en MP3 ou WAV.' },
      ],
      faqs: [
        { q: 'Le fichier est-il envoyé ?', a: 'Non. Le navigateur étire le fichier en mémoire. Une fois la page chargée, vous pouvez couper le réseau et exporter quand même un fichier déposé.' },
        { q: 'Est-ce le même son, juste plus long ou plus court ?', a: 'Une note seule reste proche. Une harmonie dense peut sonner mince. Le même décalage, passé environ 7 demi-tons, devient métallique, et ce curseur reste dans environ 5.' },
        { q: 'Puis-je aller plus lent que 0,75× ou plus vite que 1,25× ?', a: 'Non. Le curseur s’arrête là. 0,5× et 2× sont la page de vitesse, et la hauteur y suit la vitesse. 1× sur cette page n’étire pas.' },
        { q: 'Quelle différence avec la vitesse et le changeur de hauteur ?', a: 'La page de vitesse change la durée et la hauteur suit, de 0,5× à 2×. Le changeur de hauteur déplace la hauteur et garde la durée. Cette page change la durée et la hauteur reste.' },
        { q: 'Est-ce que cela marche sur un téléphone ?', a: 'Oui. Le curseur de vitesse et le bouton d’export acceptent un toucher dans Chrome, Edge, Firefox et Safari actuels.' },
      {
        q: 'Puis-je changer le tempo d’un fichier local depuis Claude ou Cursor ?',
        a: 'Cette page étire de 0.75× à 1.25× et garde la hauteur. /mcp utilise atempo de ffmpeg de 0.5× à 2× et garde aussi la hauteur. Le MP3 est encodé une fois. L’application de chat voit quand même le chemin.',
      }],
      screenshotsAlt: [
        'Changer le tempo : zone de dépôt, rien n’est envoyé sur un serveur',
        'Changer le tempo : espace de travail avec le fichier chargé',
        'Changer le tempo : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La durée change, la hauteur reste',
          paragraphs: [
            'La page rééchantillonne d’abord le fichier, donc la durée et la hauteur bougent ensemble. Elle décale ensuite la hauteur en arrière du même ratio. 0,8× devient 1,25 fois plus long, et la tonalité revient là où elle a commencé.',
            'Le curseur va de 0,75× à 1,25× par pas de 0,01. Il n’y a pas de réglage hors de cette plage. À 1×, l’étirement ne tourne pas, et l’export reste avec les échantillons déposés.',
          ],
        },
        {
          heading: 'Où la limite se voit',
          paragraphs: [
            'Une harmonie dense peut sonner mince. Une voix seule ou une note seule reste plus proche.',
          ],
          bullets: [
            'Le plus grand pas de ce curseur fait environ 5 demi-tons. Au-delà d’environ 7, ce décalage devient métallique.',
            'Un empilement d’accords est l’endroit où le son mince apparaît d’abord.',
            '1× correspond au fichier déposé. L’étirement est ignoré.',
          ],
        },
        {
          heading: 'La page vitesse et le changeur de hauteur',
          paragraphs: [
            'La page [ralentir une chanson](/change-audio-speed) va de 0,5× à 2× et la hauteur bouge avec le tempo. Utilisez-la quand ce changement de hauteur est le but.',
            'Le [changeur de hauteur tonale](/pitch-changer) déplace la tonalité et garde la durée, jusqu’à 12 demi-tons. Cette page fait l’inverse : la durée bouge, et la tonalité reste.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Changer le tempo',
    },
    'pitch-changer': {
      cardLine: 'Décalez la tonalité en demi-tons pour covers et mashups — à longueur inchangée.',
      name: 'Changeur de hauteur tonale',
      shortName: 'Hauteur tonale',
      title: 'Changeur de hauteur tonale — sans changer la vitesse',
      description:
        'Montez ou descendez la hauteur tonale d’une chanson ou d’une voix jusqu’à 12 demi-tons, sans changer la durée. Gratuit, sans téléversement.',
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
          a: 'Non. Le changeur de vitesse lit le fichier plus vite ou plus lentement, donc la hauteur suit et la durée change. Cette page ne déplace que la hauteur tonale. Le changeur de tempo change la durée et la hauteur reste, de 0,75× à 1,25×.',
        },
        {
          q: 'Le fichier est-il téléversé ?',
          a: 'Non. Le décalage est calculé dans votre navigateur et l’export est enregistré sur votre appareil.',
        },
        {
          q: 'Puis-je changer la tonalité d’une chanson pour éviter le copyright ?',
          a: 'Non — changer la tonalité ne supprime pas les droits liés à un enregistrement. Un téléversement transposé peut toujours être revendiqué et retiré. Changez la tonalité pour chanter ou pour le karaoké, et publiez de la musique dont vous détenez les droits.',
        },
        {
          q: 'Ça marche sur un téléphone ?',
          a: 'Oui. Vous faites glisser la forme d\'onde au doigt. Chrome, Edge, Firefox et Safari actuels décodent les formats courants sur iPhone et Android. Un fichier long prend plus de mémoire, donc au-delà d\'environ une heure l\'ordinateur est plus stable.',
        },
      ],
      screenshotsAlt: [
        'Changeur de hauteur tonale : zone de dépôt, rien n’est envoyé sur un serveur',
        'Changeur de hauteur tonale : espace de travail avec le fichier chargé',
        'Changeur de hauteur tonale : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La tonalité bouge, la durée reste',
          paragraphs: [
            'Le changeur de hauteur décale la tonalité de −12 à +12 demi-tons, pas à pas. C’est une octave dans chaque sens. Le fichier garde la même durée.',
            'La parole et un instrument seul restent utilisables plus loin qu’un mix dense. Un grand décalage sonne artificiel. Ce n’est pas un contournement du droit d’auteur : l’enregistrement reste le même enregistrement.',
          ],
        },
        {
          heading: 'Quand utiliser le curseur',
          paragraphs: [
            'La durée qui ne bouge pas est tout l’intérêt :',
          ],
          bullets: [
            'Une piste karaoké ramenée dans une tonalité que vous pouvez chanter.',
            'Une voix décalée d’un demi-ton ou deux pour s’accorder à une autre prise.',
            'Un décalage de design sonore où le timing du clip ne doit pas changer.',
          ],
        },
        {
          heading: 'La vitesse est l’autre commande',
          paragraphs: [
            'Le réglage de vitesse va de 0,5× à 2× et déplace la hauteur avec le tempo, comme un disque. 2× est environ une octave au-dessus et moitié moins long. Cette page ne fait pas cela.',
            'Slowed + reverb fait aussi descendre la hauteur en ralentissant le fichier, et ajoute une queue. Si vous voulez le son nightcore ou ralenti, c’est cette page. Si vous voulez la même durée et une nouvelle tonalité, restez ici.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Changer la hauteur et télécharger',
    },
    'm4a-to-mp3': {
      cardLine: 'Convertissez mémos vocaux iPhone et fichiers AAC en MP3 lisibles partout.',
      name: 'M4A vers MP3',
      shortName: 'M4A vers MP3',
      title: 'M4A vers MP3 — convertir M4A et AAC en ligne gratuitement',
      description:
        'Convertissez l’audio M4A et AAC en MP3 dans votre navigateur. Gratuit, sans compte, sans téléversement. Choisissez 128, 192 ou 320 kbps.',
      h1: 'M4A vers MP3 — Convertir un M4A en MP3',
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
          text: 'Glissez un .m4a ou .aac sur la page, ou cliquez pour parcourir. Un MP4 vidéo, lui, va sur la page MP4 vers MP3. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je convertir plus d’un M4A ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
      screenshotsAlt: [
        'M4A vers MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'M4A vers MP3 : espace de travail avec le fichier chargé',
        'M4A vers MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Notes vocales et AAC, pas une vidéo',
          paragraphs: [
            'Cette page décode un fichier M4A ou AAC et encode du MP3. Le sélecteur accepte aussi le MP4. Si cet onglet ne peut pas décoder le fichier, le message ne nomme pas le codec. Un fichier vidéo va sur [convertir MP4 en MP3](/mp4-to-mp3).',
            'Une vidéo MP4 appartient à convertir MP4 en MP3. Cette page retire la bande sonore de l’image. Ici, c’est de l’audio seulement.',
          ],
        },
        {
          heading: 'Ce que le MP3 garde',
          paragraphs: [
            'Le MP3 est avec perte. Le menu propose le choix de débit habituel :',
          ],
          bullets: [
            '320 kbps quand la note ou la chanson doit rester proche de l’AAC.',
            '192 kbps pour de la parole que vous écouterez encore.',
            '128 kbps quand le fichier doit surtout être assez petit pour être envoyé.',
          ],
        },
        {
          heading: 'Les tags ne sont pas copiés',
          paragraphs: [
            'Le titre, l’artiste et la pochette ne passent pas. Le MP3 est écrit sans métadonnées. Remettez-les avec l’éditeur de tags MP3 si le lecteur a besoin d’un nom.',
            'Gardez le M4A si vous avez encore besoin de l’original. La conversion ne téléverse pas le fichier. Rognez ou coupez après avoir le MP3, sur le rogneur ou le coupeur, si la note a du silence aux extrémités.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers M4A ou AAC, ou cliquez pour les parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'ogg-to-mp3': {
      cardLine: 'Rendez lisibles dans toutes les applis les OGG de clips de jeu ou d’enregistrements Linux.',
      name: 'Convertir OGG en MP3',
      shortName: 'OGG vers MP3',
      title: 'Convertir OGG en MP3 — convertisseur gratuit en ligne',
      description:
        'Convertissez vos fichiers OGG en MP3 dans votre navigateur. Gratuit, sans compte, sans téléversement. Vorbis ou Opus dans l’OGG, à 128, 192 ou 320 kbps.',
      h1: 'Convertir OGG en MP3 — Convertir un OGG en MP3',
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
          text: 'Glissez un .ogg ou .oga sur la page, ou cliquez pour parcourir. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je convertir plus d’un OGG ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
      screenshotsAlt: [
        'Convertir OGG en MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertir OGG en MP3 : espace de travail avec le fichier chargé',
        'Convertir OGG en MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Vorbis ou Opus dans un OGG',
          paragraphs: [
            'OGG est un conteneur. Les fichiers musicaux qu’il contient utilisent généralement Vorbis. Certains fichiers de voix utilisent Opus. Cette page convertit l’un ou l’autre quand le navigateur sait le décoder.',
            'Si cet onglet ne peut pas lire le fichier, cette page ne peut pas le décoder. Le menu démarre à 320 kbps. Les tags ne sont pas copiés.',
          ],
        },
        {
          heading: 'Le débit, et ce que vous abandonnez',
          paragraphs: [
            'Le MP3 est avec perte. À 320 kbps, la différence est faible pour la plupart des écoutes. Gardez l’OGG si vous avez besoin de l’original :',
          ],
          bullets: [
            '320 kbps pour de la musique que vous garderez.',
            '192 kbps pour un fichier de voix ou une copie plus petite.',
            '128 kbps quand la destination n’a besoin que de l’intelligibilité de la parole.',
          ],
        },
        {
          heading: 'Un fichier .opus, c’est l’autre page',
          paragraphs: [
            'Les notes vocales WhatsApp et Telegram sont souvent un fichier .opus, ou de l’Opus dans WebM. Elles relèvent de [Opus en MP3](/opus-to-mp3). Cette page est celle du conteneur OGG.',
            'Le titre, l’artiste et la pochette ne sont pas copiés. Le MP3 est écrit sans métadonnées. Rien n’est téléversé.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers OGG ou cliquez pour les parcourir',
      exportLabel: 'Convertir en MP3',
    },
    'opus-to-mp3': {
      cardLine: 'Convertissez appels et téléchargements Opus en MP3 acceptés par tous les lecteurs.',
      name: 'Opus en MP3',
      shortName: 'Opus vers MP3',
      title: 'Opus en MP3 — convertir les notes vocales WhatsApp',
      description:
        'Convertissez l’audio Opus en MP3 dans votre navigateur. Fichiers .opus et Opus dans OGG ou WebM. Gratuit, sans inscription ni téléversement.',
      h1: 'Opus en MP3 — notes vocales WhatsApp',
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
          text: 'Glissez un .opus sur la page, ou cliquez pour parcourir. Les fichiers OGG et WebM contenant de l’Opus fonctionnent de la même façon. Plusieurs fichiers partagent le réglage que vous choisissez ensuite. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP.',
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
        { q: 'Puis-je convertir plus d’un fichier Opus ?', a: 'Oui. Plusieurs fichiers partagent le réglage de cette page. Ils se convertissent l’un après l’autre sur cet appareil, et chaque fichier est libéré avant le suivant. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
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
      screenshotsAlt: [
        'Opus en MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Opus en MP3 : espace de travail avec le fichier chargé',
        'Opus en MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Des notes vocales que seuls certains lecteurs ouvrent',
          paragraphs: [
            'Opus est le codec de beaucoup de notes vocales WhatsApp et Telegram, enregistrées en .opus. Il se trouve aussi dans OGG et WebM. Cette page transforme cet audio en MP3 qu’une voiture, un téléphone ou un ancien lecteur ouvrira.',
            'Le sélecteur prend les .opus, l’Opus dans OGG et l’Opus dans WebM. Si cet onglet ne peut pas lire le fichier, cette page ne peut pas le décoder. Le menu démarre à 192 kbps.',
          ],
        },
        {
          heading: 'La parole n’a pas besoin de 320',
          paragraphs: [
            'Une note vocale est de la parole. Choisissez le débit pour cela :',
          ],
          bullets: [
            '128 kbps suffisent pour une note vocale que vous enverrez ou garderez.',
            '192 kbps si la note a de la musique sous la voix et que cela compte.',
            '320 kbps seulement quand le fichier Opus est de la musique et que vous voulez le MP3 proche.',
          ],
        },
        {
          heading: 'Les tags, et la page OGG',
          paragraphs: [
            'Le titre et l’artiste ne sont pas copiés. Le MP3 est écrit sans métadonnées. Un OGG qui est vraiment de la musique Vorbis relève de [convertir OGG en MP3](/ogg-to-mp3), la page nommée pour ce conteneur.',
            'Rien n’est téléversé. Si la note a un long silence aux extrémités, convertissez d’abord, puis rognez. Le réducteur de silence est le mauvais outil sur un fond musical calme, mais il convient à une note vocale avec de longues pauses.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers Opus ou cliquez pour les parcourir',
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
        { name: 'Réglez l’aspect', text: 'Choisissez un modèle, ou réglez le style et les couleurs. Indiquez le début et la fin si vous ne voulez qu’un passage. Préréglages : 1920×1080, carré, image sociale et bannière.' },
        { name: 'Téléchargez le PNG', text: 'L’aperçu est l’export. Les tailles préréglées sortent en double résolution pour rester nettes.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le navigateur décode le fichier et dessine l’image sur un canvas. Il n’y a pas d’envoi. Une fois la page chargée, ça marche aussi hors ligne.' },
        { q: 'Le PNG sera-t-il net ?', a: 'Les tailles préréglées exportent au double des pixels indiqués — une couverture 1920×1080 sort en 3840×2160. Le PNG est sans perte. Au-delà d’environ deux millions de pixels, une taille perso exporte en 1× pour ne pas saturer la mémoire.' },
        { q: 'Puis-je couper l’audio ici ?', a: 'Non. Cette page ne fait que dessiner. Pour couper ou rogner, utilisez le découpeur audio, puis revenez si vous voulez encore l’image.' },
        { q: 'Est-ce la même chose qu’un spectrogramme ?', a: 'Non. Une forme d’onde montre le volume dans le temps — la silhouette du lecteur. Un spectrogramme montre quelles fréquences sont présentes. Pour les voir, ouvrez le générateur de spectrogramme.' },
        { q: 'Puis-je avoir un fond transparent ?', a: 'Oui. Laissez « Fond transparent » activé : le PNG n’a pas de fond et se pose sur une vidéo ou une autre image. Désactivez-le pour peindre une couleur unie.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Sur un écran étroit les réglages s’empilent et le bouton de téléchargement reste à portée. Chrome, Edge, Firefox et Safari actuels, sur ordinateur et mobile.' },
      ],
      screenshotsAlt: [
        'Générateur de forme d’onde : la page avant tout fichier ou toute saisie',
        'Générateur de forme d’onde : après la lecture du fichier ou les taps',
        'Générateur de forme d’onde : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Une image de la force sonore, pas une modification',
          paragraphs: [
            'Le générateur de forme d’onde dessine la force sonore dans le temps : barres symétriques ou forme pleine, dans les couleurs que vous choisissez. Le téléchargement est un PNG. Les tailles prédéfinies s’exportent au double des pixels indiqués, donc une pochette 1920×1080 arrive en 3840×2160.',
            'Les tailles personnalisées au-delà d’environ deux millions de pixels s’exportent à 1× pour que l’onglet ne manque pas de mémoire. Le PNG est sans perte. Cette page ne coupe pas, ne fait pas de fondu et n’amplifie pas l’audio.',
          ],
        },
        {
          heading: 'Les formats que les gens téléchargent',
          paragraphs: [
            'Choisissez le cadre selon l’endroit où l’image sera placée :',
          ],
          bullets: [
            'Format vidéo pour un fond ou une carte de fin.',
            'Carré pour une pochette de podcast ou de chanson.',
            'Une bannière large pour un en-tête. Laissez le fond transparent si vous poserez le PNG sur une vidéo ou une autre image.',
          ],
        },
        {
          heading: 'Ce n’est pas un spectrogramme',
          paragraphs: [
            'Une forme d’onde est le dessin qu’affiche un lecteur de musique. Un spectrogramme montre quelles fréquences sont présentes. Pour cette image, utilisez le [spectrogramme en ligne](/spectrogram-generator).',
            'Pour couper d’abord le fichier, utilisez [couper l’audio](/audio-trimmer), puis revenez pour l’image. Vous ne pouvez pas rejouer le PNG dans la chanson. Mettre une image dans un WAV, c’est [image vers audio](/image-to-audio), dans l’autre sens.',
          ],
        },
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
      intro: 'Un spectrogramme montre quelles fréquences sont là au fil du temps : voix, graves, et tout ce qui a été dessiné dans le son. Déposez un fichier, choisissez un axe log ou linéaire, téléchargez le PNG. La FFT tourne dans le navigateur — rien n’est envoyé.',
      usesHeading: 'Ce que les gens y cherchent',
      uses: [
        'Voir où sont les graves, la voix et le souffle avant d’égaliser.',
        'Retrouver une image ou un mot caché dans les fréquences.',
        'Exporter une image fixe d’un morceau pour un post, un cours ou une note.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Réglez la vue', text: 'L’axe log est la vue musicale habituelle. Resserrez la fréquence haute. Si une image cachée est trop sombre ou trop claire, bougez le plancher et le plafond en dB. Pour un passage seulement, réduisez la plage de temps.' },
        { name: 'Téléchargez le PNG', text: 'Les tailles préréglées sortent en double résolution. L’image n’est pas de l’audio : on ne peut pas rejouer le PNG en morceau.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le navigateur décode le fichier et calcule la FFT dans cet onglet. Pas d’envoi. Une fois la page chargée, ça marche aussi hors ligne.' },
        { q: 'Que veulent dire les couleurs ?', a: 'Chaque colonne est un instant. La hauteur est la fréquence, les aigus en haut. Plus c’est clair, plus il y a d’énergie. Viridis, inferno et gris sont les mêmes données avec une autre échelle. Le plancher et le plafond en dB décident de ce qui est silencieux ou fort.' },
        { q: 'Puis-je retransformer l’image en audio ?', a: 'Non. Le PNG est un dessin des niveaux, pas la forme d’onde. Pour écouter, gardez l’original. Pour mettre une image dans l’audio, utilisez Image vers audio, puis ouvrez ce WAV ici.' },
        { q: 'En quoi est-ce différent du générateur de forme d’onde ?', a: 'Une forme d’onde, c’est le volume dans le temps — la silhouette du lecteur. Un spectrogramme, ce sont les fréquences présentes. Pour une couverture, la forme d’onde. Pour inspecter ou révéler des fréquences, cette page.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Sur un écran étroit les réglages s’empilent et le téléchargement reste à portée. Chrome, Edge, Firefox et Safari actuels, ordinateur et mobile. Un long fichier prend un moment : chaque colonne est une FFT.' },
        { q: 'Pourquoi certains morceaux cachent une image ?', a: 'Quelques titres, Aphex Twin en tête, dessinent une image en plaçant de l’énergie sur des fréquences choisies. Montez le plafond en dB si l’image est pâle, et gardez l’axe log. Cette page ne fait que l’afficher. La créer, c’est Image vers audio.' },
      ],
      screenshotsAlt: [
        'Spectrogramme en ligne : la page avant tout fichier ou toute saisie',
        'Spectrogramme en ligne : après la lecture du fichier ou les taps',
        'Spectrogramme en ligne : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La fréquence dans le temps, en PNG',
          paragraphs: [
            'Chaque colonne est un instant. La hauteur est la fréquence, les notes hautes en haut. Une couleur plus claire signifie plus d’énergie. Viridis, inferno et gray sont les mêmes données avec une autre échelle. Le plancher et le plafond en dB décident de ce qui compte comme faible ou fort.',
            'L’image est une FFT du fichier, dessinée dans cet onglet. Ce n’est pas de l’audio. Vous ne pouvez pas rejouer le PNG dans la chanson.',
          ],
        },
        {
          heading: 'Comment lire une image cachée',
          paragraphs: [
            'Quelques morceaux dessinent une image en plaçant de l’énergie sur des fréquences choisies. Cette page peut la montrer. Elle n’en crée pas :',
          ],
          bullets: [
            'Gardez l’axe logarithmique pour la vue musicale habituelle. Il étire le bas du spectre.',
            'Montez le plafond en dB si une image cachée est pâle.',
            'Raccourcissez la plage de temps si vous ne voulez qu’un passage du fichier.',
          ],
        },
        {
          heading: 'La forme d’onde, et l’astuce inverse',
          paragraphs: [
            'Le générateur de forme d’onde montre la force sonore dans le temps, la forme d’une image de couverture. Cette page montre quelles fréquences sont là.',
            'Pour fabriquer un WAV afin qu’un spectrogramme affiche votre image ou une courte ligne de texte, utilisez [image vers audio](/image-to-audio), puis ouvrez ce WAV ici. Fréquence logarithmique, plafond autour de −20 dB. La forme se place entre environ 400 Hz et 12 kHz. Cette page ne fait qu’afficher.',
          ],
        },
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
        { q: 'Mon image est-elle envoyée ?', a: 'Non. Le navigateur dessine le texte ou l’image et construit le WAV dans cet onglet. Pas d’envoi. Une fois la page chargée, ça marche aussi hors ligne.' },
        { q: 'Quel fichier j’obtiens ?', a: 'Un WAV mono, 44,1 kHz, PCM 16 bits, quelques secondes. Pas un MP3. L’image vit dans les fréquences : un MP3 à bas débit peut la flouter.' },
        { q: 'Est-ce que ça sonne comme l’image ou les mots ?', a: 'Non. Pas de synthèse vocale, pas de générateur de musique. Vous entendez des tons là où les pixels sont clairs. Pour lire, ouvrez un spectrogramme.' },
        { q: 'En quoi est-ce différent du générateur de spectrogramme ?', a: 'Le générateur de spectrogramme dessine un audio que vous avez déjà. Cette page fait l’inverse : elle construit un audio pour qu’un spectrogramme montre votre image ou votre ligne. Le générateur de forme d’onde ne montre que le volume, la forme cachée y est peu visible.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Tapez, choisissez une photo, téléchargez. Chrome, Edge, Firefox et Safari actuels, ordinateur et mobile. Une photo très détaillée est réduite pour que le fichier reste court.' },
        { q: 'Est-ce un code secret ?', a: 'Non. Quiconque ouvre un spectrogramme du WAV voit l’image. C’est un dessin visible dans le son, pas un chiffrement.' },
      ],
      screenshotsAlt: [
        'Image vers audio : la page avant tout fichier ou toute saisie',
        'Image vers audio : après la lecture du fichier ou les taps',
        'Image vers audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Une image écrite dans les fréquences',
          paragraphs: [
            'Tapez jusqu’à 32 caractères, ou déposez un PNG, JPG ou WebP. La page écrit cette forme dans les fréquences d’un WAV mono à 44,1 kHz, 16 bits, de quelques secondes. Les pixels clairs deviennent des fréquences plus fortes.',
            'Ce n’est ni une chanson ni de la parole. Vous entendez des pépiements et du bruit, pas les mots prononcés. Une photo très détaillée est réduite pour que le fichier reste court.',
          ],
        },
        {
          heading: 'Comment voir ce que vous avez écrit',
          paragraphs: [
            'La forme est invisible sur une forme d’onde normale. Ouvrez le WAV dans le [spectrogramme en ligne](/spectrogram-generator) :',
          ],
          bullets: [
            'Fréquence logarithmique, plafond autour de −20 dB.',
            'Le dessin se place entre environ 400 Hz et 12 kHz.',
            'Gardez le WAV. Un MP3 à bas débit peut étaler la forme.',
          ],
        },
        {
          heading: 'Pas un code, et pas la page spectrogramme',
          paragraphs: [
            'Quiconque ouvre un spectrogramme du WAV voit l’image. C’est un dessin dans le son, pas un chiffrement.',
            'Le spectrogramme en ligne dessine l’image d’un audio que vous avez déjà. Cette page fabrique un audio pour que cette image montre votre dessin ou votre ligne. Le générateur de forme d’onde ne montre que la force sonore, donc la forme cachée n’y sera pas évidente.',
          ],
        },
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
        { name: 'Déposez votre MP3', text: 'Déposez le fichier ou cliquez pour parcourir. Les tags et la pochette actuels sont lus sur votre appareil et affichés dans le formulaire. Plusieurs MP3 peuvent partager l’artiste, l’album, l’année, le genre et la pochette. Le titre et le numéro de piste restent sur chaque fichier. Deux ou plus se téléchargent en ZIP.' },
        { name: 'Modifiez les champs', text: 'Saisissez le bon titre, l’artiste, l’album, l’année et le numéro de piste, puis ajoutez ou remplacez la pochette par un JPG ou un PNG.' },
        { name: 'Enregistrez le MP3', text: 'Cliquez sur « Enregistrer le MP3 » pour télécharger le fichier avec ses tags. L’audio est copié à l’identique — seule la fiche d’informations autour est réécrite.' },
      ],
      faqs: [
        { q: 'Puis-je taguer un album entier ?', a: 'Oui. Déposez plusieurs MP3. L’artiste, l’album, l’année, le genre et la pochette s’appliquent à chaque fichier. Le titre et le numéro de piste restent sur chaque ligne. Un numéro de piste vide commence à 1. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. L’audio est toujours copié octet par octet.' },
        { q: 'Mon MP3 est-il téléversé vers un serveur ?', a: 'Non. Le fichier est ouvert avec l’API FileReader du navigateur et réécrit directement dans votre onglet. Vous pouvez charger cette page, couper le Wi-Fi, et l’éditeur fonctionne toujours. Il n’y a aucune étape de téléversement.' },
        { q: 'Modifier les tags change-t-il la qualité audio ?', a: 'Non. Les tags vivent dans un bloc séparé au début du fichier, et les trames audio MPEG sont copiées octet par octet : le son est bit-identique. Le fichier enregistré peut même être légèrement plus petit, car l’ancien bloc de tags et son remplissage ne sont pas repris.' },
        { q: 'Quelle différence avec l’éditeur MP3 ?', a: 'L’éditeur MP3 coupe, rogne et assemble l’audio lui-même, ce qui suppose de décoder puis de réencoder le son. Cette page ne touche jamais au son — elle réécrit la fiche d’informations autour. Utilisez celui-là pour éditer la musique, celui-ci pour l’étiqueter.' },
        { q: 'Que ne sait-il pas faire ?', a: 'Il n’édite que des fichiers MP3 — FLAC, M4A et WAV utilisent d’autres formats de tags que cette page n’écrit pas encore. Plusieurs MP3 peuvent partager l’artiste, l’album, l’année, le genre et la pochette, et chaque fichier garde son titre et son numéro de piste. Et l’enregistrement réécrit tout le bloc de tags : les chapitres de podcast ou les champs personnalisés inhabituels du tag d’origine ne sont pas conservés — les champs courants, oui.' },
        { q: 'Pourquoi mon autoradio affiche-t-il encore « Track 01 » ?', a: 'Beaucoup d’autoradios ignorent les tags et se rabattent sur le nom du fichier, et la plupart gardent en cache les anciennes informations jusqu’à ce que vous rebranchiez la clé USB ou relanciez un scan. Enregistrez ici (le fichier est écrit en ID3v2.3, la version que les autoradios lisent le plus sûrement), renommez-le par exemple « 01 - Titre.mp3 », puis relancez le scan.' },
        { q: 'Mes tags chinois, japonais, coréens ou arabes s’affichent en charabia. Est-ce réparable ?', a: 'Oui — cela signifie en général que l’ancien tag était enregistré dans un encodage sur un octet au lieu d’Unicode. Retapez ici le bon texte et enregistrez : le fichier est réécrit en ID3v2.3 avec du texte UTF-16, que les lecteurs modernes affichent correctement, y compris pour les titres en chinois, japonais, coréen, arabe, cyrillique et hindi.' },
        { q: 'Ça marche sur mon téléphone ?', a: 'Oui — Chrome, Safari, Firefox et Edge récents, sur ordinateur comme sur mobile. L’enregistrement remet le fichier au navigateur comme n’importe quel téléchargement ; sur iPhone, Safari l’enregistre dans l’app Fichiers. Tout tourne en local, donc ça marche aussi sur une connexion lente une fois la page ouverte.' },
      {
        q: 'Puis-je modifier des tags MP3 locaux depuis Claude ou Cursor ?',
        a: 'Cette page modifie l’ID3 dans le navigateur, pochette comprise, et ne réencode pas. /mcp écrit title, artist, album, date, genre, track et comment avec ffmpeg, copie l’audio tel quel et écrit de l’ID3v2.3. Il ne modifie pas la pochette. L’application de chat voit quand même le chemin.',
      }],
      screenshotsAlt: [
        'Éditeur de tags MP3 : la page avant tout fichier ou toute saisie',
        'Éditeur de tags MP3 : après la lecture du fichier ou les taps',
      ],
      sections: [
        {
          heading: 'L’étiquette change, l’audio non',
          paragraphs: [
            'L’éditeur de tags écrit de l’ID3v2.3 et copie les trames audio. Il ne les décode pas.',
            'Les champs sont le titre, l’artiste, l’album, l’artiste de l’album, l’année, le genre, le numéro de piste, le numéro de disque, le compositeur, le commentaire et une pochette JPG ou PNG.',
          ],
        },
        {
          heading: 'Ce que vous pouvez régler, et ce que vous ne pouvez pas',
          paragraphs: [
            'Plusieurs MP3, ou un seul. Champs courants uniquement. L’artiste, l’album, l’année, le genre et la pochette s’appliquent à chaque fichier. Le titre et le numéro de piste restent sur chaque fichier :',
          ],
          bullets: [
            'Le titre, l’artiste, l’album et les autres champs du quotidien, plus la pochette.',
            'Pas le FLAC, le M4A ou le WAV. Ces formats de tags ne sont pas écrits ici.',
            'Pas les chapitres podcast ni les trames personnalisées inhabituelles. L’enregistrement réécrit le bloc de tags, et ces trames ne passent pas.',
          ],
        },
        {
          heading: 'Pourquoi la voiture affiche encore Track 01',
          paragraphs: [
            'Beaucoup d’autoradios ignorent les tags et retombent sur le nom de fichier, et la plupart gardent l’ancienne information en cache jusqu’à ce que vous réimportiez la clé USB ou relanciez le scan. Renommez le fichier en quelque chose comme 01 - Song Title.mp3, puis relancez le scan.',
            'Couper, ajouter un fondu ou changer la vitesse, c’est l’éditeur MP3, qui décode et réencode. Cette page ne touche jamais au son. Utilisez l’autre pour modifier la musique. Utilisez celle-ci pour l’étiqueter.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers MP3 ici, ou cliquez pour parcourir',
      exportLabel: 'Enregistrer le MP3',
    },
    compressor: {
      cardLine: 'Baisse les crêtes fortes et relève les mots faibles, sans rendre tout le fichier plus fort.',
      name: 'Compresseur de niveau',
      shortName: 'Compresseur',
      title: 'Compresseur de niveau — Égaliser le volume en ligne',
      description:
        'Égalise les passages forts et faibles d’un enregistrement dans le navigateur. La crête reste. Ce n’est pas un fichier plus petit. Gratuit, sans envoi.',
      h1: 'Compresseur de niveau — Égaliser les passages forts et faibles',
      heroAlt: 'Retenir les pics d’une voix pour que les mots faibles ressortent',
      subtitle: 'Un compresseur large bande qui calme les sauts de niveau. La crête du fichier reste où elle était.',
      intro:
        'Une note vocale qui crie une phrase et chuchote la suivante a besoin d’une compression, pas d’un bouton de volume. Cette page applique un seul compresseur large bande : le fort descend, le faible monte, puis l’export est mis à l’échelle pour que la crête retrouve celle du fichier d’origine. Tout se passe dans le navigateur. Le fichier n’est pas envoyé.',
      usesHeading: 'Ce qu’un compresseur termine',
      uses: [
        'Égaliser une note vocale enregistrée tantôt près, tantôt loin du téléphone.',
        'Contenir un invité de podcast bien plus fort que la personne qui anime.',
        'Placer une voix devant quand le refrain saute au-dessus du couplet.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Réglez la quantité', text: 'Faites glisser Compresseur. 30–50 % suffisent pour la plupart des voix. 100 % écrase : seuil −36 dB, ratio 8:1.' },
        { name: 'Écoutez et exportez', text: 'Écoutez le résultat, puis exportez en MP3 ou WAV. La crête revient à la crête d’origine, juste sous le plein niveau.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le compresseur est un processeur de dynamique Web Audio dans l’onglet. Une fois la page chargée, vous pouvez couper le réseau et continuer d’exporter.' },
        { q: 'Que devient l’audio ?', a: 'Un compresseur large bande (seuil de −18 dB à −36 dB, ratio d’un peu plus de 1:1 jusqu’à 8:1). Il n’a pas de gain de compensation automatique, donc la page met l’export à l’échelle jusqu’à la crête source, ou environ −0,2 dBFS si la source était déjà plus chaude. Le WAV garde ce changement de niveau propre. Le MP3 est réencodé une fois.' },
        { q: 'Cela réduit-il le fichier ?', a: 'Non. Réduire un fichier, c’est réencoder à un débit plus bas : c’est la page compresseur audio. Cette page change la dynamique et laisse le débit au format d’export.' },
        { q: 'Quelle différence avec le booster et la normalisation ?', a: 'Le booster multiplie tout le fichier. La normalisation monte tout jusqu’à ce que l’échantillon le plus fort atteigne une cible. Les deux laissent l’écart entre fort et faible inchangé. Cette page le réduit. Une seule bande, pas une chaîne multibande, et elle n’enlève pas le bruit.' },
        { q: 'Le bruit de pièce disparaît-il ?', a: 'Non. Relever les passages faibles relève aussi le souffle et le bruit de pièce. Si le problème est le bruit, la compression le rend plus visible. Coupez le silence, ou réenregistrez.' },
        { q: 'Cela marche-t-il sur un téléphone ?', a: 'Oui. Le curseur et l’export fonctionnent au doigt dans Chrome, Edge, Firefox et Safari actuels. Quelques minutes de parole s’exportent en une ou deux secondes sur un téléphone récent.' },
      ],
      screenshotsAlt: [
        'Compresseur de niveau : zone de dépôt, rien n’est envoyé sur un serveur',
        'Compresseur de niveau : espace de travail avec le fichier chargé',
        'Compresseur de niveau : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La dynamique, pas la taille du fichier',
          paragraphs: [
            'Le compresseur de niveau est un compresseur large bande. Le seuil va de −18 dB à −36 dB, et le ratio d’un peu plus de 1:1 jusqu’à 8:1. Les moments forts baissent, les moments faibles montent par rapport à eux.',
            'Il n’y a pas de gain de compensation dans le compresseur. Ensuite, l’export est mis à l’échelle pour que sa crête corresponde à celle de la source, ou −0,2 dBFS si la source était déjà plus chaude. Il ne réduit pas le fichier. Un MP3 plus petit, c’est la page [compresser l’audio](/compress-audio).',
          ],
        },
        {
          heading: 'Ce qu’il corrige et ce qu’il ne corrige pas',
          paragraphs: [
            'Il réduit l’écart entre fort et faible. C’est une seule bande, pas une chaîne de voix :',
          ],
          bullets: [
            'Une note vocale qui crie une phrase et chuchote la suivante.',
            'Un mix où les frappes fortes enterrent les phrases faibles, et vous les voulez plus proches.',
            'Ce n’est pas un réducteur de bruit. Remonter les passages faibles remonte aussi le souffle et le bruit de la pièce.',
          ],
        },
        {
          heading: 'En quoi il diffère d’un bouton de volume',
          paragraphs: [
            'L’amplificateur de volume multiplie tout le fichier. La normalisation monte tout jusqu’à ce que l’échantillon le plus fort atteigne une crête. Les deux laissent le même écart entre fort et faible. Cette page réduit cet écart.',
            'Le WAV garde le changement de niveau sans nouvelle génération avec perte. Le MP3 réencode une fois. Si le seul problème est un fichier faible et que la dynamique est bonne, utilisez plutôt amplifier le volume.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Compresser et télécharger',
    },
    echo: {
      cardLine: 'Des répétitions que l’on peut compter : une claque courte, pas un bain de réverbe.',
      name: 'Ajouter un écho',
      shortName: 'Ajouter un écho',
      title: 'Ajouter un écho — répétitions en ligne gratuit',
      description: 'Ajoutez un écho chronométré à n’importe quel audio dans le navigateur. Vous réglez le délai et les répétitions. Gratuit, sans envoi.',
      h1: 'Ajouter un écho — Ajouter de l’écho à un audio',
      heroAlt: 'Ajouter un délai et des répétitions à un enregistrement',
      subtitle: 'Des copies séparées, au délai que vous choisissez — d’une claque courte à 0,8 s.',
      intro: 'Un écho est une copie qui revient après un trou que l’on peut compter. Le délai va de quelques centièmes de seconde à 0,8 seconde, et les répétitions décident de ce que chaque copie renvoie. Le mélange humide est fixé à 45 %. Délai à zéro : le fichier ne change pas. Le traitement reste dans le navigateur.',
      usesHeading: 'Les échos que l’on veut vraiment',
      uses: ['Poser une claque courte sur une voix pour qu’elle prenne place sans devenir de la bouillie.', 'Faire revenir un coup de guitare ou de batterie sur le temps.', 'Entendre une phrase revenir une fois, nettement, au lieu d’un nuage de réverbe.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'MP3, WAV, M4A, OGG ou FLAC. Le décodage reste sur votre appareil.' },
        { name: 'Délai et répétitions', text: 'Le délai est le trou avant la première copie, jusqu’à 0,8 s. Les répétitions sont le retour, plafonné à 55 % pour que ça ne s’emballe pas.' },
        { name: 'Écoutez et exportez', text: 'Écoutez, puis exportez en MP3 ou WAV. Le fichier s’allonge de la queue des répétitions, jusqu’à 4 secondes.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. L’écho est un délai Web Audio dans l’onglet. Une fois la page chargée, vous pouvez couper le réseau et continuer d’exporter.' },
        { q: 'Que fait vraiment l’effet ?', a: 'Une copie est retardée du temps choisi et mélangée à 45 %. Chaque copie revient dans le délai au niveau de répétition, jusqu’à 0,55, donc elles faiblissent au lieu de hurler. Le WAV garde ce mélange. Le MP3 est réencodé une fois.' },
        { q: 'En quoi est-ce différent du slowed + reverb ?', a: 'Le slowed + reverb est un lavis : la hauteur baisse avec la vitesse et la queue est un flou de réflexions. Cette page garde le tempo d’origine et ajoute des copies séparées. Elle ne change ni la vitesse ni la hauteur.' },
        { q: 'Pourquoi les répétitions ne deviennent-elles pas plus fortes ?', a: 'Le retour est plafonné à 55 % et la queue rendue à 4 secondes. Cela suffit pour entendre plusieurs copies. Cela ne devient pas un bruit qui s’auto-excite.' },
        { q: 'Puis-je n’échoer qu’une partie ?', a: 'Oui. Sélectionnez le passage sur la forme d’onde et gardez cette sélection. Les répétitions s’ajoutent à ce que vous exportez, pas au reste du fichier.' },
        { q: 'Cela marche-t-il sur un téléphone ?', a: 'Oui. Les deux curseurs et l’export fonctionnent au doigt dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Ajouter un écho : zone de dépôt, rien n’est envoyé sur un serveur',
        'Ajouter un écho : espace de travail avec le fichier chargé',
        'Ajouter un écho : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Des copies séparées, pas une nappe',
          paragraphs: [
            'L’écho retarde une copie du signal du temps que vous réglez, de quelques centièmes de seconde à 0,8 seconde, et remixe cette copie à 45 pour cent. Chaque copie repart dans le délai au niveau de répétition que vous réglez.',
            'Le feedback est plafonné à 0,55 et la queue rendue à 4 secondes, pour que les répétitions faiblissent au lieu de hurler. Un délai à zéro laisse le fichier intact. La vitesse et la hauteur tonale restent telles quelles.',
          ],
        },
        {
          heading: 'Comment utiliser les deux curseurs',
          paragraphs: [
            'Le délai est l’écart avant la première copie. Les répétitions indiquent quelle part de chaque copie revient :',
          ],
          bullets: [
            'Un délai court pour une claque qu’on entend encore comme un second coup.',
            'Un délai plus long, toujours sous 0,8 seconde, quand vous voulez compter les copies une par une.',
            'Une sélection seule, si l’écho doit tenir sur une phrase et pas sur le reste du fichier.',
          ],
        },
        {
          heading: 'L’écho n’est pas slowed + reverb',
          paragraphs: [
            'Slowed + reverb baisse la hauteur avec la vitesse et étale la queue dans une pièce. Cette page garde le timing d’origine et ajoute des copies que vous entendez séparément.',
            'Faire un fondu au début ou à la fin d’un fichier, c’est la page fondu. Superposer deux chansons, c’est fusionner l’audio. Ni l’un ni l’autre n’est un écho.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Ajouter l’écho',
    },
    'add-reverb': {
      cardLine: 'Donnez à une prise sèche le son d’une pièce, d’une touche à une nappe.',
      name: 'Ajouter une réverbe',
      shortName: 'Réverbe',
      title: 'Ajouter une réverbe au son — son de pièce en ligne, gratuit',
      description: 'Ajoutez une réverbe de pièce à une voix ou à un instrument, dans le navigateur. Un curseur wet, écoute avant l’export. Gratuit, MP3 ou WAV.',
      h1: 'Ajouter une réverbe — donner le son d’une pièce à une prise',
      heroAlt: 'Une prise sèche qui gagne les réflexions d’une pièce',
      howToIntro: 'Le curseur d’intensité sur un vrai fichier',
      subtitle: 'Un seul curseur wet, du tout sec à une petite salle. Vous entendez le résultat avant d’exporter.',
      intro: 'La réverbe, c’est le son qu’une pièce ajoute après la source : des réflexions qui s’empilent puis s’éteignent. Cette page fait passer le fichier déposé dans une pièce synthétisée, avec un seul curseur wet du sec au trempé. Vous entendez la réverbe sur la forme d’onde avant d’exporter, et le traitement reste dans votre navigateur.',
      usesHeading: 'Ce qu’une pièce répare',
      uses: ['Placez un mémo vocal ou une prise de voix sèche dans un espace, pour qu’il cesse de sonner collé.', 'Ajoutez de la profondeur à un effet de jeu ou de vidéo avant le montage.', 'Adoucissez une prise trop proche et agressive sans toucher à son niveau.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC. Le décodage se fait sur votre appareil. Le curseur wet part de zéro, c’est-à-dire le fichier sec.' },
        { name: 'Réglez le wet', text: 'Le curseur fond la pièce dans le signal sec, de 0 à 100 %. Vers 25 %, une voix cesse de sonner micro collé. Le bouton lecture fait écouter le résultat mélangé.' },
        { name: 'Exportez', text: 'L’export ajoute la décroissance après votre dernier échantillon, environ 2,2 s de queue. Le MP3 part au débit choisi, le WAV garde exactement les échantillons traités.' },
      ],
      faqs: [
        { q: 'Mon audio est-il téléversé ?', a: 'Non. Le fichier est décodé et la réverbe est rendue dans votre navigateur avec l’API Web Audio. Une fois la page chargée, décoder et exporter en WAV ne demandent pas de réseau.' },
        { q: 'Que devient le fichier ?', a: 'Le curseur wet fait un fondu enchaîné de votre fichier sec vers une pièce synthétisée : environ 2,2 s de réflexions stéréo à décroissance exponentielle. L’export réencode une fois en MP3 au débit choisi, ou écrit un WAV sans perte depuis les échantillons traités. La queue de réverbe allonge le fichier : à 100 % de wet, l’export dure environ 2,2 s de plus que la source.' },
        { q: 'C’est une vraie salle ou une cathédrale ?', a: 'Non, et le dire, c’est la partie honnête. C’est une pièce synthétisée à décroissance de 2,2 s, pas une convolution avec un espace mesuré. Pour des lieux nommés avec des réponses impulsionnelles balayées, il vous faut un DAW de bureau ou un plugin de convolution. Ce que fait cette page, elle le fait en une ou deux secondes, dans votre navigateur.' },
        { q: 'Quelle différence avec la page d’écho ?', a: 'L’[écho](/echo) répète le signal en copies datées que vous comptez une à une. La réverbe est une foule dense de réflexions fondue en une décroissance. Les deux ajoutent de l’espace ; le [slowed + reverb](/slowed-reverb) est la troisième étape quand le ralenti doit venir avec.' },
        { q: 'Cela marche-t-il sur mobile ?', a: 'Oui. Le curseur, le bouton lecture et l’export ont une taille de pouce, et l’aperçu rend avant que vous ne vous engagiez dans un export.' },
        { q: 'Combien de wet pour une voix ?', a: 'Commencez à 20 ou 30 %. Assez sec pour que chaque mot reste net, assez mouillé pour que le bord « micro collé » s’adoucisse. Les nappes musicales et les effets tiennent 40 à 60 % avant de paraître lointains.' },
        { q: 'Et si je voulais retirer la réverbe ?', a: 'Pas sur cette page, et pas honnêtement dans un navigateur. Une fois les réflexions cuites dans l’enregistrement, les séparer de la source est un sujet de recherche en déréverbération, pas un curseur remis en arrière. Prévenez à l’enregistrement : une couette, un placard, un micro près de la bouche.' },
      ],
      screenshotsAlt: [
        'Ajouter une réverbe : zone de dépôt, rien n’est envoyé sur un serveur',
        'Ajouter une réverbe : espace de travail avec le fichier chargé',
        'Ajouter une réverbe : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Une réverbe de pièce, pas une salle échantillonnée',
          paragraphs: [
            'La réponse impulsionnelle derrière cette page est synthétisée : du bruit stéréo qui décroît avec une queue de 2,2 secondes, la forme qu’une petite pièce imprime à un son. C’est pourquoi la page est instantanée et fonctionne hors ligne. C’est aussi pourquoi la pièce n’a pas de nom ; il n’y a pas d’abbaye de Westminster dans ce fichier.',
            'Le curseur wet est un simple fondu enchaîné entre votre fichier sec et cette pièce. À 0 pour cent, l’export est le fichier d’origine, échantillon pour échantillon. La décroissance après votre dernier échantillon continue de sonner après la fin de l’audio, ce qui explique pourquoi l’export dure environ 2,2 secondes de plus que la source.',
          ],
          table: {
            headers: [
              'Wet',
              'Ce que vous entendez',
              'Bon pour',
            ],
            rows: [
              [
                '10 %',
                'Une pièce serrée, presque invisible.',
                'Une voix de podcast trop proche du micro.',
              ],
              [
                '25 %',
                'La voix s’installe dans une petite pièce et cesse de sonner collée.',
                'Voix, notes vocales, bruitage.',
              ],
              [
                '60 %',
                'Lavé et lointain ; la source recule derrière l’espace.',
                'Pads, fantômes, transitions.',
              ],
              [
                '100 %',
                'Toute la pièce, pas de source. Une nappe où la mélodie reste.',
                'Design sonore, fonds texturés.',
              ],
            ],
          },
        },
        {
          heading: 'Réverbe ou écho',
          paragraphs: [
            'Les deux effets ajoutent de l’espace, et ils ratent différemment. L’écho donne des répétitions distinctes à un délai que vous choisissez ; il se lit comme un effet posé sur le son. La réverbe donne des milliers de réflexions si serrées qu’elles se lisent comme la pièce où le son a eu lieu.',
            'Si vous pouvez compter les répétitions, vous voulez [ajouter un écho](/echo). Si vous voulez que l’auditeur cesse de remarquer que l’enregistrement était sec, vous voulez cette page. Et quand le travail est un son TikTok ralenti avec de l’espace derrière, la page [slowed + reverb](/slowed-reverb) fait les deux gestes à la fois.',
          ],
        },
        {
          heading: 'La réverbe d’abord, la puissance sonore en dernier',
          paragraphs: [
            'La réverbe change le niveau moyen d’un fichier, donc réglez-la avant tout travail de puissance sonore. Ajoutez la pièce ici, puis vérifiez le résultat par rapport à une cible avec le [mesureur de loudness](/loudness-meter), et publiez seulement ensuite.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Ajouter la réverbe',
    },
    'audio-distorter': {
      cardLine: 'Poussez une prise nette vers un écrêtage chaud ou un écrêtage dur.',
      name: 'Distorsion audio',
      shortName: 'Distorsion',
      title: 'Distorsion audio — d’un écrêtage doux à un écrêtage dur',
      description: 'Ajoutez de l’overdrive à n’importe quel audio dans le navigateur. Un curseur, d’un écrêtage chaud à un dur. Rien n’est envoyé.',
      h1: 'Distorsion audio — overdrive sur une prise nette',
      heroAlt: 'Aplatir les crêtes d’un enregistrement net',
      subtitle: 'Un curseur. La valeur de départ est 40 %. À 0 %, le fichier reste tel que vous l’avez déposé.',
      intro: 'Cette page passe chaque échantillon dans une courbe tanh. Au départ, 40 %, un échantillon de 0,25 devient environ 0,69. À 100 %, le même échantillon est poussé vers environ 1. Intensité 0 saute la courbe : le fichier reste tel qu’il a été décodé. Le traitement reste dans le navigateur.',
      usesHeading: 'Quand l’écrêtage est le but',
      uses: ['Posez un court overdrive sur une guitare ou un synthé net pour qu’il avance.', 'Rendez une phrase de voix rugueuse pour une bande-annonce, un hit de jeu ou un jingle.', 'Commencez le grain lo-fi ici, puis éteignez les aigus neufs avec le filtre passe-bas.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC. Le décodage se fait sur votre appareil.' },
        { name: 'Réglez l’intensité', text: '0 % est net. 40 % est le départ. 100 % est l’écrêtage le plus dur que cette page produit.' },
        { name: 'Écoutez et exportez', text: 'Écoutez, puis exportez en MP3 ou WAV. La durée ne change pas.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. L’écrêtage est un waveshaper Web Audio dans l’onglet. Une fois la page chargée, vous pouvez couper le réseau et continuer d’exporter. Le WAV part tout de suite. Le MP3 part après que l’encodeur a été chargé une fois.' },
        { q: 'Que fait vraiment le curseur ?', a: 'Intensité 0 n’insère pas le waveshaper : les échantillons restent tels qu’ils ont été décodés. Au-dessus de 0, chaque échantillon x devient tanh(k·x) / tanh(k), avec k = 10^(intensité × 1,6) − 1. Au départ de 40 %, k vaut environ 3,4 et un échantillon de 0,25 devient environ 0,69. À 100 %, k vaut environ 39 et cet échantillon est poussé vers environ 1. Un échantillon à pleine échelle reste à pleine échelle. Le nœud suréchantillonne à 2×. Le WAV garde cette courbe. Le MP3 est réencodé une fois, au débit que vous choisissez. La durée ne change pas.' },
        { q: 'Que refuse cette page ?', a: 'Ce n’est pas un bitcrusher, et cela n’ajoute ni wow, ni flutter, ni limite de bande radio. Un lo-fi sourd, c’est cette page puis le filtre passe-bas. Un ampli avec baffle, c’est un travail de DAW.' },
        { q: 'En quoi est-ce différent du booster de volume ?', a: 'Le booster de volume multiplie tout le fichier, puis un limiteur retient les crêtes pour qu’elles ne deviennent pas carrées. Cette page les aplatit exprès. L’écho ajoute une copie après un délai. Ni l’un ni l’autre n’aplatit la forme d’onde.' },
        { q: 'Puis-je ne distordre qu’une partie ?', a: 'Oui. Sélectionnez le passage sur la forme d’onde et gardez cette sélection. La courbe s’applique à ce que vous exportez, pas au reste du fichier.' },
        { q: 'Cela marche-t-il sur un téléphone ?', a: 'Oui. Le curseur et l’export fonctionnent au doigt dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Distorsion audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Distorsion audio : espace de travail avec le fichier chargé',
        'Distorsion audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Une courbe, pas un bouton de volume',
          paragraphs: [
            'Le drive va de 0 % à 100 %. La valeur de départ est 40 %. À 0 %, le waveshaper n’est pas dans le graphe, donc l’export correspond au fichier décodé.',
            'Au-dessus de 0, chaque échantillon x devient tanh(k·x) / tanh(k). k vaut 10^(drive × 1,6) − 1. À 40 %, k vaut environ 3,4 et un échantillon de 0,25 devient environ 0,69. À 100 %, k vaut environ 39 et cet échantillon monte vers 1. Un échantillon à pleine échelle reste à pleine échelle. La vitesse, la hauteur et la durée restent telles quelles.',
          ],
        },
        {
          heading: 'Jusqu’où pousser',
          paragraphs: [
            'La plage utile est étroite. Au-delà, vous fabriquez un effet :',
          ],
          bullets: [
            '10 à 30 % : une saturation chaude sur une voix ou une guitare claire.',
            '40 à 70 % : le grain est évident. Les crêtes s’aplatissent et les notes faibles montent.',
            '80 à 100 % : proche d’une onde carrée. La parole devient difficile à suivre.',
          ],
        },
        {
          heading: 'Pas une hausse de volume, pas un bitcrusher',
          paragraphs: [
            'L’amplificateur de volume rend un fichier faible plus fort et utilise un limiteur pour que les crêtes ne s’aplatissent pas. Cette page les aplatit exprès. L’écho ajoute une copie après un délai que vous réglez. C’est une autre page.',
            'Cette courbe ne baisse pas la profondeur de bits et ne coupe pas les aigus. Le nœud suréchantillonne 2×, ce qui réduit seulement le repliement des nouvelles harmoniques. Un ton lo-fi terne, c’est cette page, puis le filtre passe-bas.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Distorcer et télécharger',
    },
    'voice-changer': {
      cardLine: 'Changez la voix d’un enregistrement avec cinq préréglages : aigu, grave, robot, radio, fantôme.',
      name: 'Changer de voix',
      shortName: 'Changer de voix',
      title: 'Changer de voix — préréglages grave, aigu, robot et radio',
      description: 'Modifiez une prise avec cinq préréglages : aigu, grave, robot, radio, fantôme. Hauteur, filtres et crush dans le navigateur. Gratuit, MP3 ou WAV.',
      h1: 'Changer de voix — cinq préréglages pour toute prise',
      heroAlt: 'Un enregistrement qui traverse cinq préréglages de voix',
      howToIntro: 'Les cinq préréglages sur un vrai enregistrement',
      subtitle: 'Touchez Aigu, Grave, Robot, Radio ou Fantôme et écoutez avant d’exporter.',
      intro: 'Cette page applique cinq préréglages de voix fixes à un enregistrement. Aigu monte la hauteur de quatre demi-tons, Grave descend de quatre, Robot l’aplatit dans un bit crusher, Radio l’enferme dans un passe-bande comme un interphone, et Fantôme l’étoile avec de la réverbe. Touchez un préréglage : l’aperçu joue aussitôt votre fichier à travers lui. Tout tourne dans votre navigateur, l’enregistrement ne quitte jamais votre appareil.',
      usesHeading: 'Ce que les gens en font',
      uses: ['Donnez à un personnage une autre voix dans un extrait de livre audio ou un mod de jeu.', 'Masquez la voix d’origine d’une démo ou d’une capture d’écran avant de la partager.', 'Écoutez une intro de podcast plus grave ou plus claire sans la réenregistrer.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC qui contient une voix. Le décodage se fait sur votre appareil. Aucun préréglage n’est actif tant que vous n’en touchez pas un.' },
        { name: 'Touchez un préréglage', text: 'Aigu, Grave, Robot, Radio ou Fantôme. L’aperçu joue aussitôt à travers le préréglage, et en toucher un autre le remplace au lieu d’empiler. Retouchez le préréglage actif pour revenir au son sec.' },
        { name: 'Exportez', text: 'L’export écrit le préréglage dans le fichier. Le MP3 part au débit choisi, le WAV garde exactement les échantillons traités. La durée ne change jamais.' },
      ],
      faqs: [
        { q: 'Mon audio est-il téléversé ?', a: 'Non. Décodage, décalage de hauteur, filtres et bit crusher tournent dans votre navigateur avec l’API Web Audio. Une fois la page chargée, l’aperçu et l’export WAV fonctionnent sans réseau.' },
        { q: 'Que fait réellement chaque préréglage ?', a: 'Aigu monte la hauteur de quatre demi-tons. Grave descend de quatre. Robot quantifie par pas de 5 bits dans une bande de 150 Hz à 4 kHz. Radio est un passe-bande 500 Hz à 3 kHz avec une légère saturation, comme sonne un petit haut-parleur. Fantôme descend la hauteur de deux demi-tons et ajoute 55 % de réverbe de pièce. Aucun ne change la durée du fichier.' },
        { q: 'C’est un clone de voix par IA ?', a: 'Non. Ces préréglages remodèlent la voix que vous avez enregistrée ; ils ne génèrent pas la voix de quelqu’un d’autre. Un clone exige un modèle entraîné et, le plus souvent, un consentement que vous n’avez pas. Ce que fait cette page est instantané, hors ligne, et la voix d’origine reste reconnaissable dessous.' },
        { q: 'Quelle différence avec le changeur de hauteur ?', a: 'Le [changeur de hauteur tonale](/pitch-changer) offre un curseur libre de −12 à +12 demi-tons pour le travail musical. Cette page associe hauteur, filtres, saturation et crush en cinq réglages à un geste, pour la voix. Les préréglages se remplacent au lieu de s’empiler ; pour un contrôle total, prenez le [changeur de hauteur tonale](/pitch-changer) et la [distorsion](/audio-distorter) à la main.' },
        { q: 'Cela marche-t-il sur mobile ?', a: 'Oui. Les boutons de préréglages et l’export ont une taille de pouce, et l’aperçu rend avant l’export, donc vous ne payez jamais pour un préréglage que vous n’avez pas entendu.' },
        { q: 'Cela marche-t-il sur la musique ?', a: 'Elle sera traitée, mais les préréglages sont accordés pour la voix. Aigu et Grave agissent sur un morceau comme n’importe quel changeur de hauteur, Robot mange le détail, et Radio rend la chanson comme une diffusion des années 1940, ce qui est parfois exactement le but.' },
        { q: 'Peut-on affiner un préréglage ?', a: 'Pas ici. Un geste, un réglage, aucun curseur, c’est voulu. Quand un préréglage est proche sans être juste, passez au manuel : le [changeur de hauteur tonale](/pitch-changer) pour le décalage, la [distorsion](/audio-distorter) pour le grain, le [filtre passe-haut](/high-pass-filter) et le [filtre passe-bas](/low-pass-filter) pour la bande.' },
      ],
      screenshotsAlt: [
        'Changer de voix : zone de dépôt, rien n’est envoyé sur un serveur',
        'Changer de voix : espace de travail avec le fichier chargé',
        'Changer de voix : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Ce que fait chaque préréglage',
          paragraphs: [
            'Chaque préréglage est un petit empilement des mêmes pièces que ce site utilise partout : un décalage de hauteur par vocodeur de phase qui garde la durée, des filtres biquad, un drive tanh, un bit crusher et la même pièce synthétisée que la page réverbe. Le tableau est toute la recette ; il n’y a rien d’autre dans la boîte.',
          ],
          table: {
            headers: [
              'Préréglage',
              'Ce qui change',
              'Le réglage',
            ],
            rows: [
              [
                'High',
                'Hauteur montée, durée inchangée.',
                '+4 demi-tons',
              ],
              [
                'Deep',
                'Hauteur baissée, durée inchangée.',
                '−4 demi-tons',
              ],
              [
                'Robot',
                'Des marches quantifiées dans une bande étroite.',
                'Crush 5 bits, 150 Hz à 4 kHz, drive léger',
              ],
              [
                'Radio',
                'Un bande passante fine avec un bord poussé.',
                '500 Hz à 3 kHz, 35 % de drive',
              ],
              [
                'Ghost',
                'Une hauteur plus sombre avec la pièce derrière.',
                '−2 demi-tons, 55 % de réverbe',
              ],
            ],
          },
        },
        {
          heading: 'Un préréglage, pas un clone',
          paragraphs: [
            'Changer de voix a deux sens très différents en 2026. L’un est de remodeler un enregistrement, ce que cette page fait en une seconde, hors ligne, gratuitement. L’autre est de générer la voix d’une personne nommée, ce qui est un modèle, une question de licence et, fait à quelqu’un sans consentement, un abus.',
            'Ces préréglages gardent le locuteur d’origine reconnaissable en dessous. C’est une limite et une propriété de sécurité à la fois : personne n’est usurpé par un bouton de hauteur.',
          ],
        },
        {
          heading: 'Enregistrer d’abord, changer ensuite',
          paragraphs: [
            'Les préréglages amplifient ce que l’enregistrement est déjà. Un enregistrement propre et proche se décale proprement ; une pièce bruyante sort bruyante sous une nouvelle forme. Enregistrez dans le [dictaphone en ligne](/voice-recorder), nettoyez le souffle avec la page [supprimer le bruit de fond](/noise-remover), puis changez la voix ici.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Changer la voix',
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
        { name: "Déposez l’audio", text: "N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé sur votre appareil. Plusieurs fichiers partagent le seuil et l’intervalle que vous réglez ensuite. Chacun est coupé pour lui-même. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP." },
        { name: "Réglez le seuil et le trou", text: "Le seuil est le niveau en dessous duquel un passage compte, de −60 à −20 dBFS. Le trou minimum est la durée qu’il doit avoir pour partir, de 0,1 à 2 secondes. La ligne d’état indique à peu près combien de secondes partent." },
        { name: "Exportez", text: "Écoutez l’original, puis exportez en MP3 ou WAV. Le fichier recolle les parties sonores et garde 0,08 seconde de chaque côté d’une coupe." },
      ],
      faqs: [
        { q: 'Puis-je couper le silence de plus d’un fichier ?', a: 'Oui. Plusieurs fichiers partagent le seuil et l’intervalle minimum de cette page. Chacun est mesuré et coupé pour lui-même, l’un après l’autre sur cet appareil. Un fichier se télécharge seul. Deux ou plus reviennent dans un ZIP. Un téléphone manque de mémoire plus tôt, donc un fichier très long y passe un par un.' },
        { q: "Mon audio est-il envoyé ?", a: "Non. Le niveau est mesuré dans votre navigateur et les passages bas sont coupés en mémoire. Une fois la page chargée, vous pouvez couper le réseau : l’export fonctionne encore." },
        { q: "Qu’est-ce qui est vraiment retiré ?", a: "Un passage part seulement s’il est sous le seuil et plus long que le trou minimum. Le départ est −40 dBFS et 0,35 seconde. Chaque passage garde 0,08 seconde aux deux bouts. Les trous plus courts, y compris la plupart des respirations, restent." },
        { q: "Est-ce que la musique basse est coupée ?", a: "Oui, si elle reste sous le seuil plus longtemps que le trou. −40 dBFS est fait pour la voix. Un tapis bas, un fondu ou le bruit de pièce d’un mix musical comptent comme du silence. Montez le seuil vers −20 si vous ne voulez que les zéros presque numériques, ou utilisez le découpeur et sélectionnez à la main." },
        { q: "Et si tout le fichier est bas ?", a: "Rien n’est coupé. La ligne d’état le dit, et l’export est le fichier d’origine." },
        { q: "En quoi est-ce différent du découpeur ?", a: "Le découpeur audio et le coupeur MP3 gardent la zone que vous tracez sur la forme d’onde. Cette page trouve les longs silences par le niveau et les retire tous en un export. Elle ne change ni la vitesse, ni la hauteur, ni le volume de ce qui reste." },
        { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui. Les deux curseurs et le bouton d’export répondent au toucher dans Chrome, Edge, Firefox et Safari actuels." },
      ],
      screenshotsAlt: [
        'Retirer le silence : zone de dépôt, rien n’est envoyé sur un serveur',
        'Retirer le silence : espace de travail avec le fichier chargé',
        'Retirer le silence : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Il coupe les longs silences, pas les respirations',
          paragraphs: [
            'Un passage n’est retiré que s’il est plus faible que le seuil et plus long que l’écart minimum. Par défaut, −40 dBFS et 0,35 seconde. Chaque coupe garde 0,08 seconde aux deux extrémités pour que la jointure ne claque pas.',
            'Les écarts plus courts, dont la plupart des respirations, restent. Ce qui reste n’est pas rendu plus fort, plus lent ou plus aigu. Si tout le fichier est sous le seuil, rien n’est coupé et l’export est le fichier d’origine.',
          ],
        },
        {
          heading: 'La parole, pas une chanson calme',
          paragraphs: [
            '−40 dBFS vise la parole. La musique perdra les parties que vous vouliez garder si elles descendent aussi bas :',
          ],
          bullets: [
            'Une note vocale ou une interview avec de longues pauses entre les réponses.',
            'Montez le seuil vers −20 dBFS si vous ne voulez retirer que le silence quasi numérique.',
            'Un fondu, un fond calme ou le bruit de la pièce dans un mix : quittez cette page et rognez à la main.',
          ],
        },
        {
          heading: 'Le rogneur contre cette page',
          paragraphs: [
            'Le rogneur audio et le coupeur MP3 gardent une région que vous dessinez. Cette page trouve chaque long passage faible par le niveau et les retire en un export.',
            'Utilisez le rogneur quand le passage calme est quelque chose que vous voulez encore, ou quand vous devez garder un passage et abandonner le reste à l’oreille. Utilisez cette page quand les pauses sont le problème et qu’elles sont assez longues pour être mesurées.',
          ],
        },
      ],
      dropHint: 'Déposez des fichiers audio ou cliquez pour les parcourir',
      exportLabel: 'Retirer les silences',
    },
    'noise-remover': {
      cardLine: 'Baissez le bruit de fond constant d’un enregistrement vocal, dans le navigateur.',
      name: 'Supprimer le bruit de fond',
      shortName: 'Débruiter',
      title: 'Supprimer le bruit de fond — RNNoise en local, gratuit',
      description: 'RNNoise enlève sifflement, bourdonnement et ventilateur : environ 20 dB de moins, dans le navigateur. Plus de 300 Mo refusé. Export MP3 ou WAV gratuit.',
      h1: 'Supprimer le bruit de fond — éditeur audio en ligne gratuit',
      heroAlt: 'Le bruit de fond constant sous un enregistrement vocal descend',
      howToIntro: 'Un fichier bruyant, un curseur d’intensité',
      subtitle: 'Souffle, ronflement et bruit de ventilateur constants baissent de 20 dB ou plus autour de la voix. La timeline ne bouge pas.',
      intro: 'Cette page fait passer RNNoise sur l’enregistrement que vous déposez, une porte de bruit entraînée sur la parole. Le bruit constant comme le souffle, le ronflement ou un ventilateur baisse de 20 dB ou plus autour de la voix, et les mots gardent leur niveau. La porte est un modèle de 150 Ko qui tourne dans votre navigateur, l’audio ne quitte jamais votre appareil.',
      usesHeading: 'Cas courants de suppression du bruit de fond',
      uses: [
        'Mémos vocaux : baisser le bourdonnement du ventilateur et de la clim, garder la voix propre.',
        'Podcasts : nettoyer le fond sonore avant publication, sans éditeur desktop.',
        'Cours : réduire le sifflement constant de la salle, puis ajuster la sonorité.',
        'Entretiens : nettoyer la voix — retirer la rumeur constante de la rue et de la pièce.',
        'Voix off : si le doublage capte la clim, enlever le bruit avant le calage.',
        'Réunions : baisser le bourdonnement électrique et le ventilateur pour un retour moins agressif.',
      ],
      why: [
        {
          icon: 'audio-waveform',
          title: 'RNNoise tourne en local',
          text: 'Un modèle de 150 KB s’exécute dans le navigateur : le bruit constant descend d’environ 20 dB et la voix bouge de moins de 1 dB. Aucun envoi.',
        },
        {
          icon: 'warning-triangle',
          title: 'Limites honnêtes',
          text: 'Cela marche sur le bruit constant — sifflement, bourdonnement, ventilateur. Les voix de fond et la musique non ; la page ne prétend pas le contraire.',
        },
      ],
      howTo: [
        { name: 'Dépose ton audio', text: 'Dépose un MP3, WAV, M4A, OGG ou FLAC dans le cadre pointillé, ou clique pour parcourir. Le fichier se décode sur ton appareil, sans envoi. La «Intensité» démarre à 75 %.' },
        { name: 'Règle la «{strength}»', text: '100 % = suppression maximale, environ −30 dB. Si le résultat est sourd et tu veux un peu de salle, descends vers 50 % (environ −6 dB). Le modèle RNNoise de 150 KB se charge au premier export.' },
        { name: 'Clique «{export}»', text: 'Le bouton principal de la barre d’export. Tout le fichier passe la porte en trames de 10 millisecondes ; la ligne d’état affiche la progression. Un «Lecture» sur l’original si tu doutes.' },
        { name: 'Récupère le fichier', text: 'Le MP3 s’exporte au débit choisi, le WAV garde les échantillons traités ; le nom porte le suffixe -edited.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé quelque part ?', a: 'Non. Le décodage et la porte de bruit ont lieu dans votre navigateur. Au premier export, la page récupère le modèle RNNoise, un fichier WebAssembly de 150 Ko, depuis ce site. Il reste ensuite en cache et la page marche hors ligne. Les fichiers de plus de 300 Mo sont refusés.' },
        { q: 'Que devient le fichier ?', a: 'L’audio passe par la porte à 48 kHz par trames de 10 millisecondes. Un fichier 44,1 kHz est rééchantillonné à l’entrée puis au retour. Dans notre mix de test, un plancher de bruit à −31 dBFS est ressorti à −61 dBFS et la voix a bougé de moins de 1 dB. L’export MP3 réencode une fois au débit choisi.' },
        { q: 'Qu’est-ce que ça n’enlève pas ?', a: 'Le bruit qui ressemble à la voix. Une autre personne qui parle, une télévision au fond ou une foule restent, parce que ça occupe les mêmes bandes de fréquences que l’orateur. Pour cela il faut de la réparation spectrale dans un DAW de bureau. Le bruit constant comme le souffle, le ronflement et les ventilateurs, voilà le sujet de cette page.' },
        { q: ' Quelle différence avec le retireur de silences ?', a: 'Le [retireur de silences](/silence-remover) coupe les passages silencieux hors de la timeline. Cette page ne déplace aucun échantillon et baisse le bruit constant sous la voix. Utilisez les deux dans cet ordre : d’abord le bruit, ensuite les blancs.' },
        { q: 'Ça marche sur un téléphone ?', a: 'Oui. Le curseur et le bouton d’export sont à la taille du doigt, et la ligne d’état affiche la progression sur les fichiers longs. Le temps de traitement grandit avec la durée du fichier ; une demi-heure d’enregistrement prend du temps sur un téléphone de milieu de gamme.' },
        { q: 'Ça nettoie la musique ?', a: 'Non, et c’est une limite honnête, pas un réglage manquant. RNNoise est entraîné sur la parole, donc sur la musique il prend des instruments pour une voix et le détail s’étouffe. Pour la musique, un [filtre passe-haut](/high-pass-filter) contre le grondement ou l’[égaliseur](/equalizer) pour une coupure ciblée.' },
        { q: 'Puis-je garder un peu d’ambiance ?', a: 'Oui. Baissez le curseur vers 50 pour cent pour mélanger l’original en retour. Dans notre mix de test, 100 pour cent a baissé le plancher de bruit de 30 dB et 50 pour cent de 6 dB. À 0 pour cent, l’export est le fichier original.' },
      ],
      screenshotsAlt: [
        'Supprimer le bruit de fond : zone de dépôt, rien n’est envoyé sur un serveur',
        'Supprimer le bruit de fond : espace de travail avec le fichier chargé',
        'Supprimer le bruit de fond : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Comment RNNoise supprime le bruit de fond',
          paragraphs: [
            'RNNoise suit le plancher de bruit de l’enregistrement et calcule un gain pour chaque bande de fréquences environ cent fois par seconde. Les bandes qui portent la voix restent ouvertes. Les bandes qui portent un bruit stable se ferment.',
            'Les nombres de cette page viennent d’une mesure reproductible, pas d’une promesse marketing. Notre mix de test associe un ton proche d’une voix à un bruit blanc à −31 dBFS. Après la porte à 100 pour cent, le plancher est à −61 dBFS, la bande de voix a bougé de moins de 1 dB, et un clic à pleine échelle est tombé sur l’échantillon exact de son départ.',
          ],
          table: {
            headers: [
              'Force',
              'Ce que vous obtenez',
              'Plancher de bruit dans notre mix de test',
            ],
            rows: [
              [
                '100 %',
                'Suppression maximale. Le résultat le plus propre ; les enregistrements clairs peuvent sonner étouffés.',
                '−30 dB',
              ],
              [
                '50 %',
                'Moitié du mix. Garde un peu de bruit de pièce sous la voix.',
                '−6 dB',
              ],
              [
                '0 %',
                'Contournement. L’export est le fichier d’origine.',
                'aucun changement',
              ],
            ],
          },
        },
        {
          heading: 'Nettoyage de voix, pas de débruitage de musique',
          paragraphs: [
            'La porte est entraînée sur la parole, donc elle traite tout ce qui ressemble à une voix comme ce qu’il faut garder. C’est un atout pour les enregistrements parlés et une limite partout ailleurs :',
          ],
          bullets: [
            'Partent : le souffle, le ronflement, le bruit de ventilateur et de climatisation, le bruit d’un préampli de micro bon marché.',
            'Restent : une seconde voix, une télévision en fond, une foule. Ils ressemblent au locuteur.',
            'Pour la musique, à la place : un [filtre passe-haut](/high-pass-filter) contre le grondement, ou l’[égaliseur audio](/equalizer) pour une coupe ciblée.',
          ],
        },
        {
          heading: 'Débruitage d’abord, coupe ensuite',
          paragraphs: [
            'La réduction de bruit change ce que voit une mesure de silence, donc l’ordre compte. Lancez cette page d’abord. Une fois le plancher à 40 dB sous la voix, le [retirer le silence](/silence-remover) distingue bien plus sûrement le silence d’un mot faible.',
            'Après les deux, alignez la puissance sonore de votre épisode avec le [mesureur de loudness](/loudness-meter) avant de publier.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Supprimer le bruit',
    },
    'audio-looper': {
      cardLine: 'Répétez un clip jusqu’à 16 fois et fondez chaque jointure.',
      name: 'Boucle audio',
      shortName: 'Boucle',
      title: 'Boucle audio — répéter un clip en ligne gratuit',
      description: 'Répétez une sélection ou le fichier entier de 2 à 16 fois, avec un fondu de 0,01 s à chaque jointure. Gratuit dans le navigateur. Rien n’est envoyé.',
      h1: 'Boucle audio — Répéter un clip de 2 à 16 fois, en ligne et gratuit',
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
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Les répétitions sont copiées dans votre navigateur. Une fois la page chargée, l’export fonctionne hors ligne.' },
        { q: 'Que se passe-t-il à chaque jointure ?', a: 'La fin d’un passage et le début du suivant se chevauchent de la durée de la jointure. La valeur de départ est 0,01 seconde. Le chevauchement est un fondu linéaire, un son stable ne saute pas. Le WAV, ce sont ces échantillons. Le MP3 encode la boucle une fois, au débit que vous choisissez. La hauteur et la vitesse ne changent pas.' },
        { q: 'Que refuse la page ?', a: 'Les répétitions vont seulement de 2 à 16. Si le résultat dépasse 10 minutes, l’export s’arrête et la ligne d’état le dit. Cette page n’enregistre pas par-dessus elle-même et ne met pas deux fichiers différents bout à bout.' },
        { q: 'Quelle différence avec le découpage, la jonction et le fondu ?', a: 'Le découpage garde une plage une fois. La jonction aligne des fichiers différents. Le fondu baisse le début ou la fin d’un seul fichier. Cette page réécrit le même clip, et le fondu croisé n’est qu’entre les copies.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Les deux curseurs, la forme d’onde et le bouton d’export se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Boucle audio : zone de dépôt, rien n’est envoyé sur un serveur',
        'Boucle audio : espace de travail avec le fichier chargé',
        'Boucle audio : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Les copies se chevauchent à la jointure',
          paragraphs: [
            'Les répétitions vont de 2 à 16. La valeur par défaut est 4. Chaque jointure se chevauche selon le curseur Join : 0,01 seconde si vous ne le bougez pas, et jamais plus de 0,1 seconde.',
            'Le chevauchement est un fondu enchaîné linéaire, donc un ton stable ne saute pas. La durée d’export est un passage multiplié par le nombre de répétitions, moins le chevauchement multiplié par le nombre moins un. La hauteur et la vitesse restent telles quelles. Le WAV est fait de ces échantillons. Le MP3 encode la boucle une fois.',
          ],
        },
        {
          heading: 'Un clip, écrit de nouveau',
          paragraphs: [
            'Un prolongateur MP3 écrit un clip plusieurs fois pour que le fichier dure plus longtemps. Utilisez-le quand la copie suivante doit être le même audio :',
          ],
          bullets: [
            'Un riff d’une mesure que vous voulez comme fichier d’entraînement.',
            'Un court repère vocal qui doit tenir pendant une scène plus longue.',
            'Un sample dont la jointure claque si les copies se rencontrent sans chevauchement.',
          ],
        },
        {
          heading: 'Pas un rognage, pas une fusion',
          paragraphs: [
            'Le rogneur audio garde un passage une fois. Le joigneur audio place des fichiers différents à la suite. Fondu audio baisse le début ou la fin d’un fichier. Le fondu enchaîné de cette page se trouve seulement entre les copies du même clip.',
            'Cette page n’enregistre pas par-dessus elle-même. Si le résultat dépasserait 10 minutes, l’export s’arrête. Raccourcissez la sélection ou baissez les répétitions.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Boucler et télécharger',
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
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le balayage est un panoramique stéréo dans votre navigateur. Une fois la page chargée, vous pouvez couper le réseau et l’export continue.' },
        { q: 'Qu’arrive-t-il au son ?', a: 'La position est la profondeur fois un sinus de la fréquence. La hauteur et la vitesse de lecture restent. Une stéréo bouge comme une seule image. Les deux canaux ne partent pas sur des trajets différents. Le WAV, ce sont ces échantillons. Le MP3 encode une fois, au débit que vous choisissez.' },
        { q: 'Que refuse la page ?', a: 'Le balayage ne se cale pas sur un temps, et il ne sépare pas le centre et les côtés. À profondeur 0, aucun panoramique n’est inséré, donc l’export correspond au fichier déposé. Ce n’est pas un transfert lié à la tête qui vise un angle.' },
        { q: 'Quelle différence avec l’écho, le slowed reverb et l’égaliseur ?', a: 'L’écho ajoute une copie après un délai. Slowed + reverb change la vitesse et la hauteur, puis ajoute une pièce. L’égaliseur audio change des bandes de fréquence. Cette page ne fait que déplacer le même audio de gauche à droite. Un cercle fixe d’environ 10 secondes, avec une courte queue de réverbe, est la page audio 3D.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Les deux curseurs, l’onde et le bouton d’export se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Auto pan : zone de dépôt, rien n’est envoyé sur un serveur',
        'Auto pan : espace de travail avec le fichier chargé',
        'Auto pan : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Où se place le son',
          paragraphs: [
            'La profondeur va de 0 à 100 %. La valeur de départ est 70 %. La vitesse va de 0,05 Hz à 2 Hz. La valeur de départ est 0,2 Hz.',
            'La position est la profondeur multipliée par un sinus de cette vitesse. À 0,2 Hz, un cycle gauche-droite complet dure 5 secondes. Une profondeur à 0 laisse le fichier tel quel. La hauteur et la vitesse de lecture restent telles quelles.',
          ],
        },
        {
          heading: 'Un balayage régulier',
          paragraphs: [
            'Utilisez-le quand le mouvement doit être régulier :',
          ],
          bullets: [
            'Un pad ou une voix qui doit traverser lentement les enceintes.',
            'Une prise mono qui doit bouger, sans devenir deux pistes différentes.',
            'Une vitesse réglée en hertz, pas un balayage qui tente de suivre la batterie.',
          ],
        },
        {
          heading: 'Pas un écho, pas un changement de tempo',
          paragraphs: [
            'L’écho ajoute une copie après un délai que vous réglez. Slowed + reverb change la vitesse et la hauteur, puis ajoute une pièce. L’égaliseur change des bandes de fréquences. Aucun ne déplace l’image au rythme d’une horloge.',
            'Cette page ne suit pas un rythme. Un fichier stéréo reste une seule image. Les canaux gauche et droit ne partent pas sur des chemins séparés.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Appliquer le panoramique',
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
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le cercle et la pièce sont rendus dans votre navigateur. Une fois la page chargée, vous pouvez couper le réseau et l’export continue.' },
        { q: 'Qu’arrive-t-il au son ?', a: 'La profondeur reste à 100 %. La fréquence reste à 0,1 Hz, environ 10 secondes pour un tour. C’est le son direct qui bouge. La réverbe est un envoi à 25 %, la même pièce courte que Slowed + reverb, donc le fichier gagne une queue. La vitesse et la hauteur restent. Le WAV, ce sont ces échantillons. Le MP3 encode une fois, au débit que vous choisissez.' },
        { q: 'Que refuse la page ?', a: 'Vous ne pouvez pas choisir une autre fréquence, une autre profondeur ou une autre pièce. Cela ne suit pas un temps. Cela ne vise pas un angle autour de votre tête. Interrupteur éteint, il n’y a ni cercle ni queue.' },
        { q: 'Quelle différence avec l’auto pan et le slowed reverb ?', a: 'Pour régler vous-même la fréquence et la profondeur, utilisez l’auto pan. Cette page est le cercle fini, environ 10 secondes, avec la réverbe déjà allumée. Slowed + reverb change la vitesse et la hauteur. Cette page non.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. L’interrupteur, l’onde et le bouton d’export se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Audio 3D : zone de dépôt, rien n’est envoyé sur un serveur',
        'Audio 3D : espace de travail avec le fichier chargé',
        'Audio 3D : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Un cercle avec les nombres déjà choisis',
          paragraphs: [
            'La profondeur est 100 %. La vitesse est 0,1 Hz. Un trajet depuis le milieu, vers un côté, puis par l’autre côté dure environ 10 secondes.',
            'C’est le son direct qui bouge. La réverbe est un envoi à 25 %, la même pièce courte que sur la page slowed + reverb. La queue est la raison pour laquelle l’export dépasse la fin du fichier déposé.',
          ],
        },
        {
          heading: 'Quand le préréglage fait le travail',
          paragraphs: [
            'Utilisez cette page quand vous voulez le mouvement fini :',
          ],
          bullets: [
            'Une voix ou un pad qui doit errer sans curseur de vitesse.',
            'Une pièce courte derrière ce mouvement, pas une nappe à mixer vous-même.',
            'La vitesse et la hauteur d’origine, laissées où elles étaient.',
          ],
        },
        {
          heading: 'Pas un panoramique à régler, pas un ralentissement',
          paragraphs: [
            'L’auto pan est là où vous réglez la profondeur de 0 à 100 % et la vitesse de 0,05 Hz à 2 Hz, sans réverbe. Cette page fixe les deux nombres et ajoute la pièce.',
            'Slowed + reverb change la vitesse, et la hauteur bouge avec. Cette page ne le fait pas. Couper l’interrupteur laisse le fichier tel que vous l’avez déposé.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour parcourir',
      exportLabel: 'Appliquer la 3D',
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
        { q: 'Est-ce qu’on envoie quelque chose ?', a: 'Non. La page ne lit pas de fichier et n’ouvre pas le micro. La lecture et l’export restent dans le navigateur. Une fois la page chargée, vous pouvez couper le réseau et le clic continue.' },
        { q: 'À quoi ressemble le clic ?', a: 'À 100 BPM, les clics sont espacés de 0,60 seconde. Le premier temps de la mesure est plus fort. Les autres sont le même son, plus bas. Le WAV, ce sont ces échantillons. Le MP3 les encode une fois, au débit que vous choisissez.' },
        { q: 'Que refuse la page ?', a: 'Elle n’aligne pas le clic sur un morceau. Il n’y a pas d’endroit pour déposer un fichier. Le 6/8 reste à six clics dans la mesure, au BPM du curseur. Elle ne passe pas à deux clics de noire pointée.' },
        { q: 'Quelle différence avec le multipiste et la vitesse ?', a: 'Cette page, c’est seulement le clic. Mettre ce clic sous un morceau, c’est l’éditeur multipiste. Changer la durée d’un enregistrement, c’est la page de vitesse, et la hauteur bouge avec. Le micro, c’est l’enregistreur vocal.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Le curseur de BPM, la mesure, la lecture et l’export se touchent dans Chrome, Edge, Firefox et Safari actuels. Le clic utilise un oscillateur Web Audio. Le fichier exporté utilise le même intervalle.' },
      ],
      screenshotsAlt: [
        'Métronome : la page avant tout fichier ou toute saisie',
        'Métronome : après la lecture du fichier ou les taps',
        'Métronome : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Le clic',
          paragraphs: [
            'À 100 BPM, les clics sont espacés de 0,60 seconde. Le premier temps de la mesure est plus fort. Chaque clic est le même son court.',
            '2/4 clique deux fois par mesure, 3/4 trois fois, 4/4 quatre fois et 6/8 six fois. Le BPM est la fréquence des clics dans chacun de ces mètres.',
          ],
        },
        {
          heading: 'Un fichier des mêmes clics',
          paragraphs: [
            'L’export écrit 4, 8 ou 16 mesures. Le WAV garde les clics tels quels. Le MP3 encode ce résultat une fois.',
          ],
          bullets: [
            'Quatre mesures de 4/4 à 100 BPM font 16 clics.',
            'Déposez ce WAV sur l’éditeur multipiste si vous le voulez sous une chanson.',
            'Restez sur lecture si vous vouliez seulement entendre le tempo.',
          ],
        },
        {
          heading: 'Ce qu’il ne fait pas',
          paragraphs: [
            'Il n’aligne pas les clics sur une chanson. Il n’y a pas de fichier à déposer ni de forme d’onde à rogner.',
            'Il ne change pas la durée d’un enregistrement. La page [ralentir une chanson](/change-audio-speed) le fait, et la hauteur bouge avec la vitesse.',
          ],
        },
      ],
      dropHint: 'Pas de fichier. Lancez la lecture.',
    },
    'tap-tempo': {
      cardLine: 'Tapez le temps et lisez le BPM de tout, sans fichier.',
      name: 'Tap tempo',
      shortName: 'Tap tempo',
      title: 'Tap tempo — trouvez le BPM d’une chanson en tapant',
      description: 'Tapez en suivant une chanson et lisez son BPM. Une tape égarée ne déplace pas le chiffre ; il se fixe en quatre tapes. Gratuit, rien n’est téléversé.',
      h1: 'Tap tempo — trouver le BPM d’une chanson en tapant le temps',
      heroAlt: 'Un temps tapé comme des ondulations autour d’un point',
      howToIntro: 'Tapez, et la lecture se pose',
      subtitle: 'Touchez n’importe quelle touche ou bouton en rythme. Le chiffre se fixe en quatre tapes environ.',
      intro: 'Jouez la chanson où vous voulez, tapez cette page à chaque temps et lisez le tempo en BPM. Le chiffre prend une moyenne tronquée de vos intervalles : une tape en avance ou manquée ne l’entraîne pas, et 2,5 s sans tape repartent de zéro. Aucun fichier à ouvrir, rien à téléverser ; les tapes ne quittent jamais cette page.',
      usesHeading: 'À quoi sert un BPM tapé',
      uses: ['Régler une boucle de travail ou un métronome sur le tempo d’une chanson que vous apprenez.', 'Vérifier si deux morceaux s’assemblent avant de tenter un enchaînement.', 'Lire le tempo d’une mélodie dans votre tête plus vite que de le décrire à un outil.'],
      howTo: [
        { name: 'Jouez la chanson', text: 'Où vous voulez. Cette page n’a pas besoin du fichier audio : un haut-parleur de téléphone à côté d’un ordinateur fait très bien l’affaire.' },
        { name: 'Tapez le temps', text: 'Tapez le bouton, ou gardez le focus sur la page et appuyez sur la barre d’espace à chaque temps. Le chiffre se raffermît après quatre tapes environ et continue de s’affiner tant que vous tapez.' },
        { name: 'Lisez et remettez à zéro', text: 'Le chiffre est des battements par minute, à une décimale. Arrêtez de taper 2,5 s et la prochaine tape repart de zéro, ou touchez Réinitialiser pour effacer aussitôt.' },
      ],
      faqs: [
        { q: 'Ma musique est-elle téléversée ?', a: 'Non, et il n’y a même pas de fichier. La page compte les millisecondes entre vos tapes. Rien de la chanson, des tapes ou de quoi que ce soit d’autre ne quitte cette page.' },
        { q: 'Quelle précision ?', a: 'Celle de votre frappe, dans des limites qui n’ont pas d’importance pour la musique. Lors d’un test mesuré, un jitter de tape de plus ou moins 20 millisecondes garde le chiffre à environ 2 BPM du tempo réel. Le chiffre prend une moyenne tronquée de vos intervalles : une tape égarée ne le déplace pas.' },
        { q: 'Quelle différence avec le détecteur de BPM ?', a: 'La [tonalité et BPM](/key-bpm-finder) analyse un fichier audio et lit tempo et tonalité dans la forme d’onde, ce qui est exact pour de la musique produite. Cette page lit ce que vous tapez : elle marche sur un groupe en direct, une mélodie dans votre tête, ou une chanson que vous ne pouvez pas téléverser ou n’avez pas en fichier.' },
        { q: 'J’ai tapé un temps qui n’existe pas. Et maintenant ?', a: 'Rien n’a cassé. La tape égarée atterrit dans la pile d’écart de la moyenne tronquée, et 2,5 s de silence effacent le compte de toute façon. Pour repartir aussitôt, touchez Réinitialiser.' },
        { q: 'Cela marche-t-il sur un téléphone ?', a: 'Oui. Le bouton de tape a la taille d’un pouce et la page pèse presque rien. Taper le temps sur l’appareil qui joue la musique, c’est très bien ; la page n’écoute pas l’audio.' },
        { q: 'Quels tempos peut-il lire ?', a: 'Tout ce dont les tapes sont espacées de 2,5 s à pratiquement rien, soit environ 24 à 999 BPM. La musique vit entre 40 et 240, où le chiffre est le plus stable. Pour des pièces très lentes, tapez les subdivisions et divisez par deux.' },
        { q: 'Peut-il ralentir la chanson pour coller au BPM ?', a: 'Pas ici ; cette page ne fait que lire. Portez le chiffre au [métronome](/metronome) pour travailler avec, ou au [changeur de vitesse](/change-audio-speed) pour amener un fichier à un tempo cible.' },
      ],
      screenshotsAlt: [
        'Tap tempo : l’affichage montre un tiret avant le premier tap',
        'Tap tempo après sept taps : l’affichage s’est stabilisé à 120,2 BPM',
      ],
      sections: [
        {
          heading: 'Comment le nombre est calculé',
          paragraphs: [
            'Chaque tape stocke un horodatage. Les écarts entre vos tapes récentes sont triés, le quart le plus rapide et le quart le plus lent disparaissent, et les écarts restants sont moyennés. Soixante mille divisé par cette moyenne donne le BPM, affiché à une décimale.',
            'L’élagage est toute l’astuce. La frappe humaine a des valeurs aberrantes : une tape un poil tôt, un temps où vous avez écouté au lieu de compter. Une moyenne simple laisse l’une ou l’autre tirer le nombre ; la moyenne élaguée traite les deux queues comme du bruit et lit le tempo que vous avez réellement tenu.',
          ],
        },
        {
          heading: 'Tap tempo ou l’analyseur de fichier',
          paragraphs: [
            'Utilisez cette page quand le tempo vit dans votre oreille : un groupe live, une mélodie acoustique, un morceau que vous ne pouvez pas donner à un outil. Utilisez [Tonalité et BPM](/key-bpm-finder) quand vous avez le fichier et voulez le tempo produit exact plus la tonalité. Quand les deux ne sont pas d’accord, faites confiance au fichier.',
          ],
        },
      ],
      dropHint: 'Pas de fichier. Tapez le temps.',
      exportLabel: 'Tap tempo',
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
      intro: 'Déposez un fichier. La page lit un BPM de 60 à 180, et une tonalité : une note plus majeur ou mineur. Le BPM est l’écart le plus fort entre les attaques. Un écart hors de cette plage est divisé ou doublé jusqu’à tomber dedans. La tonalité est le profil majeur ou mineur fixe qui correspond le mieux aux classes de hauteur. Le silence affiche « Illisible », pas 0 BPM et pas do majeur. Seules les 60 premières secondes sont lues. Un fichier de moins de 2 secondes n’a pas de BPM. Cette page ne change pas le fichier. Déplacer la hauteur, c’est le changeur de hauteur. Rien n’est envoyé.',
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
        { q: 'Le fichier est-il envoyé ?', a: 'Non. Le navigateur le décode et lit les échantillons en mémoire. Une fois la page chargée, vous pouvez couper le réseau et lire quand même un fichier que vous déposez.' },
        { q: 'La lecture est-elle exacte ?', a: 'Le BPM est l’écart d’attaque le plus fort entre 60 et 180, en entier. La tonalité est le meilleur accord avec un profil majeur fixe et un profil mineur fixe, 12 poids chacun. Ce n’est pas une transcription d’accords.' },
        { q: 'Que refuse la page ?', a: 'Elle ne change ni la hauteur ni la vitesse. Il n’y a pas de bouton pour une nouvelle tonalité. Un fichier de moins de 2 secondes n’a pas de BPM. Le silence affiche illisible, pas 0 et pas do majeur. Seules les 60 premières secondes sont lues.' },
        { q: 'Quelle différence avec le changeur de hauteur et la page de vitesse ?', a: 'Cette page ne fait que lire. Le changeur de hauteur déplace la hauteur et garde la durée. La page de vitesse change la durée, et la hauteur bouge avec. Le changeur de tempo change la durée et la hauteur reste, de 0,75× à 1,25×.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Déposez le fichier et lisez les deux nombres. La zone de dépôt et le bouton de reprise se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Tonalité et BPM : la page avant tout fichier ou toute saisie',
        'Tonalité et BPM : après la lecture du fichier ou les taps',
      ],
      sections: [
        {
          heading: 'Ce que sont les deux nombres',
          paragraphs: [
            'Le BPM est l’écart le plus fort entre les attaques, de 60 à 180. Un écart hors de cette plage est divisé ou doublé jusqu’à revenir dedans.',
            'La tonalité est le profil majeur ou mineur qui correspond le mieux à l’énergie des classes de hauteur. Chaque profil est un ensemble fixe de 12 poids.',
          ],
        },
        {
          heading: 'Quand la lecture est faible',
          paragraphs: [
            'Un rythme libre, de la parole et du bruit de pièce n’ont pas d’écart stable, donc le BPM peut se poser sur un mauvais multiple. Un majeur et son relatif mineur partagent beaucoup de hauteurs, donc les deux peuvent s’échanger.',
          ],
          bullets: [
            'Un fichier silencieux affiche Lecture impossible pour les deux nombres.',
            'Un fichier de moins de 2 secondes peut encore afficher une tonalité, et il n’affiche pas de BPM.',
            'Seules les 60 premières secondes sont lues.',
          ],
        },
        {
          heading: 'Ce qu’il ne fait pas',
          paragraphs: [
            'Il ne déplace pas la hauteur. Il n’y a pas de bouton pour une nouvelle tonalité. C’est le changeur de hauteur tonale, et la durée reste identique.',
            'Il ne change pas la vitesse. La page vitesse le fait, et la hauteur bouge avec la vitesse.',
          ],
        },
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
      intro: "Déposez un fichier et lisez sa loudness intégrée en LUFS, plus la crête d’échantillon. Puis alignez une cible de livraison : podcast −16, streaming −14 ou diffusion −23. Le gain est un seul nombre pour tout le fichier. S’il poussait l’échantillon le plus fort au-delà de −1 dBFS, il s’arrête là et la page indique les LUFS réellement atteints. Ce n’est pas un sonomètre de pièce, ni une normalisation par crête. −16, −14 et −23 sont des cibles de livraison courantes, pas une limite légale. Le traitement reste dans votre navigateur.",
      usesHeading: "À quoi sert le chiffre",
      uses: ["Voir si un mémo vocal ou un mix est proche d’une cible podcast avant de l’envoyer.", "Remonter un fichier bas vers −16 ou −14 sans laisser la crête d’échantillon passer −1 dBFS.", "Lire une stéréo en stéréo. Les deux canaux ne sont pas mélangés avant la mesure."],
      howTo: [
        { name: "Déposez l’audio", text: "N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé et mesuré sur votre appareil." },
        { name: "Lisez la mesure", text: "Intégrée est la loudness du fichier après pondération K, en LUFS. La crête d’échantillon est le plus grand échantillon, en dBFS. Un fichier silencieux n’a pas de loudness à aligner." },
        { name: "Choisissez une cible et exportez", text: "Podcast −16, streaming −14, diffusion −23. Exportez en MP3 ou WAV. Si la crête dépassait −1 dBFS, le gain s’arrête et la note montre les LUFS obtenus." },
      ],
      faqs: [
        { q: "Mon audio est-il envoyé ?", a: "Non. Le fichier est décodé et mesuré dans votre navigateur. Une fois la page chargée, vous pouvez couper le réseau : l’export fonctionne encore." },
        { q: "Que signifie le chiffre ?", a: "Les LUFS intégrés disent à quel point le fichier est fort sur toute sa durée, après la pondération K de l’ITU-R BS.1770. C’est une propriété du fichier. Ce n’est pas une mesure de la pièce, ni un niveau de pression acoustique pondéré A." },
        { q: "En quoi est-ce différent de la normalisation ?", a: "La normalisation monte le fichier jusqu’à ce que l’échantillon le plus fort touche une crête. Cette page aligne la loudness intégrée. Un fichier peut être normalisé en crête et rester loin de −16 LUFS. Le fort et le faible gardent le même écart. Le compresseur de niveau est la page qui réduit cet écart." },
        { q: "−16, −14 et −23 sont-ils des limites légales ?", a: "Non. Ce sont des cibles de livraison courantes : les podcasts demandent souvent environ −16 LUFS, le streaming musical environ −14, la diffusion environ −23. La page ne promet pas que votre fichier passera une plateforme ou un diffuseur." },
        { q: "La crête est-elle une crête réelle ?", a: "Non. La crête d’échantillon est le plus grand échantillon du fichier. Une crête réelle demande un suréchantillonnage et peut être un peu plus haute entre les échantillons. Cette page tient la crête d’échantillon à −1 dBFS et ne donne pas de dBTP." },
        { q: "Est-ce que ça marche sur un téléphone ?", a: "Oui. Les trois cibles et le bouton d’export répondent au toucher dans Chrome, Edge, Firefox et Safari actuels." },
      ],
      screenshotsAlt: [
        'Mesureur de loudness : la page avant tout fichier ou toute saisie',
        'Mesureur de loudness : après la lecture du fichier ou les taps',
      ],
      sections: [
        {
          heading: 'Une lecture de fichier, pas un mesureur de pièce',
          paragraphs: [
            'Le nombre est le LUFS intégré : la force du fichier sur sa durée, après la pondération K de l’ITU-R BS.1770. C’est une propriété du fichier. Ce n’est pas une lecture de la pièce, ni un niveau de pression sonore pondéré A.',
            'La page affiche aussi la crête d’échantillon. Cette crête n’est pas la crête réelle. Les crêtes inter-échantillons peuvent encore dépasser le plafond sur certains chemins de lecture.',
          ],
        },
        {
          heading: 'Les cibles réellement utilisées',
          paragraphs: [
            'Les points de référence habituels sont des conventions, pas des limites légales :',
          ],
          bullets: [
            'Environ −16 LUFS pour un podcast parlé.',
            'Environ −14 LUFS pour une grande partie du streaming musical.',
            'Environ −23 LUFS pour une puissance sonore de type diffusion.',
          ],
        },
        {
          heading: 'Le gain s’arrête à la crête',
          paragraphs: [
            'Si vous appliquez le gain suggéré, il s’arrête quand la crête d’échantillon dépasserait −1 dBFS. Un fichier peut déjà être normalisé en crête et rester loin de −16 LUFS, car une toux fixe la crête pendant que le reste reste faible.',
            'La normalisation ne poursuit que cette crête, vers environ −0,2 dB. Le compresseur de niveau est ce qui réduit l’écart entre fort et faible. Cette page mesure. Elle ne prétend pas qu’un seul nombre fait un master.',
          ],
        },
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
      intro: 'Posez une voix sur un beat, ou un commentaire sur une musique, et écoutez-les ensemble. Chaque fichier est une piste : niveau, pan, muet, solo, et l’instant où elle entre. La somme se fait dans votre navigateur. Rien n’est envoyé. Fermer l’onglet termine la session.',
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
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le navigateur décode chaque fichier avec decodeAudioData et additionne les échantillons en mémoire. Une fois la page chargée, l’export n’a pas besoin d’un serveur. Fermer l’onglet jette la session : pas de compte, pas de projet enregistré.' },
        { q: 'Qu’arrive-t-il au son ?', a: 'Les pistes sont rééchantillonnées au taux le plus élevé parmi elles, au minimum 44,1 kHz, par interpolation linéaire. Le WAV est le PCM 16 bits de ce mix stéréo. Le MP3 est encodé une fois, au débit que vous choisissez, jusqu’à 320 kbps. Si le pic de la somme dépasse 0,98, tout le mix est réduit pour que le pic tombe à 0,98. C’est un changement de gain, pas un compresseur, et pas un second encodage.' },
        { q: 'Que ne fait-il pas ?', a: 'Il n’enregistre pas de MIDI, ne charge pas d’instruments ni de samples, ne trace pas de courbe de volume et ne baisse pas la musique sous la voix tout seul. Un clip par piste, huit pistes, pas de fichier de projet. Plugins, automation et une session à rouvrir demain : Audacity, ou un DAW de navigateur comme BandLab.' },
        { q: 'En quoi est-ce différent de la fusion ?', a: 'La fusion place les fichiers bout à bout : l’un finit, le suivant commence, avec un fondu enchaîné possible. Cette page les joue en même temps. Une playlist dans un seul fichier, c’est la fusion. Une voix sur un beat, c’est cette page.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. La timeline défile sur le côté. Niveau, pan, début et coupe sont des curseurs et des nombres, sans un glisser précis. Chrome, Edge, Firefox et Safari actuels décodent les formats courants. Un fichier illisible est ignoré, les autres restent.' },
        { q: 'Pourquoi seulement 8 pistes ?', a: 'Chaque piste est décodée en mémoire avant la lecture. Huit fichiers stéréo, c’est déjà beaucoup pour un onglet de téléphone. Une production 16 pistes avec plugins est un autre outil.' },
      ],
      screenshotsAlt: [
        'Éditeur audio multipiste : zone de dépôt, rien n’est envoyé sur un serveur',
        'Éditeur audio multipiste : espace de travail avec le fichier chargé',
        'Éditeur audio multipiste : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Une petite table de mixage, pas un DAW',
          paragraphs: [
            'Chaque fichier est un clip sur sa propre piste. Vous réglez le niveau, le panoramique, le mute, le solo et le point de départ du clip. Jusqu’à huit pistes jouent ensemble et s’exportent en un fichier.',
            'Cette page ne charge pas de plugins et n’enregistre pas de projet à rouvrir. Jusqu’à 8 pistes.',
          ],
        },
        {
          heading: 'À quoi elle sert',
          paragraphs: [
            'Elle convient aux petits empilements que vous feriez autrement dans un logiciel plus lourd :',
          ],
          bullets: [
            'Une piste de voix sur un fond musical, avec la voix plus forte.',
            'Deux prises alignées par leur départ, l’une en solo pendant la comparaison.',
            'Une image stéréo décalée au panoramique, puis un seul export.',
          ],
        },
        {
          heading: 'La session s’arrête avec l’onglet',
          paragraphs: [
            'Rien n’est téléversé et il n’y a pas de fichier de projet. Si vous fermez l’onglet avant l’export, le mix disparaît.',
            'Les fichiers qui doivent jouer l’un après l’autre, pas l’un sur l’autre, relèvent de [fusionner l’audio](/audio-joiner). Là-bas, le fondu enchaîné va de 0 à 5 secondes, par pas de 0,5. Cette page empile les pistes.',
          ],
        },
      ],
      dropHint: 'Déposez deux fichiers audio ou plus pour les empiler',
    },
    'split-mp3': {
      cardLine: 'Coupez un fichier en 2 à 16 parties égales et téléchargez-les ensemble.',
      name: 'Diviser un MP3',
      shortName: 'Diviseur',
      title: 'Diviser un MP3 — 2 à 16 fichiers égaux',
      description: 'Coupez un enregistrement en 2 à 16 fichiers égaux, un zip. Le WAV garde les échantillons. Chaque MP3 est encodé une fois, jusqu’à 320 kbps.',
      h1: 'Diviser un MP3 en plusieurs fichiers',
      heroAlt: 'Couper un enregistrement en fichiers égaux',
      subtitle: 'Parties égales, de 2 à 16, dans un seul zip.',
      intro: 'Ce diviseur audio coupe un fichier en parties égales. Le nombre va de 2 à 16 et commence à 2, donc en deux parties. Chaque partie a la même durée, à un échantillon près. Faites glisser une sélection pour ne diviser que ce passage. Sans sélection, le fichier entier est divisé. Les parties se téléchargent dans un zip. Le décodage et les coupes restent dans votre navigateur.',
      usesHeading: 'À quoi servent les parties',
      uses: ['Divisez un MP3 en plusieurs fichiers quand un seul est trop long à envoyer.', 'Découpez un mémo vocal en morceaux égaux que vous envoyez un par un.', 'Divisez un fichier audio en parties sans chercher le silence.'],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé sur votre appareil.' },
        { name: 'Choisissez le nombre', text: 'Les morceaux vont de 2 à 16. La ligne d’état indique combien de fichiers vous obtenez et à peu près combien dure chacun. Faites glisser la forme d’onde si seule une partie du fichier doit être coupée.' },
        { name: 'Téléchargez le zip', text: 'Exportez en MP3 ou WAV. Le téléchargement est un zip au nom du fichier, avec le morceau 1, le morceau 2 et le reste dedans.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le fichier est décodé dans votre navigateur, coupé là, et rangé dans un zip là. Une fois la page chargée, vous pouvez passer hors ligne et l’export continue. Le WAV ne demande pas d’autre téléchargement. L’encodage MP3 marche hors ligne après que l’encodeur a été chargé une fois.' },
        { q: 'Où tombent les coupes ?', a: 'Sur les limites d’échantillon. Les parties ont la même durée, et si le nombre d’échantillons ne se divise pas juste, les premières sont plus longues d’un échantillon. Rien ne se chevauche et rien n’est perdu. Le WAV, ce sont ces échantillons. Chaque MP3 est encodé une fois, au débit que vous choisissez, jusqu’à 320 kbps. En les écoutant à la suite, la jointure peut montrer quelques millisecondes de remplissage du codec.' },
        { q: 'Est-ce que ça coupe sur le silence ou les chapitres ?', a: 'Non. Les coupes sont à temps égal, pas un balayage des pauses, des marques de chapitre ou d’un nouveau morceau. Une mesure calme est coupée là où l’horloge le dit. Les morceaux vont seulement de 2 à 16. Un fichier qui a moins d’échantillons que de morceaux est refusé.' },
        { q: 'En quoi est-ce différent du coupeur ?', a: 'Le coupeur audio et le coupeur MP3 gardent un passage, ou en suppriment un, et enregistrent un fichier. Cette page écrit plusieurs fichiers de même durée. La fusion audio fait l’inverse : elle place des fichiers différents à la suite. Retirer le silence est la page qui suit les pauses.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Le curseur de morceaux, la forme d’onde et le téléchargement se touchent dans Chrome, Edge, Firefox et Safari actuels. Sur iPhone, Safari range le zip dans l’app Fichiers.' },
      ],
      screenshotsAlt: [
        'Diviser un MP3 : zone de dépôt, rien n’est envoyé sur un serveur',
        'Diviser un MP3 : espace de travail avec le fichier chargé',
        'Diviser un MP3 : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Des coupes égales, sur les échantillons',
          paragraphs: [
            'Les parties vont de 2 à 16. La valeur de départ est 2. Chaque partie a la même durée, sauf que les premières parties peuvent avoir un échantillon de plus quand la durée ne se divise pas également. La partie suivante commence sur l’échantillon après la fin de la précédente. Il n’y a ni chevauchement ni trou.',
            'Faites glisser une sélection pour ne diviser que ce passage. Sans sélection, tout le fichier est divisé. Le WAV est fait de ces échantillons. Un export MP3 encode chaque partie une fois, au débit choisi, jusqu’à 320 kbps. Lire les MP3 à la suite peut révéler quelques millisecondes de remplissage du codec à la jointure. Les échantillons eux-mêmes n’ont pas été chevauchés.',
          ],
        },
        {
          heading: 'Un fichier, plusieurs téléchargements',
          paragraphs: [
            'Le zip est la façon dont les parties quittent le navigateur :',
          ],
          bullets: [
            'Une longue note vocale coupée en morceaux égaux que vous pouvez envoyer un par un.',
            'Une chanson divisée en deux quand une appli de messagerie refuse le fichier entier.',
            'Une prise que vous voulez en fichiers séparés, pas en un clip rogné.',
          ],
        },
        {
          heading: 'Pas le coupeur, et pas un scan de silence',
          paragraphs: [
            'Le rogneur audio et le coupeur MP3 gardent un passage, ou suppriment un passage, et enregistrent un fichier. Cette page écrit plusieurs fichiers de durée égale. Le joigneur audio fait l’inverse : il place des fichiers différents à la suite.',
            'Il ne cherche ni silence, ni marque de chapitre, ni nouvelle chanson. Une mesure calme est coupée là où l’horloge le dit. Si les coupes doivent suivre les pauses, utilisez [retirer le silence](/silence-remover), puis rognez ce qui reste.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour le choisir',
      exportLabel: 'Télécharger les morceaux',
    },
    'stereo-to-mono': {
      cardLine: 'Faites la moyenne de chaque canal en un seul, puis téléchargez ce fichier.',
      name: 'Stéréo vers mono',
      shortName: 'Vers mono',
      title: 'Stéréo vers mono — un canal en moyenne',
      description: 'Faites la moyenne des canaux en un seul et téléchargez-le. Le WAV garde ces échantillons. Un MP3 encode ce mono une fois, jusqu’à 320 kbps.',
      h1: 'Stéréo vers mono',
      heroAlt: 'Ramener un stéréo à un canal par moyenne',
      subtitle: 'Un canal : la moyenne de chaque canal du fichier.',
      intro: 'Cette page écrit un canal. Chaque échantillon est la moyenne des canaux du fichier, donc gauche et droite se rejoignent au centre. Un fichier déjà en un canal est copié. Le décodage et la moyenne restent dans votre navigateur.',
      usesHeading: 'Quand il vous faut un seul canal',
      uses: [
        'Une note vocale qui doit sonner pareil sur un seul haut-parleur.',
        'Un fichier refusé par un lecteur ou une appli qui n’accepte que le mono.',
        'Un mix dont la gauche et la droite doivent se superposer, pas s’écarter.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé sur votre appareil.' },
        { name: 'Exportez la moyenne', text: 'Il n’y a pas de réglage de largeur. L’export écrit un canal. Écoutez d’abord si vous voulez entendre la moyenne.' },
        { name: 'Ouvrez le fichier', text: 'Un lecteur qui affiche le nombre de canaux devrait dire un. Le WAV, ce sont ces échantillons moyennés. Le MP3 les encode une fois, jusqu’à 320 kbps.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le fichier est décodé dans votre navigateur et moyenné là. Une fois la page chargée, vous pouvez passer hors ligne et l’export continue. Le WAV ne demande pas d’autre téléchargement. L’encodage MP3 marche hors ligne après que l’encodeur a été chargé une fois.' },
        { q: 'Comment le mono est-il fait ?', a: 'Chaque échantillon est la somme des canaux à cet instant, divisée par le nombre de canaux. Deux canaux, c’est (gauche + droite) / 2. Un fichier déjà en un canal est copié. Le WAV garde ces échantillons. Un MP3 encode ce canal une fois, au débit que vous choisissez, jusqu’à 320 kbps.' },
        { q: 'Peut-il passer du mono au stéréo ?', a: 'Non. Cette page n’invente pas un second canal. Copier un canal à gauche et à droite reste un seul signal, et c’est un autre travail. Le fichier que vous téléchargez ici a un canal.' },
        { q: 'En quoi est-ce différent du coupeur ?', a: 'Le coupeur audio garde un passage dans le temps et laisse le nombre de canaux. Le convertisseur MP3 vers WAV change le contenant et laisse aussi les canaux. Cette page change le nombre de canaux et garde la durée.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Déposer, lire et télécharger se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Stéréo vers mono : zone de dépôt, rien n’est envoyé sur un serveur',
        'Stéréo vers mono : espace de travail avec le fichier chargé',
        'Stéréo vers mono : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'La moyenne, échantillon par échantillon',
          paragraphs: [
            'Chaque échantillon de sortie est la somme des canaux à cet instant, divisée par le nombre de canaux du fichier. Deux canaux donnent (gauche + droit) / 2. Un seul canal est copié dans un nouveau tampon. La durée ne change pas.',
            'La page ne construit pas d’image stéréo, pas de réglage de largeur et pas de second fichier. L’export est un seul canal. Le WAV est fait de ces échantillons. Un MP3 encode ce fichier mono une fois, au débit choisi, jusqu’à 320 kbps.',
          ],
        },
        {
          heading: 'À quoi sert le canal unique',
          paragraphs: [
            'La moyenne est tout le travail :',
          ],
          bullets: [
            'Une note vocale qui doit sonner pareil sur un seul haut-parleur.',
            'Un fichier qu’une appli mono a refusé parce qu’il avait encore deux canaux.',
            'Un mix que vous voulez au milieu, pas réparti entre gauche et droite.',
          ],
        },
        {
          heading: 'Pas un rognage, pas un faux stéréo',
          paragraphs: [
            'Le rogneur audio garde un passage et laisse les canaux tels qu’ils étaient. MP3 vers WAV change le format et laisse aussi les canaux. Cette page garde la durée et écrit un seul canal.',
            'Elle ne transforme pas un canal en deux. Dupliquer un canal pour qu’un lecteur affiche stéréo transporte toujours un seul signal. Ce n’est pas ce que fait cet export.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour le choisir',
      exportLabel: 'Télécharger le mono',
    },
    bitcrusher: {
      cardLine: 'Quantifiez de 1 à 16 bits et tenez chaque marche jusqu’à 32 échantillons.',
      name: 'Bitcrusher',
      shortName: 'Crush',
      title: 'Bitcrusher en ligne — de 1 à 16 bits',
      description: 'Quantifiez de 16 bits à 1 et tenez chaque marche jusqu’à 32 échantillons. Le WAV garde ces échantillons. Le MP3 les encode une fois, jusqu’à 320 kbps.',
      h1: 'Bitcrusher en ligne',
      heroAlt: 'Transformer une onde lisse en marches',
      subtitle: 'Bits de 1 à 16, et une tenue de 1 à 32 échantillons.',
      intro: 'Ce bitcrusher en ligne réduit le nombre de niveaux que chaque échantillon peut prendre, puis tient ce niveau sur une suite d’échantillons. La stéréo reste stéréo : chaque canal est écrasé seul. Faites glisser une sélection pour n’écraser que ce passage. Le décodage et l’écrasement restent dans votre navigateur.',
      usesHeading: 'À quoi servent les marches',
      uses: [
        'Une voix qui doit sonner comme une vieille console.',
        'Une boucle de batterie dont les marches doivent rester audibles.',
        'Une phrase du fichier, le reste inchangé.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé sur votre appareil.' },
        { name: 'Réglez bits et tenue', text: 'Les bits vont de 1 à 16 et commencent à 8. La tenue va de 1 à 32 et commence à 2. Écoutez pour l’entendre. Faites glisser la forme d’onde si seul un passage doit être écrasé.' },
        { name: 'Exportez', text: 'Le WAV garde les échantillons en marches. Le MP3 les encode une fois, jusqu’à 320 kbps, et peut adoucir les marches.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le fichier est décodé dans votre navigateur et écrasé là. Une fois la page chargée, vous pouvez passer hors ligne et l’export continue. Le WAV ne demande pas d’autre téléchargement. L’encodage MP3 marche hors ligne après que l’encodeur a été chargé une fois.' },
        { q: 'Que font les bits et la tenue ?', a: 'Les bits fixent le nombre de niveaux. À 16 bits, un échantillon à pleine échelle reste en place si la tenue est 1. À 1 bit, un échantillon devient haut, bas ou silence. La tenue répète le niveau actuel pendant autant d’échantillons : une tenue de 4 garde une valeur sur quatre échantillons, puis prend la marche suivante. Chaque canal est écrasé seul, donc un fichier stéréo reste stéréo.' },
        { q: 'Le MP3 garde-t-il les marches ?', a: 'Le WAV, ce sont les échantillons écrasés. Un MP3 les encode une fois, au débit que vous choisissez, jusqu’à 320 kbps. L’encodeur peut arrondir les marches vives. Si les marches doivent rester, exportez en WAV.' },
        { q: 'En quoi est-ce différent de la distorsion ?', a: 'La distorsion audio plie l’onde par une courbe lisse. Cette page remplace les échantillons par une courte liste de niveaux, puis les tient. L’écho ajoute des copies plus tard. Le filtre passe-bas baisse les aigus. Aucun de ces trois n’est un réglage de profondeur de bits.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Le curseur de bits, celui de tenue, la forme d’onde et le téléchargement se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Bitcrusher : zone de dépôt, rien n’est envoyé sur un serveur',
        'Bitcrusher : espace de travail avec le fichier chargé',
        'Bitcrusher : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Des niveaux, puis un maintien',
          paragraphs: [
            'Les bits vont de 1 à 16. La valeur de départ est 8. Un échantillon est arrondi au niveau le plus proche dans cette plage. À 1 bit, le niveau ne peut être que haut, bas ou silence. À 16 bits, un échantillon à pleine échelle reste à pleine échelle quand le maintien est 1.',
            'Le maintien va de 1 à 32 et démarre à 2. Le niveau courant est répété pendant ce nombre d’échantillons, puis l’échantillon suivant fixe un nouveau niveau. La gauche et la droite sont écrasées séparément. La durée ne change pas.',
          ],
        },
        {
          heading: 'Ce qu’il faut écouter',
          paragraphs: [
            'Les deux nombres font des travaux différents :',
          ],
          bullets: [
            'Les bits vont de 1 à 16 et démarrent à 8.',
            'Le maintien va de 1 à 32 échantillons et démarre à 2. Un maintien de 1 garde chaque échantillon.',
            'Faites glisser une sélection quand une seule phrase doit être écrasée. Sans sélection, tout le fichier est écrasé.',
          ],
        },
        {
          heading: 'Pas le distordeur',
          paragraphs: [
            'La distorsion audio est une courbe douce, de la saturation légère à la saturation dure. Cette page fait des marches et un maintien. L’écho ajoute des copies plus tard. Le filtre passe-bas ne fait que baisser les aigus.',
            'Le WAV garde les échantillons écrasés. Un MP3 les encode une fois, jusqu’à 320 kbps, et peut adoucir les angles. Si les marches doivent survivre, utilisez le WAV.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour le choisir',
      exportLabel: 'Exporter écrasé',
    },
    '432-hz-converter': {
      cardLine: 'Baissez la hauteur d’environ 0,32 demi-ton et gardez la durée.',
      name: 'Convertisseur 432 Hz',
      shortName: '432 Hz',
      title: 'Convertisseur 432 Hz — même durée, 0,32 en bas',
      description: 'Baissez la hauteur de 12*log2(432/440), environ 0,32 demi-ton, et gardez la durée. Le WAV est ce décalage. Le MP3 l’encode une fois, jusqu’à 320 kbps.',
      h1: 'Convertisseur 432 Hz',
      heroAlt: 'Baisser un fichier d’environ 0,32 demi-ton',
      subtitle: 'Le fichier entier descend d’environ 0,32 demi-ton. La durée reste.',
      intro: 'Ce convertisseur décale le fichier entier de 12 fois le log2 de 432 sur 440, environ 0,32 demi-ton vers le bas. Un son à 440 Hz se rapproche de 432 Hz. La durée ne change pas, et les notes ne sont pas accordées une par une. Le décodage et le décalage restent dans votre navigateur.',
      usesHeading: 'Quand le fichier entier doit se rapprocher de 432 Hz',
      uses: [
        'Une piste accordée autour de 440 Hz que vous voulez plus près de 432 Hz.',
        'Une boucle dont la durée doit rester la même pour continuer à s’aligner.',
        'Un fichier que vous poserez à côté d’autres pistes déjà décalées vers 432 Hz.',
      ],
      howTo: [
        { name: 'Déposez l’audio', text: 'N’importe quel MP3, WAV, M4A, OGG ou FLAC. Il est décodé sur votre appareil.' },
        { name: 'Écoutez le décalage', text: 'L’aperçu est le fichier décalé. Cette page n’a pas de curseur de demi-ton, parce qu’un demi-ton arrondi vaudrait zéro et le fichier ne bougerait pas.' },
        { name: 'Exportez', text: 'La durée correspond au fichier que vous avez déposé. Le WAV, ce sont les échantillons décalés. Le MP3 les encode une fois, jusqu’à 320 kbps.' },
      ],
      faqs: [
        { q: 'Mon audio est-il envoyé ?', a: 'Non. Le fichier est décodé dans votre navigateur et décalé là. Une fois la page chargée, vous pouvez passer hors ligne et l’export continue. Le WAV ne demande pas d’autre téléchargement. L’encodage MP3 marche hors ligne après que l’encodeur a été chargé une fois.' },
        { q: 'De combien bouge-t-il ?', a: 'Le décalage est 12 fois le log2 de 432 sur 440, environ 0,3177 demi-ton vers le bas, et la page utilise cette fraction. Elle n’arrondit pas au demi-ton entier le plus proche, qui serait zéro et laisserait le fichier inchangé. Un son à 440 Hz se rapproche de 432 Hz. Le reste du fichier bouge d’autant. Le WAV, ce sont les échantillons décalés. Un MP3 les encode une fois, au débit que vous choisissez, jusqu’à 320 kbps.' },
        { q: 'La durée change-t-elle ?', a: 'Non. C’est un décalage de hauteur, pas un changement de vitesse. Le changeur de tempo change la durée. Changer la vitesse audio change aussi la durée, sauf si vous gardez la hauteur. Ici la durée reste et la hauteur descend.' },
        { q: 'Peut-il réaccorder une note ?', a: 'Non. Le fichier entier bouge ensemble. Un accord n’a pas ses notes tirées vers 432 Hz une par une. Un fichier de moins de 32 échantillons est renvoyé tel quel, parce que le décalage a besoin de cette longueur. Cette page ne dit pas que le résultat est plus sain, plus calme ou meilleur.' },
        { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui. Déposer, lire et télécharger se touchent dans Chrome, Edge, Firefox et Safari actuels.' },
      ],
      screenshotsAlt: [
        'Convertisseur 432 Hz : zone de dépôt, rien n’est envoyé sur un serveur',
        'Convertisseur 432 Hz : espace de travail avec le fichier chargé',
        'Convertisseur 432 Hz : après l’export, la ligne d’état donne le nom du fichier téléchargé',
      ],
      sections: [
        {
          heading: 'Un seul décalage pour tout le fichier',
          paragraphs: [
            'La valeur est 12 fois log2 de 432 sur 440, environ 0,32 demi-ton vers le bas. La page fait passer cette fraction. L’arrondir à un demi-ton entier la rendrait nulle, et le fichier ne bougerait pas.',
            'Un ton de 440 Hz se rapproche de 432 Hz. Chaque autre ton bouge de la même fraction. La durée reste identique. Le WAV est fait des échantillons décalés. Un MP3 les encode une fois, au débit choisi, jusqu’à 320 kbps.',
          ],
        },
        {
          heading: 'Ce qui ne bouge pas',
          paragraphs: [
            'Le décalage est tout le travail :',
          ],
          bullets: [
            'La durée correspond au fichier déposé.',
            'Un accord bouge ensemble. Les notes ne sont pas ramenées une par une sur 432 Hz.',
            'Un fichier de moins de 32 échantillons est rendu inchangé.',
          ],
        },
        {
          heading: 'Pas un changement de tempo',
          paragraphs: [
            'Le changeur de hauteur de ce site bouge par demi-tons entiers. Cette page utilise la fraction, environ 0,32 vers le bas, donc le résultat n’est pas le même que laisser ce réglage à zéro.',
            'Le changeur de tempo et ralentir une chanson changent la durée. Cette page ne le fait pas. Elle ne dit pas non plus que le résultat est plus sain ou meilleur. Elle déplace seulement la hauteur.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour le choisir',
      exportLabel: 'Télécharger 432 Hz',
    },
    'audio-to-midi': {
      cardLine: 'Transformez une mélodie, une voix ou un piano solo en MIDI. Un mix complet sort faux.',
      name: 'Audio vers MIDI',
      shortName: 'Audio vers MIDI',
      title: 'Audio vers MIDI — un instrument, 3 minutes',
      description: 'Une mélodie, une voix ou un piano solo devient un MIDI. Mix complet, batterie ou accords denses\u00a0: résultat faux. 3 minutes maximum. Rien n’est téléversé.',
      h1: 'Audio vers MIDI — des notes d’un instrument',
      heroAlt: 'Transformer une mélodie ou un piano solo en notes MIDI',
      subtitle: 'Un fichier .mid dans le navigateur. 3 minutes maximum, un instrument.',
      intro: 'Déposez une mélodie, une ligne chantée ou un piano solo. Cette page écrit un MIDI que vous ouvrez dans GarageBand, Ableton ou Logic : hauteur, début, durée et vélocité de chaque note. Basic Pitch de Spotify tourne dans cet onglet. L’audio n’est pas téléversé. Le modèle fait moins de 1 MB et se télécharge une fois depuis ce site. Un mix complet, la batterie ou des accords denses sortent faux. Au-delà de 3 minutes, il faut d’abord couper.',
      usesHeading: 'Des notes à corriger ensuite',
      uses: [
        'Ouvrez une mélodie fredonnée dans un DAW et déplacez les notes, sans réenregistrer.',
        'Transformez un piano solo en notes. Si la tonalité ne va pas, déplacez l’audio d’origine dans le changeur de hauteur.',
        'Lisez le nombre de notes avant le téléchargement, et laissez le fichier si le chiffre n’a pas de sens.',
      ],
      howTo: [
        { name: 'Déposez un instrument', text: 'Ajoutez un MP3, WAV, M4A ou une vidéo avec une piste son. Le navigateur décode. Rien n’est téléversé. Au-delà de 3 minutes, ça reste bloqué tant que vous n’avez pas coupé.' },
        { name: 'Convertir en notes', text: 'Le premier passage télécharge le modèle, moins de 1 MB, depuis ce site. La page liste ensuite les notes et le nombre.' },
        { name: 'Télécharger le MIDI', text: 'Enregistrez le .mid. Une piste de note-on et de note-off. Cette page ne lit pas l’audio.' },
      ],
      faqs: [
        { q: 'Mon audio est-il téléversé\u00a0?', a: 'Non. Le navigateur décode le fichier et fait tourner Basic Pitch dans l’onglet. La seule requête réseau est le modèle, moins de 1 MB, depuis ce site, la première fois. Ensuite le navigateur peut réutiliser sa copie. L’audio lui-même ne part nulle part.' },
        { q: 'Que contient le fichier MIDI\u00a0?', a: 'Une piste, MIDI type 0. Chaque note a une hauteur de 21 à 108, un début, une durée et une vélocité. La marque de tempo est 120 pour que les instants collent aux secondes de l’enregistrement. Ce 120 n’est pas le BPM du morceau. La piste commence sur le piano General MIDI pour qu’un DAW ait un son. Ce n’est pas un enregistrement de l’instrument d’origine. Pas de WAV ni de MP3 ici.' },
        { q: 'Qu’est-ce qui sortira faux\u00a0?', a: 'Un mix complet, la batterie et les accords denses. Basic Pitch est fait pour un instrument à la fois, et un enregistrement chargé devient des notes en trop ou aucune. Le fichier n’a pas de courbe de pitch bend, donc un glissando devient une note tenue. Pas de lecture, pas de partition, pas de séparation de stems. Au-delà de 3 minutes, c’est refusé. Coupez dans le découpeur audio, puis revenez.' },
        { q: 'En quoi est-ce différent de la tonalité et du BPM\u00a0?', a: 'La tonalité et le BPM lisent deux nombres et n’écrivent pas de fichier. Cette page écrit des notes. Elle ne donne ni la tonalité ni le BPM. Lisez-les sur la page tonalité et BPM. Déplacer la hauteur de l’audio d’origine, sans faire de notes, c’est le changeur de hauteur.' },
        { q: 'Est-ce que ça marche sur un téléphone\u00a0?', a: 'Oui, dans Chrome, Edge, Firefox et Safari actuels. Le plafond est de 3 minutes parce que le modèle garde les notes en mémoire. Un téléphone court en mémoire peut rater la conversion. Le fichier ne change pas, et vous pouvez essayer un extrait plus court. Le téléchargement est un .mid.' },
        { q: 'J’ai cherché ça dans Logic Pro. C’est la même chose\u00a0?', a: 'Non. Logic a sa propre commande audio vers MIDI sur la piste. Cette page est pour le navigateur, quand Logic n’est pas ouvert. Le .mid peut être déposé dans Logic ensuite. Elle ne retire pas un appareil MIDI dans macOS et n’édite pas un projet Logic.' },
      ],
      sections: [
        {
          heading: 'Un instrument, dans l’onglet',
          paragraphs: [
            'Basic Pitch écoute un seul canal à 22050 Hz. La stéréo est mixée en mono avant l’exécution du modèle. Les poids font moins de 1 Mo et viennent de ce site une fois.',
            'Il est prévu pour une mélodie, une voix ou un piano solo. Un mix complet, une batterie ou un empilement d’accords épais dépasse ce que ce modèle tient.',
          ],
        },
        {
          heading: 'Ce que le fichier contient vraiment',
          paragraphs: [
            'Le téléchargement est un fichier MIDI standard, pas de l’audio :',
          ],
          bullets: [
            'La hauteur, le départ, la durée et la vélocité. Pas de courbe de pitch-bend.',
            'Une marque de tempo à 120, pour que les temps correspondent à l’enregistrement en secondes. Ce n’est pas le BPM de la chanson.',
            'Une piste, qui démarre sur le piano General MIDI, pour qu’un DAW ait un son à jouer.',
          ],
        },
        {
          heading: 'Ce que cette page ne fait pas',
          paragraphs: [
            'Elle ne rejoue pas le MIDI, n’imprime pas de partition et ne découpe pas une chanson en stems. Elle ne nomme pas les accords.',
            'Au-delà de 3 minutes, c’est refusé. Rognez d’abord. La conversion propre à Logic reste dans Logic. Cette page n’ouvre pas un projet Logic.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio, ou cliquez pour le choisir',
      exportLabel: 'Convertir en MIDI',
    },
    soundboard: {
      cardLine: "Un plateau avec vos propres sons : enregistrez ou importez des clips et déclenchez-les en direct.",
      name: "Soundboard",
      shortName: "Soundboard",
      title: "Soundboard — onze sons, puis les vôtres",
      description: "Touchez une touche : plusieurs clips jouent ensemble. Onze sons sont déjà synthétisés ; recadrez les vôtres et gardez le plateau dans un JSON.",
      h1: "Soundboard, avec onze sons déjà sur le plateau",
      subtitle: "Touchez une case ou appuyez sur sa touche. Plusieurs sons jouent ensemble. Une demi-seconde à cinq secondes, c’est la durée utile.",
      intro: "Enregistrez un clip au micro ou importez un fichier audio, recadrez la partie qui compte, et elle devient une case du plateau. Touchez les cases ou appuyez sur les touches chiffres et lettres pour déclencher des sons en direct — plusieurs à la fois, c’est justement tout l’intérêt d’un soundboard. Onze sons intégrés, synthétisés sur la page, rendent le plateau utilisable avant même que vous ajoutiez quoi que ce soit. Les préréglages chargent un set de départ pour le streaming, le podcast ou la classe. Rien n’est envoyé : décodage, recadrage et lecture se passent dans cet onglet, et le plateau voyage dans un fichier JSON que vous exportez et importez vous-même.",
      usesHeading: "Ce que vous pouvez en faire",
      uses: [
        "Déclencher en direct des sons de mème, des stingers et des applaudissements sur votre stream, plusieurs à la fois.",
        "Garder des buzzers de quiz et des sons de bonne réponse pour la classe — de grandes cases faciles à viser au tactile.",
        "Couper un fichier long en les cinq boutons dont vous vous servez vraiment, chacun avec son raccourci.",
      ],
      howTo: [
        { name: "Partir d’un préréglage ou d’un son", text: "Le plateau s’ouvre avec onze sons synthétisés. Un préréglage au-dessus de la grille échange le plateau contre un set de départ streaming, podcast ou classe. Ajouter un audio et Enregistrer apportent les vôtres." },
        { name: "Recadrer chaque clip", text: "Le crayon sur une case ouvre l’éditeur : tirez les deux poignées pour garder le passage voulu, écoutez-le en boucle pour vérifier, puis appliquez le recadrage. Renommez et choisissez la couleur au passage." },
        { name: "Jouer et sauvegarder le plateau", text: "Touchez les cases ou appuyez sur les touches affichées — de 1 à 0, puis Q W E R T Y U I O P. Échap arrête tout. Exporter le plateau écrit tous les sons dans un JSON ; Importer un plateau le relit, et lit aussi les plateaux de soundtools.io." },
      ],
      faqs: [
        { q: "Est-ce que quelque chose est envoyé ?", a: "Non. Les fichiers sont décodés avec la Web Audio API dans cet onglet, l’enregistrement reste sur votre appareil et la lecture est locale. Exporter le plateau écrit le JSON directement sur votre disque. Une fois la page chargée, tout continue de fonctionner hors ligne." },
        { q: "Quelle est la qualité des sons ?", a: "Les clips gardent le taux d’échantillonnage de leur décodage. Exporter en WAV pour un son écrit du PCM 16 bits à ce taux. Le fichier du plateau stocke chaque son en texte WAV dans le JSON, donc rien n’est encodé deux fois." },
        { q: "Est-ce que ça entre dans Discord ou un appel de jeu ?", a: "Non. Discord, Zoom et les jeux entendent votre micro, pas cette page. Des applications comme Voicemod et Resanance installent un micro virtuel sous Windows pour que les autres entendent le plateau. Cette page ne peut pas le faire. Les sons sortent par les haut-parleurs ou l’audio du bureau, qu’OBS peut enregistrer. Sur un téléphone, le plateau joue sur l’appareil." },
        { q: "Quelle différence avec l’enregistreur vocal ?", a: "L’enregistreur vocal prend un clip et le passe à un éditeur pour le recadrer et l’exporter. Cette page garde plusieurs clips et les joue en direct depuis des touches. Elle sert à déclencher, pas à éditer un fichier." },
        { q: "Ça marche sur téléphone ?", a: "Oui. Toucher les cases, enregistrer et le recadrage marchent dans Chrome, Edge, Firefox et Safari à jour, y compris iPhone et Android. Les raccourcis exigent un clavier, donc un ordinateur. Sur iPhone, la lecture suit le bouton silencieux." },
        { q: "Comment garder le plateau ?", a: "Rien n’est stocké dans le navigateur. Exportez le plateau avant de fermer l’onglet, sinon il disparaît. Importer un plateau ramène le JSON sur cet appareil ou un autre. Le même bouton lit un plateau de soundtools.io : chaque bouton qui contient de l’audio passe, et un dégradé est rapproché de la couleur la plus proche ici." },
        { q: "Quels fichiers, et quelle durée ?", a: "L’ajout accepte MP3, WAV, M4A, OGG, FLAC et AAC, ce que le navigateur sait décoder. Un fichier de plus de 60 secondes est ignoré : recadrez-le d’abord dans le coupeur audio. La durée utile sur le plateau va d’une demi-seconde à cinq secondes. Il n’y a pas de nombre fixe de cases. Le plafond est la mémoire de l’onglet." },
        { q: "Puis-je changer la hauteur ou ajouter de l’écho ?", a: "Pas sur cette page. Exportez le WAV de la case, puis ouvrez ce fichier dans le changeur de hauteur (la hauteur bouge, la durée reste) ou sur la page slowed et reverb. Ramenez le résultat avec Ajouter un audio ou Remplacer l’audio." },
      ],
      sections: [
        {
          heading: 'Comment fonctionne le plateau',
          paragraphs: [
            'Un soundboard n’a qu’un travail : le bon son court, maintenant, sans fouiller un dossier. Chaque carré est un clip. Tapez dessus et il joue immédiatement. Tapez sur un autre pendant qu’il joue encore, et les deux jouent. Ce chevauchement est le but.',
            'Les touches suivent l’ordre du plateau : de 1 à 9, puis 0, puis la rangée de lettres du haut. Échap arrête tout. Un préréglage au-dessus de la grille remplace tout l’ensemble par un départ pour le streaming, un podcast, une classe ou un plateau vide.',
          ],
        },
        {
          heading: 'Créez vos propres clips',
          paragraphs: [
            'Le téléversement prend MP3, WAV, M4A, OGG, FLAC ou AAC et le décode dans le navigateur. L’enregistrement prend le microphone. Le crayon ouvre ensuite l’éditeur de rognage : tirez les deux poignées, bouclez la sélection et appliquez-la.',
            'Court est le but. Une demi-seconde à cinq secondes couvre une chute, un buzzer ou un boom. Remplacer l’audio échange le son sous un carré et garde son nom, sa couleur et sa touche. Un fichier de plus de 60 secondes est ignoré au téléversement.',
          ],
          bullets: [
            'Exporter le WAV d’un son écrit du PCM 16 bits à la fréquence d’échantillonnage de ce clip.',
            'La couleur d’un carré est là pour que vous trouviez la touche pendant un direct.',
            'Les onze sons intégrés sont synthétisés sur la page. Pas de téléchargement, pas de bibliothèque, pas l’enregistrement de quelqu’un d’autre.',
          ],
        },
        {
          heading: 'Ce qu’il ne fait pas',
          paragraphs: [
            'Il n’insère pas de sons dans un appel. Discord, les jeux et le chat vocal entendent le microphone. Mettre le plateau sur ce chemin demande une application de bureau avec un périphérique audio virtuel, comme Voicemod ou Resanance sous Windows. Pour un direct, le chemin honnête est l’audio du bureau : les sons sortent de la machine, et OBS les capture.',
            'Il ne se souvient pas du plateau entre les visites. Exportez le plateau avant de fermer l’onglet, puis importez-le la fois suivante, y compris un fichier de plateau de soundtools.io. Il ne cherche pas dans une bibliothèque de mèmes. Les sons intégrés sont des effets génériques synthétisés ici. Tout le reste est un fichier que vous apportez.',
          ],
        },
      ],
      dropHint: "Sans fichier — touchez une case ou ajoutez la vôtre",
    },
    'music-visualizer': {
      cardLine: 'Transformez une chanson en vidéo de spectre animée, sans envoi.',
      name: 'Visualiseur musical',
      shortName: 'Visualiseur',
      title: 'Visualiseur musical — votre chanson en vidéo de spectre',
      description: 'Transformez une chanson en vidéo de spectre animée : barres, anneau ou oscilloscope jusqu’en 1080p, enregistrée dans le navigateur. Rien n’est envoyé.',
      h1: 'Visualiseur musical — transformez une chanson en vidéo de spectre',
      subtitle: 'Lancez une chanson, regardez le spectre bouger et enregistrez-le en vidéo — dessiné et capturé sur votre appareil.',
      intro: 'Cette page transforme une chanson en ce genre de vidéo de fond qu’utilisent YouTube, Shorts et Reels : le spectre de la musique, animé en temps réel et enregistré directement depuis le canevas. Déposez un fichier audio, choisissez le look et le format, appuyez sur enregistrer, et quand la chanson se termine la vidéo arrive dans vos téléchargements. Tout tourne dans le navigateur — l’audio est décodé localement et jamais envoyé.',
      usesHeading: 'Ce que les gens en font',
      uses: [
        'Donner à un morceau une vidéo pour YouTube, Shorts ou TikTok sans ouvrir un éditeur.',
        'Publier une chanson avec un spectre en mouvement, plutôt qu’une seule pochette figée.',
        'Enregistrer un fond pour un extrait de podcast, une démo ou un écran d’attente de stream.',
      ],
      howTo: [
        { name: 'Déposez une chanson', text: 'Déposez un fichier audio dans le cadre ou cliquez pour le parcourir. MP3, WAV, M4A, OGG, FLAC — tout ce que le navigateur sait décoder.' },
        { name: 'Choisissez le look', text: 'Choisissez un style — barres de spectre, barres en miroir, anneau ou oscilloscope — et un thème. Les deux couleurs restent modifiables après un thème.' },
        { name: 'Choisissez le format', text: 'Choisissez la taille de vidéo : 16:9 pour YouTube, 9:16 vertical pour Shorts et TikTok, carré pour les fils, ou une taille libre.' },
        { name: 'Enregistrez la vidéo', text: 'Appuyez sur Enregistrer la vidéo. La chanson joue une fois pendant que le navigateur capture le canevas, et le fichier se télécharge à la fin.' },
      ],
      faqs: [
        { q: 'Ma chanson est-elle envoyée ?', a: 'Non. Le fichier est décodé avec la Web Audio API dans cet onglet, l’animation est dessinée sur un canevas de cet onglet, et l’enregistreur du navigateur capture ce canevas avec l’audio. La vidéo finie est écrite directement sur votre disque.' },
        { q: 'Quel format et quelle qualité pour la vidéo ?', a: 'Chrome, Edge et Firefox enregistrent en WebM : vidéo VP9 ou VP8 avec audio Opus à 192 kbps, à la taille choisie jusqu’en 1080p, 30 fps, environ 8 Mbit/s de vidéo. Certains builds de Chrome proposent du MP4 : le navigateur prend le premier conteneur qu’il sait enregistrer, et l’extension du fichier suit.' },
        { q: 'Une chanson de 3 minutes prend-elle vraiment 3 minutes ?', a: 'Oui. La vidéo est capturée pendant que la chanson joue une fois, en temps réel. C’est le compromis honnête d’un enregistrement sur votre appareil sans serveur : pas d’attente d’envoi, pas de file, pas de limite de durée au-delà du fichier lui-même. Gardez l’onglet au premier plan pendant l’enregistrement — les navigateurs ralentissent le dessin des onglets en arrière-plan, et l’image figerait pendant que le son continue.' },
        { q: 'Quelle différence avec le générateur de forme d’onde ?', a: 'Le générateur de forme d’onde dessine un PNG fixe du volume dans le temps : une image pour une pochette ou une publication. Cette page anime le spectre de fréquences pendant que la chanson joue et enregistre une vidéo. Même fichier en entrée, résultats opposés : image fixe contre image en mouvement.' },
        { q: 'Ça marche sur mobile ou sur iPhone ?', a: 'Chrome sur Android lit et enregistre. Chrome, Edge et Firefox sur ordinateur enregistrent tous. Safari sur iPhone et iPad sait lire et montrer l’animation, mais ne peut pas enregistrer un canevas — le bouton d’enregistrement s’efface donc là-bas. Le chemin honnête : un enregistrement d’écran, ou l’ordinateur.' },
        { q: 'Puis-je utiliser la vidéo commercialement ?', a: 'La vidéo n’a ni filigrane ni licence de notre part : c’est votre fichier. La chanson qu’elle contient engage votre responsabilité. Les visualiseurs faits avec vos propres morceaux, de la musique sous licence ou de l’audio libre de droits sont à vous de publier.' },
      ],
      sections: [
        {
          heading: 'Ce que la page enregistre vraiment',
          paragraphs: [
            'L’animation est dessinée sur un canvas à la taille choisie, et l’enregistreur du navigateur capture ce canvas plus l’audio qui le traverse. Il n’y a pas de rendu serveur et pas de filigrane : le fichier est écrit par l’onglet, au moment où la chanson se termine.',
            'L’enregistrement dure aussi longtemps que la chanson. Il n’y a pas de filigrane.',
          ],
        },
        {
          heading: 'Les quatre styles',
          paragraphs: [
            'L’image utilise 64 bandes. Les thèmes fixent les couleurs. Le côté va de 200 à 2160.',
          ],
          bullets: [
            'Des barres de spectre montent depuis le bord inférieur avec un dégradé vers les sommets.',
            'Des barres en miroir replient les mêmes barres autour du milieu, le look classique du lecteur.',
            'Ring dispose les bandes en cercle.',
            'Oscilloscope dessine la forme d’onde elle-même, une ligne qui respire avec le morceau.',
          ],
        },
        {
          heading: 'Où les vidéos s’intègrent',
          paragraphs: [
            'Les préréglages incluent 16:9 et 9:16. Un côté personnalisé va de 200 à 2160.',
            'La vidéo dure toujours aussi longtemps que l’audio, donc rognez d’abord la chanson si vous ne voulez qu’une section. Pour une image fixe d’un morceau au lieu d’une vidéo, le générateur de forme d’onde en dessine une à partir du même fichier.',
          ],
        },
      ],
      dropHint: 'Déposez un fichier audio ou cliquez pour le parcourir',
      exportLabel: 'Enregistrer la vidéo',
    },
  },
};
