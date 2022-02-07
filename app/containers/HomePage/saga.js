/**
 * Get request strings from backend server
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STR_DATA } from 'containers/App/constants';
import { loadStrSuccess, loadStrError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Server get request/response handler
 */
export function* getStringData() {
  // Select username from store
  const baseUrl = `http://localhost:3000/strContainer`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, baseUrl);
    yield put(loadStrSuccess(strings));
  } catch (err) {
    yield put(loadStrError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* serverStrData() {
  // Watches for LOAD_STR_DATA actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STR_DATA, getStringData);
}
