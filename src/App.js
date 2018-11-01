
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { AppRouter } from './router';
import { store } from './conf/redux';
import './styles/container.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store} >
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
