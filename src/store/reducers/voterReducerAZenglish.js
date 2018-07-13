import * as actionTypes from './../actions/actionTypes';

const initialState = {
  language: "",
  questions: [
    "q1": {
      questionText: "Permanent Early Voting List – Early Ballot (see instructions above)",
      text1: "YES, I want to automatically receive an early ballot for each election for which I am eligible.",
      responseText1Location: {
        xLocation: "",
        yLocation: ""
      },
      text2: "NO, I DO NOT want to automatically receive an early ballot. I understand CHECKING THIS BOX will remove my name from the list if it was previously included.",
      responseText2Location: {
        xLocation: "",
        yLocation: ""
      },
      responseText: ""
    },
    "q2LastName": {
      questionText: "Last Name",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q2FirstName": {
      questionText: "First Name",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q2MiddleName": {
      questionText: "Middle Name",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q2NameSuffix": {
      questionText: "Jr./Sr./III",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q3": {
      questionText: "Address where you live - If no street address, describe residence location using mileage, cross streets, parcel #, subdivision name and lot, or landmarks. Do not use post office box or business address. Draw a map below if located in rural area.",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q4": {
      questionText: "Apt./Unit/Space",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q5": {
      questionText: "City",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q6": {
      questionText: "Zip",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q7": {
      questionText: "Address where you get your mail, if mail is not delivered to your home",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q8": {
      questionText: "Last four digits of Social Security Number",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q9": {
      questionText: "AZ Driver License Number or AZ Nonoperation License Number",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q10": {
      questionText: "Optional Tribal Identification Number",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q11": {
      questionText: "Alien Registration Number",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q12": {
      questionText: "Birth Date (MM/DD/YYYY)",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q13": {
      questionText: "State or Country of Birth",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q14": {
      questionText: "Party Preference",
      choices: ["Choose One","Democratic", "Republican", "Other"],
      responseText: "",
      responseDemocraticTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      responseRepublicanTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      responseOtherTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q15": {
      questionText: "Telephone Number",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q16": {
      questionText: "Occupation",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q17": {
      questionText: "If you were registered to vote in anther state, list former address including county and state",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q18": {
      questionText: "List former name (if applicable)",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q19": {
      questionText: "Father's name or mother's maiden name",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q20": {
      questionText: "Are you willing to work at a polling place on election day?",
      options: ["Choose One","Yes", "No"],
      responseText: "",
      responseYesTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      responseNoTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q21": {
      questionText: "Email address",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q22a": {
      options: ["Choose One","Yes", "No"]
      questionText: "Are you a citizen of the United State of America?",
      responseYesTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      responseNoTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      disclaimer: "If you checked 'No' to either one of these questions, do NOT submit this form.",
      responseText: ""
    },
    "q22b": {
      options: ["Choose One","Yes", "No"]
      questionText: "Will you be 18 years of age on or before election day?",
      responseYesTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      responseNoTextLocation: {
        xLocation: "",
        yLocation: ""
      },
      disclaimer: "If you checked 'No' to either one of these questions, do NOT submit this form.",
      responseText: ""
    }
  ]
}

const voterReducerAZ = (state = initialState, action) => {
  switch (action.type) {
    case expression:

    default:
      return state;
  }
}

export default voterReducerAZ;
