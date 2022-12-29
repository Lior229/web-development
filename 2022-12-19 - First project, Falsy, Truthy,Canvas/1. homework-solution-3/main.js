

//local storage key
const COLORS_LC_KEY = 'colors';

loadColors();

function loadColors(){

    //extract colors array from storage
    const colors = getColorsFromStorage();

    //display the updated array
    displayColors(colors);

    colorBox.focus();

}


//add a given customer
function saveColor(){



    //1. validate
    const isValid = validate();  
    if(!isValid) return;  //



    //2.Take single color value
    const color = getColor();

    //3. extract customers array from storage
    const colors = getColorsFromStorage(); // empty [] or array with colors

    // 4. add that object to array
    colors.push(color);

    // 5. display the updated array
    displayColors(colors);

    //6. save back to storage
    saveColorsToStorage(colors);

    //7.clear form
    clearForm();

    
}

//get customer from form 
function getColor(){

   return colorBox.value;

}

function displayColors(colors){

 
    tableBody.innerHTML = '';

    //run on all colors
    for(const color of colors){
        //Create dynamic HTML for one table row
        const row = `
            <tr>
               <td>${color}</td>
               <td style="background-color:${color}"></td>
            </tr>
        `;
        
        tableBody.innerHTML += row;
    }

}

// validate - if the validation fails , return false; otherwise return true;
function validate(){

    //Takes values
    const color = colorBox.value;

    //Validate  color
    if(color === ''){
        alert('color is missing');
        return false;
    }

    //went ok

    return true;

}

// load colors from local storage

function getColorsFromStorage(){
  
  //extract my string from storage
  const str = localStorage.getItem(COLORS_LC_KEY);

  // convert str to array

  const colors = ( str === null) ? [] : JSON.parse(str);

  return colors;


}

function saveColorsToStorage(colors){
    
    //convert array to string
    const str = JSON.stringify(colors);

    //save the colors in lc
    localStorage.setItem(COLORS_LC_KEY,str);
}


function clearForm(){
    colorBox.value = '';
    colorBox.focus();
}

