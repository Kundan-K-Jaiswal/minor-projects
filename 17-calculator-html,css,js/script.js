let screen = document.querySelector(".data");
let histroy = document.querySelector(".history");
let btn = document.querySelectorAll(".btn");
let backIcon = document.querySelector(".back");
let powIcon = document.querySelector(".pow");
let operationSrc = document.querySelector(".operation");


let screenResult = [];
let prevnum = [];
let currnum = [];
let preoperator = null;

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    let eleValue = e.target.value;
    updateScreen(eleValue);
  })
});

function updateScreen(value) {

  if (value == "clean") {
    cleanScreen();
    return;
  } else if (value == "clear") {
    clearScreen();
    return;
  } else if (value == "back") {
    removeLast();
    return;
  }

  // if (screenResult.length === 0) {
  //   screenResult.push(value);
  //   digitCount++;
  //   printOnScreen();
  //   return;
  // } else 


  if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9 || value == 0 || value == ".") {
    if (screenResult.length === 13) return;
    screenResult.push(value);
    printOnScreen();
    return;
  } else if (value == "+" || value == "*" || value == "/" || value == "-" || value == "**" || value == "%") {
    if (screenResult.length != 0) {
      operationSrc.innerText = value;
      if (preoperator == null) {
        preoperator = value;
      }
      operationCalci(value);
      screenResult = [];

    }
  } else if (value == "**2") {
    if (screenResult.length != 0) {
      operationSrc.innerText = "^2";
      if (prevnum.length === 0) {
        let num = screenResult;
        prestr = arrayToString(num);
        histroy.innerHTML = prestr + "^<sup>2</sup>";
        result = prestr ** 2;
        screenResult = stringToArray(`${result}`);
        printOnScreen();
      } else {
        let prestr = arrayToString(prevnum);
        histroy.innerText = prestr + "^<sup>2</sup>";
        result = prestr ** 2;
        screenResult = stringToArray(`${result}`);
        printOnScreen();
        prevnum = screenResult;
      }
    }
  } else if (value == "=") {
    if (screenResult.length != 0) {
      operationCalci(preoperator);
      preoperator = null;
      prevnum = [];
      operationSrc.innerText = value;
    }
  }
}

function cleanScreen() {
  screenResult = [];
  screen.innerText = "0";
}

function clearScreen() {
  cleanScreen();
  prevnum = [];
  currnum = [];
  screen.innerText = "0";
  operationSrc.innerText = "";
  histroy.innerText = "";

}

backIcon.addEventListener("click", () => {
  removeLast();
})

function removeLast() {
  screenResult.pop();
  if (screenResult.length == 0) {
    screen.innerText = 0;
  } else {
    printOnScreen();
  }
}

function printOnScreen() {
  while (screenResult.length > 13) {
    screenResult.pop();
  }
  let str = arrayToString(screenResult);
  screen.innerText = str;
}


function arrayToString(toChange) {
  sRstr = '';
  for (digits of toChange) {
    sRstr += digits;
  }
  return sRstr;
}

function stringToArray(toChange) {
  sRarr = [];
  for (element of toChange) {
    sRarr.push(element)
  }
  return sRarr;
}

powIcon.addEventListener("click", () => {
  operationCalci("**");
})

function operationCalci(operator) {
  if (prevnum.length === 0) {
    prevnum = screenResult;
    printOnScreen();
    screenResult = [];
    histroy.innerText = `${arrayToString(prevnum)} ${operator}`;

  } else {
    currnum = screenResult;
    let prevstr = arrayToString(prevnum);
    let currstr = arrayToString(currnum);
    histroy.innerText = `${prevstr} ${preoperator} ${currstr}`;
    let valueResult;
    if (preoperator == "*") {
      valueResult = prevstr * currstr;
    } else if (preoperator == "/") {
      valueResult = prevstr / currstr;
    } else if (preoperator == "-") {
      valueResult = prevstr - currstr;
    } else if (preoperator == "**") {
      valueResult = prevstr ** currstr;
    } else if (preoperator == "%") {
      valueResult = prevstr % currstr;
    } else if (preoperator == "+") {
      valueResult = prevstr * 1 + currstr * 1;
    }
    screenResult = stringToArray(`${valueResult}`);
    printOnScreen(screenResult);
    prevnum = screenResult;
  }
  preoperator = operator;
}