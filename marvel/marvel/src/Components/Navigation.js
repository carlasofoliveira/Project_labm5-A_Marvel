import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul>
				<li><Link ClasseName="current"   to="/">Logotipo </Link></li>
				<li><Link ClasseName="current"   to="/Game">Game </Link></li>
				<li><Link ClasseName="current" to="/Vasos">Vasos </Link></li>
			</ul>
		</nav>
	);
}

export default Navigation;