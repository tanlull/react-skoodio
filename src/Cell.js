import React, { useState } from 'react'

function Cell(props) {
    // const [number, setNumber] = useState(1)

    return (
        <div onClick={(e => {
            if (props.isInitial) {
                return
            }
            props.onChange((props.number + 1) % 5)
        })}
            className={`cell ${props.isInitial ? 'initial' : ''}`
            }
        > { props.number !== 0 && props.number}</div >
    );
}


export default Cell;