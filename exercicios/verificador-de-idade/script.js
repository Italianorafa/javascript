function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value>ano){
        alert('[ERRO] Verifique os dados inseridos.')
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src', 'bebeH.jpg');
            }
            else if(idade<21){
                //adol
                img.setAttribute('src', 'adolesH.jpg')
            }
            else if(idade<50){
                //adulto
                img.setAttribute('src', 'adultoH.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosoH.jpg')
            }
        }
        else{
            genero = 'Mulher';
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src', 'bebeM.jpg')
            }
            else if(idade<21){
                //adol
                img.setAttribute('src', 'adolesM.jpg')
            }
            else if(idade<50){
                //adulto
                img.setAttribute('src', 'adultoM.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosoM.jpg')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
    }
}