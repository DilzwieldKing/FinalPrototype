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
let a = 72;
var ship;
var evilship;
var explosionGreen;
var asteroidField;
var m = 0;
var n = -600;
var o = -1200;


function preLoad(){
    ship = loadImage('images/pixil-frame-0 (2).png');
    evilship = loadImage('evilship.png');
    explosionGreen = loadImage('explosiongreen.png');
    asteroidField = loadImage('asteroid.png');
}



function setup() {
    preLoad();
    noStroke();
    circSetup();
    createCanvas(600, 600);

}

function draw() {
    
    background(0, 80);
    scrollingBackground();
    tint(255, 255);
    ellipse(targetRem[0].circX, targetRem[0].circY, 0);
    tank();
    bullet();
    //crash();
    image(evilship, targetRem[0].circX-67, targetRem[0].circY-a, evilship.width/2.2, evilship.height/2.2);
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
                //a = 9000;
                b = true;
                circSetup();
                crash();
                //victory();
                
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

function crash(){
    for(e = 0; e < 5; e++){
        if(circReset.b = true){
            a = a - 3000;
        }
    }   
}
function victory(){
    stroke("white");
    fill("white");
    text("ENEMY DEFEATED", 300, 300);
}

function scrollingBackground(){
    image(asteroidField, 0, m);
    image(asteroidField, 0, n);
    image(asteroidField, 0, o);
    for(r = 0; r < 5; r++){
        m = m + 1;
        n = n + 1;
        o = o + 1;
    }
    if(m >= 600){
        m = 0;
    }
    if(n >= 0){
        n = -600;
    }
    if(o >= -600){
        o = -1200;
    }
}