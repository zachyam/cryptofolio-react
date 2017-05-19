import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import App from './components/App';
import rootReducer from './reducers';

require('../styles/index.scss');

const loggerMiddleware = createLogger();

function configureStore(initialState) {
    return createStore(     // eslint-disable-line
      rootReducer,
      initialState,
      compose(
          applyMiddleware(
              thunkMiddleware,
              loggerMiddleware
          ),
          persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
      )
  );
}

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
