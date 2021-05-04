import React from 'react';
import './index.css';
import {Form} from './Form';

function App() {
    return (
        <div className="App">
            <Form/>
            <button className="main-btn">
                Build convex hull and inscribe triangle
            </button>
            <br/>
            <div className="field">

            </div>
            <div className="num num100y">
                100
            </div>
            <div className="num num0">
                0
            </div>
            <div className="num num100x">
                100
            </div>
        </div>
    );
}

export default App;
