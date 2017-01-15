import merge from 'lodash/merge';

const _defaultState = Object.freeze({
   bills: [],
   errors: []
 });
 
 const BillsReducer = (action, state = _defaultState) => {
   switch(action.type){
    case RECEIVE_BILLS:
      return action.bills;
    case RECEIVE_ERRORS:
      return merge({}, state, {
        errors
      });
    default:
      return state;
   }
 };
 
 export default BillsReducer; 
