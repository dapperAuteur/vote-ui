import * as actionTypes from './../actions/actionTypes';

const initialState = {
  i: 0,
  language: "",
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
            yLocation: ""
          },
          {
            textEsp: "NO.",
            textEng: "NO.",
            xLocation: "",
            yLocation: ""
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
            yLocation: ""
          },
          {
            textEsp: "NO.",
            textEng: "NO.",
            xLocation: "",
            yLocation: ""
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
          yLocation: ""
        },
        {
            textEsp: "Sra.",
            textEng: "Mrs.",
            xLocation: "",
            yLocation: ""
        },
        {
            textEsp: "Sta.",
            textEng: "Miss.",
            xLocation: "",
            yLocation: ""
          },
          {
              textEsp: "Sra.",
              textEng: "Ms.",
              xLocation: "",
              yLocation: ""
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
      yLocation: ""
    },
    {
      questionNumber: "q1FirstName",
      questionTextEsp: "Primer Nombre",
      questionTextEng: "First Name",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q1MiddleName",
      questionTextEsp: "Segundo Nombre",
      questionTextEng: "Middle Name(s)",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
          yLocation: ""
        },
        {
          textEsp: "Sr.",
          textEng: "Sr.",
          xLocation: "",
          yLocation: ""
        },
        {
            textEsp: "II",
            textEng: "II",
            xLocation: "",
            yLocation: ""
          },
          {
            textEsp: "III",
            textEng: "III",
            xLocation: "",
            yLocation: ""
          },
          {
            textEsp: "IV",
            textEng: "IV",
            xLocation: "",
            yLocation: ""
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
      yLocation: ""
    },
    {
      questionNumber: "q2Apt",
      questionTextEsp: "No.dedepto.olote",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q2City",
      questionTextEsp: "Ciudad/Localidad",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q2State",
      questionTextEsp: "Estado",
      questionTextEng: "State",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q2Zip",
      questionTextEsp: "Código postal",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
          yLocation: ""
        },
        {
          textEsp: "NO.",
          textEng: "NO.",
          xLocation: "",
          yLocation: ""
        }
      ],
    },
    {
      questionNumber: "q3AddressMail",
      questionTextEsp: "Dirección donde vive",
      questionTextEng: "Home Address",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q3AptMail",
      questionTextEsp: "No.dedepto.olote",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q3CityMail",
      questionTextEsp: "Ciudad/Localidad",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q3StateMail",
      questionTextEsp: "Estado",
      questionTextEng: "State",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q3ZipMail",
      questionTextEsp: "Código postal",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q7",
      questionText: "Dirección en la cual usted recibe su correspondencia, si no se entrega la correspondencia a su casa",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
      yLocation: ""
    },
    {
      questionNumber: "q5Phone",
      questionTextEsp: "Número de teléfono (optativo)",
      questionTextEng: "Telephone Number (optional)",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "q6ID",
      questionTextEsp: "Número de identificación",
      questionTextEng: "ID Number",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
      yLocation: ""
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
      yLocation: ""
    },
    {
      questionNumber: "q9Date",
      questionTextEsp: "Fecha",
      questionTextEng: "Date",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
          yLocation: ""
        },
        {
            textEsp: "Sra.",
            textEng: "Mrs.",
            xLocation: "",
            yLocation: ""
        },
        {
          textEsp: "Sta.",
          textEng: "Miss.",
          xLocation: "",
          yLocation: ""
        },
        {
            textEsp: "Sra.",
            textEng: "Ms.",
            xLocation: "",
            yLocation: ""
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
      yLocation: ""
    },
    {
      questionNumber: "qAFirstName",
      questionTextEsp: "Primer Nombre",
      questionTextEng: "First Name",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "qAMiddleName",
      questionTextEsp: "Segundo Nombre",
      questionTextEng: "Middle Name(s)",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
          yLocation: ""
        },
        {
          textEsp: "Sr.",
          textEng: "Sr.",
          xLocation: "",
          yLocation: ""
        },
        {
          textEsp: "II",
          textEng: "II",
          xLocation: "",
          yLocation: ""
        },
        {
          textEsp: "III",
          textEng: "III",
          xLocation: "",
          yLocation: ""
        },
        {
          textEsp: "IV",
          textEng: "IV",
          xLocation: "",
          yLocation: ""
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
          yLocation: ""
        },
        {
          textEsp: "NO.",
          textEng: "NO.",
          xLocation: "",
          yLocation: ""
        }
      ],
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "qBApt",
      questionTextEsp: "No.dedepto.olote",
      questionTextEng: "Apt. or Lot #",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "qBCity",
      questionTextEsp: "Ciudad/Localidad",
      questionTextEng: "City/Town",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "qBState",
      questionTextEsp: "Estado",
      questionTextEng: "State",
      responseText: "",
      xLocation: "",
      yLocation: ""
    },
    {
      questionNumber: "qBZip",
      questionTextEsp: "Código postal",
      questionTextEng: "Zip Code",
      responseText: "",
      xLocation: "",
      yLocation: ""
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
