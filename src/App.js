import React, {useState} from 'react';
import './index.css';
import {Form} from './Form';
import {Field} from "./Field";
import {buildHull, buildTriangle} from "./algorithm";

function App() {
    const [points, setPoints] = useState([]);
    const [hull, setHull] = useState([]);
    const [triangle, setTriangle] = useState([]);

    return (
        <div className="App">
            <Form
                setPoints={(pointsForSet) => setPoints([...pointsForSet])}
                clearHulls={() => {
                    setHull([]);
                    setTriangle([]);
                }}
            />
            <button className="main-btn" onClick={() => {
                if (points.length < 3)
                    alert('You must insert 3 points at least');
                else {
                    const hullPoints = buildHull(points)
                    setHull([...hullPoints]);
                    (hullPoints.length > 2) && setTriangle([...buildTriangle(hullPoints)]);
                }
            }}>
                Build convex hull and inscribe triangle
            </button>

            <Field
                setPoints={(pointsForSet) => setPoints([...pointsForSet])}
                clearHulls={() => {
                    setHull([]);
                    setTriangle([]);
                }}
                points={points}
                hull={hull}
                triangle={triangle}
            />

            <div className="num num100y">100</div>
            <div className="num num0">0</div>
            <div className="num num100x">100</div>
        </div>
    );
}

export default App;
