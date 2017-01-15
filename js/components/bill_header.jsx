import React from "react";

const BillHeader = (bill) => (
  <div className="bill-header">
    <div>
      <div>{bill.shortTitle}</div>
      <div>{bill.sponsor}</div>
      <div>{bill.title}</div>
      <div>{bill.dateIntroduced}</div>
      <div>{bill.billNumber}</div>
    </div>
    <div>
      [stock image here]
    </div>
  </div>
);

export default BillHeader;
