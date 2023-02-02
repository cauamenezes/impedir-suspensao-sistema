"use strict"

const btnIniciar = document.getElementById("btnIniciar");
const btnEncerrar = document.getElementById("btnEncerrar");
let janelaAberta;

function abrirJanela() {
  janelaAberta = window.open('pagina-aberta.html', "_blank", "width=550, height=300, top=250, left= 400");
}

function fecharJanela() {
    janelaAberta.close();
}

function fecharJanelaPrincipal() {
    window.close()
}

function iniciarTimer(duracao, exibir) {

    let timer = duracao, minutos, segundos;

    setInterval(function() {

        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        exibir.textContent = minutos + ":" + segundos;

        if(--timer < 0) {
            timer = duracao;
        }

    }, 1000);
}

window.onload = function() {

    let duracao = 60 * 5; //Conversão para segundos
    let exibir = document.querySelector("#timer"); //Elemento para exibir o timer

    iniciarTimer(duracao, exibir); //Inicia a função

    setTimeout(abrirJanela, 1000);
    setTimeout(fecharJanela, 11000);
    // setInterval(zerarTimer, 30000)
    setInterval(abrirJanela, 300000);
    setInterval(fecharJanela, 310000);

}

btnEncerrar.addEventListener('click', fecharJanelaPrincipal)