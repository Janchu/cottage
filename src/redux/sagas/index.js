import bookingSagas from './booking';
import messageSagas from './message';
import userSagas from './user';

export default function* rootSaga() {
  yield [
    bookingSagas,
    messageSagas,
    userSagas,
  ];
}
