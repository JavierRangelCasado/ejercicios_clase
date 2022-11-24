var n = 100;
var x = 20;
var y = 20;
function setup(){
    console.log("setup - frameCount:"+frameCount);
    createCanvas(800,500);
    background("grey");
}


function draw(){
    console.log("draw:"+frameCount);
    while(n>0){
        if(n%10==0){
            y=y+20;
            x=20;
        }else{
            x=x+20;
        }
        ellipse(x,y,20, 20)
    n=n-1
}
}