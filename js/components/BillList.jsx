import React from 'react';

export default class BillList extends React.Component {
	handleBillClick (e) {
	    let id = Number(e.currentTarget.getAttribute('data-id'));

		this.props.onBillClick(id);
		console.log('id:', id);
		console.log('this:', this);
	}

	renderBills () {
		let bills = [];
		for (var x = 0; x < 15; x++) {
			bills.push(
				<li className="bill-list__bill" data-id={`76${x}`} key={x} onClick={this.handleBillClick.bind(this)}>
					<h2 className="bill-list__bill-number">H.R. 76{x}</h2>
					<p className="bill-list__bill-text">This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}. This is the text of bill number 76{x}.</p>
					<p className="bill-list__bill-comments">Comments: {x}</p>
					<p className="bill-list__bill-notations">Notations: {x}</p>
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
