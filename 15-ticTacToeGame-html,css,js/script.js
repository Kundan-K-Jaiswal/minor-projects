// Using Query Selector to Select the Nodes
let pN1 = document.querySelector(".pN1");
let pN2 = document.querySelector(".pN2");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let gamebtn = document.querySelectorAll(".box");
let turn = document.querySelector(".turn");
let p1win = document.querySelector(".winCount1");
let p2win = document.querySelector(".winCount2");
let playAgain = document.querySelector(".playAgain");
let gamemode = document.querySelector(".gameMode");
let changeRule = document.querySelector(".changeRule");
let result = document.querySelector(".result");
let resetbtn = document.querySelector(".resetGame");
let changeTheme = document.querySelector(".changeTheme");
let navbar = document.querySelector (".navbar");
let body = document.querySelector("body");


// Asking for User Name
let player1name = prompt("Enter Player 1 ( O ) Name :");
pN1.innerText = player1name;

let player2name = prompt("Enter Player 2 ( X ) Name :");
pN2.innerText = player2name;


let playerO = true;
let player1wins = 0;
let player2wins = 0;
let count = 0;
let moves = [];
let mode = false;

const winPattern = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
  [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]
];

let move1;

gamebtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    moves.push(e.target);
    if (playerO) {

      btn.innerText = "O";
      btn.disabled = true;
      playerO = false;
      turn.classList.remove("turn1");
      turn.classList.add("turn2");

    } else {

      btn.innerText = "X";
      btn.disabled = true;
      playerO = true;
      turn.classList.remove("turn2");
      turn.classList.add("turn1");

    }

    count++;
    if (mode) {
      if (count===5) 
        moves[0].style.color = "red";
      
      if (count === 6) {
        move1 = moves.shift();
        count--;
        move1.innerText = "";
        move1.style.color = "#0d1b2a";
        moves[0].style.color = "red";
        move1.disabled = false;
      }
    }  

    if (count === 9) {
      result.innerText = "Draw";
      result.classList.remove("hide");
    }

    checkWinner();

  });
});

function checkWinner() {
  for (patterns of winPattern) {
    let box1val = gamebtn[patterns[0]].innerText;
    let box2val = gamebtn[patterns[1]].innerText;
    let box3val = gamebtn[patterns[2]].innerText;
    
    if (box1val != "" && box2val != "" && box3val != "") {
      if (box1val === box2val && box2val === box3val) {
        moves[0].style.color = "#0d1b2a";
        if (playerO) {
          player2wins++;

          result.innerText = `Congratulations!! ${player2name} Won`;
          result.classList.remove("hide");

        } else {
          player1wins++

          result.innerText = `Congratulations!! ${player1name} Won`;
          result.classList.remove("hide");

        }
        disableBtns();
        p1win.innerText = `Wins - ${player1wins}`;
        p2win.innerText = `Wins - ${player2wins}`;
        turn.classList.add("hide");

      }
    }
  }
}

function disableBtns() {
  gamebtn.forEach((btn) => {
    btn.disabled = true;
  })
}

function enableBtns() {
  gamebtn.forEach((btn) => {
    btn.disabled = false;
  })
}


playAgain.addEventListener("click", () => {
  gamebtn.forEach((val) => {
    val.innerText = "";
  });
  enableBtns();
  turn.classList.remove("hide");
  result.classList.add("hide");
  count = 0;
  moves = [];
});

resetbtn.addEventListener("click", () => {
  player1name = prompt("Enter Player 1 ( O ) Name :");
  pN1.innerText = player1name;

  player2name = prompt("Enter Player 2 ( X ) Name :");
  pN2.innerText = player2name;
  count = 0;
  moves = [];
  player1wins = 0;
  player2wins = 0;
  p1win.innerText = "";
  p2win.innerText = "";
  gamebtn.forEach((val) => {
    val.innerText = "";
  });
  enableBtns();
  turn.classList.remove("hide");
  result.classList.add("hide");
});


changeRule.addEventListener("click", () => {
  gamemode.innerText = "ADVANCE MODE";
  changeRule.classList.add("hide");
  mode = true;
});

let changeClick = true;
changeTheme.addEventListener("click", ()=> {
  if (changeClick) {
    // body.style.backgroundColor = "#2f3e46";
    body.style.backgroundImage = "linear-gradient(to right, var(--red), var(--red1), var(--plain)";
    navbar.style.backgroundColor = "#354f52";
    changeTheme.style.backgroundColor = "#84a98c";
    changeTheme.style.color = "#000000";
    changeRule.style.backgroundColor = "#84a98c";
    changeRule.style.color = "#000000";
    result.style.color = "#84a98c";
    gamemode.style.color = "#84a98c";
    resetbtn.style.backgroundColor = "#84a98c";
    resetbtn.style.color = "#000000";
    p1.style.color = "#ffffff";
    p2.style.color = "#ffffff";
    pN1.style.color = "#ffffff";
    pN2.style.color = "#ffffff";
    
    gamebtn.forEach((val)=>{
      val.style.backgroundColor = "#52796f";
      val.style.border = "1px solid black";
    });
    
    playAgain.style.backgroundColor = "#84a98c";
    changeClick = false;
  } else {
    // body.style.backgroundColor = "#0d1b2a";
    body.style.backgroundImage = "linear-gradient(to right, var(--darker), var(--darker1), var(--medium))";
    navbar.style.backgroundColor = "#1b263b";
    changeTheme.style.backgroundColor = "#415a77";
    changeTheme.style.color = "#e0e1dd";
    changeRule.style.backgroundColor = "#415a77";
    changeRule.style.color = "#e0e1dd";
    result.style.color = "#778da9";
    gamemode.style.color = "#778da9";
    resetbtn.style.backgroundColor = "#415a77";
    resetbtn.style.color = "#e0e1dd";
    p1.style.color = "#e0e1dd";
    p2.style.color = "#e0e1dd";
    pN1.style.color = "#e0e1dd";
    pN2.style.color = "#e0e1dd";
    
    gamebtn.forEach((val)=>{
      val.style.backgroundColor = "#DCC48E";
      val.style.border = "none";

    });

    playAgain.style.backgroundColor = "#af8a34";
    changeClick = true;
  }
});