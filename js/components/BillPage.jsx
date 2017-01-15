import React from 'react';
import BillHeader from './BillHeader';

export default class BillPage extends React.Component {
  render () {
    const { bill } = this.props;

    return(
      <div>
        <BillHeader
          shortTitle={bill.short_title}
          sponsor={bill.sponsor}
          title={bill.title}
          date={bill.date_introduced}
          billNumber={bill.bill_number}
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
