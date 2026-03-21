import { Link } from "react-router-dom"; // Importa o componente Link para navegação
import { useEffect, useState } from "react"; // Importa hooks do React
import "./style.css"; // Importa os estilos CSS da página
import { toast } from "react-toastify"; // Importa a função toast para notificações

function MeusFilmes() {
  // Estado para armazenar a lista de filmes salvos
  const [filmes, setFilmes] = useState([]);

  // useEffect para carregar os filmes salvos do localStorage quando o componente monta
  useEffect(() => {
    // Obtém a lista do localStorage
    const minhaLista = localStorage.getItem("@primeflix");
    // Define os filmes no estado, ou array vazio se não houver
    setFilmes(JSON.parse(minhaLista) || []);
  }, []); // Executa apenas uma vez

  // Função para excluir um filme da lista
  function excluirFilme(id) {
    // Filtra a lista removendo o filme com o ID especificado
    let filtroFilmes = filmes.filter((filme) => {
      return (filme.id !== id);
    })

    // Atualiza o estado com a lista filtrada
    setFilmes(filtroFilmes);
    // Salva a lista atualizada no localStorage
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));

    // Mostra notificação de sucesso com o título do filme removido
    toast.success(`Filme ${filmes.find(f => f.id === id)?.title} removido com sucesso!`);
  }

  return (
    // Container da página Meus Filmes
    <div className="meus-filmes">
      {/* Título da página */}
      <h1>Filmes salvos</h1>

      {/* Mensagem se não houver filmes salvos */}
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo </span>}

      {/* Lista de filmes salvos */}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}> {/* Chave única para cada item da lista */}
              {/* Título do filme */}
              <span>{filme.title}</span>

              {/* Área de ações */}
              <div>
                {/* Link para ver detalhes do filme */}
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                {/* Botão para excluir o filme */}
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Link para voltar à página inicial */}
      <Link className="button-home" to="/">Voltar ao início </Link>
    </div>
  );
}

export default MeusFilmes; // Exporta o componente MeusFilmes como padrão