import React from "react";
import axios from "axios";
//Estrutura de código construído com base em tutorial
class Images extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, images: undefined };
	}

	componentDidMount() {
		console.debug("After mount! Let's load data from API...");
		axios.get("http://gateway.marvel.com/v1/public/characters?apikey=bd8a67a15563a7425a69aedc11c376e8").then(response => {
			console.log(response);
			let images = [
				{name: response.data.data.results[14].name,
					pic: response.data.data.results[14].thumbnail.path + '/portrait_small.' + response.data.data.results[14].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[19].name,
					pic: response.data.data.results[19].thumbnail.path + '/portrait_small.' + response.data.data.results[19].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[1].name,
					pic: response.data.data.results[1].thumbnail.path + '/portrait_small.' + response.data.data.results[1].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[4].name,
					pic: response.data.data.results[4].thumbnail.path + '/portrait_small.' + response.data.data.results[4].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[6].name,
					pic: response.data.data.results[6].thumbnail.path + '/portrait_small.' + response.data.data.results[6].thumbnail.extension,
					flipped: false,},
				{name:response.data.data.results[7].name,
					pic: response.data.data.results[7].thumbnail.path + '/portrait_small.' + response.data.data.results[7].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[14].name,
					pic: response.data.data.results[14].thumbnail.path + '/portrait_small.' + response.data.data.results[14].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[19].name,
					pic: response.data.data.results[19].thumbnail.path + '/portrait_small.' + response.data.data.results[19].thumbnail.extension,
					flipped: false,},
				{name:response.data.data.results[1].name,
					pic: response.data.data.results[1].thumbnail.path + '/portrait_small.' + response.data.data.results[1].thumbnail.extension,
					flipped: false,},
				{name:response.data.data.results[4].name,
					pic: response.data.data.results[4].thumbnail.path + '/portrait_small.' + response.data.data.results[4].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[6].name,
					pic: response.data.data.results[6].thumbnail.path + '/portrait_small.' + response.data.data.results[6].thumbnail.extension,
					flipped: false,},
				{name: response.data.data.results[7].name,
					pic: response.data.data.results[7].thumbnail.path + '/portrait_small.' + response.data.data.results[7].thumbnail.extension,
					flipped: false,},
			];
			this.setState({ images: images });
			this.setState({ isLoading: false });
		});
	}

	characters = [];
	handleClick = (event) => {
		let character = event.target;
		if (character.getAttribute("check") === "found") {
			return;
		}

		if (character !== this.characters[0]) {
			this.switch(character);
			this.characters.push(character);
		} else {
			this.switch(character);
			this.characters = [];
		}

		if (this.characters.length > 2) {
			if (!this.checkName(this.characters[0], this.characters[1])) {
				this.switch(this.characters[0]);
				this.switch(this.characters[1]);
				this.characters.shift();
				this.characters.shift();
			} else {
				this.characters.shift();
				this.characters.shift();
			}
		}
		let allPictures = document.getElementsByClassName("image-blank");
		if (allPictures.length < 1) {
			this.props.endGame(true);
			let reset = document.getElementsByClassName("image");
			for (let i = 0; i < reset.length; i++) {
				reset[i].classList.add("image-blank");
				reset[i].setAttribute("check", "false");
				this.characters = [];
			}
		}
	};

	checkName = (character1, character2) => {
		if (character1.getAttribute("name") === character2.getAttribute("name")) {
			character1.setAttribute("check", "found");
			character2.setAttribute("check", "found");
			return true;
		}
		return false;
	};

	switch = (target) => {
		if (target.getAttribute("check") === "true") {
			target.setAttribute("check", "false");
			target.classList.add("image-blank");
		} else {
			target.setAttribute("check", "true");
			target.classList.remove("image-blank");
		}
	};

	render() {
		const { isLoading, images } = this.state;

		if (isLoading) {
			return <div className="App">Loading...</div>;
		}

		return (
			<div className="images">
				{images
					.sort(() => Math.random() - 0.5)
					.map((element) => {
						return (
							<div
								className="image image-blank"
								name={element.name}
								style={{ background: `url(${element.pic})` }}
								check="false"
								onClick={this.handleClick}
							/>
						);
					})}
			</div>
		);
	}
}
export default Images;
