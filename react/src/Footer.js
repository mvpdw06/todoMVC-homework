import React from 'react'

import ClearButton from './ClearButton'

const Footer = ({
  displayCount,
  changeFilter,
  clearAllCompleted,
  canDisplayClearButton
}) => (
  <div className="footer">
    <span className="todo-count">
      <strong>{displayCount} item left.</strong>
    </span>
    <ul className="filters">
      <li onClick={() => changeFilter('All')}>
        <a>All</a>
      </li>
      <li onClick={() => changeFilter('Active')}>
        <a>Active</a>
      </li>
      <li onClick={() => changeFilter('Completed')}>
        <a>Compeleted</a>
      </li>
    </ul>
    {canDisplayClearButton ? (
      <ClearButton clearAllCompleted={clearAllCompleted} />
    ) : null}
  </div>
)

export default Footer
