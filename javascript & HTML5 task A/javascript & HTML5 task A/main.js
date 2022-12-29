const localStorageKey = 'productKey'

// load products from storage
const products = loadProduct();

// display the loaded array
displayProducts(products);

//add a given product
function addProduct(){

    //Take product values into a single object;
    const product = getProduct();
    
    // add that object to array
    if(!product){
      return;
    }

    products.push(product);

    // display the loaded array
    displayProducts(products);

    // save the Products 
    saveProducts();

}

//get product from form 
function getProduct(){
   
   const productNameBox = document.getElementById('productNameBox');
   const productPriceBox = document.getElementById('productPriceBox');
   const catagoryBox = document.getElementById('catagoryBox');
   const imgLinkBox = document.getElementById('imgLinkBox');
   const nameValidation = document.getElementById('nameValidation');
   const PriceValidation = document.getElementById('PriceValidation');
   const imgLinkValidation = document.getElementById('imgLinkValidation');

   const productName = productNameBox.value;
   const Price = productPriceBox.value;
   const catagory = catagoryBox.value;
   const imgLink = imgLinkBox.value; 
  
   
   if(productName === ''){
    nameValidation.innerText = 'please enter a product name';
    productNameBox.style.backgroundColor = 'red';
    productNameBox.focus();
    return;
  }else{
    productNameBox.style.backgroundColor = 'white';
  }
  
  if(Price === ''){
    PriceValidation.innerText = 'please enter a price';
    productPriceBox.style.backgroundColor = 'red';
    productPriceBox.focus();
    return;
  }else{
    productPriceBox.style.backgroundColor = 'white';
  }
   
   if(imgLink === ''){
    imgLinkValidation.innerText = 'please enter a img link';
    imgLinkBox.style.backgroundColor = 'red';
    imgLinkBox.focus();
    return;
  }else{
    imgLinkBox.style.backgroundColor = 'white';
  }

  return {productName,Price,catagory,imgLink};

}

function displayProducts(products){

    // Get table body from sreen
    const productsTable = document.getElementById("productsTableBody");

    // Empty all products Table
    productsTable.innerHTML = '';

     //run on all products
     for(const product of products){

      // Add products contant to td
         const row =`<tr>
                    <td>${product.productName}</td>
                    <td>${product.Price}</td>
                    <td>${product.catagory}</td>
                    <td><img src="${product.imgLink}" class="img-thumbnail"  alt="${product.productName}"></td>
                    <td><button type="button" class="btn btn-danger" onClick="deleteProduct(this)">
                        Delete
                    </button></td>
                    </tr>`;

         productsTable.innerHTML += row;

     }
}

 function saveProducts(){
      
    //Save products to storage
     localStorage.setItem(localStorageKey,JSON.stringify(products));

    //clear form fileds
   const productNameBox = document.getElementById('productNameBox');
   const productPriceBox = document.getElementById('productPriceBox');
   const catagoryBox = document.getElementById('catagoryBox');
   const imgLinkBox = document.getElementById('imgLinkBox');

   productNameBox.value = '';
   productPriceBox.value = '';
   catagoryBox.value = 'Basic';
   imgLinkBox.value = '';

   productNameBox.style.backgroundColor = 'white';
   productPriceBox.style.backgroundColor = 'white';
   imgLinkBox.style.backgroundColor = 'white';
}

function loadProduct(){
  //extract my string from storage
  const str = localStorage.getItem(localStorageKey);

  // convert str to array
  const products = ( str === null) ? [] : JSON.parse(str);

  return products;
}

function deleteProduct(row){
  
  // find the number of row in tabel (-1 thead)
  var i = row.parentNode.parentNode.rowIndex -1;

  //remove product from arry
  products.splice(i,1);

  //save arry and display
  saveProducts();
  displayProducts(products);
}