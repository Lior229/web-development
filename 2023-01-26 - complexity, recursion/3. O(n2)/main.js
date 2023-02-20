function test(){

    const mat = [ [10,20,30],[11,22,33,44],[55,44,33,17] ];
    


    const result = search(mat,55);
    console.log(result)

}


// o(n ^ 2);
function search(mat,numToSearch){
    for(let i = 0; i< mat.length; i++){
        
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === numToSearch){
                return {i,j};
            }
        }
    }
    return {i:-1,j:-1};
}


