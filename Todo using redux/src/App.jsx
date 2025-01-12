import { useState } from 'react'
import TodoApp from './components/TodoApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
     <TodoApp/>
    </Provider>
  )
}

export default App
