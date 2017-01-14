import * as types from './types';

export function logInUser () {
  return { type: types.LOG_IN_USER };
}

export function logOutUser () {
  return { type: types.LOG_OUT_USER };
}
