import {SEARCH_REQUEST, SEARCH_RESPONSE, SEARCH_TEXT_CHANGE} from './SearchActionTypes';

const initialState = {
    text: '',
    inProgress: false,
    error: null,
    results: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TEXT_CHANGE:
            return {
                ...state,
                text: action.payload
            };
        case SEARCH_REQUEST:
            return {
                ...state,
                inProgress: true
            };
        case SEARCH_RESPONSE:
            return {
                ...state,
                inProgress: false,
                results: action.payload
            };
        default:
            return state;
    }
};
