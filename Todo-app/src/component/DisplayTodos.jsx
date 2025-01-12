import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import Todo from './Todo';

const DisplayTodos = () => {

    const {myTodos} = useContext(TodoContext);


  return (
    <div>
        {
            myTodos.map(todo => <Todo key={todo.id} todo={todo} />)
        }
    </div>
  )
}

export default DisplayTodos