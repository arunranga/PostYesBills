import React, { Component } from 'react';
import { connect } from 'react-redux';

import BillList from '../components/BillList';

const mapStateToProps = (state, ownProps) => {
  // let billList = state.bills.list; // once we have data from the backend
  let billList = [];
  for (var x = 0; x < 15; x++) {

    let billNumber = 760 + x;
    let text = `This is the text of bill number ${billNumber}.`;
    for (var i = 0; i < 4; i++) {
      text = text += text;
    }

    billList.push(
      {
        number: billNumber,
        title: `H.R. ${billNumber}`,
        text: text
      }
    );
  }

  return {
    billList: billList,
    onBillClick: ownProps.onBillClick
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillList);
