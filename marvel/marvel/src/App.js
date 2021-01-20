import React from 'react';
import './App.css';
import "./App_game.css";
import './Charcters.css';
import Menunav from "./Menu_nav";
import YouTubeMenu from "./Youtube_menu";
import Main from "./Components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Characterscards from "./Components/Characters";
//import logo_marvel from 'logo_marvel.png';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import charactersyoutube from "./Components/Video_characters";
import traileryoutube from "./Home";

function App() {
	return (
		<Router>
			<div className="App">
				<Menunav />
				<Switch>
					<Route path="/Main" component={Main} />
					<Route path="Home" component={traileryoutube} />
					<Route path="/Youtube_menu" component={YouTubeMenu}/>
					<Route path="/Characters" component={Characterscards}/>
					<Route path="/Video_characters" component={charactersyoutube}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;