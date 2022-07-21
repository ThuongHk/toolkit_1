import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoApp',
    initialState: [
        {id: 1, name: 'việc 1', completed: false},
        {id: 2, name: 'việc 2', completed: false}
    ],
    reducers: {
        addTodo: (state, action) => {           
            state.push(action.payload)
        
        }
    }
   
})
export default todoSlice;