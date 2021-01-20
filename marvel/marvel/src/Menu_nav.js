import React from 'react';
import './App.css';
import './Charcters.css';
import {Link} from 'react-router-dom';
import logo from "./Images/Marvel_Studios_logo.jpg"



function Menunav() {
    return (
        <nav>
            <ul>
                <li><img src={logo} alt='marvel'/></li>
				<li><Link to="/App">Home </Link> </li>
                <li><Link to="/Main">Jogo de Memória </Link></li>
                <li><Link  to="/Youtube_menu">Search Youtube </Link></li>
				<li><Link  to="/Characters">Characters </Link></li>
				<li><Link  to="/Video_characters">Video Characters </Link></li>
            </ul>
        </nav>
    );
}

export default Menunav;