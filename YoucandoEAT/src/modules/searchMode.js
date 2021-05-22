const SET_SEARCHMODE = "searchMode/SET_SEARCHMODE";

export const setSearchMode = (mode) => ({ type: SET_SEARCHMODE, mode });

const initialSearchMode = false;

export default function searchModeReducer(state = initialSearchMode, action) {
  if (action.type === SET_SEARCHMODE) return action.mode;
  else return state;
}
