import React, { Component } from 'react';
import { connect } from 'react-redux';
import HotBill from '../components/HotBill';

const mapStateToProps = (state, ownProps) => {
  // let bill = state.bills.hash[ownProps.id];
  let bill = {
    title: 'ObamaCare Repeal Act',
    number: 'H.R. 175',
    text: 'aka. farewell Obamacare. Approximately 24 million Americans will be without access to health insurance.'
  };

  return {
    title: bill.title,
    number: bill.number,
    text: bill.text,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotBill);
