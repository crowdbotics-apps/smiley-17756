import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard259717Reducer from '../features/Dashboard259717/redux/reducers'
import SignIn159716Reducer from '../features/SignIn159716/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard259717: Dashboard259717Reducer,
SignIn159716: SignIn159716Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});