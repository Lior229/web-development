const localStorageKey = 'addressKey'


load();

function getElement(id){
    return document.getElementById(id);
}

function save(){
    const cityBox = getElement('cityBox');
    const streetBox = getElement('streetBox');
    const homeNumberBox = getElement('homeNumberBox');
    const postalCodeBox = getElement('postalCodeBox');

    const city = cityBox.value;
    const street = streetBox.value;
    const homeNumber = homeNumberBox.value;
    const postalCode = postalCodeBox.value;

    if(city === ''){
        alert('please enter a city');
        cityBox.style.backgroundColor = 'red';
        return;
    }
    if(street === ''){
        alert('please enter a street');
        streetBox.style.backgroundColor = 'red';
        return;
    }
    if(homeNumber === ''){
        alert('please enter a  home number');
        homeNumberBox.style.backgroundColor = 'red';
        return;
    }
    if(postalCode === ''){
        alert('please enter a postal code');
        postalCodeBox.style.backgroundColor = 'red';
        return;
    }

      const address = {
        city,
        street,
        homeNumber,
        postalCode
      };    

  
      localStorage.setItem(localStorageKey,JSON.stringify(address));

      // clean my input fields

     cityBox.value = '';
     streetBox.value = '';
     homeNumberBox.value = '';
     postalCodeBox.value = ''
}


function load(){
    const cityBox = getElement('cityBox');
    const streetBox = getElement('streetBox');
    const homeNumberBox = getElement('homeNumberBox');
    const postalCodeBox = getElement('postalCodeBox');

    const addressStr = localStorage.getItem(localStorageKey);
    const address = JSON.parse(addressStr);

    
    cityBox.value = address.city;
    streetBox.value = address.street;
    homeNumberBox.value = address.homeNumber;
    postalCodeBox.value = address.postalCode;
}
