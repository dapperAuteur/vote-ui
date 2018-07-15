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
    nextQuestion: PropTypes.func,
    pathname: PropTypes.string,
    question: PropTypes.object,
    questions: PropTypes.array,
    response: PropTypes.object,
    responses: PropTypes.array,
    responseText: PropTypes.string,
    setResponse: PropTypes.func
  };
  static defaultProps = {
    i: 0,
    language: "English",
    pathname: "",
    question: {},
    questions: [],
    response: {},
    responses: [],
    responseText: ""
  };
  constructor(props) {
    super(props);
    console.log(props);
    // console.log(props.questions[this.props.i]);
    let question = props.question;
    console.log(question);
    // console.log(this.props.questions[this.props.i].q1a.questionText);
    this.state = {
      decrementIndexSpanish: props.decrementIndexSpanish,
      incrementIndexSpanish: props.incrementIndexSpanish,
      editResponse: props.editResponse,
      getQuestions: props.getQuestions,
      i: props.i,
      nextQuestion: props.nextQuestion,
      pathname: props.location.pathname,
      question,
      response: {},
      responses: [],
      responseText: "",
      questions: props.questions,
      setResponse: props.setResponse
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    console.log(this.props);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let {
      editResponse,
      i,
      incrementIndexSpanish,
      nextQuestion,
      pathname,
      question,
      response,
      responses,
      responseText,
      setResponse
    } = { ...this.state };

    let page = i;
    console.log(page);
    console.log(this.props.i);

    let endPathname = pathname.slice(-4);

    console.log(response);
    console.log(responseText);
    if (question.hasOwnProperty("options")) {
      console.log(JSON.parse(responseText));
      let responseTextObject = JSON.parse(responseText);
      response = {
        questionNumber: question.questionNumber,
        responseText: responseTextObject.text,
        xLocation: responseTextObject.xLocation,
        yLocation: responseTextObject.yLocation
      };
    } else {
      response = {
        questionNumber: question.questionNumber,
        responseText,
        xLocation: question.responseTextLocation.xLocation,
        yLocation: question.responseTextLocation.yLocation
      };
    }

    // response = {
    //   questionNumber: question.questionNumber,
    //   responseText: responseTextObject.text,
    //   xLocation: responseTextObject.xLocation,
    //   yLocation: responseTextObject.yLocation
    // };
    // create new object name dynamically and save object in localStorage
    console.log(response);
    console.log(endPathname);
    // if or switch statement for edit vs new response
    if (endPathname === "edit") {
      editResponse(response);
    } else {
      console.log("obj");
      incrementIndexSpanish();
      setResponse(response);
      nextQuestion();
      this.setState({
        question: this.props.question,
        responseText: ""
      });
    };
    console.log(this.props.question);

  };

  render() {
    const {
      i,
      pathname,
      question,
      responseText
    } = { ...this.state };
    console.log(question);
    const {
      options,
      questionNumber,
      questionText
    } = { ...question };
    return (
      <div>
        <form onSubmit={ this.handleSubmit } className="theForm">
          <h3 className="questions">{ questionText }</h3>
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
                    options.map((o, i) => (
                      <option
                        key={ i }
                        value={ JSON.stringify(o) }
                        xlocation={ o.xLocation }
                        ylocation={ o.yLocation }>
                        { o.text }
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
  console.log(state);
  return {
    i: state.voterReducerAzSpanish.i,
    question: state.voterReducerAzSpanish.question,
    questions: state.voterReducerAzSpanish.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decrementIndexSpanish: () => dispatch(actions.decrementIndexSpanish()),
    incrementIndexSpanish: () => dispatch(actions.incrementIndexSpanish()),
    editResponse: (response) => dispatch(actions.editResponseSpanish()),
    getQuestions: () => dispatch(actions.getQuestionsAzSpanish()),
    nextQuestion: () => dispatch(actions.nextQuestion()),
    setResponse: (response) => dispatch(actions.setResponseSpanish())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
