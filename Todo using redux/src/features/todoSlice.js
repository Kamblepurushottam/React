import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todo" ,
    initialState : {
        value :[{
            id : 8524691532 ,
            desc : 'this todo my initial state' ,
            status : false ,
        }]
    },
    reducers : {
        addNewTodo : (state , action) =>{
            state.value.push(action.payload);
        },

        deleteTodo : (state , action) =>{
            const newArr = state.value.filter(todo => todo.id != action.payload); 
            state.value = newArr
        },

        markComplete : (state , action) =>{
          // const todo = state.value.find(todo => todo.id != action.payload); 
            state.value = state.value.map(todo => {
              if (todo.id != action.payload){
                return{
                    ...todo,
                    status :!todo.status
                }
            }else{
                    return{
                       ...todo
                    }
                }   
            })
        },

        editMyTodo :(state, action) =>{
            state.value = state.value.map(todo => {
                if (todo.id != action.payload){
                  return{
                      ...todo,
                      desc :!todo.status
                  }
              }else{
                      return{
                         ...todo
                      }
                  }   
              })
        }



    }
})

export const {addNewTodo , deleteTodo ,markComplete ,editMyTodo} = todoSlice.actions;
export default todoSlice.reducer;