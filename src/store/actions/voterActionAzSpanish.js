import * as actionTypes from './actionTypes';

export const editResponseSpanish = () => {
  return {
    type: actionTypes.EDIT_RESPONSE
  }
}

export const decrementIndexSpanish = () => {
  return {
    type: actionTypes.DECREMENT_INDEX_SPANISH
  }
}

export const incrementIndexSpanish = () => {
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

export const getQuestionsAzSpanish = () => {
  console.log(getQuestionsAzSpanish);
  return {
    type: actionTypes.GET_QUESTIONS_AZ_SPANISH
  }
}

export const setQuestionAzSpanish = () => {
  return {
    type: actionTypes.SET_QUESTION_AZ_SPANISH
  }
}

export const setResponseSpanish = (response) => {
  console.log(response);
  return {
    type: actionTypes.SET_RESPONSE,
    response
  }
}

export const setResponsesSpanish = (responses) => {
  return {
    type: actionTypes.SET_RESPONSES_SPANISH,
    responses
  }
}

export const getResponseSpanish = (i) => {
  return {
    type: actionTypes.GET_RESPONSE_SPANISH,
    i
  }
}

export const getResponsesSpanish = () => {
  return {
    type: actionTypes.GET_RESPONSES_SPANISH
  }
}
