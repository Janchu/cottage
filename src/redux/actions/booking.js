export const FETCH_BOOKINGS = 'BOOKING/FETCH_BOOKINGS';
export function fetchBookings() {
  return {
    type: FETCH_BOOKINGS,
  };
}

export const FETCHED_BOOKINGS = 'BOOKING/FETCHED_BOOKINGS';
export function fetchedBookings(bookings) {
  return {
    type: FETCHED_BOOKINGS,
    bookings,
  };
}

export const CREATE_BOOKING = 'BOOKING/CREATE_BOOKING';
export function createBooking(booking) {
  return {
    type: CREATE_BOOKING,
    title: booking.title,
    start: booking.start,
    end: booking.end,
  };
}

export const DELETE_BOOKING = 'BOOKING/DELETE_BOOKING';
export function deleteBooking(id) {
  return {
    type: DELETE_BOOKING,
    id,
  };
}
