const ocultarMensagem = document.getElementById('sem-texto');
const aparecerBotao = document.getElementById("com-texto");
const entradaTexto = document.getElementById("entrada-de-texto");
const textoTratado = document.getElementById("texto-tratado");
const btnColar = document.querySelector("#btn-colar");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");

btnCriptografar.addEventListener('click', () => {
    checkarTexto();
    criptografar();
    entradaTexto.value=""; 
});

btnDescriptografar.addEventListener('click', () => {
    checkarTexto();
    descriptografar();  
    entradaTexto.value="";  
});

btnColar.addEventListener('click', async (e) => {
    const colar = await navigator.clipboard.readText();//     
     entradaTexto.value = colar 
 });

function btnCopiar(){
    navigator.clipboard.writeText(textoTratado.value).then(()=>{
       alert('Texto copiado!');
   });
}

function ocultarElementos() {
    ocultarMensagem.style.display = "none";
    aparecerBotao.classList.remove('com-texto');
}

function checkarTexto(){
    var textoDigitado = entradaTexto.value;
     if (textoDigitado.trim() !== "") {
         ocultarElementos();         
     } else {
         alert('Ops, você esqueceu de digitar sua mensagem!')
     }    
 }

function criptografar() {
    var textoDigitado = entradaTexto.value;
    var saidaDoTexto = document.getElementById("texto-tratado"); 
    var substituicao = textoDigitado.replace(/[áàâãäÁÀÃÂ]/g, "a")
        .replace(/[éèêëÉÈÊ]/g, "e")
        .replace(/[íìîïÍÌÎ]/g, "i")
        .replace(/[óòôõöÓÒÔÕ]/g, "o")
        .replace(/[úùûüÚÙÛÜ]/g, "u")
        .replace(/[çÇ]/g, "c");
    var textoTratado = substituicao.toLowerCase(); 
    //transformar letras em sem acento e minusculo 

    var codificarTexto = textoTratado
        .replace(/[e]/g, "enter")
        .replace(/[o]/g, "ober")
        .replace(/[i]/g, "imes")
        .replace(/[a]/g,"ai")
        .replace(/[u]/g, "ufat");  
        //substituindo letas pelos conjuntos     
    saidaDoTexto.innerHTML = ""; // limpar o texto anterior para depois adicionar o novo.
    saidaDoTexto.innerHTML += codificarTexto.trim();     
    saidaDoTexto.readOnly = true;    

}

function descriptografar() {
    var textoDigitado = entradaTexto.value;
    var saidaDoTexto = document.getElementById("texto-tratado");
    var substituicao = textoDigitado.replace(/[áàâãäÁÀÃÂ]/g, "a")
        .replace(/[éèêëÉÈÊ]/g, "e")
        .replace(/[íìîïÍÌÎ]/g, "i")
        .replace(/[óòôõöÓÒÔÕ]/g, "o")
        .replace(/[úùûüÚÙÛÜ]/g, "u")
        .replace(/[çÇ]/g, "c");
    var textoTratado = substituicao.toLowerCase();

    var tartarTexto = textoTratado
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");  

    saidaDoTexto.innerHTML = "";
    saidaDoTexto.innerHTML += tartarTexto.trim();
    saidaDoTexto.readOnly = true;
}