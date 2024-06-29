var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;
var enviarDatos=0;
var formulario=document.getElementById("formulario");

formulario.addEventListener("submit", recibirDatos);

function recibirDatos(e){
    e.preventDefault();
    //console.log("No se puede enviar porque esta bloqueado por javascript");
    var nombre=document.getElementById("nombre").value;
    var celular=document.getElementById("celular").value;
    var correo=document.getElementById("correo").value;
    var mensajeNombre=document.getElementsByClassName("errorNombre")[0];
    var xmarkErrorNombre=document.getElementsByClassName("xmarkErrorNombre")[0];

    var mensajeCelular=document.getElementsByClassName("errorCelular")[0];
    var xmarkErrorCelular=document.getElementsByClassName("xmarkErrorCelular")[0];

    var mensajeCorreo=document.getElementsByClassName("errorCorreo")[0];
    var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];

    var checkMarkNombre=document.getElementsByClassName("checkMarkNombre")[0];
    var checkMarkCelular=document.getElementsByClassName("checkMarkCelular")[0];
    var checkMarkCorreo=document.getElementsByClassName("checkMarkCorreo")[0];

    if (!regexNombre.test(nombre)) {
        mensajeNombre.classList.remove("ocultar");
        //__Input______. ClassList.add();
        document.getElementById("nombre").classList.add("errorInput");
        xmarkErrorNombre.classList.remove("ocultar");
        /alert("Por favor, introduce un nombre válido.");/
        checkMarkNombre.classList.add("ocultar");
        //enviarDatos=0;
    }
    else{
        mensajeNombre.classList.add("ocultar");
        document.getElementById("nombre").classList.add("correctoInput");
        xmarkErrorNombre.classList.add("ocultar");
        checkMarkNombre.classList.remove("ocultar");
        enviarDatos++;
    }
    if(!regexTelefonoNacional.test(celular)) {
        mensajeCelular.classList.remove("ocultar");
        document.getElementById("celular").classList.add("errorInput");
        xmarkErrorCelular.classList.remove("ocultar");
        checkMarkCelular.classList.add("ocultar");
        //enviarDatos=0;
    }
    else{
        mensajeCelular.classList.add("ocultar");
        document.getElementById("celular").classList.add("correctoInput");
        xmarkErrorCelular.classList.add("ocultar");
        checkMarkCelular.classList.remove("ocultar");
        enviarDatos++;
    }
    if(!regexCorreo.test(correo)){
        mensajeCorreo.classList.remove("ocultar");
        document.getElementById("correo").classList.add("errorInput");
        xmarkErrorCorreo.classList.remove("ocultar");
        checkMarkCorreo.classList.add("ocultar");
        //enviarDatos=0;
    }
    else{
        mensajeCorreo.classList.add("ocultar");
        document.getElementById("correo").classList.add("correctoInput");
        xmarkErrorCorreo.classList.add("ocultar");
        checkMarkCorreo.classList.remove("ocultar");
        enviarDatos++;
    }
    if(enviarDatos==3){
        formulario.Submit();
    }
    else{
        enviarDatos=0;
    }
}