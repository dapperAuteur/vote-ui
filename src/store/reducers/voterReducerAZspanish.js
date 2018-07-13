import * as actionTypes from './../actions/actionTypes';

const initialState = {
  language: "",
  questions: [
    "q1": {
      question: "Lista de Votación Temprana Permanente - Boleta Electoral Temprana (vea las instrucciones arriba)",
      text1: "SÍ. Yo quiero recibir automáticamente una boleta electoral temprana para cada elección a la cual sea elegible.",
      responseText1Location: {
        xLocation: "",
        yLocation: ""
      },
      text2: "NO. NO DESEO recibir automáticamente una boleta electoral temprana. Yo entiendo que al MARCAR ESTA CASILLA, removeré mi nombre de la lista si éste estaba incluido previamente.",
      responseText2Location: {
        xLocation: "",
        yLocation: ""
      },
      responseText: ""
    },
    "q2LastName": {
      question: "Apellido",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q2FirstName": {
      question: "Nombre de Pila",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q2MiddleName": {
      question: "Segundo Nombre",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q2NameSuffix": {
      question: "Jr./Sr./III",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q3": {
      question: "Si donde usted vive no tiene domicilio, describa la ubicación de la residencia usando millaje, cruceros de calles, # de parcela, nombre de la subdivisión y lote, o detalles específicos de referencia. No use un apartado postal ni dirección de negocio. Dibuje un mapa abajo si está ubicado en una zona rural.",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q4": {
      question: "Dpto./ Unidad/ espacio",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q5": {
      question: "Ciudad",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q6": {
      question: "Código postal",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q7": {
      question: "Dirección en la cual usted recibe su correspondencia, si no se entrega la correspondencia a su casa",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q8": {
      question: "Las últimas cuatro cifras de su Número de Seguro Social",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q9": {
      question: "Número de su licencia de manejar de AZ o número de su licencia de identificación no de manejar de AZ",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q10": {
      question: "Número Opcional de Identificación Tribal",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q11": {
      question: "Número de Registro de Extranjero",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q12": {
      question: "Fecha de Nacimiento (MM/DD/YYYY)",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q13": {
      question: "Estado o País de Nacimiento",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q14": {
      question: "Especifique Su Partido Preferido",
      choices: ["Demócrata", "Republicano/a", "Otro/a"],
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
      question: "Número de Teléfono",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q16": {
      question: "Ocupación",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q17": {
      question: "Si usted se registró para votar en otro domicilio, liste el domicilio previo incluyendo el condado y el estado",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q18": {
      question: "LListe cualquier nombre previo (si es aplicable)",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q19": {
      question: "Nombre de su padre o nombre de soltera de su madre",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q20": {
      question: "Está usted dispuesto/a a trabajar en un lugar de votación el día de la elección?",
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
    "q21": {
      question: "Domicilio de correo electrónico",
      responseText: "",
      responseTextLocation: {
        xLocation: "",
        yLocation: ""
      }
    },
    "q22": {
      options: ["Yes", "No"],
      text1: "Es usted ciudadano de los Estados Unidos de América?",
      responseYesText1Location: {
        xLocation: "",
        yLocation: ""
      },
      responseNoText1Location: {
        xLocation: "",
        yLocation: ""
      },
      text2: "Cumplirá usted 18 años de edad en ó antes del día de la elección?",
      responseYesText2Location: {
        xLocation: "",
        yLocation: ""
      },
      responseNoText2Location: {
        xLocation: "",
        yLocation: ""
      },
      disclaimer: "Si marcó “No” a cualquiera de estas preguntas, no presente el formulario.",
      responseText: ""
    }
  ]
};

const voterReducerAZ = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_RESPONSE:
      return state;
    case actionTypes.GET_QUESTIONS_AZ_SPANISH:
      return state;
    case actionTypes.SET_RESPONSE:
      return state;

    default:
      return state;
  }
}

export default voterReducerAZ;
