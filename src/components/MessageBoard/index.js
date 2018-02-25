import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageBoard from './MessageBoard';
import { fetchMessages, createMessage, deleteMessage } from '../../redux/dux/messages';


export default connect(
  state => ({
    messages: state.message.messages,
    user: state.user.username,
  }),
  dispatch => (bindActionCreators({ fetchMessages, createMessage, deleteMessage }, dispatch)),
)(MessageBoard);
