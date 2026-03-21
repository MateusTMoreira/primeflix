import { Link } from "react-router-dom"; // Importa o componente Link para navegação
import "./style.css"; // Importa os estilos CSS da página

function NotFound() {
  return (
    // Container da página de erro 404
    <div className="not-found">
      {/* Título do erro */}
      <h1>404</h1>
      {/* Mensagem de página não encontrada */}
      <h2>Página Não Encontrada</h2>

      {/* Link para voltar à página inicial */}
      <Link to="/">Veja todos os filmes em cartaz!</Link>
    </div>
  );
}

export default NotFound; // Exporta o componente NotFound como padrão