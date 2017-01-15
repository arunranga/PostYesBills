import { applyMiddleware } from 'redux';
import BillMiddleware from '../middleware/bill_middleware';

const RootMiddleware = applyMiddleware(
  BillMiddleware
);

export default RootMiddleware;
