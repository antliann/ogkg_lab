import React, {useState} from 'react';
import './index.css';
import {Form} from './Form';
import {Field} from './Field';

function App() {
    const [points, setPoints] = useState([]);

    return (
        <div className="App">
            <Form setPoints={(pointsForSet) => setPoints(pointsForSet)} />
            <button className="main-btn">
                Build convex hull and inscribe triangle
            </button>

            <Field points={points}/>

            <div className="num num100y">100</div>
            <div className="num num0">0</div>
            <div className="num num100x">100</div>
        </div>
    );
}

export default App;
