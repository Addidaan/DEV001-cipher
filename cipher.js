const cipher = {
  /**
   * This function encodes a given string by a offset
   * @param {number} offset  the number of positions to be encoded
   * @param {string} input 
   * @returns {string} the encoded result
   */
  encode: function (offset, input) {

    if (typeof offset !== 'number' || typeof input !== 'string' ){
     throw new TypeError ('incorrect parameters');
    }

    let originalText = input;
    let numCip = offset % 26;
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let stringCifrado = "";

    for (var i = 0; i < originalText.length; i++) {
      //console.log('posicion '+i)
      let currentLetter = originalText[i];

      if (currentLetter === " ") {
        stringCifrado = stringCifrado + currentLetter;
        continue;
      }
      //console.log('letra actual '+ currentLetter)

      let posicionAbc = abc.indexOf(currentLetter);
      //console.log('muestrame la posicion de abc '+ posicionAbc);

      let nuevaPosicionAbc = posicionAbc + numCip;
      //console.log("nueva posicion abc" + nuevaPosicionAbc);
      if (nuevaPosicionAbc > 25) nuevaPosicionAbc = nuevaPosicionAbc - 26;

      let nuevaLetra = abc[nuevaPosicionAbc];
      //console.log("nueva letra " + nuevaLetra);

      stringCifrado = stringCifrado + nuevaLetra;
      //console.log (StringCifrado);
    }

    return stringCifrado;
  },
  decode: function (offset, input) {

    if (typeof offset !== 'number' || typeof input !== 'string' ){
      throw new TypeError ('incorrect parameters');
    }  
    let originalText = input;
    let numCip = offset % 26;
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let stringCifrado = "";

    for (var i = 0; i < originalText.length; i++) {
      let currentLetter = originalText[i];
      if (currentLetter === " ") {
        stringCifrado = stringCifrado + currentLetter;
        continue;
      }
      let posicionAbc = abc.indexOf(currentLetter);
      //console.log("posicion abc" + posicionAbc);
      let nuevaPosicionAbc = posicionAbc - numCip;
      //console.log("nueva posicin c+n" + nuevaPosicionAbc);
      if (nuevaPosicionAbc < 0) nuevaPosicionAbc = nuevaPosicionAbc + 26;

      let nuevaLetra = abc[nuevaPosicionAbc];
      //console.log(nuevaLetra);
      stringCifrado = stringCifrado + nuevaLetra;
    }

    //console.log(StringCifrado);
    return stringCifrado;
  }
};

export default cipher;

/*const cipher={
function encode() {

  let originalText= document.getElementById ("input-original").value.toUpperCase();
  let clave = parseInt(document.getElementById ("NumClave").value);
  let abc= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let StringCifrado ='';

if(originalText==""){
      document.getElementById("input-original").focus();
}
if(clave==""){
document.getElementById("NumClave").focus();
}  

for (var i=0;i<originalText.length;i++){

  console.log('posicion '+i)
  let currentLetter = originalText[i];
  
  if (currentLetter === ' ') {
      StringCifrado = StringCifrado+currentLetter;
      continue;
  }
  console.log('letra actual '+ currentLetter)

  let posicionAbc= abc.indexOf(currentLetter);
  console.log('muestrame la posicion de abc'+ posicionAbc);

  let nuevaPosicionAbc = posicionAbc + clave;
  console.log("nueva posicion abc" + nuevaPosicionAbc);
if (nuevaPosicionAbc>25) nuevaPosicionAbc= nuevaPosicionAbc -26;

  let nuevaLetra= abc[nuevaPosicionAbc]; 
  console.log("nueva letra " + nuevaLetra);

  StringCifrado= StringCifrado + nuevaLetra;
  console.log (StringCifrado);
}

document.getElementById("textoCifrado").innerText= StringCifrado;

}  
}
export default cipher;*/
