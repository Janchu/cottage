import axios from 'axios';

// export function get() {
//   const promise = axios.get('http://localhost:6006/users', { timeout: 5000 })
//     .then(response => response.data)
//     .catch(error => (error.response ? error.response.status : 500));
//
//   return promise;
// }

export function authenticate(action) {
  const promise = axios.post(
    'http://localhost:8080/users/login',
    { username: action.username, password: action.password },
    { withCredentials: true, timeout: 5000 },
  )
    .then(response => response)
    .catch(error => error);
  return promise;
}

export function logoutUser() {
  const promise = axios.get('http://localhost:8080/users/logout')
    .then(response => response)
    .catch(error => error);
  return promise;
}
