import { ADD_STR_CHANGE, ADD_STR_SUBMIT, ADD_STR_ERROR } from '../constants';

import { changeString, submitError, submitString } from '../actions';

describe('PostStringPage Actions', () => {
  describe('checks the change of value', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ADD_STR_CHANGE,
      };

      expect(changeString()).toEqual(expectedResult);
    });
  });

  describe('PostStringPage submission', () => {
    it('should return the correct type and the passed string', () => {
      const fixture = 'Test';
      const expectedResult = {
        type: ADD_STR_SUBMIT,
        submit: fixture,
      };

      expect(submitString(fixture)).toEqual(expectedResult);
    });
  });

  describe('PostStringPage error case', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: ADD_STR_ERROR,
        error: fixture,
      };

      expect(submitError(fixture)).toEqual(expectedResult);
    });
  });
});
