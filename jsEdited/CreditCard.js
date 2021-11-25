//Validimi i emri CC
(function validateFullName(){

    const inputFullName = document.getElementById('CardFullName');
    const spanFullName = document.getElementById('spanCreditCardFullName');

    inputFullName.addEventListener('keyup',()=>{
        if((/\d/.test(inputFullName.value)) === true  ){
            if(spanFullName.className.indexOf('no-display')!== -1){
                spanFullName.classList.toggle('no-display');
            }
            spanFullName.textContent = `*Full Name should contains only letters`;
        } else{
            if(spanFullName.className.indexOf('no-display') === -1){
                spanFullName.classList.toggle('no-display');
            }
        }
    });
}());

import  {Cleave} from './cleave.js-master/dist/cleave.js';
//Validimi i Credit Card Number
(function validateCCNumber(){

}());

 
var g = document.getElementById('CardNumberId');
var cleave = new Cleave(g,{

creditCard:true,
onCreditCardTypeChanged: function(type){
    console.log(type);
}
});


    
     
      
    
 