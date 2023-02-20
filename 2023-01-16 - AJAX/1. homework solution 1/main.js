
 function generateStrongPassword(){
    generateStrongPasswordAsync().then((password) => {
        console.log('resolved',password);

    }).catch((err) => {
        console.log('error',err)
    });
 }


 generateStrongPassword();



function generateStrongPasswordAsync(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        const password = getRandomChar(6);
        console.log(password);

        let containLowercase = false;
        let containUppercase = false;
        let containDigit = false;

        for(let i = 0; i < password.length; i++){
            if(password[i] >= "a" && password[i] <= "z"){
                containLowercase = true;
            }
            else if(password[i] >= "A" && password[i] <= "Z"){
                containUppercase = true;
            }
            else if(password[i] >= "0" && password[i] <= "9"){
                containDigit = true;
            }
        }
        
        if(containLowercase && containUppercase && containDigit){
            resolve(password);
        }else{
            reject(new Error('this is not a good password'))
        }


    },3000);
  });
}





function getRandomChar(length){
    let result = "";
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz0123456789';


    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

