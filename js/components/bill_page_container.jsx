import connect from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const billId = parseInt(ownProps.params.billId);
  const bill = state.bills[billId];
  return { billId, bill };
};

export default connect(
  mapStateToProps
)(BillPage);
