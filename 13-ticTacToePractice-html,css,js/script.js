let divs = document.querySelectorAll(".box");

let turn = "circle";

for (divbox of divs) {
  divbox.addEventListener("click", (e) => {
    let status = e.target.getAttribute("status");
    if (status == null) {
      if (turn === "circle") {
        let circle = document.createElement("div");
        circle.setAttribute("class", "circle");
        e.target.setAttribute("status", "on");
        e.target.append(circle);
        turn = "cross";
      } else {
        let cross = document.createElement("div");
        cross.setAttribute("class", "cross");
        e.target.setAttribute("status", "on");
        cross.innerHTML = "<p>x</p>";
        e.target.prepend(cross);
        turn = "circle";
      }
    }

  })
}
