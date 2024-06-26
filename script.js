const board = document.querySelector(".board");
const body = document.querySelector("body");
const selectBtn = document.querySelector("#select");
const resetBtn = document.querySelector("#reset");
const box = document.querySelectorAll(".box")
const colorBtn = document.querySelectorAll(".color-btn");
let brightness = 100;
let color = 'red';

function randomize() {
    Math.floor(Math.random() * 256)
}


function createRow(size) {
    for (i=0; i<size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
    }
    createBox(size);
}

function createBox(size) {
    let rows = document.querySelectorAll(".row");
    console.log(rows);
    rows.forEach(row => {
        for (i=0; i<size; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    });
}

function changeSize() {
    let size = 0;
    while (size < 1 || size > 100) {
    size = prompt("choose a new size between 0 and 100");
    }
    deleteBoard();
    createRow(size);
}
    
function deleteBoard() {
    while (board.firstChild) {
       board.firstChild.remove();
    }
}

function resetBoard() {
    deleteBoard();
    createRow(32);
    brightness = 100;
    //board.style.filter = `brightness(${brightness}%)`;
}


function randomize() {
    return Math.floor(Math.random() * 256);
}

function setColor(e) {
    color = e.target.id;
}

function handleMouseOver(e) {
    if (color == 'rainbow') {
        e.target.style.backgroundColor = `rgb(${randomize()},${randomize()},${randomize()})`;
    } else {
        e.target.style.backgroundColor = `${color}`;
    }
    //board.style.filter = `brightness(${brightness}%)`;
    brightness -= 0.3;
    
}

createRow(32);
board.addEventListener('mouseover', handleMouseOver);

colorBtn.forEach(button => {
    button.addEventListener('click', setColor);
});

resetBtn.addEventListener('click', resetBoard);
selectBtn.addEventListener('click', changeSize);

