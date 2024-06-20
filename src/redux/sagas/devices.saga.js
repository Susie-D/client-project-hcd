import axios from "axios";
import { put, takeLatest, takeEvery, select } from "redux-saga/effects";





// not being used. get all devices for all users
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

const getUserIdFromState = (state) => state.user.id

function* fetchDevicesByUserId() {
  try {
    const user_id = yield select(getUserIdFromState);
    const response = yield axios.get(`/api/devices/${user_id}`)
    yield put({
      type: 'SET_USER_DEVICES_BY_USER_ID',
      payload: response.data,
    });
  } catch (error) {
    console.log('AXIOS | GET items by user error', error)
  }
}



function* DevicesSaga() {
  yield takeLatest("FETCH_DEVICES", fetchDevices); // not being used. get all devices for all users
  yield takeLatest("FETCH_DEVICES_BY_USER_ID", fetchDevicesByUserId)

}

export default DevicesSaga;