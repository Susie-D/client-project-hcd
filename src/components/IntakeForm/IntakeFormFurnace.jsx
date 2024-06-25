import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_intakeForm.scss';

function IntakeFormFurnace (){
   // const dispatch = useDispatch();
   const history = useHistory();
   const dispatch = useDispatch();
   const user = useSelector((store) => store.user);
 
   // Defining a local state to store the user's new crush
   const [filterType, setFilterType] = useState('');
   const [filterSize, setFilterSize] = useState('');
   const [filterBrand, setFilterBrand] = useState('');
   const [mervRating, setMervRating] = useState('');

//    const [value, setFilterType] = useState('');
//    const [value, setFilterSize] = useState('');
//    const [value, setFilterBrand] = useState('');
//    const [value, setMervRating] = useState('');
 
   const handleSubmit = (event) => {
     event.preventDefault();
     const furnace = {
       value,
       devices_id: devices.id,
       properties_id: devices.device_type_id
     };

 // dispatch seperatly or together with base fom?
     dispatch({
       type: 'ADD_DEVICE',
       payload: {
         device: device,
       },
     });
     
   };
 
   return (
     <form className="intake-form column">
       <div className="column">
         <input
           type="text"
           name="filterType"
           placeholder="Filter Type"
           className="row text-m"
           value={value}
           required
           onChange={(event) => setFilterType(event.target.value)}
         />
       </div>
       <div className="column">
         <input
           type="text"
           name="filterSize"
           placeholder="Filter Size"
           className="row text-m"
           value={value}
           required
           onChange={(event) => setFilterSize(event.target.value)}
         />
       </div>
       <div className="column">
         <input
           type="text"
           name="filterBrand"
           placeholder="Filter Brand"
           className="row text-m"
           value={value}
           required
           onChange={(event) => setFilterBrand(event.target.value)}
         />
       </div>
       <div className="column">
         <input
           type="text"
           name="mervRating"
           placeholder="Merv Rating"
           className="row text-m"
           value={value}
           required
           onChange={(event) => setMervRating(event.target.value)}
         />
       </div>
     </form>
   );
}''

export default IntakeFormFurnace;

//Add information about device/item:
// Additional device/item info will be needed depending on what it is (properties and values, i.e)

// Filter Size
// Filter Brand
// Filter Model Number
// MERV rating

// Requirements
// The user should be able to add Input into the Textboxes

// Definition of Done
// The user should be able to add input into the textboxes. The form is mobile friendly.