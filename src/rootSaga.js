import {all} from 'redux-saga/effects';
import {watchSearch} from './Search/SearchSagas';
import {watchSearchResults} from './SongsList/SongsListSagas';
import {watchSelectSong as detailsWatchSelectSong} from './SongDetails/SongDetailsSagas';

export default function* rootSaga() {
    yield all([watchSearch(), watchSearchResults(), detailsWatchSelectSong()]);
}
