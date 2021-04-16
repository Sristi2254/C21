var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

 function setup()

  { createCanvas(800,600); 

    fixedRect= createSprite (400,400,50,80); 
    fixedRect.shapeColor="green"; 
    fixedRect.debug= true; 
    
    movingRect = createSprite(200,200,70,30); 
    movingRect.shapeColor = "green";
     movingRect.debug = true; 
    
    gameObject1 = createSprite(100,100,50,50);
    gameObject1.shapeColor = "lightblue";
    
    gameObject2 = createSprite(200,100,50,50);
    gameObject2.shapeColor = "pink";

    gameObject3 = createSprite(300,100,50,50);
    gameObject3.shapecolor = "grey";

    gameObject4 = createSprite(400,100,50,50);
    gameObject4.shapeColor = "white";
    
  } 

     function draw()
     
     { background("black"); 
     movingRect.x = World.mouseX; 
     movingRect.y = World.mouseY;

     if(isTouching(movingRect,gameObject3)){
     
      movingRect.shapeColor = "red"; 
      gameObject3.shapeColor = "red";
     }

     else{
       movingRect.shapeColor = "green";
       gameObject3.shapeColor = "grey";
     
      }
       
      drawSprites(); }



      function isTouching(object1,object2){

        if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
    
          object2.x - object1.x < object2.width/2 + object1.width/2 
    
          &&  object1.y - object2.y < object2.height/2 +object1.height/2
    
          && object2.y - object1.y < object2.height/2 + object1.height/2
           )
        {return true;
      
        }
         
    
         else {return false;
        
        }
         
    
      }
