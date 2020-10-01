import React, { useState } from 'react';
import Cell from './Cell'
import './Board.css'

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
  const [board, setBoard] = useState(createBoard());

  function createBoard() {
    let initialBoard = [];

    for (let y=0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceLightStartsOn)
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split('-').map(Number);

      const flipCell = (y, x, boardCopy) => {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const boardCopy = oldBoard.map(row => [...row]);

      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      return boardCopy;

    })
  }

  function hasWon() {
    return board.every(row => row.every(cell => !cell));
  }

  if (hasWon()) {
    return (
      <div className="Board-title">
        <div className="Winner">
          <span className="neon-orange">YOU</span>
          <span className="neon-blue">WIN!</span>
        </div>
      </div>
    ) 
  }

  let tblBoard = [];

  for(let y = 0; y < nrows; y++) {
    let row = [];
    for(let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <Cell 
          key={coord} 
          isLit={board[y][x]}
          flipCellsAroundMe={() => flipCellsAround(coord)}
        />
      );
    }
    tblBoard.push(<tr key={y}>{row}</tr>);
  }


  return (
    <div>
      <div className="Board-title">
        <div className="neon-orange">Lights</div>
        <div className="neon-blue">Out</div>
      </div>
        <table className="Board">
          <tbody>{tblBoard}</tbody>
        </table>
    </div>
  )
}

export default Board;