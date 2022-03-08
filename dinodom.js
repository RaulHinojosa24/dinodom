function eclosionarHuevo() {
    this.src = "./img/eclosion.png";
}

document.querySelector("#dinoBoton").addEventListener("click", function () {
    const dino = document.querySelector("#dinoseto");


    if (dino.style.display == "none") {
        dino.style.display = "grid";
        this.textContent = "Ocultar DinoSeto";
    } else {
        dino.style.display = "none";
        this.textContent = "Mostrar DinoSeto";
    }
});

document.querySelector("#pintar").addEventListener("click", function () {
    if (document.body.classList.contains("fondo")) {
        document.body.classList.remove("fondo");
        this.textContent = "Cielo Azul";
    } else {
        document.body.classList.add("fondo");
        this.textContent = "Quitar cielo azul";
    }
});

document.querySelector("#nuevo-huevo").addEventListener("click", function () {
    let huevo = document.createElement("img");
    huevo.classList.add("huevo");
    huevo.src = "./img/dinohuevo.png";
    huevo.addEventListener("click", eclosionarHuevo);

    document.querySelector("#dinoseto").appendChild(huevo);
});

document.querySelector("#cambiaTexto").addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        document.querySelector(".titulo").textContent = this.value;
        this.value = "";
    }
});