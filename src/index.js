
import cipher from './cipher.js';


const boton= document.getElementById("buttonEncode");
const botonDes= document.getElementById("buttonDecode");


boton.addEventListener("click", function(e){
    e.preventDefault();
const offset= parseInt(document.getElementById("NumClave").value);
const input= document.getElementById("inputOriginal").value.toUpperCase();

let stringCifrado=cipher.encode(offset,input)
document.getElementById("textoCifrado").innerText= stringCifrado;
   
});


botonDes.addEventListener("click", function(e){
    e.preventDefault();
    const offset= parseInt(document.getElementById("NumClave").value);
const input= document.getElementById("inputOriginal").value.toUpperCase();
    
   let stringCifrado=cipher.decode(offset,input)
    document.getElementById("textoDescifrado").innerText= stringCifrado;
    
});



/*import cipher from './cipher.js';

const buttonEncode= document.getElementById ("buttonEncode");
buttonEncode.addEventListener("click",()=> {

    const clave= document.getElementById ("NumClave").value;
    const originalText=document.getElementById ("input-original").value;
    
    cipher.encode();
})

console.log(cipher);*/