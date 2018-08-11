import * as actionTypes from './actionTypes';

export const editResponse = () => {
  return {
    type: actionTypes.EDIT_RESPONSE
  }
}

export const decrementIndex = () => {
  return {
    type: actionTypes.DECREMENT_INDEX_SPANISH
  }
}

export const incrementIndex = () => {
  return {
    type: actionTypes.INCREMENT_INDEX_SPANISH
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
    type: actionTypes.GET_QUESTIONS_AZ_SPANISH
  }
}

export const setQuestion = () => {
  return {
    type: actionTypes.SET_QUESTION_AZ_SPANISH
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
    type: actionTypes.SET_RESPONSES_SPANISH,
    responses
  }
}

export const getResponse = (i) => {
  return {
    type: actionTypes.GET_RESPONSE_SPANISH,
    i
  }
}

export const getResponses = () => {
  return {
    type: actionTypes.GET_RESPONSES_SPANISH
  }
}
