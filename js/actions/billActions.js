import * as types from './types';

export const fetchBillList = () => {
  return { type: types.FETCH_BILL_LIST };
};

export const fetchBill = (id) => {
  return {
    type: types.FETCH_BILL,
    id
  };
};

export const receiveBill = (bill) => {
  return {
    type: types.RECEIVE_BILL,
    bill
  };
};

export const receiveBillList = (bills) => {
  return {
    type: types.RECEIVE_BILL_LIST,
    bills
  };
};
