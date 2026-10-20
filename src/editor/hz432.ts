import { pitchShiftChannel } from './pitch';

/** 12 * log2(432/440). About −0.32 semitones. Length stays the same. */
export const HZ432_SEMITONES = 12 * Math.log2(432 / 440);

export function shiftTo432(channel: Float32Array, sampleRate: number): Float32Array {
  return pitchShiftChannel(channel, HZ432_SEMITONES, sampleRate);
}
