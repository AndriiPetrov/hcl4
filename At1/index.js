function canvas1() {
    var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext("2d");

    var gradient = context1.createRadialGradient(200, 125, 100, 200, 125, 200);
    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1, "green");
    context1.fillStyle = gradient;
    context1.fillRect(0, 0, 400, 250);
}

if(window.addEventListener){
    window.addEventListener("load", canvas1, true);
}

function canvas2(){
    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext('2d');

    var paint = new Image();
    paint.src="tile.jpg";
    paint.onload= function(){
        context2.fillStyle= context2.createPattern(paint, "repeat");
        context2.fillRect(0, 0, 400, 250);
    }
}
if(window.addEventListener){
    window.addEventListener("load", canvas2, true);
}
// function draw() {
//     // if (!Modernizr.canvas) return;

//     var canvas = document.getElementById("canvas");
//     var context = canvas.getContext("2d");

//     // Создание радиального градиента.
//     var gradient = context.createRadialGradient(150, 150, 100, 150, 150, 200);
//     gradient.addColorStop(0, "Orange");
//     gradient.addColorStop(1, "Red");
//     context.fillStyle = gradient;
//     context.fillRect(0, 0, 300, 300);
// }

// if (window.addEventListener)
//     window.addEventListener("load", draw, true);