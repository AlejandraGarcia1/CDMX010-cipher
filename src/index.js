import cipher from './cipher.js'; //Importamos la página de "Cipher".

//------ En el index se designa la interacción con el usuario -------

let buttonEncode = document.getElementById("encode"); //Definimos una variable para el botón de encriptado.

buttonEncode.onclick = function() { //Definimos las acciones que ejecutará el botón al darle "Click".
    
    let userInput = document.getElementById('phrase').value; //Definimos las variables que vamos a utilizar y obtenemos su valor.
    let desplazamiento = document.getElementById('space').value;
    let offset = parseInt(desplazamiento);
   
    let message = cipher.encode(offset, userInput); //Definimos una nueva variable que ejecutará el cifrado de la información que ingrese el usuario en los inputs.
   
    document.getElementById("encriptNumber").innerHTML = message; //Definimos que se debe visualizar la información que obtuvimos de la variable, en la sección de boleto de lotería.  
}; 

let buttonDecode = document.getElementById("decode");

buttonDecode.onclick = function() {

    let letters = document.getElementById('phrase').value;  
    let offset = document.getElementById('space').value;
   
    let message = cipher.decode(offset, letters);  

    document.getElementById("encriptNumber").innerHTML = message;
};
    
      


//Estamos indicando que estamos entrando al objeto de cipher en el parametro de "Encode" y "Decode".
// console.log(cipher.encode());
// console.log(cipher.decode());
