var padrao = true;
var calculou = false;


function power(calc){
    // Determina qual queremos ligar, se apertarmos em uma
    // que está ligada, desliga ela e liga a outra
    if (calc == "padrao" && !padrao){
        padrao = true;
    } else if (calc == "cientifica" && padrao){
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
    // Testa se a calculadora ta ligada, antes de aceitar o input
    let qualCalculadora = botao.parentElement.id
    if (qualCalculadora == "calculadora-normal" && !padrao){
        return
    } else if (qualCalculadora == "calculadora-cientifica" && padrao){
        return
    }

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
        // Essa linha é um sacrificio que temos que fazer pra ficar mais bonita a
        // calculadora. Seria possivel usar √ no lugar do fonts awesome e evitar isso
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
    // Limita o numero de caracteres, dependendo da calculadora
    let expFinal = botao.parentElement.childNodes[1].innerHTML += codBotao
    if (padrao && expFinal.length > 11)
        expFinal = expFinal.substr(0, 11)
    else (!padrao && expFinal.length > 14)
        expFinal = expFinal.substr(0, 14)
    // Pega o display da calculadora e adiciona o codigo tratado
    botao.parentElement.childNodes[1].innerHTML = expFinal

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