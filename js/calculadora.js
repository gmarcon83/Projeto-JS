









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