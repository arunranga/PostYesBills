import React from 'react';

export default class HotBill extends React.Component {
	render () {
		let { title, number, text } = this.props;

		return (
			<div className="hot-bill">
				<p className="hot-bill__hot">!</p>
				<h2 className="bill-number">{number}</h2>
				<h1 className="bill-name">{title}</h1>
				<p className="bill-text">
					<span className="bill-text__tldr-title">TL;DR</span>
					{text}
				</p>
			</div>
		);
	}
}
