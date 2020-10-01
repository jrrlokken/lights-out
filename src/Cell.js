import React from 'react'
import "./Cell.css"

const Cell = ({ flipCellsAroundMe, isLit=false }) => {
  const classes = "Cell" + (isLit ? " Cell-lit" : "");

  return (
    <td className={classes} onClick={flipCellsAroundMe} />
  )
}


export default Cell