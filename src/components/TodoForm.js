import { Button, InputGroup, FormControl } from "react-bootstrap"
import * as Icons from 'react-bootstrap-icons';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { propTypes } from "react-bootstrap/esm/Image";

const TodoForm = (props) => {
    const [nombre, setNombre] = useState("");
    return (<div>
        <InputGroup>
            <FormControl placeholder="ingrese una tarea" onChange={ (evt) => { setNombre(evt.target.value)}}/>
            <Button variant="outline-primary"
            {...((nombre.length ===0)&& {disabled:true) siii quedo})}
            onClick={() => {
                props.agregar(nombre);
                setNombre('');
            }}>
                <Icons.Plus />
            </Button>
        </InputGroup>
        {nombre}
    </div>);
}

export default TodoForm;