import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
