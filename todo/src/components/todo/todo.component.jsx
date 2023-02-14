import React, { useReducer } from 'react';

import * as constants from '../../data/constants';
import { Fragment } from 'react';
import './todo.styles.css';

const initialState = [...constants.TODOS];

function Todo() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
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
            <button>CLEAR TODOS</button>
        </Fragment>
    );
}
export default Todo;
