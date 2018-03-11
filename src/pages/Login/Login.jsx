import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';

const propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const defaultProps = {
  error: undefined,
};

class Login extends Component {
  state = { username: '', password: '' }

  handleLogin = () => this.props.login({
    username: this.state.username, password: this.state.password,
  })

  handleChange = (event, field) => this.setState({ [field]: event.target.value })

  render() {
    const { error } = this.props;
    return (
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        {error && <Message error>{error}</Message>}
        <Form>
          <Form.Group>
            <Form.Input
              width={16}
              label="Käyttäjätunnus"
              value={this.state.username}
              onChange={e => this.handleChange(e, 'username')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width={16}
              label="Salasana"
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e, 'password')}
            />
          </Form.Group>
          <Button style={{ marginTop: 32 }} fluid color="blue" onClick={this.handleLogin}>
            Kirjaudu sisään
          </Button>

        </Form>
      </div>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
