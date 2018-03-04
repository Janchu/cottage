import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Login from './pages/Login';
import Booking from './pages/Booking';
import { logout } from './redux/dux/users';

const propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const defaultProps = {
  isLoggedIn: false,
};

const App = props => (
  <div>
    <Container>
      <AppBar isLoggedIn={props.isLoggedIn} logout={() => props.logout()} />
      <Route path="/" component={props.isLoggedIn ? Booking : Login} />
    </Container>
  </div>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(
  state => ({
    isLoggedIn: !!state.user.isAuthenticated,
  }),
  dispatch => (bindActionCreators({ logout }, dispatch)),
)(App);
