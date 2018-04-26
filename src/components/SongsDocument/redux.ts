import * as fetch from 'isomorphic-fetch';
import {SongListItemType, SongsStoreType} from "../../../@types";

const LOAD_SONGS_CONSTANTS = {
    START: 'LOAD_SONGS_CONSTANTS_START',
    END: 'LOAD_SONGS_CONSTANTS_END',
    ERROR: 'LOAD_SONGS_CONSTANTS_ERROR',
};

const onLoadSongsStart = () => ({
    type: LOAD_SONGS_CONSTANTS.START
});

const onLoadSongsEnd = (songs: SongListItemType[]) => ({
    type: LOAD_SONGS_CONSTANTS.END,
    songs,
});

const onLoadSongsError = (error: Error) => ({
    type: LOAD_SONGS_CONSTANTS.ERROR,
    error,
});

export const onLoadSongs = (key: string = undefined) => {
    return (dispatch) => {
        dispatch(onLoadSongsStart());

        const url = key
            ? `${__API_URL__}/songlist?key=${encodeURIComponent(key)}`
            : `${__API_URL__}/songlist`;

        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(onLoadSongsEnd(json)))
            .catch(error => dispatch(onLoadSongsError(error)))
    }
};

export default (state: SongsStoreType = {songs: [], loading: false, error: undefined}, action): SongsStoreType => {
    switch (action.type) {
        case LOAD_SONGS_CONSTANTS.START:
            return {
                ...state,
                error: undefined,
                loading: true,
            };
        case LOAD_SONGS_CONSTANTS.END:
            return {
                ...state,
                loading: false,
                error: undefined,
                songs: action.songs
            };
        case LOAD_SONGS_CONSTANTS.ERROR:
            return {
                ...state,
                loading: false,
                songs: [],
                error: action.error
            };
        default:
            return state;
    }
}
