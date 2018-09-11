import {connect} from 'react-redux';
import {compose, withHandlers, withPropsOnChange} from 'recompose';
import PlayerComponent from './PlayerComponent';
import {play, pause, stop} from './PlayerActions';

function mapStateToProps(state, ownProps) {
    return {
        isPlaying:
            state.player.isPlaying && state.player.currentSong && state.player.currentSong.id === ownProps.song.id,
        isStoppable: state.player.currentSong && state.player.currentSong.id === ownProps.song.id,
        currentSong: state.player.currentSong,
        lastStoppedSong: state.player.lastStoppedSong
    };
}

const mapDispatchToProps = {
    onPlay: play,
    onPause: pause,
    onStop: stop
};

let globalAudioElement;

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers(({onPlay, onStop, onPause}) => {
        if (!globalAudioElement) {
            globalAudioElement = document.createElement('audio');
            globalAudioElement.addEventListener('ended', () => {
                onStop();
            });
        }

        return {
            onPlay: ({currentSong, song}) => () => {
                onPlay(song);

                if (!currentSong || currentSong.id !== song.id) {
                    globalAudioElement.src = song.sampleUrl;
                }

                globalAudioElement.play();
            },
            onPause: () => () => {
                onPause();
                globalAudioElement.pause();
            },
            onStop: () => () => {
                onStop();
                globalAudioElement.pause();
                globalAudioElement.currentTime = 0;
            }
        };
    }),
    withPropsOnChange(
        () => true,
        (props) => {
            if (
                props.song &&
                !props.isPlaying &&
                props.autoPlay &&
                (!props.lastStoppedSong || props.song.id !== props.lastStoppedSong.id)
            ) {
                props.onPlay();
            }

            return props;
        }
    )
)(PlayerComponent);
