import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import './CSS/App.css';
import Router from './Router';
import IntroPage from './components/IntroPage';

class App extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <div>
          <IntroPage />
        </div>
      </Provider>

    );
  }
}

export default App;
