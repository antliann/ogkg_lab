import React from 'react';
import './index.css';
import {addPointByClick, points} from "./algorithm";

export function Field(props) {
    return (
        <div className="field" onClick={({clientX, clientY}) => {
            addPointByClick(clientX, clientY);
            props.clearHulls();
            props.setPoints(points);
        }}>
            <Hull hull={props.hull}/>
            <Triangle triangle={props.triangle}/>
            {props.points.map((point, index) => {
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
            {hull.map((point, index) => {
                    return (hull.length !== index + 1) ?
                        <svg key={'hull' + index} width="90vw" height="80wh">
                            <line x1={point.x + '%'} y1={100 - point.y + '%'}
                                  x2={hull[index + 1]?.x + '%'} y2={100 - hull[index + 1]?.y + '%'}
                                  stroke="blue"/>
                        </svg> :
                        <svg key={'hull' + index} width="90vw" height="80wh">
                            <line x1={point.x + '%'} y1={100 - point.y + '%'}
                                  x2={hull[0]?.x + '%'} y2={100 - hull[0]?.y + '%'}
                                  stroke="blue"/>
                        </svg>;
                }
            )}
        </div> :
        null;
}
