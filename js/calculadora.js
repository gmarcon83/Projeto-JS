var padrao = true;

// Executa quando carrega a pagina
window.onload = function(){
    ligarCalculadora();
}

function power(calc){
    // Determina qual queremos ligar, se apertarmos em uma
    // que está ligada, desliga ela e liga a outra
    if (calc == "padrao" && !padrao){
        padrao = true;
    } else if (calc == "padrao"){
        padrao = false;
    } else if (calc == "cientifica" && !padrao){
        padrao = true;
    } else {
        padrao = false;
    }
    ligarCalculadora();
}

function ligarCalculadora(){
    // Altera o botão power e o display na calc ligada
    if (padrao) {
        document.getElementById("cnpower").style.color = "green"
        document.getElementById("cnpower").style.textShadow = "0 0 10px lightgreen"
        document.getElementById("cndisplay").style.backgroundColor = "aliceblue"
        document.getElementById("ccpower").style.color = ""
        document.getElementById("ccpower").style.textShadow = ""
        document.getElementById("ccdisplay").style.backgroundColor = "darkgray"
        document.getElementById("ccdisplay").innerHTML = ""
    } else {
        document.getElementById("cnpower").style.color = ""
        document.getElementById("cnpower").style.textShadow = ""
        document.getElementById("cndisplay").style.backgroundColor = "darkgray"
        document.getElementById("cndisplay").innerHTML = ""
        document.getElementById("ccpower").style.color = "green"
        document.getElementById("ccpower").style.textShadow = "0 0 10px lightgreen"
        document.getElementById("ccdisplay").style.backgroundColor = "aliceblue"
    }
}

function botao(botao){
    // Pega o cod do botão
    let codBotao = botao.innerHTML;
    // Pega o display da calculadora

}







// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// ▲▼▲▼▲▼ Funções Matemáticas ▼▲▼▲▼▲ //
// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //

function somar(num1, num2){
    let resultado = (num1 + num2);
    return resultado;
}

function subtrair(num1, num2){
    let resultado = (num1 - num2);
    return resultado;
}

function multiplicar(num1, num2){
    let resultado = (num1 * num2);
    return resultado;
}

function dividir(num1, num2){
    let resultado = (num1 / num2);
    return resultado;
}

function fatorear(num1){
    // Por definição  0! e 1! é 1.
    if (num1 == 0 || num1 == 1)
        return 1;
    // Ou continua normalmente
    let i = num1;
        while (i > 1){
        i--;
        num1 = num1 * i;
    }
    return num1;
}

function radiciar(num1){
    num1 = Math.sqrt(num1);
    return num1;
}

function potenciar(num1, num2){
    let resultado = (num1 ** num2);
    return resultado;
}