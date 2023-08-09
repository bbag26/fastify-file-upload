## 📝 Sobre o Projeto

O projeto foi desenvolvido com o intuito de criar um sistema de upload de arquivos.

Projeto utilizado para estudos de novas tecnologias, e usufruir do mesmo para melhorar as habilidades com git, e versionamento.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Fastify (e alguns pacotes do seu ecossistema).
- Prisma ORM.

## 🚀 Instalação do Projeto

```git
https://github.com/bbag26/fastify-file-upload.git
```

O projeto utiliza variáveis de ambiente, você pode duplicar o arquivo `.env.example` e renomear um deles para `.env`.

Se estiver utilizando Linux ou MacOS, pode executar o comando no seu terminal na pasta onde foi instalado seu repositório.

```sh
cp .env.example .env
```

E após isso, é só configurar as variáveis de ambiente no arquivo criado.

O `.env.example` trás por padrão as seguintes configurações:

```sh
APP_URL="http://localhost"
APP_PORT=3333

DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"

```

A variável `DATABASE_URL` é utilizada para a configuração do prisma, você pode consultar a documentação dele para entender melhor como configurar:

[Banco de Dados com Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-mysql)

É um projeto que utiliza node, pacotes externos e também prisma, por isso vamos executar os seguintes comandos:

```sh
npm install
```

Agora vamos inicializar o Banco de Dados e rodar as migrações.

```sh
npx prisma migrate dev
```

E por fim, executar o servidor em ambiente de desenvolvimento.

```sh
npm run d
```

E por fim, tudo funcionando!

## 🔜 Implementações Futuras

- [ ] Upload de Múltiplos Arquivos.
- [ ] Migrar o Projeto para TypeScript.
