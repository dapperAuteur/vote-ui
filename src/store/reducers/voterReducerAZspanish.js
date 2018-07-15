import * as actionTypes from './../actions/actionTypes';

const initialState = {
  i: 0,
  language: "",
  question: {
    questionNumber: "q1",
    questionText: "Lista de Votación Temprana Permanente - Boleta Electoral Temprana (vea las instrucciones arriba)",
    options: [
      {
        text: "Elige Uno"
      },
      {
        text: "Sí. Yo quiero recibir automáticamente una boleta electoral temprana para cada elección a la cual sea elegible.",
        xLocation: "",
        yLocation: ""
      },
      {
        text: "NO. NO DESEO recibir automáticamente una boleta electoral temprana. Yo entiendo que al MARCAR ESTA CASILLA, removeré mi nombre de la lista si éste estaba incluido previamente.",
        xLocation: "",
        yLocation: ""
      }
    ],
    responseText: ""
  },
  questions: [
    {
      questionNumber: "q1",
      questionText: "Lista de Votación Temprana Permanente - Boleta Electoral Temprana (vea las instrucciones arriba)",
      options: [
        {
          text: "Elige Uno"
        },
        {
          text: "Sí. Yo quiero recibir automáticamente una boleta electoral temprana para cada elección a la cual sea elegible.",
          xLocation: "",
          yLocation: ""
        },
        {
          text: "NO. NO DESEO recibir automáticamente una boleta electoral temprana. Yo entiendo que al MARCAR ESTA CASILLA, removeré mi nombre de la lista si éste estaba incluido previamente.",
          xLocation: "",
          yLocation: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "q2LastName",
      questionText: "Apellido",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q2FirstName",
      questionText: "Nombre de Pila",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q2MiddleName",
      questionText: "Segundo Nombre",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q2NameSuffix",
      questionText: "Jr./Sr./III",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q3",
      questionText: "Si donde usted vive no tiene domicilio, describa la ubicación de la residencia usando millaje, cruceros de calles, # de parcela, nombre de la subdivisión y lote, o detalles específicos de referencia. No use un apartado postal ni dirección de negocio. Dibuje un mapa abajo si está ubicado en una zona rural.",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q4",
      questionText: "Dpto./ Unidad/ espacio",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q5",
      questionText: "Ciudad",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q6",
      questionText: "Código postal",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q7",
      questionText: "Dirección en la cual usted recibe su correspondencia, si no se entrega la correspondencia a su casa",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q8",
      questionText: "Las últimas cuatro cifras de su Número de Seguro Social",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q9",
      questionText: "Número de su licencia de manejar de AZ o número de su licencia de identificación no de manejar de AZ",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q10",
      questionText: "Número Opcional de Identificación Tribal",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q11",
      questionText: "Número de Registro de Extranjero",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q12",
      questionText: "Fecha de Nacimiento (MM/DD/YYYY)",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q13",
      questionText: "Estado o País de Nacimiento",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q14",
      questionText: "Especifique Su Partido Preferido",
      choices: ["Elige Uno","Demócrata", "Republicano/a", "Otro/a"],
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
    {
      questionNumber: "q15",
      questionText: "Número de Teléfono",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q16",
      questionText: "Ocupación",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q17",
      questionText: "Si usted se registró para votar en otro domicilio, liste el domicilio previo incluyendo el condado y el estado",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q18",
      questionText: "Liste cualquier nombre previo (si es aplicable)",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q19",
      questionText: "Nombre de su padre o nombre de soltera de su madre",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q20",
      questionText: "Está usted dispuesto/a a trabajar en un lugar de votación el día de la elección?",
      options: [
        {
          text: "Elige Uno"
        },
        {
          text: "Sí",
          xLocation: "",
          yLocation: ""
        },
        {
          text: "No",
          xLocation: "",
          yLocation: ""
        }
      ],
      responseText: ""
    },
    {
      questionNumber: "q21",
      questionText: "Domicilio de correo electrónico",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    {
      questionNumber: "q22a",
      options: [
        {
          text: "Elige Uno"
        },
        {
          text: "Sí",
          xLocation: "",
          yLocation: ""
        },
        {
          text: "No",
          xLocation: "",
          yLocation: ""
        }
      ],
      questionText: "Es usted ciudadano de los Estados Unidos de América?",
      disclaimer: "Si marcó “No” a cualquiera de estas preguntas, no presente el formulario.",
      responseText: ""
    },
    {
      questionNumber: "q22b",
      options: [
        {
          text: "Elige Uno"
        },
        {
          text: "Sí",
          xLocation: "",
          yLocation: ""
        },
        {
          text: "No",
          xLocation: "",
          yLocation: ""
        }
      ],
      questionText: "Cumplirá usted 18 años de edad en ó antes del día de la elección?",
      disclaimer: "Si marcó “No” a cualquiera de estas preguntas, no presente el formulario.",
      responseText: ""
    }
  ],
  response: {},
  responses: []
};

const voterReducerAZ = (state = initialState, action) => {
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
      return state;

    default:
      return state;
  }
}

export default voterReducerAZ;
