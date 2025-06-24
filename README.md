# 🚗 garage

Sistema de gerenciamento de garagens para servidores FiveM, desenvolvido com **Node.js**, **TypeScript** e **Prisma**.

Este projeto tem como objetivo fornecer uma base modular e escalável para controle de veículos, armazenamento e recuperação em ambientes roleplay.

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Lisboon/garage.git
cd garage

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env
cp .env.example .env
# edite com seus dados de conexão

# Gere o client do Prisma
npx prisma generate

# (Opcional) Execute as migrations
npx prisma migrate dev --name init

# Inicie o servidor
npm run dev
