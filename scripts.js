function makeGridRows(width) {
    let rows = [];

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
        
        rows.push(row);
    }

    return rows;
}

function handleHover(e) {
    const square = e.target;
    square.classList.add("darkened-square");
}

function updateGridSize(size) {
    grid.replaceChildren(...makeGridRows(size));
}

function updateSize(e) {
    const inputField = e.target;

    if (inputField.value > 100) {
        inputField.value = 100;
    }

    const size = inputField.value;

    if (inputField.type === "number") {
        document.querySelector("#size-slider").value = size;
    } else {
        document.querySelector("#size-number").value = size;
    }
    
    updateGridSize(size);
}


const grid = document.querySelector("#grid");
grid.append(...makeGridRows(16));
grid.addEventListener("mouseover", handleHover);


document.querySelectorAll(".size-input").forEach(sizeInput => {
    sizeInput.addEventListener("input", updateSize);
});

