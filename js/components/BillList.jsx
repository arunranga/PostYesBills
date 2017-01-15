import React from 'react';
import _ from 'lodash';

import BillContainer from '../containers/BillContainer';

export default class BillList extends React.Component {

	renderBills () {
		let billList = [
			{
		    comments: Math.floor(Math.random() * 100) + 1,
				title: 'ObamaCare Repeal Act',
		    text: 'aka. farewell Obamacare. Approximately 24 million Americans will be without access to health insurance.',
		    notations: Math.floor(Math.random() * 100) + 1,
		    number: 'H.R. 175',
			},
			{
		    comments: Math.floor(Math.random() * 100) + 1,
				title: 'National Clinical Care Commission Act',
		    text: 'Energy Efficient Government Technology Act',
		    notations: Math.floor(Math.random() * 100) + 1,
		    number: 'H.R. 301',
			},
			{
		    comments: Math.floor(Math.random() * 100) + 1,
				title: 'Energy Efficient Government Technology Act',
		    text: 'Federal agencies implementation of energy-efficient and energy-saving information technology',
		    notations: Math.floor(Math.random() * 100) + 1,
		    number: 'H.R. 124',
			},
			{
		    comments: Math.floor(Math.random() * 100) + 1,
				title: 'ObamaCare Repeal Act',
		    text: 'aka. farewell Obamacare. Approximately 24 million Americans will be without access to health insurance.',
		    notations: Math.floor(Math.random() * 100) + 1,
		    number: 'H.R. 316',
			},
			{
		    comments: Math.floor(Math.random() * 100) + 1,
				title: 'National Clinical Care Commission Act',
		    text: 'Energy Efficient Government Technology Act',
		    notations: Math.floor(Math.random() * 100) + 1,
		    number: 'H.R. 285',
			},
			{
		    comments: Math.floor(Math.random() * 100) + 1,
				title: 'Energy Efficient Government Technology Act',
		    text: 'Federal agencies implementation of energy-efficient and energy-saving information technology',
		    notations: Math.floor(Math.random() * 100) + 1,
		    number: 'H.R. 291',
			},
		];

		return billList.map((bill, i) => {
			bill.id = i;

			return (
				<BillContainer bill={bill} key={i} id={i} />
			);
		});
	}

	render () {


		return (
			<div className="bills">
				<h3 className="bills-title">Bills on the floor</h3>
				<ul className="bill-list">
					{this.renderBills()}
				</ul>
			</div>
		);
	}
}
