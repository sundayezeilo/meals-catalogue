import { CHANGE_FILTER } from '../action-types/index';

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export default changeFilter;
