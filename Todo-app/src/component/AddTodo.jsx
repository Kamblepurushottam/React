import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';

const AddTodo = () => {

    const [userInput, setUserInput] = useState('');
    const {myTodos, setMyTodos} = useContext(TodoContext);

    const addMyTodo = () => {
        let newTodo = { id: Date.now(), desc: userInput, isCompleted: false }
        setMyTodos([...myTodos, newTodo])
        setUserInput('')
    }

    return (
        <div className='d-flex justify-content-center align-items-center gap-2 mb-3'>
            <div className='w-75'>

                <input type="text" className='form-control border border-dark' onChange={e => setUserInput(e.target.value)} value={userInput} placeholder='Add todo here....' />
            </div>
            <div>
                <button type="button" className='btn btn-info' onClick={addMyTodo}>Add Todo</button>
            </div>
        </div>
    )
}

export default AddTodo