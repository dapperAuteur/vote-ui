import * as actionTypes from './../actions/actionTypes';

const initialState = {
  i: 0,
  language: "",
  languages: ["English", "Español"],
  question: {},
  questions: [
    {
        questionNumber: "qual1",
        questionTextEsp: "¿Es usted ciudadano de Estados Unidos de América?",
        questionTextEng: "Are you a citizen of the United States of America?",
        options: [
          {
            textEsp: "Sí.",
            textEng: "Yes.",
            xLocation: "",
            yLocation: "",
            page: ""
          },
          {
            textEsp: "NO.",
            textEng: "NO.",
            xLocation: "",
            yLocation: "",
            page: ""
          }
        ],
        responseText: ""
      },
      {
        questionNumber: "qual2",
        questionTextEsp: "¿Habrá cumplido los 18 años de edad para el día de las elecciones?",
        questionTextEng: "Will you be 18 years old on or before election day?",
        options: [
          {
            textEsp: "Sí.",
            textEng: "Yes.",
            xLocation: "",
            yLocation: "",
            page: ""
          },
          {
            textEsp: "NO.",
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
      questionTextEsp: "Marque uno",
      questionTextEng: "Choose one",
      options: [
        {
          textEsp: "Sr.",
          textEng: "Mr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sra.",
          textEng: "Mrs.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sta.",
          textEng: "Miss.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sra.",
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
      questionTextEsp: "Apellido",
      questionTextEng: "Last Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1FirstName",
      questionTextEsp: "Primer Nombre",
      questionTextEng: "First Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1MiddleName",
      questionTextEsp: "Segundo Nombre",
      questionTextEng: "Middle Name(s)",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q1NameSuffix",
      questionTextEsp: "Marque uno",
      questionTextEng: "Choose one",
      options: [
        {
          textEsp: "Jr.",
          textEng: "Jr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sr.",
          textEng: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "II",
          textEng: "II",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "III",
          textEng: "III",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "IV",
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
      questionTextEsp: "Dirección donde vive",
      questionTextEng: "Home Address",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2Apt",
      questionTextEsp: "No.dedepto.olote",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2City",
      questionTextEsp: "Ciudad/Localidad",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2State",
      questionTextEsp: "Estado",
      questionTextEng: "State",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q2Zip",
      questionTextEsp: "Código postal",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3DifferentMail",
      questionTextEsp: "Dirección donde recibe su correo, si es diferente a la de más arriba",
      questionTextEng: "Dirección donde recibe su correo, si es diferente a la de más arriba",
      options: [
        {
          textEsp: "Sí.",
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
          textEng: "NO.",
          xLocation: "",
          yLocation: "",
          page: ""
        }
      ],
    },
    {
      questionNumber: "q3AddressMail",
      questionTextEsp: "Dirección donde vive",
      questionTextEng: "Home Address",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3AptMail",
      questionTextEsp: "No.dedepto.olote",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3CityMail",
      questionTextEsp: "Ciudad/Localidad",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3StateMail",
      questionTextEsp: "Estado",
      questionTextEng: "State",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q3ZipMail",
      questionTextEsp: "Código postal",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q7",
      questionText: "Dirección en la cual usted recibe su correspondencia, si no se entrega la correspondencia a su casa",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q4DOB",
      questionTextEsp: "Fecha de nacimiento. Por favor usa números.",
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
      questionNumber: "q5Phone",
      questionTextEsp: "Número de teléfono (optativo). Solo Números.",
      questionTextEng: "Telephone Number (optional). Numbers Only.",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q6ID",
      questionTextEsp: "Número de identificación",
      questionTextEng: "ID Number",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "q7Party",
      questionTextEsp: "Selección de partido político",
      questionTextEng: "Choice of Party",
      options: [
        {
          party: ["Demócrata", "Republicano/a"]
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
      questionTextEng: "Race or Ethnic Group",
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
      questionTextEng: "Date",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qA",
      questionTextEsp: "Si esta solicitud es para un cambio de nombre, ¿cómo se llamaba antes de cambiar de nombre?",
      questionTextEng: "If this application is for a change of name, what was your name before you changed it?",
      responseText: "",
    },
    {
      questionNumber: "qANameChange",
      questionTextEsp: "Marque uno",
      questionTextEng: "Choose one",
      options: [
        {
          textEsp: "Sr.",
          textEng: "Mr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
            textEsp: "Sra.",
            textEng: "Mrs.",
            xLocation: "",
            yLocation: "",
            page: ""
        },
        {
          textEsp: "Sta.",
          textEng: "Miss.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sra.",
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
      questionTextEsp: "Apellido",
      questionTextEng: "Last Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qAFirstName",
      questionTextEsp: "Primer Nombre",
      questionTextEng: "First Name",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qAMiddleName",
      questionTextEsp: "Segundo Nombre",
      questionTextEng: "Middle Name(s)",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qANameSuffix",
      questionTextEsp: "Marque uno",
      questionTextEng: "Choose one",
      options: [
        {
          textEsp: "Jr.",
          textEng: "Jr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "Sr.",
          textEng: "Sr.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "II",
          textEng: "II",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "III",
          textEng: "III",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "IV",
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
      questionTextEsp: "Si esta solicitud es para un cambio de nombre, ¿cómo se llamaba antes de cambiar de nombre?",
      questionTextEng: "If this application is for a change of name, what was your name before you changed it?",
      responseText: "",
    },
    {
      questionNumber: "qBAddress",
      questionHeadingEsp: "Si estuvo inscrito antes, pero esta es la primera vez que se está inscribiendo con la dirección en la Casilla 2, ¿cuál era la dirección con que estaba inscrito antes?",
      questionHeadingEng: "Were registered before but this is the first time you are registering from the address in Box 2?",
      questionTextEsp: "¿Inscrito antes, pero esta es la primera vez que se está inscribiendo con la dirección en la Casilla 2, ¿cuál era la dirección con que estaba inscrito antes?",
      questionTextEng: "If you were registered before but this is the first time you are registering from the address in Box 2, what was your address where you were registered before?",
      options: [
        {
          textEsp: "Sí.",
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
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
      questionNumber: "qBApt",
      questionTextEsp: "No.dedepto.olote",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBCity",
      questionTextEsp: "Ciudad/Localidad",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBState",
      questionTextEsp: "Estado",
      questionTextEng: "State",
      options: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBZip",
      questionTextEsp: "Código postal",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: "",
      page: ""
    },
    {
      questionNumber: "qBAddress",
      questionHeadingEsp: "Si vive en una zona rural, pero no tiene un número de calle, o si no tiene dirección, muestre en el mapa dónde vive.",
      questionHeadingEng: "If you live in a rural area but do not have a street number, or if you have no address, please show on the map where you live.",
      questionTextEsp: "¿Vives en un área rural, pero no tienes un número de calle o no tienes una dirección?",
      questionTextEng: "Do you live in a rural area but do not have a street number, or if you have no address?",
      options: [
        {
          textEsp: "Sí.",
          textEng: "Yes.",
          xLocation: "",
          yLocation: "",
          page: ""
        },
        {
          textEsp: "NO.",
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
  response: {},
  responses: []
};

const voterReducerAzSpanish = (state = initialState, action) => {
  let i = state.i;
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

export default voterReducerAzSpanish;
