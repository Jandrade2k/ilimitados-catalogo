import React from "react";
import {FaInstagram} from "react-icons/fa"

import './style.css';

export function Label() {
    return (
        <>
            <div className="label">
                <a href="https://www.instagram.com/ilimitadosports/" target="_blank"><FaInstagram /> Siga-nos no instagram.</a>
            </div>
        </>
    )
}