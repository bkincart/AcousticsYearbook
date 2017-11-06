import { combineReducers } from 'redux';

import currentUser from '../main/reducer';

let rootReducer = combineReducers({
  currentUser
})

export default rootReducer;
