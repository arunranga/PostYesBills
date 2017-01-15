import merge from 'lodash/merge';
import * as types from '../actions/types';

// types:
// LOG_IN_USER
// LOG_OUT_USER
// FETCH_BILL_LIST
// FETCH_BILL
// RECEIVE_BILL
// RECEIVE_BILL_LIST

const _defaultState = Object.freeze({
  list: [],
  hash: {},
  errors: []
});

const BillsReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case types.RECEIVE_BILL:
      let newHash = Object.assign({}, state.hash);
      if (action.bill && action.bill.id) newHash[action.bill.id] = action.bill;
      return {... state, hash: newHash};
    case types.RECEIVE_BILL_LIST:
      let newHashFromList = { ...state.hash};
      let newList = [];
      action.bills.forEach((bill) => {
        newList.push(bill.id);
        newHashFromList[bill.id] = bill;
      });
      return {... state, list: newList, hash: newHashFromList }
    default:
      return state;
  }
};

export default BillsReducer;


// import merge from 'lodash/merge';

// const _defaultState = Object.freeze({
//    bills: [],
//    errors: []
//  });

//  const BillsReducer = (action, state = _defaultState) => {
//    switch(action.type){
//     case RECEIVE_BILLS:
//       return action.bills;
//     case RECEIVE_ERRORS:
//       return merge({}, state, {
//         errors
//       });
//     default:
//       return state;
//    }
//  };

//  export default BillsReducer;
