import { BUSCAR_CANCHA, SELECCIONAR_CANCHA, OCULTAR_MODAL_CANCHA } from './actionTypes';

export const buscarCancha = nombre => {
    return {
        type: BUSCAR_CANCHA,
        nombre: nombre
    };
}

export const seleccionarCancha = id => {
    return {
        type: SELECCIONAR_CANCHA,
        id: id
    }
}

export const ocultarModalCancha = () => {
    return {
        type: OCULTAR_MODAL_CANCHA
    }
}