let arr = ["red", "green", "blue", "grey", "purple", "aqua", "yellow", "voilet", "pink"];

let box = document.querySelectorAll(".box");


function random() {
  let num = Math.random()*10;
  num = Math.floor(num);
  return arr[num];
}

box.forEach((e)=>{
  e.style.color = random();
  e.style.backgroundColor = random();
})