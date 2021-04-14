import { combineReducers } from 'redux';
import mealReducer from './meal';

const rootReducer = combineReducers({
  meals: mealReducer,
});

export default rootReducer;