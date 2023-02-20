
const customers = new Map();

function test(){

  try {
    addCustomer(customers)
    console.log(customers);
    
  } catch (error) {
    alert(error)
  }
}

  function addCustomer(customers){

    const firstName =  $("#firstName").val();
    const lastName =  $("#lastName").val();
    const CustomerId =  $("#CustomerId").val();

    if (customers.has(CustomerId)) {
      throw "cunstomer already exist!"
    }

    customers.set(CustomerId, {id: CustomerId, firstName:firstName, lastName:lastName} );
  }

function SearchByFirstName() {

  let firstNames = [];

  for (const firstName of customers.firstName) {

    if (!firstNames.find((firstName))){
        firstNames.push((firstName))
    }
  }

  // firstNames.sort((nameA, nameB)={

  // })

  console.log(firstNames);
  
// sort by name
// customers.sort((customerA, customerB) => {
//   const customerAName = customerA.firstName.toUpperCase(); // ignore upper and lowercase

//   console.log(customerAName);
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
}

function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

