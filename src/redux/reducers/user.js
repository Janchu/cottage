import { AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE, LOGOUT } from '../actions/user';


export default function (state = {}, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        id: action.user.id,
        name: action.user.name,
        token: action.user.token,
        isAuthenticated: true,
      };
    case AUTHENTICATION_FAILURE:
      return {
        error: action.error,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
