// Exercício: Fábrica de Veículos 🚗

// Imagine que estamos criando um sistema para uma oficina. Precisamos criar uma Factory Function chamada criarVeiculo.

//     Crie 3 objetos com ações independentes:

//         🔑 ligar: método ligar() que exibe "O veículo está ligado".

//         ⛽ acelerar: método acelerar() que exibe "O veículo está acelerando".

//         🔔 buzinar: método buzinar() que exibe "Bip bip!".

//     Crie a Factory Function criarVeiculo(marca, modelo):

//         Monte um veiculoPrototype juntando as três ações (ligar, acelerar, buzinar) usando o Spread Operator (...).

//         Retorne um novo objeto criado com Object.create(), passando as propriedades marca e modelo como descriptors (usando { value: ... }).

// Tente escrever o código desse exercício! Assim que terminar, envie aqui para analisarmos juntos. 💻


//comportamento mixins, quando o os metodos sao separados 
const ligar = {
ligar(){

    console.log("o veiculo está ligado!");
        return "";
}
 
}


const acelerar = {
acelerar() {

console.log("o veiculo está acelerando!");
    return "";
}

 

}
const buzinar = {
buzinar(){

    console.log("o veiculo está buzinando");

    return "";
}

    
}


function criarVeiculo (marca,modelo){
    //eu juntei os objetos e mixei eles dentro do veiculo prototype(fiz uma copia)
    //Isso evita duplicação de código e economiza memória 🧠, pois todos os veículos criados compartilharão esse mesmo protótipo em vez de recriar as funções do zero.
const veiculoPrototype ={...acelerar,...buzinar,...ligar}

//criei os metodos dentro do protype do veiculo atraves da variavel veiculoPrototype
//logo depois tivemos a criação de como se fosse o objet prototypes para que fique visivel no console
return Object.create(veiculoPrototype,{

marca:{
    enumerable:true,
    value:marca
    
},

modelo:{
    enumerable:true,
    value:modelo}

});


}

const byd = criarVeiculo("byd","dolphin");

console.log(byd.acelerar());