import * as actionTypes from './../actions/actionTypes';

const initialState = {
  citizenOfUSA: false,
  willYouBe18YearsOldOnOrBeforeElectionDay: false,
  states: [
    "AZ", "CA", "CO", "FL", "IL", "NM", "NJ", "NV", "NY", "TX"
  ],
  myState: "",
  lastName: "",
  firstName: "",
  middleName: "",
  nameSuffix: "",
  addressPhysical: "",
  aptUnitSpacePhysical: "",
  cityPhysical: "",
  zipCodePhysical: "",
  addressMailing: "",
  aptUnitSpaceMailing: "",
  cityMailing: "",
  zipCodeMailing: "",
  lastFourDigitsSS: "",
  stateIDNumber: "",
  optionalTribalIDNumber:  "",
  dateOfBirth: "",
  stateOrCountryOfBirth: "",
  parties: ["Democratic", "Republican", "Other"],
  partyPreference: "",
  telephoneNumber: "",
  alienRegistrationNumber: "",
  occupation: "",
  otherStateRegisteredToVote: "",
  listFormerName: "",
  fatherNameOrMotherMaidenName: "",
  willingToWorkAtPollOnElectionDay: false,
  emailAddress: ""
};

const voterReducer = (state = initialize, action) => {
  switch (action.type) {
    case actionTypes.CONFIRM_ANSWERS:
    case actionTypes.GET_QUESTION:
    case actionTypes.SET_QUESTION:
    case actionTypes.SUBMIT_FORM:
    case actionTypes.SUBMIT_RESPONSE:
    case actionTypes.EMAIL_FORM:

    default:
     return state;
  }
}

export default voterReducer;
