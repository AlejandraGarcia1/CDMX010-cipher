//------ En esta sección se efine la funcionalidad total del proyecto -------

// 1. Se define un objeto, con propiedades y métodos para cifrar y descifrar el código
const cipher = {
  // 2. Definimos la funcion para codificar (Propiedad del objeto) con 2 parámetros harcodeados: string y offset
  encode: function(string, offset) {
    // let string = "Alejandra"; (parámetro harcodeado)
    // let offset = 3; (parámetro harcodeado)    

    // 3. Definimos las acciones que se van a ejecutar (Método del objeto) / En este caso implementamos un condicional:
    if (string){
      // 4. Definimos un ciclo con el "for" indicando las acciones a ejecutar
      for (let i = 65; i <= 65; i++);
      // console.log(string.charCodeAt(offset));
      // 5. Definimos lo que queremos que nos regrese el ciclo, con el comando de encriptación ".charCodeAt"
      return string.charCodeAt(offset);      
      // Nota: El return rompe con la ejecución del for      
    }    
  },
 /*  decode: function() {
    let number = 65;
    let offset = 2;

    if (number){
      for (let i = 65; i <=65; i++ );
      // console.log(number.fromCharCode(offset));

      return(number.fromCharCode(offset));   

    }
  } */
};


//Estamos exportando la página de cipher
export default cipher;
