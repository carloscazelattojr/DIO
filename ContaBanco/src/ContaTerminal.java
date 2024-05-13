import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("================ BANCO DIO ================");
        System.out.print("Por favor, digite o número de sua agência: ");
        String agencia = sc.nextLine();

        System.out.print("Digite o número de sua conta: ");
        String numeroContaStr = sc.nextLine();
        int numero = Integer.parseInt(numeroContaStr);

        System.out.print("Informe seu nome completo: ");
        String nomeCliente = sc.nextLine();

        System.out.print("Informe o valor do depósito inicial: ");
        String saldoStr = sc.nextLine();
        double saldo = Double.parseDouble(saldoStr);
        sc.close();
        System.out.println();

        DadosCliente cliente = new DadosCliente(numero, agencia, nomeCliente, saldo);
        System.out.println(cliente.saldacao());

    }
}