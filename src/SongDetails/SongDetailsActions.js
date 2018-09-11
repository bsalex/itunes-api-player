import {
    REQUEST_SONG_DETAILS,
    RESPONSE_SONG_DETAILS,
} from './SongDetailsActionTypes';

export function requestSongDetails() {
    return {
        type: REQUEST_SONG_DETAILS
    };
}

export function responseSongDetails(details) {
    return {
        type: RESPONSE_SONG_DETAILS,
        payload: details
    };
}