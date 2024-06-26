import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_intakeForm.scss';

function IntakeFormFridge (){
//    // const dispatch = useDispatch();
//    const history = useHistory();
//    const dispatch = useDispatch();
//    const user = useSelector((store) => store.user);
 
//    // Defining a local state to store the user's new crush
//    const [filterModelNumber, setFilterModelNumber] = useState('');
//    const [filterModel, setFilterModel] = useState('');
//    const [mervRating, setMervRating] = useState('');
 
//    const handleSubmit = (event) => {
//      event.preventDefault();
//      const fridge = {
//        value,
//        devices_id: devices.id,
//        properties_id: devices.device_type_id
//      };
 
//      dispatch({
//        type: 'ADD_DEVICE',
//        payload: {
//          device: device,
//        },
//      });
     
//    };
 
//    return (
//      <form className="intake-form column">
//        <div className="column">
//          <input
//            type="text"
//            name="filterModelNumber"
//            placeholder="Water Filter Model Number"
//            className="row text-m"
//            value={value}
//            required
//            onChange={(event) => setFilterModelNumber(event.target.value)}
//          />
//        </div>
//        <div className="column">
//          <input
//            type="text"
//            name="filterModel"
//            placeholder="Air Filter Model Number"
//            className="row text-m"
//            value={value}
//            required
//            onChange={(event) => setFilterModel(event.target.value)}
//          />
//        </div>
//        <div className="column">
//          <input
//            type="text"
//            name="mervRating"
//            placeholder="Merv Rating Desired"
//            className="row text-m"
//            value={value}
//            required
//            onChange={(event) => setMervRating(event.target.value)}
//          />
//        </div>
//      </form>
//    );
}''

export default IntakeFormFridge;

//Add information about device/item:
// Additional device/item info will be needed depending on what it is (properties and values, i.e)
// Filter (water) Model Number
// Air Filter Model Number 
// Merv Rating Desired

// Clean/Inspect Cooling Fins
// Navigate to the Tracking Page upon submission

// Requirements
// The user should be able to add Input into the Textboxes

// Definition of Done
// The user should be able to add input into the textboxes. The form is mobile friendly.