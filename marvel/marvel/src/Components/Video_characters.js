import React from "react";
import axios from "axios";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";


class charactersyoutube extends React.Component {
	snippet;
	constructor(props) {
		super(props);
		this.state = {isLoading_video: true, apiresponse_video: undefined};
	}
	componentDidMount() {
		console.debug("After mount! Let's load data from API...");
		axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=Marvel-official&type=video&key=AIzaSyB49f04HJbUHZal32G-tfl_XiypcynqWfY").
		then(response_video => {
			this.setState({apiresponse_video: response_video});
			this.setState({isLoading_video: false});
		})
	}

	accordionStruct(result) {
		return (
			<Accordion width="420" height="315" >
				<AccordionSummary>
					<div>{result.snippet.title}</div>
				</AccordionSummary>
				<div>{result.snippet.description}</div>
				<AccordionSummary>
					<iframe width="420" height="315"
							src={"https://www.youtube.com/embed/"+result.id.videoId}>
					</iframe>
				</AccordionSummary>
				<AccordionDetails>

				</AccordionDetails>
			</Accordion>
		)
	}

	render() {
		const {isLoading_video, apiresponse_video} = this.state;

		if (isLoading_video) {
			return <div className="App">Loading...</div>;
		}
		return (
			<div className="App">
				{console.log(apiresponse_video.data)}
				{apiresponse_video.data.items.map((res) => this.accordionStruct(res))}
			</div>
		);

	}
}

export default charactersyoutube;