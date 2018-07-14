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
    question: PropTypes.object,
    setResponse: PropTypes.func
  };
  static defaultProps = {
    i: 0,
    language: "English",
    pathname: "",
    question: {}
  };
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.questions[this.props.i]);
    let question = props.questions[props.i];
    console.log(question);
    // console.log(this.props.questions[this.props.i].q1a.questionText);
    this.state = {
      decrementIndexSpanish: props.decrementIndexSpanish,
      incrementIndexSpanish: props.incrementIndexSpanish,
      editResponse: props.editResponse,
      getQuestions: props.getQuestions,
      i: props.i,
      pathname: props.location.pathname,
      question,
      questions: props.questions,
      setResponse: props.setResponse
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.props.getQuestions();
    let options;
    if (this.props.questions[this.props.i].hasOwnProperty('options')) {
      console.log("obj");
    }
    // this.setState({
    //   question: this.props.questions[this.state.i]
    // });
    // console.log(this.props.questions[this.props.i]);
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
    console.log(question);
    const {
      options,
      questionNumber,
      questionText,
      responseText
    } = { ...question };
    return (
      <div>
        <form onSubmit={ this.handleSubmit } className="theForm">
          <h3 className="questions">{ questionNumber}: { questionText }</h3>
          {
            question.hasOwnProperty("options") ?
            <div>
              <label
                htmlFor='options'>
                Elige
              </label>
              <select
                id='options'
                key='responseText'
                name='responseText'
                value={ responseText }
                onChange={ this.handleChange }>

                  {
                    options.map(o => (
                      <option
                        key={ o }
                        value={ o }>
                        { o }
                      </option>
                    ))
                  }
              </select>
            </div> :
            <input
              id='responseText'
              key='responseText'
              type='text'
              name='responseText'
              className='form-control'
              autoComplete='off'
              value={ responseText }
              onChange={ this.handleChange } />
          }

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
