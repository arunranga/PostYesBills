import React from "react";

const BillHeader = (bill) => (
  <div className="bill-header">
    <div>
      <div className="short-title">SHORT TITLE{bill.shortTitle}</div>
      <div className="bill-number">Bill No.{bill.billNumber}</div>
      <div className="title">Long Title goes here{bill.title}</div>
      <div className="sponsor">Sponsor Name{bill.sponsor}</div>
      <div className="date">Date{bill.date}</div>
    </div>
    <div>
      [stock image here]
    </div>
  </div>
);

export default BillHeader;
