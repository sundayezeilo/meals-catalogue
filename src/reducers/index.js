import { combineReducers } from 'redux';
import mealReducer from './meal';
import filterReducer from './filter';

const rootReducer = combineReducers({
  meals: mealReducer,
  filter: filterReducer,
});

export default rootReducer;
