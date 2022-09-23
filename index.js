let thirdCard = document.querySelector(".third-card");
let messageDisplay = document.querySelector(".message-display");
let sumDisplay = document.querySelector(".sum-display");
let cardDisplay = document.querySelector(".card-display");

let player = {
  name: "sorrow",
  chips: 200,
};

money = document.querySelector(".money-display");
money.textContent = `${player.name}: $${player.chips}`;

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function getRandomCard() {
  let random = Math.trunc(Math.random() * 13);
  if (random > 10) {
    return 13;
  } else if (random === 1) {
    return 10;
  } else {
    return random;
  }
}

function drawCard() {
  if (sum < 21) {
    message = "do you want to draw a new card";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "you are a winner";
  } else {
    isAlive = false;
    message = "you have lost and cant draw a new card";
  }
  messageDisplay.textContent = message;
  sumDisplay.textContent = `Sum:  ${sum}`;
  cardDisplay.textContent = `cards:  `;
  for (let card of cards) {
    cardDisplay.textContent += card + " ";
  }
}

document.querySelector(".start").addEventListener("click", function () {
  let first = getRandomCard();
  let second = getRandomCard();
  cards = [first, second];
  sum = first + second;
  drawCard();
});

document.querySelector(".new-game").addEventListener("click", function () {
  if (isAlive === true && hasBlackJack === false) {
    let third = getRandomCard();
    cards.push(third);
    sum += third;
    // cardDisplay.textContent = `Cards: `;
    for (let i = 0; i < cards.length; i++) {
      cardDisplay.textContent += cards[i];
    }
  }

  drawCard();
});
