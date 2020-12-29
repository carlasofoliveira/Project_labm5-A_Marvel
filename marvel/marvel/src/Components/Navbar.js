import React from "react";

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

