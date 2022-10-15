import React from "react";
import CardVideo from "./components/CardVideo";
import InfosUsuario from "./components/InfosUsuario"
import "./styles.css";

export default function App() {

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <CardVideo/>
        <InfosUsuario/>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
