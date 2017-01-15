import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBillList } from '../actions/billActions';

import BillListContainer from '../containers/BillListContainer';
import HotBillContainer from '../containers/HotBillContainer';

class Home extends Component {

	componentDidMount () {
		this.props.fetchBillList();
	}

	render() {
		return (
			<div className="container home">
				<HotBillContainer />
				<BillListContainer />
			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => {

  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: (action) => dispatch(action),
		fetchBillList: () => dispatch(fetchBillList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
