import React from 'react';

import * as constants from '../../data/constants';
import { Fragment } from 'react';
import './todo.styles.css';

const initialState = [...constants.TODOS];

function Todo() {
    console.log(initialState);
    return (
        <Fragment>
            <h2>Todo List</h2>
            <div className='todo-input'>
                <form>
                    <input
                        type='search'
                        id='add-todo'
                        placeholder='Add Todo'
                    />
                </form>
            </div>
            <ul className='column-container'>
                {initialState.map((todo) => (
                    <li
                        key={todo.id}
                        alt={todo.id}
                        className='columnitem'>
                        <div className='flex-container'>
                            <div className='too-name'>{todo.name}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
export default Todo;
