const map = [
    [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,2,2,1,1,1,1,0,0,0,0,0],
    [0,0,0,1,0,0,2,0,2,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0],
    [1,1,1,1,0,0,1,1,2,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,1,0,0,0,0,0,3,3,1],
    [1,1,0,0,4,2,0,0,0,0,0,0,0,3,3,1],
    [0,1,1,1,1,1,1,1,1,1,1,0,0,3,3,1],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
];
const mapContainer = document.querySelector('.map');

function createMap() {
    console.log("Создание карты...");
    map.forEach(row => {
        const rowElement = document.createElement('div'); // Создаём строку
        rowElement.classList.add('row');

        row.forEach(cell => {
            const cellElement = document.createElement('div'); // Создаём клетку
            cellElement.classList.add('cell');

            // Добавляем классы в зависимости от значения клетки
            if (cell === 1) {
                cellElement.classList.add('wall'); // Стена
            } else if (cell === 2) {
                cellElement.classList.add('box'); // Ящик
            } else if (cell === 3) {
                cellElement.classList.add('target'); // Целевая точка
            } else if (cell === 4) {
                cellElement.classList.add('man'); // Персонаж
            }

            rowElement.appendChild(cellElement); // Добавляем клетку в строку
        });

        mapContainer.appendChild(rowElement); // Добавляем строку в карту
    });
}

// Запускаем создание карты
createMap();