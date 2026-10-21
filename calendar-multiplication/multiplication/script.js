function createMultiplicationTable() {
    const table = document.createElement('table');
    for (let rowNumber = 0; rowNumber <= 10; rowNumber++) {
        const row = document.createElement('tr');
        for (let colNumber = 0; colNumber <= 10; colNumber++) {
            let cell;
            if (rowNumber === 0) {
                cell = document.createElement('th');
                cell.textContent = colNumber === 0 ? 'x' : colNumber;
                cell.classList.add('top');
            } else if (colNumber === 0) {
                cell = document.createElement('th');
                cell.textContent = rowNumber;
                cell.classList.add('right');
            } else {
                cell = document.createElement('td');
                cell.textContent = rowNumber * colNumber;
            }
            if (rowNumber === colNumber) {
                cell.classList.add('diagonal');
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

const app = document.getElementById('app');
const multiplicationTable = createMultiplicationTable();
app.appendChild(multiplicationTable);