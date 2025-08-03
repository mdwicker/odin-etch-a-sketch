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
}

setUpGrid(16);