const limpar = document.querySelector('#clean');
const deletar = document.querySelector('#delete');
const igual = document.querySelector('#finish');
const porcentagem = document.querySelector('#percentage');
const mostrar = document.getElementById('show-numbers');
const historico = document.getElementById('history');
const botoes = document.getElementById('buttons');

let num1, num2, operationId;

function showNum(num){
    if(mostrar.innerText === '0' || mostrar.innerText == ''){
        mostrar.innerText = `${num}`;
    }
    else{
        mostrar.innerText += `${num}`
    }
}


botoes.addEventListener('click', (event) => {
    if(event.target.classList.contains('number')){
        showNum(event.target.innerText)
    }

    else if(event.target.classList.contains('operation')){
        num1 = Number(mostrar.innerText);
        mostrar.innerText = '0';
        historico.innerText = num1 + ` ${event.target.innerText}`
        operationId = event.target.id;
    }
})


limpar.addEventListener('click', () => {
    mostrar.innerText = '0';
    historico.innerText = ''
})

deletar.addEventListener('click', () => {
    let actualNum = mostrar.innerText;

    if(actualNum.length !== 1){
        mostrar.innerText = actualNum.slice(0,-1);
    }
    else{
        mostrar.innerText = '0'
    }
})

porcentagem.addEventListener('click', () => {
    num1 = Number(mostrar.innerText);
    historico.innerText = '';
    let result = num1/100;
    mostrar.innerText = result;
})

igual.addEventListener('click', () => {
    num2 = Number(mostrar.innerText);
    console.log(num1);
    console.log(num2);
    historico.innerText = '';
    let result;
    switch (operationId){
        case 'adicao':
            result = num1 + num2;
            break;
        case 'subtracao':
            result = num1 - num2;
            break;
        case 'multiplicacao':
            result = num1 * num2;
            break;
        case 'divisao':
            if(num2 !== 0){
                result = num1 / num2;
                break; 
            } 
    }
    console.log(result)
    mostrar.innerText = result;
})