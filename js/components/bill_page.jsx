import React from 'react';
import BillHeader from './bill_header';

class BillPage extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return(
      <div>
        <BillHeader
          shortTitle={props.bill.shortTitle}
          sponsor={props.bill.sponsor}
          title={props.bill.title}
          date={props.bill.date}
          billNumber={props.bill.billNumber}
        />
        <BillText body={props.bill.body}/>
        <AnnotationIndexContainer/>
      </div>
    );
  }
}
