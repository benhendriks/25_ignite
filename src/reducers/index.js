import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
});

const fetchGames = () => {
  return {
    type: 'FETCH_GAMES',
  };
};

fetchGames();

export default rootReducer;
