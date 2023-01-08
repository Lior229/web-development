

const CUSTOMERS_KEY = 'customers';

loadCustomers();

function loadCustomers(){
    const customers = getCustomersFromStorage();

    displayCustomers(customers);
}


// add a customer

function addCustomer(){
    
    //1. Validate
    const isValid = validate();
    if(!isValid){
        return;
    }

    //2. take customer values into a single object
    const customer = getCustomer();

    //3. extract customers array from storage

    const customers = getCustomersFromStorage();

    //4. add customer
    customers.push(customer);

    //5. display the customers 

    displayCustomers(customers);


    //6. save back to storage
    saveCustomersToLocalStorage(customers);


}

// validation

function validate(){
    const firstname = firstNameBox.value;
    const lastname = lastNameBox.value;
    const email = emailBox.value;


    //validate first name
    if(firstname === ""){
        alert('missing first name');
        return false;
    }
    if(lastname === ""){
        alert('missing last name');
        return false;
    }
    if(email === ""){
        alert('missing an email');
        return false;
    }

    return true;
}


// getCustomer

function getCustomer(){
    const firstname = firstNameBox.value;
    const lastname = lastNameBox.value;
    const email = emailBox.value;

    return {
        firstname,
        lastname,
        email
    }
}

// load customer from local storage 
function getCustomersFromStorage(){

    // extract string from local storage
    const str = localStorage.getItem(CUSTOMERS_KEY);

    // create or convert to array
    const customers = (str === null) ? [] : JSON.parse(str);

    return customers;

}



function displayCustomers(customers){

  // clear previous data
  tableBody.innerHTML = "";


  for(let i = 0; i < customers.length; i++){
    //create dynamic html for one table row

    const row = `
      <tr>
           <td>${customers[i].firstname}</td>
           <td>${customers[i].lastname}</td>
           <td>${customers[i].email}</td>
           <td>
                <button id="${i}" onClick="deleteItem(this)">Delete</button>   
           </td>
      </tr>
    `;

    tableBody.innerHTML += row;

  }
}

function saveCustomersToLocalStorage(customers){
   
    //convert array of customer back to string

    const str = JSON.stringify(customers);

    // save customers back to local storage

    localStorage.setItem(CUSTOMERS_KEY,str);
}

function deleteItem(button){
  const index = button.id; // index
  const customers = getCustomersFromStorage();
  customers.splice(index,1);
  
  displayCustomers(customers);
  saveCustomersToLocalStorage(customers);

}