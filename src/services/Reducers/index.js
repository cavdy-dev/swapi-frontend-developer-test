import { combineReducers } from 'redux';
import StarshipsReducers from './starshipsReducer';
import PlanetsReducers from './PlanetsReducer';
import CharactersReducers from './charactersReducer';

export default combineReducers({
  starships: StarshipsReducers,
  planets: PlanetsReducers,
  characters: CharactersReducers
});
