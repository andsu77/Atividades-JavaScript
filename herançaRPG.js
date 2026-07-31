class Personagem {
    constructor(nome, vida = 100, mana = 50, vivo) {
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
        this.vivo = true;
    }

    receberDano(quantidade) {
        if (!this.vida) {
            console.log(this.nome + "o cara morreu ");
        }

        this.vida -= quantidade;
        if (this.vida <= 0) {
            this.vida = 0;
            this.vivo = false;
            console.log("personagem morreu!");
        }
    }

    atacar(alvo) {
        if (!this.vivo) {
            console.log(this.nome + "o cara ta morto");
            return;
        }

        alvo.receberDano(10);
    }
}

class Mago extends Personagem {
    atacar(alvo) {
        console.log("mago usa magia!");

        if (this.mana >= 15) {
            alvo.receberDano(30);
            this.mana -= 15;
        }
        if (this.mana < 15) {
            console.log(this.nome + " relaiza um ataque cajadada fraco que não gasta mana, causando apenas 5 de dano em:" + alvo.nome);
            alvo.receberDano(5);
        }
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida = 100, mana = 50) {
        super(nome, vida, mana);
        this.escudoEquipado = false;
    }

    equiparEscudo() {
        if (!this.vivo) {
            console.log(`${this.nome} está morto! Não pode equipar o escudo.`);
            return;
        }

        this.escudoEquipado = true;
        console.log(`${this.nome} equipou o escudo!`);
    }

    receberDano(quantidade) {
        if (this.escudoEquipado) {
            quantidade = quantidade / 2;
            this.escudoEquipado = false;
            console.log(`O escudo de ${this.nome} quebrou e reduziu o dano!`);
        }
        super.receberDano(quantidade);
    }
}