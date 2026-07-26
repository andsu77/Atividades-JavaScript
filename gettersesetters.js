// Vamos praticar os conceitos de **getter** (`get`) e **setter** (`set`) em JavaScript com um exercício prático.

// Vamos criar uma classe chamada `Retangulo` 📐 que gerencia as dimensões de uma forma geométrica.

// ---

// ### 📋 O Desafio: Classe `Retangulo`

// 1. **Construtor**: Recebe `largura` e `altura` iniciais.
// 2. **Getter `area**`: Calcula e retorna a área do retângulo ($\text{largura} \times \text{altura}$).
// 3. **Setter `dimensoes**`: Recebe uma string no formato `"10x20"` (largura x altura), separa os valores e atualiza as propriedades `largura` e `altura` do objeto.

// ---

// Vamos construir essa classe passo a passo!

// Para começar o primeiro passo, **como você escreveria a estrutura inicial da classe `Retangulo` com o seu `constructor`?**


class Retangulo {
constructor (largura,altura) {
this.largura = largura ;
this.altura =  altura ;

}

get area () {
return `a area desse retangulo é de ${this.largura * this.altura}`;
}
set dimensoes(valor){

    if (typeof valor !== 'string')return;
const partes = valor.split('x');
this.largura = Number(partes[0]);
this.altura = Number(partes[1])
}

}

const meuretangulo = new Retangulo ("10","20");
meuretangulo.dimensoes ='20x20';
console.log(meuretangulo.area);