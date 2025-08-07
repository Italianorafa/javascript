function contar(){
    var txtinicio = document.querySelector('input#txtini');
    var txtfim = document.getElementById('txtfim');
    var cont = document.querySelector('input#txtpass');
    var res = document.getElementById('res');

    
    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || cont.value.length == 0){
        
        res.innerHTML = 'Impossivel contar!'
    }
    else{
        res.innerHTML = 'Contando: <br>'
        if(Number(cont.value) <= 0){
            cont.value = '1'
        }
        if(Number(txtinicio.value) < Number(txtfim.value)){
            for(var c = Number(txtinicio.value); c<=Number(txtfim.value); c+=Number(cont.value)){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        else{
            for(var c = Number(txtinicio.value); c>=Number(txtfim.value); c-=Number(cont.value)){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3F4}`
    }
    
}