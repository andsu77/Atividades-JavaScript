// Requisitos do Exercício
// 1. Atributo Privado com Symbol

//     Crie um Symbol('historico') que guardará um array com o histórico de transações de cada conta.

// 2. Classe Base: ContaBancaria

//     Construtor: Deve receber titular e saldoInicial (padrão 0).

//     Propriedades:

//         titular (String)

//         _saldo (Número)

//         Utilizar o Symbol para inicializar o array do histórico de transações vazio [].

//     Getters e Setters:

//         saldo: Getter para consultar o saldo (deve apenas retornar o valor). Não crie um setter direto para o saldo para evitar alterações manuais indevidas (como conta.saldo = 1000000).

//     Métodos:

//         depositar(valor): Aumenta o saldo, registra a operação no histórico com data e exibe uma mensagem.

//         sacar(valor): Método base para saque. Se o valor for maior que o saldo, exibe erro. Caso contrário, desconta do saldo e registra no histórico.

//         exibirHistorico(): Exibe todas as transações feitas até o momento.

// 3. Herança e Polimorfismo: ContaCorrente

//     Herda de ContaBancaria.

//     Construtor: Recebe titular, saldoInicial e limite (cheque especial).

//     Polimorfismo (Sobrescrita do método sacar):

//         O saque deve permitir que a conta fique negativa até o limite estipulado (saldo + limite).

//         Caso o valor ultrapasse o saldo + limite, o saque deve ser recusado.

// 4. Encapsulamento Avançado: ContaInvestimento

//     Herda de ContaBancaria.

//     Método Exclusivo: renderJuros(taxaPercentual) — Aumenta o saldo com base no percentual informado e adiciona ao histórico.

//     Utilize Object.freeze em um método de relatório final para garantir que o resumo de investimentos gerado não possa ser alterado externamente.


const _historico = Symbol('historico');//o symbol é como se fosse um id da variavel 
const _saldo = Symbol('saldo');//o symbol seria como se a gnt desse uma senha a variavel que fica mais dificil de acessar e só tem acesso quem tem a 'chave' 

class  ContaBancaria {

constructor(titular,saldoInicial) {
    this.titular = titular;
    this.saldoInicial = 0;
this[_saldo] = saldoInicial; 
this[_historico] = [];
}


get saldo () {

    return this[_saldo];
}

depositar (valor) {
    const valoradicionado = this[_saldo] += valor;
 this[_historico].push(`o valor adicionado no historico foi de ${valor} e o saldo da conta é: ${valoradicionado}`);

}

sacar(valor){
if(valor > this[_saldo]) return;
this[_saldo] -= valor;
this[_historico].push(`o valor ${valor} foi retirado! o saldo da conta é ${this[_saldo]}`);

}

exibirHistorico () {

    return this[_historico];


}


}



//Conta Corrente

class ContaCorrente extends ContaBancaria{

    constructor(nome,saldoInicial,limite){
super(nome);
super(saldoInicial);
this.limite = limite


    }



}


const CCJ = new ContaBancaria("josé anderson",200);

CCJ.depositar(200);
CCJ.depositar(500);
CCJ.sacar(200);
console.log(CCJ)