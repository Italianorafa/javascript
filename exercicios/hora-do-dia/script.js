function carregar(){
    var agora = new Date();
    var hora = agora.getHours();
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#img');
    msg.innerHTML = `Agora sao ${hora} horas`;
    
    if(hora>=0 && hora<12){
        // BOM DIA!
        img.src = 'fotomanha.png';
        document.body.style.background = '#83a6de'
    }
    else if(hora>=12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.png';
        document.body.style.background = '#6b889d'
    }
    else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#294b8a'
    }
}
