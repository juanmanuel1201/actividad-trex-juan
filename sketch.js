//variables
var trex, trex_running;
var graw, grawimg,invisiblegraw;
var score;

function setup(){
//canvas
createCanvas(600,200);

//creacion de sprits
invisiblegraw = createSprite(100,200,200,10);
trex = createSprite(50,150,50,70);
graw = createSprite (300,190,600,10);

//piso invisible
invisiblegraw.visible=false;

//suelo
graw.addImage("graw",grawimg);
graw.x=graw.width/2;

//trexs
trex.scale=0.5
trex.addAnimation("running",trex_running);

//generar numeros aleatorios
var rand =Math.round(random(1,100))
console.log(rand)


} 
function preload(){ 

//imagenes
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
grawimg=loadImage("ground2.png");

}

function draw(){

//colos canvas
background(10000);

//console.log(trex.y)

//trex pega al suelo
trex.collide(invisiblegraw);

//velocidad
graw.velocityX=-3

//condicionales
if(keyDown("space")){
trex.velocityY=-10
}
if(graw.x<0){
graw.x=graw.width/2
}

//gravedad
trex.velocityY=trex.velocityY+0.8;

//aparecer las nubes
spawnClouds








drawSprites();

}
//funcion aparecer nubes
function spawnClouds(){
    if(frameCount % 60 === 0){
    cloud=createSprite(600,100,40,10);
    cloud.y=Math.round(rando(280,320))
    cloud.addImage(cloudimage)
    spawnClouds.scale=0.4;
    cloud.velocityX=-3;
    }
    }
