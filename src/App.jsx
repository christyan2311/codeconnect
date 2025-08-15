import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div className="container"> 
      <Sidebar />
      <BarraDePesquisa />
    </div>
  );
}

export default App;
