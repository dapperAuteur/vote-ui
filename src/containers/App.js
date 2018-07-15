import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../store/actions/index';
import Main from './Main';
// import Messages from './../components/Messages/Messages';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Main />
        <Link
          to={{
            pathname: '/questions/0'
          }}>
          AZ Voter Registration Spanish
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => dispatch(actions.getQuestionsAzSpanish())
  };
};

export default connect(null, mapDispatchToProps)(App);
