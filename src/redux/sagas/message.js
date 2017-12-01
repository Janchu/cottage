import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchedMessages, FETCH_MESSAGES, CREATE_MESSAGE, DELETE_MESSAGE } from '../actions/message';
import { fetchMessages, createMessage, deleteMessage } from './api/message';


function* fetchMessagesWorker() {
  try {
    const response = yield call(fetchMessages);
    yield put(fetchedMessages(response));
  } catch (e) {
    console.log(e);
  }
}

function* createMessageWorker(action) {
  try {
    const response = yield call(createMessage, action);
    yield put(fetchedMessages(response));
    yield put({ type: FETCH_MESSAGES })
  } catch (e) {
    console.log(e);
  }
}

function* deleteMessageWorker(action) {
  try {
    const response = yield call(deleteMessage, action);
    yield put({ type: FETCH_MESSAGES });
  } catch (e) {
    console.log(e);
  }
}

const messageSagas = [
  takeLatest(FETCH_MESSAGES, fetchMessagesWorker),
  takeLatest(CREATE_MESSAGE, createMessageWorker),
  takeLatest(DELETE_MESSAGE, deleteMessageWorker),
];

export default messageSagas;
