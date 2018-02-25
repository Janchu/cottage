import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form, Message } from 'semantic-ui-react';

const propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const defaultProps = {
  error: undefined,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    this.props.login({ username: this.state.username, password: this.state.password });
  }

  handleChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        {error && <Message error>{error}</Message>}
        <Card style={{ margin: 'auto' }}>
          <Card.Content>
            <Form>
              <Form.Group>
                <Form.Input
                  width={16}
                  label="Käyttäjätunnus"
                  value={this.state.username}
                  onChange={(event) => { this.handleChange(event, 'username'); }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  width={16}
                  label="Salasana"
                  type="password"
                  value={this.state.password}
                  onChange={(event) => { this.handleChange(event, 'password'); }}
                />
              </Form.Group>

              <Button style={{ marginTop: 32 }} fluid color="blue" onClick={this.handleLogin}>
                Kirjaudu sisään
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
