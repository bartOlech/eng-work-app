import authReducer from './authReducer';
import userReducer from './userReducer';
import matchReducer from './matchReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  matchData: matchReducer,
})

export default rootReducer;