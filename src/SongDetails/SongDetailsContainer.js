import {connect} from 'react-redux';
import SongDetailsComponent from './SongDetailsComponent';


function mapStateToProps(state) {
    return {
        album: state.songDetails.album,
        song: state.songDetails.song
    };
}

export default connect(
    mapStateToProps,
)(SongDetailsComponent);
