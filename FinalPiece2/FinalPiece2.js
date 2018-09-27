//Final Prototype by Joseph Eiles
//All image assets were designed and created by myself

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
    image(evilship, targetRem[0].circX-67, targetRem[0].circY-a, evilship.width/2.2, evilship.height/2.2);

}

//Function for the flying jet, the left and right arrows change an x value that moves it left or right.
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

//Function for the jet's projectile. Moves the projectile across the screen and determines through an if statement and
//dist if there is collision between the projectile's coordinates and the evil ship's. When collision occurs the result
//is then carried out by true/false values which are then stored into another array.
function bullet(){
    var b = false;
    for(i = 1; i < bulletTrav.length; i++){
        rect(bulletTrav[i].x, bulletTrav[i].y + bulletTrav[i].speed, 10, 10);
        bulletTrav[i].y = bulletTrav[i].y + bulletTrav[i].speed;
            if(dist(bulletTrav[i].x, bulletTrav[i].y, targetRem[0].circX, targetRem[0].circY) < 50){
                console.log("hit");
                //a = 9000;
                b = true;
                explosion();
                circSetup();
                crash();
                victory();
                
            }else{
                b = false;
            }
    }
    circReset.push(b);
}

//Function for tracking and storing the bullet's x coordinate into array when the key is pressed to fire a bullet.
function keyPressed(){
    var bulletStart = {
        speed: -5,
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
        }
    }
}

//Sets up the variables for the evil ship's coordinates which are then stored into an array.
function circSetup(){
    var circ = {
        circX: random(50, 550),
        circY: 100,
    }
    targetRem.push(circ);
}

//Function to make the evil ship vanish when hit.
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
    textAlign(CENTER);
    textSize(30);
    text("ENEMY DEFEATED", 300, 300);
}

//Function for the moving background. The background is a .png file that scrolls down in a loop.
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

function explosion(){
    image(explosionGreen, targetRem[0].circX-90, targetRem[0].circY-72, explosionGreen.width/1.5, explosionGreen.height/1.5);
}