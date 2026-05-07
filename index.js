const gameGrid = document.querySelector("#gameGrid");
const restartButton = document.querySelector("#restartButton");

const cardValues = [
  `Charmander.png`,
  `Bulbasaur.png`,
  `Squirtle.png`,
  `Pikachu.png`,
];

const createDeck = () => {
  return [...cardValues, ...cardValues];
};

const shuffleCards = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};


let firstCard = null;
let secondCard = null;
let moves = 0;
let lockBoard = false;
let matchedPairs = 0;

const handleCardClick = (event) => {
  if (lockBoard) return;

  const clickedCard = event.target;

  if (clickedCard === firstCard) return;
  if (clickedCard.classList.contains("card--matched")) return;

  clickedCard.querySelector("img").style.display = "block";

  if (firstCard === null) {
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;

    updateMoves();
    checkForMatch();
  }
};

const checkForMatch = () => {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    console.log("Match!");

    firstCard.classList.add("card--matched");
    secondCard.classList.add("card--matched");
    matchedPairs++;
    checkWin();

    firstCard = null;
    secondCard = null;
  } else {
    console.log("Not a match!");

    lockBoard = true;

    setTimeout(() => {
      firstCard.querySelector("img").style.display = "none";
      secondCard.querySelector("img").style.display = "none";

      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }, 1000);
  }
};

const updateMoves = () => {
  moves++;
  document.querySelector("#moves").textContent = moves;
};

const createBoard = () => {
  const deck = shuffleCards(createDeck());

  deck.forEach((cardValue) => {
    const card = document.createElement("button");

    card.classList.add("card");

    card.dataset.value = cardValue;

    card.innerHTML = `<img src="${cardValue}" alt="Pokemon card">`;

    gameGrid.appendChild(card);

    card.addEventListener("click", handleCardClick);
  });
};

const checkWin = () => {
  if (matchedPairs === cardValues.length) {
    document.querySelector("#message").textContent =
      `You won in ${moves} moves!`;
  }
};

const restartGame = () => {
  firstCard = null;
  secondCard = null;

  moves = 0;

  lockBoard = false;

  document.querySelector("#moves").textContent = moves;

  gameGrid.innerHTML = "";

  createBoard();

  matchedPairs = 0;
  document.querySelector("#message").textContent = "";
};

restartButton.addEventListener("click", restartGame);

createBoard();
