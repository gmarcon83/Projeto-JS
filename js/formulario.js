








// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //
// ▲▼▲▼▲▼▲▼▲ Validar Dados ▲▼▲▼▲▼▲▼▲ //
// ▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲ //

function validacaoEmail(field) {
    if (field.value == ''){
        return
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
    document.getElementById("email").innerHTML="E-mail válido";
    /* alert("E-mail válido"); */
    } else {
    document.getElementById("email").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail inválido");
    }
}

function VerificaCPF() {
    strCpf = document.getElementById('cpf').value;
    
    var soma = 0;
    var resto;
    

    if (strCpf == "00000000000" || strCpf.length != 11) {
        alert("CPF Inválido");
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
        alert("CPF Inválido");
        return false;
    }
    alert("CPF VÁLIDO");
    return true;
}

function msgCPF() {
    var msg = verificaCPF();
    if (msg) {
        alert('CPF válido');
    } else {
        alert('CPF inválido!');
    }
}



function frase() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sexo = document.getElementById('sexo').value;
    var cpf = document.getElementById('cpf').value;
    /* CALCULO DE IDADE */
    var mes = document.getElementById('mes').value;
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
    var dia = document.getElementById('dia').value;
    var ano = document.getElementById('ano').value;

    var nasc = new Date(ano, mesNum, dia);

    var hoje = new Date(2021, 2, 17);

    var idade = Math.floor((hoje - nasc) / 31556952000);
    /* FIM DO CÁLCULO*/
    if (idade > 130 || idade < 0 || isNaN(idade)) {
        alert('Idade inválida!');
    } else {    
        document.getElementById('mensagem').innerHTML = `Olá ${nome}, seu login é ${email}, você tem ${idade} anos, se define como uma pessoa do sexo ${sexo} e pode usar ${cpf} como senha.`;
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
    if (numero > 2021 || numero < 1891) {
        alert('Ano inválido!');
        valor.value = '';
    }
}