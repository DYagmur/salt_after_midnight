// SALT AFTER MIDNIGHT — evolving version -- DUYA
// Chill / dub techno — 118 BPM

setcps(118 / 60 / 4)

stack(
  // KICK 
  s("<[bd*4] [bd*4] [bd*4] [bd*4] [bd*4] [bd*4] [bd*4] [bd bd bd ~]>")
    .lpf(950)
    .gain(0.82)
    .orbit(0)
    .duckorbit("1:2:3")
    .duckattack(0.24)
    .duckdepth(0.55),

  // CLAP 
  s("~ cp ~ cp")
    .hpf(850)
    .room(0.35)
    .delay(0.12)
    .gain(0.18)
    .orbit(4),

  // HI-HAT 
  s("<[~ hh]*4 [~ hh]*3 [~ hh]*4 [~ hh]*4>")
    .hpf(6500)
    .gain("0.12 0.19 0.10 0.16")
    .pan(sine.range(0.3, 0.7).slow(7))
    .orbit(4),

  // PERKUSYON 
  s("~ rim ~ [rim ~] ~ ~ rim ~")
    .speed("<1.1 0.85 1.25 0.95>")
    .hpf(1200)
    .gain(0.13)
    .pan("<0.2 0.8 0.35 0.65>")
    .delay(0.35)
    .delaytime(0.381)
    .delayfeedback(0.35)
    .room(0.3)
    .orbit(5),

  // BAS 
  note("<[d2 ~ d2 ~ ~ a1 ~ c2] [bb1 ~ ~ bb1 ~ f2 ~ a1] [f2 ~ f2 ~ ~ c2 ~ e2] [c2 ~ ~ g1 ~ c2 a1 ~]>")
    .s("triangle")
    .attack(0.008)
    .decay(0.22)
    .sustain(0)
    .release(0.09)
    .lpf(480)
    .gain(0.48)
    .orbit(1),

  // DUB AKORLARI
  note("<[f3,a3,c4,e4] [d3,f3,a3,c4] [a3,c4,e4,g4] [e3,g3,c4,d4]>")
    .slow(2)
    .struct("~ x ~ ~ ~ x ~ x")
    .s("sawtooth")
    .attack(0.012)
    .decay(0.24)
    .sustain(0)
    .release(0.35)
    .lpf(sine.range(650, 2100).slow(16))
    .lpq(1.2)
    .gain(0.13)
    .delay(0.42)
    .delaytime(0.381)
    .delayfeedback(sine.range(0.25, 0.55).slow(16))
    .room(0.65)
    .pan(sine.range(0.25, 0.75).slow(11))
    .orbit(2),

  // CAM MELODI
  note("<[a4 ~ e5 ~ ~ c5 ~ ~] [a4 ~ e5 ~ ~ g5 e5 ~] [a4 ~ e5 ~ ~ c5 ~ ~] [~ g4 ~ a4 ~ ~ d5 ~]>")
    .slow(2)
    .s("sine")
    .attack(0.005)
    .decay(0.35)
    .sustain(0)
    .release(0.7)
    .gain(0.19)
    .delay(0.48)
    .delaytime(0.635)
    .delayfeedback(0.42)
    .room(0.8)
    .pan(sine.range(0.15, 0.85).slow(9))
    .orbit(3),

  // ALT ATMOSFER 
  note("<[d3,a3,e4] [bb2,f3,c4] [f3,c4,g4] [c3,g3,d4]>")
    .slow(4)
    .s("triangle")
    .attack(1.5)
    .sustain(0.65)
    .release(2)
    .lpf(sine.range(400, 1100).slow(24))
    .gain(0.085)
    .room(0.9)
    .orbit(3)
)