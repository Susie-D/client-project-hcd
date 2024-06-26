import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// not being used. get all devices for all users
function* fetchDeviceTypes() {
  try {
    let response = yield axios({
      method: "GET",
      url: "/api/deviceTypes",
    });
    yield put({
      type: "SET_DEVICE_TYPES",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with GET device types request:", error);
  }
}

function* DevicesSaga() {
  yield takeLatest("FETCH_DEVICE_TYPES", fetchDeviceTypes); 
}

export default DevicesSaga;