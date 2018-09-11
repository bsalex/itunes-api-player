import {put, take, cancel, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {SEARCH_TEXT_CHANGE} from './SearchActionTypes';
import * as searchService from './SearchService';
import {searchResponse, searchRequest} from './SearchActions';

export function* handleSearch(action) {
    if (action.payload && action.payload.length > 2) {
        yield delay(500);
        yield put(searchRequest());
        const songs = yield searchService.fetchSongs(action.payload);
        yield put(searchResponse(songs));
    }
}

export function* watchSearch() {
    let task;
    while (true) {
        const action = yield take(SEARCH_TEXT_CHANGE);
        if (task) {
            yield cancel(task);
        }
        task = yield fork(handleSearch, action);
    }
}
