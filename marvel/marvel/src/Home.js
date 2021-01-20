import React from "react";
import axios from "axios";

class traileryoutube extends React.Component {
	snippet;

	constructor(props) {
		super(props);
		this.state = {isLoading_tray: true, apiresponse_video: undefined};
	}

	componentDidMount() {
		console.debug("After mount! Let's load data from API...");
		axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=Marvel-official&type=video&key=AIzaSyB49f04HJbUHZal32G-tfl_XiypcynqWfY").then(response_video => {
			this.setState({apiresponse_trailer: response_video});
			this.setState({isLoading_trailer: false});
		})
	}

	render() {
		const {isLoading_trailer, apiresponse_trailer} = this.state;

		if (isLoading_trailer) {
			return <div className="App">Loading...</div>;
		} else {
			return (
				<div className="App">
					<iframe width="420" height="315"
							src={"https://www.youtube.com/embed/" + apiresponse_trailer.id.videoId}>
					</iframe>
				</div>);
		}

	}
}

export default traileryoutube;