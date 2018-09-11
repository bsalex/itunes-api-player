import React from 'react';
import classNames from 'classnames';

import './Song.css';

const SongComponent = ({song: {name, artist, albumName, mediumImage}, isPlaying, className}) => {
    return (
        <div className={classNames('song', {'song--is-playing': isPlaying}, className)}>
            <img alt="Album cover" className="song__art" src={mediumImage} />
            <div className="song__name">{name}</div>
            <div className="song__artist">{artist}</div>
            <div className="song__album">{albumName}</div>
            <div className="song__playing-indicator">🕪</div>
        </div>
    );
};

export default SongComponent;
