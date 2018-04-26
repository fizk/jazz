
export interface Scale {
    position: number[]
    root: boolean
    finger: number
    note: string
    arpeggio: string
}

export interface SongListItemType {
    composer: string
    date: string
    id: string
    key: string
    minor: boolean
    title: string
    time: [number, number]
}

export interface SongType {
    content: {
        [key: string]: {
            chord: string,
            duration: {
                beats: number
            }
        }[]
    },
    info: {
        composer: string,
        date: string,
        key: string,
        minor: boolean,
        time: [number, number],
        title: string
    },
    sections: string[],
}

export interface LeadSheetType {
    meta: {
        key: string
        minor: boolean
        time: [number, number]
        beats: number
        bars: number
        lines: number,
        parts: string[]
    },
    info: {
        composer: string
        date: string
        title: string
    },
    sequence: {
        chord: string | null
        chordNotes: string[]
        section: string | null
        position: {
            x: number
            y: number
        }
    }[]
}


export interface SongsStoreType {
    songs: SongListItemType[],
    loading: boolean,
    error: Error | undefined
}

export interface SongStoreType {
    song: LeadSheetType,
    loading: boolean,
    error: Error | undefined
}
