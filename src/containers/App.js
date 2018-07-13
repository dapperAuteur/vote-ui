import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main';
// import Messages from './../components/Messages/Messages';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Main />
        <h2>Earl</h2>
        <Link
          to={{
            pathname: '/questions'
          }}>
          AZ Voter Registration Spanish
        </Link>
      </div>
    );
  }
}

export default withRouter(App);
