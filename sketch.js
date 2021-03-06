var home=0;
var instructions=1;
var instructions2=1.5;
var gamestate=home;

//var gamestate="level3";

var Time=0;
var level;
var hit = 0;
var hit2=0;
var count=0;




function preload(){
  airimg=loadImage("air.png");
  arrowimg=loadImage("arrow.png");
  fireballimg = loadAnimation("ball1.png","ball2.png","ball3.png");
  bigmonsterimg= loadImage("bigmonster.png");
  level1background= loadImage("level1.png");
  

  monster1img=loadImage("monster11.png");
  monster3img=loadImage("littlemonster.png");
  swordimage= loadImage("sword.png");
  sheildimage= loadImage("sheild.png");
 

  nextlevelimg=loadImage("nexticon.png");
  pauseimg= loadImage("pause.png");
  resumeimg=loadImage("resume.png")

  sanjeevaniimg=loadImage("sanjeevani.png");
  seaimg= loadImage("seaimg.png");
  

// sound=loadSound("hanumanchalisa.mpeg");

  tridentimg=loadImage("trident.png");

  gadaimg= loadImage("gadaimg.png");

  playB = loadImage("starticon.png");
  instructionB= loadImage("instructionB.png");

  nextB= loadImage("nextB.png");
  previousB= loadImage("previousB.png");

  mainbackground= loadImage("mainBackground.png");

  hanumanimg = loadImage ("hanumanfinal.png");


 seadragon= loadImage("seadragon.png");

 hanuman2=loadImage("hanuman2.png");

 endimg=loadImage("finalimg.jpg");

 sitaimg=loadImage("sitaimg.png");
 
 level3background=loadImage("mountainimg.png");

 //monster3img= loadImage("")

 gameoverimg=loadImage("gameover.png");
 restartimg=loadImage("restart.png");
 hanumansimg=loadImage("hanumanS.png");
 gamewinimg=loadImage("gamewin.png");

 fishomnsterimg=loadImage("monsterfish.png");
 poisonimg=loadImage("fishpoison.png");

 restartimg=loadImage("restart.png");
}


function setup(){

  createCanvas(displayWidth,displayHeight);
 
  gadagroup = createGroup();
  monstergroup = createGroup();
  bigmonstergroup = createGroup();
  gada2group = createGroup();
  arrowgroup = createGroup();
  monster2group= createGroup();
  fireballgroup= createGroup();
  airgroup =createGroup();
 
  tridentgroup = createGroup();
  monster3group=createGroup();
  sheildgroup = createGroup();
  swordgroup = createGroup();

  fishmonstergroup= createGroup();
  poisongroup = createGroup();
 
  templeimage=createSprite(width/2,height/2+50,0,0);
  templeimage.addImage(mainbackground);
  templeimage.scale=1.5;
 
  jungle=createSprite(width/2,height/2,20,20);
  jungle.addImage(level1background);
  jungle.scale=4.5;
  jungle.velocityX=-10;
  jungle.visible=false;
 
  //nightbackground=createSprite(width/2,height/2,width,100);
  //nightbackground.addImage(level2background);
  //nightbackground.scale=0.98;
  //nightbackground.visible=false;
  //nightbackground.velocityX=-5;
 
  playbutton=createSprite(width/2,height/2-100,0,0);
  playbutton.addImage(playB);
  playbutton.scale=0.7;
  
 menu=createSprite(width/2,height/2+100,0,0);
 menu.addImage(instructionB);
 menu.scale=0.8;
 
 backbutton=createSprite(40,30,0,0);
 backbutton.addImage(previousB);
 backbutton.scale=0.3;
 
 
 
 sea= createSprite(width/2,height/2,10,10);
 sea.addImage(seaimg);
 sea.scale=2;
 sea.velocityX=-5;
 sea.visible=false;
 
  sita=createSprite(width/2,height/2);
  sita.addImage(sitaimg);
  sita.scale=3;

 nextlevel=createSprite(200,300,0,0);
 nextlevel.addImage(nextlevelimg);
 nextlevel.scale=0.3;
 nextlevel.visible=false;

 nextlevel2=createSprite(200,300,0,0);
 nextlevel2.addImage(nextlevelimg);
 nextlevel2.scale=0.3;
 nextlevel2.visible=false;

 nextlevel3=createSprite(200,300,0,0);
 nextlevel3.addImage(nextlevelimg);
 nextlevel3.scale=0.3;
 nextlevel3.visible=false;

 mountain=createSprite(width/2,height/2,10,10);
 mountain.addImage(level3background);
 mountain.visible=false;
 mountain.velocityX=-5;
 mountain.scale=3.5;

 ramlaxman=createSprite(width/2,height/2,10,10);
 ramlaxman.addImage(endimg);
 ramlaxman.visible=false;

 gameover=createSprite(width/2,height/2+100);
 gameover.addImage(gameoverimg);
 gameover.visible=false;

 gamewin=createSprite(width/2,height/2+100);
 gamewin.addImage(gamewinimg);
 gamewin.visible=false;

 restart=createSprite(width/2,height/2-200);
 restart.addImage(restartimg);
 restart.visible=false;
 restart.scale=0.6;

 nextbutton=createSprite(350,360,0,0);
 nextbutton.addImage(nextB);
 nextbutton.scale=0.2;
 
 hanuman=createSprite(width/7,height/2,20,20);
 hanuman.addImage(hanumanimg);
 hanuman.scale=2;
 hanuman.setCollider("rectangle",0,0,70,30);
 //hanuman.debug=true;

 pause=createSprite(30,height-50);
 pause.addImage(pauseimg);
 pause.scale=0.3;
 pause.visible=false;
 
 resume=createSprite(50,80);
 resume.addImage(resumeimg);
 resume.scale=0.3;
 resume.visible=false;
 //resume.debug=true;

 
 }

 
 function draw(){
  background("white");

  edges=createEdgeSprites();
 // bigmonstergroup.bounceOff(edges[2]);
  //bigmonstergroup.bounceOff(edges[3]);
  
  hanuman.collide(edges[2]);
  hanuman.collide(edges[3]);
  hanuman.collide(edges[0]);

  monstergroup.bounceOff(edges[2]);
  monstergroup.bounceOff(edges[3]);

  monster3group.bounceOff(edges[2]);
  monster3group.bounceOff(edges[3]);

  //home page starts 
 if(gamestate==home) {
      
      templeimage.visible=true;
      playbutton.visible=true;
      menu.visible=true;

      playbutton.setCollider("rectangle",0,0,100,30);
     // playbutton.debug=true;

      hit=0;
      hit2=0;

      jungle.visible=false;
      hanuman.visible=false;
      nextlevel.visible=false;
      nextlevel2.visible=false;
      nextlevel3.visible=false;
     
      pause.visible=false;
      resume.visible=false;
      ramlaxman.visible=false;
      restart.visible=false;
      gameover.visible=false;
      sita.visible=false;
      sea.visible=false;
      jungle.visible=false;
      mountain.visible=false;
     // bigmonster.visible=false;
      gamewin.visible=false;

    fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
    monster2group.destroyEach();
    monster3group.destroyEach();
    monstergroup.destroyEach();
    tridentgroup.destroyEach();
    gadagroup.destroyEach();
    airgroup.destroyEach();
      


      backbutton.visible=false;
      nextbutton.visible=false;
         
      if(mousePressedOver(playbutton)) {
        gamestate="level1";
        //playbutton initiation
      }
      
      if(mousePressedOver(menu)) {
        gamestate=instructions;
      }
  
     // console.log("test");
      drawSprites();

  }


  if(gamestate == instructions ) {
    background("blue");
    
    gamewin.visible=false;
    pause.visible=false;
    resume.visible=false;
    playbutton.visible=false;
    hanuman.visible=false;
    menu.visible=false;
    templeimage.visible=false;
    backbutton.visible=true;
    nextbutton.visible=false;
    nextlevel.visible=false;
    nextlevel2.visible=false;
    nextlevel3.visible=false;
    bigmonstergroup.setVisibleEach(false);

    fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
    monster2group.destroyEach();
    monster3group.destroyEach();
    monstergroup.destroyEach();
    tridentgroup.destroyEach();
    gadagroup.destroyEach();
    airgroup.destroyEach(); 
    
    fill("white");
    textSize(18);
    text("-Press play to start game and complete 3 levels to win.",width/5,50);
    text("-Press up and down arrow to move Hanumanji up and down ",width/5,100);
    text("-Press a to shoot weapon at enemy",width/5,150);
    text("-Press next icon to go to the next level",width/5,200);
    text("-At level 2 press space key to shoot air and destroy the fireballs.",width/5,250);
    text("-At level 3 press space key to throw shield and destroy the swords.",width/5,300);
    text("-Less Time will make you faster player.",width/5,350);
   
    
    drawSprites();
    
  }

if(mousePressedOver(backbutton) ) {
  gamestate=home;
  backbutton.visible=false;
  nextbutton.visible=false;
  console.log(gamestate);

}


if(gamestate === "level1") {
   
  //sound.play();
  Time=Time+Math.round(World.frameCount/150);
  //console.log(World.frameRate);
 
  menu.visible=false;
  templeimage.visible=false;
  jungle.visible=true;
  hanuman.visible=true;

  hanuman.addImage(hanumanimg);
 
  playbutton.visible=false;
  pause.visible=true;
  resume.visible=true;
 
 //reset the background
 if(jungle.x<130) {
   jungle.x=jungle.width/1;  
 }
 
 if(keyDown("up")) {
   hanuman.y=hanuman.y-10;
 }

 if(keyDown("down")) {
   hanuman.y=hanuman.y+10;
 }

 
 spawncyclops();

 
 if(keyDown("a") ) {
   spawngada();
   
 }

 if(monstergroup.isTouching(gadagroup)) {
     gadagroup.destroyEach();
     monstergroup.destroyEach();
     
 }
 
  if(monstergroup.isTouching(hanuman)){
   gamestate="end1";

   console.log("level1,monster")
 }
 
 if(arrowgroup.isTouching(hanuman)){
   arrowgroup.setVelocityXEach(0);
   gamestate="end1";
 
   console.log("level1,arrow")
 }
 
 if(gadagroup.isTouching(arrowgroup)){
   arrowgroup.destroyEach();
   gadagroup.destroyEach();
 }
 console.log(gamestate);

 if(Time >= 5000 && World.frameCount % 100 == 0){
  
  spawnbigmonster();
  console.log(World.frameCount);
  
  if(bigmonstergroup.isTouching(hanuman)){
   // bigmonster.velocityY=0;
    gamestate="end1";
    level="first";
    console.log(level);
  }
}

if(gadagroup.collide(bigmonstergroup)){
  hit++;

  if(hit == 5){
   bigmonstergroup.destroyEach();
   bigmonstergroup.setVisibleEach(false);
   nextlevel.visible=true;
  }
  console.log(hit);
 }

 if(hit === 5){
   bigmonstergroup.destroyEach();
   arrowgroup.setVelocityXEach(0);
   arrowgroup.destroyEach()
   monstergroup.setVelocityXEach(0);
   monstergroup.destroyEach();
   gadagroup.destroyEach();
 }
 
 drawSprites();
 
 fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);

 fill("red");
 textSize(30);
 text("Monster War",width/2-100,30);


 if(mousePressedOver(nextlevel)){
   gamestate="level2";
   
 }
 
 if(mousePressedOver(pause)){
   gamestate="pause";
   level="first";
 }

}
 
if(gamestate=="level2"){

  Time=Time+Math.round(World.frameCount/150);

  sea.visible=true; 
  hanuman.visible=true;
  nextlevel.visible=false;
  pause.visible=true;
  resume.visible=true;
  nextbutton.visible=false;
  sita.visible=false;

  monstergroup.destroyEach();
  bigmonstergroup.destroyEach();

  if(sea.x<0){
    sea.x=200;
  }
  
   if(keyDown("up")) {
      hanuman.y=hanuman.y-10;
    }

    if(keyDown("down")) {
      hanuman.y=hanuman.y+10;
    }

    if(keyDown("left")) {
      hanuman.x=hanuman.x-30;
    }

    if(keyDown("right")) {
      hanuman.x=hanuman.x+30;
    }

    if(Time > 10000){
      spawnseamonster();
    }

 
  spawnfishmonster();
  

  if(keyDown("a")){
    spawntrident()
  }

  if(keyDown("space")){
    spawnair();
  }
  

 // if(tridentgroup.isTouching(monster2group)){
 //   gamestate="level2.1";
    
 // }

  if(tridentgroup.collide(monster2group)){
    hit2++;
 
    if(hit2 == 5){
      airgroup.destroyEach();
      gamestate="level2.1"
    }
  }  

  if(tridentgroup.isTouching(fishmonstergroup)){
    
    fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
  }
  

  if(monster2group.isTouching(hanuman)){
   
    gamestate="end2";
    level="second";
    console.log("end,sea");
  }

  if(fishmonstergroup.isTouching(hanuman) || hanuman.isTouching(fireballgroup)){
   
    gamestate="end2";
    level="second";
    console.log("end,fishmonster");
  }

  if(airgroup.isTouching(fireballgroup)){
    fireballgroup.destroyEach();
    airgroup.destroyEach();
  }

  if(poisongroup.isTouching(hanuman)){
   
    gamestate="end2";
    level="second";
    console.log("end,sea");
  }

  drawSprites();

  fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);

 
 fill("red");
 textSize(30);
 text("Sita Mata",width/2-100,30);

 if(mousePressedOver(pause)){
   gamestate="pause";
   level="second"
 }

}

if(gamestate== "level2.1"){

  Time=Time+Math.round(World.frameCount/150);

  sea.visible=true;
  sita.visible=false;  
  sea.velocityX=0;
  hanuman.addImage(hanuman2);
  hanuman.x=width/4;
  hanuman.y=height/2;
  monster2group.setVelocityXEach(0);
  tridentgroup.setVelocityXEach(0);
  fishmonstergroup.destroyEach();
  poisongroup.destroyEach();

  nextlevel2.x=650;
  nextlevel2.y=100;
  nextlevel2.scale=0.3;
  nextlevel2.visible=true;

  nextbutton.visible=false;

  pause.visible=false;
  resume.visible=false;

  

  if(mousePressedOver(nextlevel2) ){
    gamestate="level2.2"; 
 
  }

  if(mousePressedOver(pause)){
    gamestate="pause";
    level="second";
  }
 
 
  drawSprites();
 
  fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);


}

if(gamestate== "level2.2"){

  Time=Time+Math.round(World.frameCount/150);

  console.log(gamestate);
  sea.visible=false;
  sea.velocityX=0;
  hanuman.visible=false;
  sita.visible=true;
  sita.x=width/2+50;
  sita.y=height/2;
  sita.scale=2.5;
  monster2group.setVelocityXEach(0);
  monster2group.destroyEach();
  tridentgroup.setVelocityXEach(0);
  tridentgroup.destroyEach();

  fishmonstergroup.destroyEach();

  nextlevel3.x=100;
  nextlevel3.y=100;
  nextlevel3.scale=0.3;

  nextlevel.visible=false;
  nextlevel2.visible=false;
  nextlevel3.visible=true;

  pause.visible=false;
  resume.visible=false;


 if(mousePressedOver(nextlevel3)){
   gamestate="level3";
 }

  drawSprites();


}

if(gamestate=="level3"){

 Time=Time+Math.round(World.frameCount/150);
 sita.visible=false;
 mountain.scale=2.5;
 mountain.visible=true;
 hanuman.visible=true;
 hanuman.addImage(hanumansimg);
 hanuman.scale=0.8;
 hanuman.x=100;
 nextbutton.visible=false;

 fishmonstergroup.destroyEach();

 //hanuman.debug=true;
 hanuman.setCollider("rectangle",0,0,50,100);

 pause.visible=true;
  resume.visible=true;

 if(keyDown(UP_ARROW)){
   hanuman.y=hanuman.y-10;
 }

 if(keyDown(DOWN_ARROW)){
   hanuman.y=hanuman.y+10;
 }

 if(mountain.x < 0){
   mountain.x=200;
 }

 if(sheildgroup.isTouching(swordgroup)){
  sheildgroup.destroyEach();
  swordgroup.destroyEach();
}

 spawnjunglemonster()
 count++;


 if(keyDown("a")){
  spawngada();
 }
 if(keyDown("space")){
   spawnsheild();
 }
 

  if(hanuman.isTouching(monster3group) || hanuman.isTouching(swordgroup)){
    gamestate="end3";
  }

  if(gadagroup.isTouching(monster3group) && Time> 50000){
   gamestate="level3.1";
   monster3group.destroyEach();
   gadagroup.destroyEach();
   console.log(gamestate);
  }

  if(gadagroup.isTouching(swordgroup)){
    gadagroup.destroyEach();
    swordgroup.destroyEach();
  }
  

  if(mousePressedOver(pause)){
    gamestate="pause";
    level="third";
  }

  if(count % 150 <= Math.round(random(20,70))){
    monster3group.setVisibleEach(true);
    console.log(" visible")
  }
  else{
    monster3group.setVisibleEach(false);
    console.log("not visible")
  }

 drawSprites(); 

 fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);

 
 fill("red");
 textSize(30);
 text("SANJEEVANI HUNT",width/2-100,30);

}

if(gamestate == "level3.1"){

  hanuman.visible=false;

  ramlaxman.visible=true;
  ramlaxman.scale=3;

  gamewin.scale=2.5;
  gamewin.x=100
  gamewin.y=100;
  gamewin.visible=true;
  gameover.visible=false;

  pause.visible=false;
  resume.visible=false;

  

  restart.visible=true;
  restart.x=width/2;
  restart.y=height/2+100;
  restart.scale=0.5;

  if(mousePressedOver(restart)){
    gamestate=home;
  }
  drawSprites();

 fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);

// text("Lowest Time:" + Time,100,30);
}


if(gamestate=="pause"){
    
  if(level=="first"){
    jungle.visible=true;
    bigmonstergroup.setVelocityXEach(0);
    gadagroup.setVelocityXEach(0);
    monstergroup.setVelocityXEach(0);
    monstergroup.setVelocityYEach(0);
    hanuman.visible=true;
    jungle.velocityX=0;
    arrowgroup.setVelocityXEach(0);
  }

  if(level=="second"){
    sea.velocityX=0;
    monster2group.setVelocityXEach(0);
    fireballgroup.setVelocityXEach(0);
   // fireballgroup.pause();
    tridentgroup.setVelocityXEach(0);
    airgroup.setVelocityXEach(0);
    hanuman.visible=true;
    fishmonstergroup.setVelocityXEach(0);
    poisongroup.setVelocityYEach(0);
  }

  if(level == "third"){
    hanuman.visible=true;
    mountain.velocityX=0;
    gadagroup.setVelocityXEach(0);
    swordgroup.setVelocityXEach(0);
    sheildgroup.setVelocityXEach(0);
    monster3group.setVelocityXEach(0);
  }

  drawSprites();
}

if(mousePressedOver(resume) && gamestate=="pause"){
  
  if(level=="first"){
    monstergroup.destroyEach();
    gadagroup.destroyEach();
    arrowgroup.destroyEach();
    bigmonstergroup.destroyEach();
    jungle.velocityX=-5;
    gamestate="level1";
    
    console.log("resume1");
  }
  
  if(level=="second"){
    fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
    fireballgroup.destroyEach();
    airgroup.destroyEach();
    tridentgroup.destroyEach();
    monster2group.destroyEach();
    sea.velocityX=-5;
    gamestate="level2";
    
    console.log("resume2");
  }

  if(level == "third"){
    monster3group.destroyEach();
    gadagroup.destroyEach();
    swordgroup.destroyEach();
    sheildgroup.destroyEach();
    mountain.velocityX=-5;
    gamestate="level3";

    console.log("resume3");
  }

}


if(gamestate == "end1" ){
    
    jungle.visible=true;
    hanuman.visible=true;
    jungle.velocityX=0;
    bigmonstergroup.velocityY=0;
    monstergroup.setVelocityXEach(0);
    monstergroup.setVelocityYEach(0);
    arrowgroup.destroyEach();
    gameover.visible=true;
    bigmonstergroup.destroyEach();

    pause.visible=false;
    resume.visible=false;

    restart.visible=true;

    if(mousePressedOver(restart)){
      jungle.velocityX=-8;
      gamestate=home;
      Time=0;
      
    }

    drawSprites();
    
    fill("white");
    textSize(20);
    text("Time:" + Time,width/6,30);
}

if(gamestate == "end2"){
  sea.velocityX=0;
  monster2group.setVelocityXEach(0);
  gameover.visible=true;
  fishmonstergroup.setVelocityXEach(0);
  poisongroup.setVelocityYEach(0);
  tridentgroup.setVelocityXEach(0);
  
  pause.visible=false;
  resume.visible=false;

  restart.visible=true;
  if(mousePressedOver(restart)){
    sea.velocityX=-8;
    gamestate=home;
    Time=0;
   
  }

  drawSprites();

  fill("white");
  textSize(20);
  text("Time:" + Time,width/6,30);
 }

 if(gamestate=="end3"){
   mountain.velocityX=0;
   monster3group.setVelocityXEach(0);
   monster3group.setVelocityYEach(0);
   gadagroup.destroyEach();
   gameover.y=height-100;
   gameover.visible=true;

   
   pause.visible=false;
   resume.visible=false;

   restart.visible=true;
  if(mousePressedOver(restart)){
    mountain.velocityX=-8;
    gamestate=home;
    Time=0;
    hanuman.addImage(hanumanimg)
  }

   drawSprites();

   fill("white");
   textSize(20);
   text("Time:" + Time,width/6,30);
 }



}
//function draw ends here

function spawnbigmonster(){
  bigmonster= createSprite(width/2,height/2,30,30);
  bigmonster.addImage(bigmonsterimg);
  //bigmonster.visible=false;
  bigmonster.velocityY=random(2,15);
  bigmonster.scale=0.8;
  bigmonster.lifetime=350;
  bigmonstergroup.add(bigmonster);
  bigmonstergroup.bounceOff(edges[2]);
  bigmonstergroup.bounceOff(edges[3]);
  console.log("big monster coming");
}

function spawncyclops() {
  if(World.frameCount%80==0) {
    var cyclops=createSprite(800,random(150,350),0,0);
    cyclops.addImage(monster1img);
    cyclops.scale=0.4;
    cyclops.velocityX=-5;
    cyclops.velocityY=-5;
   // cyclops.debug=true;
    cyclops.setCollider("circle",0,0,120);
    
    cyclops.depth=hanuman.depth;
    hanuman.depth+=1;
    
    var arrow=createSprite(400,cyclops.y);
    arrow.addImage(arrowimg);
    arrow.scale=0.4;
    arrow.velocityX=-10;
    //arrow.debug=true;
    arrow.setCollider("rectangle",0,0, 50,50);
    arrowgroup.add(arrow);
    monstergroup.add(cyclops);
  }
}

function spawngada() {
  var gada=createSprite(hanuman.x,hanuman.y,0,0);
  gada.addImage(gadaimg);
  gada.scale=0.35;
  gada.velocityX=5;
  gada.lifetime=200;
 // gada.debug=true;
  gada.setCollider("rectangle",0,0,gada.width/4,gada.height);
  gadagroup.add(gada);

}

function spawnseamonster(){
  if(World.frameCount%150==0) {
   var monster2=createSprite(width,height-200,0,0);
   monster2.addImage(seadragon);
   monster2.scale=0.25;
  // monster2.setLifetime=100;
   monster2.velocityX=-5;
  // monster2.debug=true;
   monster2.setCollider("rectangle",0,0,500,1000);

   hanuman.depth=monster2.depth;

   monster2.depth=gameover.depth;
   gameover.depth=monster2.depth;

   var fireball= createSprite(monster2.x-100,monster2.y,10,10);
   fireball.addAnimation("fireballanime",fireballimg);
   fireball.scale=0.2;
   fireball.velocityX=-12;
   
   fireballgroup.add(fireball);

   monster2group.add(monster2);
    
  }
}

function spawnfishmonster(){
  if(World.frameCount % 80 ==0){
    var fishmonster= createSprite(random(200,600),height-100,10,10);
    fishmonster.addImage(fishomnsterimg);
    //fishmonster.debug=true;
    fishmonster.setCollider("circle",0,0,40);
    fishmonster.scale=0.1;
    fishmonster.velocityX=-10;
   // fishmonster.lifetime=800/10;

    var poison=createSprite(fishmonster.x,fishmonster.y);
    poison.addImage(poisonimg);
    poison.scale=0.5;
    poison.velocityY=-10;  
    poison.debug=true; 
    poison.setCollider("rectangle",0,0,80,80);
    //poison.lifetime=800/10;

    fishmonstergroup.add(fishmonster);
    poisongroup.add(poison);
  }
}

function spawntrident(){
  
  var trident=createSprite(hanuman.x,hanuman.y,0,0);
  trident.addImage(tridentimg);
  trident.scale=0.45;
  trident.velocityX=10;
  //trident.debug=true;

  hanuman.depth=trident.depth;

  tridentgroup.add(trident);

}

function spawnjunglemonster(){
  if(World.frameCount%150==0) {
   var monster3=createSprite(random(width-500,width-200),random(200,300),0,0);
  monster3.addImage(monster3img);
  monster3.scale=0.5;
  monster3.velocityX=-5;
  monster3.velocityY=-5;
  // monster3.debug=true;
 // monster3.setCollider("circle",0,0,120);
  monster3.depth=hanuman.depth;
   hanuman.depth+=1;
  
   if(World.frameCount % 100 === 0){
    var sword= createSprite(monster3.x-100,monster3.y,10,10);
    sword.addImage(swordimage);
    sword.scale=0.5;
    sword.velocityX=-12;
    swordgroup.add(sword);
    console.log("test");
   }
   
  monster3group.add(monster3);
   
  }
}

function spawnair(){
  var air= createSprite(hanuman.x,hanuman.y,10,10);
  air.addImage(airimg);
  air.scale=0.3;
  air.velocityX=8;
  airgroup.add(air);
}


function spawnsheild(){
 var sheild= createSprite(hanuman.x-50,hanuman.y-50,10,10);
 sheild.addImage(sheildimage);
 sheild.scale=0.5;
 sheild.velocityX=8;
 sheildgroup.add(sheild);
}








