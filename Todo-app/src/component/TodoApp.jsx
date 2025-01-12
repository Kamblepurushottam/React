import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodos from './DisplayTodos'

const TodoApp = () => {
  return (
    <div className='container border border-black '>
        <h2 className="text-center my-3">My Todo List</h2>
        <AddTodo />
        <DisplayTodos />
    </div>
  )
}

export default TodoApp