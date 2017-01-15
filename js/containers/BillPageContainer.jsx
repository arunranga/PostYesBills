import { connect } from "react-redux";
import fetchBill from '../actions/billActions';
import BillPage from '../components/BillPage';

const mapStateToProps = (state, ownProps) => {
	console.log('hi!')
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
