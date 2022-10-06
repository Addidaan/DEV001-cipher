
const cipher = {
  encode:function(clave,input){
    let originalText= input;
    let numCip=clave%26;
    let abc= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let StringCifrado ='';

    if(originalText==""){
      document.getElementById("inputOriginal").focus();
    }
    if(isNaN(numCip)){
    document.getElementById("NumClave").focus();
    
    }  
   
    for (var i=0;i<originalText.length;i++){

    //console.log('posicion '+i)
      let currentLetter = originalText[i];
      
      if (currentLetter === ' ') {
          StringCifrado = StringCifrado+currentLetter;
          continue;
      }
     //console.log('letra actual '+ currentLetter)
    
      let posicionAbc= abc.indexOf(currentLetter);
     //console.log('muestrame la posicion de abc '+ posicionAbc);
    
      let nuevaPosicionAbc = posicionAbc + numCip;
     //console.log("nueva posicion abc" + nuevaPosicionAbc);
    if (nuevaPosicionAbc>25) nuevaPosicionAbc= nuevaPosicionAbc -26;
    
      let nuevaLetra= abc[nuevaPosicionAbc]; 
     //console.log("nueva letra " + nuevaLetra);
    
      StringCifrado= StringCifrado + nuevaLetra;
     //console.log (StringCifrado);
    }
    
  document.getElementById("textoCifrado").innerText= StringCifrado;
  alert(StringCifrado)
  }


  ,decode: function(clave,input){
    let originalText= input.value.toUpperCase()
    let numCip=clave%26
    let abc= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let StringCifrado ='';

    for (var i=0;i<originalText.length;i++){
      let currentLetter = originalText[i];
      if (currentLetter === ' ') {
        StringCifrado = StringCifrado+currentLetter;
        continue;
      }
      let posicionAbc= abc.indexOf(currentLetter);
      console.log("posicion abc" + posicionAbc);
      let nuevaPosicionAbc = posicionAbc - numCip;
      console.log("nueva posicin c+n" + nuevaPosicionAbc);
      if (nuevaPosicionAbc<0) nuevaPosicionAbc= nuevaPosicionAbc +26;
    
      let nuevaLetra= abc[nuevaPosicionAbc]; 
      console.log(nuevaLetra);
      StringCifrado= StringCifrado + nuevaLetra;
          
    }
    document.getElementById("textoDescifrado").innerText= StringCifrado;
    console.log(StringCifrado);
    alert(StringCifrado);
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

