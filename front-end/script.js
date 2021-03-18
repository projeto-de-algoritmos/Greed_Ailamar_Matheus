function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('images')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = 'manhas.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tardes.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noites.jpg'
        document.body.style.background = '#191970'
    }
}
