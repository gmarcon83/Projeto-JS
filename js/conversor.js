function converter(){
    var entrada = document.getElementById("opcao1").value
    var saida = document.getElementById("opcao2").value
    var valor = document.getElementById("input").value
        
    if (valor == '') {        
        return
    } else if (valor < 00) {
        alert('Valor inválido!');
        valor.value = '';
    }
    var resultado = (entrada*saida*valor)
    document.getElementById("barraresultado").value = resultado.toFixed(2)



}




