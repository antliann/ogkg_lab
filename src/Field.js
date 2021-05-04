import React from 'react';
import './index.css';

export function Field(props) {
    return(
        <div className="field">
            {props.points.map((point, index) => {
                console.log(index);
                return (<div
                    key={index}
                    id={index}
                    className="point"
                    style={{
                        left: point.x + '%',
                        bottom: point.y + '%'
                    }}
                />);
                }
            )}
        </div>
    );
}
