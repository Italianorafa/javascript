/*Com o MAP, tenho acesso:
    - A todos os itens do array (1º parametro)
    - Ao index dos itens (2º parametro)
    - Ao array completo (3º parametro)
*/


const numero = [1, 2, 3, 4, 5, 6];

// const dobro = numero.map((item, index, Arraycompleto) => {
//     return item*2
// });

// console.log(dobro);

// /*Com o Reduce, tenho acesso:
//     - Ao acumulador (1º parametro)
//     - A todos os itens do array (2º parametro)
//     - Ao index dos itens (3º parametro)
//     - Ao array completo (4º parametro) 
// */

// const soma = numero.reduce((acumulador, atual) => {
//     let total = acumulador + atual;

//     return (total, 0);
// })

// console.log(soma);

// /*O filter cria um novo array com numero de itens que pode ser diferente do array original*/

// const par = numero.filter(item => item%2!==0);

// console.log(par);

const somaMais10 = numero.map(item => item+19).filter(item => item%2===0).reduce((acumulador,item) => acumulador+item)

console.log(somaMais10)