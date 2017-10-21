import { FETCHED_BOOKINGS } from '../actions/booking';


export default function (state = {}, action) {
  switch (action.type) {
    case FETCHED_BOOKINGS:
      return {
        bookings: action.bookings,
      };
    default:
      return state;
  }
}
