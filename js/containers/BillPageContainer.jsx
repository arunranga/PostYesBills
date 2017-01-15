import { connect } from "react-redux";

import fetchBill from '../actions/billActions';

import BillPage from '../components/BillPage';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id);
  return { id };
};

const mapDispatchToProps = dispatch => ({
  fetchBill: (id) => dispatch(fetchBill(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillPage);
