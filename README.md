# assignment-3-jakekingdon02.
assignment-3-jakekingdon02 created by GitHub Classroom.
README for "assigment 3" questions 1-5. 
Due: March 24th, 2023. 
NMD-105

Question 1: For question one, I made my baseball sprite bouncing off the walls of the canvas. When the baseball is caught, It stays in
the catcher sprite until the user clicks the trackpad or play on the top left of the p5 sketch. I created functions to draw both the
baseball and the catcher sprites and I used a resetBall function to make the baseball from from the top of the screen after the baseball
is caught and after the user clicks the trackpad. 
Link to the sketch: https://editor.p5js.org/Jake_Kingdon02/sketches/ai23FOEDY

Question 2: For Question two, I made my baseball sprite turn "red" when it is caught by the catcher's glove. The mouseMoved function
updates the x coordinate of the glove based on the position of the mouse, and the mousePressed function resets the game if the ball is
caught. The code also includes other functions such as resetBall, which sets the initial position and speed of the ball, and 
checkCollision, which checks whether the ball has interacted with the glove. 
Link: https://editor.p5js.org/Jake_Kingdon02/sketches/ltfqF2T5q

Question 3: For question 3, I made the "baseball" sprite drop from the top of the screen using the baseballX = random(400); function.
I start by defining my variables The code starts by defining global variables baseballX, baseballY, gloveX, gloveY, and caught. The 
resetGame() function initializes the position of the baseball to a random x-coordinate at the top of the screen, the glove's
x-coordinate to zero, the glove's y-coordinate to the bottom of the screen minus 20 pixels, and sets caught to false. 
Link: https://editor.p5js.org/Jake_Kingdon02/sketches/kb13CFtlW

Question 4: For question four, I made the "baseball" sprite drop from the top of the screen when the user clicks on the canvas and I 
added a test to draw to see if the seed hit the ground. The variables baseballX, baseballY, gloveX, gloveY, caught, and isFalling are
declared and initialized to specific values. The setup function calls the resetGame function to start the game from the beginning. 
The resetGame function sets the initial position of the baseball and glove. The draw function is called repeatedly and handles 
drawing the game objects on the canvas. I also added a color background consisting of a blue sky, green grass, and a yellow sun. 
Link: https://editor.p5js.org/Jake_Kingdon02/sketches/Anv4eUtR8

Question 5: For question five, I changed the catcher’s appearance when it overlaps with the falling item rather than when the user
clicks. In the draw function, the background is set to sky blue color, a green rectangle represents grass and a yellow ellipse 
represents a son. The position of the catcher is set to the mouseX position and is drawn as a brown rectangle unless the baseball is 
caught. If the baseball is caught, the catcher turns red. Also, If the user clicks the trackpad, the resetGame() function is called and 
the isFalling variable is set to true, indicating that the baseball is falling. 
Link: https://editor.p5js.org/Jake_Kingdon02/sketches/xNlbbM9E1




