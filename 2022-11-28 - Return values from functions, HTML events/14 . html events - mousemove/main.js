function displayRandomNumber(){
  var num = getRandomNumber(1,1000);
  document.write(num);
}






function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}