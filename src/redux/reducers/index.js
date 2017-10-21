import { combineReducers } from 'redux';
import booking from './booking';
import message from './message';
import user from './user';

const rootReducer = combineReducers({
  booking,
  message,
  user,
});

export default rootReducer;
