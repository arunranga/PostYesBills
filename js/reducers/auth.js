import * as types from '../actions/types';

const initialState = {
  authenticated: false
};


export default function auth (state = initialState, action) {
  switch(action.type) {
    case types.LOG_IN_USER:
      return { ...state, authenticated: true };
    case types.LOG_OUT_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}
