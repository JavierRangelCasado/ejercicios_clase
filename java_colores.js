function setup(){
    console.log("setup - frameCount:"+frameCount);

    createCanvas(200,200);
    background(125,125,125);
}

function draw(){
    console.log("draw - frameCount:"+frameCount);
    console.log("mouseX:" + mouseX + ",mouseY:" + mouseY);
   clear();
  
    if(mouseX<100 && mouseY<100){
        fill(color("green"));
    }else if(mouseX>100 && mouseY<100){
        fill(color("red"));
    }else if(mouseX<100 && mouseY>100){
        fill(color("blue"));
    }else{
        fill(color("yellow"));
    }
    ellipse(mouseX, mouseY, 50, 50);
}
