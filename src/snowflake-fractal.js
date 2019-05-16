function toRadian(angle) {
    return angle * Math.PI / 180;
}

function drawSnowFlakeLine(context, x0, y0, angle0, length) {
    let x1 = x0 + length * Math.cos(angle0),
        y1 = y0 - length * Math.sin(angle0);

    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.stroke();
}

function drawSnowFlake(context, width, height, ratius) {
    let angles = Array(90, 210, 330),
    centerX = width / 2,
    centerY = height / 2;

    for(var i = 0; i < angles.length; i++) {
        let radAngle = toRadian(angles[i]);
        let x0 = centerX + ratius * Math.cos(radAngle);
        let y0 = centerY - ratius * Math.sin(radAngle);
        let angle0 = radAngle + 5 / 6 * Math.PI;
        let length = Math.sqrt(3) * ratius;

        drawSnowFlakeLine(context, x0, y0, angle0, length);
    }
}