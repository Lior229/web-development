

//local storage key
const CUSTOMERS_LC_KEY = 'customers';

loadCustomers();

function loadCustomers(){

    //extract customers array from storage
    const customers = getCustomersFromStorage();

    //display the updated array
    displayCustomers(customers);

    firstNameBox.focus();

}

//add a given customer
function addCustomer(){

    //1. validate
    const isValid = validate();
    if(!isValid) return;


    //2.Take customer values into a single object;
    const customer = getCustomer();

    //3. extract customers array from storage
    const customers = getCustomersFromStorage(); // empty [] or array with customers

    // 4. add that object to array
    customers.push(customer);

    // 5. display the updated array
    displayCustomers(customers);

    //6. save back to storage
    saveCustomersToStorage(customers);

    //7.clear form
    clearForm();

    
}

//get customer from form 
function getCustomer(){

  const firstName = firstNameBox.value;
  const lastName = lastNameBox.value;
  const email = emailBox.value;

  return { firstName,lastName,email };

}

function displayCustomers(customers){

 
    tableBody.innerHTML = '';

    //run on all customers
    for(const customer of customers){
        //Create dynamic HTML for one table row
        const row = `
            <tr>
               <td>${customer.firstName}</td>
               <td>${customer.lastName}</td>
               <td>${customer.email}</td>
            </tr>
        `;
        
        tableBody.innerHTML += row;
    }

}

// validate - if the validation fails , return false; otherwise return true;
function validate(){

    //Takes values
    const firstName = firstNameBox.value;
    const lastName = lastNameBox.value;
    const email = emailBox.value;

    //Validate first name
    if(firstName === ''){
        alert('missing a first name');
        return false;
    }
    //Validate last name
    if(lastName === ''){
        alert('missing a last name');
        return false;
    }
    //validate email
    if(email === ""){
        alert('missing an email');
        return false;
    }

    //went ok

    return true;


    
}

// load customers from local storage

function getCustomersFromStorage(){
  
    //extract my string from storage
  const str = localStorage.getItem(CUSTOMERS_LC_KEY);

  // convert str to array

  const customers = ( str === null) ? [] : JSON.parse(str);

  return customers;


}

function saveCustomersToStorage(allCustomers){
    
    //convert array to string
    const str = JSON.stringify(allCustomers);

    //save the customers in lc
    localStorage.setItem(CUSTOMERS_LC_KEY,str);
}


function clearForm(){
    firstNameBox.value = '';
    lastNameBox.value = '';
    emailBox.value = '';
    firstNameBox.focus();
}

