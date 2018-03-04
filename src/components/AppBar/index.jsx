import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Header, Label } from 'semantic-ui-react';

const propTypes = {
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

const defaultProps = {
  logout: undefined,
  isLoggedIn: false,
};

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Header as="h1" dividing>
          Mökki
          <Label basic style={{ padding: 4 }}><span style={{ fontSize: 11, color: '#ccc' }}> ALPHA</span></Label>
          {this.props.isLoggedIn &&
            <Button compact floated="right" onClick={this.props.logout}>
              <Icon name="log out" /> Kirjaudu ulos
            </Button>
          }
        </Header>
      </div>
    );
  }
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default AppBar;
