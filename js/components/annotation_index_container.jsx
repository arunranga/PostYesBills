import { connect } from 'react-redux';
import { createAnnotation, fetchAnnotations } from '../actions/annotation_actions';
import AnnotationIndex from './annotation_index';

const mapStateToProps = (state, ownProps) => ({
  annotations: [],//state.annotations, TODO when fetch is working, this should pull from state
  // pageId: ownProps.pageId
});

const mapDispatchToProps = dispatch => ({
  createAnnotation: annotation => dispatch(createAnnotation(annotation)),
  fetchAnnotations: () => dispatch(fetchAnnotations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationIndex);
