function setUpGrid(width) {
    const grid = document.querySelector("#grid");

    for (i = 0; i < width; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        row.id = `row${i}`;

        for (j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.id = `col${j}`;
            row.appendChild(square);
        }
        
        grid.appendChild(row);
    }

    return grid;
}

function handleHover(e) {
    const square = e.target;
    square.classList.add("darkened-square");
}

grid = setUpGrid(16);

grid.addEventListener("mouseover", handleHover);

// document.querySelectorAll(".grid-square").forEach(square => {
//     square.addEventListener("click", handleHover);
// });