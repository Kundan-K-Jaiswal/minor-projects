let baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

let exchangeContainer = document.querySelectorAll(".exchange-container select");
let btn = document.querySelector(".exchangebutton button");
let fromCountrycode = "usd";
let toCountrycode = "inr";

for(select of exchangeContainer ) {
  for(codes in countryList) {
    let newoption = document.createElement("option");
    newoption.value = codes ;
    newoption.innerText = codes;
    if (select.name === "from" && codes==="USD") {
      newoption.selected = "selected";
    } else if (select.name === "to" && codes==="INR") {
      newoption.selected = "selected";
    }   
    select.append(newoption);
  }
  select.addEventListener("change", (e)=> {
    updateFlag(e.target);
  })
}

function updateFlag(element) {
  let countcode = element.value;
  countId = countryList[countcode];
  let img = element.parentElement.querySelector("img");
  if(element.name === "to") {
    toCountrycode = countcode.toLowerCase();
  } else {
    fromCountrycode = countcode.toLowerCase();
  }
  let newsrc = `https://flagsapi.com/${countId}/shiny/64.png`;
  img.src = newsrc;
}

btn.addEventListener("click", ()=>{
  updateMessage();
})

async function updateMessage() {
  let inpt = document.querySelector(".inputAmount-container input");
  let inputValue = inpt.value;
  if (inputValue === "" || inputValue < 1) {
    inputValue = 1;
    inpt.value = 1;
  }

  newUrl = `${baseUrl}${fromCountrycode}.json`;
  let response = await fetch(newUrl);
  let data = await response.json();
  let excrate = data[fromCountrycode][toCountrycode];

  let result = document.querySelector(".result p");
  let output = excrate * inputValue;
  result.innerText = `${inputValue} ${fromCountrycode.toUpperCase()} = ${output} ${toCountrycode.toUpperCase()}`;
}