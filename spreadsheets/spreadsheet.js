// add rows
let rows = 10;

let container = document.getElementById('grid-container');

for (let i = 0; i < rows; i++) {
    let newRow = document.createElement('div');

    newRow.textContent = `${i + 1}`;
    newRow.classList.add('grid-item');

    container.appendChild(newRow);
}
