import * as actionTypes from './actionTypes';

export const editResponse = () => {
  return {
    type: actionTypes.EDIT_RESPONSE
  }
}

export const decrementIndex = () => {
  return {
    type: actionTypes.DECREMENT_INDEX
  }
}

export const incrementIndex = () => {
  return {
    type: actionTypes.INCREMENT_INDEX
  }
}

export const nextQuestion = () => {
  return {
    type: actionTypes.NEXT_QUESTION
  }
}

export const previousQuestion = () => {
  return {
    type: actionTypes.PREVIOUS_QUESTION
  }
}

export const getQuestions = () => {
  console.log(getQuestions);
  return {
    type: actionTypes.GET_QUESTIONS
  }
}

export const setQuestion = () => {
  return {
    type: actionTypes.SET_QUESTION
  }
}

export const setQuestions = (questions) => {
    return {
        type: actionTypes.SET_QUESTIONS,
        questions
    }
}

export const setResponse = (response) => {
  console.log(response);
  return {
    type: actionTypes.SET_RESPONSE,
    response
  }
}

export const setResponses = (responses) => {
  return {
    type: actionTypes.SET_RESPONSES,
    responses
  }
}

export const getResponse = (i) => {
  return {
    type: actionTypes.GET_RESPONSE,
    i
  }
}

export const getResponses = () => {
  return {
    type: actionTypes.GET_RESPONSES
  }
}
