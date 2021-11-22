import React from "react";
import Button from "../Button";

export default ({ todo, callbackBorrado, callbackCheckbox }) => {
    return (
        <li className="todo-container">
            <input type="checkbox" checked={todo.checked} onChange={() => callbackCheckbox({...todo, checked: !todo.checked}) } /> 
            <span> {todo.title}</span>
            <Button onClick={() => callbackBorrado(todo)} title={' Eliminar '} className={'todo-delete'} />

            {/* <button onClick={() => callbackBorrado(todo)}> X </button> */}
        </li>
    )
}