let name1 = document.querySelector(".name1");
let name2 = document.querySelector(".name2");

let firstName = prompt("Enter First Name: ").toUpperCase();
let secondName = prompt("Enter Second Name: ").toUpperCase();

let nameArray = [];
let loveArr = ['L', 'O', 'V', 'E', 'S'];



// FOR PRINTING NAMES ON THE SCREEN -------------------------------- START

for (let letters of firstName) {
  let newele = newElement(letters);
  name1.append(newele);
}

nameArray.push(...loveArr);

for (let letters of secondName) {
  let newele = newElement(letters);
  name2.append(newele);
}

function newElement(letters) {
  nameArray.push(letters);
  let newele = document.createElement("p");
  newele.setAttribute("class", letters);
  newele.innerText = letters;
  return newele;
}

// FOR PRINTING NAMES ON THE SCREEN -------------------------------- END



let countArray = [];
let cc = document.querySelector('.calculation-container');
let ccx = document.querySelector('.calculation-container p');


async function processNameArray() {

  while (true) {

    if (nameArray.length === 0) break;

    let count = 1;
    let letter = nameArray.shift();
    for (let i = 0; i < nameArray.length; i++) {
      if (nameArray[i] === letter) {
        count++;
        nameArray.splice(i, 1);
        i--;
      }
    }
    countArray.push(count);

    let words = document.querySelectorAll(`.${letter}`);
    for (let word of words) {
      word.style.textDecoration = "line-through";
      word.style.color = "#8865ff";
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    ccx.innerText = countArray.join(" ");

    await new Promise(resolve => setTimeout(resolve, 1200));
  }

  // let c = 2;
  while (update(countArray)) {
    let elem = document.createElement('p');
    elem.setAttribute("style", "display: block;");
    elem.innerText = countArray.join(" ");
    await new Promise(resolve => setTimeout(resolve, 1200));
    cc.append(elem);
  }
}
processNameArray();


function update(countArray) {

  if (countArray.length < 3) {
    if (checkforAns(countArray)) {
      let elem = document.createElement('p');
      elem.setAttribute("style", "display: block;, margin-bottom:20px;");
      elem.innerText = `Love: ${countArray.join("")}%`;
      cc.append(elem);
      return false;
    }
  }

  let ar = [];
  let arrlen = countArray.length / 2;
  let i = 0;
  if (countArray.length % 2 == 0) {
    while (i < arrlen) {
      fst = countArray.shift();
      lst = countArray.pop();
      if ((fst + lst) > 9) {
        let strsum = String(fst + lst);
        for (let lt of strsum ) {
          ar.push(Number(lt));
        }
      } else {
        ar.push(fst + lst);
      }
      i++;
    }
  } else {
    while (i < arrlen - 1) {
      fst = countArray.shift();
      lst = countArray.pop();
      if ((fst + lst) > 9) {
        let strsum = String(fst + lst);
        for (let lt of strsum ) {
          ar.push(Number(lt));
        }
      } else {
        ar.push(fst + lst);
      }
      i++;
    }
    ar.push(countArray.pop());
  }

  console.log(ar);
  countArray.push(...ar);
  console.log(countArray);
  return true;
}

function checkforAns(countArray) {
  let str = "";
  for (let val of countArray) {
    str += val;
  }
  if (str * 1 <= 100) {
    return true;
  } else {
    if (countArray.length === 1) {
      countArray.length = 0;
      for (let l of str) {
        countArray.push(l);
      }
    }
    return false;
  }
}

