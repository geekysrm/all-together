import React, { Component } from "react";
import Select from "react-select";
import "./ShopAvail.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const fakeOptions = [
	{ value: "toothbrush", label: "Toothbrush", isDisabled: true },
	{ value: "toothpaste", label: "Toothpaste" },
	{ value: "soap", label: "Soap" },
];

class ShopAvail extends Component {
	render() {
		console.log(this.props.shop);
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-md-5 mr-2 shop-details">
						<div className="card d-flex flex-row border-0">
							<div className="card-body">
								<h5 className="card-title">
									{this.props.shop
										? this.props.shop[0].shopName
										: null}
								</h5>
								<p className="card-text">
									{this.props.shop
										? this.props.shop[0].description
										: null}
								</p>
							</div>
							<div>
								<img
									src={
										this.props.shop
											? this.props.shop[0].imageURL
											: null
									}
									className="card-img-top img-fluid rounded"
									alt="..."
									style={{
										maxHeight: "350px",
										maxWidth: "350px",
									}}
								/>
							</div>
						</div>
					</div>
					<div className="col-md-5 ask-form rounded ml-2 p-2">
						<form>
							<div className="form-group">
								<label htmlFor="buy-select">
									What to you want to buy?
								</label>
								<Select
									isMulti
									name="colors"
									options={fakeOptions}
									className="basic-multi-select"
									classNamePrefix="select"
									placeholder="Select Items"
									id="buy-select"
								/>
							</div>

							<div className="form-group">
								<label htmlFor="question">
									Any Questions you want to ask the
									shopkeeper?
								</label>
								<textarea
									id="question"
									className="form-control"
									defaultValue={""}
									placeholder="Enter any details"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default compose(
	firestoreConnect((props) => {
		return [
			{
				collection: "users",
			},
			{
				collection: `shops`,
				doc: props.match.params.id,
			},
		];
	}), // or { collection: 'users' }
	connect((state, props) => ({
		users: state.firestore.ordered.users,
		shop: state.firestore.ordered.shops,
	}))
)(ShopAvail);
