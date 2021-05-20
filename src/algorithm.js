let points = [];

function addPointByClick(clientX, clientY) {
    const x = (clientX - 69) / 1302 * 100;
    const y = 100 - (clientY - 90) / 551 * 100;
    // alert(x + ', ' + y);
    insertPoint(x, y);
}

function insertPoint(x, y) {
    if (!points.some(el => x === el.x && y === el.y))
        points.push({
            x: x,
            y: y
        });
    else return false;
}

function randomize(quantity) {
    if (quantity < 3 || quantity > 10000) {
        alert("Enter number from 3 to 10000");
        return;
    }
    let i = 0;
    while (i < quantity) {
        insertPoint(Math.random() * 98 + 1, Math.random() * 96 + 2);
        i++;
    }
}

function clearPoints() {
    points = [];
}


function buildHull(points) {
    let upperArr = [],
        lowerArr = [],
        clonedPoints;

    clonedPoints = points.slice();

    clonedPoints.sort(function (a, b) {
        return a.x - b.x;
    });

    // calculate the upper hull
    for (let i = 0; i < clonedPoints.length; i++) {
        let point = clonedPoints[i];

        upperArr.push(point);
        removePoints(upperArr);
    }

    // calculate the lower hull
    for (let j = clonedPoints.length - 1; j >= 0; j--) {
        let point = clonedPoints[j];

        lowerArr.push(point);
        removePoints(lowerArr);
    }

    lowerArr.splice(0, 1);
    lowerArr.splice(lowerArr.length - 1, 1);

    // concat hulls
    const result = upperArr.concat(lowerArr);
    if (result.length < 3) alert('Collinear points!');
    return result;
}

function buildTriangle(hull) {
    if (hull.length < 3 ) return alert("Error");
    if (hull.length === 3) return hull;
    let triangle = [hull[0], hull[1], hull[2]]
    for (let i = 0; i < hull.length - 2; i++) {
        for (let j = 1; j < hull.length - 1; j++) {
            for (let k = 3; k < hull.length; k++) {
                if (area([hull[i], hull[j], hull[k]]) > area(triangle))
                    triangle = [hull[i], hull[j], hull[k]];
            }
        }
    }
    return triangle;
}

// function buildTriangleAlgo(hull) {
//     let triangle = [hull[0], hull[1], hull[2]]
//     for (let i = 0; i < hull.length; i++) {
//         if (area([hull[i], hull[j], hull[k]]) > area(triangle))
//             triangle = [hull[i], hull[j], hull[k]];
//     }
// }

const area = ([a, b, c]) => Math.abs(0.5 * (((a.x - c.x) * (b.y - c.y)) - ((a.y - c.y) * (b.x - c.x))));

function removePoints(arr) {
    while (arr.length >= 3 && !isTurnRight(arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1])) {
        arr.splice(arr.length - 2, 1);
    }
}

function isTurnRight(point1, point2, point3) {
    let x1 = point1.x,
        x2 = point2.x,
        x3 = point3.x,
        y1 = point1.y,
        y2 = point2.y,
        y3 = point3.y;

    return ((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)) > 0;
}

export {insertPoint, randomize, points, clearPoints, buildTriangle, buildHull, addPointByClick};