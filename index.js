const container = document.querySelector(".container");

let dimension = 20;
const width = 960;

let divWidth = width / dimension;

console.log(divWidth * dimension);

let divHeight = divWidth;

let flexBasis = 100 / dimension;

count = 1;

function createGrid(dimension) {
  for (let x = 0; x < dimension; x++) {
    for (let y = 0; y < dimension; y++) {
      const div = document.createElement("div");
      div.style.width = divWidth + "px";
      div.style.height = divHeight + "px";
      //   div.textContent = count;
      //   count++;
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

createGrid(dimension);
