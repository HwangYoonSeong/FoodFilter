const SET_CAPTUREMODE = "captureMode/SET_CAPTUREMODE";

export const setCaptureMode = (mode) => ({ type: SET_CAPTUREMODE, mode });

const initialCaptureMode = false;

export default function captureMode(state = initialCaptureMode, action) {
  if (action.type === SET_CAPTUREMODE) return action.mode;
  else return state;
}
