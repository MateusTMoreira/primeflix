import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP


// Cria uma instância do axios com a URL base da API do TMDB
const api = axios.create({
    baseURL: ''
});

export default api; // Exporta a instância da API como padrão
