import React from "react";
import { NavLink, Link } from "react-router-dom";

import google from "../assets/google.png";

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<Link className="navbar-brand" to="/">
				All Together
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item mr-1">
						<NavLink
							className="nav-link btn btn-light"
							to="/map"
							activeClassName="active"
						>
							<img
								src={google}
								style={{
									maxHeight: "30px",
								}}
								alt="icon"
							></img>{" "}
							sonusaikishan@gmail.com
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
