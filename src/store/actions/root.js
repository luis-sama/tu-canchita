import { SELECCIONAR_CANCHA, OCULTAR_MODAL_CANCHA, BUSCAR_CANCHA, CARGAR_CANCHAS_FILTRADAS, SELECCIONAR_TURNO, TRAER_CANCHAS, BUSCAR_CANCHA_PRECIO } from './actionTypes';

export const buscarCancha = nombre => {
    return {
        type: BUSCAR_CANCHA,
        nombre: nombre
    }
}

export const buscarCanchaPrecio = precio => {
    return {
        type: BUSCAR_CANCHA_PRECIO,
        precio: precio
    }
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

export const traerCanchas = () => {
    return {
        type: TRAER_CANCHAS,
    }
}