import * as actionTypes from './../actions/actionTypes';

const initialState = {
  language: "",
  q1: {
    question: "Permanent Early Voting List – Early Ballot (see instructions above)",
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
  q2LastName: {
    question: "Last Name",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q2FirstName: {
    question: "First Name",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q2MiddleName: {
    question: "Middle Name",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q2NameSuffix: {
    question: "Jr./Sr./III",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q3: {
    question: "Address where you live - If no street address, describe residence location using mileage, cross streets, parcel #, subdivision name and lot, or landmarks. Do not use post office box or business address. Draw a map below if located in rural area.",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q4: {
    question: "Apt./Unit/Space",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q5: {
    question: "City",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q6: {
    question: "Zip",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q7: {
    question: "Address where you get your mail, if mail is not delivered to your home",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q8: {
    question: "Last four digits of Social Security Number",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q9: {
    question: "AZ Driver License Number or AZ Nonoperation License Number",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q10: {
    question: "Optional Tribal Identification Number",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q11: {
    question: "Alien Registration Number",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q12: {
    question: "Birth Date (MM/DD/YYYY)",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q13: {
    question: "State or Country of Birth",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q14: {
    question: "Party Preference",
    choices: ["Democratic", "Republican", "Other"],
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
  q15: {
    question: "Telephone Number",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q16: {
    question: "Occupation",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q17: {
    question: "If you were registered to vote in anther state, list former address including county and state",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q18: {
    question: "List former name (if applicable)",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q19: {
    question: "Father's name or mother's maiden name",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q20: {
    question: "Are you willing to work at a polling place on election day?",
    options: ["Yes", "No"],
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
  q21: {
    question: "Email address",
    responseText: "",
    responseTextLocation: {
      xLocation: "",
      yLocation: ""
    }
  },
  q22: {
    options: ["Yes", "No"]
    text1: "Are you a citizen of the United State of America?",
    responseYesText1Location: {
      xLocation: "",
      yLocation: ""
    },
    responseNoText1Location: {
      xLocation: "",
      yLocation: ""
    },
    text2: "Will you be 18 years of age on or before election day?",
    responseYesText2Location: {
      xLocation: "",
      yLocation: ""
    },
    responseNoText2Location: {
      xLocation: "",
      yLocation: ""
    },
    disclaimer: "If you checked 'No' to either one of these questions, do NOT submit this form.",
    responseText: ""
  }
}

const voterReducerAZ = (state = initialState, action) => {
  switch (action.type) {
    case expression:

    default:
      return state;
  }
}

export default voterReducerAZ;
