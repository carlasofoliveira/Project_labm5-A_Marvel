import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Menu() {
	return (
		<div className="App">
			<ul>
				<li><Link to="/App">Home </Link> </li>
				<li><Link to="/Main">Jogo de Memória </Link> </li>
				<li><Link to="/App">Youtube Search </Link> </li>
				<li><Link to="/App">Characters</Link> </li>
				<li><Link to="/App"> Video Characters</Link> </li>
			</ul>
		</div>
	);
}

export default Menu;