const map = [
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 3, 1],
  [1, 1, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
];
const gameArea = document.querySelector(".map");
function drawMap() {
  gameArea.innerHTML = "";
  for (let x = 0; x < map.length; x++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let y = 0; y < map[x].length; y++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      switch (map[x][y]) {
        case 1:
          cell.classList.add("wall");
          break;
        case 2:
          cell.classList.add("box");
          break;
        case 3:
          cell.classList.add("target");
          break;
        case 4:
          cell.classList.add("man");
          break;
      }
      row.append(cell);
    }
    gameArea.append(row);
  }
}
drawMap();

let manX = 7;
let manY = 4;

function moveMan(dx, dy) {
  let newX = manX + dx;
  let newY = manY + dy;

  //Движение чела
  if (map[newX][newY] === 1) {
    return;
  } else if (map[newX][newY] === 2) {
    let boxNewX = newX + dx;
    let boxNewY = newY + dy;
    //Движение коробки
    if (map[boxNewX][boxNewY] === 1) {
      return;
    } else if (map[boxNewX][boxNewY] === 0) {
      map[manX][manY] = 0;
      manX = newX;
      manY = newY;
      map[manX][manY] = 4;
      map[boxNewX][boxNewY] = 2;
    } else if (map[newX][newY] === 3) {
      map[manX][manY] = 3;
      manX = newX;
      manY = newY;
      map[manX][manY] = 4;
    }
  } else if (map[newX][newY] === 0) {
    map[manX][manY] = 0;
    manX = newX;
    manY = newY;
    map[manX][manY] = 4;
  } else if (map[newX][newY] === 3) {
    // let oldX = manX - dx;
    // let oldY = manY - dy;
    // let nextX = newX;
    // let nextY = newY;
    // map[manX][manY] = map[oldX][oldY] === 3 ? 3 : 0;
    // manX = newX;
    // manY = newY;
    // map[manX][manY] = 4;
  }

  drawMap();
}
// Сделать, чтобы работало с капслоком!!!
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "w" || event.key === "ц")
    moveMan(-1, 0);
  if (event.key === "ArrowDown" || event.key === "s" || event.key === "ы")
    moveMan(1, 0);
  if (event.key === "ArrowLeft" || event.key === "a" || event.key === "ф")
    moveMan(0, -1);
  if (event.key === "ArrowRight" || event.key === "d" || event.key === "в")
    moveMan(0, 1);
});

let time = 0;

function updateUI() {
  document.getElementById("time").textContent = time;
}

// setInterval(() => {
//   time++;
//   updateUI();
// }, 1000);
