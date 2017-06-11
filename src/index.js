import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/Root';
import TokenList from './components/TokenList';
import CurrencyList from './components/CurrencyList';
import Dashboard from './components/Dashboard';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import '../styles/index.scss';

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
const history = syncHistoryWithStore(browserHistory, store);

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <Route path="/currencies" component={CurrencyList}></Route>
//         <Route path="/tokens" component={TokenList}></Route>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Root}>
            <IndexRoute component={CurrencyList} />
            <Route path="currencies" component={CurrencyList}></Route>
            <Route path="tokens" component={TokenList}></Route>
            <Route path="dashboard" component={Dashboard}></Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, window.document.getElementById('app'));
