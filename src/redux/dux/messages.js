import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from './api/messages';


// Actions
const FETCH = 'MESSAGE/FETCH';
const FETCHED = 'MESSAGE/FETCHED';
const CREATE = 'MESSAGE/CREATE';
const DELETE = 'MESSAGE/DELETE';


// Reducer
export default function (state = {}, action = {}) {
  switch (action.type) {
    case FETCHED:
      return { messages: action.messages };
    default:
      return state;
  }
}


// Action creators
export const fetchMessages = () => ({ type: FETCH });
export const fetchedMessages = messages => ({ type: FETCHED, messages });
export const createMessage = message => ({
  type: CREATE, text: message.text, author: message.author,
});
export const deleteMessage = id => ({ type: DELETE, id });


// Sagas
function* fetchMessagesWorker() {
  try {
    const response = yield call(api.fetchMessages);
    yield put(fetchedMessages(response.data));
  } catch (e) {
    // TODO: notify user
    console.log(e); // eslint-disable-line no-console
  }
}

function* createMessageWorker(action) {
  try {
    const response = yield call(api.createMessage, action);
    if (response.status === 200) {
      yield put(fetchMessages());
    }
  } catch (e) {
    // TODO: notify user
    console.log(e); // eslint-disable-line no-console
  }
}

function* deleteMessageWorker(action) {
  try {
    const response = yield call(api.deleteMessage, action);
    if (response.status === 200) {
      yield put({ type: FETCH });
    }
  } catch (e) {
    // TODO: notify user
    console.log(e); // eslint-disable-line no-console
  }
}

export const messageSagas = [
  takeLatest(FETCH, fetchMessagesWorker),
  takeLatest(CREATE, createMessageWorker),
  takeLatest(DELETE, deleteMessageWorker),
];
