# DevClub Cadastro

Este projeto é um aplicativo web para cadastro de usuários, composto por um frontend em React e um backend em Node.js.

## Estrutura do Projeto

*   `devclub-cadastro/`: Frontend da aplicação, construído com React.
*   `devclub-backend/`: Backend da aplicação, construído com Node.js e Prisma.

## Tecnologias Utilizadas

*   **Frontend:**
    *   React: Biblioteca JavaScript para construção de interfaces de usuário.
    *   Vite: Ferramenta de build para aplicações web.
*   **Backend:**
    *   Node.js: Ambiente de execução JavaScript para o backend.
    *   Prisma: ORM (Object-Relational Mapper) para facilitar a interação com o banco de dados.
    *   Express: Framework para Node.js para criação de APIs.

## Fluxo de Dados

1.  O frontend (`devclub-cadastro/`) envia requisições HTTP para o backend (`devclub-backend/`) através da API, utilizando a biblioteca Axios.
2.  O backend, construído com Node.js e Express, recebe as requisições nas rotas definidas em `devclub-backend/server.js`.
3.  O backend utiliza o Prisma para interagir com o banco de dados, realizando operações de CRUD (Create, Read, Update, Delete) na entidade `usuario`.
4.  O backend retorna os dados para o frontend, que os exibe na interface do usuário.

## Prisma

O Prisma é utilizado para definir o schema do banco de dados (`devclub-backend/prisma/schema.prisma`) e para gerar um cliente que facilita a execução de queries no banco de dados.

## Aprendizados

*   **React:** Aprendi a construir interfaces de usuário dinâmicas e interativas com React, utilizando componentes, hooks (como `useState` e `useEffect`) e gerenciamento de estado. O componente principal da página inicial, `devclub-cadastro/src/pages/home/index.jsx`, demonstra o uso de `useState` para gerenciar a lista de usuários e a mensagem de envio do formulário, e `useEffect` para buscar os usuários da API quando o componente é montado.
*   **Node.js:** Aprendi a construir APIs RESTful com Node.js e Express, utilizando middlewares e tratamento de erros. O arquivo `devclub-backend/server.js` demonstra a criação de rotas para `GET`, `POST`, `PUT` e `DELETE` na entidade `usuario`.
*   **Prisma:** Aprendi a utilizar o Prisma para modelar o banco de dados, gerar um cliente e executar queries de forma segura e eficiente. O arquivo `devclub-backend/server.js` demonstra o uso do Prisma para realizar operações de CRUD no banco de dados.
*   **Vite:** Aprendi a utilizar o Vite para buildar aplicações web de forma rápida e eficiente.
