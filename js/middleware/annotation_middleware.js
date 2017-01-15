import { createAnnotation,
         fetchAnnotations
       } from '../util/annotation_api_util';
import { receiveAnnotation,
         receiveAnnotations,
         CREATE_ANNOTATION,
         FETCH_ANNOTATIONS,
         RECEIVE_ANNOTATION,
         RECEIVE_ANNOTATIONS
       } from '../actions/annotation_actions';

export default ({getState, dispatch}) => next => action => {
  const annotationSuccess = data => dispatch(receiveAnnotation(data));
  const annotationsSuccess = data => dispatch(receiveAnnotations(data));
  const error = date => console.log(data);
  const result = next(action);
  switch(action.type){
    case CREATE_ANNOTATION:
      createAnnotation(action.annotation, annotationSuccess, error);
      break;
    case FETCH_ANNOTATIONS:
      fetchAnnotations(annotationsSuccess, error);
      break;
    default:
      break;
  }
  return result;
};
