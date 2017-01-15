import React from 'react';

export default class HotBill extends React.Component {
	render () {
		let { title, number, text } = this.props;

		return (
			<div className="hot-bill">
				<h2 className="bill-name">{title}</h2>
				<p className="bill-number">{number}</p>
				<p className="bill-text">{text}</p>
			</div>
		);
	}
}
