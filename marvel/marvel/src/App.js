import React from 'react';
import './App.css';
import Menunav from "./Menu_nav";
import YouTubeMenu from "./Youtube_menu";
import Main from "./Components/Main";
//import logo_marvel from 'logo_marvel.png';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Menunav/>
				<Switch>
					<Route path="/Main" component={Main} />
					<Route path="/Youtube_menu" component={YouTubeMenu}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;