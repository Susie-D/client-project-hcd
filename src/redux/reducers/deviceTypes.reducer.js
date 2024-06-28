
const deviceTypes = (state = [], action) => {
    switch (action.type) {
        case 'SET_DEVICE_TYPES':
            return action.payload;
        default:
            return state;
    }
};

export default deviceTypes;
