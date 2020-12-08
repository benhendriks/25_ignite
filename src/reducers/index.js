import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

const fetchGames = () => {
  return {
    type: 'FETCH_GAMES',
  };
};

fetchGames();

export default rootReducer;
