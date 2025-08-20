const username = document.querySelector('input#username');
const pesquisar = document.querySelector('button#pesquisa');
const res = document.getElementById('resultado');

pesquisar.addEventListener('click', () => {
    fetch(`https://api.github.com/users/${username.value}`)
    .then(response => {
        if(!response.ok){
            throw new Error('Usuário nao encontrado')
        }
        return response.json();
    })
    .then(data => {
        res.innerHTML = ''
        console.log(data);
        let username = document.createElement('p');
        let name = document.createElement('p');
        let bio = document.createElement('p');
        let id = document.createElement('p');
        username.innerText = data.login;
        name.innerText = data.name;
        bio.innerText = data.bio;
        id.innerText = data.id;
        res.appendChild(username);
        res.appendChild(name);
        res.appendChild(bio);
        res.appendChild(id);
    })
    .catch(error => {
        console.error('Erro', error);
    })
})
