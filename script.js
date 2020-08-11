const gridContainer = document.querySelector(".gridContainer");
const clear = document.querySelector(".clear");
let gridCells;

function makeGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let cells = document.createElement("div");
    cells.classList.add("gridCell");
    gridContainer.appendChild(cells);
  }
  let gridCells = document.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseover", (e) => {
      gridCell.classList.add("hovered");
    });
  });
}

function clearGrid() {
  let size = prompt("Enter the amount of squares you would like on each side.");
  makeGrid(size);
  let gridCells = document.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) => {
    gridCell.classList.remove("hovered");
  });
}

clear.addEventListener("click", clearGrid);

makeGrid(16);
