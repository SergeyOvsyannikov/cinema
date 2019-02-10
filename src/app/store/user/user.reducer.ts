import {Reducer} from 'redux';
import {AllUserType} from './user.action';

const INITIAL_STATE = {};

export const usersReducer: Reducer = (state = INITIAL_STATE, action: AllUserType) => {
  switch (action.type) {

  }
  return state;
};
