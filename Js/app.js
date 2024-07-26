function selectorElementoHTML (elemento) {
    return document.querySelector(elemento);
}

function mostrarWarning (elemento) {

    // asignamos el elemento  a una variable como buena practica 
    // para acceder una sola ves al elemento
    const etiqueta = selectorElementoHTML(elemento);
    etiqueta.style.color = "red";

    if (elemento === warningDos) {
        etiqueta.style.display = "flex";
    } else {
        selectorElementoHTML(imagenWarning).style.filter = 'invert(26%) sepia(90%) saturate(7481%) hue-rotate(-7deg)';
    } 
}

function validarTexto() {
    
    const patron = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0-9!@#$%^&*()_+{}\[\]:;<>,.?~`´¨]/u;
    const capturarElementoTextarea = selectorElementoHTML(textareaEncriptar);
    const capturarTexto = capturarElementoTextarea.value;

    if (patron.test(capturarTexto)) {
        mostrarWarning(warningUno);
    } else if (capturarTexto === "") {
        mostrarWarning(warningDos);
    } else {
        return capturarTexto;
    }
        
}

function encriptarTexto () {
    
    let textoValidado = validarTexto();
    let textoEncriptado = "";
    const reglaEncriptado = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat'
    };

    if (textoValidado !== undefined) {
        for (let letra of textoValidado) {
            textoEncriptado += reglaEncriptado[letra] || letra;
        }

        console.log(textoEncriptado);
        return textoEncriptado;
    } 

    return; // punto de quiebre para el valor undefined

}

function limpiar () {

    selectorElementoHTML(warningUno).style.color = "var(--color-cuaternario)";
    selectorElementoHTML(imagenWarning).style.filter = "none"; 
    selectorElementoHTML(warningDos).style.color = "var(--color-cuaternario)";
    selectorElementoHTML(warningDos).style.display = "none";
    selectorElementoHTML(seccionDosDesencriptar).style.display = "none";
}

const botonEncriptar = ".button__encriptar";
const botonDesencriptar = ".button__desencriptar";
const botonCopiar = ".button__copiar";
const warningUno = ".division__elementos__encriptados>p";
const warningDos = ".division__titulo__parrafo__desencriptar>h1";
const imagenWarning = ".img__warning";
const seccionUnoDesencriptar = ".division__elementos__desencriptar";
const seccionDosDesencriptar = ".division__textarea__boton__desencriptar";
const textareaEncriptar = ".textarea__encriptar";
const textareaDesencriptar = ".textarea__desencriptar";


selectorElementoHTML(botonDesencriptar).addEventListener ('click', () => {
    if (selectorElementoHTML(textareaEncriptar).value === "") {
        mostrarWarning(warningDos);
    }
}); 

selectorElementoHTML(textareaEncriptar).addEventListener ('input', () => {
    if (selectorElementoHTML(warningUno).style.color == "red" || selectorElementoHTML(warningDos).style.color == "red") {
        console.log('paso por testarea');
        limpiar();
    }
});