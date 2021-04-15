import { combineReducers } from 'redux';
import mealReducer from './meal';
import filterReducer from './filter';

const rootReducer = combineReducers({
  meals: mealReducer,
  changeFilter: filterReducer,
});

export default rootReducer;
