import { connect } from "react-redux";
import fetchBill from '../actions/bill_actions';
import BillPage from './bill_page';

const mapStateToProps = (state, ownProps) => {
  const billNo = parseInt(ownProps.params.billNo);
  return { billNo };
};

const mapDispatchToProps = dispatch => ({
  fetchBill: (billNo) => dispatch(fetchBill(billNo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillPage);
