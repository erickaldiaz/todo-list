import * as tipos from "../actions/action-types";

export function actRemoveTarea(id){
    return {
        type : tipos.ACT_TAREA_REMOVE,
        id : id
    }
}
export function actAddTarea(nombre) {
    return {
        type: tipos.ACT_TAREA_AGREGAR,
        nombre: nombre
    }
}