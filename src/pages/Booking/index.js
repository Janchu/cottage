import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Booking from './Booking';
import { fetchBookings, createBooking, deleteBooking } from '../../redux/dux/bookings';


export default connect(
  state => ({
    bookings: state.booking.bookings,
    user: state.user.username,
  }),
  dispatch => (bindActionCreators({ fetchBookings, createBooking, deleteBooking }, dispatch)),
)(Booking);
