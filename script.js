const gridContainer = document.querySelector(".gridContainer");
const resize = document.querySelector(".resize");
const clear = document.querySelector(".clear");
const black = document.querySelector(".black");
const random = document.querySelector(".random");

function makeGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let cells = document.createElement("div");
    cells.classList.add("gridCell");
    gridContainer.appendChild(cells);
  }
}

function resizeGrid() {
  let size = Math.round(
    prompt(
      "Enter the amount of squares you would like on each side(horizontally and vertically)."
    )
  );
  if (size === 0) {
    alert("Please enter a value.");
  } else if (size < 2) {
    alert("Please enter a higher value. (2 - 100)");
  } else if (size > 100) {
    alert("Please enter a lower value. (2 - 100)");
  } else {
    let cells = Array.from(gridContainer.childNodes);
    for (let i = 0; i < cells.length; i++) {
      gridContainer.removeChild(cells[i]);
    }

    // for (let i = gridContainer.childNodes.length - 1; i >= 0; i--) {
    //   gridContainer.removeChild(gridContainer.childNodes[i]);
    // }

    // gridContainer.innerHTML = "";

    clearGrid();
    makeGrid(size);
    let gridCells = document.querySelectorAll(".gridCell");
    gridCells.forEach((gridCell) => {
      gridCell.addEventListener("mouseover", blackColor);
    });
  }
}

// CLEAR GRID //

function clearGrid() {
  let gridCells = document.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) => {
    gridCell.style.backgroundColor = `#ddd`;
  });
}

// COLOR BLACK //

function blackColor() {
  this.style.backgroundColor = `#000`;
}

function colorBlack() {
  let gridCells = document.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) => {
    gridCell.removeEventListener("mouseover", randomColor),
      gridCell.addEventListener("mouseover", blackColor);
  });
}

// COLOR RANDOM //

function randomColor() {
  this.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function colorRandom() {
  let gridCells = document.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) => {
    gridCell.removeEventListener("mouseover", blackColor),
      gridCell.addEventListener("mouseover", randomColor);
  });
}

// COLOR DARK

function darkColor() {
  const currentColor = this.style.backgroundColor;
}

resize.addEventListener("click", resizeGrid);
clear.addEventListener("click", clearGrid);
black.addEventListener("click", colorBlack);
random.addEventListener("click", colorRandom);

makeGrid(16);
colorBlack();
