import React from 'react';
import './index.css';

export function Field(props) {
    return (
        <div className="field">
            <Triangle triangle={props.triangle}/>
            <Hull hull={props.hull}/>
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

function Triangle({triangle}) {
    return (triangle.length === 3) ?
        <div>
            <svg width="90vw" height="80wh">
                <line x1={triangle[0].x + '%'} y1={100 - triangle[0].y + '%'}
                      x2={triangle[1].x + '%'} y2={100 - triangle[1].y + '%'}
                      stroke="red"/>
            </svg>
            <svg width="90vw" height="80wh">
                <line x1={triangle[1].x + '%'} y1={100 - triangle[1].y + '%'}
                      x2={triangle[2].x + '%'} y2={100 - triangle[2].y + '%'}
                      stroke="red"/>
            </svg>
            <svg width="90vw" height="80wh">
                <line x1={triangle[2].x + '%'} y1={100 - triangle[2].y + '%'}
                      x2={triangle[0].x + '%'} y2={100 - triangle[0].y + '%'}
                      stroke="red"/>
            </svg>
        </div> :
        null;
}

function Hull({hull}) {
    return (hull.length > 2) ?
        <div>
            {hull.map((hull, index) =>
                (hull.length === index + 1) ?
                    <svg key={'hull' + index} width="90vw" height="80wh">
                        <line x1={hull[index].x + '%'} y1={100 - hull[index].y + '%'}
                              x2={hull[index + 1].x + '%'} y2={100 - hull[index + 1].y + '%'}
                              stroke="blue"/>
                    </svg> :
                    <svg key={'hull' + index} width="90vw" height="80wh">
                        <line x1={hull[index].x + '%'} y1={100 - hull[index].y + '%'}
                              x2={hull[0].x + '%'} y2={100 - hull[0].y + '%'}
                              stroke="blue"/>
                    </svg>
            )}
        </div> :
        null;
}
