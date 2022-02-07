import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { submitError } from './actions';
import { ADD_STR_SUBMIT } from './constants';

/**
 * Server string request/response handler
 */
export function* postString(string) {
  const requestURL = `http://localhost:3000/strContainer`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string: string.submit }),
    });
  } catch (err) {
    yield put(submitError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* serverStrData() {
  // Watches for ADD_STR_SUBMIT actions and calls postStrings when one comes in.
  yield takeLatest(ADD_STR_SUBMIT, postString);
}
