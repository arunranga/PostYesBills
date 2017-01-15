import { connect } from "react-redux";
import { fetchBill } from '../actions/bill_actions.js';
import BillPage from './bill_page';

const mapStateToProps = (state, ownProps) => {
  const billNo = parseInt(ownProps.params.billNo);
  const bill = state.bills[billNo];
  return { billNo, bill };
};

const mapDispatchToProps = dispatch => ({
  fetchBill: id => dispatch(fetchBill(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillPage);
