export const CREATE_ANNOTATION = "CREATE_ANNOTATION";
export const FETCH_ANNOTATIONS = "FETCH_ANNOTATIONS";
export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";

export const createAnnotation = annotation => ({
  type: CREATE_ANNOTATION,
  annotation
});

export const fetchAnnotations = () => ({
  type: FETCH_ANNOTATIONS
});

export const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const receiveAnnotations = annotations => ({
  type: RECEIVE_ANNOTATIONS,
  annotations
});
