import React from 'react';
import classNames from 'classnames';

import './Player.css';

const PlayerComponent = ({isPlaying, isStoppable, onPlay, onPause, onStop, className}) => {
    return (
        <div className={classNames('player', className)}>
            <button disabled={isPlaying} onClick={onPlay} className="player__control player__play">
                ▶
            </button>
            <button disabled={!isPlaying} onClick={onPause} className="player__control player__pause">
                ⏸
            </button>
            <button disabled={!isStoppable} onClick={onStop} className="player__control player__stop">
                ■
            </button>
        </div>
    );
};

export default PlayerComponent;
