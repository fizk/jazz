// import computeScale from '../computeScale';
// import scales from '../scalePositions';
//
// describe('computeScale', () => {
//     describe('scale', () => {
//         test('apply 6/1 notes for C', () => {
//             const extended = computeScale(scales['6/1'].scale, 'C');
//             const expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', "B", "C", 'D', 'E', 'F'];
//             const actual = extended.map(item => item.note);
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 6/2 notes for C', () => {
//             const extended = computeScale(scales['6/2'].scale, 'C');
//             const expected = ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
//             const actual = extended.map(item => item.note);
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 5/1 notes for C', () => {
//             const extended = computeScale(scales['5/1'].scale, 'C');
//             const expected = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', "B", "C"];
//             const actual = extended.map(item => item.note);
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 6/2 notes for D', () => {
//             const extended = computeScale(scales['6/2'].scale, 'D');
//             const expected = ['C♯', 'D', 'E', 'F♯', 'G', 'A', 'B', 'C♯', 'D', 'E', 'F♯', 'G', 'A', 'B', 'C♯', 'D'];
//             const actual = extended.map(item => item.note);
//
//             expect(actual).toEqual(expected);
//         });
//     });
//
//     describe('arpeggio', () => {
//         test('apply 6/1 notes for C, arpeggio 1', () => {
//             const extended = computeScale(scales['6/1'].scale, 'C', 1);
//             const expected = [
//                 {note: 'C', arpeggio: 'R'},
//                 {note: 'D', arpeggio: undefined},
//                 {note: 'E', arpeggio: '3'},
//                 {note: 'F', arpeggio: undefined},
//                 {note: 'G', arpeggio: '5'},
//                 {note: 'A', arpeggio: undefined},
//                 {note: 'B', arpeggio: '7'},
//                 {note: 'C', arpeggio: 'R'},
//                 {note: 'D', arpeggio: undefined},
//                 {note: 'E', arpeggio: '3'},
//                 {note: 'F', arpeggio: undefined},
//                 {note: 'G', arpeggio: '5'},
//                 {note: 'A', arpeggio: undefined},
//                 {note: 'B', arpeggio: '7'},
//                 {note: "C", arpeggio: 'R'},
//                 {note: 'D', arpeggio: undefined},
//                 {note: 'E', arpeggio: '3'},
//                 {note: 'F', arpeggio: undefined},
//             ];
//             const actual = extended.map(item => ({note: item.note, arpeggio: item.arpeggio}));
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 6/1 notes for C, arpeggio 2', () => {
//             const extended = computeScale(scales['6/1'].scale, 'C', 2);
//             const expected = [
//                 {note: 'C', arpeggio: '7'},
//                 {note: 'D', arpeggio: 'R'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭3'},
//                 {note: 'G', arpeggio: undefined},
//                 {note: 'A', arpeggio: '5'},
//                 {note: 'B', arpeggio: undefined},
//                 {note: 'C', arpeggio: '7'},
//                 {note: 'D', arpeggio: 'R'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭3'},
//                 {note: 'G', arpeggio: undefined},
//                 {note: 'A', arpeggio: '5'},
//                 {note: 'B', arpeggio: undefined},
//                 {note: 'C', arpeggio: '7'},
//                 {note: 'D', arpeggio: 'R'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭3'},
//             ];
//             const actual = extended.map(item => ({note: item.note, arpeggio: item.arpeggio}));
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 6/2 notes for C, arpeggio 2', () => {
//             const extended = computeScale(scales['6/2'].scale, 'C', 2);
//             const expected = [
//                 {note: 'B', arpeggio: undefined},
//                 {note: 'C', arpeggio: '7'},
//                 {note: 'D', arpeggio: 'R'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭3'},
//                 {note: 'G', arpeggio: undefined},
//                 {note: 'A', arpeggio: '5'},
//                 {note: 'B', arpeggio: undefined},
//                 {note: 'C', arpeggio: '7'},
//                 {note: 'D', arpeggio: 'R'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭3'},
//                 {note: 'G', arpeggio: undefined},
//                 {note: 'A', arpeggio: '5'},
//                 {note: 'B', arpeggio: undefined},
//                 {note: 'C', arpeggio: '7'},
//             ];
//             const actual = extended.map(item => ({note: item.note, arpeggio: item.arpeggio}));
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 6/2 notes for C, arpeggio 5', () => {
//             const extended = computeScale(scales['6/2'].scale, 'C', 5);
//             const expected = [
//                 {note: 'B', arpeggio: '3'},
//                 {note: 'C', arpeggio: undefined},
//                 {note: 'D', arpeggio: '5'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭7'},
//                 {note: 'G', arpeggio: 'R'},
//                 {note: 'A', arpeggio: undefined},
//                 {note: 'B', arpeggio: '3'},
//                 {note: 'C', arpeggio: undefined},
//                 {note: 'D', arpeggio: '5'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭7'},
//                 {note: 'G', arpeggio: 'R'},
//                 {note: 'A', arpeggio: undefined},
//                 {note: 'B', arpeggio: '3'},
//                 {note: 'C', arpeggio: undefined},
//             ];
//             const actual = extended.map(item => ({note: item.note, arpeggio: item.arpeggio}));
//
//             expect(actual).toEqual(expected);
//         });
//
//         test('apply 6/2 notes for C, arpeggio 7', () => {
//             const extended = computeScale(scales['6/2'].scale, 'C', 7);
//             const expected = [
//                 {note: 'B', arpeggio: 'R'},
//                 {note: 'C', arpeggio: undefined},
//                 {note: 'D', arpeggio: '♭3'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭5'},
//                 {note: 'G', arpeggio: undefined},
//                 {note: 'A', arpeggio: '7'},
//                 {note: 'B', arpeggio: 'R'},
//                 {note: 'C', arpeggio: undefined},
//                 {note: 'D', arpeggio: '♭3'},
//                 {note: 'E', arpeggio: undefined},
//                 {note: 'F', arpeggio: '♭5'},
//                 {note: 'G', arpeggio: undefined},
//                 {note: 'A', arpeggio: '7'},
//                 {note: 'B', arpeggio: 'R'},
//                 {note: 'C', arpeggio: undefined},
//             ];
//             const actual = extended.map(item => ({note: item.note, arpeggio: item.arpeggio}));
//
//             expect(actual).toEqual(expected);
//         });
//     });
// });
