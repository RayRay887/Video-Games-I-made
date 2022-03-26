// Set variables for pages
let main = 1;
let page = main;
let game = 2;
let intructions = 3;
let quit = 4;
let instructions2 = 5

//Variables for bullets
let bulletY = [];
let bulletX = [];
let shoot = false;

//Variables for enemies
let lastTime;
let howOften = 4000;
let enemyX = [];
let enemyY = [];
let change = true;
let enemySpeed = 1;

//Variables for user information
let time = 0;
let score = 0;
let numbOfShots = 0;
let highScore = 0;

//To stop the accuracy calculation from getting messed up if the score becomes negative we set a variable called hits
let hits = 0;

//Setting up 1 time variables
let clickPlay = true;
let speed1 = true;
let speed2 = true;
let speed3 = true;

//Variables for lives
let heartX = [];
let heartY = [];
let lives = 3;
let heartTime;

//Variables for yellow orb
let goldX = [];
let goldY = [];
let goldTIme;

//Variables for Movement
let heroX, heroSpeed;
let moveLeft, moveRight;

//Variables for Music
let song;
let song2;
let sound;
let firstTime = true;
let gameTime = true;

function preload() {
  song = loadSound("Hypnotic-Puzzle.mp3");
  song2 = loadSound("05. Garden Maze.mp3");
  sound = loadSound("orb.mp3");
  sound2 = loadSound("movie_1.mp3")
}

function setup() {
  createCanvas(1000, 600);
  textAlign(CENTER, CENTER);
}

function drawCarrot(x, y) {
  //Leaf
  fill(92, 198, 98);
  triangle(x + 15, y - 40, x + 35, y - 40, x + 25, y + 10);

  //Carrot
  fill(255, 130, 72);
  triangle(x, y, x + 50, y, x + 25, y + 100);
}

function drawCharacter(x2, y2) {
  //Left Ear
  fill(255);
  ellipse(x2, y2, 90 / 5, 300 / 5);

  //Inside ear
  stroke(240, 126, 135);
  fill(240, 126, 135);
  ellipse(x2, y2, 50 / 5, 250 / 5);

  //Right Ear
  stroke(255);
  fill(255);
  ellipse(x2 + 40, y2, 90 / 5, 300 / 5);

  //Inside ear
  stroke(240, 126, 135);
  fill(240, 126, 135);
  ellipse(x2 + 40, y2, 50 / 5, 250 / 5);

  //Face
  stroke(255);
  fill(255);
  ellipse(x2 + 20, y2 + 40, 420 / 5, 390 / 5);

  //Eyes
  stroke(0);
  fill(0);
  ellipse(x2 + 10, y2 + 32, 35 / 5, 35 / 5);
  ellipse(x2 + 30, y2 + 32, 35 / 5, 35 / 5);

  //Nose
  stroke(0);
  strokeWeight(2);
  fill(255);
  ellipse(x2 + 20, y2 + 40, 45 / 5, 35 / 5);
  line(x2 + 20, y2 + 44, x2 + 20, y2 + 52);
  line(x2 + 14, y2 + 52, x2 + 26, y2 + 52);

  stroke(255, 183, 202);
  fill(255, 183, 202);

  ellipse(x2, y2 + 40, 48 / 5, 28 / 5);
  ellipse(x2 + 40, y2 + 40, 48 / 5, 28 / 5);

  //Body
  stroke(255);
  fill(255);
  ellipse(x2 + 20, y2 + 96, 280 / 5, 340 / 5);

  //Left Leg
  ellipse(x2 + 10, y2 + 120, 50 / 5, 190 / 5);

  //Right Leg
  ellipse(x2 + 30, y2 + 120, 50 / 5, 190 / 5);

  //Left Hand
  ellipse(x2 - 14, y2 + 84, 100 / 5, 40 / 5);

  stroke(255);
  fill(255, 255, 255);

  //Right Hand
  ellipse(x2 + 54, y2 + 84, 100 / 5, 40 / 5);
}

function drawTree(x3, y3) {

  //Trunk
  fill('brown');
  rect(x3 + 25, y3, 20, 130);

  //Leaves
  fill('lightgreen');
  ellipse(x3, y3, 50, 50);
  fill('green');
  ellipse(x3 + 10, y3 - 40, 40, 40);
  fill('green');
  ellipse(x3 + 35, y3, 70, 70);
  fill('lightgreen');
  ellipse(x3 + 55, y3 - 40, 60, 60);
  fill('lightgreen');
  ellipse(x3 + 55, y3 - 40, 60, 60);
  fill('green');
  ellipse(x3 + 70, y3, 50, 50);
}

function drawCloud(x4, y4) {
  noStroke();
  fill(255);

  ellipse(x4, y4, 60, 50);
  ellipse(x4 + 30, y4 - 10, 60, 50);
  ellipse(x4 + 80, y4, 60, 50);
  ellipse(x4 + 20, y4 + 20, 60, 50);
  ellipse(x4 + 60, y4 + 15, 60, 50);
}

function drawCastle(x5, y5) {
  rectMode(CORNER);
  stroke(0);
  fill(175);

  //Base
  rect(x5, y5, 100, 70);

  // Towers
  rect(x5 - 50, y5 - 10, 50, 80);
  rect(x5 + 100, y5 - 10, 50, 80);
  // Platforms
  rect(x5 - 60, y5 - 30, 70, 20);
  rect(x5 + 90, y5 - 30, 70, 20);

  // Door
  noStroke();
  fill(140, 80, 0);
  ellipse(x5 + 50, y5 + 35, 36);
  rect(x5 + 32, y5 + 35, 36, 35);
}

function drawBird(x6, y6) {

  ellipseMode(CENTER);
  noStroke();

  // beak
  fill(255, 252, 0);
  triangle(x6 + 100, y6 + 70, x6 + 30, y6 + 65, x6 + 30, y6 + 80);

  // head
  fill(0, 240, 255);
  ellipse(x6 + 20, y6 + 75, 60, 50);

  // body
  arc(x6 - 50, y6 + 50, 150, 150, 0, PI);

  // eye
  fill(0, 200, 255);
  arc(x6 + 25, y6 + 65, 25, 25, 0, PI);

  // iris
  fill(0);
  arc(x6 + 25, y6 + 65, 16, 16, 0, PI);

  //Wing
  push();
  rotate(PI / 4);
  fill(0, 200, 255);
  arc(x6 - 175, y6 - 550, 100, 100, 0, PI);
  pop();
}

function drawBullet(x7, y7) {
  noStroke();

  //Leaf
  fill(92, 198, 98);
  triangle(x7, y7, x7 - 10, y7 + 10, x7 + 10, y7 + 10)

  //Carrot
  fill(255, 130, 72);
  triangle(x7, y7 - 50, x7 - 20, y7, x7 + 20, y7)
}

function drawEnemy(x8, y8) {
  noStroke();
  
  //Beak
  fill(255, 252, 0);
  triangle(x8 - 10, y8 + 10, x8 + 10, y8 + 10, x8, y8 + 40);

  //Wings
  fill(0, 200, 255);
  arc(x8 + 20, y8 - 30, 40, 30, 0, PI);
  arc(x8 - 20, y8 - 30, 40, 30, 0, PI);

  //Head
  fill(0, 240, 255);
  ellipse(x8, y8, 35, 35);

  //Body
  ellipse(x8, y8 - 30, 20, 50);
}

function drawHeart(x9, y9, size) {
  noStroke();
  fill(255, 0, 0);

  //Custom Shape in order to make a heart
  beginShape();
  vertex(x9, y9);
  bezierVertex(x9 - size / 2, y9 - size / 2, x9 - size, y9 + size / 3, x9, y9 + size);
  bezierVertex(x9 + size, y9 + size / 3, x9 + size / 2, y9 - size / 2, x9, y9);
  endShape(CLOSE);
}

function drawGold(x10, y10) {
  noStroke();

  //Yellow circle
  fill('yellow');
  ellipse(x10, y10, 40, 40);

  //Plus sign in the middle
  stroke(0);
  strokeWeight(2);
  line(x10 - 10, y10, x10 + 10, y10);
  line(x10, y10 - 10, x10, y10 + 10);
}

function initialize() {
  //Resetting all variables
  heroX = width / 2;
  heroSpeed = 5;
  moveLeft = moveRight = false;
  time = 0;
  score = 0;
  hits = 0;
  numbOfShots = 0;
  bulletY = [];
  bulletX = [];
  shoot = false
  howOften = 3000;
  enemyX = [];
  enemyY = [];
  change = true;
  enemySpeed = 1;
  lives = 3;
  clickPlay = true;
  howOften = 4000;
  heartX = [];
  heartY = [];
  speed1 = true;
  speed2 = true;
  speed3 = true;
  goldX = [];
  goldY = [];
  firstTime = true;
  gameTime = true;
}

function playgame() {
  //Drawing bunny at center
  drawCharacter(heroX - 20, 430);

  //Setting up movement commands
  if (moveLeft == true && heroX > 40) {
    heroX -= heroSpeed;
  }

  if (moveRight == true && heroX < 960) {
    heroX += heroSpeed;
  }
}

function draw() {
  background(60, 128, 230);
  if (page == main) {
    
    //Repeating music
    if (song.isPlaying()) {
    } else {
      song.play();
    }
      
    if (firstTime == true)
      song.play()
      
    firstTime = false
    
    //Clouds
    drawCloud(100, 125);
    drawCloud(300, 50);
    drawCloud(500, 150);
    drawCloud(770, 100);

    //Dirt
    noStroke()
    textStyle(NORMAL);
    fill(175, 125, 50);
    rectMode(CORNER);
    rect(0, 440, 1000, 160);

    //Light Layer of Dirt
    fill(195, 155, 120);
    rect(0, 400, 1000, 40);

    //Grass
    fill(0, 205, 0);
    rect(0, 380, 1000, 20);

    //Buttons
    stroke(0);
    strokeWeight(5);
    fill('pink');
    rectMode(CENTER);
    rect(500, 270, 250, 80);
    rect(500, 400, 250, 80);
    rect(500, 530, 250, 80);

    //Words on Buttons
    strokeWeight(2);
    textFont('Helvetica');
    textSize(30);
    text('PLAY', 500, 270);
    text('INSTRUCTIONS', 500, 400);
    text('EXIT', 500, 530);

    fill('pink')
    strokeWeight(1);
    textSize(20);
    text("High Score: " + highScore, 500, 20);

    //Title
    strokeWeight(2);
    textSize(80);
    fill('pink');
    textStyle(BOLD);
    text('BUNNY DEFENSE!', 500, 120);

    //Carrots
    noStroke();
    drawCarrot(50, 400);
    drawCarrot(275, 400);
    drawCarrot(650, 400);

    //Bunny
    drawCharacter(160, 240);

    //Stones under the Ground
    noStroke();
    fill('grey');
    ellipseMode(CENTER);
    ellipse(40, 550, 20, 20);
    ellipse(240, 520, 20, 20);
    ellipse(170, 570, 20, 20);
    ellipse(130, 500, 20, 20);
    ellipse(130, 500, 20, 20);
    ellipse(760, 500, 20, 20);
    ellipse(700, 550, 20, 20);
    ellipse(850, 570, 20, 20);

    //Rock
    push();
    rotate(-PI);
    arc(-800, -380, 80, 90, 0, PI);
    pop();

    //Roots
    ellipseMode(CENTER);
    rectMode(CORNER);
    drawTree(870, 250);
    stroke('brown');
    strokeWeight(5);
    line(900, 380, 850, 450);
    line(910, 380, 950, 450);
    line(950, 450, 930, 475);
    line(850, 450, 810, 440);
    line(850, 450, 880, 490);
    line(880, 490, 850, 530);
    line(810, 440, 760, 500);
    line(930, 475, 960, 530);
    line(950, 450, 990, 460);

    //Sun
    fill('yellow');
    noStroke();
    ellipse(10, 10, 100, 100);
  }

  if (page == intructions) {
    background(0);
    rectMode(CENTER);
    noStroke();

    //Inside rectangle
    fill('pink');
    rect(500, 300, 900, 500);
    rectMode(CORNER);

    //Back and next buttons
    fill('red');
    rect(50, 50, 50, 50);
    rect(900, 50, 50, 50);

    //Adding bird and bunny to background
    noStroke();
    drawCharacter(225, 125);
    drawBird(825, 125);

    //Words on buttons
    stroke(0);
    fill(0);
    strokeWeight(2);
    textFont('Arial');
    textSize(15);
    text('BACK', 75, 75);
    text('NEXT', 925, 75);

    //Title
    textSize(50);
    text('Instructions', 500, 200);

    //Instructions
    textSize(20);
    strokeWeight(1);
    text('Ooh No! BunnyLand is under attack from vicious birds who want to steal your carrots.', 500, 300);
    text('Your goal is to kill all the birds and save bunny castle.', 500, 350);
    text('Remember, if 3 birds reach your castle you lose!', 500, 400);
    text('Use the left and right arrow keys to move your character and right mouse button to shoot.', 500, 450);
    text('Beware, as the game goes on the birds will fly faster and spawn more frequently.', 500, 500);
  }

  if (page == instructions2) {
    background(0);
    rectMode(CENTER);
    noStroke();

    //Inside rectangle
    fill('pink');
    rect(500, 300, 900, 500);
    rectMode(CORNER);

    //Castle and heart
    noStroke();
    drawHeart(225, 170, 60);
    drawCastle(750, 170);

    //Words on buttons
    fill('red');
    rect(50, 50, 50, 50);
    stroke(0);
    fill(0);
    strokeWeight(2);
    textFont('Arial');
    textSize(15);
    text('BACK', 75, 75);

    //Titile
    textSize(50);
    text('Instructions', 500, 200);

    //Instructions
    textSize(20);
    strokeWeight(1);
    text('A heart will spawn every 35 seconds and shooting it will give you +1 lives and +3 points', 500, 300);
    text("If you have 3 lives already shooting the heart won't give you more lives", 500, 350);
    text('Losing a life will make you lose -5 points.', 500, 400);
    text('Shooting a yellow orb that spawns every 20 seconds gives you +5 points.', 500, 450);
    text('Good luck and have fun!', 500, 500);
  }

  if (page == quit) {

    background(220);

    //Title
    strokeWeight(4);
    stroke(0);
    textFont('Times New Roman');
    textSize(100);
    fill('pink');
    text('GAME OVER', 500, 300);

    //Showing final score and highscore
    strokeWeight(1);
    stroke(0);
    textFont('Times New Roman');
    textSize(20);
    fill(0);
    text('Your Score: ' + score, 500, 475);
    text('Your High Score: ' + highScore, 500, 525);

    //Retry button
    fill('pink');
    rectMode(CENTER);
    rect(500, 400, 250, 80);

    //Words on button
    strokeWeight(4);
    stroke(0);
    textFont('Times New Roman');
    textSize(50);
    text('RETRY', 500, 400);

  }

  if (page == game) {
    
    //Checking to see if it should play music
    if (gameTime == true)
      song2.play();
    
    gameTime = false;
    
    //Repeating music
    if (song2.isPlaying()) {
    } else {
      song2.play();
    }
    
    //Checking and displaying # of hearts
    if (lives == 3) {
      drawHeart(500, 100, 100 / 4);
      drawHeart(550, 100, 100 / 4);
      drawHeart(450, 100, 100 / 4);
    } else if (lives == 2) {
      drawHeart(475, 100, 100 / 4);
      drawHeart(525, 100, 100 / 4);
    } else if (lives == 1) {
      drawHeart(500, 100, 100 / 4);
    } else {
      //If no lives then game over
      page = quit;
      if (score >= highScore && score >= 0) 
        highScore = score;
    }
    
    //Resetting timer
    if (clickPlay == true)
      start = millis();

    clickPlay = false;

    //Drawing background
    noStroke();
    rectMode(CENTER);
    fill(0, 205, 0);
    rect(500, 590, 1000, 40);
    drawCastle(450, 500);
    drawCloud(100, 175);
    drawCloud(300, 100);
    drawCloud(500, 200);
    drawCloud(770, 150);
    
    //Setting up movements
    playgame();

    //Displaying and calculating player score, accuracy and time
    time = millis() - start;
    strokeWeight(2);
    stroke(0);
    textFont('Times New Roman');
    textSize(50);
    fill(255);
    text('Time:' + round(time / 1000), 450, 50);
    text('Score:' + score, 200, 50);
    text('Accuracy:' + round(hits/ numbOfShots * 100) + '%', 750, 50);

    //Check for collisions of bullet and enemy
    for (i = bulletX.length - 1; i >= 0; i--) {
      for (j = enemyY.length - 1; j >= 0; j--) {
        if (dist(enemyX[j], enemyY[j] - 10, bulletX[i], bulletY[i] - 50) <= 35) {
          //Delete bullet and enemy if they collide
          bulletY.splice(i, 1);
          bulletX.splice(i, 1);
          enemyY.splice(j, 1);
          enemyX.splice(j, 1);
          
          //If bullet hits then add to score and # of shots
          hits++;
          score++;
          numbOfShots++;
          
          //sound effect
          sound.play();
        }
      }
    }

    //Only make enemy spawn faster until a certian point
    if (howOften <= 850) {
      change = false;
    }

    // Spawn rate and location of enemies
    noStroke();
    if (millis() - lastTime > howOften) {
      lastTime = millis();
      if (change == true) {
        howOften *= 0.9;
      }
      enemyY[enemyY.length] = 0;
      enemyX[enemyX.length] = random(20, 980);
    }

    //Only Change speed once after 25 sec, 50 sec and 75 sec 
    if (speed1 == true) {
      if (round(time / 1000) % 25 == 0 && round(time / 1000) > 5) {
        enemySpeed = 1.25;
        speed1 = false;
      }
    }
    if (speed2 == true) {
      if (round(time / 1000) % 50 == 0 && round(time / 1000) > 5) {
        enemySpeed = 1.75;
        speed2 = false;
      }
    }

    if (speed3 == true) {
      if (round(time / 1000) % 75 == 0 && round(time / 1000) > 5) {
        enemySpeed = 2.25;
        speed3 = false;
      }
    }

    //Drawing enemies
    for (i = 0; i < enemyY.length; i++) {
      fill(0);
      drawEnemy(enemyX[i], enemyY[i]);
      enemyY[i] += enemySpeed;
      if (enemyY[i] >= 580) {
        //delete enemy once it reaches bottom of page
        enemyY.splice(i, 1);
        enemyX.splice(i, 1);
        //If enemy reaches castle, take away 1 life and 5 points
        lives--;
        score -= 5;
        //Play sound effect
        sound2.play();
      }
    }

    //Only shoot when mouse clicked
    if (shoot == true) {
      for (i = 0; i < bulletY.length; i++) {
        drawBullet(bulletX[i], bulletY[i]);
        bulletY[i] -= 5;
        if (bulletY[i] <= 0) {
          //delete bullets once they go off the page and add to # of shots
          bulletY.splice(i, 1);
          bulletX.splice(i, 1);
          numbOfShots++;
        }
      }
    }

    //Check bullet and heart collision
    for (i = bulletX.length - 1; i >= 0; i--) {
      for (j = heartY.length - 1; j >= 0; j--) {
        if (dist(heartX[j], heartY[j], bulletX[i], bulletY[i] - 50) <= 35) {
          //Delete both if collide
          bulletY.splice(i, 1);
          bulletX.splice(i, 1);
          heartY.splice(j, 1);
          heartX.splice(j, 1);
          
          //Add to score and # of shots and only add to lives if lives < 3
          score += 3;
          hits++;
          numbOfShots++;
          if (lives < 3)
            lives++;
          
          //sound effect
          sound.play();
        }
      }
    }

    //Spawn rate and location of hearts  
    if (millis() - heartTime > 35000) {
      heartTime = millis();
      heartY[heartY.length] = 0;
      heartX[heartX.length] = random(20, 980);
    }

    //Drawing Hearts
    for (k = 0; k < heartY.length; k++) {
      drawHeart(heartX[k], heartY[k], 40);
      heartY[k] += 2.75;
      if (heartY[k] >= 580) {
        //delete if off screen
        heartY.splice(k, 1);
        heartX.splice(k, 1);
      }
    }

    //Check for bullet and yellow orb collision
    for (i = bulletX.length - 1; i >= 0; i--) {
      for (j = goldY.length - 1; j >= 0; j--) {
        if (dist(goldX[j], goldY[j], bulletX[i], bulletY[i] - 50) <= 30) {
          //Delete if off screen
          bulletY.splice(i, 1);
          bulletX.splice(i, 1);
          goldY.splice(j, 1);
          goldX.splice(j, 1);
         
          //Add to score hits and numb of shots
          score += 5;
          hits++;
          numbOfShots++;
          
          //sound effect
          sound.play();
        }
      }
    }

    //Spawn rate and location of gold/yellow orb
    if (millis() - goldTime > 20000) {
      goldTime = millis();
      goldY[goldY.length] = 0;
      goldX[goldX.length] = random(20, 980);
    }

    //Draweing yellow orb
    for (k = 0; k < goldY.length; k++) {
      drawGold(goldX[k], goldY[k], 40);
      goldY[k] += 2.75;
      if (goldY[k] >= 580) {
        //delete if off screen
        goldY.splice(k, 1);
        goldX.splice(k, 1);
      }
    }
  }
}

function mouseClicked() {
  if (mouseButton == LEFT) {
    // only on the menu
    if (page == main) {
      if (mouseX >= 500 - 125 && mouseX <= 500 + 125 && mouseY >= 270 - 40 && mouseY <= 270 + 40) { //game
        page = game;
        //reset all player variables
        initialize();
        //reset time variables
        lastTime = millis();
        heartTime = millis();
        goldTime = millis();
        song.stop();
        song2.stop();
        gameTime = true;
      } else if (mouseX >= 500 - 125 && mouseX <= 500 + 125 && mouseY >= 400 - 40 && mouseY <= 400 + 40) { //instructions
        page = intructions;
        song.stop();
        song2.stop();
      } else if (mouseX >= 500 - 125 && mouseX <= 500 + 125 && mouseY >= 530 - 40 && mouseY <= 530 + 40) { //game over
        page = quit;
        song.stop();
        song2.stop();
      }
    }
    // only on instructions
    if (page == intructions) {
      if (mouseX >= 50 && mouseX <= 100 && mouseY >= 50 && mouseY <= 100) { //back button
        page = main;
        firstTime = true;
        gameTime = false;
      } else if (mouseX >= 900 && mouseX <= 950 && mouseY >= 50 && mouseY <= 100) { //next button
        page = instructions2;
      }
    }

    //Only on instuctions2
    if (page == instructions2) {
      if (mouseX >= 50 && mouseX <= 100 && mouseY >= 50 && mouseY <= 100) { //back button
        page = main;
        firstTime = true;
        gameTime = false;
      }
    }

    if (page == game) {
      shoot = true;
      bulletY[bulletY.length] = 500;
      bulletX[bulletX.length] = heroX;
    }
    //only on quit page
    if (page == quit) {
      if (mouseX >= 500 - 125 && mouseX <= 500 + 125 && mouseY >= 400 - 40 && mouseY <= 400 + 40) { //retry button
        page = main;
        song2.stop();
        firstTime = true;
        gameTime = false;
      }
    }
  }
}

//Move left and right
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = true;
  } else if (keyCode === RIGHT_ARROW) {
    moveRight = true;
  }
}

//Prevent character from moving in one directions if no button is pressed
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    moveRight = false;
  }
}
