import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { login } from '../../redux/dux/users';


export default connect(
  state => ({
    isLoggedIn: !!state.user.token,
    error: state.user.error,
  }),
  dispatch => bindActionCreators({ login }, dispatch),
)(Login);
