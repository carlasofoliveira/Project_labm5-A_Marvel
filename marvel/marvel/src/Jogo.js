import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Jogo extends React.Component {
	constructor(props)
	{
		super (props)
		console.log("Jogo")
	}
	render(){


		return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Events
					</a>
					<li><Link to={{pathname: "/Main", state: {a:"do Main"}}}>Events</Link></li>
					<li><Link to="/Login/From_Main">Jogo</Link></li>
					{this.props.location.state.a}
				</header>
			</div>
		);
	}
}

export default Events;