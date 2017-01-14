import React from "react";
const BillHeader = props => {
  return (
    <div>
      <marquee className="bill-header-container">
        <div className="short-title">{props.shortTitle}</div>
        <div className="bill-number">{props.billNumber}</div>
        <div className="title">{props.titile}</div>
        <div className="sponsor">{props.sponsor}</div>
        <div className="date">{props.date}</div>
      </marquee>
      <img href="../images/sad-scary-sock-princess.jpg" />
    </div>
  );
};

BillHeader.propTypes = {
  shortTitle: React.PropTypes.string.isRequired,
  billNumber: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  sponsor: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};
