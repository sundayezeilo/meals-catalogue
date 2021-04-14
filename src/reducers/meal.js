import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_FAILURE
} from '../action-types/index';


const mealReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_MEALS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MEALS_SUCCESS:
      return {
        loading: false,
        meals: payload,
        error: '',
      };

    case FETCH_MEALS_FAILURE:
      return {
        loading: false,
        meals: '',
        error: payload,
      };

    default:
      return state;
  }
};

export default mealReducer;
