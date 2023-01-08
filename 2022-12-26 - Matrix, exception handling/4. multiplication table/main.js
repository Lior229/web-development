function multi(){
    const multiplicationTable = [];
    for(let i = 1; i <= 10; i++){
        const row = [];
        for(let j = 1; j <= 10; j++){
           const num = i * j;
           row.push(num);
        }
        multiplicationTable.push(row);
    }

    console.log(multiplicationTable)
}
