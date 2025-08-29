let rockBtn = document.querySelector(".rockBtn");
let paperBtn = document.querySelector(".paperBtn");
let scissorsBtn = document.querySelector(".scissorsBtn");
let p1winCount = document.querySelector(".p1winCount");
let p2winCount = document.querySelector(".p2winCount");
let message = document.querySelector(".message");

let mySelection = null;
let compSelection = null;
let youWin = 0;
let compWin = 0;
let meWin = null; //0-me 1-comp else-draw

let arr = ["rock", "paper", "scissors"];
const compChoice = () => {
  let indx = Math.floor(Math.random() * 3);
  return arr[indx];
}


rockBtn.addEventListener("click", () => {
  mySelection = "rock";
  compSelection = compChoice();
  if (compSelection === "scissors") {
    meWin = 0;
  } else if (compSelection === "paper") {
    meWin = 1;
  } else {
    meWin = 37;
  }
  updateChanges();
});

paperBtn.addEventListener("click", () => {
  mySelection = "paper";
  compSelection = compChoice();
  if (compSelection === "scissors") {
    meWin = 1;
  } else if (compSelection === "rock") {
    meWin = 0;
  } else {
    meWin = 37;
  }
  updateChanges();
});

scissorsBtn.addEventListener("click", () => {
  mySelection = "scissors";
  compSelection = compChoice();
  if (compSelection === "paper") {
    meWin = 0;
  } else if (compSelection === "rock") {
    meWin = 1;
  } else {
    meWin = 37;
  }
  updateChanges();
});

const updateChanges = () => {
  if (meWin === 0) {
    youWin++;
    p1winCount.innerText = youWin;
    message.innerText = "You Won";
    message.style.backgroundColor = "green";
  } else if (meWin === 1) {
    compWin++;
    p2winCount.innerText = compWin;
    message.innerText = "Computer Won";
    message.style.backgroundColor = "red";
  } else if (meWin == 37) {
    message.innerText = "Its a draw";
    message.style.backgroundColor = "grey";
  }
}
