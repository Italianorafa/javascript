class carro{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar = function(){
        console.log(`O carro ${this.marca} ${this.modelo} ligou`);
    }

    desligar = function(){
        console.log(`O carro ${this.marca} ${this.modelo} desligou`)
    }
}

class superCarro extends carro{
    constructor(marca, modelo, maxVel){
        super(marca, modelo);
        this.velocidadeMaxima = maxVel;
    }
}

let porsche = new superCarro('Porsche', 'Taycan', 300);

porsche.ligar();