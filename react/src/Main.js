import React from 'react'

import Todo from './Todo'

const Main = ({ todos, toggleTodo, deleteTodo, toggleAllCompleted }) => (
  <div className="main">
    <input
      type="checkbox"
      className="toggle-all"
      onClick={toggleAllCompleted}
    />
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={`${todo.key}`}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  </div>
)

export default Main
