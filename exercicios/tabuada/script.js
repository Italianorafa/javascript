function tabuada(){
    var num = document.querySelector('input#txtnum');
    var tab = document.querySelector('select#tab');
   
    if(num.value.length == 0){
        window.alert('Impossível calcular!')
    }
    else{
        n = Number(num.value);
        var c = 0;
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
            c++
        }
    }
}