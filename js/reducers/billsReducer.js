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
  bills: [],
  errors: []
});

const BillsReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case types.FETCH_BILL_LIST:
      return state;
      break;
    case types.FETCH_BILL:
      return {
        bill: {
          short_title: 'ObamaCare',
          sponsor: 'Obama',
          title: 'Some title',
          date_introduced: 'Jan 1',
          bill_number: '11111'
        }
      }
      break;
    case types.RECEIVE_BILL:
      return state;
      break;
    case types.RECEIVE_BILL_LIST:
      return state;
      break;
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
