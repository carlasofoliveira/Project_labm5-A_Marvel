import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
//import logo_marvel from 'logo_marvel.png';


function Menunav() {
	return (
		<nav>
			<ul>
				<li><Link ClasseName="current" to="/Main">Game </Link></li>
				<li><Link ClasseName="current" to="/Youtube_menu">Search Youtube </Link></li>

			</ul>
		</nav>
	);
}

export default Menunav;