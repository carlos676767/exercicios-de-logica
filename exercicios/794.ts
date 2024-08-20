// **Polimorfismo com Contas Bancárias**
// - Crie uma interface `BankAccount` com um método 
// `calculateInterest(amount: number): number`. Implemente
//  diferentes tipos de contas bancárias, como `SavingsAccount` 
//  e `CheckingAccount`, que calculam os juros de maneiras diferentes.
//   Escreva uma função que aceite uma instância de 
// `BankAccount` e calcule o interesse para um valor específico.



interface BankAccount{
    calculateInterest(amount: number) : number
}

class SavingsAccount implements BankAccount {
    calculateInterest(amount: number): number {
        return amount * 5
    }
}