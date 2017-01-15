import React from "react";

export default class BillHeader extends React.Component {
  render () {
    const {
      shortTitle,
      sponsor,
      status,
      title,
      dateIntroduced,
      billNumber,
      tldr,
    } = this.props.bill;

    return (
      <div className="bill__header">
        <div className="bill__data">
          <div className="bill__id">
            <h3 className="bill__number">H.R. {billNumber}</h3>
          </div>
          <div className="bill__info">
            <p className="bill__short-title">{shortTitle}</p>
            <p className="bill__title">{title}</p>
            <p className="bill__date">
              <span className="bill__label">Introduced</span>
              {dateIntroduced}
            </p>
            <p className="bill__status">
              <span className="bill__label">Status</span>
              {status}
            </p>
            <p className="bill__sponsor">
              <span className="bill__label">Sponsor</span>
              {sponsor}
            </p>
          </div>
        </div>
        <div className="bill__tldr">
          <h4 className="bill__tldr-title">TL;DR</h4>
          <p className="bill__tldr-text">{tldr}</p>
        </div>
      </div>
    );
  }
}

        // <li className="bill-list__bill" data-id={id} key={number}>
        //   <div className="bill-list__bill-id">
        //     <h3 className="bill-list__bill-number">{number}</h3>
        //   </div>
        //   <div className="bill-list__bill-content">
        //     <h2 className="bill-list__bill-title">{title}</h2>
        //     <p className="bill-list__bill-text">{text}</p>
        //     <p className="bill-list__bill-data">Comments: {comments}, Notations: {notations}</p>
        //   </div>