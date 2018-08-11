import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './../../store/actions/index';
import './Forms.css';

class QuestionRadio extends Component {
  static propTypes = {
    editResponse: PropTypes.func,
    // decrementIndexSpanish: PropTypes.func,
    // incrementIndexSpanish: PropTypes.func,
    getQuestions: PropTypes.func,
    i: PropTypes.number,
    language: PropTypes.string,
    languages: PropTypes.array,
    nextQuestion: PropTypes.func,
    pathname: PropTypes.string,
    question: PropTypes.object,
    questions: PropTypes.array,
    questionsEng: PropTypes.array,
    questionsEsp: PropTypes.array,
    response: PropTypes.object,
    responses: PropTypes.array,
    responseText: PropTypes.string,
    setResponse: PropTypes.func
  };
  static defaultProps = {
    i: 0,
    language: "English",
    languages: ["English", "Español"],
    pathname: "",
    question: {},
    questions: [],
    questionsEng: [],
    questionsEsp: [],
    response: {},
    responses: [],
    responseText: ""
  };
  constructor(props) {
    super(props);
    console.log(props);
    // console.log(props.questions[this.props.i]);
    // let question = props.question;
    // console.log(question);
    // console.log(this.props.questions[this.props.i].q1a.questionText);
    this.state = {
      // decrementIndexSpanish: props.decrementIndexSpanish,
      // incrementIndexSpanish: props.incrementIndexSpanish,
      editResponse: props.editResponse,
      getQuestions: props.getQuestions,
      i: props.i,
      language: props.language,
      languages: props.languages,
      nextQuestion: props.nextQuestion,
      pathname: props.location.pathname,
      question: props.questions[props.i],
      questions: props.questions,
      questionsEng: props.questionsEng,
      questionsEsp: props.questionsEsp,
      response: {},
      responses: [],
      responseText: "",
      setResponse: props.setResponse
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    console.log(this.props);
    let pathname = this.props.location.pathname;
    if (pathname.slice(-2) === "es") {
      this.props.setQuestions(this.props.questionsEsp);
      // this.props.questions = this.props.questionsEsp;
      console.log(this.props);
    } else {
      this.props.setQuestions(this.props.questionsEng);
      // this.props.questions = this.props.questionsEng;
      console.log(this.props);
    }
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let {
      editResponse,
      i,
      // incrementIndexSpanish,
      language,
      nextQuestion,
      pathname,
      question,
      response,
      responses,
      responseText,
      setResponse
    } = this.state;

    let page = i + 1;
    console.log(page);
    console.log(this.props.i);

    let endPathname = pathname.slice(-4);

    console.log(response);
    console.log(responseText);
    if (question.hasOwnProperty("options")) {
      let responseTextObject = JSON.parse(responseText);
      console.log(responseTextObject);
      response = {
        questionNumber: question.questionNumber,
        responseText: responseTextObject.text,
        xLocation: responseTextObject.xLocation,
        yLocation: responseTextObject.yLocation
      };
    } else {
      console.log(question);
      response = {
        questionNumber: question.questionNumber,
        responseText,
        xLocation: question.xLocation,
        yLocation: question.yLocation
      };
    }

    // create new object name dynamically and save object in localStorage
    console.log(response);
    console.log(endPathname);
    if (endPathname === "edit") {
      editResponse(response);
    } else {
      console.log("obj");
      setResponse(response);
      nextQuestion();
      this.setState({
        question: this.props.question,
        responseText: ""
      });
    };
    console.log(this.props.question);
    this.props.history.push(`/questions/${page}`);

  };

  render() {
    if (this.state.questions.length === 0) {
      return (
        <div>Loading...</div>
      )
    } else {
      const {
        // i,
        pathname,
        question,
        responseText
      } = this.state;
      console.log(question);
      const {
        options,
        // questionNumber,
        questionText,
        questionTextEng,
        questionTextEsp
      } = question;
      let pathnameEnding = pathname.slice(-2);
      console.log(pathnameEnding);
      return (
        <div>
          <form onSubmit={ this.handleSubmit } className="theForm">
            <h3 className="questions">{ questionTextEsp }</h3>
            {
              question.hasOwnProperty("options") ?
              <div>
                  {
                    options.map((o, i) => (
                      <div>
                        <input
                          id={ o.textEsp }
                          key={ o.textEsp }
                          className='form-control'
                          name='responseText'
                          type="radio"
                          value={ JSON.stringify(o) }
                          onChange={ this.handleChange } />
                            <label
                              htmlFor='options'>
                              { o.textEsp }
                            </label>
                      </div>
                    ))
                  }
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
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    i: state.voterReducer.i,
    language: state.voterReducer.language,
    languages: state.voterReducer.languages,
    question: state.voterReducer.question,
    questions: state.voterReducer.questions,
    questionsEng: state.voterReducer.questionsEng,
    questionsEsp: state.voterReducer.questionsEsp,
    response: state.voterReducer.response,
    responses: state.voterReducer.responses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // decrementIndexSpanish: () => dispatch(actions.decrementIndexSpanish()),
    // incrementIndexSpanish: () => dispatch(actions.incrementIndexSpanish()),
    editResponse: (response) => dispatch(actions.editResponse()),
    getQuestions: () => dispatch(actions.getQuestions()),
    nextQuestion: () => dispatch(actions.nextQuestion()),
    setQuestions: (questions) => dispatch(actions.setQuestions(questions)),
    setResponse: (response) => dispatch(actions.setResponse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionRadio);
