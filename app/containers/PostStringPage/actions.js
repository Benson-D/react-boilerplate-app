/*
 * PostStringPage Actions
 *
 */

import { ADD_STR_CHANGE, ADD_STR_SUBMIT, ADD_STR_ERROR } from './constants';

/**
 * Takes in the input field of the form
 *
 * @param  {string} string The new text of the input field
 *
 * @return {object} An action object with a type of ADD_STR_CHANGE
 */
export function changeString(string) {
  return {
    type: ADD_STR_CHANGE,
    string,
  };
}

/**
 * Updates the status of the form
 *
 * @param  {string} submit The final version of the input field
 *
 * @return {object} An action object with a type of ADD_STR_SUBMIT
 */
export function submitString(submit) {
  return {
    type: ADD_STR_SUBMIT,
    submit,
  };
}

/**
 * Dispatched when posting faces an error
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of ADD_STR_ERROR passing the error
 */
export function submitError(error) {
  return {
    type: ADD_STR_ERROR,
    error,
  };
}
