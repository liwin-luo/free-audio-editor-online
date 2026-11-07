import type { Catalog } from './types';

export const zh: Catalog = {
  ui: {
    skip: '跳到正文',
    logoHome: 'Free Audio Editor — 首页',
    tools: '工具',
    language: '语言',
    theme: '切换深色模式',
    navMain: '主导航',
    navAbout: '关于',
    footerBlurb:
      '免费的在线音频工具，全部在你的浏览器里运行。文件不会上传。音频编辑从一开始就不把文件交出去。',
    share: '分享',
    fullscreen: '全屏',
    shareOn: '分享到 {name}',
    copyLink: '复制链接',
    copied: '已复制',
    about: '关于',
    privacy: '隐私',
    status: '状态',
    guides: '指南',
    rights: '文件不会离开你的设备。',
    clientSide: '100% 在本地处理',
    contact: '联系我们',
    contactBody: '对工具有疑问、发现需要更正的内容，或有隐私相关请求？写信到 {email}。每封邮件我们都会看。',
    contactPrivacy: '文件与反馈如何处理，见{privacy}。',
    privacyPolicyLabel: '隐私政策',
    cookieBody: '可选 Cookie 用于反馈组件，以及 Microsoft Clarity（记录你怎么使用页面）。汇总流量统计不用 Cookie。这个网站不投放广告。',
    cookieAccept: '接受',
    cookieReject: '拒绝非必要的',
    cookiePolicy: '隐私政策',
    trustMethod: '我们如何测试',
    trustFree: '免费，不用注册',
    trustClean: '没有水印',
    trustOffline: '打开后可离线',
    faqHeading: '常见问题',
    toolFaq: '{name}的常见问题',
    related: '相关工具',
    openTool: '打开 {name}',
    allTools: '全部音频工具',
    browseToolkit: '查看全部工具',
    home: '首页',
    howTo: '{name}怎么用',
    whyUs: '为什么选择{name}',
    whyPrivacy: '隐私即设计——音频永不离开此标签页。无上传、无账号、无水印。',
    whyPrecision: '精确到 0.01 秒——微调边界、跟随刻度，保留的区间听得清清楚楚。',
    whyMobile: '为手机而生——随时随地剪，无需安装任何东西。',
    ogAlt: 'Free Audio Editor：在线编辑音频，什么都不会上传',
    schemaOs: '不限（只要浏览器）',
    schemaBrowser: '需要支持 Web Audio 的现代浏览器',
    features: [
      '裁剪、剪切和合并音频',
      '音量、归一化、变速和混响',
      '倒放和录音',
      '把视频音轨转成 MP3 或 WAV',
      '导出 MP3、WAV 和 iPhone 铃声 M4R',
    ],
    formats: {
      'mp3-320': 'MP3 · 320 kbps',
      'mp3-192': 'MP3 · 192 kbps',
      'mp3-128': 'MP3 · 128 kbps',
    'mp3-96': 'MP3 · 96 kbps',
    'mp3-64': 'MP3 · 64 kbps',
      wav: 'WAV · 无损',
      m4r: 'M4R · iPhone 铃声',
      m4a: 'M4A · AAC',
    },
    categories: {
      cut: '裁剪与剪切',
      convert: '转换与压缩',
      join: '合并与混音',
      edit: '编辑与修复',
      effects: '创意效果',
      record: '录音与分析',
    },
  },
  editor: {
    dropHour: 'MP3、WAV、M4A、OGG、FLAC、AAC，最长大约一小时',
    dropLocal: '本地处理，文件不会离开这个标签页',
    formatsMore: ' 等',
    etaModel: '首次要下载模型，之后大约和音频一样长',
    limitTenMin: '最长 10 分钟',
    limitThreeMin: '最长 3 分钟',
    limitRingtone: '不超过 40 秒',
    chipText: '文字',
    zoomOut: '缩小',
    zoomIn: '放大',
    loadDifferent: '换一个文件',
    startOver: '重新开始',
    waveform: '波形。拖动来选一段。',
    play: '播放选区',
    pause: '暂停',
    hintSelect: '在波形上拖动来选择 · 空格键播放',
    hintTrim: '拖两端改范围，播放只听这一段',
    changeFile: '换一个文件',
    selectAll: '选中全部',
    playBtn: '播放',
    chMono: '单声道',
    chStereo: '立体声',
    chMany: '{n} 声道',
    hintConvert: '空格键播放 · 不会上传',
    hintSilence: '长于最短静音的空白会在导出时去掉。短气口留着。',
    reverse: '倒放',
    normalize: '峰值归一化',
    speed: '速度',
    speedPitch: '音高会跟着速度一起变。',
    tempoPitch: '音高保持不变。',
    pitch: '音高',
    pitchLength: '时长不会变。',
    bass: '低音',
    treble: '高音',
    mid: '中音',
    eqPresetFlat: '平直',
    eqPresetRock: '摇滚',
    eqPresetPop: '流行',
    eqPresetHiphop: '嘻哈',
    eqPresetClassical: '古典',
    eqPresetVocal: '人声',
    cutoff: '截止频率',
    volume: '音量',
    gainOriginal: '100% 是原来的响度。',
    reverb: '混响',
    compress: '压动态',
    echoDelay: '延迟',
    echoFeedback: '重复',
    distort: '强度',
    panDepth: '深度',
    panRate: '速率',
    circle: '绕一圈',
    metroBpm: '速度',
    metroMeter: '拍号',
    metroBars: '小节',
    metroPlay: '播放',
    metroStop: '停止',
    keyTonic: '调性',
    keyMajor: '大调',
    keyMinor: '小调',
    keyUnread: '读不出',
    keyCaveat: '自由节奏、说话、环境声，以及关系大小调，都可能读反。',
    silenceThreshold: '阈值',
    silenceGap: '最短静音',
    silenceRemove: '将去掉约 {time} 的静音',
    silenceKeepFile: '没有高于阈值的声音，导出会保留整个文件',
    voiceHigh: '高亮',
    voiceDeep: '低沉',
    voiceRobot: '机器人',
    voiceRadio: '电台',
    voiceGhost: '空灵',
    hintVoice: '点一个预设就能试听，预设之间互相替换，不叠加。',
    tapTempoTap: '点击',
    tapTempoReset: '归零',
    tapTempoHint: '跟着音乐点。大约四下之后读数稳定；停 2.5 秒就重新开始。',
    tapTempoBeats: '{n} 次点击',
    noiseStrength: '降噪强度',
    noiseExport: '降噪在导出时执行。150 KB 模型只加载一次。',
    denoiseProgress: '正在降噪… {p} %',
    hintNoise: '强度在导出时生效。首次导出加载一次 150 KB 模型。',
    loopTimes: '重复次数',
    loopCrossfade: '接缝',
    loopExport: '导出大约 {time}',
    loopTooLong: '循环后超过 10 分钟。减少次数，或缩短选区。',
    splitParts: '段数',
    splitExport: '{n} 段，每段大约 {time}',
    splitTooShort: '这段比要切的份数还短。',
    crushBits: '位数',
    crushHold: '保持',
    crushExport: '{bits} 位，每 {hold} 个采样保持一次',
    monoExport: '导出写成一条声道：文件里各声道的平均。',
    hz432Export: '导出把音高降低 0.32 个半音。长度不变。',
    lufsIntegrated: '综合响度',
    lufsPeak: '样本峰值',
    lufsPodcast: '播客',
    lufsStreaming: '流媒体',
    lufsBroadcast: '广播',
    lufsLimited: '峰值停在 −1 dBFS，结果是 {lufs} LUFS。',
    lufsWill: '导出后会落在 {lufs} LUFS。',
    lufsSilent: '这个文件是静音，没有可对齐的响度。',
    adjust: '调整：淡入淡出、音量、速度、倒放',
    fadeIn: '淡入',
    fadeOut: '淡出',
    normalizeOverrides: '峰值归一化（覆盖音量）',
    undo: '撤销上一步',
    cutMode: '剪切模式',
    keep: '保留选区',
    deleteSel: '删除选区',
    saveSelected: '保存选中段 · {time}',
    saveWithoutSelection: '去掉选中段并保存 · {time}',
    fineTune: '微调',
    boundaryStart: '开始',
    boundaryEnd: '结束',
    loop: '循环',
    outputLine: '输出 {time} · ≈{size}',
    errorDecodeTitle: '无法解码此文件',
    errorDecodeHow: '请改用 MP3、WAV 或 M4A 文件，或先转换格式，再拖到这里。',
    precise: '精确时间',
    startSec: '开始（秒）',
    endSec: '结束（秒）',
    format: '格式',
    export: '导出',
    joinerMixed: 'MP3、WAV、M4A、OGG、FLAC，格式混着放也行',
    joinerLocal: '本地处理，文件不会离开这个标签页',
    trackSummary: '{n} 条音轨 · {time}',
    crossfade: '交叉淡化',
    fadeInFirst: '淡入（第一条音轨）',
    fadeOutLast: '淡出（最后一条音轨）',
    mergeExport: '合并并导出',
    record: '录音',
    recordHint: '用麦克风录音',
    tooBig: '这个文件超过 300 MB，换一个更短或已经压缩过的文件试试。',
    decoding: '正在解码…',
    ready: '好了。在波形上拖动，选一段。',
    hourWarning: '超过一小时的文件，在有些设备上可能会把浏览器内存耗尽。',
    decodeFail: '这个文件解不出来。它可能已损坏，或者你的浏览器不支持这种编码。',
    ringtoneCap: '选区已限制在 40 秒以内，这是经典的铃声长度。',
    kept: '已保留选区：{range}',
    markedDelete: '已标记删除的选区：{range}',
    endTime: '结束时间至少要比开始时间晚 0.05 秒。',
    nothingUndo: '没有能撤销的了。',
    reverted: '已撤销上一步。',
    normalizeOn: '已打开归一化，峰值大约会抬高 {db} dB（上限 +12 dB）。',
    rendering: '正在渲染…',
    renderingStatus: '正在本地渲染你的编辑…',
    encoding: '正在编码 {ext}…',
    exported: '已导出 {file}。',
    saved: '已保存为 {file}，没有上传。',
    exportFail: '导出失败，编码器加载不了（是不是断网了？）。改用 WAV 格式试试。',
    merging: '正在合并…',
    mergingStatus: '正在本地合并音轨…',
    moveUp: '上移',
    moveDown: '下移',
    remove: '移除',
    recUnavailable: '这个浏览器不能录音。换 Chrome、Edge、Firefox 或 Safari 试试。',
    micBlocked: '麦克风被拦住了。到浏览器设置里允许访问，然后再试一次。',
    recording: '正在录音…录完点「停止」。',
    stop: '停止',
    recordAgain: '再录一次',
    recordingLoaded: '录音已载入下面的编辑器。',
    vizStyle: '样式',
    vizStyleBars: '镜像柱状',
    vizStyleFilled: '连续填充',
    vizStyleOutline: '轮廓线',
    vizStyleDots: '圆点',
    vizStyleBottom: '底部柱状',
    vizStyleBlocks: '宽柱',
    vizTemplate: '样式模板',
    vizTemplateNone: '手动',
    vizTplSoundcloud: 'SoundCloud',
    vizTplPodcast: '播客',
    vizTplPoster: '海报',
    vizTplSticker: '贴纸',
    vizTplPrint: '印刷',
    vizTplNeon: '霓虹',
    vizTplBlocks: '粗柱',
    vizWaveColor: '波形颜色',
    vizBgColor: '背景颜色',
    vizTransparent: '透明背景',
    vizSize: '尺寸',
    vizSizeVideo: '视频封面',
    vizSizeSquare: '方形',
    vizSizeOg: '社交配图',
    vizSizeBanner: '横幅',
    vizSizeCustom: '自定义',
    vizWidth: '宽度',
    vizHeight: '高度',
    vizRange: '时间范围',
    vizRangeStart: '开始（秒）',
    vizRangeEnd: '结束（秒）',
    vizPreview: '波形预览',
    vizReady: '准备好了。调好样式后下载 PNG。',
    vizRendering: '正在渲染…',
    vizExportFail: 'PNG 没能生成。换一个更小的尺寸试试。',
    specFft: 'FFT 长度',
    specAxis: '频率轴',
    specAxisLog: '对数',
    specAxisLinear: '线性',
    specMaxHz: '最高频率（Hz）',
    specDbFloor: '静音（dB）',
    specDbCeil: '响度（dB）',
    specColors: '色表',
    specViridis: 'Viridis',
    specInferno: 'Inferno',
    specGray: '灰度',
    specPreview: '频谱图预览',
    specProgress: '正在画频谱图… {pct}%',
    paintText: '文字',
    paintPlaceholder: '一行短字，比如一个名字',
    paintImage: 'PNG、JPG 或 WebP。会缩放到频谱能放下的大小。',
    paintPreview: '将写进音频里的图',
    paintReady: '好了。下载 WAV，再用频谱图生成器打开。',
    paintWorking: '正在写成音频…',
    paintFail: '这张图读不了。换 PNG 或 JPG 试试。',
    batchProgress: '{current} / {total}',
    batchSkipped: '{n} 个跳过了',
    tgShared: '艺人、专辑、年份、流派和封面会写到每一首。曲名和曲序留在每一行。',
    tgAlbum: '专辑',
    tgAlbumArtist: '专辑艺术家',
    tgArtist: '艺术家',
    tgComment: '注释',
    tgComposer: '作曲',
    tgCover: '封面图',
    tgCoverFail: '封面必须是 JPG 或 PNG 图片。',
    tgCoverHint: '500–1400 像素的正方形 JPG 或 PNG 在大多数播放器里显示效果最好。',
    tgDisc: '碟号',
    tgGenre: '流派',
    tgNoTags: '这个文件还没有标签——把你知道的填进去。',
    tgReadFail: '无法读取该文件——请使用 MP3。',
    tgRemoveAll: '移除全部元数据（保存为干净文件）',
    tgRemoveCover: '移除封面',
    tgReplaceCover: '替换封面',
    tgReset: '重置',
    tgSaved: '已保存——请查看下载文件夹。',
    tgSaving: '正在写入标签…',
    tgSaveCover: '保存封面',
    tgTitle: '标题',
    tgTrack: '音轨',
    tgWriteFail: '保存时出了点问题。请重试，或换一个 MP3 文件。',
    tgYear: '年份',
    trLang: '语言',
    trLangAuto: '自动检测',
    trModel: '模型',
    trModelBase: 'Base — 更准确',
    trModelTiny: 'Tiny — 下载更快',
    trPreparing: '正在准备模型…',
    trDownloading: '正在下载模型… {percent}%',
    trWorking: '正在转写… {percent}%',
    trDone: '转写完成 — 共 {count} 字',
    trFirstRun: '第一次运行会下载一次模型（Tiny ≈ 40 MB，Base ≈ 80 MB），浏览器会缓存它——之后离线也能转写。',
    trResultPlaceholder: '转写结果会出现在这里——下载前可以直接编辑。',
    trCopy: '复制',
    trCopied: '已复制到剪贴板',
    trTxt: '下载 TXT',
    trSrt: '下载 SRT',
    trTooLong: '这个文件超过 10 分钟。先裁剪一下——音频剪辑同样是本地私密处理——再回来转写。',
    trFail: '转写失败。试试 Tiny 模型、更清晰的文件，或换一个新版浏览器。',
    midiCaveat: '单件乐器最稳。完整混音、鼓或密集和弦会错。',
    midiNotes: '音符：{count}',
    midiNone: '没有音符。鼓、噪音或完整混音常常是空的。',
    midiTooLong: '这段超过 3 分钟。先在音频裁剪里剪短，再回来。',
    midiWorking: '正在读音符… {percent}%',
    midiFirstRun: '音符模型从本站下载一次，不到 1 MB，浏览器会留下它。',
    midiFail: '读不出音符。换短一点的、一件乐器的文件，或换一个新版浏览器。',
    midiMore: '前 {shown} 个，一共 {count} 个。',
    midiDownload: '下载 MIDI',
    mixMute: '静音',
    mixSolo: '独奏',
    mixPan: '声像',
    mixOffset: '入点',
    mixTrimIn: '裁切起点',
    mixTrimOut: '裁切终点',
    mixGain: '音量',
    mixMaster: '主音量',
    mixPlay: '播放混音',
    mixStop: '停止',
    mixAdd: '添加音轨',
    mixLimit: '这一页最多 8 条轨。先导出这次混音，更大的工程用桌面编辑器。',
    mixPulled: '为避免削波，混音已降低 {db} dB。',
    mixExport: '导出混音',
    mixDecode: '无法解码 {name}。',
    sbUpload: "上传音频",
    sbStopAll: "全停",
    sbExportBoard: "导出板",
    sbImportBoard: "导入板",
    sbFullscreen: "全屏",
    sbExitFs: "退出全屏",
    sbTemplates: "场景模板",
    tplGeneral: "通用",
    tplStream: "直播 · 游戏",
    tplPodcast: "播客",
    tplClass: "课堂 · 演示",
    tplBlank: "空白",
    tplConfirm: "确认替换？",
    sbName: "名称",
    sbColor: "颜色",
    sbPreview: "循环试听选区",
    sbStopPreview: "停止试听",
    sbUseAll: "用整段",
    sbApplyTrim: "应用裁剪",
    sbTrimmed: "已裁剪为 {sec} 秒。",
    sbExportWav: "导出 WAV",
    sbReplace: "替换音频",
    sbReplaced: "已替换「{name}」的音频。",
    sbDelete: "删除",
    sbConfirmDelete: "确认删除这个音效？",
    sbAddSound: "添加音效",
    sbEmpty: "板子是空的——上传音频或录一段，也可以从上面的场景模板开始。",
    sbKeyHint: "热键按板子顺序：1–9、0，再 Q W E R T Y U I O P · Esc 全停 · 铅笔编辑音效",
    sbRecAdded: "录音已加入板子。",
    sbImported: "导入成功：{n} 个音效。",
    sbImportNone: "文件里没有能播放的音频。",
    sbImportBad: "这不是音效板的 JSON 文件。",
    sbExported: "板子已导出——{n} 个音效。",
    sbPlayAria: "播放 {name}",
    sbEditAria: "编辑 {name}",
    sbTooLong: "超过 60 秒的片段不会进板子——请先裁剪文件。",
    mvPlay: "播放",
    mvPause: "暂停",
    mvStyle: "样式",
    mvStyleBars: "频谱柱",
    mvStyleMirrored: "镜像柱",
    mvStyleRing: "环形",
    mvStyleScope: "示波器",
    mvTheme: "主题",
    mvThemeNeon: "霓虹",
    mvThemeSynthwave: "Synthwave",
    mvThemeFire: "火焰",
    mvThemeOcean: "海洋",
    mvThemeMatrix: "Matrix",
    mvThemeMidnight: "午夜",
    mvThemePaper: "纸白",
    mvPrimary: "柱子颜色",
    mvSizeLandscape: "横屏 16:9",
    mvSizePortrait: "竖屏 9:16",
    mvRecording: "录制中 {t} / {total}——别切走这个标签页",
    mvCancel: "取消录制",
    mvCancelled: "已丢弃这段录制。",
    mvSaved: "视频已保存——到下载里找。",
    mvFail: "录制失败。换个小一点的尺寸再试。",
    mvNoRecord: "这个浏览器不能把画布录成视频，播放不受影响。要在这里留下动画，用屏幕录制。",
    mvRealtime: "实时导出：3 分钟的歌要录 3 分钟。",
  },
  home: {
    title: '在线音频工具 — 免费剪辑合并转格式，文件不上传',
    description:
      '免费在线音频工具：在浏览器里裁剪、剪切、合并、倒放和转换音频。不用注册，不用上传，文件不会离开你的设备。',
    appBlurb: '免费在线音频工具：在浏览器里剪切、裁剪、合并和编辑音频。',
    badge: '100% 本地处理 · 不会上传',
    h1: '免费在线音频工具',
    lede: '在浏览器里裁剪、剪切、合并和编辑音频。不用注册，没有水印，不用上传，文件不会离开你的设备。',
    ctaTrim: '裁剪一个音频文件',
    ctaMerge: '把几首歌合并起来',
    highlightsLabel: '为什么是这样',
    priceSymbol: '$',
    priceAmount: '0',
    priceWord: '免费',
    highlights: [
      {
        title: '文件不会上传',
        body: '音频在这个浏览器标签页里解码。关掉页面，音频就没了——没有任何服务器收到过它。',
      },
      {
        title: '免费，因为是你的设备在干活',
        body: '没有服务器要付费，所以没有水印，不用注册，导出也没有次数上限。',
      },
      {
        title: '拖进来就能开始',
        body: '不用安装，也不用排队。再长的音轨也不会离开这台设备，编辑马上开始。',
      },
      {
        title: '打开后可离线',
        body: '页面得先打开一次。之后断网，裁剪和导出照样继续。',
      },
    ],
    toolsHeading: '热门音频工具',
    allToolsCta: '浏览全部 {count} 个工具',
    toolsCount: '{count} 个工具',
    mostUsed: '用得最多',
    comingTitle: '接下来',
    comingBody: '交叉淡化混音、静音删除，还有更多。做法同样是隐私优先。',
    useCasesHeading: '今天要编辑什么？',
    useCases: [
      { title: '播客', body: '录制节目、剪掉瑕疵、拼接段落，还能顺手拿到节目笔记的文字稿。', tools: ['voice-recorder', 'mp3-editor', 'audio-to-text'] },
      { title: '音乐', body: '把 riff 放慢来学，为翻唱变调，给小样增加分量或明亮度。', tools: ['change-audio-speed', 'pitch-changer', 'bass-booster'] },
      { title: '配音', body: '交付干净的成品：切掉隆隆声、拉平音量、提升偏小录音而不过载。', tools: ['high-pass-filter', 'normalize-audio', 'increase-volume'] },
      { title: '学习和工作', body: '加速听完课程、把录音转成文字，并让片段之间的衔接更自然。', tools: ['audio-to-text', 'fade-audio', 'audio-joiner'] },
    ],
    whyHeading: '为什么音频该在你自己的设备上编辑',
    why: [
      {
        title: '隐私是默认的',
        body: '语音备忘、访谈、还没发出去的曲子，音频都是私人的。这里在你自己的浏览器内存里解码和编辑。没有服务器能看见它、存下它，或把它泄露出去。',
      },
      {
        title: '不用排队，也不用等',
        body: '上传一条 50 MB 的音轨、等服务器、再下载回来，这些全部省掉。文件一拖进来，就能开始编辑。',
      },
      {
        title: '是真的免费',
        body: '本地处理几乎不花运行成本，所以这些工具免费：没有水印，不用注册，导出也没有次数限制。',
      },
    ],
    faqs: [
      {
        q: 'Free Audio Editor 真的免费吗？',
        a: '是的。这个网站上的每个工具都免费，不用注册，没有水印，也没有每日导出上限。所有处理都在你自己的浏览器里完成，没有服务器费用要靠收费补回来。',
      },
      {
        q: '我的音频怎么保持私密？',
        a: '文件不会上传。解码、编辑和导出都在浏览器标签页里，用 Web Audio API 本地完成。页面加载完之后你可以断网，每个工具照样能用。',
      },
      {
        q: '需要安装什么吗？',
        a: '不用。这些是网页工具，现代浏览器就能用：Chrome、Edge、Firefox 或 Safari，电脑和手机都行。',
      },
      {
        q: '支持哪些音频格式？',
        a: '可以打开 MP3、WAV、M4A/AAC、OGG、FLAC 和 WebM 音频，结果存成 MP3（128–320 kbps）或无损 WAV。铃声工具在 Chrome、Edge 和 Safari 里还可以导出 M4R。',
      },
    ],
  },
  hub: {
    categoryIntro: {
      cut: '剪短歌曲、只保留最精彩的部分，或制作铃声——在波形上选出范围直接保存。',
      convert: '在 MP3、WAV、M4A、OGG、Opus 之间转换，从视频中提取音轨，或降低码率压缩文件——全部在设备上完成。',
      join: '调整轨道顺序、加交叉淡化、循环一段，或把最多 8 个文件叠在一条时间线上。不会上传。',
      edit: '提高或压平音量、峰值归一化、去除静音、编辑标签，并用 EQ、滤波和淡入淡出塑造音色。',
      effects: '倒放、加速、减速、变调，加入混响、回声、失真或 8D 声像，还能把声音变成图片。',
      record: '用麦克风录音、转写音频、用节拍器跟拍，或读取一首歌的调性和 BPM。',
    },
    tasksTitle: '你想做什么？',
    tasks: [
    { task: '给手机做一段铃声', tool: 'ringtone-maker' },
    { task: '从视频里提取音频', tool: 'extract-audio' },
    { task: '把偏小的录音变响', tool: 'increase-volume' },
    { task: '把两首歌合成一个文件', tool: 'audio-joiner' },
    { task: '把 WAV 转成 MP3', tool: 'wav-to-mp3' },
    { task: '把歌放慢并加混响', tool: 'slowed-reverb' },
    { task: '变调但不变速', tool: 'pitch-changer' },
    ],
    title: '免费在线音频工具大全 — 剪辑、合并、转换，无需上传',
    description:
      '裁剪、合并、格式转换、录音等所有工具集中在一处,直接在浏览器里运行。不用上传、不用注册,完全免费。',
    h1: '全部音频工具',
    intro:
      '本站所有工具按用途分组排列。选一个就能开始编辑——全部在浏览器本地运行,无需注册,文件不上传。',
  },
  about: {
    title: '关于 Free Audio Editor — 本地优先的在线音频工具',
    description:
      'Free Audio Editor 是一套把隐私放在前面的音频工具，完全在你的浏览器里运行：不上传，不注册，没有水印。',
    h1: '关于',
    p1: 'Free Audio Editor 存在，是因为编辑一条语音备忘，不该等于把它上传到别人的服务器。这里的每个工具都用同一种方式，包括{trimmer}、{cutter}、{joiner}和其他的：浏览器读取文件，在内存里编辑，再把结果直接写回你的磁盘。',
    linkTrimmer: '音频剪辑',
    linkCutter: 'MP3 剪辑',
    linkJoiner: '音频合并',
    p2: '也正因为这种做法，这些工具又快又免费。没有上传队列，没有用来处理的服务器，也没有存储费用，就是你的设备在做它本来就擅长的事。',
    p3: '这个网站是用 Web Audio API 做的静态网页。它还在继续开发，转换器、录音，以及更多编辑工具会陆续加上。',
  },
  privacy: {
    title: '隐私政策 — Free Audio Editor',
    description:
      'freeaudioeditor.online 的隐私政策：音频文件在你的浏览器里本地处理，不会上传。没有账号，也不会追踪你的音频。',
    h1: '隐私政策',
    updated: '最近更新：2026 年 10 月 21 日',
    sections: [
      {
        h: '你的音频文件',
        body: '这个网站上的每个工具都用 Web Audio API，完全在你的浏览器里处理音频。你的文件{em}，这里没有上传接口。关掉标签页之后，解码好的音频会从内存里消失。',
        em: '绝不会上传到我们的服务器',
      },
      {
        h: '我们存什么',
        body: '我们不会为你创建账号或档案。网站没有账号，也不需要邮箱。你的主题偏好（浅色或深色）和 Cookie 选择存在浏览器的 localStorage 里，不会离开你的设备。',
      },
      {
        h: '第三方',
        body: 'MP3 编码器（lamejs）随本站一起提供，只在你导出 MP3 时加载。它不从第三方网络拉取，也收不到你的音频。字体由本站自己的域名提供。',
      },
      {
        h: '统计和广告',
        body: '我们用 Vercel Web Analytics 统计整体流量。它不用 Cookie，只记录汇总后的页面浏览，不会记录你的身份，也不会记录你的音频。如果你接受可选 Cookie，网站还会加载 Microsoft Clarity。它记录点击、滚动和一次会话回放，方便我们看出哪个工具难用。如果你拒绝，就不会加载 Clarity。音频不会发给 Clarity。我们不投放广告。',
      },
      {
        h: '反馈组件',
        body: '如果你接受可选 Cookie，网站会在你首次交互后或八秒后加载第三方反馈服务 Userback。如果你拒绝，就不会加载 Userback。只有你写下并提交消息时才会发送内容。你填写的内容以及基本的页面和浏览器信息，由 Userback 代表我们处理，以便我们阅读和回复。音频文件不会参与其中。Userback 如何处理这些数据，请参阅其隐私政策。',
      },
    ],
    contactHeading: '联系',
    contactBefore: '对这份政策有疑问？写信给 {email}。',
  },
  tools: {
    'audio-to-text': {
      cardLine: '在本机把访谈和语音备忘转成文字或 SRT 字幕。',
      name: '录音转文字',
      shortName: '录音转文字',
      title: '录音转文字 — 在线免费，音频一键转文字',
      description:
        '在线把录音转成文字：约 90 种语言、带时间戳，全程在浏览器完成，不上传、免费。',
      h1: '录音转文字 — 把一段录音转成文字',
      heroAlt: '把语音备忘或访谈整理成可复制的文字稿',
      subtitle: '把录音变成文字：约 90 种语言、带时间戳，全程在浏览器里完成，不上传。',
      intro:
        '把录音拖进来，把里面的文字拿出来：语音备忘、访谈、课程、播客——支持约 90 种语言，不确定是哪种就让它自动检测。一个 Whisper AI 模型在你的浏览器标签页里、在你自己的设备上运行，音频不会被上传；转写结果可以直接编辑，也能带时间戳导出成 SRT 字幕。',
      usesHeading: '录音转文字的常见使用场景',
      uses: [
        '课程笔记：讲座转成能搜索、能引用的文字。',
        '会议纪要：会议录音一键转文字，再整理要点。',
        '视频字幕：导出带时间戳的 SRT，直接当字幕用。',
        '访谈整理：采访转成文字稿再写文章。',
        '播客 show notes：转出全文挑金句做 shownotes。',
        '无障碍文字版：给音频内容配文字，覆盖更多读者。',
      ],
      why: [
        {
          icon: 'voice',
          title: 'Whisper 本地转写',
          text: 'Whisper 模型在你的浏览器里运行：音频不上传，三十种语言可选。',
        },
        {
          icon: 'file',
          title: 'TXT 与 SRT 双格式',
          text: '纯 TXT 做笔记，SRT 带时间戳直接当字幕。',
        },
      ],
      howTo: [
        {
          name: '拖入文件',
          text: '添加 MP3、WAV、M4A、视频文件或其他录音。解码在你的设备上完成，不会被上传。可以一次放多段录音，它们共用你下一步选的语言和模型。每一段仍然大约 10 分钟封顶。一段文字留在文本框里，两段及以上打成 TXT 和 SRT 的 ZIP。',
        },
        {
          name: '选语言和模型',
          text: '大多数文件用自动检测就行。长录音或低配置设备选 Tiny 更快，追求准确选 Base。',
        },
        {
          name: '转写并下载',
          text: '第一次运行会下载一次模型并缓存。转写结果可以直接编辑，然后保存为 TXT 或 SRT。',
        },
      ],
      faqs: [
        { q: '可以一次转写多段录音吗？', a: '可以。多段录音共用语言和模型，在这台设备上一段接一段转写，每一段仍然大约 10 分钟封顶。一段文字留在文本框里，方便你改。两段及以上下载成包含 TXT 和 SRT 的 ZIP。手机更吃时间和内存。' },
        {
          q: '我的音频会被上传吗?',
          a: '不会。文件在你的浏览器里解码，由本地运行的 Whisper 模型（通过 WebAssembly 或 WebGPU）完成转写。唯一的网络请求是从公共 CDN 一次性下载模型——之后转写本身离线也能用。你的音频不会到达任何服务器。',
        },
        {
          q: '转写准确度怎么样?',
          a: '用的是 OpenAI 的 Whisper 模型，在清晰的语音上接近人工水平。背景噪音大、口音重、多人抢话或音乐声大会让准确度下降。难处理的音频用 Base 比 Tiny 明显更好——无论如何，结果都在可编辑的文本框里，下载前可以自己修正人名和标点。',
        },
        {
          q: '有什么限制?',
          a: '可以一次放多个文件，一个接一个转写，每个最长 10 分钟——更长的录音先裁剪（音频剪辑同样是本地私密处理）。它不区分说话人：对话会输出成一段没有署名的文字。这个页面处理文件，不支持实时麦克风。',
        },
        {
          q: '和语音录音机有什么区别?',
          a: '语音录音机把麦克风的声音录成音频文件；这个页面读取已有的文件，把内容写成文字。两者是好搭档：在那边录音，到这里转写。都在你的浏览器里运行。',
        },
        {
          q: '支持哪些语言?',
          a: 'Whisper 训练覆盖约 90 种语言，从英语、中文、西班牙语、阿拉伯语到越南语、乌克兰语和斯瓦希里语。不确定就用自动检测，模型会从音频里判断；固定指定语言通常还能再准一点。',
        },
        {
          q: '手机上能用吗?',
          a: '可以——新版 Chrome、Edge、Firefox 和 Safari，桌面和手机都行。支持 WebGPU 的浏览器（Chrome、Edge）转写快得多；其他浏览器走 CPU，长文件建议选 Tiny，10 分钟的音频可能要等几分钟。首次下载的模型 Tiny 也更小。',
        },
      ],
      dropHint: '拖入一个或多个音频或视频，或点击浏览',
      exportLabel: '开始转写',
      sections: [
        {
          heading: '本地转写，不是实时字幕',
          paragraphs: [
            '音频转文字在浏览器里跑 Whisper 模型。模型从 CDN 下载一次，之后文件在本机转写。音频不会为了转写被上传。',
            '上限约 10 分钟。没有说话人标记。它不会实时听麦克风。先在录音机里录，导出，再把文件拖到这里。',
          ],
        },
        {
          heading: '模型和语言',
          paragraphs: [
            '页面列出三十种语言代码。选一个，或者把自动检测留着：',
          ],
          bullets: [
            '模型是 onnx-community/whisper-tiny 和 onnx-community/whisper-base。',
            '没有 WebGPU 时，页面从 Tiny 开始。',
            '页面上显示的体积不是针对这一页测的。',
          ],
        },
        {
          heading: '文字会错在哪里',
          paragraphs: [
            '人名、重叠的说话声、人声下面的音乐，出来都会乱。它不会标出谁在说。两端静音很长，先把文件清理一下：裁掉，或者跑一遍静音移除，再转写短文件。',
            '下载前可以改文字，存成纯文本，或者带时间戳的 SRT。它不会把文字翻译成另一种语言。',
          ],
        },
      ],
    },
    'bass-booster': {
      cardLine: '150 Hz 以下低搁架最多 +15 dB，增加分量和冲击感。',
      name: '低音增强',
      shortName: '低音',
      title: '低音增强 — 在线加强音频低频，免费',
      description:
        '给单薄的录音加厚度：低频滑块 0 到 +15 dB，耳机里也能听出鼓点和人声的胸腔感。浏览器本地处理，批量 ZIP，不上传。',
      h1: '低音增强 — 加强一首歌的低音',
      heroAlt: '给 MP3 补上低音',
      subtitle: '真正的 low-shelf 均衡器:150Hz 以下最多 +15dB,先试听再导出,文件不离开你的设备。',
      intro:
        '低频薄弱,是录音听起来"小"的最常见原因。低音增强用的是真正的 low-shelf 均衡器——150Hz 以下最多 +15dB,和 mastering 工程师的手法一样,而不是把所有东西一起调大的假把式。拖入文件,把滑块推到低音站稳为止,然后导出。全部在你的浏览器里完成,文件不会上传。',
      usesHeading: '低音增强的常见使用场景',
      uses: [
        '单薄人声：手机录的备忘和访谈听着单薄，加一点厚度。',
        '耳塞听歌：低频下潜不足的耳塞，先把歌的低音推起来。',
        '视频配乐：垫乐低频太弱，加厚后再剪进视频。',
        '舞曲预热：让电子音乐的 kick 更有冲击。',
        '老录音翻新：年代久远的录音低频衰减，补回来一些。',
        '批量统一：多个文件推同一档低音，一起导出。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '0 到 +15 dB 自由推',
          text: '低频滑块全程可调：推到 8 dB 左右厚度明显，过了头会浑——边听边定。',
        },
        {
          icon: 'layers',
          title: '批量同一档',
          text: '多个文件共用同一档低音，逐个处理打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频文件拖进虚线框，或点击浏览。设备内解码。' },
        { name: '推高低音滑块', text: '低频滑块从 0 推到 +15 dB，推到厚度够又不浑的位置。' },
        { name: '试听并导出', text: '试听确认，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '多个文件共用同一档，一起导出打包 ZIP。' },
      ],
      faqs: [
        {
          q: '我的音频会被上传吗?',
          a: '不会。这个增强是浏览器标签页里的 Web Audio low-shelf 滤波器,没有上传这一步。页面加载完成后即使断网,工具照样能用。',
        },
        {
          q: '增强低音会损失音质吗?',
          a: '没有重采样,也不变调。如果提升把低频推过满量程,限幅器会接住峰值,导出不会生硬削波;特别猛的设置会让峰值略微变软。',
        },
        {
          q: '能凭空造出缺失的 sub-bass 吗?',
          a: '不能——shelf 只放大文件里本来就有的低频。手机扬声器放不出深低频,想判断效果请用耳机或真正的音箱。',
        },
        {
          q: '和音量增强器有什么区别?',
          a: '音量增强器把整个文件一起放大;低音增强只抬 150Hz 以下的低频。整个文件都偏小用增强器,声音单薄用这里的低音。',
        },
        {
          q: '低音加多少合适?',
          a: '+3–6dB 通常就能治好单薄的录音。超过 +9dB 就是在做风格化效果——导出前确认人声依然清楚。',
        },
        {
          q: '手机上能用吗?',
          a: '可以。编辑器为触屏设计——拖选、拉滑块、导出。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。',
        },
      ],
      dropHint: '拖入音频文件,或点击选择',
      exportLabel: '加强低音',
      screenshotsAlt: [
        '低音增强 拖放区：拖入文件或点击浏览，不会上传',
        '低音增强 工作区，文件已载入',
        '低音增强 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '低音旋钮到底抬了什么',
          paragraphs: [
            '这是一个低架滤波器。它把你设定的量加到 150 Hz 以下，最多 +15 dB。中频和高频不动。它不是音量旋钮。',
            '高架只能放大文件本来就有的低音。手机录的人声在 80 Hz 以下几乎没有能量，大幅增强也做不出 sub drop。用耳机或真正的音箱判断结果。手机喇叭放不了那个频段，重增强可能听起来像什么都没发生，或者像一团泥。',
          ],
        },
        {
          heading: '加多少低音',
          paragraphs: [
            '好用的范围很小。过了，就是在做效果。',
          ],
          bullets: [
            '+3 到 +6 dB：单薄的语音备忘、采访，以及全在中频的音轨。',
            '+6 到 +9 dB：需要往前站的鼓和贝斯。确认人声还穿得出来。',
            '+9 到 +15 dB：刻意的低频效果。说话通常到这一步就难跟了。',
            '低频开始噼啪，说明这个高架已经没有余量。把滑块退回去。',
          ],
        },
        {
          heading: '低音增强、音量增强和均衡器',
          paragraphs: [
            '按问题选页面。',
          ],
          bullets: [
            '低音增强，这一页：只管 150 Hz 以下。文件的问题是单薄，不是小声。',
            '音量增强：整个文件，最多 4×，带限制器。文件在每个频率上都小。',
            '均衡器：低频、中频、高频各是一个架子。150 Hz 这个分界不对时用它。',
          ],
        },
        {
          heading: '低音增强会在哪里翻车',
          paragraphs: [
            '过重的低音会盖住说话。用正常的听音量预览，别在音箱已经调小的时候判断，否则你保存的文件会在车里轰，把人声埋掉。',
            '还要继续编辑就导出 WAV。文件定稿，320 kbps 的 MP3 是对的选择。滤波器不重采样，也不改音高。增强会把峰值推过满刻度时，限制器会把那些峰值磨软，导出就不会硬削。',
          ],
        },
      ],
    },
    'treble-booster': {
      cardLine: '提升 3 kHz 以上高频最多 +15 dB，增加明亮感和清晰度。',
      name: '高音增强',
      shortName: '高音',
      title: '高音增强 — 在线提升音频高频，去闷提亮',
      description:
        '给蒙了毯子的录音提亮：高频滑块 0 到 +15 dB，齿字、镲片和空气感回来。浏览器本地处理，批量 ZIP，不上传。',
      h1: '高音增强 — 提起一首歌的高音',
      heroAlt: '让发闷的音频更清楚',
      subtitle: '真正的 high-shelf 均衡器:3kHz 以上最多 +15dB,先试听再导出,文件不离开你的设备。',
      intro:
        '发闷、发暗的音频,十有八九缺的是同一样东西:3kHz 以上的能量。高音增强用的是真正的 high-shelf 均衡器——3kHz 以上最多 +15dB,和 mastering 工程师打开一首曲子的手法一样,而不是把所有东西一起调大的假把式。拖入文件,把滑块推到细节回来为止,然后导出。全部在你的浏览器里完成,文件不会上传。',
      usesHeading: '高音增强的常见使用场景',
      uses: [
        '去闷救录音：像蒙了毯子一样闷的录像，把高频打开。',
        '老歌提亮：年代久远的录音高频衰减，补回空气感。',
        '语音清晰：通话录音的高频缺失，提亮后咬字更清楚。',
        '耳机的另一半：低音加厚后高音发暗，对称提亮。',
        '细节试听：想听清镲片和呼吸声，高频推一点。',
        '批量提亮：多个文件推同一档高音，一起导出。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '0 到 +15 dB 自由推',
          text: '高频滑块全程可调：推过头齿音会毛糙——小步推进，边听边定。',
        },
        {
          icon: 'layers',
          title: '批量同一档',
          text: '多个文件共用同一档高音，逐个处理打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频文件拖进虚线框，或点击浏览。设备内解码。' },
        { name: '推高高音滑块', text: '高频滑块从 0 推到 +15 dB，小步推进，提亮到不毛糙为止。' },
        { name: '试听并导出', text: '试听确认，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '多个文件共用同一档，一起导出打包 ZIP。' },
      ],
      faqs: [
        {
          q: '我的音频会被上传吗?',
          a: '不会。这个增强是浏览器标签页里的 Web Audio high-shelf 滤波器,没有上传这一步。页面加载完成后即使断网,工具照样能用。',
        },
        {
          q: '增强高音会损失音质吗?',
          a: '没有重采样,也不变调。但大幅提升会把文件里本来就有的嘶声和齿音一起抬起来——变刺就往回拉滑块。限幅器会接住峰值,导出不会生硬削波。',
        },
        {
          q: '能找回从未录进去的细节吗?',
          a: '不能——shelf 只放大文件里本来就有的高频。低码率压缩过的音频,高频已经永久丢失,任何 EQ 都找不回来。',
        },
        {
          q: '和低音增强有什么区别?',
          a: '两者在频谱两端:低音增强抬 150Hz 以下,高音增强抬 3kHz 以上。发闷发暗用高音,单薄细小用低音。',
        },
        {
          q: '高音加多少合适?',
          a: '+3–6dB 通常就能打开发闷的录音。超过 +9dB,s、sh、t 这类音可能变刺——导出前用耳机听一遍。',
        },
        {
          q: '手机上能用吗?',
          a: '可以。编辑器为触屏设计——拖选、拉滑块、导出。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。',
        },
      ],
      dropHint: '拖入音频文件,或点击选择',
      exportLabel: '加强高音',
      screenshotsAlt: [
        '高音增强 拖放区：拖入文件或点击浏览，不会上传',
        '高音增强 工作区，文件已载入',
        '高音增强 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '3 kHz 以上的高架',
          paragraphs: [
            '高音增强是一个高架滤波器，3 kHz 以上最多 +15 dB。它放大文件本来就有的高频，变不出低比特率编码丢掉的东西。',
            '限制器会接住峰值，大幅增强也不会硬削波。增强也会把文件里原本就有的嘶声和齿音一起抬起来。',
          ],
        },
        {
          heading: '推到什么程度',
          paragraphs: [
            '导出前先用耳机听一遍：',
          ],
          bullets: [
            '+3 到 +6 dB，大多数发闷的录音会打开。',
            '超过 +9 dB，s、sh、t 这些音可能变得刺耳。',
            '文件是低比特率编码的，任何高架都找不回丢掉的高频。',
          ],
        },
        {
          heading: '高音、低音和均衡器',
          paragraphs: [
            '低音增强抬 150 Hz 以下。这一页抬 3 kHz 以上。发闷、发糊，看这里；单薄、发小，看低音。',
            '均衡器是同样三个区域，而且能削能增：150 Hz 低架、1 kHz 峰值、3 kHz 这个高架。已经确定只想要更多高音，就用增强页。',
          ],
        },
      ],
    },
    'equalizer': {
      cardLine: '用直观的三旋钮 ±15 dB 均衡器塑造低、中、高频。',
      name: '音频均衡器',
      shortName: '均衡器',
      title: '音频均衡器 — 10 段 EQ 在线调节，31 Hz–16 kHz',
      description:
      '10 个 peaking 频段覆盖 31 Hz–16 kHz，每段 ±15 dB：挤成团的人声、发闷的混音、单薄的低频都能修。带摇滚/流行/人声等预设，浏览器本地处理。',
      h1: '音频均衡器 — 调节低音、中音和高音',
      heroAlt: '塑造一首歌或一段录音的音色',
      subtitle: '十段各 ±15dB，预设一键到位——依旧诚实的均衡器。',
      intro:
        '三个旋钮就能干均衡器的大部分活:150Hz 以下的低频、人声所在的 1kHz 附近中频、3kHz 以上的高频。这个均衡器用的是真正的滤波段——low shelf、peaking、high shelf,每段 ±15dB,能压轰鸣、去浑浊、加空气感。拖入文件,调出你要的声音,导出。全部在你的浏览器里完成,文件不会上传。',
      usesHeading: '音频均衡器的常见使用场景',
      uses: [
        '去浑浊：中频拉下 −3 到 −6 dB，挤成一团的人声立刻清爽。',
        '去闷：8k–16k 段推高，蒙了毯子的录音亮回来。',
        '去轰头：60–125 Hz 段收一点，低频轰头的混音变干净。',
        '人声提亮：2k–4k 段微推，咬字更清楚。',
        '风格预设：摇滚/流行/嘻哈/古典/人声预设一键起步。',
        '配平双声道：左右各调一套，分别导出。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '十个频段各管一段',
          text: '31、62、125、250、500、1k、2k、4k、8k、16k 十个 peaking band，每段 ±15 dB——按频段修，不是笼统的低音高音。',
        },
        {
          icon: 'check',
          title: '预设一键起步',
          text: '平直/摇滚/流行/嘻哈/古典/人声六套预设，先接近再微调。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频文件拖进虚线框，或点击浏览。在你的设备上解码。' },
        { name: '调十个频段', text: '按 31 Hz–16 kHz 十段推子逐段调整，每段 ±15 dB；滑杆一动即时生效。' },
        { name: '试听对比', text: '调完听一遍，不满意就重置为平直再调。' },
        { name: '导出', text: '点「应用均衡」下载，MP3 或无损 WAV。' },
      ],
      faqs: [
        {
          q: '我的音频会被上传吗?',
          a: '不会。这些频段是浏览器标签页里的 Web Audio 滤波器(low shelf、peaking、high shelf),没有上传这一步。页面加载完成后即使断网,工具照样能用。',
        },
        {
          q: '提升好还是削减好?',
          a: '削减。大幅提升会把信号推向限幅器,峰值容易被压软;在浑浊的频段砍 −4dB,往往比任何地方推 +6dB 都管用。',
        },
        {
          q: '和低音增强、高音增强有什么区别?',
          a: '增强器是只能往上的单用途 shelf。均衡器把三个频段放进一个界面,能加也能减——清楚自己只要哪一头时,用增强器更快。',
        },
        {
          q: '各频段的准确频率是多少?',
          a: 'low shelf 在 150Hz,peaking 在 1kHz(单位宽度),high shelf 在 3kHz——标准的三段布局。0dB 的频段会被旁路,没动过的频段不会给声音染色。',
        },
        {
          q: '为什么削减中频后人声怪怪的?',
          a: '语音的清晰度住在 1kHz 附近。中频段温和地减(−3 到 −6dB),拿一句你熟悉的话试听——砍太深,人声会发远发空。',
        },
        {
          q: '手机上能用吗?',
          a: '可以。编辑器为触屏设计——拖选、拉滑块、导出。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。',
        },
      ],
      dropHint: '拖入音频文件,或点击选择',
      exportLabel: '应用均衡',
      screenshotsAlt: [
        '音频均衡器 拖放区：拖入文件或点击浏览，不会上传',
        '音频均衡器 工作区，文件已载入',
        '音频均衡器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '十个频段各管什么',
          paragraphs: [
            '频段是相隔一个八度的峰值滤波器，从 31 Hz 到 16 kHz。每一段大约 ±15 dB。停在 0 dB 的频段会被旁通，不给声音染色。',
            '削比增安全。在浑浊的频段削 −4 dB，常常比在别处加 +6 dB 更有效。大幅增强会把信号推向限制器，可能把峰值磨软。',
          ],
        },
        {
          heading: '这些范围各管什么',
          paragraphs: [
            '八度频段归成常用的三个区域，它不是手术级 EQ：',
          ],
          bullets: [
            '31–250 Hz：重量和浑浊。文件发轰就削。低音增强只能抬这一段，最多 +15 dB，不能削。',
            '500 Hz–2 kHz：存在感。在这里削，人声会听起来很远。',
            '4–16 kHz：空气感和边缘。高音增强只抬 3 kHz 以上。',
          ],
        },
        {
          heading: '什么时候一个增强页就够了',
          paragraphs: [
            '已经确定只想要更多低音或高音，低音增强和高音增强是更短的页面。它们不能削。',
            '低通和高通是一刀切的截止，不是这些高架低架。想让某个频率以上或以下全部消失，而不是挪几个分贝，用滤波。',
          ],
        },
      ],
    },
    'low-pass-filter': {
      cardLine: '只保留截止频率以下的温暖感——做 lo-fi 音色很合适。',
      name: '低通滤波器',
      shortName: '低通滤波',
      title: '低通滤波器 — 切掉高频嘶声，截止可调',
      description:
        '切掉持续的嘶声和空调呜呜声：截止频率 300 Hz–20 kHz 可调，高频以上直接切走。浏览器本地处理，批量 ZIP，不上传。',
      h1: '低通滤波器 — 切掉音频里的高频',
      heroAlt: '把录音里刺耳的高音磨软',
      subtitle: '把截止频率从 20kHz 扫到 300Hz,只留下你想要的频率。',
      intro:
        '低通滤波器保住低频,把截止频率以上的东西滚降掉——这是去掉嘶声、尖锐齿音、吱吱声和刺耳数码感的诚实做法。跟降噪器不一样,它从不猜什么是噪声:你截止频率以上的,统统走人。拖入文件,往下扫截止频率,直到烦人的东西消失,导出。全部在你的浏览器里完成,文件不会上传。',
      usesHeading: '低通滤波的常见使用场景',
      uses: [
        '去嘶声：人声录音里持续的嘶声和空调呜呜声一刀切走。',
        '磁带翻录：老磁带的高频咝咝声压下去。',
        '垫乐柔化：背景垫乐太亮抢人声，切掉刺耳的高频。',
        '电话感音效：想要老旧对讲的窄带感，把高频收窄。',
        '给降噪铺路：纯音调型的高频噪音先用低通收掉。',
        '批量柔化：多个文件用同一截止，一起导出。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '截止频率可调',
          text: '300 Hz–20 kHz 自由设定：嘶声集中在高频段，收到齿字开始变暗的位置就停。',
        },
        {
          icon: 'layers',
          title: '批量同一截止',
          text: '多个文件共用同一截止频率，逐个处理打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频文件拖进虚线框，或点击浏览。设备内解码。' },
        { name: '降低截止频率', text: '截止滑块从 20 kHz 往下拉：嘶声消失、声音还没变闷的位置就是落点。' },
        { name: '试听并导出', text: '试听确认高频干净，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '多个文件共用同一截止，一起导出打包 ZIP。' },
      ],
      faqs: [
        {
          q: '我的音频会被上传吗?',
          a: '不会。这个滤波器是浏览器标签页里的 Web Audio 低通 biquad,没有上传这一步。页面加载完成后即使断网,工具照样能用。',
        },
        {
          q: '低通滤波器和降噪是一回事吗?',
          a: '不是——这正是它的强项。降噪器会聪明地区分噪声和信号;低通是无差别砍掉截止频率以上的一切。对付持续、宽频的嘶声,它比任何算法都可靠。',
        },
        {
          q: '截止频率一低,人声就发闷,为什么?',
          a: '辅音的清晰度住在 3–8kHz。低于 5kHz 左右,语音开始发闷;低于 2kHz 就像打电话。人声先试 8–12kHz。',
        },
        {
          q: '和高通滤波器有什么区别?',
          a: '方向相反:高通去掉截止频率以下的隆隆声、嗡嗡声和低频轰鸣;低通去掉以上的嘶声和毛刺。两个一起用,只留下你选的频段。',
        },
        {
          q: '音乐用什么截止频率?',
          a: '想要轻微 lo-fi 味就试 4–8kHz;清理尖锐镲片,12–16kHz 通常够用。低于 3kHz 音乐会明显发闷——相信耳朵,别迷信数字。',
        },
        {
          q: '手机上能用吗?',
          a: '可以。编辑器为触屏设计——拖选、扫截止频率、导出。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。',
        },
      ],
      dropHint: '拖入音频文件,或点击选择',
      exportLabel: '应用低通',
      screenshotsAlt: [
        '低通滤波器 拖放区：拖入文件或点击浏览，不会上传',
        '低通滤波器 工作区，文件已载入',
        '低通滤波器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '截止点以上的全部切掉',
          paragraphs: [
            '低通滤波器会把截止点以上的内容滚降。它不是降噪器，不会把嘶声和信号分开。它把你设定点之后的每个频率都压下去，设得太低，辅音和镲片也会一起没。',
            '它不重采样，也不改音高。导出仍然编码一次：MP3，或者想要滤波后的音频不多一代有损，就选 WAV。',
          ],
        },
        {
          heading: '和活对得上的截止点',
          paragraphs: [
            '这个数字只是起点。要听，因为同一个截止点会让一个文件发闷，只让另一个变柔：',
          ],
          bullets: [
            '人声：先试 8–12 kHz。低于约 5 kHz，说话会发闷。低于 2 kHz，听起来像电话。',
            '柔和的 lo-fi 音乐效果：4–8 kHz。',
            '只想收一收刺耳的镲片：12–16 kHz。低于 3 kHz，音乐明显变闷。',
          ],
        },
        {
          heading: '高通是另一个方向',
          paragraphs: [
            '高通滤波去掉截止点以下的隆隆声和低频轰鸣。这一页去掉截止点以上的嘶声和刺耳感。两个一起用，中间留出一条带。',
            '只想加几个分贝的高音，而不是把顶部直接切掉，用高音增强或均衡器。那些高架不做硬截止。',
          ],
        },
      ],
    },
    'high-pass-filter': {
      cardLine: '切掉截止频率以下的隆隆声和嗡嗡声，人声更干净。',
      name: '高通滤波器',
      shortName: '高通滤波',
      title: '高通滤波器 — 切掉低频隆隆声，截止可调',
      description:
        '切掉马路隆隆声、敲桌声和手持噪动：截止频率 20 Hz–5 kHz 可调，低频以下直接切走。浏览器本地处理，批量 ZIP，不上传。',
      h1: '高通滤波器 — 去掉录音里的隆隆声',
      heroAlt: '去掉人声里的风声和低频哼声',
      subtitle: '把截止频率从 20Hz 扫到 5kHz,它以下的东西统统清掉。',
      intro:
        '隆隆声、马路噪声、手蹭麦克风、敲桌子——不想要的低频,本来就长在大多数真实录音里。高通滤波器保住截止频率以上的一切,滚降以下的部分:一个从不瞎猜的诚实修法。拖入文件,往上扫截止频率,直到轰鸣消失、人声依然饱满,导出。全部在你的浏览器里完成,文件不会上传。',
      usesHeading: '高通滤波的常见使用场景',
      uses: [
        '人声清洁：清掉播客和人声录音里的马路隆隆声和敲桌声。',
        '手机录像：手持抖动带来的低频噪动一刀切走。',
        '给压缩铺路：低频切干净后，压缩器不再被隆隆声触发。',
        '演讲录音：会场空调和人群的低频嗡嗡声压下去。',
        '音乐去浑：混音发浑时把无用的超低频切掉。',
        '批量清洁：多个文件用同一截止频率，一起导出。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '截止频率可调',
          text: '20 Hz–5 kHz 自由设定：人声通常 80–120 Hz 起步就够，切得太高会削掉人声的胸腔感。',
        },
        {
          icon: 'layers',
          title: '批量同一截止',
          text: '多个文件共用同一截止频率，逐个处理打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频文件拖进虚线框，或点击浏览。设备内解码。' },
        { name: '抬高截止频率', text: '截止滑块从 20 Hz 往上推：隆隆声消失、人声不变厚的位置就是落点。' },
        { name: '试听并导出', text: '试听确认低频干净、人声无损，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '多个文件共用同一截止，一起导出打包 ZIP。' },
      ],
      faqs: [
        {
          q: '我的音频会被上传吗?',
          a: '不会。这个滤波器是浏览器标签页里的 Web Audio 高通 biquad,没有上传这一步。页面加载完成后即使断网,工具照样能用。',
        },
        {
          q: '能去掉线材引起的嗡嗡声吗?',
          a: '市电嗡嗡声在 50 或 60Hz,谐波在它上面。80–120Hz 的高通能去掉基频和大部分嗡声——谐波顽固的话,再串一个低通滤波器把频段夹窄。',
        },
        {
          q: '截止频率抬到多高,人声会变薄?',
          a: '男声到 100Hz 左右还保得住厚度,女声到 150–200Hz 左右。过了 300Hz,语音就开始像打电话——当成风格也行,但先听再说。',
        },
        {
          q: '和低通滤波器有什么区别?',
          a: '方向相反:高通去掉截止频率以下的低频隆隆,低通去掉以上的嘶声毛刺。串起来用,只剩你选的频段。',
        },
        {
          q: '滤波会降低文件音质吗?',
          a: '没有重采样,也不变调——截止频率只决定哪些频率留下。导出照例重新编码一次:MP3 128–320 kbps,或逐位一致的无损 WAV。',
        },
        {
          q: '手机上能用吗?',
          a: '可以。编辑器为触屏设计——拖选、扫截止频率、导出。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。',
        },
      ],
      dropHint: '拖入音频文件,或点击选择',
      exportLabel: '应用高通',
      screenshotsAlt: [
        '高通滤波器 拖放区：拖入文件或点击浏览，不会上传',
        '高通滤波器 工作区，文件已载入',
        '高通滤波器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '截止点以下的全部切掉',
          paragraphs: [
            '高通滤波器会把截止点以下的内容滚降：隆隆声、风声、手持碰撞声，还有发轰房间的低频。它不改音高，也不重采样。',
            '市电嗡声在 50 或 60 Hz，谐波在上面。80–120 Hz 左右的高通会去掉基频和大部分余响，顽固的谐波还在。需要把频带收得更窄，再配一个低通。',
          ],
        },
        {
          heading: '抬多高，人声会变薄',
          paragraphs: [
            '说话的中低频有厚度。截止点推得太远，人声就变薄：',
          ],
          bullets: [
            '男声的厚度大约能保到 100 Hz。',
            '女声大约能保到 150–200 Hz。',
            '过了 300 Hz，说话开始像电话。这也可以是一种风格，导出前先听。',
          ],
        },
        {
          heading: '不是低音增强，也不是低架削减',
          paragraphs: [
            '低音增强在 150 Hz 以下加电平。这一页在你扫过的截止点以下减电平。它们解决的是相反的问题。',
            '均衡器可以在 150 Hz 削几个分贝，保留其余低频。文件只是有点浑、还想留重量，用它。隆隆声应该彻底消失，用这一页。',
          ],
        },
      ],
    },
    'fade-audio': {
      cardLine: '用精确的淡入淡出时长，柔化歌曲结尾和播客开头。',
      name: '音频淡入淡出',
      shortName: '淡入淡出',
      title: '音频淡入淡出 — 两端各 0–5 秒独立可调',
      description:
        '给音频加淡入淡出：两端各 0–5 秒独立可调，步进 0.1 秒。合辑收尾、播客渐起都适用。浏览器本地处理，不上传。',
      h1: '音频淡入淡出 — 让音乐渐渐淡出',
      heroAlt: '给一段音轨做淡入，再做淡出',
      subtitle: '几秒钟做好收尾:淡入淡出时长都能精确到 0.1 秒,先试听再导出,文件不离开你的设备。',
      intro:
        '淡入让一首歌从安静里慢慢起来,淡出让它慢慢收住——生硬切断和完整收尾,差别就在这里。把文件拖进来,分别设定淡入、淡出的时长,导出前先试听。全部在你的浏览器里完成,文件不会上传。',
      usesHeading: '音频淡入淡出的常见使用场景',
      uses: [
        '合辑收尾：串烧或合辑的结尾淡出，收得干净。',
        '播客渐起：开头渐入，第一句话不吓听众一跳。',
        '视频配乐：配乐和画面一起淡出，不抢戏。',
        '铃声两端：铃声两端各加短淡化，循环自然。',
        '现场录音：开场和收尾的嘈杂声用淡化过渡。',
        '演讲音频：开头结尾的咳嗽杂音用淡化遮掉。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '两端独立可调',
          text: '淡入淡出各 0–5 秒，步进 0.1 秒——只想淡出就只调淡出。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '淡化在浏览器本地完成，音频不上传。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设定淡入淡出时长', text: '两个滑杆分别控制淡入和淡出，各 0–5 秒，步进 0.1 秒。' },
        { name: '试听并导出', text: '试听确认，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        {
          q: '我的音频会被上传吗?',
          a: '不会。淡入淡出用 Web Audio API 在你的浏览器标签页里渲染,没有上传这一步。页面加载完成后即使断网,工具照样能用。',
        },
        {
          q: '加淡入淡出会影响音质吗?',
          a: '不会。淡入淡出只改变音量随时间的变化,不加混响,也不变调。导出时只重新编码一次:MP3 为 128–320 kbps(默认 320),或者选比特完全一致的无损 WAV。你的原始文件不会被改动。',
        },
        {
          q: '能在两首歌之间做交叉淡化吗?',
          a: '这个页面不行——它只给单个文件加淡入淡出。把一首歌的结尾融进另一首的开头叫交叉淡化拼接,音频合并器做的就是这件事。把同一段重复几遍、接缝做交叉淡化，用音频循环。',
        },
        {
          q: '和音量增强器有什么区别?',
          a: '音量增强器把整个文件按固定倍数放大;淡入淡出按时间塑造音量——两头轻,中间不动。收尾用淡入淡出,整体响度用增强器。',
        },
        {
          q: '淡出多长比较合适?',
          a: '歌曲通常 1–3 秒最自然,现场录音可以到 4–5 秒。循环和铃声控制在 0.2–0.5 秒,不然起音会发闷。没有唯一正确值——试听,信自己的耳朵。',
        },
        {
          q: '手机上能用吗?',
          a: '可以。编辑器为触屏设计——拖选、拉滑块、导出。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。',
        },
      {
        q: '能在 Claude 或 Cursor 里给本地文件做淡入淡出吗？',
        a: '这个网页在浏览器里给一个文件做淡化，0 到 5 秒，步进 0.1。/mcp 用 ffmpeg 的 afade，两端各 0 到 30 秒。MP3 会重新编码一次。聊天应用仍会看到路径。',
      }],
      dropHint: '拖入音频文件,或点击选择',
      exportLabel: '淡入淡出并下载',
      screenshotsAlt: [
        '音频淡入淡出 拖放区：拖入文件或点击浏览，不会上传',
        '音频淡入淡出 工作区，文件已载入',
        '音频淡入淡出 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '两端变轻，中间不动',
          paragraphs: [
            '音频淡化在一个文件上随时间改变音量：开头淡入、结尾淡出，或者两头都做。中间不动。没有混响，也不改音高。',
            '歌曲通常 1–3 秒听起来自然。现场录音可以 4–5 秒。循环和铃声要 0.2–0.5 秒，起音才还在。导出前先听开头和结尾。',
          ],
        },
        {
          heading: '淡化是干什么用的',
          paragraphs: [
            '剪切本身已经做完，只是边缘会咔哒或者停得太死时，用它：',
          ],
          bullets: [
            '循环时不该爆音的铃声或循环段。',
            '结束得太硬的一首歌或一条语音备忘。',
            '一开头就是满音量的录音。',
          ],
        },
        {
          heading: '不是交叉淡化，也不是音量增强',
          paragraphs: [
            '把一条音轨的结尾混进另一条的开头，是 [音频合并](/audio-joiner)。这一页只给一个文件做淡入淡出。',
            '[音量增强](/volume-booster) 把整个文件按固定倍数抬起，从 10% 到 400%。淡化是两端轻、中间满。导出 MP3 默认 320 kbps，或者 16 位 WAV。你拖进来的文件不会被修改。',
          ],
        },
      ],
    },
    'audio-trimmer': {
      cardLine: '拖动手柄精确保留需要的部分——播客、语音备忘、任何音频都行。',
      name: '音频剪辑',
      shortName: '音频剪辑',
      title: '音频剪辑 — 在线裁剪 MP3 与录音，0.01 秒精度',
      description:
        '裁剪 MP3、播客或语音备忘：波形选区、0.01 秒微调、循环试听，确认后存成 MP3（128–320 kbps）或无损 WAV。全部在浏览器本地完成，文件不上传。',
      h1: '音频剪辑 — 把音频切到合适的长度',
      heroAlt: '把歌曲或播客裁到你要的那一段',
      subtitle: '在线剪辑音频。免费，就在浏览器里。不会上传。',
      intro:
        '从任意歌曲、语音备忘、播客或录音里，裁出你要的那一段。在波形上拖动选择，听一遍，再保存。整个裁剪都在你的设备上完成，所以长录音也保持私密，而且马上就能开始。',
      usesHeading: '音频剪辑的常见使用场景',
      uses: [
        '播客剪辑：把精彩回答裁出来，两边的嗯啊丢掉。',
        'MP3 裁剪：从整首歌里取出副歌或一段循环，不用桌面软件。',
        '语音备忘：发出去之前缩短，只留要说的那段。',
        '会议记录：裁掉迟到和闲聊，只留决议部分。',
        '铃声素材：先裁出一段，再去[铃声制作](/ringtone-maker)做 40 秒 M4R。',
        '样品与循环：裁一小段给视频或演示当背景音。',
      ],
      why: [
        {
          icon: 'zoom-in',
          title: '切点准到百分之一秒',
          text: '时间刻度尺随缩放换挡，两个边界都能 0.01/0.1/1 秒步进微调，还能循环试听选区——边听边调，切点想落在哪就落在哪。',
        },
        {
          icon: 'scissors',
          title: '两个出口，不用切模式',
          text: '「保存选中段」留下这一段，「去掉选中段并保存」删掉这一段，按钮上实时显示导出时长，选完点一下就下载。',
        },
      ],
      howTo: [
        {
          name: '放入文件',
          text: '把音频或视频文件拖进虚线框，或点击浏览。支持 MP3、WAV、M4A、OGG、FLAC 等格式，在你的设备上解码。',
        },
        {
          name: '选出要留的部分',
          text: '在波形上拖出选区，拖两端手柄微调，也可以用时间输入配 0.01/0.1/1 秒步进箭头精确到边界。',
        },
        {
          name: '循环试听，确认切点',
          text: '打开循环，只听选中的部分；调边界会立即从头重播，边听边改。确定后选「保存选中段」或「去掉选中段并保存」。',
        },
        {
          name: '拿走文件',
          text: '点「裁剪并下载」直接下载，MP3（128–320 kbps）或无损 WAV，文件名带 -edited 后缀。',
        },
      ],
      faqs: [
        {
          q: '这个音频剪辑真的免费吗？',
          a: '是的。每次裁剪和导出都免费，不用注册，也没有水印。工具完全在你的浏览器里运行，服务器不花钱，所以不用向你收费。',
        },
        {
          q: '我的音频会上传到服务器吗？',
          a: '不会。文件由你自己的浏览器用 Web Audio API 解码和处理。页面加载完之后你可以断网，裁剪照样能用，什么都不会发出去。',
        },
        {
          q: '可以裁剪哪些格式？',
          a: '浏览器能解码的都能裁。保存菜单有 MP3 64、96、128、192、320 kbps 五档，浏览器支持时还有 M4A（AAC），或 16 位 WAV。MP3 只编码前两个声道。',
        },
        {
          q: '裁剪会降低音质吗？',
          a: '存成 WAV 时，你留下的那一段是比特级一致的，不会再次压缩。存成 MP3 会重新编码一次；192 kbps 或以上，对大多数人来说几乎听不出差别。',
        },
        {
          q: '手机上能裁剪音频吗？',
          a: '能。波形支持触摸，导出按钮一直在屏幕底部，伸手就能点到。超过 300 MB 的文件会被拒绝；超过一小时也能打开，页面会提示标签页可能内存不够。',
        },
        {
          q: '文件可以有多长？',
          a: '在一台现代电脑上，大约一小时以内的录音用起来很轻松。实际上限是你设备的内存，不是我们设的上限。把留下的那段重复 2 到 16 次，用音频循环。',
        },
        {
          q: '能在 Claude 或 Cursor 里裁剪本地文件吗？',
          a: '这个网页用 Web Audio API 在浏览器里裁剪，不用安装。/mcp 在你的电脑上调用 ffmpeg。开始和结束用秒。WAV 是解码后的采样。MP3 会重新编码一次。聊天应用仍会看到路径和参数。',
        },
        {
          q: '裁剪能精确到什么程度？',
          a: '箭头控件让每个边界按 0.01 秒、0.1 秒、1 秒步进移动，两个时间也能手输。波形下的刻度尺跟着缩放走，切点想落在哪就落在哪。',
        },
        {
          q: '手机上能全屏裁剪吗？',
          a: '能。工具栏的展开图标把编辑器铺满整个屏幕，波形占满整个显示区域。再点一下或按 Escape 返回。',
        },
        {
          q: '发给 WhatsApp 或邮件该存什么格式？',
          a: 'MP3 128 或 192 kbps 文件小，到处都能播。WhatsApp 收最大 2 GB 的文档，Gmail 单封邮件上限 25 MB，裁好的片段轻松放下。',
        },
        {
          q: '导出的文件名为什么带后缀？',
          a: '每次导出都会加一个 -edited 这样的短标记，方便分清版本。下载后改名就行，音频不会变。',
        },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '裁剪并下载',
      screenshotsAlt: [
        '音频剪辑 拖放区：拖入文件或点击浏览，不会上传',
        '音频剪辑 工作区，文件已载入',
        '音频剪辑 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '标出你要留下的那一段',
          paragraphs: [
            '在波形上拖动标出区间。声轨下方的刻度尺显示比例，两条边界线上各有一个时间标签。保存前先按播放，只听这一段。',
            '之后还要再裁或继续编辑，就导出 WAV。片段已经定稿，就导出 MP3。裁成 WAV 会保留你选中的采样；裁成 MP3 会按你选的比特率编码一次。',
          ],
        },
        {
          heading: '把切点微调到百分之一秒',
          paragraphs: [
            '箭头组把边界一次移动 0.1 秒、0.01 秒或 1 秒，两个时间也可以直接手输。',
            '打开循环，选中的区间会反复播放；每一次调整都会从头重播这一段，改完马上就能听出差别。',
          ],
        },
        {
          heading: '裁一段录音，或者切一首歌',
          paragraphs: [
            '这一页用来把一段录音缩短：播客里的一个回答、一条语音备忘、一节课、长文件中间的一段。',
          ],
          bullets: [
            '这一页和 [MP3 剪辑](/mp3-cutter) 是同一个编辑器，都能留下选区，也能删掉选区。区别是那一页的文案照着副歌和前奏写。',
            '要一段最长 40 秒、只在浏览器能编码 AAC 时提供 M4R 的铃声，用 [手机铃声制作](/ringtone-maker)。这一页不会把铃声装进手机。',
            '给一个文件做 0 到 5 秒的淡入淡出，用 [音频淡入淡出](/fade-audio)。这一页不做淡化。',
          ],
        },
        {
          heading: '裁剪会对声音做什么',
          paragraphs: [
            '文件先解码，取出这一段，再重新写出去。WAV 是这一段的 16 位 PCM。MP3 按所选比特率编码一次。M4A 会存一份 AAC 副本，可直接用于 Apple 应用（需浏览器支持 AAC 编码）。',
            '这一页不改音量。要把偏小的文件放大到 10% 到 400%，用 [提高音量](/increase-volume)。',
          ],
        },
        {
          heading: '文件能有多长',
          paragraphs: [
            '超过 300 MB 的文件会被拒绝。超过一小时也能打开，页面会提示标签页可能内存不够。这是提醒，不是时长上限。',
          ],
          bullets: [
            '一条语音备忘、一个播客回答：就在这一页裁，手机上也行。',
            '一整集节目：用电脑预览和导出更稳。',
            '视频文件：裁的是音轨，画面不会保存。',
          ],
        },

        {
          heading: '按用途选择输出格式',
          paragraphs: [
            '不同的去处看重不同的东西：聊天软件要文件小，邮件有大小上限，下一步编辑不希望二次损耗。',
          ],
          table: {
            headers: ['去处', '建议格式', '原因'],
            rows: [
              ['聊天应用（如 WhatsApp）', 'MP3 · 128 或 192 kbps', '文件小，处处能播。以文档方式发送上限 2 GB，裁好的片段轻松放下。'],
              ['电子邮件', 'MP3 · 128 kbps', '12 分钟的片段约 12 MB，低于 Gmail 25 MB 的邮件上限。'],
              ['Apple 应用（库乐队、iMovie）', 'M4A · AAC', '无需二次转换，直接进入 Apple 应用。'],
              ['本站继续编辑', 'WAV · 无损', '没有第二次有损编码，淡入淡出和音量调整不会叠加 MP3 损耗。'],
              ['社交视频（TikTok、Reels）', 'WAV · 无损', '平台本身会重新编码，交出最干净的源文件即可。'],
            ],
          },
          outro: ['各项上限会随应用版本变化。以上数字于 2026 年 11 月对照各应用官方帮助页核对。'],
        },      ],
    },
    'mp3-cutter': {
      cardLine: '把歌切到副歌、高潮或任意片段，不重新编码。',
      name: 'MP3 剪辑',
      shortName: 'MP3 剪辑',
      title: 'MP3 剪辑 — 在线剪切歌曲，留副歌或删前奏',
      description:
        '在线剪切 MP3 音乐：留下副歌，或删掉前奏和口播广告。导出 WAV 比特级一致，MP3 只编码一次，最高 320 kbps。超过 300 MB 的文件会被拒绝；全程浏览器内处理，不上传。',
      h1: 'MP3 剪辑 — 在线免费剪切 MP3 歌曲',
      heroAlt: '免费在线 MP3 剪辑，用来剪切 MP3',
      subtitle: '在线剪切歌曲和 MP3：留下你要的部分，删掉其余的。',
      intro:
        '把一首歌剪到副歌、去掉很长的片头，或单独切出一段高潮，都在浏览器里完成。你可以选择留下选中的部分，或把它删掉，试听结果，几秒就能存成一个新的 MP3。',
      usesHeading: 'MP3 剪辑的常见使用场景',
      uses: [
        '副歌剪辑：把歌的高潮单独切出来，几秒存成新文件。',
        '片头处理：删掉歌曲开头的长前奏和口播广告。',
        '铃声素材：先切出想要的一段，再去[铃声制作](/ringtone-maker)做 40 秒 M4R。',
        '音乐剪辑：剪出练习用的片段，或去掉曲中不要的段落。',
        '节目整理：去掉节目开头的广告，只留正片。',
        '样本制作：从 MP3 里切一小段当素材，WAV 导出无损。',
      ],
      why: [
        {
          icon: 'scissors',
          title: '留下或删除，两个出口',
          text: '选好片段后两个按钮并列：「保留选区」留下这一段，「删除选区」去掉这一段，按钮上实时显示导出时长，不用来回切换模式。',
        },
        {
          icon: 'lock-simple',
          title: '原文件不动',
          text: '浏览器在内存里剪切，不上传。WAV 导出比特级一致，MP3 只重新编码一次，最高 320 kbps。',
        },
      ],
      howTo: [
        {
          name: '加入你的 MP3',
          text: '把 MP3 拖进虚线框，或点击浏览。大多数其他音频和视频格式也能解码，全程在你的设备上完成。',
        },
        {
          name: '标出要切的部分',
          text: '在波形上拖出一段，也可以用时间输入精确到边界。「保留选区」留下这一段，「删除选区」去掉这一段，随时切换。',
        },
        {
          name: '点「剪切并下载」',
          text: '导出条上的主按钮。WAV 导出比特级一致，MP3 只编码一次，最高 320 kbps。不确定就先「播放」试听选区。',
        },
        {
          name: '拿走文件',
          text: '下载自动开始，文件名带 -edited 后缀方便区分版本。超过 300 MB 的源文件会被拒绝。',
        },
      ],
      faqs: [
        {
          q: '怎么只切出一首歌的副歌？',
          a: '在波形上选中副歌，确认模式是「保留选区」，试听，然后导出。你会得到一个新的音频文件，里面只有这一段。',
        },
        {
          q: '怎么去掉音轨开头的 30 秒？',
          a: '选中开头的 30 秒（拖动时会显示精确的开始和结束时间，也可以直接输入），把模式设为「删除选区」，然后导出。',
        },
        {
          q: 'MP3 音质会保留吗？',
          a: '切成 WAV 时，音频是比特级一致的。导出为 MP3 会按你选的比特率重新编码一次，320 kbps 对几乎所有人都听不出差别。',
        },
        {
          q: '需要安装什么吗？',
          a: '不用。这个 MP3 剪辑是跑在浏览器标签页里的网页工具。没有要安装的东西，也不用建账号。',
        },
        {
          q: '我的文件会去哪儿？',
          a: '哪儿也不去。浏览器从你的磁盘读取文件，在内存里剪切。不上传，没有云端副本，也不会留下来。超过 300 MB 的文件会被拒绝。',
        },
        {
          q: '手机上能用吗？',
          a: '能。用手指在波形上拖选。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
        {
          q: '可以把 YouTube 上的歌切下来吗？',
          a: '不能。这个页面只处理你从这台设备选的文件，不接受链接。把流媒体平台的音频切存下来通常违反它们的服务条款，请只使用你拥有或获授权的歌曲。',
        },
      ],
      dropHint: '拖入 MP3 或视频，或点击浏览',
      exportLabel: '剪切并下载',
      screenshotsAlt: [
        'MP3 剪辑 拖放区：拖入文件或点击浏览，不会上传',
        'MP3 剪辑 工作区，文件已载入',
        'MP3 剪辑 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '留下还是删掉：剪切 MP3 的两种出口',
          paragraphs: [
            '在波形上拖出一段。时间会跟着拖动更新；指针不够准，就直接输入起点和终点。',
            '两个模式做的是相反的事。',
          ],
          bullets: [
            '保留选区：保存下来的只有你标出的这一段。副歌、drop，或者长录音里你想要的那一个回答。',
            '删除选区：保存下来的是这一段以外的全部。用它可以去掉开头 30 秒、一段前奏，或者一段广告口播。',
          ],
        },
        {
          heading: '切一首 MP3，或者裁一段录音',
          paragraphs: [
            '这一页从一首歌里切出一段。选择器也接受 MP4、WebM 和 MOV 视频，切的是里面的音轨。结果是新的 MP3 或 16 位 WAV。',
            '[音频剪辑](/audio-trimmer) 是同一个编辑器，文案照着播客和语音备忘写。切 MP3 用这一页；文件不是歌，就用剪辑页。',
          ],
        },
        {
          heading: '剪切会对声音做什么',
          paragraphs: [
            'WAV 是你保留的采样的 16 位 PCM。MP3 把这一段编码一次，这一页默认 192 kbps。',
            '文件先解码，取出这一段，再重新写出去。之后还要编辑，就导出 WAV。片段需要一个更柔和的开头或结尾时，用两个淡化滑块把切口磨一下。',
          ],
        },
        {
          heading: '这一页不做的事',
          paragraphs: [
            '它只切一个文件。它不会给播放列表做交叉淡化，也不会把几条音轨叠在一起。',
          ],
          bullets: [
            '把几首歌接成一个文件，用 [音频合并](/audio-joiner)。',
            '剪一段最长 40 秒、下载成铃声，用 [手机铃声制作](/ringtone-maker)。这一页不会把铃声装进手机。',
            '标题、歌手和封面，等切完再用 [MP3 标签编辑](/mp3-tag-editor)。',
          ],
        },
      ],
    },
    'mp3-editor': {
      cardLine: '一个标签页搞定快速剪辑：剪切、淡入淡出、倒放、变速、标准化。',
      name: 'MP3 编辑器',
      shortName: 'MP3 编辑器',
      title: 'MP3 编辑器 — 剪切、淡化、变速',
      description:
        '在一个页面里剪切、淡化、变速。原文件不动，导出时才写成新文件。变速会连音高一起变。',
      h1: 'MP3 编辑器 — 剪切、淡化和变速',
      heroAlt: '剪切、淡化、倒放，或改变 MP3 的速度',
      subtitle: '剪切、淡入淡出、倒放和变速，都在一个浏览器标签页里。',
      intro:
        '一个用来快速改一下的音频编辑器：切掉某几段，加上淡入和淡出，加大或降低音量，把音轨加快或放慢，以及倒放。导出时，这些编辑都在你的设备上生效。磁盘上的原文件始终不会被改动。',
      usesHeading: 'MP3 编辑器的常见使用场景',
      uses: [
        '剪段加淡化：裁完给新边缘加淡入淡出，切口不咔一声。',
        '段落变速：加快或倒放其中一段，中间不用先导出再换工具。',
        '音量修匀：忽大忽小的录音调平再导出。',
        '反转彩蛋：把其中一段倒放做效果。',
        '一次多改：裁、淡化、变速、音量在一个标签页完成。',
        '快速出片：小改动不值得开 DAW，这里全办了。',
      ],
      why: [
        {
          icon: 'file',
          title: '多步编辑一个标签页',
          text: '裁剪、淡化、变速、倒放、音量都在同一页完成，中间不用导出换工具。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '所有编辑在浏览器本地完成，不上传。',
        },
      ],
      howTo: [
        {
          name: '打开文件',
          text: '拖入文件，或点击浏览。浏览器能解码才会打开，解码就在这个标签页里完成。',
        },
        {
          name: '编辑',
          text: '选一段保留或删除，再打开「调整」：两端淡入淡出 0–5 秒，音量 10%–200%，速度 0.50×–2.00×，或倒放。音高跟着速度变。',
        },
        {
          name: '导出结果',
          text: '存成 MP3，64、96、128、192、320 kbps 任选，或 16 位 WAV。这一页默认 320 kbps。MP3 只编码前两个声道。',
        },
      ],
      faqs: [
        {
          q: '这个 MP3 编辑器能做什么？',
          a: '保留或删除一个选区。两端淡入淡出 0–5 秒。音量 10%–200%。速度 0.50×–2.00×，音高跟着变。混响 0%–100%。倒放是一个开关。峰值标准化是把增益提到 0.98，最多放大 4 倍，会盖过音量滑杆。超过 300 MB 的文件会被拒绝。一次处理多个文件（最多 8 个），用[多轨编辑器](/multi-track-audio-editor)。',
        },
        {
          q: '编辑会破坏原文件吗？',
          a: '不会。磁盘上的原文件保持原样。所有编辑先记成编辑器里的设置，只有在你导出时，才会渲染成一个新文件。',
        },
        {
          q: '变速会怎样影响音高？',
          a: '这一页上，2× 大约高一个八度，0.5× 大约低一个八度。想变速又保住音高，用[变速保调](/tempo-changer)，范围 0.75×–1.25×。只想改音高、长度不变，用[变调](/pitch-changer)。',
        },
        {
          q: '可以撤销修改吗？',
          a: '可以。按 Ctrl+Z（Mac 上是 Cmd+Z）一步步退回最近的编辑，或点「换一个文件」，重新载入文件最初的状态。',
        },
        {
          q: '拿来处理机密录音安全吗？',
          a: '文件就在这个标签页里解码。页面脚本加载完之后，解码和 WAV 导出不需要联网。MP3 导出需要编码器先加载过一次。关掉标签页，这次编辑就没了。',
        },
        {
          q: '手机上能用吗？',
          a: '能用，波形支持手指拖选。超过 300 MB 的文件会被拒绝。超过一小时的文件也能打开，只是会提示内存警告。',
        },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      screenshotsAlt: [
        'MP3 编辑器 拖放区：拖入文件或点击浏览，不会上传',
        'MP3 编辑器 工作区，文件已载入',
        'MP3 编辑器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '这个编辑器到底改什么',
          paragraphs: [
            '这一页是通用的 MP3 编辑器：切一段、给两端做淡化、改音量或速度、倒放，然后导出新的 MP3。你拖进来的文件不会被覆盖。',
            '这里的速度会带着音高一起变。长度不变、只改人声高低，用 [变调](/pitch-changer)。不编辑、只想把文件变小，用 [压缩音频](/compress-audio)。',
          ],
        },
        {
          heading: '什么时候该换专用页面',
          paragraphs: [
            '一次要剪几刀、再调音量，从编辑器开始最合适。只做一件事，有更短的路：',
          ],
          bullets: [
            '一首歌只留一段副歌：[MP3 剪辑](/mp3-cutter) 是同一个留或删的编辑器。',
            '播客或语音备忘：[音频剪辑](/audio-trimmer) 也是那个编辑器。',
            '只想改歌名、歌手或封面：[MP3 标签编辑](/mp3-tag-editor) 复制音频字节，只改标签。',
          ],
        },
        {
          heading: '导出和撤销',
          paragraphs: [
            '导出会写一个新的 MP3。菜单里的 WAV 是编辑后采样的 16 位 PCM。',
            'Ctrl+Z（Mac 上是 Cmd+Z）可以往回退几步。「换一个文件」会重新载入你拖进来的文件。关掉标签页，这次会话就没了，因为服务器上什么都没存。',
          ],
        },
      ],
    },
    'ringtone-maker': {
      cardLine: '把歌里最抓耳的 30 秒做成 iPhone 或安卓铃声。',
      name: '铃声制作',
      shortName: '铃声制作',
      title: '铃声裁剪与制作 — 从歌曲剪出 iPhone 铃声，40 秒',
      description:
        '从任意歌曲裁出一段做成铃声：选区自动封顶 40 秒，可加淡入淡出。iPhone 导出 M4R（需浏览器支持 AAC 编码），其他手机导出 MP3。免费，不上传，无水印。',
      h1: '铃声制作 — 把任意一首歌剪成 iPhone 铃声',
      heroAlt: '截取最长 40 秒，存成 M4R 或 MP3',
      howToIntro: '一首歌进去，一段铃声出来',
      subtitle: '挑出任意歌曲里最好的一段，存成铃声，一分钟内搞定。',
      intro:
        '选你喜欢的曲子里的钩子、高潮或前奏，做成铃声。制作器会把选区限制在经典的 40 秒铃声长度以内，想要的话可以加淡出，然后导出到手机：iPhone 用 M4R，其他手机用 MP3。',
      usesHeading: '铃声裁剪的常见使用场景',
      uses: [
        'iPhone 铃声：剪出钩子段导出 M4R，经 Finder 同步即用。',
        '安卓铃声：裁一段导出 MP3，在设置里直接选。',
        '副歌铃声：把副歌最抓耳的几秒做成开场。',
        '前奏铃声：用前奏做铃声，接电话前先听一段喜欢的旋律。',
        '淡出收尾：结尾加淡出，循环播放不突兀。',
        '短促铃声：压在 20 秒内更干脆，40 秒上限自动封顶。',
      ],
      why: [
        {
          icon: 'bell',
          title: '40 秒自动封顶',
          text: '选区拖超了会自动缩回 40 秒并提示——这是经典铃声长度，不用自己猜手机到底接受多长。',
        },
        {
          icon: 'convert',
          title: 'M4R 与 MP3 双出口',
          text: 'iPhone 选 M4R（浏览器支持 AAC 编码时出现此选项，没有则自动隐藏），Android 和其他手机选 MP3 192 kbps，导出直接可用。',
        },
      ],
      howTo: [
        {
          name: '加入一首歌',
          text: '把 MP3、M4A、WAV 或其他音频文件拖进虚线框，或点击浏览。它不会离开你的设备。',
        },
        {
          name: '裁出那一段',
          text: '在波形上拖动选区，最多 40 秒——拖超了会自动封顶并提示，这正是经典铃声的长度。',
        },
        {
          name: '加淡出，点「做成铃声」',
          text: '两端各可加 0–5 秒淡入淡出。iPhone 选 M4R，Android 和其他手机选 MP3 192 kbps。',
        },
        {
          name: '传到手机',
          text: 'iPhone 经 Finder（Windows 上是 iTunes）同步；Android 在「设置 → 声音 → 电话铃声」里直接选 MP3。',
        },
      ],
      faqs: [
        {
          q: '铃声应该多长？',
          a: '大多数手机响 20–40 秒就会进语音信箱，短一点也更干脆。制作器把选区封顶在 40 秒，这是经典的铃声长度。',
        },
        {
          q: '怎么在 iPhone 上用这个铃声？',
          a: '导出前先在格式菜单里选 M4R。Chrome、Edge 和 Safari 17 及以上会直接在你的设备上编码，下载的文件通过 Finder（Windows 上是 iTunes）同步到 iPhone。没有 AAC 编码的浏览器，比如 Firefox，改导出 MP3，再用 GarageBand 转换：导入这个文件，然后把它分享为铃声。',
        },
        {
          q: '怎么在 Android 上设置？',
          a: '把导出的 MP3 拷到手机上，然后打开「设置 → 声音 → 电话铃声」选这个文件，或用文件应用直接设为铃声。不用再转换。',
        },
        {
          q: '铃声循环会不会听起来很突兀？',
          a: '在页面上设置一段短淡出。循环回到开头时会自然一些，不会在一个音符中间突然切断。把这段重复 2 到 16 次写成更长的文件，用音频循环。这一页仍限制在 40 秒以内。',
        },
        {
          q: '有水印或次数限制吗？',
          a: '没有水印，不用注册，也没有每日上限。铃声在你自己的设备上渲染，直接从浏览器下载。',
        },
      ],
      dropHint: '拖入一首歌，或点击浏览',
      exportLabel: '做成铃声',
      screenshotsAlt: [
        '铃声制作 拖放区：拖入文件或点击浏览，不会上传',
        '铃声制作 工作区，文件已载入',
        '铃声制作 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '一首歌怎么变成铃声',
          paragraphs: [
            '拖动超过 40 秒，会自动缩到 40 秒。页面随后提示：选区已限制在 40 秒，这是经典铃声长度。',
            '两端各做 0 到 5 秒的淡化，步进 0.1 秒。设为 0，那一端就不变。',
          ],
        },
        {
          heading: '手机接受哪种文件',
          paragraphs: [
            '菜单默认 MP3 192 kbps。',
          ],
          bullets: [
            'M4R 是 AAC-LC，最多两个声道，192 kbps。只有这个浏览器能编码 AAC 时才会出现。',
            '否则菜单是 MP3 320、192 或 128 kbps，或者 16 位 WAV。',
            '菜单里没有 64 和 96 kbps。这一页只负责下载文件。',
          ],
          table: {
            headers: ['铃声类型', '合适长度', '原因'],
            rows: [
              ['来电铃声', '40 秒以内', '这一页把拖动限制在 40 秒，这是经典铃声长度'],
              ['短信和提示音', '几秒', '提示音要先让人听出是什么，不是把歌放一遍'],
              ['闹钟', '多长都行', '导出 MP3 或 16 位 WAV，这一页不设上限'],
              ['安卓铃声', '短一点，循环才干净', '这一页的 MP3 能用，手机会从头循环'],
            ],
          },
        },
        {
          heading: '这一页不做的事',
          paragraphs: [
            '它不上传歌曲，也不会把铃声装进手机。你得到的只是一个文件。',
            '要整首歌、不要 40 秒限制，用 [MP3 剪辑](/mp3-cutter)。',
          ],
        },
      ],
    },
    'audio-joiner': {
      cardLine: '把语音备忘、歌曲或播客各集拼接成一个完整文件。',
      name: '音频合并',
      shortName: '音频合并',
      title: '音频合并 — 在线拼接 MP3 音频文件，可交叉淡化',
      description:
        '把歌曲、章节或语音备忘按顺序拼接成一个音频文件，交叉淡化 0–5 秒可调，混用格式自动匹配采样率。合成 WAV 无损，MP3 最高 320 kbps。全程浏览器本地处理，不上传。',
      h1: '音频合并 — 把多个音频文件接成一条',
      heroAlt: '把歌曲和语音备忘按顺序接成一条',
      subtitle: '把歌曲和音频文件合成一条，顺序随意，几秒就好。',
      intro:
        '把多首歌曲、几集播客或几段录音合成一个文件。想加多少条就加多少条，可以调整顺序，也可以给开头和结尾加淡入淡出。合并在你的设备上完成，文件很多也能马上接上，并且保持私密。',
      usesHeading: '音频合并的常见使用场景',
      uses: [
        '播客合辑：把分集录音按顺序接成一个文件，发布更省事。',
        '音乐串烧：多首歌首尾相接，接缝处交叉淡化不爆音。',
        '有声书合并：把分章文件合成一条，给不支持播放列表的播放器。',
        '采访拼接：把多段采访素材接成一条，方便转写和整理。',
        '语音备忘：把零散备忘和一段音乐接在一起，顺序由你定。',
        '演示音频：把多段提示音拼成一条，一次性导入设备。',
      ],
      why: [
        {
          icon: 'layers',
          title: '格式混着接',
          text: 'MP3、WAV、M4A 可以混放：文件先解码并匹配到同一采样率再拼接。几十条都能接，上限是你设备的内存。',
        },
        {
          icon: 'waveform',
          title: '接缝不爆音',
          text: '交叉淡化 0–5 秒可调，让上一条的结尾和下一条的开头平滑重叠；设为 0 就是无缝硬接，中间不留空隙。',
        },
      ],
      howTo: [
        {
          name: '加入音轨',
          text: '把两个或更多音频文件拖进虚线框，或点击一次选多个。MP3、WAV、M4A 混着放也没关系，会自动匹配采样率。',
        },
        {
          name: '排好顺序',
          text: '用上下箭头调整每条音轨的位置，预览时长实时更新。改主意了就移除那一条。',
        },
        {
          name: '调交叉淡化',
          text: '滑块 0–5 秒：调大则相邻音轨平滑重叠，设为 0 就是无缝硬接。开头结尾还可加淡入淡出。',
        },
        {
          name: '合并并拿走文件',
          text: '点导出下载为 MP3（最高 320 kbps）或无损 WAV。没有固定条数上限，上限是你设备的内存。',
        },
      ],
      faqs: [
        {
          q: '不同格式的音频能合在一起吗？',
          a: '能。文件会先解码，并匹配到同一个采样率，所以可以一次把 MP3、WAV 和 M4A 接在一起。输出格式由你来选。',
        },
        {
          q: '可以合并多少个文件？',
          a: '没有固定上限，几十条都没问题。实际上限是你设备的内存，因为全部在本地处理。',
        },
        {
          q: '可以改歌曲的顺序吗？',
          a: '可以。每条音轨旁边有上下箭头，合并前用来调整顺序。预览时长会马上更新。',
        },
        {
          q: '音轨之间会交叉淡化吗？',
          a: '会。把交叉淡化滑块调大，让每条的结尾和后一条的开头重叠，合并时相邻音轨之间会平滑淡过去。设成 0 就是硬切，两段之间无缝接上，没有空隙。',
        },
        {
          q: '合并后的音质好吗？',
          a: '合成 WAV 是无损的，音频不会被再次压缩。导出 MP3 会按最高 320 kbps 重新编码一次，对几乎所有人都听不出差别。',
        },
        {
          q: '手机上能用吗？',
          a: '能。添加文件，再用上移、下移按钮调顺序。这两个按钮用手指就能点。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。好几段长文件会更占内存，叠得很长时电脑更稳。',
        },
      {
        q: '能在 Claude 或 Cursor 里合并本地文件吗？',
        a: '这个网页在浏览器里合并。交叉淡化滑块是 0 到 5 秒，步进 0.5。/mcp 用 ffmpeg 按顺序接 2 到 20 个本地文件，交叉淡化 0 到 5 秒，写出 44100 Hz 立体声。它不显示波形。聊天应用仍会看到路径。',
      }],
      dropHint: '拖入两个或更多音频文件，或点击浏览',
      screenshotsAlt: [
        '音频合并 拖放区：拖入文件或点击浏览，不会上传',
        '音频合并 工作区，文件已载入',
        '音频合并 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '合并，就是一个文件接在另一个后面',
          paragraphs: [
            '合并页把整段文件排成一列：一首歌，然后一条语音备忘，然后下一章。列表可以重新排序，也能设交叉淡化，让前一个的结尾和后一个的开头重叠。',
            '交叉淡化设为 0，就是硬切，中间没有空隙。不同格式会先解码，再写进同一个导出。它不是混音台：几条音轨不会同时播放。',
          ],
        },
        {
          heading: '这一页适合的活',
          paragraphs: [
            '结果应该是一个播放器直接能打开的文件，不用播放列表时，就用它：',
          ],
          bullets: [
            '一条语音备忘放在歌前面，顺序由你定。',
            '把分章录的内容接起来，给没有播放列表的播放器用。',
            '几段首尾相接，加一点交叉淡化，接缝就不会爆音。',
          ],
        },
        {
          heading: '什么时候需要分层',
          paragraphs: [
            '音乐上叠人声、每段单独调音量和声像、静音和独奏：那是多轨编辑器，最多八轨。合并页没办法在说话时把音乐压下去。',
            '文件数量没有固定上限。上限是设备内存，因为合并在浏览器里完成。什么都不会上传。',
          ],
        },
      ],
    },
    'wav-to-mp3': {
      cardLine: '把大体积 WAV 录音压成便于分享的 MP3，码率自选。',
      name: 'WAV 转 MP3',
      shortName: 'WAV 转 MP3',
      title: 'WAV 转 MP3 — 64–320 kbps 任选，批量打包 ZIP',
      description:
        '把 WAV 转成 MP3：比特率 64–320 kbps 五档任选，体积约为原来十分之一。浏览器本地转换不上传，多个 WAV 一次转换并打包 ZIP。免费，不用注册。',
      h1: 'WAV 转 MP3 — 在线免费转换',
      heroAlt: '把 WAV 文件转成 320 kbps 的 MP3',
      subtitle: '几秒把 WAV 转成 MP3，就在浏览器里，不会上传。',
      intro:
        '把体积很大的 WAV 录音转成小巧的 MP3，不用安装任何东西，也不用把音频发到服务器。拖入文件，选一个比特率：音乐用 320 kbps，人声用 128 kbps。转换在你自己的设备上完成，通常只要一两秒。',
      usesHeading: 'WAV 转 MP3 的常见使用场景',
      uses: [
        '录音瘦身：把录音棚或录音机的大文件缩小到能发出去。',
        '日常听转换：无损导出转成 192/320 kbps，路上听够了。',
        '邮件附件：128 kbps 把课堂录音压进 25 MB 邮件上限。',
        '批量归档：一整文件夹的 WAV 一次转换，打包成 ZIP。',
        '先转再剪：先转成 MP3，要片段再去[音频剪辑](/audio-trimmer)裁。',
        '语音备忘：人声用低码率就够，文件小到随手发。',
      ],
      why: [
        {
          icon: 'convert',
          title: '码率决定体积',
          text: 'MP3 约为 WAV 的十分之一：50 MB 的 WAV 在 192 kbps 下变成 4–5 MB。64–320 kbps 六档任选，每档在导出条里实时显示预计体积。',
        },
        {
          icon: 'layers',
          title: '批量一次转换',
          text: '一次拖入多个 WAV，共用同一组设置，逐个转换。单个直接下载，两个以上自动打包成 ZIP。',
        },
      ],
      howTo: [
        {
          name: '拖入 WAV',
          text: '把 .wav 文件拖进虚线框，或点击浏览。M4A、FLAC、OGG 也用同样方式转换。可以一次放多个文件，共用下一步选的设置。',
        },
        {
          name: '选一个比特率',
          text: '64–320 kbps 五档任选：要留着的音乐用 320，日常听用 192，语音用 128。选码率本质是选体积，导出条会实时显示预计大小。',
        },
        {
          name: '点「转为 MP3」',
          text: '编码器在你的浏览器里运行，转换通常只要一两秒。',
        },
        {
          name: '拿走文件',
          text: '一个文件单独下载，两个及以上打成一个 ZIP。WAV 的标签和封面不会带过去，之后可用[标签编辑器](/mp3-tag-editor)补上。',
        },
      ],
      faqs: [
        { q: '可以一次转换多个 WAV 吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: 'WAV 转 MP3 会损失音质吗？',
          a: 'MP3 是有损的，所以会丢掉一些信息。但在 320 kbps 下，盲听测试里几乎没人能把它和 WAV 区分开。如果你需要零损失，就留着 WAV。这个转换器是为了省空间，并且到哪儿都能放。',
        },
        {
          q: '该选哪个比特率？',
          a: '要留着的音乐用 320 kbps，日常听和分享用 192 kbps，语音备忘、播客和课堂录音用 128 kbps。语音需要的比特率比音乐低得多。',
        },
        {
          q: 'MP3 会小多少？',
          a: '大约是原来的十分之一：一个 50 MB 的 WAV，在 192 kbps 下大约变成 4–5 MB，在 320 kbps 下大约 11 MB。具体数字取决于时长和采样率。',
        },
        {
          q: 'WAV 的标签和封面会保留吗？',
          a: '目前不会。写出的 MP3 不带元数据，所以歌名、歌手和封面不会一起过去。之后可以用任意标签编辑器重新加上。',
        },
        {
          q: 'WAV 文件会上传到别处吗？',
          a: '不会。文件在你的浏览器里解码，由随本站一起提供的编码器转成 MP3，再存回你的磁盘。音频本身不会离开你的设备。',
        },
        {
          q: '手机上能用吗？',
          a: '能。选好文件，转换就留在这个标签页里。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      {
        q: '能在 Claude 或 Cursor 里转换本地 WAV 吗？',
        a: '这个网页在浏览器里转换，比特率是 128-320 kbps。/mcp 对你电脑上已有的文件调用 ffmpeg。MP3、M4A 和 OGG 可以是 64、96、128、192、256 或 320 kbps，默认 192。WAV 是 16-bit PCM。FLAC 无损。聊天应用仍会看到路径。',
      }],
      dropHint: '拖入一个或多个 WAV，或点击浏览',
      exportLabel: '转为 MP3',
      screenshotsAlt: [
        'WAV 转 MP3 拖放区：拖入文件或点击浏览，不会上传',
        'WAV 转 MP3 工作区，文件已载入',
        'WAV 转 MP3 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '选哪个比特率',
          paragraphs: [
            'MP3 会丢掉 WAV 的一部分，比特率决定留多少。',
          ],
          bullets: [
            '菜单是 64、96、128、192 和 320 kbps。',
            '这一页默认 320。',
            'MP3 把解码后的采样编码一次。标签不会复制。',
          ],
        },
        {
          heading: 'MP3 能小多少',
          paragraphs: [
            'WAV 存下每一个采样。MP3 存的是你能听到的内容的压缩版。一个 50 MB 的 WAV，192 kbps 大约 4–5 MB，320 kbps 大约 11 MB。具体大小取决于时长和采样率。',
            '还需要原文件，就把 WAV 留着。这一页是为了让你分享的那份能在手机、车里和老音箱上播放，文件也小到发得出去。',
          ],
        },
        {
          heading: '标题、歌手和封面不会带过去',
          paragraphs: [
            '写出的 MP3 不带 WAV 的元数据。歌名、歌手和封面都不会过来。播放器会显示空白名字的话，导出后用 MP3 标签编辑补上。',
            'M4A、FLAC 和 OGG 文件拖进来也按同样方式转换。如果你手上是 FLAC，它有单独的页面。这一页是给 WAV 用的。',
          ],
        },
        {
          heading: '先转换，再裁剪',
          paragraphs: [
            '这一页转换整个文件，不会从 WAV 里切出一段。',
          ],
          bullets: [
            '一段长录音只要一分钟：先转换，再打开音频剪辑。',
            '文件已经是 MP3，只想变小：用压缩音频，不是这一页。',
            '转换完还要再编辑：选 320 kbps，或者留着 WAV 直接编辑 WAV。',
          ],
        },
      ],
    },
    'flac-to-mp3': {
      cardLine: '把无损 FLAC 转成 MP3，让不支持 FLAC 的设备和应用也能播。',
      name: 'FLAC 转 MP3',
      shortName: 'FLAC 转 MP3',
      title: 'FLAC 转 MP3 — 无损音乐库转 MP3，64–320 kbps',
      description:
        '把无损 FLAC 转成 MP3，让车载音响和老设备也能放。64–320 kbps 任选，整张专辑批量转换打包 ZIP。浏览器本地转换，不上传。',
      h1: 'FLAC 转 MP3 — 把 FLAC 转成 MP3',
      heroAlt: '把 FLAC 文件转成 320 kbps 的 MP3',
      subtitle: '几秒把 FLAC 转成 MP3，就在浏览器里，不会上传。',
      intro:
        'FLAC 音质完美，体积也用一半硬盘来证明这一点。把无损音乐库变成紧凑的 MP3，让车载音响、蓝牙音箱和老设备都能放——拖入文件，选一个比特率，转换就在你自己的设备上完成。一首 25 MB 的 FLAC 曲目，320 kbps 下几秒就变成 12 MB 的 MP3。',
      usesHeading: 'FLAC 转 MP3 的常见使用场景',
      uses: [
        '车载播放：让无损音乐库能在车机和老音响上播放。',
        '出行前瘦身：长途没 Wi-Fi，先把专辑缩小存进手机。',
        '共享文件夹：发共享目录前把整张专辑转小。',
        '归档双份：FLAC 留档，MP3 日常听。',
        '下载兼容：把网购的无损专辑转成到处能放的 MP3。',
        '批量整理：整张专辑一次拖入，逐轨转换打包 ZIP。',
      ],
      why: [
        {
          icon: 'convert',
          title: '无损源转码',
          text: 'FLAC 先解码成原始采样，再按所选码率编码一次 MP3——只压这一次。',
        },
        {
          icon: 'layers',
          title: '整张专辑批量',
          text: '一次拖入整张专辑，逐轨转换后打包 ZIP，顺序保持。',
        },
      ],
      howTo: [
        { name: '拖入 FLAC', text: '.flac 拖进虚线框或点击浏览，可多选。' },
        { name: '选一个比特率', text: '留档音质用 320，日常听 192，小体积用 128 以下。' },
        { name: '点「转为 MP3」', text: '逐轨解码、编码一次，状态行显示进度。' },
        { name: '拿走文件', text: '单轨直接下载，多轨打包 ZIP。' },
      ],
      faqs: [
        { q: '可以一次转换多个 FLAC 吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: 'FLAC 转 MP3 会损失音质吗？',
          a: 'MP3 是有损的，会丢掉一些信息——但在 320 kbps 下，盲听测试里几乎没人能把它和 FLAC 区分开。把 FLAC 留作存档，MP3 当作随身用的那份。',
        },
        {
          q: '该选哪个比特率？',
          a: '要留着的音乐用 320 kbps，日常听和分享用 192 kbps，有声书、播客和课程录音用 128 kbps。语音需要的比特率比音乐低得多。',
        },
        {
          q: 'MP3 会小多少？',
          a: '一首五分钟的歌，FLAC 大约 25 MB，320 kbps 下约 12 MB，192 kbps 约 7 MB，128 kbps 约 5 MB。具体数字取决于时长和采样率。',
        },
        {
          q: 'FLAC 的标签和封面会保留吗？',
          a: '目前不会。写出的 MP3 不带元数据，歌名、歌手和封面不会一起过去。之后可以用任意标签编辑器重新加上。',
        },
        {
          q: 'FLAC 文件会上传到别处吗？',
          a: '不会。文件在你的浏览器里解码，由随本站一起提供的编码器转成 MP3。音频本身不会离开你的设备。',
        },
        {
          q: '手机上能用吗？',
          a: '能。选好文件，转换就留在这个标签页里。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入一个或多个 FLAC，或点击浏览',
      exportLabel: '转为 MP3',
      screenshotsAlt: [
        'FLAC 转 MP3 拖放区：拖入文件或点击浏览，不会上传',
        'FLAC 转 MP3 工作区，文件已载入',
        'FLAC 转 MP3 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '为什么把 FLAC 转成 MP3',
          paragraphs: [
            'FLAC 是无损的，文件大。MP3 才是大多数手机、汽车和老播放器真正能打开的格式。一个 25 MB 的 FLAC，320 kbps 后常常接近 12 MB，192 或 128 更小。',
            '转换会解码 FLAC，再编码成新的 MP3。还需要那个文件，就把 FLAC 留着。',
          ],
        },
        {
          heading: '比特率和丢掉的东西',
          paragraphs: [
            '格式菜单只有 MP3，三个比特率：',
          ],
          bullets: [
            '想让听感尽量接近 FLAC，用 320 kbps。',
            '人声，或者要流式播放的小文件，用 192 kbps。',
            '大小比高频更重要，用 128 kbps。',
          ],
        },
        {
          heading: '标签、封面和接下来的编辑',
          paragraphs: [
            '标题、歌手和封面不会复制。写出的 MP3 没有元数据。导出后用 MP3 标签编辑补回去。',
            '想让编辑落在更小的文件上，就在转换后裁、切，别在转换前做。源文件是 WAV 而不是 FLAC 时，隔壁页面是 WAV 转 MP3。',
          ],
        },
      ],
    },
    'mp3-to-wav': {
      cardLine: '把 MP3 解压成 WAV，方便剪辑、转写或精细听审。',
      name: 'MP3 转 WAV',
      shortName: 'MP3 转 WAV',
      title: 'MP3 转 WAV — 解码成无损 WAV，不再压一次',
      description:
        '把 MP3 解码成无损 WAV：给只收 WAV 的编辑器、DAW 或投稿平台。转换在浏览器本地完成，批量文件打包 ZIP，不上传。',
      h1: 'MP3 转 WAV — 在线免费转换，无损解码',
      heroAlt: '把 MP3 解码成未压缩的 WAV',
      subtitle: '几秒把 MP3 解码成干净的 PCM 音频，就在浏览器里，不会上传。',
      intro:
        '把 MP3 转成 WAV，并不能找回压缩时丢掉的信息——任何工具都做不到。它能给你的是解码后的干净 16 位 PCM，不再有新的损失：这是音频编辑器、采样器和各种只要 WAV 的应用想要的输入，也是文件还要再加工时最稳妥的起点。解码在你的设备上完成，通常只要一秒。',
      usesHeading: 'MP3 转 WAV 的常见使用场景',
      uses: [
        '软件适配：把 MP3 交给只收 WAV 的编辑器、DAW 或投稿平台。',
        '避免代损：用 WAV 做中间剪辑，最后再压一次 MP3。',
        '音频修复：解成无损底子再去[降噪](/noise-remover)或[均衡](/equalizer)，少一层损失。',
        '转写预处理：一些转写工具更认 WAV，先解码再交。',
        '采样素材：把 MP3 解成 WAV 给采样器或鼓机。',
        '存档副本：留一份未压缩版本，出版质审用。',
      ],
      why: [
        {
          icon: 'convert',
          title: '解码，不再压缩',
          text: 'WAV 保留解码后的全部采样，这一步不丢任何信息，剪辑和修音都在无损底子上做。',
        },
        {
          icon: 'layers',
          title: '批量打包',
          text: '一次拖入多个 MP3，逐个解码，打包成一个 ZIP 下载。',
        },
      ],
      howTo: [
        { name: '拖入 MP3', text: '把 MP3 拖进虚线框，或点击浏览。M4A、OGG 等也能解。多个文件共用同一组设置。' },
        { name: '保持选择 WAV', text: '格式默认 WAV——解码成无损，是这一页的全部意义。' },
        { name: '点「转为 WAV」', text: '编码器在浏览器里运行，转换通常一两秒完成。' },
        { name: '拿走文件', text: '单个直接下载，多个打包 ZIP，文件名带 -converted 后缀。' },
      ],
      faqs: [
        { q: '可以一次把多个 MP3 转成 WAV 吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: 'MP3 转 WAV 能提升音质吗？',
          a: '不能——有工具这么宣传的话，别信。编码器丢掉的数据已经不在了。WAV 给你的就是这段 MP3 解码后的全部内容，也正因为如此，它才适合继续加工：不会再叠加一次有损压缩。',
        },
        {
          q: '那为什么还要转成 WAV？',
          a: '为了剪辑和存档。音频编辑器、采样器和刻录工具默认期待 WAV，无损母版也能避免每处理一次就多一层压缩痕迹。稳妥的流程是：解码成 WAV，编辑，最后一次性导出 MP3。',
        },
        {
          q: '哪种比特率的 MP3 都可以吗？',
          a: '都可以——只要文件有效，64 到 320 kbps 的解码都是精确的。WAV 会如实包含这段 MP3 实际有的内容，采样率保持原样。',
        },
        {
          q: 'WAV 会有多大？',
          a: '大约是 MP3 的十倍。44.1 kHz 立体声的三分钟歌曲，转成 16 位 PCM 大约 30 MB——这是未压缩音频本来的体积，不是转换器效率问题。',
        },
        {
          q: 'MP3 文件会上传到别处吗？',
          a: '不会。文件在你的浏览器里解码，在本地写成 WAV。什么都不会离开你的设备。',
        },
        {
          q: '手机上能用吗？',
          a: '能。选好文件，转换就留在这个标签页里。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入一个或多个 MP3，或点击浏览',
      exportLabel: '转为 WAV',
      screenshotsAlt: [
        'MP3 转 WAV 拖放区：拖入文件或点击浏览，不会上传',
        'MP3 转 WAV 工作区，文件已载入',
        'MP3 转 WAV 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '解码成 WAV，不再压一次',
          paragraphs: [
            '这一页把 MP3 解码成 16 位 PCM WAV。不接受 MP3 的编辑器和 DAW 可以打开这个 WAV。最初编码时丢掉的高频不会回来。',
            '下一步不能再多一代 MP3 时，就用它：在 WAV 上切、淡化、混音，最后只编码一次。',
          ],
        },
        {
          heading: '什么时候值得转',
          paragraphs: [
            '格式菜单只导出 WAV。几种具体情况适合这么做：',
          ],
          bullets: [
            '只接受 WAV 的程序或硬件录音机。',
            '之后只编码一次，避免 MP3 叠 MP3。',
            '对方要的是 PCM，不是更小的 MP3。',
          ],
        },
        {
          heading: '大小和反方向',
          paragraphs: [
            'WAV 比 MP3 大得多。这份大小是未压缩的 PCM，不是新细节。',
            '反方向，WAV 转 MP3，是另一个页面，要选比特率。不想转 WAV、只想把 MP3 变小，是音频压缩页。',
          ],
        },
      ],
    },
    'compress-audio': {
      cardLine: '把大音频文件压到目标大小或码率，听感依然清晰。',
      name: '音频压缩',
      shortName: '音频压缩',
      title: '音频压缩 — 按目标体积压缩音频，专治发不出去',
      description:
        '文件太大发不出去：定一个目标体积，压缩器按时长反推能用的码率，把音频压到那个大小。微信、邮箱、上传表单都放得下。浏览器本地处理，批量 ZIP。',
      h1: '音频压缩 — 把发不出去的文件变小',
      heroAlt: '用更低的码率重新编码很大的 WAV 或 MP3',
      howToIntro: '压缩器过一遍真实文件',
      subtitle: '降低比特率，文件照样能播——在浏览器里把音频最多缩小 90%。',
      intro:
        '发不出去的文件，大就大在比特率上，用更低的比特率重新编码就行：320 kbps 的 MP3 变成 128 kbps，体积只有原来的四成左右；笨重的 WAV 转成 MP3，直接缩到十分之一。选好目标大小，试听一下，再导出——编码在你的设备上完成，多长的录音几秒都能跑完。',
      usesHeading: '音频压缩的常见使用场景',
      uses: [
        '微信/QQ：文件超限发不出，按上限压到能发。',
        '邮件附件：讲座录音压进 25 MB 邮箱上限。',
        '上传表单：报名或投稿表单有体积上限，压到达标。',
        '语音瘦身：长会议录音压成小文件存档。',
        '设备空间：手机空间紧张，把大音频压小再留。',
        '老设备兼容：老播放器吃不下大文件，压缩后顺畅播。',
      ],
      why: [
        {
          icon: 'convert',
          title: '按目标体积反推码率',
          text: '定一个目标大小，比如 10 MB，压缩器按时长反推能用的码率，一步压到位。',
        },
        {
          icon: 'layers',
          title: '批量压缩',
          text: '多个文件共用同一目标体积，逐个压缩后打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入文件', text: '音频文件拖进虚线框，可多选。' },
        { name: '选目标大小', text: '定一个目标体积，比如 10 MB，压缩器按时长反推码率。' },
        { name: '试听', text: '压完先听一遍，确认清晰度可以接受。' },
        { name: '导出', text: '满意就导出下载；多个文件共用设置，打包 ZIP。' },
      ],
      faqs: [
        { q: '微信里发不出去的文件，能一次多压几个吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: '这里的音频压缩是怎么工作的？',
          a: '文件先解码，再按你选的比特率重新编码成 MP3。体积和比特率成正比：立体声每分钟大约 2.4 MB（320 kbps）、1 MB（128 kbps）、0.5 MB（64 kbps）。',
        },
        {
          q: '哪个比特率能保住音质？',
          a: '在乎的音乐用 192 或 320 kbps；日常听 128 kbps 就够——盲听里大多数人也分不出它和 320 的差别。人声和播客一路降到 64–96 kbps 依然清楚。',
        },
        {
          q: '压缩会让音质变差吗？',
          a: '有一种情况会：把已经压缩过的 MP3 再用低得多的比特率压一次，等于叠了两代有损压缩。用 WAV 或 FLAC 当源文件更干净——只要留着原件，随时可以换个比特率再试。',
        },
        {
          q: '最小能压到多小？',
          a: '64 kbps 是实用的下限，每分钟约 0.5 MB。人声依然清楚；音乐开始发闷、发沙。再低就该用 Opus 这类专门编码器了，MP3 不擅长。',
        },
        {
          q: '文件会上传到别处吗？',
          a: '不会。解码和编码都在你的浏览器标签页里完成——页面加载完之后断网，压缩照样能用。',
        },
        {
          q: '这能把忽大忽小的音量压平吗？',
          a: '不能。这一页只是用更低的比特率重新编码，让文件变小。要把响的峰值压下去、把轻的字抬上来，用电平压缩。那边导出时的比特率仍由你自己选。',
        },
        {
          q: '手机上能用吗？',
          a: '能。选好文件，转换就留在这个标签页里。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入一个或多个音频文件，或点击浏览',
      exportLabel: '压缩',
      screenshotsAlt: [
        '音频压缩 拖放区：拖入文件或点击浏览，不会上传',
        '音频压缩 工作区，文件已载入',
        '音频压缩 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '这个压缩器缩的是文件，不是动态',
          paragraphs: [
            '压缩音频用更低的 MP3 比特率重新编码。320 kbps 的文件转到 128 kbps，大小约为原来四成。安静段和响亮段的比例不变。',
            '把响亮人声和轻声人声拉近，是电平压缩器，另一个页面。它不会把文件变小。',
          ],
        },
        {
          heading: '选哪个比特率',
          paragraphs: [
            '菜单从 320 到 64 kbps。按文件用途来选：',
          ],
          bullets: [
            '还要认真听的音乐，用 192 或 320 kbps。',
            '人声、语音备忘，或者要发出去的副本，用 128 kbps。',
            '只有目的地很小、人声够听就行，才用 64 或 96 kbps。',
          ],
          table: {
            headers: ['文件去向', '上限', '建议设置'],
            rows: [
              ['邮件附件', '25 MB（个人账号）', '128 kbps，10 分钟的备忘录大约 10 MB'],
              ['Telegram', '2 GB，Premium 4 GB', '任何比特率都放得下；想省移动流量就选 128 kbps'],
              ['你自己的目标', '你来定', '128 kbps 下一分钟约 1 MB，64 kbps 约 0.5 MB'],
            ],
          },
          outro: [
            '上限会变：这两个数字是 2026 年 10 月查的。聊天应用给音频媒体的上限通常比文档更紧，而且会不通知就调整；上面按分钟算的账两种情况下都成立。',
          ],
        },
        {
          heading: '再编码一次要付什么',
          paragraphs: [
            '每过一遍都会再丢一点。文件已经是 128 kbps，再编码成 128 没有意义；编得更低只会更闷。',
            '标签和封面不属于这次压缩。MP3 已经够小，只想要新标题或封面，用 MP3 标签编辑，它原样复制音频字节。',
          ],
        },
      ],
    },
    'bitrate-converter': {
      cardLine: '把任意音频重编码成 64、96、128、192 或 320 kbps 的 MP3。',
      name: '比特率转换',
      shortName: '比特率',
      title: 'MP3 比特率转换 — 64–320 kbps 重编码一次',
      description:
        '把已有 MP3 转成 64–320 kbps 之间的任意档位：投稿要求 192、播客要求 128，按平台的码率交稿。浏览器本地重编码一次，批量 ZIP。',
      h1: '比特率转换：把 MP3 设成 64–320 kbps',
      heroAlt: '五根码率柱，中间一根标着 192 kbps',
      subtitle: '把 MP3 设成 64、96、128、192 或 320 kbps。数字调高补不回细节。',
      intro:
        '选好 MP3 比特率，在这个标签页里重新编码。菜单从 192 kbps 开始。立体声一分钟大约是 320 kbps 的 2.4 MB、192 的 1.4 MB、128 的 1 MB、96 的 0.7 MB、64 的 0.5 MB。源文件已经是有损的，把数字调高补不回丢掉的细节。解码和编码都留在浏览器里。',
      usesHeading: 'MP3 比特率转换的常见使用场景',
      uses: [
        '投稿达标：平台要求 192 或 128 kbps，按规格交稿。',
        '批量统一：码率混着的一堆 MP3，统一转成同一档。',
        '语音瘦身：说话内容降到 96 或 64 kbps，体积再砍半。',
        '兼容修复：某些设备只吃 128 kbps，转一版给它。',
        '升档注意：低码率升高档不会变好听，升档只为兼容。',
        '小样试听：先出 96 kbps 小样，确认再出高码率。',
      ],
      why: [
        {
          icon: 'convert',
          title: '重编码一次',
          text: 'MP3 到 MP3 也要解码再编码——本页只压这一次，之后不再反复转码。',
        },
        {
          icon: 'layers',
          title: '批量统一码率',
          text: '一批文件共用同一档位，逐个转换后打包 ZIP。',
        },
      ],
      howTo: [
        { name: '加入文件', text: '已有 MP3 拖进虚线框，可多选；WAV 转档也可以。' },
        { name: '选择比特率', text: '64–320 kbps 五档任选，按目标平台的要求定。' },
        { name: '点「转换」', text: '解码后按新码率重编码一次，通常几秒。' },
        { name: '拿走文件', text: '单个直接下载，多个打包 ZIP。' },
      ],
      faqs: [
        { q: '可以一次改多个文件的码率吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: '把 128 kbps 的 MP3 存成 320 kbps，会更好听吗？',
          a: '不会。编码器只能留下源文件还在的内容。128 kbps 的 MP3 再存成 320 kbps，只是同一段录音变成了更大的文件。要细节，从 WAV 或原始录音开始。',
        },
        {
          q: '该选哪个比特率？',
          a: '还要仔细听的音乐用 320 kbps。菜单打开时是 192 kbps。语音或要发出去的文件用 128。只有目标很小、语音够用时才用 96 或 64。立体声一分钟大约是 2.4 MB、1.4 MB、1 MB、0.7 MB 和 0.5 MB。',
        },
        {
          q: '这和音频压缩有什么不同？',
          a: '同一套编码器，做的事不一样。这一页用来设定比特率，从 192 kbps 开始。音频压缩用来把文件变小，从 128 kbps 开始。WAV 转 MP3 只收 WAV，从 320 kbps 开始。',
        },
        {
          q: '这里能转成 WAV 或 Opus 吗？',
          a: '不能。这一页只写出 320、192、128、96 或 64 kbps 的 MP3。WAV 没有比特率。要 WAV，用 MP3 转 WAV。菜单里没有 Opus 和 AAC。',
        },
        {
          q: '文件会上传吗？',
          a: '不会。浏览器在这个标签页里解码，再用和音频压缩同一套本地编码器写成 MP3。页面加载完之后，断网也能转。',
        },
        {
          q: '手机上能用吗？',
          a: '能。选好文件，转换就留在这个标签页里。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入一个或多个音频文件，或点击浏览',
      exportLabel: '转换',
      screenshotsAlt: [
        '比特率转换 拖放区：拖入文件或点击浏览，不会上传',
        '比特率转换 工作区，文件已载入',
        '比特率转换 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '五档各有多重',
          paragraphs: [
            '菜单是 320、192、128、96 和 64 kbps，固定比特率。一分钟立体声依次约为 2.4 MB、1.4 MB、1 MB、0.7 MB 和 0.5 MB。页面默认 192 kbps。',
            'WAV 本身没有比特率，所以你选的是第一次有损编码。MP3、M4A、OGG 或 Opus 文件已经丢过东西，这一遍会再丢一点。',
          ],
        },
        {
          heading: '哪一档适合你的活',
          paragraphs: [
            '按文件接下来要去哪选，不是按菜单里最大的数字选。',
          ],
          bullets: [
            '源文件是 WAV、还想尽量接近原声，用 320 kbps。',
            '普通音乐用 192 kbps，这也是菜单的默认值。',
            '人声、备忘录，或者必须很小的副本，用 128、96 或 64 kbps。',
          ],
        },
        {
          heading: '数字更高不等于修复',
          paragraphs: [
            '把 128 kbps 的 MP3 编码成 320 kbps，只是把同样的缺口装进更大的文件。想找回丢掉的高频，只能换一个还留着它的源文件。',
            '它和压缩音频是同一个编码器。目标是把文件变小、不在乎从五档里的哪一档开始，用那一页。源文件是 WAV、想直接要 320 kbps，用 WAV 转 MP3。',
          ],
        },
      ],
    },
    'reverse-audio': {
      cardLine: '把音频倒着放：做特效、检查混音，或者纯粹好玩。',
      name: '音频倒放',
      shortName: '倒放',
      title: '音频倒放 — 在线把音频倒着放，一键反转',
      description:
        '把任意音频倒着放：整段或选区一键反转，浏览器本地处理。做反向涌起、藏倒放彩蛋，或听混音的另一面。免费，不上传。',
      h1: '音频倒放 — 把一首歌倒着放',
      heroAlt: '把一段语音备忘从结尾倒回到开头',
      subtitle: '把任意歌曲或录音倒着放。点一下，就在浏览器里。',
      intro:
        '把任意音轨翻过来，从结尾放到开头：在歌里找藏起来的话、为混音做倒放镲片，或者就听听自己的声音倒过来是什么样。整个文件在你的设备上倒放，只有导出时才会写出去。',
      usesHeading: '音频倒放的常见使用场景',
      uses: [
        '反向涌起：用镲片或人声起音做倒吸式转场。',
        '彩蛋藏话：把一句倒录的话正着听藏进去。',
        '混音自检：倒着听混音，问题会暴露得更明显。',
        '采样素材：倒放的鼓和人声是电子乐常用素材。',
        '视频配乐：倒放画面配倒放声音，效果对齐。',
        '学习对照：语言或乐器片段倒放练习。',
      ],
      why: [
        {
          icon: 'reverse',
          title: '一键反转',
          text: '整段或选区一键倒放：采样顺序完全颠倒，长度不变。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '反转在浏览器本地完成，音频不上传。',
        },
      ],
      howTo: [
        { name: '加入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '倒放', text: '点「倒放并下载」，采样顺序完全颠倒。' },
        { name: '保存结果', text: '导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        {
          q: '为什么要把一首歌倒着放？',
          a: '音乐人用倒放做效果：倒放镲片的渐强、倒放的吉他独奏、氛围铺底。这也是检查音轨里有没有倒放藏词（backmasking）的经典办法。而且说实话，听自己的声音倒过来，本身就挺好玩。',
        },
        {
          q: '倒放会改变音质吗？',
          a: '不会。导出 WAV 只是把采样重新排了序，音频和原来比特级相同，只是方向反了。导出 MP3 会按你选的比特率重新编码一次。',
        },
        {
          q: '可以只倒放一首歌的一部分吗？',
          a: '可以。在波形上选中你要的部分，把模式设为「保留选区」，再点倒放。导出的只有这一段，而且是倒着的。',
        },
        {
          q: '手机上能用吗？',
          a: '能。倒放按钮和波形都支持触摸，导出的文件在 iOS 和 Android 上会直接下载。',
        },
        {
          q: '倒放真的免费，而且私密吗？',
          a: '是的。不用注册，没有水印，也没有次数限制。倒放在你的浏览器里用 Web Audio API 完成，文件不会上传到任何地方。',
        },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '倒放并下载',
      screenshotsAlt: [
        '音频倒放 拖放区：拖入文件或点击浏览，不会上传',
        '音频倒放 工作区，文件已载入',
        '音频倒放 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '倒放是把采样反过来播',
          paragraphs: [
            '这一页把选中的音频翻过来，结尾先响。可以倒放整个文件，也可以只倒放选区。倒放本身不改音量，也不改音高。',
            '导出仍然要编码。WAV 保留倒放后的 PCM，不多一代 MP3。MP3 会写一个新的倒放文件。',
          ],
        },
        {
          heading: '大家拿它做什么',
          paragraphs: [
            '它就是直截了当的倒放，不是隐藏信息解码器，也不是分轨工具：',
          ],
          bullets: [
            '把倒放的镲片或打击声当作引子。',
            '用耳朵检查一句话，只选那一小段，然后撤销。',
            '整个文件翻过来，做一轮声音设计。',
          ],
        },
        {
          heading: '什么保持不变',
          paragraphs: [
            '撤销可以往回退。重置会重新载入你拖进来的文件。磁盘上的原文件不会被覆盖。',
            '目标是更慢的歌或更低的人声，倒放不是对的控件。变速会带着音高一起变。变调会保持长度。',
          ],
        },
      ],
    },
    'change-audio-speed': {
      cardLine: '把课程加速到 2×，或把吉他 riff 放慢来学——音高保持不变。',
      name: '在线音频变速',
      shortName: '变速',
      title: '音频变速 — 0.5× 到 2×，快听或慢听',
      description:
        '加快或放慢音频：0.5×–2× 自由调。快听播客讲座省一半时间，慢听扒细节。音高随速度变化（要保调用[变速保调](/tempo-changer)）。浏览器本地处理，不上传。',
      h1: '在线音频变速 — 把音频加快或放慢',
      heroAlt: '把歌放慢来练，或把课程加快来听',
      subtitle: '把任意音频从 0.5× 加快或放慢到 2×，就在浏览器里。',
      intro:
        '把 40 分钟的讲座收成快放的 20 分钟，把吉他独奏放慢到一半用来练习，或把一首歌塞进更短的视频时长。拖动速度滑块，马上听到变化，再导出。音频在你的设备上重采样，不会上传。变速会连带变调。',
      usesHeading: '音频变速的常见使用场景',
      uses: [
        '快听长内容：播客讲座 1.25×–1.5×，省一半时间。',
        '慢听细节：说话或独奏放到一半速度，听清每个音。',
        '试听适配：先快进确认内容，再定速细听。',
        '素材变速：采样快放慢放找感觉。',
        '语言学习：外语音频放慢跟读。',
        '特效语音：快放做出卡通感，慢放做出低沉感。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '0.5×–2× 连续可调',
          text: '滑杆连续变速，速度变了音高跟着变——要保住调性用[变速保调](/tempo-changer)。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '变速在浏览器本地完成，音频不上传。',
        },
      ],
      howTo: [
        { name: '拖入文件', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设置速度', text: '滑杆 0.5×–2×，预览即时生效；音高随速度变化。' },
        { name: '试听并导出', text: '试听确认节奏，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        {
          q: '变速会变调吗？',
          a: '在这一页，速度和音高一起变：2× 大约高一个八度，0.5× 大约低一个八度。变速保调页保持音高、改变时长，范围是 0.75× 到 1.25×，步进 0.01。想改音高、不改时长，用变调页。',
        },
        {
          q: '可以选哪些速度？',
          a: '从 0.5× 到 2×，步进 0.05。一半速度最适合听写说得很快的话，或学一段独奏；1.25–1.5× 用来快进讲座和播客比较舒服。',
        },
        {
          q: '导出有多快？',
          a: '速度变化由浏览器离线渲染，按设备自己的速度来算。一条 10 分钟的音轨只要一两秒，跟你选的倍数无关。',
        },
        {
          q: '可以只加快音轨的一部分吗？',
          a: '可以。在波形上选中那一段，把模式设为「保留选区」，再选速度。导出的只有这一段，更快，或更慢。',
        },
        {
          q: '文件长度有限制吗？',
          a: '没有人为设的限制。实际上限是你设备的内存，普通电脑上大约是一小时音频。',
        },
        {
          q: '手机上能用吗？',
          a: '能。用手指在波形上拖选。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '变速并下载',
      screenshotsAlt: [
        '在线音频变速 拖放区：拖入文件或点击浏览，不会上传',
        '在线音频变速 工作区，文件已载入',
        '在线音频变速 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '速度和音高一起动',
          paragraphs: [
            '这个控件像磁带一样让文件变快或变慢，从 0.5× 到 2×。变快，文件更短、音高更高。变慢，文件更长、音高更低。2× 大约高一个八度，0.5× 大约低一个八度。',
            '长度变了、音高不变，是 [变速不变调](/tempo-changer)，从 0.75× 到 1.25×。这一页仍然让音高跟着速度走。长度不变、只改人声高低，是 [变调](/pitch-changer)，最多 12 个半音。',
          ],
        },
        {
          heading: '这个控件什么时候有用',
          paragraphs: [
            '音高变化可以接受，甚至就是你要的效果时，用它：',
          ],
          bullets: [
            '想快点听完的讲座或语音备忘，尖一点也没关系。',
            '慢速过一遍方便听写，人声会跟着沉下去。',
            '导出前快速听一下片段在另一个速度下的样子。',
          ],
        },
        {
          heading: '慢放歌曲是另一个页面',
          paragraphs: [
            '[慢速混响](/slowed-reverb) 是同一个速度控件，再加 2.2 秒混响。音高仍然跟着速度走。这一页只有速度控件。',
            '在慢速页把速度推到 100% 以上，就是 nightcore 方向。还想要混响旋钮，就在那边做。只想要新的长度，在这一页导出。',
          ],
        },
      ],
    },
    'increase-volume': {
      cardLine: '用限幅器把偏小的语音备忘提升到 4×，绝不过载。',
      name: '音量放大',
      shortName: '音量加大',
      title: '音量放大 — 最高 400%，限幅器保证不破音',
      description:
        '把太安静的音频最高加大到 4 倍（约 +12 dB），内置限幅器接住峰值，更响但不失真。手机备忘、后排讲座、低电平音轨都适用。浏览器本地处理，不上传。',
      h1: '音量放大 — 把 MP3 变响',
      heroAlt: '加大 MP3 音量，同时避免破音',
      subtitle: '把安静的录音最高加大到 4 倍。有限幅器，所以不会削波。',
      intro:
        '修好太安静的录音：手机语音备忘、坐在后排录的讲座、电平很低的视频音轨。把音量最高推到 4 倍，也就是 400%（约 +12 dB）。内置限幅器会接住峰值，所以结果更响，又不会变成失真。',
      usesHeading: '音量放大的常见使用场景',
      uses: [
        '手机备忘：离麦克风太远录的语音，抬到听得清。',
        '后排讲座：坐在后排录的课，让限幅器接住峰值再抬。',
        '视频垫音：偏安静的 MP3 够响又不削破，垫在视频下面。',
        '采访救急：采访音轨电平太低，加到能听清每个字。',
        '会议备份：备用录音加大音量，比没有强得多。',
        '灵敏度低的耳机：音量上限低的设备，先抬高源文件。',
      ],
      why: [
        {
          icon: 'volume',
          title: '限幅器接住峰值',
          text: '滑块最高 400%（约 +12 dB）。中等加大 150–250% 通常干净；超过 300% 峰值会开始抽吸，用耳朵判断。',
        },
        {
          icon: 'scissors',
          title: '干净地响',
          text: '听起来发紧就往回退 10–20%——干净地响，比拉到最大更好。',
        },
      ],
      howTo: [
        { name: '加入音频', text: '偏安静的 MP3、WAV、M4A 或其他文件拖进虚线框。只在你的设备上处理。' },
        { name: '加大音量', text: '音量滑块最高拖到 400%，边调边试听，限幅器自动压住最响的峰值。' },
        { name: '导出更响的文件', text: '存成 MP3 或 WAV。发紧就往回退 10–20%——干净地响比拉满更好。' },
        { name: '拿走文件', text: '一个 3 分钟的文件不管加多少，一两秒就能导出。' },
      ],
      faqs: [
        {
          q: '加大音量会失真吗？',
          a: '推得太狠会有一些。这是物理限制，不是软件的问题。内置限幅器会接住超过阈值的峰值，所以中等加大（150–250%）通常听起来干净。超过 300% 以后，安静的部分变响了，但峰值会开始抽吸。用耳朵听着判断。',
        },
        {
          q: '能加到多响？',
          a: '最高到原来的 400%，大约是 +12 dB。这盖住了大多数偏安静的录音。一个 3 分钟的文件，不管加多少，一两秒就能导出。',
        },
        {
          q: '这和归一化一样吗？',
          a: '不一样。归一化是把整个文件抬高，让最响的峰值达到一个目标电平。这里的加大，是按你选的倍数去乘电平。当你知道整段录音都偏安静时，这样更好预料。',
        },
        {
          q: '可以只加大文件的一部分吗？',
          a: '可以。在波形上选中安静的那一段，把模式设为「保留选区」，再导出。你得到的只有这一段，而且是加大之后的音量。',
        },
        {
          q: '视频文件能用吗？',
          a: '常常可以。浏览器通常能解出拖到页面上的 MP4 里的音轨。如果浏览器拒绝这个文件，先把音频提取出来，再试一次。',
        },
        { q: "这和文件响度计有什么不同？", a: "这一页按你选的倍数去乘整个文件。文件响度计读的是综合 LUFS，也就是文件有多响，不是房间有多响，并能对齐到 −16、−14 或 −23，同时不让样本峰值超过 −1 dBFS。两页都不会把响和轻拉平。" },
        {
          q: '手机上能用吗？',
          a: '能。用手指在波形上拖选。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '加大并下载',
      screenshotsAlt: [
        '音量放大 拖放区：拖入文件或点击浏览，不会上传',
        '音量放大 工作区，文件已载入',
        '音量放大 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '一条太小声的 MP3',
          paragraphs: [
            '提高 MP3 音量会把文件乘以一个系数，最高 400%，大约 +12 dB。超过 100% 时，限制器会挡住峰值，避免硬削波。',
            '视频音轨或其他格式需要同样的增益，用音量增强。这一页是照着 MP3 写的。视频文件通常也能在这里解码。',
          ],
        },
        {
          heading: '这个倍数不做什么',
          paragraphs: [
            '它给整个文件一个增益。它不是响度标准，也不会拉平动态：',
          ],
          bullets: [
            '播客目标 −16 LUFS：用 [响度表](/loudness-meter) 测量。如果采样峰值会超过 −1 dBFS，那一页会停下增益。',
            '一个峰值已经接近满刻度，其余都很小：[音量标准化](/normalize-audio) 会把那个峰值设到 0.98，最多放大 4×。它不会把安静的部分再抬起来。',
            '响亮段和安静段需要靠近：[电平压缩](/compressor)，不是这个滑块。',
          ],
        },
        {
          heading: '导出',
          paragraphs: [
            '你会得到一个新文件。拖进来的 MP3 留在原地。已经很响的文件再推，大多只是撞上限制器，听起来会发扁。',
            'MP3 小声是因为长静音里只有一句话，先裁或切，再抬剩下的部分。',
          ],
        },
      ],
    },
    'mp4-to-mp3': {
      cardLine: '把视频片段、屏幕录制或相机文件的音轨存成 MP3。',
      name: 'MP4 转 MP3',
      shortName: 'MP4 转 MP3',
      title: 'MP4 转 MP3 — 在线把 MP4/MOV/WebM 视频转成 MP3，免费',
      description:
        '从 MP4/MOV/WebM 视频提取音轨存成 MP3，浏览器本地解码不上传，500 MB 视频几秒转完。比特率 64–320 kbps 任选，多文件打包 ZIP。AC3/DTS 音轨无法解码。免费，不用注册。',
      h1: 'MP4 转 MP3 — 把视频转成 MP3',
      heroAlt: '把 MP4、MOV 或 WebM 的音轨转成 MP3',
      subtitle: '从任意视频里抽出音轨。就在浏览器里，不会上传。',
      intro:
        '把 MP4 视频转成 MP3，不用安装任何东西，也不用把几个 GB 上传到服务器。浏览器从你的磁盘读取文件，在本地解码音轨，再存成 MP3。一个 500 MB 的视频几秒就能转完，因为只处理音轨。',
      usesHeading: 'MP4 转 MP3 的常见使用场景',
      uses: [
        '讲座保存：把讲座或演唱会的视频转成音频，锁屏也能听。',
        '采访素材：从相机文件里抽音轨，交给转写或剪辑。',
        '音乐提取：把演唱会录像转成 MP3，车载播放器直接放。',
        '屏幕录制：网课和演示录屏只留声音，文件小十倍。',
        '老录像存档：把旧的 MOV 家用录像批量抽成 MP3 保存。',
        '播客素材：先整条转 MP3，要片段再去[音频剪辑](/audio-trimmer)裁。',
      ],
      why: [
        {
          icon: 'download-simple',
          title: '只处理音轨，不碰画面',
          text: '浏览器本地解码音轨直接写 MP3，视频画面完全忽略——4K 和 240p 转换一样快，500 MB 的视频几秒完成。',
        },
        {
          icon: 'warning-triangle',
          title: '格式边界直说',
          text: '带 AAC 音轨的 MP4、Opus 的 WebM 和大多数 MOV 都能转；AC3/DTS 音轨浏览器解不了，会明确拒绝并提示，不让你白等。',
        },
      ],
      howTo: [
        {
          name: '拖入视频',
          text: '把 MP4 拖进虚线框，或点击浏览。带普通音轨的 WebM 和 MOV 也一样能用。可以一次放多个文件，它们共用你下一步选的设置。',
        },
        {
          name: '选一个比特率',
          text: '64–320 kbps 任选：音乐视频用 320，日常听用 192，访谈和讲座用 128。',
        },
        {
          name: '点「转为 MP3」',
          text: '导出条上的主按钮。音轨在你的浏览器里本地解码，不碰视频画面，4K 和 240p 一样快。',
        },
        {
          name: '拿走文件',
          text: '一个文件单独下载，两个及以上打成一个 ZIP，文件名带 -converted 后缀。',
        },
      ],
      faqs: [
        { q: '可以一次转换多个视频吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: '视频会上传到别处吗？',
          a: '不会。视频文件很大，这一点值得再说一遍。浏览器从你的磁盘读取文件，只解码里面的音轨，再在本地写出 MP3。视频画面不会被处理，也不会被传输出去。超过 300 MB 的文件会被拒绝。',
        },
        {
          q: '支持哪些视频格式？',
          a: '带 AAC 音频的 MP4（绝大多数都是这种，包括手机录像和常规下载），加上带 Opus 的 WebM，以及大多数 MOV。AC3 或 DTS 这种音轨，浏览器解不了，会被拒绝，并给出明确提示。',
        },
        {
          q: '和那些在线转换器比，有多快？',
          a: '通常更快。要先上传的转换器，得把整个视频发到服务器，一个 500 MB 的文件可能要很多分钟。这里只在本地解码音频，所以很长的视频，在一台普通电脑上几秒也能转完。',
        },
        {
          q: '可以只转换视频的一部分吗？',
          a: '这个页面是整段转换，会把整条音轨都转出来。如果只要其中一段，先把完整音频转好，再用音频剪辑去裁。',
        },
        {
          q: '4K 或 8K 视频会变慢吗？',
          a: '不会。分辨率没关系，视频轨会被完全忽略。音轨相同的 4K 文件和 240p 文件，转换是一样的。',
        },
        {
          q: '可以把 YouTube 之类的平台链接转成 MP3 吗？',
          a: '不能。这个页面只读取你从这台设备上选的文件，不接受链接。从流媒体平台下载音频通常违反它们的服务条款，请只转换你自己录的或有授权的视频。',
        },
        {
          q: '需要装 App 吗？',
          a: '不需要。转换就在这个浏览器标签页里完成，电脑和手机都一样。不用装任何东西，也不用注册账号。',
        },
      ],
      dropHint: '拖入一个或多个 MP4 或视频，或点击浏览',
      exportLabel: '转为 MP3',
      screenshotsAlt: [
        'MP4 转 MP3 拖放区：拖入文件或点击浏览，不会上传',
        'MP4 转 MP3 工作区，文件已载入',
        'MP4 转 MP3 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '只转换音轨，画面完全不动',
          paragraphs: [
            'MP4 是一个容器，画面和声音是两条独立的轨。这一页解码声音，写出 MP3。画面不会被编码、上传或保存。',
            '画面不解码，所以分辨率不参与转换。文件一直留在这台设备上。超过 300 MB 的文件会被拒绝。',
          ],
        },
        {
          heading: '用哪个 MP3 比特率',
          paragraphs: [
            '音轨按你选的比特率编码一次。',
          ],
          bullets: [
            '菜单是 64、96、128、192 和 320 kbps。这一页默认 320。',
            'WAV 是解码后采样的 16 位 PCM。MP3 把这些采样编码一次。',
            '标题、歌手和封面不会复制。',
          ],
        },
        {
          heading: 'MP4 转 MP3，还是提取音频',
          paragraphs: [
            '导出默认 MP3 320 kbps。WebM 和 MOV 只有在这个浏览器能解码音轨时才能打开。把格式切成 WAV，得到 16 位副本。默认就给 WAV 的页面是 [提取音频](/extract-audio)。',
            '只需要一分钟，就在这里转换整条音轨，再用 [音频剪辑](/audio-trimmer)。这一页不会从视频里切出一段。',
          ],
        },
        {
          heading: '浏览器读不了的文件',
          paragraphs: [
            '这个浏览器解码不了音轨时，提示是：这个文件无法解码，它可能已损坏，或者浏览器不支持它的编码。提示不会说出编码名。',
            'MP3 不会保留视频标题或缩略图。需要播放器显示名字，导出后用 [MP3 标签编辑](/mp3-tag-editor) 设置曲名。',
          ],
        },
        {
          heading: '这一页、VLC，还是上传网站',
          paragraphs: [
            '把视频变成 MP3 有三条路。按文件大小和转换频率来选。细节是在 2026-10-28 对着线上服务核对的。',
          ],
          table: {
            headers: ['', '这一页', '桌面版 VLC', '上传网站'],
            rows: [
              ['安装', '不用', '要', '不用'],
              ['文件离开设备', '不会', '不会', '会'],
              ['大小限制', '每个文件 300 MB', '磁盘剩余空间', '各站不同'],
              ['多个文件', '可以，打成一个 ZIP', '一次一个', '各站不同'],
              ['费用', '免费', '免费', '免费档有上限'],
            ],
          },
          outro: [
            '每晚批量处理一小时的录音，桌面程序更合适。',
            '只转一次音轨，这一页合适：不用安装，视频也不会离开设备。',
          ],
        },
      ],
    },
    'extract-audio': {
      cardLine: '从任何视频中提取干净音频，用于剪辑、转写或采样。',
      name: '从视频提取音频',
      shortName: '从视频提取音频',
      title: '从视频提取音频 — MP4/MOV/WebM 存成 MP3 或 WAV',
      description:
        '从任意视频里抽出音轨：MP4、MOV、WebM 都行，存成 MP3 或无损 WAV。只解码音轨、不碰画面，几秒完成。批量打包 ZIP，不上传。',
      h1: '从视频提取音频 — 把视频里的声音存成文件',
      heroAlt: '把视频音轨存成 MP3 或 WAV',
      subtitle: '把任意视频的音轨存成 MP3 或 WAV。本地处理，几秒就好。',
      intro:
        '把声音和画面分开：从视频通话里抽出访谈，把演唱会录像存成可以听的音频，或在你自己的剪辑里再用这条音轨。音轨在你的设备上解码，可以无损存成 WAV，也可以存成体积更小的 MP3。',
      usesHeading: '从视频提取音频的常见使用场景',
      uses: [
        '屏幕录制：网课录屏只留讲解声，文件小十倍。',
        '手机视频：取出拍摄时的现场声做素材。',
        '采访备份：视频采访抽成音频，交给[转写](/audio-to-text)。',
        '音乐现场：演唱会录像抽成 live 音频收藏。',
        '无损底子：留 WAV 给剪辑，成片再压 MP3。',
        '播客素材：双机位录了视频，抽音轨进剪辑流程。',
      ],
      why: [
        {
          icon: 'convert',
          title: 'MP3 与 WAV 双出口',
          text: '发出去选 MP3；要继续剪辑或降噪，选 WAV 保留全部采样。',
        },
        {
          icon: 'film',
          title: '只解码音轨',
          text: '视频画面完全忽略，只解码音轨，所以大文件也快。',
        },
      ],
      howTo: [
        { name: '拖入视频', text: 'MP4、MOV、WebM 拖进虚线框或点击浏览；音轨在本地解码。' },
        { name: '选择格式', text: '发出去选 MP3，继续剪辑选无损 WAV。' },
        { name: '点「提取音轨」', text: '只解码音轨不碰画面，几秒完成。' },
        { name: '拿走文件', text: '单个直接下载，多个打包 ZIP。' },
      ],
      faqs: [
        { q: '可以从多个视频里提取音频吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: '这和 MP4 转 MP3 有什么区别？',
          a: '底层是同一套本地提取。这个页面用来按你要的格式把音频从视频里取出来，包括无损 WAV。转换页面则专门对着 MP3 输出。',
        },
        {
          q: '能拿到原来的音质吗？',
          a: '选 WAV：解码后的音轨会无损写出去，所以音频和视频里的一致。MP3 会重新编码一次；在 320 kbps 下，实际听起来没有差别。',
        },
        {
          q: '哪些视频格式可以用？',
          a: '带 AAC 音频的 MP4、带 Opus 的 WebM，以及大多数 MOV，也就是浏览器能自己解的那些编码。AC3、DTS 或其他少见编码的音轨，无法在本地解码，会被直接拒绝。',
        },
        {
          q: '文件大小有限制吗？',
          a: '没有人为设的限制。只处理音轨，所以很大的视频也能很快转完。上限是你设备的内存，不是磁盘上的文件有多大。',
        },
        {
          q: '可以反过来把视频里的声音去掉吗？',
          a: '那是相反的事。给视频消音，是留下画面、丢掉声音。这个工具留下声音、丢掉画面。',
        },
        {
          q: '手机上能用吗？',
          a: '能。选好文件，转换就留在这个标签页里。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      {
        q: '能在 Claude 或 Cursor 里提取本地视频的音轨吗？',
        a: '这个网页提取浏览器能解码的音轨。AC3 和 DTS 在这里会被拒绝。/mcp 用 ffmpeg，某种格式只有在你的 ffmpeg 编译包含该解码器时才能打开。它不会从链接抓视频。聊天应用仍会看到路径。',
      },
        {
          q: '可以从 YouTube 视频里提取音频吗？',
          a: '这个页面只读取你从这台设备上选的文件，不接受链接。把流媒体平台的音频存下来通常违反它们的服务条款，请只处理你自己录的或有授权的视频。',
        },
      ],
      dropHint: '拖入一个或多个视频，或点击浏览',
      exportLabel: '提取音轨',
      screenshotsAlt: [
        '从视频提取音频 拖放区：拖入文件或点击浏览，不会上传',
        '从视频提取音频 工作区，文件已载入',
        '从视频提取音频 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '把视频里的音轨取出来',
          paragraphs: [
            '提取音频会解码音轨，丢掉画面。导出默认 MP3 192 kbps。菜单里也有 WAV。',
            '[MP4 转 MP3](/mp4-to-mp3) 是同一条解码路径，默认 320 kbps。',
          ],
        },
        {
          heading: '会得到什么，不会得到什么',
          paragraphs: [
            '只解码音频轨，视频帧直接丢掉：',
          ],
          bullets: [
            '手机视频或录屏会变成能裁、能接、能改标签的文件。',
            'WAV 是解码后采样的 16 位 PCM。MP3 把这些采样编码一次。',
            '浏览器解码不了音轨时，提示不会说出编码名。',
          ],
        },
        {
          heading: '它不会让视频静音',
          paragraphs: [
            '这一页留下声音，丢掉画面。它不会还你一个视频。',
            '超过 300 MB 的文件会被拒绝。画面不解码，所以分辨率不参与转换。什么都不会上传。',
          ],
        },
      ],
    },
    'voice-recorder': {
      cardLine: '直接在浏览器里录会议、课程和灵感——无需安装应用。',
      name: '在线录音',
      shortName: '在线录音',
      title: '在线录音 — 用麦克风录成 MP3，免费裁剪',
      description: '用浏览器麦克风录音：语音备忘、采访、会议或练习，录完直接裁剪并存成 MP3 或 WAV。音频只存在这个标签页里，不上传。麦克风权限需手动允许；未导出就关闭，录音会消失。',
      h1: '在线录音 — 用麦克风录成 MP3',
      heroAlt: '把一段语音备忘存成 MP3 或 WAV',
      subtitle: '用麦克风录音，裁掉多余的部分，存成 MP3。什么都不会离开你的设备。',
      intro:
        '上面录音，下面就能裁。录语音备忘、访谈、练习或会议笔记，再切掉没声音的地方，导出一个干净的文件。录音和编辑都在你的浏览器里完成，音频不会发到任何地方，所以机密对话也放心。',
      usesHeading: '在线录音的常见使用场景',
      uses: [
        '语音备忘：想到就说，录完裁掉头尾再存。',
        '语言跟读：录下自己的发音，和原声对比纠正。',
        '采访草稿：面对面采访先录下来，回头整理转写。',
        '会议记录：快速录下结论，要点再用文字补。',
        '练习旁白：录演示或课程的旁白草稿，反复听改。',
        '音乐灵感：哼一段旋律存下来，别让灵感溜走。',
      ],
      why: [
        {
          icon: 'mic',
          title: '录完立刻能剪',
          text: '录音直接载入下方编辑器：裁掉头尾、标选区、导出 MP3 或 WAV，不用再开第二个工具。',
        },
        {
          icon: 'lock-simple',
          title: '录音不出标签页',
          text: '麦克风数据只存在标签页内存里，什么都不会传输。不导出就关掉，录音随之消失——机密对话也放心。',
        },
      ],
      howTo: [
        {
          name: '允许麦克风',
          text: '点录音，并接受浏览器的权限提示。录音马上开始，计时器会显示这一条有多长。',
        },
        {
          name: '停止并裁剪',
          text: '录完点停止，录音自动载入下方编辑器。拖出要保留的选区，模式设为「保留选区」，把两头裁掉。',
        },
        {
          name: '导出这一条',
          text: '要分享就存 MP3，还要再编辑就存无损 WAV。导出直接下载，不经过任何服务器。',
        },
        {
          name: '别忘了导出',
          text: '录音只存在于这个标签页的内存里。不导出就关掉，录音会消失——先导出，再关页面。',
        },
      ],
      faqs: [
        {
          q: '我的录音会去哪儿？',
          a: '哪儿也不去。麦克风的数据由浏览器采集，存在这个标签页的内存里。什么都不会传输出去。如果你不先导出，关掉标签页之后，录音就消失了。',
        },
        {
          q: '录音是什么格式？',
          a: '由浏览器决定怎么采集。Chrome 和 Firefox 录的是 WebM/Opus，Safari 录的是 MP4/AAC。这不影响结果：导出时都会在你的设备上转成 MP3 或 WAV。',
        },
        {
          q: '能裁掉开头和结尾的静音吗？',
          a: '能。录音下面的编辑器就是用来干这个的。拖动选出你要留的部分，把模式设为「保留选区」，再导出，没声音的地方就没了。',
        },
        {
          q: '哪些浏览器支持录音？',
          a: '桌面上的 Chrome、Edge、Firefox 和 Safari，加上 Android 上的 Chrome，以及 iOS 上的 Safari。如果录音按钮提示不能录音，说明这个浏览器没有 MediaRecorder API。',
        },
        {
          q: '可以录多久？',
          a: '设备内存允许多久，就能录多久。几分钟的语音占不了多少空间（Opus 压缩很省）。要录好几个小时，就分段导出。',
        },
      ],
      dropHint: '或拖入已有的录音来编辑',
      screenshotsAlt: [
        '在线录音 拖放区：拖入文件或点击浏览，不会上传',
        '在线录音 工作区，文件已载入',
        '在线录音 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '麦克风留在浏览器里',
          paragraphs: [
            '录音机用的是这个标签页里的 MediaRecorder。录下的内容不会上传。导出前关掉标签页，这段录音就没了。',
            '采集格式取决于浏览器。导出时选 MP3 或 WAV，所以你留下的文件是你选的那个，不是浏览器内部录的原格式。',
          ],
        },
        {
          heading: '录完之后',
          paragraphs: [
            '可以留下一个选区来裁剪，再导出这一段：',
          ],
          bullets: [
            '切掉第一个字之前的吸气，和最后一个字之后的静音。',
            '之后还要再编辑、只想编码一次，导出 WAV。',
            '备忘录只是要发出去或小体积存档，导出 MP3。',
          ],
        },
        {
          heading: '它不做的事',
          paragraphs: [
            '它需要浏览器支持 MediaRecorder，也需要麦克风权限。它不做转写。语音转文字是音频转文字页，那一页收文件，不接实时麦克风。',
            '录得太小声，导出后还是小声。用音量增强抬起来，或者目的地是播客标准时，在响度表上看一下电平。',
          ],
        },
      ],
    },
    'volume-booster': {
      cardLine: '让安静的音乐和视频音轨变响变干净，最高 4×。',
      name: '音量加大',
      shortName: '音量加大',
      title: '音量加大 — 视频和音乐一起调响，免费',
      description:
        '把听起来比画面轻的视频音轨和安静的音乐抬起来：加大量自由调节，浏览器本地处理。视频文件直接处理，画面不动。免费，不上传。',
      h1: '音量加大 — 把音频和视频变响',
      heroAlt: '把偏小的视频音轨拉响',
      subtitle: '把安静的音轨和视频音轨最高加大到 4 倍。干净，不削波。',
      intro:
        '给所有放出来太安静的东西用：安静的手机视频、很轻的原声录音、母带做得特别轻的播客。载入文件，把音量最高推到 4 倍，也就是 400%（约 +12 dB），让内置限幅器压住峰值，响的部分依然干净。音频和视频都能用，只处理音轨。',
      usesHeading: '音量加大的常见使用场景',
      uses: [
        '视频音轨：听起来比画面轻的录制视频，把音轨抬起来。',
        '安静音乐：电平偏低的老歌或下载音乐调到正常响度。',
        '手机录像：室外风声盖过人声的录像，把人声抬起来。',
        '会议回放：在线会议录得的音量偏小，加大到听得清。',
        '演示录音：培训录屏的讲解声加大，不用重录。',
        '影条预听：视频草稿的音轨加大，先确认内容。',
      ],
      why: [
        {
          icon: 'film',
          title: '视频直接处理',
          text: '带画面的视频文件也能加大音量：只处理音轨，画面不动，导出还是同一个视频容器。',
        },
        {
          icon: 'volume',
          title: '加大量随你定',
          text: '滑块自由调节，边调边试听；幅度按耳朵定，不用猜一个百分比。',
        },
      ],
      howTo: [
        { name: '拖入文件', text: '音频或视频文件拖进虚线框，或点击浏览。视频只动音轨，画面保持原样。' },
        { name: '选择加大量', text: '拖动加大量滑块，边听边调，直到响度合适。' },
        { name: '导出更响的文件', text: '导出 MP3 或 WAV（视频文件保持原容器），更响的版本直接下载。' },
        { name: '微调再出', text: '听着发紧就把加大量往回收一点；导出前多试几档。' },
      ],
      faqs: [
        {
          q: '能加到多响？',
          a: '最高到原来的 400%（+12 dB）。加大不能凭空变出录音里没有的能量，所以特别安静的素材，也可以先导出成 WAV，再到专门的编辑器里做归一化。但对大多数偏安静的文件，加大到 2–3 倍就够了。',
        },
        {
          q: '限幅器实际上在做什么？',
          a: '音量超过 100% 时，一个动态压缩器盯着输出，在瞬间峰值削波之前把它们压住。结果是整体更响，又没有硬数字削波那种爆音。后面还有一级软削波，接住仍然漏过去的峰值。',
        },
        {
          q: '可以加大视频的声音吗？',
          a: '可以。拖入 MP4 或 WebM，音轨会在本地解码、加大，再导出为 MP3 或 WAV。视频轨会被忽略。如果只要声音，用提取音轨。',
        },
        {
          q: '在手机上加大音量，能用吗？',
          a: '能。手机上的 Safari 和 Chrome 都可以。一首 3 分钟的歌，在现在的手机上大约一两秒就能导出。',
        },
        {
          q: '为什么不直接把扬声器开大？',
          a: '扬声器音量只在你自己的设备上有用。加大之后的文件到哪儿都更响：别人的手机上、便宜的耳机里、笔记本那对很小的喇叭上。',
        },
        {
          q: '这和电平压缩有什么不同？',
          a: '这一页把整个文件乘上同一个倍数，响和轻之间的差距不变。电平压缩把这个差距收窄，再把峰值放回去。整段都太轻时用这一页。有的地方太响、有的地方太轻时用压缩。',
        },
        { q: "这和文件响度计有什么不同？", a: "拖这个滑块，是把每个采样乘上同一个倍数。文件响度计测量综合 LUFS，并给出三个交付目标：播客 −16、流媒体 −14、广播 −23。如果样本峰值会超过 −1 dBFS，增益就停住。它不是房间声级计。" },
      ],
      dropHint: '拖入音频或视频文件，或点击浏览',
      exportLabel: '加大并下载',
      screenshotsAlt: [
        '音量加大 拖放区：拖入文件或点击浏览，不会上传',
        '音量加大 工作区，文件已载入',
        '音量加大 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '把音频放大，又不炸',
          paragraphs: [
            '采样想越过数字上限 0 dBFS 时，文件就会削波。增强会把每个采样乘大。最响的那一刻本来就已经贴着上限，大幅增强就会把顶部切掉，你听到的就是噼啪声。',
            '超过 100% 时，这一页会开限制器：阈值 −2 dB，拐点 3，压缩比 20，启动 0.002 秒，释放 0.15 秒。滑块从 10% 到 400%。',
          ],
          bullets: [
            '滑块是 10% 到 400%，步进 5。',
            '超过 100% 时套用上一段说的限制器。100% 及以下不套用。',
            '按测到的峰值放大、最多 4×，是 [音量标准化](/normalize-audio)。',
            '这一页写出更响的文件。它不改电脑音箱的音量。',
          ],
        },
        {
          heading: '峰值更高，不等于文件更响',
          paragraphs: [
            '峰值电平是最响的那一个采样。一段轻声的采访里有一声咳嗽，峰值可以接近满刻度，整体听起来还是小声，因为其余部分都很低。把文件整体乘大，轻声和咳嗽会一起变响。',
            '一个文件从头到尾听起来多响，是 LUFS 量的东西。这一页不瞄准某个 LUFS 数值。响度表会：它读积分 LUFS，能把文件送到播客约 −16、流媒体约 −14、广播约 −23，采样峰值会超过 −1 dBFS 时它就停下。',
          ],
        },
        {
          heading: '增强、标准化，还是压缩',
          paragraphs: [
            '站里有三个页面会改电平，它们不能互相替代。',
          ],
          bullets: [
            '音量增强，这一页：倍数由你定，10% 到 400%，超过 100% 时由上一节的限制器压住峰值。视频文件也收，画面不保存。',
            '[音量标准化](/normalize-audio)：按测到的增益放大一次，让最响的峰值落在 0.98，最多 4×。',
            '[电平压缩](/compressor)：把响的地方压下来、轻的字抬上去，再把峰值放回去，最多 0.98。单纯增强做不到这个。',
          ],
        },
        {
          heading: '视频音轨和手机录音',
          paragraphs: [
            '拖入 MP4、WebM 或 MOV，只解码音轨，增强后存成 MP3 或 WAV。画面会被忽略。浏览器读不了音频编码，就先提取音频。',
            '增强过的文件，在每个播放设备上都更响。音箱音量只帮得到你面前这台设备。之后还要编辑就导出 WAV。MP3 编码一次。增强变不出安静手机麦克风没录到的细节，原来就有的底噪也会一起变大。',
          ],
        },
      ],
    },
    'normalize-audio': {
      cardLine: '把一整批录音拉到统一、健康的音量水平。',
      name: '音频归一化',
      shortName: '归一化',
      title: '音频归一化 — 在线把音量拉齐，批量 ZIP',
      description:
        '归一化扫描最响峰值，把整个文件抬到刚好低于满刻度（约 −0.2 dB）：算出来的增益，不是盲加倍。批量文件逐个测量、打包 ZIP。浏览器本地完成，不上传。',
      h1: '音频归一化 — 把 MP3 音量拉齐',
      heroAlt: '把偏小的几个文件抬到同一个音量',
      subtitle: '点一下，把安静的文件抬到一致、够用的电平。分析在你的设备上完成。',
      intro:
        '归一化会扫描文件，找出最响的峰值，再把整个文件正好抬高那么多，让这个峰值刚好停在削波下面。结果是文件把该有的音量范围用满了，不用你自己猜。整段录音都偏安静时，就该用它：语音备忘、现场录音，或其他应用导出后落在 −18 dB 的文件。这是峰值归一化，不是 LUFS。',
      usesHeading: '音频归一化的常见使用场景',
      uses: [
        '批量拉齐：一整批录音抬到统一、健康的音量水平。',
        '合成前对齐：几段即将相接的录音先归一，避免某一章只有旁边一半响。',
        '救回安静录音：语音备忘或现场录音整体偏小时，一键抬高。',
        '代替盲加倍：不知道滑块推多远时，用算出来的增益。',
        '导出后修正：其他应用导出后落在 −18 dB 左右的文件拉回正常。',
        '发布前体检：峰值贴满、动态不变，后续压缩再交给[电平压缩](/compressor)。',
      ],
      why: [
        {
          icon: 'convert',
          title: '算出来的增益',
          text: '归一化扫描最响峰值，把整文件抬到峰值刚好低于满刻度（约 −0.2 dB）。安静和响的部分一起移，动态保持原样。',
        },
        {
          icon: 'layers',
          title: '批量逐个测量',
          text: '多个文件共用归一化按钮，每首按自己的峰值抬高；单个直接下载，两个以上打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '任意 MP3、WAV、M4A 等拖进虚线框。本地解码和分析，可一次放多个文件。' },
        { name: '点「归一化」', text: '扫描峰值并抬到刚好低于满刻度。试听就能听出差别；不知道滑块推多远时，用它而不是盲加倍。' },
        { name: '导出', text: '存成 MP3 或 WAV。还要继续编辑就选无损 WAV，避免二次有损编码。' },
        { name: '拿走文件', text: '每个文件按自己的峰值抬高，单独下载；两个以上打包 ZIP。' },
      ],
      faqs: [
        { q: '可以一次归一化多个文件吗？', a: '可以。打开归一化之后，队列里的每个文件都会用它。每个文件单独测量、按自己的峰值抬高，在这台设备上一个接一个处理。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        {
          q: '归一化到底做什么？',
          a: '它对整个文件加上一个固定的增益，让最响的那一个采样刚好落在数字满刻度下面（这里大约是 −0.2 dB）。如果文件的峰值在 50% 音量，归一化大约会把每个采样翻一倍，安静的部分和响的部分一起变。',
        },
        {
          q: '归一化和加大音量一样吗？',
          a: '有重叠，但归一化是算出来的，不是猜的。音量加大用的是你把滑块拖到的那个倍数；归一化会自动找出最大的、又不会破音的倍数。如果你知道文件整体都偏安静，加大就行。如果你只想让它在不破音的前提下尽量响，就用归一化。',
        },
        {
          q: '它会把安静和响的部分拉得一样响吗？',
          a: '不会。任何工具说点一下就能做到这一点，都别轻信。把安静的段落单独抬高，是电平压缩在做的事。归一化是把整段录音按同一个量往上移，动态保持原样。',
        },
        {
          q: '它会用流媒体平台那种 LUFS 响度目标吗？',
          a: '不会。这一页动的是峰值，不是综合响度。文件响度计测量 K 计权后的 LUFS，可以把文件对齐到 −16、−14 或 −23。那是常见的交付目标，不是法律规定，也不是房间有多响。',
        },
        {
          q: '归一化会降低音质吗？',
          a: '电平本身的变化在数学上是干净的，听不出来。音质只看导出格式：WAV 对这次增益是比特级一致的，MP3 会重新编码一次。文件还要继续编辑的话，就导出 WAV。',
        },
        {
          q: '手机上能用吗？',
          a: '能。用手指在波形上拖选。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      {
        q: '能在 Claude 或 Cursor 里标准化本地文件吗？',
        a: '这个网页在浏览器里抬高峰值，大约到 -0.2 dB。/mcp 用 ffmpeg 的 loudnorm 跑一遍，目标是 -16 LUFS、-1.5 dBTP、LRA 11。这是一遍，不是先测再写的第二遍。聊天应用仍会看到路径。',
      }],
      dropHint: '拖入一个或多个音频文件，或点击浏览',
      exportLabel: '归一化并下载',
      screenshotsAlt: [
        '音频归一化 拖放区：拖入文件或点击浏览，不会上传',
        '音频归一化 工作区，文件已载入',
        '音频归一化 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '一个增益，瞄准峰值',
          paragraphs: [
            '标准化会找到最响的采样，套一个增益，让那个峰值落在约 −0.2 dB 附近。其余每个采样都移动同样的量。安静的部分不会单独抬起来。',
            '它不是 LUFS。播客 −16 LUFS、流媒体约 −14、广播约 −23，是响度表的活。那张表在采样峰值会超过 −1 dBFS 时，也会停止建议增益。',
          ],
        },
        {
          heading: '什么时候该用标准化',
          paragraphs: [
            '整个文件就是偏小，而且没有哪里已经顶到峰值时，用它：',
          ],
          bullets: [
            '离麦克风很远录的语音备忘，还有余量。',
            '发出去之前应该接近满刻度的音轨。',
            '接下来要压缩或增强的文件，先把峰值定成一个已知的上限。',
          ],
        },
        {
          heading: '什么时候它会让你失望',
          paragraphs: [
            '如果有一声咔哒或一次吸气已经接近满刻度，标准化几乎不动，因为那个峰值决定了增益。把响亮和安静拉近，是电平压缩器，它做完再把峰值对上。',
            '按你选的倍数把文件变响，包括超过 100% 时带限制器，是音量增强。标准化没有这个倍数。',
          ],
        },
      ],
    },
    'slowed-reverb': {
      cardLine: '一键给任何歌加上深夜放慢加混响的味道。',
      name: '慢放 + 混响',
      shortName: '慢放 + 混响',
      title: '慢放 + 混响 — 在线做 slowed + reverb 版本',
      description:
        '把曲子放到约 85% 再加空间感，做出 slowed + reverb 版本。速度和湿度分开调，浏览器本地处理，不上传。',
      h1: '慢放 + 混响 — 把歌放慢并加上混响',
      heroAlt: '把歌曲降到大约 85%，再加一条柔和的回声尾音',
      howToIntro: '更慢，也更有房间感',
      subtitle: '深夜那种听感：把音轨放到大约 85%，加上空间感，再导出。不用装应用，不会上传。',
      intro:
        '慢放 + 混响，就是 slowed + reverb。它把音轨放到大约 80%–90%，音高跟着沉下去，再加一条柔和的尾音，听起来像隔着两个房间在放。载入一首歌，把速度拖到大约 85%，混响加到刚好，然后导出。全部在你的设备上完成，完整的一首也只要几秒。速度超过 1 倍，就是 nightcore。',
      usesHeading: '做 slowed + reverb 的常见场景',
      uses: [
        '夜间版本：曲子放到约 85%，再加空间感，氛围立刻不同。',
        '慢速翻听：喜欢的歌做个慢速版，换一种听感。',
        '短视频 BGM：slowed + reverb 是短视频的常见氛围。',
        '人声试验：人声放慢加混响，做氛围素材。',
        '两步分开调：先定放慢多少，再定混响多少。',
        '一键配方：默认参数就是经典 slowed + reverb 组合。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '速度和湿度分开调',
          text: '先放慢到想要的速度，再加空间感；两个旋钮分开，细调不打架。',
        },
        {
          icon: 'note',
          title: '经典配方起步',
          text: '默认就是 slowed + reverb 的经典组合：放慢加空间感，导出即用。',
        },
      ],
      howTo: [
        { name: '拖入歌曲', text: 'MP3 等音频拖进虚线框，或点击浏览。' },
        { name: '放慢，并加空间感', text: '速度滑杆放到约 85%，混响湿度按口味加。' },
        { name: '试听', text: '边听边微调速度和湿度，直到氛围对了。' },
        { name: '导出', text: '点「慢放并下载」，文件名带 -edited 后缀。' },
      ],
      faqs: [
        {
          q: '慢放 + 混响该用多快的速度？',
          a: '大多数成品落在 80% 到 90% 之间，85% 通常最合适：慢到音高明显沉下去，又不慢到节奏散掉。踩镲很密的歌，比又密又快的曲子更能扛住放慢。这就是 slowed + reverb 常用的速度。',
        },
        {
          q: '怎么改做成 nightcore？',
          a: '把速度滑块推过 100%，一般是 120–130%。速度一高，音高跟着高，这就是 nightcore 的声音。速度超过 1 倍就是 nightcore。经典做法把混响留在接近 0 的位置。',
        },
        {
          q: '放慢会变调吗？',
          a: '会，而且是故意的，就像转速不对的黑胶。人声变低，调也按同样的比例降下去。音高掉下去，就是这种风格的标志。慢放但不变调，得用时间拉伸编辑器，那是另一个更重的工具。速度和音高都不改、只绕一圈的，在 3D 音频页。',
        },
        {
          q: '混响该加多少？',
          a: '从 20–30% 开始听。这里的混响是合成出来的衰减尾音。超过大约 50%，曲子会开始像在教堂里，人声的词也听不清了。',
        },
        {
          q: '慢放之后的歌，能用在我的视频里吗？',
          a: '把一首歌放慢，并不改变它的版权。上传到 YouTube 或 TikTok，你仍然需要对原曲有使用权。很多创作者改用平台自己的授权曲库，把慢放留给自己的录音。',
        },
        {
          q: '手机上能用吗？',
          a: '能。用手指在波形上拖选。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入一首歌，或点击浏览',
      exportLabel: '慢放并下载',
      screenshotsAlt: [
        '慢放 + 混响 拖放区：拖入文件或点击浏览，不会上传',
        '慢放 + 混响 工作区，文件已载入',
        '慢放 + 混响 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '音高下沉，是因为速度慢了',
          paragraphs: [
            '速度从 0.50 到 2.00，步进 0.05，音高跟着走。想保住音高，用变速不变调，那一页到 0.75 和 1.25 为止。',
            '房间是一段 2.2 秒的脉冲响应。湿声设为 0，就不加房间。',
          ],
          table: {
            headers: ['速度', '听起来怎样', '常见用法'],
            rows: [
              ['0.95', '只是稍慢，音高微微下沉', '不想让人注意到的剪辑'],
              ['0.90', '经典的慢放感，松弛、偏暗', '慢速加混响的趋势音色'],
              ['0.85', '沉重、梦幻，明显降调', '情绪剪辑和循环'],
              ['高于 1.00', '更快更亮，进入 nightcore 地盘', '同一页，另一个方向'],
            ],
          },
        },
        {
          heading: 'Nightcore 是同一页的另一个方向',
          paragraphs: [
            '把速度推过 100%，音高会跟着升高：',
          ],
          bullets: [
            '超过 1.00，文件变快，音高也跟着上去。',
            '混响设为 0，就不加房间。',
            '范围到 0.50 和 2.00 为止。',
          ],
        },
        {
          heading: '版权和旁边的工具',
          paragraphs: [
            '这一页改速度，再加一个 2.2 秒的房间。它不检查你能不能发布这个文件。',
            '只要速度，从 0.5× 到 2×、不要混响旋钮，是变速页。长度不变、只改调，是变调页。不改变速度、能数清次数的回声，是回声页。',
          ],
        },
      ],
    },
    'tempo-changer': {
      cardLine: '改时长，从 0.75× 到 1.25×。音高不动。',
      name: '变速保调',
      shortName: '变速保调',
      title: '变速保调 — 改时长音高不变，免费',
      description: '改变音频时长而音高不变：拍点对不上、画面配不满，都靠它。放慢加长、加快缩短，调性保持原样。浏览器本地处理，不上传。',
      h1: '变速保调，时长变了，音高还在',
      heroAlt: '改变文件有多长，音高保持不动',
      subtitle: '0.75× 到 1.25×，步进 0.01。调不动。',
      intro: '拖入文件，拉动速度。文件变短或变长，音高被移回原来的位置。滑杆停在 0.75× 和 1.25×。1× 不跑拉伸，样本保持原样。密集和声可能变薄。这是这版移调的上限。不会上传。',
      usesHeading: '变速保调的常见使用场景',
      uses: [
        '对齐画面：配乐比画面长或短，改时长不改调。',
        '混接对拍：两首歌速度不同，先拉到同一速度再混。',
        '练习降速：快歌放慢练乐器，音高不升不降。',
        '语音微调：备忘稍稍拉长，声音还是原来的声音。',
        '舞曲适配：把新歌拉到和 Set 里一样的 BPM。',
        '采样适配：采样长度改到工程需要的节拍数。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '音高不变的时长',
          text: '保调算法独立改速度：加快不变尖，放慢不变沉；0.75×–1.25× 内效果最自然。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '保调在浏览器本地计算，音频不上传。',
        },
      ],
      howTo: [
        { name: '加入文件', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设定速度', text: '滑杆调到目标时长对应的倍数；调性保持不变。' },
        { name: '试听并导出', text: '试听确认自然度，导出 MP3 或 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '文件会上传吗？', a: '不会。浏览器在内存里拉伸文件。页面打开之后，你可以断网，再拖入文件并导出。' },
        { q: '听起来只是变长或变短吗？', a: '单音很接近。密集和声可能变薄。同一套移调超过大约 7 个半音会发金属声，这个滑杆停在大约 5 个半音以内。' },
        { q: '能比 0.75× 更慢，或比 1.25× 更快吗？', a: '不能。滑杆到这里就停。0.5× 和 2× 在变速页，那一页音高跟着速度走。这一页的 1× 不跑拉伸。' },
        { q: '和变速页、变调页有什么不同？', a: '变速页改时长，音高跟着走，范围是 0.5× 到 2×。变调页改音高，时长不变。这一页改时长，音高不动。' },
        { q: '手机上能用吗？', a: '能。速度滑杆和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 上可以点。' },
      {
        q: '能在 Claude 或 Cursor 里改变本地文件的速度并保持音高吗？',
        a: '这个网页变速范围是 0.75× 到 1.25×，音高不变。/mcp 用 ffmpeg 的 atempo，范围是 0.5× 到 2×，音高也不变。MP3 会重新编码一次。聊天应用仍会看到路径。',
      }],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '变速保调',
      screenshotsAlt: [
        '变速保调 拖放区：拖入文件或点击浏览，不会上传',
        '变速保调 工作区，文件已载入',
        '变速保调 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '长度变了，音高不变',
          paragraphs: [
            '页面先把文件重采样，所以长度和音高一起动。然后再按同样的比例把音高移回去。0.8× 会变成 1.25 倍长，调也回到原来的位置。',
            '滑块从 0.75× 到 1.25×，步进 0.01。这个范围之外没有控件。1× 时不跑拉伸，导出的就是你拖进来的采样。',
          ],
        },
        {
          heading: '限制会从哪里露出来',
          paragraphs: [
            '密集的和声会发薄。单独的人声或单个音符更接近原样。',
          ],
          bullets: [
            '这个滑块最大的一步大约 5 个半音。超过约 7 个，移调会发金属味。',
            '和弦堆叠是最先露出薄的地方。',
            '1× 就是你拖进来的文件。拉伸直接跳过。',
          ],
        },
        {
          heading: '速度页和变调页',
          paragraphs: [
            '速度页从 0.5× 到 2×，音高跟着速度走。音高变化就是目的时，用它。',
            '变调页移动调子、保持长度，最多 12 个半音。这一页正相反：长度动，调不动。',
          ],
        },
      ],
    },
    'pitch-changer': {
      cardLine: '按半音升降调，做翻唱和混搭——时长保持不变。',
      name: '变调',
      shortName: '变调',
      title: '变调 — 移 ±12 半音，时长不变',
      description: '把歌移到更好唱的调，或把人声变成角色：音高 ±12 半音自由移，时长完全不变。浏览器本地处理，试听即时。不上传。',
      h1: '变调 — 改变一首歌的音高',
      heroAlt: '只移动 MP3 的音高，速度保持不变',
      subtitle: '按半音升高或降低音高，文件有多长还是多长。',
      intro: '拖入一首歌或一段录音，拉动音高滑杆。调变了，节奏的位置不动。这和变速不一样：变速会把文件拉长或缩短。变调在你的设备上完成。',
      usesHeading: '变调的常见使用场景',
      uses: [
        '换调好唱：把歌移到适合自己的调，长度不变。',
        '角色配音：人声移几个半音做出角色感，语速不变。',
        '对齐采样：采样移到工程的调上。',
        '合唱分层：同一句移不同半音，叠出和声。',
        '乐器适配：移调适配无变调功能的乐器。',
        '演示对比：半音步进上下对比，找到最合适的调。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '±12 半音自由移',
          text: '步进 1 半音：时长完全不变，只有音高动。移得越多质感越明显——小幅度最自然。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '变调在浏览器本地实时预览，音频不上传。',
        },
      ],
      howTo: [
        { name: '加入文件', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设定音高', text: '滑杆 ±12 半音，预设一键到位；时长保持不变。' },
        { name: '试听并导出', text: '试听确认，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '文件时长会变吗？', a: '不会。音高滑杆只改调，不改时长。想让文件变快或变慢（音高也会跟着变），用变速页。' },
        { q: '能调多少？', a: '从 −12 到 +12 个半音，一格一个半音。两边各一个八度。人声和单件乐器比编得满的混音更能扛住大的变调。' },
        { q: '调很多会自然吗？', a: '挪几个半音，听起来还接近原声。超过大约 7 个半音会变薄、发金属声。这是这版变调的上限，不是可以关掉的选项。' },
        { q: '这和变速是一回事吗？', a: '不是。变速是把文件放快或放慢，音高跟着走，时长也会变。这一页只改音高。变速保调页改时长，音高不动，从 0.75× 到 1.25×。' },
        { q: '文件会上传吗？', a: '不会。变调在浏览器里算完，导出的文件存在你的设备上。' },
        { q: '改调可以规避版权吗？', a: '不可以。变调并不会移除录音的版权，升调后的上传照样可能被认领或下架。改调适合用来配合自己的嗓音练习或唱卡拉OK；公开发布时，请使用你有权使用的音乐。' },
        {
          q: '手机上能用吗？',
          a: '能。用手指在波形上拖选。当前的 Chrome、Edge、Firefox 和 Safari，iPhone 和 Android 都能解常见格式。文件很长会更占内存，超过大约一小时时电脑更稳。',
        },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '变调并下载',
      screenshotsAlt: [
        '变调 拖放区：拖入文件或点击浏览，不会上传',
        '变调 工作区，文件已载入',
        '变调 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '调变了，长度不变',
          paragraphs: [
            '变调把调子移动 −12 到 +12 个半音，一次一格。两边各一个八度。文件长度不变。',
            '人声和单件乐器能承受的移动比密集混音更远。大幅移动会不自然。它不是绕版权的办法：录音还是同一段录音。',
          ],
        },
        {
          heading: '什么时候用这个滑块',
          paragraphs: [
            '长度不动，才是重点：',
          ],
          bullets: [
            '把卡拉 OK 伴奏挪到你唱得了的调。',
            '把人声挪一两个半音，和另一条 take 对上。',
            '声音设计里要改调，但片段的时间不能动。',
          ],
        },
        {
          heading: '速度是另一个控件',
          paragraphs: [
            '变速从 0.5× 到 2×，音高跟着速度走，像唱片一样。2× 大约高一个八度、长度减半。这一页不这么干。',
            '慢速加混响也是靠放慢文件把音高沉下去，还加一条尾音。想要 nightcore 或慢放的味道，去那一页。要同样的时长、新的调，留在这里。',
          ],
        },
      ],
    },
    'm4a-to-mp3': {
      cardLine: '把 iPhone 语音备忘和 AAC 文件转成随处可播的 MP3。',
      name: 'M4A 转 MP3',
      shortName: 'M4A 转 MP3',
      title: 'M4A 转 MP3 — AAC 音乐语音都能转，可选比特率',
      description: '把 iPhone 语音备忘、AAC 音乐转成 MP3，浏览器本地转换。64–320 kbps 任选；说话 128 kbps 就够，音乐用 320。批量打包 ZIP，不上传。',
      h1: 'M4A 转 MP3 — 把 M4A 转成 MP3',
      heroAlt: '把 iPhone 语音备忘或 AAC 转成 MP3',
      subtitle: '把 M4A 和 AAC 转成 MP3。就在浏览器里，不会上传。',
      intro: '语音备忘录和 AAC 录音常常是 M4A。拖入文件，选一个比特率，浏览器解码后存成 MP3。音频不会送到服务器。',
      usesHeading: 'M4A 转 MP3 的常见使用场景',
      uses: [
        'iPhone 备忘：把语音备忘录的 M4A 转成到处能放的 MP3。',
        'AAC 下载：把 AAC 音频转成老设备认的 MP3。',
        '音乐库统一：iTunes 曲目转 MP3，车载和旧播放器通吃。',
        '语音转写：说话用 128 kbps，转完交给[转写](/audio-to-text)。',
        '邮件附件：压到 25 MB 邮件上限以内。',
        '铃声前置：先转 MP3，再去[铃声制作](/ringtone-maker)剪 40 秒。',
      ],
      why: [
        {
          icon: 'convert',
          title: 'AAC 直解',
          text: '浏览器原生解码 AAC 音轨，不经过中间格式，转出来就是你要的 MP3 档位。',
        },
        {
          icon: 'layers',
          title: '批量 ZIP',
          text: '多个 M4A 一次转换，逐个转完打包成 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入 M4A', text: 'M4A 和 AAC（.m4a/.m4b/.aac）都支持，拖进虚线框或点击浏览，可多选。' },
        { name: '选比特率', text: '说话 128，音乐 320；64–320 kbps 任选。' },
        { name: '点「转为 MP3」', text: '本地解码、重编码一次，转换通常几秒。' },
        { name: '拿走文件', text: '单个直接下载，多个打包 ZIP。' },
      ],
      faqs: [
        { q: '可以一次转换多个 M4A 吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        { q: '可以在 iPhone、安卓或 Mac 上把 M4A 转成 MP3 吗？', a: '可以。转换在浏览器里完成，用什么设备都一样。M4A 里的 AAC，语音备忘录和大多数 AAC 下载都是这种。Apple Lossless（ALAC）放在 M4A 里时，浏览器经常解不开。先把它转成 AAC 或 WAV，再拿到这里。' },
        { q: 'MP4 视频呢？', a: '视频用 MP4 转 MP3。这一页只处理音频：M4A 和 AAC。' },
        { q: '转成 MP3 会损失音质吗？', a: 'MP3 是有损的。320 kbps 时，和原来的 AAC 相比，几乎听不出差别。想留着原文件，就继续保存 M4A。' },
        { q: '标签和封面会保留吗？', a: '不会。写出的 MP3 不带元数据，和 WAV 转 MP3 一样。歌名、艺人和封面不会带过去。' },
        { q: '文件会上传吗？', a: '不会。浏览器在本地解码 M4A、编码 MP3。音频留在你的设备上。' },
      ],
      dropHint: '拖入一个或多个 M4A 或 AAC，或点击浏览',
      exportLabel: '转为 MP3',
      screenshotsAlt: [
        'M4A 转 MP3 拖放区：拖入文件或点击浏览，不会上传',
        'M4A 转 MP3 工作区，文件已载入',
        'M4A 转 MP3 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '是语音备忘和 AAC，不是视频',
          paragraphs: [
            '这一页解码 M4A 或 AAC 文件，再编码成 MP3。选择器也接受 MP4。这个标签页解码不了文件时，提示不会说出编码名。视频文件去 [MP4 转 MP3](/mp4-to-mp3)。',
            'MP4 视频属于 MP4 转 MP3。那一页从画面里取出音轨。这一页只处理音频。',
          ],
        },
        {
          heading: 'MP3 保留了什么',
          paragraphs: [
            'MP3 是有损的。菜单是常见的比特率选择：',
          ],
          bullets: [
            '备忘录或歌曲要尽量接近 AAC，用 320 kbps。',
            '还会认真听的人声，用 192 kbps。',
            '文件主要是要小到能发出去，用 128 kbps。',
          ],
        },
        {
          heading: '标签不会复制',
          paragraphs: [
            '标题、歌手和封面不会带过去。写出的 MP3 没有元数据。播放器需要名字，就用 MP3 标签编辑补上。',
            '还需要原文件，就把 M4A 留着。转换不会上传文件。备忘录两端有静音，拿到 MP3 之后再在剪辑或剪切页裁。',
          ],
        },
      ],
    },
    'ogg-to-mp3': {
      cardLine: '让游戏片段或 Linux 录制的 OGG 文件在任何应用里都能播。',
      name: 'OGG 转 MP3',
      shortName: 'OGG 转 MP3',
      title: 'OGG 转 MP3 — Vorbis/Opus 都支持，免安装',
      description: '把 OGG 转成 MP3：Vorbis 和 Opus 两种编码都支持，游戏提取、浏览器录音都能转。64–320 kbps 任选，批量 ZIP，不上传。',
      h1: 'OGG 转 MP3 — 把 OGG 转成 MP3',
      heroAlt: '把 OGG 里的 Vorbis 或 Opus 转成 MP3',
      subtitle: '把 OGG 转成 MP3。就在浏览器里，不会上传。',
      intro: 'OGG 是容器，里面多半是 Vorbis，有时是 Opus。拖入文件，选一个比特率，浏览器解码后存成 MP3。音频不会送到服务器。',
      usesHeading: 'OGG 转 MP3 的常见使用场景',
      uses: [
        '游戏素材：把游戏提取的 OGG 音频转成剪辑软件认的 MP3。',
        '浏览器录音：网页录音应用吐出的 OGG 转成通用格式。',
        'Linux 录音：系统录音默认 OGG，转 MP3 发给别人。',
        '车载兼容：老车机不认 OGG，转 MP3 直接放。',
        '语音消息：部分应用的语音是 OGG/Opus，转 MP3 存档。',
        '批量整理：多个 OGG 一次转换，打包 ZIP。',
      ],
      why: [
        {
          icon: 'convert',
          title: 'Vorbis 和 Opus 都吃',
          text: '两种 OGG 内部编码都能解码；WhatsApp 语音那种裸 .opus 也有[专页](/opus-to-mp3)。',
        },
        {
          icon: 'layers',
          title: '批量 ZIP',
          text: '多个 OGG 共用一组设置，逐个转换后打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入 OGG', text: '.ogg 拖进虚线框或点击浏览，可多选。' },
        { name: '选比特率', text: '64–320 kbps 任选：音乐 320，语音 128。' },
        { name: '点「转为 MP3」', text: '本地解码重编码一次，几秒完成。' },
        { name: '拿走文件', text: '单个直接下载，多个打包 ZIP。' },
      ],
      faqs: [
        { q: '可以一次转换多个 OGG 吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        { q: 'OGG 是什么？', a: 'OGG 是容器。音乐文件里多半是 Vorbis，有些语音文件是 Opus。浏览器解得开，这一页就能转成 MP3。' },
        { q: '哪些浏览器能转 OGG？', a: 'Chrome 和 Firefox 能解 OGG 里的 Vorbis 和 Opus。Safari 能解 Opus，Vorbis 经常解不开。普通浏览器标签页播不了的文件，这一页也转不了。' },
        { q: '转成 MP3 会损失音质吗？', a: 'MP3 是有损的。320 kbps 时，差别对几乎所有人都很小。想留原文件，就继续保存 OGG。' },
        { q: '标签和封面会保留吗？', a: '不会。写出的 MP3 不带元数据。歌名、艺人和封面不会带过去。' },
        { q: '文件会上传吗？', a: '不会。浏览器在本地解码 OGG、编码 MP3。音频留在你的设备上。' },
      ],
      dropHint: '拖入一个或多个 OGG，或点击浏览',
      exportLabel: '转为 MP3',
      screenshotsAlt: [
        'OGG 转 MP3 拖放区：拖入文件或点击浏览，不会上传',
        'OGG 转 MP3 工作区，文件已载入',
        'OGG 转 MP3 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: 'OGG 里装的是 Vorbis 或 Opus',
          paragraphs: [
            'OGG 是一个容器。里面的音乐文件通常用 Vorbis，有些语音文件用 Opus。浏览器能解码时，这一页两种都转。',
            '这个标签页播不了的文件，这一页也解码不了。菜单默认 320 kbps。标签不会复制。',
          ],
        },
        {
          heading: '比特率，和你让出的东西',
          paragraphs: [
            'MP3 是有损的。320 kbps 下，大多数听感差别很小。需要原文件就留着 OGG：',
          ],
          bullets: [
            '要长期留着的音乐，用 320 kbps。',
            '语音文件或更小的副本，用 192 kbps。',
            '目的地只需要听得清说话，用 128 kbps。',
          ],
        },
        {
          heading: '.opus 文件是另一个页面',
          paragraphs: [
            '微信和 Telegram 的语音消息常常是 .opus 文件，或者 WebM 里的 Opus。那些属于 Opus 转 MP3。这一页管的是 OGG 容器。',
            '标题、歌手和封面不会复制。写出的 MP3 没有元数据。什么都不会上传。',
          ],
        },
      ],
    },
    'opus-to-mp3': {
      cardLine: '把 Opus 通话和下载文件转成所有播放器都支持的 MP3。',
      name: 'Opus 转 MP3',
      shortName: 'Opus 转 MP3',
      title: 'Opus 转 MP3 — WhatsApp 语音一键转换',
      description: '把 .opus 和 OGG/WebM 里的 Opus 转成 MP3：WhatsApp 语音、会议录音都能接。浏览器本地转换，说话用 128 kbps 就够。免费，批量 ZIP。',
      h1: 'Opus 转 MP3 — 把 Opus 转成 MP3',
      heroAlt: '把 WhatsApp 或 Telegram 的语音条转成 MP3',
      subtitle: '把 Opus 转成 MP3。就在浏览器里，不会上传。',
      intro: '语音消息和有些下载是 Opus：一个 .opus 文件，或装在 OGG、WebM 里。拖入文件，选一个比特率，浏览器解码后存成 MP3。音频不会送到服务器。',
      usesHeading: 'Opus 转 MP3 的常见使用场景',
      uses: [
        'WhatsApp 语音：把 .opus 语音消息转成随处能放的 MP3。',
        '会议录音：Discord 等应用的录音转成通用格式存档。',
        '游戏语音：语音应用导出的 Opus 转 MP3 保留。',
        '播客素材：远程嘉宾发来的 Opus 音轨转好再混。',
        '转写前置：转成 MP3 再交给[转写](/audio-to-text)更稳。',
        '批量转换：一包语音消息一次转完，打包 ZIP。',
      ],
      why: [
        {
          icon: 'convert',
          title: '.opus 直读',
          text: '支持裸 .opus，也支持 OGG/WebM 容器里的 Opus——两种来源都不用先改名再转。',
        },
        {
          icon: 'layers',
          title: '批量 ZIP',
          text: '几十条语音消息一次拖入，逐条转换后打包 ZIP。',
        },
      ],
      howTo: [
        { name: '拖入 Opus', text: '.opus 文件或含 Opus 的 OGG/WebM 拖进虚线框，可多选。' },
        { name: '选比特率', text: '说话 128 kbps 足够；换的是兼容性，不是时长。' },
        { name: '点「转为 MP3」', text: '本地解码重编码一次，几秒一条。' },
        { name: '拿走文件', text: '单条直接下载，多条打包 ZIP。' },
      ],
      faqs: [
        { q: '可以一次转换多个 Opus 吗？', a: '可以。多个文件共用本页上的设置，在这台设备上一个接一个转换，每个文件处理完就释放，再处理下一个。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        { q: 'Opus 是什么格式？', a: 'Opus 是一种音频编码。WhatsApp 和 Telegram 的语音消息经常是 .opus。它也会装在 OGG 和 WebM 里。这一页把它转成到处都能播的 MP3。' },
        { q: '哪些 Opus 文件能转？', a: '浏览器本来就能播的那些：.opus、带 Opus 的 OGG、带 Opus 的 WebM。Chrome、Firefox 和较新的 Safari 都可以。普通标签页是静音的文件，这一页也解不开。' },
        { q: '转成 MP3 会损失音质吗？', a: 'MP3 有损，Opus 也有损。320 kbps 已经是 MP3 的上限。语音消息用 128 kbps 就够。想留原文件，就继续保存 Opus。' },
        { q: '标签会保留吗？', a: '不会。写出的 MP3 不带元数据。歌名和艺人不会带过去。' },
        { q: '文件会上传吗？', a: '不会。浏览器在本地解码 Opus、编码 MP3。音频留在你的设备上。' },
      ],
      dropHint: '拖入一个或多个 Opus，或点击浏览',
      exportLabel: '转为 MP3',
      screenshotsAlt: [
        'Opus 转 MP3 拖放区：拖入文件或点击浏览，不会上传',
        'Opus 转 MP3 工作区，文件已载入',
        'Opus 转 MP3 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '只有部分播放器能打开的语音消息',
          paragraphs: [
            'Opus 是很多微信和 Telegram 语音消息里的编码，存成 .opus，也会装在 OGG 和 WebM 里。这一页把那种音频变成汽车、手机或老播放器能打开的 MP3。',
            '选择器收 .opus、OGG 里的 Opus，以及 WebM 里的 Opus。这个标签页播不了的文件，这一页也解码不了。菜单默认 192 kbps。',
          ],
        },
        {
          heading: '说话不需要 320',
          paragraphs: [
            '语音消息就是说话。按这个选比特率：',
          ],
          bullets: [
            '要发出去或留着的语音消息，128 kbps 就够。',
            '人声下面有音乐、你在乎音质，用 192 kbps。',
            '只有 Opus 文件是音乐、想让 MP3 尽量接近它时，才用 320 kbps。',
          ],
        },
        {
          heading: '标签，和 OGG 页',
          paragraphs: [
            '标题和歌手不会复制。写出的 MP3 没有元数据。其实是 Vorbis 音乐的 OGG，属于 OGG 转 MP3，那一页才是照这个容器命名的。',
            '什么都不会上传。语音消息两端有长静音，先转换，再裁剪。静音移除用在安静的背景音乐上不合适，但配上停顿很长的语音消息正合适。',
          ],
        },
      ],
    },
    'waveform-generator': {
      cardLine: '把任何音轨变成可分享的波形图，颜色自己定。',
      name: '音频波形图生成器',
      shortName: '波形图',
      title: '音频波形图生成器 — 在线免费导出波形 PNG',
      description: '把歌曲、语音或播客画成干净的波形图。选颜色、柱状或填充、尺寸，下载高清 PNG。免费，在浏览器里完成，适合封面和社交配图，文件不会上传到服务器。',
      h1: '音频波形图生成器 — 做一张波形图片',
      heroAlt: '把一首歌的波形存成 PNG',
      subtitle: '把音频画成波形图：颜色、尺寸、透明 PNG，都在你的设备上完成。',
      intro: '拖入一首歌、一条语音或一期播客，得到能当封面、视频底或社交配图的波形图。选镜像柱状或连续填充，定好颜色，按视频、方形或横幅尺寸下载 PNG。图是浏览器根据你打开的文件画的，不会上传。',
      usesHeading: '波形图生成器的常见使用场景',
      uses: [
        '播客封面：给单集做带波形的方图，不再是空白方图。',
        '视频叠加：导出透明 PNG 叠到视频画面上。',
        '社媒预告：新一期节目的波形预告图。',
        '演出背景：舞台大屏放当前曲目的波形。',
        '周边设计：T 恤和海报的波形图案。',
        '响度对比：两个版本的波形放一起对比分布。',
      ],
      why: [
        {
          icon: 'image',
          title: '透明 PNG 导出',
          text: '导出透明背景的波形 PNG，直接叠到视频、缩略图或海报上。',
        },
        {
          icon: 'sliders',
          title: '外观可调',
          text: '颜色、条宽等外观参数可调，配成你自己的风格。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '任意 MP3、WAV、M4A、OGG 或 FLAC。解码留在你的设备上。' },
        { name: '调外观', text: '选一个样式模板，或自己定样式和颜色。只要其中一段时，填开始和结束时间。预设有 1920×1080、方形、社交图和横幅。' },
        { name: '下载 PNG', text: '预览和导出是同一张图。预设尺寸按两倍分辨率下载，放大后仍然清楚。' },
      ],
      faqs: [
        { q: '音频会被上传吗？', a: '不会。浏览器在本地解码，再用 Canvas 把图画出来，没有上传这一步。页面加载完之后断网也能用。' },
        { q: 'PNG 够清晰吗？', a: '预设尺寸按两倍像素导出——1920×1080 的封面下载下来是 3840×2160。PNG 无损。自定义尺寸超过大约两百万像素时按 1 倍导出，避免标签页把内存用光。' },
        { q: '能在这里剪音频吗？', a: '不能。这一页只画图。要剪切或裁掉一段，先用音频剪辑，还需要图的话再回来。' },
        { q: '这和频谱图是一回事吗？', a: '不是。波形图看的是响度随时间的变化，就是播放器里那条形状。频谱图看的是有哪些频率。要看频率，用频谱图生成器。' },
        { q: '能导出透明背景吗？', a: '能。保持「透明背景」打开，PNG 就没有底色，可以叠到视频或别的图上。关掉之后会铺上你选的纯色背景。' },
        { q: '手机上能用吗？', a: '可以。窄屏上控件会竖着排，下载按钮伸手就能点到。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。' },
      ],
      dropHint: '拖入音频文件，或点击选择',
      exportLabel: '下载 PNG',
      screenshotsAlt: [
        '音频波形图生成器：还没载入文件或输入时的页面',
        '音频波形图生成器：读取文件或点击之后',
        '音频波形图生成器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '是一张响度的图，不是一次编辑',
          paragraphs: [
            '波形生成器把响度画成随时间变化的图：镜像的柱子，或者填充的形状，颜色由你选。下载的是 PNG。预设尺寸按标注像素的两倍导出，所以 1920×1080 的封面下载下来是 3840×2160。',
            '自定义尺寸超过约两百万像素时按 1× 导出，标签页才不会内存不够。PNG 是无损的。这一页不裁、不淡化，也不增强音频。',
          ],
        },
        {
          heading: '大家会下载的形状',
          paragraphs: [
            '按图片要放的位置选画幅：',
          ],
          bullets: [
            '视频尺寸，做背景或片尾卡。',
            '方形，做播客或歌曲封面。',
            '宽横幅，做页头。要把 PNG 叠在视频或另一张图上，就把背景留成透明。',
          ],
        },
        {
          heading: '它不是频谱图',
          paragraphs: [
            '波形是音乐播放器画出来的那种形状。频谱图显示的是有哪些频率。要那张图，用频谱图生成器。',
            '想先切文件，用音频剪辑，再回来做图。PNG 不能放回歌里播放。把图片写进 WAV 是图片转音频，反方向。',
          ],
        },
      ],
    },
    'spectrogram-generator': {
      cardLine: '看到歌曲、录音或鸟叫里的频率成分。',
      name: '频谱图生成器',
      shortName: '频谱图',
      title: '频谱图生成器 — 在线把音频转成频谱图',
      description: '把音频画成频谱图并下载 PNG。对数或线性频率轴、色表、dB 范围都可调。免费，在浏览器里完成，文件不会上传。',
      h1: '频谱图生成器 — 查看录音里的频率',
      heroAlt: '把一首歌的频率图下载成 PNG',
      subtitle: '看见一首歌或一段录音里有哪些频率，再把图下载下来。计算在你的设备上。',
      intro: '频谱图把时间画成横轴、频率画成纵轴：人声、低音，以及藏在声音里的图，都会出现在上面。拖入文件，选对数或线性坐标，下载 PNG。FFT 在浏览器里算，不会上传。',
      usesHeading: '频谱图生成器的常见使用场景',
      uses: [
        '均衡前侦察：看低音、人声、嘶声各分布在哪一段。',
        '频谱彩蛋：有人把图或文字藏进频谱——一看便知。',
        '降噪诊断：看噪声是宽频嘶声还是窄频嗡声，再选工具。',
        '老磁带检查：看频响缺了哪一段。',
        '教学演示：给学生看不同乐器的频率分布。',
        '版本比对：两版音频的频谱放一起对比来源。',
      ],
      why: [
        {
          icon: 'image',
          title: '频率一目了然',
          text: '横轴时间、纵轴频率、亮度代表能量——音频的全部内容一张图看完。',
        },
        {
          icon: 'download-simple',
          title: 'PNG 下载',
          text: '调好显示参数后导出 PNG，直接进文档或幻灯片。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '任意 MP3、WAV、M4A、OGG 或 FLAC。解码留在你的设备上。' },
        { name: '调显示', text: '音乐一般用对数频率。可以压低最高频率。藏着的图太暗或太亮时，改 dB 下限和上限。只要一段的话，收一下时间范围。' },
        { name: '下载 PNG', text: '预设尺寸按两倍分辨率下载。这张图不是音频，不能把 PNG 播回成那首歌。' },
      ],
      faqs: [
        { q: '音频会被上传吗？', a: '不会。浏览器在这个标签页里解码并做 FFT，没有上传。页面加载完之后断网也能用。' },
        { q: '颜色代表什么？', a: '每一列是一个时刻。高度是频率，高音在上面。颜色越亮，能量越大。Viridis、Inferno 和灰度是同一份数据、不同色表。dB 下限和上限决定什么算静、什么算响。' },
        { q: '能把图变回音频吗？', a: '不能。PNG 只是电平的图，不是波形。要听还是听原文件。想把一张图写进音频，用「图片转音频」，再把得到的 WAV 拿到这里看。' },
        { q: '这和波形图生成器有什么不同？', a: '波形图是响度随时间的变化，就是播放器里那条形状。频谱图是有哪些频率。做封面用波形图。要看频率或把藏着的东西显出来，用这一页。' },
        { q: '手机上能用吗？', a: '可以。窄屏上控件竖着排，下载按钮伸手能点到。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。文件长的时候每一列都要做一次 FFT，会稍等一会儿。' },
        { q: '为什么有的歌里藏着一张图？', a: '有些曲子会把能量放在选定的频率上，画出一张图，Aphex Twin 是常被提到的例子。图太淡就把 dB 上限抬高，并保持对数轴。这一页只负责显示，不负责画进去。画进去用「图片转音频」。' },
      ],
      dropHint: '拖入音频文件，或点击选择',
      exportLabel: '下载 PNG',
      screenshotsAlt: [
        '频谱图生成器：还没载入文件或输入时的页面',
        '频谱图生成器：读取文件或点击之后',
        '频谱图生成器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '频率随时间展开，存成 PNG',
          paragraphs: [
            '每一列是一个瞬间。高度是频率，高音在上。颜色越亮，能量越大。Viridis、Inferno 和灰色是同一份数据换了刻度。dB 下限和上限决定什么算安静、什么算响。',
            '这张图是这个标签页里画出的文件 FFT。它不是音频。PNG 不能放回歌里播放。',
          ],
        },
        {
          heading: '怎么读出藏着的图',
          paragraphs: [
            '有些作品会把能量放在特定频率上，画出一张图。这一页能把它显示出来，但它不负责制作：',
          ],
          bullets: [
            '看普通音乐，保留对数轴。它会把低频拉开。',
            '藏着的图很淡，就抬高 dB 上限。',
            '只想要文件里的一段，就缩短时间范围。',
          ],
        },
        {
          heading: '波形图，以及反过来的玩法',
          paragraphs: [
            '波形生成器画的是响度随时间的变化，适合做封面。这一页画的是有哪些频率。',
            '要做一段 WAV，让频谱图显示出你的图片或一行短字，用图片转音频，再把那个 WAV 在这里打开。对数频率，上限放在 −20 dB 左右。图形大约落在 400 Hz 到 12 kHz 之间。这一页只负责显示。',
          ],
        },
      ],
    },
    'image-to-audio': {
      cardLine: '把一张图片或一行文字藏进 WAV 频谱里。',
      name: '图片转音频',
      shortName: '藏图',
      title: '图片转音频 — 在线做频谱图，图或文字都行',
      description: '把一张图或一行字写成 WAV，用频谱图就能看出来。免费，在浏览器里完成，文件不会上传。',
      h1: '图片转音频 — 把一张图片变成声音',
      heroAlt: '把频谱图图片还原成 WAV',
      subtitle: '把一张图或一行字写进 WAV 的频率里。频谱图会把它显示出来。',
      intro: '输入一行字，或拖入一张图。这一页把那个形状写进 WAV 的频率，就是歌里藏图的那种做法。它不是一首歌，也不是把字读出来。用频谱图生成器打开这个 WAV 就能看见。不会上传。',
      usesHeading: '图片转音频的常见使用场景',
      uses: [
        '频谱藏字：把名字或一句话藏进频谱，用[频谱图生成器](/spectrogram-generator)能读出来。',
        '涂鸦成音：把简单的标志或涂鸦变成一小段音调画。',
        '教学演示：给学生演示图像即声音的原理。',
        '艺术创作：把视觉作品转成对应的声景。',
        '彩蛋制作：给视频或歌做可听可看的双关彩蛋。',
        '耳朵识字：训练耳朵分辨不同形状的音色差异。',
      ],
      why: [
        {
          icon: 'image',
          title: '图就是频谱',
          text: '生成的音频用[频谱图生成器](/spectrogram-generator)打开，就能看到你画或打的字。',
        },
        {
          icon: 'download-simple',
          title: 'WAV 直接下载',
          text: '生成的是标准 WAV，任何播放器都能放。',
        },
      ],
      howTo: [
        { name: '打字或拖图', text: '最多 32 个字，或拖入 PNG、JPG、WebP。预览就是将要写进去的图，亮的地方频率更响。' },
        { name: '下载 WAV', text: '得到 44.1 kHz、16 位的 WAV。听起来是啁啾和噪声，不是把图念出来。' },
        { name: '去看频谱', text: '用频谱图生成器打开这个 WAV。频率轴用对数，上限大约 −20 dB。形状大概落在 400 Hz 到 12 kHz。' },
      ],
      faqs: [
        { q: '图片会被上传吗？', a: '不会。浏览器在这个标签页里画字或画图，再写成 WAV，没有上传。页面加载完之后断网也能用。' },
        { q: '下载下来是什么文件？', a: '单声道 WAV，44.1 kHz，16 位 PCM，只有几秒。不是 MP3。图藏在频率里，压成低比特率 MP3 会把形状抹糊。' },
        { q: '听起来会像那张图或那句话吗？', a: '不会。这里没有语音合成，也没有音乐生成。亮的像素变成叠在一起的音。要读它，得看频谱图。' },
        { q: '这和频谱图生成器有什么不同？', a: '频谱图生成器是把你已有的音频画出来。这一页相反：它造出一段音频，让频谱图显示你的图或你的那一行字。波形图只看响度，藏着的形状在那里不明显。' },
        { q: '手机上能用吗？', a: '可以。打字、选一张照片、下载。Chrome、Edge、Firefox 和 Safari 的桌面版和移动版都能用。太细的照片会被缩小，好让文件保持很短。' },
        { q: '这是密码吗？', a: '不是。谁把这个 WAV 打开成频谱图，谁都能看见那张图。它是画在声音里的图，不是加密。' },
      ],
      dropHint: '或拖入一张图片',
      exportLabel: '下载 WAV',
      screenshotsAlt: [
        '图片转音频：还没载入文件或输入时的页面',
        '图片转音频：读取文件或点击之后',
        '图片转音频 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '把一张图写进频率',
          paragraphs: [
            '最多输入 32 个字符，或者拖入 PNG、JPG、WebP。页面会把这个形状写进一段单声道 WAV 的频率里：44.1 kHz、16 位、几秒长。亮的像素会变成更响的频率。',
            '它不是歌，也不是说话。你会听到啾啾声和噪声，不是把字念出来。照片太细会被缩小，文件才不会太长。',
          ],
        },
        {
          heading: '怎么看到你写的东西',
          paragraphs: [
            '这个形状在普通波形上根本看不见。把 WAV 放到频谱图生成器里打开：',
          ],
          bullets: [
            '对数频率，上限放在 −20 dB 左右。',
            '图形大约落在 400 Hz 到 12 kHz 之间。',
            '留着 WAV。低比特率的 MP3 可能把形状抹花。',
          ],
        },
        {
          heading: '不是密码，也不是频谱图页',
          paragraphs: [
            '任何人打开这个 WAV 的频谱图，都能看到图。它是画在声音里的画，不是加密。',
            '频谱图生成器画的是你手上已有音频的图。这一页是反过来做一段音频，让那张图显示出你的图片或那行字。波形生成器只显示响度，藏着的形状在那里看不出来。',
          ],
        },
      ],
    },
    'mp3-tag-editor': {
      name: 'MP3 标签编辑器',
      shortName: '标签编辑器',
      title: 'MP3 标签编辑器 — 在线修改 ID3 标签与封面，免费',
      description:
        '在浏览器里直接修改 MP3 标签：标题、艺术家、专辑、年份、音轨号和封面图。文件全程留在本地，绝不上传。免费，无需注册。',
      h1: 'MP3 标签编辑器 — 编辑 ID3 标签',
      heroAlt: '修改 MP3 的标题、歌手和封面',
      subtitle: '一分钟修好 MP3 的标题、艺术家、专辑和封面 —— 全程在浏览器完成，文件不上传。',
      intro:
        '一首 MP3 里装着两样东西：音乐本身，和播放器显示的那张"信息卡"——标题、艺术家、专辑、年份、封面。信息卡错了或缺失，从手机到车载音响都只会显示"未知艺术家"或 Track 01。把文件拖进来，改好字段再保存：音频数据逐字节原样复制，不会离开你的设备。',
      usesHeading: 'MP3 标签编辑器的常见使用场景',
      uses: [
        '修标签：修好下载音乐里"未知艺术家"、封面丢失的问题，让播放器正常显示。',
        '发布规范：给播客单集或小样填上规范的标题、封面和署名。',
        '隐私清理：分享录音前，清掉残留的设备和位置信息。',
        '专辑统一：整张专辑的封面和曲风字段统一改。',
        '播客编号：单集标题加集数和节目名，播客 App 排序正确。',
        '无损保留：只改标签字节，音频数据逐字节不动。',
      ],
      howTo: [
        { name: '拖入 MP3', text: '把文件拖进来或点击选择。现有标签和封面会在你的设备上读取并显示在表单里。多首 MP3 可以共用艺人、专辑、年份、流派和封面。曲名和曲序留在每一首上。两首及以上打成一个 ZIP。' },
        { name: '修改字段', text: '填写正确的标题、艺术家、专辑、年份和音轨号，并可用 JPG 或 PNG 图片添加或替换封面。' },
        { name: '保存 MP3', text: '点击"保存 MP3"下载打好标签的文件。音频数据原样保留，被重写的只有周围的信息卡。' },
      ],
      faqs: [
        { q: '可以给整张专辑打标签吗？', a: '可以。一次放多首 MP3。艺人、专辑、年份、流派和封面写到每一首，曲名和曲序留在每一行。曲序空着会从 1 开始。一个文件单独下载，两首及以上打成一个 ZIP。音频仍然按字节原样复制。' },
        { q: '我的 MP3 会被上传到服务器吗？', a: '不会。文件通过浏览器自带的 FileReader API 打开，就在当前标签页里完成改写。加载页面后断开 Wi-Fi，编辑器照样能用。整个过程不存在上传这一步。' },
        { q: '修改标签会影响音质吗？', a: '不会。标签数据存放在文件头部的独立区块里，MPEG 音频帧逐字节原样复制，声音完全一致。保存后的文件甚至可能略小一点，因为旧标签区块及其填充空间没有保留。' },
        { q: '它和 MP3 编辑器有什么区别？', a: 'MP3 编辑器是对声音本身做剪切、拼接，需要解码再编码。这个页面完全不碰声音，只重写围绕它的信息卡。要改音乐用那个，要给音乐贴标签用这个。' },
        { q: '它做不到什么？', a: '目前只支持 MP3——FLAC、M4A 和 WAV 使用不同的标签格式，本页暂不支持。一次可以放多首 MP3：艺人、专辑、年份、流派和封面写到每一首，曲名和曲序留在每一行。另外保存会重写整个标签区块，原标签里的播客章节或特殊自定义字段不会保留，保留的是常见字段。' },
        { q: '为什么车载音响还显示"Track 01"？', a: '很多车机忽略标签、直接用文件名，而且大多会缓存旧信息，需要重新插入 U 盘或重新扫描。在这里保存（文件会写成车机兼容性最好的 ID3v2.3），再把文件重命名为"01 - 歌名.mp3"这类格式，然后重新扫描。' },
        { q: '中文（日文/韩文/阿拉伯文）标签显示乱码，能修吗？', a: '可以。乱码通常是旧标签用了单字节编码而不是 Unicode。在这里重新输入正确文字并保存：文件会改写为 UTF-16 编码的 ID3v2.3，中日韩、阿拉伯、西里尔、印地文字都能在现代播放器里正常显示。' },
        { q: '手机上能用吗？', a: '可以。最新版 Chrome、Safari、Firefox 和 Edge 都支持，桌面和手机均可。保存时会像普通下载一样交给浏览器；iPhone 上 Safari 会存到"文件"App。全部处理都在本地进行，页面打开后慢网也能用。' },
      {
        q: '能在 Claude 或 Cursor 里改本地 MP3 标签吗？',
        a: '这个网页在浏览器里改 ID3，包括封面，不重新编码。/mcp 用 ffmpeg 写入 title、artist、album、date、genre、track 和 comment，音频原样复制，写成 ID3v2.3。它不改封面。聊天应用仍会看到路径。',
      }],
      dropHint: '把一个或多个 MP3 拖到这里，或点击选择文件',
      exportLabel: '保存 MP3',
      screenshotsAlt: [
        'MP3 标签编辑器：还没载入文件或输入时的页面',
        'MP3 标签编辑器：读取文件或点击之后',
      ],
      sections: [
        {
          heading: '换的是标签，不是音频',
          paragraphs: [
            '标签编辑器写入 ID3v2.3，并复制音频帧。它不解码音频。',
            '字段有标题、歌手、专辑、专辑歌手、年份、流派、音轨号、碟号、作曲、注释，以及一张 JPG 或 PNG 封面。',
          ],
        },
        {
          heading: '能设什么，不能设什么',
          paragraphs: [
            '可以一次改几个 MP3，也可以只改一个。只处理常见字段。歌手、专辑、年份、流派和封面套用到每个文件。标题和音轨号留在各自文件上：',
          ],
          bullets: [
            '标题、歌手、专辑和其他日常字段，加上封面。',
            '不支持 FLAC、M4A 或 WAV。这些标签格式不在这里写。',
            '不支持播客章节或不常见的自定义帧。保存会重写整个标签块，那些帧不会带过去。',
          ],
        },
        {
          heading: '为什么车里还显示 Track 01',
          paragraphs: [
            '很多车机忽略标签，退回用文件名，而且大多数会缓存旧信息，直到你重新导入 U 盘或重新扫描。把文件改名成类似 01 - 歌名.mp3，再重新扫描。',
            '剪切、淡化或变速是 MP3 编辑器，它会解码再编码。这一页从不碰声音。改音乐用那一页，贴标签用这一页。',
          ],
        },
      ],
    },
    compressor: {
      cardLine: '把响的峰值压下来，把轻的字抬上去，整段并不会变得更响。',
      name: '电平压缩',
      shortName: '电平压缩',
      title: '电平压缩 — 压平忽大忽小的音量，峰值不动',
      description:
        '把忽大忽小的录音压平：响的压下来，轻的抬上去，导出时峰值拉回原位。宽带压缩，阈值 −18 到 −36 dB、压缩比最高 8:1。口播 30–50% 通常就够。浏览器本地处理，不上传。',
      h1: '电平压缩 — 把忽大忽小拉均匀',
      heroAlt: '压住录音里的峰值，让轻声也能听清',
      subtitle: '宽带压缩器，收掉音量起伏。文件的峰值还停在原来的位置。',
      intro:
        '一句喊、一句耳语的语音备忘，要的是压缩，不是音量旋钮。这一页用一段宽带压缩：响的地方被压低，轻的地方被抬起，导出时再把峰值拉回你开始时的峰值。全部在浏览器里完成，文件不会上传。',
      usesHeading: '电平压缩的常见使用场景',
      uses: [
        '语音备忘：对着手机时近时远的音量拉匀。',
        '访谈平衡：嘉宾比主持人响很多，把峰值压住。',
        '人声坐前排：副歌跳出主歌时，让人声稳定坐在前面。',
        '会议记录：说话忽轻忽重的会议录音压匀。',
        '课程录音：讲师走动时音量飘，压到一致。',
        '发布前收动态：响度对齐前先收窄动态，落点更稳。',
      ],
      why: [
        {
          icon: 'volume',
          title: '管动态，不管大小',
          text: '宽带压缩：阈值 −18 到 −36 dB、最高 8:1。响的压下来、轻的相对抬上去；导出时峰值拉回源文件峰值。',
        },
        {
          icon: 'file',
          title: '它不是文件压缩',
          text: '这一页改的是音量起伏，不是文件体积。要更小的 MP3，去[音频压缩](/compress-audio)；要 LUFS 对齐，去[响度计](/loudness-meter)。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '任意 MP3、WAV、M4A、OGG 或 FLAC 拖进虚线框。解码留在你的设备上。' },
        { name: '设定压缩量', text: '拖动「压动态」滑杆：口播多数 30–50% 就够。100% 是重压：阈值 −36 dB，压缩比 8:1。' },
        { name: '试听并导出', text: '先听结果，再导出 MP3 或 WAV。峰值会被放回原来的峰值，不超过满刻度。' },
        { name: '手机也能用', text: '滑杆和导出都支持触屏，几分钟的口播在较新的手机上一两秒就能导出。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。压缩器是浏览器标签页里的 Web Audio 动态处理器。页面加载完之后可以断网，导出照样能用。' },
        { q: '声音会变成什么样？', a: '一段宽带压缩（阈值从 −18 dB 到 −36 dB，压缩比从略高于 1:1 到 8:1）。压缩器本身没有自动补偿增益，所以这一页会把导出的峰值拉回源文件峰值；源文件比这更热时，则停在大约 −0.2 dBFS。WAV 保持这次电平变化干净。MP3 会重新编码一次。' },
        { q: '这会把文件变小吗？', a: '不会。把文件变小是用更低比特率重新编码，那是「音频压缩」那一页。这一页改的是动态，比特率留给导出格式去选。' },
        { q: '这和音量加大、归一化有什么不同？', a: '音量加大把整个文件乘上一个倍数。归一化把所有采样抬高，直到最响的采样碰到目标。两者都不会改变响和轻之间的差距。这一页把差距收窄。它是一段，不是多段人声链，也不会去掉噪声。' },
        { q: '能把安静的房间底噪消掉吗？', a: '不能。抬起轻的部分时，嘶声和房间底噪也会被抬起。如果问题是噪声，压缩会让它更明显。把静音剪掉，或者重新录。' },
        { q: '手机上能用吗？', a: '能。滑杆和导出在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。几分钟的口播，在较新的手机上大约一两秒就能导出。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '压动态并下载',
      screenshotsAlt: [
        '电平压缩 拖放区：拖入文件或点击浏览，不会上传',
        '电平压缩 工作区，文件已载入',
        '电平压缩 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '管动态，不管文件大小',
          paragraphs: [
            '电平压缩器是一个全频段压缩器。阈值从 −18 dB 到 −36 dB，压缩比从略高于 1:1 到 8:1。响的时刻压下来，轻的时刻相对抬上去。',
            '压缩器内部没有补偿增益。之后导出会整体缩放，让峰值对上源文件的峰值；源文件本来就比 −0.2 dBFS 更热，就对到 −0.2 dBFS。它不会把文件变小。要更小的 MP3，去音频压缩页。',
          ],
        },
        {
          heading: '它能修什么，不能修什么',
          paragraphs: [
            '它缩小响亮和安静之间的差距。它只有一个频段，不是一条人声链：',
          ],
          bullets: [
            '语音备忘里一句在喊、下一句在耳语。',
            '混音里响的打击声盖住了轻的句子，你想让它们靠近。',
            '它不是降噪器。抬起安静段，也会抬起底噪和房间声。',
          ],
        },
        {
          heading: '它和音量旋钮有什么不同',
          paragraphs: [
            '音量增强把整个文件乘大。标准化把整体抬到最响的采样碰到峰值。两者都让响亮和安静的差距保持不变。这一页是缩小那个差距。',
            'WAV 保留电平变化，不多一代有损编码。MP3 再编码一次。问题只是文件小声、动态本身没问题，就用音量增强。',
          ],
        },
      ],
    },
    echo: {
      cardLine: '加上能数得清的重复：一记短回声，或隔得更开的一声，不是一片混响。',
      name: '给音频加回声',
      shortName: '给音频加回声',
      title: '音频加回声 — 在线加回声效果，延迟可调',
      description: '给音频加可数的回声：延迟 0.01–0.8 秒，重复强度自由调，湿声按 45% 混入。一记短回声或间隔很久的一声都行。浏览器本地处理，不上传。',
      h1: '给音频加回声',
      heroAlt: '给一段录音加上延迟和重复',
      subtitle: '按你设定的间隔出现一声一声的重复，从很短的一记到 0.8 秒。',
      intro: '回声是隔一段时间才回来的一份拷贝，间隔你数得出来。延迟从百分之几秒到 0.8 秒，重复强度决定下一次还剩多少。湿声固定混在 45%。延迟为 0 时文件不动。处理留在浏览器里。',
      usesHeading: '音频加回声的常见使用场景',
      uses: [
        '播客音效：一记短回声强调一句话，数得清的那种。',
        '游戏素材：给提示音加空间延迟，几声递减。',
        '人声装饰：人声尾部加几声递弱的重复。',
        '恐怖氛围：间隔很开的一声回声，气氛立刻不一样。',
        '乐器点缀：吉他或鼓的单击加回声，铺出空间。',
        '转场设计：两段之间用一声远回声过渡。',
      ],
      why: [
        {
          icon: 'repeat',
          title: '延迟你数得出来',
          text: '0.01 到 0.8 秒自由设定：短的像拍一下，长的像空屋子里喊一声。重复强度决定每一声还剩多少。',
        },
        {
          icon: 'sliders',
          title: '湿声固定 45%',
          text: '干声原样保留，回声按 45% 混入——原文件的内容一点不动，加的只是那份拷贝。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频拖进虚线框，或点击浏览。在你的设备上解码。' },
        { name: '设「延迟」和「重复强度」', text: '延迟 0.01–0.8 秒：短回声数得清，长回声像空屋。重复强度决定每一声递减多少。' },
        { name: '点「加上回声」', text: '湿声按 45% 混入干声；延迟设为 0 时文件不动。' },
        { name: '拿走文件', text: '导出 MP3 或 WAV，文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。回声是浏览器标签页里的 Web Audio 延迟。页面加载完可以断网，导出照样能用。' },
        { q: '这个效果实际做了什么？', a: '信号被延迟你设定的时间，再以 45% 混回去。每一份拷贝再按你设的重复强度送回延迟，最高 0.55，所以一次比一次轻，不会啸叫。WAV 保持这次混合。MP3 会重新编码一次。' },
        { q: '这和慢放加混响有什么不同？', a: '慢放加混响是一片糊开的空间：速度变了，音高跟着掉，尾音是房间反射搅在一起。这一页保持原来的速度和音高，加上能逐声听清的拷贝。' },
        { q: '为什么重复不会越来越响？', a: '反馈上限是 55%，渲染出来的尾音最长 4 秒。够听清好几声。它不会变成自己振荡的噪音。' },
        { q: '可以只给一首歌的一部分加回声吗？', a: '可以。在波形上选出那一段并保留选区。重复加在你导出的部分上，不会加到文件其余地方。' },
        { q: '手机上能用吗？', a: '能。两个滑杆和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '加上回声',
      screenshotsAlt: [
        '给音频加回声 拖放区：拖入文件或点击浏览，不会上传',
        '给音频加回声 工作区，文件已载入',
        '给音频加回声 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '是一份份分开的副本，不是一团糊',
          paragraphs: [
            '回声把信号复制一份，延迟你设定的时间，从百分之几秒到 0.8 秒，再以 45% 混回去。每份副本又按你设的重复量再次进入延迟。',
            '反馈上限是 0.55，渲染出的尾音上限是 4 秒，所以重复会越来越轻，不会啸叫。延迟设成 0，文件原样不动。速度和音高保持不变。',
          ],
        },
        {
          heading: '两个滑块怎么用',
          paragraphs: [
            '延迟是第一份副本之前的间隔。重复是每份副本有多少再送回去：',
          ],
          bullets: [
            '短延迟，做一种还能听成第二下的拍击。',
            '更长的延迟，仍然在 0.8 秒以内，想一句一句数清副本时用。',
            '只选一段，让回声落在一句话上，而不是整个文件。',
          ],
        },
        {
          heading: '回声不是慢速加混响',
          paragraphs: [
            '慢速加混响会让音高跟着速度沉下去，还把尾音抹进一个房间。这一页保持原来的时间，加上你能分开听见的副本。',
            '给一个文件的开头或结尾做淡化，是淡化页。把两首歌叠在一起，是音频合并。这两个都不是回声。',
          ],
        },
      ],
    },
    'add-reverb': {
      cardLine: '给干声加上房间的感觉，从一点到全湿。',
      name: '加混响',
      shortName: '混响',
      title: '音频加混响 — 在线给录音加房间感，湿度可调',
      description: '给人声或乐器加房间感：一个湿度滑杆 0–100%，导出前可试听。浏览器本地渲染，免费不上传，导出 MP3 或 WAV。',
      h1: '音频加混响 — 给录音加上房间感',
      heroAlt: '干声得到房间的反射',
      howToIntro: '真实文件上的湿度滑杆',
      subtitle: '一个湿滑杆，从全干到小厅。导出前就能听到效果。',
      intro: '混响是房间在声源停止后留下的声音：反射叠在一起再衰减。这一页给你拖进来的文件套上一个合成的房间，一个湿滑杆从干到湿。波形上就能试听混响，处理留在浏览器里。',
      usesHeading: '音频加混响的常见使用场景',
      uses: [
        '人声归位：让语音备忘或配音待在一个空间里，不再像贴上去的。',
        '游戏音效：给提示音加纵深，再进剪辑。',
        '干声加空间：清唱或干声加房间，变成录在房间里的感觉。',
        '播客转场：一句话加混响做段落分隔。',
        '乐器氛围：干吉他加一点房间，不再干瘪。',
        '氛围渲染：大湿度长房间，做出空旷或恐怖感。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '一个湿度滑杆',
          text: '0–100% 控制房间感的多少：小湿度像卧室，大湿度像礼堂。导出前可以试听。',
        },
        {
          icon: 'lock-simple',
          title: '本地渲染',
          text: '混响在你的浏览器里计算，音频不上传；导出 MP3 或 WAV。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设湿度', text: '湿度滑杆 0–100%：加多少房间感自己定，导出前先试听。' },
        { name: '点「加混响」', text: '本地渲染混响并导出。' },
        { name: '拿走文件', text: 'MP3 或 WAV，文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '我的音频会上传吗？', a: '不会。文件在浏览器里解码，混响用 Web Audio API 渲染。页面加载完之后，解码和 WAV 导出不需要网络。' },
        { q: '文件会发生什么？', a: '湿滑杆把你的干声和一个合成的房间交叉淡化：大约 2.2 秒指数衰减的立体声反射。导出会按你选的码率重编码一次 MP3，或者无损写 WAV。混响尾巴会拉长文件，100% 湿度时导出比源文件长约 2.2 秒。' },
        { q: '这是真的音乐厅或教堂吗？', a: '不是，这点要说清楚。这是一个 2.2 秒衰减的合成房间，不是用真实空间采样做的卷积。要叫得出名字的空间，你需要桌面 DAW 或卷积插件。这一页做的事，一两秒就在浏览器里完成。' },
        { q: '和回声有什么不同？', a: '[回声](/echo)把信号按你选的延迟重出一遍遍，一个一个数得出来。混响是密得数不清的反射，化成一片衰减。它们都加空间；想要减速加空间的组合，去[慢速加混响](/slowed-reverb)。' },
        { q: '手机上能用吗？', a: '能。滑杆、播放和导出都能触摸操作，导出之前就能试听，不会白导一次。' },
        { q: '人声加多少湿？', a: '从 20% 到 30% 起。干到每个字都清楚，湿到贴麦的边缘变软。音乐垫和音效在 40% 到 60% 就开始发远。' },
        { q: '能去掉混响吗？', a: '这一页不能，浏览器里也没人能诚实地做到。反射一旦录进文件，把它和声源分开是去混响研究的课题，不是滑杆倒回去。录的时候预防：一间衣柜、一条毯子、麦克风贴近嘴。' },
      ],
      dropHint: '拖入一个音频文件，或点击浏览',
      exportLabel: '加混响',
      screenshotsAlt: [
        '加混响 拖放区：拖入文件或点击浏览，不会上传',
        '加混响 工作区，文件已载入',
        '加混响 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '房间混响，不是采样大厅',
          paragraphs: [
            '这一页背后的脉冲响应是合成的：衰减的立体声噪声，2.2 秒尾音，形状就是小房间会在声音上盖的那层。所以页面是即时的，离线也能用。也是因为这个房间没有名字；这个文件里没有威斯敏斯特大教堂。',
            '湿声滑块就是你的干声和那个房间之间的普通交叉淡化。0% 时，导出和原文件逐采样一致。最后一个采样之后的衰减还会继续响，所以导出会比源文件长约 2.2 秒。',
          ],
          table: {
            headers: ['湿声', '会听到什么', '适合'],
            rows: [
              ['10 %', '紧、几乎听不出来的房间。', '离麦克风太近的播客人声。'],
              ['25 %', '人声落进一个小房间，不再像贴上去的。', '人声、语音备忘、拟音。'],
              ['60 %', '被洗开、变远；声源退到空间后面。', 'pad、幽灵感、转场。'],
              ['100 %', '全是房间，没有声源。一团还留着旋律的混响。', '声音设计、质感铺底。'],
            ],
          },
        },
        {
          heading: '混响还是回声',
          paragraphs: [
            '两个效果都在加空间，失败的方式不一样。回声给你分离的重复，延迟由你选，听起来像叠在声音上的一层效果。混响给你成千上万个反射，密到只能听成声音发生时的那个房间。',
            '能数清重复次数的，用 [回声页](/echo)。想让听的人忘了这段录音本来是干的，用这一页。活是给 TikTok 那种慢下来的声音加空间，[慢速混响](/slowed-reverb) 一次做两个动作。',
          ],
        },
        {
          heading: '先混响，最后调响度',
          paragraphs: [
            '混响会改变文件的平均电平，所以要在任何响度处理之前设好。先在这里加房间，再用 [响度表](/loudness-meter) 对着目标检查结果，最后才发布。',
          ],
        },
      ],
    },
    'audio-distorter': {
      cardLine: '把干净的录音推成轻微过载，或推成硬削波。',
      name: '音频失真',
      shortName: '失真',
      title: '音频失真 — 从轻过载到硬削波，强度可调',
      description: '给音频加过载：一个强度滑杆，从轻微削波到硬削波连续可调。给吉他加毛刺，或给人声做糙。浏览器本地处理，不上传。',
      h1: '音频失真 — 给干净录音加过载',
      heroAlt: '把一段干净录音的波峰压平',
      subtitle: '一个滑杆。起点是 40%。0% 时文件保持原样。',
      intro: '这一页把每个采样送进一条 tanh 曲线。起点 40% 时，0.25 的采样大约变成 0.69。100% 时，同一个采样被推到大约 1。强度为 0 时不走这条曲线，文件保持解码后的样子。处理留在浏览器里。',
      usesHeading: '音频失真的常见使用场景',
      uses: [
        '吉他过载：干净的吉他加一点毛刺，让它往前站。',
        '人声做糙：预告、游戏击打或播客片头的人声。',
        '鼓组重塑：鼓循环加削波，更冲更硬。',
        '恐怖音效：极端强度做人声或环境声的扭曲。',
        '合成器加 grit：干净的合成器线条加 grit。',
        '复古电话感：配合高通做老电话或对讲机效果。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '一根滑杆从轻到重',
          text: '强度从轻微削波到硬削波连续可调——中间每一档都是新音色。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '失真在浏览器本地计算，音频不上传。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设定强度', text: '强度滑杆从轻过载推到硬削波，边听边定。' },
        { name: '试听并导出', text: '确认音色，导出 MP3 或无损 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。削波是浏览器标签页里的 Web Audio 波形塑形。页面加载完可以断网，导出照样能用。WAV 马上能导出。MP3 要等编码器加载过一次。' },
        { q: '滑杆实际做了什么？', a: '强度为 0 时不插入波形塑形，采样保持解码后的样子。大于 0 时，每个采样 x 变成 tanh(k·x) / tanh(k)，k = 10^(强度 × 1.6) − 1。起点 40% 时 k 大约是 3.4，0.25 的采样大约变成 0.69。100% 时 k 大约是 39，同一个采样被推到大约 1。满幅采样还是满幅。节点做 2 倍过采样。WAV 保持这条曲线。MP3 按你选的比特率重新编码一次。时长不变。' },
        { q: '它做不到什么？', a: '它不是比特压缩，也不加抖晃，也不做收音机那种带宽限制。想要发闷的 lo-fi，先用这一页，再用低通滤波器。带箱体的音箱模拟，用 DAW。' },
        { q: '这和音量加大有什么不同？', a: '音量加大把整个文件乘上一个倍数，再用限幅器保住波峰，不让它们变成方波。这一页就是要把波峰压平。回声是在延迟之后加一份拷贝。那两页都不会把波形压平。' },
        { q: '可以只给一首歌的一部分加失真吗？', a: '可以。在波形上选出那一段并保留选区。曲线加在你导出的部分上，不会加到文件其余地方。' },
        { q: '手机上能用吗？', a: '能。滑杆和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '失真并下载',
      screenshotsAlt: [
        '音频失真 拖放区：拖入文件或点击浏览，不会上传',
        '音频失真 工作区，文件已载入',
        '音频失真 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '是一条曲线，不是音量旋钮',
          paragraphs: [
            '驱动从 0% 到 100%，起始值 40%。0% 时波形整形器不在信号链里，导出和原文件一致。',
            '大于 0 时，每个采样 x 变成 tanh(k·x) / tanh(k)。k 是 10^(驱动 × 1.6) − 1。40% 时 k 约为 3.4，采样 0.25 大约变成 0.69。100% 时 k 约为 39，那个采样会被推到约 1。满刻度的采样仍然停在满刻度。速度、音高和长度都不变。',
          ],
        },
        {
          heading: '推多狠',
          paragraphs: [
            '好用的范围很小。过了，就是在做效果：',
          ],
          bullets: [
            '10–30%：人声或干净吉他上的一层暖削波。',
            '40–70%：颗粒感很明显。峰值被压平，轻的音符变响。',
            '80–100%：接近方波，说话已经很难跟。',
          ],
        },
        {
          heading: '不是音量增强，也不是比特粉碎',
          paragraphs: [
            '音量增强把小声的文件变响，并用限制器防止峰值被削方。这一页是故意把它们削方。回声在你设的延迟之后加一份副本，那是另一个页面。',
            '这条曲线不降位深，也不削高频。节点做了 2× 过采样，只减少新谐波带来的混叠。想要闷闷的 lo-fi 音色，先在这一页过一遍，再用低通滤波。',
          ],
        },
      ],
    },
    'voice-changer': {
      cardLine: '五个预设换掉录音里的声音：高亮、低沉、机器人、电台、空灵。',
      name: '变声',
      shortName: '变声',
      title: '在线变声 — 高音/低音/机器人/电台/幽灵 五预设',
      description: '五个变声预设一键换声：高音、低音、机器人、电台、幽灵。每个预设是一组不同的处理组合，试听满意再导出 MP3 或 WAV。浏览器本地处理，不上传。',
      h1: '在线变声 — 录音的五个预设',
      heroAlt: '一段录音穿过五个变声预设',
      howToIntro: '真实录音上的五个预设',
      subtitle: '点高亮、低沉、机器人、电台或空灵，导出前就能听到。',
      intro: '这一页给录音套上五个固定预设。高亮把音高抬四个半音，低沉降四个，机器人用位压碎把它压扁，电台像对讲机一样收窄频带，空灵降两个半音再铺上混响。点一个预设，试听马上放你的文件。全部在浏览器里运行，录音不会离开你的设备。',
      usesHeading: '在线变声的常见使用场景',
      uses: [
        '角色配音：有声书片段或游戏模组的角色换个声音。',
        '隐私分享：演示和录屏之前，把源声音藏一层。',
        '内容整活：机器人或幽灵音效做节目效果。',
        '试听对比：五个预设挨个试，选最合适的。',
        '素材变体：同一段录音做多个变体供挑选。',
        '惊喜礼物：给朋友的录音换个声音当彩蛋。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '五个预设=五条处理链',
          text: '高音、低音、机器人、电台、幽灵——每个预设背后是一组不同的滤波与变形，不是同一个声音的五个音量。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '变声在浏览器本地完成，音频不上传。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '录音或音频文件拖进虚线框。设备内解码。' },
        { name: '点一个预设', text: '高音/低音/机器人/电台/幽灵，点了即生效，可来回切换。' },
        { name: '导出', text: '满意后点「变声导出」，存 MP3 或 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '我的音频会上传吗？', a: '不会。解码、变调、滤波和位压碎都用 Web Audio API 在浏览器里完成。页面加载完，试听和 WAV 导出断网也能用。' },
        { q: '每个预设到底做了什么？', a: '高亮把音高抬四个半音，低沉降四个。机器人在 150 Hz 到 4 kHz 的频带里做 5 位量化。电台是 500 Hz 到 3 kHz 的带通加一点失真，像小喇叭的声音。空灵降两个半音加 55% 房间混响。都不改变文件长度。' },
        { q: '这是 AI 声音克隆吗？', a: '不是。这些预设重塑你录的声音，不会生成某个别人的声音。克隆需要训练好的模型，通常还需要你没有的授权。这一页做的事是即时的、离线的，而且原来的说话人还是听得出来。' },
        { q: '和变调有什么不同？', a: '[变调](/pitch-changer)给你 −12 到 +12 半音的自由滑杆，做音乐用的。这一页把变调和滤波、失真、位压碎打包成五个一键设定，给语音用。预设之间是替换不是叠加；要完全自由，用[变调](/pitch-changer)和[失真](/audio-distorter)手动来。' },
        { q: '手机上能用吗？', a: '能。预设按钮和导出都是触摸尺寸，导出前试听就能出声，不会为没听过的预设买单。' },
        { q: '对音乐有用吗？', a: '能处理，但预设是按语音调的。高亮和低沉对歌就是普通的变调，机器人会吃掉细节，电台会把歌变成上世纪的广播，有时候这恰好就是想要的效果。' },
        { q: '预设可以微调吗？', a: '不能。一点一个设定，没有滑杆，这是有意为之。预设接近但不对的时候，走手动路线：[变调](/pitch-changer)管移调，[失真](/audio-distorter)管颗粒，[高通](/high-pass-filter)和[低通](/low-pass-filter)管频带。' },
      ],
      dropHint: '拖入一个音频文件，或点击浏览',
      exportLabel: '变声导出',
      screenshotsAlt: [
        '变声 拖放区：拖入文件或点击浏览，不会上传',
        '变声 工作区，文件已载入',
        '变声 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '每个预设做什么',
          paragraphs: [
            '每个预设都是站里到处在用的同一批部件的小组合：保持长度的相位声码器移调、双二阶滤波器、tanh 驱动、比特粉碎，还有和混响页同一个合成房间。表格就是完整配方，盒子里没有别的东西。',
          ],
          table: {
            headers: ['预设', '改了什么', '设置'],
            rows: [
              ['高音', '升调，长度不变。', '+4 个半音'],
              ['低沉', '降调，长度不变。', '−4 个半音'],
              ['机器人', '窄频带里的量化台阶。', '5 位粉碎，150 Hz–4 kHz，轻驱动'],
              ['电台', '被挤过的窄带通。', '500 Hz–3 kHz，35% 驱动'],
              ['幽灵', '更暗的调，后面带房间。', '−2 个半音，55% 混响'],
            ],
          },
        },
        {
          heading: '是预设，不是克隆',
          paragraphs: [
            '变声在 2026 年有两个很不一样的意思。一个是重塑一段录音，这一页做的就是这件事，一秒完成，离线，免费。另一个是生成某个真人的声音，那是一个模型、一个授权问题，而且未经同意用在别人身上就是滥用。',
            '这些预设会让原来的说话人在底下仍然认得出。这既是限制，也是安全属性：没有人会被一个音高旋钮冒充。',
          ],
        },
        {
          heading: '先录，再变',
          paragraphs: [
            '预设会放大录音本来的样子。干净、贴麦的录音变得也干净；嘈杂的房间出来还是嘈杂，只是换了个形状。在 [录音机](/voice-recorder) 里录，用 [降噪](/noise-remover) 清掉嘶声，再到这里变声。',
          ],
        },
      ],
    },
    'silence-remover': {
      cardLine: "按音量删掉拖得太长的空白，短气口留在原地。",
      name: "去静音",
      shortName: "去静音",
      title: "去除音频静音 — 在线免费剪掉空白",
      description: "在浏览器里去掉音频里拖得太长的静音。自己定多静、多长才算。免费，不会上传。",
      h1: '免费在线去静音 — 去掉音频里的静音',
      heroAlt: '把录音里拖得很长的停顿剪掉',
      subtitle: "去掉大段空白。短于你设的间隔的气口留着。",
      intro: "它找出比阈值更静、并且长于最短间隔的段落，然后剪掉。默认阈值是 −40 dBFS，适合口播和语音备忘。每一刀两端各留 0.08 秒，避免切掉词头词尾。短于间隔的停顿会留下。安静的配乐和淡出的尾音也在 −40 dBFS 以下，会被一起剪掉。想手选一段，用音频裁剪。整段都低于阈值时，导出的是原文件。处理留在浏览器里。",
      usesHeading: "去静音的常见使用场景",
      uses: [
        "播客：把句子之间的长停顿收紧，导出一版不用逐段手剪的成片。",
        "语音备忘：把开口之前的长顿收掉，一条备忘只剩说话的部分。",
        "讲座录音：按电平一次去掉所有长静音，不用在波形上逐段手选。",
        "采访整理：删掉问答之间的空白，转写和成稿对着干净的音频写。",
        "视频旁白：配音停顿和画面对不上时，先收空白再对时间轴。",
        "发布前清理：把录音末尾的死气压掉，呼吸和短气口留在原地。",
      ],
      why: [
        {
          icon: "waveform",
          title: "按电平下刀，不碰呼吸",
          text: "比「阈值」更静、长过「最短静音」才动刀。默认 −40 dBFS 加 0.35 秒，剪掉的是拖长的死气；每刀两端留 0.08 秒保护垫，接缝听不出来。",
        },
        {
          icon: "layers",
          title: "多文件一次过",
          text: "一次拖进整批录音，共用同一组阈值和间隔，逐个测量、逐个剪。一个文件单独下载，两个以上自动打包成一个 ZIP。",
        },
      ],
      howTo: [
        { name: "拖入音频", text: "把 MP3、WAV、M4A、OGG 或 FLAC 拖进虚线框，或点击浏览。文件在你的设备上解码，不上传。可以一次放多个文件，它们共用下一步设的两个值。" },
        { name: "设「阈值」和「最短静音」", text: "「阈值」决定要多静才算静音：−60 到 −20 dBFS，默认 −40，给口播用的。「最短静音」决定要持续多久才剪：0.1 到 2 秒，默认 0.35 秒。两个滑杆一动，状态行就写出大约会去掉多少秒。" },
        { name: "点「去掉静音」", text: "导出条上的主按钮。处理把有声部分接在一起，每刀两端各留 0.08 秒，接缝不会咔哒。没把握就先按「播放」听一遍原文件。" },
        { name: "拿走文件", text: "一个文件单独下载，两个及以上打成一个 ZIP。格式选 MP3（小，好发）或 WAV（无损，好再加工），文件名自动带 -edited 后缀方便区分。" },
      ],
      faqs: [
        { q: '可以一次去掉多个文件里的静音吗？', a: '可以。多个文件共用本页的阈值和最短间隔。每个文件单独测量、单独裁剪，在这台设备上一个接一个处理。一个文件单独下载，两个及以上打成一个 ZIP。手机内存更紧，特别长的文件在手机上还是一次放一个。' },
        { q: "音频会上传吗？", a: "不会。音量在浏览器里测量，静音段落在内存里剪掉。页面加载完可以断网，导出照样能用。" },
        { q: "它实际去掉什么？", a: "一段声音只有比阈值更静、并且长于最短静音时才会被去掉。默认是 −40 dBFS 和 0.35 秒。每一段两端各留 0.08 秒。更短的停顿，包括多数气口，会留下。" },
        { q: "安静的配乐会被切掉吗？", a: "会，只要它低于阈值的时间长过那个间隔。−40 dBFS 是给口播用的。安静的垫乐、淡出和音乐里的房间底噪都会被当成静音。如果只想去掉接近数字零的空白，把阈值往 −20 提。想手选，用音频裁剪。" },
        { q: "整段文件都很安静怎么办？", a: "什么都不剪。状态行会说明，导出的是原文件。" },
        { q: "这和裁剪有什么不同？", a: "音频裁剪和 MP3 剪切保留你在波形上画出的那一段。这一页按音量找出所有长静音，一次导出全部去掉。留下来的部分不改变速度、音高和响度。" },
        { q: "手机上能用吗？", a: "能。两个滑杆和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。" },
      ],
      dropHint: '拖入一个或多个音频文件，或点击浏览',
      exportLabel: '去掉静音',
      screenshotsAlt: [
        '去静音 拖放区：拖入文件或点击浏览，不会上传',
        '去静音 工作区，文件已载入',
        '去静音 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '它切的是长段安静，不是呼吸',
          paragraphs: [
            '一段只有比阈值更安静、而且比最短间隔更长时才会被移除。默认是 −40 dBFS 和 0.35 秒。每刀在两端各留 0.08 秒，接缝就不会咔哒。',
            '更短的间隔，包括大多数呼吸，都会留下。剩下的内容不会被变响、变慢或变高。整个文件都在阈值以下时，什么都不切，导出的就是原文件。',
          ],
        },
        {
          heading: '是给人声用的，不是给安静的歌',
          paragraphs: [
            '−40 dBFS 是照着说话定的。音乐里本来想留的部分，只要那么低，也会被切掉：',
          ],
          bullets: [
            '回答之间有大段停顿的语音备忘或采访。',
            '只想去掉接近数字静音的部分，把阈值往 −20 dBFS 抬。',
            '淡出、安静的铺底，或者混音里的房间声：离开这一页，手动裁。',
          ],
        },
        {
          heading: '剪辑页和这一页的分工',
          paragraphs: [
            '音频剪辑和 MP3 剪辑保留你画出来的一段。这一页按电平找出每一段长静音，一次导出全部去掉。',
            '安静的那段你还想留着，或者要凭耳朵留下一段、丢掉其余，用剪辑页。问题是停顿、而且停顿长到能量出来，用这一页。',
          ],
        },
      ],
    },
    'noise-remover': {
      cardLine: '把语音录音里持续的背景噪音调小，就在浏览器里。',
      name: '去背景噪音',
      shortName: '降噪',
      title: '去除背景噪音 — RNNoise 本地降噪，免费',
      description: '去除语音录音里持续的背景噪音：嘶声、嗡声、风扇声降约 20 dB。RNNoise（150 KB 模型）在浏览器本地运行。超过 300 MB 的文件会被拒绝；音乐降噪效果差。免费导出 MP3 或 WAV。',
      h1: '去除背景噪音 — 在线音频降噪，免费',
      heroAlt: '语音录音底下持续的背景噪音被调小',
      howToIntro: '一个带噪的文件，一根强度滑杆',
      subtitle: '语音周围的持续嘶声、嗡声和风扇声降低 20 dB 以上，时间轴不动。',
      intro: '这一页用 RNNoise 处理你拖进来的录音，它是一个用语音训练出来的降噪门限。语音周围的持续噪音降低 20 dB 以上，人声电平基本不动。门限是一个 150 KB 的模型，在你的浏览器里运行，音频不会离开你的设备。',
      usesHeading: '去除背景噪音的常见使用场景',
      uses: [
        '语音备忘：把风扇和空调的底噪压下去，留一句干净的人声。',
        '播客：发布前清一遍底噪，不用打开桌面软件。',
        '讲座录音：压掉教室里的持续嘶声，之后再对响度。',
        '采访整理：做人声净化，拿掉马路和房间的持续嗡声。',
        '视频旁白：配音里有空调声，先降噪再对时间轴。',
        '会议录音：把持续的电流声和风扇声调小，回放不刺耳。',
      ],
      why: [
        {
          icon: 'audio-waveform',
          title: 'RNNoise 在本地跑',
          text: '150 KB 的模型在浏览器里执行，语音周围的持续噪音降低约 20 dB，人声电平变化不到 1 dB，音频不上传。',
        },
        {
          icon: 'warning-triangle',
          title: '诚实的边界',
          text: '嘶声、嗡声、风扇声这类持续底噪才有效；背景人声和音乐去不掉——这一页不装万能，去不掉的直说。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '把 MP3、WAV、M4A、OGG 或 FLAC 拖进虚线框，或点击浏览。文件在你的设备上解码，不上传。「降噪强度」默认 75%。' },
        { name: '设「降噪强度」', text: '100% 是最大抑制，约压 30 dB；结果发闷、想留一点房间底噪，就往 50% 调（约压 6 dB）。150 KB 的 RNNoise 模型在第一次导出时才加载。' },
        { name: '点「去背景噪音」', text: '导出条上的主按钮。整个文件按 10 毫秒一帧过门限，状态行显示进度。没把握就先按「播放」听一遍原文件。' },
        { name: '拿走文件', text: 'MP3 按你选的码率导出，WAV 保留处理后的采样，文件名自动带 -edited 后缀。' },
      ],
      faqs: [
        { q: '我的音频会上传吗？', a: '不会。解码和降噪都在浏览器里完成。第一次导出会从本站取 RNNoise 模型，一个 150 KB 的 WebAssembly 文件，之后留在缓存里，页面可以离线用。超过 300 MB 的文件会被拒绝。' },
        { q: '文件会发生什么？', a: '音频按 48 kHz、10 毫秒一帧过门限。44.1 kHz 的文件进来时重采样一次，出去时再转回来。在我们的测试混合里，−31 dBFS 的噪声底出来是 −61 dBFS，人声电平变化不到 1 dB。MP3 导出会按你选的码率重编码一次。' },
        { q: '它去不掉什么？', a: '像语音的噪音。别人的说话声、背景的电视、人群声都会留下，因为它们和人声在同一段频带。那需要桌面 DAW 里的频谱修复。嘶声、嗡声、风扇声这类持续噪音才是这一页管的。' },
        { q: '这和去静音有什么不同？', a: '[去静音](/silence-remover)把安静的段落从时间轴上剪掉。这一页不动任何采样，只把语音底下的持续噪音调小。按这个顺序两个都用：先降噪，再剪空白。' },
        { q: '手机上能用吗？', a: '能。滑杆和导出按钮都能触摸操作，长文件的状态行会显示进度。处理时间随文件长度增长，半小时的录音在中端手机上要等一阵。' },
        { q: '能清理音乐吗？', a: '不能，这是老实话，不是缺一个开关。RNNoise 用语音训练，遇到音乐会把乐器当成该保留的人声，细节发闷。音乐里的隆隆声用[高通滤波](/high-pass-filter)，要定点切除用[均衡器](/equalizer)。' },
        { q: '能留一点房间底噪吗？', a: '能。把强度滑杆往 50% 调，原始声音会混回来。在我们的测试混合里，100% 把噪声底压低 30 dB，50% 压低 6 dB。0% 时导出就是原文件。' },
      ],
      dropHint: '拖入一个音频文件，或点击浏览',
      exportLabel: '去背景噪音',
      screenshotsAlt: [
        '去背景噪音 拖放区：拖入文件或点击浏览，不会上传',
        '去背景噪音 工作区，文件已载入',
        '去背景噪音 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: 'RNNoise 怎么去除背景噪音',
          paragraphs: [
            'RNNoise 会追踪录音的底噪，每秒大约一百次给每个频段算一个增益。载着人声的频段保持打开，载着稳定噪声的频段关上。',
            '这一页的数字来自可重复的测量，不是宣传话术。我们的测试混音把一条类似人声的纯音和 −31 dBFS 的白噪声放在一起。强度 100% 过门之后，底噪落在 −61 dBFS，人声频段移动不到 1 dB，一个满刻度的咔哒声落在它开始的那个采样上。',
          ],
          table: {
            headers: ['强度', '会得到什么', '测试混音里的底噪'],
            rows: [
              ['100 %', '最大抑制。最干净的结果；明亮的录音可能听起来发闷。', '−30 dB'],
              ['50 %', '一半混合。人声下面还留一点房间声。', '−6 dB'],
              ['0 %', '旁通。导出的就是原文件。', '不变'],
            ],
          },
        },
        {
          heading: '人声净化，不是音乐降噪',
          paragraphs: [
            '这道门是照说话训练的，所以它把任何像说话的声音都当成要留下的东西。这对说话录音是特性，放到别处就是限制：',
          ],
          bullets: [
            '会去掉：嘶声、嗡嗡声、风扇和空调声、廉价麦克风前级的噪声。',
            '会留下：第二个人声、背景里的电视、人群。这些听起来像说话人。',
            '音乐改用：[高通滤波](/high-pass-filter) 处理隆隆声，或者用 [均衡器](/equalizer) 做有针对性的削减。',
          ],
        },
        {
          heading: '先降噪，再裁剪',
          paragraphs: [
            '降噪会改变静音测量的结果，所以顺序很重要。先跑这一页。底噪落到人声以下 40 dB 之后，[静音移除](/silence-remover) 分辨死寂和轻声字词会可靠得多。',
            '两步都做完，发布前再用 [响度表](/loudness-meter) 把这一集的响度对上。',
          ],
        },
      ],
    },
    'audio-looper': {
      cardLine: '把一段重复最多 16 次，每次接缝做交叉淡化。',
      name: '音频循环',
      shortName: '循环',
      title: '音频循环 — 选区或整段重复 2–16 次',
      description: '把选区或整段重复 2 到 16 次：接缝有 0.01 秒交叉淡化，循环点不炸。浏览器本地处理，不上传。',
      h1: '音频循环，把一段重复 2 到 16 次',
      heroAlt: '把一段声音重复，并在每次接缝做交叉淡化',
      subtitle: '循环选区或整个文件，下载一条更长的音频。',
      intro: '次数从 2 到 16，默认 4 次。每次接缝是线性交叉淡化，默认 0.01 秒，最长 0.1 秒。在波形上拖出选区，就只循环那一段。没有选区就循环整个文件。导出超过 10 分钟会停下来。音高和速度保持原样。处理留在浏览器里。',
      usesHeading: '音频循环的常见使用场景',
      uses: [
        '练习循环：一小节反复 2–16 遍，导出成练习素材。',
        '人声铺底：一句短人声拉长，铺进更长的画面。',
        '氛围延长：环境声循环到需要的长度。',
        '节奏叠层：鼓循环叠出更长的律动段。',
        '冥想素材：钵声或环境音循环成整段冥想。',
        '现场备份：短循环备成长素材，现场直接放。',
      ],
      why: [
        {
          icon: 'repeat',
          title: '循环点不炸',
          text: '接缝 0.01 秒交叉淡化：重复回到开头时不会突然炸一下。',
        },
        {
          icon: 'sliders',
          title: '次数与选区自由',
          text: '重复 2–16 次任选；拖了选区就循环选区，没有就循环整段。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设定次数和接缝', text: '重复 2–16 次，接缝 0.01 秒交叉淡化自动处理。' },
        { name: '导出', text: '点「循环并下载」，导出 MP3 或 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。重复是在浏览器里把采样抄上去的。页面加载完可以断网，导出照样能用。' },
        { q: '接缝处会发生什么？', a: '上一遍的结尾和下一遍的开头按接缝长度重叠。默认 0.01 秒。重叠是线性交叉淡化，稳定的音不会突然跳一下。WAV 就是这些采样。MP3 把循环编码一次，比特率由你选。音高和速度不变。' },
        { q: '它会拒绝什么？', a: '次数只有 2 到 16。结果超过 10 分钟时，导出停住，状态行会说明。这一页不能边录边叠，也不能把两个不同的文件首尾相接。' },
        { q: '这和裁剪、合并、淡化有什么不同？', a: '音频裁剪把一段留下一次。音频合并把不同的文件排成一排。淡化让一个文件的头或尾变轻。这一页把同一段再写几遍，交叉淡化只出现在两遍之间。' },
        { q: '手机上能用吗？', a: '能。两个滑杆、波形和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '循环并下载',
      screenshotsAlt: [
        '音频循环 拖放区：拖入文件或点击浏览，不会上传',
        '音频循环 工作区，文件已载入',
        '音频循环 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '副本在接缝处重叠',
          paragraphs: [
            '重复次数从 2 到 16，默认 4。每个接缝按连接滑块重叠：默认 0.01 秒，永远不超过 0.1 秒。',
            '重叠是线性交叉淡化，所以稳定的纯音不会跳。导出长度是一遍的长度乘以重复次数，再减去重叠乘以次数减一。音高和速度不变。WAV 是这些采样，MP3 把循环编码一次。',
          ],
        },
        {
          heading: '同一段，再写一遍',
          paragraphs: [
            'MP3 延长器会把一段反复写进去，让文件更长。下一份应该还是同一段音频时，用它：',
          ],
          bullets: [
            '一小节 riff，想当成练习文件。',
            '一句短的语音提示，要撑过更长的一场戏。',
            '接缝不重叠就会咔哒的采样。',
          ],
        },
        {
          heading: '不是裁剪，也不是合并',
          paragraphs: [
            '音频剪辑保留一段，只留一次。音频合并把不同文件排成一列。音频淡化让一个文件的开头或结尾变轻。这一页的交叉淡化只在同一段的副本之间。',
            '这一页不会叠录。结果会超过 10 分钟时，导出会停。缩短选区，或者减少重复次数。',
          ],
        },
      ],
    },
    'auto-panner': {
      cardLine: '按固定速度把声音左右扫，不跟鼓点。',
      name: '自动声像',
      shortName: '声像',
      title: '自动声像 — 左右自动扫描 0.05–2 Hz',
      description: '按 0.05 到 2 Hz 的速率把音频左右扫：深度 0–100% 可调，默认 70%。单声道立体声都行，浏览器本地处理，不上传。',
      h1: '自动声像，把一段音频从左扫到右',
      heroAlt: '把同一段声音在左右声道之间扫动',
      subtitle: '深度和速率自己定，扫动不跟拍子。',
      intro: '深度从 0 到 100%，一开始是 70%。速率从 0.05 Hz 到 2 Hz，一开始是 0.2 Hz。位置是深度乘以这个速率的正弦。0.2 Hz 时左右走完一圈要 5 秒。它不跟鼓点。深度为 0 时文件保持原样。处理留在浏览器里。',
      usesHeading: '自动声像的常见使用场景',
      uses: [
        '铺底游移：铺底音色慢慢从一边走到另一边。',
        '人声加宽：单声道人声加稳定的左右移动。',
        '合成器律动：给静态的合成器线条加律动感。',
        '氛围音效：环境声缓慢扫动，不占注意力。',
        '鼓组花样：hi-hat 或打击自动左右分布。',
        '游戏音频：物体掠过时的左右移动感。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '速率与深度分开调',
          text: '速率 0.05–2 Hz 定多快，深度 0–100% 定多宽——慢速大深度是氛围，快速小深度是律动。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '声像在浏览器本地计算，音频不上传。',
        },
      ],
      howTo: [
        { name: '放入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设定深度和速率', text: '深度 0–100%、速率 0.05–2 Hz，边听边调。' },
        { name: '导出', text: '点「声像并下载」，导出 MP3 或 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。声像在浏览器里计算。页面加载后可以断网，导出仍然可用。' },
        { q: '声音会变成什么样？', a: '位置是深度乘以速率的正弦。音高和播放速度不变。立体声整幅一起动，左右声道不会走两条不同的轨迹。WAV 是这些采样。MP3 按你选的码率编码一次。' },
        { q: '它做不到什么？', a: '扫动不跟鼓点，也不做中侧处理。深度为 0 时不插入声像，导出和你放下的文件一致。这不是把声音指向某个角度的头部相关传输。' },
        { q: '和回声、慢放混响、均衡器有什么不同？', a: '回声是隔一段时间再来一份。慢放 + 混响会改速度和音高，再加房间。音频均衡器改的是频段。这一页只把同一段声音左右移动。大约 10 秒转一圈、再加一条短混响的成品，在 3D 音频页。' },
        { q: '手机上能用吗？', a: '能。两个滑杆、波形和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '声像并下载',
      screenshotsAlt: [
        '自动声像 拖放区：拖入文件或点击浏览，不会上传',
        '自动声像 工作区，文件已载入',
        '自动声像 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '声音待在哪里',
          paragraphs: [
            '深度从 0 到 100%，起始值 70%。速率从 0.05 Hz 到 2 Hz，起始值 0.2 Hz。',
            '位置是深度乘以这个速率的正弦。0.2 Hz 时，一次完整的左右往返要 5 秒。深度为 0，文件原样不动。音高和播放速度不变。',
          ],
        },
        {
          heading: '一段稳定的扫动',
          paragraphs: [
            '运动应该均匀时，用它：',
          ],
          bullets: [
            '一个 pad 或一条人声，应该慢慢穿过两只音箱。',
            '一条单声道 take，应该会动，但不要变成两条不同的轨。',
            '按赫兹设定的速率，而不是追着鼓点跑的扫动。',
          ],
        },
        {
          heading: '不是回声，也不是变速',
          paragraphs: [
            '回声在你设的延迟之后加一份副本。慢速加混响改速度和音高，再加一个房间。均衡器改频段。它们都不会让声像按时钟移动。',
            '这一页不跟节拍。立体声文件仍然是一个声像。左右声道不会分到两条路上。',
          ],
        },
      ],
    },
    '3d-audio': {
      cardLine: '一个开关，把文件放上慢速绕圈，并加上短混响。',
      name: '3D 音频',
      shortName: '3D',
      title: '3D 音频 — 声像绕圈 + 短混响，一键生成',
      description: '让人声或铺底绕着耳机转：约每 10 秒绕一圈，加一条短混响。速度和音高不变，只有一个开关。浏览器本地处理，不上传。',
      h1: '3D 音频，慢速绕一圈，再加一条短混响',
      heroAlt: '在扬声器之间慢慢绕一圈，并加上短房间',
      subtitle: '深度、速率和房间都已定好。你只需要拨开关。',
      intro: '这一圈是固定的。深度是 100%。速率是 0.1 Hz，转一圈大约 10 秒。动的是直达声。25% 的混响送出，用的是慢放 + 混响那条短房间。速度和音高保持原样。关掉开关，导出就是你放下的文件。处理留在浏览器里。',
      usesHeading: '3D 音频的常见使用场景',
      uses: [
        '氛围人声：人声绕着头转，冥想和放松素材。',
        '铺底动效：静态铺底加绕圈，立刻有空间感。',
        '游戏环境：环境声缓慢绕圈，戴耳机有临场感。',
        '短视频特效：一句话绕一圈，做注意力钩子。',
        '白噪音定制：白噪音绕圈，助眠素材。',
        '播客片头：片头一句话加绕圈，做出节目声纹。',
      ],
      why: [
        {
          icon: 'repeat',
          title: '一个开关，全部搞定',
          text: '绕圈速率固定约 10 秒一圈，外加一条短混响——不用自己定一堆参数。',
        },
        {
          icon: 'lock-simple',
          title: '速度音高不变',
          text: '只有位置在动：速度和音高保持原样，台词和节奏完全对得上。',
        },
      ],
      howTo: [
        { name: '放入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '保持绕圈打开', text: '绕圈开关默认打开：约每 10 秒绕一圈，并加一条短混响。' },
        { name: '导出', text: '点「加上 3D」，导出 MP3 或 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀，戴耳机听效果。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。绕圈和房间在浏览器里渲染。页面加载后可以断网，导出仍然可用。' },
        { q: '声音会变成什么样？', a: '深度固定 100%。速率固定 0.1 Hz，绕一圈大约 10 秒。动的是直达声。混响是 25% 的送出，和慢放 + 混响用同一条短房间，所以文件末尾会多出一段尾音。速度和音高不变。WAV 是这些采样。MP3 按你选的码率编码一次。' },
        { q: '它做不到什么？', a: '这一页不能改速率、深度或房间。它不跟拍子，也不把声音指向你头周围的某个角度。关掉开关，就不会加上绕圈和尾音。' },
        { q: '和自动声像、慢放混响有什么不同？', a: '要自己定速率和深度，用自动声像。这一页是约 10 秒一圈、混响已经打开的成品。慢放 + 混响会改速度和音高。这一页不改。' },
        { q: '手机上能用吗？', a: '能。开关、波形和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '加上 3D',
      screenshotsAlt: [
        '3D 音频 拖放区：拖入文件或点击浏览，不会上传',
        '3D 音频 工作区，文件已载入',
        '3D 音频 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '一个已经定好数字的圆',
          paragraphs: [
            '深度是 100%，速率是 0.1 Hz。从中间出发，到一边，再穿过另一边回来，大约要 10 秒。',
            '移动的是直达声。混响是 25% 的发送量，和慢速加混响页是同一个短房间。尾音就是导出比你拖进来的文件多出一截的原因。',
          ],
        },
        {
          heading: '什么时候预设就是你要的',
          paragraphs: [
            '想要已经调好的运动时，用这一页：',
          ],
          bullets: [
            '一条人声或一个 pad，应该自己游走，不用你调速率。',
            '运动后面有一个短房间，而不是你自己混出来的一团。',
            '原来的速度和原来的音高，都留在原地。',
          ],
        },
        {
          heading: '不是让你调的声像器，也不是放慢',
          paragraphs: [
            '自动声像器让你把深度设成 0 到 100%，速率设成 0.05 Hz 到 2 Hz，没有混响。这一页把两个数字都锁死，再加房间。',
            '慢速加混响会改速度，音高跟着走。这一页不会。关掉开关，文件就和你拖进来时一样。',
          ],
        },
      ],
    },
    metronome: {
      cardLine: '按你设的速度打点，每小节第一拍更响。',
      name: '节拍器',
      shortName: '节拍器',
      title: '节拍器｜40 到 240 BPM 在线打点免费',
      description: '40 到 240 BPM。拍号 2/4、3/4、4/4、6/8，每小节第一拍更响。可导出 4、8 或 16 小节的 WAV 或 MP3。在你的浏览器里完成，不会上传。',
      h1: '节拍器，40 到 240 BPM 的打点',
      heroAlt: '40 到 240 BPM 的节拍器打点',
      subtitle: '听打点，或存下 4、8、16 小节。不会叠进一首歌。',
      intro: '速度从 40 到 240 BPM。拍号选 2/4、3/4、4/4 或 6/8。每小节第一拍更响。按播放，打点会一直走，直到你停止。导出写成 4、8 或 16 小节的 WAV 或 MP3。6/8 是这一速度下每小节六下，不是两下。这一页不接收文件，也不会把打点叠到一首歌下面。要叠进去，用多轨编辑器。不会上传。',
      usesHeading: '节拍器的常见使用场景',
      uses: [
        '录音前置：录之前先按目标 BPM 练稳。',
        '导出参考轨：把打点导出 4、8 或 16 小节垫在 DAW 里。',
        '乐器练习：跟拍练乐器，速度从慢到快。',
        '节奏训练：换拍号练不同的节奏型。',
        '舞蹈排练：按舞曲 BPM 定拍排舞。',
        '跑步配速：按步频 BPM 设定跑姿节奏。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '40–240 BPM + 拍号',
          text: '速度和拍号都可调：从慢练速度一路推到演出速度。',
        },
        {
          icon: 'volume',
          title: '可导出参考轨',
          text: '把打点导出 4、8 或 16 小节的音频，垫在工程里当节拍参考。',
        },
      ],
      howTo: [
        { name: '设定速度和拍号', text: '速度在 40 到 240 之间。选 2/4、3/4、4/4 或 6/8。页面从 100 BPM、4/4 开始。' },
        { name: '按播放', text: '打点会一直走，直到你按停止。每小节第一拍更响。每一拍都是同一个短音。' },
        { name: '需要文件再导出', text: '选 4、8 或 16 小节，再选 WAV 或 MP3。文件里只有打点。WAV 保留这些采样。MP3 只编码一次。' },
      ],
      faqs: [
        { q: '会上传吗？', a: '不会。这一页不读文件，也不打开麦克风。播放和导出都在浏览器里。页面加载之后可以断网，打点仍然走。' },
        { q: '打点听起来是什么样？', a: '100 BPM 时，相邻两下相隔 0.60 秒。每小节第一拍更响。其余拍是同一个音，更轻。WAV 就是这些采样。MP3 按你选的码率编码一次。' },
        { q: '它做不到什么？', a: '它不会把打点对齐到一首歌上。这里没有地方放文件。6/8 固定是这一速度下每小节六下。它不会改成每小节两下附点四分音符。' },
        { q: '和多轨、变速有什么不同？', a: '这一页只有打点。把打点叠到一首歌下面，用多轨编辑器。改变一段录音的时长，用变速页，音高会跟着速度走。麦克风录音用录音页。' },
        { q: '手机上能用吗？', a: '能。速度滑杆、拍号、播放和导出，在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。打点用 Web Audio 振荡器。导出的文件用同一套间隔。' },
      ],
      dropHint: '不用文件。按播放。',
      screenshotsAlt: [
        '节拍器：还没载入文件或输入时的页面',
        '节拍器：读取文件或点击之后',
        '节拍器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '咔哒声',
          paragraphs: [
            '100 BPM 时，每两声咔哒相隔 0.60 秒。小节的第一拍更响。每一声都是同样的短音。',
            '2/4 一小节两下，3/4 三下，4/4 四下，6/8 六下。BPM 是每种拍号下的咔哒速率。',
          ],
        },
        {
          heading: '同样咔哒声的文件',
          paragraphs: [
            '导出写 4、8 或 16 小节。WAV 把咔哒声原样留下。MP3 把结果编码一次。',
          ],
          bullets: [
            '100 BPM 的 4/4 四小节是 16 下。',
            '想把它垫在歌下面，把这个 WAV 拖到多轨编辑器。',
            '只是要听一下速度，停在播放就行。',
          ],
        },
        {
          heading: '它不做的事',
          paragraphs: [
            '它不会把咔哒声对到一首歌上。这里没有文件可拖，也没有波形可裁。',
            '它不会改录音的长度。变速页会，而且音高跟着速度走。',
          ],
        },
      ],
    },
    'tap-tempo': {
      cardLine: '跟着节奏点，读出任何东西的 BPM，不用文件。',
      name: '打点测速',
      shortName: '打点测速',
      title: '打点测 BPM — 跟着音乐点出速度',
      description: '跟着歌曲点击，读出 BPM。点偏一下不会带偏读数，大约四下后稳定。免费，什么都不上传。',
      h1: '打点测 BPM — 点出歌的速度',
      heroAlt: '节拍化成绕着一个点的涟漪',
      howToIntro: '点几下，读数就稳了',
      subtitle: '按任意键或按钮跟拍。大约四下读数就稳。',
      intro: '在任意地方放歌，在这一页跟着每一拍点击，读出 BPM。读数取你点击间隔的截尾均值，点偏一下或漏一拍都带不偏它；停 2.5 秒就重新开始。不用打开文件，也不上传任何东西，点击从不离开这一页。',
      usesHeading: '打点测 BPM 的常见使用场景',
      uses: [
        '练习配速：把[节拍器](/metronome)设到正在学的歌的速度。',
        '混接预检：看两条曲子的 BPM 合不合拍。',
        '现场测速：乐队排练时测当前编排的速度。',
        '跑步音乐：测自己步频，挑匹配 BPM 的歌。',
        '舞蹈教学：把编舞的节奏点出来给学员。',
        '视频配乐：按剪辑节奏测需要多少 BPM。',
      ],
      why: [
        {
          icon: 'clock-counter-clockwise',
          title: '四拍站稳',
          text: '大约四下之后读数站稳：取点击间隔的截尾均值，点偏一下带不动它。',
        },
        {
          icon: 'check',
          title: '无需文件',
          text: '数的只是点击之间的毫秒数——没有文件、不上传，现场外放也能测。',
        },
      ],
      howTo: [
        { name: '放歌', text: '在哪里放都行。这一页不需要音频文件，手机外放加旁边一台电脑也完全够用。' },
        { name: '跟拍点击', text: '点按钮，或者焦点在页面上时按空格键，每一拍一下。大约四下之后读数站稳，继续点会继续细化。' },
        { name: '读数与归零', text: '数字是每分钟节拍数，带一位小数。停点 2.5 秒，下一次点击就重新开始；也可以直接点归零。' },
      ],
      faqs: [
        { q: '我的音乐会上传吗？', a: '不会，而且根本没有文件。这一页数的只是你点击之间的毫秒数。歌、点击、任何东西都不离开这一页。' },
        { q: '准不准？', a: '取决于你点得稳不稳，但上限对音乐来说无所谓。实测里，正负 20 毫秒的点击抖动，读数离真实速度在 2 BPM 以内。读数取间隔的截尾均值，点偏一下带不动它。' },
        { q: '和 BPM 检测有什么不同？', a: '[调性和 BPM 检测](/key-bpm-finder)分析音频文件，从波形上读出速度和调性，对成品音乐是精确的。这一页读的是你手点的，现场乐队、脑子里的旋律、没有文件或不想上传的歌都能测。' },
        { q: '我点错了一下怎么办？', a: '没坏。点偏的一下落进截尾均值的丢弃堆里，而且 2.5 秒不点本来就会清空。想立刻重来，点归零。' },
        { q: '手机上能用吗？', a: '能。按钮是拇指尺寸，页面几乎不占流量。一边用这台手机放歌一边点也完全可以，这一页不听音频。' },
        { q: '能测多快多慢？', a: '两次点击之间在 2.5 秒以内都行，大约 24 到 999 BPM。音乐在 40 到 240 之间，读数最稳。很慢的曲子，按半拍点，数字除以二。' },
        { q: '能把歌变到这个速度吗？', a: '这一页只读不改。拿着数字去[节拍器](/metronome)跟着练，或者去[变速](/change-audio-speed)把文件变到目标速度。' },
      ],
      dropHint: '不用文件。跟着拍子点。',
      exportLabel: '打点测速',
      screenshotsAlt: [
        '打点测速：第一次点击前，读数是一道横线',
        '打点测速：点击七次后，读数停在 120.2 BPM',
      ],
      sections: [
        {
          heading: '这个数字怎么算出来',
          paragraphs: [
            '每次点击存一个时间戳。最近几次点击之间的间隔会排序，最快和最慢的四分之一丢掉，剩下的间隔取平均。六万除以这个平均值就是 BPM，保留一位小数。',
            '掐头去尾才是关键。人手点击总有离群值：一下早了半拍，某一拍你在听而不是在数。普通平均会让任何一个把数字拖走；截尾平均把两头都当噪声，读出你实际保持的速度。',
          ],
        },
        {
          heading: '点拍，还是用文件分析',
          paragraphs: [
            '速度只存在于你耳朵里时，用这一页：现场乐队、原声旋律、没法喂给工具的音轨。手上有文件、想要成品里那个精确速度和调性时，用 [调性和 BPM 检测](/key-bpm-finder)。两边对不上，信文件。',
          ],
        },
      ],
    },
    'key-bpm-finder': {
      cardLine: '读出 60 到 180 的 BPM，以及大调或小调。静音显示读不出。',
      name: '调性与 BPM',
      shortName: '调性 BPM',
      title: '调性与 BPM｜在线读取音频的速度和调',
      description: '读取 60 到 180 的 BPM，以及大调或小调。静音显示读不出。页面只读前 60 秒。不会上传。',
      h1: '调性与 BPM，从你放下的文件里读',
      heroAlt: '读取一个音频文件的 BPM 和调性',
      subtitle: '两个数。没有改音高的按钮。',
      intro: '放下一个文件。页面读出 60 到 180 的 BPM，以及一个调：音名加大调或小调。BPM 是起始之间最强的间隔。超出这个范围的间隔会折半或折倍，直到落进区间。调性是和音级能量最吻合的那套固定大小调轮廓。静音显示「读不出」，不是 0 BPM，也不是 C 大调。只读前 60 秒。短于 2 秒的文件没有 BPM。这一页不改文件。改音高用变调页。不会上传。',
      usesHeading: '调性与 BPM 检测的常见使用场景',
      uses: [
        '混接对拍：先读 BPM，再决定要不要变速对拍。',
        '变调参考：先读调性，再去[变调](/pitch-changer)移到目标调。',
        '练习配套：按读出的调练音阶，按 BPM 设节拍器。',
        '采样整理：给采样库标上调性和速度。',
        '翻唱准备：确认原曲调性，决定升几个半音。',
        '制作规划：Remix 前先知道源材料的速度和调。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '读数直接给结论',
          text: 'BPM 和调性一次读出：变速、变调、设节拍器都有依据，不用凭感觉猜。',
        },
        {
          icon: 'check',
          title: '文件保持原样',
          text: '只读取不改音频：检测完文件一个采样都没动，也无需导出。',
        },
      ],
      howTo: [
        { name: '放下文件', text: '音频，或带声轨的视频。浏览器解码。不会上传。' },
        { name: '读 BPM 和调性', text: 'BPM 是 60 到 180 的整数。调性是音名加大调或小调。数字下面那句写出会读反的情况。' },
        { name: '文件保持原样', text: '这一页不导出改过的文件。变调页才改音高，时长不变。' },
      ],
      faqs: [
        { q: '文件会上传吗？', a: '不会。浏览器解码，并在内存里读采样。页面加载之后可以断网，你放下的文件仍然能读。' },
        { q: '读数有多准？', a: 'BPM 是 60 到 180 之间最强的起始间隔，取整数。调性是一套固定的大调轮廓和一套固定的小调轮廓，各 12 个权重，取最吻合的那个。它不是和弦记谱。' },
        { q: '它做不到什么？', a: '它不改音高，也不改速度。没有换成新调的按钮。短于 2 秒的文件没有 BPM。静音显示读不出，不是 0，也不是 C 大调。只读前 60 秒。' },
        { q: '和变调、变速有什么不同？', a: '这一页只读。变调页改音高，时长不变。变速页改时长，音高跟着走。变速保调页改时长，音高不动，从 0.75× 到 1.25×。' },
        { q: '手机上能用吗？', a: '能。放下文件，读这两个数。投放区和重置按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      screenshotsAlt: [
        '调性与 BPM：还没载入文件或输入时的页面',
        '调性与 BPM：读取文件或点击之后',
      ],
      sections: [
        {
          heading: '两个数字是什么',
          paragraphs: [
            'BPM 是起音之间最强的间隔，从 60 到 180。落到这个范围外的间隔会减半或加倍，直到落进来。',
            '调性是最符合音级能量的大调或小调模板。每个模板是一组固定的 12 个权重。',
          ],
        },
        {
          heading: '读数什么时候不可靠',
          paragraphs: [
            '自由节奏、说话和房间噪声没有稳定间隔，BPM 可能停在错误的倍数上。关系大小调共享很多音，两个可能互换。',
          ],
          bullets: [
            '静音文件两个数字都显示“读不出”。',
            '短于 2 秒的文件仍可能显示调性，但不显示 BPM。',
            '只读前 60 秒。',
          ],
        },
        {
          heading: '它不做的事',
          paragraphs: [
            '它不会移调。没有换成新调的按钮。那是变调页，长度保持不变。',
            '它不会改速度。速度页会，而且音高跟着速度走。',
          ],
        },
      ],
    },
    'loudness-meter': {
      cardLine: "读出一个文件有多响，再对齐到播客、流媒体或广播的目标。",
      name: "文件响度计",
      shortName: "响度",
      title: "文件响度计 — 测量并对齐 LUFS（−16/−14/−23）",
      description: "在浏览器里测量音频文件的综合 LUFS，再对齐到 −16、−14 或 −23。样本峰值不超过 −1 dBFS。免费，不会上传。",
      h1: '免费在线 LUFS 响度计 — 查看一首歌的 LUFS',
      heroAlt: '看看文件是否对齐播客或流媒体的响度',
      subtitle: "你丢进来的文件有多响，用综合 LUFS 表示。不是房间有多响。",
      intro: "丢进一个文件，读出它的综合响度（LUFS）和样本峰值。再对齐一个交付目标：播客 −16、流媒体 −14，或广播 −23。增益是整个文件的同一个倍数。如果这个倍数会把最响的采样推过 −1 dBFS，增益就停在那里，页面会告诉你实际达到的 LUFS。这不是房间声级计，也不是峰值归一化。−16、−14 和 −23 是常见交付目标，不是法律规定。处理留在浏览器里。",
      usesHeading: "LUFS 响度计的常见使用场景",
      uses: [
        "播客对齐：看语音备忘或混音离 −16 播客目标还有多远。",
        "流媒体对齐：音乐发行前对齐 −14 LUFS，又不让峰值超过 −1 dBFS。",
        "广播交付：广播类节目按 −23 LUFS 对齐。",
        "峰值检查：样本峰值有没有越过 −1 dBFS，一看便知。",
        "混音体检：响和轻差距太大时，先读 LUFS 再决定要不要上压缩。",
        "多平台对比：同一个文件对齐不同平台前，先各测一遍。",
      ],
      why: [
        {
          icon: 'waveform',
          title: 'K 计权的综合响度',
          text: '按 ITU-R BS.1770 测综合 LUFS——整段时间有多响，是文件的属性；不是房间声级计，也不是峰值归一化。',
        },
        {
          icon: 'lock-simple',
          title: '增益在峰值处停下',
          text: '对齐目标时若最响采样会越过 −1 dBFS，增益自动停住，并如实报出实际达到的 LUFS，不硬凑目标。',
        },
      ],
      howTo: [
        { name: "拖入音频", text: "任意 MP3、WAV、M4A、OGG 或 FLAC。在你的设备上解码并测量。" },
        { name: "看读数", text: "综合响度是文件经 K 计权后的响度，单位 LUFS。样本峰值是最大的一个采样，单位 dBFS。全静音的文件没有可对齐的响度。" },
        { name: "选一个目标并导出", text: "播客是 −16，流媒体是 −14，广播是 −23。导出 MP3 或 WAV。如果峰值会超过 −1 dBFS，增益会停下，说明行写出你实际得到的 LUFS。" },
      ],
      faqs: [
        { q: "音频会上传吗？", a: "不会。文件在浏览器里解码和测量。页面加载完可以断网，导出照样能用。" },
        { q: "这个数字是什么意思？", a: "综合 LUFS 是文件在整段时间里有多响，按 ITU-R BS.1770 的 K 计权。它是文件的属性。不是房间的读数，也不是 A 计权的声压级。" },
        { q: "这和归一化有什么不同？", a: "归一化把文件抬高，直到最响的采样碰到一个峰值。这一页对齐的是综合响度。一个文件可以已经做了峰值归一化，却仍然离 −16 LUFS 很远。响和轻之间的差距不变。要把这个差距收窄，用电平压缩。" },
        { q: "−16、−14 和 −23 是法律规定吗？", a: "不是。它们是常见的交付目标：播客常要大约 −16 LUFS，音乐流媒体大约 −14，广播大约 −23。这一页不保证你的文件能通过某个平台或播出机构。" },
        { q: "这个峰值是真峰值吗？", a: "不是。样本峰值是文件里最大的一个采样。真峰值要做过采样，采样点之间可能还更高一点。这一页把样本峰值停在 −1 dBFS，不报告 dBTP。" },
        { q: "手机上能用吗？", a: "能。三个目标和导出按钮在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。" },
      ],
      dropHint: "拖入音频文件，或点击浏览",
      screenshotsAlt: [
        '文件响度计：还没载入文件或输入时的页面',
        '文件响度计：读取文件或点击之后',
      ],
      sections: [
        {
          heading: '读的是文件，不是房间',
          paragraphs: [
            '这个数字是积分 LUFS：经过 ITU-R BS.1770 的 K 加权之后，文件从头到尾有多响。它是文件的属性，不是房间的读数，也不是 A 计权的声压级。',
            '页面还会显示采样峰值。那个峰值不是真峰值。采样间峰值在某些播放路径上仍然可能越过上限。',
          ],
        },
        {
          heading: '大家实际在用的目标',
          paragraphs: [
            '常见的参考点是行业惯例，不是法律上限：',
          ],
          bullets: [
            '说话类播客约 −16 LUFS。',
            '很多音乐流媒体约 −14 LUFS。',
            '广播类节目响度约 −23 LUFS。',
          ],
        },
        {
          heading: '增益会在峰值处停下',
          paragraphs: [
            '套用建议增益时，采样峰值会超过 −1 dBFS 它就停。一个文件可以已经做过峰值标准化，却仍然离 −16 LUFS 很远，因为一声咳嗽定了峰值，其余部分还是小声。',
            '标准化只追那个峰值，追到约 −0.2 dB。缩小响亮和安静差距的是电平压缩器。这一页负责测量。它不会假装一个数字就能做出母带。',
          ],
        },
      ],
    },
    'multi-track-audio-editor': {
      cardLine: '把人声、旁白和伴奏叠在一条时间线上，导出成一个文件。',
      name: '多轨音频编辑器',
      shortName: '多轨编辑',
      title: '多轨音频编辑 - 在线免费叠轨混音',
      description: '把多个音频叠在同一条时间线上，分别调音量和声像，再导出一个文件。浏览器里完成，不会上传。',
      h1: '多轨音频编辑 — 把几条音轨叠成一个混音',
      heroAlt: '分别调节人声和伴奏的音量与声像',
      subtitle: '最多 8 条音轨叠在一起，调好每一条，导出一个混音。',
      intro: '把人声放在伴奏上，或把旁白放在背景乐上，一起听。每个文件是一条轨：音量、声像、静音、独奏，以及从什么时候开始。混音在浏览器里相加。不会上传。关掉标签页，这次编辑就没了。',
      usesHeading: '多轨混音的常见使用场景',
      uses: [
        '人声配乐：语音备忘压在背景乐下，拖到前奏结束再开口。',
        '粗混 demo：人声、鼓、吉他三轨粗混成一个文件。',
        '播客双声道：两人分轨录，各自调平衡再合成。',
        '音效叠层：多个音效摆在时间轴的不同位置。',
        '音频移位：拖动音轨改出场时间，精确对齐画面。',
        '独奏伴奏：给自己的演奏配一条伴奏轨。',
      ],
      why: [
        {
          icon: 'layers',
          title: '8 轨时间轴',
          text: '最多 8 条音轨自由拖动定位，每轨独立调平衡——混音的所有层次一个文件听清。',
        },
        {
          icon: 'volume',
          title: '混音导出',
          text: '全部音轨混成一个文件导出：MP3 或 WAV。',
        },
      ],
      howTo: [
        { name: '加入文件', text: '拖入两个或更多音频，或点击选择。每个文件成为一条轨。这一页到 8 条为止。' },
        { name: '摆好并调平衡', text: '拖动片段决定它何时开始，拖两端裁掉不要的头尾。在这一行调音量和声像，也可以直接输入入点和裁切时间。静音和独奏在同一行。' },
        { name: '先听再导出', text: '点播放混音。导出 MP3 或 WAV。如果加在一起会削波，整段按同一个比例降低，页面会写出降了多少 dB。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。浏览器用 decodeAudioData 解码每个文件，再在内存里把采样加在一起。页面加载完，导出不需要服务器。关掉标签页，这次会话就丢了：没有账号，也没有保存的工程。' },
        { q: '声音会变成什么样？', a: '各轨重采样到它们当中最高的采样率，并且至少 44.1 kHz，用线性插值。WAV 导出是这个立体声混音的 16 位 PCM。MP3 按你选的比特率编码一次，最高 320 kbps。如果峰值超过 0.98，整段混音按同一个倍数缩小，让峰值落在 0.98。这是一次增益，不是压缩器，也不会因此多编码一次。' },
        { q: '它做不到什么？', a: '不录 MIDI，不加载乐器和采样，不画音量曲线，也不会自动把音乐压在人声下面。每条轨一个片段，一共 8 条，没有工程文件。插件、自动化，以及明天还要打开的会话，用 Audacity 或 BandLab。' },
        { q: '这和音频合并有什么不同？', a: '音频合并是首尾相接，上一个结束下一个才开始，衔接处可以交叉淡化。这一页是同时播放。要一条播放列表，用音频合并。要人声叠在伴奏上，用这一页。' },
        { q: '手机上能用吗？', a: '能。时间线可以横着滑。音量、声像、入点和裁切是滑杆和数字，不靠精确拖动。当前的 Chrome、Edge、Firefox 和 Safari 能解常见格式。某个文件解不了就跳过，其他轨还在。' },
        { q: '为什么只有 8 条？', a: '播放之前，每条轨都要解码进内存。八条立体声对手机标签页已经很多。十六轨再加插件是另一种工具。' },
      ],
      dropHint: '拖入两个或更多音频，把它们叠在一起',
      screenshotsAlt: [
        '多轨音频编辑器 拖放区：拖入文件或点击浏览，不会上传',
        '多轨音频编辑器 工作区，文件已载入',
        '多轨音频编辑器 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '一个小混音台，不是 DAW',
          paragraphs: [
            '每个文件是各自轨道上的一段。你可以调音量、声像、静音、独奏，以及这一段从什么时候开始。最多八条轨道一起播放，导出成一个文件。',
            '这一页不加载插件，也不保存能重新打开的项目。最多 8 轨。',
          ],
        },
        {
          heading: '适合拿来做什么',
          paragraphs: [
            '本来要在大型软件里合并的短叠层，可以放这里：',
          ],
          bullets: [
            '音乐铺底上叠一条人声，人声更响。',
            '两条 take 按开始时间对齐，独奏一条来对比。',
            '用声像把立体声位置挪一挪，然后一次导出。',
          ],
        },
        {
          heading: '关掉标签页，这次会话就结束',
          paragraphs: [
            '什么都不上传，也没有工程文件。导出前关掉标签页，混音就没了。',
            '要一段接一段播放、而不是叠在一起，去 [音频合并](/audio-joiner)。那边的交叉淡化是 0 到 5 秒，步进 0.5 秒。这一页是叠轨。',
          ],
        },
      ],
    },
    'split-mp3': {
      cardLine: '把一个文件切成 2 到 16 段等长音频，一起下载。',
      name: 'MP3 分段',
      shortName: '分段',
      title: 'MP3 分段工具 — 在线把 MP3 分割成 2–16 段，打包 ZIP',
      description: '把一段录音切成 2 到 16 个等长文件，打成一个压缩包。WAV 保留切点采样。每段 MP3 只编码一次，最高 320 kbps。',
      h1: 'MP3 分段 — 把 MP3 切成多个文件',
      heroAlt: '把一段录音切成等长的几段',
      subtitle: '等长分段，2 到 16 段，打在一个压缩包里。',
      intro: '这一页把一个文件切成等长的几段。段数从 2 到 16，一开始是 2，也就是切成两段。每段一样长，最多差一个采样。在波形上拖出选区，就只切那一段。没有选区就切整个文件。各段打成一个压缩包下载。解码和切割都留在浏览器里。',
      usesHeading: 'MP3 分段的常见使用场景',
      uses: [
        '超长文件分割：一个 MP3 太长发不出去，切成几段分别发。',
        '语音备忘分批：把长备忘切成等长几段，一段一段消化。',
        '消息应用适配：应用不收大文件，切成两半就能发。',
        '练习分段：把语言课或乐器练习切成等长小段逐段练。',
        '存档切片：长录音按固定时长切片存档，方便检索。',
        '样本素材：等分出多个候选片段，挑最好的一段再去裁剪。',
      ],
      why: [
        {
          icon: 'scissors',
          title: '切在采样上，等长分毫不差',
          text: '各段等长，最多差一个采样；没有重叠也没有空隙。拖了选区就只切那一段，没有选区就切整个文件。',
        },
        {
          icon: 'layers',
          title: '一次导出，ZIP 打包',
          text: '段数 2–16 任选，各段按顺序编号，打成一个 ZIP 下载。MP3 最高 320 kbps，WAV 保留原始采样。',
        },
      ],
      howTo: [
        { name: '拖入音频', text: '任意 MP3、WAV、M4A、OGG 或 FLAC 拖进虚线框，或点击浏览。在你的设备上解码，不上传。' },
        { name: '设定段数', text: '「段数」滑杆从 2 到 16，状态行写出文件个数和每段大约多长。只想切其中一段，就在波形上拖出选区。' },
        { name: '点「下载分段」', text: '各段按顺序编号，打成一个 ZIP 下载。切口都落在采样边界上，等长无重叠。' },
        { name: '解压拿走', text: '压缩包里是第 1 段、第 2 段等独立文件。MP3 按所选比特率编码一次，WAV 保留原始采样。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。文件在浏览器里解码、切开、再打成压缩包。页面加载完可以断网，导出照样能用。WAV 不用再下载什么。MP3 编码器加载过一次之后，断网也能编码。' },
        { q: '切口落在哪里？', a: '落在采样边界上。各段等长。采样数除不尽时，前面的段会多一个采样。没有重叠，也没有丢掉的采样。WAV 就是这些采样。每段 MP3 按你选的比特率编码一次，最高 320 kbps。把这些 MP3 首尾接着放，接缝处可能多出几毫秒的编码填充。' },
        { q: '会按静音或章节切吗？', a: '不会。切口按相等的时间，不找停顿、章节标记或下一首歌。安静的小节也会按时钟切开。段数只有 2 到 16。采样数比段数还少时，导出停住。' },
        { q: '这和剪辑有什么不同？', a: '音频剪辑和 MP3 剪辑留下一段，或删掉一段，然后保存一个文件。这一页写出好几段等长的文件。音频合并正好相反，把不同的文件排成一排。跟着停顿走的是去静音。' },
        { q: '手机上能用吗？', a: '能。段数滑杆、波形和下载在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。iPhone 上 Safari 会把压缩包存进文件 App。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '下载分段',
      screenshotsAlt: [
        'MP3 分段 拖放区：拖入文件或点击浏览，不会上传',
        'MP3 分段 工作区，文件已载入',
        'MP3 分段 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '等长切开，切在采样上',
          paragraphs: [
            '份数从 2 到 16，默认 2。每一份长度相同，只有长度除不尽时，靠前的几份会多一个采样。下一份从前一份结束后的那个采样开始。没有重叠，也没有空隙。',
            '拖一个选区，就只切那一段。没有选区，就切整个文件。WAV 是这些采样。MP3 导出会按你选的比特率、最高 320 kbps，把每一份编码一次。把 MP3 连着播放，接缝处可能听出几毫秒的编码器填充。采样本身没有重叠。',
          ],
        },
        {
          heading: '一个文件，几次下载',
          paragraphs: [
            'zip 是这些分段离开浏览器的方式：',
          ],
          bullets: [
            '一条长语音备忘切成等长的几份，一次发一段。',
            '消息应用不收整首时，把一首歌切成两半。',
            '想要几个独立文件，而不是一个裁好的片段。',
          ],
        },
        {
          heading: '不是剪切页，也不是静音扫描',
          paragraphs: [
            '音频剪辑和 MP3 剪辑保留一段，或者删掉一段，只存一个文件。这一页写出几个等长的文件。音频合并是反方向：把不同文件排成一列。',
            '它不找静音、章节标记或换歌的位置。安静的整小节也会按时间切下去。需要让刀口跟着停顿走，用静音移除，再裁剩下的部分。',
          ],
        },
      ],
    },
    'stereo-to-mono': {
      cardLine: '把每个声道平均成一条，再下载这个文件。',
      name: '立体声转单声道',
      shortName: '转单声道',
      title: '立体声转单声道 — 各声道取平均，一键合并',
      description: '把立体声各声道平均成一条单声道：WAV 保留平均后的采样，MP3 只编码一次，最高 320 kbps。浏览器本地处理，不上传。',
      h1: '立体声转单声道',
      heroAlt: '把立体声平均成一条声道',
      subtitle: '一条声道，是文件里各声道的平均。',
      intro: '这一页写出一条声道。每个采样是文件里各声道的平均，左右声因此落在中间。本来就是一条声道的文件会原样复制。解码和平均都在你的浏览器里。',
      usesHeading: '立体声转单声道的常见使用场景',
      uses: [
        '单设备兼容：一只喇叭的设备播放左右不一样时，合成单声道。',
        '应用拒收：只收单声道的播放器或表单，转一版给它。',
        '人声对齐：双声道人声两边不完全一致，平均成一条。',
        '转写预处理：转写工具吃单声道更稳。',
        '视频音轨：单声道视频项目的音频标准化。',
        '批量合并：多个立体声文件一次全部转单声道。',
      ],
      why: [
        {
          icon: 'convert',
          title: '逐采样取平均',
          text: '左右声道逐个采样取平均——不是只取一边，两边的信息都在。',
        },
        {
          icon: 'layers',
          title: '批量转换',
          text: '多个文件共用设置，逐个转换后打包 ZIP。',
        },
      ],
      howTo: [
        { name: '放入音频', text: '立体声文件拖进虚线框，或点击浏览。设备内解码。' },
        { name: '导出平均', text: '点「下载单声道」，各声道逐采样取平均。' },
        { name: '打开文件', text: '单声道文件直接下载。' },
        { name: '批量处理', text: '多个文件逐个处理，打包 ZIP。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。文件在浏览器里解码，也在那里平均。页面加载完可以断网，导出照样能用。WAV 不用再下载什么。MP3 编码器加载过一次之后，断网也能编码。' },
        { q: '单声道是怎么来的？', a: '每个采样是那一刻各声道之和，再除以声道数。两条就是（左 + 右）/ 2。本来就是一条的文件会原样复制。WAV 留下这些采样。MP3 按你选的比特率只编码这一条，最高 320 kbps。' },
        { q: '能把单声道变成立体声吗？', a: '不能。这一页不会凭空做出第二条声道。把一条复制到左右两边，信号还是一条，那是另一件事。这里下载的文件只有一条声道。' },
        { q: '这和剪辑有什么不同？', a: '音频剪辑留下一段时间，声道数不动。MP3 转 WAV 换的是容器，声道也不动。这一页改的是声道数，长度不动。' },
        { q: '手机上能用吗？', a: '能。放入、播放和下载在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '下载单声道',
      screenshotsAlt: [
        '立体声转单声道 拖放区：拖入文件或点击浏览，不会上传',
        '立体声转单声道 工作区，文件已载入',
        '立体声转单声道 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '逐个采样取平均',
          paragraphs: [
            '每个输出采样是那一刻各声道相加，再除以文件已有的声道数。两个声道就是（左 + 右）/ 2。一个声道会直接复制进新缓冲区。长度不变。',
            '这一页不做立体声像、不做宽度控制，也不生成第二个文件。导出一个声道。WAV 是这些采样。MP3 把这个单声道文件编码一次，比特率由你选，最高 320 kbps。',
          ],
        },
        {
          heading: '单声道拿来干什么',
          paragraphs: [
            '取平均就是全部工作：',
          ],
          bullets: [
            '一条语音备忘，应该在一只音箱上听起来一样。',
            '文件仍然是两个声道、被只收单声道的应用拒了。',
            '想要居中的混音，而不是摊在左右两边。',
          ],
        },
        {
          heading: '不是裁剪，也不是假立体声',
          paragraphs: [
            '音频剪辑保留一段，声道保持原样。MP3 转 WAV 改格式，也保留声道。这一页保持长度，写出一个声道。',
            '它不会把一个声道变成两个。复制一个声道让播放器显示立体声，里面仍然只有一个信号。这次导出不是干这个的。',
          ],
        },
      ],
    },
    bitcrusher: {
      cardLine: '量化到 1 到 16 位，每个台阶最多保持 32 个采样。',
      name: 'Bitcrusher',
      shortName: '粉碎',
      title: 'Bitcrusher — 在线做 1–16 位量化音效',
      description: '把音频从 16 位量化到 1 位，每个台阶最多保持 32 个采样：老游戏机的颗粒感音效。位数和保持都可调，浏览器本地处理。',
      h1: 'Bitcrusher 在线',
      heroAlt: '把平滑的波形变成台阶',
      subtitle: '位数从 1 到 16，保持从 1 到 32 个采样。',
      intro: '这个在线 Bitcrusher 减少每个采样能取的级数，再把这个级数保持一段采样。立体声还是立体声：每条声道各自粉碎。拖一个选区，就只粉碎这一段。解码和粉碎都在你的浏览器里。',
      usesHeading: 'Bitcrusher 的常见使用场景',
      uses: [
        '老游戏机人声：人声降到位数，听上去像 8-bit 主机。',
        '鼓循环颗粒：台阶感听得出来的鼓循环。',
        '复古电子：合成器线条加量化，复古电子味。',
        '音效设计：游戏 UI 音效做低精度处理。',
        '科幻氛围：极端位数做人声或氛围的机器感。',
        'Lo-fi 质感：轻度量化给整轨加 lo-fi 颗粒。',
      ],
      why: [
        {
          icon: 'sliders',
          title: '两个旋钮定音色',
          text: '位数（1–16）决定台阶大小，保持（最多 32 采样）决定颗粒密度——老游戏机的声音就是这么来的。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '量化在浏览器本地完成，WAV 保留粉碎后的采样。',
        },
      ],
      howTo: [
        { name: '放入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '设置位数和保持', text: '位数 1–16、保持最多 32 采样，两个滑杆边听边调。' },
        { name: '导出', text: '点「导出粉碎」，WAV 保留粉碎后的采样，MP3 只编码一次。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。文件在浏览器里解码，也在那里粉碎。页面加载完可以断网，导出照样能用。WAV 不用再下载什么。MP3 编码器加载过一次之后，断网也能编码。' },
        { q: '位数和保持是什么？', a: '位数决定级数。16 位、保持为 1 时，满幅度的采样停在原处。1 位时，采样变成向上、向下或静音。保持把当前级数重复那么多个采样，所以保持 4 就是同一个值跨过 4 个采样，然后再取下一步。每条声道各自粉碎，立体声文件还是立体声。' },
        { q: 'MP3 能保住台阶吗？', a: 'WAV 就是粉碎后的采样。MP3 按你选的比特率编码一次，最高 320 kbps。编码器可能把尖台阶磨圆。台阶必须留下来，就导出 WAV。' },
        { q: '这和失真有什么不同？', a: '音频失真用一条平滑的曲线去弯波形。这一页把采样换成很少的几级，再保持住。回声是在后面加副本。低通滤波器把高频压下去。这些都不是位深控制。' },
        { q: '手机上能用吗？', a: '能。位数滑杆、保持滑杆、波形和下载在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '导出粉碎',
      screenshotsAlt: [
        'Bitcrusher 拖放区：拖入文件或点击浏览，不会上传',
        'Bitcrusher 工作区，文件已载入',
        'Bitcrusher 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '先量化，再保持',
          paragraphs: [
            '位数从 1 到 16，起始 8。采样会四舍五入到这个范围里最近的档位。1 位时只有上、下或者静音。16 位、保持为 1 时，满刻度采样仍然停在满刻度。',
            '保持从 1 到 32，起始 2。当前档位会重复这么多个采样，再让下一个采样定新的档位。左右声道分别处理。长度不变。',
          ],
        },
        {
          heading: '该听什么',
          paragraphs: [
            '两个数字干的是不同的活：',
          ],
          bullets: [
            '位数从 1 到 16，起始 8。',
            '保持从 1 到 32 个采样，起始 2。保持为 1 会留下每个采样。',
            '只想粉碎一句话，就拖一个选区。没有选区，整个文件都会被粉碎。',
          ],
        },
        {
          heading: '不是失真器',
          paragraphs: [
            '音频失真是平滑的曲线，从轻微削波到硬削波。这一页是台阶加保持。回声加的是延迟后的副本。低通只压高频。',
            'WAV 保住粉碎后的采样。MP3 把它们编码一次，最高 320 kbps，可能把棱角磨软。台阶必须保留，就用 WAV。',
          ],
        },
      ],
    },
    '432-hz-converter': {
      cardLine: '把音高降低大约 0.32 个半音，长度不变。',
      name: '432 Hz 转换',
      shortName: '432 Hz',
      title: '432 Hz 转换 — 音高降 0.32 半音，时长不变',
      description: '把 440 Hz 调的曲子移到 432 Hz：按 12·log₂(432/440) 降约 0.32 半音，长度和速度完全不变。浏览器本地处理，不上传。',
      h1: '432 Hz 转换',
      heroAlt: '把文件降低大约 0.32 个半音',
      subtitle: '整个文件大约降低 0.32 个半音。长度不变。',
      intro: '这个转换把整个文件移动 12 乘以 log2(432/440)，大约降低 0.32 个半音。440 Hz 的音会靠近 432 Hz。长度不变，也不会一个音一个音地修。解码和移位都在你的浏览器里。',
      usesHeading: '432 Hz 转换的常见使用场景',
      uses: [
        '调律偏好：把 440 Hz 的曲子移到你偏好的 432 Hz。',
        '循环对拍：循环长度必须不变时，只有移位不改时长。',
        '整张专辑：多首曲子统一移到 432 Hz。',
        '对比试听：440 和 432 各留一版自己对比。',
        '冥想音频：冥想或放松素材统一到 432 Hz。',
        '乐器备份：原版保留，432 版单独导出。',
      ],
      why: [
        {
          icon: 'convert',
          title: '只移音高，不改时长',
          text: '按 12·log₂(432/440) 精确移位约 0.32 半音：长度、速度和节奏完全不变。',
        },
        {
          icon: 'lock-simple',
          title: '本地处理',
          text: '移位在浏览器本地完成，音频不上传。',
        },
      ],
      howTo: [
        { name: '放入音频', text: '音频拖进虚线框，或点击浏览。设备内解码。' },
        { name: '听这次移位', text: '移位约 0.32 半音：长度不变，只有音高整体下降。' },
        { name: '导出', text: '点「下载 432 Hz」，导出 MP3 或 WAV。' },
        { name: '拿走文件', text: '文件名带 -edited 后缀。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。文件在浏览器里解码，也在那里移位。页面加载完可以断网，导出照样能用。WAV 不用再下载什么。MP3 编码器加载过一次之后，断网也能编码。' },
        { q: '移了多少？', a: '移位量是 12 乘以 log2(432/440)，大约降低 0.3177 个半音，页面用的就是这个小数。它不会四舍五入到最近的整数半音，那会变成 0，文件就不会变。440 Hz 的音靠近 432 Hz。文件里其余的音移动同样的量。WAV 是这些移过的采样。MP3 按你选的比特率编码一次，最高 320 kbps。' },
        { q: '长度会变吗？', a: '不会。这是变调，不是变速。变速保调会改长度。音频变速也会改长度，除非你保住音高。这里长度不动，音高下降。' },
        { q: '能只修一个音吗？', a: '不能。整个文件一起动。一个和弦不会被一个音一个音地拉到 432 Hz。短于 32 个采样的文件会原样返回，因为移位需要这么长的音频。这一页不说结果更健康、更平静或更好。' },
        { q: '手机上能用吗？', a: '能。放入、播放和下载在当前的 Chrome、Edge、Firefox 和 Safari 里都能用触摸操作。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '下载 432 Hz',
      screenshotsAlt: [
        '432 Hz 转换 拖放区：拖入文件或点击浏览，不会上传',
        '432 Hz 转换 工作区，文件已载入',
        '432 Hz 转换 导出后：状态栏显示已下载的文件名',
      ],
      sections: [
        {
          heading: '整个文件移一个偏移',
          paragraphs: [
            '移动量是 12 乘以 log2(432/440)，大约低 0.32 个半音。页面会把这个小数传下去。四舍五入到整半音就成了 0，文件根本不会动。',
            '440 Hz 的纯音会移向 432 Hz。其他每个音都移动同样的比例。长度不变。WAV 是移动后的采样。MP3 把它们编码一次，比特率由你选，最高 320 kbps。',
          ],
        },
        {
          heading: '什么保持不变',
          paragraphs: [
            '移动本身就是全部工作：',
          ],
          bullets: [
            '长度和你拖进来的文件一致。',
            '和弦整体一起移动。音符不会被一个个拉到 432 Hz 上。',
            '短于 32 个采样的文件原样返回。',
          ],
        },
        {
          heading: '不是变速',
          paragraphs: [
            '站里的变调按整个半音移动。这一页用小数，大约低 0.32，所以结果和把那个控件留在 0 不一样。',
            '变速不变调和变速会改长度。这一页不会。它也不说结果更健康或更好。它只移动音高。',
          ],
        },
      ],
    },
    'audio-to-midi': {
      cardLine: '把旋律、人声或独奏钢琴写成 MIDI。完整混音会错。',
      name: '音频转 MIDI',
      shortName: '转 MIDI',
      title: '音频转 MIDI - 单件乐器，3 分钟',
      description: '把旋律、人声或独奏钢琴写成 MIDI。完整混音、鼓和密集和弦会错。最长 3 分钟。不会上传。',
      h1: '音频转 MIDI，从一件乐器来',
      heroAlt: '把旋律或独奏钢琴写成 MIDI 音符',
      subtitle: '浏览器里的 .mid 文件。一件乐器，最长 3 分钟。',
      intro: '放下一段旋律、一句哼唱，或一段独奏钢琴。这一页写出 MIDI，能在 GarageBand、Ableton 或 Logic 里打开：每个音的音高、起点、长度和力度。Spotify 的 Basic Pitch 模型在这个标签页里跑。音频不会上传。模型不到 1 MB，从本站下载一次。完整混音、鼓或密集和弦会错。超过 3 分钟要先裁短。',
      usesHeading: '音频转 MIDI 的常见使用场景',
      uses: [
        '哼唱成谱：哼出来的旋律转成 MIDI，进宿主改音符，不用重录。',
        '钢琴记谱：独奏钢琴转成音符，不用手打谱。',
        '换音色：MIDI 挂任意音源，钢琴换弦乐。',
        '练习对照：把自己的演奏转成音符对照检查。',
        '编曲起步：单轨 demo 转 MIDI 再展开编曲。',
        '旋律存档：灵感旋律转 MIDI 存进素材库。',
      ],
      why: [
        {
          icon: 'note',
          title: '音符可编辑',
          text: '转出来的是 MIDI 音符不是音频：音高、时值进了宿主随便改。',
        },
        {
          icon: 'file',
          title: '单件乐器最准',
          text: '单旋律或单件乐器效果最好；整首混音不是它的菜——页内有诚实说明。',
        },
      ],
      howTo: [
        { name: '放下一件乐器', text: '放入 MP3、WAV、M4A，或带声轨的视频。浏览器解码。不会上传。超过 3 分钟会停住，直到你先裁短。' },
        { name: '转成音符', text: '第一次会从本站下载模型，不到 1 MB。然后页面列出音符和数量。' },
        { name: '下载 MIDI', text: '保存 .mid 文件。一条音轨，只有音符开和音符关。这一页没有试听。' },
      ],
      faqs: [
        { q: '音频会上传吗？', a: '不会。浏览器解码，并在标签页里跑 Basic Pitch。唯一的网络请求是模型，不到 1 MB，从本站来，只有第一次。之后浏览器可以复用这份副本。音频本身不会送出去。' },
        { q: 'MIDI 文件里有什么？', a: '一条音轨，MIDI 类型 0。每个音有 21 到 108 的音高、起点、长度和力度。速度标记是 120，这样时间和录音的秒数对齐。这个 120 不是歌的 BPM。音轨从 General MIDI 钢琴开始，宿主软件才有声音可放。它不是原来那件乐器的录音。这里不提供 WAV 和 MP3。' },
        { q: '它会错在哪里？', a: '完整混音、鼓和密集和弦。Basic Pitch 是按一次一件乐器做的，忙的录音会多出音符，或者一个都没有。文件没有弯音曲线，滑音会变成平稳的音。没有试听，没有乐谱，也不分轨。超过 3 分钟会拒绝。先在音频裁剪里剪短，再回来。' },
        { q: '这和调性与 BPM 有什么不同？', a: '调性与 BPM 读两个数，不写文件。这一页写音符。它不告诉你调和 BPM。那两个数到调性与 BPM 页去读。只改原音频的音高、不生成音符，用变调页。' },
        { q: '手机上能用吗？', a: '能，在当前的 Chrome、Edge、Firefox 和 Safari 里。上限是 3 分钟，因为模型要把音符留在内存里。内存不够的手机会转换失败。文件不会被改，可以换一段更短的。下载的是 .mid 文件。' },
        { q: '我是在 Logic Pro 里搜到这个的。是同一个吗？', a: '不是。Logic 在音轨上有自己的音频转 MIDI。这一页是给浏览器的，Logic 没开的时候用。写出的 .mid 之后可以拖进 Logic。它不会在 macOS 里移除 MIDI 设备，也不会改 Logic 工程。' },
      ],
      dropHint: '拖入音频文件，或点击浏览',
      exportLabel: '转为 MIDI',
      sections: [
        {
          heading: '一个乐器，在这个标签页里',
          paragraphs: [
            'Basic Pitch 以 22050 Hz 听一个声道。模型跑之前，立体声会先混成单声道。权重不到 1 MB，从本站加载一次。',
            '它是给旋律、人声或独奏钢琴用的。完整混音、鼓组，或者厚厚的和弦堆，超出这个模型能把握的范围。',
          ],
        },
        {
          heading: '文件里到底是什么',
          paragraphs: [
            '下载的是标准 MIDI 文件，不是音频：',
          ],
          bullets: [
            '音高、开始、长度和力度。没有弯音曲线。',
            '速度标记 120，所以时间点和录音的秒数对得上。那不是这首歌的 BPM。',
            '一条轨，默认 General MIDI 钢琴，DAW 打开就有声音。',
          ],
        },
        {
          heading: '这一页不做的事',
          paragraphs: [
            '它不会把 MIDI 播回来，不会打印乐谱，也不会把歌拆成分轨。它不会给和弦命名。',
            '超过 3 分钟会被拒绝。先裁剪。Logic 自带的转换留在 Logic 里。这一页不会打开 Logic 工程。',
          ],
        },
      ],
    },
    soundboard: {
      cardLine: "一块你自己的音效板：录或传音效片段，现场触发。",
      name: "音效板",
      shortName: "音效板",
      title: "音效板 - 自带十一个合成音",
      description: "点方块或按热键，几个声音可以叠着放。页面已经合成了十一个音，你再裁自己的，板子存在导出的 JSON 里。",
      h1: "音效板，自带十一个合成音",
      subtitle: "点方块或按上面的键。几个声音可以叠着放。半秒到五秒是好用的长度。",
      intro: "用麦克风录一段，或上传一个音频文件，裁出要的那一段，它就变成板上的一个按钮。点按钮或按数字、字母热键，声音现场触发——还能几个叠在一起，这正是音效板的意义。十一个内置音效由页面即时合成，什么都不加也有一块能用的板子。场景预设一键换成直播、播客或课堂的起步组合。不会上传：解码、裁剪和播放都在当前标签页完成，板子靠你自己导出、导入 JSON 文件来携带。",
      usesHeading: '音效板的常见使用场景',
      uses: [
        '直播整活：现场触发梗音、stinger 和掌声，几个声音叠着放。',
        '课堂互动：抢答器和答对音，大方块触屏也好按。',
        '剧场排练：演出音效现场一键触发。',
        '跑团主持：桌游和派对的音效板。',
        '视频后期：常用音效集齐一块板子，随点随用。',
        '即兴表演：自己合成的声音编成表演素材。',
      ],
      why: [
        {
          icon: 'play',
          title: '十一个合成音起步',
          text: '自带十一个内置合成音，拖进格子就能用，不用先找素材。',
        },
        {
          icon: 'file',
          title: '板子可保存',
          text: '每个格子可裁剪调音，整块板子保存成文件随时复用。',
        },
      ],
      howTo: [
        { name: "从预设或一个音效开始", text: "板子自带十一个合成音效。网格上方的预设一键换成直播、播客或课堂的起步组合。「上传音频」和「录音」加你自己的。" },
        { name: "裁每一刀", text: "点方块右上角的铅笔打开编辑：拖两个把手留住要的段落，循环试听确认，再按「应用裁剪」。顺手改名、换色。" },
        { name: "播放并保存板子", text: "点方块或按上面标的按键——1 到 0，再 Q W E R T Y U I O P。Esc 全部停止。「导出板」把所有音效存进一个 JSON 文件；「导入板」读回来，也读 soundtools.io 的板子。" },
      ],
      faqs: [
        { q: "会上传吗？", a: "不会。文件用 Web Audio API 在当前标签页解码，录音留在你的设备上，播放也在本地。「导出板」直接把 JSON 文件写到你的磁盘。页面加载之后可以断网照用。" },
        { q: "音质是什么水平？", a: "片段保持解码时的采样率。单条「导出 WAV」按该采样率写 16-bit PCM。板子文件把每条音效以 WAV 文本存进 JSON，不会被二次编码。" },
        { q: "能送进 Discord 或游戏通话吗？", a: "不能。Discord、Zoom 和游戏听到的是你的麦克风，不是这一页。Voicemod 和 Resanance 这类 Windows 应用会装一个虚拟麦克风，让别人听到板子。这一页做不到。声音从扬声器或桌面音频出来，OBS 这类采集能录到。手机上，板子就在这台设备上响。" },
        { q: "和录音页有什么不同？", a: "录音页录一条，交给编辑器去裁和导出。这一页同时放很多条，用按键现场触发。它是用来打的，不是用来修一个文件的。" },
        { q: "手机上能用吗？", a: "能。点方块、录音、裁剪，在当前的 Chrome、Edge、Firefox 和 Safari 里都能用，包括 iPhone 和 Android。热键要键盘，所以是电脑上的。iPhone 的播放跟着静音拨片走。" },
        { q: "板子怎么保存？", a: "浏览器里什么都不存。关掉标签页之前要导出，不然板子就没了。导入把 JSON 带回这台或另一台设备。同一个按钮也能读 soundtools.io 的板子：带音频的按钮会过来，渐变色会换成这块板上最接近的颜色。" },
        { q: "能加哪些文件，能有多长？", a: "上传接受 MP3、WAV、M4A、OGG、FLAC 和 AAC，浏览器能解码的都行。超过 60 秒的文件会被跳过，先到音频裁剪页切短。板上好用的长度是半秒到五秒。方块没有固定个数，上限是这个标签页的内存。" },
        { q: "能变调或加回声吗？", a: "这一页不能。把方块导出成 WAV，再到变调页（音高变、时长不变）或慢放加混响页打开。然后用上传音频或替换音频带回来。" },
      ],
      dropHint: "不用文件——点一个方块，或加你自己的",
      sections: [
        {
          heading: '音板怎么工作',
          paragraphs: [
            '音板只干一件事：现在，立刻放出对的那个短声音，不用在文件夹里翻。每个方块是一段。点一下马上播。还在响的时候点另一个，两个一起响。重叠才是重点。',
            '按键跟着板上的顺序：1 到 9，然后 0，然后上面那排字母。Esc 停掉全部。网格上方的预设会把整套换成直播、播客、课堂的起步板，或者一块空板。',
          ],
        },
        {
          heading: '做自己的片段',
          paragraphs: [
            '上传收 MP3、WAV、M4A、OGG、FLAC 或 AAC，在浏览器里解码。录音会打开麦克风。然后铅笔按钮进入裁剪编辑器：拖两个手柄，循环选区，应用。',
            '短才是重点。半秒到五秒就够装一个包袱、一个蜂鸣器或者一声 boom。替换音频会换掉方块下面的声音，名字、颜色和按键都保留。超过 60 秒的文件在上传时会被跳过。',
          ],
          bullets: [
            '对单个声音导出 WAV，会按那段自己的采样率写 16 位 PCM。',
            '方块上的颜色是为了直播时你能找到按键。',
            '十一个内置声音是在页面上合成的。不用下载，没有音库，也不是别人的录音。',
          ],
        },
        {
          heading: '它不做的事',
          paragraphs: [
            '它不会把声音送进通话。Discord、游戏和语音聊天听到的是麦克风。要把音板接进那条路，需要带虚拟音频设备的桌面程序，比如 Windows 上的 Voicemod 或 Resanance。直播的话，老实做法是桌面音频：声音从机器里放出来，OBS 去抓。',
            '它不会在两次访问之间记住音板。关标签页前先导出音板，下次再导入，包括来自 soundtools.io 的音板文件。它不会去搜表情包音库。内置的是这里合成的通用音效，其余都是你带来的文件。',
          ],
        },
      ],
    },
    'music-visualizer': {
      cardLine: '把一首歌变成会动的频谱视频，不用上传。',
      name: '音乐可视化',
      shortName: '音乐可视化',
      title: '音乐可视化 — 把歌做成频谱视频',
      description: '把歌变成会动的频谱视频：频谱柱、镜像柱、环形、示波器四种样式，最高 1080p。浏览器里现场录制，文件不上传。',
      h1: '音乐可视化 — 把一首歌做成频谱视频',
      subtitle: '放一首歌，看着频谱动起来，录成视频。画面和声音都在你的设备上完成。',
      intro: '这一页把歌变成 YouTube、Shorts、抖音常用的那种底视频：音乐的频谱实时跳动，直接从画布上录下来。拖入音频，选好样式和尺寸，按下录制，歌放完视频就进了下载。全程在浏览器里完成——音频在本地解码，不会上传。',
      usesHeading: '音乐可视化的常见使用场景',
      uses: [
        '发歌配视频：新歌发布配一条会动的频谱视频，不用开剪辑软件。',
        '社媒竖屏：9:16 给 Shorts 和抖音，方图给信息流。',
        '播客切片：切片和 demo 配背景画面。',
        '直播开场：开场录一块频谱背景。',
        '演出背景：舞台大屏放实时频谱。',
        '无水印成品：最高 1080p、无水印，视频是你的文件。',
      ],
      why: [
        {
          icon: 'film',
          title: '四种样式四种观感',
          text: '频谱柱、镜像柱、环形、示波器四种样式，主题配色和两种颜色可继续改。',
        },
        {
          icon: 'lock-simple',
          title: '本机录制无水印',
          text: '浏览器直接录画布和声音：没有服务器渲染，没有水印，歌放完视频就进下载。',
        },
      ],
      howTo: [
        { name: '拖入歌曲', text: '把音频拖进虚线框，或点击选择。MP3、WAV、M4A、OGG、FLAC，浏览器能解码的都行。' },
        { name: '选样式', text: '四种样式：频谱柱、镜像柱、环形、示波器，再挑一个主题配色。选完主题，两种颜色还能继续改。' },
        { name: '选尺寸', text: '16:9 给 YouTube，9:16 竖屏给 Shorts 和抖音，方图给信息流，或者自定义。' },
        { name: '录制视频', text: '按「录制视频」。歌完整放一遍，浏览器同步录下画布，放完自动下载。' },
      ],
      faqs: [
        { q: '歌会被上传吗？', a: '不会。文件用 Web Audio API 在当前标签页解码，动画画在这个标签页的画布上，浏览器自己的录制器把画布和声音一起录下来，成品直接写到你的磁盘。' },
        { q: '视频是什么格式和画质？', a: 'Chrome、Edge 和 Firefox 录 WebM：VP9 或 VP8 视频加 Opus 音频（192 kbps），尺寸最高 1080p、30 fps、约 8 Mbps。部分 Chrome 版本会给 MP4——浏览器选第一个能录的容器，文件后缀跟着变。' },
        { q: '3 分钟的歌真要等 3 分钟导出？', a: '是的。视频是跟着歌实时录的，录多久歌就放多久。这是本机录制、不经服务器的诚实代价：不用上传排队，也没有时长上限。录制时别把标签页切到后台——浏览器会限制后台绘图，画面会冻结而声音还在走。' },
        { q: '和波形图生成器有什么不同？', a: '波形图生成器画的是一张静态 PNG：响度随时间的样子，适合当封面或配图。这一页是歌播放时频谱在动，录成视频。同一个文件进去，出来的是静图和视频两个方向。' },
        { q: '手机和 iPhone 上能用吗？', a: 'Android Chrome 能播放也能录制。桌面版 Chrome、Edge、Firefox 都能录。iPhone 和 iPad 的 Safari 能播放、能看到动画，但录不了画布，那里的录制按钮会自动停用——诚实的做法是屏幕录制，或者换电脑。' },
        { q: '视频能商用吗？', a: '视频没有水印，也不附带我们的授权——它是你的文件。里面的歌归你负责：自己的作品、拿到授权的音乐或免版税音频，发出去都随你。' },
      ],
      dropHint: '拖入音频文件，或点击选择',
      exportLabel: '录制视频',
      sections: [
        {
          heading: '这一页实际录的是什么',
          paragraphs: [
            '动画画在你选好尺寸的画布上，浏览器自带的录制器把这块画布和正在播放的音频一起抓下来。没有服务器渲染，也没有水印：歌一结束，文件就由这个标签页写出来。',
            '录制时长和歌一样长。没有水印。',
          ],
        },
        {
          heading: '四种样式',
          paragraphs: [
            '画面用 64 个频段。主题决定颜色。边长从 200 到 2160。',
          ],
          bullets: [
            '频谱柱从底边升起，往峰值方向渐变。',
            '镜像柱把同样的柱子沿中线折开，是经典播放器的样子。',
            '环形把频段排成一个圆。',
            '示波器直接画波形，一条跟着音轨呼吸的线。',
          ],
        },
        {
          heading: '视频适合放哪',
          paragraphs: [
            '预设包含 16:9 和 9:16。自定义边长从 200 到 2160。',
            '视频永远和音频一样长，只想要一段就先裁歌。想要一张静态的歌曲图、不要视频，波形生成器能用同一个文件画一张。',
          ],
        },
      ],
    },
  },
};
