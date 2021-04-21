import { CHANGE_FILTER } from '../../action-types/index';
import filterReducer from '../../reducers/filter';

describe('filterReducer', () => {
  const initialState = 'All';
  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_FILTER', () => {
    expect(
      filterReducer('All', {
        type: CHANGE_FILTER,
        payload: 'Seafood',
      }),
    ).toEqual('Seafood');
  });
});
