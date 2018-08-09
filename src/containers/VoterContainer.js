import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
// import voterReducer from './../store/reducers/voterReducer';
// import voterReducerAzEnglish from '../store/reducers/voterReducerAzEnglish';
import voterReducerSpanish from '../store/reducers/voterReducerSpanish';

import App from './App';

const rootReducer = combineReducers({
  // voterReducer,
  // voterReducerAzEnglish,
  voterReducerSpanish
});

const logger = store => {
  return next => {
    return action => {
      console.log('[MIDDLEWARE] Dispatching', action);
      const result = next(action);
      console.log('[MIDDLEWARE] next state', store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactGA.initialize('', {
  debug: true
});

ReactGA.pageview(window.location.pathname + window.location.search);

const supportsHistory = 'pushState' in window.history;

const VoterContainer = () => (
  <Provider store={ store }>
    <Router
      forceRefresh={ !supportsHistory }>
      <App />
    </Router>
  </Provider>
);

export default VoterContainer;
