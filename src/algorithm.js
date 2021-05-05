let points = [];

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

    points = []
    let i = 0;
    while (i < quantity) {
        insertPoint(Math.random() * 90 + 5, Math.random() * 90 + 5);
        i++;
    }
}

function clear() {
    points = [];
}

function buildHull(points) {

}

function buildTriangle(hull) {

}

export {insertPoint, randomize, points, clear, buildTriangle, buildHull};
