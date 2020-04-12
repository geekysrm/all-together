import React, { Component } from "react";
import image from "../assets/community-1.png";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="jumbotron home p-2">
						<div className="row p-2">
							<div className="col-md-6 text-center d-flex justify-content-center align-items-center">
								<div>
									<h3 className="display-4">
										TBD: Catchy Tagline
									</h3>
								</div>
							</div>
							<div className="col-md-6 text-center p-2">
								<img
									src={image}
									alt="Community"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-md-4 mx-auto">
								<Link
									to="/"
									className="btn btn-primary btn-block"
								>
									Let's Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
