import * as tipos from "../actions/action-types";

export default function(state, action) {
    let newState = { ...state};
    console.log("pasa por el reducer", action.type, action.id);
    switch(action.type) {
        case tipos.ACT_TAREA_REMOVE:
            newState.tareas = newState.tareas.filter((tarea) => tarea.id != action.id)
            break;
        case tipos.ACT_TAREA_AGREGAR:
            let maxid = Math.max(...state.tareas.map((tarea) => (tarea.id))) + 1;
            newState.tareas = [
                ...state.tareas,
                {
                    id: maxid,
                    nombre: action.nombre,
                    done: false
                }
            ]
            
        default: 
            break;
    }
    return newState;
}