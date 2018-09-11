import {SEARCH_TEXT_CHANGE, SEARCH_RESPONSE, SEARCH_REQUEST} from './SearchActionTypes';

export function searchTextChange(text) {
    return {
        type: SEARCH_TEXT_CHANGE,
        payload: text
    };
}

export function searchRequest() {
    return {
        type: SEARCH_REQUEST
    };
}

export function searchResponse(songs) {
    return {
        type: SEARCH_RESPONSE,
        payload: songs
    };
}
