import React, { useState } from 'react'

import Cell from './Cell'

function Board(props) {
    const [board, setBoard] = useState([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
    const [statusText, setStatusText] = useState("Test")

    const handleChange = (row, column, newNumber) => {
        let copy = [...board];
        copy[row][column] = newNumber;
        setBoard(copy);
        //console.log(board);
    };

    const [initial, setInitial] = useState([[true, false, true, false], [true, false, true, false], [true, false, true, false], [true, false, false, false]]);

    const validate = board => {
        let isValid = true;
        for (let i = 0; i < 4; i++) {
            const horizontal = new Set();
            const vertical = new Set();
            const square = new Set();
            for (let j = 0; j < 4; j++) {
                horizontal.add(board[i][j]);
                vertical.add(board[j][i]);
                square.add(
                    board[2 * (i % 2) + (j % 2)][2 * Math.floor(i / 2) + Math.floor(j / 2)]
                );
            }
            horizontal.delete(0);
            vertical.delete(0);
            square.delete(0);
            if (horizontal.size !== 4 || vertical.size !== 4 || square.size !== 4) {
                isValid = false;
            }
        }
        return isValid;
    };

    const submit = () => {
        const isValid = validate(board);
        setStatusText(`${isValid ? "Board is Valid" : "Board id not valid"}`)
        alert(isValid)

    }


    return (
        <div>
            <div className="board">
                {
                    board.map((row, i) => row.map((number, j) =>
                        <Cell
                            key={`cell-${i}-${j}`}
                            number={number}
                            isInitial={initial[i][j]}
                            onChange={newNumber => {
                                //console.log({ newNumber })
                                handleChange(i, j, newNumber)
                            }}
                        />))
                }

            </div >
            <button
                onClick={submit}
            >Submit</button>
            <div>{statusText}</div>
        </div>
    );
}

export default Board;