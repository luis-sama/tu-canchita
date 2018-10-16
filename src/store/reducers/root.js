import canchas from "../../json/canchas.json";
import firebase from "firebase";
import {
  SELECCIONAR_CANCHA,
  OCULTAR_MODAL_CANCHA,
  BUSCAR_CANCHA,
  CARGAR_CANCHAS_FILTRADAS,
  SELECCIONAR_TURNO,
  TRAER_CANCHAS
} from "../actions/actionTypes";

const initialState = {
  canchas: [],
  canchasFiltradas: canchas,
  canchaSeleccionada: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECCIONAR_CANCHA:
      return {
        ...state,
        canchaSeleccionada: state.canchas.find(cancha => {
          return cancha.id == action.id;
        })
      };
    case OCULTAR_MODAL_CANCHA:
      return {
        ...state,
        canchaSeleccionada: null
      };
    case BUSCAR_CANCHA:
      return {
        ...state,
        canchasFiltradas: state.canchas.filter(cancha => {
          return cancha.nombre.indexOf(action.nombre) > -1;
        })
      };
    case CARGAR_CANCHAS_FILTRADAS:
      return {
        ...state,
        canchasFiltradas: state.canchas
      };
    case SELECCIONAR_TURNO:
      return {
        ...state,
        canchaSeleccionada: state.canchaSeleccionada.turnos.map(turno => {
          if (turno.id == action.id) {
            return (turno.alquilado = true);
          }
        })
      };
    case TRAER_CANCHAS:
      return {
        ...state,
        canchas: 
          firebase.database().ref().child('canchas').on('child_added', data => {
            this.props.canchas.push({
              id: data.key,
              nombre: data.val().nombre,
              imagen: data.val().imagen,
              precio: data.val().precio,
              puntaje: data.val().puntaje,
              turnos: data.val().turnos,
              ubicacion: data.val().ubicacion
            })
          })
      }
    default:
      return state;
  }
};

export default reducer;
