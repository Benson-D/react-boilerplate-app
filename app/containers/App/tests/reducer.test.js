import produce from 'immer';

import appReducer from '../reducer';
import { loadStrData, loadStrSuccess, loadStrError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      strings: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStrData action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.strings = false;
    });

    expect(appReducer(state, loadStrData())).toEqual(expectedResult);
  });

  it('should handle the loadStrSuccess action correctly', () => {
    const fixture = ['test1'];
    const expectedResult = produce(state, draft => {
      draft.strings = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, loadStrSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the loadStrError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, loadStrError(fixture))).toEqual(expectedResult);
  });
});
