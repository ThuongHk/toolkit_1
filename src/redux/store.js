import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../components/search/searchSlice';
import searchSlice from '../components/search/searchSlice';


const store = configureStore({
    reducer: {
        todoApp: todoSlice.reducer,
        search: searchSlice.reducer
    }
})
export default store;