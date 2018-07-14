import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './../../store/actions/index';
import './Forms.css';

class Question extends Component {
  static propTypes = {
    editResponse: PropTypes.func,
    decrementIndexSpanish: PropTypes.func,
    incrementIndexSpanish: PropTypes.func,
    getQuestions: PropTypes.func,
    i: PropTypes.number,
    language: PropTypes.string,
    pathname: PropTypes.string,
    question: PropTypes.shape({
      options: PropTypes.array,
      questionText: PropTypes.string,
      questionNumber: PropTypes.string,
      responseText: PropTypes.string,
    }),
    setResponse: PropTypes.func
  };
  static defaultProps = {
    i: 0,
    language: "English",
    pathname: "",
    question: {
      options: [],
      questionText: "",
      questionNumber: "",
      responseText: ""
    }
  };
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      decrementIndexSpanish: props.decrementIndexSpanish,
      incrementIndexSpanish: props.incrementIndexSpanish,
      editResponse: props.editResponse,
      getQuestions: props.getQuestions,
      i: props.i,
      pathname: props.location.pathname,
      question: {
        options: [],
        questionText: "",
        questionNumber: "",
        responseText: ""
      },
      setResponse: props.setResponse
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.props.getQuestions();
    this.setState({
      question: this.props.questions[this.state.index]
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let {
      incrementIndexSpanish,
      questionNumber,
      responseText
    } = { ...this.state.question };
    let {
      editResponse,
      pathname,
      setResponse
    } = { ...this.state };

    let endPathname = pathname.slice(-4);

    let response = {
      questionNumber,
      responseText
    };
    // create new object name dynamically and save object in localStorage
    console.log(response);
    // if or switch statement for edit vs new response
    if (endPathname === "edit") {
      editResponse(response);
    } else {
      incrementIndexSpanish();
      setResponse(response);
    }

  };

  render() {
    const {
      pathname,
      question
    } = { ...this.state };
    const {
      questionNumber,
      questionText,
      responseText
    } = { ...question };
    return (
      <div>
        <form onSubmit={ this.handleSubmit } className="theForm">
          <h3 className="questions">{ questionNumber}: { questionText }</h3>
          <div className="choices">
            <label
              htmlFor='yes'>
              Sí
            </label>
            <input
              id='Sí'
              key='Sí'
              className='form-control'
              name='responseText'
              type="radio"
              value="Sí"
              onChange={ this.handleChange } />
            <label
              htmlFor='no'>
              No
            </label>
            <input
              id='No'
              key='No'
              className='form-control'
              name='responseText'
              type="radio"
              value="No"
              onChange={ this.handleChange } />
          </div>
          { pathname.slice(-4) === "edit" ?
            <button
              disabled={ responseText === "" }
              className="btn btn-default"
              type='submit'>
                Entregar
            </button> :
            <div className="buttons">
              <Link
                className="btn btn-warning"
                to={{
                  pathname: '/'
                }}>
                  Retroceder
                </Link>
              <button
                disabled={ responseText === "" }
                type='submit'
                className='btn btn-default'>
                Siguiente
              </button>
            </div>
          }
        </form>
      </div>
    )
  }

};

const mapStateToProps = state => {
  console.log(state);
  return {
    i: state.voterReducerAzSpanish.i,
    questions: state.voterReducerAzSpanish.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decrementIndexSpanish: () => dispatch(actions.decrementIndexSpanish()),
    incrementIndexSpanish: () => dispatch(actions.incrementIndexSpanish()),
    editResponse: (response) => dispatch(actions.editResponseSpanish()),
    getQuestions: () => dispatch(actions.getQuestionsAzSpanish()),
    setResponse: (response) => dispatch(actions.setResponseSpanish())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
