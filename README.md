# Backend Akopil - Jest

## Descrição
Backend desenvolvido em Node.js utilizando Express, Prisma e PostgreSQL para autenticação de usuários. O projeto inclui testes automatizados com Jest e possui as seguintes funcionalidades:
- **Autenticação**
- **Registro de Usuários**
- **Listagem de Usuários**

## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **BcryptJS** (para hash de senhas)
- **Jest** e **Supertest** (para testes automatizados)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/backend-akopil-jest.git
   cd backend-akopil-jest
   ```

2. Instale as dependências:
   ```sh
   yarn install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/database
   JWT_SECRET=sua-chave-secreta
   ```

4. Execute as migrações do banco de dados:
   ```sh
   npx prisma migrate dev
   ```

## Execução

### Ambiente de Desenvolvimento
```sh
yarn dev
```

### Construir o projeto
```sh
yarn build
```

### Executar os testes
```sh
yarn test
```

## Rotas

### 1. Registrar Usuário
**POST** `/register`
#### Exemplo de Request Body:
```json
{
  "name": "Usuário Teste",
  "email": "usuario@email.com",
  "password": "senha123"
}
```
#### Resposta esperada:
```json
{
  "id": 1,
  "name": "Usuário Teste",
  "email": "usuario@email.com",
  "token": "token-gerado"
}
```

### 2. Autenticação (Login)
**POST** `/auth`
#### Exemplo de Request Body:
```json
{
  "email": "usuario@email.com",
  "password": "senha123"
}
```
#### Resposta esperada:
```json
{
  "token": "token-gerado"
  "expiresIn": "1m"',
  "name": "Joe",
  "email": "joe@gmail.com"
}
```

### 3. Listar Usuários
**GET** `/users`
#### Cabeçalho da requisição:
```json
{
  "Authorization": "Bearer token-gerado"
}
```
#### Resposta esperada:
```json
[
  {
    "id": 1,
    "name": "Usuário Teste",
    "email": "usuario@email.com"
  }
]
```

