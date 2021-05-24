var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,car;
var car1image,car2image,car3image,car4image,trackimage,groundimage
var form, player, game;

function preload(){
groundimage=loadImage("../images/ground.png");
trackimage=loadImage("../images/track2.jpg")
car1image=loadImage("../images/car1.png")
car2image=loadImage("../images/car2.png")
car3image=loadImage("../images/car3.png")
car4image=loadImage("../images/car4.png")
}



function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if(gameState===2){
  game.end()
}

}
