import {createStore} from "redux";
import reducer from "../reducers/reducer";

const defaultData = {
    tareas : [
        { id: 1, nombre: "Comprar comida para Panxite", done: false },
        { id: 2, nombre: "Practica de Redux", done: false },
        { id: 3, nombre: "Lavar ropa", done: false },
        { id: 4, nombre: "Terminar curso", done: false }
      ]
}

export default createStore(reducer, defaultData);