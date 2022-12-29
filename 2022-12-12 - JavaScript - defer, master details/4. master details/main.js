// All customers array
const customers = [];

//add a given customer
function addCustomer(){

    //1. Take customer values into a single object;
    const customer = getCustomer();

    // 2. add that object to array
    customers.push(customer);

    // 3. display the updated array
    displayCustomers();

}

//get customer from form 
function getCustomer(){

  const firstName = firstNameBox.value;
  const lastName = lastNameBox.value;
  const email = emailBox.value;

  return { firstName,lastName,email };

}

function displayCustomers(){


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