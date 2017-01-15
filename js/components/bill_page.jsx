import React from 'react';
import BillHeader from './bill_header';

export default class BillPage extends React.Component {
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
        <h1> hEY! </h1>
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
