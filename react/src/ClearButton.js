import React from 'react'

const ClearButton = ({ clearAllCompleted }) => (
  <button className="clear-completed" onClick={() => clearAllCompleted()}>
    Clear completed
  </button>
)

export default ClearButton
