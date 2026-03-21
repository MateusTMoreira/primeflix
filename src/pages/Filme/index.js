import { useEffect, useState } from 'react'; // Importa hooks do React para gerenciar estado e efeitos colaterais
import { Link, useParams, useNavigate } from 'react-router-dom'; // Importa hooks e componentes do react-router-dom para navegação e parâmetros
import './style.css'; // Importa os estilos CSS da página
import { toast } from 'react-toastify'; // Importa a função toast para notificações

import api from '../../services/api'; // Importa a instância da API configurada

function Filme() {
    // Extrai o parâmetro 'id' da URL
    const { id } = useParams();
    // Hook para navegação programática
    const navigate = useNavigate();

    // Estado para armazenar os dados do filme
    const [filme, setFilme] = useState({});
    // Estado para controlar o loading
    const [loading, setLoading] = useState(true);

    // useEffect para carregar os dados do filme quando o componente monta ou o ID muda
    useEffect(() => {
        async function loadFilme() {
            // Faz requisição para a API do TMDB para obter detalhes do filme
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "372b8921b84a0ddeb13c3ae586035aeb", // Chave da API (deve ser mantida segura em produção)
                    language: "pt-BR", // Idioma da resposta
                }
            })
            .then((response) => {
                // Define os dados do filme no estado
                setFilme(response.data);
                // Desativa o loading
                setLoading(false);
            })
            .catch(() => {
                // Em caso de erro, loga no console e redireciona para a página inicial
                console.log("FILME NAO ENCONTRADO");
                navigate("/", { replace: true });
                return;
            })
        }

        // Chama a função para carregar o filme
        loadFilme();

        // Função de cleanup (executada quando o componente desmonta)
        return () => {
            console.log("COMPONENTE DESMONTADO");
        }
    }, [navigate, id]) // Dependências do useEffect

    // Função para salvar o filme na lista local
    function salvarFilme() {
        // Obtém a lista de filmes salvos do localStorage
        const minhaLista = localStorage.getItem("@primeflix");

        // Parseia a lista ou inicializa como array vazio
        let filmesSalvos = JSON.parse(minhaLista) || [];

        // Verifica se o filme já está na lista
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if (hasFilme) {
            // Se já está salvo, mostra aviso
            toast.warn(`O filme ${filme.title} já está na sua lista!`);
            return;
        }
        // Adiciona o filme à lista
        filmesSalvos.push(filme);
        // Salva a lista atualizada no localStorage
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        // Mostra notificação de sucesso
        toast.success(`Filme ${filme.title} salvo com sucesso!`);
    }

    // Se ainda está carregando, mostra mensagem de loading
    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    // Formata a avaliação do filme para exibição
    const notaExibicao = filme.vote_average ? Number(filme.vote_average).toFixed(1) : 'N/A';

    return (
        // Container com informações do filme
        <div className='filme-info'>
            {/* Título do filme */}
            <h1>{filme.title}</h1>
            {/* Imagem de fundo do filme */}
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            {/* Seção de sinopse */}
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            {/* Avaliação do filme */}
            <strong>Avaliação: {notaExibicao} / 10</strong>

            {/* Área de botões */}
            <div className='area-buttons'>
                {/* Botão para salvar o filme */}
                <button onClick={salvarFilme}>Salvar</button>

                {/* Botão para buscar trailer no YouTube */}
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="_blank" rel="external">
                        Trailer
                    </a>
                </button>
            </div>

            {/* Link para voltar à página inicial */}
            <Link className='button-home-two' to="/">← Voltar</Link>
        </div>
    )
}

export default Filme; // Exporta o componente Filme como padrão