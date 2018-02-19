import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import currentUser from '../main/reducer';
import profiles from '../createProfile/reducer'
import photos from '../addPhotos/reducer'

let rootReducer = combineReducers({
  form,
  currentUser,
  photos,
  profiles
})

export default rootReducer;
