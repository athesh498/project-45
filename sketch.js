var tiger,man,obstacle1,obstacle2,obstacle3,obstacle4,bgImage;
var tiger_running,man_running,obstacle1Image,obstacle2Image,obstacle3Image,obstacle4Image;



function preload(){
  tiger_running = loadAnimation("images/tiger 1.png","images/tiger 2.png","images/tiger 3.png","images/tiger 4.png","images/tiger 5.png","images/tiger 6.png");
  man_running = loadAnimation("images/man-1.png","images/man-2.png","images/man-3.png","images/man-4.png","images/man-5.png","images/man-6.png")
  bgImage = loadImage("images/bg.jpg");
  // obstacle1Image = loadImage("images/obstacle1.png")
  // obstacle2Image = loadImage("images/obstacle2.png")
  // obstacle3Image = loadImage("images/obstacle3.png")
  // obstacle4Image = loadImage("images/obstacle4.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  // bg = createSprite(width/2,height/2,0,0);
  // bg.addImage("background",bgImage);
  // bg.scale = 3.0;
  // bg.velocityX = -5;

  tiger = createSprite(width/4,height-250,50,50);
  tiger.addAnimation("_running",tiger_running);
  tiger.scale = 0.5;
  tiger.frameDelay = 2;
  
  man = createSprite(width-width/3,height-250,50,50);
  man.addAnimation("man_running",man_running);
  man.scale = 0.7;
  man.frameDelay = 2;

  
}

function draw() {
  background(bgImage);
  

    // if (bg.x < 0) {
    //   bg.x = bg.width;
    // }
  drawSprites();
}