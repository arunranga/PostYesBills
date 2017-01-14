import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logInUser, logOutUser } from '../actions/auth';

class Template extends Component {
  render () {
    return (
      <div>
        <div>User is {this.props.loggedIn ? 'logged in' : 'logged out'}</div>
        <div onClick={() => this.props.dispatch(logInUser())}>LOG IN</div>
        <div onClick={() => this.props.dispatch(logOutUser())}>LOG OUT</div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
