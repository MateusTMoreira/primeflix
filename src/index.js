import React from 'react'; // Importa a biblioteca React para criar componentes
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar a aplicação no DOM
import './index.css'; // Importa os estilos globais da aplicação
import App from './App'; // Importa o componente principal App

// Cria a raiz do React no elemento DOM com id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza a aplicação em modo estrito, que ajuda a identificar problemas durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

