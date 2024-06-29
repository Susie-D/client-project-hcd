import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { categories } from "../../data/categories";

// not being used. get all devices for all users
function* fetchDeviceTypes() {
  try {
    // let response = yield axios({
    //   method: "GET",
    //   url: "/api/deviceTypes",
    // });
    const mappedCategories = categories.reduce((acc, category) => {
      category.deviceType.forEach(deviceType => {
        acc.push({
          id: category.categoryId,
          name: deviceType.name,
          category_id: category.categoryId,
        });
      });
      return acc;
    }, []);

    yield put({
      type: "SET_DEVICE_TYPES",
      payload: mappedCategories
    });
  } catch (error) {
    console.log("Error with GET device types request:", error);
  }
}

function* DevicesSaga() {
  yield takeLatest("FETCH_DEVICE_TYPES", fetchDeviceTypes);
}

export default DevicesSaga;