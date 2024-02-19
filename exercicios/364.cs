using System;
using System.Collections.Generic;
using System.Timers;

class Program
{
    static Random random = new Random();
    static List<int> fichaPacientes = new List<int>(); 

    static void cadastroPaciente()
    {
        int chegadaDePacientes = random.Next(0, 51);

        if (!fichaPacientes.Contains(chegadaDePacientes))
        {
            fichaPacientes.Add(chegadaDePacientes);
            Console.WriteLine("Paciente cadastrado: " + chegadaDePacientes);
        }
    }

    static void atendimentoPaciente()
    {
        {
            int atenderPaciente = fichaPacientes[0];
            fichaPacientes.Remove(atenderPaciente); 
            Console.WriteLine("Paciente atendido: " + atenderPaciente);
        }
    }

    static void Main()
    {
        Timer timerPacientesAtendidos = new Timer(2000);
        timerPacientesAtendidos.Elapsed += (sender, e) => atendimentoPaciente();
        timerPacientesAtendidos.Start();

        Timer timerCadastro = new Timer(5000);
        timerCadastro.Elapsed += (sender, e) => cadastroPaciente();
        timerCadastro.Start();

        Console.WriteLine("Pressione qualquer tecla para sair.");
        Console.ReadKey();
    }
}