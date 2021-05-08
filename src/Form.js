import React, {useState} from 'react';
import './index.css';
import {insertPoint, points, randomize, clearPoints} from "./algorithm";

export function Form(props) {
    const [currX, setCurrX] = useState(false);
    const [currY, setCurrY] = useState(false);
    const [quantity, setQuantity] = useState(false);

    return (
        <form>
            <input
                type="number"
                placeholder="X"
                min="0"
                value={currX}
                onChange={(event) => setCurrX(+event.target.value)}/>
            <input
                type="number"
                placeholder="Y"
                min="0"
                value={currY}
                onChange={(event) => setCurrY(+event.target.value)}/>
            <button
                type="button"
                onClick={() => {
                    if (currX === false || currY === false || currX < 0 || currX > 100 || currX < 0 || currY > 100) {
                        alert('Please, enter numbers from 0 to 100');
                        return;
                    }
                    props.clearHulls();
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
                min="3"
                max="10000"
                value={quantity}
                onChange={(event) => setQuantity(+event.target.value)}
            />
            <button type="button" onClick={() => {
                props.clearHulls();
                clearPoints();
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
                    props.clearHulls();
                    clearPoints();
                }}>
                Clear all
            </button>
        </form>
    );
}
