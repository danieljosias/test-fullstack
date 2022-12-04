# Cadastro de clientes e contatos

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 3.4. Testes

Para executar os testes rodar o comando abaixo:
---
    yarn test
---

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Para autenticar o usuário basta fazer login na rota:  - [POST - /login](#11-login-do-usuário)

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /users](#11-criação-do-usuário)
  
- [Login](#2-login)
  - [POST - /login](#21-login-do-usuário)
  
- [Clients](#3-posts)
  - [POST - /clients](#31-criação-do-post)
  - [GET - /clients](#32-listando-todos-os-posts)
  - [PATCH - /clients/:id](#14-atualizar-posts)
  - [DELETE - /clients/:id](#34-deletar-posts)

- [Contacts](#3-posts)
  - [POST - /contacts](#31-criação-do-post)
  - [GET - /contacts](#32-listando-todos-os-posts)
  - [PATCH - /contacts/:id](#14-atualizar-posts)
  - [DELETE - /contacts/:id](#34-deletar-posts)

## 6. Endpoints Resumo

### 1. /users

O objeto User é definido como:

| Campo       | Tipo   | Descrição                          |
| ----------- | ------ | ---------------------------------- |
| id          | string | Identificador único do cliente     |
| email       | string | Email do cliente                   |
| password    | string | Senha do cliente.                  |
 

### Endpoints

| Método | Rota          | Descrição                                      | Autorizaçao | Adm |
| ------ | ------------- | ---------------------------------------------- | ----------- | --- |
| POST   | /users        | Criação de um usuários.                        |             |     |

### 1.1. **Criação do Usuário**

### `/users`

### Exemplo de Request:

```
POST /users
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"email":"daniel@mail.com",
	"password":"123"
}
```

### Schema de Validação com Yup:

```javascript
email: yup.string().email().required(),
password: yup.string().min(8).required()
```

OBS.: Chaves não presentes no schema serão removidas e valores vazios ou nulos não serão aceitos.

### Exemplo de Response:

```
201 Created
```

```json
     {
		"id": "c49f9657-1151-49a4-bed7-c3344422e960",
		"email": "daniel@mail.com",
        "password":"123"
	}
```

### Possíveis Erros:

| Código do Erro  | Descrição                                  |
| --------------- | ------------------------------------------ |
| 400 bad request |  Email already exists                      |

---

### 2. /login - Somente usuário faz login

| Método | Rota   | Descrição                           | Autorizaçao | Adm |
| ------ | ------ | ----------------------------------- | ----------- | --- |
| POST   | /login | Faz login do usuário e gera token.  |             |     |

### Possíveis Erros:

| Código do Erro  | Descrição                   |
| --------------- | --------------------------- |
| 403 Forbidden   | Invalid password		    |

### 3. /clients

O objeto Clients é definido como:

| Campo       | Tipo   | Descrição                          |
| ----------- | ------ | ---------------------------------- |
| id          | string | Identificador único do client.     |
| fullname    | string | Nome do client.                    |
| email       | string | Email do client.                   |
| telephone   | string | Telefone do client.                |
| cellphone   | Date   | Celular que o client foi atualizado|
| createdAt   | Date   | Data que o client foi cadastrado.  |

### Endpoints

| Método   | Rota             | Descrição                                      | Autorizaçao | Adm |
| -------- | ---------------  | ---------------------------------------------- | ----------- | --- |
| GET      | /clients         | Lista todos os clients.                        |             |     |
| POST     | /clients         | Criação de umclients.                          |      X      |     |
| PATCH    | /clients:id      | Atualização de umclients.                      |      X      |     |
| DELETE   | /clients:id      | Deleção de um clients.                         |             |     |

### 3.1. **Criação dos clientes**

### `/clients`

### Exemplo de Request:

```
POST /clients
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"fullname":"kenzinho",
	"email":"kenzinho@gmail.com",
	"telephone":"2112347894",
	"cellphone":"21912345678",
	"createdAt":"2022-12-02"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "543e76eb-6ff8-4424-8a82-e9e404f29b45",
	"fullname": "daniel2",
	"email": "kenzinho2@gmail.com",
	"telephone": "2112347894",
	"cellphone": "21912345678",
	"createdAt": "2022-12-02T03:00:00.000Z"
}

```

### Possíveis Erros:

| Código do Erro  | Descrição                                  |
| --------------- | ------------------------------------------ |
```json
Vazio
```

### 3.2. **Listando Clients*

### `/clients`

### Exemplo de Request:

```
GET /clients
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 Ok
```

```json

	{
		"id": "cfd05f83-1f3b-4103-a308-b0c10d0d8891",
		"fullname": "daniel",
		"email": "kenzinho@gmail.com",
		"telephone": "32526896",
		"cellphone": "971164801",
		"createdAt": "2022-12-02T03:00:00.000Z"
	}
```

### 3.3. **Atualizando Clients**

### `/clients`

### Exemplo de Request:

```
PATCH /clients
Content-type: application/json
```

### Corpo da Requisição:

```json

{
	"fullname": "daniel",
}
```

### Exemplo de Response:

```
200 Ok
```

```json

{
	"id": "1ed46733-25b6-4a84-a00b-42e55b55963f",
	"fullname": "daniel",
	"email": "kenzinho2@gmail.com",
	"telephone": "38370238",
	"cellphone": "99663322",
	"createdAt": "2022-12-02"
}
```

### 3.4. **Deletando Clients**

### `/clients`

### Exemplo de Request:

```
DELETE /clients/:id
Content-type: application/json
```

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:

```
200 Ok
```
---

### 4.Contacts

O objeto Contacts é definido como:

| Campo       | Tipo   | Descrição                            |
| ----------- | ------ | ----------------------------------   |
| id          | string | Identificador único do contacts.     |
| fullname    | string | Nome do contacts.                    |
| email       | string | Email do contacts.                   |
| telephone   | string | Telefone do contacts.                |
| cellphone   | Date   | Celular que o contacts foi atualizado|


### Endpoints

| Método   | Rota             | Descrição                                      | Autorizaçao | Adm |
| -------- | ---------------  | ---------------------------------------------- | ----------- | --- |
| GET      | /contacts        | Lista todos os ccontacts.                      |             |     |
| POST     | /contacts        | Criação de umccontacts.                        |      X      |     |
| PATCH    | /contacts:id     | Atualização de umccontacts.                    |      X      |     |
| DELETE   | /contacts:id     | Deleção de um ccontacts.                       |             |     |

### 4.1. **Criação dos Contacts**

### `/contacts`

### Exemplo de Request:

```
POST /contacts
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"fullname":"kenzinho",
	"email":"kenzinho@gmail.com",
	"telephone":"2112347894",
	"cellphone":"21912345678",
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "543e76eb-6ff8-4424-8a82-e9e404f29b45",
	"fullname": "daniel2",
	"email": "kenzinho2@gmail.com",
	"telephone": "2112347894",
	"cellphone": "21912345678",
}

```

### Possíveis Erros:

| Código do Erro  | Descrição                                  |
| --------------- | ------------------------------------------ |
```json
Vazio
```

### 4.2. **Listando contacts*

### `/contacts`

### Exemplo de Request:

```
GET /contacts
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 Ok
```

```json

	{
		"id": "cfd05f83-1f3b-4103-a308-b0c10d0d8891",
		"fullname": "daniel",
		"email": "kenzinho@gmail.com",
		"telephone": "32526896",
		"cellphone": "971164801",
	}
```

### 4.3. **Atualizando Contacts**

### `/contacts`

### Exemplo de Request:

```
PATCH /contacts
Content-type: application/json
```

### Corpo da Requisição:

```json

{
	"fullname": "daniel",
}
```

### Exemplo de Response:

```
200 Ok
```

```json

{
	"id": "1ed46733-25b6-4a84-a00b-42e55b55963f",
	"fullname": "daniel",
	"email": "kenzinho2@gmail.com",
	"telephone": "38370238",
	"cellphone": "99663322",
}
```

### 4.4. **Deletando Contacts**

### `/contacts`

### Exemplo de Request:

```
DELETE /contacts/:id
Content-type: application/json
```

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:

```
200 Ok
```
---
# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
   - [Testes](#34-testes)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)
- [Endpoints Resumo](#6-endpoints-resumo)

---
