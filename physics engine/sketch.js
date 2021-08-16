const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;
var flag=false;


var engine, world, body;
var canJump;

var charges;

function setup() {
  //create the canvas
  createCanvas(1000,600);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  ball = new Ball(80,70, 25);



  maze1=new Maze(70,120,130,10  )
  maze2=new Maze(280,200,10,180  )
  maze3=new Maze(210,285,130,10  )
  maze4=new Maze(70,350,130,10  )
  maze5=new Maze(350,225,10,130  )
  maze6=new Maze(195,520,10,120  )
  maze7=new Maze(410,290,130,10  )
  maze8=new Maze(540,350,10,130  )
  maze9=new Maze(615,420,160,10  )
  maze10=new Maze(690,390,10,70  )
  maze11=new Maze(800,390,130,10  )
  maze12=new Maze(930,590,130,10  )
  maze13=new Maze(870,535,10,120  )
  maze14=new Maze(0,300,5,height  )
  maze15=new Maze(width,300,5,height )
  maze16=new Maze(width/2,height,width,5 )
  maze17=new Maze(width/2,0,width,5 )



  //create the floor
ground =new Ground(500,600,1000,20)
  
}

function draw() {
  //set the background
  background(50,50,55);
  
  if(ball.body.position.y>560 ){
//ball.body.position.x= 80
//ball.body.position.y= 70
Matter.Body.setPosition(ball.body,{x:80,y:70})
console.log(ball.body.position)
  }
  

  setTimeout(()=>{
    flag=false;

  },2000)
  

  //update the engine
  Engine.update(engine);
  
  //display ground

ground.display()
maze1.display()
maze2.display()
maze3.display()
maze4.display()
maze5.display()
maze6.display()
maze7.display()
maze8.display()
maze9.display()
maze10.display()
maze11.display()
maze12.display()
maze13.display()
maze14.display()
maze15.display()
maze16.display()
maze17.display()

ball.display( )
console.log(ball.body.position)

if(ball.body.position.x>870 && ball.body.position.y>500){
  textSize(30)
  fill("white")
  text("YOU WON",width/2,height/2)
  

}
}

function keyPressed(){
 if(keyCode === 39 && flag===false ){
  ball.flingForward();
 
  flag=true;
 }
 if(keyCode === 38 && flag===false ){
  ball.flingUp();
  flag=true;
 }
 if(keyCode === 37 && flag===false ){
  ball.flingBack();
  flag=true;
 }
}
