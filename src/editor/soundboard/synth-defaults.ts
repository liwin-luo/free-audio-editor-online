/**
 * The eight... eleven built-in board sounds, synthesized with an
 * OfflineAudioContext — no audio files ship with the site, and no recordings
 * of licensed meme sounds either: synthesis is our own recording. Rendered
 * once per name, normalized to −1 dBFS, then reused from the cache.
 */

export const SAMPLE_RATE = 44100;

/** Human labels for the built-in sounds. Treated as proper nouns (like format
 *  names): they stay English on every locale, matching meme-sound convention. */
export const SOUND_LABELS: Record<string, string> = {
  airhorn: 'Air Horn',
  boom: 'Boom',
  sadTrombone: 'Sad Trombone',
  rimshot: 'Rimshot',
  buzzer: 'Buzzer',
  fart: 'Fart',
  applause: 'Applause',
  crickets: 'Crickets',
  ding: 'Ding',
  boing: 'Boing',
  coin: 'Coin',
};

export const DEFAULTS: string[] = [
  'airhorn',
  'boom',
  'sadTrombone',
  'rimshot',
  'buzzer',
  'fart',
  'applause',
  'crickets',
  'ding',
  'boing',
  'coin',
];

interface Synth {
  /** Seconds to render. */
  d: number;
  fn(oc: OfflineAudioContext): void;
}

function env(g: GainNode, t0: number, attack: number, hold: number, release: number, peak: number): void {
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak, t0 + attack);
  g.gain.setValueAtTime(peak, t0 + attack + hold);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + hold + release);
}

function noiseBuffer(oc: OfflineAudioContext, seconds: number): AudioBuffer {
  const b = oc.createBuffer(1, Math.ceil(seconds * oc.sampleRate), oc.sampleRate);
  const data = b.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return b;
}

const SYNTHS: Record<string, Synth> = {
  airhorn: {
    d: 0.95,
    fn(oc) {
      const t0 = 0;
      const dur = 0.95;
      const lp = oc.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 1900;
      const g = oc.createGain();
      env(g, t0, 0.02, 0.5, 0.4, 0.8);
      lp.connect(g);
      g.connect(oc.destination);
      for (const f of [440, 452, 466]) {
        const o = oc.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = f;
        o.start(t0);
        o.stop(t0 + dur);
        o.connect(lp);
      }
    },
  },
  boom: {
    d: 0.95,
    fn(oc) {
      const t0 = 0;
      const o = oc.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(62, t0);
      o.frequency.exponentialRampToValueAtTime(27, t0 + 0.5);
      const g = oc.createGain();
      env(g, t0, 0.005, 0.08, 0.8, 1.0);
      o.connect(g);
      g.connect(oc.destination);
      o.start(t0);
      o.stop(t0 + 0.95);
      const n = oc.createBufferSource();
      n.buffer = noiseBuffer(oc, 0.06);
      const lp = oc.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 900;
      const ng = oc.createGain();
      env(ng, t0, 0.001, 0.01, 0.04, 0.5);
      n.connect(lp);
      lp.connect(ng);
      ng.connect(oc.destination);
      n.start(t0);
    },
  },
  sadTrombone: {
    d: 1.7,
    fn(oc) {
      const lp = oc.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 900;
      const g = oc.createGain();
      g.gain.value = 1;
      lp.connect(g);
      g.connect(oc.destination);
      const vib = oc.createOscillator();
      vib.frequency.value = 6;
      const vg = oc.createGain();
      vg.gain.value = 6;
      vib.connect(vg);
      let t = 0;
      [[220, 0.3], [196, 0.3], [175, 0.3], [147, 0.75]].forEach(([f, d], idx) => {
        const o = oc.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = f;
        if (idx === 3) vg.connect(o.frequency);
        const eg = oc.createGain();
        eg.gain.setValueAtTime(0.0001, t);
        eg.gain.exponentialRampToValueAtTime(idx === 3 ? 0.5 : 0.45, t + 0.03);
        eg.gain.setValueAtTime(idx === 3 ? 0.5 : 0.45, t + d - 0.08);
        eg.gain.exponentialRampToValueAtTime(0.0001, t + d);
        o.connect(eg);
        eg.connect(lp);
        o.start(t);
        o.stop(t + d + 0.01);
        t += d;
      });
      vib.start(0);
      vib.stop(t + 0.1);
    },
  },
  rimshot: {
    d: 0.7,
    fn(oc) {
      const thud = (t: number, f: number, a: number) => {
        const o = oc.createOscillator();
        o.type = 'sine';
        o.frequency.setValueAtTime(f, t);
        o.frequency.exponentialRampToValueAtTime(f * 0.6, t + 0.09);
        const g = oc.createGain();
        env(g, t, 0.002, 0.02, 0.1, a);
        o.connect(g);
        g.connect(oc.destination);
        o.start(t);
        o.stop(t + 0.15);
      };
      thud(0, 170, 0.9);
      thud(0.13, 150, 0.8);
      const n = oc.createBufferSource();
      n.buffer = noiseBuffer(oc, 0.5);
      const hp = oc.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 5500;
      const ng = oc.createGain();
      env(ng, 0.26, 0.003, 0.05, 0.38, 0.5);
      n.connect(hp);
      hp.connect(ng);
      ng.connect(oc.destination);
      n.start(0);
    },
  },
  buzzer: {
    d: 0.75,
    fn(oc) {
      const t0 = 0;
      const dur = 0.75;
      const g = oc.createGain();
      env(g, t0, 0.01, 0.55, 0.18, 0.55);
      g.connect(oc.destination);
      for (const f of [110, 92]) {
        const o = oc.createOscillator();
        o.type = 'square';
        o.frequency.value = f;
        o.start(t0);
        o.stop(t0 + dur);
        o.connect(g);
      }
    },
  },
  fart: {
    d: 0.5,
    fn(oc) {
      const t0 = 0;
      const o = oc.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = 88;
      const w1 = oc.createOscillator();
      w1.frequency.value = 31;
      const w1g = oc.createGain();
      w1g.gain.value = 22;
      w1.connect(w1g);
      w1g.connect(o.frequency);
      const w2 = oc.createOscillator();
      w2.frequency.value = 7;
      const w2g = oc.createGain();
      w2g.gain.value = 12;
      w2.connect(w2g);
      w2g.connect(o.frequency);
      const lp = oc.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 360;
      const g = oc.createGain();
      env(g, t0, 0.015, 0.18, 0.28, 0.8);
      o.connect(lp);
      lp.connect(g);
      g.connect(oc.destination);
      o.start(t0);
      o.stop(t0 + 0.5);
      w1.start(t0);
      w1.stop(t0 + 0.5);
      w2.start(t0);
      w2.stop(t0 + 0.5);
    },
  },
  applause: {
    d: 1.6,
    fn(oc) {
      const sr = oc.sampleRate;
      const n = Math.ceil(1.6 * sr);
      const b = oc.createBuffer(1, n, sr);
      const ch = b.getChannelData(0);
      let i = 0;
      while (i < n) {
        const dur = ((0.004 + Math.random() * 0.004) * sr) | 0;
        const amp = 0.08 + Math.random() * 0.3;
        const f = 1400 + Math.random() * 1800;
        for (let j = 0; j < dur && i + j < n; j++) {
          const e = 1 - j / dur;
          ch[i + j] += Math.sin((2 * Math.PI * f * j) / sr) * e * amp + (Math.random() * 2 - 1) * e * amp * 0.5;
        }
        i += dur + ((10 + Math.random() * 35) * sr * 0.001) | 0;
      }
      const src = oc.createBufferSource();
      src.buffer = b;
      const g = oc.createGain();
      g.gain.setValueAtTime(1, 0);
      g.gain.setValueAtTime(1, 1.1);
      g.gain.linearRampToValueAtTime(0.001, 1.6);
      src.connect(g);
      g.connect(oc.destination);
      src.start(0);
    },
  },
  crickets: {
    d: 2.0,
    fn(oc) {
      const sr = oc.sampleRate;
      const n = Math.ceil(2.0 * sr);
      const b = oc.createBuffer(1, n, sr);
      const ch = b.getChannelData(0);
      let i = 0;
      while (i < n) {
        for (let k = 0; k < 3; k++) {
          const dur = (0.03 * sr) | 0;
          for (let j = 0; j < dur && i + j < n; j++) {
            const e = Math.sin((Math.PI * j) / dur);
            ch[i + j] += Math.sin((2 * Math.PI * 4300 * j) / sr) * e * 0.22;
          }
          i += (0.045 * sr) | 0;
        }
        i += (0.4 * sr) | 0;
      }
      const src = oc.createBufferSource();
      src.buffer = b;
      src.connect(oc.destination);
      src.start(0);
    },
  },
  ding: {
    d: 1.1,
    fn(oc) {
      const t0 = 0;
      const dur = 1.1;
      [1568, 2349].forEach((f, i) => {
        const o = oc.createOscillator();
        o.type = 'sine';
        o.frequency.value = f;
        const g = oc.createGain();
        env(g, t0, 0.005, 0.05, 1.0 - i * 0.25, i ? 0.35 : 0.6);
        o.connect(g);
        g.connect(oc.destination);
        o.start(t0);
        o.stop(t0 + dur);
      });
    },
  },
  boing: {
    d: 0.55,
    fn(oc) {
      const t0 = 0;
      const dur = 0.55;
      const o = oc.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(320, t0);
      o.frequency.exponentialRampToValueAtTime(70, t0 + 0.45);
      const g = oc.createGain();
      env(g, t0, 0.01, 0.15, 0.35, 0.7);
      const lfo = oc.createOscillator();
      lfo.frequency.value = 9;
      const lg = oc.createGain();
      lg.gain.value = 0.25;
      lfo.connect(lg);
      lg.connect(g.gain);
      o.connect(g);
      g.connect(oc.destination);
      o.start(t0);
      o.stop(t0 + dur);
      lfo.start(t0);
      lfo.stop(t0 + dur);
    },
  },
  coin: {
    d: 0.4,
    fn(oc) {
      const t0 = 0;
      for (const [f, dt, d] of [[987.77, 0, 0.09], [1318.51, 0.09, 0.3]] as const) {
        const o = oc.createOscillator();
        o.type = 'square';
        o.frequency.value = f;
        const g = oc.createGain();
        env(g, t0 + dt, 0.005, 0.04, d - 0.05, 0.35);
        o.connect(g);
        g.connect(oc.destination);
        o.start(t0 + dt);
        o.stop(t0 + dt + d);
      }
    },
  },
};

function normalize(buf: AudioBuffer): AudioBuffer {
  let peak = 0;
  for (let c = 0; c < buf.numberOfChannels; c++) {
    const ch = buf.getChannelData(c);
    for (let i = 0; i < ch.length; i++) {
      const v = Math.abs(ch[i]);
      if (v > peak) peak = v;
    }
  }
  if (peak > 0.95) {
    const k = 0.9 / peak;
    for (let c = 0; c < buf.numberOfChannels; c++) {
      const ch = buf.getChannelData(c);
      for (let i = 0; i < ch.length; i++) ch[i] *= k;
    }
  }
  return buf;
}

const cache = new Map<string, AudioBuffer>();

/** Rendered once per name, then reused. Names come from DEFAULTS only. */
export async function ensureSynth(name: string): Promise<AudioBuffer> {
  const hit = cache.get(name);
  if (hit) return hit;
  const synth = SYNTHS[name];
  if (!synth) throw new Error(`unknown synth: ${name}`);
  const oc = new OfflineAudioContext(1, Math.ceil(synth.d * SAMPLE_RATE), SAMPLE_RATE);
  synth.fn(oc);
  const buf = normalize(await oc.startRendering());
  cache.set(name, buf);
  return buf;
}
