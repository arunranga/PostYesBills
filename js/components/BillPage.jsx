import React from 'react';
import BillHeader from './BillHeader';
import BillContent from './BillContent';
import { bills } from '../constants';

export default class BillPage extends React.Component {
  render () {
    const { billNo } = this.props.params;
    const bill = bills[billNo];

    return(
      <div>
        <BillHeader
          shortTitle={bill.shortTitle}
          sponsor={bill.sponsor}
          title={bill.title}
          dateIntroduced={bill.dateIntroduced}
          billNumber={bill.billNumber}
        />
        <BillContent
          text={bill.text}
        />
      </div>
    );
  }

// TODO: Create BillText & AnnotationIndexContainer
//   render () {
//     return(
//       <div>
//         <BillHeader
//           shortTitle={this.state.bill.short_title}
//           sponsor={this.state.bill.sponsor}
//           title={this.state.bill.title}
//           date={this.state.bill.date_introduced}
//           billNumber={this.state.bill.bill_number}
//         />
//         <BillText body={this.state.bill.text}/>
//         <AnnotationIndexContainer/>
//       </div>
//     );
//   }
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
