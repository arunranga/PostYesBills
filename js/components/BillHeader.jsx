import React from "react";

export default class BillHeader extends React.Component {
  render () {
    const {
      shortTitle,
      sponsor,
      title,
      dateIntroduced,
      billNumber
    } = this.props;

    return (
      <div
        className="bill-header"
        style={ { marginTop: '68px' } }
      >
        <div className="short-title">{shortTitle}</div>
        <div className="bill-number">{billNumber}</div>
        <div className="title">{title}</div>
        <div className="sponsor">{sponsor}</div>
        <div className="date">{dateIntroduced}</div>
      </div>
    );
  }
}
