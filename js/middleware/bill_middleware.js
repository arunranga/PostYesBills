import { fetchBill } from '../util/bill_api_util';
import { receiveBill,
         FETCH_BILL } from '../actions/billActions';

export default ({getState, dispatch}) => next => action => {

  const billSuccess = data => dispatch(receiveBill(data));
  const result = next(action);

  switch(action.type){
    case FETCH_BILL:
      fetchBill(action.billNo, billSuccess);
      break;
    default:
      break;
  }
  return result;
};
