import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default () => (
  <div className="home">
    <header className="autora">
      <p>Krystel Rodríguez</p>
    </header>
    <p className="presentation Entrega">
      Realizamos servicios de marketing muy competitivos. En menos de 5 minutos
      puedes hacer tu pedido.
    </p>
    <Link to="/pedido">Mi pedido</Link>
  </div>
);
