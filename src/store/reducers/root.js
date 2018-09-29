import canchas from '../../json/canchas.json';
import { 
    SELECCIONAR_CANCHA, 
    OCULTAR_MODAL_CANCHA, 
    BUSCAR_CANCHA, 
    CARGAR_CANCHAS_FILTRADAS,
    SELECCIONAR_TURNO
} from '../actions/actionTypes';

const initialState = {
    canchas,
    canchasFiltradas: canchas,
    canchaSeleccionada: null
};

const reducer = (state=initialState, action) => {
    /*
    el reducer es una función que aloja todos los métodos que hacen al funcionamiento de la app hasta
    lo que tenemos actualmente
    */
    switch (action.type) {
        case SELECCIONAR_CANCHA:
        /*
        Este método hace que se abra el modal que te lista los turnos cuando tocas una cancha.
        En el componente Cancha está el trigger onPress que llama a esta función.     
        */
            return {
                ...state,
                canchaSeleccionada: state.canchas.find(cancha => {
                    return cancha.id == action.id; 
                })
            };
        case OCULTAR_MODAL_CANCHA:
        /*
        Este método cierra el modal cuando apretás el botón de Cerrar. Si te fijás adentro del
        componente que se llama CanchaDetalle en el botón Cerrar hay un trigger onPress que llama
        a esta function.
        */
            return {
                ...state,
                canchaSeleccionada: null
            }
        case BUSCAR_CANCHA:
        /*
        Esta función permite es la que te filtra las canchas cuando escribis en la SearchBar.
        En el Screen de Busqueda esta el trigger onChange que llama a esta función.
        */
        return {
            ...state,
            canchasFiltradas: state.canchas.filter(cancha => {
                return cancha.nombre.indexOf(action.nombre) > -1
            })
        };
        case CARGAR_CANCHAS_FILTRADAS:
        /*
        Te muestra todas las canchas filtradas
        */
        return {
            ...state,
            canchasFiltradas: state.canchas
        };
        case SELECCIONAR_TURNO:
        /*
        Esta función es la que alquila un turno en X horario. Mapea la lista de turnos de la
        cancha que seleccionaste (la que abriste el modal) y pone en TRUE (alquilado) el turno
        elegiste.
        */
        return {
            ...state,
            canchaSeleccionada: state.canchaSeleccionada.turnos.map(turno => {
                if (turno.id == action.id) {
                   return turno.alquilado = true
                }
            })
        };
        default:
            return state;
    }
};

export default reducer; 