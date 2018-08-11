import * as actionTypes from './../actions/actionTypes';

const initialState = {
  i: 0,
  language: "",
  languages: ["English", "Español"],
  question: {},
  questions: [],
  questionsEng: [
    {
        questionNumber: "qual1",
        questionTextEng: "Are you a citizen of the United States of America?",
        options: [
          {
            textEng: "Yes.",
            xLocation: "",
            yLocation: "",
            page: ""
          },
          {
            textEng: "NO.",
            xLocation: "",
            yLocation: "",
            page: ""
          }
        ],
        responseText: ""
      },
      {
        questionNumber: "q4DOB",
        questionTextEng: "Date of Birth. Please use numbers.",
        options: [
          {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          }
        ],
        responseText: "",
        xLocation: "",
        yLocation: "",
        page: ""
      },
      {
        questionNumber: "qual2",
        questionTextEng: "Will you be 18 years old on or before election day?",
        options: [
          {
            textEng: "Yes.",
            xLocation: "",
            yLocation: "",
            page: ""
          },
          {
            textEng: "NO.",
            xLocation: "",
            yLocation: "",
            page: ""
          }
        ],
        responseText: ""
      },
      {
      questionNumber: "q1a",
      questionTextEng: "Choose one",
      options: [
        {
          textEng: "Mr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "Mrs.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "Miss.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "Ms.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "q1LastName",
      questionTextEng: "Last Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1FirstName",
      questionTextEng: "First Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1MiddleName",
      questionTextEng: "Middle Name(s)",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1NameSuffix",
      questionTextEng: "Choose one",
      options: [
        {
          textEng: "Jr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "II",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "III",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "IV",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "q2Address",
      questionTextEng: "Home Address",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2Apt",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2City",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2State",
      questionTextEng: "State",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2Zip",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3DifferentMail",
      questionTextEng: "Address Where You Get Your Mail If Different From Above",
      options: [
        {
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
    },
    {
      questionNumber: "q3AddressMail",
      questionTextEng: "Mail Address",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3AptMail",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3CityMail",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3StateMail",
      questionTextEng: "State",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3ZipMail",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q5Phone",
      questionTextEng: "Telephone Number (optional). Numbers Only.",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q6ID",
      questionTextEng: "ID Number",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q7Party",
      questionTextEng: "Choice of Party",
      options: [
        {
          party: ["Democrat", "Independent", "Republican"]
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q8Race",
      questionTextEng: "Race or Ethnic Group",
      options: [
        {
          race: ["American Indian or Alaskan Native",
          "Asian or Pacific Islander", "Black, not of Hispanic Origin", "Hispanic", "Multi‐racial", "White, not of Hispanic Origin", "Other"]
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q9Date",
      questionTextEng: "Date",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qA",
      questionTextEng: "If this application is for a change of name, what was your name before you changed it?",
      responseText: "",
    },
    {
      questionNumber: "qANameChange",
      questionTextEng: "Choose one",
      options: [
        {
          textEng: "Mr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
            textEng: "Mrs.",
            xLocation: "",
            yLocation: "",
            page: ""
        },
        {
          textEng: "Miss.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "Ms.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "qALastName",
      questionTextEng: "Last Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qAFirstName",
      questionTextEng: "First Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qAMiddleName",
      questionTextEng: "Middle Name(s)",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qANameSuffix",
      questionTextEng: "Choose one",
      options: [
        {
          textEng: "Jr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "II",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "III",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "IV",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "qB",
      questionTextEng: "If this application is for a change of name, what was your name before you changed it?",
      options: [
        {
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: "",
    },
    {
      questionNumber: "qBDiffAddress",
      questionHeadingEng: "Were registered before but this is the first time you are registering from the address in Box 2?",
      questionTextEng: "If you were registered before but this is the first time you are registering from the address in Box 2, what was your address where you were registered before?",
      options: [
        {
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBDiffStreet",
      questionTextEsp: "Street (or route and box number)",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBApt",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBCity",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBState",
      questionTextEng: "State",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBZip",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBRuralAddress",
      questionHeadingEng: "If you live in a rural area but do not have a street number, or if you have no address, please show on the map where you live.",
      questionTextEng: "Do you live in a rural area but do not have a street number, or if you have no address?",
      options: [
        {
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEng: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
  ],
  questionsEsp: [
    {
        questionNumber: "qual1",
        questionTextEsp: "¿Es usted ciudadano de Estados Unidos de América?",
        options: [
          {
            textEsp: "Sí.",
            xLocation: "",
            yLocation: "",
            page: ""
          },
          {
            textEsp: "NO.",
            xLocation: "",
            yLocation: "",
            page: ""
          }
        ],
        responseText: ""
      },
      {
        questionNumber: "q4DOB",
        questionTextEsp: "Fecha de nacimiento. Por favor usa números.",
        options: [
          {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          }
        ],
        responseText: "",
        xLocation: "",
        yLocation: "",
        page: ""
      },
      {
        questionNumber: "qual2",
        questionTextEsp: "¿Habrá cumplido los 18 años de edad para el día de las elecciones?",
        options: [
          {
            textEsp: "Sí.",
            xLocation: "",
            yLocation: "",
            page: ""
          },
          {
            textEsp: "NO.",
            xLocation: "",
            yLocation: "",
            page: ""
          }
        ],
        responseText: ""
      },
      {
      questionNumber: "q1a",
      questionTextEsp: "Marque uno",
      options: [
        {
          textEsp: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sra.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sta.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sra.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "q1LastName",
      questionTextEsp: "Apellido",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1FirstName",
      questionTextEsp: "Primer Nombre",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1MiddleName",
      questionTextEsp: "Segundo Nombre",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1NameSuffix",
      questionTextEsp: "Marque uno",
      options: [
        {
          textEsp: "Jr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "II",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "III",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "IV",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "q2Address",
      questionTextEsp: "Dirección donde vive",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2Apt",
      questionTextEsp: "No.dedepto.olote",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2City",
      questionTextEsp: "Ciudad/Localidad",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2State",
      questionTextEsp: "Estado",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2Zip",
      questionTextEsp: "Código postal",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3DifferentMail",
      questionTextEsp: "Dirección donde recibe su correo, si es diferente a la de más arriba",
      options: [
        {
          textEsp: "Sí.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
    },
    {
      questionNumber: "q3AddressMail",
      questionTextEsp: "Dirección donde correo",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3AptMail",
      questionTextEsp: "No.dedepto.olote",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3CityMail",
      questionTextEsp: "Ciudad/Localidad",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3StateMail",
      questionTextEsp: "Estado",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3ZipMail",
      questionTextEsp: "Código postal",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q5Phone",
      questionTextEsp: "Número de teléfono (optativo). Solo Números.",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q6ID",
      questionTextEsp: "Número de identificación",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q7Party",
      questionTextEsp: "Selección de partido político",
      options: [
        {
          party: ["Demócrata", "Independiente", "Republicano/a"]
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q8Race",
      questionTextEsp: "Raza o grupo étnico",
      options: [
        {
          race: ["Indígena norteamericano o nativo de Alaska",
          "Asiático o isleño del Pacífico", "Negro, no de origen hispano", "Hispano", "Multirracial", "Blanco, no de origen hispano", "Otro"]
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q9Date",
      questionTextEsp: "Fecha",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qA",
      questionTextEsp: "Si esta solicitud es para un cambio de nombre, ¿cómo se llamaba antes de cambiar de nombre?",
      responseText: "",
    },
    {
      questionNumber: "qANameChange",
      questionTextEsp: "Marque uno",
      options: [
        {
          textEsp: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
            textEsp: "Sra.",
            xLocation: "",
            yLocation: "",
            page: ""
        },
        {
          textEsp: "Sta.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sra.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "qALastName",
      questionTextEsp: "Apellido",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qAFirstName",
      questionTextEsp: "Primer Nombre",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qAMiddleName",
      questionTextEsp: "Segundo Nombre",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qANameSuffix",
      questionTextEsp: "Marque uno",
      options: [
        {
          textEsp: "Jr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "II",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "III",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "IV",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "qB",
      questionTextEsp: "Si esta solicitud es para un cambio de nombre, ¿cómo se llamaba antes de cambiar de nombre?",
      options: [
        {
          textEsp: "Sí.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: "",
    },
    {
      questionNumber: "qBDiffAddress",
      questionHeadingEsp: "Si estuvo inscrito antes, pero esta es la primera vez que se está inscribiendo con la dirección en la Casilla 2, ¿cuál era la dirección con que estaba inscrito antes?",
      questionTextEsp: "¿Inscrito antes, pero esta es la primera vez que se está inscribiendo con la dirección en la Casilla 2, ¿cuál era la dirección con que estaba inscrito antes?",
      options: [
        {
          textEsp: "Sí.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBStreet",
      questionTextEsp: "Calle (o número de ruta y casilla)",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBApt",
      questionTextEsp: "No.dedepto.olote",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBCity",
      questionTextEsp: "Ciudad/Localidad",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBState",
      questionTextEsp: "Estado",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBZip",
      questionTextEsp: "Código postal",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBAddress",
      questionHeadingEsp: "Si vive en una zona rural, pero no tiene un número de calle, o si no tiene dirección, muestre en el mapa dónde vive.",
      questionTextEsp: "¿Vives en un área rural, pero no tienes un número de calle o no tienes una dirección?",
      options: [
        {
          textEsp: "Sí.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
  ],
  response: {},
  responses: []
};

const voterReducer = (state = initialState, action) => {
  let i = state.i;
  let language = state.language;
  let languages = state.languages;
  let question = state.question;
  let questions = state.questions;
  let response = state.response;
  let responses = state.responses;
  switch (action.type) {
    case actionTypes.DECREMENT_INDEX_SPANISH:
      i = i - 1;
      return Object.assign({}, state, {
        i
      });
    case actionTypes.INCREMENT_INDEX_SPANISH:
      console.log("incrementIndexSpanish");
      console.log(i);
      i = i + 1;
      console.log(i);
      return Object.assign({}, state, {
        i
      });
    case actionTypes.NEXT_QUESTION:
      i = i + 1;
      console.log(question);
      question = questions[i];
      console.log(question);
      return Object.assign({}, state, {
        i,
        question
      });
    case actionTypes.PREVIOUS_QUESTION:
      i = i - 1;
      question = questions[i];
      console.log(i);
      return Object.assign({}, state, {
        i,
        question
      });
    case actionTypes.EDIT_RESPONSE:
      return state;
    case actionTypes.GET_QUESTIONS_AZ_SPANISH:
      console.log(action);
      return state;
    case actionTypes.SET_RESPONSE:
      response = action.response;
      responses = state.responses.concat(response);
      console.log(i);
      return Object.assign({}, state, {
        response,
        responses
      });

    default:
      return state;
  }
}

export default voterReducer;
