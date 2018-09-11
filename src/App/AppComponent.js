import React from 'react';
import classNames from 'classnames';
import SongsListContainer from '../SongsList/SongsListContainer';
import SearchContainer from '../Search/SearchContainer';
import SongDetailsContainer from '../SongDetails/SongDetailsContainer';
import MobilePlayerContainer from '../MobilePlayer/MobilePlayerContainer';

import './App.css';

const AppComponent = ({hasDetails, isMobile, showMobilePlayer}) => {
    return (
        <div
            className={classNames('app', {
                'app--show-mobile-player': showMobilePlayer,
                'app--has-details': hasDetails
            })}
        >
            <div className="app__songs-controls">
                <div className="app__search">
                    <SearchContainer />
                </div>
                <div className="app__songs-list">
                    <SongsListContainer />
                </div>
            </div>
            {!isMobile && (
                <div className="app__song-details">
                    <SongDetailsContainer />
                </div>
            )}
            {isMobile && <MobilePlayerContainer className="app__mobile-player" />}
        </div>
    );
};

export default AppComponent;
