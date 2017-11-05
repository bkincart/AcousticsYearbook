import { combineReducers } from 'redux';

import buildProfileReducer from '../buildProfile/reducer';

let rootReducer = combineReducers({
  buildProfileReducer
})

export default rootReducer;
