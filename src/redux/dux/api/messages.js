import axios from 'axios';


export function fetchMessages() {
  const promise = axios.get('http://localhost:8080/messages', { timeout: 5000 })
    .then(response => response)
    .catch(error => error);
  return promise;
}

export function createMessage(action) {
  const promise = axios.post('http://localhost:8080/messages', { text: action.text, author: action.author })
    .then(response => response)
    .catch(error => error);
  return promise;
}

export function deleteMessage(action) {
  const promise = axios.delete(`http://localhost:8080/messages/${action.id}`, { timeout: 5000 })
    .then(response => response)
    .catch(error => error);
  return promise;
}
