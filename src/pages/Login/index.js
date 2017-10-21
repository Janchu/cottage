import { connect } from 'react-redux';
import Login from './Login';
import { authenticateUser } from '../../redux/actions/user';


export default connect(
  state => ({
    isLoggedIn: !!state.user.token,
    error: state.user.error,
  }),
  dispatch => ({
    doLogin(creds) {
      dispatch(authenticateUser(creds));
    },
  }),
)(Login);
