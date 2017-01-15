import { combineReducers } from 'redux';
import auth from './auth';
import BillsReducer from './BillsReducer';

export default combineReducers({
  auth,
  bills: BillsReducer
});
