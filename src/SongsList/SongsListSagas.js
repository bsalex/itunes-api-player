import {put, takeEvery} from 'redux-saga/effects';

import {SEARCH_RESPONSE} from '../Search/SearchActionTypes';
import {songsListChange} from './SongsListActions';

export function* handleSearchResults(action) {
    yield put(songsListChange(action.payload));
}

export function* watchSearchResults() {
    yield takeEvery(SEARCH_RESPONSE, handleSearchResults);
}
