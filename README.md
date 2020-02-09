# Bridge-dev

> Aplicação para buscar informações de repositorios utilizando a API do GitHub v3.

Esta aplicação é composta por um Backend Rest criado utilizando o Springboot, desenvolvido em Java, o qual provem dados que são utilizados no Frontend, criado utilizando React e desenvolvido em Typescript. 

Todos os dados utilizados na aplicação vem do Github, onde sao buscados pelo Backend por requisições a API do [GitHub v3](https://developer.github.com/v3/). 

As bibliotecas utilizadas para o desenvolvimento foram o [Lombook](https://projectlombok.org/) que auxilia no desenvolvimento em Java, provendo anotações que fornecem metodos basicos como getters, setters e outros. E tambem foi utilizado a biblioteca de componetentes React do [Bold](https://bold.bridge.ufsc.br/pt/) para criar o Frontend.

Para rodar esta aplicação é necessario possuir pelo menos o Java 8 e o Maven instalados. 
Apos isso, entrar no diretorio do Backend e rodar: ``` mvn spring-boot:run ``` e entrar no diretorio do Frontend e rodar: ```npm start```. 
Apos as execuções dos dois comandos, caso nao abra uma pagina no navegador, você pode acessar a aplicação no link http://localhost:3000/.
