import React from 'react';
import './App.css';
import './Charcters.css';
import {Link} from 'react-router-dom';
import logo from "./Images/Marvel_Studios_logo.jpg"

//import logo_marvel from 'logo_marvel.png';


function Menunav() {
    return (
        <nav>
            <ul>
                <li><img src={logo}/></li>
                <li><Link to="/Main">Game </Link></li>
                <li><Link  to="/Youtube_menu">Search Youtube </Link></li>
				<li><Link  to="/Characters">Characters </Link></li>
            </ul>
        </nav>
    );
}

export default Menunav;