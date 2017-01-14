import React, { Component } from 'react';
import { connect } from 'react-redux';
import HotBill from '../components/HotBill';

const mapStateToProps = (state, ownProps) => {
  // let bill = state.bills.hash[ownProps.id];
  let bill = {
    title: 'Hot bill!!',
    number: 'H.R. 763',
    text: 'This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill. This is the text of the bill'
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
