// Jake Kingdon
// Assignment 3 Question 4
// March 20th, 2023
// Making the "baseball" sprite drop from the top of the screen when the user clicks on the canvas and I added a test to draw() to see if the seed hit the ground. 
// Reused code from Q3


let baseballX, baseballY;
let gloveX, gloveY;
let caught;
let isFalling;

function setup() {
  createCanvas(400, 400);
  resetGame();
}

// Function that makes the basball drop from a random "X" coordinate from the top of the screen.
function resetGame() {
  baseballX = random(400);
  baseballY = 0;
  gloveX = 0;
  gloveY = height - 20;
  caught = false;
  isFalling = false;
}

// Added colorful background. 
function draw() {
  background("lightblue");
fill("green");
rect(0, 280, width, height / 3);
fill("yellow")
ellipse(20, 30, 100)
  

  
  // move the glove with the mouse.
  gloveX = mouseX;

  // Draw the glove.
  fill("brown");
  rect(gloveX, gloveY, 60, 20);

  // Draw the baseball.
  if (isFalling) {
    if (!caught) {
      fill("white");
      circle(baseballX, baseballY, 20);
      baseballY += 5;
      // Check if the baseball is caught.
      if (
        baseballY > height - 20 &&
        baseballX > gloveX &&
        baseballX < gloveX + 60
      ) {
        caught = true;
        fill("white");
      }
    } else {
      fill(255, 0, 0);
      circle(baseballX, baseballY, 20);
    }

    // Check if the baseball is off the screen.
    if (baseballY > height) {
      resetGame();
    }
  }

  // Add test to see if the seed has hit the ground and reset it to the top.
  if (!isFalling) {
    fill("white");
    circle(baseballX, baseballY, 20);
  }
}

// Click the mouse or trackpad to reset the game and start the baseball falling from the top of the screen.
function mouseClicked() {
  if (!isFalling) {
    isFalling = true;
  } else {
    resetGame();
  }
}
