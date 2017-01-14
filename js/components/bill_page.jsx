import React from 'react';
import BillHeader from './bill_header';

class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: {}
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
      <BillText body={this.state.bill.text}/>
        <AnnotationIndexContainer/>
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
