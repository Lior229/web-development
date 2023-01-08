function testMatrix(){

    // create entire matrix

    const matrix = [];

    for(let i = 0; i < 10; i++){
        // create one array each time
        const arr = [];

        for(let j = 0; j < 20; j++){
            const num = Math.floor(Math.random() * 100);
            arr.push(num);
        }

        //adding the array to the matrix
        matrix.push(arr);

    }


    // display matrix (regular for)

    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        document.write(matrix[i][j] + " ")
      }
      document.write('<br>');
    }

    document.write('<hr>');


    // display matrix (for-of)

    for(const arr of matrix){
        for(const num of arr){
            document.write(num + " ");
        }
        document.write('<br>');
    }

    document.write('<hr>');


   

    let sum = 0;
    let count = 0;


    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
              sum += matrix[i][j];
              count++;
        }
      }


     const avg = sum / count;

     document.write('average ' + avg + "<br>")


}




