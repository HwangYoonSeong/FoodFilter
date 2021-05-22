import { combineReducers } from "redux";
import uidReducer from "./uid";
import searchModeReducer from "./searchMode";

const rootReducer = combineReducers({ uidReducer, searchModeReducer });

export default rootReducer;
