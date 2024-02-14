const prompt = require("prompt-sync")();

/* size */
const ROWS = 3;
const COLS = 3;
/* symbols */
const SYMBOLS_COUNT = {
  A: 3,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUES = {
  A: 5,
  B: 3,
  C: 2,
  D: 1,
};

/* main */
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines to bet on (1-3)");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid lines number, try again.");
    } else {
      return numberOfLines;
    }
  }
};
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
