import { changeFilter } from '../../actions/index';
import { CHANGE_FILTER } from '../../action-types/index';

describe('changeFilter', () => {
  it('should create an action to change filter', () => {
    const filter = 'Seafood';
    const expectedAction = {
      type: CHANGE_FILTER,
      payload: filter,
    }
    expect(changeFilter(filter)).toEqual(expectedAction);
  })
})

