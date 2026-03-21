import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP

// BASE DA API: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=372b8921b84a0ddeb13c3ae586035aeb&language=pt-BR

// Cria uma instância do axios com a URL base da API do TMDB
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api; // Exporta a instância da API como padrão