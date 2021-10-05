//pasar de pagina 1 a pagina 2

document.getElementById("btn2").addEventListener("click", ()=>{
    document.getElementById("pagina1").style.display="none";
    document.getElementById("pagina2").style.display="block"
});

//Pasar de pagina 2 a pagina 3

document.getElementById("paso2").addEventListener("click",()=>{
    document.getElementById("pagina2").style.display="none";
    document.getElementById("pagina3").style.display="block"
    ;});

//conseguir elementos para validar la tarjeta

let datos = function(){
    let name = document.getElementById("name").value;
    let numberCard = document.getElementById("number_card").value;
}

document.getElementById("btnDatos").addEventListener("click",datos);












import validator from './validator.js';

console.log(validator);
