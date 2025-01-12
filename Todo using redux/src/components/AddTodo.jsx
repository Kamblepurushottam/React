import React, {  useState } from 'react'
import { addNewTodo } from '../features/todoSlice';
import { useDispatch } from 'react-redux';


const AddTodo = () => {

    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch()
    const Add = () =>{
       const todo =  {
            id : Date.now(),
            desc : userInput,
            status : false
        }
      //  console.log(todo);
        dispatch(addNewTodo(todo))
        setUserInput('')
    }

    return (
        <div className='d-flex justify-content-center align-items-center gap-2 mb-3'>
            <div className='w-75'>

                <input type="text" className='form-control border border-dark' onChange={e => setUserInput(e.target.value)} value={userInput} placeholder='Add todo here....' />
            </div>
            <div>
                <button type="button" className='btn btn-info' onClick={Add} >Add Todo</button>
            </div>
        </div>
    )
}

export default AddTodo