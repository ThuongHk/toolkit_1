import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: ''
    },
    reducers: {
        searchTodo: (state, action) => {
            state.search= action.payload;
            console.log(action);
        }
    }
})
export default searchSlice;