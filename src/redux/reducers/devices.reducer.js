import { combineReducers } from "redux";

const devicesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DEVICES':
            console.log('THIS IS MY ACTION.PAYLOAD',action.payload)
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

  export default combineReducers({
    devicesReducer,
    deviceItems,
  });
  