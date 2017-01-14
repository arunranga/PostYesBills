import React, { Component } from 'react';

export default class Bill extends Component {

  handleBillClick (e) {
	  let id = Number(e.currentTarget.getAttribute('data-id'));
		console.log('id:', this.props.id);
	}

  render () {
    let { number, title, text } = this.props;

    return (
      <li className="bill-list__bill" data-id={number} key={number} onClick={this.handleBillClick.bind(this)}>
        <h2 className="bill-list__bill-number">{title}</h2>
        <p className="bill-list__bill-text">{text}</p>
      </li>
    );
  }
}
