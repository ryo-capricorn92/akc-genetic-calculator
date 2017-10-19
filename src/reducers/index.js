import { combineReducers } from 'redux';

import test from './test';

export default combineReducers({ test });

export const getTest = state => state.test;
