import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TodoApp from './component/TodoApp'
import TodoContext from './context/TodoContext'
import { useState } from 'react'

function App() {
  
  const [myTodos,setMyTodos] = useState([
    {id : 1, desc : 'my first todo', isCompleted : false},
    {id : 2, desc : 'my second todo', isCompleted : false},
    {id : 3, desc : 'my third todo', isCompleted : false},
  ]);

  return (
    <TodoContext.Provider value={{myTodos,setMyTodos}}>
     <TodoApp/>
    </TodoContext.Provider>
  )
}

export default App
