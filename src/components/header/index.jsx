import React from "react";

import './style.css';
import {Logo} from '../logo';
import {Search} from '../search';

export function Header() {
    return(
        <div id="header">
            <Logo />
            <Search />
        </div>
    )
}