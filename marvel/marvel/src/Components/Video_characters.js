import React from "react";
import axios from "axios";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";


class video_youtube extends React.Component {
// o estado inicial e de existir loading por falta de retorno de resposta da api
	constructor(props) {
		super(props);
		this.state = {isLoading_video: true, apiresponse_video: undefined};
	}
// utiliza se axios para que exista uma promessa de resultado da api
// apos a vinda de resultados e atualizado o estado
	componentDidMount() {
		console.debug("After mount! Let's load data from API...");
		axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=Marvel-official&type=video&key=AIzaSyC-bMkKOxMY7q6JSP5TkLvz7MB4evbgBPw").
		then(response_video => {
			this.setState({apiresponse_video: response_video});
			this.setState({isLoading_video: false});
		})
	}
// os videos sao mostrados atraves dos resultados que o parametro de entrada (result) e em conjunto com o caminho retirado do resultado da api
	accordionStruct(result) {
		return (
			<div width="420" height="315"  className='bg-white text-center container pt-2'>
				<div className='text-center'>
					<h1 className='text-danger text-center'>{result.snippet.title}</h1>
				</div>

				< div className='text-center'>
					<iframe width="420" height="315"
							src={"https://www.youtube.com/embed/"+result.id.videoId}>
					</iframe>
				</div>
				<p className='text-body pb-2'>{result.snippet.description}</p>
			</div>
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

export default video_youtube;