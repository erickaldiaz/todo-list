import TodoList from "../components/TodoList";
import * as creators from "../actions/action-creators";
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        tareas : state.tareas
    }
}

function mapDispatchToProps(dispatch){
    return {
        eliminar : (id) => { 
            let action = creators.actRemoveTarea(id);
            dispatch(action);
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
