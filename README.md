# Design Pattern - Singleton
Singleton é um padrão de projeto de software. Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto. Nota linguística: O termo vem do significado em inglês para um conjunto que contenha apenas um elemento.

# Singleton 
Um padrão de Criação.

## Objetivo:
- Garantir que a classe tenha uma única instância.

- Prover um meio global de acesso a essa instância.

É um dos padrões mais simples, responsável por garantir que exista apenas uma instância de uma classe, garantindo uma declaração única e global de acesso ao objeto. Alguns projetos necessitam que algumas classes tenham apenas uma instância.

## Desvantagens:
Uma das desvantagens do padrão de projeto Singleton é que não é possível inibir o acesso a sua classe. Qualquer parte do código por chamar o método Instance(), pois ele é estático, e ter acesso aos dados da classe.

- Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.
- O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre cada um.
- O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes.

## Vantagens: 
Ao utilizar Singleton temos mais controle sobre o acesso às propriedades e métodos de uma classe, e também reduzimos o consumo de memória desnecessário por utilizar várias instancias desnecessárias de uma classe.

- Você pode ter certeza que uma classe só terá uma única instância.
- Você ganha um ponto de acesso global para aquela instância.
- O objeto singleton é inicializado somente quando for pedido pela primeira vez.

## Resumindo:
### Usamos Singleton quando:

Utilize quando uma classe em seu programa deve ter apenas uma instância disponível para todos seus clientes; por exemplo, um objeto de base de dados único compartilhado por diferentes partes do programa.

Utilize quando você precisa de um controle mais estrito sobre as variáveis globais.

