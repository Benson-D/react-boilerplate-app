/**
 * AddPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAdd = state => state.PostString || initialState;

const makeSelectString = () =>
  createSelector(
    selectAdd,
    postStringState => postStringState.string,
  );

const makeSubmitString = () =>
  createSelector(
    selectAdd,
    postStringState => postStringState.submit,
  );

const makeError = () =>
  createSelector(
    selectAdd,
    postStringState => postStringState.error,
  );

export { selectAdd, makeSelectString, makeSubmitString, makeError };
