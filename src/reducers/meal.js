import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE,
} from '../action-types/index';

const initialState = {
  loading: false,
  mealList: {},
  error: '',
};

const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MEALS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MEALS_SUCCESS:
      return {
        loading: false,
        mealList: payload,
        error: '',
      };

    case FETCH_MEALS_FAILURE:
      return {
        loading: false,
        mealList: '',
        error: payload,
      };

    default:
      return state;
  }
};

export default mealReducer;
