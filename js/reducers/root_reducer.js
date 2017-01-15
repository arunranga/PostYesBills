import { combineReducers } from 'redux';

import AnnotationsReducer from './annotations_reducer';
import BillsReducer from './bills_reducer';

const RootReducer = combineReducers({
  annotations: AnnotationsReducer,
  bills: BillsReducer
});

export default RootReducer;
