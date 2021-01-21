import React from 'react';
import './App.css';
import "./App_game.css";
import './Charcters.css';
import Menunav from "./Menu_nav";
import Main from "./Components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Characterscards from "./Components/Characters";
//import logo_marvel from 'logo_marvel.png';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import video_youtube from "./Components/Video_characters";
import home_marvel from "./Home";
import Home from "./Home";
// usando o routing para gerenciar as paginas
function App() {
	return (
		<Router className="text-left">
			<div className="App">
				<Menunav />
				<Switch >
					<Route path="/Main" component={Main} />
					<Route path="/Home" component={home_marvel}/>
					<Route path="/Characters" component={Characterscards}/>
					<Route path="/Video_characters" component={video_youtube}/>
				</Switch>
			</div>
			<div>

			</div>
		</Router>
	);
}

export default App;