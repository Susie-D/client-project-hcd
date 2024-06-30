import { combineReducers } from "redux";

const devicesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DEVICES':
            return action.payload;
        default:
            return state;
    }
};

const deviceItems = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_DEVICES_BY_USER_ID':
            return action.payload;
        default:
            return state;
    }
};

const deviceProfile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_DEVICES_BY_DEVICES_ID':
            return action.payload.data[0];
        default:
            return state;
    }
};

const deviceType = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DEVICE_TYPE':
            return action.payload;
        default:
            return state;
    }
};

const deviceToAdd = (state = {}, action) => {
    switch (action.type) {
        case '_DEVICE':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    devicesReducer,
    deviceItems,
    deviceType,
    deviceProfile,
    deviceToAdd
});
