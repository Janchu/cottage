import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import App from './App';
import configureStore from './redux/store';


function getCookie(name) {
  const value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    parts = parts.pop().split(';').shift();
  }
  return parts;
}

const store = configureStore(getCookie('access_token') && localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
