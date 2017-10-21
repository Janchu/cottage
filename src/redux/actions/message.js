export const FETCH_MESSAGES = 'MESSAGE/FETCH_MESSAGES';
export function fetchMessages() {
  return {
    type: FETCH_MESSAGES,
  };
}

export const FETCHED_MESSAGES = 'MESSAGE/FETCHED_MESSAGES';
export function fetchedMessages(messages) {
  return {
    type: FETCHED_MESSAGES,
    messages,
  };
}

export const CREATE_MESSAGE = 'MESSAGE/CREATE_MESSAGE';
export function createMessage(message) {
  return {
    type: CREATE_MESSAGE,
    text: message.text,
    author: message.author,
    timestamp: Date.now(),
  };
}

export const DELETE_MESSAGE = 'MESSAGE/DELETE_MESSAGE';
export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id,
  };
}
