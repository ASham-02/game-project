// This finds the card grid in the HTML.
const gameGrid = document.querySelector("#gameGrid");

// This array stores the unique card values.
// Each value will later appear twice so the player can find matching pairs.
const cardValues = ["Pair1", "Pair2", "Pair3", "Pair4"];

// This function creates the full deck of cards.
// We use the spread operator (...) to copy the cardValues array twice.
// This makes it so it's : ["Pair1", "Pair2", "Pair3", "Pair4", and "Pair1", "Pair2", "Pair3", "Pair4"]
const createDeck = () => {
  return [...cardValues, ...cardValues];
};

// This function creates the cards and adds them to the page.
const createBoard = () => {
  // First we create the full deck by calling createDeck().
  const deck = createDeck();

  // forEach lets us go through each item in the deck one at a time.
  deck.forEach((cardValue) => {
    // Create a button element for each card.
    const card = document.createElement("button");

    // Add the class "card" so we can style it in CSS.
    card.classList.add("card");

    // Store the real card value inside a data attribute.
    card.dataset.value = cardValue;

    // Show a question mark on the card while it is face down.
    card.textContent = "?";

    // Add the finished card to the game grid in the HTML.
    gameGrid.appendChild(card);
  });
};

// This starts the game board creation when the page loads.
createBoard();
