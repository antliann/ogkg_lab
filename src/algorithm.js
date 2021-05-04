import React from 'react';

let points = [];

function insertPoint(x, y) {
    if (!points.some(el => x === el.x && y === el.y))
        points.push({
            x: x,
            y: y
        });
    console.log(points);
}

function drawPoints() {

}

export {insertPoint, points};