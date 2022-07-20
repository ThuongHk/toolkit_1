import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import searchSlice from './searchSlice';

function Search(props) {
    const [searchTodo, setSearchTodo] = useState()
    const dispatch = useDispatch();

    const handleOnchange = (e)=>{
        setSearchTodo(e.target.value)
        dispatch(searchSlice.actions.searchTodo(e.target.value))
    }
    return (
        <div>
            <b>Search: </b><br/><br/>
            <input type="text" value={searchTodo} onChange={handleOnchange} />
        </div>
    );
}

export default Search;