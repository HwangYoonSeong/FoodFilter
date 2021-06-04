import { combineReducers } from "redux";
import uid from "./uid";
import searchMode from "./searchMode";
import captureMode from "./captureMode";

const rootReducer = combineReducers({ uid, searchMode, captureMode });

export default rootReducer;
