import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VoterContainer from './containers/VoterContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <VoterContainer />,
  document.getElementById('root')
);
registerServiceWorker();
