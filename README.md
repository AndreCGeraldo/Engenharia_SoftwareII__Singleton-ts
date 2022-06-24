# Design Pattern - Singleton
Singleton é um padrão de projeto de software. Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto. Nota linguística: O termo vem do significado em inglês para um conjunto que contenha apenas um elemento.

# Singleton 
Um padrão de Criação.

## Objetivo:
1 Garantir que a classe tenha uma única instância.

2 Prover um meio global de acesso a essa instância.

É um dos padrões mais simples, responsável por garantir que exista apenas uma instância de uma classe, garantindo uma declaração única e global de acesso ao objeto. Alguns projetos necessitam que algumas classes tenham apenas uma instância.

## Desvantagens:
Uma das desvantagens do padrão de projeto Singleton é que não é possível inibir o acesso a sua classe. Qualquer parte do código por chamar o método Instance(), pois ele é estático, e ter acesso aos dados da classe.

## Vantagens: 
Ao utilizar Singleton temos mais controle sobre o acesso às propriedades e métodos de uma classe, e também reduzimos o consumo de memória desnecessário por utilizar várias instancias desnecessárias de uma classe.

## Resumindo:
### Usamos Singleton quando:

Queremos ter 1 única instância de uma classe.

Queremos um jeito fácil de acessar essa instância.

Instanciação pode ser:

- Quando a classe é carregada.

- Tardia, junto com o primeiro uso.

