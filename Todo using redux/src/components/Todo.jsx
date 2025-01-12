import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editMyTodo, markComplete} from '../features/todoSlice'

const Todo = ({ todo }) => {

  const [currentStatus,setCurrentStatus] = useState(todo.state)
  const [isEditing,setIsEditing] = useState(false)
  const [editText,setEditText] = useState(todo.desc)
  const dispatch = useDispatch()

  const TodoDelete = () =>{
    if(confirm('are you sure you want to delete this todo ?')){
      dispatch(deleteTodo(todo.id));
    }
  }

  const Marked = () => {
    dispatch(markComplete(todo.id));
    setCurrentStatus(!currentStatus)
  }

  const handleUpdate = ()=> {
    dispatch(editMyTodo({
      id :todo.id,
      editText
    }))
    setIsEditing(!isEditing)
  }


  return (
    <div className={`d-flex justify-content-between bg-${currentStatus ? 'success' : 'info'} mb-2 p-2 rounded-3 fs-5`}>
      <div className="todo-text">
        {
          isEditing ? <input type='text' name='' id='' className='form-control' onChange={(e) => setIsEditing(e.target.value)}  value={editText}/> : todo.desc
        };
      
      </div>

      <div className="todo-buttons">
        {isEditing ? 
      <button type="button" className='btn btn-light  btn-sm me-2' 
      onClick={handleUpdate}>Update</button>
        :
       <button type="button" className='btn btn-light  btn-sm me-2'
        onClick={() => setIsEditing(!isEditing)}>Edit</button>
        }
        <button type="button" className='btn btn-warning btn-sm me-2' onClick={Marked} > {currentStatus ? 'Completed' : 'Mark Complete'}</button>
        <button type="button" className='btn btn-danger btn-sm' onClick={TodoDelete}>Delete</button>
      </div>

    </div>
  )
}

export default Todo