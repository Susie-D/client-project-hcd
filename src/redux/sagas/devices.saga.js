import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";


function* fetchDevices() {
    try {
      let response = yield axios({
        method: "GET",
        url: "/api/devices",
      });
      yield put({
        type: "SET_DEVICES",
        payload: response.data,
      });
    } catch (error) {
      console.log("Error with GET devices request:", error);
    }
  }






function* DevicesSaga() {
    yield takeLatest("FETCH_DEVICES", fetchDevices);
  }
  
  export default DevicesSaga;