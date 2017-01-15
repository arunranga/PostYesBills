import React from 'react';
import BillHeader from './BillHeader';
import BillContent from './BillContent';
import { bills } from '../constants';

export default class BillPage extends React.Component {
  render () {
    const { billNo } = this.props.params;
    const bill = bills.find((bill) => {
      return bill.billNumber === billNo;
    });

    return(
      <div className="container bill-page">
        <BillHeader
          bill={bill}
        />
        <BillContent
          text={bill.text}
        />
      </div>
    );
  }
}
// object returned by fetchBill has:
// title
// text
// bill_number
// sponsor
// short_title
// date_introduced
// date_of_action
// annotations: [{}, {}]
// comments: [ ]
