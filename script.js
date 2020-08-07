const gridContainer = document.querySelector(".gridContainer");

makeCells = () => {
  for (let i = 0; i < 256; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cellStyle");
    gridCell.addEventListener("mouseover", (e) =>
      e.target.classList.add("black")
    );
    gridContainer.appendChild(gridCell);
  }
};

makeCells();
