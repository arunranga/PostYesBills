import * as types from './types';
import { billList, billHash } from './mockData';

export const fetchBillList = () => {
  return (dispatch, state) => dispatch(receiveBillList(billList));
};

export const fetchBill = (id) => {
  return (dispatch, state) => dispatch(receiveBill(billHash[id]));
};

export const receiveBill = (bill) => {
  return {
    type: types.RECEIVE_BILL,
    bill: bill,
  };
};

export const receiveBillList = (bills) => {
  return {
    type: types.RECEIVE_BILL_LIST,
    bills: bills
  };
};
