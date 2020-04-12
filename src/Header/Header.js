import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<Link className="navbar-brand" to="/">
				Navbar
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
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink
							className="nav-link"
							exact
							to="/"
							activeClassName="active"
						>
							Home <span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							to="/random"
							activeClassName="active"
						>
							Link
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							to="/gibrish"
							activeClassName="active"
						>
							Disabled
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
