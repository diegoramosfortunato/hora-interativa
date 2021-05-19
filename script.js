function carregar() {
    var msg = window.document.getElementById('msg')// seletor para a div com id msg
    var img = window.document.getElementById('imagem')// seletor para a tag img
    var data = new Date// var para pegar a data atual
    var hora = data.getHours() + ':' +   data.getMinutes()  // var para pegar a hora atual
    msg.innerText = `Agora são ${hora} ` // para aparecer a hora atual na tela]

    if(hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background ='#F2D4C2' //para mudar a cor de fundo 
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#C76253'

    }else{
        img.src = 'noite.png'
        document.body.style.background = '#0F2426'
    
    } if(hora >=0 && hora < 5 ){
        img.src = 'madrugada.png'
        document.body.style.background = '#38383A'
    }


}
