import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Login from './pages/Login';
import Booking from './pages/Booking';
import { logout } from './redux/actions/user';

const propTypes = {
  isLoggedIn: PropTypes.bool,
};

const defaultProps = {
  isLoggedIn: false,
};

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <Header isLoggedIn={isLoggedIn} logout={() => this.props.logout()} />
        <Container>
          <Route path="/" component={isLoggedIn ? Booking : Login} />
        </Container>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(
  state => ({
    isLoggedIn: !!state.user.isAuthenticated,
  }),
  dispatch => ({
    logout() {
      dispatch(logout());
    },
  }),
)(App);
