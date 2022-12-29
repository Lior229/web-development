
function saveItem(){
    const itemBox = document.getElementById('itemBox'); // item input
    const amountBox = document.getElementById('amountBox'); //amount input
    const items = document.getElementById('items'); //ul

    const item = itemBox.value;
    const amount = +amountBox.value;

    //a. extract json string (array of items) from local storage
    const oldStr = localStorage.getItem('grocery-list');

    //convert json to real array
    const oldArr = (oldStr === null) ? [] : JSON.parse(oldStr);

    //create item with data
       const itemObject = {
        item:item,
        amount:amount
      };

  //push item to array
    oldArr.push(itemObject);

    //save array and stringify 
    localStorage.setItem('grocery-list',JSON.stringify(oldArr))


    //clear text boxes
    itemBox.value = "";
    amountBox.value = "";
    itemBox.focus();

    //display array

     items.innerHTML = "";
     for(const obj of oldArr){
        items.innerHTML += `<li>Item:${obj.item} , Amount: ${obj.amount}</li>`
     }

  
}