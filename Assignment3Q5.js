// Jake Kingdon
// Assignment 3 Question 5
// Change the catcher’s appearance when it overlaps with the falling item rather than when the user clicks. 
// Reused code from Q4

let baseballX, baseballY;
let catcherX, catcherY;
let isCaught;
let isFalling;

function setup() {
  createCanvas(400, 400);
  resetGame();
}

// Function that makes the baseball drop from a random "X" coordinate from the top of the screen.
function resetGame() {
  baseballX = random(400);
  baseballY = 0;
  catcherX = 0;
  catcherY = height - 20;
  isCaught = false;
  isFalling = false;
}

// Added colorful background. 
function draw() {
  background("lightblue");
  fill("green");
  rect(0, 280, width, height / 3);
  fill("yellow");
  ellipse(20, 30, 100);

  // Move the catcher with the mouse.
  catcherX = mouseX;

  // Draw the catcher.
  if (isCaught) {
    fill("red"); // Change catcher color when baseball is caught.
  } else {
    fill("brown");
  }
  rect(catcherX, catcherY, 60, 20);

  // Check if the baseball is caught.
  if (baseballY > height - 20 && baseballX > catcherX && baseballX < catcherX + 60) {
    isCaught = true;
  } else {
    isCaught = false;
  }

  // Change catcher color when overlaps with the falling item.
  if (baseballY > height - 20 && baseballX > catcherX && baseballX < catcherX + 60) {
    fill("red"); // change catcher color when overlaps with the falling item
  }

  // Check if the baseball is off the screen.
  if (baseballY > height) {
    resetGame();
  }

  // Add test to see if the baseball has hit the ground and reset it to the top.
  if (isFalling) {
    fill("white");
    circle(baseballX, baseballY, 20);
    baseballY += 5;
  }
}

// Click the trackpad to reset the game from the top of the screen.
function mouseClicked() {
  resetGame();
  isFalling = true;
}



