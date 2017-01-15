import React from 'react';
import BillHeader from './bill_header';

export default class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: {
        // short_title: 'short title',
        // sponsor: 'sponsor',
        // title: 'title',
        // date_introduced: 'date_introduced',
        // bill_number: 'bill number'
      }
    };
  }

  componentDidMount() {
    this.setState({bill: this.props.fetchBill(parseInt(this.props.params.billNo))});
  }

  componentWillReceiveProps(newProps) {
    this.setState({bill: this.props.fetchBill(parseInt(newProps.params.billNo))});
  }

  render () {
    return(
      <div>
        <BillHeader
          shortTitle={this.state.bill.short_title}
          sponsor={this.state.bill.sponsor}
          title={this.state.bill.title}
          date={this.state.bill.date_introduced}
          billNumber={this.state.bill.bill_number}
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
