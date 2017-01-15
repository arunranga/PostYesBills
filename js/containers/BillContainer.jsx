import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bill from '../components/Bill';

const mapStateToProps = (state, ownProps) => {
  // let bill = state.bills.hash[ownProps.id]; // once we have data from the backend
  let { comments, id, title, text, notations, number } = ownProps;

  return {
    comments,
    id,
    title,
    text,
    notations,
    number,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
