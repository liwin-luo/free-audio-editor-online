import re, json, html, sys, collections
from pathlib import Path

STOP = set('the a an and or of to for your you our we it is are be with on in from as at by this that can will not no if into out up down more most best free online tool tools page site audio video file files mp3 mp4 wav use using used without any all one two three how what why when which does do did their they i me my mine'.split())

def parse(path, name):
    t = Path(path).read_text(errors='ignore')
    title = re.search(r'<title[^>]*>(.*?)</title>', t, re.S|re.I)
    desc = re.search(r'<meta\s+name="description"\s+content="(.*?)"', t, re.S|re.I) or re.search(r'<meta\s+content="(.*?)"\s+name="description"', t, re.S|re.I)
    canon = re.search(r'<link\s+rel="canonical"\s+href="(.*?)"', t, re.I)
    h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', t, re.S|re.I)
    h2 = re.findall(r'<h2[^>]*>(.*?)</h2>', t, re.S|re.I)
    h3 = re.findall(r'<h3[^>]*>(.*?)</h3>', t, re.S|re.I)
    strip = lambda xs: [html.unescape(re.sub(r'<[^>]+>', '', x)).strip()[:110] for x in xs]
    lds = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', t, re.S|re.I)
    types, faqs = [], []
    for s in lds:
        try:
            d = json.loads(s)
            for x in (d.get('@graph', [d]) if isinstance(d, dict) else d):
                ty = x.get('@type')
                types.append(ty if isinstance(ty, str) else ','.join(ty or []))
                if ty == 'FAQPage' or (isinstance(ty, list) and 'FAQPage' in ty):
                    for m in x.get('mainEntity', []):
                        faqs.append(html.unescape(m.get('name', ''))[:100])
        except Exception as e:
            types.append(f'ERR:{e}')
    href = re.findall(r'hreflang="([^"]+)"', t)
    body = re.sub(r'<(script|style|nav|footer|head)[^>]*>.*?</\1>', ' ', t, flags=re.S|re.I)
    body = re.sub(r'<[^>]+>', ' ', body)
    words = re.findall(r"[A-Za-z']+", body)
    wc = len(words)
    freq = collections.Counter(w.lower() for w in words if len(w) > 2 and w.lower() not in STOP)
    kw = ', '.join(f'{w}({n})' for w, n in freq.most_common(18))
    links = len(re.findall(r'<a\s', t))
    print(f'===== {name} =====')
    print('TITLE:', html.unescape(title.group(1)).strip() if title else '-', f"({len(title.group(1)) if title else 0} chars)")
    print('DESC:', html.unescape(desc.group(1)).strip() if desc else '-', f"({len(desc.group(1)) if desc else 0} chars)")
    print('CANONICAL:', canon.group(1) if canon else '-')
    print('H1:', strip(h1))
    print('H2:', strip(h2))
    print('H3:', strip(h3)[:14])
    print('SCHEMA:', types)
    print('FAQ questions:', len(faqs))
    for q in faqs[:12]: print('  Q:', q)
    print('HREFLANG count:', len(set(href)))
    print('WORDS(body approx):', wc, ' LINKS:', links)
    print('TOP TERMS:', kw)
    print()

for p, n in [(sys.argv[1], sys.argv[2])] if len(sys.argv) == 3 else [
    ('/tmp/ae-vtmp3.html', 'audioeditor.org /tools/video-to-mp3'),
    ('/tmp/ss-vta.html', 'snipsound.com /tools/video-to-audio/'),
    ('/tmp/st-vta.html', 'soundtools.io /video-to-audio'),
    ('/Users/luogangming/projects-b/free-audio-editor-online/dist/mp4-to-mp3.html', 'OURS /mp4-to-mp3 (dist)'),
]:
    parse(p, n)
