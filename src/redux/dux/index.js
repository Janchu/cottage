import { combineReducers } from 'redux';
import booking, { bookingSagas } from './bookings';
import message, { messageSagas } from './messages';
import user, { userSagas } from './users';

export const rootReducer = combineReducers({
  booking,
  message,
  user,
});

export function* rootSaga() {
  yield [
    bookingSagas,
    messageSagas,
    userSagas,
  ];
}
