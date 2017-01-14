import React from 'react';

export default class BillList extends React.Component {
	renderBills () {
		let bills = [];
		for (var x = 0; x < 15; x++) {
			bills.push(
				<li className="bill-list__bill" key={x}>
					<h2 className="bill-list__bill-number">H.R. 76{x}</h2>
					<p className="bill-list__bill-text">This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill.</p>
				</li>
			)
		}
		return bills;
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
