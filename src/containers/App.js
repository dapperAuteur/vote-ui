import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as actions from './../store/actions/index';
import { connect } from 'react-redux';
import Main from './Main';
// import Messages from './../components/Messages/Messages';
import './App.css';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/2.9/node_modules/redux';

class App extends Component {
  render() {
    console.log(this.props);
    let setLanguage = this.props.setLanguage;
    let pathname = this.props.location.pathname;
    return (
      <div className="App">
        <Main />
        {
          pathname === "/" &&
          <div className="register-btn">
            <Link
              to={{
                pathname: '/questions/en'
              }}
              onClick={ e => setLanguage("English") }
              className="reg-link btn default-btn">
              Register To Vote
            </Link>
            <Link
              to={{
                pathname: '/questions/es'
              }}
              onClick={ e => setLanguage("Spanish") }
              className="reg-link btn default-btn">
              Inscríbase Para Votar
            </Link>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: (lang) => dispatch(actions.setResponse(lang))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
