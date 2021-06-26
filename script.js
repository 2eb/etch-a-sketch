const myCanvas = document.querySelector('.canvas');
const sizeBtn = document.querySelector("#size-btn");
const randBtn = document.querySelector("#random-btn");
const titleColor = document.querySelector("#title");

function createCell (number) {
    const itemNumber = number**2;
    for (let i= 0;i<itemNumber;i++){
        const cell = document.createElement('div')
        cell.style.outline = "1px solid #eee";
        cell.classList.add('cell');
        myCanvas.appendChild(cell);
    }
}
//set initial canvas to a 16x16 grid
myCanvas.style.height = '600px';
createCell(16);
createGrid(16);
listen();

function createGrid(columnNumber) {
    myCanvas.style.display = "grid";
    myCanvas.style.gridTemplateColumns = `repeat(${columnNumber},${myCanvas.offsetWidth/columnNumber}px)`;

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
    if(titleColor.classList.contains("gradient-text")) titleColor.classList.remove("gradient-text");
    if (this.value == "random") {
        penColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        // console.log(penColor);
        titleColor.style.color=penColor;
    } else if (this.value == "gradient"){
        penColor = "gradient";
        titleColor.classList.add("gradient-text");
    } else {
        penColor = "black";
        titleColor.style.color=penColor;
    }
    
    console.log(titleColor, penColor);
}