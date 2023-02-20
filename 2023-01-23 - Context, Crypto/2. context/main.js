// this - the object calling the current function

btn1.addEventListener('click',function(){
    this.style.backgroundColor = "red"; // "this" is the button
})

btn2.addEventListener('click',function(){
  setTimeout(function(){
    this.style.backgroundColor = "red"; // "this" is the window
  },2000);
})

btn3.addEventListener('click',function(){
 const self = this
    setTimeout(function(){
        self.style.backgroundColor = "red"; // "this" is the window
    },2000);
  })

  
  btn4.addEventListener('click',function(){

    const callback = function(){

        this.style.backgroundColor = "red"; // "this" is the button

    }.bind(this)

    setTimeout(callback,2000);


  })
   
     

btn5.addEventListener('click',function(){

    setTimeout(() => {

        this.style.backgroundColor = "red"; // "this" is the button

    },2000);
})