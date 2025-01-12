
import { useSelector } from 'react-redux';
import Todo from './Todo';

const DisplayTodos = () => {

const myTodos = useSelector(state => state.todo.value);

  return (
    
   
    <div>
       {
        (myTodos.length == 0)? <h3 className='text-center'>No Todos to Display....</h3> :
         myTodos.map(todo => <Todo key={todo.id} todo={todo}/>)
       }
    </div>
    
  )
}

export default DisplayTodos