import {RESPONSE_SONG_DETAILS, REQUEST_SONG_DETAILS} from './SongDetailsActionTypes';

const initialState = {
    inProgress: false,
    song: null,
    album: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SONG_DETAILS:
            return {
                ...state,
                inProgress: true
            };
        case RESPONSE_SONG_DETAILS:
            return {
                ...state,
                inProgress: false,
                ...action.payload
            };
        default:
            return state;
    }
};
