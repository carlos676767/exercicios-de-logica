using System;

class Program
{
    static void Main()
    {
        //entrada
        Console.Write("Digite seu ano de nascimento: ");
        string inputString = Console.ReadLine();
        int input = int.Parse(inputString);

        //processamento
        int idade = 2024 - input;

        //controle
        if (idade >= 18)
        {
            Console.WriteLine("Você é maior de idade. Sua idade é " + idade);
        }
        else
        {
            Console.WriteLine("Você é menor de idade. Sua idade é " + idade);
        }
    }
}
