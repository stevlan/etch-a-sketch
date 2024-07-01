
function newSize(){
    let size = prompt("Enter a new size");
    if(size>100){
        size = 100;
    }
    deleteGrid();
    createGrid(size);
}

function createGrid(size){
    for(let i = 0; i<size; i++){
        const row = document.createElement("div");
        row.className = "row"
        for(let j=0;j<size;j++){
            const cell = document.createElement("div");
            cell.className = "box";
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    const cells = document.querySelectorAll(".box");
    cells.forEach((cell)=>{
        cell.addEventListener("mouseover", ()=>{
            // Generate random RGB values
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
 
            // Set background color with random RGB values
            cell.style.backgroundColor = `rgb(${red},${green},${blue})`;

            // cell.style.backgroundColor = "blue";
        });
    })
}

function deleteGrid(){
    const cells = document.querySelectorAll(".grid > *");
    cells.forEach((cell) => {
        cell.remove();
    })
}


grid = document.querySelector(".grid");
button = document.querySelector("button");
button.addEventListener("click", newSize);