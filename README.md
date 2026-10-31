# Salt After Midnight

An evolving chill / dub techno piece made with [Strudel](https://strudel.cc/), a browser-based live coding environment for music.

Deep kicks, warm bass, spacious chords, and a delicate melody create a late-night atmosphere at **118 BPM**.

## Sound

- Four-on-the-floor kick with a small break every eight bars.
- Warm triangle-wave bass.
- Dub chords with slowly changing filters and echoes.
- An eight-bar call-and-response melody.
- Moving stereo percussion and atmospheric layers.
- Gentle sidechain ducking triggered by the kick.

Different pattern lengths let the layers shift against each other as the piece repeats.

## How to Play

1. Open [Strudel](https://strudel.cc/).
2. Open `salt_after_midnight.js` in this repository.
3. Copy the entire code into the Strudel editor.
4. Click Play.

Listen for a couple of minutes to hear the slower changes unfold.

**This code runs inside Strudel. It is not a standalone Node.js application.**

## Experiment

Try changing one parameter at a time:

- **Tempo:** Change `118` in `setcps(118 / 60 / 4)`.
- **Volume:** Adjust a layer’s `.gain(...)`.
- **Brightness:** Adjust `.lpf(...)`.
- **Space:** Experiment with `.room(...)` and `.delay(...)`.
- **Melody:** Change the notes inside a `note(...)` pattern.
- **Rhythm:** Use `~` to introduce silence.

## About

A personal exploration of music through code, combining repeating patterns with gradual changes.

Created by DuYa