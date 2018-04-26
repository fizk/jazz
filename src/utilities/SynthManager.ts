// import WebAudioScheduler from "web-audio-scheduler";
//
// export default class SynthManager {
//     constructor() {
//         this.counter = 0;
//
//         this.callback = () => {};
//
//         this.notes = {
//             'C0':      16.35,
//             'D♭0':     17.32,
//             'C♯0':     17.32,
//             'D0':      18.35,
//             'D♯0':     19.45,
//             'E♭0':     19.45,
//             'E0':      20.60,
//             'F0':      21.83,
//             'F♯0':     23.12,
//             'G♭0':     23.12,
//             'G0':      24.50,
//             'G♯0':     25.96,
//             'A♭0':     25.96,
//             'A0':      27.50,
//             'A♯0':     29.14,
//             'A♯0':     29.14,
//             'B0':      30.87,
//             'C1':      32.70,
//             'C♯1':     34.65,
//             'D♭1':     34.65,
//             'D1':      36.71,
//             'D♯1':     38.89,
//             'E♭1':     38.89,
//             'E1':      41.20,
//             'F1':      43.65,
//             'F♯1':     46.25,
//             'G♭1':     46.25,
//             'G1':      49.00,
//             'G♯1':     51.91,
//             'A♭1':     51.91,
//             'A1':      55.00,
//             'A♯1':     58.27,
//             'B♭1':     58.27,
//             'B1':      61.74,
//             'C2':      65.41,
//             'C♯2':     69.30,
//             'D♭2':     69.30,
//             'D2':      73.42,
//             'D♯2':     77.78,
//             'E♭2':     77.78,
//             'E2':      82.41,
//             'F2':      87.31,
//             'F♯2':     92.50,
//             'G♭2':     92.50,
//             'G2':      98.00,
//             'G♯2':     103.83,
//             'A♭2':     103.83,
//             'A2':      110.00,
//             'A♯2':     116.54,
//             'B♭2':     116.54,
//             'B2':      123.47,
//             'C3':      130.81,
//             'C♯3':     138.59,
//             'D♭3':     138.59,
//             'D3':      146.83,
//             'D♯3':     155.56,
//             'E♭3':     155.56,
//             'E3':      164.81,
//             'F3':      174.61,
//             'F♯3':     185.00,
//             'G♭3':     185.00,
//             'G3':      196.00,
//             'G♯3':     207.65,
//             'A♭3':     207.65,
//             'A3':      220.00,
//             'A♯3':     233.08,
//             'B♭3':     233.08,
//             'B3':      246.94,
//             'C4':      261.63,
//             'C♯4':     277.18,
//             'D♭4':     277.18,
//             'D4':      293.66,
//             'D♯4':     311.13,
//             'E♭4':     311.13,
//             'E4':      329.63,
//             'F4':      349.23,
//             'F♯4':     369.99,
//             'G♭4':     369.99,
//             'G4':      392.00,
//             'G♯4':     415.30,
//             'A♭4':     415.30,
//             'A4':      440.00,
//             'A♯4':     466.16,
//             'B♭4':     466.16,
//             'B4':      493.88,
//             'C5':      523.25,
//             'C♯5':     554.37,
//             'D♭5':     554.37,
//             'D5':      587.33,
//             'D♯5':     622.25,
//             'E♭5':     622.25,
//             'E5':      659.25,
//             'F5':      698.46,
//             'F♯5':     739.99,
//             'G♭5':     739.99,
//             'G5':      783.99,
//             'G♯5':     830.61,
//             'A♭5':     830.61,
//             'A5':      880.00,
//             'A♯5':     932.33,
//             'B♭5':     932.33,
//             'B5':      987.77,
//             'C6':      1046.5,
//             'C♯6':     1108.7,
//             'D♭6':     1108.7,
//             'D6':      1174.6,
//             'D♯6':     1244.5,
//             'E♭6':     1244.5,
//             'E6':      1318.5,
//             'F6':      1396.9,
//             'F♯6':     1479.9,
//             'G♭6':     1479.9,
//             'G6':      1567.9,
//             'G♯6':     1661.2,
//             'A♭6':     1661.2,
//             'A6':      1760.0,
//             'A♯6':     1864.6,
//             'B♭6':     1864.6,
//             'B6':      1975.5,
//             'C7':      2093.0,
//             'C♯7':     2217.4,
//             'D♭7':     2217.4,
//             'D7':      2349.3,
//             'D♯7':     2489.0,
//             'E♭7':     2489.0,
//             'E7':      2637.0,
//             'F7':      2793.8,
//             'F♯7':     2959.9,
//             'G♭7':     2959.9,
//             'G7':      3135.9,
//             'G♯7':     3322.4,
//             'A♭7':     3322.4,
//             'A7':      3520.0,
//             'A♯7':     3729.3,
//             'B♭7':     3729.3,
//             'B7':      3951.0,
//             'C8':      4186.0,
//             'C♯8':     4434.9,
//             'D♭8':     4434.9,
//             'D8':      4698.6,
//             'D♯8':     4978.0,
//             'E♭8':     4978.0,
//             'E8':      5274.0,
//             'F8':      5587.6,
//             'F♯8':     5919.9,
//             'G♭8':     5919.9,
//             'G8':      6271.9,
//             'G♯8':     6644.8,
//             'A♭8':     6644.8,
//             'A8':      7040.0,
//             'A♯8':     7458.6,
//             'B♭8':     7458.6,
//             'B8':      7902.1,
//         };
//
//         this.progression = undefined;
//         this.sound = undefined;
//
//         this.audioContext = new AudioContext();
//         this.scheduler = new WebAudioScheduler({context: this.audioContext});
//         this.masterGain = null;
//
//         this.scheduler.on('start', () => {
//             this.masterGain = this.audioContext.createGain();
//             this.masterGain.connect(this.audioContext.destination);
//         });
//
//         this.scheduler.on('stop', () => {
//             this.masterGain.disconnect();
//             this.masterGain = null;
//         });
//
//         // this.scheduler.on('process', () => {
//         //     console.log(this.counter)
//         // })
//     }
//
//     start = () => {
//         this.scheduler.start(this.metronome);
//     };
//
//     stop = () => {
//         this.scheduler.stop();
//     };
//
//     reset = () => {
//         this.counter = 0;
//     };
//
//     setProgression = (progression) => {
//         this.progression = progression;
//     };
//
//     setSound = (sound) => {
//         this.sound = sound;
//     };
//
//     setCallback = callback => {
//         this.callback = callback;
//     };
//
//     metronome = (event) => {
//         if (this.progression === undefined || this.sound === undefined) {
//             return;
//         }
//
//         const t0 = event.playbackTime;
//
//         this.progression[this.counter].forEach(item => {
//             this.scheduler.insert(t0 + 0.000, this.tickTack, {frequency: this.notes[item]});
//         });
//
//         this.counter = (this.counter < this.progression.length-1)
//             ? this.counter + 1
//             : 0;
//
//
//         // this.scheduler.insert(t0 + 0.000, this.tickTack, { frequency: 440});
//         // this.scheduler.insert(t0 + 0.500, this.tickTack, { frequency: 440});
//         // this.scheduler.insert(t0 + 1.000, this.tickTack, { frequency: 440});
//         // this.scheduler.insert(t0 + 1.500, this.tickTack, { frequency: 440});
//
//         this.scheduler.insert(t0 + 2.000, this.metronome);
//         // this.callback(this.counter);
//     };
//
//     tickTack = (event) => {
//         const t0 = event.playbackTime;
//         const t1 = t0 + 2.0; //duration
//
//
//         let amp = this.audioContext.createGain();
//
//
//         const oscillators = this.sound.map(oscillator => {
//             const osc = this.audioContext.createOscillator();
//             osc.type = oscillator.wave;
//             osc.frequency.value = event.args.frequency;
//             osc.start(t0);
//             osc.stop(t1);
//             osc.connect(amp);
//
//             return osc;
//         });
//
//         amp.gain.setValueAtTime(0.5, t0);
//         amp.gain.exponentialRampToValueAtTime(1e-6, t1);
//         amp.connect(this.masterGain);
//
//         this.scheduler.nextTick(t1, () => {
//             oscillators.forEach(osc => osc.disconnect());
//             amp.disconnect();
//             amp = null;
//         });
//     }
// }
