//Importamos la página de cipher
import cipher from './cipher.js';

//------ En el index se designa la interacción con el usuario -------

// 1. Definimos una variable para el botón de encriptado
let buttonEncode = document.getElementById("encode");

// 2. Definimos las acciones que ejecutará el botón al momento de darle "click"
buttonEncode.onclick = function() {
    // 3. Definimos las variables que vamos a utilizar y obtenemos su valor
    let string = document.getElementById('phrase').value;
    let offset = document.getElementById('space').value;
    // 4. Definimos una nueva variable que ejecutará el cifrado de la información que ingrese el usuario en los inputs
    let message = cipher.encode(string, offset);
    // 5. Lo mostramos en consola para asegurarnos que se esta realizando la acción
    console.log('MESSAGE', message);

    // 6. Definimos que se debe visualizar la información que obtuvimos de la variable, en la sección de boleto de lotería
    document.getElementById("encriptNumber").innerHTML = message;  
} 
    
      


//Estamos indicando que estamos entrando al objeto de cipher en el parametro de encode y encode
console.log(cipher.encode());
//console.log(cipher.decode());
