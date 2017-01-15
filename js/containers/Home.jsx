import React, { Component } from 'react';

import BillListContainer from '../containers/BillListContainer';
import HotBillContainer from '../containers/HotBillContainer';

export default class Home extends Component {
	render() {
		return (
			<div className="container home">
				<HotBillContainer />
				<BillListContainer />
			</div>
		);
	}
}
