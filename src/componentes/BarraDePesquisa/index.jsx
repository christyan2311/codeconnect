import { useState } from "react";
import "./styles.css";
export default function BarraDePesquisa() {
  const [termoPesquisa, setermoPesquisa] = useState("");
  return (
    <input
      type="search"
      placeholder="Digite oque você procura"
      className="barra-pesquisa"
      value={termoPesquisa}
      onChange={(evento) => setermoPesquisa(evento.target.value)}
    />
  );
}
