function toRadian(angle) {
    return angle * Math.PI / 180;
}

function drawSnowFlakeLine(context, x0, y0, angle0, length, deep) {
    if (deep == 0) {
        let x1 = x0 + length * Math.cos(angle0),
            y1 = y0 - length * Math.sin(angle0);

        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
    } else {
        let angles = Array(0, -60, 120, -60);
        let xi = x0,
            yi = y0,
            anglei = angle0,
            newLength = length / 3;
        for(let i=0;i<angles.length;i++) {
            anglei+=toRadian(angles[i]);
            drawSnowFlakeLine(context, xi, yi, anglei, newLength, deep - 1);
            xi = xi + newLength * Math.cos(anglei);
            yi = yi - newLength * Math.sin(anglei);
        }
    }
}

function drawSnowFlake(context, width, height, ratius) {
    let angles = Array(90, 210, 330),
        centerX = width / 2,
        centerY = height / 2;

    context.beginPath();

    for(var i = 0; i < angles.length; i++) {
        let radAngle = toRadian(angles[i]);
            x0 = centerX + ratius * Math.cos(radAngle),
            y0 = centerY - ratius * Math.sin(radAngle),
            angle0 = radAngle + 5 / 6 * Math.PI,
            length = Math.sqrt(3) * ratius;

        drawSnowFlakeLine(context, x0, y0, angle0, length, 4);
    }

    context.strokeStyle = "#1670ff";
    context.stroke();
}