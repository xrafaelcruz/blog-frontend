##### pt-br

# Blog Frontend

Criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Esse repositório é um blog pessoal que busca utilizar diversas tecnologias e práticas para o desenvolvimento de uma aplicação front-end.

A sua estrutura pode ser utilizada para dar inicio a novos projetos, o que é um dos seus objetivos.

Trabalha em conjunto com um headless CMS que pode ser encontrado [aqui](https://gitlab.com/xrafaelcruz/blog-cms), executar esse outro projeto é um requisito para
executar esse projeto com sucesso.


### O que contém?

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing Library](https://testing-library.com/)

### Requisitos

- Nodejs
- Yarn
- **Executar a API graphql**
  - URL da api no .env.development
  - [Repositório](https://gitlab.com/xrafaelcruz/blog-cms)

### Start

```bash
yarn
yarn dev
```

### Comandos

- `dev`: Executa a aplicaçáo em `localhost:3000`
- `build`: Cria o build para deploy
- `start`: Executa o projeto em cima do build
- `lint`: Executa o lint em todo o projeto
- `storybook`: Executa storybook em `localhost:6006`
- `build-storybook`: Cria o build do storybook para deploy
- `test`: Executa todos os testes
- `test:watch`: Executa todos os teste e após alterações nos testes os executa novamente, mantendo um constante monitoramento
