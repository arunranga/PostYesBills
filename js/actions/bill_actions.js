export const FETCH_BILL = "FETCH_BILL";
export const FETCH_BILLS = "FETCH_BILLS";
export const RECEIVE_BILL = "RECEIVE_BILL";
export const RECEIVE_BILLS = "RECEIVE_BILLS";

// export const fetchBills = () => ({
//   type: FETCH_BILLS
// });

export const fetchBill = billNo => ({
  type: FETCH_BILL,
  billNo
});

export const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

// export const receiveBills = bills => ({
//   type: RECEIVE_BILLS,
//   bills
// });
