import canchas from '../../json/canchas.json';
import { BUSCAR_CANCHA, SELECCIONAR_CANCHA, OCULTAR_MODAL_CANCHA } from '../actions/actionTypes';

const initialState = {
    canchas,
    canchasFiltradas: [],
    canchaSeleccionada: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case BUSCAR_CANCHA:
            return {
                ...state,
                // canchasFiltradas: state.canchas.filter(cancha => {
                canchas: state.canchas.filter(cancha => {
                    return cancha.nombre.indexOf(action.nombre) > -1
                })
            };
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
            }
        default:
            return state;
    }
};

export default reducer;