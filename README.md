# HubeeCicly 🚲 

<a id="en-readme"></a>
### English | [Português](#pt-readme)

Back-end project developed for the Hubees selection process. 🐝 \
HubeeCicly is a REST API for creating bikes and handling your information. See here the features: [Features](#features).

<a name="en-menu"></a>
- [Documentation](#documentacao)
- [Getting Started](#steps)
- [Available Scripts](#en-scripts)
- [Features](#features)
- [Libraries and Frameworks](#libs)


<a id="documentation"></a>
## 📙 Documentation
[Here](Postman) <br/> 

<a id="steps"></a>
## :rocket: Getting Started

At the terminal,

1- Clone this repository
```
https://github.com/phsarah/project-hubees-nodejs.git
```
2- Install the dependencies
```
npm install
```
3- Create .env file on the root directory of the project with this data:
```
// your database

DB_HOST = 
DB_USER =
DB_PASSWORD = 
DB_DATABASE_NAME = 

```
4- Run this command for create table mySQL
```
npm run setup
```
5- Now run the application
```
npm start
```
The server will open on the port 3003 - http://localhost:3003

<a id="en-scripts"></a>
## :small_orange_diamond: Available Scripts:
* `npm run setup` to create tables
* `npm run start` to run the aplication
* `npm run dev` to run the aplication with hot reload

<a id="features"></a>
## :small_orange_diamond: Features

- Create bike
- Buy bike
- Edit price
- Get data by id
- Get all list bikes
- Filters:
    - Get bikes by color *flexible filter, example: green, GREEN, GrEeN*
    - Get bikes by price

<a id="libs"></a>
## 🛠	Libraries and Frameworks:

- Cors
- Knex
- Mysql
- Dotenv
- Express
- Node.js
- Typescript

## 💻 Softwares:

- MySQL Workbench
- Postman
- vsCode
- Git

<br/>

Thank you for your visit and good coding! :shipit:

*Developed with :sparkling_heart:	 by Sarah Hessel*

-------
<a id="pt-readme"></a>
### [English](#en-readme) | Português

Projeto back-end desenvolvido para o processo seletivo da Hubees. 🐝 \
HubeeCicly é uma API REST para criar bicicletas e manipular suas informações. Veja aqui os recursos: [Funcionalidades](#funcionalidades).

<a name="pt-menu"></a>
- [Documentação](#documentacao)
- [Primeiros Passos](#passos)
- [Scripts Disponíveis](#pt-scripts)
- [Funcionalidades](#funcionalidades)
- [Bibliotecas e Frameworks](#bibliotecas)


<a id="documentacao"></a>
## 📙	Documentação
[Aqui]() <br/> Criado pelo Postman. 🍊

<a id="passos"></a>
## :rocket:	Primeiros Passos

No terminal,

1- Clone este repositório
```
https://github.com/phsarah/project-hubees-nodejs.git
```
2- Instale as dependências
```
npm install
```
3- Crie um arquivo .env na raíz do projeto com esses dados:
```
//dados do seu banco

DB_HOST =
DB_USER =
DB_PASSWORD = 
DB_DATABASE_NAME = 

```
4- Rode esse comando para criar a tabela mySQL:
```
npm run setup
```
5- Agora rode a aplicação
```
npm start
```
O servidor será aberto na porta 3003 - http://localhost:3003

<a id="pt-scripts"></a>
## :spades:	Scripts Disponíveis:
* `npm run setup` para criar as tabelas
* `npm run start` para rodar a aplicação
* `npm run dev` para iniciar a aplicação com hot reload

<a id="funcionalidades"></a>
## :spades:	Funcionalidades:

- Criar bicicleta
- Comprar bicicleta
- Editar preço
- Obter dados por id
- Obter todas as bicicletas da lista
- Filtros:
     - Obter bicicletas por cor  *filtro flexível, exemplo: verde, VERDE, VeRdE *
     - Obter bicicletas por preço 

<a id="bibliotecas"></a>
## 🛠	Bibliotecas e Frameworks:

- Cors
- Knex
- Mysql
- Dotenv
- Express
- Node.js
- Typescript

## 💻 Softwares:

- MySQL Workbench
- Postman
- vsCode
- Git

<br/>

Obrigada pela visita e boa codificação! :shipit:

*Desenvolvido com :sparkling_heart:	por Sarah Hessel*
