let bImg
let startingScreen
let menuTrue = true
let endTrue = false
let timeClicked
var instructionsTrue = false
var endingScreen;

function preload (){
  
  bImg = loadImage('city.jpg');
  startingScreen = loadImage("Flingshot.jpg");
  endingScreen = loadImage ("EndingScreen.jpg")
}



function setup() {
  createCanvas(600, 400); //600 x 400 pixels
  // Starting position of the ball
  x_start = 50;
  y_start = 325;
  
  mouseJustPressed = 0;
  shotMade = 0;
  score = 0;
  shots = 0;
  tries = 0;
  rims = 0;
  bricks = 0;
  textDisplay = 0;
  hotStreak = 0;
  
  skyBall = 0;
  
  scoreCounted = 0;

  
  // Initialize variables x and y to ball start position
  // x and y are the screen coordinates of the ball
  x = x_start;
  y = y_start;
  
  // Hoop location
  hoopX = 500
  hoopY = 150
  
  // Direction the ball is moving up or down 
  direction=1;
  speedX = 0.3; // this is really the x-speed
  
  speedY = -9;
  
  speed = sqrt(speedX*speedX + speedY*speedY);
  
  g = - 0.3;
  
  // Let Ball Fly
  shoot = 0;
  
  // Basketball radius
  radius = 20;
  Menu()

}


function draw() {
  //Game()
  mousePressed()

  if (menuTrue == false) {
    Game() 
    mouseReleased()
    if (millis() >= timeClicked + 60000) {
    endTrue = true
    }
  }
  
  if (endTrue == true) {
    gameOver()
  }
}

function initiate() {
  menuTrue = true
  endTrue = false
  instructionsTrue = false
  x_start = 50;
  y_start = 325;
  
  mouseJustPressed = 0;
  shotMade = 0;
  score = 0;
  shots = 0;
  tries = 0;
  rims = 0;
  bricks = 0;
  textDisplay = 0;
  hotStreak = 0;
  
  skyBall = 0;
  
  scoreCounted = 0;

  
  // Initialize variables x and y to ball start position
  // x and y are the screen coordinates of the ball
  x = x_start;
  y = y_start;
  
  // Hoop location
  hoopX = 500
  hoopY = 150
  
  // Direction the ball is moving up or down 
  direction=1;
  speedX = 0.3; // this is really the x-speed
  
  speedY = -9;
  
  speed = sqrt(speedX*speedX + speedY*speedY);
  
  g = - 0.3;
  
  // Let Ball Fly
  shoot = 0;
  
  // Basketball radius
  radius = 20;
}

function Menu (){
    background(startingScreen);
  menuTrue = true
}

function Instructions(){
  instructionsTrue = true
  loop()
  background(16,151,209);
  text("!Welcome to Fling-shot!", 250,50)
  text("Once upon a time in the great city of Newtopia, a basketball legend lived. The people knew the legend ", 30, 80)
  text("as KING. One day the king grew old and passed away so to pass on his powers to someone who is ", 30, 110)
  text("worthy he hosted a basketball tournament to find his reincarnation.", 130, 140)
  text("YOU have been waiting for this opportunity since you first held a basketball. You have entered the", 30, 170)
  text("tournament to prove your skills. DO NOT FAIL!", 180, 200)
  text("To play you must use the ball and drag it towards the net to shoot and score as many buckets as you can ", 30, 230)
  text("in 60 seconds. Your goal is to beat your high score every time. Don’t get comfortable though, the minute ", 30, 260)
  text("you make a shot the net and the balls position will change so you must adapt on the spot.", 70, 290)
  text("GOODLUCK AND MAKE KING PROUD--", 200, 310)
  rect(200,320,230, 50)
  text("Back", 300, 350)

}

function Game(){
  loop()
  textAlign(CENTER)
  background(bImg);
  
  fill(210,180,140) // This is color of rect below
  rect(0, 300, 600, 300) // (x, y, width, height)
  
 rect(0,0,600,60)
  
textFont('Impact')
  fill(192, 192, 192)
  textSize(28)
  text("Buckets: " + score, 100, 50)

  fill(255, 100, 100)
  textSize(40)
  fill(230, 200, 0)
textSize(25)
  text("Hot Streak: " + hotStreak, 500, 50)
  textSize(40)
  text("Time: " + (round(((60000 - millis() + timeClicked))/1000)), 300, 40)
  
    
  
  //fill(205,250,135) // This is color of rect below
  //rect(175, 25, 250, 25)
  
  //fill(205,250,135) // This is color of rect below
  //rect(200, 0, 200, 25)
  
  // Hoop is an ellipse and some lines for the net
  noFill()
  stroke(0);
  strokeWeight(4);
  stroke(255,140,0);
  ellipse(hoopX,hoopY,radius*3,radius/2)
  stroke(0)
  fill(0,0,0)
  quad(hoopX + radius*3/2 - radius/5, hoopY-radius/5, hoopX + radius*3/2 + radius*0.75 - radius/5, hoopY + radius/5, hoopX + radius*3/2 + radius*0.75 - radius/5, hoopY - radius*3 + radius/5, hoopX + radius*3/2 - radius/5, hoopY - radius*3 - radius/5)
  line(hoopX + radius*3/2 + radius/10, hoopY, hoopX + radius*3/2 + radius/10,y_start+radius)
  //rect(hoopX + radius*3/2,hoopY-radius*3, radius*0.75, radius*3)
  noFill()
  //circle(440,100,5)
  stroke(255)
  // line(440,100, 540,200)
  // line(560, 100, 460, 200)
  stroke(0)
  
  strokeWeight(1);
  
  
  stroke(255)
  strokeWeight(4);
  line(hoopX-radius*3/2, hoopY , hoopX-radius, hoopY + 3*radius)
  line(hoopX +radius, hoopY + 3*radius, hoopX + radius*3/2, hoopY)
  line(hoopX + radius*3/2, hoopY, (hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2)
  line(hoopX - radius*3/2, hoopY, (hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2)
  line((hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2, hoopX +radius, hoopY + 3*radius)
  line((hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2, hoopX -radius, hoopY + 3*radius)
  stroke(0)
  strokeWeight(1)
  
  rimX = hoopX-radius*3/2
  rimY = hoopY
  
  boardX = hoopX + radius*3/2
  boardY = hoopY - radius*3
  
  //console.log(x)
  // Standard Form
  // y = a*x^2 + b*x + c
  // y = a*x*x + b*x + c
  
  // Vertex Form
  // y = a*(x-h)*(x-h) + k
  
  if (shoot == 1){
    speedY = speedY - g;
    
    x = x + direction*speedX
  
    y = y + speedY;
  
    if (y > y_start){
      y = y_start;
      speedY = -speedY*0.5;
    }
    
    if (x > 600 - radius){
      x = 600 - radius;
      speedX = -speedX*0.5;
    }
    
    if (x < 0 + radius){
      x = radius;
      speedX = -speedX*0.5;
    }
    
  }
  
  if ((rimX-x)*(rimX-x) + (rimY-y)*(rimY-y) <= radius*radius){
    speed = sqrt(speedX*speedX + speedY*speedY);
    speedX = -speed*(rimX-x)/radius;
    speedY = -speed*(rimY-y)/radius;
    rims += 1;
  }
  
  
  
  if (hoopY - radius*3 - radius/5 < y & y < hoopY + radius/5){
    if (x > hoopX + radius*3/2 - radius/5 - radius & x < hoopX + radius*3/2 + radius*0.75 - radius/5 & speedX > 0){
      x = hoopX + radius*3/2 - radius/5 - radius
      speedX = -speedX*0.5;
      bricks += 1;
    }
    if (x > hoopX + radius*3/2 + radius*0.75 & x < hoopX + radius*3/2 + radius*0.75  +radius - radius/5 & speedX < 0){
      x =hoopX + radius*3/2 + radius*0.75 + radius - radius/5
      speedX = -speedX*0.5;
    }
  }
  else if ((boardX-x)*(boardX-x) + (boardY-y)*(boardY-y) <= radius*radius){
    speed = sqrt(speedX*speedX + speedY*speedY);
    speedX = -speed*(boardX-x)/radius;
    speedY = -speed*(boardY-y)/radius;
    bricks += 1;
  }
 
  if ((hoopX-x)*(hoopX-x) + (hoopY-y)*(hoopY-y) <= (0.6*radius)*(0.6*radius) & speedY > 0){
    shotMade = 1;
    speedX = 0.3*speedX;
    
  }
  
  if (y < -200){
    skyBall = 1;
  }
  
  if (bricks > 0 & rims == 0 & y > hoopY & shotMade == 0 & textDisplay == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("Try Again!", 300, y_start)
    noFill()
  }
  
  if (rims == 1 & bricks == 2 & y > hoopY & shotMade == 0 & textDisplay == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("in-and-out", 300, y_start)
    noFill()
  }
  
  if (rims > 1 & bricks > 1 & y > hoopY & shotMade == 0 & textDisplay == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("Miss!", 300, y_start)
    noFill()
  }
  
  if (rims > 6){
    speedX = speedX +0.1;
  }
  
  if (textDisplay == 0 & bricks == 0 & rims == 0 & speedY > 4 & y < hoopY & y != y_start & shotMade == 0 & x > hoopX +3*radius/2){
    textDisplay = 1
  }
  
  if (rims > 0){
    textDisplay = 0
  }
  if (textDisplay == 1 & y > hoopY & shotMade == 0){
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 0, 0)
    textAlign(CENTER)
    text("Air ball!", 300, y_start)
    noFill()
  }
  

  
  // BOUNCING !!!! 
  
  //if(y > 400-diameter){
    //direction=-1
  //}
  
  //if(y < diameter){
    //direction=1
  //}
  
  // Drawing the circle last
  fill(230,105,0)
  stroke(0)
  strokeWeight(1)
  circle(x, y, radius*2)  // Draws a circle at (x,y,radius)
  noFill()
  if (shotMade == 1){
    
    if (scoreCounted == 0){
      score += 1
      scoreCounted = 1
      if (rims ==0 & bricks == 0){
        endText = "Swish!"
      }
      if (bricks > 0){
        endText = "Nice Shot!"
      }
      if (rims > 0 & bricks < 2){
        endText = "Draino!"
      }
      if (rims > 0 & bricks >=2){
        endText = "Buckets!"
      }
      if (x_start < 75){
        endText = "Ballin'!"
      }
      if (tries > 10){
        endText = "Buzzer Beater!"
      }
      if (skyBall == 1){
        endText = "Sky Hook!"
      }
      if (tries == 1){
        endText = "First Try!"
        if (hotStreak == 1){
          endText = "Heatin' up!"
        }
        if (hotStreak == 2){
          endText = "On Fire!"
        }
        if (hotStreak == 3){
          endText = "Respect..."
        }
        if (hotStreak == 4){
          endText = "Wet!"
        }
        if (hotStreak == 5){
          endText = "Maybe pass sometimes"
        }
        if (hotStreak == 6){
          endText = "LeBron is that you!?"
        }
        if (hotStreak == 7){
          endText = "You're a wizard Harry!"
        }
        if (hotStreak == 8){
          endText = "Ur a legend"
        }
        if (hotStreak == 9){
          endText = "STOP. DROP. ROLL."
        }
        if (hotStreak == 10){
          endText = "Jesus is that you!?"
        }
        if (hotStreak == 11){
          endText = "U go hard in paint"
        }
        if (hotStreak > 11){
          endText = "LEGEND STATUS!"
        }
        hotStreak += 1;
      }
      else {
        hotStreak = 0
      }
    
    }
    
    stroke(255)
    strokeWeight(4);
    line(hoopX-radius*3/2, hoopY , hoopX-radius, hoopY + 3*radius)
    line(hoopX +radius, hoopY + 3*radius, hoopX + radius*3/2, hoopY)
    line(hoopX + radius*3/2, hoopY, (hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2)
    line(hoopX - radius*3/2, hoopY, (hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2)
    line((hoopX - radius*3/2 + hoopX - radius)/2, hoopY+radius*3/2, hoopX +radius, hoopY + 3*radius)
    line((hoopX + radius*3/2 + hoopX + radius)/2, hoopY+radius*3/2, hoopX -radius, hoopY + 3*radius)
    stroke(0)
    strokeWeight(1)
    textSize(64);
    fill(0)
    strokeWeight(3)
    stroke(255, 255, 0)
    textAlign(CENTER)
    text(endText, 300, y_start)
    noFill()
  }
  stroke(0);
  strokeWeight(4);
  stroke(255,140,0)
  
  arc(hoopX, hoopY, radius*3, radius/2, 2*PI, PI, OPEN); 
  stroke(0)
  strokeWeight(1)
}

function gameOver() {
  background(endingScreen)
  textSize(15)
  text(score, 324, 190)
}

function mouseReleased() {
  loop()
    if (mouseIsPressed){
    rims = 0
    bricks = 0
    shoot = 0;
    textDisplay = 0;
    skyBall = 0;
    if (mouseJustPressed == 0){
      if (shotMade == 1){
        if (random(0,1) > 0.75){
          x = random(1.5*radius, hoopX - 3*radius/2 - 2*radius)
        }
        else {
          x = random(1.5*radius, hoopX - 3*radius/2 - 4*radius);
        }
        y = random(200, 400 - 2*radius);
        hoopY = random(100,150)
        hoopX = random(500-radius*2, 500)
        mouseJustPressed = 1;
        x_start = x
        y_start = y
        shotMade = 0
        tries = 0
      }
      else {
        mouseJustPressed = 1;
        x = x_start
        y = y_start
      }
    }
    
    line(x_start, y_start, mouseX, mouseY)
  }
  if (mouseJustPressed == 1){
    shoot = 1;
    speedX = -g*5*(mouseX - x_start)/30;
    speedY = -g*5*(mouseY - y_start)/30;
    mouseJustPressed = 0;
    shotMade = 0;
    shots += 1
    scoreCounted = 0
    tries += 1;
    rims = 0
    bricks = 0
  }
  
}

function mousePressed(){
  if (mouseButton == LEFT && menuTrue == true && mouseX >= 278 && mouseX <= 588 && mouseY >= 212 && mouseY <= 250){
    Game()
    mouseReleased()
    
    menuTrue = false
    
    timeClicked = millis() 
  }
 if (mouseButton == LEFT && menuTrue == true && mouseX >= 450 && mouseX <= 595 && mouseY >= 364 && mouseY <= 395){
   Instructions()
   
  
 }
  if(mouseButton == LEFT && instructionsTrue == true && mouseX >= 200 && mouseX <= 430 && mouseY >= 320 && mouseY <= 370){
       background(startingScreen);
    menuTrue = true
  }
  
  if (mouseButton == LEFT && endTrue == true && mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 450 ) {
    initiate()
    endTrue = false
  }
}
