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
        <BillHeader bill={bill} />
        <BillContent
          abillto={bill.abillto}
          abilltodesc={bill.abilltodesc}
          beitenacted={bill.beitenacted}
          section1={bill.section1}
          section1desc={bill.section1desc}
          section2={bill.section2}
          annotations={bill.annotations}
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
