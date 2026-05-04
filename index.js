// This finds the card grid in the HTML.
const gameGrid = document.querySelector("#gameGrid");

// This array stores the unique card values.
// Each value will later appear twice so the player can find matching pairs.
const cardValues = ["Pair1", "Pair2", "Pair3", "Pair4"];

// This function creates the full deck of cards.
// We use the spread operator (...) to copy the cardValues array twice.
const createDeck = () => {
  return [...cardValues, ...cardValues];
};

// This creates a function to shuffle the cards in a random order,
// So they don't display in the same position
const shuffleCards = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

// Creates the variables that remember which cards the player picks
let firstCard = null;
let secondCard = null;

// Creates the move counter variable
let moves = 0;

// Create a funtion to activate when card gets clicked
const handleCardClick = (event) => {
  const clickedCard = event.target;

  clickedCard.textContent = clickedCard.dataset.value;

  if (firstCard === null) {
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;

    updateMoves();      // count the attempt
    checkForMatch();    // compare cards
  }
};

//Checks for match function
const checkForMatch = () => {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    console.log("Match!");

    // Reset selection so player can continue
    firstCard = null;
    secondCard = null;

  } else {
    console.log("Not a match!");

    // Flip cards back after 1 second
    setTimeout(() => {
      firstCard.textContent = "?";
      secondCard.textContent = "?";

      firstCard = null;
      secondCard = null;
    }, 1000);
  }
};

// Updates the move counter when user clicks
const updateMoves = () => {
  moves++;
  document.querySelector("#moves").textContent = moves;
};

// This function creates the cards and adds them to the page.
const createBoard = () => {
  // Creates the full deck by calling createDeck(),
  // Also activates the function to shuffle the cards
  const deck = shuffleCards(createDeck());

  // forEach lets us go through each item in the deck one at a time.
  deck.forEach((cardValue) => {
    // Create a button element for each card.
    const card = document.createElement("button");

    // Adds the class "card" so we can style it in SCSS.
    card.classList.add("card");

    // Stores the real card value inside a data attribute.
    card.dataset.value = cardValue;

    // Shows a question mark on the card while it is face down.
    card.textContent = "?";

    // Adds the finished card to the game grid in the HTML.
    gameGrid.appendChild(card);

    card.addEventListener("click", handleCardClick);
  });
};

// This starts the game board creation when the page loads.
createBoard();
