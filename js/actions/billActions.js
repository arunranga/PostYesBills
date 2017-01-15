import * as types from './types';

export function fetchBillList () {
  return { type: types.FETCH_BILL_LIST, };
};

export function fetchBill (id) {
  return {
  	type: types.FETCH_BILL,
	  id,
	};
};

export function receiveBill (bill) {
  return {
  	type: types.RECEIVE_BILL,
		bill,
	};
};

export function receiveBillList (bills) {
  return {
  	type: types.RECEIVE_BILL_LIST,
		bills,
	};
};
