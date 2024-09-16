const container = document.querySelector(".container");

let dimension = 16;
const width = 960;
let count = 1;

function createGrid(dimension) {
  let divWidth = width / dimension;
  let divHeight = divWidth;
  for (let x = 0; x < dimension; x++) {
    for (let y = 0; y < dimension; y++) {
      const div = document.createElement("div");
      div.style.width = divWidth + "px";
      div.style.height = divHeight + "px";
      div.addEventListener("mouseover", () => {
        setHover(div);
      });
      container.appendChild(div);
    }
  }
}

function setHover(element) {
  element.style.backgroundColor = "black";
}

function clearGrid() {
  let container = document.querySelector(".container");
  console.log(container.childNodes);

  while (container.hasChildNodes()) {
    container.firstChild.remove();
  }
}

const dimensionBtn = document.querySelector(".dimension");

dimensionBtn.addEventListener("click", () => {
  dimension = prompt("What dimension would you like your grid, up to 100?");
  clearGrid();
  createGrid(dimension);
});

createGrid(dimension);
