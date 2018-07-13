import * as actionTypes from './actionTypes';

// local api
// const APIURL = ""
//
// hosted api
// const APIURL = ""

export const confirmAnswers = () => {
  return {
    type: actionTypes.CONFIRM_ANSWERS
  }
}

export const decrementIndexEnglish = () => {
  return {
    type: actionTypes.DECREMENT_INDEX_ENGLISH
  }
}

export const incrementIndexEnglish = () => {
  return {
    type: actionTypes.INCREMENT_INDEX_ENGLISH
  }
}

export const getQuestion = () => {
  return {
    type: actionTypes.GET_QUESTION
  }
}

export const setQuestion = () => {
  return {
    type: actionTypes.SET_QUESTION
  }
}

export const submitForm = () => {
  return {
    type: actionTypes.SUBMIT_FORM
  }
}


export const submitResponse = () => {
  return {
    type: actionTypes.SUBMIT_RESPONSE
  }
}

export const emailForm = () => {
  return {
    type: actionTypes.EMAIL_FORM
  }
}
