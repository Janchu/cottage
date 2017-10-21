import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { AUTHENTICATE_USER, LOGOUT, authenticationSuccess, authenticationFailure, logout } from '../actions/user';
import { authenticate, logoutUser } from './api/user';


function* authenticationWorker(action) {
  try {
    const response = yield call(authenticate, action);
    if (response.success) {
      yield put(authenticationSuccess({
        name: action.name, token: response.token, id: response.id,
      }));
    } else {
      yield put(authenticationFailure(response.msg));
    }
  } catch (e) {
    yield put(authenticationFailure(e));
  }
}

function* logoutWorker(action) {
  try {
    const response = yield call(logoutUser);
    // if (response.success) {
    //   yield put(logout());
    // } else {
    //   yield put(authenticationFailure(response.msg));
    // }
  } catch (e) {
    yield put(authenticationFailure(e));
  }
}


const userSagas = [
  takeLatest(AUTHENTICATE_USER, authenticationWorker),
  takeLatest(LOGOUT, logoutWorker),
];

export default userSagas;
