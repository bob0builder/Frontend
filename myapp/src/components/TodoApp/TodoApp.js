import React, { useEffect, useReducer, useState } from 'react';

const intialState = {
    todos: [],
    filter: 'all' // all active, completed
};

const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos,{
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]
            };
        case 'TOOGLE_TODO':
            return{
                ...state,
                todos: state.todo.map(todo =>
                    todo.is === action.payload
                       ? {...todo, completed: !todo.completed}
                       : todo
                )
            };
        case 'DELETE_TODO':
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case 'SET_FILTER':
            return{
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }

};


const TodoApp = () =>{
    const[state, dispatch] = useReducer(todoReducer, initialState);
    const[inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if(inputValue.trim()){
            dispatch({type: 'ADD_TODO', payload: inputValue});
            setInputValue('')
        }
    };

    const filteredTools = state.tools.filter(todo=> {
        if(state.filter === 'active') return !todo.completed
        if(state.filter ==='completed') return todo.completed;
        return true;
    });

    return(
        <div>
            <h2>useReducer todo app</h2>
            <div>
                <input value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Add a new todo"
                 />
                <button onCLick={addTodo}>Add</button>
            </div>
            <div>
                <button onClick={()=> dispatch({type: 'SET_FILTER', payload: 'all'})}>
                    All
                </button>
                <button onClick={()=> dispatch({type: 'SET_FILTER', payload: 'active'})}>
                    Active
                </button>
                <button onClick={()=> dispatch({type: 'SET_FILTER', payload: 'completedl'})}>
                    Completed
                </button>
            </div>
            <ul>
                {filteredTools.map(todo=>(
                    <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                        <button onClick={()=> dispatch({type: 'ToGGLE_TODO', payload: todo.id})}>
                            {todo.completed ? 'undo' : 'complete'}
                        </button>
                        <button onClick={()=> dispatch({type: 'DELETE_TODO', payload: todo.id})}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
    