var tema = "dia";
var tamanhoFonte = "normal";

function trocarTema(){
    let body = document.getElementById("body");
    switch (tema){
        case "dia":
            body.className = "cores-noite";
            tema = "noite"
            break;
        case "noite":
            body.className = "cores-dia";
            tema = "dia"
            break;
    }
}

function trocarFonte(){
    let div = document.getElementById("tamanho-fonte");
    switch (tamanhoFonte){
        case "normal":
            div.className = "fonte-grande";
            tamanhoFonte = "grande"
            break;
        case "grande":
            div.className = "fonte-normal";
            tamanhoFonte = "normal"
            break;
    }
}