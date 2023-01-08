function displayTable() {
  const matrix = getMultiplicationTable();
  printMultiplcationTable(matrix);
  const sum = calcMatrixSum(matrix);

  console.log(sum)

}

function getMultiplicationTable() {
  const multiplicationTable = [];
  for (i = 1; i <= 10; i++) {
    const row = [];
    for (j = 1; j <= 10; j++) {
      const num = i * j;
      row.push(num);
    }
    multiplicationTable.push(row);
  }

  return multiplicationTable;
}

function printMultiplcationTable(table) {
  const multiplicationTable = document.createElement("div");
  multiplicationTable.id = "multiplicationTable";

  for (let i = 0; i < table.length; i++) {
    const arr = table[i];
    const row = document.createElement("ul");
    row.id = `multiplicationRow-${i}`;
    row.className = "multiplicationRow";
    for (let j = 0; j < arr.length; j++) {
      const li = `<li style="background-color:${getRandomColor()}" class="multiplication-item">${
        arr[j]
      }</li>`;

      row.innerHTML += li;
    }
    multiplicationTable.appendChild(row);
  }

  body.appendChild(multiplicationTable);

}

function calcMatrixSum(matrix){
    let sum = 0;
   for(row of matrix){
    for(num of row){
  
        sum += num;
    }
   }
   return sum;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  return color;
}
