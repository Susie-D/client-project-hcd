const devicesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DEVICES':
            console.log('THIS IS MY ACTION.PAYLOAD',action.payload)
            return action.payload;
        default:
            return state;
    }
  };  

  export default devicesReducer;