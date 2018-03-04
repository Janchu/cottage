import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from './api/bookings';


// Actions
const FETCH = 'BOOKING/FETCH';
const FETCHED = 'BOOKING/FETCHED';
const CREATE = 'BOOKING/CREATE';
const DELETE = 'BOOKING/DELETE';


// Reducer
export default function (state = {}, action = {}) {
  switch (action.type) {
    case FETCHED:
      return { bookings: action.bookings };
    default:
      return state;
  }
}


// Action creators
export const fetchBookings = () => ({ type: FETCH });
export const fetchedBookings = bookings => ({ type: FETCHED, bookings });
export const createBooking = booking => ({
  type: CREATE, title: booking.title, start: booking.start, end: booking.end,
});
export const deleteBooking = id => ({ type: DELETE, id });


// Sagas
function* fetchBookingsWorker() {
  try {
    const response = yield call(api.fetchBookings);
    yield put(fetchedBookings(response.data));
  } catch (e) {
    // TODO: notify user
    console.log('worker', e); // eslint-disable-line no-console
  }
}

function* createBookingWorker(action) {
  try {
    const response = yield call(api.createBooking, action);
    if (response.status === 200) {
      yield put(fetchBookings());
    }
  } catch (e) {
    // TODO: notify user
    console.log(e); // eslint-disable-line no-console
  }
}

function* deleteBookingWorker(action) {
  try {
    const response = yield call(api.deleteBooking, action);
    if (response.status === 200) {
      yield put(fetchBookings());
    }
  } catch (e) {
    // TODO: notify user
    console.log(e); // eslint-disable-line no-console
  }
}

export const bookingSagas = [
  takeLatest(FETCH, fetchBookingsWorker),
  takeLatest(CREATE, createBookingWorker),
  takeLatest(DELETE, deleteBookingWorker),
];
