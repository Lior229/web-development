var customer = {
    firstName: "david",
    lastName:"Levi",
    email:"david@gmail.com",
    phone:"052-8123456",
    creditCard:{
        type:"Visa",
        number:"123-456-789",
        validity:"08/28",
        securityNum:"721"
    }
}



for(i in customer){
    if(typeof customer[i] === 'object'){
        for(j in customer[i]){
            document.write(`${j} = ${customer[i][j]} '<br>`)
        }
    }else{
        document.write(`${i} = ${customer[i]} <br>`)
    }
}