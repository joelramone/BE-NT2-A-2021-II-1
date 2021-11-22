import './App.css';
import { useState } from 'react';

import Todo from "./components/Todo";
import Counters from "./components/Counters";
import Button from "./components/Button";

function App() {
  const [todos, updateTodos] = useState([
    // {
    //   id: 1,
    //   title: 'todo1',
    //   checked: false
    // },
    // {
    //   id: 2,
    //   title: 'todo2',
    //   checked: true
    // }
  ])

  const addTodo = () => {
    const title = prompt('Que tareas vas a realizar?')
    if (title){
      const todo = {
        id: new Date().getTime(),
        title,
        checked: false
      }

      console.log(todo)

      updateTodos([...todos, todo])


    }
  }

  const borrarTodo = (todo)=>{
    console.log("Voy a borrar el ID ", todo)
    updateTodos(todos.filter(item => item.id !== todo.id))
  }

  const clickCheckbox = (todo) => {
    console.log('Actualizando el valor de este todo: ', todo)
    updateTodos(todos.map(item => (todo.id === item.id) ? todo: item))
  }

  return (
    <div className="container center">
      <h1 className="center title">TODO App</h1>

     <Counters todos={todos} />

      
      {/* <button className="button center" onClick={addTodo} >Agregar Tarea</button> */}
      <Button className="button center" onClick={addTodo} title={'New TODO'} />



      <ul id="todo-list" className="todo-list">
        {
          todos.map(item => (<Todo key={item.id} todo={item} callbackBorrado={borrarTodo} callbackCheckbox={clickCheckbox} />))
        }
      </ul>
    </div>
  );
}

export default App;
