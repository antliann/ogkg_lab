import React, {useState} from 'react';
import './index.css';
import {insertPoint} from "./algorithm";

export function Form(props) {
    const [currX, setCurrX] = useState(false);
    const [currY, setCurrY] = useState(false);

    return (
        <form>
            <input
                type="number"
                placeholder="X"
                value={currX}
                onChange={(event) => setCurrX(+event.target.value)}/>
            <input
                type="number"
                placeholder="Y"
                value={currY}
                onChange={(event) => setCurrY(+event.target.value)}/>
            <button
                type="button"
                onClick={() => {
                    insertPoint(currX, currY);
                    setCurrX(false);
                    setCurrY(false);
                }}
            >
                Insert point
            </button>
            <br/>
            <input className="random" type="number" placeholder="Random points number"/>
            <button type="button">Randomize</button>
        </form>
    );
}