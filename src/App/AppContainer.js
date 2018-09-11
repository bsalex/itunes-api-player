import {connect} from 'react-redux';
import {compose, lifecycle, withState, withHandlers} from 'recompose';
import AppComponent from './AppComponent';

function mapStateToProps(state) {
    return {
        showMobilePlayer: !!state.player.currentSong,
        hasDetails: state.songDetails.album
    };
}

export default compose(
    connect(mapStateToProps),
    withState('isMobile', 'setIsMobile', false),
    withHandlers({
        updateIsMobile: ({setIsMobile}) => () => {
            setIsMobile(window.innerWidth <= 700);
        }
    }),
    lifecycle({
        componentWillMount: function() {
            this.props.updateIsMobile();
        },
        componentDidMount: function() {
            window.addEventListener('resize', this.props.updateIsMobile);
        },
        componentWillUnmount: function() {
            window.removeEventListener('resize', this.props.updateIsMobile);
        }
    })
)(AppComponent);
