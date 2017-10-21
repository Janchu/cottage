import { connect } from 'react-redux';
import MessageBoard from './MessageBoard';
import { fetchMessages, createMessage, deleteMessage } from '../../redux/actions/message';


export default connect(
  state => ({
    messages: state.message.messages,
    user: state.user.name,
  }),
  dispatch => ({
    fetchMessages() {
      dispatch(fetchMessages());
    },
    createMessage(message) {
      dispatch(createMessage(message));
    },
    deleteMessage(id) {
      dispatch(deleteMessage(id));
    },
  }),
)(MessageBoard);
