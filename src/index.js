
import cipher from './cipher.js';


const boton= document.getElementById("buttonEncode");
const botonDes= document.getElementById("buttonDecode");




boton.addEventListener("click", function(e){
    e.preventDefault();
const clave= parseInt(document.getElementById("NumClave").value);
const input= document.getElementById("inputOriginal").value.toUpperCase();

    cipher.encode(clave,input)
   
});

botonDes.addEventListener("click", function(e){
    e.preventDefault();
    const clave= parseInt(document.getElementById("NumClave").value);
const input= document.getElementById("inputOriginal");
    cipher.decode(clave,input)
 
});



/*import cipher from './cipher.js';

const buttonEncode= document.getElementById ("buttonEncode");
buttonEncode.addEventListener("click",()=> {

    const clave= document.getElementById ("NumClave").value;
    const originalText=document.getElementById ("input-original").value;
    
    cipher.encode();
})

console.log(cipher);*/