import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ShopAvail from "./ShopAvail/ShopAvail";
import Main from "./Main/Main";

function App() {
	return (
		<Router>
			<div>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route
						exact
						path="/ask-shop/:id"
						component={ShopAvail}
					></Route>
					<Route exact path="/map" component={Main}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
