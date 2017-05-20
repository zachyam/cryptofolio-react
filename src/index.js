import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

require('../styles/index.scss');

// compose redux store enhancers
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? // eslint-disable-line
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // eslint-disable-line
      }) : compose;

// build single enhancer
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

// build redux store
export const store = createStore(combineReducers(reducers), enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
