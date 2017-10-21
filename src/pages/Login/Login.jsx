import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form, Message } from 'semantic-ui-react';

const propTypes = {
  doLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const defaultProps = {
  error: undefined,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    this.props.doLogin({ name: this.state.name, password: this.state.password });
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
                  value={this.state.name}
                  onChange={(event) => { this.handleChange(event, 'name'); }}
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
