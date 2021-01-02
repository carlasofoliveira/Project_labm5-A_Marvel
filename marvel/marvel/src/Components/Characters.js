import React from "react";
import axios from "axios";

import {Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';


class Charactersaccordion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isLoading: true, apiresponse: undefined};
	}

	componentDidMount() {
		console.debug("After mount! Let's load data from API...");
		axios.get("http://gateway.marvel.com/v1/public/characters?apikey=bd8a67a15563a7425a69aedc11c376e8").then(response => {
			console.log(response);

			this.setState({apiresponse: response});
			this.setState({isLoading: false});
		});

	}

	isDescriptionEmpty(description) {
		if (description === "") {
			return <div>Nao existe descricao</div>;
		} else {
			return <div>{description}</div>;
		}

	}

	accordionStruct(result) {
		if (!result.thumbnail.path.includes('image_not_available')){
			return (
			<Accordion>
				<AccordionSummary>
					<div>{result.name}</div>
				</AccordionSummary>
				<AccordionSummary>
					<img src={result.thumbnail.path + '/portrait_large.' + result.thumbnail.extension} />
				</AccordionSummary>

				<AccordionDetails>
					{this.isDescriptionEmpty(result.description)}
				</AccordionDetails>
			</Accordion>
			)
		}
	}

	render() {
		const {isLoading, apiresponse} = this.state;

		if (isLoading) {
			return <div className="App">Loading...</div>;
		}


		return (
			<div className="App">
				{apiresponse.data.data.results.map((res) => this.accordionStruct(res))}
			</div>
		);
	}
}

export default Charactersaccordion;
