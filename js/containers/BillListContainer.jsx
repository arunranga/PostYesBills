import React, { Component } from 'react';
import { connect } from 'react-redux';

import BillList from '../components/BillList';

const mapStateToProps = (state, ownProps) => {
  // let billList = state.bills.list; // once we have data from the backend
  let billList = [];
  for (var x = 0; x < 15; x++) {
    billList.push(760 + x);
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
