import React, { Component } from 'react';

import BillList from '../components/BillList';
import HotBill from '../components/HotBill';

export default class Home extends Component {
	handleBillClick (id) {
		console.log('Home id:', id);
	}

	render() {
		return (
			<div className="container home">
				<HotBill />
				<BillList onBillClick={this.handleBillClick.bind(this)} />
			</div>
		);
	}
}
