import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo/>
            ))}
        </ul>
    )
}
