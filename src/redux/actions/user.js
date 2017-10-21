// export const FETCH_USER = 'USER/FETCH_USER';
// export function fetchUser() {
//   return {
//     type: FETCH_USER,
//   };
// }
//
// export const FETCHED_USER = 'USER/FETCHED_USER';
// export function fetchedUser(user) {
//   return {
//     type: FETCHED_USER,
//     user,
//   };
// }
//
export const AUTHENTICATE_USER = 'USER/AUTHENTICATE_USER';
export function authenticateUser(creds) {
  return {
    type: AUTHENTICATE_USER,
    name: creds.name,
    password: creds.password,
  };
}

export const AUTHENTICATION_SUCCESS = 'USER/AUTHENTICATION_SUCCESS';
export function authenticationSuccess(user) {
  console.log('action', user);
  return {
    type: AUTHENTICATION_SUCCESS,
    user,
  };
}

export const AUTHENTICATION_FAILURE = 'USER/AUTHENTICATION_FAILURE';
export function authenticationFailure(error) {
  return {
    type: AUTHENTICATION_FAILURE,
    error,
  };
}

export const LOGOUT = 'USER/LOGOUT';
export function logout() {
  return {
    type: LOGOUT,
  };
}
