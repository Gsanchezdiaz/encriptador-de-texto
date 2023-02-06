const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function encriptar(stringEncriptada){
    let matrizKeys = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizKeys.length; i++){
        if(stringEncriptada.includes(matrizKeys[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizKeys[i][0],matrizKeys[i][1]);
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada){
    let matrizKeys = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizKeys.length; i++){
        if(stringDesencriptada.includes(matrizKeys[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizKeys[i][1],matrizKeys[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar(){
    const button = document.querySelector(".btn-copiar");
    navigator.clipboard.writeText(mensaje.value);
    button.textContent="Copiado";
    mensaje.value = "";
}
