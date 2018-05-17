function canvas1(){
    var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext("2d");

    // Make a figure
    context1.save();

    context1.translate(100, 100);

    context1.beginPath();
    // context1.moveTo(0, 0);
    context1.lineTo(0, 100);
    context1.lineTo(100, 100);
    context1.lineTo(100, 0);
    context1.closePath();

    // context1.stroke();
    context1.restore();

    //Make a style
    context1.fillStyle = "rgba(250, 0, 0 , 0.5)";
    context1.fill()

    context1.lineWidth = 8;
    context1.strokeStyle="rgba(200, 200, 200, 1)";
    context1.lineJoin = "miter";
    context1.stroke();
}

canvas1();