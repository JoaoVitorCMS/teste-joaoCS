function enviar(){
    document.getElementById("nome").style.border = "1px solid black"
document.getElementById("assunto").style.border = "1px solid black"
const nome = document.getElementById("nome").value
const assunto = document.getElementById("assunto").value

if(!nome || !assunto){
    document.getElementById("nome").style.border = "2px solid red"
    document.getElementById("assunto").style.border = "2px solid red"
    return
}

const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
const msg = encodeURIComponent(mensagem)
window.location.href = `https://wa.me/5541998245828?text=${msg}`
}


function toggleMute() {
    var music = document.getElementById("background-music");
    var button = document.getElementById("mute-button");
    var icon = document.getElementById("mute-icon");
    
    if (music.muted) {
        music.muted = false;
        icon.src = "./Assets/musical-note.png";
    } else {
        music.muted = true;
        icon.src = "./Assets/mute.png";
    }
}


window.onload = function() {
    var music = document.getElementById("background-music");
    music.play();
}