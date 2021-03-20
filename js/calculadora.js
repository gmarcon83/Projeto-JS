var padrao = false;
var cientifica = false;
var calculou = false;

function power(calc){
    if (calc == "padrao" && !padrao){
        padrao = true;
    } else if (calc == "padrao" && padrao){
        padrao = false;
    }
    if (calc == "cientifica" && !cientifica){
        cientifica = true;
    } else if (calc == "cientifica" && cientifica){
        cientifica = false;
    }
    ligarCalculadora();
}

function ligarCalculadora(){
    // Altera o botão power e o display na calc ligada
    if (padrao) {
        document.getElementById("cnpower").style.color = "green"
        document.getElementById("cnpower").style.textShadow = "0 0 10px lightgreen"
        document.getElementById("cndisplay").style.backgroundColor = "aliceblue"
     }else{
        document.getElementById("cnpower").style.color = ""
        document.getElementById("cnpower").style.textShadow = ""
        document.getElementById("cndisplay").style.backgroundColor = "darkgray"
        document.getElementById("cndisplay").innerHTML = ""
    }
    if (cientifica){
        document.getElementById("ccpower").style.color = "green"
        document.getElementById("ccpower").style.textShadow = "0 0 10px lightgreen"
        document.getElementById("ccdisplay").style.backgroundColor = "aliceblue"
    } else {
        document.getElementById("ccpower").style.color = ""
        document.getElementById("ccpower").style.textShadow = ""
        document.getElementById("ccdisplay").style.backgroundColor = "darkgray"
        document.getElementById("ccdisplay").innerHTML = ""
    }
}

function botao(botao){
    // Testa se a calculadora ta ligada, antes de aceitar o input
    let qualCalculadora = botao.parentElement.id
    if (qualCalculadora == "calculadora-normal" && !padrao){
        return
    } else if (qualCalculadora == "calculadora-cientifica" && !cientifica){
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
    // Limpamos o display caso a finalizamos um cálculo anteriormente e não
    //inserirmos um operador
    if (calculou && !isNaN(codBotao)){
        botao.parentElement.childNodes[1].innerHTML = "";
        expExist = ""
    } else {
        calculou = false;
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
    }
    // Limita o numero de caracteres, dependendo da calculadora
    let expFinal = botao.parentElement.childNodes[1].innerHTML += codBotao

    if (qualCalculadora == "calculadora-normal" && expFinal.length > 11)
        expFinal = expFinal.substr(0, 11)
    if (qualCalculadora == "calculadora-cientifica" && expFinal.length > 14)
        expFinal = expFinal.substr(0, 14)
    // Pega o display da calculadora e adiciona o codigo tratado
    botao.parentElement.childNodes[1].innerHTML = expFinal
}

function calcular(expressao){
    // Transformamos a string para os caracteres que o JS entende. EX: x para *
    expressao = trocar("x","*", expressao);
    expressao = trocar("÷","/", expressao);
    expressao = trocar("²","**2", expressao);
    expressao = trocar("³","**3", expressao);
    expressao = calcularPi(expressao);
    //alert(expressao)
    // Caso não seja possivel resolver a expressão retornamos um erro,
    try {
        // Normalmente se usaria parse() mas não é recomendado devido a segurança
        // então a recomendação da W3 é usar assim.
        Function('"use strict";return (' + expressao + ')')();
    } catch(err){
        return "ERRO";
    }
    // Retornamos o valor calculado e marcamos que um calculo foi feito
    calculou = true;
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

// Feito depois
function calcularPi (expressao){
    let cont = 0 // Apenas uma segurança
    while (expressao.includes("π") && cont < 20){
        //Acha o pi
        let piLugar = expressao.indexOf("π")
        //testamos o que tem antes e colocamos um * se necessário
        if (piLugar - 1 >= 0 && !isNaN(expressao[piLugar - 1])){
            expressao = expressao.replace("π", "*3.1415926535");
        } else {
            expressao = expressao.replace("π", "3.1415926535");
        }
    cont++;
    }
    return expressao
}