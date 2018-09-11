import {PLAYER_STOP, PLAYER_PAUSE, PLAYER_PLAY} from './PlayerActionTypes';

export function play(song) {
    return {
        type: PLAYER_PLAY,
        payload: song
    };
}

export function pause() {
    return {
        type: PLAYER_PAUSE
    };
}

export function stop() {
    return {
        type: PLAYER_STOP
    };
}
