"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharp11 = require("sharp11");
exports.default = (song) => {
    const beats = song.sections.map((section) => {
        return (song.content[section] || []).reduce((num, obj) => num + obj.duration.beats, 0);
    }).reduce((prev, current) => prev + current, 0);
    const expandedSection = song.sections.reduce((object, section) => {
        if (song.content[section] !== undefined) {
            object[section] = (song.content[section] || []).map(beat => {
                const bar = Array.from({ length: beat.duration.beats }).map(() => ({
                    chord: null,
                    chordNotes: [],
                    section: null,
                }));
                bar[0].chord = beat.chord;
                bar[0].chordNotes = sharp11.chord.create(beat.chord).chord.map(c => c.fullName);
                return bar;
            });
            object[section][0][0].section = section;
        }
        return object;
    }, {});
    const sequence = song.sections.reduce((arr, section) => {
        return [...arr, ...(expandedSection[section] || []).reduce((a, b) => [...a, ...b], [])];
    }, []);
    let count = 0;
    const sequenceWithPositions = sequence.map((item, index) => {
        const offset = index % (song.info.time[0] * 4);
        count = offset === 0 ? count + 1 : count;
        return Object.assign({}, item, { position: {
                y: (count - 1),
                x: offset
            } });
    });
    return {
        info: {
            composer: song.info.composer,
            date: song.info.date,
            title: song.info.title,
        },
        meta: {
            key: song.info.key,
            minor: song.info.minor,
            time: song.info.time,
            beats: beats,
            bars: Math.ceil(beats / song.info.time[0]),
            lines: Math.ceil(beats / song.info.time[0] / 4),
            parts: song.sections
        },
        sequence: sequenceWithPositions
    };
};
//# sourceMappingURL=song.js.map