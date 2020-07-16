import React, {useContext, useState} from 'react';
import { GlobalContext } from '../context/stateManager';

export default function Todo(props) {

    const {dn, setDn} = useState(0)

    const { deleteTodo } = useContext(GlobalContext);

    const { todo } = props;

    return (
        <div className='box' id='todolist'>
            <div className='todo-display'>
                <div className='is-size-4'>{todo.desc}</div>
                <div className='done-btn button' className={dn == 1 ? 'done' : 'notdone'} onClick={() => setDn(1)}><i class="fas fa-check"></i></div>
            </div>
            <button className='delete' onClick={() => deleteTodo(todo.id)}></button>
        </div>
    )
}
