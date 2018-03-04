import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from './api/users';


// Actions
export const AUTHENTICATION_SUCCESS = 'USER/AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'USER/AUTHENTICATION_FAILURE';
export const LOGIN = 'USER/LOGIN';
export const LOGOUT = 'USER/LOGOUT';


// Reducer
export default function (state = {}, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        id: action.user.id,
        username: action.user.username,
        token: action.user.token,
        isAuthenticated: true,
      };
    case AUTHENTICATION_FAILURE:
      return { error: action.error, isAuthenticated: false };
    case LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
}


// Action creators
export const authenticationSuccess = user => ({ type: AUTHENTICATION_SUCCESS, user });
export const authenticationFailure = error => ({ type: AUTHENTICATION_FAILURE, error });
export const login = creds => ({ type: LOGIN, username: creds.username, password: creds.password });
export const logout = () => ({ type: LOGOUT });


// Sagas
function* authenticationWorker(action) {
  try {
    const response = yield call(api.authenticate, action);
    if (response.status === 200 && response.data && response.data.success) {
      yield put(authenticationSuccess({
        username: response.data.username, token: response.data.token, id: response.data.id,
      }));
    } else {
      yield put(authenticationFailure(response.data.msg));
    }
  } catch (e) {
    yield put(authenticationFailure(e));
  }
}

function* logoutWorker() {
  try {
    yield call(api.logoutUser);
    // if (response.success) {
    //   yield put(logout());
    // } else {
    //   yield put(authenticationFailure(response.msg));
    // }
  } catch (e) {
    yield put(authenticationFailure(e));
  }
}

export const userSagas = [
  takeLatest(LOGIN, authenticationWorker),
  takeLatest(LOGOUT, logoutWorker),
];
