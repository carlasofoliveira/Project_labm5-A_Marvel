import React from "react";
// menu de navegacao do proprio jogo
class Navbar extends React.Component {
	render() {
		const { name, score } = this.props;
		return (
			<div className="navbar">
				<div className="game-title">
					<p>Marvel Play</p></div>
                <div className="name"><p>{name}</p></div>
                <div className="score"><p>Score: {score}</p></div>
			</div>
		);
	}
}

export default Navbar;

