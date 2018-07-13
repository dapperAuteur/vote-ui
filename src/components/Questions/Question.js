import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './../../store/actions/index';
import './Forms.css';

class Question extends Component {
  static propTypes = {
    editResponse: PropTypes.func,
    getQuestions: PropTypes.func,
    language: PropTypes.string,
    question: PropTypes.shape({
      options: PropTypes.array,
      question: PropTypes.string,
      questionNumber: "",
      responseText: PropTypes.string,
      setResponse: PropTypes.func
    })
  };
  static defaultProps = {
    language: "English",
    question: {
      options: [],
      question: "",
      questionNumber: "",
      responseText: ""
    }
  };
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      editResponse: props.editResponse,
      getQuestions: props.getQuestions,
      question: {
        options: [],
        question: "",
        questionNumber: "",
        responseText: ""
      },
      setResponse: props.setResponse
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.props.getQuestions();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let {
      questionNumber,
      responseText
    } = { ...this.state.question };
    let {
      editResponse,
      setResponse
    } = { ...this.state };

    let response = {
      questionNumber,
      responseText
    };
    // create new object name dynamically and save object in localStorage
    console.log(response);
    setResponse(response);
    editResponse(response);
    // if or switch statement for edit vs new response
  };

};

const mapStateToProps = state => {
  return {
    questions: questions.voterReducerAzSpanish.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editResponse: (response) => dispatch(actions.editResponse()),
    getQuestions: () => dispatch(actions.getQuestionsAzSpanish()),
    setResponse: (response) => dispatch(actions.setResponse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
