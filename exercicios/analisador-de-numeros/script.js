var num = document.querySelector('input#txtnum');
var add = document.querySelector('input#add');
var res = document.getElementById('res');
var c = 1;
var vetor = [];

function adicionar(n){
    res.innerHTML = '';
    
    if(n<1 || n>100){
        window.alert('Valor fora dos limites!')
    }
    else if(vetor.indexOf(n) != -1){
        window.alert('Valor já adicionado!')
    }
    else{
        vetor.push(n);
        let sel = document.getElementById('sel')
        let opt = document.createElement('option');
        opt.text = `O número ${n} adicionado`
        opt.value = `N${c}`
        sel.appendChild(opt);
        c++
    }    
    num.value = '';
    num.focus();
}


function finalizar(vet){
    if(vet.length == 0){
        window.alert('Adicione um número!')
    }
    else{
        vet.sort()
        res.innerHTML = `<p>Ao todo, temos ${vet.length} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${vet[vet.length - 1]}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${vet[0]}.</p>`;
        var soma = 0;
        for(let pos in vet){
            soma += vet[Number(pos)];
        }
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`;
        let med = soma/vet.length;
        let media = med.toFixed(2);
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`;
    }
    
}

function reiniciar(){
    let sel = document.getElementById('sel');
    sel.innerHTML = ''
    res.innerHTML = ''
    vetor = [];
    c = 1;
}