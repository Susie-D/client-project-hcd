import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "ADD_DEVICE" actions
function* addDevice(action) {
  try {

    // passes the username and password from the payload to the server
    yield axios.post('/api/devices', action.payload);

    // automatically log a user in after registration
    // yield put({ type: 'DEVICE', payload: action.payload });

  } catch (error) {
    console.log('Error with adding device:', error);
  }
}

function* deviceSaga() {
  yield takeLatest('ADD_DEVICE', addDevice);
}

export default deviceSaga;
