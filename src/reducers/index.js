import { combineReducers } from 'redux';

import teams from './teams';
import members from './members';

const rootReducer = combineReducers({ members, teams });

export default rootReducer;
