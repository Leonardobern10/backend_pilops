# Back-end [Desafio] Pilops
Esse proejeto consiste no backend da aplicação correspondente ao desafio proposto pela empre Pilops para a vaga de Engenheiro de Software Estágio/Júnior.

Aqui estarão, além da disponibilização do próprio backend em si, algumas das decisões técnicas tomadas durante a codificação do projeto.

## Decisões técnicas
### Porque expressjs?
O express é um framework para geração de servidor com node. Ele ao mesmo tempo que é minimalista também traz consigo robustez, principalmente na criação de middlewares.

- Sugestão: Para projetos mais complexos talvez pudess ser utilizado NestJS, que privilegia uma orientação a objetos mais forte, bem como uma arquitetura melhor definida e limpa, separada em módulos.

### Porque utilizar alguns dados como classes?
A escolha reflete uma necessidade de melhor controle no que diz respeito ao formato em que os dados podem apresentar e funcionalidades que eles podem ter. Isso restringe possiveis alterações em seu formato, além de melhor antender casos onde eles podem se expandir, tanto em propriedades quando em metodos.

Além disso, a utilização de classes permite a aplicação **DIP - Princípio da Inversão de Dependência (SOLID)** que garante facilidade na alteração do codigo já existente, desde que atenda aos requisitos impostos pela abstração ao qual deverá implementar.