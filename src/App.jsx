import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Filtro from "./componentes/Filtro";
import Ordenacao from "./componentes/Ordenação";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
      </div>
    </div>
  );
}

export default App;
