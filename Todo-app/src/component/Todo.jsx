import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';

const Todo = ({ todo }) => {

  const {myTodos, setMyTodos} = useContext(TodoContext);

  const [currentStatus,setCurrentStatus] = useState(todo.isCompleted);

  const deleteMyTodo = (id) => {
      if(confirm('are you sure you want to delete this todo ?')){
        setMyTodos(myTodos.filter(todo => todo.id != id));
      }
      

  }

  const changeTodoStatus =() => {
    setCurrentStatus(!currentStatus)

    setMyTodos(myTodos.map(obj => {
      if(obj.id == todo.id){
        return{
          ...obj,
          isCompleted: !obj.isCompleted
        }
      }else {
        return obj;
      }
    }))

  }

  return (
    <div className={`d-flex justify-content-between bg-${currentStatus ? 'success' : 'info'} mb-2 p-2 rounded-3 fs-5`}>
      <div className="todo-text">{todo.desc}</div>

      <div className="todo-buttons">
        <button type="button" className='btn btn-warning btn-sm me-2' onClick={changeTodoStatus} > {currentStatus ? 'Completed' : 'Mark Complete'}</button>
        <button type="button" className='btn btn-danger btn-sm' onClick={() => deleteMyTodo(todo.id)}>Delete</button>
      </div>

    </div>
  )
}

export default Todo