import { connect } from "react-redux";
import { fetchBill } from '../actions/bill_actions.js';
import BillPage from './bill_page';

const mapStateToProps = (state, ownProps) => {
  const billNo = parseInt(ownProps.params.billNo);
  return { billNo };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchBill: (billNo) => dispatch(fetchBill(billNo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillPage);
