import { connect } from 'react-redux';
import Booking from './Booking';
import { fetchBookings, createBooking, deleteBooking } from '../../redux/actions/booking';


export default connect(
  state => ({
    bookings: state.booking.bookings,
    user: state.user.name,
  }),
  dispatch => ({
    fetchBookings() {
      dispatch(fetchBookings());
    },
    createBooking(booking) {
      dispatch(createBooking(booking));
    },
    deleteBooking(id) {
      dispatch(deleteBooking(id));
    },
  }),
)(Booking);
