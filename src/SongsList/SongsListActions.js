import {SONGS_LIST_CHANGE, SONGS_LIST_SELECT_SONG} from './SongsListActionTypes';

export function songsListChange(songs) {
    return {
        type: SONGS_LIST_CHANGE,
        payload: songs
    };
}

export function songsListSelectSong(song) {
    return {
        type: SONGS_LIST_SELECT_SONG,
        payload: song
    };
}
