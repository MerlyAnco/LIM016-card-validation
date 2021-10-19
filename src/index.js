import validator from './validator.js';

const boxNumber = document.querySelector("#formularioTotal")
    

//pasar de pagina 1 a pagina 2

document.querySelector("#comprar1").addEventListener("click", ()=>{
    document.getElementById("pagina1").style.display="none";
    document.querySelector(".informacion").style.display="block"
});

//PASAR A DATOS RESUMIDOS DE INFORMACIÓN
let email=document.querySelector("#correoElectronico")
let direccion=document.querySelector("#direccion")
let departamento = document.querySelector("#departamento")
let provincia = document.querySelector("#provincia")
let distrito = document.querySelector("#distrito")

const enviarInformacion=document.querySelector("#enviarInformacion")

function enviarInfo(){
    document.querySelector("#informacion").style.display="none"
    document.querySelector(".envio").style.display="block"
    document.querySelector(".informationTable").style.display="block";
    document.querySelector("#mail").innerHTML= email.value;
    document.querySelector("#direccionFinal").innerHTML= direccion.value+", "+distrito.value+", "+provincia.value+ ", "+departamento.value
    console.log(direccion.value+", "+distrito.value+", "+provincia.value+ ", "+departamento.value)
    //document.querySelector("#direccionFinal").innerHTML= direccion + " " + distrito + " " + provincia + " " + departamento 
}

enviarInformacion.addEventListener("click",enviarInfo)

//PASAR A LA PAGINA DE PAGO
const continuarPago = document.querySelector("#continuarPago");

function continuar_pago(){
    document.querySelector(".envio").style.display="none"
    document.querySelector(".cuadroDeFormulario").style.display="block"
}

continuarPago.addEventListener("click",continuar_pago);

boxNumber.inputNumber.addEventListener("keyup", (e)=>{
    let valorNumero = e.target.value;

    boxNumber.inputNumber.value=valorNumero
    //Eliminando espacios en blanco
    .replace(/\s/g, "")
    //Eliminando letras
    .replace(/\D/g, "")
    //agrupando cada 4 
    .replace(/([0-9]{4})/g, '$1 ')
    //quitando ultimo espacios 
    .trim();

});

//No dejar que se escriban numeros en titular de la tarjeta

boxNumber.name.addEventListener("keyup", (e)=>{
    let valorNombre = e.target.value;

    boxNumber.name.value=valorNombre
    //Eliminando numeros
    .replace(/\d/g, "")
});

//No dejar que en CVV se escriba letras
boxNumber.cvv.addEventListener("keyup", (e)=>{
    let valorCvv = e.target.value;

    boxNumber.cvv.value=valorCvv
    //Eliminando espacios en blanco
    .replace(/\s/g, "")
    //Eliminando letras
    .replace(/\D/g, "")
    
});


//conseguir elementos para validar la tarjeta
const creditNumberCard = document.querySelector("#inputNumber");

const btnPagar = document.querySelector("#btnDatos")

function validar(){
    let numeroTarjeta = creditNumberCard.value.replace(/\s/g, "");
    let cifrado = validator.maskify(numeroTarjeta)
    //let tipoTarjeta = validator.tarjetType(numeroTarjeta)

    if(numeroTarjeta==""){
        //alert("Por favor ingrese un numero de tarjeta")
        document.getElementById("recordatorio").innerHTML="* Recuerde que una tarjeta valida tiene un mínimo de 12 digitos"
        //document.getElementById("recordatorio").style.color="red";
    }
    else if (validator.isValid(numeroTarjeta)){
        document.getElementById("maskifyTarjeta").innerHTML = "La tarjeta que termina en " + cifrado +" es válida";
        document.getElementById("pagina3").style.display="none";
        document.getElementById("informacion").style.display="none";
        document.getElementById("resultado").style.display="block";
        /*
        document.getElementById("logo").innerHTML=tipoTarjeta;
        document.getElementById("maskifyTarjeta").innerHTML = "La tarjeta que termina en " + cifrado;
        document.getElementById("validatorTarjeta").style.color="rgb(14,158,55)";
        document.getElementById("validatorTarjeta").innerHTML="ES VALIDA";
        ;*/
    }
    else{
        alert("la tarjeta que ingreso no es valida, por favor verifique de nuevo");
        /*
        document.getElementById("validatorTarjeta").style.color= "rgb(255,99,71)";
        document.getElementById("validatorTarjeta").innerHTML="NO ES VALIDA";
        document.getElementById("pagina3").style.display="none";
        document.getElementById("resultado").style.display="block";
        document.getElementById("logo").style.display="none"*/
    }
}

btnPagar.addEventListener("click",validar);

const recargar = document.querySelector("#volver_Inicio")


recargar.addEventListener("click",()=>window.location.reload())
/*
let datos = function(){
    let name = document.getElementById("name").value;
    let numberCard = document.getElementById("number_card").value;
    console.log(name + numberCard)
}

document.getElementById("btnDatos").addEventListener("click",datos);*/


//console.log(validator)
