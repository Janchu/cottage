import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './dux';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    // window.devToolsExtension ? window.devToolsExtension() : f => f,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(rootReducer, () => {
      const nextReducer = rootReducer;

      store.replaceReducer(nextReducer);
    });
  }

  // if (module.hot) {
  //   module.hot.accept();
  // }

  // if (module.hot) {
  //   module.hot.accept(rootReducer, () => {
  //     const nextReducer = rootReducer;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  // if (module.hot) {
  //   // Enable webpack hot module replacement for reducers
  //   module.hot.accept(
  //     './reducers',
  //     () => store.replaceReducer(rootReducer)
  //   );
  // }

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     const nextReducer = require('./reducers/index').default;
  //
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  sagaMiddleware.run(rootSaga);

  return store;
}
