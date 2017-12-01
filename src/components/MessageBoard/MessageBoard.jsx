import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Comment, Form, Button, Header } from 'semantic-ui-react';


const propTypes = {
  user: PropTypes.string.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  messages: PropTypes.array,
};

const defaultProps = {
  messages: [],
};


class MessageBoard extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleMessage = this.handleMessage.bind(this);
  }
  componentWillMount() {
    this.props.fetchMessages();
  }

  handleMessage() {
    const message = { text: this.state.newMessage, author: this.props.user };
    this.props.createMessage(message);
  }

  handleDeleteMessage(id) {
    this.props.deleteMessage(id)
  }

  render() {
    return (
      <Comment.Group>
        <Header as="h3" dividing>Ilmoitustaulu</Header>

        {this.props.messages.map(message => (
          <Comment key={message._id}>
            <Comment.Content>
              <Comment.Author as="a">{message.author}</Comment.Author>
              <Comment.Metadata>
                <div>{moment(message.timestamp).format('DD.MM.YYYY HH:mm')}</div>
              </Comment.Metadata>
              <Comment.Text>{message.text}</Comment.Text>
              <button onClick={() => this.handleDeleteMessage(message._id)}>Poista</button>
            </Comment.Content>
          </Comment>
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.newMessage}
            onChange={e => this.setState({ newMessage: e.target.value })}
          />
          <Button
            content="Lisää viesti ilmoitustaululle"
            labelPosition="left"
            icon="edit"
            primary
            onClick={this.handleMessage}
          />
        </Form>
      </Comment.Group>
    );
  }
}

MessageBoard.propTypes = propTypes;
MessageBoard.defaultProps = defaultProps;

export default MessageBoard;
