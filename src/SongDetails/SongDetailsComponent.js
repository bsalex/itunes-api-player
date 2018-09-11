import React from 'react';
import PlayerContainer from '../Player/PlayerContainer';

import './SongDetails.css';

const SongDetailsComponent = ({album, song}) => {
    if (!album) {
        return null;
    }

    return (
        <div className="song-details">
            <img alt="Song album cover" className="song-details__album-cover" src={album.image} />
            <PlayerContainer song={song} />
            <div className="song-details__album-songs">
                {album.songs.map((song) => (
                    <div key={song.id} className="song-details__album-song">
                        {song.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SongDetailsComponent;
