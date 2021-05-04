import React from 'react';
import './index.css';
import {insertPoint} from './algorithm';

function App() {
  return (
    <div className="App">
      <form>
        <input type="number" placeholder="X"/>
        <input type="number" placeholder="Y"/>
        <button onClick={() => insertPoint()}>Insert point</button>
          <br/>
          <input className="random" type="number" placeholder="Random points number"/>
        <button>Randomize</button>
      </form>
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
