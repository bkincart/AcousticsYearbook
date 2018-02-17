import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import currentUser from '../main/reducer';
import profiles from '../createProfile/reducer'

let rootReducer = combineReducers({
  form,
  currentUser,
  profiles
})

export default rootReducer;
