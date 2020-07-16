import React, {useContext} from 'react';
import { GlobalContext } from '../context/stateManager';
import Todo from './todo';

export default function TodoList() {

    const { todos } = useContext(GlobalContext);

    return (
        <>
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo}/>
                ))
            }
        </>
    )
}
