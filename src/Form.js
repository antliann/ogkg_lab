import React, {useState} from 'react';
import './index.css';
import {insertPoint, points, randomize, clear} from "./algorithm";

export function Form(props) {
    const [currX, setCurrX] = useState(false);
    const [currY, setCurrY] = useState(false);
    const [quantity, setQuantity] = useState(false);

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
                    if (currX === false || currY === false || currX < 0 || currX > 100 || currX < 0 || currY > 100) {
                        alert('Please, enter numbers from 0 to 100');
                        return;
                    }
                    insertPoint(currX, currY);
                    props.setPoints(points);
                    setCurrX(false);
                    setCurrY(false);
                }}
            >
                Insert point
            </button>
            <br/>
            <input
                className="random"
                type="number"
                placeholder="Random points quantity"
                value={quantity}
                onChange={(event) => setQuantity(+event.target.value)}
            />
            <button type="button" onClick={() => {
                randomize(quantity);
                props.setPoints(points);
            }}>
                Randomize
            </button>
            <button
                type="button"
                onClick={() => {
                    props.setPoints([]);
                    setQuantity(false);
                    clear();
                }}>
                Clear all
            </button>
        </form>
    );
}
