// Jake Kingdon
// Assignment 3 Question 3
// March 8th, 2023
// Making the "baseball" sprite drop from the top of the screen using the "baseballX = random(400);" function

let baseballX, baseballY;
let gloveX, gloveY;
let caught;

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
}

function draw() {
  background(220);

  // move the glove with the mouse.
  gloveX = mouseX;

  // Draw the glove
  fill("brown");
  rect(gloveX, gloveY, 60, 20);

  // Draw the baseball.
  if (!caught) {
    fill("white");
    circle(baseballX, baseballY, 20);
    baseballY += 5;

    // Check if the baseball is caught
    if (
      baseballY > height - 20 &&
      baseballX > gloveX &&
      baseballX < gloveX + 60
    ) {
      caught = true;
      fill(255, 0, 0);
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

// Click the mouse or trackpad to reset the game.
function mouseClicked() {
  resetGame();
}
