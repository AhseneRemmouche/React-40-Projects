import React, { useReducer, useRef } from 'react';

import * as constants from '../../data/constants';
import { Fragment } from 'react';
import './todo.styles.css';

function Todo() {
    const inputRef = useRef();
    const initialState = [...constants.TODOS];

    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO': {
                return action.name.length
                    ? [
                          ...state,
                          {
                              id: state.length
                                  ? Math.max(...state.map((todo) => todo.id)) +
                                    1
                                  : 0,
                              name: action.name,
                              complete: false,
                          },
                      ]
                    : state;
            }
            default: {
                return state;
            }
        }
    };
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    function addTodo(event) {
        event.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            name: inputRef.current.value,
            complete: false,
        });
        inputRef.current.value = '';
    }
    return (
        <Fragment>
            <h2>Todo List</h2>
            <div className='todo-input'>
                <form onSubmit={addTodo}>
                    <input
                        ref={inputRef}
                        type='search'
                        id='add-todo'
                        placeholder='Add Todo'
                    />
                </form>
            </div>
            <div className='column-container'>
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        alt={todo.id}
                        className='columnitem'>
                        <div className='flex-container'>
                            <div className='too-name'>{todo.name}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button>CLEAR TODOS</button>
        </Fragment>
    );
}
export default Todo;
