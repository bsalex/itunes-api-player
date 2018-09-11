import {SONGS_LIST_CHANGE, SONGS_LIST_SELECT_SONG} from './SongsListActionTypes';

const initialState = {
    selectedSong: null,
    values: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SONGS_LIST_CHANGE:
            return {
                ...state,
                values: [...action.payload]
            };
        case SONGS_LIST_SELECT_SONG:
            return {
                ...state,
                selectedSong: action.payload
            };
        default:
            return state;
    }
};
