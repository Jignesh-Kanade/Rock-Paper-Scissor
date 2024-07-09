let userScore = 0;
let compScore = 0;

let choises = document.querySelectorAll(".choise");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userPoints");
let compScorePara = document.querySelector("#compPoints");

choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    let userChoise = choise.getAttribute("id");
    playGame(userChoise);
  });
});

const genCompChoise = () => {
  let options = ["rock", "paper", "scissor"];
  let optionIdx = Math.floor(Math.random() * 3); //Method to generate random number each time
  return options[optionIdx];
};

const drawMatch = (userChoise, compChoise) => {
  if (userChoise === compChoise) {
    msg.innerText = `Match was draw.Play again`;
    msg.style.backgroundColor = "blue";
  }
};

const userWins = (userChoise, compChoise) => {
  if (userChoise === "rock" && compChoise === "scissor") {
    msg.innerText = `You wins! Yours ${userChoise} beats computers ${compChoise}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  } else if (userChoise === "paper" && compChoise === "rock") {
    msg.innerText = `You wins! Yours ${userChoise} beats computers ${compChoise}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  } else if (userChoise === "scissor" && compChoise === "paper") {
    msg.innerText = `You wins! Yours ${userChoise} beats computers ${compChoise}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  }
};

const compWins = (userChoise, compChoise) => {
  if (userChoise === "rock" && compChoise === "paper") {
    msg.innerText = `You Loose! Computer ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
  } else if (userChoise === "paper" && compChoise === "scissor") {
    msg.innerText = `You Loose! Computer ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
  } else if (userChoise === "scissor" && compChoise === "rock") {
    msg.innerText = `You Loose! Computer ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
  }
};

const playGame = (userChoise) => {
  let compChoise = genCompChoise();

  drawMatch(userChoise, compChoise);
  userWins(userChoise, compChoise);
  compWins(userChoise, compChoise);
};
