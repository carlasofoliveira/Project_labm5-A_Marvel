import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Menu() {
	return (
		<div className="App">
			<ul>
				<li><Link to="/Main">Game </Link> </li>

				<li><Link to="/App">Youtube Search </Link> </li>
			</ul>
		</div>
	);
}

export default Menu;