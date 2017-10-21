import { FETCHED_MESSAGES } from '../actions/message';


export default function (state = {}, action) {
  switch (action.type) {
    case FETCHED_MESSAGES:
      return {
        messages: action.messages,
      };
    default:
      return state;
  }
}
