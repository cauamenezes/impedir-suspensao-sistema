"use strict"

const btnIniciar = document.getElementById("btnIniciar");
const btnParar = document.getElementById("btnParar");
let janelaAberta;

function abrirJanela() {
  janelaAberta = window.open('pagina-aberta.html', "_blank", "width=300, height=300");
  
}

function intervaloAbrirJanela() {
    alert("A função será executada em 10 minutos.")
    setInterval(abrirJanela, 600000)
}

function fecharJanela() {
    janelaAberta.close();
}

function fecharJanelaPrincipal() {
    window.close()
}

btnIniciar.addEventListener('click', intervaloAbrirJanela)
btnParar.addEventListener('click', fecharJanelaPrincipal)
setInterval(fecharJanela, 600001)
