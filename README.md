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
- [ ] Win message section
- [ ] Classes and IDs:
  - [X] `.game`
  - [X] `.game__header`
  - [X] `.game__info`
  - [X] `.game__grid`
  - [X] `.game__stats`
  - [X] `#gameGrid`
  - [ ] `.card`
  - [ ] `.card--flipped`
  - [ ] `.card--matched`
  - [X] `#moves`
  - [X] `#restartButton`

## CSS / SCSS

- [ ] Mobile-first layout
- [ ] Center the game on the page
- [ ] Grid layout for cards
- [ ] Card styling
- [ ] Card hover effect
- [ ] Different style for flipped cards
- [ ] Different style for matched cards
- [ ] Button styling
- [ ] Win message styling
- [ ] Responsive layout for larger screens

## JS LOGIC

- [X] Create an array of card values
- [X] Duplicate the values so every card has a pair
- [ ] Shuffle the cards randomly
- [ ] Create the card elements using JavaScript
- [ ] Add click events to each card
- [ ] When a card is clicked, flip it over
- [ ] Store the first selected card
- [ ] Store the second selected card
- [ ] Stop the user clicking more than two cards at once
- [ ] Compare the two selected cards
  - [ ] If they match, keep them face up
  - [ ] If they do not match, flip them back over
- [ ] Increase the move count after every pair attempt
- [ ] Check if all cards have been matched
- [ ] Show a win message when the game is complete
- [ ] Restart the game without refreshing the page


Precise Technical Language

Use correct terminology to signal mastery: “parameters” (function definition) vs. “arguments” (function call), “array” vs. “list”
Small word choices accumulate to show solid understanding of the language and concepts
Code Highlighting During Walkthroughs

Pinpointing specific code focuses both speaker and listener on the same thing simultaneously
Aids the explainer’s recall and prevents the listener from getting distracted by surrounding code
Comments vs. README Documentation

Excessive inline comments are a first-draft tool, not production practice
Move explanations into the README instead:
Reinforces ability to articulate logic (useful interview prep)
Shows interviewers how you think and solve problems via GitHub portfolio
Keeps code clean and readable
Production comments reserved for genuinely complex or unusual library/framework usage
Can link out to a README section rather than inline explanation
Next Steps

Clean up code and improve button UI
Add images to the game for a UI/UX bump
Move inline comments into README, explaining each function’s purpose there
