import {connect} from 'react-redux';
import {compose, withProps} from 'recompose';
import PlayerContainer from '../Player/PlayerContainer';

function mapStateToProps(state) {
    return {
        song: state.songsList.selectedSong
    };
}

export default compose(
    connect(mapStateToProps),
    withProps(() => ({
        autoPlay: true
    }))
)(PlayerContainer);
