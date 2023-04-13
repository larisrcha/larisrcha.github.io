import perfil from "./assets/js/perfil/perfil.js";
import sobre from "./assets/js/sobre/sobre.js";
import projetos from "./assets/js/projetos/projetos.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => { 
        main.innerHTML = "";
        switch(window.location.hash){
            case " ":
                main.appendChild(perfil());
                break;
            case "#sobre":
                main.appendChild(sobre());
                break;
            case "#projetos":
                main.appendChild(projetos());
                break;
            default:
                main.appendChild(perfil());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(perfil());
    init();
})