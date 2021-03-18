/* TODO:
    - Limitar o número de caracteres em cada calculadora e adicionar
      tamanho minimo para cada uma delas no CSS para ficar certo;
    - Desativar de verdade o display da calculadora que não está ligada;
*/

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
    // Pega o que existe no display
    let expExist = botao.parentElement.childNodes[1].innerHTML

    // Limpamos o display caso a expressao anterior tenha dado erro
    if (expExist == "ERRO"){
        botao.parentElement.childNodes[1].innerHTML = "";
        expExist = ""
    }
    // Tratamos os casos especiais
    switch (codBotao){
        case "=":
            codBotao = calcular(expExist);
            botao.parentElement.childNodes[1].innerHTML = "";
            break;
        // Essa linha é um sacrificio que temos que fazer pra ficar mais bonita
        // a calculadora. Seria possivel usar √ no lugar.
        case "<i class=\"fas fa-square-root-alt\" aria-hidden=\"true\"></i>":
            codBotao = Math.sqrt(calcular(expExist));
            botao.parentElement.childNodes[1].innerHTML = "";
            break;
        case "CE":
            codBotao = ""
            botao.parentElement.childNodes[1].innerHTML = "";
            break;
        case "←":
            codBotao = expExist.slice(0, -1);
            botao.parentElement.childNodes[1].innerHTML = "";
            break;
        case "x²":
            codBotao = "²";
            break;
        case "x³":
            codBotao = "³";
            break;
        case "π":
            codBotao = "3.1415";
            break;
    }
    // Pega o display da calculadora e adiciona o codigo tratado
    botao.parentElement.childNodes[1].innerHTML += codBotao

}

function calcular(expressao){
    // Transformamos a string para os caracteres que o JS entende. EX: x para *
    expressao = trocar("x","*", expressao);
    expressao = trocar("÷","/", expressao);
    // Apenas da ciêntifica
    if (!padrao){
        expressao = trocar("²","**2", expressao);
        expressao = trocar("³","**3", expressao);
    }

    // Caso não seja possivel resolver a expressão retornamos um erro,
    try {
        // Normalmente se usaria parse() mas não é recomendado devido a segurança
        // então a recomendação da W3 é usar assim.
        Function('"use strict";return (' + expressao + ')')();
    } catch(err){
        return "ERRO";
    }
    // Retornamos o valor calculado
    return Function('"use strict";return (' + expressao + ')')();
}


// Troca todos os carateres "orig" por "novo" na "expressao"
function trocar(orig, novo, expressao){
    let cont = 0 // Apenas uma segurança
    while (expressao.includes(orig) && cont < 20){
        expressao = expressao.replace(orig, novo);
        cont++;
    }
    return expressao;
}