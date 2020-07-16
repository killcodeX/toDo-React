import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// Initial State
const initialState = {
    todos: [
        { id : 1, desc : 'Todo 1'},
        { id : 2, desc : 'Todo 2'},
        { id : 3, desc : 'Todo 3'},
        { id : 4, desc : 'Todo 4'},
     ]
} 

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Componenet
export const StateManager = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteTodo(id){
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    }

    function addTodo(todo){
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        });
    }

    return(
        <GlobalContext.Provider value={{ 
            todos : state.todos,
            deleteTodo,
            addTodo
        }}>
            { children }
        </GlobalContext.Provider>
    )
}