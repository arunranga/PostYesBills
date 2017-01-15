// import { createStore } from 'redux';
//
// import RootReducer from '../reducers/index';
// import RootMiddleware from '../middleware/root_middleware';
//
// const configureStore = (preloadedState = {}) => (
//   createStore(
//     RootReducer,
//     preloadedState,
//     RootMiddleware
//   )
// );
//
// export default configureStore;


import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import billMiddleware from '../middleware/bill_middleware.js';

const enhancer = compose(
  applyMiddleware(
    billMiddleware,
    thunk
  )
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
