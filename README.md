# Blogs API

# Contexto
O objetivo deste projeto é a criação de um CRUD em uma API REST que simula a gestão de um BLOG com validação de JSON Web Token .

## Rotas disponíveis

![Captura de tela de 2022-11-10 12-48-53](https://user-images.githubusercontent.com/88159224/201142446-2f2c357a-94a8-4c92-b4ea-f4e9366700de.png)

## Técnologias usadas

> Desenvolvido usando: Express.JS, mySQL, ES6, Sequelize, Swagger e Docker Compose 3.9

## Instalando Dependências

```bash
npm install
``` 
## Executando aplicação

> Deve ser configurado um arquivo .env com as seguintes variáveis de ambiente:  
      API_PORT,  
      MYSQL_USER,  
      MYSQL_PASSWORD,  
      HOSTNAME,  
      JWT_SECRET,  

  ```
npm prestart && npm start
  ```
## Executando aplicação com docker compose

> Dentro da pasta da aplicação execute:

  ```
docker compose up -d
  ```

