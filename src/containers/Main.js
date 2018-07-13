import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Question from './../components/Questions/Question';
import TermsOfConditions from './../components/staticComponents/TermsOfConditions';
import ThankYou from './../components/staticComponents/ThankYou';
import Vision from './../components/staticComponents/Vision';

const routes = [
  {
    path: '/questions/:questionNumber',
    component: Question
  },
  {
    path: '/questions',
    component: Question
  },
  {
    path: '/thank-you',
    component: ThankYou
  },
  {
    path: '/vision',
    component: Vision
  },
  {
    path: '/terms-of-conditions',
    component: TermsOfConditions
  }
];

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          { routes.map(({ path, component: C, data }) => (
            <Route
              key={ C }
              path={ path }
              render={ (props) => <C
                { ...props }
                data={ this.props } /> }
              />
          ))}
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);
