/*
 * postStringReducer
 *
 */

import produce from 'immer';
import { ADD_STR_CHANGE, ADD_STR_ERROR, ADD_STR_SUBMIT } from './constants';

export const initialState = {
  string: '',
  submit: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const postStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STR_CHANGE:
        draft.string = action.string;
        break;
      case ADD_STR_SUBMIT:
        draft.submit = action.submit;
        break;
      case ADD_STR_ERROR:
        draft.error = action.error;
    }
  });

export default postStringReducer;
