var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = []
var over, s1, s2, s3, s4, count;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  count = 0


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  //console.log(mouseX, mouseY)
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("50",30,520);
 text("60",110,520);
 text("70",190,520);
 text("80",270,520);
 text("90",350,520);
 text("90",430,520);
 text("80",510,520);
 text("70",590,520);
 text("60",670,520);
 text("50",750,520);
 for (var i = 0; i < 4; i++) {
     
  /*if(particles[i] != null && particles[i].body.position.y > 700){
    score = score+1;
    console.log("hi")
    particles[i] = null
  }*/
  
}
  Engine.update(engine);
 if (count>4){
   textSize(100)
  text("Game Over", 170, 400)
 }
 //scoreing(particles[0], s1)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     
   }
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if (count<5){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  count++
}}

function scoreing(i,v){
  if(v != true && i.y > 780){
    score = score+1;
    v = true
}}
