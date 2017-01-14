import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bill from '../components/Bill';

const mapStateToProps = (state, ownProps) => {
  // let bill = state.bills.hash[ownProps.id]; // once we have data from the backend
  let id = ownProps.id;

  // DUMMY DATA
  let text = `This is the text of bill number ${id}.`;
  for (var i = 0; i < 4; i++) {
    text = text += text;
  }
  let bill = {
    id,
    comments: 5,
    notations: 5,
    number: `H.R. ${id}`,
    title: `H.R. ${id}`,
    text,
  };

  return {
    id: id,
    comments: bill.comments,
    notations: bill.notations,
    number: bill.number,
    title: bill.title,
    text: bill.text,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
