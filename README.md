# Design Pattern - Singleton
Singleton é um padrão de projeto de software. Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto. Nota linguística: O termo vem do significado em inglês para um conjunto que contenha apenas um elemento.

# Singleton 
Um padrão de Criação

## Objetivo:
**-** 1 Garantir que a classe tenha uma única instância.
**-** 2 Prover um meio global de acesso a essa instância.

## Desvantagens:
**-** Uso excessivo.
**-** Parece com uma variável global.

## Resumindo:
**-** Usamos Singleton quando:
**-** Queremos ter 1 única instância de uma classe.
**-** Queremos um jeito fácil de acessar essa instância.
**-** Instanciação pode ser:
**-** - Quando a classe é carregada.
**-** - Tardia, junto com o primeiro uso.

