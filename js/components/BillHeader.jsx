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
      <div className="bill-header__container">
        <div className="bill-header__data">
          <div className="bill-header__id">
            <h3 className="bill-header__number">H.R. {billNumber}</h3>
          </div>
          <div className="bill-header__info">
            <p className="bill-header__short-title">{shortTitle}</p>
            <p className="bill-header__title">{title}</p>
            <p className="bill-header__date">
              <span className="bill-header__label">Introduced</span>
              {dateIntroduced}
            </p>
            <p className="bill-header__status">
              <span className="bill-header__label">Status</span>
              {status}
            </p>
            <p className="bill-header__sponsor">
              <span className="bill-header__label">Sponsor</span>
              {sponsor}
            </p>
          </div>
        </div>
        <div className="bill-header__tldr">
          <h4 className="bill-header__tldr-title">TL;DR</h4>
          <p className="bill-header__tldr-text">{tldr}</p>
        </div>
      </div>
    );
  }
}
