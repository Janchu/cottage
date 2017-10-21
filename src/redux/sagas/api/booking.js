import axios from 'axios';


export function fetchBookings() {
  const promise = axios.get('http://localhost:8080/bookings', { timeout: 5000 })
    .then(response => response.data)
    .catch(error => (error.response ? error.response.status : 500));
  return promise;
}

export function createBooking(action) {
  const promise = axios.post('http://localhost:8080/bookings', { title: action.title, start: action.start, end: action.end })
    .then(response => response.data)
    .catch(error => (error.response ? error.response.status : 500));
  return promise;
}


export function deleteBooking(action) {
  const promise = axios.delete(`http://localhost:8080/bookings/${action.id}`, { timeout: 5000 })
    .then(response => response.data)
    .catch(error => (error.response ? error.response.status : 500));

  return promise;
}
