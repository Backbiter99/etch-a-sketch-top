const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square-div");
    container.appendChild(square);

    square.addEventListener("mouseover", (e) => {
      square.classList.add("square-div-hover");
    });
  }
}

makeGrid(16);
