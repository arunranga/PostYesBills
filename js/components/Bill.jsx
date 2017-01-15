import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Bill extends Component {
  render () {
    let { comments, id, title, text, notations, number } = this.props.bill;

    return (
      <Link to={`/bills/${id}`} >
        <li className="bill-list__bill" data-id={id} key={number}>
          <div className="bill-list__bill-id">
            <h3 className="bill-list__bill-number">{number}</h3>
          </div>
          <div className="bill-list__bill-content">
            <h2 className="bill-list__bill-title">{title}</h2>
            <p className="bill-list__bill-text">{text}</p>
            <p className="bill-list__bill-data">Comments: {comments}, Notations: {notations}</p>
          </div>
        </li>
      </Link>
    );
  }
}
