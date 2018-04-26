import song from '../song';
import {SongType} from "../../../../@types";

describe('song', () => {
    test('beats, bars lines 1', () => {
        const songOne: SongType = {
            info: {
                date: '',
                title: '',
                key: '',
                composer: '',
                minor: false,
                time: [4, 4]
            },
            content: {
                A: [
                    {chord: 'C', duration:{beats: 4}},
                    {chord: 'D', duration:{beats: 4}},
                ],
                B: [
                    {chord: 'E', duration:{beats: 4}},
                    {chord: 'F', duration:{beats: 4}},
                ],
            },
            sections: ['A', 'B']
        };

        // |....|....|....|....|

        expect(16).toEqual(song(songOne).meta.beats);
        expect(4).toEqual(song(songOne).meta.bars);
        expect(1).toEqual(song(songOne).meta.lines);
    });

    test('beats, bars lines 2', () => {
        const songOne: SongType = {
            info: {
                date: '',
                title: '',
                key: '',
                composer: '',
                minor: false,
                time: [4, 4]
            },
            content: {
                A: [
                    {chord: 'C', duration:{beats: 4}},
                    {chord: 'D', duration:{beats: 4}},
                ],
                B: [
                    {chord: 'E', duration:{beats: 4}},
                    {chord: 'F', duration:{beats: 1}},
                ],
            },
            sections: ['A', 'B', 'B']
        };

        // |....|....|....|....|
        // |..  |

        expect(18).toEqual(song(songOne).meta.beats);
        expect(5).toEqual(song(songOne).meta.bars);
        expect(2).toEqual(song(songOne).meta.lines);
    });

    test('content 1', () => {
        const songOne: SongType = {
            info: {
                date: '',
                title: '',
                key: '',
                composer: '',
                minor: false,
                time: [4, 4]
            },
            content: {
                A: [
                    {chord: 'C', duration:{beats: 4}},
                    {chord: 'D', duration:{beats: 4}},
                ],
            },
            sections: ['A']
        };

        const expected = [{
            chord: 'C',
            section: 'A',
            position: {x: 0, y: 0,}
        }, {
            chord: null,
            section: null,
            position: {x: 1, y: 0,}
        }, {
            chord: null,
            section: null,
            position: {x: 2, y: 0,}
        }, {
            chord: null,
            section: null,
            position: {x: 3, y: 0,}
        },


        {
            chord: 'D',
            section: null,
            position: {x: 4, y: 0,}
        }, {
            chord: null,
            section: null,
            position: {x: 5, y: 0,}
        }, {
            chord: null,
            section: null,
            position: {x: 6, y: 0,}
        }, {
            chord: null,
            section: null,
            position: {x: 7, y: 0,}
        }];

        // |....|....|

        expect(expected).toEqual(song(songOne).sequence);
    });

    test('A Night In Tunisia', () => {
        const songContent: SongType = {
            content: {
                A: [
                    {
                        chord: "Eb7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eb7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eb7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eø7",
                        duration: {
                            beats: 2
                        }
                    },
                    {
                        chord: "A7b9",
                        duration: {
                            beats: 2
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    }
                ],
                A2: [
                    {
                        chord: "Eb7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eb7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eb7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eø7",
                        duration: {
                            beats: 2
                        }
                    },
                    {
                        chord: "A7b9",
                        duration: {
                            beats: 2
                        }
                    },
                    {
                        chord: "Dmin",
                        duration: {
                            beats: 4
                        }
                    }
                ],
                B: [
                    {
                        chord: "Aø7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "D7b9",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Gmin7",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "Gø7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "C7b9",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Fmaj7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Eø7",
                        duration: {
                            beats: 2
                        }
                    },
                    {
                        chord: "A7b9",
                        duration: {
                            beats: 2
                        }
                    }
                ],
                Coda: [
                    {
                        chord: "Eø7",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "Eb7#11",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "Dmin7",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "G7#11",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "Gminmaj7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Gmin7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "Gb7#9",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "Fmaj7",
                        duration: {
                            beats: 8
                        }
                    },
                    {
                        chord: "Eø7",
                        duration: {
                            beats: 4
                        }
                    },
                    {
                        chord: "A7b9",
                        duration: {
                            beats: 4
                        }
                    }
                ]
            },
            info: {
                composer: "Gillespie, Dizzy",
                date: "1942",
                key: "D",
                minor: true,
                time: [
                    4,
                    4
                ],
                title: "Night In Tunisia, A"
            },
            sections: [
                "A",
                "A",
                "B",
                "A2",
                "ToCod",
                "A",
                "A",
                "B",
                "A2",
                "Coda"
            ]
        };
        song(songContent)
    })
});



