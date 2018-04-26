import * as fetch from 'isomorphic-fetch';
import {SongStoreType, LeadSheetType} from '../../../@types';

const LOAD_SONG_CONSTANTS = {
    START: 'LOAD_SONG_CONSTANTS_START',
    END: 'LOAD_SONG_CONSTANTS_END',
    ERROR: 'LOAD_SONG_CONSTANTS_ERROR',
};

const onLoadSongStart = () => ({
    type: LOAD_SONG_CONSTANTS.START
});

const onLoadSongEnd = (song: LeadSheetType) => ({
    type: LOAD_SONG_CONSTANTS.END,
    song,
});

const onLoadSongError = (error: Error) => ({
    type: LOAD_SONG_CONSTANTS.ERROR,
    error,
});

export const onLoadSong = (id: string) => {
    return (dispatch) => {
        dispatch(onLoadSongStart());

        return fetch(`${__API_URL__}/song?id=${id}`)
            .then(response => response.json())
            .then(json => dispatch(onLoadSongEnd(json)))
            .catch(error => dispatch(onLoadSongError(error)))
    }
};

export default (state: SongStoreType = {song: undefined, loading: false, error: undefined}, action): SongStoreType => {
    switch (action.type) {
        case LOAD_SONG_CONSTANTS.START:
            return {
                ...state,
                error: undefined,
                song: undefined,
                loading: true,
            };
        case LOAD_SONG_CONSTANTS.END:
            return {
                ...state,
                loading: false,
                error: undefined,
                song: action.song
            };
        case LOAD_SONG_CONSTANTS.ERROR:
            return {
                ...state,
                loading: false,
                song: undefined,
                error: action.error
            };
        default:
            return state;
    }
}
