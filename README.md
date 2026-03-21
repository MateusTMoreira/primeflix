# PrimeFlix

PrimeFlix é uma aplicação front-end em React para catálogo de filmes — inspirado nos serviços de streaming (como Netflix), com interface simples para buscar filmes, ver detalhes, salvar na lista de favoritos e gerenciar seus filmes escolhidos.

## 🔎 Tecnologias usadas

- React 19
- React Router DOM (navegação de páginas)
- Axios (consumo de API)
- React Toastify (notificações)
- React Scripts (CRA)

## 📁 Estrutura principal

- `src/App.js` - componente raiz que carrega rotas e `ToastContainer`
- `src/routes.js` - configura rotas e páginas
- `src/services/api.js` - configuração de API com `axios`
- `src/pages/`:
  - `Home` - página inicial de listagem e busca de filmes
  - `Filme` - detalhes do filme selecionado
  - `MeusFilmes` - filmes salvos (favoritos / lista local)
  - `Erro` - página de erro (404 / rota inválida)
- `src/components/Header` - barra de navegação

## ✅ Funcionalidades esperadas

- pesquisa de filmes
- exibição de detalhes de filme
- salvar/remover filmes na lista local (Meus Filmes)
- mensagens de confirmação/erro com Toast
- navegação de páginas

## 🚀 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/primeflix.git
cd primeflix
```

2. Instale dependências:

```bash
npm install
```

3. Inicie em modo de desenvolvimento:

```bash
npm start
```

4. Abra no navegador:

- `http://localhost:3000`

## 🛠️ Scripts disponíveis

- `npm start` - servidor de desenvolvimento
- `npm run build` - build de produção
- `npm test` - executa testes
- `npm run eject` - ejeção do Create React App (uso avançado)

## 🔧 Configurar API

No arquivo `src/services/api.js`, configure a URL base e parâmetros da API de filmes (como OMDb, The Movie DB ou API local). Exemplo:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com',
});

export default api;
```

## 📌 Dicas de deploy

- Build para produção: `npm run build`
- Hospede em Netlify, Vercel, GitHub Pages ou qualquer servidor estático
- Certifique-se de ajustar as rotas se for Roteamento no lado do cliente (Redirects/rewrites)

## 📝 Observações

- Este projeto é uma versão demo/portfólio. O comportamento depende da API de filmes configurada.
- Se for usar `localStorage`, valide dados antes de usar para evitar erros em navegadores que limparam o storage.

## 💬 Contato

- Nome: Mateus Moreira
- GitHub: https://github.com/MateusTMoreira
- Email: mateusmoreiraone@gmail.com
