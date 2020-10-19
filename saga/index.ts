import {
  all,
  takeEvery,
  fork,
  take,
  cancel,
  delay,
  put,
} from 'redux-saga/effects';
import {actionTypes} from '../redux';
import takeAPI from '../helper/cancelableSaga';

export default function* rootSaga() {
  yield all([decreaseWatcher(), increaseWatcher()]);
}

export function* increase() {
  console.log('click increase');
  yield delay(1000);
  yield put({type: actionTypes.INCREASE});
  yield put({type: 'CANCEL'});
}

export function* increaseWatcher() {
  yield takeAPI(actionTypes.INCREASE_ASYNC, increase, 'CANCEL');
}

export function* decrease() {
  console.log('click decrease');
  yield delay(1000);
  yield put({type: actionTypes.DECREASE});
  yield put({type: 'CANCEL'});
}

export function* decreaseWatcher() {
  yield takeAPI(actionTypes.DECREASE_ASYNC, decrease, 'CANCEL');
}
