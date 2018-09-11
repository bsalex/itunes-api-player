import {connect} from 'react-redux';
import SongsListComponent from './SongsListComponent';
import {songsListSelectSong} from './SongsListActions';

function mapStateToProps(state) {
    return {
        songs: state.songsList.values,
        selectedSong: state.songsList.selectedSong,
        currentlyPlayingSong: state.player.isPlaying && state.player.currentSong
    };
}

const mapDispatchToProps = {
    onSongSelected: songsListSelectSong
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongsListComponent);
