import { RECEIVE_BILL } from '../actions/bill_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
   bills: [],
   errors: []
 });

 const BillsReducer = (state = _defaultState, action) => {
   switch(action.type){
    case RECEIVE_BILL:
      return action.bill;
    default:
      return state;
   }
 };

 export default BillsReducer;
