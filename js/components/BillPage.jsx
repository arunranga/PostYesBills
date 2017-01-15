import React from 'react';
import BillHeader from './BillHeader';

export default class BillPage extends React.Component {
  componentDidMount() {
    this.props.fetchBill(1);
  }

  render () {
    const { bill } = this.props;

    if (bill) {
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
    } else {
      return <div />;
    }
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
