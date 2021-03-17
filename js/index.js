var tema = "dia";

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