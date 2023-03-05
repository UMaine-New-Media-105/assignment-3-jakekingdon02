// Jake Kingdon
// Assignment 3 Question 2
// Making my baseball sprite turn "red" when it is caught by the catcher's glove.

let ballX, ballY; // x and y coordinates of the ball
let ballSize = 30; // diameter of the ball
let ballSpeedX, ballSpeedY; // speed of the ball
let gloveX, gloveY; // x and y coordinates of the glove
let gloveWidth = 100; // width of the glove
let gloveHeight = 50; // height of the glove
let caught = false; // whether the ball has been caught or not

function drawBall() {
  if (caught) {
    fill("red");
  } else {
    fill("white");
  }
  ellipse(ballX, ballY, ballSize);
}

function setup() {
  createCanvas(400, 400);
  resetBall();
  gloveX = width / 2 - gloveWidth / 2; // place the glove in the middle of the canvas
  gloveY = height - gloveHeight - 10; // place the glove near the bottom of the canvas
}

function draw() {
  background(220);
  moveBall();
  checkCollision();
  drawBall();
  drawGlove();
}

// Ball size
function resetBall() {
  ballX = random(ballSize, width - ballSize);
  ballY = random(ballSize, height / 2);
  ballSpeedX = random(-5, 5);
  ballSpeedY = random(3, 7);
  caught = false;
}

// Speed of the ball
function moveBall() {
  if (!caught) {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX + ballSize / 2 > width || ballX - ballSize / 2 < 0) {
      ballSpeedX *= -1;
    }
    if (ballY + ballSize / 2 > height || ballY - ballSize / 2 < 0) {
      ballSpeedY *= -1;
    }
  }
}

// Initial collision
function checkCollision() {
  if (
    !caught &&
    ballY + ballSize / 2 > gloveY &&
    ballX > gloveX &&
    ballX < gloveX + gloveWidth
  ) {
    ballSpeedY *= -1;
    caught = true;
  }
}

// Draw the baseball
function drawBall() {
  fill("white");
  ellipse(ballX, ballY, ballSize);
}

// Draw the glove
function drawGlove() {
  fill("brown");
  rect(gloveX, gloveY, gloveWidth, gloveHeight);
}

function mouseMoved() {
  if (!caught) {
    gloveX = mouseX - gloveWidth / 2;
  }
}

function drawBall() {
  if (caught) {
    fill("red");
  } else {
    fill("white");
  }
  ellipse(ballX, ballY, ballSize);
}

function mousePressed() {
  if (caught) {
    resetBall();
  }
}
