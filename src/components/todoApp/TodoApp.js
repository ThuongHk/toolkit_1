import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import todoSlice from './todoSlice';
import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';

function TodoApp(props) {
    const dispatch = useDispatch()
    const [addTodoInput, setAddTodoInput] = useState()
    const data1 = useSelector((state) => state.todoApp)
    // const data = useSelector(state => state.search.search)
    console.log(data1);
    const handleOnchangeAddTodo = (e)=>{
        setAddTodoInput(e.target.value)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(todoSlice.actions.addTodo({
            id: uuidv4(),
            name: addTodoInput,
            completed: false
        }))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <b>Thêm công việc: </b><br></br>
                <input type='text' value={addTodoInput} onChange={handleOnchangeAddTodo} />
                <button type='submit'>Thêm</button>
            </form>
            {/* <ul>{data1.map(todo=>(<li key={todo.id}>{todo.name}</li>))}</ul> */}
        </div>
    );
}

export default TodoApp;
