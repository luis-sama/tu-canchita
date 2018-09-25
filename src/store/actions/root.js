import { BUSCAR_CANCHA } from './actionTypes';

export const buscarCancha = nombre => {
    return {
        type: BUSCAR_CANCHA,
        nombre: nombre
    };
}