import { applyMiddleware } from 'redux';
import AnnotationMiddleware from '../middleware/annotation_middleware';
import BillMiddleware from '../middleware/bill_middleware';


const RootMiddleware = applyMiddleware(
  AnnotationMiddleware,
  BillMiddleware
);

export default RootMiddleware;
