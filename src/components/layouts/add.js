import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/stateManager';

export default function Add() {

    const { addTodo } = useContext(GlobalContext);

    const [ desc, setDesc ] = useState('');

    let acceptValues = (e) => {
        e.preventDefault();
         const newtodo = {
            id : Math.floor(Math.random() * 100000),
            desc
        }

        addTodo(newtodo);

        setDesc('')
    }

    return (
        <>
            <div className='box' id='addtodo'>
                <form onSubmit={acceptValues}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter description..." />
                            <span className="icon is-small is-left">
                                <i className="fas fa-keyboard"></i>
                            </span>
                        </div>
                    </div>
                    <button className='button submit-btn is-link' type='submit'>Add</button>
                </form>
            </div>
        </>
    )
}
