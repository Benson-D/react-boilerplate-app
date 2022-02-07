/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_STR_DATA, LOAD_STR_SUCCESS, LOAD_STR_ERROR } from './constants';

/**
 * Load the string list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STR_DATA
 */
export function loadStrData() {
  return {
    type: LOAD_STR_DATA,
  };
}

/**
 * Dispatched when the strings are loaded by the request saga
 *
 * @param  {object} strings The string data
 * @return {object} An action object with a type of LOAD_STRINGS_SUCCESS passing the strings
 */
export function loadStrSuccess(strings) {
  return {
    type: LOAD_STR_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when loading the string data fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_STR_ERROR passing the error
 */
export function loadStrError(error) {
  return {
    type: LOAD_STR_ERROR,
    error,
  };
}
