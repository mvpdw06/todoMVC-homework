import React from 'react'

import AddButton from './AddButton'

const Header = ({ addTodo }) => (
  <div className="Header">
    <div>
      <h1>React todos</h1>
      <AddButton addTodo={addTodo} />
    </div>
  </div>
)

export default Header
