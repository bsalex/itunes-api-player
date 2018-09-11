import React from 'react';
import classNames from 'classnames';
import SongComponent from '../Song/SongComponent';

import './SongsList.css';

const SongsListComponent = ({songs = [], onSongSelected, selectedSong, currentlyPlayingSong}) => {
    return songs.map((song) => (
        <div
            key={song.id}
            onClick={() => onSongSelected(song)}
            className={classNames('songs-list__song', {
                'songs-list__song--selected': selectedSong && song.id === selectedSong.id
            })}
        >
            <SongComponent isPlaying={currentlyPlayingSong && song.id === currentlyPlayingSong.id} song={song} />
        </div>
    ));
};

export default SongsListComponent;
