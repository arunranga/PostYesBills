import { combine_reducers } from 'redux';

import BillsReducer from './bills_reducer';

const RootReducer = combineReducers({
  bills: billsReducer
});

export default RootReducer;
