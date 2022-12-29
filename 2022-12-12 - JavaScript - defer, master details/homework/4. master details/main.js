const localStorageKey = 'ingredientKey'

// load recipe from storage
const CakeRecipe = loadRecipe();

// display the loaded array
displayRecipe(CakeRecipe);

//add a given ingredient
function addingredient(){

    //1. Take ingredient values into a single object;
    const ingredient = getingredient();

    // 2. add that object to array
    if(!ingredient){
      return;
    }

    CakeRecipe.push(ingredient);

    // 3. display the updated array
    displayRecipe(CakeRecipe);

    // 4. save the Recipe to storage
    saveRecipe();

}

//get ingredient from form 
function getingredient(){
   
   const ingredientBox = document.getElementById('ingredientBox');
   const amountBox = document.getElementById('amountBox');
   const amountValidation = document.getElementById('amountValidation');

   const Ingredient = ingredientBox.value;
   const Amount = amountBox.value;

    if(Amount === ''){
      amountValidation.innerText = 'please enter a Amount';
      amountBox.style.backgroundColor = 'red';
      amountBox.focus();
      
      return;
    }

  return {Ingredient,Amount};

}

function displayRecipe(CakeRecipe){

    // Get ol from sreen
    const IngredientList = document.getElementById("IngredientList");

    // Empty all li from the ol
    IngredientList.innerText = '';

     //run on all Ingredient
     for(const ingredient of CakeRecipe){

        // Create li
       const li = document.createElement('li');
       li.className = 'list-group-item';

       // Add Ingredient contant to li
        const row =`Ingredient: ${ingredient.Ingredient}, Amount: ${ingredient.Amount}`;

        li.appendChild(document.createTextNode(row));

        //add li to ol
        IngredientList.appendChild(li);

     }
}

 function saveRecipe(){
     localStorage.setItem(localStorageKey,JSON.stringify(CakeRecipe));
}

function loadRecipe(){
  //extract my string from storage
  const str = localStorage.getItem(localStorageKey);

  // convert str to array
  const CakeRecipe = ( str === null) ? [] : JSON.parse(str);

  console.log(CakeRecipe);
  return CakeRecipe;
}