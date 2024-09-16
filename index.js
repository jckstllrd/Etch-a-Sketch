const container = document.querySelector(".container");

let dimension = 16;
const width = 960;

let flexBasis = 100 / dimension;

let divWidth = Math.floor(width / dimension);
let divHeight = divWidth;

function createGrid(dimension) {
  for (let x = 0; x < dimension; x++) {
    for (let y = 0; y < dimension; y++) {
      const div = document.createElement("div");
      div.style.flex = "1 0 " + flexBasis + "%";
      div.style.width = divWidth + "px";
      div.style.height = divHeight + "px";
      //temp styling
      div.style.border = "1px solid black";
      container.appendChild(div);
    }
  }
}

createGrid(dimension);
