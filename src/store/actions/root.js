import { SELECCIONAR_CANCHA, OCULTAR_MODAL_CANCHA, BUSCAR_CANCHA, CARGAR_CANCHAS_FILTRADAS, SELECCIONAR_TURNO, DESELECCIONAR_TURNO } from './actionTypes';

export const buscarCancha = nombre => {
    return {
        type: BUSCAR_CANCHA,
        nombre: nombre
    };
}

export const seleccionarCancha = id => {
    return {
        type: SELECCIONAR_CANCHA,
        id
    }
}

export const ocultarModalCancha = () => {
    return {
        type: OCULTAR_MODAL_CANCHA
    }
}

export const cargarCanchasFiltradas = () => {
    return {
        type: CARGAR_CANCHAS_FILTRADAS
    }
}

export const seleccionarTurno = id => {
    return {
        type: SELECCIONAR_TURNO,
        id
    }
}