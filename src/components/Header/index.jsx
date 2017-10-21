import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const propTypes = {
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

const defaultProps = {
  logout: undefined,
  isLoggedIn: false,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu style={{ marginBottom: 64 }}>
        <Menu.Item name="home">
          Mökki
        </Menu.Item>

        {this.props.isLoggedIn &&
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={this.props.logout}>
             Kirjaudu ulos
            </Menu.Item>

          </Menu.Menu>
        }
      </Menu>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
