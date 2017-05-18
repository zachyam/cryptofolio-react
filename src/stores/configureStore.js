import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router'; // eslint-disable-line
import { routerMiddleware } from 'react-router-redux'; // eslint-disable-line
import rootReducer from '../reducers/index';

const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(thunk, router)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension()); // eslint-disable-line

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index'); // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
