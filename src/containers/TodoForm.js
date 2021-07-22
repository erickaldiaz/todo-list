import TodoForm from "../components/TodoForm";
import { connect } from "react-redux";
import { actAddTarea } from "../actions/action-creators"

function mapDispatchToProps(dispatch) {
    return {
        agregar : (nom)=> {
            // alert(`se agrega a ${nom}`);
            const action = actAddTarea(nom);
            dispatch(action);
        }
    }
}

export default  connect (null, mapDispatchToProps)(TodoForm);