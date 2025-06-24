# 🚗 garage (Frontend)

Este repositório contém o **frontend** do sistema de gerenciamento de garagens para servidores **FiveM**, desenvolvido em **Node.js** com **TypeScript** e **Prisma ORM**.

A proposta é oferecer uma interface estruturada para integrar com o backend do servidor, facilitando o controle de armazenamento e recuperação de veículos no ambiente de roleplay.

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Sobre o Projeto

Este projeto é **somente o frontend/API** da garagem. Ele **não é executado diretamente dentro do FiveM**, mas serve como uma camada de integração com o banco de dados do servidor.

Se você está buscando o script em Lua/CFX para rodar no seu servidor FiveM, este repositório serve como **base de dados e API** para conexão.

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Lisboon/garage.git
cd garage

# Instale as dependências
npm install

# Configure o banco de dados
cp .env.example .env
# edite o .env com sua conexão (ex: PostgreSQL, MySQL, SQLite)

# Gere o client do Prisma
npx prisma generate

# (Opcional) Rode migrations
npx prisma migrate dev --name init

# Inicie o servidor
npm run dev
