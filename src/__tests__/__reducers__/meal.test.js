import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE,
} from '../../action-types/index';
import mealReducer from '../../reducers/meal';

const initialState = {
  loading: false,
  mealList: [],
  error: '',
};

describe('mealReducer', () => {
  const curState = {
    ...initialState
  };

  const action = {
    type: FETCH_MEALS_REQUEST,
  }

  it('should return the initial state', () => {
    expect(mealReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_MEALS_REQUEST', () => {

    expect(mealReducer(curState, action)).toEqual(
      { ...curState, loading: true, }
    )
  })

  it('should handle FETCH_MEALS_SUCCESS', () => {
    action.type = FETCH_MEALS_SUCCESS,
    action.payload = [{}, {}];
    expect(mealReducer(curState, action)).toEqual(
      { ...curState, loading: false, mealList: [{}, {}] }
    )
  });

  it('should handle FETCH_MEALS_FAILURE', () => {
    action.type = FETCH_MEALS_FAILURE,
    action.payload = 'Error';
    expect(mealReducer(curState, action)).toEqual(
      { ...curState, loading: false, mealList: [], error: 'Error' }
    )
  });
  
})