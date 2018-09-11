import {combineReducers} from 'redux';
import SearchReducers from './Search/SearchReducers';
import SongsListReducers from './SongsList/SongsListReducers';
import SongDetailsReducers from './SongDetails/SongDetailsReducers';
import PlayerReducers from './Player/PlayerReducers';

const rootReducer = combineReducers({
    search: SearchReducers,
    songsList: SongsListReducers,
    songDetails: SongDetailsReducers,
    player: PlayerReducers
});

export default rootReducer;
