# Long Loved Classic Games
A web application where you can play Battleship against a computer with human-like logic, engage in a game of Tic Tac Toe against an unbeatable computer, and experience Lazy Knight, all built with vanilla HTML, CSS, and JS.

## Tic Tac Toe

### Description
App that allows two human players to play the classic game of Tic Tac Toe and also the option to play against an unbeatable computer.

### Features

* Implemented Minimax Algorithm to create an unbeatable computer. The game will always result in a tie or computer win
* Created variance in the computer's next move by collecting all the moves with the same minimax score (where the same minimax score indicates the same outcome) and returning the next move randomly
* A tree to represent all the possible outcomes. Each node on the tree has score (Minimax), moves it took to get to that node, and what the board looks like at that node.

### Built With

* HTML
* CSS
* JS

### Difficulties Encountered

* I struggled to implement a recursion solution to get the score for the next moves so I used nested for loops to get the scores. The nested for loops will make it difficult to debug and add future updates

### Future Improvements

* Use recursion instead of for loops to return the score of the next moves
* Refactor the nested for loops into nested functions for better debugging and cleaner code
* Create an option to allow the computer to go first instead of human going first
* Add a score board

## Lazy Knight

### Description
App that calculates and animates the least number of moves needed for a knight to move from the chosen start location to the end location on a chess board.

### Features

* Tree where each node has 8 child nodes to represent the 8 possible moves that a knight can take on a board
* Breadth First Search Traversal of a tree to find the least number of moves needed to move from start location to end location
* Animation of the knight moving on the board by using vanilla JS (combination of setTimeout, transform, and updating the location of the knight on the board with each transform)
* Separation of logic and user interface

### Built With
* HTML
* CSS
* JS

### Difficulties Encountered

* When traversing the tree to find the end location, I needed a way to save all the nodes that were traversed to reach the end location. To solve this, instead of adding only the next node into the queue for BFS, add all the previously traversed nodes with the next node as the last index in an array before adding it in the queue. Then return the entire array of nodes when the last index of the array of nodes matches the end location.
* I wanted the knight to be able to move from spot to spot. So I combined setTimeout with transform CSS property to visually show the knight jumping from location to location

### Future Improvements

* Revise the app to be a game where the player has to enter the number of moves for the knight to travel from a random start location to a random end location within a certain time limit
* Add feature to change the size of the board
* Use recursion instead of for loops to refactor the algorithm for constructing the tree
* Revise traverse algorithm to be more efficient by only traversing the nodes that will result in being closer to the end location. It is currently traversing all the possible moves.
* Add a sister game that asks the player to input the least number of moves needed to move from start to end with the given start and end location
* Make the app mobile friendly

## Battleship

### Description
App to play the game of Battleship against a computer.

### Features

* Utilized a set of boolean variables to ensure that if the computer lands a hit, it will continue attacking the adjacent coordinates until the ship is sunken to imitate human player logic
* Used z-index and position to stack two divs on top of each other, allowing one div to display the ships on the board and the other div to display the coordinates that were attacked
* Utilized object-oriented programming principles to encapsulate game data
* Uses a type writer effect to display the game actions/statuses

### Built With
* HTML
* CSS
* JS

### Difficulties Encountered

* I needed a way to put the SVG of the ships on the board while also displaying the hit markers. So I used two divs layed on top of each other and z-index to create two displays, one to display ships and one to display hit markers
* I wanted a type writer effect to show the game actions/statuses. So I combined a for loop with setTimeout to change the content of the HTML element letter by letter
* While implementing the feature where if the computer lands a hit, it will continue attacking adjacent coordinates until the ship is sunken, I realized it would have been easier to just check the placement of the ship and randomize the next attack to up, left, right, down while knowing which moves will actually result in a hit. Instead, I implemented a feedback loop, resulting in much more lines of code

### Future Improvements

* Make the app mobile friendly
* Implement 2 player mode
* Implement a smarter computer where it will not choose coordinates that the remaining ships would not fit in
