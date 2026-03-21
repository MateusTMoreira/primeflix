import RoutesApp from './routes'; // Importa o componente de rotas da aplicação

import { ToastContainer } from 'react-toastify'; // Importa o componente ToastContainer para exibir notificações
import 'react-toastify/dist/ReactToastify.css'; // Importa os estilos CSS do react-toastify

function App() {
  return (
    // Container principal da aplicação
    <div className='App'>
      {/* Configura o ToastContainer com autoClose de 3 segundos para notificações automáticas */}
      <ToastContainer autoClose={3000} />
      {/* Renderiza o componente de rotas, que gerencia a navegação da aplicação */}
      <RoutesApp />
    </div>
  );
}

export default App; // Exporta o componente App como padrão
