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
          <Link
          to={{
            pathname: '/qualify'
          }}>
          Register To Vote
        </Link>
        }
      </div>
    );
  }
}

export default withRouter(App);
