import React from 'react';
import { Link, hashHistory } from 'react-router';
import BillHeader from './bill_header';
import BillText from './bill_text';
import AnnotationIndexContainer from './annotation_index_container';

class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billText: null
    };
  }

  componentDidMount() {
    this.getBillText(this.props.params.billNo);
  }

  componentDidReceiveProps(newProps) {
    this.getBillText(newProps.params.billNo);
  }

  getBillText(billNo) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${billNo}`);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log(xhr);
          this.setState({billText: JSON.parse(xhr.responseText).body.concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)
                                                                    .concat(JSON.parse(xhr.responseText).body)});
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };
  }

  render() {
    //TODO this is just for bill info
    let fakeProps = {
      bill: {
        short_title: "Short Title",
        sponsor: "Sponsor Name",
        title: "Actual Longer More Descriptive Title",
        date: "Date",
        bill_number: "BILL-NO"
      }
    };

    return (
      <div className="bill-page">
        <Link to="/">{"<< "} return to home page</Link>
        <BillHeader
          shortTitle={fakeProps.bill.short_title}
          sponsor={fakeProps.bill.sponsor}
          title={fakeProps.bill.title}
          date={fakeProps.bill.date_introduced}
          billNumber={fakeProps.bill.bill_number}
        />
        <BillText text={this.state.billText} />
        <AnnotationIndexContainer billNo={fakeProps.bill.bill_number} />
      </div>
    );
  }
}

export default BillPage;

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
