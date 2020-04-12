import React, { Component } from "react";

import Maps from "../Map";

export default class Main extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<Maps></Maps>
					</div>
				</div>
			</div>
		);
	}
}
