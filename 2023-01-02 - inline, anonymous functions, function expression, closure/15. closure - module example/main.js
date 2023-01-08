const myModule = (function(){

    //private variables 
    let privateVar = "this is a private variable";
    //private function
    function privateFunction(){
        console.log(privateVar)
    }
     return {
        publicVariable:"this is a public variable",
        publicFunction:function(){
            console.log(this.publicVariable)
        }
     }
})();



myModule.publicFunction();



