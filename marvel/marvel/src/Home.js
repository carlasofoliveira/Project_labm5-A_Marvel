import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";

//
class home_marvel extends React.Component {
    // o estado inicial e de existir loading por falta de retorno de resposta da api
    snippet;

    constructor(props) {
        super(props);
        this.state = {isLoading_trailer: true, apiresponse_trailer: undefined};
    }

// utiliza se axios para que exista uma promessa de resultado da api
// apos a vinda de resultados e atualizado o estado
    componentDidMount() {
        console.debug("After mount! Let's load data from API...");
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=Marvel-official&type=video&videoId=d9M3j5d0KbQ&key=AIzaSyC-bMkKOxMY7q6JSP5TkLvz7MB4evbgBPw").then(response_video => {
            this.setState({apiresponse_trailer: response_video});
            this.setState({isLoading_trailer: false});
        })
    }

    card(result) {
        // os videos sao mostrados atraves dos resultados que o parametro de entrada (result) e em conjunto com o caminho retirado do resultado da api
        return (
            <div>
                <div>
                    <div className='fundo pb-2'>
                        <h1 className="text-white text-center">Marvel</h1>
                        <h4 className="text-white text-center"> Venha jogar um jogo de memória e conhecer personagens
                            pouco
                            conhecidas da Marvel </h4>
                        <h4 className="text-white text-center"> Veja também alguns trailers!! </h4>
                    </div>
                </div>
                <div className="wrapper">
                    <iframe style={{height: 720 + "px", width: 1280 + "px"}}
                            src={"https://www.youtube.com/embed/d9M3j5d0KbQ?autoplay=2/" + result.id.videoId}>
                    </iframe>
                </div>
            </div>

        )
    }

    render() {
        const {isLoading_trailer, apiresponse_trailer} = this.state;

        if (isLoading_trailer) {
            return <div className="App">Loading...</div>;
        }
        if (!<Route path="/Home" component={home_marvel}/>) {
            return (<div>

            </div>)
        } else {
            return (

                <div className="App">
                    {console.log(apiresponse_trailer.data)}
                    {apiresponse_trailer.data.items.map((res) => this.card(res))}
                </div>
            );

        }
    }
}

export default home_marvel;