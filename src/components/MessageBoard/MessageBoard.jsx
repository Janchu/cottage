import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Comment, Form, Button, Header } from 'semantic-ui-react';


const propTypes = {
  user: PropTypes.string.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  messages: PropTypes.array,
};

const defaultProps = {
  messages: [],
};


class MessageBoard extends Component {
  state = { message: '' };

  componentWillMount = () => this.props.fetchMessages()

  handleMessage = () => {
    const message = { text: this.state.message, author: this.props.user };
    this.props.createMessage(message);
    this.setState({ message: '' });
  }

  handleDeleteMessage = id => this.props.deleteMessage(id);

  render() {
    return (
      <Comment.Group minimal>
        <Header as="h3" dividing>Ilmoitustaulu</Header>

        {this.props.messages.map(message => (
          <Comment key={message._id} style={{ paddingTop: 0, paddingBottom: 7 }}>
            <Comment.Content>
              <Comment.Author as="a">{message.author}</Comment.Author>
              <Comment.Metadata><div>{moment(message.timestamp).format('DD.MM.YYYY HH:mm')}</div></Comment.Metadata>
              <Comment.Text>{message.text}</Comment.Text>
              {message.author === this.props.user &&
                <Comment.Actions>
                  <Comment.Action
                    onClick={() => this.handleDeleteMessage(message._id)}
                  >
                    Poista
                  </Comment.Action>
                </Comment.Actions>
              }
            </Comment.Content>
          </Comment>
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.message}
            onChange={(e, data) => this.setState({ message: data.value })}
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
