import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchedBookings, FETCH_BOOKINGS, CREATE_BOOKING, DELETE_BOOKING } from '../actions/booking';
import { fetchBookings, createBooking, deleteBooking } from './api/booking';


function* fetchBookingsWorker() {
  try {
    const response = yield call(fetchBookings);
    yield put(fetchedBookings(response));
  } catch (e) {
    console.log('worker', e);
  }
}

function* createBookingWorker(action) {
  try {
    const response = yield call(createBooking, action);
    yield put({ type: FETCH_BOOKINGS });
  } catch (e) {
    console.log(e);
  }
}


function* deleteBookingWorker(action) {
  try {
    const response = yield call(deleteBooking, action);
    yield put({ type: FETCH_BOOKINGS });
  } catch (e) {
    console.log(e);
  }
}


const bookingSagas = [
  takeLatest(FETCH_BOOKINGS, fetchBookingsWorker),
  takeLatest(CREATE_BOOKING, createBookingWorker),
  takeLatest(DELETE_BOOKING, deleteBookingWorker),
];

export default bookingSagas;
