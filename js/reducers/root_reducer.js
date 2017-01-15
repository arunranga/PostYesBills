import { combineReducers } from 'redux';

import BillsReducer from './bills_reducer';

const RootReducer = combineReducers({
  bills: BillsReducer
});

export default RootReducer;
