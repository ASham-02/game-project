# Memory Card Match Game

## Objective

Create a browser-based memory card game using HTML, SCSS/CSS, and JavaScript.

The user should be able to click cards to reveal them, try to find matching pairs, track their moves, and restart the game without refreshing the page.

## HTML

- [X] Game title
- [X] Start 
- [X] Restart button
- [X] Moves display
- [X] Card grid container
- [X] Individual card elements created with JavaScript
- [X] Win message section
- [X] Classes and IDs:
  - [X] `.game`
  - [X] `.game__header`
  - [X] `.game__info`
  - [X] `.game__grid`
  - [X] `.game__stats`
  - [X] `#gameGrid`
  - [X] `.card`
  - [X] `.card--flipped`
  - [X] `.card--matched`
  - [X] `#moves`
  - [X] `#restartButton`

## CSS / SCSS

- [X] Mobile-first layout
- [X] Center the game on the page
- [X] Grid layout for cards
- [X] Card styling
- [X] Card hover effect
- [X] Different style for flipped cards
- [X] Different style for matched cards
- [X] Button styling
- [X] Win message styling
- [X] Responsive layout for larger screens

## JS LOGIC

- [X] Create an array of card values
- [X] Duplicate the values so every card has a pair
- [X] Shuffle the cards randomly
- [X] Create the card elements using JavaScript
- [X] Add click events to each card
- [X] When a card is clicked, flip it over
- [X] Store the first selected card
- [X] Store the second selected card
- [X] Stop the user clicking more than two cards at once
- [X] Compare the two selected cards
  - [X] If they match, keep them face up
  - [X] If they do not match, flip them back over
- [X] Increase the move count after every pair attempt
- [X] Check if all cards have been matched
- [X] Show a win message when the game is complete
- [X] Restart the game without refreshing the page

### `createDeck()`

Creates the full deck by duplicating the original card values array.  
This gives every card one matching pair.

### `shuffleCards(deck)`

Randomises the order of the cards so the game is different each time it starts.

### `createBoard()`

Creates the card elements, adds the correct classes and data values, then appends them to the game grid.

### `handleCardClick(event)`

Controls what happens when the player clicks a card.

### `checkForMatch()`

Compares the two selected cards using their `data-value`.

If they match, both cards are given the `card--matched` class.  
If they do not match, the board locks briefly and both cards flip back over.

### `updateMoves()`

Increases the move counter after the player selects two cards.

### `checkWin()`

Checks whether the number of matched pairs equals the number of unique card values.  
If true, the win message is displayed.

### `restartGame()`

Resets the game state, clears the grid, resets the move counter and win message, then creates a new shuffled board.
