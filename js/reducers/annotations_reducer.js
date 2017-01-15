import { RECEIVE_ANNOTATION,
         RECEIVE_ANNOTATIONS,
         RECEIVE_ERRORS } from '../actions/annotation_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  annotations: []
});

const AnnotationsReducer = (state = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_ANNOTATION:
      const newAnnotation = {[action.annotation.id]: action.annotation};
      return merge({}, state, newAnnotation);
    case RECEIVE_ANNOTATIONS:
      return action.annotations;
    default:
      return state;
  }
};

export default AnnotationsReducer;
