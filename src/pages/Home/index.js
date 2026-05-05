import { Link } from 'react-router-dom'; // Importa o componente Link para navegação
import './style.css'; // Importa os estilos CSS da página

import { useEffect, useState } from 'react'; // Importa hooks do React
import api from '../../services/api'; // Importa a instância da API



function Home() {
    // Estado para armazenar a lista de filmes
    const [filmes, setFilmes] = useState([]);
    // Estado para controlar o loading
    const [loading, setLoading] = useState(true);

    // useEffect para carregar os filmes quando o componente monta
    useEffect(() => {
        async function loadFilmes() {
            // Faz requisição para obter filmes em cartaz
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "", // Coloque a chave da API
                    language: "pt-BR", // Idioma
                    page: 1, // Página da API
                }
            })

            // Define os filmes no estado (usando slice para copiar o array)
            setFilmes(response.data.results.slice());
            // Desativa o loading
            setLoading(false);
        }

        // Chama a função para carregar os filmes
        loadFilmes();

    }, []) // Array de dependências vazio, executa apenas uma vez

    // Se ainda está carregando, mostra mensagem de loading
    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        // Container da página Home
        <div className='home'>
            {/* Lista de filmes */}
            <div className='lista-filmes'>
                {/* Mapeia cada filme para um artigo */}
                {filmes.map((filme) => (
                    <article key={filme.id}>
                        {/* Título do filme */}
                        <strong>{filme.title}</strong>
                        {/* Poster do filme */}
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        {/* Link para acessar detalhes do filme */}
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home; // Exporta o componente Home como padrão
