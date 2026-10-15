# i18n translation guide — how LLMs should translate this site

> Purpose: a prompt-ready reference for translating `src/i18n/*.ts` catalogs and
> locale page copy. Written for LLM translators, but the review checklist (§6)
> applies to humans too. Companion to §7 of `competitive-analysis-audioeditor.md`
> (their i18n failures are the negative examples referenced below).

## 0. Scope

**In scope:** `src/i18n/{de,es,id,ja,ko,pt,zh}.ts` catalogs (UI strings, tool copy,
metadata, FAQ, how-to steps), locale homepage copy, `<title>`/meta description.

**Out of scope:** guide articles. Per `src/i18n/locales.ts`, guides are **written
per market, not translated** (only the MP4-conversion guide is a true translation).
Writing a new guide in a non-EN market is a content task that still follows the
terminology in §3, but never machine-translate an existing guide into another locale.

## 1. Prime directive

**Rewrite the meaning, don't translate the words.** The en source is a semantic
spec, not a string to transform. If your output, read aloud by a native speaker,
sounds like "a foreigner wrote it", it's wrong — even if it's dictionary-perfect.
Every known i18n embarrassment in our competitive audit was a *literal* translation:
zh-Hant 剪切 for "trim" (Taiwan: 剪輯), ru «Без загрузки» for "no download" (ambiguous,
reads as "no upload"), es "Sin descarga requerida" (calque of "no download required";
natural: «Sin descargas»).

Corollary: sentence structure, metaphors, and emphasis may change freely. Facts may
not (§2).

## 2. Hard rules (violations = build/review failure)

1. **Key parity is enforced by types.** `Catalog extends Shell`, so a missing or
   renamed key fails `astro check`. Never add locale-only keys; never "fix" an en
   key name from a locale file.
2. **Never ship a raw key or empty string.** If genuinely stuck, translate literally
   and mark `// TODO(i18n): review` — but raw keys in output are how audioeditor.org
   got `seo.blog.title` indexed as a page title (their ja/ko/de/ru/zh-Hans/zh-Hant
   blogs, still broken as of 2026-10-15).
3. **Placeholders stay intact and grammatically attached**: `{name}`, `{count}` etc.
   Copy them verbatim; reorder the *sentence* around them if the target grammar needs
   it, but never split, translate, or drop a placeholder. After editing:
   `grep -n '{' src/i18n/<locale>.ts` must show the same placeholder set as en.
4. **Never translate:** the brand `Free Audio Editor`, format names (MP3, WAV, FLAC,
   OGG, AAC, M4R, WebM), units (kbps, kHz, Hz, dB, MB), code, URLs.
5. **Facts never drift.** Numbers, limits, codec behavior, privacy claims ("files
   never leave your device") must carry over exactly. Translate the *phrasing*, never
   "improve" a number or soften a claim. The privacy claim is verifiable — it must
   stay absolute in every locale.
6. **Tool display names ARE localized** (they're ranking keywords too), but keep the
   mapping 1:1 — a locale's `name` must denote the same tool as en's, and `shortName`
   must be a natural short form in that language (e.g. ja 音声トリマー → トリマー),
   not an abbreviation of the English.
7. **Register is fixed per locale** (§3 — the catalog is the source of truth; current
   registers: zh 你, ja です・ます, ko 해요체, de du, es tú, pt você, id Anda, fr vous,
   ru вы, ar أنت). Never mix 你/您, du/Sie, tú/usted, 해요체/합니다체, tu/vous, ты/вы
   within a locale.
8. **Metadata budgets per locale** (see §3 sheets): title and description have
   different visual limits in CJK vs Latin scripts. Oversized titles truncate in
   SERPs — that's wasted ranking surface.

## 3. Per-locale sheets

Each sheet: register → glossary (use these; they double as search terms) → metadata
pattern → traps. When translating for locale X, paste sheet X into the prompt.

### zh-Hans (`zh.ts`) — 简体中文

- **Register:** 你 (never 您). Short, spoken-word sentences. Colloquial is correct:
  the existing catalog says 「免费，不用注册」「文件不会离开你的设备」 — keep that voice.
- **Glossary:** audio 音频 · trim 裁剪 · cut 剪切（仅当真的指"剪掉一段"）· merge 合并 ·
  convert 转换 · browser 浏览器 · upload 上传 · file 文件 · free 免费 · no signup 不用注册 ·
  voice remover 人声消除 · fade 淡入/淡出 · normalize 音量标准化 · noise 降噪 ·
  ringtone 手机铃声 · export 导出
- **Metadata:** title ≤ 20 个汉字 (brand excluded); description ≤ 75 个汉字. Front-load
  the tool keyword: 「音频裁剪 - 在线裁剪 MP3」 style. No 全角竖线 (that's a ja convention).
- **Traps:** ① translationese additions — 「进行音频的剪辑操作」→「剪辑音频」；drop 进行/操作/
  相关 unless natural. ② Taiwan terms leaking in (音訊/檔案/網路/影片 → 音频/文件/网络/视频).
  ③ Over-formal written style (为您提供了…) — this product speaks 你.
- **What locals search:** 音频剪辑 / mp3裁剪 / 人声消除 / 音频转换 / 手机铃声制作.

### ja (`ja.ts`) — 日本語

- **Register:** です・ます体. Polite, compact. No 漢語-heavy stiff style.
- **Glossary:** audio 音声（人声・说话）/ オーディオ（音乐・器材语境）· trim トリミング ·
  cut カット / 切り取り · merge 結合 · convert 変換 · browser ブラウザ · upload アップロード（
  「アップロード不要」is the natural negative）· free 完全無料 / 無料 · no signup 登録不要 ·
  voice remover ボーカル除去 · fade フェードイン/アウト · normalize 音量の均一化 ·
  export 書き出し · ringtone 着信音（M4R は iPhone 着信音）
- **Metadata:** title uses 全角の「｜」separator and front-loads the keyword, ≤ 35 全角文字:
  「音声トリマー - オンラインで音声をカット｜Free Audio Editor」style. description ≤ 80 全角文字.
- **Traps:** ① English calques — 「ダウンロードの必要がありますか？」→「ダウンロード不要」；
  passive constructions copied from en feel distant. ② Using 中国大陸/台湾 terminology
  patterns (音頻/音訊 → 音声). ③ Half-width vs full-width punctuation: UI strings use
  全角「・」「｜」; keep numbers/formats half-width.
- **What locals search:** 音声 編集 無料 / mp3 切り取り / 音声 結合 / ボーカル抽出 /
  着信音 作り方.

### ko (`ko.ts`) — 한국어

- **Register:** 해요체 (polite-informal). Consistent — never mix 합니다체. Matches the
  existing catalog: 「파일은 기기를 떠나지 않아요」.
- **Glossary:** audio 오디오（음성 for voice/speech）· trim 자르기 · cut 오려내기 ·
  merge 합치기 / 병합 · convert 변환 · browser 브라우저 · upload 업로드（「업로드 없이」）·
  free 완전 무료 · no signup 가입 필요 없이 · voice remover 보컬 제거 · export 내보내기 ·
  ringtone 벨소리
- **Metadata:** title ≤ 30자, keyword first: 「오디오 자르기 - 온라인 MP3 편집」. description ≤ 75자.
- **Traps:** ① Japanese-style calques (audioeditor.org's 「다운로드 필요 없이 완전 무료」 is
  word-order-awkward; natural: 「다운로드 없이 완전 무료」). ② Spacing of particles (조사는
  앞말에 붙임: 「파일을」 not 「파일 을」). ③ Sino-Korean stiff nouns where a native verb
  is standard (裁剪 → 절단 ✗ / 자르기 ✓).
- **What locals search:** 오디오 편집 / mp3 자르기 / 음원 추출 / 오디오 변환 / 벨소리 만들기.

### de (`de.ts`) — Deutsch

- **Register:** du (lowercase in running copy: dein, deine). Friendly, direct. Matches
  the existing catalog: 「Kostenlos, ohne Anmeldung」「Lokal verarbeitet — deine Datei
  verlässt diesen Tab nie」. Never Sie.
- **Glossary:** audio file Audiodatei · trim/schneiden schneiden (THE verb — also the
  head search term) · merge zusammenfügen / verbinden · convert konvertieren /
  umwandeln · browser Browser · upload hochladen（「ohne Upload」）· free kostenlos ·
  no signup ohne Anmeldung · voice remover Gesang entfernen · fade ein-/ausblenden ·
  normalize Normalisieren · export exportieren · ringtone Klingelton
- **Metadata:** title ≤ 60 chars, compound hyphens mandatory: Online-Audio-Editor,
  MP3-Datei, Klingelton-Ersteller. Use – (en dash) around the brand:
  「MP3 schneiden – kostenlos online」style. description ≤ 155 chars.
- **Traps:** ① Missing compound hyphens (their title 「Online Audio-Editor」 vs their own
  correct description — don't reproduce that inconsistency). ② Noun capitalization
  (every noun, always: 「die Datei」, 「im Browser」). ③ Anglicisms where German terms
  rank (trimmen is acceptable in tool names, schneiden wins in titles/descriptions).
- **What locals search:** mp3 schneiden / audio schneiden online / musik schneiden /
  mp3 zusammenfügen / klingelton erstellen.

### es (`es.ts`) — Español

- **Register:** tú. Neutral-Spanish vocabulary that reads fine in both es-ES and LatAm.
- **Glossary:** audio editor editor de audio · trim cortar · cut cortar · merge unir /
  combinar · convert convertir · browser navegador · upload subir（「sin subir archivos」/
  「tus archivos nunca se suben」）· free gratis · no signup sin registro · voice remover
  eliminar voz / separar voz · fade fundido · normalize normalizar · export descargar /
  exportar · ringtone tono de llamada
- **Metadata:** title ≤ 60 chars, keyword first: 「Cortar MP3 online gratis」style.
  description ≤ 155 chars.
- **Traps:** ① Calques — 「Sin descarga requerida」→「Sin descargas」or「Sin necesidad de
  descargas」; 「realizar una edición」→「editar」. ② False friends: soportar → compatible
  con; actualizar is fine for software but "actualmente" ≠ "currently" in casual copy —
  prefer 「hoy」. ③ Inverted punctuation ¿¡ in questions — required in FAQ questions.
- **What locals search:** editor de audio online / cortar mp3 / unir audio / cortar
  canción / editor de musica gratis.

### pt-BR (`pt.ts`) — Português (Brasil)

- **Register:** você. Brazilian vocabulary and spelling (áudio, conexão).
- **Glossary:** audio editor editor de áudio · trim cortar · merge juntar / mesclar ·
  convert converter · browser navegador · upload enviar（「sem enviar arquivos」）· free
  grátis (casual copy) / gratuito (metadata) · no signup sem cadastro · voice remover
  remover voz / karaokê · fade fade（ widely understood）/ esmaecer · export baixar /
  exportar · ringtone toque de celular
- **Metadata:** title ≤ 60 chars: 「Cortar MP3 online grátis」style. description ≤ 155 chars.
- **Traps:** ① European Portuguese leaking in (ficheiro → arquivo, registar → cadastrar,
  telemóvel → celular). ② 「download necessário」 calques — natural: 「sem downloads」.
- **What locals search:** cortar música online / editor de audio / juntar musicas /
  mp3 cortar / karaokê online.

### id (`id.ts`) — Bahasa Indonesia

- **Register:** neutral-casual with Anda as the pronoun, used consistently (matches the
  existing catalog: 「File tidak pernah diunggah」/「perangkat Anda」). Do not switch to
  kamu, and do not awkwardly drop pronouns mid-catalog — Anda everywhere is the norm.
- **Glossary:** audio audio · trim potong · cut potong · merge gabung · convert
  konversi / ubah · browser browser · upload unggah（「tanpa unggah」；unggah is the
  preferred KBBI term, upload widely understood — pick unggah for consistency）· free
  gratis · no signup tanpa daftar · voice remover hapus vokal · export ekspor /
  unduh · ringtone nada dering
- **Metadata:** title ≤ 60 chars, keyword first: 「Potong audio online gratis」.
  description ≤ 155 chars.
- **Traps:** ① Over-formal pasaran register — this product is casual. ② English
  sentence structure; Indonesian favors verb-first short clauses (「Potong MP3 langsung
  di browser」).
- **What locals search:** potong audio online / potong lagu / gabung lagu / konversi
  mp3 / nada dering.

### fr (`fr.ts`) — Français

- **Register:** vous, everywhere. Sentence case in titles (French convention).
- **Glossary:** fichier audio · couper (cut) · rogner/découpe (trim) · fusionner (merge) ·
  convertir · navigateur · téléverser (upload — «aucun téléversement», «vos fichiers ne
  sont jamais téléversés»; télécharger = download — do not swap them) · gratuit ·
  sans inscription · sans filigrane · fondu d'entrée / fondu de sortie (fades) ·
  normaliser · exporter · sonnerie (sonnerie iPhone) · enregistrer (record) · hauteur
  tonale (pitch) / demi-ton (semitone) · vitesse · lecture à l'envers (reverse) ·
  réduction du bruit · réverbe (reverb)
- **Metadata:** title ≤ 60 chars, keyword first («Couper MP3», «fusionner audio»),
  sentence case, NBSP before ? ! : ; in prose. description ≤ 155 chars.
- **Traps:** ① téléverser/télécharger confusion — the audit's ru trap has a French twin.
  ② English calques («effectuer une découpe» → «couper»). ③ Typographic apostrophe '
  everywhere; no ASCII quotes.
- **What locals search:** couper mp3 / montage audio en ligne / fusionner audio /
  convertir en mp3 / sonnerie iphone / augmenter le volume / supprimer la voix.

### ru (`ru.ts`) — Русский

- **Register:** вы (lowercase), friendly-professional, no канцелярит, short sentences.
- **Glossary:** аудиофайл · обрезать (trim/cut) · соединить/объединить (merge) ·
  конвертировать · браузер · бесплатно · без регистрации · без водяных знаков ·
  плавное нарастание и затухание (fade in/out) · нормализация · экспортировать ·
  рингтон (рингтон для iPhone) · запись (record) · громкость · скорость · высота тона
  (pitch) / полутон (semitone) · обратное воспроизведение (reverse) · шумоподавление ·
  реверберация (reverb)
- **Metadata:** title ≤ 60 chars, keyword first («Обрезать mp3», «Соединить музыку»).
  Use «е», not «ё», consistently. Numbers/units ASCII («320 kbps»).
- **Traps:** ① **Never «без загрузки»** for "no download" — it reads as "no upload"
  (загрузка covers both); use «без скачивания» and phrase uploads as «файлы не
  загружаются на сервер». This exact ambiguity shipped on audioeditor.org. ② Bare
  `{n}` can't inflect Russian plurals — phrase counters so the numeral sits in a
  neutral slot («Треков: {n}»). ③ No anglicisms in running copy (фейд/трим only as
  tool-name shorthand if at all).
- **What locals search:** обрезать аудио онлайн / обрезать mp3 / соединить музыку /
  конвертировать в mp3 / рингтон на айфон / сделать громче / удалить вокал.

### ar (`ar.ts`) — العربية (RTL)

- **Register:** simplified Modern Standard Arabic (فصحى مبسطة), أنت for the user,
  short UI-like sentences — no stiff machine-MSA nominal chains.
- **Glossary:** ملف صوتي (audio file) · قصّ (cut/trim) · دمج (merge) · تحويل (convert) ·
  المتصفح (browser) · رفع (upload — «ملفاتك لا تُرفع أبدًا») · تنزيل (download) · مجاني
  (free) · بدون تسجيل (no signup) · ظهور تدريجي / تلاشٍ تدريجي (fade in/out) · توحيد
  مستوى الصوت (normalize) · تصدير (export) · نغمة رنين (ringtone) · تسجيل (record) ·
  مستوى الصوت (volume) · السرعة (speed) · درجة الصوت (pitch) / نصف درجة (semitone) ·
  تشغيل عكسي (reverse) · تقليل الضوضاء (noise reduction)
- **Metadata:** title ≤ 60 chars, keyword first («قص MP3», «محرر الصوت أون لاين»).
  Arabic punctuation (، ؟) in prose; ASCII digits and Latin format names stay as-is
  (bidi renders them LTR inline — never add directional marks).
- **RTL notes:** `<html dir="rtl">` comes from `LOCALES` (`dir: 'rtl'` for ar) — layout
  mirrors via CSS logical properties; the few physical positions use `end-0`-style
  utilities. Menu-path FAQ copy is rewritten as prose («افتح الإعدادات، ثم الصوت…»)
  because → arrows read backwards in RTL.
- **What locals search:** قص mp3 / تحرير الصوت أون لاين / دمج الصوتيات / تحويل فيديو
  إلى mp3 / نغمة رنين / رفع مستوى الصوت.

### Remaining planned locale

- **zh-Hant:** 台灣用語， glossary shifts wholesale: 音訊（not 音频）/ 檔案（not 文件）/
  線上（not 在线）/ 影片 / 儲存 / 網路； trim = 剪輯 or 裁切, **never 剪切**； 你 (TW consumer
  copy standard). Search: 音檔剪輯 / mp3 剪輯 / 去人聲.

## 4. Metadata formula (all locales)

- **Tool page title:** `[localized head search term] + [differentiator/benefit] +
  brand`. Brand suffix `Free Audio Editor` stays in English everywhere (it's the
  brand; audioeditor.org's inconsistency — brand present in some locale titles,
  missing in others — is the negative example).
- **H1 ≠ title.** H1 is human-facing (can be a benefit claim: 「像專業人士一樣編輯音訊」);
  title is SERP-facing (must contain the search term).
- **Description = one benefit sentence + one proof point** (local processing, free,
  no signup), never a string of keywords.
- Keep the en `title`/`description` lengths as the ceiling: CJK ≈ half the character
  budget of Latin (see sheets).

## 5. FAQ and HowTo translation

FAQs are ranking assets — translate the *question* into what a local would actually
type (use the 「What locals search」lines), not a literal rendering of the English
question. Answers keep the technical facts byte-identical (bitrates, limits, codec
names); only framing localizes. If a fact doesn't exist in the en source, the
translation doesn't get to invent it — that's an en-source gap, fix it there first.

## 6. Self-review checklist (run before every locale commit)

1. `pnpm astro check` (or the repo's typecheck) passes — key parity holds.
2. `grep -n '{' src/i18n/<locale>.ts` — placeholder set identical to en.ts.
3. No raw i18n keys, no empty strings, no untranslated English sentences
   (brand + format names excepted). For CJK locales, scan for ASCII words; for
   Latin locales, read for anything that "looks like en syntax with local words".
4. Register check: zero pronoun-register mixing (§2.7).
5. Back-translation spot check on 3 random strings: does the original meaning
   survive? If you must mentally re-translate to recover the English, the rewrite
   was too free.
6. Native-ear check on high-traffic strings first (titles, H1s, first FAQ): would
   this exact phrasing appear on a locally-made product's site?
7. Metadata budgets respected (§3 sheets, §4).
8. `scripts/seo-audit.mjs` passes (mechanical net for what eyes miss — see
   competitive-analysis §7.3 for the four i18n checks it should grow).

## 7. Prompt recipe (for LLM-assisted translation)

When asking an LLM to translate a catalog or page:

1. Paste: this guide's §2 (hard rules) + the §3 sheet for the target locale + the
   en source.
2. Instruct: "Rewrite into natural {locale} for a consumer audio-tool site. The en
   text is a semantic spec. Follow the glossary. Keep placeholders, brand, formats,
   and every number/claim exactly. Output only the translated catalog, same key
   structure."
3. Then run the §6 checklist. The checklist is the quality gate — the model's
   self-assessment is not.
