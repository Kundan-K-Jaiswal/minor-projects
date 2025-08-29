//change the theme

let mode = document.querySelector(".btn");
let body = document.querySelector("body");
let box = document.querySelector(".boxL");

let currentMode = "Light";

mode.addEventListener("click", () => {
  if (currentMode === "Light") {
    body.style.backgroundColor = "black";
    box.classList.add("boxD");
    box.classList.remove("boxL");
    currentMode = "Dark";
  } else {
    body.style.backgroundColor = "antiquewhite";
    box.classList.remove("boxD");
    box.classList.add("boxL");
    currentMode = "Light";
  }
})

box.addEventListener("mouseover", () => {
  box.style.width = "50px";
})
box.addEventListener("mouseleave", () => {
  box.style.width = "100px";
})
