/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_STR_DATA } from 'containers/App/constants';
import { loadStrSuccess, loadStrError } from 'containers/App/actions';

import serverStrData, { getStringData } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getStringData Saga', () => {
  let getStringGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getStringGenerator = getStringData();

    const callDescriptor = getStringGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadStrSuccess action if it requests the data successfully', () => {
    const response = ['test1', 'test2'];
    const putDescriptor = getStringGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadStrSuccess(response)));
  });

  it('should call the loadStrError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStringGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadStrError(response)));
  });
});

describe('server Saga', () => {
  const serverApiDataSaga = serverStrData();

  it('should start task to watch for LOAD_STR_DATA action', () => {
    const takeLatestDescriptor = serverApiDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_STR_DATA, getStringData),
    );
  });
});
