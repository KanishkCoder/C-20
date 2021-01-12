var cat,cat_running;
var mouse,mouse2Img;
var background,backgroundImg;
var catImg,mouseImg;

function preload() {
    //load the images here
    catImg=loadImage("images/tomFour.png");
    cat_running=loadAnimation("images/tomTwo.png","images/tomThree.png");
    mouseImg=loadImage("images/jerryOne.png");
    mouse2Img=loadImage("images/jerryFour.png")
    backgroundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,650,30,30);
    cat.addAnimation("cat_running");
    cat.scale=0.2;

    mouse=createSprite(200,650,10,10);
    mouse.addAnimation(mouseImg);
    mouse.scale=0.1;

}

function draw() {

    background(backgroundImg);
    
    cat.x=World.mouseX;
    

    //Write condition here to evalute if tom and jerry collide
    
    

    if(mouse.x-cat.x<1000){
        mouse.addAnimation("mouse2Img",mouseImg)
        mouse.changeAnimation("mouse2Img")
    }
    
    if(cat.velocityX=-5){
        cat.addAnimation("catImg",cat_running)
        cat.changeAnimation("cat_running");
    }
    if(cat.isTouching(mouse)){
        cat.velocityX=0;
    }
    
    drawSprites();

    keyPressed();

}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyWentDown===LEFT_ARROW){
   cat.velocityX=-5;
   cat.addAnimation("cat_running",catImg);
   cat.changeAnimation("cat_running");
  }
}
