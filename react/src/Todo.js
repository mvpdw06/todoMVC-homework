import React from 'react'

const Todo = ({ todo: { key, name, completed }, toggleTodo, deleteTodo }) => (
  <li className={'todo' + (completed ? ' completed' : '')}>
    <input
      type="checkbox"
      className="toggle"
      checked={completed}
      onChange={() => toggleTodo(key)}
    />
    <label>{name}</label>
    <button className="destroy" onClick={() => deleteTodo(key)} />
  </li>
)

export default Todo
