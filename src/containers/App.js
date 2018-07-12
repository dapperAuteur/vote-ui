import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main';
import Messages from './../components/Messages/Messages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Messages />
        <Main />
      </div>
    );
  }
}

export default withRouter(connect(null))(App);
