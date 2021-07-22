import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import * as Icons from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.css";

class TodoList extends Component {
    render() {
        return (<ListGroup>
            {
                this.props.tareas.map((tarea) => (
                    <ListGroup.Item key={tarea.id}>
                        <Fade left>
                            <div>
                                {tarea.nombre}
                                <Button variant="danger" className="float-end"
                                    onClick={ ()=>{ this.props.eliminar(tarea.id) }}>
                                    <Icons.Trash />
                                </Button>
                            </div>
                        </Fade>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>);
    }
}

export default TodoList;