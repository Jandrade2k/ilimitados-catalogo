import React from "react";

import logo from '../../img/ilimitados.jpg';
import './style.css';

export function Logo() {
    return (
        <div className="logo">
            {/* TODO: Adicionar rota para pagina principal */}
            <a href="#">
                <img src={logo} alt="Logo" />
            </a>
        </div>
    );
}
