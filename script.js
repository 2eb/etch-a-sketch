const myCanvas = document.querySelector('.canvas');
const sizeBtn = document.querySelector("#size-btn");
const randBtn = document.querySelector("#random-btn");

function createCell (number) {
    const itemNumber = number**2;
    for (let i= 0;i<itemNumber;i++){
        const cell = document.createElement('div');
        cell.style.outline = "1px solid #eee";
        cell.classList.add('cell');
        myCanvas.appendChild(cell);
    }
}
myCanvas.style.height = '80vh';
createCell(16);
createGrid(16);
listen();

function createGrid(columnNumber) {
    myCanvas.style.display = "grid";
    //container.style.justifyContent = "right";
    myCanvas.style.gridTemplateColumns = `repeat(${columnNumber},${myCanvas.offsetHeight/columnNumber}px)`;
}

function listen(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", paint)
        
    });
}

function paint(e){
    if ( penColor === 'gradient'){
        console.log(this.style.backgroundColor);
    }else this.style.backgroundColor = penColor;
}

function clearGrid(){
    const childNum = myCanvas.children.length;
    //console.log(childNum);
    for (let i=0;i< childNum;i++) myCanvas.removeChild(myCanvas.lastChild);
}

sizeBtn.addEventListener("click",setSize);
function setSize() {
    clearGrid();
    const gridSize = parseInt(prompt("Enter a number between 16 and 100 to set canvas size"));
    createCell(gridSize);
    createGrid(gridSize);
    listen();
}

const radioBtns = document.querySelectorAll('input');
radioBtns.forEach((btn) => {
    btn.addEventListener('click', setPenColor);
});

let penColor = "black";

function setPenColor (e) {
    if (this.value == "random") {
        penColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        console.log(penColor);
    } else if (this.value == "gradient"){
        penColor = "gradient";
    } else penColor = "black";
}