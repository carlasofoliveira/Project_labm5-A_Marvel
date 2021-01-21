import React from "react";
import axios from "axios";

import {Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';


class Charactersaccordion extends React.Component {
// temos a inicialização do estado e props
	constructor(props) {
		super(props);
		// cria um estado inicial antes de obter o resultado da api da Marvel
		this.state = {isLoading: true, apiresponse: undefined};
	}
// ComponentDidmout é executado depois do componente ser montado

	componentDidMount() {
		console.debug("After mount! Let's load data from API...");
		axios.get("http://gateway.marvel.com/v1/public/characters?apikey=bd8a67a15563a7425a69aedc11c376e8").then(response => {
			console.log(response);
//
			this.setState({apiresponse: response});
			this.setState({isLoading: false});
		});

	}
// esta funcao verifica se existe uma descricao e retorna duas mensagens diferentes consoante a resposta que se obtenha
	isDescriptionEmpty(description) {
		if (description === "") {
			return <div>No description</div>;
		} else {
			return <div>{description}</div>;
		}

	}
// este acordiao tras os resultados obtidos através do map com o array obtido da api
// para obter os resultados indica se o caminho com o parametro de entrada que tem os resultados
	accordionStruct(result) {
		if (!result.thumbnail.path.includes('image_not_available')){
			return (
				<div className="bg-white container">
					<div className='container-fluid col-6'>
						<h1 className="text-center font-weight-bold text-danger">{result.name}</h1>
					</div>
					<div>
						<img className="text-center " src={result.thumbnail.path + '/portrait_large.' + result.thumbnail.extension} />
					</div>

					<div>
						<p className="text-center ">{this.isDescriptionEmpty(result.description)}</p>
					</div>
				</div>
			)
		}
	}

	render() {
		const {isLoading, apiresponse} = this.state;

		if (isLoading) {
			return <div className="App">Loading...</div>;
		}


		return (
// o map vai aos valores do array e um por um e passa os ao parametro de entrada da funcao
			<div className="App text-center" >

				{apiresponse.data.data.results.map((res) => this.accordionStruct(res))}
			</div>
		);
	}
}

export default Charactersaccordion;
