//------ En esta sección se efine la funcionalidad total del proyecto -------

const cipher = { //Se crea un objeto con propiedades y métodos para el cifrado / descifrado.  
  encode: function(offset, userInput){ //Se define la función (propiedad del objeto) con 2 parámetros: string y offset.
      // TEST UNITARIOS             
      // if (!offset && !userInput){
      //   throw new TypeError("Error");
      // } else if (typeof(offset) != Number && typeof(userInput != String)){
      //   throw new TypeError("Error en la matriz");
      // }       

      let code = ""; //Se define una variable donde se guardarán las nuevas letras ("frase encriptada")     
          
      for (let i=0; i<userInput.length; i++){ //Se define un "For" para indicar el ciclo que se realizará: La función va recorriendo cada letra del userInput hasta llegar a la ultima.       
       let text = userInput.charCodeAt(i); //Se pasa cada letra del userInput a código ASCII y se guarda en la nueva variable de "texto"
      
        if (text >= 97 && text <=122){ //Definimos condicionales. Con el comparador logico "&&" decimos que "text" comience en 65 y no pase de 90.        
        code += String.fromCharCode((text - 97 + offset) %26 +97); //Se aplica la formúla para obtener el nuevo cifrado. En este caso son "Minusculas".
        
       } else if (text >= 65 && text <=90){        
        code += String.fromCharCode((text - 65 + offset) %26 +65); //Se aplica la formula para obtener el cifrado. En este caso son "Mayusculas".
        // console.log('CIFRADO1', code);
       } else {         
         code += userInput.charAt(i); //Aplicamos "charAt" para convertir los números directamente a un String.
      }    
     }     
     return code; //Pedimos que nos regrese el resultado de la variable "Code"
  },
  decode: function (offset, letters){ //Se define el descifrado.

    let newOffset = 26 - (offset % 26); //Definimos un nuevo "Offset" para que al desencriptar comience el ciclo desde el prncipio y no retroceda. 
    let message = "";

    for(let i=0; i<letters.length; i++){

      let text = letters.charCodeAt(i);  

      if (text >= 97 && text <= 122){
        message += String.fromCharCode((text - 97 + newOffset) %26 +97); //Es la misma formula del encriptado. Lo punico que tiene que cambiar es el "Offset" para desencriptarlo.

      } else if (text >= 65 && text <= 90){
        message += String.fromCharCode((text - 65 + newOffset) %26 +65);

      } else {
        message += text.charAt(i);
      }
    }
    return message;
  },
};

// (offset, userInput) =>{
//   if (!offset && !userInput){
//         throw new TypeError("Error");
//       } else if (typeof(offset) !== Number && typeof(userInput !== String)){
//         throw new TypeError("Error en la matriz");
//       } 
// }




export default cipher; //Estamos exportando la página de "Cipher".
