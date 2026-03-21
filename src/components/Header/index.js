import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom para navegação
import './style.css'; // Importa os estilos CSS do componente Header

function Header() {
    return (
        // Elemento header que contém o logotipo e o link para "Meus Filmes"
        <header>
            {/* Logotipo da aplicação */}
            <h1 className='logo'>Prime Flix</h1>

            {/* Link para a página de filmes salvos */}
            <Link to="/meus-filmes" className='meus-filmes'>Meus Filmes</Link>
        </header>
    )
}

export default Header; // Exporta o componente Header como padrão