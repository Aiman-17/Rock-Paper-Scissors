let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  console.log("Game was draw.");
  message.innerText = "Draw Game. Try again😶";
  message.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Won!");
    message.innerText = `Victory You Won!🥳 ${userChoice} beats ${compChoice}` ;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You Lose");
    message.innerText = `You Lose🩻 ${compChoice} computer win! beates ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("userChoice", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compScore === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compScore === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
  });
});
