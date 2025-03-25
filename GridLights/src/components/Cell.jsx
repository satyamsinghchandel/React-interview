import React from 'react'

function Cell({label, filled, onClick, isDisabled}) {
  return (
    <button
    type='button'
    aria-label={label}
    onClick={onClick}
    disabled={isDisabled}
    className={filled?'cell cell-activated':'cell'}    
    />
  )
}

export default Cell
