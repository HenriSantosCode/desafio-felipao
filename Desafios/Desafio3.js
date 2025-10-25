class Heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

         switch(this.tipo) {
            case "mago":
                this.ataque = "magia";
                break;
            case "guerreiro":
                this.ataque = "espada";
                break;
            case "monge":
                this.ataque = "artes marciais";
                break;
            case "ninja":
                this.ataque = "shuriken";
                break;
}
    } 
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
    
    
}

let heroi1 = new Heroi("Henrique", 22, "guerreiro");

heroi1.atacar();




