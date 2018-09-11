import {put, takeEvery} from 'redux-saga/effects';

import {SONGS_LIST_SELECT_SONG} from '../SongsList/SongsListActionTypes';
import {getSongAlbum} from './SongDetailsService';
import {requestSongDetails, responseSongDetails} from './SongDetailsActions';

export function* handleSelectSong(action) {
    const song = action.payload;
    yield put(requestSongDetails(song));
    const songDetails = yield getSongAlbum(song);
    yield put(responseSongDetails(songDetails));
}

export function* watchSelectSong() {
    yield takeEvery(SONGS_LIST_SELECT_SONG, handleSelectSong);
}
