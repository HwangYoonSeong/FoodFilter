import { combineReducers } from "redux";
import uid from "./uid";
import searchMode from "./searchMode";

const rootReducer = combineReducers({ uid, searchMode });

export default rootReducer;
