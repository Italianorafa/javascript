const username = document.querySelector('input#username');
const pesquisar = document.querySelector('button#pesquisa');
const res = document.getElementById('resultado');


let nome = username.value;

res.innerHTML = `o nome é ${nome}`