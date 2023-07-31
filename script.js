const container = document.getElementById("container");
const button = document.getElementById('button');


function makeGrid(size) {
  const widthPercent = 100/size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square-div");
    square.style.width = widthPercent + "%";
    square.style.paddingBottom = widthPercent + "%";
    container.appendChild(square);

    square.addEventListener("mouseover", (e) => {
      square.classList.add("square-div-hover");
    });
  }
}

function deleteGrid(){
  while(container.childElementCount){
    container.removeChild(container.firstChild);
  }
};

function changeGrid(gridValue){
  deleteGrid();
  makeGrid(gridValue);
}

makeGrid(16);


button.addEventListener('click', (e)=>{
  let gridValue = +prompt("Enter the size of the grid");
  if(gridValue > 0 && gridValue <= 100){
    changeGrid(gridValue);
  }
  else alert("Invalid Input!")
})