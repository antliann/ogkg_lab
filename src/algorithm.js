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
        insertPoint(Math.random() * 100, Math.random() * 100);
        i++;
    }
}

function clear() {
    points = [];
}

export {insertPoint, randomize, points, clear};
