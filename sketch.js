var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg, leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//garden.x = garden.width/2;
//garden.velocityX = -2;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);

// //generate random numbers
// var select_sprites = Math.round(random(1,2));

// if(frameCount % 80 == 0) {
//   if(select_sprites == 1) {
//     createApples();
//   }
//   else {
//     createLeaves();
//   }
// }
}



function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

//generate random numbers
var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0) {
  if(select_sprites == 1) {
    createApples();
  }
  else {
    createLeaves();
  }
}

  drawSprites();
}


function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage("apples_falling", appleImg);
  apple.scale = 0.05;
  apple.velocityY = 3;
  apple.lifetime = 75;
}

function createLeaves() {
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage("leaves_falling", leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 3;
  leaf.lifetime = 75;
}