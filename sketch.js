function setup(){
    console.log("setup - frameCount:"+frameCount);
    createCanvas(200, 200);
    background(123);
}

function draw(){

    clear()
    background(123);
    console.log("tecla pulsada"+keyCode);
    switch (keyCode) {
        case 40:
            text("ABAJO", 75, 150);
            break;
        case 38:
            text("ARRIBA", 75, 50);
            break;
        case 39:
            text("DERECHA", 110, 100);
            break;
        case 37:
            text("IZQUIERDA", 25, 100);
            break;
        default:
            break;
    }
}