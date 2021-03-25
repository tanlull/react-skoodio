import './App.css';

import React, { useState } from 'react'

function Cell(props) {
  const [number, setNumber] = useState(1)

  return (
    <div onClick={(e => {
      setNumber(number + 1)
    })}
      className={`cell ${props.isInitial ? 'initial' : ''}`
      }
    > { props.number != 0 && props.number}</div >
  );
}

function Board(props) {
  const [board, setBoard] = useState([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
  const [initial, setInitial] = useState([[true, false, true, false], [true, false, true, false], [true, false, true, false], [true, false, false, false]]);

  return (
    <div className="board">
      {
        board.map((row, i) => row.map((number, j) => <Cell key={`cell-${i}-${j}`} number={number} isInitial={initial[i][j]} />))
      }

    </div >
  );
}

function App() {
  return (
    <div className="App">
      <Board />
    </div >
  );
}

export default App;
