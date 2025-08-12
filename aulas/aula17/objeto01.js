const animal = {
    som: 'som genérico',
    falar:function(){
        return this.som;
    }
}

let cachorro = Object.create(animal);
cachorro.som = 'au au';
cachorro.pelagem = 'marrom'

console.log(`O animal faz ${animal.falar()}`);
console.log(`O cachorro faz ${cachorro.falar()}`);
console.log(`A cor do pelo do cachorro é ${cachorro.pelagem}`)