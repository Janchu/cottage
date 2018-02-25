import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from './api/users';


// Actions
export const LOGIN = 'USER/LOGIN';
export const AUTHENTICATION_SUCCESS = 'USER/AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'USER/AUTHENTICATION_FAILURE';
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
export function login(creds) {
  return { type: LOGIN, username: creds.username, password: creds.password };
}

export function authenticationSuccess(user) {
  return { type: AUTHENTICATION_SUCCESS, user };
}

export function authenticationFailure(error) {
  return { type: AUTHENTICATION_FAILURE, error };
}

export function logout() {
  return { type: LOGOUT };
}


// Sagas
function* authenticationWorker(action) {
  try {
    const response = yield call(api.authenticate, action);
    if (response.success) {
      yield put(authenticationSuccess({
        username: response.username, token: response.token, id: response.id,
      }));
    } else {
      yield put(authenticationFailure(response.msg));
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
