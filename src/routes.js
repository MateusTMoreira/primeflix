import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa componentes do react-router-dom para gerenciar rotas
import Home from './pages/Home'; // Importa a página Home
import Filme from './pages/Filme'; // Importa a página Filme
import MeusFilmes from './pages/MeusFilmes'; // Importa a página MeusFilmes

import Header from './components/Header'; // Importa o componente Header

import NotFound from './pages/Erro'; // Importa a página de erro 404

function RoutesApp() {
    return (
        // BrowserRouter envolve a aplicação para habilitar roteamento baseado em navegador
        <BrowserRouter>
            {/* Renderiza o Header em todas as páginas */}
            <Header />

            {/* Define as rotas da aplicação */}
            <Routes>
                {/* Rota para a página inicial */}
                <Route path="/" element={<Home />} />
                {/* Rota dinâmica para detalhes de um filme específico, usando o ID */}
                <Route path="/filme/:id" element={<Filme />} />
                {/* Rota para a página de filmes salvos */}
                <Route path="/meus-filmes" element={<MeusFilmes />} />

                {/* Rota catch-all para páginas não encontradas */}
                <Route path="*" element={<NotFound />} />
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp; // Exporta o componente RoutesApp como padrão