import React from 'react';
import _ from 'lodash';

import BillContainer from '../containers/BillContainer';

export default class BillList extends React.Component {

	renderBills () {
		let { billList } = this.props;

		return _.map(billList, (billID) => {
			return (
				<BillContainer key={billID} id={billID} />
			);
		});

	}

	render () {


		return (
			<div className="bills">
				<ul className="bill-list">
					{this.renderBills()}
				</ul>
			</div>
		);
	}
}
