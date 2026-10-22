---
title: "Are Meme Sounds Copyrighted? The Three Rights in One Clip"
description: "A meme sound can carry three different rights. Which ones copy, imitate, and synthesis actually touch, and why a synthesized board stays on the safe side."
tool: soundboard
date: 2026-10-22
layout: ../../layouts/Guide.astro
persona: skeptic
sources:
  - label: 17 U.S.C. § 114 — Scope of exclusive rights in sound recordings (Legal Information Institute)
    url: https://www.law.cornell.edu/uscode/text/17/114
  - label: U.S. Copyright Office — Circular 56, Copyright Registration for Sound Recordings
    url: https://www.copyright.gov/circs/circ56.pdf
  - label: Midler v. Ford Motor Co., 849 F.2d 460 (9th Cir. 1988)
    url: https://en.wikipedia.org/wiki/Midler_v._Ford_Motor_Co.
  - label: U.S. Copyright Office — The DMCA Takedown Process
    url: https://www.copyright.gov/dmca-guide/
---

Short answer: the recording of a meme sound is copyrighted almost everywhere, the
catchphrase inside it might be, and a celebrity's voice adds a third right that has
nothing to do with copyright at all. Which of those three you touch is the whole
question. Copy the file and you are on the wrong side of all three. Imitate the sound
with your own synthesis and federal law puts you on the safe side by statute —
17 U.S.C. § 114(b), the simulation clause. This page separates the layers, names the
cases, and maps what a soundboard built from [your own clips](/soundboard) may use.

![Three stacked layers of a sound clip: the recording, the work, and the person's voice](/guides-media/are-meme-sounds-copyrighted/01-copyright-layers.webp)

## Three rights people confuse

A five-second clip looks like one thing. Legally it can be up to three:

**The sound recording** — the fixed waveform in the file. This is what almost every
meme sound actually is: somebody's recording. The recording is copyrighted the moment
it was fixed, registration or not, and copying the file is copying it. The Wilhelm
Scream, a TV network's boom, a game's voice line — the waveform belongs to whoever
made or owns it.

**The work behind the sound** — if the clip contains a song, a movie line from a
script, or a performance of a composition, the underlying work has its own copyright,
separate from the recording. A sad-violin stinger is two copyrights stacked: the
performance and the music.

**The person** — a recognizable voice brings public personality rights. These are not
copyright at all, they survive in different forms in different states and countries,
and they are why a celebrity saying a catchphrase is the most legally loaded object on
any board.

Sound effects have their own wrinkle: the Copyright Office registers them like any
sound recording (Circular 56), but courts treat many effects as thin or unprotectable
when all someone did was imitate the idea. Which leads to the rule that matters here.

## The simulation rule

United States copyright law says it in one sentence. Section 114(b) of the Copyright
Act: the owner of a sound recording's copyright has no right over "sounds reproduced
by or under the authority of the maker of the sound recording that imitate or simulate
those sounds". Imitation is outside the recording's copyright.

The case that locked it in is *Wiley v. American Broadcasting Companies* (2d Cir.
1993). A sound designer created gorilla effects for *Jurassic Park*; ABC had its own
designer create similar gorilla effects for a promo. The court held there was no
infringement — the imitation of a sound effect, recorded fresh, does not take the
original recording. What the law protects is the fixed performance in the file, not
the idea of a gorilla scream or a boing.

That rule is why a synthesized board is structurally safe. An air-horn tone built from
oscillators on the page is a new recording of a generic effect archetype. It imitates
the idea of an air horn — the idea is free — and it never touches anybody's file. It
is the same logic that lets every keyboard in the world play "the same" piano note.

## The voice exception

Imitation has a hard edge, and courts drew it around the human voice. In *Midler v.
Ford* (9th Cir. 1988), an ad agency hired a Bette Midler impersonator because Midler
refused the gig; the court found voice misappropriation even though the song was
licensed and the voice was re-recorded. The next year of litigation culture produced
the same result for Tom Waits (*Waits v. Frito-Lay*, 9th Cir. 1992): a soundalike
singing a jingle in Waits's distinctive style cost the advertiser millions.

Read together with § 114(b), the line is clean. The recording right does not reach an
imitation, but passing off a famous person's identity — their voice — is a different
claim that imitation makes worse, not better. This is exactly why voice memes are the
danger zone of every board:

| Clip type | Recording | Work | Voice/publicity |
|---|---|---|---|
| Generic effect, own recording or synthesis | Safe | Nothing underneath | No person involved |
| TV/movie catchphrase | ✗ the file | ✗ often the script | Risky if a person is recognizable |
| Celebrity voice line ("Oof"-style) | ✗ the file | — | ✗ the person |
| Song fragment | ✗ the file | ✗ the composition | — |

The "Oof" sound is the cautionary tale in one object: Roblox retired it in 2022
because it licensed the clip from a composer and the license ended. Not a lawsuit —
just an expiry date on a file the whole platform used. That is what shipping someone
else's recording looks like at scale.

## The practical map for a board

1. **Synthesize the generics.** Buzzers, boings, air horns, coin dings, crowd noise —
   every one of these is an archetype older than recording. Building them from
   oscillators and noise on the page puts you in the simulation clause.
2. **Record your own.** A mic clip of your own voice, your doorbell, your cat — you
   own it, and for public figures who wander into the recording, common sense applies
   as it would to any publishing.
3. **Skip the three loaded families.** Files you did not make (a game's or TV show's
   audio), songs under any copyright, and recognizable real people's voices.
4. **Mind the destination.** A private board and a monetized stream are different
   exposures. The safer the clip, the less the destination matters.

If a clip you used gets a takedown, that is the DMCA process working as designed: the
rights holder asserts, the platform takes down, and you can counter-notice if you
believe the clip is yours or licensed. The cheap move is to not need the process —
replace the clip with a synthesis or your own recording and the question disappears.

## Where the tool fits

The [soundboard](/soundboard) on this site takes the safe side as a design decision.
The eleven built-in sounds are synthesized on the page from oscillators and noise —
original recordings of generic archetypes, no library, no licensing question. Your own
clips come from your microphone or your files, trimmed to the part you want, triggered
from keys. What the board will not do is feed sounds into a Discord call — that needs
a virtual microphone from a desktop app — and it will not search a meme library,
because a library is where the three rights in this page get tangled. Keep the board
yours and the rights table above stays green.
