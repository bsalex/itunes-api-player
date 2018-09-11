import {PLAYER_PLAY, PLAYER_PAUSE, PLAYER_STOP} from './PlayerActionTypes';

const initialState = {
    isPlaying: false,
    currentSong: null,
    lastStoppedSong: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_PLAY:
            return {
                ...state,
                isPlaying: true,
                lastStoppedSong: null,
                currentSong: action.payload
            };
        case PLAYER_PAUSE:
            return {
                ...state,
                isPlaying: false,
                lastStoppedSong: state.currentSong
            };
        case PLAYER_STOP:
            return {
                ...state,
                isPlaying: false,
                currentSong: null,
                lastStoppedSong: state.currentSong
            };
        default:
            return state;
    }
};
