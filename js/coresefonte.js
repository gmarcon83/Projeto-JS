var tema = "dia";
var tamanhoFonte = "normal";

window.onload = function(){
    let corSalva = sessionStorage.getItem("cor");
    let fonteSalva = sessionStorage.getItem("fonte");
    if (corSalva == "dia") {
        tema = "noite";
    } else if ("noite"){
        tema = "dia";
    }
    if (fonteSalva == "normal"){
        tamanhoFonte = "grande";
    } else if (fonteSalva == "grande"){
        tamanhoFonte = "normal";
    }
    trocarTema();
    trocarFonte();
}

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
    sessionStorage.setItem("cor", tema)
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
    sessionStorage.setItem("fonte", tamanhoFonte)
}