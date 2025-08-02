function setUpGrid(width) {
    const numberOfSquares = width * width;
    const grid = document.querySelector("#grid");
    const gap = window.getComputedStyle(grid).gap;

    for (i = 0; i < numberOfSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flexBasis = `calc(${100 / width}% - ${gap})`
        grid.appendChild(square);
    }
}

setUpGrid(16);