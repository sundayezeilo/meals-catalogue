import { CHANGE_FILTER } from '../action-types/index';

const filterReducer = (state = 'All', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
