import canchas from '../../json/canchas.json';
import { BUSCAR_CANCHA } from '../actions/actionTypes';

const initialState = {
    canchas
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case BUSCAR_CANCHA:
            return {
                ...state,
                canchasFiltradas: state.canchas.filter(cancha => {
                    return cancha.nombre.indexOf(action.nombre) > -1
                })
            };
        default:
            return state;
    }
};

export default reducer;