import React, { Component } from 'react';

export default class BillPage extends Component {
	render() {
		console.log('this:', this)
		return (
		  <div className="Bill">
				<div className="container bill">
					<h1>Bill!</h1>
				</div>
		  </div>
		);
	}
}
