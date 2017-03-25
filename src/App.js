import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';

import actions from 'api/actions';
import apiReducers from 'api/reducers';
import sagas from 'api/sagas';
import FeedbackRouter from 'Router';

const config = {
  apiKey: "AIzaSyArFnmDhDIbEL7Qx92OuO-mKlhvwKsxbzw",
  authDomain: "feedback-f9ff3.firebaseapp.com",
  databaseURL: "https://feedback-f9ff3.firebaseio.com",
  storageBucket: "feedback-f9ff3.appspot.com",
  messagingSenderId: "779037169630"
};
firebase.initializeApp(config);
window.firebase = firebase;

class App extends Component {

  constructor(props) {
    super(props);
    const sagaMiddleware = createSagaMiddleware({
      onError: (error) => {
        //window.airbrake.notify(error);
      },
    });

    const middlewares = [
      routerMiddleware(browserHistory),
      sagaMiddleware,
    ];
    const reducers = combineReducers({
      routing: routerReducer,
      ...apiReducers
    });
    const composeEnhancers = composeWithDevTools({});
    this.store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
    this.history = syncHistoryWithStore(browserHistory, this.store);

    sagaMiddleware.run(sagas);
  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(payload => {
      this.store.dispatch({ type: actions.user.logged, payload });
    });
  }

  render() {

    const validate = (nextState, replace, callback) => {
      const { auth } = this.store.getState();
      const email = auth.getIn(['user', 'email']);
      const { location: { pathname: payload } } = nextState;
      if (!email) {
        this.store.dispatch({ payload, type: actions.user.navigation });
      }
      callback();
    }

    return (
      <Provider store={this.store}>
        <FeedbackRouter history={this.history} validate={validate} />
      </Provider>
    );
  }
}

export default App;
