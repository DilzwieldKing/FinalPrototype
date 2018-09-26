var x = 300;
var bulletLoc = [];
var bulletTrav = [];
var rise = -5;
var bulletStat = {
    x: bulletTrav.x,
    y: bulletTrav.y,
}
var targetRem = [];
var circReset = [];
var circRand = [];
let a = 100;
var ship;

function preLoad(){
    ship = loadImage('images/pixil-frame-0 (2).png');
}



function setup() {
    preLoad();
    noStroke();
    circSetup();
    createCanvas(600, 600);
}

function draw() {

    background(0, 80);
    if(circReset == false){
        a = 100;
    }
    if(circReset == true){
        a = 0;
    }
    ellipse(targetRem[0].circX, targetRem[0].circY, a);
    tank();
    bullet();
}

function tank(){
    rectMode(CENTER);
    if(keyIsDown(LEFT_ARROW)){
        x -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += 5;
    }
    image(ship, x-74, 475, ship.width/2, ship.height/2);
    rect(x, 570, 0, 0);
}

function bullet(){
    var b = false;
    for(i = 1; i < bulletTrav.length; i++){
        rect(bulletTrav[i].x, bulletTrav[i].y + bulletTrav[i].speed, 10, 10);
        bulletTrav[i].y = bulletTrav[i].y + bulletTrav[i].speed;
            if(dist(bulletTrav[i].x, bulletTrav[i].y, targetRem[0].circX, targetRem[0].circY) < 50){
                console.log("hit");
                a = 0;
                b = true;
                circSetup();
                
            }else{
                //console.log("miss");
                b = false;
            }
    }
    circReset.push(b);
}

function keyPressed(){
    var bulletStart = {
        speed: -5,
        //bulletStart: 570,
        y: 570,
        x: x,
    }
    if(keyCode === UP_ARROW){
        bulletLoc = x;
        console.log(bulletLoc);
        bulletTrav.push(bulletStart);
    }
}

function target(){
    fill("white");


    for(i = 0; i < 5; i++){
        if(bulletStat.x = circ.circX, bulletStat.y = circ.circY){
            //console.log("hit");
        }
    }

}

function circSetup(){
    var circ = {
        circX: random(50, 550),
        circY: 100,
    }
    targetRem.push(circ);
}
