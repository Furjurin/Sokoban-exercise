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
const mapContainer = document.querySelector(".map");

const man = {
  x: 7,
  y: 4,
  value: 4,
};

const currentPos = document.querySelector(`[data-coor="x${man.x}y${man.y}"]`);
currentPos.computedStyleMap.backround = "red";
const span = document.querySelector(".span");

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowUp":
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell";
      man.y--;
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell cell-red";
      break;
    case "ArrowDown":
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell";
      man.y++;
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell cell-red";
      break;
    case "ArrowLeft":
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell";
      man.x--;
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell cell-red";
      break;
    case "ArrowRight":
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell";
      man.x++;
      document.querySelector(`[data-coor="x${man.x}y${man.y}"]`).className =
        "cell cell-red";
      break;
  }
});

function updatePosition() {
  document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.classList.remove("player"));
  const newPos = document.querySelector(`[data-coor="${man.x},${man.y}"]`);
  if (newPos) newPos.classList.add("player");
}
updatePosition();

function createMap() {
  console.log("Создание карты...");
  map.forEach((row) => {
    const rowElement = document.createElement("div"); // Создаём строку
    rowElement.classList.add("row");

    row.forEach((cell) => {
      const cellElement = document.createElement("div"); // Создаём клетку
      cellElement.classList.add("cell");

      // Добавляем классы в зависимости от значения клетки
      if (cell === 1) {
        cellElement.classList.add("wall"); // Стена
      } else if (cell === 2) {
        cellElement.classList.add("box"); // Ящик
      } else if (cell === 3) {
        cellElement.classList.add("target"); // Целевая точка
      } else if (cell === 4) {
        cellElement.classList.add("man"); // Персонаж
      }

      rowElement.appendChild(cellElement); // Добавляем клетку в строку
    });

    mapContainer.appendChild(rowElement); // Добавляем строку в карту
  });
}

Запускаем создание карты
createMap();

// for (let x = 0; x < 10; x++) {
//   for (let y = 0; y < 10; y++) {
//     const cell = document.createElement("div");
//     cell.className = "cell";
//     cell.dataset.coor = "x" + x + "y" + y;
//     gameArea.append(cell);
//   }
// }

// let time = 0;

// function updateUI() {
//   document.getElementById("time").textContent = time;
// }

// setInterval(() => {
//   time++;
//   updateUI();
// }, 1000);
