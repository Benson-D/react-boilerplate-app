import { LOAD_STR_DATA, LOAD_STR_SUCCESS, LOAD_STR_ERROR } from '../constants';

import { loadStrData, loadStrSuccess, loadStrError } from '../actions';

describe('App Actions', () => {
  describe('loadStrData', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STR_DATA,
      };

      expect(loadStrData()).toEqual(expectedResult);
    });
  });

  describe('loadStrSuccess', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_STR_SUCCESS,
        strings: fixture,
      };

      expect(loadStrSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('loadStrError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STR_ERROR,
        error: fixture,
      };

      expect(loadStrError(fixture)).toEqual(expectedResult);
    });
  });
});
