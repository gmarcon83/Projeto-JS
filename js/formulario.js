// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// ▲▼▲▼▲▼▲▼▲ Validar Dados ▲▼▲▼▲▼▲▼▲ //
// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //

function validacaoEmail(field) {

    if (field == undefined){
        field = document.getElementById("email");
    }

    if (field.value == ''){
        document.getElementById("email").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        return false
    }
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("email").style.boxShadow = "";
    /* alert("E-mail válido"); */
    } else {
    document.getElementById("email").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
    return false
    //alert("E-mail inválido");
    }
    return true
}

function VerificaCPF() {
    let strCpf = document.getElementById('cpf').value;

    var soma = 0;
    var resto;
    if (strCpf == ''){
        //alert("CPF Inválido");
        document.getElementById("cpf").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        return false
    }

    if (strCpf == "00000000000" || strCpf.length != 11) {
        //alert("CPF Inválido");
        document.getElementById("cpf").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        /* alert("CPF Válido"); */
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        //alert("CPF Inválido");
        document.getElementById("cpf").style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        return false;
    }
    //alert("CPF VÁLIDO");
    document.getElementById("cpf").style.boxShadow = "";
    return true;
}

function msgCPF() {
    var msg = verificaCPF();
    if (msg) {
        //alert('CPF válido');
    } else {
        //alert('CPF inválido!');
    }
}

function tiraBorda(elem){

    elem.style.boxShadow = "";
}

function frase() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sexo = document.getElementById('sexo').value;
    var cpf = document.getElementById('cpf').value;
    var mes = document.getElementById('mes').value;
    var dia = document.getElementById('dia').value;
    var ano = document.getElementById('ano').value;

    // Verificamos se existe algum campo invalido e retornamos o erro se sim
    let erro = false;
    if (!VerificaCPF()){
        erro = true
    }
    if (!validacaoEmail()){
        erro = true
    }
    if(nome == ""){
        document.getElementById('nome').style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        erro = true
    }
    if(sexo == ""){
        document.getElementById('sexo').style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        erro = true
    }
    if(dia == ""){
        document.getElementById('dia').style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        erro = true
    }
    if(mes == ""){
        document.getElementById('mes').style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        erro = true
    }
    if(ano == ""){
        document.getElementById('ano').style.boxShadow = "0 0 6px red, inset 0 0 3px red";
        erro = true
    }
    if (erro){
        return
    }
    /* CALCULO DE IDADE */
    switch(mes) {
        case 'janeiro' : var mesNum = 0; break;
        case 'fevereiro' : var mesNum = 1; break;
        case 'março' : var mesNum = 2; break;
        case 'abril' : var mesNum = 3; break;
        case 'maio' : var mesNum = 4; break;
        case 'junho' : var mesNum = 5; break;
        case 'julho' : var mesNum = 6; break;
        case 'agosto' : var mesNum = 7; break;
        case 'setembro' : var mesNum = 8; break;
        case 'outubro' : var mesNum = 9; break;
        case 'novembro' : var mesNum = 10; break;
        case 'dezembro' : var mesNum = 11; break;
    }

    var nasc = new Date(ano, mesNum, dia);

    var hoje = new Date(2021, 2, 17);

    var idade = Math.floor((hoje - nasc) / 31556952000);
    /* FIM DO CÁLCULO*/
    if (idade > 130 || idade < 0 || isNaN(idade)) {
        alert('Idade inválida!');
    } else {
        document.getElementById('mensagem').innerHTML = `Olá <strong>${nome}</strong>, seu login é <strong>${email}</strong>, você tem <strong>${idade}</strong> anos, se define como uma pessoa do sexo <strong>${sexo}</strong> e pode usar <strong>${cpf}</strong> como senha.`;
    }
}

function valDia(valor) {
    let numero = valor.value;
    if (numero == '') {
        return
    } else if (numero > 31 || numero < 1) {
        alert('Dia inválido!');
        valor.value = '';
    }
}

function valAno(valor) {
    let numero = valor.value;
    if (numero == '')
        return
    else if (numero > 2021 || numero < 1891) {
        alert('Ano inválido!');
        valor.value = '';
    }
}