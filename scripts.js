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

function fillSquare(e) {
    const square = e.target;
    if (square.classList.contains("grid-square")) {
        if (mode === "classic") {
            fillSquareClassic(square);
        } else if(mode === "rainbow") {
            fillSquareRainbow(square);
        } else if (mode === "darken") {
            fillSquareDarken(square);
        } else {
            console.log(`Error. ${mode} mode does not exist.`);
        }
    }
}

function fillSquareClassic(square) {
    square.style.backgroundColor = "rgb(83, 83, 83)";
}

function fillSquareRainbow(square) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function fillSquareDarken(square) {
    if (!square.style.opacity) {
        square.style.opacity = 0.9;
    } else if (square.style.opacity >= 0.1) {
        square.style.opacity -= 0.1;
    }
}

function resetGrid() {
    size = document.querySelector("#size-slider").value;
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
    
    resetGrid();
}

function changeFillMode(e) {
    document.querySelectorAll(".mode-btn").forEach(btn => {
        if (btn == e.target) {
            mode = btn.id;
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
}

const grid = document.querySelector("#grid");
grid.append(...makeGridRows(16));
grid.addEventListener("mouseover", fillSquare);


document.querySelectorAll(".size-input").forEach(sizeInput => {
    sizeInput.addEventListener("input", updateSize);
});

document.querySelector("#clear").addEventListener("click", resetGrid);

let mode = "classic";
document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", changeFillMode);
})

