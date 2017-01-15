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
				text: 'A little compassion: Simplifying thingsfor people who have it pretty hard by coordinating better clinical care for people with a complex diseases.',
				notations: Math.floor(Math.random() * 100) + 1,
				number: 'H.R. 309',
			},
			{
				comments: Math.floor(Math.random() * 100) + 1,
				title: 'Protecting Patient Access to Emergency Medications Act of 2017',
				text: '911: Getting legit meds from the right peeps. The gov’t wants to have more control over who is allowed to  distribute emergency medications.',
				notations: Math.floor(Math.random() * 100) + 1,
				number: 'H.R. 304',
			},
			{
				comments: Math.floor(Math.random() * 100) + 1,
				title: 'Improving Access to Maternity Care Act',
				text: 'Moms-to-Be get a Shoot Out & a Thank You. This bill pushes for more equitable distribution of maternity care health professionals to areas lacking assistance ',
				notations: Math.floor(Math.random() * 100) + 1,
				number: 'H.R. 315',
			},
			{
				comments: Math.floor(Math.random() * 100) + 1,
				title: 'Energy Efficient Government Technology Act',
				text: 'Srsly, Someone Shut Off the Lights From Time to Time.',
				notations: Math.floor(Math.random() * 100) + 1,
				number: 'H.R. 306',
			},
			{
				comments: Math.floor(Math.random() * 100) + 1,
				title: 'To authorize the National Science Foundation to support entrepreneurial programs for women.',
				text: 'A Little Love for Lady-preneurs. A little Extra Love for Lab-Lady-preneurs.',
				notations: Math.floor(Math.random() * 100) + 1,
				number: 'H.R. 255',
			},
		];

		return billList.map((bill, i) => {
			bill.id = parseInt(bill.number.replace(/\D+/g, ''));

			return (
				<BillContainer bill={bill} key={i} id={bill.id} />
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
