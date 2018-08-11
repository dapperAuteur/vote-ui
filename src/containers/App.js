import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Main from './Main';
// import Messages from './../components/Messages/Messages';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    let pathname = this.props.location.pathname;
    return (
      <div className="App">
        <Main />
        {
          pathname === "/" &&
          <div className="register-btn">
            <Link
              to={{
                pathname: '/qualify/en'
              }}
              className="reg-link btn default-btn">
              Register To Vote
            </Link>
            <Link
              to={{
                pathname: '/qualify/es'
              }}
              className="reg-link btn default-btn">
              Inscríbase Para Votar
            </Link>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(App);
