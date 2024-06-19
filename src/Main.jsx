import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { PortafolioApp } from "./PortafolioApp";
//ESTILOS GLOBALES
import "./ResetStyle.css";//Hoja de estilos para resetear margenes, paddings, etc.
import "./GlobalStyle.css";//Hoja de estilos para Variables y estilos globales.

ReactDOM.createRoot( document.querySelector("#root") ).render(
    <BrowserRouter>
        <React.StrictMode>
            <PortafolioApp/>
        </React.StrictMode>
    </BrowserRouter>
);