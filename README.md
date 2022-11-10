# Blogs API

# Contexto
O objetivo deste projeto é a criação de um CRUD em uma API REST que simula a gestão de um BLOG

## Rotas disponíveis

![Captura de tela de 2022-11-10 12-48-53](https://user-images.githubusercontent.com/88159224/201142446-2f2c357a-94a8-4c92-b4ea-f4e9366700de.png)

## Técnologias usadas

> Desenvolvido usando: Express.JS, mySQL, ES6, Sequelize, Swagger e Docker Compose

## Instalando Dependências

```bash
npm install
``` 
## Executando aplicação

> Deve ser configurado um arquivo .env com as seguintes variáveis de ambiente:  
MYSQL_HOST,  
MYSQL_USER,  
MYSQL_PASSWORD,  
MYSQL_DATABASE,

  ```
npm migration && npm seed && npm start
  ```

## Executando os testes unitários

  ```
 npm test:mocha
  ```
