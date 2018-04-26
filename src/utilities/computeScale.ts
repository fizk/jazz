import MusicalScale from "./MusicalScale";
import modulus from "./modulus";
import {Scale} from "../../@types";

export default (position, key, arpeggio = undefined): Scale[] => {
    const notes = new MusicalScale({key: key, mode: 'ionian'}).notes;
    const firstRoot = position.findIndex(note => note.root);

    const maj = {0: 'R', 2: '3', 4: '5', 6: '7'};
    const min = {0: 'R', 2: '♭3', 4: '5', 6: '7'};
    const dom = {0: 'R', 2: '3', 4: '5', 6: '♭7'};
    const dim = {0: 'R', 2: '♭3', 4: '♭5', 6: '7'};

    const triTypes = {
        1: maj,
        2: min,
        3: min,
        4: min,
        5: dom,
        6: min,
        7: dim,
    };

    return position.map((position, index) => {
        const offsetPosition = modulus(index - firstRoot, 7);
        const offsetArpeggio = modulus(index - firstRoot - (arpeggio - 1), 7);
        return {
            ...position,
            note: notes[offsetPosition].note,
            arpeggio: arpeggio ? triTypes[arpeggio][offsetArpeggio] : undefined
        }
    });
};
