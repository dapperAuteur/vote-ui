import * as actionTypes from './../actions/actionTypes';

const initialState = {
  language: "",
  questions: [
    {
      q1a: {
        questionText: "Lista de Votación Temprana Permanente - Boleta Electoral Temprana (vea las instrucciones arriba)",
        text1: "SÍ. Yo quiero recibir automáticamente una boleta electoral temprana para cada elección a la cual sea elegible.",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q1b: {
        questionText: "NO. NO DESEO recibir automáticamente una boleta electoral temprana. Yo entiendo que al MARCAR ESTA CASILLA, removeré mi nombre de la lista si éste estaba incluido previamente.",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        },
        responseText: ""
      }
    },
    {
      q2LastName: {
        questionText: "Apellido",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q2FirstName: {
        questionText: "Nombre de Pila",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q2MiddleName: {
        questionText: "Segundo Nombre",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q2NameSuffix: {
        questionText: "Jr./Sr./III",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q3: {
        questionText: "Si donde usted vive no tiene domicilio, describa la ubicación de la residencia usando millaje, cruceros de calles, # de parcela, nombre de la subdivisión y lote, o detalles específicos de referencia. No use un apartado postal ni dirección de negocio. Dibuje un mapa abajo si está ubicado en una zona rural.",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q4: {
        questionText: "Dpto./ Unidad/ espacio",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q5: {
        questionText: "Ciudad",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q6: {
        questionText: "Código postal",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q7: {
        questionText: "Dirección en la cual usted recibe su correspondencia, si no se entrega la correspondencia a su casa",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q8: {
        questionText: "Las últimas cuatro cifras de su Número de Seguro Social",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q9: {
        questionText: "Número de su licencia de manejar de AZ o número de su licencia de identificación no de manejar de AZ",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q10: {
        questionText: "Número Opcional de Identificación Tribal",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q11: {
        questionText: "Número de Registro de Extranjero",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q12: {
        questionText: "Fecha de Nacimiento (MM/DD/YYYY)",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q13: {
        questionText: "Estado o País de Nacimiento",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q14: {
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
      }
    },
    {
      q15: {
        questionText: "Número de Teléfono",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q16: {
        questionText: "Ocupación",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q17: {
        questionText: "Si usted se registró para votar en otro domicilio, liste el domicilio previo incluyendo el condado y el estado",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q18: {
        questionText: "LListe cualquier nombre previo (si es aplicable)",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q19: {
        questionText: "Nombre de su padre o nombre de soltera de su madre",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q20: {
        questionText: "Está usted dispuesto/a a trabajar en un lugar de votación el día de la elección?",
        options: ["Elige Uno","Sí", "No"],
        responseText: "",
        responseYesTextLocation: {
          xLocation: "",
          yLocation: ""
        },
        responseNoTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q21: {
        questionText: "Domicilio de correo electrónico",
        responseText: "",
        responseTextLocation: {
          xLocation: "",
          yLocation: ""
        }
      }
    },
    {
      q22a: {
        options: ["Elige Uno","Sí", "No"],
        questionText: "Es usted ciudadano de los Estados Unidos de América?",
        responseYesTextLocation: {
          xLocation: "",
          yLocation: ""
        },
        responseNoTextLocation: {
          xLocation: "",
          yLocation: ""
        },
        disclaimer: "Si marcó “No” a cualquiera de estas preguntas, no presente el formulario.",
        responseText: ""
      }
    },
    {
      q22b: {
        options: ["Elige Uno","Sí", "No"],
        questionText: "Cumplirá usted 18 años de edad en ó antes del día de la elección?",
        responseYesTextLocation: {
          xLocation: "",
          yLocation: ""
        },
        responseNoTextLocation: {
          xLocation: "",
          yLocation: ""
        },
        disclaimer: "Si marcó “No” a cualquiera de estas preguntas, no presente el formulario.",
        responseText: ""
      }
    }
  ]
};

const voterReducerAZ = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_RESPONSE:
      return state;
    case actionTypes.GET_QUESTIONS_AZ_SPANISH:
      console.log(action);
      return state;
    case actionTypes.SET_RESPONSE:
      return state;

    default:
      return state;
  }
}

export default voterReducerAZ;
