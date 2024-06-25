import axios from "axios";
import { put, takeLatest, select } from "redux-saga/effects";

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

<<<<<<< HEAD
const getDeviceIdFromState = (state) => state.devices.id

function* fetchSingleDeviceByID() {
  try {
    const devices_id = yield select(getDeviceIdFromState);
    const response = yield axios.get(`/api/devices/${devices_id}`)
    yield put({
      type: 'SET_USER_DEVICES_BY_DEVICES_ID',
      payload: response.data,
    });
  } catch (error) {
    console.log('AXIOS | GET items by user error', error)
  }
}
=======
// worker Saga: will be fired on "ADD_DEVICE" actions
function* addDevice(action) {
  try {
    console.log("IN SAGA: ", action.payload)
    // passes the username and password from the payload to the server
    yield axios.post('/api/devices', action.payload);
>>>>>>> main

    // automatically log a user in after registration
    // yield put({ type: 'DEVICE', payload: action.payload });

  } catch (error) {
    console.log('Error with adding device:', error);
  }
}



function* DevicesSaga() {
  yield takeLatest("FETCH_DEVICES", fetchDevices); // not being used. get all devices for all users
<<<<<<< HEAD
  yield takeLatest("FETCH_DEVICES_BY_USER_ID", fetchDevicesByUserId)
  yield takeLatest("FETCH_DEVICES_BY_DEVICES_ID", fetchSingleDeviceByID)


=======
  yield takeLatest("FETCH_DEVICES_BY_USER_ID", fetchDevicesByUserId);
  yield takeLatest('ADD_DEVICE', addDevice);
>>>>>>> main
}

export default DevicesSaga;