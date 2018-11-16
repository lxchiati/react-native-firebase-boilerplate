import { put, fork, takeEvery } from 'redux-saga/effects';
import { AppActionTypes } from '../actionTypes';
import actionCreators from '../actions';
import { listenForAuthChange } from './auth';

/**
 * Initialization saga, ran after logging in.
 */
export function* initializeApp() {
  try {
    yield fork(listenForAuthChange);
    yield put(actionCreators.setAppAsInitialized());
  } catch (error) {
    yield put(actionCreators.setAppInitializeError(error));
  }
}

export function* watchInitializationRequest() {
  yield takeEvery(AppActionTypes.APP_INITIALIZE_REQUEST, initializeApp);
}

export default function* root() {
  yield fork(watchInitializationRequest);
}
