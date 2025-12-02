//menu hamburgeur
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    //se o menu está fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //abrir menu
        menu.style.right = "0"

        //mostrar icone-x
        iconeX.style.display = "inline"

        //esconde icone-barras
        iconeBarras.style.display = "none"

        sombra.style.rigth = "0"

    } else {
        // fechar menu
        menu.style.right = "-210px"

        // esconder icone x
        menu.style.display = "none"

        // mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"

    }
}