function arrayCallbacks(){
    const goldBricks = [];

    for(let i = 1; i < 100; i++){
        const gold = {
            weight:Math.floor(Math.random() * 10) + 1,
            width:Math.floor(Math.random() * 10) + 1,
            height:Math.floor(Math.random() * 10) + 1,
            depth:Math.floor(Math.random() * 10) + 1,
        }

        goldBricks.push(gold);
    }


     // display all gold bricks with height larger then 5

  const newArray  =  goldBricks.filter((goldBrick) => {
        return goldBrick.height > 5;
     }).map((filteredGold) => {
         filteredGold.color = 'green';
         return filteredGold;
     })


}