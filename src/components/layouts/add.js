import React, { useState } from 'react';

export default function Add() {

    const [addtodo, setAddtodo ] = useState('');

    const submit = (e) => {
        e.preventDefaut();
    }

    return (
        <>
            <div className='box'>
                <form onSubmit={submit}>
                    <div class="field">
                        <label class="label">Enter Todo</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" value={addtodo} onChange={(e) => setAddtodo(e.target.value)} placeholder="Enter todo..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-keyboard"></i>
                            </span>
                        </div>
                    </div>
                </form>
                <button className='button submit-btn is-link' type='submit'>Add</button>
            </div>
        </>
    )
}
