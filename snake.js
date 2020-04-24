class Snake {
    constructor(){
     this.snakeXPosition = [];    //Store X locations in this Array
     this.snakeYPosition = [];    //Store Y locations in this Array
     this.xdir = 0;               //This defines speed of the snake
     this.ydir = 0;               //This defines speed of the snake
     this.tailCount = 1;          //Store number of boxes in the snake (This has to be 1 initially)
     this.x =20;                   //Latest X location of Head
     this.y = 20;                  //Latest Y location of Head
    }
  
    update(){    
      if(!this.gameOver()){   //Keep checking if Game is Over
        this.x += this.xdir;  //Incrementing X position for next step
        this.y += this.ydir;  //Incrementing Y position for next step
        if(this.snakeXPosition.length >= this.tailCount){  //Deleting old positions if the number of positions is more than the tail count
          this.snakeXPosition.shift();    //Deleting one old position
          this.snakeYPosition.shift();    //Deleting one old position
        }
        this.snakeXPosition.push(this.x); //Adding latest X position of the head
        this.snakeYPosition.push(this.y); //Adding latest Y position of the head
    }
    }

    eat(x,y){       //If the head is in the same location as food, the food will be considered eaten
     if(this.x===x && this.y===y){  
    this.tailCount++;
     return true;   //Food eaten
     }
     else{
     return false;  //Food not eaten
     }
    }

    gameOver(){   //Checking if the snake goes out of the gaming Area
      if(this.x > 800 || this.x < 0 || this.y > 400 || this.y < 0){
        background("pink");
        fill("skyblue")
        textSize(90);
        textFont("comic sans ms")
        text("GAME OVER !!! ",100,220);
        return true;
      }
      else return false;
    }

    display(){
     
      // drawing the body of the snake
      for(var i= 0;i<this.tailCount;i++){
        var y = this.snakeYPosition[i];
        var x = this.snakeXPosition[i];
        fill("turquoise");
        rect(x,y,20,20);      //Ensure the snake moves in grid of 20 units in a step
      } 
}
}