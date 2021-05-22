const SET_UID = "uid/SET_UID";

export const setUid = (uid) => ({ type: SET_UID, uid });

const initialUid = "";

export default function uidReducer(state = initialUid, action) {
  if (action.type === SET_UID) return action.uid;
  else return state;
}
